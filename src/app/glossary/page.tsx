import type { Metadata } from "next";

import { IndexHero, CtaBand } from "@/components/sections/page";
import { JsonLd, Section } from "@/components/ui/primitives";
import { GlossaryBrowser } from "@/components/sections/GlossaryBrowser";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { glossary } from "@/data/glossary";
import { PageVisual } from "@/components/ui/PageVisual";
import { getHubImage } from "@/lib/images";

const PATH = routes.glossary();
const CRUMBS = [{ label: "Glossary", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: `Marketing glossary — ${glossary.length} terms in plain language`,
  description:
    "Definitions written for people running their own marketing: what the term means in one sentence, why it matters, and what to do about it.",
  path: PATH,
  ogKicker: "Glossary",
});

export default function GlossaryIndexPage() {
  // Grouped alphabetically, which is what a reference page is for.
  const letters = [...new Set(glossary.map((t) => t.title[0].toUpperCase()))].sort();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Marketing glossary",
            description: "Plain-language definitions of marketing terms.",
            path: PATH,
            items: glossary.map((t) => ({ label: t.title, href: routes.glossaryTerm(t.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Glossary"
        title="Marketing terms, defined without defending the jargon"
        lead="Every entry answers three things: what it means in one sentence, why it matters to someone running their own marketing, and where Mengo touches it — omitted when it does not."
        count={`${glossary.length} terms`}
        backdrop={getHubImage("glossary", "Marketing Glossary")}
      >
        <nav aria-label="Jump to letter" className="mt-10 flex flex-wrap gap-1.5">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-line text-fine font-semibold text-graphite-soft transition-colors hover:border-lime-deep hover:text-lime-deep [.on-dark_&]:border-sage/30 [.on-dark_&]:text-sage [.on-dark_&]:hover:border-lime [.on-dark_&]:hover:text-lime"
            >
              {letter}
            </a>
          ))}
        </nav>
      </IndexHero>

      <Section tone="paper">
        <GlossaryBrowser
          entries={glossary.map((term) => ({
            slug: term.slug,
            title: term.title,
            definition: term.definition,
            href: routes.glossaryTerm(term.slug),
          }))}
        />
      </Section>

      <CtaBand
        title="Knowing the words is not the hard part"
        body="Deciding what to do on Tuesday is. Join our waitlist and have the year decided once rather than every morning."
        secondary={{ label: "Read the playbooks", href: routes.resources() }}
      />
    </>
  );
}
