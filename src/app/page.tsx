import Link from "next/link";
import type { Metadata } from "next";

import { EditorialHero, CtaBand, RelatedRail } from "@/components/sections/page";
import {
  DefinitionList,
  Eyebrow,
  FaqList,
  Heading,
  JsonLd,
  MarkerList,
  ProcessRail,
  PullQuote,
  Section,
  TextLink,
} from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { pageMetadata } from "@/seo/metadata";
import { faqSchema, howToSchema } from "@/seo/schema";
import { routes, site } from "@/lib/site";
import { link } from "@/lib/registry";
import { products } from "@/data/products";
import { assetTypes } from "@/data/asset-types";
import { features } from "@/data/features";
import { industries } from "@/data/industries";
import { solutions } from "@/data/solutions";
import { guides } from "@/data/guides";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — ${site.tagline}`,
  description:
    "Mengo is the AI co-founder that runs your marketing: a strategy layer, a 365-day calendar, platform-native content in 70+ formats, and the follow-up that converts it.",
  path: "/",
  ogKicker: site.promise,
});

const HOW_IT_WORKS = [
  {
    title: "Answer the guided questionnaire",
    body: "What you sell, who buys it, what stops them, and where you already have traction. No integrations, no onboarding call.",
  },
  {
    title: "Get the strategy layer",
    body: "Positioning, two to four audience segments, an offer ladder and a ranked channel strategy that commits to one primary channel, one secondary and one experiment.",
  },
  {
    title: "Get the year decided",
    body: "A 365-day calendar themed by month and week, sequenced so foundational content lands before the offers that depend on it, and paced around your launches and quiet periods.",
  },
  {
    title: "Approve the assets",
    body: "Each slot expands into a brief and then into finished, platform-native content. A month arrives at once, so review is a single sitting rather than a daily interruption.",
  },
  {
    title: "Let the follow-up run",
    body: "Segmented nurture sequences, one objection per message, paced to your buying cycle — plus three numbers to review on a rhythm short enough to survive a busy week.",
  },
];

const HOME_FAQS = [
  {
    q: "What exactly does Mengo produce?",
    a: "A written strategy layer, a 365-day content calendar, finished assets in over seventy defined formats, segmented nurture sequences, and a small metric set with a review rhythm attached. All of it editable, all of it yours.",
  },
  {
    q: "Does Mengo publish or send anything?",
    a: "No. It writes and structures; publishing and sending stay in the tools you already use. That keeps your deliverability, consent records and account access under your control.",
  },
  {
    q: "How is this different from asking a chatbot for a post?",
    a: "A chatbot answers the question you bring it. Mengo decides which question to ask — which audience, which claim, which format, this week — because it holds the strategy the asset is supposed to serve.",
  },
  {
    q: "Will the content sound generic?",
    a: "Generic output comes from every asset being generated from the same prompt. Mengo's assets inherit different themes, angles, segments and format anatomies, and every one is constrained by a stored voice profile.",
  },
  {
    q: "Will it invent facts about my business?",
    a: "Editorial guardrails restrict factual and numerical claims to what you supplied. Anything unsourced is surfaced as an explicit gap for you to fill rather than filled with something plausible.",
  },
  {
    q: "Who is Mengo not for?",
    a: "Businesses where delivery is the constraint rather than demand, and businesses where nobody internally will own marketing. Mengo removes the work; it does not remove the responsibility.",
  },
];

export default function HomePage() {
  const goalSolutions = solutions.filter((s) => s.axis === "goal").slice(0, 8);

  return (
    <>
      <JsonLd
        data={[
          faqSchema(HOME_FAQS),
          howToSchema({
            name: "How Mengo builds a marketing system",
            description: "From a guided business questionnaire to a running marketing system.",
            steps: HOW_IT_WORKS,
          }),
        ]}
      />

      <EditorialHero
        eyebrow={site.promise}
        title={
          <>
            Your AI <span className="editorial text-lime">co-founder</span> for the whole marketing function
          </>
        }
        lead="Answer a guided questionnaire about your business. Mengo returns the strategy most founders never get around to writing, a year of calendar, the content that fills it, and the follow-up that converts it — then keeps executing."
        actions={
          <>
            <LeadButton intent="waitlist">Join the waitlist</LeadButton>
            <Link
              href={routes.company("how-it-works")}
              className="inline-flex min-h-11 items-center rounded-full border border-sage/35 px-6 text-body font-semibold text-paper transition-colors hover:border-lime hover:text-lime"
            >
              See how it works
            </Link>
          </>
        }
        aside={
          <dl className="grid grid-cols-2 gap-x-8">
            {[
              { k: "In", v: "One guided questionnaire" },
              { k: "Out", v: "365 days of themed calendar" },
              { k: "Formats", v: `${assetTypes.length} defined asset structures` },
              { k: "Runs", v: "Without a daily decision" },
            ].map((row) => (
              <div key={row.k} className="rule-t py-4">
                <dt className="eyebrow">{row.k}</dt>
                <dd className="mt-1.5 text-body leading-snug text-paper">{row.v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* The problem — asymmetric, statement-led, no cards */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-6">The pattern</Eyebrow>
            <h2 className="max-w-[15ch] text-d2" data-reveal>
              Marketing is the only job with no deadline
            </h2>
          </div>
          <div className="self-end" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
            <p className="max-w-[46ch] text-lead text-graphite-soft">
              A client is waiting for delivery. A regulator is waiting for a filing. Nobody is waiting for Tuesday&rsquo;s
              post. Under pressure, work with an external deadline wins — and it should.
            </p>
            <p className="mt-5 max-w-[46ch] text-body leading-relaxed text-graphite-soft">
              Which is why the failure is always the same shape: a strong start, two good weeks, a busy month, a reset.
              That consistency across thousands of different people is the clue. It is not a discipline problem.
            </p>
          </div>
        </div>

        <DefinitionList
          items={[
            {
              label: "The expensive part is deciding",
              body: "Not writing. Opening a blank page and choosing what today's post should be, from infinite options, is a small tax paid every single morning.",
            },
            {
              label: "Bursts do not compound",
              body: "Three false starts is not three attempts. It is three returns to zero — the archive, the list and the search presence all discarded each time.",
            },
            {
              label: "Follow-up quietly disappears",
              body: "The first reply to an enquiry is always excellent. The second, fourth and eighth need a system, and in most businesses no system exists.",
            },
            {
              label: "Nothing is written down",
              body: "Positioning, segments and channel priorities live in one person's head, which is why every decision is re-made and no hire can inherit them.",
            },
          ]}
        />
      </Section>

      {/* The five engines — editorial numbered list, dark */}
      <Section tone="forest">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-6">The platform</Eyebrow>
            <h2 className="max-w-[14ch] text-d2 text-paper" data-reveal>
              Five engines, one brief between them
            </h2>
            <p className="mt-6 max-w-[42ch] text-body leading-relaxed" data-reveal>
              Each engine solves one part of the marketing function, and every one of them reads from the same business
              brief. That shared context is what stops a year of output sounding like it came from five different
              companies.
            </p>
            <p className="mt-6 text-body">
              <TextLink href={routes.platform()}>Explore the platform</TextLink>
            </p>
          </div>

          <ol>
            {products.map((product, i) => (
              <li
                key={product.slug}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <Link href={routes.product(product.slug)} className="group grid gap-1 rule-t py-6 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="tnum font-display text-fine font-semibold text-lime">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block type-title text-h5 text-paper transition-colors group-hover:text-lime">
                      {product.title}
                    </span>
                    <span className="mt-1.5 block text-body leading-relaxed text-sage">{product.tagline}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* What comes out — two-column facts, light */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Heading
              eyebrow="What you actually get"
              title="Artefacts, not advice"
              lead="Everything Mengo produces is something you can open, edit, hand to someone else, or publish. None of it is a recommendation to go and do the work yourself."
            />
            <p className="mt-8 text-body">
              <TextLink href={routes.assetTypes()}>Browse all {assetTypes.length} asset formats</TextLink>
            </p>
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <MarkerList
              items={[
                "A positioning statement and message hierarchy your team can quote",
                "Two to four audience segments, each carrying the objection it holds",
                "A ranked channel strategy naming what you are choosing not to run",
                "A 365-day calendar themed by month and by week",
                "Briefs and finished assets across social, video, email and search",
                "Segmented nurture sequences with one objection per message",
                "A metric set with a decision attached to every number",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* How it works — process rail, warm */}
      <Section tone="warm">
        <Heading
          eyebrow="How it works"
          title="Ten minutes in, a system out"
          lead="The brief is the only input Mengo asks for, and everything downstream inherits from it — which is why correcting your positioning reflows the calendar instead of requiring a rewrite."
        />
        <ProcessRail steps={HOW_IT_WORKS} />
      </Section>

      {/* Editorial break — the position, stated */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <PullQuote attribution="Why Mengo exists">
            The cost of writing competent copy has collapsed, which has made competent copy worthless as a
            differentiator. What is still scarce is knowing what to make, for whom, and in what order.
          </PullQuote>
          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <p className="text-body leading-relaxed text-graphite-soft">
              That is the whole product thesis. A general assistant will write you a post; it will not tell you which
              post, for which segment, in which week, or why. Mengo holds the strategy the asset is supposed to serve,
              which is the part that decides whether the output is worth publishing.
            </p>
            <p className="mt-5 text-body leading-relaxed text-graphite-soft">
              It is also why editorial guardrails matter more here than fluency. A confident, specific, entirely
              invented claim published under your name does more damage than a hundred merely average posts.
            </p>
            <p className="mt-6 text-body">
              <TextLink href={routes.company("responsible-ai")}>How we use AI responsibly</TextLink>
            </p>
          </div>
        </div>
      </Section>

      {/* Solutions — dense index, purposeful */}
      <Section tone="warm">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading
            eyebrow="Start from the problem"
            title="What are you actually trying to fix?"
            className="max-w-[30ch]"
          />
          <p className="text-body">
            <TextLink href={routes.solutions()}>All {solutions.length} solutions</TextLink>
          </p>
        </div>
        <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {goalSolutions.map((solution, i) => (
            <Link
              key={solution.slug}
              href={routes.solution(solution.slug)}
              className="group rule-t py-5 transition-colors"
              data-reveal
              style={{ "--reveal-delay": `${i * 40}ms` } as React.CSSProperties}
            >
              <span className="block type-title text-h7 transition-colors group-hover:text-lime-deep">
                {solution.title}
              </span>
              <span className="mt-1.5 block text-small leading-relaxed text-graphite-soft">
                {solution.situation}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Industries strip */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Heading
              eyebrow="Built around how your market buys"
              title={`${industries.length} industries, each with its own plan`}
              lead="Buying cycle, objections and regulatory constraints change the channel ranking, the nurture cadence and the content formats. Mengo treats those as inputs rather than as garnish."
            />
            <p className="mt-8 text-body">
              <TextLink href={routes.industries()}>Browse all industries</TextLink>
            </p>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 18).map((industry) => (
              <Link
                key={industry.slug}
                href={routes.industry(industry.slug)}
                className="rule-t py-3 text-body text-graphite-soft transition-colors hover:text-lime-deep"
              >
                {industry.title}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <Heading eyebrow="Questions" title="The things people ask first" as="h2" />
            <p className="mt-6 text-body text-graphite-soft">
              Industry, channel and job-specific questions are answered on the pages that own them, where the answer
              can be specific.
            </p>
            <p className="mt-4 text-body">
              <TextLink href={routes.faq()}>Browse every question we answer</TextLink>
            </p>
          </div>
          <FaqList faqs={HOME_FAQS} />
        </div>
      </Section>

      <RelatedRail
        tone="paper"
        groups={[
          {
            heading: "Read the thinking",
            links: [
              ...link("guide", guides.slice(0, 3).map((g) => g.slug)),
              ...link("article", ["marketing-is-a-systems-problem", "ai-content-sounds-the-same"]),
            ],
            seeAll: { label: "Playbooks and writing", href: routes.blog() },
          },
          {
            heading: "Capabilities",
            links: link("feature", ["annual-calendar", "voice-profile", "asset-library", "sequence-builder", "metric-selection"]),
            seeAll: { label: `All ${features.length} capabilities`, href: routes.features() },
          },
          {
            heading: "Compare approaches",
            links: link("comparison", [
              "mengo-vs-a-marketing-agency",
              "mengo-vs-an-in-house-marketer",
              "mengo-vs-a-general-ai-chatbot",
              "mengo-vs-a-social-scheduler",
              "mengo-vs-doing-it-yourself",
            ]),
            seeAll: { label: "All comparisons", href: routes.compare() },
          },
        ]}
      />

      <CtaBand
        eyebrow="Free to start"
        title="Decide the year once, not every morning"
        body="Join the waitlist and tell us what is actually broken in your marketing. Early access opens in batches, and what gets built next is decided by what people on the list say they need."
        cta="Join the waitlist"
        secondary={{ label: "Who Mengo is for", href: routes.company("who-its-for") }}
      />
    </>
  );
}
