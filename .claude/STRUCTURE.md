# Project Structure

```
src/
├── lib/
│   ├── components/    # Reusable (Logo, SpotlightCard, HeroSection, Navigation, Footer, etc.)
│   └── data/          # Marketing data (integrations list — display only)
└── routes/
    ├── +page.svelte   # Landing page (hero, features, problem, how-it-works, pricing, etc.)
    ├── +error.svelte  # Branded 404/error page
    ├── about/         # About page
    ├── contact/       # Contact form (with company size field)
    ├── compare/       # Competitor comparison pages (jumpcloud, rippling)
    ├── cookies/       # Cookie policy
    ├── disclaimer/    # Disclaimer
    ├── eula/          # End user license agreement
    ├── integrations/  # Integration catalog
    ├── nda/           # NDA page
    ├── pricing/       # Pricing page
    ├── privacy/       # Privacy policy
    ├── roi-calculator/# ROI calculator tool
    ├── security/      # Security whitepaper
    └── terms/         # Terms of service
static/
├── brand/             # Brand SVGs (icon, logo, logo-dark)
├── logos/
│   ├── icon/          # Icon SVG + PNGs (16px–1024px)
│   ├── primary/       # Full logo variants (color, dark, white, PNG)
│   └── wordmark/      # Text-only wordmark
├── favicon.svg        # SVG favicon
├── favicon-*.png      # PNG favicons (16, 32)
├── apple-touch-icon.png
├── android-chrome-*.png
├── og-default.png     # Open Graph social image
├── logo.png           # General-use icon PNG
└── site.webmanifest   # PWA manifest
```
