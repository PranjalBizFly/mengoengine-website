import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import { SectionNav } from "@/components/layout/SectionNav";
import { outline } from "@/lib/outline";
import { relatedGroups, mergeGroups } from "@/lib/depth";
import { PrevNext } from "@/components/layout/PrevNext";
import { neighbours } from "@/lib/outline";
import { DefinitionList, Eyebrow, FaqList, Heading, JsonLd, PullQuote, Section, TextLink } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ctaFor, defaultCta } from "@/lib/cta";
import { link, solutionsByFeature, useCasesByFeature, take } from "@/lib/registry";
import { features, featureBySlug, featuresForProduct } from "@/data/features";
import { productBySlug } from "@/data/products";
import { PageVisual } from "@/components/ui/PageVisual";
import { getFeatureSectionImage } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return features.map((f) => ({ feature: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ feature: string }> }): Promise<Metadata> {
  const { feature } = await params;
  const entity = featureBySlug.get(feature);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Capabilities" });
}

export default async function FeaturePage({ params }: { params: Promise<{ feature: string }> }) {
  const { feature: slug } = await params;
  const feature = featureBySlug.get(slug);
  if (!feature) notFound();

  const product = productBySlug.get(feature.product);
  const path = routes.feature(feature.slug);
  const crumbs = [
    { label: "Capabilities", href: routes.features() },
    { label: feature.title, href: path },
  ];

  const siblings = featuresForProduct(feature.product)
    .filter((f) => f.slug !== feature.slug)
    .slice(0, 6)
    .map((f) => f.slug);

  // The run is the engine this capability belongs to, matching how the
  // capabilities hub groups them.
  const inEngine = neighbours(featuresForProduct(feature.product), feature.slug);

  const sections = outline([
    { id: "the-problem", label: "The problem" },
    Boolean(feature.depth?.explain?.length) && { id: "inputs-outputs", label: "Inputs and outputs" },
    { id: "in-detail", label: "In detail" },
    Boolean(feature.depth?.connects) && { id: "in-the-system", label: "In the system" },
    { id: "questions", label: "Questions" },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]), faqSchema(feature.faqs)]} />

      <DocumentHero
        crumbs={crumbs}
        eyebrow={product ? `Capability · ${product.title}` : "Capability"}
        title={feature.title}
        lead={feature.depth?.lead ?? feature.short}
        facts={[
          { label: "Engine", value: product?.title ?? "Mengo platform" },
          { label: "Removes", value: feature.problem },
        ]}
        actions={<Cta cta={ctaFor("waitlist")} />}
        backdrop={getFeatureSectionImage(feature.slug, "hero", feature.title)}
      />

      <SectionNav items={sections} />

      {/* Problem then mechanism — the two-beat structure every feature page uses */}
      <Section id="the-problem" photo={getFeatureSectionImage(feature.slug, "problem", `The Problem: ${feature.problem}`)} photoLayout="start">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <PullQuote attribution="The problem">{feature.problem}</PullQuote>
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <Eyebrow as="h2" className="mb-4">How Mengo handles it</Eyebrow>
            <p className="text-lead text-graphite-soft">{feature.mechanism}</p>
            {product ? (
              <p className="mt-6 text-body">
                Part of <TextLink href={routes.product(product.slug)}>{product.title}</TextLink>.
              </p>
            ) : null}
          </div>
        </div>
      </Section>

      <Explainer
        id="inputs-outputs"
        tone="paper"
        eyebrow="Inputs and outputs"
        title={`What ${feature.title} needs and what it returns`}
        sections={feature.depth?.explain}
      />

      <Section id="in-detail" photo={getFeatureSectionImage(feature.slug, "mechanism", `In Practice: ${feature.title}`)}>
        <Heading eyebrow="In detail" title="What that means in practice" size="d4" />
        <DefinitionList items={feature.detail} columns={1} />
      </Section>

      {/* How this capability sits in the wider system — the thing a single feature page most often fails to say. */}
      {feature.depth?.connects ? (
        <Section id="in-the-system" tone="forest">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Heading eyebrow="In the system" title="What this connects to" as="h2" size="d4" />
            <p className="max-w-[52ch] text-lead" data-reveal>
              {feature.depth.connects}
            </p>
          </div>
        </Section>
      ) : null}

      <Section id="questions" tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title={`About ${feature.title}`} as="h2" size="d4" />
          <FaqList faqs={feature.faqs} />
        </div>
      </Section>

      <RelatedRail
        tone="warm"
        groups={mergeGroups(
          [
          {
            heading: "Works alongside",
            links: link("feature", [...new Set([...feature.relatedFeatures, ...siblings])].slice(0, 6)),
            seeAll: { label: `All ${features.length} capabilities`, href: routes.features() },
          },
          {
            heading: "Solutions using this",
            links: link("solution", take(solutionsByFeature.get(feature.slug), 5).map((s) => s.slug)),
            seeAll: { label: "All solutions", href: routes.solutions() },
          },
          {
            heading: "Use cases",
            links: link("use-case", take(useCasesByFeature.get(feature.slug), 5).map((u) => u.slug)),
            seeAll: { label: "All use cases", href: routes.useCases() },
          },
          ],
          relatedGroups(feature.depth, 1),
          4,
        )}
      />

      <PrevNext
        tone="paper"
        within={product ? product.title : "the platform"}
        previous={inEngine.previous ? { label: inEngine.previous.title, href: routes.feature(inEngine.previous.slug) } : undefined}
        next={inEngine.next ? { label: inEngine.next.title, href: routes.feature(inEngine.next.slug) } : undefined}
      />

      <CtaBand
        action={defaultCta(feature)}
        close={feature.depth?.close}
        title="One capability is not a system"
        body={`${feature.title} works because it shares a brief with everything else. Join our waitlist to see the whole thing built against your business.`}
        secondary={{ label: product ? `About ${product.title}` : "See the platform", href: product ? routes.product(product.slug) : routes.platform() }}
      />
    </>
  );
}
