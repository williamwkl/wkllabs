# System Map

Date: 2026-06-09

## Stack

- Framework: Next.js 16 app router
- Runtime: React 19, TypeScript
- Styling: Tailwind CSS 4, shadcn-style UI primitives
- Icons: `lucide-react`
- Data/integrations: `pg`, Resend, RSS parser
- Package manager: pnpm lockfile present

## App Surface

- `src/app/page.tsx` composes the primary landing page.
- `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx` provide blog routes.
- `src/app/api/subscribe/route.ts` handles email capture.
- `src/app/api/cron/route.ts` provides scheduled/background behavior.
- `src/app/sitemap.ts` and `src/app/robots.ts` define crawler assets.
- `src/app/opengraph-image.tsx` defines social sharing imagery.

## Main Page Sections

- Navbar
- Hero
- Platforms grid
- Changelog
- Roadmap
- Email capture
- Support
- Footer
- Floating email button
- Back-to-top control

## Product Model

`src/lib/products.ts` defines product cards with:

- `id`
- `name`
- `tagline`
- `description`
- `href`
- `status`
- `icon`

Current products include BookIt, MenuQR, and one coming-soon slot.

## Verification Commands

```bash
pnpm lint
pnpm build
pnpm dev
```

## Open Questions

- Which URLs should BookIt and MenuQR link to in production?
- Should newsletter submissions write to a database, email provider audience, or both?
- Which analytics provider should be the source of truth for conversion events?
- Is the blog manually authored, imported from RSS, or generated from another source?
