import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Eyebrow, JsonLd, MarkerList, ProcessRail, Section, TextLink } from "@/components/ui/primitives";
import { InlineLeadForm } from "@/components/forms/LeadModal";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";

const PATH = routes.waitlist();
const CRUMBS = [{ label: "Get started", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: "Join the Mengo waitlist",
  description:
    "Early access opens in batches. Tell us what is actually broken in your marketing — what people on the list describe is what sets the build order.",
  path: PATH,
  ogKicker: "Get started",
});

const WHAT_HAPPENS = [
  {
    title: "You describe the situation",
    body: "What you sell and which part of your marketing keeps stopping. A specific description gets you a specific reply; a name and an email gets you a place in the queue.",
  },
  {
    title: "We read it",
    body: "Every entry is read by a person. What people describe is what determines which parts of the product get built next, which is the main reason the waitlist exists.",
  },
  {
    title: "Access opens in batches",
    body: "Not all at once. Batches are grouped by the problem people described, so early access is genuinely useful rather than an empty product with a login.",
  },
  {
    title: "You start with the brief",
    body: "A guided questionnaire, and the strategy layer and first quarter of calendar come out of it. No integrations and no onboarding call.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS])} />

      <div className="on-dark bg-forest text-sage">
        <Breadcrumbs crumbs={CRUMBS} tone="forest" />
        <div className="container-page grid gap-12 pb-16 pt-10 md:pb-20 md:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-6">Free to start</Eyebrow>
            <h1 className="max-w-[15ch] text-d1 text-ink-invert" data-reveal>
              Join the <span className="editorial text-lime">waitlist</span>
            </h1>
            <p
              className="mt-7 max-w-[46ch] text-lead"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              Mengo is early and being built against what the list actually needs. Tell us what is broken and you will be
              asked about it rather than sold to.
            </p>

            <div className="mt-12" data-reveal style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
              <Eyebrow className="mb-4">What you get on day one</Eyebrow>
              <MarkerList
                items={[
                  "Positioning, segments and an offer ladder from a guided brief",
                  "A ranked channel strategy naming what to stop running",
                  "The first quarter of calendar, detailed to slot level",
                  "Assets in the formats your channels actually use",
                  "Nurture sequences paced to your buying cycle",
                ]}
              />
            </div>
          </div>

          <div
            className="rounded-2xl bg-paper p-6 text-graphite sm:p-9"
            data-reveal
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            <InlineLeadForm intent="waitlist" />
          </div>
        </div>
      </div>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-5">What happens next</Eyebrow>
            <h2 className="max-w-[16ch] text-d3">No sequence, no demo funnel</h2>
            <p className="mt-5 max-w-[42ch] text-body leading-relaxed text-graphite-soft">
              If you would rather talk to someone first, the <TextLink href={routes.contact()}>contact page</TextLink>{" "}
              goes to the same place. And if it turns out Mengo is not the right answer for your situation, we would
              rather say so — see <TextLink href={routes.company("who-its-for")}>who it is for</TextLink>.
            </p>
          </div>
          <ProcessRail steps={WHAT_HAPPENS} />
        </div>
      </Section>
    </>
  );
}
