import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail } from "@/components/sections/page";
import { LongForm } from "@/components/sections/longform";
import { JsonLd } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { entityMetadata } from "@/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { link } from "@/lib/registry";
import { guides, guideBySlug } from "@/data/guides";

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

      <LongForm sections={guide.sections} />

      <RelatedRail
        tone="warm"
        groups={[
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
        ]}
      />

      <CtaBand
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
