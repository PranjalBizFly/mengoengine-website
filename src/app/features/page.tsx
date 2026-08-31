import type { Metadata } from "next";

import { IndexHero, Directory, CtaBand } from "@/components/sections/page";
import { JsonLd, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { products } from "@/data/products";
import { features, featuresForProduct } from "@/data/features";

const PATH = routes.features();
const CRUMBS = [{ label: "Capabilities", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: `All ${features.length} Mengo capabilities`,
  description:
    "Every capability across the five Mengo engines, grouped by the engine it belongs to — from the business brief and the 365-day calendar to objection mapping and funnel diagnostics.",
  path: PATH,
  ogKicker: "Capabilities",
});

export default function FeaturesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Mengo capabilities",
            description: "All capabilities across the Mengo platform.",
            path: PATH,
            items: features.map((f) => ({ label: f.title, href: routes.feature(f.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Capabilities"
        title="Everything the platform actually does"
        lead="Grouped by engine. Each capability page states the problem it removes and the mechanism it uses, because a feature list without a mechanism is a list of promises."
        count={`${features.length} capabilities across ${products.length} engines`}
      />

      <Section tone="paper">
        <Directory
          groups={products.map((product) => ({
            heading: product.title,
            id: product.slug,
            blurb: product.tagline,
            items: featuresForProduct(product.slug).map((feature) => ({
              label: feature.title,
              href: routes.feature(feature.slug),
              blurb: feature.short,
            })),
          }))}
        />
      </Section>

      <CtaBand
        title="Capabilities are not the point on their own"
        body="What matters is that they share one brief. Join our waitlist and see the whole system built against your business rather than a feature at a time."
        secondary={{ label: "See the platform", href: routes.platform() }}
      />
    </>
  );
}
