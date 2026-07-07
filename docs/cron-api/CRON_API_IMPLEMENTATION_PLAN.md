# Cron API Implementation Plan

Date: 2026-06-09 · Audited files: `src/app/api/cron/route.ts`, `src/lib/blog.ts`, `src/lib/db.ts`, `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx` · Author/agent: Codex

## 1. Scope

Plan improvements for `/api/cron`, RSS ingestion, AI post generation, and blog persistence.

## 2. Non-goals

- Do not change public blog UI in this API plan unless needed for verification.
- Do not change provider/model without approval.
- Do not push or deploy without approval.

## 3. Current State

- Cron endpoint is a GET route protected by `secret` query param compared to `process.env.CRON_SECRET` (`src/app/api/cron/route.ts:26-30`).
- It ensures the `blog_posts` table exists before work starts (`src/app/api/cron/route.ts:32-34`, `src/lib/blog.ts:16-31`).
- It fetches four RSS feeds and takes three items from each (`src/app/api/cron/route.ts:10-15`, `src/app/api/cron/route.ts:38-51`).
- It asks Anthropic to select three relevant stories (`src/app/api/cron/route.ts:57-73`).
- It asks Anthropic to generate JSON for each selected item and parses the first JSON-shaped block with regex (`src/app/api/cron/route.ts:77-103`).
- It inserts generated posts into Postgres with `ON CONFLICT (slug) DO NOTHING` (`src/app/api/cron/route.ts:105-110`).
- DB connection uses `DATABASE_URL` and production SSL with `rejectUnauthorized: false` (`src/lib/db.ts:3-6`).

## 3A. Audit Evidence Package

| Evidence | Current behavior | Why it matters |
|---|---|---|
| `src/app/api/cron/route.ts:26-30` | Query-secret auth protects cron. | Simple but secret may leak through logs/URLs; needs deployment review. |
| `src/app/api/cron/route.ts:38-51` | Feed failures are logged and skipped. | Good partial resilience, but no structured result per feed. |
| `src/app/api/cron/route.ts:65-73` | Selection output parsing assumes comma-separated text. | Model drift can create no selected posts. |
| `src/app/api/cron/route.ts:98-103` | JSON extraction uses regex and `JSON.parse`. | Invalid model output can fail the run. |
| `src/app/api/cron/route.ts:105-110` | Slug includes `Date.now()`, so conflicts are unlikely. | Same source story can be duplicated across runs. |
| `src/lib/blog.ts:16-31` | Table creation lives in app code. | Practical for startup but schema changes need discipline. |

## 4. Recommendations - Classified

### A. UI-only / Presentation

- A1. None in cron API. Any public disclosure belongs to blog page/post plans.

### B. Client Logic / Workflow

- B1. None.

### C. Backend / API / Business Logic

- C1. Validate required env vars before RSS/model/DB work starts.
- C2. Return structured run results: feed count, selected count, created count, skipped count, errors.
- C3. Replace regex-only JSON parsing with stricter model instructions and defensive validation.
- C4. Prevent duplicate source stories by adding or using `source_url` uniqueness if approved.
- C5. Add safer auth for cron if deployment platform supports cron headers.
- C6. Add model/provider error handling that does not expose raw provider details to public responses.
- C7. Document cron schedule, required secrets, and expected output.

## 5. Files Likely Affected

- `src/app/api/cron/route.ts`
- `src/lib/blog.ts`
- `src/lib/db.ts`
- Deployment docs / README
- Optional migration if uniqueness changes are approved

## 5A. Implementation-Ready Scope

Ready for C1, C2, C3, C6, and C7 without schema changes. C4 requires explicit approval because it may alter database constraints or duplicate policy. C5 requires deployment-platform confirmation.

## 6. Risk Level

- C1/C2/C3/C6/C7: medium; affects automated content generation but is reversible.
- C4: high if schema constraints are introduced.
- C5: medium/high depending on production cron provider.

## 7. Phasing

1. C phase without schema: env validation, structured run response, defensive parsing, safe errors, docs.
2. C schema phase: duplicate prevention via `source_url` constraint or source fingerprint if approved.
3. C auth phase: replace/augment query-secret auth if deployment supports headers.
4. Verify with local curl using valid and invalid secrets.

## 8. Testing Checklist

- Invalid secret returns 401.
- Missing env vars return safe error before external calls.
- Feed failures are represented in structured response.
- Invalid model JSON does not crash the entire run.
- Created posts appear on `/blog`.
- `pnpm lint` and `pnpm build` pass.

## 9. Rollback Plan

Separate parsing/response changes from schema/auth changes. Revert schema/auth commits first if cron stops running.

## 10. Push / Hold Rule

Commit locally and hold. No push/deploy without approval.

## 11. Freshness Check for Coding Agent

Confirm `src/app/api/cron/route.ts:26-30`, `src/app/api/cron/route.ts:57-73`, `src/app/api/cron/route.ts:77-110`, and `src/lib/blog.ts:16-31` still match this plan before coding.

## 12. Exact Next Coding Prompt

Do not repeat the full audit. Use `docs/cron-api/CRON_API_IMPLEMENTATION_PLAN.md` as the implementation source of truth. Perform only a narrow freshness check against the files and line references listed here. If the code materially changed, stop and report the mismatch. Implement only the approved phase and hold changes locally.

## 13. Open Questions

- What deployment platform will trigger cron?
- Should duplicate prevention use `source_url`, normalized title, or both?
- Is AI-assisted content disclosure required on public blog pages?
