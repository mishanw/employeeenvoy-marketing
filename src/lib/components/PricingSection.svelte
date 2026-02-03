<script lang="ts">
  import { Check, CheckCircle2, Star } from "@lucide/svelte";

  // Billing interval state
  let billingInterval = $state<"monthly" | "annual">("monthly");

  // Plan configuration
  const plans = {
    starter: {
      id: "starter",
      name: "Starter",
      description: "For small teams",
      monthlyPrice: 199,
      annualPrice: 1990,
      employeeLimit: 50,
      features: [
        "All 127 integrations",
        "Unlimited playbooks",
        "Welcome letter portal",
        "Email support (24hr response)",
        "Audit logs (90 days)",
      ],
      popular: false,
    },
    professional: {
      id: "professional",
      name: "Professional",
      description: "For MSPs, IT teams & growing businesses",
      monthlyPrice: 399,
      annualPrice: 3990,
      employeeLimit: 200,
      features: [
        "Everything in Starter",
        "Multi-customer management (MSP)",
        "API access",
        "Priority support (4hr response)",
        "SSO (Google/Microsoft/Okta)",
      ],
      popular: true,
    },
    enterprise: {
      id: "enterprise",
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 799,
      annualPrice: 7990,
      employeeLimit: 500,
      features: [
        "Everything in Professional",
        "SCIM user provisioning",
        "Dedicated account manager",
        "99.9% SLA guarantee",
        "Audit logs (unlimited)",
        "Operations dashboard & health monitoring",
      ],
      popular: false,
    },
  };

  // Calculate price based on interval
  function getPrice(plan: typeof plans.starter): number {
    return billingInterval === "annual" ? plan.annualPrice : plan.monthlyPrice;
  }

  // Calculate monthly equivalent for annual
  function getMonthlyEquivalent(plan: typeof plans.starter): number {
    return Math.round(plan.annualPrice / 12);
  }
</script>

<section
  id="pricing"
  class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
>
  <!-- Background decoration -->
  <div
    class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-3xl"
  ></div>
  <div
    class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-orange-100/30 to-transparent rounded-full blur-3xl"
  ></div>

  <div class="relative max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4"
      >
        <Star class="w-4 h-4" />
        <span>Transparent Pricing</span>
      </div>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
      >
        Simple, Transparent Pricing
      </h2>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
      >
        No per-user fees. No surprise charges. Pick your bucket and go.
      </p>

      <!-- Billing Toggle -->
      <div
        class="inline-flex items-center gap-4 p-1.5 bg-gray-100 dark:bg-slate-800 rounded-xl"
      >
        <button
          type="button"
          onclick={() => (billingInterval = "monthly")}
          class="px-6 py-2.5 rounded-lg text-sm font-medium transition-all {billingInterval ===
          'monthly'
            ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}"
        >
          Monthly
        </button>
        <button
          type="button"
          onclick={() => (billingInterval = "annual")}
          class="px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 {billingInterval ===
          'annual'
            ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}"
        >
          Annual
          <span
            class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-full font-semibold"
          >
            Save 2 months
          </span>
        </button>
      </div>
    </div>

    <div
      class="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-2 md:py-4"
    >
      <!-- Starter Plan -->
      <div
        class="group relative glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl hover:-translate-y-1 transition-all duration-300 border-2 border-gray-100 dark:border-slate-700/50"
      >
        <div class="mb-6 sm:mb-8">
          <h3
            class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1"
          >
            {plans.starter.name}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm mb-3 sm:mb-4">
            {plans.starter.description}
          </p>
          <div class="flex items-baseline gap-2">
            {#if billingInterval === "annual"}
              <span
                class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
                >${getMonthlyEquivalent(plans.starter)}</span
              >
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            {:else}
              <span
                class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
                >${plans.starter.monthlyPrice}</span
              >
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            {/if}
          </div>
          {#if billingInterval === "annual"}
            <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Billed ${plans.starter.annualPrice}/year
            </p>
          {/if}
          <p
            class="text-sm text-amber-600 dark:text-amber-400 font-medium mt-2"
          >
            Up to {plans.starter.employeeLimit} employees
          </p>
        </div>
        <ul class="space-y-4 mb-8">
          {#each plans.starter.features as feature}
            <li class="flex items-start gap-3">
              <div
                class="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-3 h-3 text-green-600 dark:text-green-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          {/each}
        </ul>
        <a
          href="/contact?plan=starter"
          class="block w-full text-center px-6 py-4 font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-slate-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-all border border-gray-200 dark:border-slate-600"
        >
          Start Free Trial
        </a>
      </div>

      <!-- Professional Plan (Popular) -->
      <div class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"
        ></div>
        <div
          class="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white border-2 border-amber-400/50 shadow-2xl shadow-amber-500/20 transform lg:scale-105 hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5"
          >
            <Star class="w-4 h-4 fill-current" />
            Most Popular
          </div>
          <div class="mb-8 mt-2">
            <h3 class="text-2xl font-bold mb-1">{plans.professional.name}</h3>
            <p class="text-amber-100 text-sm mb-4">
              {plans.professional.description}
            </p>
            <div class="flex items-baseline gap-2">
              {#if billingInterval === "annual"}
                <span class="text-5xl font-bold"
                  >${getMonthlyEquivalent(plans.professional)}</span
                >
                <span class="text-amber-100">/month</span>
              {:else}
                <span class="text-5xl font-bold"
                  >${plans.professional.monthlyPrice}</span
                >
                <span class="text-amber-100">/month</span>
              {/if}
            </div>
            {#if billingInterval === "annual"}
              <p class="text-xs text-amber-200 mt-1">
                Billed ${plans.professional.annualPrice}/year
              </p>
            {/if}
            <p class="text-sm text-white font-medium mt-2">
              Up to {plans.professional.employeeLimit} employees
            </p>
          </div>
          <ul class="space-y-4 mb-8">
            {#each plans.professional.features as feature}
              <li class="flex items-start gap-3">
                <div
                  class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <Check class="w-3 h-3 text-white" />
                </div>
                <span>{feature}</span>
              </li>
            {/each}
          </ul>
          <a
            href="/contact?plan=professional"
            class="block w-full text-center px-6 py-4 font-bold text-amber-600 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl"
          >
            Start Free Trial
          </a>
        </div>
      </div>

      <!-- Enterprise Plan -->
      <div
        class="group relative glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl hover:-translate-y-1 transition-all duration-300 border-2 border-gray-100 dark:border-slate-700/50"
      >
        <div class="mb-6 sm:mb-8">
          <h3
            class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1"
          >
            {plans.enterprise.name}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm mb-3 sm:mb-4">
            {plans.enterprise.description}
          </p>
          <div class="flex items-baseline gap-2">
            {#if billingInterval === "annual"}
              <span
                class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
                >${getMonthlyEquivalent(plans.enterprise)}</span
              >
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            {:else}
              <span
                class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
                >${plans.enterprise.monthlyPrice}</span
              >
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            {/if}
          </div>
          {#if billingInterval === "annual"}
            <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Billed ${plans.enterprise.annualPrice}/year
            </p>
          {/if}
          <p
            class="text-sm text-amber-600 dark:text-amber-400 font-medium mt-2"
          >
            Up to {plans.enterprise.employeeLimit} employees
          </p>
        </div>
        <ul class="space-y-4 mb-8">
          {#each plans.enterprise.features as feature}
            <li class="flex items-start gap-3">
              <div
                class="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-3 h-3 text-green-600 dark:text-green-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          {/each}
        </ul>
        <a
          href="/contact?plan=enterprise"
          class="block w-full text-center px-6 py-4 font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl hover:from-amber-400 hover:to-orange-400 shadow-lg hover:shadow-xl transition-all"
        >
          Start Free Trial
        </a>
      </div>
    </div>

    <!-- Pricing Notes -->
    <div class="mt-14 text-center">
      <div
        class="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-gray-600 dark:text-gray-400 mb-4"
      >
        <div class="flex items-center gap-2">
          <CheckCircle2 class="w-5 h-5 text-green-500" />
          <span>14-day free trial</span>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle2 class="w-5 h-5 text-green-500" />
          <span>No credit card required</span>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle2 class="w-5 h-5 text-green-500" />
          <span>Cancel anytime</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-500">
        {#if billingInterval === "monthly"}
          Switch to annual billing to <span
            class="font-bold text-amber-600 dark:text-amber-400"
            >save 2 months free</span
          >
        {:else}
          You're saving <span
            class="font-bold text-amber-600 dark:text-amber-400"
            >2 months free</span
          > with annual billing!
        {/if}
      </p>
    </div>
  </div>
</section>
