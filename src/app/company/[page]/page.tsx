import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail } from "@/components/sections/page";
import { LongForm, AsideBlock } from "@/components/sections/longform";
import { JsonLd } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { link } from "@/lib/registry";
import { companyPages, companyPageBySlug } from "@/data/company";

export const dynamicParams = false;

export function generateStaticParams() {
  return companyPages.map((p) => ({ page: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const entity = companyPageBySlug.get(page);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Company" });
}

/** Page-specific conversion intent, so the invest page does not ask for a waitlist signup. */
const INTENT: Record<string, { intent: "waitlist" | "investor" | "expert"; cta: string }> = {
  invest: { intent: "investor", cta: "Start an investor conversation" },
  "who-its-for": { intent: "expert", cta: "Ask whether it fits you" },
};

export default async function CompanyPage({ params }: { params: Promise<{ page: string }> }) {
  const { page: slug } = await params;
  const page = companyPageBySlug.get(slug);
  if (!page) notFound();

  const path = routes.company(page.slug);
  const crumbs = [
    { label: "Company", href: routes.company("about") },
    { label: page.title, href: path },
  ];
  const action = INTENT[page.slug] ?? { intent: "waitlist" as const, cta: "Join the waitlist" };

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs])} />

      <DocumentHero
        crumbs={crumbs}
        eyebrow="Company"
        title={page.title}
        lead={page.summary}
        facts={[{ label: "Last updated", value: formatDate(page.updated) }]}
        actions={
          <LeadButton intent={action.intent} subject={page.title}>
            {action.cta}
          </LeadButton>
        }
      />

      <LongForm
        sections={page.sections}
        aside={
          <AsideBlock
            eyebrow="Also worth reading"
            items={companyPages.filter((p) => p.slug !== page.slug).map((p) => p.title)}
          />
        }
      />

      <RelatedRail
        tone="warm"
        groups={[
          {
            heading: "Company",
            links: link(
              "company",
              companyPages.filter((p) => p.slug !== page.slug).map((p) => p.slug),
            ),
          },
          {
            heading: "The platform",
            links: link("product", ["marketing-engine", "content-studio", "campaign-lab", "lead-nurturing", "growth-signal"]),
            seeAll: { label: "Platform overview", href: routes.platform() },
          },
          {
            heading: "Legal",
            links: link("legal", ["privacy-policy", "terms-of-service", "acceptable-use", "cookie-policy"]),
          },
        ]}
      />

      <CtaBand
        title="Early access opens in batches"
        body="Join the waitlist with a line about what is actually broken in your marketing. That is what sets the build order."
        intent={action.intent}
        cta={action.cta}
        secondary={{ label: "Contact us", href: routes.contact() }}
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
