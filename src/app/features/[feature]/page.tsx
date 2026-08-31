import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail } from "@/components/sections/page";
import { DefinitionList, FaqList, Heading, JsonLd, PullQuote, Section, TextLink } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ctaFor, defaultCta } from "@/lib/cta";
import { link, solutionsByFeature, useCasesByFeature, take } from "@/lib/registry";
import { features, featureBySlug, featuresForProduct } from "@/data/features";
import { productBySlug } from "@/data/products";

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

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]), faqSchema(feature.faqs)]} />

      <DocumentHero
        crumbs={crumbs}
        eyebrow={product ? `Capability · ${product.title}` : "Capability"}
        title={feature.title}
        lead={feature.short}
        facts={[
          { label: "Engine", value: product?.title ?? "Mengo platform" },
          { label: "Removes", value: feature.problem },
        ]}
        actions={<Cta cta={ctaFor("waitlist")} />}
      />

      {/* Problem then mechanism — the two-beat structure every feature page uses */}
      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <PullQuote attribution="The problem">{feature.problem}</PullQuote>
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <p className="eyebrow mb-4">How Mengo handles it</p>
            <p className="text-lead text-graphite-soft">{feature.mechanism}</p>
            {product ? (
              <p className="mt-6 text-body">
                Part of <TextLink href={routes.product(product.slug)}>{product.title}</TextLink>.
              </p>
            ) : null}
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Heading eyebrow="In detail" title="What that means in practice" size="d4" />
        <DefinitionList items={feature.detail} columns={1} />
      </Section>

      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title={`About ${feature.title}`} as="h2" size="d4" />
          <FaqList faqs={feature.faqs} />
        </div>
      </Section>

      <RelatedRail
        tone="paper"
        groups={[
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
        ]}
      />

      <CtaBand
        action={defaultCta(feature)}
        title="One capability is not a system"
        body={`${feature.title} works because it shares a brief with everything else. Join our waitlist to see the whole thing built against your business.`}
        secondary={{ label: product ? `About ${product.title}` : "See the platform", href: product ? routes.product(product.slug) : routes.platform() }}
      />
    </>
  );
}
