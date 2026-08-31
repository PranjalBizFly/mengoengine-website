import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Eyebrow, RowLink, Section, TextLink } from "@/components/ui/primitives";
import { LeadButton, type LeadIntent } from "@/components/forms/LeadModal";
import type { Crumb } from "@/seo/schema";
import type { LinkRef } from "@/lib/registry";
import { routes } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Hero systems                                                        */
/*                                                                     */
/* Three hero shapes, not one. Page types are visually distinguished at */
/* the top of the page more than anywhere else, so this is where the   */
/* variation has to live.                                              */
/* ------------------------------------------------------------------ */

/**
 * Editorial hero: dark, wide, statement-led. Used by the homepage and the
 * platform and product pages — pages that make an argument before informing.
 */
export function EditorialHero({
  eyebrow,
  title,
  lead,
  crumbs,
  actions,
  aside,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="on-dark relative bg-forest text-sage">
      {crumbs ? <Breadcrumbs crumbs={crumbs} tone="forest" /> : null}
      <div className="container-page grid gap-12 pb-16 pt-12 md:pb-24 md:pt-16 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-20">
        <div>
          {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
          <h1 className="max-w-[16ch] text-d1 text-paper" data-reveal>
            {title}
          </h1>
          {lead ? (
            <p
              className="mt-7 max-w-[46ch] text-lead"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {lead}
            </p>
          ) : null}
          {actions ? (
            <div
              className="mt-9 flex flex-wrap items-center gap-3"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              {actions}
            </div>
          ) : null}
        </div>
        {aside ? (
          <div data-reveal style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
            {aside}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Document hero: light, left-aligned, with the page's defining facts printed
 * beside the title. Used by industry, feature, solution and use-case pages,
 * where a reader arriving from search wants orientation before persuasion.
 */
export function DocumentHero({
  eyebrow,
  title,
  lead,
  crumbs,
  facts,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  crumbs: Crumb[];
  facts?: { label: string; value: string }[];
  actions?: ReactNode;
}) {
  return (
    <div className="bg-paper">
      <Breadcrumbs crumbs={crumbs} />
      <div className="container-page grid gap-10 pb-14 pt-10 md:pb-20 md:pt-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h1 className="max-w-[18ch] text-d2" data-reveal>
            {title}
          </h1>
          <p
            className="mt-6 max-w-[52ch] text-lead text-graphite-soft"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {lead}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>

        {facts && facts.length > 0 ? (
          <dl className="self-end" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            {facts.map((fact) => (
              <div key={fact.label} className="rule-t py-4">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-1.5 text-body leading-relaxed text-graphite">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Index hero: for hub and directory pages. Compact, with the collection size
 * stated, because a visitor to a hub is deciding where to go rather than reading.
 */
export function IndexHero({
  eyebrow,
  title,
  lead,
  crumbs,
  count,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  crumbs?: Crumb[];
  count?: string;
  children?: ReactNode;
}) {
  return (
    <div className="bg-paper-warm">
      {crumbs ? <Breadcrumbs crumbs={crumbs} /> : null}
      <div className="container-page pb-12 pt-10 md:pb-16 md:pt-14">
        <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
          <h1 className="max-w-[20ch] text-d2" data-reveal>
            {title}
          </h1>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <p className="max-w-[46ch] text-h7 leading-relaxed text-graphite-soft">{lead}</p>
            {count ? <p className="eyebrow mt-5">{count}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Related content                                                     */
/* ------------------------------------------------------------------ */

/**
 * The internal-linking device used at the bottom of every entity page.
 * Products → solutions → industries → features → resources is the link graph
 * the site's SEO depends on, and it is generated rather than hand-maintained.
 */
export function RelatedRail({
  groups,
  tone = "warm",
}: {
  groups: { heading: string; links: LinkRef[]; seeAll?: { label: string; href: string } }[];
  tone?: "paper" | "warm" | "forest";
}) {
  const populated = groups.filter((g) => g.links.length > 0);
  if (populated.length === 0) return null;

  return (
    <Section tone={tone}>
      <Eyebrow>Related</Eyebrow>
      <div className="mt-8 grid gap-x-12 gap-y-10 lg:grid-cols-3">
        {populated.map((group) => (
          <div key={group.heading}>
            <h2 className="text-h7 tracking-[-0.02em]">{group.heading}</h2>
            <div className="mt-3">
              {group.links.map((linkRef) => (
                <Link
                  key={linkRef.href}
                  href={linkRef.href}
                  className="rule-t block py-3 text-body text-graphite-soft transition-colors hover:text-lime-deep [.on-dark_&]:text-sage [.on-dark_&]:hover:text-lime"
                >
                  {linkRef.label}
                </Link>
              ))}
            </div>
            {group.seeAll ? (
              <p className="mt-4 text-small">
                <TextLink href={group.seeAll.href}>{group.seeAll.label}</TextLink>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

/** Dense directory listing used by every hub page. */
export function Directory({
  groups,
}: {
  groups: { heading: string; id?: string; blurb?: string; items: { label: string; href: string; blurb?: string; meta?: string }[] }[];
}) {
  return (
    <div className="grid gap-14">
      {groups.map((group) => (
        <div key={group.heading} id={group.id}>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-d4">{group.heading}</h2>
            <span className="eyebrow">
              {group.items.length} {group.items.length === 1 ? "page" : "pages"}
            </span>
          </div>
          {group.blurb ? <p className="mt-3 max-w-[52ch] text-body text-graphite-soft">{group.blurb}</p> : null}
          <div className="mt-6">
            {group.items.map((item) => (
              <RowLink key={item.href} href={item.href} label={item.label} blurb={item.blurb} meta={item.meta} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Conversion                                                          */
/* ------------------------------------------------------------------ */

/**
 * The closing conversion section. One component, configured per page, rather
 * than a bespoke CTA at the bottom of every template.
 */
export function CtaBand({
  eyebrow = "Next step",
  title,
  body,
  intent = "waitlist",
  subject,
  cta = "Join the waitlist",
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  intent?: LeadIntent;
  subject?: string;
  cta?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <Section tone="forest">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-20">
        <div>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h2 className="max-w-[18ch] text-d3 text-paper" data-reveal>
            {title}
          </h2>
          <p className="mt-5 max-w-[48ch] text-h7 leading-relaxed" data-reveal>
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end" data-reveal>
          <LeadButton intent={intent} subject={subject}>
            {cta}
          </LeadButton>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex min-h-11 items-center rounded-full border border-sage/35 px-6 text-body font-semibold text-paper transition-colors hover:border-lime hover:text-lime"
            >
              {secondary.label}
            </Link>
          ) : (
            <Link
              href={routes.company("how-it-works")}
              className="inline-flex min-h-11 items-center rounded-full border border-sage/35 px-6 text-body font-semibold text-paper transition-colors hover:border-lime hover:text-lime"
            >
              See how it works
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
