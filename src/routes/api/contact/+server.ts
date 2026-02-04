import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { RequestHandler } from './$types';

// Spam detection patterns
const SPAM_PATTERNS = [
  /SEO/i,
  /search engine optimization/i,
  /rank higher/i,
  /google ranking/i,
  /backlink/i,
  /link building/i,
  /web traffic/i,
  /digital marketing/i,
  /marketing agency/i,
  /increase your sales/i,
  /boost your business/i,
  /free consultation/i,
  /limited time offer/i,
  /act now/i,
  /casino/i,
  /cryptocurrency/i,
  /bitcoin/i,
  /forex/i,
  /weight loss/i,
  /viagra/i,
  /cialis/i,
];

// Suspicious email domain patterns
const SUSPICIOUS_DOMAINS = [
  /\.ru$/i,
  /\.cn$/i,
  /tempmail/i,
  /guerrillamail/i,
  /mailinator/i,
  /10minutemail/i,
  /throwaway/i,
];

function isSpamMessage(message: string, email: string): { isSpam: boolean; reason?: string } {
  // Check message for spam patterns
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(message)) {
      return { isSpam: true, reason: 'spam_content' };
    }
  }

  // Check email domain
  const domain = email.split('@')[1]?.toLowerCase() || '';
  for (const pattern of SUSPICIOUS_DOMAINS) {
    if (pattern.test(domain)) {
      return { isSpam: true, reason: 'suspicious_domain' };
    }
  }

  // Check for excessive URLs in message
  const urlCount = (message.match(/https?:\/\//gi) || []).length;
  if (urlCount > 2) {
    return { isSpam: true, reason: 'too_many_urls' };
  }

  return { isSpam: false };
}

export const POST: RequestHandler = async ({ request, platform, getClientAddress }) => {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message, plan, website, _ts } = body;

    // 1. Honeypot check - if website field is filled, it's a bot
    if (website) {
      // Return fake success to not alert the bot
      console.log('Bot detected: honeypot triggered');
      return json({ success: true, messageId: 'blocked' });
    }

    // 2. Time-based validation - form submitted too fast (less than 3 seconds)
    if (_ts) {
      const submissionTime = Date.now() - parseInt(_ts, 10);
      if (submissionTime < 3000) {
        console.log('Bot detected: form submitted too fast', submissionTime, 'ms');
        return json({ success: true, messageId: 'blocked' });
      }
    }

    // Validate required fields
    if (!name || !email || !company || !message) {
      return json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ error: 'Invalid email address' }, { status: 400 });
    }

    // 3. Spam content check
    const spamCheck = isSpamMessage(message, email);
    if (spamCheck.isSpam) {
      console.log('Spam detected:', spamCheck.reason, 'from', email);
      // Return fake success to not alert spammers
      return json({ success: true, messageId: 'blocked' });
    }

    // 4. Basic rate limiting using Cloudflare KV (if available)
    const clientIP = getClientAddress();
    const rateLimitKey = `contact_ratelimit:${clientIP}`;

    if (platform?.env?.RATE_LIMIT_KV) {
      const lastSubmission = await platform.env.RATE_LIMIT_KV.get(rateLimitKey);
      if (lastSubmission) {
        const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission, 10);
        // Allow 1 submission per minute
        if (timeSinceLastSubmission < 60000) {
          console.log('Rate limited:', clientIP);
          return json({ error: 'Please wait before submitting again' }, { status: 429 });
        }
      }
      // Store this submission time
      await platform.env.RATE_LIMIT_KV.put(rateLimitKey, Date.now().toString(), { expirationTtl: 300 });
    }

    // Get Resend API key from environment
    const resendApiKey = platform?.env?.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      return json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    // Sanitize inputs to prevent XSS in emails
    const sanitize = (str: string) => str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeCompany = sanitize(company);
    const safePhone = phone ? sanitize(phone) : '';
    const safeSubject = sanitize(subject);
    const safeMessage = sanitize(message);
    const safePlan = plan ? sanitize(plan) : '';

    // Send email to the team
    const { data, error } = await resend.emails.send({
      from: 'Employee Envoy <noreply@employeeenvoy.com>',
      to: ['hello@employeeenvoy.com'],
      replyTo: email,
      subject: `[Contact Form] ${safeSubject} - from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>

          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 120px;"><strong>Subject:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${safeSubject}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Name:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Email:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="mailto:${safeEmail}" style="color: #f59e0b;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Company:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${safeCompany}</td>
              </tr>
              ${safePhone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Phone:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${safePhone}</td>
              </tr>
              ` : ''}
              ${safePlan ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Plan Interest:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${safePlan}</td>
              </tr>
              ` : ''}
            </table>

            <div style="margin-top: 24px;">
              <h3 style="color: #374151; margin: 0 0 12px 0;">Message:</h3>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; white-space: pre-wrap;">${safeMessage}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
              <p style="margin: 0;">This email was sent from the Employee Envoy contact form.</p>
              <p style="margin: 8px 0 0 0;">Reply directly to this email to respond to ${safeName}.</p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Subject: ${subject}
Name: ${name}
Email: ${email}
Company: ${company}
${phone ? `Phone: ${phone}` : ''}
${plan ? `Plan Interest: ${plan}` : ''}

Message:
${message}

---
This email was sent from the Employee Envoy contact form.
Reply directly to this email to respond to ${name}.
      `.trim()
    });

    if (error) {
      console.error('Resend error:', error);
      return json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Employee Envoy <noreply@employeeenvoy.com>',
      to: [email],
      subject: 'We received your message - Employee Envoy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Us!</h1>
          </div>

          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
              Hi ${safeName},
            </p>

            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
              Thank you for reaching out to Employee Envoy! We've received your message and our team will get back to you within 24 hours.
            </p>

            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
              In the meantime, feel free to explore our website to learn more about how we can help streamline your employee lifecycle management.
            </p>

            <div style="background: #fffbeb; border: 1px solid #fcd34d; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>Your message summary:</strong><br>
                Subject: ${safeSubject}<br>
                Company: ${safeCompany}
              </p>
            </div>

            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">
              Best regards,<br>
              <strong>The Employee Envoy Team</strong>
            </p>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
              <p style="margin: 0;">
                Questions? Reply to this email or contact us at <a href="mailto:hello@employeeenvoy.com" style="color: #f59e0b;">hello@employeeenvoy.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
Hi ${name},

Thank you for reaching out to Employee Envoy! We've received your message and our team will get back to you within 24 hours.

In the meantime, feel free to explore our website to learn more about how we can help streamline your employee lifecycle management.

Your message summary:
- Subject: ${subject}
- Company: ${company}

Best regards,
The Employee Envoy Team

---
Questions? Reply to this email or contact us at hello@employeeenvoy.com
      `.trim()
    });

    return json({ success: true, messageId: data?.id });
  } catch (err) {
    console.error('Contact form error:', err);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
};
