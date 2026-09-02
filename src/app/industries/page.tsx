import type { Metadata } from "next";

import { IndexHero, Directory, CtaBand } from "@/components/sections/page";
import { JsonLd, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { SECTOR_ORDER, sectorLabel } from "@/lib/nav";
import { industries } from "@/data/industries";
import { PageVisual } from "@/components/ui/PageVisual";
import { getHubImage } from "@/lib/images";

const PATH = routes.industries();
const CRUMBS = [{ label: "Industries", href: PATH }];

const SECTOR_BLURB: Record<string, string> = {
  b2b: "Long cycles, several decision-makers, and a champion who has to argue your case in a room you are not in.",
  services: "Bought on trust in a specific person's judgement, which is hard to scale and easy to erode with generic marketing.",
  regulated: "Where what you may claim is set by a regulator, and compliance review is part of production rather than a final check.",
  commerce: "Where acquisition economics and repeat purchase decide whether the marketing is affordable at all.",
  local: "Won in the last twenty minutes before a decision, on proximity, availability and recent reviews.",
  creator: "Where the audience is the asset and the risk is optimising growth at the expense of the offer that monetises it.",
};

export const metadata: Metadata = pageMetadata({
  title: `Marketing for ${industries.length} industries`,
  description:
    "Buying cycle, objections and regulatory constraints change the whole plan. Every industry page states the buyer, the cycle, the channels that carry weight and the constraints to respect.",
  path: PATH,
  ogKicker: "Industries",
});

export default function IndustriesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Industries",
            description: "Industry-specific marketing guidance from Mengo.",
            path: PATH,
            items: industries.map((i) => ({ label: i.title, href: routes.industry(i.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Industries"
        title="Your market decides the plan, not the platform"
        lead="A ninety-day considered purchase and a same-day local job rank channels differently, need different nurture cadences and convert on different content. Each page below starts from those facts."
        count={`${industries.length} industries across six sectors`}
        visual={<PageVisual image={getHubImage("industries", "Industry Index")} priority />}
      />

      <Section tone="paper">
        <Directory
          groups={SECTOR_ORDER.map((sector) => ({
            heading: sectorLabel(sector),
            id: sector,
            blurb: SECTOR_BLURB[sector],
            items: industries
              .filter((i) => i.sector === sector)
              .map((industry) => ({
                label: industry.title,
                href: routes.industry(industry.slug),
                blurb: industry.buyer,
                meta: industry.cycle.split(",")[0],
              })),
          }))}
        />
      </Section>

      <CtaBand
        title="Not listed?"
        body="The framework is the same regardless: buyer, cycle, objections, constraints. Tell us what you sell and we will say honestly whether Mengo fits it."
        intent="expert"
        cta="Talk to an expert"
        secondary={{ label: "See the platform", href: routes.platform() }}
      />
    </>
  );
}
