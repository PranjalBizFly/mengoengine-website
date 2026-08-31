# MengoEngine website

A ~500-page marketing site for Mengo, built as a design system plus a data-driven
page-type system rather than 500 hand-built pages.

## Commands

| command | what it does |
| --- | --- |
| `npm run dev` | local development |
| `npm run build` | static build (503 routes prerendered) |
| `npm run validate` | content-layer validation: slugs, dangling references, duplicate copy, placeholder text (runs automatically before every build) |
| `npm run audit` | post-build SEO/link audit: duplicate metadata, H1 counts, canonicals, broken internal links |
| `npm run qa:responsive` | headless Chrome pass over every page type at 320–1920px |
| `npm run docs` | regenerate `docs/page-inventory.csv` and `docs/architecture.md` from the content data |
| `npm run verify` | typecheck + build + audit |

`qa:responsive` needs a running server: `npx next start -p 4313` then
`npm run qa:responsive -- http://localhost:4313`.

## Documentation

- [`docs/audit.md`](docs/audit.md) — audit of the existing mengoengine.com, content inventory with retain/rewrite/expand decisions, redirect map, and the list of missing content and assets.
- [`docs/architecture.md`](docs/architecture.md) — hierarchy, page-type mapping, priorities and the internal linking graph. Generated.
- [`docs/page-inventory.csv`](docs/page-inventory.csv) — every URL with type, template, parent, topic, intent, related pages, CTA and priority. Generated.

## Architecture

```
src/
  data/        content entities (products, features, solutions, industries, …)
  lib/         types, site config + URL builder, registry, nav, route index
  seo/         metadata builder, JSON-LD builders
  components/  brand, layout, ui primitives, forms, section systems
  app/         routes — one template per page type
```

**Content is separate from presentation.** Every page type receives a typed
entity from `src/data`; templates contain no page-specific copy. Adding 40 more
industries means adding 40 rows to `src/data/industries.ts`.

**One URL builder.** `src/lib/site.ts` `routes` is the only place paths are
constructed; `src/lib/registry.ts` resolves cross-references between entities so
internal linking is generated, not maintained by hand.

**One metadata system.** `src/seo/metadata.ts` derives a unique title,
description, canonical, Open Graph and Twitter record per page, with per-entity
overrides. Social cards are rendered on demand by `/api/og`.

**Navigation is derived from content.** The mega menu and footer in
`src/lib/nav.ts` are built from the data, so they cannot go stale.

**One form architecture.** `src/components/forms/LeadModal.tsx` provides the
modal, the inline form and every conversion trigger on the site, configured by
intent. All of it posts to `/api/lead`.

## Configuration before launch

- `MENGO_LEAD_WEBHOOK` — where form submissions are forwarded. Without it the
  endpoint validates and logs only.
- Legal pages contain sections marked "to be confirmed by Mengo" (entity
  details, governing law, retention periods, cookie inventory). These need
  completing before the terms are relied on commercially.
- `src/data/company.ts` founder and company facts are deliberately minimal —
  only publicly verifiable statements were included.
