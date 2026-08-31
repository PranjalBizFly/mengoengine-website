import type { Campaign, Slug } from "@/lib/types";

/**
 * Campaign landing pages.
 *
 * Reduced chrome, one action, no mega menu. These are the destinations for paid
 * traffic and outbound, where full site navigation costs conversions rather than
 * helping. Copy reuses the live site's own CTA and reassurance wording.
 */
type Row = [
  slug: Slug,
  title: string,
  summary: string,
  goal: string,
  intent: Campaign["intent"],
  ctaLabel: string,
  audience: string,
  problem: string,
  benefits: [string, string][],
  steps: [string, string][],
  faqs: [string, string][],
  reassurance: string,
];

const rows: Row[] = [
  [
    "early-access",
    "Get your marketing system before your next busy month",
    "Early access to Mengo: a strategy layer, a year of calendar, the content that fills it and the follow-up that converts it — from one guided questionnaire.",
    "Waitlist signup with a described problem",
    "waitlist",
    "Join our waitlist",
    "Founders and one-person marketing teams whose marketing stops whenever delivery gets busy.",
    "You have started a content habit three times. Each run lasted about two weeks and ended when work got busy. The plan to start properly once things calm down has not executed yet, and the quiet month keeps not arriving.",
    [
      ["The year is decided once", "A calendar themed by month and week, so a slot arrives as a brief rather than as a blank page and a decision."],
      ["Content arrives in batches", "A month at a time, in the formats your channels actually use, reviewed in one sitting instead of daily."],
      ["Follow-up runs without you", "Segmented sequences with one objection per message, paced to how long your buyers really take to decide."],
      ["Three numbers, not forty", "Each attached to a decision, reviewed on a rhythm short enough to survive your worst week."],
    ],
    [
      ["Answer the questionnaire", "What you sell, who buys it, what stops them, and where you already have traction."],
      ["Review the plan", "Positioning, segments, ranked channels and the first quarter of calendar, all editable."],
      ["Start executing", "Approve a month of assets and let the sequences run."],
    ],
    [
      ["What does it cost?", "Free to start. Early access opens in batches and there is no card required to join the list."],
      ["Do I need marketing experience?", "No. The questionnaire is written to be answerable by someone who has never run a campaign."],
      ["Will it publish to my accounts?", "No. Mengo writes and structures; publishing and sending stay in the tools you already use."],
      ["What if it is not right for me?", "We will say so. If delivery rather than demand is your constraint, generating more enquiries would hurt you."],
    ],
    "No credit card required · Cancel anytime · Free to start",
  ],
  [
    "for-agencies",
    "Run more accounts without every client sounding the same",
    "Mengo for agencies and freelancers: a separate brief, positioning and voice profile per client, so capacity goes up without output converging on one house style.",
    "Agency enquiry with account count",
    "expert",
    "Talk to an expert",
    "Agencies, freelancers and fractional marketers running several client accounts at once.",
    "Capacity is the constraint. Every new client adds strategy work, content production and reporting — and your own marketing is always the thing that gets dropped. Meanwhile the accounts you do run are drifting towards a single house voice.",
    [
      ["One brief per client", "Each account carries its own business brief, positioning and voice profile, which is what keeps twelve clients sounding like twelve businesses."],
      ["Standard process, bespoke output", "The workflow is the same every time; the strategy layer is not. That combination is what makes scale possible without sameness."],
      ["Onboarding becomes a selling point", "A new client's strategy and first quarter of calendar exist within days rather than weeks."],
      ["Your own pipeline finally happens", "The agency gets its own brief and calendar, on the same system, at the same time as everyone else's."],
    ],
    [
      ["Tell us how many accounts you run", "It changes what we show you — the per-account model matters more the more clients you have."],
      ["See it against one of your clients", "We will walk through a brief and calendar for a real account of yours."],
      ["Decide whether it fits", "Including whether it does not. Agencies with a strong in-house strategy function often need less of this than they expect."],
    ],
    [
      ["Do our clients need to know we use Mengo?", "That is your call. Agencies that are open about where AI accelerates the work and where judgement is human tend to win the trust argument rather than lose it."],
      ["How do we stop accounts sounding alike?", "Separate voice profiles and separate positioning per account. Sameness comes from a shared prompt, not from a shared tool."],
      ["Can we white-label the output?", "The output is yours. Nothing Mengo produces carries our branding."],
    ],
    "No setup required · Built for speed · Ready to launch",
  ],
];

export const campaigns: Campaign[] = rows.map(
  ([slug, title, summary, goal, intent, ctaLabel, audience, problem, benefits, steps, faqs, reassurance]) => ({
    kind: "campaign",
    slug,
    title,
    summary,
    goal,
    intent,
    ctaLabel,
    audience,
    problem,
    benefits: benefits.map(([label, body]) => ({ label, body })),
    steps: steps.map(([t, body]) => ({ title: t, body })),
    faqs: faqs.map(([q, a]) => ({ q, a })),
    reassurance,
    updated: "2026-08-31",
  }),
);

export const campaignBySlug = new Map(campaigns.map((c) => [c.slug, c]));
