# Home Implementation Plan

Date: 2026-06-09 · Audited files: `src/app/page.tsx`, `src/components/*`, `src/lib/products.ts` · Author/agent: Codex

## 1. Scope

Plan improvements for the `/` landing page: navbar, hero, product grid, changelog, roadmap, email capture, support, footer, floating email button, and back-to-top control.

## 2. Non-goals

- Do not change database schema.
- Do not change Resend, cron, or blog-generation behavior in this page plan.
- Do not deploy or push without approval.

## 3. Current State

- `/` composes `Navbar`, `Hero`, `PlatformsGrid`, `ChangelogSection`, `RoadmapSection`, `EmailCaptureSection`, `SupportSection`, `Footer`, `FloatingEmailButton`, and `BackToTop` in order (`src/app/page.tsx:13-29`).
- Hero CTAs scroll to `#platforms` and `#support` (`src/components/Hero.tsx:52-65`).
- Product cards are sourced from `products`, split into live and coming-soon groups (`src/components/PlatformsGrid.tsx:6-9`).
- BookIt, MenuQR, and Coming Soon currently use `href: "#"` (`src/lib/products.ts:15-46`).
- Live cards always open `product.href` in a new tab (`src/components/PlatformCard.tsx:43-51`).
- Email capture posts to `/api/subscribe` and renders loading/success/error states (`src/components/EmailCaptureSection.tsx:12-33`, `src/components/EmailCaptureSection.tsx:50-85`).
- Floating email and back-to-top controls are fixed at bottom right and bottom left (`src/components/FloatingEmailButton.tsx:10-25`, `src/components/BackToTop.tsx:15-24`).

## 3A. Audit Evidence Package

| Evidence | Current behavior | Why it matters |
|---|---|---|
| `src/app/page.tsx:13-29` | Landing page is a section-composed single page. | Page-level changes should preserve section ordering unless product strategy changes. |
| `src/lib/products.ts:22`, `src/lib/products.ts:32`, `src/lib/products.ts:42` | Product links are placeholders. | Live CTAs can lead nowhere while still appearing active. |
| `src/components/PlatformCard.tsx:43-51` | All live product cards open a target URL in a new tab. | Placeholder `#` creates a broken conversion path. |
| `src/components/EmailCaptureSection.tsx:17-25` | Form expects JSON from `/api/subscribe`. | UI copy and error states depend on API behavior. |
| `src/components/Navbar.tsx:6-12` | Navbar mixes same-page anchors and `/blog`. | Active-section logic should not mark `/blog` incorrectly on non-home pages. |
| `src/components/FloatingEmailButton.tsx:14` and `src/components/BackToTop.tsx:19` | Two fixed controls occupy bottom corners. | Must verify mobile overlap with content and safe areas. |

## 4. Recommendations - Classified

### A. UI-only / Presentation

- A1. Replace generic product-card CTA text with product-specific copy such as `Open BookIt`, `View MenuQR`, or `Join waitlist`.
- A2. Add stronger proof signals near products: screenshot, launch status, target business type, or one concrete benefit per product.
- A3. Improve floating controls on mobile with safe-area spacing and reduced text expansion.
- A4. Add visible section spacing checks so hero, email capture, and support do not feel visually repetitive.

### B. Client Logic / Workflow

- B1. Prevent live product cards from opening `#`; if a URL is missing, render a disabled or contact/waitlist action.
- B2. Track CTA clicks and newsletter interaction events once an analytics provider is selected.
- B3. Make mobile menu close behavior account for same-page anchors after scroll.

### C. Backend / API / Business Logic

- C1. None required for the home page itself. Newsletter backend work belongs in `docs/subscribe-api`.

## 5. Files Likely Affected

- `src/app/page.tsx`
- `src/components/Hero.tsx`
- `src/components/PlatformsGrid.tsx`
- `src/components/PlatformCard.tsx`
- `src/components/ComingSoonCard.tsx`
- `src/components/EmailCaptureSection.tsx`
- `src/components/FloatingEmailButton.tsx`
- `src/components/BackToTop.tsx`
- `src/components/Navbar.tsx`
- `src/lib/products.ts`

## 5A. Implementation-Ready Scope

Ready for UI-only work after product destination URLs are confirmed. Stop before coding B1 if real BookIt/MenuQR URLs are unknown.

## 6. Risk Level

- A items: low risk, reversible UI changes.
- B1: medium risk because it changes conversion behavior.
- B2: medium risk until analytics provider and event taxonomy are confirmed.

## 7. Phasing

1. A phase: polish CTA copy, product-card hierarchy, mobile fixed-control spacing.
2. B phase: add missing-link guardrails and analytics events.
3. Verify with `pnpm lint`, `pnpm build`, and browser checks at mobile and desktop sizes.

## 8. Testing Checklist

- Home loads without console errors.
- Anchor CTAs scroll to correct sections.
- Product cards do not open `#`.
- Email form success/error states remain visible.
- Floating controls do not cover footer, form, or support CTA on mobile.

## 9. Rollback Plan

Keep changes in one local commit. Revert the commit if product CTA or layout changes regress conversion paths.

## 10. Push / Hold Rule

Commit locally and hold. Do not push or deploy without explicit approval.

## 11. Freshness Check for Coding Agent

Run `git status`. Confirm the cited files still contain the cited behavior. If product data, section composition, or email form behavior materially changed, stop and report.

## 12. Exact Next Coding Prompt

Do not repeat the full audit. Use `docs/home/HOME_IMPLEMENTATION_PLAN.md` as the implementation source of truth. Perform only a narrow freshness check against the files and line references listed here. If the code materially changed, stop and report the mismatch. Implement only the approved phase and hold changes locally.

## 13. Open Questions

- What are the final BookIt and MenuQR production URLs?
- Which analytics provider should receive CTA and form events?
