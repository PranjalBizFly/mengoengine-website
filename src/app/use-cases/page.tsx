import type { Metadata } from "next";

import { IndexHero, Directory, CtaBand } from "@/components/sections/page";
import { JsonLd, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { useCases } from "@/data/use-cases";
import { products } from "@/data/products";
import { PageVisual } from "@/components/ui/PageVisual";
import { getHubImage } from "@/lib/images";

const PATH = routes.useCases();
const CRUMBS = [{ label: "Use cases", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: `${useCases.length} marketing jobs, start to finish`,
  description:
    "One job per page: the trigger, the before, the after and the workflow between them — from planning a year of content to reviving a cold list.",
  path: PATH,
  ogKicker: "Use cases",
});

export default function UseCasesIndexPage() {
  // Grouped by the engine that leads the job, so the index reads as a map of
  // the platform rather than as forty undifferentiated tasks.
  const groups = products.map((product) => ({
    heading: product.title,
    id: product.slug,
    blurb: product.tagline,
    items: useCases
      .filter((u) => u.products[0] === product.slug)
      .map((useCase) => ({
        label: useCase.title,
        href: routes.useCase(useCase.slug),
        blurb: useCase.trigger,
      })),
  }));

  const uncategorised = useCases.filter((u) => !products.some((p) => p.slug === u.products[0]));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Use cases",
            description: "Specific marketing jobs Mengo does end to end.",
            path: PATH,
            items: useCases.map((u) => ({ label: u.title, href: routes.useCase(u.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Use cases"
        title="One job, from trigger to finished"
        lead="Solutions describe a goal. Use cases describe a single job you need done this week, with the before state, the after state and the workflow between them."
        count={`${useCases.length} jobs`}
        backdrop={getHubImage("use-cases", "Use Cases Catalog")}
      />

      <Section tone="paper">
        <Directory
          groups={[
            ...groups.filter((g) => g.items.length > 0),
            ...(uncategorised.length > 0
              ? [
                  {
                    heading: "Across the platform",
                    items: uncategorised.map((u) => ({
                      label: u.title,
                      href: routes.useCase(u.slug),
                      blurb: u.trigger,
                    })),
                  },
                ]
              : []),
          ]}
        />
      </Section>

      <CtaBand
        title="Your job is probably one of these"
        body="Join our waitlist and say which. The list decides the build order, and specific jobs are considerably more useful to us than general interest."
        secondary={{ label: "All solutions", href: routes.solutions() }}
      />
    </>
  );
}
