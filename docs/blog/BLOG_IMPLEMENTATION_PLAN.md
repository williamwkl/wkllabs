# Blog Implementation Plan

Date: 2026-06-09 · Audited files: `src/app/blog/page.tsx`, `src/lib/blog.ts`, `src/components/Navbar.tsx`, `src/components/Footer.tsx` · Author/agent: Codex

## 1. Scope

Plan improvements for `/blog`, the public index of generated tech-news posts.

## 2. Non-goals

- Do not change cron post generation here.
- Do not change database schema in a UI-only pass.
- Do not push or deploy without approval.

## 3. Current State

- `/blog` revalidates every 3600 seconds (`src/app/blog/page.tsx:7`).
- It calls `getPosts(20)` and `getPostCount()` inside a try/catch, swallowing DB setup errors (`src/app/blog/page.tsx:15-23`).
- Empty state says posts are generated daily automatically (`src/app/blog/page.tsx:47-51`).
- Each post links to `/blog/${post.slug}` and displays category, date, source, title, summary, and read-more affordance (`src/app/blog/page.tsx:53-79`).
- `getPosts` queries `blog_posts` ordered by `published_at DESC` with limit/offset (`src/lib/blog.ts:33-39`).

## 3A. Audit Evidence Package

| Evidence | Current behavior | Why it matters |
|---|---|---|
| `src/app/blog/page.tsx:18-23` | DB errors produce an empty blog without visible operational state. | Users see a content empty state even if the system is broken. |
| `src/app/blog/page.tsx:47-51` | Empty copy promises daily automation. | If cron is not configured, copy can overpromise. |
| `src/app/blog/page.tsx:55-58` | Entire article row is a link. | Good scan UX; needs focus-state and mobile tap verification. |
| `src/lib/blog.ts:33-39` | Pagination inputs exist at data layer but UI only loads first 20. | A future archive/load-more flow can be added without schema changes. |

## 4. Recommendations - Classified

### A. UI-only / Presentation

- A1. Improve the empty state so it distinguishes "no posts yet" from "temporarily unavailable" when possible.
- A2. Add a clearer blog header explaining that posts are curated/generated summaries with source links.
- A3. Strengthen article row hover/focus styles for keyboard accessibility.
- A4. Add visual grouping for categories once post volume grows.

### B. Client Logic / Workflow

- B1. Add pagination or "Load more" using existing `limit`/`offset` support.
- B2. Add query filtering by category once enough posts exist.

### C. Backend / API / Business Logic

- C1. Expose a safer availability/error signal rather than silently treating DB failure as no posts.
- C2. Consider adding indexes on `published_at`, `slug`, and `category` if post volume grows.

## 5. Files Likely Affected

- `src/app/blog/page.tsx`
- `src/lib/blog.ts`
- Optional: new blog filter or pagination components under `src/components`

## 5A. Implementation-Ready Scope

Ready for A-only polish. B/C work needs a decision on pagination, category filters, and DB failure handling.

## 6. Risk Level

- A items: low.
- B1/B2: medium due to route/state behavior.
- C1/C2: medium because database behavior and operational semantics change.

## 7. Phasing

1. A phase: polish header, empty state, focus states.
2. B phase: add pagination/filtering if approved.
3. C phase: add explicit DB unavailable handling and data-layer performance work if approved.

## 8. Testing Checklist

- `/blog` renders with posts.
- `/blog` renders empty state when no posts exist.
- Keyboard can tab through article links.
- Mobile article rows remain readable.
- `pnpm lint` and `pnpm build` pass.

## 9. Rollback Plan

Keep UI and data-flow changes in separate commits. Revert the data-flow commit first if post loading regresses.

## 10. Push / Hold Rule

Commit locally and hold. No push/deploy without explicit approval.

## 11. Freshness Check for Coding Agent

Confirm `src/app/blog/page.tsx:15-23` and `src/lib/blog.ts:33-39` still match this plan before coding.

## 12. Exact Next Coding Prompt

Do not repeat the full audit. Use `docs/blog/BLOG_IMPLEMENTATION_PLAN.md` as the implementation source of truth. Perform only a narrow freshness check against the files and line references listed here. If the code materially changed, stop and report the mismatch. Implement only the approved phase and hold changes locally.

## 13. Open Questions

- Should generated posts be labeled as AI-assisted?
- Is category filtering part of the near-term product goal?
