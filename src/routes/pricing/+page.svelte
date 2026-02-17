<script lang="ts">
  import {
    Check,
    X,
    ArrowRight,
    Building2,
    Shield,
    Zap,
    Users,
    Star,
    Clock,
    HelpCircle,
  } from '@lucide/svelte';
  import PricingSection from '$lib/components/PricingSection.svelte';

  // Feature comparison table
  const comparisonFeatures = [
    { name: 'Employees', starter: 'Up to 50', professional: 'Up to 200', enterprise: 'Up to 500' },
    { name: 'Integrations', starter: '189', professional: '189', enterprise: '189' },
    { name: 'Visual Workflow Builder', starter: true, professional: true, enterprise: true },
    { name: 'Playbooks', starter: 'Unlimited', professional: 'Unlimited', enterprise: 'Unlimited' },
    { name: 'Welcome Letters', starter: true, professional: true, enterprise: true },
    { name: 'HRIS Sync', starter: true, professional: true, enterprise: true },
    { name: 'Analytics & CSV Export', starter: true, professional: true, enterprise: true },
    { name: 'Audit Logs', starter: '90 days', professional: '1 year', enterprise: 'Unlimited' },
    { name: 'Multi-Customer Mgmt', starter: false, professional: true, enterprise: true },
    { name: 'SLA Targets & Tracking', starter: false, professional: true, enterprise: true },
    { name: 'Alert Rules (5 channels)', starter: false, professional: true, enterprise: true },
    { name: 'Scheduled Reports', starter: false, professional: true, enterprise: true },
    { name: 'API Access', starter: false, professional: true, enterprise: true },
    { name: 'SSO (Google/MS/Okta)', starter: false, professional: true, enterprise: true },
    { name: 'SCIM 2.0 Provisioning', starter: false, professional: false, enterprise: true },
    { name: 'Integration Health Monitoring', starter: false, professional: false, enterprise: true },
    { name: 'PSA Integration', starter: false, professional: false, enterprise: true },
    { name: 'Ops Dashboard', starter: false, professional: false, enterprise: true },
    { name: 'Support Response', starter: '24 hours', professional: '4 hours', enterprise: 'Priority' },
  ];

  const faqs = [
    {
      question: 'Can I try Employee Envoy before committing?',
      answer: 'Absolutely! Contact our team for a personalized demo and guided setup. We\'ll help you evaluate Employee Envoy with your real workflows.',
    },
    {
      question: 'What counts as an "employee"?',
      answer: 'An employee is any person record you create in Employee Envoy, regardless of whether they are active, pending, or offboarded. Offboarded employees are archived and do not count toward your limit.',
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Absolutely. You can upgrade or downgrade at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the end of your current billing period.',
    },
    {
      question: 'Do you offer MSP-specific pricing?',
      answer: 'Our Professional plan is built for MSPs with multi-customer management, PSA integration, and per-customer playbooks. For MSPs managing 20+ clients, contact us for volume pricing.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, Amex) and can arrange invoicing for Enterprise plans. Payments are processed securely through Stripe.',
    },
    {
      question: 'What if I need to cancel?',
      answer: 'You can cancel anytime. Your data is preserved for 30 days after cancellation so you can re-subscribe and pick up where you left off.',
    },
  ];

  let expandedFaq = $state<number | null>(null);
</script>

<svelte:head>
  <title>Pricing - Employee Envoy | Simple, Transparent Plans</title>
  <meta name="description" content="Employee Envoy pricing plans for MSPs and IT teams. Starting at $199/month. 189 integrations, HRIS sync, analytics, SLA tracking, and alerts included. No per-user fees." />
</svelte:head>

<!-- Pricing Cards (reuse existing component) -->
<PricingSection />

<!-- Feature Comparison Table -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">Compare Plans</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Detailed feature breakdown across all tiers</p>
    </div>

    <div class="overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-700">
      <table class="w-full">
        <thead>
          <tr class="bg-gray-50 dark:bg-slate-800/50">
            <th class="text-left p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
            <th class="text-center p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Starter</th>
            <th class="text-center p-4 text-sm font-semibold text-amber-600 dark:text-amber-400">Professional</th>
            <th class="text-center p-4 text-sm font-semibold text-purple-600 dark:text-purple-400">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {#each comparisonFeatures as feature, i}
            <tr class="border-t border-gray-100 dark:border-slate-800 {i % 2 === 0 ? 'bg-gray-50/50 dark:bg-slate-800/20' : ''}">
              <td class="p-4 text-sm font-medium text-gray-700 dark:text-gray-300">{feature.name}</td>
              {#each ['starter', 'professional', 'enterprise'] as planKey}
                {@const val = feature[planKey as keyof typeof feature]}
                <td class="text-center p-4">
                  {#if typeof val === 'boolean'}
                    {#if val}
                      <Check class="w-5 h-5 text-green-500 dark:text-green-400 mx-auto" />
                    {:else}
                      <X class="w-5 h-5 text-gray-300 dark:text-slate-600 mx-auto" />
                    {/if}
                  {:else}
                    <span class="text-sm text-gray-600 dark:text-gray-300">{val}</span>
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ROI Section -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">The ROI is clear</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Employee Envoy pays for itself from day one</p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50">
        <Clock class="w-8 h-8 text-amber-500 mx-auto mb-3" />
        <div class="text-3xl font-bold text-gray-900 dark:text-white">4.5 hrs</div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Saved per onboarding</p>
      </div>
      <div class="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50">
        <Shield class="w-8 h-8 text-green-500 mx-auto mb-3" />
        <div class="text-3xl font-bold text-gray-900 dark:text-white">&lt; 15 min</div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Access revocation time</p>
      </div>
      <div class="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50">
        <Zap class="w-8 h-8 text-blue-500 mx-auto mb-3" />
        <div class="text-3xl font-bold text-gray-900 dark:text-white">189</div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Integrations ready</p>
      </div>
      <div class="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50">
        <Star class="w-8 h-8 text-purple-500 mx-auto mb-3" />
        <div class="text-3xl font-bold text-gray-900 dark:text-white">100%</div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Audit trail coverage</p>
      </div>
    </div>

    <!-- MSP Callout -->
    <div class="mt-12 p-8 rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200 dark:border-violet-800/30">
      <div class="flex flex-col sm:flex-row items-start gap-6">
        <div class="w-14 h-14 rounded-2xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center flex-shrink-0">
          <Building2 class="w-7 h-7 text-violet-600 dark:text-violet-400" />
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Built for MSPs</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Multi-customer management, PSA integration (ConnectWise, Autotask), per-customer playbooks, and cross-customer dashboards.
            Employee Envoy is purpose-built for Managed Service Providers managing employee lifecycles across multiple client organizations.
          </p>
          <a href="https://app.employeeenvoy.com/signup" class="inline-flex items-center gap-2 mt-4 text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300 transition-colors">
            Get started today
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">Frequently Asked Questions</h2>
    </div>

    <div class="space-y-3">
      {#each faqs as faq, i}
        <div class="rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
          <button
            type="button"
            onclick={() => expandedFaq = expandedFaq === i ? null : i}
            class="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <span class="font-medium text-gray-900 dark:text-white">{faq.question}</span>
            <HelpCircle class="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 {expandedFaq === i ? 'text-amber-500' : ''}" />
          </button>
          {#if expandedFaq === i}
            <div class="px-5 pb-5">
              <p class="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Final CTA -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">Ready to streamline employee lifecycle management?</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
      Get started today. No per-user fees. Cancel anytime.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://app.employeeenvoy.com/signup"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20 text-lg"
      >
        Get Started
        <ArrowRight class="w-5 h-5" />
      </a>
      <a
        href="/contact"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-lg"
      >
        Contact Sales
      </a>
    </div>
  </div>
</section>
