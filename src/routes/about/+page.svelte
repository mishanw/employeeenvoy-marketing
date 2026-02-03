<script lang="ts">
  import { Users, Target, Zap, Heart, Shield, Globe } from '@lucide/svelte';
  import Logo from '$lib/components/Logo.svelte';
</script>

<svelte:head>
  <title>About Us - Employee Envoy</title>
  <meta name="description" content="Learn about Employee Envoy's mission to simplify employee lifecycle management for MSPs, IT teams, and growing businesses." />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://employeeenvoy.com/about" />

  <!-- Open Graph -->
  <meta property="og:title" content="About Employee Envoy" />
  <meta property="og:description" content="Our mission is to simplify employee lifecycle management for MSPs, IT teams, and growing businesses." />
  <meta property="og:url" content="https://employeeenvoy.com/about" />
  <meta property="og:image" content="https://employeeenvoy.com/og-image.png" />

  <!-- Twitter Card -->
  <meta name="twitter:title" content="About Employee Envoy" />
  <meta name="twitter:description" content="Our mission is to simplify employee lifecycle management." />
  <meta name="twitter:image" content="https://employeeenvoy.com/og-image.png" />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Employee Envoy",
    "url": "https://employeeenvoy.com",
    "description": "Employee lifecycle management platform for MSPs, IT teams, and growing businesses",
    "foundingDate": "2025",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@employeeenvoy.com",
      "contactType": "sales"
    }
  }
  </script>`}
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/">
        <Logo size="sm" variant="default" />
      </a>
      <div class="flex items-center gap-3">
        <a href="/" class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors">
          Back to Home
        </a>
        <a href="/contact" class="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all">
          Get Started
        </a>
      </div>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section id="main-content" class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
  <div class="max-w-4xl mx-auto text-center">
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-8">
      <Heart class="w-4 h-4" />
      <span>Our Story</span>
    </div>
    <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
      Building the Future of
      <span class="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Employee Management</span>
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
      We believe managing employee lifecycles shouldn't require spreadsheets, sticky notes, and hours of manual work across dozens of apps.
    </p>
  </div>
</section>

<!-- Mission Section -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Our Mission
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          Employee Envoy was born from a simple observation: IT teams and MSPs spend countless hours on repetitive, error-prone tasks every time someone joins, leaves, or changes roles in an organization.
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          We're building a platform that automates the entire employee lifecycle across all the business applications your team uses. From day one onboarding to secure offboarding, Employee Envoy handles it all.
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Our goal is to give IT professionals their time back so they can focus on strategic work that moves their organizations forward.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div class="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/30">
          <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center mb-4">
            <Zap class="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Automation First</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Every feature is designed to eliminate manual work.</p>
        </div>
        <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
            <Shield class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Security Built-In</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade security is not an afterthought.</p>
        </div>
        <div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-100 dark:border-green-800/30">
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
            <Globe class="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Integration Native</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">127 integrations and growing every month.</p>
        </div>
        <div class="p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 rounded-2xl border border-purple-100 dark:border-purple-800/30">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
            <Users class="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">MSP-Ready</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Multi-tenant from day one.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        What We Believe
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Our values guide everything we build.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="text-center p-8">
        <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl flex items-center justify-center">
          <Target class="w-8 h-8 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Simplicity Wins</h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          Complex problems deserve simple solutions. We obsess over removing friction from every workflow.
        </p>
      </div>

      <div class="text-center p-8">
        <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center">
          <Shield class="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Trust is Earned</h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          We handle sensitive employee data. Security, transparency, and reliability aren't features—they're requirements.
        </p>
      </div>

      <div class="text-center p-8">
        <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl flex items-center justify-center">
          <Heart class="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Customer Obsessed</h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          Every feature we build starts with a real problem faced by real IT teams. We listen, we learn, we deliver.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
      Ready to Transform Your Employee Lifecycle?
    </h2>
    <p class="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
      Join MSPs, IT teams, and growing businesses who are saving hours every week with Employee Envoy.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="/contact"
        class="px-8 py-4 text-lg font-semibold text-amber-600 bg-white rounded-2xl hover:bg-amber-50 transition-colors shadow-xl"
      >
        Start Free Trial
      </a>
      <a
        href="/integrations"
        class="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-colors"
      >
        View Integrations
      </a>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
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
