# Employee Envoy Marketing Site

Marketing site for employeeenvoy.com | SvelteKit 2.0 + Svelte 5 + Tailwind 3 + Cloudflare Pages

## Critical: Data Accuracy

Integration count source of truth: `~/Documents/Cursor Workspace/ipeople/packages/shared/src/app-catalog.ts` (189 integrations)

Local `src/lib/data/integrations.ts` is for display only — NOT the source of truth.

**All marketing copy must be factual and verifiable against the platform codebase.** Do not create unverifiable claims (no made-up uptime SLAs, no fake testimonials, no inflated numbers). The user has explicitly stated they do not want liability from false claims.

## Design System

- **Visual Style**: "Premium SaaS" aesthetic with cinematic noise, glassmorphism, and spotlight effects.
- **Brand Colors**: Primary orange `#EB9336`, gradient to `#D97706`. Text: `#4F4F51` (light) / white (dark). "Envoy" text: `#EB9336`.
- **Logo**: Orange circle with 3 diagonal white curved motion strokes (professional Bézier paths). Icon in `Logo.svelte` (inline SVG). "Employee" in `#4F4F51`/white + "Envoy" in `#EB9336`.
- **Key Components**: `SpotlightCard.svelte` for interactive feature grids, `Logo.svelte` for brand mark.
- **Global Effects**: Noise texture defined in `+layout.svelte`, strict typography tracking in global CSS.
- **Font**: Plus Jakarta Sans (headings), Inter (body).

## Commands

```bash
pnpm dev                # Development
pnpm build              # Build
npx wrangler pages deploy .svelte-kit/cloudflare --project-name=employeeenvoy --commit-dirty=true  # Deploy
```

## Verified Product Facts

These numbers are verified against the platform codebase and safe to use in marketing:

- 189 integrations (from app-catalog.ts)
- 67 workflow nodes
- 3,947 tests passing
- HRIS sync: Rippling, BambooHR, Gusto, Namely
- PSA integrations: ConnectWise, Autotask
- 8 SSO identity providers
- AES-256-GCM encryption
- Pricing: Starter $199, Professional $399, Enterprise $799
- No per-user fees, cancel anytime
- Professional services / implementation packages available (paid, custom quote)

## Brand Assets

All logo/icon files live in `static/`:
- `static/brand/` — icon.svg, logo.svg, logo-dark.svg
- `static/logos/icon/` — icon-color.svg + PNGs (16px–1024px)
- `static/logos/primary/` — logo-full-color.svg/png, logo-dark-mode.svg, logo-monochrome-white.svg
- `static/logos/wordmark/` — wordmark-color.svg
- `static/favicon.svg`, `static/favicon-*.png`, `static/apple-touch-icon.png`, `static/android-chrome-*.png`

Source of truth for brand assets is also at: `~/Documents/Cursor Workspace/ipeople/brand-assets/`

## CTA Convention

All CTAs across the site use "Book a Demo" (links to `/contact`). Do not use "Get Started", "Start Free Trial", or "Sign Up" unless explicitly told to change.

## See Also

- `.claude/STRUCTURE.md` — Directory layout
- `.claude/DATA_SOURCES.md` — Integration sources, verified claims, related docs
- `~/Documents/Cursor Workspace/ipeople/CLAUDE.md` — Main app documentation
