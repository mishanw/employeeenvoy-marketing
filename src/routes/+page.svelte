<script lang="ts">
  import { onMount } from 'svelte';
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
    Menu,
    X,
    Play,
    CheckCircle2,
    AlertCircle,
    UserPlus,
    UserMinus
  } from '@lucide/svelte';
  import Logo from '$lib/components/Logo.svelte';

  let mounted = $state(false);
  let mobileMenuOpen = $state(false);
  let scrollY = $state(0);

  onMount(() => {
    mounted = true;

    // Scroll handler for nav background
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToSection(id: string) {
    mobileMenuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<svelte:head>
  <title>Employee Envoy - Employee Lifecycle Management for MSPs & Enterprises</title>
  <meta name="description" content="Streamline employee onboarding, offboarding, and status changes across 80+ business applications. Built for MSPs and IT teams." />
</svelte:head>

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
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  /* Gradient animation */
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }

  /* Hide scrollbar for mobile menu */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrollY > 50 ? 'bg-white/95 dark:bg-slate-900/95 shadow-lg' : 'bg-white/80 dark:bg-slate-900/80'} backdrop-blur-lg border-b border-gray-200/50 dark:border-slate-800/50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/" class="flex-shrink-0">
        <Logo size="sm" variant="default" />
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#features" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Features</a>
        <a href="#pricing" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Pricing</a>
        <a href="/integrations" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Integrations</a>
        <a href="/security" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Security</a>
        <a href="/contact" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Contact</a>
      </div>

      <div class="flex items-center gap-3">
        <a
          href="/contact"
          class="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Get Started
        </a>

        <!-- Mobile menu button -->
        <button
          onclick={() => mobileMenuOpen = !mobileMenuOpen}
          class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {#if mobileMenuOpen}
            <X class="w-6 h-6" />
          {:else}
            <Menu class="w-6 h-6" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation -->
  {#if mobileMenuOpen}
    <div class="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 shadow-xl">
      <div class="px-4 py-4 space-y-3">
        <a href="#features" onclick={() => mobileMenuOpen = false} class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors">Features</a>
        <a href="#pricing" onclick={() => mobileMenuOpen = false} class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors">Pricing</a>
        <a href="/integrations" class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors">Integrations</a>
        <a href="/security" class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors">Security</a>
        <a href="/contact" class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors">Contact</a>
        <a
          href="/contact"
          class="block w-full text-center px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg mt-4"
        >
          Get Started Free
        </a>
      </div>
    </div>
  {/if}
</nav>

<!-- Hero Section with Dashboard Mockup -->
<section class="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Text Content -->
      <div class="text-center lg:text-left">
        {#if mounted}
          <div class="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-6">
            <Sparkles class="w-4 h-4" />
            <span>Your Trusted Partner for Employee Transitions</span>
          </div>

          <h1 class="animate-fade-in-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Employee Lifecycle
            <span class="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Management</span>
            Made Simple
          </h1>

          <p class="animate-fade-in-delay-2 text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            Automate onboarding, offboarding, and status changes across 80+ business applications. Built for MSPs and enterprises.
          </p>

          <div class="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href="/contact"
              class="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight class="w-5 h-5" />
            </a>
            <a
              href="#features"
              class="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl hover:border-amber-500 transition-all flex items-center justify-center gap-2"
            >
              <Play class="w-5 h-5" />
              See How It Works
            </a>
          </div>

          <!-- Trust indicators -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-green-500" />
              <span>80+ integrations</span>
            </div>
          </div>
        {/if}
      </div>

      <!-- Right: Dashboard Mockup -->
      <div class="relative hidden lg:block">
        {#if mounted}
          <div class="animate-fade-in-delay-2 animate-float">
            <!-- Main Dashboard Card -->
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
              <!-- Header -->
              <div class="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Users class="w-5 h-5 text-white" />
                    </div>
                    <span class="text-white font-semibold">Employee Envoy Dashboard</span>
                  </div>
                  <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-white/30"></div>
                    <div class="w-3 h-3 rounded-full bg-white/30"></div>
                    <div class="w-3 h-3 rounded-full bg-white/30"></div>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6 space-y-4">
                <!-- Stats Row -->
                <div class="grid grid-cols-3 gap-4">
                  <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                    <p class="text-2xl font-bold text-green-600 dark:text-green-400">24</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Active</p>
                  </div>
                  <div class="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 text-center">
                    <p class="text-2xl font-bold text-amber-600 dark:text-amber-400">8</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Pending</p>
                  </div>
                  <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                    <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">156</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Completed</p>
                  </div>
                </div>

                <!-- Recent Activity -->
                <div class="space-y-3">
                  <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Recent Activity</p>

                  <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                    <div class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <UserPlus class="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 dark:text-white truncate">Sarah Chen - Onboarding</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">Microsoft 365, Slack, Okta</p>
                    </div>
                    <span class="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">Completed</span>
                  </div>

                  <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                    <div class="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <UserMinus class="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 dark:text-white truncate">John Miller - Offboarding</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">8 of 12 tasks completed</p>
                    </div>
                    <span class="px-2 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full">In Progress</span>
                  </div>

                  <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                    <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <UserPlus class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 dark:text-white truncate">Alex Rivera - Onboarding</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">Starting Monday</p>
                    </div>
                    <span class="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">Scheduled</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Integration Badges -->
            <div class="absolute -right-4 top-20 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-3 border border-gray-200 dark:border-slate-700">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">M</div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Microsoft 365</span>
                <CheckCircle2 class="w-4 h-4 text-green-500" />
              </div>
            </div>

            <div class="absolute -left-4 bottom-32 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-3 border border-gray-200 dark:border-slate-700">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">S</div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Slack</span>
                <CheckCircle2 class="w-4 h-4 text-green-500" />
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- Trusted By / Social Proof Section -->
<section class="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
  <div class="max-w-7xl mx-auto">
    <p class="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">BUILT FOR TEAMS THAT USE</p>
    <div class="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
      <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">M</div>
        <span class="font-semibold">Microsoft 365</span>
      </div>
      <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <div class="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white font-bold text-sm">G</div>
        <span class="font-semibold">Google Workspace</span>
      </div>
      <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <div class="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-sm">S</div>
        <span class="font-semibold">Slack</span>
      </div>
      <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">O</div>
        <span class="font-semibold">Okta</span>
      </div>
      <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <div class="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">A</div>
        <span class="font-semibold">AWS</span>
      </div>
    </div>
  </div>
</section>

<!-- Problem Section -->
<section id="problem" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        The Problem You're Solving
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Employee lifecycle management is fragmented, time-consuming, and error-prone
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
      <div class="p-6 sm:p-8 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 hover:scale-105 transition-transform">
        <div class="w-14 h-14 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-4">
          <Clock class="w-7 h-7 text-red-600 dark:text-red-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Hours of Manual Work</h3>
        <p class="text-gray-600 dark:text-gray-300">
          IT teams spend 4-6 hours per employee manually provisioning accounts across multiple systems
        </p>
      </div>

      <div class="p-6 sm:p-8 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 hover:scale-105 transition-transform">
        <div class="w-14 h-14 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-4">
          <AlertCircle class="w-7 h-7 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Security Risks</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Forgotten accounts, incomplete offboarding, and manual errors create security vulnerabilities
        </p>
      </div>

      <div class="p-6 sm:p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50 hover:scale-105 transition-transform">
        <div class="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
          <TrendingUp class="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Lack of Visibility</h3>
        <p class="text-gray-600 dark:text-gray-300">
          No centralized view of employee status, pending tasks, or integration health across customers
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section id="features" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Everything You Need
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Powerful features designed for MSPs and enterprise IT teams
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <!-- Feature 1 -->
      <div class="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 hover:shadow-xl transition-all">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Zap class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Automated Workflows</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Automate onboarding and offboarding across 80+ applications with customizable playbooks
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 hover:shadow-xl transition-all">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Building2 class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Multi-Tenant Support</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Manage multiple customer organizations from a single dashboard with complete data isolation
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 hover:shadow-xl transition-all">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Globe class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">80+ Integrations</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Connect Microsoft 365, Google Workspace, Slack, Okta, and dozens more with guided setup
        </p>
      </div>

      <!-- Feature 4 -->
      <div class="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 hover:shadow-xl transition-all">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <BarChart3 class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Real-Time Dashboard</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Monitor requests, track progress, and view metrics with persona-based views for each role
        </p>
      </div>

      <!-- Feature 5 -->
      <div class="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 hover:shadow-xl transition-all">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Shield class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Enterprise Security</h3>
        <p class="text-gray-600 dark:text-gray-300">
          End-to-end encryption, audit logs, MFA, and role-based access control built in
        </p>
      </div>

      <!-- Feature 6 -->
      <div class="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 hover:shadow-xl transition-all">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Users class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Role-Based Access</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Persona-based UI adapts to MSP Admin, Technician, Customer HR, and Enterprise Admin roles
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Solutions Section -->
<section id="solutions" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Built for Your Use Case
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Whether you're an MSP managing multiple clients or an enterprise IT team
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
      <!-- MSP Solution -->
      <div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800 hover:shadow-xl transition-shadow">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center">
            <Building2 class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">For MSPs</h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Manage employee lifecycles across all your customer organizations from one unified platform
        </p>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Customer switcher for quick context switching</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Aggregated dashboards across all customers</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Per-customer integration management</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Desktop app for offline credential access</span>
          </li>
        </ul>
        <a href="#pricing" class="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold hover:gap-3 transition-all">
          View MSP Pricing
          <ChevronRight class="w-4 h-4" />
        </a>
      </div>

      <!-- Enterprise Solution -->
      <div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-shadow">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center">
            <Users class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">For Enterprises</h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Streamline IT operations with automated workflows and comprehensive audit trails
        </p>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Self-service request portal for HR teams</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Complete audit logging for compliance</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Role-based access with persona-based UI</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">API access for custom integrations</span>
          </li>
        </ul>
        <a href="#pricing" class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">
          View Enterprise Pricing
          <ChevronRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section id="pricing" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Simple Bucket Pricing
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        No per-user fees. No surprise charges. Pick your bucket and go.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
      <!-- Starter Plan -->
      <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-amber-300 transition-colors">
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">$199</span>
            <span class="text-gray-600 dark:text-gray-400">/month</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Up to 50 employees</p>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">All 80+ integrations</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Unlimited playbooks</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Welcome letter portal</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Email support (24hr response)</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Audit logs (90 days)</span>
          </li>
        </ul>
        <a
          href="/contact?plan=starter"
          class="block w-full text-center px-6 py-3 font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
        >
          Start Free Trial
        </a>
      </div>

      <!-- Professional Plan (Popular) -->
      <div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white border-2 border-amber-500 relative transform md:scale-105 shadow-2xl">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </div>
        <div class="mb-6">
          <h3 class="text-2xl font-bold mb-2">Professional</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-4xl sm:text-5xl font-bold">$399</span>
            <span class="text-amber-100">/month</span>
          </div>
          <p class="text-sm text-amber-100 mt-2">Up to 200 employees</p>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>Everything in Starter</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>Multi-customer management (MSP)</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>API access</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>Priority support (4hr response)</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>SSO (Google/Microsoft/Okta)</span>
          </li>
        </ul>
        <a
          href="/contact?plan=professional"
          class="block w-full text-center px-6 py-3 font-semibold text-amber-600 bg-white rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
        >
          Start Free Trial
        </a>
      </div>

      <!-- Enterprise Plan -->
      <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-amber-300 transition-colors">
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">$799</span>
            <span class="text-gray-600 dark:text-gray-400">/month</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Up to 500 employees</p>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Everything in Professional</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">SCIM user provisioning</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Dedicated account manager</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">99.9% SLA guarantee</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300">Audit logs (unlimited)</span>
          </li>
        </ul>
        <a
          href="/contact?plan=enterprise"
          class="block w-full text-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all"
        >
          Start Free Trial
        </a>
      </div>
    </div>

    <!-- Pricing Notes -->
    <div class="mt-12 text-center">
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        14-day free trial on all plans &bull; No credit card required &bull; Cancel anytime
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-500">
        Annual billing: <span class="font-semibold text-amber-600 dark:text-amber-400">Save 2 months free</span> when you pay yearly
      </p>
    </div>
  </div>
</section>

<!-- Integration Showcase Section -->
<section id="integrations" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Integrate with Your Stack
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Connect with 80+ business applications your team already uses
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg hover:border-amber-300 transition-all">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Code class="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Identity & SSO</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Okta, Azure AD, JumpCloud, Active Directory</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg hover:border-amber-300 transition-all">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <MessageSquare class="w-7 h-7 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Communication</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Slack, Microsoft Teams, Zoom, RingCentral</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg hover:border-amber-300 transition-all">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
          <Database class="w-7 h-7 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Productivity</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Microsoft 365, Google Workspace, Adobe</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg hover:border-amber-300 transition-all">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
          <Cloud class="w-7 h-7 text-orange-600 dark:text-orange-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Cloud & DevOps</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">AWS, Azure, GCP, GitHub, Jira</p>
      </div>
    </div>

    <div class="text-center">
      <a
        href="/integrations"
        class="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/30 hover:scale-105 transition-all"
      >
        Browse All 80+ Integrations
        <ArrowRight class="w-5 h-5" />
      </a>
    </div>
  </div>
</section>

<!-- Security Section -->
<section id="security" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
        <Shield class="w-4 h-4" />
        <span>Enterprise-Grade Security</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Your Data Security is Our Priority
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Built with security-first architecture, comprehensive compliance controls, and transparent practices
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <Lock class="w-7 h-7 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">AES-256 Encryption</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Data encrypted at rest and in transit with TLS 1.3</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Shield class="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Multi-Factor Auth</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">TOTP-based MFA with backup codes for all accounts</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
          <BarChart3 class="w-7 h-7 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Audit Logging</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Comprehensive audit trails with configurable retention</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
          <Globe class="w-7 h-7 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">GDPR & CCPA</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Compliant with major privacy regulations</p>
      </div>
    </div>

    <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800 p-6 sm:p-8">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Security Commitment</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700 dark:text-gray-300">Multi-tenant architecture with strict data isolation</span>
            </li>
            <li class="flex items-start gap-3">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700 dark:text-gray-300">Documented incident response procedures</span>
            </li>
            <li class="flex items-start gap-3">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700 dark:text-gray-300">Regular security assessments and updates</span>
            </li>
            <li class="flex items-start gap-3">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700 dark:text-gray-300">Actively building toward SOC 2 Type II certification</span>
            </li>
          </ul>
        </div>
        <div class="text-center md:text-right">
          <a
            href="/security"
            class="inline-flex items-center gap-2 px-6 py-4 font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Security Whitepaper
            <ChevronRight class="w-5 h-5" />
          </a>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Download our complete security documentation
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Early Access Section -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
  <div class="max-w-4xl mx-auto text-center">
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-6">
      <Sparkles class="w-4 h-4" />
      <span>New Product - Early Access</span>
    </div>
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Be Among the First
    </h2>
    <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
      Employee Envoy is launching now. Join our early access program and help shape the future of employee lifecycle management.
    </p>
    <div class="grid sm:grid-cols-3 gap-6 mb-10">
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-800 shadow-lg">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
          <Zap class="w-7 h-7 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Early Access Pricing</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Lock in special pricing as an early adopter</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-800 shadow-lg">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <MessageSquare class="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Direct Input</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Your feedback shapes our product roadmap</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-800 shadow-lg">
        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <Star class="w-7 h-7 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Priority Support</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Get dedicated support from our team</p>
      </div>
    </div>
    <a
      href="/contact"
      class="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
    >
      Join Early Access
      <ArrowRight class="w-5 h-5" />
    </a>
  </div>
</section>

<!-- FAQ Section -->
<section id="faq" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Frequently Asked Questions
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        Everything you need to know about Employee Envoy
      </p>
    </div>

    <div class="space-y-4">
      <details class="group p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white pr-4">How does the 14-day free trial work?</span>
          <ChevronDown class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Start your free trial with full access to all features. No credit card required. You can cancel anytime during the trial period with no charges.
        </p>
      </details>

      <details class="group p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white pr-4">Can I use Employee Envoy for multiple customer organizations?</span>
          <ChevronDown class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Yes! Employee Envoy is built for MSPs managing multiple clients. The Professional and Enterprise plans support multiple customer organizations with complete data isolation.
        </p>
      </details>

      <details class="group p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white pr-4">What integrations are supported?</span>
          <ChevronDown class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          We support 80+ integrations including Microsoft 365, Google Workspace, Slack, Okta, Azure AD, Active Directory, GitHub, Jira, and many more. <a href="/integrations" class="text-amber-600 dark:text-amber-400 hover:underline">View the full list</a>.
        </p>
      </details>

      <details class="group p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white pr-4">Is my data secure?</span>
          <ChevronDown class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Absolutely. We use end-to-end encryption, PBKDF2 password hashing, MFA support, role-based access control, and comprehensive audit logging. All data is encrypted at rest and in transit. <a href="/security" class="text-amber-600 dark:text-amber-400 hover:underline">Learn more about our security practices</a>.
        </p>
      </details>

      <details class="group p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white pr-4">What happens after my trial ends?</span>
          <ChevronDown class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          After your 14-day trial, you can choose to subscribe to any plan. Your data and configurations will be preserved. If you don't subscribe, your account will be paused but your data will be retained for 30 days in case you decide to come back.
        </p>
      </details>

      <details class="group p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white pr-4">Can I request a custom integration?</span>
          <ChevronDown class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Yes! We're constantly adding new integrations based on customer feedback. Enterprise customers can request priority development of specific integrations. <a href="/contact" class="text-amber-600 dark:text-amber-400 hover:underline">Contact us</a> to discuss your needs.
        </p>
      </details>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 to-orange-500 animate-gradient">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
      Ready to Transform Your Employee Lifecycle Management?
    </h2>
    <p class="text-lg sm:text-xl text-amber-100 mb-8">
      Start your 14-day free trial today. No credit card required.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="/contact"
        class="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-amber-600 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
      >
        Start Free Trial
        <ArrowRight class="w-5 h-5" />
      </a>
      <a
        href="/contact"
        class="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
      >
        Schedule a Demo
      </a>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-gray-400">
  <div class="max-w-7xl mx-auto">
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      <div>
        <div class="mb-4">
          <Logo size="sm" variant="light" />
        </div>
        <p class="text-sm">
          Your Trusted Partner for Employee Transitions
        </p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">Product</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#features" class="hover:text-amber-400 transition-colors">Features</a></li>
          <li><a href="#pricing" class="hover:text-amber-400 transition-colors">Pricing</a></li>
          <li><a href="/integrations" class="hover:text-amber-400 transition-colors">Integrations</a></li>
          <li><a href="/security" class="hover:text-amber-400 transition-colors">Security</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">Company</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/contact" class="hover:text-amber-400 transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">Legal</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/privacy" class="hover:text-amber-400 transition-colors">Privacy</a></li>
          <li><a href="/terms" class="hover:text-amber-400 transition-colors">Terms</a></li>
          <li><a href="/privacy#do-not-sell" class="hover:text-amber-400 transition-colors">Do Not Sell My Info</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
      <p>&copy; 2026 Employee Envoy. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a href="/privacy" class="hover:text-amber-400 transition-colors">Privacy</a>
        <a href="/terms" class="hover:text-amber-400 transition-colors">Terms</a>
        <a href="/security" class="hover:text-amber-400 transition-colors">Security</a>
      </div>
    </div>
  </div>
</footer>
