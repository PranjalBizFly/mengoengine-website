import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Eyebrow, RowLink, Section, TextLink } from "@/components/ui/primitives";
import { LeadButton, type LeadIntent } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import type { Cta as CtaData, Section as ContentSection } from "@/lib/types";
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
  visual,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <div className="on-dark relative bg-forest text-sage">
      {crumbs ? <Breadcrumbs crumbs={crumbs} tone="forest" /> : null}
      <div className="container-page pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-20">
          <div>
            {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
            <h1 className="max-w-[16ch] text-d1 text-ink-invert" data-reveal>
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
        {visual ? <div className="mt-12 md:mt-16">{visual}</div> : null}
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
  visual,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  crumbs: Crumb[];
  facts?: { label: string; value: string }[];
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <div className="bg-paper">
      <Breadcrumbs crumbs={crumbs} />
      <div className="container-page pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
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
        {visual ? <div className="mt-10 md:mt-14">{visual}</div> : null}
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
  visual,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  crumbs?: Crumb[];
  count?: string;
  visual?: ReactNode;
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
        {visual ? <div className="mt-10 md:mt-12">{visual}</div> : null}
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Editorial depth                                                     */
/*                                                                     */
/* The two components that render a record's `depth` block. They exist  */
/* so that adding explanation to a page is a data edit rather than a    */
/* layout edit, and so that the same explanation reads the same way     */
/* whichever page type it appears on.                                   */
/* ------------------------------------------------------------------ */

/**
 * Explanatory band: an optional opening paragraph followed by named sections
 * laid out as heading-beside-prose. The measure is capped at 44rem because
 * these sections carry the longest continuous text on the site.
 */
export function Explainer({
  eyebrow,
  title,
  intro,
  sections,
  tone = "paper",
  visual,
  id,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  sections?: ContentSection[];
  tone?: "paper" | "warm" | "forest";
  visual?: ReactNode;
  id?: string;
}) {
  const hasSections = Boolean(sections && sections.length > 0);
  if (!intro && !hasSections) return null;
  // Sections sit under the band title when there is one, and stand as the
  // band's own headings when there is not. Keeps the outline correct either way.
  const SectionHeading = title ? "h3" : "h2";

  return (
    <Section tone={tone} id={id}>
      {title || intro ? (
        <div className="max-w-[46rem]" data-reveal>
          {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
          {title ? <h2 className="text-d3">{title}</h2> : null}
          {intro ? (
            <p className={`${title ? "mt-5" : ""} text-lead text-graphite-soft [.on-dark_&]:text-sage`}>{intro}</p>
          ) : null}
        </div>
      ) : null}

      {hasSections ? (
        <div className={intro || title ? "mt-12" : ""}>
          {sections!.map((section, i) => (
            <div
              key={section.heading}
              className="rule-t grid gap-3 py-8 lg:grid-cols-[minmax(0,17rem)_minmax(0,44rem)] lg:gap-16"
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <SectionHeading className="text-h6 tracking-[-0.02em]">{section.heading}</SectionHeading>
              <div className="min-w-0">
                {section.body ? (
                  <p className="text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
                    {section.body}
                  </p>
                ) : null}
                {section.bullets && section.bullets.length > 0 ? (
                  <dl className="mt-6 grid gap-5">
                    {section.bullets.map((bullet) => (
                      <div key={bullet.label} className="rule-t pt-4">
                        <dt className="type-title text-h8">{bullet.label}</dt>
                        <dd className="mt-1.5 text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
                          {bullet.body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {visual ? <div className="mt-12">{visual}</div> : null}
    </Section>
  );
}

/**
 * Closing summary for pages a reader finishes rather than scans. Numbered
 * because these are conclusions in order, not an unordered feature list.
 */
export function Takeaways({
  items,
  title = "What to take from this",
  eyebrow = "In summary",
  tone = "warm",
}: {
  items?: string[];
  title?: string;
  eyebrow?: string;
  tone?: "paper" | "warm" | "forest";
}) {
  if (!items || items.length === 0) return null;
  return (
    <Section tone={tone}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div data-reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2 className="text-d4">{title}</h2>
        </div>
        <ol className="min-w-0">
          {items.map((item, i) => (
            <li
              key={item}
              className="rule-t flex items-baseline gap-5 py-5"
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <span className="tnum font-display text-fine font-semibold text-lime-deep [.on-dark_&]:text-lime">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
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

  // Four groups get their own column each on a wide screen rather than leaving
  // a single orphaned column on a second row; three or fewer keep the original
  // three-column rhythm.
  const columns = populated.length >= 4 ? "md:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <Section tone={tone}>
      <Eyebrow>Related</Eyebrow>
      <div className={`mt-8 grid gap-x-12 gap-y-10 ${columns}`}>
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
  close,
  action,
  intent,
  subject,
  cta,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  /**
   * Page-specific closing copy from the record's depth block. Supplied, it
   * wins over `title`/`body` — which stay as the sensible default for records
   * that have not been given their own closing argument yet.
   */
  close?: { title: string; body: string };
  /**
   * The CTA as data. Entity pages pass `defaultCta(entity)` so the conversion
   * path is declared in src/lib/cta.ts rather than per template.
   */
  action?: CtaData;
  /** Legacy shorthand for hub pages that do not have an entity. */
  intent?: LeadIntent;
  subject?: string;
  cta?: string;
  secondary?: { label: string; href: string };
}) {
  const resolved: CtaData = action ?? { type: intent ?? "waitlist", ...(cta ? { label: cta } : {}) };
  const headline = close?.title ?? title;
  const copy = close?.body ?? body;
  return (
    <Section tone="forest">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-20">
        <div>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h2 className="max-w-[18ch] text-d3 text-ink-invert" data-reveal>
            {headline}
          </h2>
          <p className="mt-5 max-w-[48ch] text-h7 leading-relaxed" data-reveal>
            {copy}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end" data-reveal>
          <Cta cta={resolved} subject={subject} />
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex min-h-11 items-center rounded-full border border-sage/35 px-6 text-body font-semibold text-ink-invert transition-colors hover:border-lime hover:text-lime"
            >
              {secondary.label}
            </Link>
          ) : (
            <Link
              href={routes.company("how-it-works")}
              className="inline-flex min-h-11 items-center rounded-full border border-sage/35 px-6 text-body font-semibold text-ink-invert transition-colors hover:border-lime hover:text-lime"
            >
              See how it works
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
