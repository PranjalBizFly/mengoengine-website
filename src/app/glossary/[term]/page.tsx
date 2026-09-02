import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import { Eyebrow, Heading, JsonLd, Section, TextLink } from "@/components/ui/primitives";
import { relatedGroups } from "@/lib/depth";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, definedTermSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { defaultCta } from "@/lib/cta";
import { link } from "@/lib/registry";
import { glossary, glossaryBySlug } from "@/data/glossary";
import { PageVisual } from "@/components/ui/PageVisual";
import { getGlossaryImage } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossary.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ term: string }> }): Promise<Metadata> {
  const { term } = await params;
  const entity = glossaryBySlug.get(term);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Glossary" });
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ term: string }> }) {
  const { term: slug } = await params;
  const term = glossaryBySlug.get(slug);
  if (!term) notFound();

  const path = routes.glossaryTerm(term.slug);
  const crumbs = [
    { label: "Glossary", href: routes.glossary() },
    { label: term.title, href: path },
  ];

  // Neighbours in the alphabetical listing — useful navigation on a reference page.
  const index = glossary.findIndex((t) => t.slug === term.slug);
  const previous = glossary[index - 1];
  const next = glossary[index + 1];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]),
          definedTermSchema({ name: term.title, definition: term.definition, path }),
        ]}
      />

      <DocumentHero
        crumbs={crumbs}
        eyebrow="Glossary"
        title={term.title}
        lead={term.definition}
        facts={[
          ...(previous ? [{ label: "Previous", value: previous.title }] : []),
          ...(next ? [{ label: "Next", value: next.title }] : []),
        ]}
      />

      {/* The context that makes the definition mean something. Written per term. */}
      <Explainer tone="paper" intro={term.depth?.intro} />

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow as="h2" className="mb-5">Why it matters</Eyebrow>
            <p className="text-lead text-graphite-soft" data-reveal>
              {term.why}
            </p>
          </div>
          {term.inMengo ? (
            <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              <Eyebrow as="h2" className="mb-5">In Mengo</Eyebrow>
              <p className="text-h7 leading-relaxed text-graphite-soft">{term.inMengo}</p>
            </div>
          ) : (
            <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              <Eyebrow as="h2" className="mb-5">In Mengo</Eyebrow>
              <p className="text-h7 leading-relaxed text-graphite-soft">
                Mengo does not handle this directly — it sits in your analytics, ad platform or site infrastructure.
                It is defined here because it affects decisions the platform does make.
              </p>
            </div>
          )}
        </div>
      </Section>

      <Explainer
        tone="paper"
        eyebrow="In practice"
        title={`${term.title} in use`}
        sections={term.depth?.explain}
      />

      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Heading eyebrow="Keep reading" title="Terms you will need next" size="d4" as="h2" />
          <div data-reveal>
            {link("glossary", term.seeAlso).map((ref) => (
              <a
                key={ref.href}
                href={ref.href}
                className="group rule-t block py-4 transition-colors hover:text-lime-deep"
              >
                <span className="block type-title text-h7">{ref.label}</span>
                <span className="mt-1 block text-body leading-relaxed text-graphite-soft">{ref.blurb}</span>
              </a>
            ))}
            <p className="mt-6 text-body">
              <TextLink href={routes.glossary()}>Back to the full glossary</TextLink>
            </p>
          </div>
        </div>
      </Section>

      {/* Per-term, from the record's own cross-references — not three slugs typed into this file. */}
      <RelatedRail tone="paper" groups={relatedGroups(term.depth)} />

      <CtaBand
        action={defaultCta(term)}
        close={term.depth?.close}
        title="Definitions are cheap. Execution is not."
        body="Mengo turns a guided brief into the strategy, the calendar, the content and the follow-up. Join our waitlist for early access."
        secondary={{ label: "Browse the glossary", href: routes.glossary() }}
      />
    </>
  );
}
