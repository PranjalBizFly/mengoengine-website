import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { EditorialHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import { SectionNav } from "@/components/layout/SectionNav";
import { outline } from "@/lib/outline";
import { relatedGroups, mergeGroups } from "@/lib/depth";
import {
  ButtonLink,
  Eyebrow,
  FaqList,
  Heading,
  JsonLd,
  MarkerList,
  ProcessRail,
  Section,
} from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema, howToSchema, softwareApplicationSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ctaFor, defaultCta } from "@/lib/cta";
import { link, solutionsByProduct, useCasesByProduct, take } from "@/lib/registry";
import { products, productBySlug } from "@/data/products";
import { featuresForProduct } from "@/data/features";
import { PageVisual } from "@/components/ui/PageVisual";
import { getProductSectionImage } from "@/lib/images";

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

  // Declared next to the sections it points at, and labelled with the eyebrows
  // those sections already print, so the strip never names a band something
  // the page does not call it.
  const hasOverview = Boolean(product.depth?.intro || product.depth?.explain?.length);
  const sections = outline([
    hasOverview && { id: "overview", label: "Overview" },
    { id: "inputs-outputs", label: "Inputs and outputs" },
    { id: "how-it-works", label: "How it works" },
    { id: "capabilities", label: "Capabilities" },
    Boolean(product.depth?.connects) && { id: "one-system", label: "One system" },
    { id: "questions", label: "Questions" },
  ]);

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
            <Cta cta={ctaFor("waitlist")} />
            <Link
              href={routes.platform()}
              className="inline-flex min-h-11 items-center rounded-full border border-ink-invert/22 px-6 text-body font-semibold text-ink-invert transition-colors hover:border-lime hover:text-lime"
            >
              All five engines
            </Link>
          </>
        }
        aside={
          <div>
            <Eyebrow as="h2" className="mb-4">The job it does</Eyebrow>
            <p className="editorial text-statement leading-snug text-ink-invert">{product.jobToBeDone}</p>
          </div>
        }
        backdrop={getProductSectionImage(product.slug, "hero", product.title)}
      />

      <SectionNav items={sections} />

      {/* The problem this engine removes, and what it deliberately does not do. */}
      <Explainer
        id="overview"
        tone="paper"
        intro={product.depth?.intro}
        sections={product.depth?.explain}
      />

      {/* Inputs and outputs, stated plainly before any persuasion */}
      <Section id="inputs-outputs" photo={getProductSectionImage(product.slug, "inputs-outputs", `${product.title} Architecture`)} photoLayout="end">
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
      <Section id="how-it-works" photo={getProductSectionImage(product.slug, "how-it-works", `${product.title} Workflow`)} photoLayout="inline">
        <Heading eyebrow="How it works" title={`Inside ${product.title}`} />
        <ProcessRail steps={product.how} />
      </Section>

      {/* Capabilities — dense index, not a card grid */}
      <Section id="capabilities" tone="warm">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading
            eyebrow="Capabilities"
            title={`${ownFeatures.length} capabilities inside this engine`}
            className="max-w-[26ch]"
          />
          <ButtonLink href={routes.features()} variant="secondary" size="sm">
            All capabilities across the platform
          </ButtonLink>
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
              <span className="block type-title text-h7 transition-colors group-hover:text-lime-deep">
                {feature.title}
              </span>
              <span className="mt-1.5 block text-small leading-relaxed text-graphite-soft">{feature.short}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* How this engine connects to the other four — the platform argument, per engine. */}
      {product.depth?.connects ? (
        <Section id="one-system" tone="forest">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Heading eyebrow="One system" title="What it hands to the rest of the platform" as="h2" size="d4" />
            <p className="max-w-[52ch] text-lead" data-reveal>
              {product.depth.connects}
            </p>
          </div>
        </Section>
      ) : null}

      <Section id="questions" tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title={`About ${product.title}`} as="h2" />
          <FaqList faqs={product.faqs} />
        </div>
      </Section>

      <RelatedRail
        tone="warm"
        groups={mergeGroups(
          [
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
          ],
          relatedGroups(product.depth, 1),
          4,
        )}
      />

      <CtaBand
        action={defaultCta(product)}
        close={product.depth?.close}
        title={`Put ${product.title} against your business`}
        body="Join our waitlist and describe the part that keeps stalling. Access opens in batches, and what gets built next follows what the list needs."
        secondary={{ label: "Compare the alternatives", href: routes.compare() }}
      />
    </>
  );
}
