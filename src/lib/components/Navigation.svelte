<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { Menu, X, ChevronDown } from "@lucide/svelte";
  import Logo from "./Logo.svelte";

  let mobileMenuOpen = $state(false);
  let compareMenuOpen = $state(false);
  let scrollY = $state(0);

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Navigation items - consistent across all pages
  const navItems = [
    { href: "/#how-it-works", label: "How It Works", isHash: true },
    { href: "/#features", label: "Features", isHash: true },
    { href: "/#pricing", label: "Pricing", isHash: true },
    { href: "/roi-calculator", label: "ROI Calculator", isHash: false },
    { href: "/integrations", label: "Integrations", isHash: false },
    { href: "/security", label: "Security", isHash: false },
  ];

  const compareItems = [
    { href: "/compare/bamboohr", label: "vs BambooHR" },
    { href: "/compare/rippling", label: "vs Rippling" },
  ];

  function isActive(path: string) {
    if (path.startsWith("/#")) return false; // Don't highlight hash links
    return $page.url.pathname === path;
  }
</script>

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
        {#each navItems as item}
          <a
            href={item.href}
            class="text-sm font-medium transition-all duration-200 {isActive(
              item.href,
            )
              ? 'text-amber-600 dark:text-amber-400 font-semibold'
              : 'text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400'}"
            >{item.label}</a
          >
        {/each}

        <!-- Compare Dropdown -->
        <div class="relative">
          <button
            onclick={() => (compareMenuOpen = !compareMenuOpen)}
            onblur={() => setTimeout(() => (compareMenuOpen = false), 150)}
            class="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
          >
            Compare
            <ChevronDown
              class="w-4 h-4 transition-transform {compareMenuOpen
                ? 'rotate-180'
                : ''}"
            />
          </button>
          {#if compareMenuOpen}
            <div
              class="absolute top-full right-0 mt-2 w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-slate-700/50 py-2 z-50 overflow-hidden ring-1 ring-black/5"
            >
              {#each compareItems as item}
                <a
                  href={item.href}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600"
                  >{item.label}</a
                >
              {/each}
            </div>
          {/if}
        </div>
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
      class="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-slate-800 shadow-xl"
    >
      <div class="px-4 py-4 space-y-3">
        {#each navItems as item}
          <a
            href={item.href}
            onclick={() => (mobileMenuOpen = false)}
            class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
            >{item.label}</a
          >
        {/each}

        <!-- Compare section -->
        <div class="pt-2 border-t border-gray-200 dark:border-slate-700 mt-2">
          <span
            class="block px-4 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >Compare</span
          >
          {#each compareItems as item}
            <a
              href={item.href}
              onclick={() => (mobileMenuOpen = false)}
              class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
              >{item.label}</a
            >
          {/each}
        </div>

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
