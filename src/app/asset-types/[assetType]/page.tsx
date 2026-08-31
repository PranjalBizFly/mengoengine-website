import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail } from "@/components/sections/page";
import { DefinitionList, Eyebrow, Heading, JsonLd, MarkerList, Section, TextLink } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ctaFor, defaultCta } from "@/lib/cta";
import { link } from "@/lib/registry";
import { assetTypes, assetTypeBySlug, assetTypesForChannel } from "@/data/asset-types";
import { channelBySlug } from "@/data/channels";

export const dynamicParams = false;

export function generateStaticParams() {
  return assetTypes.map((a) => ({ assetType: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ assetType: string }> }): Promise<Metadata> {
  const { assetType } = await params;
  const entity = assetTypeBySlug.get(assetType);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Asset library" });
}

export default async function AssetTypePage({ params }: { params: Promise<{ assetType: string }> }) {
  const { assetType: slug } = await params;
  const asset = assetTypeBySlug.get(slug);
  if (!asset) notFound();

  const channel = channelBySlug.get(asset.channel);
  const path = routes.assetType(asset.slug);
  const crumbs = [
    { label: "Asset library", href: routes.assetTypes() },
    ...(channel ? [{ label: channel.title, href: routes.channel(channel.slug) }] : []),
    { label: asset.title, href: path },
  ];

  const siblings = assetTypesForChannel(asset.channel)
    .filter((a) => a.slug !== asset.slug)
    .slice(0, 6)
    .map((a) => a.slug);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs])} />

      <DocumentHero
        crumbs={crumbs}
        eyebrow={channel ? `Format · ${channel.title}` : "Format"}
        title={asset.title}
        lead={asset.summary}
        facts={[
          { label: "Spec", value: asset.spec },
          ...(channel ? [{ label: "Channel", value: channel.title }] : []),
        ]}
        actions={<Cta cta={ctaFor("waitlist")} />}
      />

      <Section tone="warm">
        <Heading
          eyebrow="Anatomy"
          title="What has to be where"
          lead="Content Studio writes to this structure. Getting it right makes ordinary prose work; getting it wrong makes excellent prose fail."
        />
        <DefinitionList items={asset.anatomy} columns={1} />
      </Section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-5">What Mengo needs from you</Eyebrow>
            <MarkerList items={asset.needs} />
            <p className="mt-6 text-small leading-relaxed text-graphite-soft">
              Anything requiring evidence only your business holds is requested rather than invented — see{" "}
              <TextLink href={routes.feature("editorial-guardrails")}>editorial guardrails</TextLink>.
            </p>
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <Eyebrow className="mb-5">Where it comes from</Eyebrow>
            <p className="text-body leading-relaxed text-graphite-soft">
              This format is never generated from a blank prompt. It arrives from a calendar slot that already carries
              the week&rsquo;s theme, the audience segment it targets, the offer it points at and the funnel stage it
              sits in. That inherited context is the difference between an asset that fits the plan and one that merely
              exists.
            </p>
            <p className="mt-5 text-body">
              <TextLink href={routes.feature("content-briefs")}>How content briefs work</TextLink>
            </p>
          </div>
        </div>
      </Section>

      <RelatedRail
        tone="warm"
        groups={[
          {
            heading: channel ? `Other ${channel.title} formats` : "Related formats",
            links: link("asset-type", siblings),
            seeAll: { label: `All ${assetTypes.length} formats`, href: routes.assetTypes() },
          },
          {
            heading: "Channel guide",
            links: channel ? link("channel", [channel.slug]) : [],
            seeAll: { label: "All channels", href: routes.channels() },
          },
          {
            heading: "Capabilities",
            links: link("feature", ["asset-library", "content-briefs", "voice-profile", "batch-approval"]),
            seeAll: { label: "All capabilities", href: routes.features() },
          },
        ]}
      />

      <CtaBand
        action={defaultCta(asset)}
        title={`${asset.title}, written to the brief`}
        body="Join our waitlist to see this format produced against your positioning, your segments and your voice profile rather than from a blank prompt."
        subject={asset.title}
        secondary={{ label: "Browse the asset library", href: routes.assetTypes() }}
      />
    </>
  );
}
