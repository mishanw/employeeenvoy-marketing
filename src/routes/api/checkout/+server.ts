/**
 * Copyright (c) 2026 Employee Envoy. All rights reserved.
 * Checkout API endpoint for marketing site
 * Creates checkout sessions with Polar.sh
 */

import { json } from '@sveltejs/kit';
import { Polar } from '@polar-sh/sdk';
import type { RequestHandler } from './$types';

// Valid plans that can be checked out
const VALID_PLANS = ['starter', 'professional', 'enterprise'] as const;
type PlanId = typeof VALID_PLANS[number];

// Valid billing intervals
const VALID_INTERVALS = ['monthly', 'annual'] as const;
type BillingInterval = typeof VALID_INTERVALS[number];

// Plan configuration - prices in cents
const PLAN_CONFIG: Record<PlanId, {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  employeeLimit: number;
}> = {
  starter: {
    name: 'Starter',
    monthlyPrice: 19900,
    annualPrice: 199000,
    employeeLimit: 50
  },
  professional: {
    name: 'Professional',
    monthlyPrice: 39900,
    annualPrice: 399000,
    employeeLimit: 200
  },
  enterprise: {
    name: 'Enterprise',
    monthlyPrice: 79900,
    annualPrice: 799000,
    employeeLimit: 500
  }
};

// Discount codes
const DISCOUNT_CODES: Record<string, { percent: number; description: string }> = {
  EARLYACCESS30: { percent: 30, description: '30% off first year' },
  FOUNDER50: { percent: 50, description: '50% off lifetime' }
};

export const POST: RequestHandler = async ({ request, platform, url }) => {
  try {
    const body = await request.json();
    const { plan, interval, email, discountCode } = body as {
      plan?: string;
      interval?: string;
      email?: string;
      discountCode?: string;
    };

    // Validate plan
    if (!plan || !VALID_PLANS.includes(plan as PlanId)) {
      return json(
        { error: 'Invalid plan', validPlans: VALID_PLANS },
        { status: 400 }
      );
    }

    // Validate interval
    const billingInterval: BillingInterval = interval === 'annual' ? 'annual' : 'monthly';

    // Get Polar credentials from environment
    const accessToken = platform?.env?.POLAR_ACCESS_TOKEN;
    const organizationId = platform?.env?.POLAR_ORGANIZATION_ID;
    const environment = platform?.env?.POLAR_ENVIRONMENT || 'sandbox';

    if (!accessToken || !organizationId) {
      console.error('Polar credentials not configured');
      return json(
        { error: 'Payment provider not configured' },
        { status: 500 }
      );
    }

    // Initialize Polar client
    const polar = new Polar({
      accessToken,
      server: environment === 'production' ? 'production' : 'sandbox'
    });

    // Get plan configuration
    const planConfig = PLAN_CONFIG[plan as PlanId];
    const price = billingInterval === 'annual' ? planConfig.annualPrice : planConfig.monthlyPrice;

    // Apply discount if valid
    let finalPrice = price;
    let appliedDiscount: { code: string; percent: number } | undefined;

    if (discountCode) {
      const discount = DISCOUNT_CODES[discountCode.toUpperCase()];
      if (discount) {
        finalPrice = Math.round(price * (1 - discount.percent / 100));
        appliedDiscount = { code: discountCode.toUpperCase(), percent: discount.percent };
      }
    }

    // Build success/cancel URLs
    const origin = url.origin || 'https://employeeenvoy.com';
    const successUrl = `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/checkout/cancel`;

    // Create checkout session
    // Note: In production, you would use pre-configured product/price IDs from Polar
    // For now, we create a checkout with the organization's products
    const checkout = await polar.checkouts.create({
      productPriceId: getProductPriceId(plan as PlanId, billingInterval, environment),
      successUrl,
      customerEmail: email,
      metadata: {
        plan,
        interval: billingInterval,
        source: 'marketing_site',
        discountCode: appliedDiscount?.code || null
      }
    });

    return json({
      checkoutUrl: checkout.url,
      sessionId: checkout.id,
      plan,
      interval: billingInterval,
      price: finalPrice,
      discount: appliedDiscount
    });
  } catch (error) {
    console.error('Checkout error:', error);

    // Handle specific Polar errors
    if (error instanceof Error) {
      if (error.message.includes('product')) {
        return json(
          { error: 'Selected plan is not available. Please try again or contact support.' },
          { status: 400 }
        );
      }
    }

    return json(
      { error: 'Failed to create checkout session. Please try again.' },
      { status: 500 }
    );
  }
};

/**
 * Get the Polar product price ID for a plan and interval
 * These IDs should be configured in your Polar dashboard and stored in env vars
 */
function getProductPriceId(plan: PlanId, interval: BillingInterval, environment: string): string {
  // In production, these would be actual Polar price IDs from your dashboard
  // Format: POLAR_PRICE_<PLAN>_<INTERVAL>
  // Example: POLAR_PRICE_STARTER_MONTHLY=price_xxx

  const envKey = `POLAR_PRICE_${plan.toUpperCase()}_${interval.toUpperCase()}`;

  // For sandbox/development, use placeholder IDs
  // These should be replaced with actual IDs from your Polar dashboard
  const fallbackIds: Record<string, string> = {
    // Sandbox IDs - replace with your actual Polar price IDs
    'starter_monthly': 'price_starter_monthly_sandbox',
    'starter_annual': 'price_starter_annual_sandbox',
    'professional_monthly': 'price_professional_monthly_sandbox',
    'professional_annual': 'price_professional_annual_sandbox',
    'enterprise_monthly': 'price_enterprise_monthly_sandbox',
    'enterprise_annual': 'price_enterprise_annual_sandbox'
  };

  // Return env var if set, otherwise fallback
  const priceId = process.env[envKey] || fallbackIds[`${plan}_${interval}`];

  if (!priceId) {
    throw new Error(`Price ID not configured for ${plan} ${interval}`);
  }

  return priceId;
}
