import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { EditorialHero, CtaBand, RelatedRail } from "@/components/sections/page";
import {
  Eyebrow,
  FaqList,
  Heading,
  JsonLd,
  MarkerList,
  ProcessRail,
  Section,
  TextLink,
} from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema, howToSchema, softwareApplicationSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { link, solutionsByProduct, useCasesByProduct, take } from "@/lib/registry";
import { products, productBySlug } from "@/data/products";
import { featuresForProduct } from "@/data/features";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product } = await params;
  const entity = productBySlug.get(product);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Platform" });
}

export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product: slug } = await params;
  const product = productBySlug.get(slug);
  if (!product) notFound();

  const path = routes.product(product.slug);
  const crumbs = [
    { label: "Platform", href: routes.platform() },
    { label: product.title, href: path },
  ];
  const ownFeatures = featuresForProduct(product.slug);
  const relatedSolutions = take(solutionsByProduct.get(product.slug), 5).map((s) => s.slug);
  const relatedUseCases = take(useCasesByProduct.get(product.slug), 5).map((u) => u.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]),
          softwareApplicationSchema({
            name: `Mengo ${product.title}`,
            description: product.summary,
            path,
            features: product.outputs,
          }),
          howToSchema({
            name: `How ${product.title} works`,
            description: product.jobToBeDone,
            steps: product.how,
          }),
          faqSchema(product.faqs),
        ]}
      />

      <EditorialHero
        crumbs={crumbs}
        eyebrow={`Platform · Engine ${String(products.findIndex((p) => p.slug === product.slug) + 1).padStart(2, "0")}`}
        title={product.title}
        lead={product.summary}
        actions={
          <>
            <LeadButton intent="waitlist">Join the waitlist</LeadButton>
            <Link
              href={routes.platform()}
              className="inline-flex min-h-11 items-center rounded-full border border-sage/35 px-6 text-[0.9375rem] font-semibold text-paper transition-colors hover:border-lime hover:text-lime"
            >
              All five engines
            </Link>
          </>
        }
        aside={
          <div>
            <Eyebrow className="mb-4">The job it does</Eyebrow>
            <p className="editorial text-[1.375rem] leading-snug text-paper">{product.jobToBeDone}</p>
          </div>
        }
      />

      {/* Inputs and outputs, stated plainly before any persuasion */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Heading
              eyebrow="What goes in"
              title="It asks for what you already know"
              as="h2"
              size="d4"
            />
            <MarkerList className="mt-8" items={product.inputs} />
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <Heading eyebrow="What comes out" title="Artefacts you can open and edit" as="h2" size="d4" />
            <MarkerList className="mt-8" items={product.outputs} />
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="warm">
        <Heading eyebrow="How it works" title={`Inside ${product.title}`} />
        <ProcessRail steps={product.how} />
      </Section>

      {/* Capabilities — dense index, not a card grid */}
      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading
            eyebrow="Capabilities"
            title={`${ownFeatures.length} capabilities inside this engine`}
            className="max-w-[26ch]"
          />
          <p className="text-[0.9375rem]">
            <TextLink href={routes.features()}>All capabilities across the platform</TextLink>
          </p>
        </div>
        <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {ownFeatures.map((feature, i) => (
            <Link
              key={feature.slug}
              href={routes.feature(feature.slug)}
              className="group rule-t py-5"
              data-reveal
              style={{ "--reveal-delay": `${i * 30}ms` } as React.CSSProperties}
            >
              <span className="block font-display text-[1.0625rem] font-semibold tracking-[-0.02em] transition-colors group-hover:text-lime-deep">
                {feature.title}
              </span>
              <span className="mt-1.5 block text-[0.875rem] leading-relaxed text-graphite-soft">{feature.short}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="forest">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title={`About ${product.title}`} as="h2" />
          <FaqList faqs={product.faqs} />
        </div>
      </Section>

      <RelatedRail
        groups={[
          {
            heading: "Solutions this supports",
            links: link("solution", [...new Set([...product.related.solutions, ...relatedSolutions])].slice(0, 6)),
            seeAll: { label: "All solutions", href: routes.solutions() },
          },
          {
            heading: "Use cases",
            links: link("use-case", [...new Set([...product.related.useCases, ...relatedUseCases])].slice(0, 6)),
            seeAll: { label: "All use cases", href: routes.useCases() },
          },
          {
            heading: "Industries",
            links: link("industry", product.related.industries),
            seeAll: { label: "All industries", href: routes.industries() },
          },
        ]}
      />

      <CtaBand
        title={`Put ${product.title} against your business`}
        body="Join the waitlist and describe the part that keeps stalling. Access opens in batches, and what gets built next follows what the list needs."
        secondary={{ label: "Compare the alternatives", href: routes.compare() }}
      />
    </>
  );
}
