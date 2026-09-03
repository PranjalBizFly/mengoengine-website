import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Eyebrow, RelatedLinkList, Section, TextLink } from "@/components/ui/primitives";
export { Directory } from "@/components/ui/rows";
import { LeadButton, type LeadIntent } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import type { Cta as CtaData, Section as ContentSection } from "@/lib/types";
import type { PageImageDescriptor } from "@/lib/images";
import { PhotoBackdrop } from "@/components/ui/PageVisual";
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
 * Editorial hero: the widest statement on the site, carried by a photograph.
 *
 * One column, left. The picture runs the full bleed at full strength and a
 * directional wash darkens only the side the type occupies, so the right of the
 * frame stays a photograph rather than a tint. Anything supporting — the facts a
 * page wants printed alongside its headline — runs as a strip along the foot of
 * the image instead of a panel beside it: a panel turns a cover into a product
 * page, and the picture stops being the composition.
 */
export function EditorialHero({
  eyebrow,
  title,
  subtitle,
  lead,
  crumbs,
  actions,
  aside,
  visual,
  backdrop,
}: {
  eyebrow?: string;
  title: ReactNode;
  /** The promise line that belongs to the headline, set as display type rather
      than as the first sentence of the lead. */
  subtitle?: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  actions?: ReactNode;
  /** Supporting facts. Rendered along the foot of the frame. */
  aside?: ReactNode;
  visual?: ReactNode;
  /** Photograph carrying the hero. Falls back to the flat forest ground. */
  backdrop?: PageImageDescriptor;
}) {
  return (
    <div
      className={`on-dark relative isolate flex min-h-[clamp(34rem,82vh,48rem)] flex-col overflow-hidden bg-forest text-sage ${
        backdrop ? "photo-band" : ""
      }`}
    >
      {backdrop ? <PhotoBackdrop image={backdrop} priority scrim="hero" /> : null}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_88%_0%,rgb(163_230_37/0.14),transparent_62%)]"
      />
      {crumbs ? <Breadcrumbs crumbs={crumbs} tone="forest" /> : null}

      <div className="container-page flex flex-1 flex-col justify-center pb-14 pt-16 md:pb-16 md:pt-24">
        {/* The entrance is one sequence rather than four elements that each
            happen to animate: label, statement, argument, action. The eyebrow
            used to paint instantly while everything under it rose, which read
            as a page still loading rather than as a page arriving. */}
        <div className="max-w-[46rem]">
          {eyebrow ? (
            <Eyebrow className="mb-7" reveal>
              {eyebrow}
            </Eyebrow>
          ) : null}
          <h1
            className="text-d1 text-ink-invert"
            data-reveal-lines
            style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
          >
            <span>{title}</span>
          </h1>
          {subtitle ? (
            <p
              className="mt-6 max-w-[30ch] font-display text-d4 font-semibold text-lime"
              data-reveal
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            >
              {subtitle}
            </p>
          ) : null}
          {lead ? (
            <p
              className="mt-8 max-w-[44ch] text-lead text-ink-invert/85"
              data-reveal
              style={{ "--reveal-delay": subtitle ? "380ms" : "300ms" } as React.CSSProperties}
            >
              {lead}
            </p>
          ) : null}
          {actions ? (
            <div
              className="mt-10 flex flex-wrap items-center gap-3"
              data-reveal
              style={{ "--reveal-delay": subtitle ? "510ms" : "440ms" } as React.CSSProperties}
            >
              {actions}
            </div>
          ) : null}
        </div>
        {visual ? <div className="mt-14 md:mt-16">{visual}</div> : null}
      </div>

      {aside ? (
        <div
          className="container-page pb-12 md:pb-14"
          data-reveal
          style={{ "--reveal-delay": "580ms" } as React.CSSProperties}
        >
          {aside}
        </div>
      ) : null}
    </div>
  );
}

/**
 * Document hero: the opening of an entity page.
 *
 * The same one-column composition as the editorial hero at a smaller scale.
 * A page's defining facts print along the foot of the frame rather than in a
 * column beside the title, which keeps the photograph unobstructed and stops
 * four hundred pages opening with the same two-column slab.
 */
export function DocumentHero({
  eyebrow,
  title,
  lead,
  crumbs,
  facts,
  actions,
  visual,
  backdrop,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  crumbs: Crumb[];
  facts?: { label: string; value: string }[];
  actions?: ReactNode;
  visual?: ReactNode;
  backdrop?: PageImageDescriptor;
}) {
  return (
    <div
      className={`on-dark relative isolate flex min-h-[clamp(27rem,64vh,38rem)] flex-col overflow-hidden bg-forest text-sage ${
        backdrop ? "photo-band" : ""
      }`}
    >
      {backdrop ? <PhotoBackdrop image={backdrop} priority scrim="hero" /> : null}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(62%_88%_at_86%_2%,rgb(163_230_37/0.12),transparent_60%)]"
      />
      <Breadcrumbs crumbs={crumbs} tone="forest" />

      <div className="container-page flex flex-1 flex-col justify-center pb-12 pt-12 md:pb-14 md:pt-16">
        <div className="max-w-[44rem]">
          <Eyebrow className="mb-6" reveal>
            {eyebrow}
          </Eyebrow>
          <h1
            className="text-d2 text-ink-invert"
            data-reveal-lines
            style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
          >
            <span>{title}</span>
          </h1>
          <p
            className="mt-7 max-w-[50ch] text-lead text-ink-invert/85"
            data-reveal
            style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
          >
            {lead}
          </p>
          {actions ? (
            <div
              className="mt-9 flex flex-wrap gap-3"
              data-reveal
              style={{ "--reveal-delay": "410ms" } as React.CSSProperties}
            >
              {actions}
            </div>
          ) : null}
        </div>
        {visual ? <div className="mt-12 md:mt-14">{visual}</div> : null}
      </div>

      {facts && facts.length > 0 ? (
        <div className="container-page pb-11 md:pb-12">
          <dl
            className="hero-facts"
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
        </div>
      ) : null}
    </div>
  );
}

/**
 * Index hero: for hub and directory pages.
 *
 * Shorter than the entity hero and built around the collection rather than an
 * argument, but on the same photographic ground so the whole site opens the
 * same way. The lead and the count sit beneath the title rather than opposite
 * it, which keeps the right of the frame free for the picture.
 */
export function IndexHero({
  eyebrow,
  title,
  lead,
  crumbs,
  count,
  visual,
  backdrop,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  crumbs?: Crumb[];
  count?: string;
  visual?: ReactNode;
  backdrop?: PageImageDescriptor;
  children?: ReactNode;
}) {
  return (
    <div
      className={`on-dark relative isolate flex min-h-[clamp(24rem,56vh,33rem)] flex-col justify-center overflow-hidden bg-forest text-sage ${
        backdrop ? "photo-band" : ""
      }`}
    >
      {backdrop ? <PhotoBackdrop image={backdrop} priority scrim="hero" /> : null}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(66%_86%_at_84%_0%,rgb(163_230_37/0.13),transparent_60%)]"
      />
      {crumbs ? <Breadcrumbs crumbs={crumbs} tone="forest" /> : null}
      <div className="container-page pb-14 pt-12 md:pb-16 md:pt-16">
        <div className="max-w-[46rem]">
          <Eyebrow className="mb-6" reveal>
            {eyebrow}
          </Eyebrow>
          <h1
            className="text-d2 text-ink-invert"
            data-reveal-lines
            style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
          >
            <span>{title}</span>
          </h1>
          <p
            className="mt-6 max-w-[52ch] text-lead text-ink-invert/85"
            data-reveal
            style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
          >
            {lead}
          </p>
          {count ? (
            <p
              className="eyebrow mt-6 text-sage"
              data-reveal
              style={{ "--reveal-delay": "410ms" } as React.CSSProperties}
            >
              {count}
            </p>
          ) : null}
        </div>
        {visual ? <div className="mt-12 md:mt-14">{visual}</div> : null}
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
        <div className="max-w-[52rem]" data-reveal>
          {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
          {title ? <h2 className="text-d3">{title}</h2> : null}
          {intro ? (
            <p
              className={`${title ? "mt-6 text-lead" : "text-d4 leading-[1.45] tracking-[-0.015em]"} text-graphite-soft [.on-dark_&]:text-sage`}
            >
              {intro}
            </p>
          ) : null}
        </div>
      ) : null}

      {hasSections ? (
        <div className={intro || title ? "mt-14" : ""} data-reveal-stagger>
          {sections!.map((section) => (
            <div
              key={section.heading}
              className="rule-t grid gap-4 py-10 lg:grid-cols-[minmax(0,23rem)_minmax(0,44rem)] lg:gap-16"
              data-reveal
            >
              <SectionHeading className="text-d4 text-balance lg:sticky lg:top-[calc(var(--header-h)+3rem)] lg:self-start">
                {section.heading}
              </SectionHeading>
              <div className="min-w-0">
                {section.body ? (
                  <p className="text-prose text-graphite-soft [.on-dark_&]:text-sage">{section.body}</p>
                ) : null}
                {section.bullets && section.bullets.length > 0 ? (
                  <dl className="mt-7 grid gap-4">
                    {section.bullets.map((bullet) => (
                      <div key={bullet.label} className="surface-quiet px-5 py-4">
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
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div data-reveal>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h2 className="text-d3">{title}</h2>
        </div>
        <ol className="index-list min-w-0 sm:grid-cols-2" data-numbered data-reveal-stagger>
          {items.map((item, i) => (
            <li key={item} data-reveal>
              <span aria-hidden className="index-num">
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
      <div className={`mt-10 grid gap-x-12 gap-y-12 ${columns}`} data-reveal-stagger>
        {populated.map((group) => (
          <div key={group.heading} data-reveal>
            <h2 className="text-h6 tracking-[-0.02em]">{group.heading}</h2>
            {/* Same list as the sidebar rail, one size up: the bullet, the
                hanging indent and the row rhythm are defined once. */}
            <RelatedLinkList links={group.links} className="mt-3" />
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
    <section className="on-dark relative isolate overflow-hidden bg-forest py-section text-sage">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_120%_at_82%_50%,rgb(163_230_37/0.15),transparent_64%)]"
      />
      <div className="container-page relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-20">
        <div>
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          <h2 className="max-w-[18ch] text-d2 text-ink-invert" data-reveal-lines>
            <span>{headline}</span>
          </h2>
          <p
            className="mt-7 max-w-[48ch] text-lead"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {copy}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end" data-reveal>
          <Cta cta={resolved} subject={subject} />
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex min-h-11 items-center rounded-full border border-ink-invert/22 px-6 text-body font-semibold text-ink-invert transition-colors hover:border-lime hover:text-lime"
            >
              {secondary.label}
            </Link>
          ) : (
            <Link
              href={routes.company("how-it-works")}
              className="inline-flex min-h-11 items-center rounded-full border border-ink-invert/22 px-6 text-body font-semibold text-ink-invert transition-colors hover:border-lime hover:text-lime"
            >
              See how it works
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
