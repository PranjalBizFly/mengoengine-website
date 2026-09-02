import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import {
  DefinitionList,
  Eyebrow,
  FaqList,
  Heading,
  JsonLd,
  MarkerList,
  RowLink,
  Section,
  TextLink,
} from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ctaFor } from "@/lib/cta";
import { link } from "@/lib/registry";
import { channels, channelBySlug } from "@/data/channels";
import { industryBySlug } from "@/data/industries";
import { assetTypesForChannel } from "@/data/asset-types";
import { channelIndustryDepth } from "@/data/depth/channel-industry";
import { PageVisual } from "@/components/ui/PageVisual";
import { getChannelIndustryImage } from "@/lib/images";

/**
 * Channel × industry landing pages.
 *
 * These exist because "LinkedIn for recruitment" and "LinkedIn for restaurants"
 * are genuinely different questions, and the pages are generated only for the
 * pairs where the channel guide itself names that industry — so the matrix is
 * curated by the data rather than multiplied out to every possible combination.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return channels.flatMap((channel) =>
    channel.industries.map((industry) => ({ channel: channel.slug, industry })),
  );
}

function resolve(channelSlug: string, industrySlug: string) {
  const channel = channelBySlug.get(channelSlug);
  const industry = industryBySlug.get(industrySlug);
  if (!channel || !industry || !channel.industries.includes(industrySlug)) return null;
  return { channel, industry };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ channel: string; industry: string }>;
}): Promise<Metadata> {
  const { channel: c, industry: i } = await params;
  const resolved = resolve(c, i);
  if (!resolved) return {};
  const { channel, industry } = resolved;
  const rank = industry.channels.indexOf(channel.slug);

  return pageMetadata({
    title: `${channel.title} marketing for ${industry.title}`,
    description:
      rank === 0
        ? `${channel.title} is the primary channel for ${industry.title.toLowerCase()}. The mechanics that matter, the formats that convert, and the cadence to plan against for a ${industry.cycle.toLowerCase()} buying cycle.`
        : `How ${industry.title.toLowerCase()} should use ${channel.title}: the platform mechanics that matter here, the formats that convert, and where it sits against the other channels worth running.`,
    path: routes.channelForIndustry(channel.slug, industry.slug),
    ogKicker: `${channel.title} · ${industry.title}`,
  });
}

export default async function ChannelIndustryPage({
  params,
}: {
  params: Promise<{ channel: string; industry: string }>;
}) {
  const { channel: c, industry: i } = await params;
  const resolved = resolve(c, i);
  if (!resolved) notFound();
  const { channel, industry } = resolved;

  const path = routes.channelForIndustry(channel.slug, industry.slug);
  const crumbs = [
    { label: "Channels", href: routes.channels() },
    { label: channel.title, href: routes.channel(channel.slug) },
    { label: industry.title, href: path },
  ];

  // Written per pair — the one thing the template cannot compose from the two records.
  const depth = channelIndustryDepth[`${channel.slug}:${industry.slug}`];
  const rank = industry.channels.indexOf(channel.slug);
  const rankLabel =
    rank === 0 ? "Primary channel" : rank === 1 ? "Secondary channel" : rank > 1 ? `Ranked ${rank + 1} of ${industry.channels.length}` : "Supporting channel";
  const formats = assetTypesForChannel(channel.slug);
  const faqs = [...industry.faqs.slice(0, 1), ...channel.faqs];

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]), faqSchema(faqs)]} />

      <DocumentHero
        crumbs={crumbs}
        eyebrow={`${channel.title} · ${industry.title}`}
        title={`${channel.title} marketing for ${industry.title.toLowerCase()}`}
        lead={`${channel.summary} For ${industry.title.toLowerCase()}, that has to work against a ${industry.cycle.toLowerCase()} decision made by ${industry.buyer.toLowerCase()}`}
        facts={[
          { label: "Where it ranks here", value: rankLabel },
          { label: "Buying cycle", value: industry.cycle },
          { label: "Cadence", value: channel.cadence },
        ]}
        actions={
          <>
            <Cta cta={ctaFor("waitlist")} />
            <LeadButton intent="expert" variant="secondary" subject={`${channel.title} for ${industry.title}`}>
              Ask about your case
            </LeadButton>
          </>
        }
        visual={<PageVisual image={getChannelIndustryImage(channel.slug, industry.slug, channel.title, industry.title)} priority />}
      />

      <Explainer tone="paper" intro={depth?.intro} />

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow as="h2" className="mb-5">What decides performance on {channel.title}</Eyebrow>
            <MarkerList items={channel.mechanics} />
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <Eyebrow as="h2" className="mb-5">What is true in {industry.title.toLowerCase()}</Eyebrow>
            <MarkerList items={industry.realities} />
            {industry.constraints.length > 0 ? (
              <p className="mt-6 text-small leading-relaxed text-graphite-soft">
                This sector also carries constraints on what may be claimed. Guardrails are configured accordingly —{" "}
                <TextLink href={routes.industry(industry.slug)}>see the full industry profile</TextLink>.
              </p>
            ) : null}
          </div>
        </div>
      </Section>

      <Explainer
        tone="paper"
        eyebrow="The combination"
        title={`${channel.title} in a ${industry.title.toLowerCase()} business`}
        sections={depth?.explain}
      />

      <Section tone="warm">
        <Heading
          eyebrow="Where the two meet"
          title={`Using ${channel.title} against a ${industry.cycle.toLowerCase()} decision`}
          size="d4"
        />
        <DefinitionList
          items={[
            {
              label: "What to publish",
              body: `${industry.formats.slice(0, 3).join(", ")} — produced to ${channel.title}'s own format anatomy rather than reformatted from a generic draft.`,
            },
            {
              label: "Who you are writing to",
              body: `${industry.buyer} The message assumes that reader rather than a general audience, which is the difference between reach and enquiries.`,
            },
            {
              label: "The objection to pre-empt",
              body: `${industry.objections[0]?.label ? `"${industry.objections[0].label}" — ${industry.objections[0].body}` : "Handled in the nurture sequence rather than in the feed."}`,
            },
            {
              label: "What to watch",
              body: `${channel.signals.slice(0, 3).join(", ")}. Each attached to a decision, so the number changes what you do rather than sitting in a report.`,
            },
          ]}
        />
      </Section>

      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Heading
            eyebrow="Honest ranking"
            title={
              rank === 0
                ? `${channel.title} is where the effort belongs here`
                : `${channel.title} supports rather than leads here`
            }
            lead={
              rank === 0
                ? `For ${industry.title.toLowerCase()}, this is the channel Mengo would commit to first — with a twelve-month horizon rather than a six-week trial.`
                : `For ${industry.title.toLowerCase()}, Mengo would rank ${industry.channels[0] ? channelBySlug.get(industry.channels[0])?.title : "another channel"} above it against a ${industry.cycle.toLowerCase()} That is a recommendation about sequence rather than a verdict on the channel.`
            }
          />
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <Eyebrow as="h3" className="mb-5">Full channel order for {industry.title.toLowerCase()}</Eyebrow>
            <ol>
              {industry.channels.map((slug, index) => {
                const item = channelBySlug.get(slug);
                if (!item) return null;
                const current = slug === channel.slug;
                return (
                  <li key={slug} className="rule-t flex items-baseline gap-4 py-3.5">
                    <span className="tnum text-fine font-semibold text-lime">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-body ${current ? "font-semibold text-ink-invert" : "text-sage"}`}>
                      {item.title}
                      {current ? " — this page" : ""}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="warm">
        <Heading eyebrow="Formats" title={`${channel.title} formats Mengo produces`} size="d4" />
        <div className="mt-8">
          {formats.slice(0, 6).map((format) => (
            <RowLink key={format.slug} href={routes.assetType(format.slug)} label={format.title} blurb={format.summary} />
          ))}
        </div>
        <p className="mt-6 text-body">
          <TextLink href={routes.channel(channel.slug)}>All {formats.length} {channel.title} formats</TextLink>
        </p>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title={`${channel.title} for ${industry.title.toLowerCase()}`} as="h2" size="d4" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <RelatedRail
        tone="warm"
        groups={[
          {
            heading: `Other channels for ${industry.title.toLowerCase()}`,
            links: link("channel", industry.channels.filter((s) => s !== channel.slug)),
            seeAll: { label: `${industry.title} overview`, href: routes.industry(industry.slug) },
          },
          {
            heading: `${channel.title} in other industries`,
            links: link("industry", channel.industries.filter((s) => s !== industry.slug)),
            seeAll: { label: `${channel.title} guide`, href: routes.channel(channel.slug) },
          },
          {
            heading: "Solutions",
            links: link("solution", industry.solutions),
            seeAll: { label: "All solutions", href: routes.solutions() },
          },
        ]}
      />

      <CtaBand
        close={depth?.close}
        title={`${channel.title} for ${industry.title.toLowerCase()}, planned properly`}
        body="Join our waitlist and Mengo builds the ranking, the calendar and the assets against your specific business rather than the industry average."
        subject={`${channel.title} for ${industry.title}`}
        secondary={{ label: `${industry.title} overview`, href: routes.industry(industry.slug) }}
      />
    </>
  );
}
