# Prioritized Findings

Date: 2026-06-09

| Priority | Finding | Impact | Suggested Action | Verification |
|---|---|---|---|---|
| P0 | Product links need confirmed destinations | Users can hit dead or placeholder actions | Replace `href: "#"` with real URLs or explicit unavailable states | Click all product cards locally and in production |
| P0 | Newsletter flow needs end-to-end verification | Lead capture may silently fail | Test API validation, Resend behavior, database writes, and error handling | Submit valid, invalid, and duplicate emails |
| P1 | Production env documentation is missing | Deployments can fail or drift | Document required env vars and platform setup | Fresh setup from README succeeds |
| P1 | No test script is defined | Regressions depend on manual checks | Add smoke tests or a documented QA checklist | `pnpm lint`, `pnpm build`, and smoke checks pass |
| P1 | Analytics/conversion tracking not confirmed | Launch performance may be invisible | Define events for product clicks, email submits, support clicks, and blog reads | Events appear in analytics dashboard |
| P2 | Default README remains | Onboarding context is weak | Replace with WKL Labs-specific project docs | New contributor can run and understand repo |
| P2 | Changelog/roadmap ownership is unclear | Public content can become stale | Add content update rules and owner | Update cadence documented |
