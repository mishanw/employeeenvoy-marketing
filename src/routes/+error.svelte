<script lang="ts">
  import { page } from "$app/stores";
  import { ArrowRight, Home, Search, HelpCircle } from "@lucide/svelte";
</script>

<svelte:head>
  <title>Page Not Found - Employee Envoy</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto text-center">
    <!-- Error code -->
    <p class="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-4 font-heading">
      {$page.status}
    </p>

    <!-- Message -->
    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
      {#if $page.status === 404}
        Page not found
      {:else}
        Something went wrong
      {/if}
    </h1>

    <p class="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
      {#if $page.status === 404}
        The page you're looking for doesn't exist or has been moved. Here are some helpful links instead.
      {:else if $page.error?.message}
        {$page.error.message}
      {:else}
        An unexpected error occurred. Please try again or head back to the homepage.
      {/if}
    </p>

    <!-- Navigation options -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="/"
        class="group w-full sm:w-auto px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
      >
        <Home class="w-5 h-5" />
        Back to Homepage
      </a>
      <a
        href="/contact"
        class="group w-full sm:w-auto px-6 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-slate-700 rounded-xl hover:border-amber-400 transition-all flex items-center justify-center gap-2"
      >
        <HelpCircle class="w-5 h-5 text-amber-500" />
        Contact Us
      </a>
    </div>

    <!-- Quick links -->
    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Popular pages</p>
      <div class="flex flex-wrap justify-center gap-3">
        <a href="/#features" class="text-sm text-amber-600 dark:text-amber-400 hover:underline">Features</a>
        <span class="text-gray-300 dark:text-gray-600">&middot;</span>
        <a href="/#pricing" class="text-sm text-amber-600 dark:text-amber-400 hover:underline">Pricing</a>
        <span class="text-gray-300 dark:text-gray-600">&middot;</span>
        <a href="/integrations" class="text-sm text-amber-600 dark:text-amber-400 hover:underline">Integrations</a>
        <span class="text-gray-300 dark:text-gray-600">&middot;</span>
        <a href="/security" class="text-sm text-amber-600 dark:text-amber-400 hover:underline">Security</a>
        <span class="text-gray-300 dark:text-gray-600">&middot;</span>
        <a href="/roi-calculator" class="text-sm text-amber-600 dark:text-amber-400 hover:underline">ROI Calculator</a>
      </div>
    </div>
  </div>
</div>
