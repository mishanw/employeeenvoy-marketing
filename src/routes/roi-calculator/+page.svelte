<script lang="ts">
  import { Calculator, TrendingUp, Clock, DollarSign, Percent, Calendar } from '@lucide/svelte';
  import Logo from '$lib/components/Logo.svelte';

  // Reactive state using Svelte 5 runes
  let numClients = $state(15);
  let employeesPerClient = $state(20);
  let monthlyOnboardings = $state(8);
  let monthlyOffboardings = $state(4);
  let hourlyRate = $state(85);

  // Pricing: $4 PEPM - competitive for focused lifecycle automation tool
  // (Full HRIS like BambooHR: $12-22 PEPM, Rippling: $8+ PEPM)
  const PEPM_PRICE = 4;

  // Derived calculations
  const totalEmployees = $derived(numClients * employeesPerClient);
  const hoursPerOnboardingBaseline = 4; // Industry average for manual IT onboarding
  const hoursPerOnboardingWithEnvoy = 1; // With automation
  const hoursSavedPerRequest = hoursPerOnboardingBaseline - hoursPerOnboardingWithEnvoy; // 3 hours
  const monthlyRequests = $derived(monthlyOnboardings + monthlyOffboardings);
  const hoursSavedPerMonth = $derived(monthlyRequests * hoursSavedPerRequest);
  const costSavedPerMonth = $derived(hoursSavedPerMonth * hourlyRate);
  const employeeEnvoyCostPerMonth = $derived(totalEmployees * PEPM_PRICE);
  const netSavingsPerMonth = $derived(costSavedPerMonth - employeeEnvoyCostPerMonth);
  const roiPercentage = $derived(
    employeeEnvoyCostPerMonth > 0 ? (netSavingsPerMonth / employeeEnvoyCostPerMonth) * 100 : 0
  );
  const paybackPeriodMonths = $derived(
    netSavingsPerMonth > 0 ? employeeEnvoyCostPerMonth / netSavingsPerMonth : 999
  );
  const annualSavings = $derived(netSavingsPerMonth * 12);

  // Calculate implied annual turnover rate for context
  const annualTurnoverRate = $derived(
    totalEmployees > 0 ? ((monthlyRequests * 12) / totalEmployees) * 100 : 0
  );

  // Format currency
  function formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  // Format number with commas
  function formatNumber(value: number): string {
    return new Intl.NumberFormat('en-US').format(Math.round(value));
  }

  // Track calculator usage with debouncing to avoid excessive events
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  $effect(() => {
    // Clear previous timer on input change
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Only track meaningful calculations after user stops adjusting inputs
    if (totalEmployees > 0 && monthlyRequests > 0) {
      debounceTimer = setTimeout(() => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'calculator_use', {
            event_category: 'ROI Calculator',
            event_label: 'Calculation',
            value: Math.round(netSavingsPerMonth),
          });
        }
      }, 1500); // Wait 1.5 seconds after last input change
    }

    // Cleanup on unmount
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  });

  // Track CTA clicks
  function trackCTAClick(ctaType: 'demo' | 'trial') {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'roi_calculator_cta', {
        event_category: 'ROI Calculator',
        event_label: ctaType === 'demo' ? 'Book Demo' : 'Start Trial',
        value: Math.round(netSavingsPerMonth),
      });
    }
  }
</script>

<svelte:head>
  <title>ROI Calculator: Calculate Employee Envoy Savings | Employee Envoy</title>
  <meta
    name="description"
    content="Calculate how much time and money your MSP will save with Employee Envoy's automated employee lifecycle management. See your ROI in seconds."
  />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://employeeenvoy.com/roi-calculator" />

  <!-- Open Graph -->
  <meta property="og:title" content="ROI Calculator: Calculate Your Savings | Employee Envoy" />
  <meta
    property="og:description"
    content="See how much time and money your MSP will save with Employee Envoy's automated employee lifecycle management. Calculate your ROI in seconds."
  />
  <meta property="og:url" content="https://employeeenvoy.com/roi-calculator" />
  <meta property="og:image" content="https://employeeenvoy.com/og-roi-calculator.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ROI Calculator: Calculate Your Savings | Employee Envoy" />
  <meta
    name="twitter:description"
    content="Calculate how much time and money your MSP will save with Employee Envoy. See your ROI in seconds."
  />
  <meta name="twitter:image" content="https://employeeenvoy.com/og-roi-calculator.png" />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Employee Envoy ROI Calculator",
    "url": "https://employeeenvoy.com/roi-calculator",
    "description": "Calculate how much time and money your MSP will save with Employee Envoy's automated employee lifecycle management",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "4",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "4",
        "priceCurrency": "USD",
        "unitText": "per employee per month"
      }
    }
  }
  </script>`}
</svelte:head>

<!-- Navigation -->
<nav
  class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/">
        <Logo size="sm" variant="default" />
      </a>
      <div class="flex items-center gap-3">
        <a
          href="/"
          class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
        >
          Back to Home
        </a>
        <a
          href="/contact"
          onclick={() => trackCTAClick('trial')}
          class="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all"
        >
          Start Free Trial
        </a>
      </div>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section
  id="main-content"
  class="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
>
  <div class="max-w-4xl mx-auto text-center">
    <div
      class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-8"
    >
      <Calculator class="w-4 h-4" />
      <span>ROI Calculator</span>
    </div>
    <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
      Calculate Your
      <span class="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"
        >Time & Cost Savings</span
      >
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
      See how much your MSP will save by automating employee onboarding and offboarding with
      Employee Envoy.
    </p>
  </div>
</section>

<!-- Calculator Section -->
<section class="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-6xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Left Column: Inputs -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Your Organization
          </h2>

          <!-- Number of Clients -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Clients Managed
            </label>
            <div class="flex items-center gap-4">
              <input
                type="range"
                bind:value={numClients}
                min="1"
                max="100"
                class="flex-1 h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <input
                type="number"
                bind:value={numClients}
                min="1"
                max="1000"
                class="w-20 px-3 py-2 text-center border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <!-- Employees per Client -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Average Employees per Client
            </label>
            <div class="flex items-center gap-4">
              <input
                type="range"
                bind:value={employeesPerClient}
                min="5"
                max="200"
                class="flex-1 h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <input
                type="number"
                bind:value={employeesPerClient}
                min="1"
                max="5000"
                class="w-20 px-3 py-2 text-center border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <!-- Monthly Onboardings -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monthly Onboarding Requests
            </label>
            <div class="flex items-center gap-4">
              <input
                type="range"
                bind:value={monthlyOnboardings}
                min="0"
                max="50"
                class="flex-1 h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <input
                type="number"
                bind:value={monthlyOnboardings}
                min="0"
                max="500"
                class="w-20 px-3 py-2 text-center border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <!-- Monthly Offboardings -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monthly Offboarding Requests
            </label>
            <div class="flex items-center gap-4">
              <input
                type="range"
                bind:value={monthlyOffboardings}
                min="0"
                max="50"
                class="flex-1 h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <input
                type="number"
                bind:value={monthlyOffboardings}
                min="0"
                max="500"
                class="w-20 px-3 py-2 text-center border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <!-- Hourly Rate -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Hourly IT Staff Rate
            </label>
            <div class="flex items-center gap-4">
              <input
                type="range"
                bind:value={hourlyRate}
                min="50"
                max="300"
                step="10"
                class="flex-1 h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div class="relative w-24">
                <span
                  class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                  >$</span
                >
                <input
                  type="number"
                  bind:value={hourlyRate}
                  min="1"
                  max="1000"
                  class="w-full pl-7 pr-3 py-2 text-center border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Assumptions Box -->
        <div
          class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30"
        >
          <h3 class="font-bold text-gray-900 dark:text-white mb-3">Calculation Assumptions</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Manual onboarding/offboarding: <strong>4 hours</strong> per request</li>
            <li>
              • With Employee Envoy automation: <strong>1 hour</strong> per request (75% reduction)
            </li>
            <li>
              • Time savings: <strong>{hoursSavedPerRequest} hours</strong> per onboarding/offboarding
            </li>
            <li>• Employee Envoy pricing: <strong>$4 PEPM</strong> (per employee per month)</li>
            <li>
              • Your turnover rate: <strong>{annualTurnoverRate.toFixed(0)}%</strong> annual
              <span class="text-xs">(avg: 15-20%)</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Column: Results -->
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your ROI Results</h2>

        <!-- Total Employees Managed -->
        <div
          class="p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 rounded-2xl border border-purple-100 dark:border-purple-800/30"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400"
              >Total Employees Managed</span
            >
            <TrendingUp class="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div class="text-4xl font-bold text-gray-900 dark:text-white">
            {formatNumber(totalEmployees)}
          </div>
        </div>

        <!-- Hours Saved Per Month -->
        <div
          class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400"
              >Hours Saved Per Month</span
            >
            <Clock class="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div class="text-4xl font-bold text-gray-900 dark:text-white">
            {formatNumber(hoursSavedPerMonth)}
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">
            {monthlyRequests} requests × {hoursSavedPerRequest}h saved each
          </p>
        </div>

        <!-- Cost Saved Per Month -->
        <div
          class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-100 dark:border-green-800/30"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400"
              >Cost Saved Per Month</span
            >
            <DollarSign class="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div class="text-4xl font-bold text-gray-900 dark:text-white">
            {formatCurrency(costSavedPerMonth)}
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">
            {formatNumber(hoursSavedPerMonth)}h × ${hourlyRate}/hr
          </p>
        </div>

        <!-- Employee Envoy Cost -->
        <div
          class="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/30"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400"
              >Employee Envoy Cost</span
            >
            <DollarSign class="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div class="text-4xl font-bold text-gray-900 dark:text-white">
            {formatCurrency(employeeEnvoyCostPerMonth)}
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">
            {formatNumber(totalEmployees)} employees × ${PEPM_PRICE} PEPM
          </p>
        </div>

        <!-- Net Savings (Highlighted) -->
        <div
          class="p-8 bg-gradient-to-br {netSavingsPerMonth >= 0
            ? 'from-green-500 to-emerald-600'
            : 'from-slate-600 to-slate-700'} rounded-2xl shadow-2xl"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-semibold text-white/90">Net Savings Per Month</span>
            <TrendingUp class="w-6 h-6 text-white" />
          </div>
          <div class="text-5xl font-bold text-white mb-2">
            {formatCurrency(Math.max(0, netSavingsPerMonth))}
          </div>
          <p class="text-sm text-white/80 mb-4">
            {formatCurrency(costSavedPerMonth)} saved - {formatCurrency(employeeEnvoyCostPerMonth)} cost
          </p>
          {#if netSavingsPerMonth < 0}
            <div class="pt-4 border-t border-white/20">
              <p class="text-sm text-white/90">
                💡 Tip: Increase requests or reduce managed employees to see positive ROI.
                Most MSPs with 10%+ turnover see strong savings.
              </p>
            </div>
          {:else}
            <div class="pt-4 border-t border-white/20">
              <p class="text-lg font-semibold text-white">
                Annual Savings: {formatCurrency(annualSavings)}
              </p>
            </div>
          {/if}
        </div>

        <!-- ROI Percentage -->
        <div
          class="p-6 bg-gradient-to-br {roiPercentage >= 0
            ? 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20'
            : 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20'} rounded-2xl border {roiPercentage >=
          0
            ? 'border-emerald-100 dark:border-emerald-800/30'
            : 'border-red-100 dark:border-red-800/30'}"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">ROI Percentage</span>
            <Percent
              class="w-5 h-5 {roiPercentage >= 0
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-red-600 dark:text-red-400'}"
            />
          </div>
          <div
            class="text-4xl font-bold {roiPercentage >= 0
              ? 'text-emerald-600 dark:text-emerald-400'
              : 'text-red-600 dark:text-red-400'}"
          >
            {roiPercentage >= 0 ? '+' : ''}{roiPercentage.toFixed(0)}%
          </div>
        </div>

        <!-- Payback Period -->
        <div
          class="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/30"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Payback Period</span
            >
            <Calendar class="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div class="text-4xl font-bold text-gray-900 dark:text-white">
            {#if netSavingsPerMonth <= 0}
              N/A
            {:else if paybackPeriodMonths < 1}
              &lt;1
            {:else if paybackPeriodMonths > 12}
              &gt;12
            {:else}
              {paybackPeriodMonths.toFixed(1)}
            {/if}
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">
            {netSavingsPerMonth > 0 ? 'months to break even' : 'increase requests to see payback'}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section
  class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600"
>
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
      See These Savings in Action
    </h2>
    <p class="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
      {#if netSavingsPerMonth > 0}
        Join MSPs and IT teams who are saving
        <strong>{formatNumber(hoursSavedPerMonth)} hours</strong>
        and <strong>{formatCurrency(netSavingsPerMonth)}</strong> every month with Employee Envoy.
      {:else}
        Employee Envoy helps MSPs and IT teams automate employee lifecycle management.
        Talk to us about a plan that fits your organization.
      {/if}
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="https://calendly.com/employeeenvoy/demo"
        target="_blank"
        rel="noopener noreferrer"
        onclick={() => trackCTAClick('demo')}
        class="px-8 py-4 text-lg font-semibold text-amber-600 bg-white rounded-2xl hover:bg-amber-50 transition-colors shadow-xl"
      >
        Book a Demo
      </a>
      <a
        href="/contact"
        onclick={() => trackCTAClick('trial')}
        class="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-colors"
      >
        Start Free Trial
      </a>
    </div>
    <p class="text-sm text-amber-100 mt-6">
      No credit card required • 14-day free trial • Setup in under 10 minutes
    </p>
  </div>
</section>

<!-- Social Proof Section -->
<section class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Trusted by Leading MSPs
      </h3>
      <p class="text-gray-600 dark:text-gray-400">
        Automating employee lifecycles across 189 integrations
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="text-center p-6">
        <div class="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">75%</div>
        <p class="text-gray-600 dark:text-gray-400">Time Reduction</p>
        <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">
          On onboarding and offboarding tasks
        </p>
      </div>
      <div class="text-center p-6">
        <div class="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">189</div>
        <p class="text-gray-600 dark:text-gray-400">Integrations</p>
        <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Connect all your business apps
        </p>
      </div>
      <div class="text-center p-6">
        <div class="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">&lt;1</div>
        <p class="text-gray-600 dark:text-gray-400">Month Payback</p>
        <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Typical ROI for most MSPs
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer
  class="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 border-t border-slate-800"
>
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <Logo size="sm" variant="light" />
      <div class="flex items-center gap-6 text-sm text-gray-400">
        <a href="/privacy" class="hover:text-amber-400 transition-colors">Privacy</a>
        <a href="/terms" class="hover:text-amber-400 transition-colors">Terms</a>
        <a href="/security" class="hover:text-amber-400 transition-colors">Security</a>
        <a href="/contact" class="hover:text-amber-400 transition-colors">Contact</a>
      </div>
    </div>
    <div class="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Employee Envoy. All rights reserved.</p>
    </div>
  </div>
</footer>
