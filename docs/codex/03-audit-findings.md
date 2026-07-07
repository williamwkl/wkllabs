# Audit Findings

Date: 2026-06-09

## Product and Content

- Product cards currently need confirmed production destinations.
- The coming-soon card should support a clear capture or notification path if it is meant to generate demand.
- Changelog and roadmap content should have an owner and update cadence.

## UX

- The page should be checked at mobile, tablet, laptop, and wide desktop widths.
- Floating actions need overlap testing against footer, email capture, and mobile safe areas.
- Product cards should make status and next action unambiguous.

## Architecture

- The component split is clean for a small marketing site.
- Product data is centralized, which is appropriate for the current scale.
- If product pages are added, move from `href: "#"` placeholders to typed routes or external URL config.

## Integrations

- Newsletter capture should be tested for success, duplicate, invalid email, rate limit, and provider failure states.
- Cron behavior should be documented with required schedule, expected side effects, and deployment platform setup.
- Database access should be checked for connection pooling behavior in the target hosting environment.

## Security and Privacy

- Public API routes should validate input and avoid leaking provider errors.
- Environment variables should be documented without committing secrets.
- Newsletter consent copy should match the actual storage and email behavior.

## QA

- `package.json` currently exposes lint/build/dev scripts, but no explicit test script.
- Add a smoke checklist or lightweight automated tests before launch.
- Verify generated metadata, Open Graph image, sitemap, and robots output.

## Documentation

- Replace the default Next.js README with a WKL Labs-specific README.
- Add deployment and environment setup notes.
- Keep this folder as the running audit and implementation record.
