<script lang="ts">
  import { onMount } from "svelte";
  import {
    Check,
    X,
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    Users,
    Zap,
    Building2,
    DollarSign,
    TrendingUp,
    Shield,
  } from "@lucide/svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let mounted = $state(false);
  let scrollY = $state(0);

  onMount(() => {
    mounted = true;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  interface ComparisonRow {
    feature: string;
    envoy: "yes" | "no" | "partial";
    rippling: "yes" | "no" | "partial";
    description?: string;
  }

  const comparisonData: ComparisonRow[] = [
    {
      feature: "Multi-Tenant MSP Architecture",
      envoy: "yes",
      rippling: "no",
      description: "Manage multiple client organizations in one dashboard",
    },
    {
      feature: "PSA Integration (ConnectWise, Autotask)",
      envoy: "yes",
      rippling: "no",
      description: "Auto-create tickets and sync status bidirectionally",
    },
    {
      feature: "Visual Workflow Builder",
      envoy: "yes",
      rippling: "no",
      description: "67 employee-specific workflow nodes",
    },
    {
      feature: "Google Workspace Actions",
      envoy: "yes",
      rippling: "partial",
      description: "12 actions including drive transfer, calendar delegation",
    },
    {
      feature: "MDM Integration Depth",
      envoy: "yes",
      rippling: "partial",
      description: "Full device lifecycle with Jamf, Intune, Kandji",
    },
    {
      feature: "SCIM 2.0 Provisioning",
      envoy: "yes",
      rippling: "yes",
      description: "Both support full SCIM implementation",
    },
    {
      feature: "Welcome Letter Templates",
      envoy: "yes",
      rippling: "no",
      description: "Advanced editor with branding and custom sections",
    },
    {
      feature: "Manager Prep Checklists",
      envoy: "yes",
      rippling: "no",
      description: "Smart reminders for hiring managers",
    },
    {
      feature: "IT-First Approach",
      envoy: "yes",
      rippling: "partial",
      description: "Purpose-built for IT teams managing employee lifecycle",
    },
    {
      feature: "Number of Integrations",
      envoy: "partial",
      rippling: "yes",
      description: "Employee Envoy: 189 (IT-focused), Rippling: 600+",
    },
    {
      feature: "MSP-Friendly Pricing",
      envoy: "yes",
      rippling: "no",
      description: "Volume discounts for MSPs managing multiple clients",
    },
    {
      feature: "Target Market Focus",
      envoy: "yes",
      rippling: "no",
      description: "Employee Envoy: MSPs | Rippling: Direct employers",
    },
  ];

  function getIcon(
    value: "yes" | "no" | "partial",
  ): typeof Check | typeof X | typeof AlertTriangle {
    if (value === "yes") return Check;
    if (value === "no") return X;
    return AlertTriangle;
  }

  function getIconClass(value: "yes" | "no" | "partial"): string {
    if (value === "yes") return "text-green-600 dark:text-green-400";
    if (value === "no") return "text-red-600 dark:text-red-400";
    return "text-yellow-600 dark:text-yellow-400";
  }

  function getIconBgClass(value: "yes" | "no" | "partial"): string {
    if (value === "yes") return "bg-green-100 dark:bg-green-900/30";
    if (value === "no") return "bg-red-100 dark:bg-red-900/30";
    return "bg-yellow-100 dark:bg-yellow-900/30";
  }
</script>

<svelte:head>
  <title>Employee Envoy vs. Rippling: Which is Better for MSPs?</title>
  <meta
    name="description"
    content="Compare Employee Envoy and Rippling for MSPs. Learn why Employee Envoy's multi-tenant architecture and PSA integration make it the better choice for IT consultants managing multiple clients."
  />
  <meta
    name="keywords"
    content="Rippling alternative for MSPs, employee lifecycle management, MSP tools, ConnectWise integration, Autotask integration, multi-tenant employee management"
  />

  <!-- Open Graph -->
  <meta property="og:title" content="Employee Envoy vs. Rippling for MSPs" />
  <meta
    property="og:description"
    content="Purpose-built for MSPs managing multiple clients. Compare features, pricing, and see why Employee Envoy is the better choice."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://employeeenvoy.com/compare/rippling"
  />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Employee Envoy vs. Rippling for MSPs" />
  <meta
    name="twitter:description"
    content="Purpose-built for MSPs managing multiple clients. Compare features and pricing."
  />
</svelte:head>

<Navigation {scrollY} currentPage="compare-rippling" />

<!-- Hero Section -->
<section
  class="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
>
  <!-- Background elements -->
  <div
    class="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/40 to-orange-300/30 rounded-full blur-3xl"
  ></div>
  <div
    class="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-amber-200/20 rounded-full blur-3xl"
  ></div>

  <div class="relative max-w-7xl mx-auto">
    <!-- Breadcrumb -->
    <div class="mb-6">
      <a
        href="/"
        class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >Home</a
      >
      <span class="text-sm text-gray-400 mx-2">/</span>
      <span class="text-sm text-gray-900 dark:text-gray-100 font-medium"
        >Compare with Rippling</span
      >
    </div>

    <div class="text-center max-w-4xl mx-auto">
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Employee Envoy vs. Rippling
        <span
          class="block mt-2 text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent"
        >
          For MSPs & IT Consultants
        </span>
      </h1>

      <p
        class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
      >
        Rippling is excellent for companies managing their own workforce.
        Employee Envoy is purpose-built for MSPs managing multiple client
        workforces.
      </p>

      <!-- Quick Verdict -->
      <div class="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto text-left">
        <div
          class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800"
        >
          <div class="flex items-center gap-3 mb-3">
            <div class="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
              <CheckCircle2
                class="w-6 h-6 text-green-600 dark:text-green-400"
              />
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              Employee Envoy
            </h3>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <strong>Best for:</strong> MSPs managing 10-500+ client organizations,
            IT consultants needing PSA integration, teams requiring multi-tenant
            architecture
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800"
        >
          <div class="flex items-center gap-3 mb-3">
            <div class="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
              <Building2 class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              Rippling
            </h3>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <strong>Best for:</strong> Single companies managing their own employees,
            organizations needing unified HR/IT/Finance, enterprises requiring 600+
            integrations
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Feature Comparison Table -->
<section class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2
        class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Feature Comparison
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Side-by-side comparison of key features and capabilities
      </p>
    </div>

    <!-- Desktop Table -->
    <div
      class="hidden lg:block overflow-hidden rounded-xl border border-gray-200 dark:border-slate-800"
    >
      <table class="w-full">
        <thead class="bg-gray-50 dark:bg-slate-800">
          <tr>
            <th
              class="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white w-1/3"
            >
              Feature
            </th>
            <th
              class="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white w-1/3 bg-green-50 dark:bg-green-900/20"
            >
              Employee Envoy
            </th>
            <th
              class="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white w-1/3"
            >
              Rippling
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-slate-800">
          {#each comparisonData as row, index}
            <tr
              class="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <td class="px-6 py-4">
                <div class="font-medium text-gray-900 dark:text-white">
                  {row.feature}
                </div>
                {#if row.description}
                  <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {row.description}
                  </div>
                {/if}
              </td>
              <td
                class="px-6 py-4 text-center bg-green-50/50 dark:bg-green-900/10"
              >
                <div class="flex justify-center">
                  <div
                    class="inline-flex items-center justify-center w-8 h-8 rounded-full {getIconBgClass(
                      row.envoy,
                    )}"
                  >
                    <svelte:component
                      this={getIcon(row.envoy)}
                      class="w-5 h-5 {getIconClass(row.envoy)}"
                    />
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-center">
                <div class="flex justify-center">
                  <div
                    class="inline-flex items-center justify-center w-8 h-8 rounded-full {getIconBgClass(
                      row.rippling,
                    )}"
                  >
                    <svelte:component
                      this={getIcon(row.rippling)}
                      class="w-5 h-5 {getIconClass(row.rippling)}"
                    />
                  </div>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <!-- Mobile Cards -->
    <div class="lg:hidden space-y-6">
      {#each comparisonData as row}
        <div
          class="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm"
        >
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            {row.feature}
          </h3>
          {#if row.description}
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {row.description}
            </p>
          {/if}

          <div class="grid grid-cols-2 gap-4">
            <div
              class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800"
            >
              <div
                class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2"
              >
                Employee Envoy
              </div>
              <div class="flex items-center gap-2">
                <div
                  class="inline-flex items-center justify-center w-8 h-8 rounded-full {getIconBgClass(
                    row.envoy,
                  )}"
                >
                  <svelte:component
                    this={getIcon(row.envoy)}
                    class="w-5 h-5 {getIconClass(row.envoy)}"
                  />
                </div>
              </div>
            </div>

            <div class="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
              <div
                class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2"
              >
                Rippling
              </div>
              <div class="flex items-center gap-2">
                <div
                  class="inline-flex items-center justify-center w-8 h-8 rounded-full {getIconBgClass(
                    row.rippling,
                  )}"
                >
                  <svelte:component
                    this={getIcon(row.rippling)}
                    class="w-5 h-5 {getIconClass(row.rippling)}"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Legend -->
    <div class="mt-8 flex flex-wrap gap-6 justify-center text-sm">
      <div class="flex items-center gap-2">
        <div
          class="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
        >
          <Check class="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
        <span class="text-gray-700 dark:text-gray-300">Full Support</span>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center"
        >
          <AlertTriangle class="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
        </div>
        <span class="text-gray-700 dark:text-gray-300">Partial/Limited</span>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center"
        >
          <X class="w-4 h-4 text-red-600 dark:text-red-400" />
        </div>
        <span class="text-gray-700 dark:text-gray-300">Not Available</span>
      </div>
    </div>
  </div>
</section>

<!-- Why MSPs Prefer Employee Envoy -->
<section
  class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10"
>
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2
        class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Why MSPs Prefer Employee Envoy
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Purpose-built for IT consultants managing multiple client organizations
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-green-200 dark:border-green-800"
      >
        <div
          class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block mb-4"
        >
          <Building2 class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          True Multi-Tenant Architecture
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Manage 100+ client organizations with complete data isolation. Switch
          between clients instantly with CustomerSwitcher. Rippling requires
          separate accounts for each organization.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Example: MSP managing 50 clients sees unified dashboard, not 50
          separate logins
        </p>
      </div>

      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-green-200 dark:border-green-800"
      >
        <div
          class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block mb-4"
        >
          <Zap class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          PSA Integration That Works
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Auto-create tickets in ConnectWise Manage and Autotask PSA when
          onboarding/offboarding starts. Bidirectional sync keeps everything in
          sync. Rippling has zero PSA integration.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Example: New hire request → Auto-creates ConnectWise ticket → Status
          syncs back
        </p>
      </div>

      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-green-200 dark:border-green-800"
      >
        <div
          class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block mb-4"
        >
          <Users class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          IT-First Employee Lifecycle
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Starts with IT provisioning, extends to HR workflows. Visual workflow
          builder with 67 employee-specific nodes. Rippling is HR-first,
          IT-second.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Example: Automate Google Workspace setup, MDM enrollment, credential
          creation
        </p>
      </div>

      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-green-200 dark:border-green-800"
      >
        <div
          class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block mb-4"
        >
          <Shield class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Deep MDM Integration
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Full device lifecycle with Jamf Pro, Microsoft Intune, and Kandji.
          Lock, wipe, sync devices directly from workflows. Rippling offers
          basic MDM features only.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Example: Employee offboarding triggers device lock + remote wipe
        </p>
      </div>

      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-green-200 dark:border-green-800"
      >
        <div
          class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block mb-4"
        >
          <DollarSign class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          MSP-Friendly Pricing
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Simple $4 PEPM pricing focused on lifecycle automation. Rippling
          charges $8+ PEPM with complex pricing and multiple add-ons.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Example: 500 employees across 20 clients = $2,000/month
        </p>
      </div>

      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-green-200 dark:border-green-800"
      >
        <div
          class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block mb-4"
        >
          <TrendingUp class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Built for MSP Scale
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Manager prep checklists, smart reminders, welcome letter templates.
          Everything designed for MSPs managing hundreds of employee lifecycles
          per month.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Example: Hiring managers get automated reminders for onboarding prep
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Comparison -->
<section class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2
        class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Pricing Comparison
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Transparent pricing for MSPs managing multiple clients
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <!-- Employee Envoy Pricing -->
      <div
        class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border-2 border-green-200 dark:border-green-800 shadow-xl"
      >
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Employee Envoy
        </h3>

        <div class="mb-6">
          <div class="flex items-baseline gap-2 mb-2">
            <span class="text-4xl font-bold text-gray-900 dark:text-white"
              >$199-$799</span
            >
            <span class="text-gray-600 dark:text-gray-400">/month</span>
          </div>
          <div class="text-sm font-medium text-green-600 dark:text-green-400">
            Flat-rate pricing by employee bucket, no per-user fees
          </div>
        </div>

        <div class="space-y-3 mb-6">
          <div class="flex items-start gap-3">
            <Check
              class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Starter: $199/mo (up to 50 employees)</span
            >
          </div>
          <div class="flex items-start gap-3">
            <Check
              class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Professional: $399/mo (up to 200 employees)</span
            >
          </div>
          <div class="flex items-start gap-3">
            <Check
              class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Enterprise: $799/mo (up to 500 employees)</span
            >
          </div>
          <div class="flex items-start gap-3">
            <Check
              class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >All 189 integrations included</span
            >
          </div>
          <div class="flex items-start gap-3">
            <Check
              class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Multi-tenant architecture (MSP-ready)</span
            >
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-green-200 dark:border-green-800"
        >
          <div
            class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2"
          >
            Example: MSP with 200 employees across clients
          </div>
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            $399/month
          </div>
          <div class="text-xs text-green-600 dark:text-green-400 mt-1">
            (Professional plan, flat rate)
          </div>
        </div>
      </div>

      <!-- Rippling Pricing -->
      <div
        class="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-slate-700 shadow-xl"
      >
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Rippling
        </h3>

        <div class="mb-6">
          <div class="flex items-baseline gap-2 mb-2">
            <span class="text-4xl font-bold text-gray-900 dark:text-white"
              >$8+</span
            >
            <span class="text-gray-600 dark:text-gray-400"
              >per employee/month</span
            >
          </div>
          <div class="text-sm font-medium text-gray-600 dark:text-gray-400">
            Base price + multiple add-ons required
          </div>
        </div>

        <div class="space-y-3 mb-6">
          <div class="flex items-start gap-3">
            <X
              class="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >No multi-tenant architecture</span
            >
          </div>
          <div class="flex items-start gap-3">
            <X
              class="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >No PSA integration</span
            >
          </div>
          <div class="flex items-start gap-3">
            <AlertTriangle
              class="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Workflow automation (complex setup)</span
            >
          </div>
          <div class="flex items-start gap-3">
            <Check
              class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >600+ integrations</span
            >
          </div>
          <div class="flex items-start gap-3">
            <AlertTriangle
              class="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Complex pricing with add-ons</span
            >
          </div>
        </div>

        <div
          class="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-slate-600"
        >
          <div
            class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2"
          >
            Example: 500 employees (single organization)
          </div>
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            $4,000+/month
          </div>
          <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">
            (Base price + add-ons, requires 500 separate accounts for MSPs)
          </div>
        </div>
      </div>
    </div>

    <!-- ROI Callout -->
    <div
      class="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl shadow-xl text-white"
    >
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-3">
          Calculate Your ROI with Employee Envoy
        </h3>
        <p class="text-white/90 mb-6">
          See how much time and money you'll save by switching to Employee Envoy
        </p>
        <a
          href="/roi-calculator"
          class="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
        >
          Calculate Your ROI
          <ArrowRight class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Use Case Comparison -->
<section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2
        class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Real-World Use Cases
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        How Employee Envoy and Rippling handle common MSP scenarios
      </p>
    </div>

    <div class="space-y-8">
      <!-- Use Case 1 -->
      <div
        class="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden"
      >
        <div class="p-6 border-b border-gray-200 dark:border-slate-700">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            Scenario: Onboarding a new employee across 5 different clients
          </h3>
        </div>

        <div
          class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-slate-700"
        >
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <CheckCircle2
                  class="w-5 h-5 text-green-600 dark:text-green-400"
                />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Employee Envoy
              </h4>
            </div>
            <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>Switch to client organization with CustomerSwitcher</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span
                  >Create onboarding request, auto-generates ConnectWise ticket</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span
                  >Workflow triggers: Google Workspace account, MDM enrollment,
                  credential creation</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span
                  >Welcome letter sent automatically with client branding</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >5</span
                >
                <span>Repeat for 4 more clients (same simple process)</span>
              </li>
            </ol>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p class="text-sm font-medium text-green-600 dark:text-green-400">
                Time per onboarding: 5 minutes
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Total for 5 clients: 25 minutes
              </p>
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <AlertTriangle class="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Rippling
              </h4>
            </div>
            <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span
                  >Log out, log into Client 1's separate Rippling account</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>Manually create employee, configure IT provisioning</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span
                  >Manually create ticket in ConnectWise (no integration)</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span
                  >Log out, repeat for Clients 2, 3, 4, 5 (4 more times)</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >5</span
                >
                <span>Manually track progress across 5 separate dashboards</span
                >
              </li>
            </ol>
            <div class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p class="text-sm font-medium text-red-600 dark:text-red-400">
                Time per onboarding: 20 minutes
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Total for 5 clients: 100 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Use Case 2 -->
      <div
        class="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden"
      >
        <div class="p-6 border-b border-gray-200 dark:border-slate-700">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            Scenario: Emergency offboarding (employee terminated, security
            concern)
          </h3>
        </div>

        <div
          class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-slate-700"
        >
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <CheckCircle2
                  class="w-5 h-5 text-green-600 dark:text-green-400"
                />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Employee Envoy
              </h4>
            </div>
            <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>Create offboarding request with "Immediate" priority</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span
                  >Workflow triggers: Disable Google Workspace, revoke access</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>Lock device via MDM integration (Jamf/Intune)</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span>ConnectWise ticket auto-created with audit trail</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >5</span
                >
                <span>All actions logged for compliance reporting</span>
              </li>
            </ol>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p class="text-sm font-medium text-green-600 dark:text-green-400">
                Time to secure: 2 minutes (automated)
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Full audit trail automatically created
              </p>
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <AlertTriangle class="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Rippling
              </h4>
            </div>
            <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span
                  >Log into Google Workspace admin, manually disable account</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>Log into MDM, manually find and lock device</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>Manually create ConnectWise ticket, type details</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span>Manually document actions in spreadsheet for audit</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >5</span
                >
                <span>Hope you didn't miss any critical system</span>
              </li>
            </ol>
            <div class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p class="text-sm font-medium text-red-600 dark:text-red-400">
                Time to secure: 15-20 minutes (manual)
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                High risk of missing critical systems
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Use Case 3 -->
      <div
        class="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden"
      >
        <div class="p-6 border-b border-gray-200 dark:border-slate-700">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            Scenario: Monthly reporting for 20 MSP clients
          </h3>
        </div>

        <div
          class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-slate-700"
        >
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <CheckCircle2
                  class="w-5 h-5 text-green-600 dark:text-green-400"
                />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Employee Envoy
              </h4>
            </div>
            <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>View unified dashboard with all 20 clients at once</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span
                  >Export monthly onboarding/offboarding report (one click)</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span
                  >ConnectWise tickets automatically tracked, no manual
                  reconciliation</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span>Compliance metrics (device encryption, MFA status)</span>
              </li>
            </ol>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p class="text-sm font-medium text-green-600 dark:text-green-400">
                Time for monthly reporting: 15 minutes
              </p>
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <AlertTriangle class="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Rippling
              </h4>
            </div>
            <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>Log into Client 1's Rippling account, export report</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>Repeat for Clients 2-20 (19 more logins)</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>Manually consolidate 20 reports into spreadsheet</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span>Manually cross-reference with ConnectWise tickets</span>
              </li>
            </ol>
            <div class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p class="text-sm font-medium text-red-600 dark:text-red-400">
                Time for monthly reporting: 3-4 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section
  class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white"
>
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
      Ready to See the Difference?
    </h2>
    <p class="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
      Join MSPs who've switched from Rippling to Employee Envoy and never looked
      back
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/contact"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
      >
        Book a Demo
        <ArrowRight class="w-5 h-5" />
      </a>
      <a
        href="/contact"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600/20 text-white font-bold rounded-lg hover:bg-amber-600/30 transition-all border-2 border-white/30 text-lg"
      >
        Book a Demo
      </a>
    </div>

    <p class="text-sm text-white/80 mt-6">
      No per-user fees • No setup fees • Setup in minutes
    </p>
  </div>
</section>

<Footer />

<style>
  @keyframes blob {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  @keyframes blob-delay {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(-30px, 50px) scale(1.1);
    }
    66% {
      transform: translate(20px, -20px) scale(0.9);
    }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animate-blob-delay {
    animation: blob-delay 7s infinite;
    animation-delay: 2s;
  }

  .bg-grid-pattern {
    background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
  }
</style>
