<script lang="ts">
  import { page } from '$app/stores';
  import { Mail, Phone, Building2, Send } from '@lucide/svelte';
  import Logo from '$lib/components/Logo.svelte';

  const planParam = $derived($page.url.searchParams.get('plan') || '');

  let formData = $state({
    name: '',
    email: '',
    company: '',
    phone: '',
    plan: 'enterprise',
    message: '',
    subject: 'General Inquiry',
    // Honeypot field - bots will fill this, humans won't see it
    website: '',
    // Timestamp for time-based validation
    _ts: Date.now().toString()
  });

  // Update plan when URL param changes
  $effect(() => {
    if (planParam) {
      formData.plan = planParam;
    }
  });

  let errors = $state<Record<string, string>>({});
  let isSubmitting = $state(false);
  let submitted = $state(false);
  let submitError = $state('');

  function validate() {
    errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.company.trim()) {
      errors.company = 'Company name is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return Object.keys(errors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;

    // Check honeypot - if filled, silently "succeed" but don't submit
    if (formData.website) {
      // Fake success for bots
      await new Promise(r => setTimeout(r, 1000));
      submitted = true;
      return;
    }

    isSubmitting = true;
    submitError = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _ts: formData._ts // Include timestamp for server validation
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      submitted = true;
    } catch (err) {
      console.error('Form submission error:', err);
      submitError = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact Us - Employee Envoy</title>
  <meta name="description" content="Get in touch with Employee Envoy. Start your free trial, request a demo, or ask questions about employee lifecycle management." />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://employeeenvoy.com/contact" />

  <!-- Open Graph -->
  <meta property="og:title" content="Contact Employee Envoy" />
  <meta property="og:description" content="Get in touch with us. Start your free trial, request a demo, or ask questions about employee lifecycle management." />
  <meta property="og:url" content="https://employeeenvoy.com/contact" />
  <meta property="og:image" content="https://employeeenvoy.com/og-image.png" />

  <!-- Twitter Card -->
  <meta name="twitter:title" content="Contact Employee Envoy" />
  <meta name="twitter:description" content="Get in touch with us. Start your free trial or request a demo." />
  <meta name="twitter:image" content="https://employeeenvoy.com/og-image.png" />
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/">
        <Logo size="sm" variant="default" />
      </a>
      <a
        href="/"
        class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
      >
        ← Back to Home
      </a>
    </div>
  </div>
</nav>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Get in Touch
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Have questions? We're here to help. Reach out and we'll get back to you within 24 hours.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Contact Info -->
      <div>
        <div class="space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-8">
              Prefer to reach out directly? Use the information below or fill out the form.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                <Mail class="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <a href="mailto:hello@employeeenvoy.com" class="text-amber-600 dark:text-amber-400 hover:underline">
                  hello@employeeenvoy.com
                </a>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">General inquiries</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                <Building2 class="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Sales</h3>
                <a href="mailto:sales@employeeenvoy.com" class="text-amber-600 dark:text-amber-400 hover:underline">
                  sales@employeeenvoy.com
                </a>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Enterprise plans & custom solutions</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Enterprise Sales</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Need a custom plan or on-premise deployment? Our sales team can help design a solution that fits your needs.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div>
        <div class="bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-200 dark:border-slate-700 p-8">
          {#if submitted}
            <div class="text-center py-12">
              <div class="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <Send class="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Message Sent!
              </h2>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                We'll get back to you within 24 hours.
              </p>
              <button
                onclick={() => submitted = false}
                class="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all"
              >
                Send Another Message
              </button>
            </div>
          {:else}
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h2>

            <form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="space-y-6">
              <!-- Honeypot field - hidden from humans, bots will fill it -->
              <div class="absolute -left-[9999px]" aria-hidden="true">
                <label for="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  bind:value={formData.website}
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>
              <!-- Hidden timestamp -->
              <input type="hidden" name="_ts" bind:value={formData._ts} />

              {#if submitError}
                <div class="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <p class="text-sm text-red-600 dark:text-red-400">{submitError}</p>
                </div>
              {/if}

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  bind:value={formData.subject}
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Sales">Sales / Enterprise Plan</option>
                  <option value="Support">Technical Support</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent {errors.name ? 'border-red-500' : ''}"
                  placeholder="John Smith"
                />
                {#if errors.name}
                  <p class="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                {/if}
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent {errors.email ? 'border-red-500' : ''}"
                  placeholder="john@company.com"
                />
                {#if errors.email}
                  <p class="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                {/if}
              </div>

              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  bind:value={formData.company}
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent {errors.company ? 'border-red-500' : ''}"
                  placeholder="Acme Corporation"
                />
                {#if errors.company}
                  <p class="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
                {/if}
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  bind:value={formData.message}
                  rows="6"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent {errors.message ? 'border-red-500' : ''}"
                  placeholder="Tell us how we can help..."
                ></textarea>
                {#if errors.message}
                  <p class="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                {/if}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                class="w-full px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {#if isSubmitting}
                  <span>Sending...</span>
                {:else}
                  <span>Send Message</span>
                  <Send class="w-5 h-5" />
                {/if}
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
