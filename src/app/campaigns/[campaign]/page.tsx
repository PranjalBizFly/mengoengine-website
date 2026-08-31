import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Logo } from "@/components/brand/Logo";
import { InlineLeadForm, LeadButton } from "@/components/forms/LeadModal";
import { DefinitionList, Eyebrow, FaqList, JsonLd, MarkerList, Section } from "@/components/ui/primitives";
import { entityMetadata } from "@/seo/metadata";
import { faqSchema } from "@/seo/schema";
import { routes, site } from "@/lib/site";
import { campaigns, campaignBySlug } from "@/data/campaigns";

/**
 * Campaign landing page.
 *
 * Reduced chrome by design: the site header and footer hide themselves on this
 * route, so the page carries its own minimal top bar and close. One action, one
 * argument, no mega menu — full navigation on a paid destination costs
 * conversions rather than helping.
 *
 * Noindex, and absent from the sitemap: these compete with the main site for the
 * same queries and exist for traffic that is already qualified.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return campaigns.map((c) => ({ campaign: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ campaign: string }> }): Promise<Metadata> {
  const { campaign } = await params;
  const entity = campaignBySlug.get(campaign);
  if (!entity) return {};
  return { ...entityMetadata(entity, { section: "Campaign" }), robots: { index: false, follow: false } };
}

export default async function CampaignPage({ params }: { params: Promise<{ campaign: string }> }) {
  const { campaign: slug } = await params;
  const campaign = campaignBySlug.get(slug);
  if (!campaign) notFound();

  return (
    <>
      <JsonLd data={faqSchema(campaign.faqs)} />

      {/* Minimal chrome: identity and one way out. No navigation. */}
      <div className="on-dark bg-forest">
        <div className="container-page flex h-(--header-h) items-center justify-between gap-6">
          <Logo tone="light" href={routes.home()} />
          <Link
            href={routes.home()}
            className="inline-flex min-h-11 items-center text-small text-sage transition-colors hover:text-lime"
          >
            mengoengine.com
          </Link>
        </div>

        <div className="container-page grid gap-12 pb-16 pt-8 md:pb-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-6">{campaign.audience}</Eyebrow>
            <h1 className="max-w-[17ch] text-d1 text-ink-invert" data-reveal>
              {campaign.title}
            </h1>
            <p
              className="mt-7 max-w-[48ch] text-lead text-sage"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {campaign.summary}
            </p>

            <div className="mt-10" data-reveal style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
              <Eyebrow className="mb-4">The situation</Eyebrow>
              <p className="max-w-[48ch] text-body text-sage">{campaign.problem}</p>
            </div>
          </div>

          {/* The form is the page. It sits in the hero rather than at the bottom. */}
          <div
            className="rounded-2xl bg-paper p-6 text-graphite sm:p-9"
            data-reveal
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            <InlineLeadForm intent={campaign.intent} subject={campaign.title} />
            <p className="mt-6 rule-t pt-5 text-fine text-graphite-soft">{campaign.reassurance}</p>
          </div>
        </div>
      </div>

      <Section tone="paper">
        <Eyebrow>What you get</Eyebrow>
        <h2 className="mt-4 max-w-[20ch] text-d3">{campaign.goal}</h2>
        <DefinitionList items={campaign.benefits} />
      </Section>

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-5">How it works</Eyebrow>
            <h2 className="max-w-[18ch] text-d4">Three steps, no onboarding call</h2>
          </div>
          <ol className="grid gap-6" data-reveal>
            {campaign.steps.map((step, i) => (
              <li key={step.title} className="rule-t grid gap-2 pt-5 sm:grid-cols-[2.5rem_1fr] sm:gap-5">
                <span className="tnum type-title text-fine text-lime-deep">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="type-title block text-h7">{step.title}</span>
                  <span className="mt-1.5 block text-body text-graphite-soft">{step.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-5">Questions</Eyebrow>
            <h2 className="max-w-[16ch] text-d4">Before you sign up</h2>
          </div>
          <FaqList faqs={campaign.faqs} />
        </div>
      </Section>

      {/* Closing conversion block — the second and last ask on the page */}
      <Section tone="forest">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow className="mb-5">One more thing</Eyebrow>
            <h2 className="max-w-[18ch] text-d3 text-ink-invert" data-reveal>
              If it is not right for you, we will say so
            </h2>
            <p className="mt-5 max-w-[46ch] text-body" data-reveal>
              {site.name} suits businesses where marketing keeps stopping for lack of time. Where delivery rather than
              demand is the constraint, generating more enquiries makes things worse — and we would rather tell you
              that now than after you sign up.
            </p>
          </div>
          <div data-reveal>
            <MarkerList
              items={[
                "Free to start, no card required",
                "Publishing and sending stay in your own tools",
                "The strategy and content are yours to keep",
              ]}
            />
            <div className="mt-8">
              <LeadButton intent={campaign.intent} subject={campaign.title}>
                {campaign.ctaLabel}
              </LeadButton>
            </div>
          </div>
        </div>
      </Section>

      <footer className="on-dark bg-forest-700">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-8 text-fine text-sage-dim">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href={routes.legal("privacy-policy")} className="transition-colors hover:text-lime">
              Privacy
            </Link>
            <Link href={routes.legal("terms-of-service")} className="transition-colors hover:text-lime">
              Terms
            </Link>
            <Link href={routes.home()} className="transition-colors hover:text-lime">
              Full site
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
