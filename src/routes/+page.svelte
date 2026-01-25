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
    HelpCircle,
    Code,
    Database,
    Cloud,
    MessageSquare
  } from '@lucide/svelte';
  import Logo from '$lib/components/Logo.svelte';

  let mounted = $state(false);
  onMount(() => { mounted = true; });

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<svelte:head>
  <title>Employee Envoy - Employee Lifecycle Management for MSPs & Enterprises</title>
  <meta name="description" content="Streamline employee onboarding, offboarding, and status changes across 80+ business applications. Built for MSPs and IT teams." />
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/">
        <Logo size="sm" variant="default" />
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#features" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Features</a>
        <a href="#pricing" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Pricing</a>
        <a href="/integrations" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Integrations</a>
        <a href="/security" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Security</a>
        <a href="/contact" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">Contact</a>
      </div>

      <div class="flex items-center gap-3">
        <a
          href="#pricing"
          class="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-8">
        <Sparkles class="w-4 h-4" />
        <span>Your Trusted Partner for Employee Transitions</span>
      </div>

      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
        Employee Lifecycle
        <span class="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Management</span>
        <br />Made Simple
      </h1>

      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Professional employee lifecycle management made simple. Automate onboarding, offboarding, and status changes across 80+ business applications.
        Built for MSPs managing multiple customers and enterprises streamlining IT operations.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a
          href="#pricing"
          class="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
        >
          Start Free Trial
          <ArrowRight class="w-5 h-5" />
        </a>
        <a
          href="#features"
          class="px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl hover:border-amber-500 transition-all flex items-center gap-2"
        >
          See How It Works
        </a>
      </div>

      <!-- Key Stats -->
      <div class="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
        <div class="flex items-center gap-2">
          <Sparkles class="w-4 h-4 text-amber-400" />
          <span class="font-semibold text-gray-900 dark:text-white">New</span>
          <span>Early Access Available</span>
        </div>
        <div class="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
        <div>
          <span class="font-semibold text-gray-900 dark:text-white">80+</span> app integrations
        </div>
        <div class="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
        <div>
          <span class="font-semibold text-gray-900 dark:text-white">14-day</span> free trial
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Problem Section -->
<section id="problem" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        The Problem You're Solving
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Employee lifecycle management is fragmented, time-consuming, and error-prone
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-6 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50">
        <div class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-4">
          <Clock class="w-6 h-6 text-red-600 dark:text-red-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hours of Manual Work</h3>
        <p class="text-gray-600 dark:text-gray-300">
          IT teams spend 4-6 hours per employee manually provisioning accounts across multiple systems
        </p>
      </div>

      <div class="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50">
        <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-4">
          <Shield class="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Security Risks</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Forgotten accounts, incomplete offboarding, and manual errors create security vulnerabilities
        </p>
      </div>

      <div class="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50">
        <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
          <TrendingUp class="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Lack of Visibility</h3>
        <p class="text-gray-600 dark:text-gray-300">
          No centralized view of employee status, pending tasks, or integration health across customers
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section id="features" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Everything You Need
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Powerful features designed for MSPs and enterprise IT teams
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Feature 1 -->
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 transition-all">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
          <Zap class="w-6 h-6 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Automated Workflows</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Automate onboarding and offboarding across 80+ applications with customizable playbooks
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 transition-all">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
          <Building2 class="w-6 h-6 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Multi-Tenant Support</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Manage multiple customer organizations from a single dashboard with complete data isolation
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 transition-all">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
          <Globe class="w-6 h-6 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">80+ Integrations</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Connect Microsoft 365, Google Workspace, Slack, Okta, and dozens more with guided setup
        </p>
      </div>

      <!-- Feature 4 -->
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 transition-all">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
          <BarChart3 class="w-6 h-6 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Real-Time Dashboard</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Monitor requests, track progress, and view metrics with persona-based views for each role
        </p>
      </div>

      <!-- Feature 5 -->
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 transition-all">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
          <Shield class="w-6 h-6 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Enterprise Security</h3>
        <p class="text-gray-600 dark:text-gray-300">
          End-to-end encryption, audit logs, MFA, and role-based access control built in
        </p>
      </div>

      <!-- Feature 6 -->
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-500 transition-all">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
          <Users class="w-6 h-6 text-white" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Role-Based Access</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Persona-based UI adapts to MSP Admin, Technician, Customer HR, and Enterprise Admin roles
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Solutions Section -->
<section id="solutions" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Built for Your Use Case
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Whether you're an MSP managing multiple clients or an enterprise IT team
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- MSP Solution -->
      <div class="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
            <Building2 class="w-6 h-6 text-white" />
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
      <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
            <Users class="w-6 h-6 text-white" />
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
<section id="pricing" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Simple Bucket Pricing
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        No per-user fees. No surprise charges. Pick your bucket and go.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <!-- Starter Plan -->
      <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700">
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-5xl font-bold text-gray-900 dark:text-white">$199</span>
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
          class="block w-full text-center px-6 py-3 font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
        >
          Contact Us
        </a>
      </div>

      <!-- Professional Plan (Popular) -->
      <div class="p-8 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white border-2 border-amber-500 relative transform md:scale-105 shadow-xl">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </div>
        <div class="mb-6">
          <h3 class="text-2xl font-bold mb-2">Professional</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-5xl font-bold">$399</span>
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
          class="block w-full text-center px-6 py-3 font-semibold text-amber-600 bg-white rounded-lg hover:bg-amber-50 transition-colors shadow-lg"
        >
          Contact Us
        </a>
      </div>

      <!-- Enterprise Plan -->
      <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700">
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-5xl font-bold text-gray-900 dark:text-white">$799</span>
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
          class="block w-full text-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>

    <!-- Pricing Notes -->
    <div class="mt-12 text-center">
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        14-day free trial on all plans • No credit card required • Cancel anytime
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-500">
        Annual billing: <span class="font-semibold text-amber-600 dark:text-amber-400">Save 2 months free</span> when you pay yearly
      </p>
    </div>
  </div>
</section>

<!-- Integration Showcase Section -->
<section id="integrations" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Integrate with Your Stack
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Connect with 80+ business applications your team already uses
      </p>
    </div>

    <div class="grid md:grid-cols-4 gap-6 mb-12">
      <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Code class="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Identity & SSO</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Okta, Azure AD, JumpCloud, Active Directory</p>
      </div>
      <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <MessageSquare class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Communication</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Slack, Microsoft Teams, Zoom, RingCentral</p>
      </div>
      <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
          <Database class="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Productivity</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Microsoft 365, Google Workspace, Adobe</p>
      </div>
      <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
          <Cloud class="w-6 h-6 text-orange-600 dark:text-orange-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Cloud & DevOps</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">AWS, Azure, GCP, GitHub, Jira</p>
      </div>
    </div>

    <div class="text-center">
      <a
        href="/integrations"
        class="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-all"
      >
        Browse All 80+ Integrations
        <ArrowRight class="w-5 h-5" />
      </a>
    </div>
  </div>
</section>

<!-- Security Section -->
<section id="security" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
        <Shield class="w-4 h-4" />
        <span>Enterprise-Grade Security</span>
      </div>
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Your Data Security is Our Priority
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Built with security-first architecture, comprehensive compliance controls, and transparent practices
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <Lock class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">AES-256 Encryption</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Data encrypted at rest and in transit with TLS 1.3</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Shield class="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Multi-Factor Auth</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">TOTP-based MFA with backup codes for all accounts</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
          <BarChart3 class="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Audit Logging</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Comprehensive audit trails with configurable retention</p>
      </div>
      <div class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
          <Globe class="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">GDPR & CCPA</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Compliant with major privacy regulations</p>
      </div>
    </div>

    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
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
            class="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all shadow-lg"
          >
            View Security Whitepaper
            <ChevronRight class="w-4 h-4" />
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
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-4xl mx-auto text-center">
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-8">
      <Sparkles class="w-4 h-4" />
      <span>New Product - Early Access</span>
    </div>
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Be Among the First
    </h2>
    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
      Employee Envoy is launching now. Join our early access program and help shape the future of employee lifecycle management.
    </p>
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
          <Zap class="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Early Access Pricing</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Lock in special pricing as an early adopter</p>
      </div>
      <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <MessageSquare class="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Direct Input</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Your feedback shapes our product roadmap</p>
      </div>
      <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <div class="w-12 h-12 mx-auto mb-4 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <Star class="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Priority Support</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Get dedicated support from our team</p>
      </div>
    </div>
    <a
      href="/contact"
      class="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl hover:shadow-2xl"
    >
      Join Early Access
      <ArrowRight class="w-5 h-5" />
    </a>
  </div>
</section>

<!-- FAQ Section -->
<section id="faq" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Frequently Asked Questions
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        Everything you need to know about Employee Envoy
      </p>
    </div>

    <div class="space-y-6">
      <details class="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white">How does the 14-day free trial work?</span>
          <HelpCircle class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Start your free trial with full access to all features. No credit card required. You can cancel anytime during the trial period with no charges.
        </p>
      </details>

      <details class="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white">Can I use Employee Envoy for multiple customer organizations?</span>
          <HelpCircle class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Yes! Employee Envoy is built for MSPs managing multiple clients. The Professional and Enterprise plans support multiple customer organizations with complete data isolation.
        </p>
      </details>

      <details class="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white">What integrations are supported?</span>
          <HelpCircle class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          We support 80+ integrations including Microsoft 365, Google Workspace, Slack, Okta, Azure AD, Active Directory, GitHub, Jira, and many more.
        </p>
      </details>

      <details class="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-lg font-semibold text-gray-900 dark:text-white">Is my data secure?</span>
          <HelpCircle class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
        </summary>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Absolutely. We use end-to-end encryption, PBKDF2 password hashing, MFA support, role-based access control, and comprehensive audit logging. All data is encrypted at rest and in transit.
        </p>
      </details>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 to-orange-500">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-4xl font-bold text-white mb-4">
      Ready to Transform Your Employee Lifecycle Management?
    </h2>
    <p class="text-xl text-amber-100 mb-8">
      Contact us to learn more about Employee Envoy
    </p>
    <a
      href="/contact"
      class="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-amber-600 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl"
    >
      Get in Touch
      <ArrowRight class="w-5 h-5" />
    </a>
  </div>
</section>

<!-- Footer -->
<footer class="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-gray-400">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <div class="mb-4">
          <Logo size="sm" variant="light" />
        </div>
        <p class="text-sm">
          Your Trusted Partner for Employee Transitions - Built for MSPs and enterprises
        </p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">Product</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#features" class="hover:text-amber-400 transition-colors">Features</a></li>
          <li><a href="#pricing" class="hover:text-amber-400 transition-colors">Pricing</a></li>
          <li><a href="#integrations" class="hover:text-amber-400 transition-colors">Integrations</a></li>
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
          <li><a href="/security" class="hover:text-amber-400 transition-colors">Security</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm">
      <p>&copy; 2026 Employee Envoy. All rights reserved.</p>
      <div class="flex items-center gap-6 mt-4 sm:mt-0">
        <a href="/privacy" class="hover:text-amber-400 transition-colors">Privacy</a>
        <a href="/terms" class="hover:text-amber-400 transition-colors">Terms</a>
        <a href="/security" class="hover:text-amber-400 transition-colors">Security</a>
      </div>
    </div>
  </div>
</footer>
