# Blog Post Implementation Plan

Date: 2026-06-09 · Audited files: `src/app/blog/[slug]/page.tsx`, `src/lib/blog.ts` · Author/agent: Codex

## 1. Scope

Plan improvements for `/blog/[slug]`, the public detail page for generated posts.

## 2. Non-goals

- Do not change cron generation or prompt logic in this plan.
- Do not add markdown/rich-text rendering unless approved.
- Do not deploy or push without approval.

## 3. Current State

- Static params are generated from `getPosts(50)` and return an empty array on errors (`src/app/blog/[slug]/page.tsx:10-17`).
- The page awaits `params`, fetches the post by slug, and calls `notFound()` on fetch error or missing post (`src/app/blog/[slug]/page.tsx:25-34`).
- Article body splits plain text content on double newlines and renders paragraphs (`src/app/blog/[slug]/page.tsx:68-73`).
- Source link opens in a new tab when `source_url` exists (`src/app/blog/[slug]/page.tsx:76-87`).
- `getPostBySlug` uses a parameterized SQL query (`src/lib/blog.ts:41-47`).

## 3A. Audit Evidence Package

| Evidence | Current behavior | Why it matters |
|---|---|---|
| `src/app/blog/[slug]/page.tsx:10-17` | Build/static param generation tolerates DB errors. | Good deploy resilience, but can mask broken content generation. |
| `src/app/blog/[slug]/page.tsx:25-34` | Missing or failed post lookup becomes 404. | Operational errors and true not-found are not distinguished. |
| `src/app/blog/[slug]/page.tsx:68-73` | Content rendering is plain paragraph-only. | Safe and simple, but limits article formatting and source attribution structure. |
| `src/app/blog/[slug]/page.tsx:76-87` | Original source is linked when present. | Important trust signal for generated summaries. |

## 4. Recommendations - Classified

### A. UI-only / Presentation

- A1. Add clearer article metadata: source name, generated/curated label, and reading-time estimate.
- A2. Improve body typography, spacing, and mobile readability.
- A3. Add "More from WKL Labs" or "Back to latest posts" at the bottom.
- A4. Make original source attribution visually stronger.

### B. Client Logic / Workflow

- B1. Add related posts or latest posts if a lightweight data fetch is approved.
- B2. Add share buttons only if tracking and canonical URLs are confirmed.

### C. Backend / API / Business Logic

- C1. Add post-level metadata generation for title/description/Open Graph if approved.
- C2. Distinguish DB failure from true not-found for observability.

## 5. Files Likely Affected

- `src/app/blog/[slug]/page.tsx`
- `src/lib/blog.ts`
- Optional: `src/components` article metadata/related-post components

## 5A. Implementation-Ready Scope

Ready for A-only article presentation improvements. B/C work needs approval because it touches data fetching, metadata, or observability.

## 6. Risk Level

- A items: low.
- B items: medium due to extra data loading.
- C items: medium because metadata and error semantics affect SEO and operations.

## 7. Phasing

1. A phase: improve article header, metadata, typography, source block, and bottom navigation.
2. B phase: add related/latest posts if approved.
3. C phase: add dynamic metadata and error distinction if approved.

## 8. Testing Checklist

- Existing post renders correctly.
- Missing slug shows 404.
- Source links have `target="_blank"` and `rel="noopener noreferrer"`.
- Article layout is readable at mobile and desktop widths.
- `pnpm lint` and `pnpm build` pass.

## 9. Rollback Plan

Keep article UI changes isolated. Revert metadata/data-fetch changes separately if SEO or build behavior regresses.

## 10. Push / Hold Rule

Commit locally and hold. No push/deploy without approval.

## 11. Freshness Check for Coding Agent

Confirm `src/app/blog/[slug]/page.tsx:25-34` and `src/app/blog/[slug]/page.tsx:68-87` still match this plan before coding.

## 12. Exact Next Coding Prompt

Do not repeat the full audit. Use `docs/blog-post/BLOG_POST_IMPLEMENTATION_PLAN.md` as the implementation source of truth. Perform only a narrow freshness check against the files and line references listed here. If the code materially changed, stop and report the mismatch. Implement only the approved phase and hold changes locally.

## 13. Open Questions

- Should article pages disclose AI generation explicitly?
- Should every blog post have dynamic metadata?
