import Link from "next/link";
import type { Metadata } from "next";

import { EditorialHero, CtaBand, RelatedRail } from "@/components/sections/page";
import { Eyebrow, Heading, JsonLd, MarkerList, Section, TextLink } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { link } from "@/lib/registry";
import { products } from "@/data/products";
import { features } from "@/data/features";
import { assetTypes } from "@/data/asset-types";

const PATH = routes.platform();
const CRUMBS = [{ label: "Platform", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: "The Mengo platform — five engines, one business brief",
  description:
    "Marketing Engine, Content Studio, Campaign Lab, Lead Nurturing and Growth Signal. Five engines that share one brief, so a year of output holds together.",
  path: PATH,
  ogKicker: "Platform",
});

export default function PlatformPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "The Mengo platform",
            description: "The five engines that make up Mengo.",
            path: PATH,
            items: products.map((p) => ({ label: p.title, href: routes.product(p.slug) })),
          }),
        ]}
      />

      <EditorialHero
        crumbs={CRUMBS}
        eyebrow="Platform"
        title={
          <>
            Five engines. <span className="editorial text-lime">One</span> business brief between them.
          </>
        }
        lead="Most marketing stacks are a collection of tools that each need to be told what your business is. Mengo's engines read from one brief, which is what makes strategy, content, campaigns, follow-up and measurement behave like one system rather than five."
        actions={<LeadButton intent="waitlist">Join the waitlist</LeadButton>}
        aside={
          <div>
            <Eyebrow className="mb-4">What that shared context buys you</Eyebrow>
            <MarkerList
              items={[
                "Edit your positioning once and every later asset changes",
                "A campaign inherits the voice the calendar already uses",
                "Nurture sequences answer the objections your segments carry",
                "Review conclusions flow back into next quarter's plan",
              ]}
            />
          </div>
        }
      />

      {/* Each engine gets a full editorial row rather than a card in a grid */}
      <Section tone="paper">
        <Heading
          eyebrow="The engines"
          title="Each one solves a part nobody has time for"
          lead="They can be used separately. They are considerably more useful together, because the expensive context — who you are for and what you are arguing — only has to be established once."
        />

        <div className="mt-14 grid gap-16">
          {products.map((product, i) => (
            <article
              key={product.slug}
              className="rule-t grid gap-6 pt-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16"
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <div>
                <span className="tnum eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-d4">
                  <Link href={routes.product(product.slug)} className="transition-colors hover:text-lime-deep">
                    {product.title}
                  </Link>
                </h3>
                <p className="mt-3 text-body leading-relaxed text-graphite-soft">{product.tagline}</p>
                <p className="mt-5 text-small">
                  <TextLink href={routes.product(product.slug)}>Explore {product.title}</TextLink>
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="eyebrow mb-3">It produces</p>
                  <MarkerList items={product.outputs.slice(0, 4)} />
                </div>
                <div>
                  <p className="eyebrow mb-3">Capabilities</p>
                  <ul className="space-y-2">
                    {product.features.slice(0, 5).map((slug) => {
                      const feature = features.find((f) => f.slug === slug);
                      if (!feature) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={routes.feature(slug)}
                            className="inline-block py-1 text-body text-graphite-soft transition-colors hover:text-lime-deep"
                          >
                            {feature.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="forest">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Heading
              eyebrow="Deliberately narrow"
              title="What the platform does not do"
              lead="Sending, publishing and pipeline management are solved problems with strong incumbents. Building them badly would make the product worse, so Mengo exports into whatever you already run."
            />
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <MarkerList
              items={[
                "No email sending — deliverability and consent stay in your platform",
                "No publishing access — your social accounts stay yours",
                "No ad spend — placement and budget stay in your ad accounts",
                "No system of record — your CRM keeps that job",
                "No media production — filming, design and photography stay with you",
              ]}
            />
            <p className="mt-8 text-body">
              <TextLink href={routes.compare()}>Compare Mengo with the alternatives</TextLink>
            </p>
          </div>
        </div>
      </Section>

      <RelatedRail
        groups={[
          {
            heading: "Capabilities",
            links: link("feature", ["business-brief", "annual-calendar", "asset-library", "sequence-builder", "metric-selection"]),
            seeAll: { label: `All ${features.length} capabilities`, href: routes.features() },
          },
          {
            heading: "Channels & formats",
            links: link("channel", ["linkedin", "instagram", "email", "organic-search", "whatsapp"]),
            seeAll: { label: `All ${assetTypes.length} asset formats`, href: routes.assetTypes() },
          },
          {
            heading: "Where to start",
            links: link("solution", [
              "build-a-marketing-system",
              "fix-inconsistent-posting",
              "generate-qualified-leads",
              "scale-content-without-hiring",
            ]),
            seeAll: { label: "All solutions", href: routes.solutions() },
          },
        ]}
      />

      <CtaBand
        title="See the platform against your own business"
        body="Join the waitlist with a line about what you sell and what keeps stalling. Early access opens in batches, and the roadmap follows what the list actually needs."
        secondary={{ label: "How it works", href: routes.company("how-it-works") }}
      />
    </>
  );
}
