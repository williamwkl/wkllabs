# WKL Labs

![WKL Labs website on desktop](docs/images/wkllabs-home-desktop.webp)

The company website for WKL Labs, an independent software studio that builds applications, websites, automation, and reporting dashboards, and operates its own products.

**Live:** [wkllabs.com](https://wkllabs.com)

<img src="docs/images/wkllabs-home-mobile.webp" alt="WKL Labs website on a phone" width="300">

## The problem

The studio needed one clear place to explain its services, show real work, and turn visitors into project enquiries.

## What I built

- **Marketing site:** home, services, about, contact, guides, privacy, and terms pages.
- **Proof built in:** live products, client projects, and client reviews.
- **Contact form:** server-side validation, rate limiting, and spam protection, with delivery through Resend.
- **Search foundations:** page metadata, structured data, sitemap, and a generated social image.
- **Production hardening:** security headers, accessible navigation, and mobile-first layouts.

## Tech

Next.js (App Router), React, TypeScript, Tailwind CSS v4, Resend, Cloudflare, and Railway.

```bash
pnpm install
pnpm dev
pnpm build
```

## Configuration

Copy these into `.env.local` to enable the contact form:

```bash
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
```

`CONTACT_TO_EMAIL` and `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` are optional.

To turn on Cloudflare Turnstile spam protection, set both keys from a Turnstile widget that allows `wkllabs.com`. Verification is enforced only when both are present, so setting just one leaves the form unprotected:

```bash
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

## Notes

The products are separate, private codebases. See the [Nabbee](https://github.com/williamwkl/nabbee) and [Spell Collector](https://github.com/williamwkl/spellcollector) case studies.
