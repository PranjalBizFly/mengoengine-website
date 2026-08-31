import type { Metadata } from "next";

import { IndexHero, Directory, CtaBand } from "@/components/sections/page";
import { JsonLd, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { AXIS_ORDER, axisLabel } from "@/lib/nav";
import { solutions, solutionsByAxis } from "@/data/solutions";

const PATH = routes.solutions();
const CRUMBS = [{ label: "Solutions", href: PATH }];

const AXIS_BLURB: Record<string, string> = {
  goal: "The outcome you are chasing this quarter — a launch, a pipeline, a habit that keeps breaking.",
  team: "The shape of the team doing the work, which changes what is realistic more than the industry does.",
  stage: "Where the business is, because a pre-launch startup and an established local business need opposite plans.",
};

export const metadata: Metadata = pageMetadata({
  title: "Solutions — start from the problem, not the feature",
  description:
    "Eighteen ways into Mengo, organised by the goal you are chasing, the team you are working within and the stage your business is at.",
  path: PATH,
  ogKicker: "Solutions",
});

export default function SolutionsIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Mengo solutions",
            description: "Solutions organised by goal, team and stage.",
            path: PATH,
            items: solutions.map((s) => ({ label: s.title, href: routes.solution(s.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Solutions"
        title="Start from what is actually broken"
        lead="Feature lists are a poor way into a platform, because nobody wakes up needing a calendar generator. These pages start from the situation you are in and work back to what the system does about it."
        count={`${solutions.length} solutions across three axes`}
      />

      <Section tone="paper">
        <Directory
          groups={AXIS_ORDER.map((axis) => ({
            heading: axisLabel(axis),
            id: axis,
            blurb: AXIS_BLURB[axis],
            items: solutionsByAxis(axis).map((solution) => ({
              label: solution.title,
              href: routes.solution(solution.slug),
              blurb: solution.situation,
            })),
          }))}
        />
      </Section>

      <CtaBand
        title="Not sure which one you are?"
        body="Describe the situation and we will tell you honestly whether Mengo is the right answer for it, including when it is not."
        intent="expert"
        cta="Talk to an expert"
        secondary={{ label: "Who Mengo is for", href: routes.company("who-its-for") }}
      />
    </>
  );
}
