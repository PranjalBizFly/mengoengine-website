import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer, Takeaways } from "@/components/sections/page";
import { relatedGroups, mergeGroups } from "@/lib/depth";
import { PrevNext } from "@/components/layout/PrevNext";
import { neighbours } from "@/lib/outline";
import { LongForm } from "@/components/sections/longform";
import { JsonLd } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { entityMetadata } from "@/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { defaultCta } from "@/lib/cta";
import { link } from "@/lib/registry";
import { guides, guideBySlug } from "@/data/guides";
import { PageVisual } from "@/components/ui/PageVisual";
import { getGuideImage, getGuideSectionImage } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ guide: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ guide: string }> }): Promise<Metadata> {
  const { guide } = await params;
  const entity = guideBySlug.get(guide);
  if (!entity) return {};
  return entityMetadata(entity, { type: "article", section: "Resources" });
}

export default async function GuidePage({ params }: { params: Promise<{ guide: string }> }) {
  const { guide: slug } = await params;
  const guide = guideBySlug.get(slug);
  if (!guide) notFound();

  const path = routes.guide(guide.slug);
  const crumbs = [
    { label: "Resources", href: routes.resources() },
    { label: guide.title, href: path },
  ];

  // The run is the format, matching how the resources hub groups them.
  const sameFormat = neighbours(
    guides.filter((g) => g.format === guide.format),
    guide.slug,
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]),
          articleSchema({
            headline: guide.title,
            description: guide.summary,
            path,
            published: guide.updated,
            modified: guide.updated,
            section: "Resources",
          }),
        ]}
      />

      <DocumentHero
        crumbs={crumbs}
        eyebrow={`Resource · ${guide.format}`}
        title={guide.title}
        lead={guide.summary}
        facts={[
          { label: "Reading time", value: `${guide.readingTime} minutes` },
          { label: "Last updated", value: formatDate(guide.updated) },
        ]}
        actions={
          <LeadButton intent="download" subject={guide.title} variant="secondary">
            Send me the working version
          </LeadButton>
        }
      />

      {/* Who this document is for, before the contents rail. Written per resource. */}
      <Explainer tone="warm" intro={guide.depth?.intro} />

      <LongForm
        sections={guide.sections}
        heroVisual={<PageVisual image={getGuideImage(guide.slug, guide.title, guide.format)} priority />}
        supportingVisual={<PageVisual image={getGuideSectionImage(guide.slug, "workshop", `Implementation: ${guide.title}`)} />}
      />

      <Takeaways items={guide.depth?.takeaways} tone="warm" title="What to take from this" />

      <RelatedRail
        tone="paper"
        groups={mergeGroups(
          [
          {
            heading: "Capabilities that do this for you",
            links: link("feature", guide.related.features),
            seeAll: { label: "All capabilities", href: routes.features() },
          },
          {
            heading: "Industries where it matters most",
            links: link("industry", guide.related.industries),
            seeAll: { label: "All industries", href: routes.industries() },
          },
          {
            heading: "More resources",
            links: link(
              "guide",
              guides.filter((g) => g.slug !== guide.slug && g.format === guide.format).slice(0, 5).map((g) => g.slug),
            ),
            seeAll: { label: `All ${guides.length} resources`, href: routes.resources() },
          },
          ],
          relatedGroups(guide.depth, 1),
          4,
        )}
      />

      <PrevNext
        tone="warm"
        within={`the ${guide.format}s`}
        previous={
          sameFormat.previous
            ? { label: sameFormat.previous.title, href: routes.guide(sameFormat.previous.slug) }
            : undefined
        }
        next={sameFormat.next ? { label: sameFormat.next.title, href: routes.guide(sameFormat.next.slug) } : undefined}
      />

      <CtaBand
        action={defaultCta(guide)}
        close={guide.depth?.close}
        title="Following this by hand is entirely possible"
        body="It is also the part that stops when the business gets busy. Mengo produces the same work from a guided brief and keeps producing it."
        secondary={{ label: "See how it works", href: routes.company("how-it-works") }}
      />
    </>
  );
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
