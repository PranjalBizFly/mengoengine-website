import type { Metadata } from "next";

import { IndexHero, Directory, CtaBand } from "@/components/sections/page";
import { Heading, JsonLd, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { comparisons } from "@/data/comparisons";
import { PageVisual } from "@/components/ui/PageVisual";
import { getHubImage } from "@/lib/images";

const PATH = routes.compare();
const CRUMBS = [{ label: "Compare", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: "Compare Mengo with the alternatives",
  description:
    "Agency, in-house hire, freelancers, chatbots, schedulers, courses or doing nothing. Each comparison states what the alternative is genuinely good at and who should choose it.",
  path: PATH,
  ogKicker: "Compare",
});

export default function CompareIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Comparisons",
            description: "Mengo compared with the alternative approaches to running marketing.",
            path: PATH,
            items: comparisons.map((c) => ({ label: c.title, href: routes.comparison(c.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Compare"
        title="What you would otherwise do instead"
        lead="These pages compare approaches rather than named products, because asserting things about someone else's software is neither defensible nor durable. Each one names who should pick the alternative."
        count={`${comparisons.length} comparisons`}
        backdrop={getHubImage("compare", "Comparison Index")}
      />

      <Section tone="paper">
        <div className="mb-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Heading
            eyebrow="How to read these"
            title="Every page starts with what the alternative does well"
            size="d4"
          />
          <p className="max-w-[52ch] text-body leading-relaxed text-graphite-soft" data-reveal>
            A comparison that finds nothing good in the alternative is marketing, not analysis, and readers discount it
            accordingly. Each page below opens by stating the alternative&rsquo;s genuine strength, then describes the
            structural difference, then names the situations in which you should not choose Mengo. That last section is
            the one worth reading first.
          </p>
        </div>

        <Directory
          groups={[
            {
              heading: "People",
              items: comparisons
                .filter((c) =>
                  ["mengo-vs-a-marketing-agency", "mengo-vs-an-in-house-marketer", "mengo-vs-freelance-writers", "mengo-vs-a-fractional-cmo", "mengo-vs-hiring-a-content-agency", "mengo-vs-an-seo-agency"].includes(c.slug),
                )
                .map((c) => ({ label: c.title, href: routes.comparison(c.slug), blurb: c.theirStrength })),
            },
            {
              heading: "Tools",
              items: comparisons
                .filter((c) =>
                  ["mengo-vs-a-general-ai-chatbot", "mengo-vs-ai-writing-tools", "mengo-vs-a-social-scheduler", "mengo-vs-an-email-platform", "mengo-vs-marketing-automation", "mengo-vs-an-all-in-one-suite", "mengo-vs-a-content-calendar-template"].includes(c.slug),
                )
                .map((c) => ({ label: c.title, href: routes.comparison(c.slug), blurb: c.theirStrength })),
            },
            {
              heading: "Doing it another way",
              items: comparisons
                .filter((c) =>
                  ["mengo-vs-a-marketing-course", "mengo-vs-doing-it-yourself", "mengo-vs-waiting-until-later"].includes(c.slug),
                )
                .map((c) => ({ label: c.title, href: routes.comparison(c.slug), blurb: c.theirStrength })),
            },
          ]}
        />
      </Section>

      <CtaBand
        title="Still not sure it is the right answer?"
        body="Describe your situation and we will tell you honestly, including when the answer is that you should hire someone or wait."
        intent="expert"
        cta="Talk to an expert"
        secondary={{ label: "Who Mengo is for", href: routes.company("who-its-for") }}
      />
    </>
  );
}
