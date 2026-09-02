import type { Metadata } from "next";

import { IndexHero, CtaBand } from "@/components/sections/page";
import { DirectoryBrowser } from "@/components/sections/DirectoryBrowser";
import { Eyebrow, JsonLd, Section, TextLink } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { guides, guidesByFormat } from "@/data/guides";
import { PageVisual } from "@/components/ui/PageVisual";
import { getHubImage } from "@/lib/images";

const PATH = routes.resources();
const CRUMBS = [{ label: "Resources", href: PATH }];

const FORMAT_GROUPS = [
  { format: "playbook" as const, heading: "Playbooks", blurb: "End-to-end walkthroughs of a whole piece of work." },
  { format: "framework" as const, heading: "Frameworks", blurb: "A small set of questions that produce a decision." },
  { format: "checklist" as const, heading: "Checklists", blurb: "What has to exist, in the order it has to be decided." },
  { format: "template" as const, heading: "Templates", blurb: "Structures you can fill in and use immediately." },
];

export const metadata: Metadata = pageMetadata({
  title: "Playbooks, frameworks, checklists and templates",
  description:
    "Practical marketing resources written to be usable without the product — from the 90-day content plan to the objection map and the AI content guardrails checklist.",
  path: PATH,
  ogKicker: "Resources",
});

export default function ResourcesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Resources",
            description: "Marketing playbooks, frameworks, checklists and templates.",
            path: PATH,
            items: guides.map((g) => ({ label: g.title, href: routes.guide(g.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Resources"
        title="Usable without buying anything"
        lead="A resource that only works if you buy something is an advertisement wearing a hat. These are written so you could follow them with a spreadsheet and no product at all."
        count={`${guides.length} resources`}
        backdrop={getHubImage("resources", "Resources & Playbooks")}
      />

      <Section tone="paper">
        <DirectoryBrowser
          facetLabel="Format"
          placeholder="Search resources"
          noun="resources"
          groups={FORMAT_GROUPS.map((group) => ({
            heading: group.heading,
            id: group.format,
            blurb: group.blurb,
            items: guidesByFormat(group.format).map((guide) => ({
              label: guide.title,
              href: routes.guide(guide.slug),
              blurb: guide.summary,
              meta: `${guide.readingTime} min`,
            })),
          }))}
        />
      </Section>

      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-5">Keep reading</Eyebrow>
            <h2 className="max-w-[20ch] text-d4">Where to go after a playbook</h2>
          </div>
          <div className="text-body text-graphite-soft">
            <p>
              The <TextLink href={routes.blog()}>writing</TextLink> argues the positions these resources assume — why
              marketing stops, what AI actually changes, and where small teams lose most of their pipeline.
            </p>
            <p className="mt-4">
              For a specific question, the <TextLink href={routes.faq()}>FAQ index</TextLink> points at whichever page
              answers it, and the <TextLink href={routes.glossary()}>glossary</TextLink> covers the terminology.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Or have the system do it"
        body="Everything above is what Mengo does automatically from a guided brief. Join our waitlist if you would rather review the work than produce it."
        secondary={{ label: "How Mengo works", href: routes.company("how-it-works") }}
      />
    </>
  );
}
