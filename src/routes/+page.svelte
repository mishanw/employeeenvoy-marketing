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
    Menu,
    X,
    Play,
    CheckCircle2,
    AlertCircle,
    UserPlus,
    UserMinus,
    Linkedin,
    Instagram,
  } from "@lucide/svelte";
  import Logo from "$lib/components/Logo.svelte";
  import PricingSection from "$lib/components/PricingSection.svelte";

  let mounted = $state(false);
  let mobileMenuOpen = $state(false);
  let scrollY = $state(0);

  onMount(() => {
    mounted = true;

    // Scroll handler for nav background
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function scrollToSection(id: string) {
    mobileMenuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<svelte:head>
  <title
    >Employee Envoy - Employee Lifecycle Management for MSPs & IT Teams</title
  >
  <meta
    name="description"
    content="Streamline employee onboarding, offboarding, and status changes across 121 business applications. Built for MSPs, IT teams, and growing businesses."
  />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://employeeenvoy.com/" />

  <!-- Open Graph -->
  <meta
    property="og:title"
    content="Employee Envoy - Employee Lifecycle Management Made Simple"
  />
  <meta
    property="og:description"
    content="Automate onboarding, offboarding, and status changes across 121 business applications. Built for MSPs, IT teams, and growing businesses."
  />
  <meta property="og:url" content="https://employeeenvoy.com/" />
  <meta property="og:image" content="https://employeeenvoy.com/og-image.png" />

  <!-- Twitter Card -->
  <meta
    name="twitter:title"
    content="Employee Envoy - Employee Lifecycle Management Made Simple"
  />
  <meta
    name="twitter:description"
    content="Automate onboarding, offboarding, and status changes across 121 business applications."
  />
  <meta name="twitter:image" content="https://employeeenvoy.com/og-image.png" />

  <!-- Structured Data - SoftwareApplication -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Employee Envoy",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Employee lifecycle management platform for MSPs, IT teams, and growing businesses. Automate onboarding, offboarding, and status changes across 127 integrations.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "14-day free trial"
    }
  }
  </script>`}

  <!-- Structured Data - FAQ -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the 14-day free trial work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start your free trial with full access to all features. No credit card required. You can cancel anytime during the trial period with no charges."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Employee Envoy for multiple customer organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Employee Envoy is built for MSPs managing multiple clients. The Professional and Enterprise plans support multiple customer organizations with complete data isolation between each client."
        }
      },
      {
        "@type": "Question",
        "name": "What integrations are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support 127 integrations including Microsoft 365, Google Workspace, Slack, Okta, Azure AD, Active Directory, GitHub, Jira, and many more."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We use end-to-end encryption, PBKDF2 password hashing, MFA support, role-based access control, and comprehensive audit logging. All data is encrypted at rest and in transit."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after my trial ends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After your 14-day trial, you can choose to subscribe to any plan. Your data and configurations will be preserved. If you don't subscribe, your account will be paused but your data will be retained for 30 days in case you decide to come back."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a custom integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We're constantly adding new integrations based on customer feedback. Professional and Enterprise plan customers can request priority development of specific integrations."
        }
      }
    ]
  }
  </script>`}

  <!-- Structured Data - Organization with Social Profiles -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Employee Envoy",
    "url": "https://employeeenvoy.com",
    "logo": "https://employeeenvoy.com/logo.png",
    "description": "Employee lifecycle management platform for MSPs, IT teams, and growing businesses.",
    "sameAs": [
      "https://www.linkedin.com/company/111544232",
      "https://www.instagram.com/employeeenvoy"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@employeeenvoy.com",
      "url": "https://employeeenvoy.com/contact"
    }
  }
  </script>`}
</svelte:head>

<!-- Navigation -->
<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrollY >
  50
    ? 'bg-white/95 dark:bg-slate-900/95 shadow-lg'
    : 'bg-white/80 dark:bg-slate-900/80'} backdrop-blur-lg border-b border-gray-200/50 dark:border-slate-800/50"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/" class="flex-shrink-0">
        <Logo size="sm" variant="default" />
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a
          href="#how-it-works"
          class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
          >How It Works</a
        >
        <a
          href="#features"
          class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
          >Features</a
        >
        <a
          href="#pricing"
          class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
          >Pricing</a
        >
        <a
          href="/integrations"
          class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
          >Integrations</a
        >
        <a
          href="/security"
          class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
          >Security</a
        >
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
          onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
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
    <div
      class="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 shadow-xl"
    >
      <div class="px-4 py-4 space-y-3">
        <a
          href="#how-it-works"
          onclick={() => (mobileMenuOpen = false)}
          class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
          >How It Works</a
        >
        <a
          href="#features"
          onclick={() => (mobileMenuOpen = false)}
          class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
          >Features</a
        >
        <a
          href="#pricing"
          onclick={() => (mobileMenuOpen = false)}
          class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
          >Pricing</a
        >
        <a
          href="/integrations"
          class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
          >Integrations</a
        >
        <a
          href="/security"
          class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
          >Security</a
        >
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
<section class="relative pt-32 pb-24 overflow-hidden bg-noise">
  <!-- Background with premium gradient and patterns -->
  <div class="absolute inset-0 bg-slate-50 dark:bg-slate-950">
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    ></div>
    <div
      class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-500 opacity-20 blur-[100px] animate-blob"
    ></div>
    <div
      class="absolute right-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-amber-400 opacity-20 blur-[100px] animate-blob animation-delay-2000"
    ></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left: Text Content -->
      <div class="text-center lg:text-left relative z-10">
        {#if mounted}
          <div
            class="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-200/50 dark:border-amber-700/50 text-amber-700 dark:text-amber-300 text-sm font-medium mb-8 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Sparkles class="w-4 h-4 text-amber-500" />
            <span class="tracking-wide"
              >Automate IT operations in one click</span
            >
          </div>

          <h1 class="animate-fade-in-up" style="animation-delay: 0.1s">
            <span
              class="block text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight font-heading leading-tight"
            >
              Employee Lifecycle
            </span>
            <span
              class="block text-4xl sm:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 mb-6 pb-2 text-glow tracking-tight"
            >
              Management
            </span>
          </h1>

          <p
            class="animate-fade-in-up text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            style="animation-delay: 0.2s"
          >
            Streamline onboarding, offboarding, and status changes across <span
              class="font-semibold text-amber-600 dark:text-amber-400"
              >121+ integrations</span
            >. The multi-tenant platform built for MSPs and IT teams.
          </p>

          <div
            class="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            style="animation-delay: 0.3s"
          >
            <a
              href="/signup"
              class="group w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl hover:from-amber-400 hover:to-orange-500 transition-all shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1 active:scale-95 active:translate-y-0 flex items-center justify-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
            >
              Start Free Trial
              <ArrowRight
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#how-it-works"
              class="group w-full sm:w-auto px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-200 glass hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-2xl transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <Play class="w-5 h-5 text-amber-500 fill-current" />
              See How It Works
            </a>
          </div>

          <!-- Trust indicators -->
          <div
            class="animate-fade-in-up flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-slate-500 dark:text-slate-400"
            style="animation-delay: 0.4s"
          >
            <div
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50"
            >
              <CheckCircle2 class="w-4 h-4 text-green-500" />
              <span>SOC 2 Ready</span>
            </div>
            <div
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50"
            >
              <CheckCircle2 class="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50"
            >
              <CheckCircle2 class="w-4 h-4 text-green-500" />
              <span>Multi-tenant</span>
            </div>
          </div>
        {/if}
      </div>

      <!-- Right: Dashboard Mockup -->
      <div class="relative lg:block hidden perspective-1000">
        {#if mounted}
          <div
            class="animate-fade-in-up relative z-10 transform-gpu transition-transform hover:scale-[1.02] duration-500"
            style="animation-delay: 0.2s"
          >
            <!-- Glow effect behind dashboard -->
            <div
              class="absolute inset-0 bg-gradient-to-tr from-amber-500/30 to-purple-500/30 rounded-[2rem] blur-3xl -z-10"
            ></div>

            <!-- Glass Dashboard Card -->
            <div
              class="glass-panel rounded-2xl overflow-hidden ring-1 ring-white/10 dark:ring-slate-700/30 animate-float"
            >
              <!-- Header -->
              <div
                class="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-6 py-4 border-b border-white/10 dark:border-slate-700/30 flex items-center justify-between"
              >
                <div class="flex items-center gap-4">
                  <div class="flex gap-2">
                    <div
                      class="w-3 h-3 rounded-full bg-red-500/80 shadow-sm"
                    ></div>
                    <div
                      class="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm"
                    ></div>
                    <div
                      class="w-3 h-3 rounded-full bg-green-500/80 shadow-sm"
                    ></div>
                  </div>
                  <div class="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
                  <div
                    class="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/50 dark:bg-slate-800/50 text-xs font-medium text-slate-500"
                  >
                    <Lock class="w-3 h-3" />
                    app.employeeenvoy.com
                  </div>
                </div>
              </div>

              <!-- Dashboard Content -->
              <div class="p-6 space-y-6">
                <!-- Stats Grid -->
                <div class="grid grid-cols-2 gap-4">
                  <div
                    class="p-4 rounded-xl bg-gradient-to-br from-green-50/50 to-emerald-100/30 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-100/50 dark:border-green-800/30"
                  >
                    <p
                      class="text-3xl font-bold text-green-600 dark:text-green-400"
                    >
                      98%
                    </p>
                    <p
                      class="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1"
                    >
                      Success Rate
                    </p>
                  </div>
                  <div
                    class="p-4 rounded-xl bg-gradient-to-br from-blue-50/50 to-indigo-100/30 dark:from-blue-900/20 dark:to-indigo-900/10 border border-blue-100/50 dark:border-blue-800/30"
                  >
                    <div class="flex items-baseline gap-1">
                      <p
                        class="text-3xl font-bold text-blue-600 dark:text-blue-400"
                      >
                        4.2
                      </p>
                      <span class="text-sm text-blue-500">hrs</span>
                    </div>
                    <p
                      class="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1"
                    >
                      Time Saved / User
                    </p>
                  </div>
                </div>

                <!-- Active Workflows List -->
                <div class="space-y-3">
                  <div class="flex items-center justify-between mb-2">
                    <p
                      class="text-xs font-bold text-slate-400 uppercase tracking-wider"
                    >
                      Live Activity
                    </p>
                    <span class="flex h-2 w-2 relative">
                      <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                      ></span>
                      <span
                        class="relative inline-flex rounded-full h-2 w-2 bg-green-500"
                      ></span>
                    </span>
                  </div>

                  {#each [{ name: "Sarah Chen", action: "Onboarding", progress: 100, status: "Complete", icon: UserPlus, color: "text-green-500", bg: "bg-green-500/10" }, { name: "Mike Ross", action: "Offboarding", progress: 65, status: "In Progress", icon: UserMinus, color: "text-amber-500", bg: "bg-amber-500/10" }, { name: "Alex Rivera", action: "Access Update", progress: 0, status: "Scheduled", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" }] as item}
                    <div
                      class="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700/50"
                    >
                      <div
                        class="w-10 h-10 rounded-lg {item.bg} flex items-center justify-center shrink-0"
                      >
                        <svelte:component
                          this={item.icon}
                          class="w-5 h-5 {item.color}"
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between mb-1">
                          <p
                            class="text-sm font-semibold text-slate-900 dark:text-white truncate"
                          >
                            {item.name}
                          </p>
                          <span
                            class="text-[10px] font-bold uppercase tracking-wider {item.color}"
                            >{item.status}</span
                          >
                        </div>
                        <div
                          class="h-1.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden"
                        >
                          <div
                            class="h-full rounded-full {item.color.replace(
                              'text-',
                              'bg-',
                            )}"
                            style="width: {item.progress}%"
                          ></div>
                        </div>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>

            <!-- Floating Integration Bubbles -->
            <div
              class="absolute -right-8 top-20 animate-float-delayed drop-shadow-2xl"
            >
              <div class="glass p-3 rounded-2xl flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-xl bg-[#0078D4] flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  M
                </div>
                <div>
                  <p class="text-xs font-bold text-slate-500">Microsoft 365</p>
                  <p class="text-[10px] text-green-500 font-medium">
                    Synced • 2m ago
                  </p>
                </div>
              </div>
            </div>

            <div
              class="absolute -left-8 bottom-32 animate-float drop-shadow-2xl"
            >
              <div class="glass p-3 rounded-2xl flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-xl bg-[#4A154B] flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  S
                </div>
                <div>
                  <p class="text-xs font-bold text-slate-500">Slack</p>
                  <p class="text-[10px] text-green-500 font-medium">
                    Connected
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- Problem Section - Lead with Pain Points -->
<section
  id="problem"
  class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 overflow-hidden"
>
  <!-- Subtle background decoration -->
  <div class="absolute inset-0 bg-dot-pattern opacity-30"></div>

  <div class="relative max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium mb-4"
      >
        <AlertCircle class="w-4 h-4" />
        <span>The Challenge</span>
      </div>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading tracking-tight"
      >
        The Problem You're Solving
      </h2>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Employee lifecycle management is fragmented, time-consuming, and
        error-prone
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
      <div
        class="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-200/80 dark:border-red-900/50 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mb-5 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform"
        >
          <Clock class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Hours of Manual Work
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          IT teams spend <span
            class="font-semibold text-red-600 dark:text-red-400"
            >4-6 hours per employee</span
          > manually provisioning accounts across multiple systems
        </p>
      </div>

      <div
        class="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200/80 dark:border-amber-900/50 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform"
        >
          <AlertCircle class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Security Risks
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Forgotten accounts, incomplete offboarding, and manual errors create <span
            class="font-semibold text-amber-600 dark:text-amber-400"
            >security vulnerabilities</span
          >
        </p>
      </div>

      <div
        class="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/80 dark:border-blue-900/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform"
        >
          <TrendingUp class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Lack of Visibility
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          No centralized view of employee status, pending tasks, or <span
            class="font-semibold text-blue-600 dark:text-blue-400"
            >integration health</span
          > across customers
        </p>
      </div>
    </div>
  </div>
</section>

<!-- How It Works Section -->
<section
  id="how-it-works"
  class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
>
  <div class="relative max-w-7xl mx-auto z-10">
    <div class="text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-4"
      >
        <Zap class="w-4 h-4" />
        <span>Simple Setup</span>
      </div>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading tracking-tight"
      >
        Start Automating in Minutes
      </h2>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Your complete employee lifecycle management platform
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
      <!-- Step 1 -->
      <div class="group relative">
        <div
          class="relative h-full glass-panel hover:-translate-y-2 transition-transform duration-500 rounded-2xl p-8"
        >
          <div
            class="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-amber-500/30 rotate-3 group-hover:rotate-6 transition-transform"
          >
            1
          </div>
          <div class="mt-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Connect Source of Truth
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Link your primary HRIS or directory (Google Workspace, Microsoft
              365, BambooHR) to sync employee data automatically.
            </p>

            <div
              class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700"
            >
              <div class="flex -space-x-2">
                <div
                  class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 font-bold border-2 border-white dark:border-slate-800"
                >
                  G
                </div>
                <div
                  class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 font-bold border-2 border-white dark:border-slate-800"
                >
                  M
                </div>
                <div
                  class="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 font-bold border-2 border-white dark:border-slate-800"
                >
                  B
                </div>
              </div>
              <span class="text-xs font-semibold text-slate-500"
                >Auto-sync enabled</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="group relative">
        <div
          class="relative h-full glass-panel hover:-translate-y-2 transition-transform duration-500 rounded-2xl p-8"
        >
          <div
            class="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-amber-500/30 rotate-3 group-hover:rotate-6 transition-transform"
          >
            2
          </div>
          <div class="mt-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Configure Automations
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Define role-based playbooks for onboarding and offboarding. Choose
              which apps to provision and what emails to send.
            </p>

            <div class="space-y-2">
              <div
                class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-slate-800/50 p-2 rounded-lg"
              >
                <CheckCircle2 class="w-4 h-4 text-green-500" />
                <span>Create M365 Account</span>
              </div>
              <div
                class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-slate-800/50 p-2 rounded-lg"
              >
                <CheckCircle2 class="w-4 h-4 text-green-500" />
                <span>Add to Slack Channels</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="group relative">
        <div
          class="relative h-full glass-panel hover:-translate-y-2 transition-transform duration-500 rounded-2xl p-8"
        >
          <div
            class="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-amber-500/30 rotate-3 group-hover:rotate-6 transition-transform"
          >
            3
          </div>
          <div class="mt-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Manage Lifecycle
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Execute workflows with one click. Dashboard gives you full
              visibility into every task status and audit logs.
            </p>

            <div
              class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-2"
            >
              <div class="bg-green-500 h-full w-3/4 animate-pulse"></div>
            </div>
            <p class="text-xs text-right text-slate-500 font-medium">
              Onboarding 75% Complete
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
            80<span class="text-4xl">+</span>
          </p>
        </div>
        <p class="text-amber-100 font-semibold text-lg">Integrations</p>
      </div>
      <div class="text-center group">
        <div class="relative inline-block">
          <p
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform"
          >
            1<span class="text-3xl">-Click</span>
          </p>
        </div>
        <p class="text-amber-100 font-semibold text-lg">Automated Workflows</p>
      </div>
      <div class="text-center group">
        <div class="relative inline-block">
          <p
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform"
          >
            SOC2
          </p>
        </div>
        <p class="text-amber-100 font-semibold text-lg">Ready Platform</p>
      </div>
      <div class="text-center group">
        <div class="relative inline-block">
          <p
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform"
          >
            256<span class="text-3xl">-bit</span>
          </p>
        </div>
        <p class="text-amber-100 font-semibold text-lg">Encryption</p>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section
  id="features"
  class="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 overflow-hidden"
>
  <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>

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
        Built for Modern IT Teams
      </h2>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Everything you need to manage employee access securely and efficiently
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <!-- Feature 1 -->
      <div
        class="group relative p-8 glass-panel hover:-translate-y-1 transition-all duration-300 rounded-2xl"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform"
        >
          <Building2 class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Multi-Tenant Architecture
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Manage multiple client organizations from a single dashboard. Perfect
          for MSPs with complete data isolation.
        </p>
      </div>

      <!-- Feature 2 -->
      <div
        class="group relative p-8 glass-panel hover:-translate-y-1 transition-all duration-300 rounded-2xl"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform"
        >
          <Zap class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Visual Workflow Builder
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          44+ automation nodes including Google Workspace actions for Drive transfers,
          email forwarding, calendar sharing, and device wipes.
        </p>
      </div>

      <!-- Feature 3 -->
      <div
        class="group relative p-8 glass-panel hover:-translate-y-1 transition-all duration-300 rounded-2xl"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform"
        >
          <Shield class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Security & Compliance
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          SOC 2 ready platform with comprehensive audit logs for every action
          taken on the system.
        </p>
      </div>

      <!-- Feature 4 -->
      <div
        class="group relative p-8 glass-panel hover:-translate-y-1 transition-all duration-300 rounded-2xl"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform"
        >
          <Users class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Self-Service Portals
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Empower managers to request access changes while IT maintains control
          and approval workflows.
        </p>
      </div>

      <!-- Feature 5 -->
      <div
        class="group relative p-8 glass-panel hover:-translate-y-1 transition-all duration-300 rounded-2xl"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform"
        >
          <Globe class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          121+ Integrations
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Native integrations with the tools you use: Google Workspace,
          Microsoft 365, Slack, Okta, and more.
        </p>
      </div>

      <!-- Feature 6 -->
      <div
        class="group relative p-8 glass-panel hover:-translate-y-1 transition-all duration-300 rounded-2xl"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform"
        >
          <BarChart3 class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Operations Dashboard
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Get a bird's eye view of all employee lifecycle activities and catch
          issues before they escalate.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Google Workspace Automation Section -->
<section
  id="google-workspace"
  class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
>
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

  <div class="relative max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left: Content -->
      <div>
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/40 dark:to-green-900/40 text-blue-700 dark:text-blue-400 text-sm font-medium mb-6"
        >
          <Zap class="w-4 h-4" />
          <span>Advanced Automation</span>
        </div>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading tracking-tight"
        >
          Google Workspace
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
            Automation
          </span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Powerful offboarding automation for Google Workspace. Transfer Drive files,
          set up email forwarding, manage calendar access, and wipe devices - all automated.
        </p>

        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          <div class="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50">
            <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
              <Database class="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Drive Transfer</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Auto-transfer ownership to manager</p>
            </div>
          </div>

          <div class="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50">
            <div class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
              <MessageSquare class="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Email Forwarding</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Set up automatic forwarding</p>
            </div>
          </div>

          <div class="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50">
            <div class="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0">
              <Clock class="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Auto-Reply</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Configure out-of-office messages</p>
            </div>
          </div>

          <div class="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50">
            <div class="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center flex-shrink-0">
              <Shield class="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Device Wipe</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Remote wipe mobile devices</p>
            </div>
          </div>
        </div>

        <a
          href="/integrations"
          class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          View all Google Workspace capabilities
          <ChevronRight class="w-5 h-5" />
        </a>
      </div>

      <!-- Right: Visual -->
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
        <div class="relative glass-panel rounded-2xl p-6 lg:p-8">
          <div class="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200/50 dark:border-slate-700/50">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              G
            </div>
            <div>
              <h4 class="font-bold text-gray-900 dark:text-white">Google Workspace Actions</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">12 automation actions available</p>
            </div>
          </div>

          <div class="space-y-3">
            {#each [
              { name: 'Transfer Drive Ownership', status: 'Available', color: 'green' },
              { name: 'Set Email Forwarding', status: 'Available', color: 'green' },
              { name: 'Configure Auto-Reply', status: 'Available', color: 'green' },
              { name: 'Force Sign Out', status: 'Available', color: 'green' },
              { name: 'Suspend User Account', status: 'Available', color: 'green' },
              { name: 'Wipe Mobile Device', status: 'Available', color: 'green' },
              { name: 'Share Calendar', status: 'Available', color: 'green' },
              { name: 'Remove From All Groups', status: 'Available', color: 'green' },
            ] as action}
              <div class="flex items-center justify-between p-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{action.name}</span>
                <span class="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded-full">
                  {action.status}
                </span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Solutions Section -->
<section
  id="solutions"
  class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
>
  <!-- Background decoration -->
  <div class="absolute inset-0 bg-slate-50 dark:bg-slate-900">
    <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
  </div>

  <div class="relative max-w-7xl mx-auto z-10">
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
        Whether you're an MSP managing multiple clients, an IT team, or a
        growing business handling IT in-house
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
      <!-- MSP Solution -->
      <div class="group relative">
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
        ></div>
        <div
          class="relative h-full glass-panel p-8 lg:p-10 rounded-3xl hover:translate-y-[-4px] transition-all duration-300 border-2 border-amber-500/10 dark:border-amber-500/20"
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
                >PSA Integration (ConnectWise & Autotask)</span
              >
            </li>
          </ul>
          <a
            href="#pricing"
            class="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all"
          >
            View Pricing
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
          class="relative h-full glass-panel p-8 lg:p-10 rounded-3xl hover:translate-y-[-4px] transition-all duration-300 border-2 border-blue-500/10 dark:border-blue-500/20"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform"
            >
              <Users class="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                For Growing Businesses
              </h3>
              <p class="text-blue-600 dark:text-blue-400 font-medium">
                SMBs & In-House IT
              </p>
            </div>
          </div>
          <p
            class="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
          >
            Perfect for HR teams handling IT tasks or small IT teams wearing
            multiple hats
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >Simple interface - no IT expertise required</span
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
                >Role-based access control</span
              >
            </li>
            <li class="flex items-start gap-4">
              <div
                class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span class="text-gray-700 dark:text-gray-300"
                >Guided onboarding wizard</span
              >
            </li>
          </ul>
          <a
            href="#pricing"
            class="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-indigo-400 shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all"
          >
            View Pricing
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
  class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
>
  <!-- Background decoration -->
  <div class="absolute inset-0 bg-slate-50 dark:bg-slate-900">
    <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
  </div>
  <div
    class="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl"
  ></div>

  <div class="relative max-w-7xl mx-auto z-10">
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
        Connect with <span
          class="font-semibold text-purple-600 dark:text-purple-400"
          >80+ business applications</span
        > your team already uses
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
      <!-- Identity & SSO -->
      <div
        class="group p-6 glass-panel rounded-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <Code class="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-center">
          Identity & SSO
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
          Okta, Azure AD, JumpCloud, Active Directory
        </p>
        <div class="flex justify-center gap-2">
          <div
            class="w-7 h-7 rounded-lg bg-[#0078D4] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            A
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-[#00297A] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            O
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-[#032D5F] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            G
          </div>
        </div>
      </div>

      <!-- Communication -->
      <div
        class="group p-6 glass-panel rounded-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <MessageSquare class="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-center">
          Communication
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
          Slack, Microsoft Teams, Zoom, RingCentral
        </p>
        <div class="flex justify-center gap-2">
          <div
            class="w-7 h-7 rounded-lg bg-[#4A154B] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            S
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-[#6264A7] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            T
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-[#2D8CFF] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            Z
          </div>
        </div>
      </div>

      <!-- Productivity -->
      <div
        class="group p-6 glass-panel rounded-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <Cloud class="w-8 h-8 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-center">
          Productivity
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
          Microsoft 365, Google Workspace, Dropbox
        </p>
        <div class="flex justify-center gap-2">
          <div
            class="w-7 h-7 rounded-lg bg-[#EA4335] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            M
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-[#4285F4] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            G
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-[#0061FF] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            D
          </div>
        </div>
      </div>

      <!-- Dev Tools -->
      <div
        class="group p-6 glass-panel rounded-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-700/30 dark:to-gray-700/30 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <Database class="w-8 h-8 text-slate-600 dark:text-slate-400" />
        </div>
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 text-center">
          Dev Tools
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
          GitHub, GitLab, Jira, AWS, Datadog
        </p>
        <div class="flex justify-center gap-2">
          <div
            class="w-7 h-7 rounded-lg bg-[#181717] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            GH
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-[#FC6D26] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            GL
          </div>
          <div
            class="w-7 h-7 rounded-lg bg-[#FF9900] flex items-center justify-center text-white text-xs font-bold shadow-sm"
          >
            A
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a
        href="/integrations"
        class="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
      >
        View all 80+ integrations
        <ArrowRight class="w-4 h-4" />
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
            > with complete data isolation between each client.
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
              >127 integrations</span
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
              >Professional and Enterprise plan customers</span
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
        <!-- Social & Contact links -->
        <div class="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/111544232"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0A66C2] flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin class="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/employeeenvoy"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <Instagram class="w-5 h-5" />
          </a>
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
          Company
        </h4>
        <ul class="space-y-3">
          <li>
            <a
              href="/about"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />About Us</a
            >
          </li>
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
          <li>
            <a
              href="https://www.linkedin.com/company/111544232"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />LinkedIn</a
            >
          </li>
          <li>
            <a
              href="https://www.instagram.com/employeeenvoy"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Instagram</a
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
              href="/eula"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />EULA</a
            >
          </li>
          <li>
            <a
              href="/cookies"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Cookie Policy</a
            >
          </li>
          <li>
            <a
              href="/disclaimer"
              class="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
              ><ChevronRight
                class="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />Disclaimer</a
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
