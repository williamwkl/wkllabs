# Template — Page / Module Improvement Plan (Spell Collector)

Plan changes to a page/module. **No coding until the plan is approved.** This template is
for the planning/audit agent. The finished plan should be detailed enough that a coding
agent can execute it with only a narrow freshness check, not a repeated full audit.

The Git repo/source files are the source of truth. The planning agent must audit the
actual source first and cite evidence. If docs conflict with source, code wins.

## Rules
- **Audit the real code first**; cite files. Flag any doc↔code conflict (code wins).
- Classify EVERY recommendation as **A. UI-only / presentation**, **B. client logic / workflow behavior**, or **C. backend/API/schema/business logic**.
- A UI-only phase must **not** implement or mix in B/C work without explicit approval.
- Include an **Audit Evidence Package** with exact file paths, line references, current behavior, and why each finding matters.
- Make the plan **execution-ready**: list all affected files, exact behavior changes, constraints, edge cases, verification steps, and stop conditions.
- For the coding agent, require only a **narrow freshness check** against the cited files/lines before coding. Do **not** ask the coding agent to redo the full repo audit unless the freshness check fails.
- When a page has meaningful UI/UX scope, include explicit **premium UX / user-friendliness / desktop-mobile** analysis: first impression, conversion/activation cues, accessibility, responsive behavior, empty/loading/error states, copy, visual hierarchy, and trust signals.
- If recommendations span both UI-only work and workflow/backend work, create **separate implementation plan docs**:
  - `<PAGE>_UI_IMPROVEMENT_PLAN.md` for A-only presentation/UX work.
  - `<PAGE>_WORKFLOW_BACKEND_IMPROVEMENT_PLAN.md` for B/C client workflow, API, schema, session, or business-logic work.
- Flag risky Spell Collector areas: auth/session · account deletion · seller onboarding · collection/inventory/listing quantity logic · cart/checkout · order/status lifecycle · payment-proof uploads · messaging · reports/block/moderation · ratings/reputation · admin routes/RBAC · notifications · pricing/currency · Scryfall/card sync · App Store / Google Play compliance.

---

## <Page/Module> Improvement Plan
**Date:** <date> · **Audited files:** <list> · **Author/agent:** <name>

### 1. Scope
What this plan covers.

### 2. Non-goals
Explicitly out of scope (e.g. schema, payments, order status, routes.ts split, mobile).

### 3. Current state (from source)
What exists today, cite files; note conflicts (code wins).

### 3A. Audit evidence package
For every important claim, include:
- Exact file path and line reference.
- Current behavior verified from source.
- Why it matters for the task.
- Whether any docs conflict with the source.

This section is what lets the coding agent avoid repeating the full audit.

### 4. Recommendations — classified
**A. UI-only / presentation** — A1…, A2…
**B. Client logic / workflow** — B1…
**C. Backend / API / schema / business logic** — C1…
> May recommend B/C, but do not implement them in a UI-only phase without approval.

For UI plans, also include:
- Premium UX goals: what should feel more polished, trustworthy, enticing, and user-friendly.
- Desktop UX direction: layout density, visual hierarchy, scanning, conversion cues, and interaction states.
- Mobile UX direction: thumb reach, keyboard behavior, compact content, tap targets, and reduced motion.
- Copy/trust guidance: what text helps the user continue without becoming marketing filler.

### 5. Files likely affected
Per item, the files/areas touched.

### 5A. Implementation-ready scope
State whether this plan is ready for coding.

Ready means:
- All affected files/areas are listed.
- Relevant routes, components, hooks, endpoints, tables, and permission checks are cited.
- A/B/C work is separated.
- Open questions are answered or clearly marked as blockers.
- Exact behavior changes are written as implementable steps.
- Stop conditions are explicit.

If not ready, list what must be audited or decided before coding.

### 6. Risk level
Per item: low / med / high; blast radius; reversibility; risky-area flag.

### 7. Phasing
Ordered steps labeled A/B/C; verification (`npm run check` / build / browser / curl) after each.

### 8. Testing checklist
Browser flows, curl, cross-user/RBAC, public-vs-auth, mobile, regression.

### 9. Rollback plan
Branch, flags (e.g. `ENFORCE_SESSION_TOKEN`), isolated commits, exact revert.

### 10. Push / hold rule
Commit locally and hold; no push/deploy without explicit approval.

### 11. Freshness check for coding agent
Before coding, the implementation agent should:
- Run `git status`.
- Confirm the cited files still contain the cited behavior.
- Confirm no listed stop condition is present.
- Stop and report if the cited code moved, changed materially, or conflicts with this plan.

The coding agent should **not** redo a broad repo audit unless this narrow freshness check fails.

### 12. Exact next coding prompt (after approval)
The precise prompt to run, repeating scope guardrails + push/hold rule.

The prompt must include:
- "Do not repeat the full audit. Use this plan as the implementation source of truth."
- "Perform only a narrow freshness check against the files and line references listed here."
- "If the code materially changed, stop and report the mismatch."

### 13. Open questions
