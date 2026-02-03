<script lang="ts">
  import {
    Search,
    Filter,
    Check,
    Shield,
    Key,
    Clock,
    ArrowRight,
    X,
    ChevronDown
  } from '@lucide/svelte';
  import Logo from '$lib/components/Logo.svelte';
  import {
    INTEGRATIONS,
    CATEGORY_LABELS,
    TIER_LABELS,
    CAPABILITY_LABELS,
    getCategoriesWithCounts,
    getTotalCount,
    getFullCatalogCount,
    getScimCount,
    getSsoCount,
    type Integration,
    type IntegrationCategory,
    type IntegrationTier
  } from '$lib/data/integrations';

  // State
  let searchQuery = $state('');
  let selectedCategory = $state<IntegrationCategory | 'all'>('all');
  let selectedTier = $state<IntegrationTier | 'all'>('all');
  let showScimOnly = $state(false);
  let showSsoOnly = $state(false);
  let showFilters = $state(false);

  // Derived data
  const categories = getCategoriesWithCounts();
  const totalCount = getTotalCount();
  const fullCatalogCount = getFullCatalogCount();
  const scimCount = getScimCount();
  const ssoCount = getSsoCount();

  // Filtered integrations
  const filteredIntegrations = $derived(() => {
    let result = [...INTEGRATIONS];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(i =>
        i.name.toLowerCase().includes(query) ||
        i.description.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(i => i.category === selectedCategory);
    }

    // Tier filter
    if (selectedTier !== 'all') {
      result = result.filter(i => i.tier === selectedTier);
    }

    // SCIM filter
    if (showScimOnly) {
      result = result.filter(i => i.scimSupport);
    }

    // SSO filter
    if (showSsoOnly) {
      result = result.filter(i => i.ssoSupport);
    }

    // Sort by popularity
    return result.sort((a, b) => b.popularity - a.popularity);
  });

  // Clear all filters
  function clearFilters() {
    searchQuery = '';
    selectedCategory = 'all';
    selectedTier = 'all';
    showScimOnly = false;
    showSsoOnly = false;
  }

  // Check if any filters are active
  const hasActiveFilters = $derived(
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedTier !== 'all' ||
    showScimOnly ||
    showSsoOnly
  );

  // Get tier badge color
  function getTierColor(tier: IntegrationTier): string {
    switch (tier) {
      case 'core': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'popular': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'available': return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
      case 'coming_soon': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  }
</script>

<svelte:head>
  <title>127 Integrations - Employee Envoy</title>
  <meta name="description" content="Browse 127 integrations supported by Employee Envoy. Connect your identity providers, productivity tools, HR systems, and more." />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://employeeenvoy.com/integrations" />

  <!-- Open Graph -->
  <meta property="og:title" content="127 Integrations - Employee Envoy" />
  <meta property="og:description" content="Connect with Microsoft 365, Google Workspace, Slack, Okta, and 123 more business applications." />
  <meta property="og:url" content="https://employeeenvoy.com/integrations" />
  <meta property="og:image" content="https://employeeenvoy.com/og-image.png" />

  <!-- Twitter Card -->
  <meta name="twitter:title" content="127 Integrations - Employee Envoy" />
  <meta name="twitter:description" content="Connect with Microsoft 365, Google Workspace, Slack, Okta, and 123 more business applications." />
  <meta name="twitter:image" content="https://employeeenvoy.com/og-image.png" />
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
<section class="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
      Integration Catalog
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
      Connect Employee Envoy with {fullCatalogCount} business applications to automate your employee lifecycle management.
    </p>

    <!-- Stats -->
    <div class="flex flex-wrap justify-center gap-6 mb-8">
      <div class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-200 dark:border-slate-700">
        <div class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
          <Check class="w-4 h-4 text-amber-600 dark:text-amber-400" />
        </div>
        <span class="text-sm font-medium text-gray-900 dark:text-white">{fullCatalogCount} Integrations</span>
      </div>
      <div class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-200 dark:border-slate-700">
        <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Shield class="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <span class="text-sm font-medium text-gray-900 dark:text-white">{scimCount} SCIM Ready</span>
      </div>
      <div class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-200 dark:border-slate-700">
        <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <Key class="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
        <span class="text-sm font-medium text-gray-900 dark:text-white">{ssoCount} SSO Enabled</span>
      </div>
    </div>
  </div>
</section>

<!-- Search & Filters -->
<section class="sticky top-16 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800 py-4 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Search -->
      <div class="relative flex-1">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search integrations..."
          class="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
        {#if searchQuery}
          <button
            onclick={() => searchQuery = ''}
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X class="w-4 h-4" />
          </button>
        {/if}
      </div>

      <!-- Category Dropdown -->
      <div class="relative">
        <select
          bind:value={selectedCategory}
          class="appearance-none w-full md:w-48 px-4 py-2.5 pr-10 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent cursor-pointer"
        >
          <option value="all">All Categories</option>
          {#each categories as cat}
            <option value={cat.category}>{cat.label} ({cat.count})</option>
          {/each}
        </select>
        <ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>

      <!-- Tier Dropdown -->
      <div class="relative">
        <select
          bind:value={selectedTier}
          class="appearance-none w-full md:w-40 px-4 py-2.5 pr-10 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent cursor-pointer"
        >
          <option value="all">All Tiers</option>
          <option value="core">Core</option>
          <option value="popular">Popular</option>
          <option value="available">Available</option>
        </select>
        <ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>

      <!-- Toggle Filters Button (Mobile) -->
      <button
        onclick={() => showFilters = !showFilters}
        class="md:hidden flex items-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300"
      >
        <Filter class="w-4 h-4" />
        More Filters
      </button>

      <!-- SCIM/SSO Toggles (Desktop) -->
      <div class="hidden md:flex items-center gap-4">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            bind:checked={showScimOnly}
            class="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
          />
          <span class="text-sm text-gray-700 dark:text-gray-300">SCIM</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            bind:checked={showSsoOnly}
            class="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
          />
          <span class="text-sm text-gray-700 dark:text-gray-300">SSO</span>
        </label>
      </div>
    </div>

    <!-- Mobile Filters -->
    {#if showFilters}
      <div class="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg md:hidden">
        <div class="flex items-center gap-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              bind:checked={showScimOnly}
              class="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300">SCIM Support</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              bind:checked={showSsoOnly}
              class="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
            />
            <span class="text-sm text-gray-700 dark:text-gray-300">SSO Support</span>
          </label>
        </div>
      </div>
    {/if}

    <!-- Active Filters & Results Count -->
    <div class="flex items-center justify-between mt-4">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Showing <span class="font-medium text-gray-900 dark:text-white">{filteredIntegrations().length}</span> integrations
      </p>
      {#if hasActiveFilters}
        <button
          onclick={clearFilters}
          class="text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium"
        >
          Clear all filters
        </button>
      {/if}
    </div>
  </div>
</section>

<!-- Integration Grid -->
<section class="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    {#if filteredIntegrations().length === 0}
      <div class="text-center py-16">
        <div class="w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
          <Search class="w-8 h-8 text-gray-400" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">No integrations found</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search or filters</p>
        <button
          onclick={clearFilters}
          class="text-amber-600 dark:text-amber-400 hover:text-amber-700 font-medium"
        >
          Clear all filters
        </button>
      </div>
    {:else}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {#each filteredIntegrations() as integration (integration.id)}
          <div class="group p-5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-lg transition-all">
            <!-- Header -->
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {integration.name}
                </h3>
                <span class="text-xs text-gray-500 dark:text-gray-400">
                  {CATEGORY_LABELS[integration.category]}
                </span>
              </div>
              <span class="text-xs px-2 py-1 rounded-full font-medium {getTierColor(integration.tier)}">
                {TIER_LABELS[integration.tier]}
              </span>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
              {integration.description}
            </p>

            <!-- Badges -->
            <div class="flex flex-wrap gap-2 mb-3">
              {#if integration.scimSupport}
                <span class="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                  <Shield class="w-3 h-3" />
                  SCIM
                </span>
              {/if}
              {#if integration.ssoSupport}
                <span class="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                  <Key class="w-3 h-3" />
                  SSO
                </span>
              {/if}
              <span class="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <Clock class="w-3 h-3" />
                {integration.estimatedSetupTime}
              </span>
            </div>

            <!-- Capabilities -->
            <div class="border-t border-gray-200 dark:border-slate-700 pt-3">
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Capabilities:</p>
              <div class="flex flex-wrap gap-1">
                {#each integration.capabilities.slice(0, 3) as capability}
                  <span class="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {CAPABILITY_LABELS[capability] || capability}
                  </span>
                {/each}
                {#if integration.capabilities.length > 3}
                  <span class="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                    +{integration.capabilities.length - 3} more
                  </span>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 to-orange-500">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-4xl font-bold text-white mb-4">
      Don't see your app?
    </h2>
    <p class="text-xl text-amber-100 mb-8">
      We're constantly adding new integrations. Contact us to request a specific integration or learn about our custom API options.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/contact"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-amber-600 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl"
      >
        Request Integration
        <ArrowRight class="w-5 h-5" />
      </a>
      <a
        href="/contact"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all"
      >
        Start Free Trial
      </a>
    </div>
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
          Your Trusted Partner for Employee Transitions
        </p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">Product</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/#features" class="hover:text-amber-400 transition-colors">Features</a></li>
          <li><a href="/#pricing" class="hover:text-amber-400 transition-colors">Pricing</a></li>
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
    <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm">
      <p>&copy; 2026 Employee Envoy. All rights reserved.</p>
      <div class="flex items-center gap-6 mt-4 sm:mt-0">
        <a href="/privacy" class="hover:text-amber-400 transition-colors">Privacy</a>
        <a href="/terms" class="hover:text-amber-400 transition-colors">Terms</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
