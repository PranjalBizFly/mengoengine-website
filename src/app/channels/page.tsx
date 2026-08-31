import type { Metadata } from "next";

import { IndexHero, Directory, CtaBand } from "@/components/sections/page";
import { Heading, JsonLd, Section, TextLink } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { channels } from "@/data/channels";
import { assetTypesForChannel, assetTypes } from "@/data/asset-types";

const PATH = routes.channels();
const CRUMBS = [{ label: "Channels", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: `${channels.length} channels, and the mechanics that decide what works`,
  description:
    "How Mengo plans LinkedIn, Instagram, email, WhatsApp, YouTube, search, paid and the rest — platform mechanics, cadence, asset formats and what is worth measuring.",
  path: PATH,
  ogKicker: "Channels",
});

export default function ChannelsIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Channels",
            description: "Channel guides covering mechanics, cadence and formats.",
            path: PATH,
            items: channels.map((c) => ({ label: c.title, href: routes.channel(c.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Channels"
        title="Every platform rewards something different"
        lead="A LinkedIn opener is not a caption with the hashtags removed. Each guide covers the mechanics that decide what works there, the cadence Mengo plans against, and the formats it produces."
        count={`${channels.length} channels · ${assetTypes.length} asset formats`}
      />

      <Section tone="paper">
        <Directory
          groups={[
            {
              heading: "Owned and organic",
              items: channels
                .filter((c) => ["email", "organic-search", "linkedin", "instagram", "youtube", "tiktok", "x", "facebook", "pinterest", "podcasts", "whatsapp", "events-webinars"].includes(c.slug))
                .map((channel) => ({
                  label: channel.title,
                  href: routes.channel(channel.slug),
                  blurb: channel.cadence,
                  meta: `${assetTypesForChannel(channel.slug).length} formats`,
                })),
            },
            {
              heading: "Paid",
              items: channels
                .filter((c) => ["google-ads", "meta-ads"].includes(c.slug))
                .map((channel) => ({
                  label: channel.title,
                  href: routes.channel(channel.slug),
                  blurb: channel.cadence,
                  meta: `${assetTypesForChannel(channel.slug).length} formats`,
                })),
            },
          ]}
        />
      </Section>

      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Heading
            eyebrow="A warning about channel lists"
            title="You should not be on all of these"
            lead="Being present everywhere is a description of what a large marketing team can afford, repeated as advice to people who cannot. Mengo commits you to one primary channel, one secondary and one experiment, and names the rest as paused."
          />
          <div className="self-end" data-reveal>
            <p className="text-body leading-relaxed text-graphite-soft">
              Which three depends on your buying cycle, price point, capacity and existing traction — not on which
              platform is currently being written about. That ranking is what{" "}
              <TextLink href={routes.feature("channel-ranking")}>Channel Ranking</TextLink> produces, and it is
              revisited quarterly against evidence rather than fatigue.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Find out which three are yours"
        body="Join our waitlist and Mengo ranks channels against your actual constraints, including the ones you should deliberately stop running."
        secondary={{ label: "How channel ranking works", href: routes.feature("channel-ranking") }}
      />
    </>
  );
}
