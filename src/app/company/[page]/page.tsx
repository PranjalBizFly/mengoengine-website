import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import { LongForm, AsideBlock } from "@/components/sections/longform";
import { JsonLd } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { link } from "@/lib/registry";
import { companyPages, companyPageBySlug } from "@/data/company";
import { PageVisual } from "@/components/ui/PageVisual";
import { getCompanyImage, getCompanySectionImage } from "@/lib/images";

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

/** The company page that stands in for a section index, since there is no /company/ route. */
const COMPANY_LANDING = "about";

/** Page-specific conversion intent, so the invest page does not ask for a waitlist signup. */
const INTENT: Record<string, { intent: "waitlist" | "investor" | "expert" | "speaking"; cta: string }> = {
  invest: { intent: "investor", cta: "Start an investor conversation" },
  "who-its-for": { intent: "expert", cta: "Ask whether it fits you" },
  founder: { intent: "speaking", cta: "Invite Jainam to speak" },
};

export default async function CompanyPage({ params }: { params: Promise<{ page: string }> }) {
  const { page: slug } = await params;
  const page = companyPageBySlug.get(slug);
  if (!page) notFound();

  const path = routes.company(page.slug);
  /* There is no /company/ index — About is the section landing, which is what
     the parent crumb points at. On About itself that crumb is the page you are
     already on, so it is dropped rather than repeated: two identical hrefs
     rendered a self-link, a duplicate React key, and a BreadcrumbList with the
     same URL twice. */
  const crumbs =
    page.slug === COMPANY_LANDING
      ? [{ label: page.title, href: path }]
      : [
          { label: "Company", href: routes.company(COMPANY_LANDING) },
          { label: page.title, href: path },
        ];
  const action = INTENT[page.slug] ?? { intent: "waitlist" as const, cta: "Join our waitlist" };

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs])]} />

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

      {/* What this page is for, in one paragraph. */}
      <Explainer tone="warm" intro={page.depth?.intro} />

      <LongForm
        sections={page.sections}
        heroVisual={<PageVisual image={getCompanyImage(page.slug, page.title)} priority />}
        supportingVisual={<PageVisual image={getCompanySectionImage(page.slug, "culture", `Culture: ${page.title}`)} />}
        aside={
          <AsideBlock
            eyebrow="Also worth reading"
            links={link(
              "company",
              companyPages.filter((p) => p.slug !== page.slug).map((p) => p.slug),
            )}
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
        close={page.depth?.close}
        title="Early access opens in batches"
        body="Join our waitlist with a line about what is actually broken in your marketing. That is what sets the build order."
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
