# System Metadata Implementation Plan

Date: 2026-06-09 · Audited files: `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/opengraph-image.tsx` · Author/agent: Codex

## 1. Scope

Plan improvements for site-wide metadata, robots, sitemap, and generated Open Graph image.

## 2. Non-goals

- Do not change visual page sections in this plan.
- Do not change deployment domain without owner confirmation.
- Do not push or deploy without approval.

## 3. Current State

- Root metadata sets title, description, metadata base, Open Graph, Twitter card, and favicon (`src/app/layout.tsx:15-38`).
- Canonical domain is hard-coded to `https://wklapp.com` (`src/app/layout.tsx:19`, `src/app/layout.tsx:24`).
- Robots allows all crawlers and points to `https://wklapp.com/sitemap.xml` (`src/app/robots.ts:2-6`).
- Sitemap includes only home and blog (`src/app/sitemap.ts:2-6`).
- Open Graph image is generated at 1200x630 with WKL Labs copy and domain (`src/app/opengraph-image.tsx:3-117`).

## 3A. Audit Evidence Package

| Evidence | Current behavior | Why it matters |
|---|---|---|
| `src/app/layout.tsx:15-38` | Site-wide metadata exists but is generic. | Good baseline; product/blog pages may need dynamic metadata. |
| `src/app/sitemap.ts:3-6` | Sitemap omits dynamic blog posts. | Search discovery may miss article pages. |
| `src/app/robots.ts:3-6` | Robots allows all and links sitemap. | Needs domain confirmation before production. |
| `src/app/opengraph-image.tsx:82-97` | OG image markets BookIt/MenuQR/More coming. | Useful brand asset; must match actual product availability. |

## 4. Recommendations - Classified

### A. UI-only / Presentation

- A1. Refine OG image copy and visual hierarchy after final product positioning is confirmed.
- A2. Ensure favicon and OG image match WKL Labs branding.

### B. Client Logic / Workflow

- B1. None.

### C. Backend / API / Business Logic

- C1. Add dynamic blog post sitemap entries from `blog_posts` if DB availability is reliable.
- C2. Add dynamic metadata for `/blog` and `/blog/[slug]`.
- C3. Confirm `wklapp.com` is the canonical production domain and make it configurable if needed.

## 5. Files Likely Affected

- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/opengraph-image.tsx`
- Optional: `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/lib/blog.ts`

## 5A. Implementation-Ready Scope

Ready for A-only OG/metadata copy polish after domain and positioning confirmation. C work requires approval because it touches SEO generation and database-backed sitemap behavior.

## 6. Risk Level

- A items: low.
- C1/C2: medium because build/runtime behavior may depend on DB availability.
- C3: medium if production domain is not final.

## 7. Phasing

1. A phase: confirm and polish metadata/OG copy.
2. C phase: add dynamic blog metadata and sitemap entries if approved.
3. Verify with direct requests to `/sitemap.xml`, `/robots.txt`, and `/opengraph-image`.

## 8. Testing Checklist

- Metadata appears in page source.
- `/robots.txt` returns the expected sitemap URL.
- `/sitemap.xml` includes all approved public URLs.
- OG image renders and is readable.
- `pnpm lint` and `pnpm build` pass.

## 9. Rollback Plan

Keep static copy changes separate from dynamic sitemap/metadata changes. Revert dynamic SEO changes first if build or DB access regresses.

## 10. Push / Hold Rule

Commit locally and hold. No push/deploy without approval.

## 11. Freshness Check for Coding Agent

Confirm `src/app/layout.tsx:15-38`, `src/app/sitemap.ts:2-6`, `src/app/robots.ts:2-6`, and `src/app/opengraph-image.tsx:3-117` still match this plan before coding.

## 12. Exact Next Coding Prompt

Do not repeat the full audit. Use `docs/system-metadata/SYSTEM_METADATA_IMPLEMENTATION_PLAN.md` as the implementation source of truth. Perform only a narrow freshness check against the files and line references listed here. If the code materially changed, stop and report the mismatch. Implement only the approved phase and hold changes locally.

## 13. Open Questions

- Is `https://wklapp.com` the final canonical domain?
- Should blog posts be added to sitemap dynamically?
