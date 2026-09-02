import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import { relatedGroups, mergeGroups } from "@/lib/depth";
import { PrevNext } from "@/components/layout/PrevNext";
import { neighbours } from "@/lib/outline";
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
import { PageVisual } from "@/components/ui/PageVisual";
import { getAssetTypeImage } from "@/lib/images";

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

  // Sequential navigation runs inside the channel, which is the order the
  // asset library itself is grouped by — "next format" across all fourteen
  // channels would be an arbitrary jump.
  const siblingRun = neighbours(assetTypesForChannel(asset.channel), asset.slug);

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
        backdrop={getAssetTypeImage(asset.slug, asset.title, channel?.title)}
      />

      {/* When to reach for this format, written per format. */}
      <Explainer tone="paper" intro={asset.depth?.intro} />

      <Section tone="warm">
        <Heading eyebrow="Anatomy" title="What has to be where" />
        <DefinitionList items={asset.anatomy} columns={1} />
      </Section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow as="h3" className="mb-5">What Mengo needs from you</Eyebrow>
            <MarkerList items={asset.needs} />
            <p className="mt-6 text-small leading-relaxed text-graphite-soft">
              Anything requiring evidence only your business holds is requested rather than invented — see{" "}
              <TextLink href={routes.feature("editorial-guardrails")}>editorial guardrails</TextLink>.
            </p>
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <Eyebrow as="h3" className="mb-5">Where the context comes from</Eyebrow>
            <MarkerList
              items={[
                channel ? `The ${channel.title} slot in your calendar, with its theme already assigned` : "The calendar slot, with its theme already assigned",
                "The audience segment that slot targets, and the objection that segment holds",
                "Your positioning and voice profile, as constraints rather than suggestions",
              ]}
            />
            <p className="mt-6 text-body">
              <TextLink href={routes.feature("content-briefs")}>How content briefs work</TextLink>
            </p>
          </div>
        </div>
      </Section>

      {/* Where this format comes from in a plan, and how it fails. Per format. */}
      <Explainer
        tone="warm"
        eyebrow="In the plan"
        title={`Producing a ${asset.title.toLowerCase()} that works`}
        sections={asset.depth?.explain}
      />

      <RelatedRail
        tone="paper"
        groups={mergeGroups(
          [
            {
              heading: channel ? `Other ${channel.title} formats` : "Related formats",
              links: link("asset-type", siblings),
              seeAll: { label: `All ${assetTypes.length} formats`, href: routes.assetTypes() },
            },
          ],
          relatedGroups(asset.depth),
        )}
      />

      <PrevNext
        tone="paper"
        within={channel ? `${channel.title} formats` : "the asset library"}
        previous={
          siblingRun.previous
            ? { label: siblingRun.previous.title, href: routes.assetType(siblingRun.previous.slug) }
            : undefined
        }
        next={
          siblingRun.next ? { label: siblingRun.next.title, href: routes.assetType(siblingRun.next.slug) } : undefined
        }
      />

      <CtaBand
        action={defaultCta(asset)}
        close={asset.depth?.close}
        title={`${asset.title}, written to the brief`}
        body="Join our waitlist to see this format produced against your positioning, your segments and your voice profile rather than from a blank prompt."
        subject={asset.title}
        secondary={{ label: "Browse the asset library", href: routes.assetTypes() }}
      />
    </>
  );
}
