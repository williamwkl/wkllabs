# Not Found Implementation Plan

Date: 2026-06-09 · Audited files: `src/app/not-found.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx` · Author/agent: Codex

## 1. Scope

Plan improvements for the global 404 page.

## 2. Non-goals

- Do not change route structure.
- Do not add server-side logging unless approved.
- Do not push or deploy without approval.

## 3. Current State

- `not-found.tsx` renders a full-screen dark 404 page with centered text and a home link (`src/app/not-found.tsx:3-17`).
- It does not include the site navbar or footer (`src/app/not-found.tsx:5-15`).
- The home link points to `/` and includes a left arrow character in text (`src/app/not-found.tsx:9-14`).

## 3A. Audit Evidence Package

| Evidence | Current behavior | Why it matters |
|---|---|---|
| `src/app/not-found.tsx:5-15` | 404 page is isolated from normal navigation. | Users can only go home, not to Blog, Support, or product sections. |
| `src/app/not-found.tsx:6` | Large decorative 404 number. | Clear error identity, but not product-specific. |
| `src/app/not-found.tsx:9-14` | One recovery CTA. | Recovery options are limited. |

## 4. Recommendations - Classified

### A. UI-only / Presentation

- A1. Add WKL Labs navigation recovery links: Home, Blog, Platforms, Support.
- A2. Align button/icon styling with the rest of the site.
- A3. Add concise copy that helps users recover without overexplaining.

### B. Client Logic / Workflow

- B1. None required.

### C. Backend / API / Business Logic

- C1. Optional future logging/monitoring for frequent 404s.

## 5. Files Likely Affected

- `src/app/not-found.tsx`
- Optional shared link/button component usage

## 5A. Implementation-Ready Scope

Ready for A-only work.

## 6. Risk Level

Low. Changes are isolated to the global 404 UI.

## 7. Phasing

1. A phase: add recovery links and visual alignment.
2. Verify unknown routes and blog missing slugs still render a helpful 404.

## 8. Testing Checklist

- Visit a nonexistent route.
- Visit a nonexistent blog slug.
- Verify all recovery links work.
- Check mobile layout.
- `pnpm lint` and `pnpm build` pass.

## 9. Rollback Plan

Revert the isolated 404 commit if routing or layout regresses.

## 10. Push / Hold Rule

Commit locally and hold. No push/deploy without approval.

## 11. Freshness Check for Coding Agent

Confirm `src/app/not-found.tsx:3-17` still matches this plan before coding.

## 12. Exact Next Coding Prompt

Do not repeat the full audit. Use `docs/not-found/NOT_FOUND_IMPLEMENTATION_PLAN.md` as the implementation source of truth. Perform only a narrow freshness check against the files and line references listed here. If the code materially changed, stop and report the mismatch. Implement only the approved phase and hold changes locally.

## 13. Open Questions

- Should 404s include a contact/support CTA or only navigation recovery?
