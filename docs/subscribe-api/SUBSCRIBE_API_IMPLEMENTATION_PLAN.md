# Subscribe API Implementation Plan

Date: 2026-06-09 · Audited files: `src/app/api/subscribe/route.ts`, `src/components/EmailCaptureSection.tsx` · Author/agent: Codex

## 1. Scope

Plan improvements for `/api/subscribe` and the newsletter/waitlist submission workflow.

## 2. Non-goals

- Do not change landing-page visual layout in this API plan.
- Do not add a database-backed subscriber table unless approved.
- Do not push or deploy without approval.

## 3. Current State

- Resend client is initialized with `process.env.RESEND_API_KEY` (`src/app/api/subscribe/route.ts:4`).
- Audience ID is asserted with non-null `process.env.RESEND_AUDIENCE_ID!` (`src/app/api/subscribe/route.ts:5`).
- POST parses `{ email }` from JSON, validates with a regex, and returns 400 for invalid email (`src/app/api/subscribe/route.ts:7-13`).
- Valid emails are sent to `resend.contacts.create` with `unsubscribed: false` (`src/app/api/subscribe/route.ts:15-19`).
- All caught errors return generic 500 JSON after logging (`src/app/api/subscribe/route.ts:21-25`).
- Client form posts JSON to `/api/subscribe` and displays API error text (`src/components/EmailCaptureSection.tsx:17-32`, `src/components/EmailCaptureSection.tsx:81-83`).

## 3A. Audit Evidence Package

| Evidence | Current behavior | Why it matters |
|---|---|---|
| `src/app/api/subscribe/route.ts:4-5` | Env vars are read at module scope, with a non-null assertion for audience ID. | Missing config can fail unpredictably at runtime. |
| `src/app/api/subscribe/route.ts:9-13` | Email validation is simple regex-only. | Needs normalization and predictable error messaging. |
| `src/app/api/subscribe/route.ts:15-19` | Resend is the only persistence/action. | Duplicate behavior and provider failures control the whole user experience. |
| `src/app/api/subscribe/route.ts:22-25` | All provider errors become 500. | Duplicate contacts or bad config may need distinct handling. |
| `src/components/EmailCaptureSection.tsx:25-32` | Client trusts API `error` message. | API should keep errors safe and user-readable. |

## 4. Recommendations - Classified

### A. UI-only / Presentation

- A1. Adjust client copy to make newsletter/waitlist consent explicit.
- A2. Add clearer duplicate/success messaging once API behavior is defined.

### B. Client Logic / Workflow

- B1. Normalize email before submit or rely on server normalization and reflect normalized success.
- B2. Keep submit disabled while loading and prevent duplicate rapid submits.

### C. Backend / API / Business Logic

- C1. Validate required env vars and return a safe service-unavailable error when missing.
- C2. Normalize email with `trim().toLowerCase()` server-side.
- C3. Handle duplicate-contact responses as success or a friendly already-subscribed result.
- C4. Add basic abuse protection if this endpoint is exposed publicly.
- C5. Document required env vars in README/deployment docs.

## 5. Files Likely Affected

- `src/app/api/subscribe/route.ts`
- `src/components/EmailCaptureSection.tsx`
- `README.md` or deployment docs

## 5A. Implementation-Ready Scope

Ready for C1-C3 and B2 after confirming duplicate-contact behavior desired by the owner. C4 needs a chosen rate-limit strategy.

## 6. Risk Level

- A/B items: low to medium.
- C1-C3: medium because they affect lead capture.
- C4: medium/high depending on storage/provider used for rate limiting.

## 7. Phasing

1. C phase: add server-side env validation, email normalization, and duplicate handling.
2. B phase: align client duplicate/loading behavior.
3. A phase: refine consent and success/error copy.
4. Verify with curl and browser form submissions.

## 8. Testing Checklist

- Invalid email returns 400.
- Valid email returns success.
- Duplicate email returns friendly success or already-subscribed response.
- Missing env vars return safe service-unavailable response.
- Client displays loading, success, and error states.
- `pnpm lint` and `pnpm build` pass.

## 9. Rollback Plan

Keep API changes in one commit and client copy changes in another. Revert API commit if subscriptions fail in production-like testing.

## 10. Push / Hold Rule

Commit locally and hold. No push/deploy without approval.

## 11. Freshness Check for Coding Agent

Confirm `src/app/api/subscribe/route.ts:4-25` and `src/components/EmailCaptureSection.tsx:17-32` still match this plan before coding.

## 12. Exact Next Coding Prompt

Do not repeat the full audit. Use `docs/subscribe-api/SUBSCRIBE_API_IMPLEMENTATION_PLAN.md` as the implementation source of truth. Perform only a narrow freshness check against the files and line references listed here. If the code materially changed, stop and report the mismatch. Implement only the approved phase and hold changes locally.

## 13. Open Questions

- Should duplicate subscriptions be treated as success?
- Is Resend the only subscriber destination, or should emails also be stored in Postgres?
