import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CtaBand, RelatedRail } from "@/components/sections/page";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  DefinitionList,
  Eyebrow,
  Heading,
  JsonLd,
  MarkerList,
  ProcessRail,
  PullQuote,
  Section,
} from "@/components/ui/primitives";
import { entityMetadata } from "@/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { link } from "@/lib/registry";
import { caseStudies, caseStudyBySlug } from "@/data/case-studies";
import { industryBySlug } from "@/data/industries";

/**
 * Case study — a narrative page type.
 *
 * The rhythm is deliberately different from every other template: no facts rail
 * in the hero, no capability grid. It runs situation → challenge → approach →
 * implementation → results → takeaways, because a case study is read in order
 * rather than scanned.
 *
 * `caseStudies` is currently empty, so this generates no pages. See the note in
 * src/data/case-studies.ts for what has to be true before an entry is added.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ caseStudy: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ caseStudy: string }> }): Promise<Metadata> {
  const { caseStudy } = await params;
  const entity = caseStudyBySlug.get(caseStudy);
  if (!entity) return {};
  return entityMetadata(entity, { type: "article", section: "Case studies" });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ caseStudy: string }> }) {
  const { caseStudy: slug } = await params;
  const study = caseStudyBySlug.get(slug);
  if (!study) notFound();

  const industry = industryBySlug.get(study.industry);
  const path = routes.caseStudy(study.slug);
  const crumbs = [
    { label: "Case studies", href: routes.caseStudies() },
    { label: study.title, href: path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]),
          articleSchema({
            headline: study.title,
            description: study.summary,
            path,
            published: study.updated,
            modified: study.updated,
            section: "Case studies",
          }),
        ]}
      />

      {/* Narrative hero: the client and the situation, nothing else competing */}
      <div className="on-dark bg-forest text-sage">
        <Breadcrumbs crumbs={crumbs} tone="forest" />
        <div className="container-page pb-16 pt-10 md:pb-24 md:pt-14">
          <Eyebrow className="mb-6">
            {study.anonymised ? "Case study · anonymised" : "Case study"}
            {industry ? ` · ${industry.title}` : ""}
          </Eyebrow>
          <h1 className="max-w-[20ch] text-d1 text-paper" data-reveal>
            {study.title}
          </h1>
          <p
            className="mt-8 max-w-[54ch] text-lead"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {study.situation}
          </p>
          <p className="eyebrow mt-10">{study.client}</p>
        </div>
      </div>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Heading eyebrow="The challenge" title="What was not working" size="d3" />
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <MarkerList items={study.challenge} />
          </div>
        </div>
      </Section>

      <Section tone="warm">
        <Heading eyebrow="The approach" title="What we did about it" />
        <ProcessRail steps={study.approach} />
      </Section>

      <Section tone="paper">
        <Heading eyebrow="Implementation" title="How it was put in place" size="d4" />
        <ProcessRail steps={study.implementation} />
      </Section>

      {/* Results only render where each figure names its evidence */}
      {study.results.length > 0 ? (
        <Section tone="forest">
          <Heading eyebrow="Results" title="What changed" as="h2" />
          <dl className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {study.results.map((result, i) => (
              <div
                key={result.label}
                className="rule-t py-6"
                data-reveal
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <dt className="tnum font-display text-d3 font-semibold text-lime">{result.value}</dt>
                <dd className="mt-2 text-body text-paper">{result.label}</dd>
                <dd className="mt-2 text-fine text-sage">Evidence: {result.evidence}</dd>
              </div>
            ))}
          </dl>
        </Section>
      ) : null}

      {study.quote ? (
        <Section tone="paper">
          <PullQuote attribution={study.quote.attribution}>{study.quote.text}</PullQuote>
        </Section>
      ) : null}

      <Section tone="warm">
        <Heading eyebrow="Takeaways" title="What transfers to a business like yours" size="d4" />
        <DefinitionList items={study.takeaways} />
      </Section>

      <RelatedRail
        tone="paper"
        groups={[
          {
            heading: "Solutions applied",
            links: link("solution", study.related.solutions),
            seeAll: { label: "All solutions", href: routes.solutions() },
          },
          {
            heading: "Capabilities used",
            links: link("feature", study.features),
            seeAll: { label: "All capabilities", href: routes.features() },
          },
          {
            heading: "Related jobs",
            links: link("use-case", study.related.useCases),
            seeAll: { label: "All use cases", href: routes.useCases() },
          },
        ]}
      />

      <CtaBand
        title="A situation like this one?"
        body="Describe it and we will tell you honestly whether the same approach applies, including when it does not."
        intent="expert"
        cta="Talk to an expert"
        subject={study.title}
        secondary={{ label: "More case studies", href: routes.caseStudies() }}
      />
    </>
  );
}
