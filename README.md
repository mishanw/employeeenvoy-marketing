# Employee Envoy Marketing Site

Marketing website for Employee Envoy - Employee Lifecycle Management.

## Tech Stack

- **Framework**: SvelteKit 2.0 with Svelte 5
- **Styling**: Tailwind CSS
- **Icons**: @lucide/svelte
- **Deployment**: Cloudflare Pages

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured for deployment to Cloudflare Pages.

```bash
# Build and deploy
npm run build
npx wrangler pages deploy .svelte-kit/cloudflare --project-name=employeeenvoy-marketing
```

## Pages

- `/` - Landing page with features, pricing, integrations, FAQ
- `/contact` - Contact form
- `/privacy` - Privacy policy (GDPR, CCPA compliant)
- `/terms` - Terms of service
- `/security` - Security practices and compliance

## License

Copyright 2026 Employee Envoy. All rights reserved.
