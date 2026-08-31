import type { Metadata } from "next";

import { IndexHero, CtaBand } from "@/components/sections/page";
import { FaqBrowser } from "@/components/sections/FaqBrowser";
import { Eyebrow, FaqList, JsonLd, Section, TextLink } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { faqCount, faqIndex, generalFaqs } from "@/lib/faq";

const PATH = routes.faq();
const CRUMBS = [{ label: "FAQ", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: "Frequently asked questions",
  description:
    "Questions about what Mengo produces, what it does not do, how it handles claims about your business, and who it is a poor fit for — plus an index of every question answered across the site.",
  path: PATH,
  ogKicker: "FAQ",
});

export default function FaqPage() {
  const general = generalFaqs();
  const groups = faqIndex();
  const indexed = groups.reduce((n, g) => n + g.entries.length, 0);

  return (
    <>
      {/* Only the questions answered in full on this page are marked up, which
          is what the structured data guidelines require. */}
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]), faqSchema(general)]} />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="FAQ"
        title="Questions, answered where they belong"
        lead="The questions about Mengo itself are answered in full below. Everything else is answered on the page that owns it — an industry question belongs on the industry page, where the answer can be specific."
        count={`${faqCount()} questions across the site`}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-5">About Mengo</Eyebrow>
            <h2 className="max-w-[18ch] text-d3">The questions people ask first</h2>
            <p className="mt-5 max-w-[42ch] text-body text-graphite-soft">
              These are product-level, so they are answered here rather than scattered. If your question is about a
              specific industry, channel or job, the index below will take you to a more useful answer than a general
              one.
            </p>
          </div>
          <FaqList faqs={general} />
        </div>
      </Section>

      <Section tone="warm">
        <Eyebrow>Everything else</Eyebrow>
        <h2 className="mt-4 max-w-[22ch] text-d3">{indexed} more questions, answered in context</h2>
        <p className="mt-5 max-w-[52ch] text-body text-graphite-soft">
          Each links to the page that answers it. That page can say something specific — a dental practice and a
          logistics operator get different answers to the same question, and a single combined answer would serve
          neither.
        </p>
        <div className="mt-12">
          <FaqBrowser groups={groups} total={indexed} />
        </div>
      </Section>

      <Section tone="paper">
        <p className="max-w-[52ch] text-body text-graphite-soft">
          Not here? The <TextLink href={routes.glossary()}>glossary</TextLink> covers terminology, and{" "}
          <TextLink href={routes.company("who-its-for")}>who Mengo is for</TextLink> covers fit — including the
          situations where the honest answer is that you need something else.
        </p>
      </Section>

      <CtaBand
        title="Ask the one that is not on this page"
        body="Describe your situation and we will answer it directly, including when the answer is that Mengo is the wrong tool for it."
        intent="expert"
        cta="Talk to an expert"
        secondary={{ label: "Contact us", href: routes.contact() }}
      />
    </>
  );
}
