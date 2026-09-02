import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import { relatedGroups, mergeGroups } from "@/lib/depth";
import {
  DefinitionList,
  Eyebrow,
  FaqList,
  Heading,
  JsonLd,
  MarkerList,
  Section,
  TextLink,
} from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ctaFor, defaultCta } from "@/lib/cta";
import { link, useCasesByIndustry, take } from "@/lib/registry";
import { sectorLabel } from "@/lib/nav";
import { industries, industryBySlug } from "@/data/industries";
import { channelBySlug } from "@/data/channels";
import { PageVisual } from "@/components/ui/PageVisual";
import { getIndustrySectionImage } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const entity = industryBySlug.get(industry);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Industries" });
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: slug } = await params;
  const industry = industryBySlug.get(slug);
  if (!industry) notFound();

  const path = routes.industry(industry.slug);
  const crumbs = [
    { label: "Industries", href: routes.industries() },
    { label: industry.title, href: path },
  ];
  const relatedUseCases = [
    ...new Set([...industry.useCases, ...take(useCasesByIndustry.get(industry.slug), 4).map((u) => u.slug)]),
  ].slice(0, 6);

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]), faqSchema(industry.faqs)]} />

      <DocumentHero
        crumbs={crumbs}
        eyebrow={`Industry · ${sectorLabel(industry.sector)}`}
        title={`Marketing for ${industry.title}`}
        lead={industry.summary}
        facts={[
          { label: "Who is actually buying", value: industry.buyer },
          { label: "Typical buying cycle", value: industry.cycle },
          { label: "Primary channel", value: channelBySlug.get(industry.channels[0])?.title ?? "Varies" },
        ]}
        actions={
          <>
            <Cta cta={ctaFor("waitlist")} />
            <LeadButton intent="expert" variant="secondary" subject={`Marketing for ${industry.title}`}>
              Ask about your case
            </LeadButton>
          </>
        }
        backdrop={getIndustrySectionImage(industry.slug, "hero", industry.title)}
      />

      {/* Sector context, written for this industry rather than derived from its fields. */}
      <Explainer tone="paper" intro={industry.depth?.intro} />

      {/* Realities — the substance of an industry page */}
      <Section photo={getIndustrySectionImage(industry.slug, "realities", `Sector Realities: ${industry.title}`)}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Heading
            eyebrow="What is actually true here"
            title="The realities that shape the plan"
            lead={`Everything below is planned against a ${industry.cycle.toLowerCase()} decision made by ${industry.buyer.toLowerCase()}`}
          />
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <MarkerList items={industry.realities} />
            {industry.constraints.length > 0 ? (
              <div className="mt-10 rule-t pt-6">
                <Eyebrow as="h3" className="mb-4">Constraints to respect</Eyebrow>
                <MarkerList items={industry.constraints} />
                <p className="mt-5 text-small text-graphite-soft">
                  Editorial guardrails are configured to your regulator, and human review stays in the loop. See{" "}
                  <TextLink href={routes.company("responsible-ai")}>how we use AI responsibly</TextLink>.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </Section>

      {/* Channel priority — ordered, because the order is the recommendation */}
      <Section photo={getIndustrySectionImage(industry.slug, "channels", `Channel Strategy: ${industry.title}`)} photoLayout="inline">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading
            eyebrow="Channel priority"
            title="Where the effort belongs, in order"
            className="max-w-[26ch]"
          />
          <p className="text-body">
            <TextLink href={routes.channels()}>How Mengo plans each channel</TextLink>
          </p>
        </div>
        <ol className="mt-10">
          {industry.channels.map((channelSlug, i) => {
            const channel = channelBySlug.get(channelSlug);
            if (!channel) return null;
            // The channel x industry page only exists where the channel guide
            // itself names this industry; otherwise fall back to the channel page
            // rather than linking at a combination we deliberately did not write.
            const href = channel.industries.includes(industry.slug)
              ? routes.channelForIndustry(channel.slug, industry.slug)
              : routes.channel(channel.slug);
            return (
              <li
                key={channelSlug}
                data-reveal
                style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
              >
                <Link
                  href={href}
                  className="group grid gap-2 rule-t py-6 sm:grid-cols-[3rem_minmax(0,14rem)_1fr] sm:gap-6"
                >
                  <span className="tnum font-display text-fine font-semibold text-lime-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="type-title text-h7 transition-colors group-hover:text-lime-deep">
                    {channel.title}
                  </span>
                  <span className="text-body leading-relaxed text-graphite-soft">{channel.cadence}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Formats and objections side by side */}
      <Section tone="forest">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow as="h3" className="mb-5">Formats that convert here</Eyebrow>
            <MarkerList items={industry.formats} />
          </div>
          <div>
            <Eyebrow as="h3" className="mb-5">Objections to answer</Eyebrow>
            <dl className="space-y-6">
              {industry.objections.map((objection) => (
                <div key={objection.label} data-reveal>
                  <dt className="editorial text-h5 leading-snug text-ink-invert">
                    &ldquo;{objection.label}&rdquo;
                  </dt>
                  <dd className="mt-2 text-body leading-relaxed">{objection.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Heading
          eyebrow="What Mengo builds for this industry"
          title="The plan, concretely"
          size="d4"
        />
        <DefinitionList
          items={[
            {
              label: "A calendar paced to the cycle",
              body: `With a ${industry.cycle.toLowerCase()} decision, awareness content is scheduled far enough ahead of offers that it has time to work, and nurture sequences are still present at the point the decision is actually made.`,
            },
            {
              label: "Content in the formats that carry here",
              body: `${industry.formats.slice(0, 3).join(", ")} — generated to each format's own anatomy rather than reformatted from one generic draft.`,
            },
            {
              label: "Sequences written to the real objections",
              body: `Each message in the follow-up dissolves one of the objections above, in the order they surface for a ${industry.buyer.toLowerCase()}`,
            },
            {
              label: "Guardrails set for this sector",
              body:
                industry.constraints.length > 0
                  ? "Regulated language is blocked at the draft stage, and anything requiring professional sign-off is flagged rather than published."
                  : "Claims are restricted to what you supplied, with anything unsourced surfaced as an explicit gap rather than filled with something plausible.",
            },
          ]}
        />
      </Section>

      <Explainer
        tone="warm"
        eyebrow="In this sector"
        title={`What marketing for ${industry.title.toLowerCase()} actually involves`}
        sections={industry.depth?.explain}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title={`Marketing for ${industry.title.toLowerCase()}`} as="h2" size="d4" />
          <FaqList faqs={industry.faqs} />
        </div>
      </Section>

      <RelatedRail
        tone="warm"
        groups={mergeGroups(
          [
            {
              heading: "Solutions for this industry",
              links: link("solution", industry.solutions),
              seeAll: { label: "All solutions", href: routes.solutions() },
            },
            {
              heading: "Common jobs",
              links: link("use-case", relatedUseCases),
              seeAll: { label: "All use cases", href: routes.useCases() },
            },
            {
              heading: "Channel guides",
              links: link("channel", industry.channels),
              seeAll: { label: "All channels", href: routes.channels() },
            },
          ],
          relatedGroups(industry.depth, 1),
          4,
        )}
      />

      <CtaBand
        action={defaultCta(industry)}
        close={industry.depth?.close}
        title={`Marketing built around how ${industry.title.toLowerCase()} actually sell`}
        body="Join our waitlist and tell us what you sell. The industry profile above is where Mengo starts, and your brief is what makes it specific."
        subject={industry.title}
        secondary={{ label: "Browse all industries", href: routes.industries() }}
      />
    </>
  );
}
