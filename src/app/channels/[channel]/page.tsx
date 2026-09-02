import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import { relatedGroups, mergeGroups } from "@/lib/depth";
import { Eyebrow, FaqList, Heading, JsonLd, MarkerList, RowLink, Section } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ctaFor, defaultCta } from "@/lib/cta";
import { link } from "@/lib/registry";
import { channels, channelBySlug } from "@/data/channels";
import { assetTypesForChannel } from "@/data/asset-types";
import { industryBySlug } from "@/data/industries";
import { PageVisual } from "@/components/ui/PageVisual";
import { getChannelSectionImage } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return channels.map((c) => ({ channel: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ channel: string }> }): Promise<Metadata> {
  const { channel } = await params;
  const entity = channelBySlug.get(channel);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Channels" });
}

export default async function ChannelPage({ params }: { params: Promise<{ channel: string }> }) {
  const { channel: slug } = await params;
  const channel = channelBySlug.get(slug);
  if (!channel) notFound();

  const path = routes.channel(channel.slug);
  const crumbs = [
    { label: "Channels", href: routes.channels() },
    { label: channel.title, href: path },
  ];
  const formats = assetTypesForChannel(channel.slug);

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]), faqSchema(channel.faqs)]} />

      <DocumentHero
        crumbs={crumbs}
        eyebrow="Channel guide"
        title={`${channel.title} marketing`}
        lead={channel.summary}
        facts={[
          { label: "Cadence Mengo plans against", value: channel.cadence },
          { label: "Asset formats", value: `${formats.length} defined for this channel` },
        ]}
        actions={<Cta cta={ctaFor("waitlist")} />}
        visual={<PageVisual image={getChannelSectionImage(channel.slug, "hero", channel.title)} priority />}
      />

      {/* What the channel is for, and what it costs to run. Written per channel. */}
      <Explainer tone="paper" intro={channel.depth?.intro} />

      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Heading
            eyebrow="Platform mechanics"
            title="What actually decides performance here"
            lead="Not preferences. These are the structural facts about the platform that determine what content is worth making."
          />
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <MarkerList items={channel.mechanics} />
          </div>
        </div>
        <div className="mt-14">
          <PageVisual image={getChannelSectionImage(channel.slug, "mechanics", `Platform Mechanics: ${channel.title}`)} />
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow as="h3" className="mb-5">What Mengo measures here</Eyebrow>
            <MarkerList items={channel.signals} />
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <Eyebrow as="h3" className="mb-5">Industries where this ranks highly</Eyebrow>
            <div>
              {channel.industries.map((industrySlug) => {
                const industry = industryBySlug.get(industrySlug);
                if (!industry) return null;
                return (
                  <Link
                    key={industrySlug}
                    href={routes.channelForIndustry(channel.slug, industrySlug)}
                    className="rule-t block py-3 text-body text-graphite-soft transition-colors hover:text-lime-deep"
                  >
                    {channel.title} for {industry.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="warm">
        <Heading
          eyebrow="Formats"
          title={`${formats.length} ${channel.title} formats, each with its own anatomy`}
          lead={`Each one specifies what the opening must do, what carries the middle and what the close asks for — written against ${channel.title}'s own mechanics rather than reformatted from elsewhere.`}
        />
        <div className="mt-10">
          {formats.map((format) => (
            <RowLink
              key={format.slug}
              href={routes.assetType(format.slug)}
              label={format.title}
              blurb={format.summary}
              meta={format.spec.split(",")[0]}
            />
          ))}
        </div>
        <div className="mt-14">
          <PageVisual image={getChannelSectionImage(channel.slug, "formats", `Asset Formats: ${channel.title}`)} />
        </div>
      </Section>

      <Explainer
        tone="paper"
        eyebrow="Before you commit"
        title={`What running ${channel.title} properly involves`}
        sections={channel.depth?.explain}
      />

      {channel.depth?.connects ? (
        <Section tone="forest">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Heading eyebrow="In the mix" title="Where it sits alongside everything else" as="h2" size="d4" />
            <p className="max-w-[52ch] text-lead" data-reveal>
              {channel.depth.connects}
            </p>
          </div>
        </Section>
      ) : null}

      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title={`About ${channel.title}`} as="h2" size="d4" />
          <FaqList faqs={channel.faqs} />
        </div>
      </Section>

      <RelatedRail
        tone="paper"
        groups={mergeGroups(
          [
            {
              heading: "Industries",
              links: link("industry", channel.industries),
              seeAll: { label: "All industries", href: routes.industries() },
            },
            {
              heading: "Other channels",
              links: link(
                "channel",
                channels.filter((c) => c.slug !== channel.slug).slice(0, 6).map((c) => c.slug),
              ),
              seeAll: { label: "All channels", href: routes.channels() },
            },
          ],
          relatedGroups(channel.depth),
          4,
        )}
      />

      <CtaBand
        action={defaultCta(channel)}
        close={channel.depth?.close}
        title={`Should ${channel.title} be one of your three?`}
        body="Channel Ranking scores it against your buying cycle, price point and capacity — and will tell you when the honest answer is no."
        secondary={{ label: "How channel ranking works", href: routes.feature("channel-ranking") }}
      />
    </>
  );
}
