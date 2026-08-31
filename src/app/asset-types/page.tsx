import type { Metadata } from "next";

import { IndexHero, Directory, CtaBand } from "@/components/sections/page";
import { JsonLd, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { channels } from "@/data/channels";
import { assetTypes, assetTypesForChannel } from "@/data/asset-types";

const PATH = routes.assetTypes();
const CRUMBS = [{ label: "Asset library", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: `The asset library — ${assetTypes.length} formats, each with its own anatomy`,
  description:
    "Every content format Mengo produces, documented: what the opening must do, what carries the middle, what the close asks for, and the spec it has to respect.",
  path: PATH,
  ogKicker: "Asset library",
});

export default function AssetTypesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Mengo asset library",
            description: "Defined content formats with anatomy and spec.",
            path: PATH,
            items: assetTypes.map((a) => ({ label: a.title, href: routes.assetType(a.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Asset library"
        title="A format is a structure, not a label"
        lead="Calling something a carousel and then writing a list is why so much content is structurally wrong before a word is judged. Every format here is a defined anatomy with its own length rules and success condition — documented publicly, so you can see what Mengo writes to."
        count={`${assetTypes.length} formats across ${channels.length} channels`}
      />

      <Section tone="paper">
        <Directory
          groups={channels.map((channel) => ({
            heading: channel.title,
            id: channel.slug,
            blurb: channel.cadence,
            items: assetTypesForChannel(channel.slug).map((asset) => ({
              label: asset.title,
              href: routes.assetType(asset.slug),
              blurb: asset.summary,
              meta: asset.spec.split(",")[0],
            })),
          }))}
        />
      </Section>

      <CtaBand
        title="Formats are only useful with a brief behind them"
        body="Each of these gets its content from a calendar slot that already knows the theme, the segment and the funnel stage. Join the waitlist to see that against your business."
        secondary={{ label: "How Mengo works", href: routes.company("how-it-works") }}
      />
    </>
  );
}
