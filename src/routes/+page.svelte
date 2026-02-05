<script lang="ts">
  import { onMount } from "svelte";
  import {
    ArrowRight,
    Check,
    Users,
    Zap,
    Shield,
    BarChart3,
    Building2,
    Clock,
    Lock,
    Globe,
    Sparkles,
    TrendingUp,
    Star,
    ChevronRight,
    ChevronDown,
    HelpCircle,
    Code,
    Database,
    Cloud,
    MessageSquare,
    Play,
    CheckCircle2,
    AlertCircle,
    UserPlus,
    UserMinus,
  } from "@lucide/svelte";
  import Logo from "$lib/components/Logo.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import SpotlightCard from "$lib/components/SpotlightCard.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import ProblemSection from "$lib/components/ProblemSection.svelte";
  import HowItWorksSection from "$lib/components/HowItWorksSection.svelte";
  import PricingSection from "$lib/components/PricingSection.svelte";

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title
    >Employee Envoy - Employee Lifecycle Management for MSPs & Enterprises</title
  >
  <meta
    name="description"
    content="Streamline employee onboarding, offboarding, and status changes across 120+ business applications. Built for MSPs and IT teams."
  />
</svelte:head>

<!-- Navigation -->
<Navigation currentPage="home" />

<!-- Hero Section with Dashboard Mockup -->
<HeroSection {mounted} />

<!-- Problem Section - Lead with Pain Points -->
<ProblemSection />

<!-- How It Works Section -->
<HowItWorksSection />

<!-- Stats Section - Social Proof with Numbers -->
<section
  class="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 overflow-hidden"
>
  <!-- Background pattern -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute inset-0"
      style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);"
    ></div>
  </div>
  <!-- Decorative circles -->
  <div
    class="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
  ></div>
  <div
    class="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"
  ></div>

  <div class="relative max-w-7xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
      <div class="text-center group">
        <div class="relative inline-block">
          <p
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform"
          >
            120+
          </p>
          <div
            class="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full"
          ></div>
        </div>
        <p class="text-amber-100 font-semibold text-lg">Integrations</p>
      </div>
      <div class="text-center group">
        <div class="relative inline-block">
          <p
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform"
          >
            4-6<span class="text-3xl">hrs</span>
          </p>
          <div
            class="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full"
          ></div>
        </div>
        <p class="text-amber-100 font-semibold text-lg">Saved per Employee</p>
      </div>
      <div class="text-center group">
        <div class="relative inline-block">
          <p
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform"
          >
            99.9<span class="text-3xl">%</span>
          </p>
          <div
            class="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full"
          ></div>
        </div>
        <p class="text-amber-100 font-semibold text-lg">Uptime SLA</p>
      </div>
      <div class="text-center group">
        <div class="relative inline-block">
          <p
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform"
          >
            256<span class="text-3xl">-bit</span>
          </p>
          <div
            class="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full"
          ></div>
        </div>
        <p class="text-amber-100 font-semibold text-lg">Encryption</p>
      </div>
    </div>
  </div>
</section>

<!-- Trusted By / Social Proof Section -->
<section
  class="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50 border-y border-gray-100 dark:border-slate-800"
>
  <div class="max-w-7xl mx-auto">
    <p
      class="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-10 uppercase tracking-wider"
    >
      Built for teams that use
    </p>
    <div
      class="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14"
    >
      <div
        class="group flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:border-amber-200 dark:hover:border-amber-700 transition-all"
      >
        <div
          class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform"
        >
          M
        </div>
        <span class="font-semibold text-gray-700 dark:text-gray-300"
          >Microsoft 365</span
        >
      </div>
      <div
        class="group flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:border-amber-200 dark:hover:border-amber-700 transition-all"
      >
        <div
          class="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform"
        >
          G
        </div>
        <span class="font-semibold text-gray-700 dark:text-gray-300"
          >Google Workspace</span
        >
      </div>
      <div
        class="group flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:border-amber-200 dark:hover:border-amber-700 transition-all"
      >
        <div
          class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform"
        >
          S
        </div>
        <span class="font-semibold text-gray-700 dark:text-gray-300">Slack</span
        >
      </div>
      <div
        class="group flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:border-amber-200 dark:hover:border-amber-700 transition-all"
      >
        <div
          class="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform"
        >
          O
        </div>
        <span class="font-semibold text-gray-700 dark:text-gray-300">Okta</span>
      </div>
      <div
        class="group flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:border-amber-200 dark:hover:border-amber-700 transition-all"
      >
        <div
          class="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform"
        >
          A
        </div>
        <span class="font-semibold text-gray-700 dark:text-gray-300">AWS</span>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section
  id="features"
  class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 overflow-hidden"
>
  <!-- Background decorations -->
  <div
    class="absolute top-40 left-0 w-72 h-72 bg-gradient-to-br from-amber-100/40 to-orange-100/20 rounded-full blur-3xl"
  ></div>
  <div
    class="absolute bottom-40 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/40 to-amber-100/20 rounded-full blur-3xl"
  ></div>

  <div class="relative max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-400 text-sm font-medium mb-4"
      >
        <Sparkles class="w-4 h-4" />
        <span>Powerful Features</span>
      </div>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
      >
        Everything You Need
      </h2>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Powerful features designed for MSPs and enterprise IT teams
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <!-- Feature 1 -->
      <!-- Feature 1 -->
      <SpotlightCard
        class="p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
        <div class="relative z-10">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all"
          >
            <Zap class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Automated Workflows
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Automate onboarding and offboarding across <span
              class="font-semibold text-amber-600 dark:text-amber-400"
              >120+ applications</span
            > with customizable playbooks
          </p>
        </div>
      </SpotlightCard>

      <!-- Feature 2 -->
      <!-- Feature 2 -->
      <SpotlightCard
        class="p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        spotlightColor="rgba(59, 130, 246, 0.15)"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
        <div class="relative z-10">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all"
          >
            <Building2 class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Multi-Tenant Support
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Manage multiple customer organizations from a single dashboard with <span
              class="font-semibold text-blue-600 dark:text-blue-400"
              >complete data isolation</span
            >
          </p>
        </div>
      </SpotlightCard>

      <!-- Feature 3 -->
      <!-- Feature 3 -->
      <SpotlightCard
        class="p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        spotlightColor="rgba(168, 85, 247, 0.15)"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
        <div class="relative z-10">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-5 shadow-lg shadow-purple-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all"
          >
            <Globe class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            120+ Integrations
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Connect Microsoft 365, Google Workspace, Slack, Okta, and dozens
            more with <span
              class="font-semibold text-purple-600 dark:text-purple-400"
              >guided setup</span
            >
          </p>
        </div>
      </SpotlightCard>

      <!-- Feature 4 -->
      <!-- Feature 4 -->
      <SpotlightCard
        class="p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        spotlightColor="rgba(34, 197, 94, 0.15)"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
        <div class="relative z-10">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-5 shadow-lg shadow-green-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all"
          >
            <BarChart3 class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Real-Time Dashboard
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Monitor requests, track progress, and view metrics with <span
              class="font-semibold text-green-600 dark:text-green-400"
              >persona-based views</span
            > for each role
          </p>
        </div>
      </SpotlightCard>

      <!-- Feature 5 -->
      <!-- Feature 5 -->
      <SpotlightCard
        class="p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        spotlightColor="rgba(239, 68, 68, 0.15)"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
        <div class="relative z-10">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center mb-5 shadow-lg shadow-red-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all"
          >
            <Shield class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Enterprise Security
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            End-to-end encryption, audit logs, MFA, and <span
              class="font-semibold text-red-600 dark:text-red-400"
              >role-based access control</span
            > built in
          </p>
        </div>
      </SpotlightCard>

      <!-- Feature 6 -->
      <!-- Feature 6 -->
      <SpotlightCard
        class="p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        spotlightColor="rgba(6, 182, 212, 0.15)"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
        <div class="relative z-10">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all"
          >
            <Users class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Role-Based Access
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Persona-based UI adapts to <span
              class="font-semibold text-cyan-600 dark:text-cyan-400"
              >MSP Admin, Technician, Customer HR</span
            >, and Enterprise Admin roles
          </p>
        </div>
      </SpotlightCard>
    </div>
  </div>
</section>

<!-- Solutions Section -->
<section
  id="solutions"
  class="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden"
>
  <!-- Background decoration -->
  <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>

  <div class="relative max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-4"
      >
        <Building2 class="w-4 h-4" />
        <span>Tailored Solutions</span>
      </div>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
      >
        Built for Your Use Case
      </h2>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Whether you're an MSP managing multiple clients or an enterprise IT team
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
      <!-- MSP Solution -->
      <div class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
        ></div>
        <div
          class="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-900/20 dark:via-slate-800 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800 hover:shadow-2xl transition-all"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform"
            >
              <Building2 class="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                For MSPs
              </h3>
              <p class="text-amber-600 dark:text-amber-400 font-medium">
                Managed Service Providers
              </p>
            </div>
          </div>
          <p
            class="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
          >
            Manage employee lifecycles across all your customer organizations
            from one unified platform
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >Customer switcher for quick context switching</span
              >
            </li>
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >Aggregated dashboards across all customers</span
              >
            </li>
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >Per-customer integration management</span
              >
            </li>
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >Desktop app for offline credential access</span
              >
            </li>
          </ul>
          <a
            href="#pricing"
            class="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all"
          >
            View MSP Pricing
            <ChevronRight
              class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>

      <!-- Enterprise Solution -->
      <div class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
        ></div>
        <div
          class="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-900/20 dark:via-slate-800 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform"
            >
              <Users class="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                For Enterprises
              </h3>
              <p class="text-blue-600 dark:text-blue-400 font-medium">
                Internal IT Teams
              </p>
            </div>
          </div>
          <p
            class="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
          >
            Streamline IT operations with automated workflows and comprehensive
            audit trails
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >Self-service request portal for HR teams</span
              >
            </li>
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >Complete audit logging for compliance</span
              >
            </li>
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >Role-based access with persona-based UI</span
              >
            </li>
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >API access for custom integrations</span
              >
            </li>
          </ul>
          <a
            href="#pricing"
            class="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-indigo-400 shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all"
          >
            View Enterprise Pricing
            <ChevronRight
              class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Integration Showcase Section -->
<section
  id="integrations"
  class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 overflow-hidden"
>
  <!-- Background decoration -->
  <div
    class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-700 to-transparent"
  ></div>
  <div
    class="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl"
  ></div>

  <div class="relative max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium mb-4"
      >
        <Globe class="w-4 h-4" />
        <span>Extensive Ecosystem</span>
      </div>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
      >
        Integrate with Your Stack
      </h2>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Connect with 120+ business applications your team already uses
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
      <div
        class="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <Code class="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-center">
          Identity & SSO
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
          Okta, Azure AD, JumpCloud, Active Directory
        </p>
        <div class="mt-4 flex justify-center gap-2">
          <div
            class="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-bold"
          >
            O
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-cyan-500 flex items-center justify-center text-white text-xs font-bold"
          >
            A
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center text-white text-xs font-bold"
          >
            J
          </div>
        </div>
      </div>
      <div
        class="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <MessageSquare class="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-center">
          Communication
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
          Slack, Microsoft Teams, Zoom, RingCentral
        </p>
        <div class="mt-4 flex justify-center gap-2">
          <div
            class="w-7 h-7 rounded-lg bg-purple-500 flex items-center justify-center text-white text-xs font-bold"
          >
            S
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold"
          >
            T
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-blue-400 flex items-center justify-center text-white text-xs font-bold"
          >
            Z
          </div>
        </div>
      </div>
      <div
        class="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-900/30 dark:to-fuchsia-900/30 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <Database class="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-center">
          Productivity
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
          Microsoft 365, Google Workspace, Adobe
        </p>
        <div class="mt-4 flex justify-center gap-2">
          <div
            class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold"
          >
            M
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center text-white text-xs font-bold"
          >
            G
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white text-xs font-bold"
          >
            A
          </div>
        </div>
      </div>
      <div
        class="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <Cloud class="w-8 h-8 text-orange-600 dark:text-orange-400" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-center">
          Cloud & DevOps
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
          AWS, Azure, GCP, GitHub, Jira
        </p>
        <div class="mt-4 flex justify-center gap-2">
          <div
            class="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-bold"
          >
            A
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-bold"
          >
            Az
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-gray-800 flex items-center justify-center text-white text-xs font-bold"
          >
            G
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a
        href="/integrations"
        class="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl hover:from-amber-400 hover:to-orange-400 shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all"
      >
        Browse All 120+ Integrations
        <ArrowRight
          class="w-5 h-5 group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<PricingSection />

<!-- Security Section -->
<section
  id="security"
  class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden"
>
  <!-- Background decorations -->
  <div
    class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100/40 to-emerald-100/30 rounded-full blur-3xl"
  ></div>
  <div
    class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-100/30 to-teal-100/20 rounded-full blur-3xl"
  ></div>

  <!-- Decorative shield -->
  <div class="absolute top-20 right-10 hidden lg:block opacity-5">
    <Shield class="w-64 h-64 text-green-600" />
  </div>

  <div class="relative max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-700 dark:text-green-400 text-sm font-semibold mb-6 shadow-sm border border-green-200/50 dark:border-green-700/50"
      >
        <Shield class="w-4 h-4" />
        <span>Enterprise-Grade Security</span>
      </div>
      <h2
        class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
      >
        Your Data Security is <span
          class="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"
          >Our Priority</span
        >
      </h2>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Built with security-first architecture, comprehensive compliance
        controls, and transparent practices
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
      <div
        class="group relative p-7 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"
        ></div>
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform"
        >
          <Lock class="w-8 h-8 text-white" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-lg">
          AES-256 Encryption
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Data encrypted at rest and in transit with <span
            class="font-medium text-green-600 dark:text-green-400">TLS 1.3</span
          >
        </p>
      </div>

      <div
        class="group relative p-7 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"
        ></div>
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform"
        >
          <Shield class="w-8 h-8 text-white" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-lg">
          Multi-Factor Auth
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          TOTP-based MFA with <span
            class="font-medium text-blue-600 dark:text-blue-400"
            >backup codes</span
          > for all accounts
        </p>
      </div>

      <div
        class="group relative p-7 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-violet-500"
        ></div>
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform"
        >
          <BarChart3 class="w-8 h-8 text-white" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-lg">
          Audit Logging
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Comprehensive audit trails with <span
            class="font-medium text-purple-600 dark:text-purple-400"
            >configurable retention</span
          >
        </p>
      </div>

      <div
        class="group relative p-7 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500"
        ></div>
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform"
        >
          <Globe class="w-8 h-8 text-white" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-lg">
          GDPR & CCPA
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Compliant with <span
            class="font-medium text-amber-600 dark:text-amber-400"
            >major privacy regulations</span
          >
        </p>
      </div>
    </div>

    <!-- Security commitment card with glow -->
    <div class="relative group">
      <div
        class="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
      ></div>
      <div
        class="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-900/30 dark:via-slate-800 dark:to-emerald-900/30 rounded-3xl border-2 border-green-200 dark:border-green-800 p-8 sm:p-10 shadow-xl"
      >
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-semibold mb-4"
            >
              <CheckCircle2 class="w-3.5 h-3.5" />
              <span>Security First</span>
            </div>
            <h3
              class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Security Commitment
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <div
                  class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <Check class="w-4 h-4 text-white" />
                </div>
                <span class="text-gray-700 dark:text-gray-300"
                  >Multi-tenant architecture with <strong
                    class="text-gray-900 dark:text-white"
                    >strict data isolation</strong
                  ></span
                >
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <Check class="w-4 h-4 text-white" />
                </div>
                <span class="text-gray-700 dark:text-gray-300"
                  >Documented <strong class="text-gray-900 dark:text-white"
                    >incident response procedures</strong
                  ></span
                >
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <Check class="w-4 h-4 text-white" />
                </div>
                <span class="text-gray-700 dark:text-gray-300"
                  >Regular <strong class="text-gray-900 dark:text-white"
                    >security assessments</strong
                  > and updates</span
                >
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <Check class="w-4 h-4 text-white" />
                </div>
                <span class="text-gray-700 dark:text-gray-300"
                  >Actively building toward <strong
                    class="text-gray-900 dark:text-white">SOC 2 Type II</strong
                  > certification</span
                >
              </li>
            </ul>
          </div>
          <div class="text-center md:text-right">
            <div class="inline-block">
              <a
                href="/security"
                class="group/btn inline-flex items-center gap-3 px-8 py-5 font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl hover:from-green-400 hover:to-emerald-400 transition-all shadow-xl shadow-green-500/25 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105"
              >
                <Shield class="w-5 h-5" />
                View Security Whitepaper
                <ChevronRight
                  class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                />
              </a>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Download our complete security documentation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Early Access Section -->
<section class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <!-- Gradient background -->
  <div
    class="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-900/30 dark:via-orange-900/20 dark:to-amber-900/30"
  ></div>

  <!-- Animated blobs -->
  <div
    class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/50 to-orange-200/40 rounded-full blur-3xl animate-blob"
  ></div>
  <div
    class="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-orange-200/40 to-amber-200/30 rounded-full blur-3xl animate-blob-delay"
  ></div>

  <!-- Sparkle decorations -->
  <div class="absolute top-16 right-1/4 hidden lg:block">
    <Sparkles class="w-8 h-8 text-amber-400/40" />
  </div>
  <div class="absolute bottom-24 left-1/4 hidden lg:block">
    <Star class="w-6 h-6 text-orange-400/40" />
  </div>

  <div class="relative max-w-5xl mx-auto text-center">
    <div
      class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 text-amber-700 dark:text-amber-400 text-sm font-semibold mb-6 shadow-lg shadow-amber-500/10 border border-amber-200/50 dark:border-amber-700/50"
    >
      <Sparkles class="w-4 h-4" />
      <span>New Product - Early Access</span>
    </div>

    <h2
      class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
    >
      Be Among the <span
        class="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"
        >First</span
      >
    </h2>
    <p
      class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
    >
      Employee Envoy is launching now. Join our early access program and help
      shape the future of employee lifecycle management.
    </p>

    <div class="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
      <div class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"
        ></div>
        <div
          class="relative p-5 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-amber-200 dark:border-amber-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all"
          >
            <Zap class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3
            class="font-bold text-gray-900 dark:text-white mb-2 text-base sm:text-lg"
          >
            Early Access Pricing
          </h3>
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Lock in <span class="font-medium text-amber-600 dark:text-amber-400"
              >special pricing</span
            > as an early adopter
          </p>
        </div>
      </div>

      <div class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"
        ></div>
        <div
          class="relative p-5 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all"
          >
            <MessageSquare class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3
            class="font-bold text-gray-900 dark:text-white mb-2 text-base sm:text-lg"
          >
            Direct Input
          </h3>
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Your feedback <span
              class="font-medium text-blue-600 dark:text-blue-400"
              >shapes our roadmap</span
            >
          </p>
        </div>
      </div>

      <div class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"
        ></div>
        <div
          class="relative p-5 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-green-200 dark:border-green-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all"
          >
            <Star class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3
            class="font-bold text-gray-900 dark:text-white mb-2 text-base sm:text-lg"
          >
            Priority Support
          </h3>
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Get <span class="font-medium text-green-600 dark:text-green-400"
              >dedicated support</span
            > from our team
          </p>
        </div>
      </div>
    </div>

    <a
      href="/contact"
      class="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/40 hover:scale-105 animate-pulse-glow"
    >
      <Sparkles class="w-5 h-5" />
      Join Early Access
      <ArrowRight
        class="w-5 h-5 group-hover:translate-x-1 transition-transform"
      />
    </a>

    <p class="mt-6 text-sm text-gray-500 dark:text-gray-400">
      Join <span class="font-medium text-gray-700 dark:text-gray-300"
        >100+ early adopters</span
      > already transforming their employee lifecycle management
    </p>
  </div>
</section>

<!-- FAQ Section -->
<section
  id="faq"
  class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
>
  <!-- Background decorations -->
  <div
    class="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl"
  ></div>
  <div
    class="absolute bottom-20 left-0 w-64 h-64 bg-gradient-to-tr from-orange-100/30 to-transparent rounded-full blur-3xl"
  ></div>

  <!-- Decorative question marks -->
  <div class="absolute top-32 left-10 hidden lg:block opacity-5">
    <HelpCircle class="w-48 h-48 text-amber-500" />
  </div>

  <div class="relative max-w-4xl mx-auto">
    <div class="text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-400 text-sm font-semibold mb-6 shadow-sm border border-amber-200/50 dark:border-amber-700/50"
      >
        <HelpCircle class="w-4 h-4" />
        <span>Got Questions?</span>
      </div>
      <h2
        class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
      >
        Frequently Asked <span
          class="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"
          >Questions</span
        >
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        Everything you need to know about Employee Envoy
      </p>
    </div>

    <div class="space-y-4">
      <details
        class="group rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all overflow-hidden"
      >
        <summary
          class="flex items-center justify-between cursor-pointer list-none p-4 sm:p-6"
        >
          <div class="flex items-center gap-3 sm:gap-4 min-w-0">
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
            >
              <Zap
                class="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400"
              />
            </div>
            <span
              class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-2 sm:pr-4"
              >How does the 14-day free trial work?</span
            >
          </div>
          <div
            class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 ml-2"
          >
            <ChevronDown
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-open:rotate-180 transition-transform"
            />
          </div>
        </summary>
        <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 ml-11 sm:ml-14">
          <p
            class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Start your free trial with full access to all features. <span
              class="font-medium text-gray-900 dark:text-white"
              >No credit card required.</span
            > You can cancel anytime during the trial period with no charges.
          </p>
        </div>
      </details>

      <details
        class="group rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all overflow-hidden"
      >
        <summary
          class="flex items-center justify-between cursor-pointer list-none p-4 sm:p-6"
        >
          <div class="flex items-center gap-3 sm:gap-4 min-w-0">
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
            >
              <Building2
                class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400"
              />
            </div>
            <span
              class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-2 sm:pr-4"
              >Can I use Employee Envoy for multiple customer organizations?</span
            >
          </div>
          <div
            class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 ml-2"
          >
            <ChevronDown
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-open:rotate-180 transition-transform"
            />
          </div>
        </summary>
        <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 ml-11 sm:ml-14">
          <p
            class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Yes! Employee Envoy is built for MSPs managing multiple clients. The
            Professional and Enterprise plans support <span
              class="font-medium text-gray-900 dark:text-white"
              >multiple customer organizations</span
            > with complete data isolation.
          </p>
        </div>
      </details>

      <details
        class="group rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all overflow-hidden"
      >
        <summary
          class="flex items-center justify-between cursor-pointer list-none p-4 sm:p-6"
        >
          <div class="flex items-center gap-3 sm:gap-4 min-w-0">
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/50 dark:to-violet-900/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
            >
              <Code
                class="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400"
              />
            </div>
            <span
              class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-2 sm:pr-4"
              >What integrations are supported?</span
            >
          </div>
          <div
            class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 ml-2"
          >
            <ChevronDown
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-open:rotate-180 transition-transform"
            />
          </div>
        </summary>
        <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 ml-11 sm:ml-14">
          <p
            class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            We support <span class="font-medium text-gray-900 dark:text-white"
              >120+ integrations</span
            >
            including Microsoft 365, Google Workspace, Slack, Okta, Azure AD, Active
            Directory, GitHub, Jira, and many more.
            <a
              href="/integrations"
              class="text-amber-600 dark:text-amber-400 hover:underline font-medium"
              >View the full list</a
            >.
          </p>
        </div>
      </details>

      <details
        class="group rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all overflow-hidden"
      >
        <summary
          class="flex items-center justify-between cursor-pointer list-none p-4 sm:p-6"
        >
          <div class="flex items-center gap-3 sm:gap-4 min-w-0">
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
            >
              <Shield
                class="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400"
              />
            </div>
            <span
              class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-2 sm:pr-4"
              >Is my data secure?</span
            >
          </div>
          <div
            class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 ml-2"
          >
            <ChevronDown
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-open:rotate-180 transition-transform"
            />
          </div>
        </summary>
        <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 ml-11 sm:ml-14">
          <p
            class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Absolutely. We use <span
              class="font-medium text-gray-900 dark:text-white"
              >end-to-end encryption</span
            >, PBKDF2 password hashing, MFA support, role-based access control,
            and comprehensive audit logging. All data is encrypted at rest and
            in transit.
            <a
              href="/security"
              class="text-amber-600 dark:text-amber-400 hover:underline font-medium"
              >Learn more about our security practices</a
            >.
          </p>
        </div>
      </details>

      <details
        class="group rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all overflow-hidden"
      >
        <summary
          class="flex items-center justify-between cursor-pointer list-none p-4 sm:p-6"
        >
          <div class="flex items-center gap-3 sm:gap-4 min-w-0">
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
            >
              <Clock
                class="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400"
              />
            </div>
            <span
              class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-2 sm:pr-4"
              >What happens after my trial ends?</span
            >
          </div>
          <div
            class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 ml-2"
          >
            <ChevronDown
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-open:rotate-180 transition-transform"
            />
          </div>
        </summary>
        <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 ml-11 sm:ml-14">
          <p
            class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            After your 14-day trial, you can choose to subscribe to any plan.
            Your data and configurations will be preserved. If you don't
            subscribe, your account will be paused but <span
              class="font-medium text-gray-900 dark:text-white"
              >your data will be retained for 30 days</span
            > in case you decide to come back.
          </p>
        </div>
      </details>

      <details
        class="group rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all overflow-hidden"
      >
        <summary
          class="flex items-center justify-between cursor-pointer list-none p-4 sm:p-6"
        >
          <div class="flex items-center gap-3 sm:gap-4 min-w-0">
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
            >
              <MessageSquare
                class="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 dark:text-rose-400"
              />
            </div>
            <span
              class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-2 sm:pr-4"
              >Can I request a custom integration?</span
            >
          </div>
          <div
            class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 ml-2"
          >
            <ChevronDown
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-open:rotate-180 transition-transform"
            />
          </div>
        </summary>
        <div class="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 ml-11 sm:ml-14">
          <p
            class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Yes! We're constantly adding new integrations based on customer
            feedback. <span class="font-medium text-gray-900 dark:text-white"
              >Enterprise customers</span
            >
            can request priority development of specific integrations.
            <a
              href="/contact"
              class="text-amber-600 dark:text-amber-400 hover:underline font-medium"
              >Contact us</a
            > to discuss your needs.
          </p>
        </div>
      </details>
    </div>

    <!-- Still have questions CTA -->
    <div class="mt-12 text-center">
      <p class="text-gray-600 dark:text-gray-400 mb-4">Still have questions?</p>
      <a
        href="/contact"
        class="inline-flex items-center gap-2 px-6 py-3 font-semibold text-amber-600 dark:text-amber-400 border-2 border-amber-200 dark:border-amber-700 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-all"
      >
        <MessageSquare class="w-5 h-5" />
        Contact our team
      </a>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <!-- Animated gradient background -->
  <div
    class="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 animate-gradient"
  ></div>

  <!-- Pattern overlay -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute inset-0"
      style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);"
    ></div>
  </div>

  <!-- Decorative circles -->
  <div
    class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
  ></div>
  <div
    class="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
  ></div>
  <div
    class="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"
  ></div>

  <div class="relative max-w-5xl mx-auto text-center">
    <!-- Badge -->
    <div
      class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-8 backdrop-blur-sm"
    >
      <Sparkles class="w-4 h-4" />
      <span>Start Your Journey Today</span>
    </div>

    <h2
      class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight"
    >
      Ready to Transform Your<br />
      <span class="relative inline-block">
        Employee Lifecycle?
        <svg
          class="absolute -bottom-2 left-0 w-full h-3 text-white/30"
          viewBox="0 0 300 12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,8 Q75,0 150,8 T300,8"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </h2>

    <p class="text-xl sm:text-2xl text-amber-100 mb-10 max-w-2xl mx-auto">
      Start your 14-day free trial today. <span class="text-white font-semibold"
        >No credit card required.</span
      >
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
      <a
        href="/contact"
        class="group w-full sm:w-auto px-10 py-5 text-lg font-bold text-amber-600 bg-white rounded-2xl hover:bg-amber-50 transition-all shadow-2xl shadow-amber-900/20 hover:shadow-amber-900/30 hover:scale-105 flex items-center justify-center gap-3"
      >
        <Zap class="w-5 h-5" />
        Start Free Trial
        <ArrowRight
          class="w-5 h-5 group-hover:translate-x-1 transition-transform"
        />
      </a>
      <a
        href="/contact"
        class="group w-full sm:w-auto px-10 py-5 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all flex items-center justify-center gap-3"
      >
        <Play class="w-5 h-5" />
        Schedule a Demo
        <ChevronRight
          class="w-5 h-5 group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>

    <!-- Trust indicators -->
    <div
      class="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80"
    >
      <div class="flex items-center gap-2">
        <CheckCircle2 class="w-5 h-5 text-white" />
        <span>Free 14-day trial</span>
      </div>
      <div class="flex items-center gap-2">
        <CheckCircle2 class="w-5 h-5 text-white" />
        <span>No setup fees</span>
      </div>
      <div class="flex items-center gap-2">
        <CheckCircle2 class="w-5 h-5 text-white" />
        <span>Cancel anytime</span>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer
  class="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 text-gray-400 overflow-hidden"
>
  <!-- Background decoration -->
  <div
    class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
  ></div>
  <div
    class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/5 blur-3xl rounded-full"
  ></div>

  <div class="relative max-w-7xl mx-auto">
    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
      <!-- Brand column -->
      <div class="lg:col-span-2">
        <div class="mb-5">
          <Logo size="md" variant="light" />
        </div>
        <p class="text-gray-400 mb-6 max-w-xs leading-relaxed">
          Your Trusted Partner for Employee Transitions. Automate onboarding,
          offboarding, and status changes with ease.
        </p>
        <!-- Contact links -->
        <div class="flex items-center gap-4">
          <a
            href="/contact"
            class="w-10 h-10 rounded-xl bg-slate-800 hover:bg-amber-500 flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
            aria-label="Contact us"
          >
            <MessageSquare class="w-5 h-5" />
          </a>
          <a
            href="/security"
            class="w-10 h-10 rounded-xl bg-slate-800 hover:bg-amber-500 flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
            aria-label="Security information"
          >
            <Shield class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Product column -->
      <div>
        <h4 class="text-white font-bold mb-5 text-sm uppercase tracking-wider">
          Product
        </h4>
        <ul class="space-y-3">
          <li>
            <a
              href="#how-it-works"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />How It Works</a
            >
          </li>
          <li>
            <a
              href="#features"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Features</a
            >
          </li>
          <li>
            <a
              href="/integrations"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Integrations</a
            >
          </li>
          <li>
            <a
              href="#pricing"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Pricing</a
            >
          </li>
        </ul>
      </div>

      <!-- Resources column -->
      <div>
        <h4 class="text-white font-bold mb-5 text-sm uppercase tracking-wider">
          Resources
        </h4>
        <ul class="space-y-3">
          <li>
            <a
              href="/security"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Security</a
            >
          </li>
          <li>
            <a
              href="/contact"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Contact Us</a
            >
          </li>
          <li>
            <a
              href="#faq"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />FAQ</a
            >
          </li>
        </ul>
      </div>

      <!-- Legal column -->
      <div>
        <h4 class="text-white font-bold mb-5 text-sm uppercase tracking-wider">
          Legal
        </h4>
        <ul class="space-y-3">
          <li>
            <a
              href="/privacy"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Privacy Policy</a
            >
          </li>
          <li>
            <a
              href="/terms"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Terms of Service</a
            >
          </li>
          <li>
            <a
              href="/privacy#do-not-sell"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Do Not Sell My Info</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-slate-800/50 pt-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-2 text-sm">
          <span class="text-gray-500"
            >&copy; 2026 Employee Envoy. All rights reserved.</span
          >
        </div>

        <!-- Trust badges -->
        <div
          class="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6"
        >
          <div class="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <Lock class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
            <span class="text-gray-500">AES-256</span>
          </div>
          <div class="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <Shield class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
            <span class="text-gray-500">SOC 2 Ready</span>
          </div>
          <div class="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <Globe class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
            <span class="text-gray-500">GDPR</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  /* Smooth fade-in animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .animate-fade-in-delay-1 {
    animation: fadeInUp 0.6s ease-out 0.1s forwards;
    opacity: 0;
  }

  .animate-fade-in-delay-2 {
    animation: fadeInUp 0.6s ease-out 0.2s forwards;
    opacity: 0;
  }

  .animate-fade-in-delay-3 {
    animation: fadeInUp 0.6s ease-out 0.3s forwards;
    opacity: 0;
  }

  /* Dashboard mockup animation */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  /* Gradient animation */
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }

  /* Blob animation */
  @keyframes blob {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(20px, -30px) scale(1.05);
    }
    50% {
      transform: translate(-20px, 20px) scale(0.95);
    }
    75% {
      transform: translate(30px, 10px) scale(1.02);
    }
  }

  .animate-blob {
    animation: blob 12s ease-in-out infinite;
  }

  .animate-blob-delay {
    animation: blob 12s ease-in-out 2s infinite;
  }

  .animate-blob-delay-2 {
    animation: blob 12s ease-in-out 4s infinite;
  }

  /* Pulse glow effect */
  @keyframes pulseGlow {
    0%,
    100% {
      box-shadow: 0 0 20px rgba(251, 146, 60, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(251, 146, 60, 0.6);
    }
  }

  .animate-pulse-glow {
    animation: pulseGlow 3s ease-in-out infinite;
  }

  /* Grid pattern background */
  .bg-grid-pattern {
    background-image: linear-gradient(
        rgba(251, 146, 60, 0.03) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(251, 146, 60, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* Dotted pattern */
  .bg-dot-pattern {
    background-image: radial-gradient(
      rgba(251, 146, 60, 0.15) 1px,
      transparent 1px
    );
    background-size: 24px 24px;
  }
</style>
