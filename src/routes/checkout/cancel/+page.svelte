<script lang="ts">
  import { XCircle, ArrowLeft, MessageCircle, HelpCircle } from '@lucide/svelte';
</script>

<svelte:head>
  <title>Checkout Cancelled - Employee Envoy</title>
  <meta name="description" content="Your checkout was cancelled. No worries - your card was not charged." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
  <!-- Header -->
  <div class="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-1/4 w-96 h-96 bg-gray-100/50 dark:bg-gray-900/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-3xl mx-auto text-center">
      <!-- Cancel Icon -->
      <div class="relative inline-flex mb-8">
        <div class="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
          <XCircle class="w-12 h-12 text-gray-400 dark:text-gray-500" />
        </div>
      </div>

      <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Checkout Cancelled
      </h1>

      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
        No worries! Your payment was not processed and your card was not charged.
      </p>

      <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm">
        <HelpCircle class="w-4 h-4" />
        <span>Changed your mind? We're here to help.</span>
      </div>
    </div>
  </div>

  <!-- Options Section -->
  <div class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        What would you like to do?
      </h2>

      <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <!-- Return to Pricing -->
        <a
          href="/#pricing"
          class="group p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-600 transition-all"
        >
          <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ArrowLeft class="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Return to Pricing</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Review our plans again and choose the best option for your team.
          </p>
        </a>

        <!-- Contact Sales -->
        <a
          href="/contact?subject=pricing-question"
          class="group p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all"
        >
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MessageCircle class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Talk to Us</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Have questions? Our team is happy to discuss your needs and find the right solution.
          </p>
        </a>
      </div>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Common Questions
      </h2>

      <div class="space-y-4">
        <div class="p-6 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            Was my card charged?
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            No. Since the checkout was cancelled, your payment method was not charged. You can safely close this page.
          </p>
        </div>

        <div class="p-6 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            Can I see a demo before committing?
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Absolutely! Contact our team for a personalized demo and guided setup. We'll walk you through the features relevant to your business.
          </p>
        </div>

        <div class="p-6 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            Do you offer custom pricing?
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            For organizations with more than 500 employees or specific requirements, we offer custom enterprise plans. <a href="/contact?subject=enterprise" class="text-amber-600 hover:text-amber-500">Contact us</a> to discuss your needs.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer CTA -->
  <div class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl mx-auto text-center">
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        Ready to give it another try?
      </p>
      <a
        href="/#pricing"
        class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl"
      >
        View Pricing Plans
      </a>
    </div>
  </div>
</div>
