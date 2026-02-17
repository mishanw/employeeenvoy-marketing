<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { CheckCircle, ArrowRight, Mail, Calendar, Shield } from '@lucide/svelte';

  let sessionId = $state('');
  let loading = $state(true);
  let checkoutData = $state<{
    plan?: string;
    interval?: string;
    customerEmail?: string;
  } | null>(null);

  onMount(() => {
    // Get session ID from URL
    sessionId = $page.url.searchParams.get('session_id') || '';

    // In production, you might want to verify the session with the backend
    // For now, we just show the success page
    loading = false;
  });

  const planNames: Record<string, string> = {
    starter: 'Starter',
    professional: 'Professional',
    enterprise: 'Enterprise'
  };
</script>

<svelte:head>
  <title>Welcome to Employee Envoy!</title>
  <meta name="description" content="Your subscription is confirmed. Let's get you started with Employee Envoy." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-green-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
  <!-- Success Header -->
  <div class="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-1/4 w-96 h-96 bg-green-100/50 dark:bg-green-900/20 rounded-full blur-3xl"></div>
      <div class="absolute top-20 right-1/4 w-80 h-80 bg-emerald-100/40 dark:bg-emerald-900/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-3xl mx-auto text-center">
      {#if loading}
        <div class="animate-pulse">
          <div class="w-24 h-24 mx-auto mb-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mx-auto mb-4"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
        </div>
      {:else}
        <!-- Success Icon -->
        <div class="relative inline-flex mb-8">
          <div class="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div class="relative w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
            <CheckCircle class="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Employee Envoy!
        </h1>

        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Your subscription is confirmed. You're now part of a smarter way to manage employee lifecycles.
        </p>

        <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
          <CheckCircle class="w-4 h-4" />
          <span>Subscription active</span>
        </div>
      {/if}
    </div>
  </div>

  <!-- What's Next Section -->
  <div class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        What happens next?
      </h2>

      <div class="grid sm:grid-cols-3 gap-6">
        <!-- Step 1 -->
        <div class="relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg">
          <div class="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
            1
          </div>
          <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4">
            <Mail class="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Check Your Email</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            We've sent you a welcome email with your login credentials and setup instructions.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg">
          <div class="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
            2
          </div>
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
            <Calendar class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Complete Onboarding</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Follow our quick setup wizard to configure your organization and connect your first integrations.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg">
          <div class="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
            3
          </div>
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
            <Shield class="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Start Managing</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Create your first employee request and experience streamlined lifecycle management.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl mx-auto text-center">
      <div class="p-8 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white shadow-2xl shadow-amber-500/30">
        <h3 class="text-2xl font-bold mb-4">Ready to get started?</h3>
        <p class="text-amber-100 mb-6">
          Log in to your new account and begin streamlining your employee transitions.
        </p>
        <a
          href="https://app.employeeenvoy.com/login"
          class="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl group"
        >
          Go to Dashboard
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <p class="mt-8 text-sm text-gray-500 dark:text-gray-400">
        Need help? Contact us at{' '}
        <a href="mailto:support@employeeenvoy.com" class="text-amber-600 hover:text-amber-500">
          support@employeeenvoy.com
        </a>
      </p>
    </div>
  </div>
</div>
