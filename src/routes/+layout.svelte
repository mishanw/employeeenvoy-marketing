<script lang="ts">
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";
</script>

<svelte:head>
  <!-- Default Open Graph tags (overridden by individual pages) -->
  <meta property="og:site_name" content="Employee Envoy" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter Card defaults -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@employeeenvoy" />

  <!-- Social Media Profile Links (for rich snippets) -->
  <meta
    property="article:publisher"
    content="https://www.linkedin.com/company/111544232"
  />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- Preconnect to fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
</svelte:head>

<!-- Skip link for keyboard navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Cinematic Noise Overlay -->
<div
  class="fixed inset-0 z-[100] pointer-events-none opacity-[0.02] mix-blend-overlay"
  style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;);"
></div>

<Navigation />
<slot />
