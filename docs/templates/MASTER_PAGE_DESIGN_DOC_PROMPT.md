# Template — Master Page / Module Design Doc (Spell Collector)

Use this to create a master doc for one page/module (e.g. Orders, Seller Inventory,
Marketplace, Auth). **Documentation task — do not write code.**

## Rules before you write
1. **Audit the actual Git repo / source files first.** Cite file paths + lines.
2. **Do not rely only on docs** — verify against source; if docs conflict with code, the **code wins** (note the conflict).
3. **No coding** during this doc task.
4. Classify any recommendation as **A. UI-only / presentation**, **B. client logic / workflow behavior**, or **C. backend/API/schema/business logic**. Do **not** mix B/C into a UI-only phase without explicit approval.
5. Call out whether the page touches any **risky Spell Collector area**:
   auth/session · account deletion · seller onboarding · collection/inventory/listing quantity logic · cart/checkout · order/status lifecycle · payment-proof uploads · messaging · reports/block/moderation · ratings/reputation · admin routes/RBAC · notifications · pricing/currency · Scryfall/card sync · App Store / Google Play compliance.

---

## <Page/Module Name> — Master Doc
**Audit date:** <date> · **Audited files:** <web pages/components, mobile screens, server endpoints with paths>

### 1. Purpose
What this page/module is for and which roles use it.

### 2. Routes & source files
- Web routes/pages: `client/src/pages/...`, components.
- Mobile screens: `mobile/app/...`.
- Server endpoints (method + path + `server/routes.ts:line`).
- Tables read/written.

### 3. Current UI
Layout, key components, states (empty/loading/error), design-system usage, web↔mobile parity.

### 4. Current logic / data flow
Client state/contexts/hooks; request/response flow; auth & ownership rules that apply (guards, public allowlist, `ENFORCE_SESSION_TOKEN`); realtime if any.

### 5. Business rules
Lifecycle/status transitions, quantity/pricing math, validation, who-can-do-what.

### 6. UX strengths
What already works well.

### 7. UX risks / gaps
Confusing flows, missing states, parity gaps, correctness/safety risks (flag risky-area items).

### 8. Recommended improvements
Each tagged **A / B / C** (see rules). Short rationale per item.

### 9. Phased plan
Ordered phases; keep UI-only (A) phases separate from B/C. Verification after each.

### 10. What not to change
Explicitly list untouchable behavior (schema, payments, order status, RBAC, destructive actions, routes.ts split).

### 11. Open questions
Unknowns needing human input or further audit.

### 12. Changelog
Date — change — author/agent.
