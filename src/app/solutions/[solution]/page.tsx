import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail } from "@/components/sections/page";
import {
  DefinitionList,
  Eyebrow,
  FaqList,
  Heading,
  JsonLd,
  MarkerList,
  ProcessRail,
  Section,
} from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema, howToSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { link, industriesBySolution, take } from "@/lib/registry";
import { axisLabel } from "@/lib/nav";
import { solutions, solutionBySlug } from "@/data/solutions";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ solution: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ solution: string }> }): Promise<Metadata> {
  const { solution } = await params;
  const entity = solutionBySlug.get(solution);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Solutions" });
}

export default async function SolutionPage({ params }: { params: Promise<{ solution: string }> }) {
  const { solution: slug } = await params;
  const solution = solutionBySlug.get(slug);
  if (!solution) notFound();

  const path = routes.solution(solution.slug);
  const crumbs = [
    { label: "Solutions", href: routes.solutions() },
    { label: solution.title, href: path },
  ];
  const relatedIndustries = [
    ...new Set([
      ...solution.related.industries,
      ...take(industriesBySolution.get(solution.slug), 4).map((i) => i.slug),
    ]),
  ].slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]),
          howToSchema({ name: solution.title, description: solution.summary, steps: solution.approach }),
          faqSchema(solution.faqs),
        ]}
      />

      <DocumentHero
        crumbs={crumbs}
        eyebrow={`Solution · ${axisLabel(solution.axis)}`}
        title={solution.title}
        lead={solution.summary}
        actions={
          <>
            <LeadButton intent="waitlist">Join the waitlist</LeadButton>
            <LeadButton intent="expert" variant="secondary" subject={solution.title}>
              Talk it through
            </LeadButton>
          </>
        }
      />

      {/* Situation and friction — the reader has to recognise themselves before anything else */}
      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-5">Where you probably are</Eyebrow>
            <p className="editorial max-w-[24ch] text-d3 text-paper" data-reveal>
              {solution.situation}
            </p>
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <Eyebrow className="mb-5">What is breaking</Eyebrow>
            <MarkerList items={solution.frictions} />
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Heading
          eyebrow="The approach"
          title="How Mengo is applied to it"
          lead="Not a feature list. The order matters, because each step makes the next one possible."
        />
        <ProcessRail steps={solution.approach} />
      </Section>

      {/* Outcomes — stated as things the reader can check, never as invented statistics */}
      <Section tone="warm">
        <Heading
          eyebrow="What changes"
          title="Signals you can check yourself"
          lead="No customer statistics here, because we are early and would rather describe mechanisms than borrow numbers. These are the things that should visibly change if the approach is working."
        />
        <DefinitionList items={solution.outcomes} />
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title={`About ${solution.title.toLowerCase()}`} as="h2" size="d4" />
          <FaqList faqs={solution.faqs} />
        </div>
      </Section>

      <RelatedRail
        tone="warm"
        groups={[
          {
            heading: "Engines involved",
            links: link("product", solution.products),
            seeAll: { label: "See the platform", href: routes.platform() },
          },
          {
            heading: "Capabilities",
            links: link("feature", solution.features),
            seeAll: { label: "All capabilities", href: routes.features() },
          },
          {
            heading: "Industries & use cases",
            links: [...link("industry", relatedIndustries.slice(0, 3)), ...link("use-case", solution.related.useCases.slice(0, 3))],
            seeAll: { label: "All industries", href: routes.industries() },
          },
        ]}
      />

      <CtaBand
        title={solution.title}
        body="Join the waitlist and describe your version of this. Access opens in batches, and the situations people describe are what set the build order."
        subject={solution.title}
        secondary={{ label: "Compare the alternatives", href: routes.compare() }}
      />
    </>
  );
}
