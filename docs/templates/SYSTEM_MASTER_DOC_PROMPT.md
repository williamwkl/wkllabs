# Template — System Master Doc

Use this to (re)generate `docs/system/SYSTEM_MASTER.md`. Always re-audit the
**actual repo** first; the code is the source of truth. If a section can't be
verified from source, mark it "UNVERIFIED" rather than guessing.

---

## Required audit before writing
Run and read:
1. `pwd`, `git status --short`, `git branch --show-current`, `git log --oneline -5`
2. `find . -maxdepth 2 -type f | sort` (skip node_modules)
3. Root `CLAUDE.md`, `AGENTS.md`, README, `package.json`
4. `client/` (pages, components, contexts, lib), `mobile/app/`, `server/` (`index.ts`, `routes.ts`, `db.ts`, `websocket.ts`, `cron.ts`)
5. Table definitions (`initializeTables()` in `server/routes.ts`, `migrations/`)
6. Auth/session/RBAC/admin logic; order/payment/status logic; cron/realtime/external services

## Sections to produce
1. Product overview
2. User roles
3. Core modules / pages (web, mobile, backend)
4. Core workflows (list the product-specific ones)
5. Lifecycle / status map
6. Data model map
7. API & mutation risk map (high-risk + admin-guarded + auth model)
8. UI/UX system status
9. Localization / currency / platform assumptions
10. AI / automation / background jobs
11. Guardrails
12. Known risks & open questions
13. Recommended next priorities
14. Changelog

## Rules
- Cite source files. Prefer code over older docs; flag conflicts.
- Keep it a map (links + summaries), not a dump.
- Update the changelog with date + what changed.
