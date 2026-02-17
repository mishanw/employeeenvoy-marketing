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
    Shield,
    Workflow,
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
    jumpcloud: "yes" | "no" | "partial";
    description?: string;
  }

  const comparisonData: ComparisonRow[] = [
    {
      feature: "Multi-Tenant MSP Architecture",
      envoy: "yes",
      jumpcloud: "partial",
      description: "Employee Envoy: native multi-tenant | JumpCloud: Multi-Tenant Portal (MTP) add-on",
    },
    {
      feature: "PSA Integration (ConnectWise, Autotask)",
      envoy: "yes",
      jumpcloud: "no",
      description: "Auto-create tickets and sync status bidirectionally",
    },
    {
      feature: "Visual Workflow Builder",
      envoy: "yes",
      jumpcloud: "no",
      description: "67 drag-and-drop automation nodes for employee lifecycle",
    },
    {
      feature: "Employee Lifecycle Focus",
      envoy: "yes",
      jumpcloud: "partial",
      description: "Employee Envoy: full onboard/offboard | JumpCloud: directory-focused",
    },
    {
      feature: "Directory-as-a-Service",
      envoy: "no",
      jumpcloud: "yes",
      description: "JumpCloud replaces AD/LDAP; Employee Envoy integrates with existing directories",
    },
    {
      feature: "HRIS Sync (Rippling, BambooHR, Gusto)",
      envoy: "yes",
      jumpcloud: "partial",
      description: "Employee Envoy: 4 native HRIS adapters | JumpCloud: HR directory import",
    },
    {
      feature: "Welcome Letter Templates",
      envoy: "yes",
      jumpcloud: "no",
      description: "Branded welcome letters with custom sections and checklists",
    },
    {
      feature: "SCIM 2.0 Provisioning",
      envoy: "yes",
      jumpcloud: "yes",
      description: "Both support full SCIM user and group provisioning",
    },
    {
      feature: "MDM Integration",
      envoy: "yes",
      jumpcloud: "yes",
      description: "Both integrate with Jamf, Intune, and other MDM platforms",
    },
    {
      feature: "SSO / Identity Provider",
      envoy: "yes",
      jumpcloud: "yes",
      description: "Employee Envoy: 8 IdPs supported | JumpCloud: built-in SSO",
    },
    {
      feature: "Manager Prep & Approval Workflows",
      envoy: "yes",
      jumpcloud: "no",
      description: "Smart reminders, checklists, and multi-level approval chains",
    },
    {
      feature: "Number of Integrations",
      envoy: "partial",
      jumpcloud: "yes",
      description: "Employee Envoy: 189 (IT lifecycle) | JumpCloud: 300+ (directory connectors)",
    },
    {
      feature: "SLA Tracking & Analytics",
      envoy: "yes",
      jumpcloud: "no",
      description: "Per-customer SLA targets, breach alerts, and compliance dashboards",
    },
    {
      feature: "MSP-Friendly Pricing",
      envoy: "yes",
      jumpcloud: "partial",
      description: "Employee Envoy: flat-rate | JumpCloud: per-user with MSP discount",
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
  <title>Employee Envoy vs. JumpCloud: Which is Better for IT Teams?</title>
  <meta
    name="description"
    content="Compare Employee Envoy and JumpCloud for MSPs and IT teams. See why Employee Envoy's lifecycle automation and PSA integration complement JumpCloud's directory services."
  />
  <meta
    name="keywords"
    content="JumpCloud alternative, employee lifecycle management, MSP tools, IT automation, directory service, employee onboarding offboarding"
  />

  <!-- Open Graph -->
  <meta property="og:title" content="Employee Envoy vs. JumpCloud for IT Teams" />
  <meta
    property="og:description"
    content="Employee lifecycle automation vs. directory-as-a-service. Compare features, pricing, and find the right fit for your IT team."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://employeeenvoy.com/compare/jumpcloud"
  />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Employee Envoy vs. JumpCloud for IT Teams" />
  <meta
    name="twitter:description"
    content="Employee lifecycle automation vs. directory-as-a-service. Compare features and pricing."
  />
</svelte:head>

<Navigation {scrollY} currentPage="compare-jumpcloud" />

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
        >Compare with JumpCloud</span
      >
    </div>

    <div class="text-center max-w-4xl mx-auto">
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Employee Envoy vs. JumpCloud
        <span
          class="block mt-2 text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent"
        >
          Lifecycle Automation vs. Directory Service
        </span>
      </h1>

      <p
        class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
      >
        JumpCloud is an excellent directory-as-a-service. Employee Envoy
        automates the employee lifecycle workflows that happen around your
        directory.
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
            <strong>Best for:</strong> MSPs and IT teams who need to automate the
            full employee lifecycle &mdash; onboarding workflows, offboarding checklists,
            PSA ticket sync, welcome letters, and SLA tracking across multiple clients.
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
              JumpCloud
            </h3>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <strong>Best for:</strong> Organizations needing a cloud directory to
            replace Active Directory, centralize SSO/MFA, manage device policies,
            and unify identity across platforms.
          </p>
        </div>
      </div>

      <!-- Complementary callout -->
      <div
        class="max-w-3xl mx-auto bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 text-left"
      >
        <div class="flex items-start gap-3">
          <Zap class="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">
              They can work together
            </h4>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Many MSPs use JumpCloud as their directory and Employee Envoy to automate
              the lifecycle workflows around it. Employee Envoy integrates with JumpCloud's
              directory via SCIM and SSO.
            </p>
          </div>
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
              JumpCloud
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-slate-800">
          {#each comparisonData as row}
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
                      row.jumpcloud,
                    )}"
                  >
                    <svelte:component
                      this={getIcon(row.jumpcloud)}
                      class="w-5 h-5 {getIconClass(row.jumpcloud)}"
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
                JumpCloud
              </div>
              <div class="flex items-center gap-2">
                <div
                  class="inline-flex items-center justify-center w-8 h-8 rounded-full {getIconBgClass(
                    row.jumpcloud,
                  )}"
                >
                  <svelte:component
                    this={getIcon(row.jumpcloud)}
                    class="w-5 h-5 {getIconClass(row.jumpcloud)}"
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

<!-- Why IT Teams Choose Employee Envoy -->
<section
  class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10"
>
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2
        class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Why IT Teams Add Employee Envoy
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        JumpCloud manages your directory. Employee Envoy automates the workflows around it.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-green-200 dark:border-green-800"
      >
        <div
          class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block mb-4"
        >
          <Workflow class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Lifecycle Automation
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          JumpCloud provisions directory accounts. Employee Envoy orchestrates
          the entire lifecycle &mdash; onboarding workflows, manager approvals,
          welcome letters, SLA tracking, and offboarding checklists &mdash; across
          189 integrations.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          67 drag-and-drop workflow nodes for complete automation
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
          PSA Ticket Sync
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          When an onboarding or offboarding request is created, Employee Envoy
          auto-creates tickets in ConnectWise Manage or Autotask PSA with
          bidirectional status sync. JumpCloud has no PSA integration.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Eliminates manual ticket creation for every employee change
        </p>
      </div>

      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-green-200 dark:border-green-800"
      >
        <div
          class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block mb-4"
        >
          <Building2 class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Native Multi-Tenant
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Employee Envoy is built from the ground up for MSPs managing dozens of
          clients. JumpCloud's Multi-Tenant Portal is an add-on with limitations.
          Employee Envoy gives you a unified dashboard with instant client switching.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          One login, all clients, complete data isolation
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
          Manager & HR Workflows
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Hiring managers get prep checklists, smart reminders, and approval
          workflows. HR gets lifecycle dashboards and compliance tracking.
          JumpCloud focuses on IT admin tasks, not manager enablement.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Bridges the gap between HR, managers, and IT
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
          SLA & Compliance Tracking
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Set per-customer SLA targets, track breach risk with color-coded
          badges, and generate compliance reports. Alert rules notify your team
          via Slack, email, or webhook when SLAs are at risk.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Prove your value to clients with hard data
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
          Flat-Rate Pricing
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Employee Envoy charges a flat monthly rate based on employee buckets,
          not per-user. JumpCloud charges per-user per-month, which adds up fast
          across multiple clients.
        </p>
        <p class="text-sm font-medium text-green-600 dark:text-green-400">
          Predictable costs that don't scale with headcount
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
        Different pricing models for different needs
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
              >All 189 integrations included in every plan</span
            >
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-green-200 dark:border-green-800"
        >
          <div
            class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2"
          >
            Example: MSP with 150 employees across 10 clients
          </div>
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            $399/month
          </div>
          <div class="text-xs text-green-600 dark:text-green-400 mt-1">
            (Professional plan, flat rate regardless of client count)
          </div>
        </div>
      </div>

      <!-- JumpCloud Pricing -->
      <div
        class="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-slate-700 shadow-xl"
      >
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          JumpCloud
        </h3>

        <div class="mb-6">
          <div class="flex items-baseline gap-2 mb-2">
            <span class="text-4xl font-bold text-gray-900 dark:text-white"
              >$7-$24</span
            >
            <span class="text-gray-600 dark:text-gray-400"
              >per user/month</span
            >
          </div>
          <div class="text-sm font-medium text-gray-600 dark:text-gray-400">
            Per-user pricing, varies by package
          </div>
        </div>

        <div class="space-y-3 mb-6">
          <div class="flex items-start gap-3">
            <Check
              class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Cloud directory and SSO</span
            >
          </div>
          <div class="flex items-start gap-3">
            <Check
              class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Device management included</span
            >
          </div>
          <div class="flex items-start gap-3">
            <X
              class="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >No lifecycle workflow automation</span
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
        </div>

        <div
          class="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-slate-600"
        >
          <div
            class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2"
          >
            Example: 150 users (Platform Plus package)
          </div>
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            ~$2,250/month
          </div>
          <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">
            ($15/user/month, scales linearly with headcount)
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
          See how much time and money you'll save by adding lifecycle automation
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
        How Employee Envoy and JumpCloud handle common IT scenarios
      </p>
    </div>

    <div class="space-y-8">
      <!-- Use Case 1 -->
      <div
        class="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden"
      >
        <div class="p-6 border-b border-gray-200 dark:border-slate-700">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            Scenario: New employee starting Monday across 3 systems
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
                <span>Create onboarding request &mdash; workflow auto-triggers</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span
                  >Google Workspace account created, JumpCloud directory entry synced, MDM profile applied</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>ConnectWise ticket auto-created for audit trail</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span>Welcome letter with credentials sent to manager</span>
              </li>
            </ol>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p class="text-sm font-medium text-green-600 dark:text-green-400">
                Time: 3 minutes (automated)
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Everything tracked in one dashboard
              </p>
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Building2 class="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                JumpCloud
              </h4>
            </div>
            <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>Create user in JumpCloud directory with SSO access</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>Assign to groups for LDAP/SAML app access</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>Manually create ConnectWise ticket (no integration)</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span>Manually send welcome info and credentials to manager</span>
              </li>
            </ol>
            <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p class="text-sm font-medium text-blue-600 dark:text-blue-400">
                Time: 10-15 minutes (partly manual)
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Directory provisioning is fast; surrounding tasks are manual
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
            Scenario: Emergency offboarding &mdash; revoke access across all systems
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
                <span>Create offboarding request with "Immediate" priority</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>Workflow disables accounts across all 189 connected integrations</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>MDM device lock/wipe triggered automatically</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span>Full audit trail with compliance report</span>
              </li>
            </ol>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p class="text-sm font-medium text-green-600 dark:text-green-400">
                Time to secure: 2 minutes (fully automated)
              </p>
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Building2 class="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                JumpCloud
              </h4>
            </div>
            <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>Suspend user in JumpCloud &mdash; SSO access revoked instantly</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>Device lock via JumpCloud MDM commands</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>Manually revoke access to non-SSO apps (standalone SaaS)</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >4</span
                >
                <span>Manually document everything for compliance</span>
              </li>
            </ol>
            <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p class="text-sm font-medium text-blue-600 dark:text-blue-400">
                SSO apps: instant | Non-SSO apps: 10-20 min manual
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
      Automate Your Employee Lifecycle
    </h2>
    <p class="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
      Add lifecycle automation on top of your directory service. Works with JumpCloud,
      Active Directory, Okta, and more.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/contact"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
      >
        Start Free Trial
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
      No credit card required &bull; 14-day free trial &bull; Setup in minutes
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
