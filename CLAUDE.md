# Employee Envoy Marketing Site

Marketing site for employeeenvoy.com | SvelteKit 2.0 + Svelte 5 + Tailwind + Cloudflare Pages

## Critical: Data Accuracy

Integration count source of truth: `~/Documents/Cursor Workspace/ipeople/packages/shared/src/app-catalog.ts` (121 integrations)

Local `src/lib/data/integrations.ts` is for display only - NOT the source of truth.

## Commands

```bash
pnpm dev                # Development
pnpm build              # Build
npx wrangler pages deploy .svelte-kit/cloudflare --project-name=employeeenvoy  # Deploy
```

## See Also

- `.claude/STRUCTURE.md` - Directory layout
- `.claude/DATA_SOURCES.md` - Integration sources, verified claims, related docs
- `~/Documents/Cursor Workspace/ipeople/CLAUDE.md` - Main app documentation
