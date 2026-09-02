import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Eyebrow, Section, TextLink } from "@/components/ui/primitives";
import { hrefFor } from "@/components/subsite/blocks";
import { SubSiteNav } from "@/components/subsite/nav";
import {
  mainUrl,
  sitePath,
  siteUrl,
  type SiteHero,
  type SiteKey,
  type SiteLink,
  type SubSite,
} from "@/lib/subdomains";
import { site as brand } from "@/lib/site";

/**
 * Chrome for the twelve ecosystem sites.
 *
 * The header is deliberately not the main site's header. That one is a
 * five-group mega menu built for four hundred marketing pages; carrying it onto
 * a status page would be the clearest possible signal that these destinations
 * are decoration on the main site rather than places of their own. Each site
 * gets its own flat navigation, sized to its own information architecture, with
 * the lockup returning to the apex.
 *
 * The footer is where the ecosystem is visible: every site lists the others,
 * grouped the way the main site's footer groups them, so a reader who arrives
 * on docs from a search result can reach status or support without going back
 * through the apex.
 */

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

export function SubSiteHeader({ subsite }: { subsite: SubSite }) {
  return (
    <header className="sticky top-0 z-50 border-b border-paper-line bg-paper/92 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-ink-invert"
      >
        Skip to content
      </a>

      <div className="container-page flex h-(--header-h) items-center justify-between gap-4">
        {/* The lockup goes to the apex; the site name beside it goes to this
            site's own front page. Two destinations, because a reader on
            docs.* who clicks a Mengo wordmark means the company, and one who
            clicks "Docs" means the documentation home. */}
        <div className="flex min-w-0 shrink-0 items-center gap-3">
          <Logo href={mainUrl("/")} />
          <span aria-hidden className="hidden h-5 w-px bg-paper-line sm:block" />
          <Link
            href={sitePath(subsite.key)}
            className="hidden truncate type-nav font-semibold text-graphite transition-colors hover:text-lime-deep sm:block"
          >
            {subsite.shortName}
          </Link>
        </div>

        <SubSiteNav subsite={subsite} />
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Heroes                                                              */
/* ------------------------------------------------------------------ */

function HeroActions({ site, actions }: { site: SiteKey; actions?: SiteLink[] }) {
  if (!actions || actions.length === 0) return null;
  return (
    <div
      className="mt-9 flex flex-wrap items-center gap-3"
      data-reveal
      style={{ "--reveal-delay": "440ms" } as React.CSSProperties}
    >
      {actions.map((action, i) => (
        <Link
          key={action.href}
          href={hrefFor(site, action)}
          {...(action.external ? { rel: "noopener" } : {})}
          className={
            i === 0
              ? "type-button inline-flex min-h-12 items-center justify-center rounded-full bg-lime px-7 py-3.5 text-on-accent shadow-[0_8px_22px_-8px_rgb(111_159_26/0.65)] transition-[background-color,transform,box-shadow] duration-300 ease-[var(--ease-out-expo)] hover:bg-lime-bright motion-safe:hover:-translate-y-0.5"
              : "type-button inline-flex min-h-12 items-center rounded-full border border-ink-invert/22 px-6 text-ink-invert transition-colors hover:border-lime hover:text-lime"
          }
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}

function HeroFacts({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <dl
      className="hero-facts mt-12"
      style={{ "--hero-facts": String(Math.min(facts.length, 4)) } as React.CSSProperties}
      data-reveal-stagger
    >
      {facts.map((fact) => (
        <div key={fact.label} data-reveal>
          <dt className="eyebrow text-sage">{fact.label}</dt>
          <dd className="mt-2 text-body leading-relaxed text-ink-invert">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Five opening compositions, chosen per page.
 *
 * This is the main defence against twelve sites reading as one template. A
 * support centre opens on a search field, a status page on an operational
 * summary, an investor page on a fact column, an article on a compact document
 * head. The ground and the type scale are shared; the composition is not.
 */
export function SubSiteHero({
  site,
  hero,
  minHeight,
}: {
  site: SiteKey;
  hero: SiteHero;
  minHeight?: string;
}) {
  const height =
    minHeight ??
    (hero.kind === "editorial"
      ? "min-h-[clamp(26rem,54vh,34rem)]"
      : hero.kind === "document"
        ? "min-h-[clamp(16rem,32vh,22rem)]"
        : "min-h-[clamp(20rem,42vh,27rem)]");

  return (
    <div
      className={`on-dark relative isolate flex ${height} flex-col justify-center overflow-hidden bg-forest text-sage`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(66%_86%_at_84%_0%,rgb(163_230_37/0.13),transparent_60%)]"
      />
      <div className="container-page py-14 md:py-16">
        {hero.kind === "split" ? (
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-20">
            <div className="max-w-[42rem]">
              {hero.eyebrow ? (
                <Eyebrow className="mb-6" reveal>
                  {hero.eyebrow}
                </Eyebrow>
              ) : null}
              <h1
                className="text-d2 text-ink-invert"
                data-reveal-lines
                style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
              >
                <span>{hero.title}</span>
              </h1>
              <p
                className="mt-6 max-w-[52ch] text-lead text-ink-invert/85"
                data-reveal
                style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
              >
                {hero.lead}
              </p>
            </div>
            <dl className="grid gap-5" data-reveal-stagger>
              {hero.facts.map((fact) => (
                <div key={fact.label} className="rule-t pt-4" data-reveal>
                  <dt className="eyebrow text-sage">{fact.label}</dt>
                  <dd className="mt-2 text-body leading-relaxed text-ink-invert">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : (
          <div className={hero.kind === "document" ? "max-w-[44rem]" : "max-w-[46rem]"}>
            {hero.eyebrow ? (
              <Eyebrow className="mb-6" reveal>
                {hero.eyebrow}
              </Eyebrow>
            ) : null}
            <h1
              className={`${hero.kind === "editorial" ? "text-d2" : "text-d3"} text-ink-invert`}
              data-reveal-lines
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
            >
              <span>{hero.title}</span>
            </h1>
            <p
              className="mt-6 max-w-[54ch] text-lead text-ink-invert/85"
              data-reveal
              style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
            >
              {hero.lead}
            </p>
            {hero.kind === "editorial" ? <HeroActions site={site} actions={hero.actions} /> : null}
          </div>
        )}

        {hero.kind === "editorial" && hero.facts && hero.facts.length > 0 ? (
          <HeroFacts facts={hero.facts} />
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

/**
 * The ecosystem map.
 *
 * Grouped by who the reader is rather than by what the destination is called,
 * which is the same grouping the main site's footer uses. Links are absolute
 * because they cross hosts — the one place in these sites where a link is not
 * an in-app transition.
 */
const ECOSYSTEM: { heading: string; items: { key: SiteKey; label: string }[] }[] = [
  {
    heading: "Customer",
    items: [{ key: "support", label: "Support" }],
  },
  {
    heading: "Business",
    items: [
      { key: "partners", label: "Partners" },
      { key: "vendors", label: "Vendors" },
      { key: "affiliates", label: "Affiliates" },
    ],
  },
  {
    heading: "Technical",
    items: [
      { key: "developers", label: "Developers" },
      { key: "docs", label: "Documentation" },
      { key: "status", label: "Status" },
    ],
  },
  {
    heading: "Company",
    items: [
      { key: "careers", label: "Careers" },
      { key: "about", label: "About" },
      { key: "investors", label: "Investors" },
      { key: "media", label: "Media" },
      { key: "sustainability", label: "Sustainability" },
    ],
  },
];

export function SubSiteFooter({ subsite }: { subsite: SubSite }) {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative isolate overflow-hidden bg-forest text-sage">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-lime-deep)_18%,var(--color-lime)_50%,var(--color-lime-deep)_82%,transparent)]"
      />
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          <div data-reveal>
            <Logo tone="light" href={mainUrl("/")} />
            <p className="mt-5 max-w-[24rem] text-body leading-relaxed">{subsite.description}</p>
            <p className="mt-6 text-body">
              <TextLink href={mainUrl("/")}>{brand.productName} main site</TextLink>
            </p>
          </div>

          <nav aria-label="Mengo ecosystem" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
            {ECOSYSTEM.map((group) => (
              <div key={group.heading}>
                <p className="eyebrow mb-4">{group.heading}</p>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.key}>
                      {item.key === subsite.key ? (
                        <span aria-current="true" className="text-small font-medium text-lime">
                          {item.label}
                        </span>
                      ) : (
                        <a
                          href={siteUrl(item.key)}
                          className="inline-block text-small leading-snug text-sage transition-[color,transform] duration-300 ease-[var(--ease-out-expo)] hover:text-lime motion-safe:hover:translate-x-0.5"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 rule-t pt-8">
          <div className="flex flex-col gap-4 text-fine text-sage-dim sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {brand.legalName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <a href={mainUrl("/legal/privacy-policy/")} className="transition-colors hover:text-lime">
                  Privacy
                </a>
              </li>
              <li>
                <a href={mainUrl("/legal/terms-of-service/")} className="transition-colors hover:text-lime">
                  Terms
                </a>
              </li>
              <li>
                <a href={mainUrl("/legal/cookie-policy/")} className="transition-colors hover:text-lime">
                  Cookies
                </a>
              </li>
              <li>
                <a href={mainUrl("/contact/")} className="transition-colors hover:text-lime">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Closing rail                                                        */
/* ------------------------------------------------------------------ */

/** Contextual links at the foot of a page. Cross-site links are absolute. */
export function RelatedRail({
  site,
  groups,
}: {
  site: SiteKey;
  groups: { heading: string; links: SiteLink[] }[];
}) {
  const populated = groups.filter((group) => group.links.length > 0);
  if (populated.length === 0) return null;

  return (
    <Section tone="warm">
      <Eyebrow>Related</Eyebrow>
      <div
        className={`mt-10 grid gap-x-12 gap-y-12 ${
          populated.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
        }`}
        data-reveal-stagger
      >
        {populated.map((group) => (
          <div key={group.heading} data-reveal>
            <h2 className="text-h6 tracking-[-0.02em]">{group.heading}</h2>
            <ul className="mt-4">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={hrefFor(site, link)}
                    {...(link.external ? { rel: "noopener" } : {})}
                    className="-mx-3 block rounded-xl px-3 py-2.5 text-body text-graphite-soft transition-[color,background-color,transform] duration-300 ease-[var(--ease-out-expo)] hover:bg-paper/70 hover:text-lime-deep motion-safe:hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
