import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import { relatedGroups, mergeGroups } from "@/lib/depth";
import { DefinitionList, Eyebrow, FaqList, Heading, JsonLd, MarkerList, Section } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ctaFor, defaultCta } from "@/lib/cta";
import { link } from "@/lib/registry";
import { comparisons, comparisonBySlug } from "@/data/comparisons";
import { PageVisual } from "@/components/ui/PageVisual";
import { getComparisonImage } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisons.map((c) => ({ comparison: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ comparison: string }> }): Promise<Metadata> {
  const { comparison } = await params;
  const entity = comparisonBySlug.get(comparison);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Compare" });
}

export default async function ComparisonPage({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison: slug } = await params;
  const comparison = comparisonBySlug.get(slug);
  if (!comparison) notFound();

  const path = routes.comparison(comparison.slug);
  const crumbs = [
    { label: "Compare", href: routes.compare() },
    { label: comparison.title, href: path },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]), faqSchema(comparison.faqs)]} />

      <DocumentHero
        crumbs={crumbs}
        eyebrow="Comparison"
        title={comparison.title}
        lead={comparison.summary}
        facts={[{ label: "Compared with", value: comparison.against }]}
        actions={<Cta cta={ctaFor("waitlist")} />}
        backdrop={getComparisonImage(comparison.slug, comparison.title, comparison.against)}
      />

      {/* The situation that brings a reader to this specific comparison. */}
      <Explainer tone="paper" intro={comparison.depth?.intro} />

      {/* The alternative's strength goes first, deliberately */}
      <Section tone="forest">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Heading eyebrow="First, the honest part" title={`What ${comparison.against} does well`} as="h2" />
          <p className="max-w-[52ch] text-lead" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            {comparison.theirStrength}
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <Heading
          eyebrow="The difference"
          title={`Where Mengo and ${comparison.against} genuinely diverge`}
          lead={`Structural differences rather than a feature checklist — the kind that stay true regardless of which ${comparison.against.replace(/^an? /, "")} you are looking at.`}
        />
        <DefinitionList items={comparison.difference} columns={1} />
      </Section>

      {/* The two-column decision — the most useful part of the page */}
      <Section tone="warm">
        <Heading eyebrow="Which should you choose" title="Be honest about which column you are in" size="d4" />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <Eyebrow as="h3" className="mb-5">Choose {comparison.against}</Eyebrow>
            <MarkerList items={comparison.chooseAlternative} />
          </div>
          <div
            className="rule-t pt-8 md:border-t-0 md:border-l md:border-l-paper-line md:pl-16 md:pt-0"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <Eyebrow as="h3" className="mb-5">Choose Mengo</Eyebrow>
            <MarkerList items={comparison.chooseMengo} />
          </div>
        </div>
      </Section>

      <Explainer
        tone="paper"
        eyebrow="Read it honestly"
        title="What this comparison is really about"
        sections={comparison.depth?.explain}
      />

      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title="On this comparison" as="h2" size="d4" />
          <FaqList faqs={comparison.faqs} />
        </div>
      </Section>

      <RelatedRail
        tone="paper"
        groups={mergeGroups(
          [
            {
              heading: "Other comparisons",
              links: link(
                "comparison",
                comparisons.filter((c) => c.slug !== comparison.slug).slice(0, 4).map((c) => c.slug),
              ),
              seeAll: { label: "All comparisons", href: routes.compare() },
            },
            {
              heading: "Decide honestly",
              links: link("company", ["who-its-for", "how-it-works"]),
            },
          ],
          relatedGroups(comparison.depth, 2),
          4,
        )}
      />

      <CtaBand
        action={defaultCta(comparison)}
        close={comparison.depth?.close}
        title="If the second column sounds like you"
        body="Join our waitlist and describe the situation. If it turns out you need the alternative instead, we would rather tell you now."
        subject={comparison.title}
        secondary={{ label: "Talk it through", href: routes.contact() }}
      />
    </>
  );
}
