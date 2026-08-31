import type { Product } from "@/lib/types";

/**
 * The five engines that make up the Mengo platform.
 * Order here is the order used in the mega menu and on /platform/.
 */
export const products: Product[] = [
  {
    kind: "product",
    slug: "marketing-engine",
    title: "Marketing Engine",
    navLabel: "Marketing Engine",
    seoTitle: "Marketing Engine — a 365-day marketing plan from your business inputs | Mengo",
    seoDescription:
      "Mengo's Marketing Engine turns a short business brief into a full year of positioning, channel strategy, campaign calendar and content themes you can execute the same week.",
    summary:
      "Answer a short brief about what you sell and who buys it. Mengo returns the strategy layer most founders never get around to writing: positioning, audience segments, channel priorities and a 365-day calendar with a theme behind every week.",
    updated: "2026-08-20",
    tagline: "Strategy, positioning and a year of calendar — generated from your brief",
    jobToBeDone:
      "Stop deciding what to post every morning. Have the year already decided, and spend your attention on execution instead.",
    how: [
      {
        title: "You give it the brief",
        body: "A guided questionnaire about what you sell, who buys it, what they pay, what stops them buying, and where you already have traction. No integrations, no data warehouse, no onboarding call.",
      },
      {
        title: "It builds the positioning layer",
        body: "Mengo drafts your value proposition, the two or three audience segments worth separating, and the message each segment needs to hear first. Everything downstream inherits from this layer, so the voice stays consistent across a year of assets.",
      },
      {
        title: "It picks and ranks channels",
        body: "Rather than telling you to be everywhere, Mengo ranks channels against your buying cycle, price point and the effort you can realistically sustain, then commits to a primary, a secondary and one experiment.",
      },
      {
        title: "It lays out 365 days",
        body: "The calendar is themed by month and by week, sequenced so awareness content lands before the offers that depend on it, and paced against launches, seasons and quiet periods you flag in the brief.",
      },
      {
        title: "It stays live",
        body: "Change your offer, add a segment or drop a channel and the plan reflows. The calendar is a working document, not a PDF you download once and never open again.",
      },
    ],
    features: [
      "business-brief",
      "positioning-generator",
      "audience-segments",
      "channel-ranking",
      "annual-calendar",
      "campaign-themes",
      "offer-architecture",
      "competitor-context",
      "seasonality-planning",
    ],
    outputs: [
      "Positioning statement and message hierarchy",
      "Two to four defined audience segments with the objection each holds",
      "Ranked channel strategy with a primary, secondary and one experiment",
      "365-day calendar themed by month and week",
      "Offer ladder from free entry point to core paid offer",
      "Quarterly campaign briefs ready to hand to Campaign Lab",
    ],
    inputs: [
      "What you sell and what it costs",
      "Who buys it and what triggers the purchase",
      "Where you already have some traction",
      "Launches, seasons or deadlines to plan around",
    ],
    faqs: [
      {
        q: "How long does it take to get the first plan?",
        a: "The brief is a single guided pass. The plan is generated in one pass — you read it, edit what is wrong, and regenerate the parts you changed.",
      },
      {
        q: "Can I edit the strategy, or is it fixed?",
        a: "Every layer is editable. Positioning, segments, channel ranking and calendar are separate objects, so correcting your positioning reflows the calendar without you rewriting 365 entries by hand.",
      },
      {
        q: "What if I already have a marketing plan?",
        a: "Paste it into the brief. Mengo treats an existing plan as a constraint rather than starting over, and fills the gaps — usually the calendar and the offer ladder.",
      },
      {
        q: "Does it work for a business with no marketing history?",
        a: "Yes. The brief is written to be answerable by someone who has never run a campaign. Where you have no data, Mengo plans conservatively and flags what to measure first.",
      },
    ],
    related: {
      solutions: ["launch-a-new-product", "build-a-marketing-system", "fix-inconsistent-posting"],
      industries: ["saas", "professional-services", "ecommerce"],
      useCases: ["plan-a-year-of-content", "define-your-positioning", "choose-the-right-channels"],
    },
    accent: "lime",
  },

  {
    kind: "product",
    slug: "content-studio",
    title: "Content Studio",
    navLabel: "Content Studio",
    seoTitle: "Content Studio — platform-native content in 100+ asset formats | Mengo",
    seoDescription:
      "Content Studio writes posts, hooks, captions, scripts, emails and lead magnets in your voice, formatted for the platform they ship to — drawn from the calendar, not from a blank prompt box.",
    summary:
      "Content Studio produces the assets your calendar asks for. Each one is written for the platform it ships to — a LinkedIn opener is not a caption with hashtags removed, and a 30-second script is not a blog paragraph read aloud.",
    updated: "2026-08-20",
    tagline: "Every asset the calendar asks for, written for the platform it ships to",
    jobToBeDone:
      "Turn a themed calendar slot into a finished, on-brand, platform-correct asset without opening a blank prompt box.",
    how: [
      {
        title: "It starts from the slot, not from nothing",
        body: "Every asset inherits the week's theme, the segment it targets, the offer it points at and the stage of the funnel it sits in. That context is what stops generated content sounding interchangeable.",
      },
      {
        title: "It writes to the format",
        body: "Each of the asset types carries its own anatomy — hook, body, proof, close — and its own length and structure rules. A carousel is planned frame by frame; a script is timed; a subject line is tested against the preview text that follows it.",
      },
      {
        title: "It holds your voice",
        body: "The voice profile built by Marketing Engine constrains vocabulary, sentence length, formality and the claims you are willing to make. Edit the profile once and every later asset shifts.",
      },
      {
        title: "You approve in batches",
        body: "Content arrives as a week or a month at a time, so review is a single sitting rather than a daily interruption. Rejections are specific enough to regenerate just the failing part.",
      },
    ],
    features: [
      "asset-library",
      "voice-profile",
      "hook-writer",
      "long-form-drafting",
      "short-form-scripts",
      "carousel-builder",
      "email-copywriting",
      "lead-magnet-builder",
      "repurposing-engine",
      "batch-approval",
      "content-briefs",
      "editorial-guardrails",
    ],
    outputs: [
      "Social posts, captions and hooks per platform",
      "Short-form video scripts with timing and on-screen text",
      "Carousels planned frame by frame",
      "Long-form articles and landing page copy",
      "Email sequences and broadcast copy",
      "Lead magnets: checklists, templates, mini-guides",
    ],
    inputs: [
      "Your calendar slot and its theme",
      "The voice profile from Marketing Engine",
      "Any proof, numbers or customer language you supply",
    ],
    faqs: [
      {
        q: "Does everything come out sounding the same?",
        a: "The failure mode of generic AI content is that every asset inherits the same prompt. Mengo's assets inherit different slots — a different theme, segment, funnel stage and format each time — which is what produces variation.",
      },
      {
        q: "Can I feed it my existing content to learn from?",
        a: "Yes. Paste your best-performing posts into the voice profile and Mengo extracts the patterns rather than paraphrasing the posts themselves.",
      },
      {
        q: "How many asset formats are supported?",
        a: "Over a hundred, organised by channel. Each is a defined structure rather than a prompt preset — see the full asset library for the anatomy of each one.",
      },
      {
        q: "Will it invent claims about my business?",
        a: "No. Editorial guardrails restrict factual claims to what you supplied in the brief. Anything Mengo cannot source is left as an explicit gap for you to fill.",
      },
    ],
    related: {
      solutions: ["fix-inconsistent-posting", "scale-content-without-hiring", "build-a-content-engine"],
      industries: ["creator-economy", "ecommerce", "coaching-consulting"],
      useCases: ["produce-a-month-of-content", "repurpose-one-idea-into-ten", "write-a-launch-sequence"],
    },
    accent: "sage",
  },

  {
    kind: "product",
    slug: "campaign-lab",
    title: "Campaign Lab",
    navLabel: "Campaign Lab",
    seoTitle: "Campaign Lab — end-to-end campaign structure and execution flows | Mengo",
    seoDescription:
      "Campaign Lab designs the full arc of a campaign: offer, audience, channel sequence, asset checklist and the decision rules for when to push, pause or cut it.",
    summary:
      "A campaign is not a post. Campaign Lab designs the whole arc — what the offer is, who it targets, which channels carry which stage, what has to exist before launch day, and the rule for when to stop.",
    updated: "2026-08-18",
    tagline: "The full arc of a campaign, from offer to exit rule",
    jobToBeDone:
      "Run a campaign that has a beginning, a middle and a defined end, instead of posting about an offer until you get bored of it.",
    how: [
      {
        title: "Define the offer and the exit",
        body: "Campaign Lab starts by forcing two decisions most campaigns skip: exactly what is being offered to exactly whom, and the condition under which the campaign ends. Both go at the top of the brief.",
      },
      {
        title: "Sequence the channels",
        body: "Awareness, consideration and conversion get assigned to the channels that actually carry them for your business, with the handoff between stages made explicit rather than assumed.",
      },
      {
        title: "Generate the asset checklist",
        body: "Every asset the sequence needs is listed with an owner and a due date, then handed to Content Studio. Nothing launches with a missing landing page because it was never on a list.",
      },
      {
        title: "Set the decision rules in advance",
        body: "Thresholds for pushing harder, changing the creative or cutting the campaign are written before launch, when you are still objective about them.",
      },
    ],
    features: [
      "campaign-briefs",
      "channel-sequencing",
      "launch-checklists",
      "landing-page-copy",
      "ad-concepting",
      "promotional-calendars",
      "decision-rules",
      "campaign-retrospectives",
    ],
    outputs: [
      "Campaign brief with offer, audience, and exit condition",
      "Stage-by-stage channel sequence",
      "Complete asset checklist with dates",
      "Landing page and ad copy variants",
      "Pre-agreed decision thresholds",
      "Retrospective template tied to the original brief",
    ],
    inputs: [
      "The offer and its commercial goal",
      "The campaign window",
      "Which channels you can actually run",
    ],
    faqs: [
      {
        q: "Does Campaign Lab place ads for me?",
        a: "It writes and structures them. Placement stays in your ad accounts, so nothing depends on Mengo holding spending permissions.",
      },
      {
        q: "What size of campaign is this built for?",
        a: "From a one-week promotion to a quarter-long launch. The structure is the same; the number of stages and assets scales with the window.",
      },
      {
        q: "Why insist on an exit condition?",
        a: "Campaigns without a defined end quietly become your permanent baseline, which is how a brand ends up sounding like it is always discounting.",
      },
    ],
    related: {
      solutions: ["launch-a-new-product", "run-a-seasonal-promotion", "generate-qualified-leads"],
      industries: ["ecommerce", "hospitality", "education"],
      useCases: ["run-a-product-launch", "plan-a-seasonal-campaign", "build-a-webinar-funnel"],
    },
    accent: "lime",
  },

  {
    kind: "product",
    slug: "lead-nurturing",
    title: "Lead Nurturing",
    navLabel: "Lead Nurturing",
    seoTitle: "Lead Nurturing — structured follow-up that converts the leads you already have | Mengo",
    seoDescription:
      "Mengo builds the follow-up most businesses never get to: segmented sequences, objection-led messaging and re-engagement paths for leads that went quiet.",
    summary:
      "Most businesses do not have a lead problem. They have a follow-up problem. Lead Nurturing builds the sequences that carry someone from first contact to a decision, including the ones for people who went quiet three months ago.",
    updated: "2026-08-22",
    tagline: "The follow-up that turns interest into a decision",
    jobToBeDone:
      "Make sure every lead gets a deliberate, well-timed sequence instead of one enthusiastic reply and then silence.",
    how: [
      {
        title: "Segment by intent, not by source",
        body: "A person who downloaded a checklist and a person who asked for pricing need different sequences. Mengo splits your list by what the contact actually did, then writes to each split.",
      },
      {
        title: "Write to the objection",
        body: "Each message in a sequence is assigned one objection to dissolve — price, timing, trust, switching cost, internal buy-in — rather than repeating the pitch with more exclamation marks.",
      },
      {
        title: "Pace against the buying cycle",
        body: "A ninety-day considered purchase gets a different cadence from a same-week impulse buy. Mengo sets intervals from the cycle length in your industry profile.",
      },
      {
        title: "Recover the quiet ones",
        body: "Re-engagement paths are generated for leads that stalled, with a clear rule for when to stop contacting someone and archive them properly.",
      },
    ],
    features: [
      "intent-segmentation",
      "sequence-builder",
      "objection-mapping",
      "cadence-planning",
      "reengagement-flows",
      "whatsapp-sequences",
      "sales-handoff-notes",
      "lead-scoring-model",
      "list-hygiene",
    ],
    outputs: [
      "Segmented nurture sequences by intent level",
      "Objection-mapped message-by-message plans",
      "Cadence schedule matched to your buying cycle",
      "Re-engagement and win-back paths",
      "Handoff notes for whoever takes the sales call",
      "A rule set for archiving dead leads",
    ],
    inputs: [
      "Where your leads come from",
      "What they typically ask before buying",
      "Your average time from enquiry to decision",
    ],
    faqs: [
      {
        q: "Does Mengo send the messages?",
        a: "Mengo writes and structures the sequences. Sending happens in your email or messaging tool, so your deliverability, consent records and unsubscribe handling stay under your control.",
      },
      {
        q: "How many messages should a sequence have?",
        a: "Mengo sets the length from your buying cycle rather than a fixed number. A ninety-day cycle usually needs more touches than founders expect, spaced further apart than they are comfortable with.",
      },
      {
        q: "Can it handle WhatsApp as well as email?",
        a: "Yes, with different rules. WhatsApp sequences are shorter, more conversational and paced to a channel where a message arrives as a notification rather than in an inbox queue.",
      },
    ],
    related: {
      solutions: ["generate-qualified-leads", "shorten-the-sales-cycle", "recover-cold-leads"],
      industries: ["real-estate", "professional-services", "healthcare"],
      useCases: ["follow-up-with-every-enquiry", "revive-a-cold-list", "qualify-leads-before-a-call"],
    },
    accent: "sage",
  },

  {
    kind: "product",
    slug: "growth-signal",
    title: "Growth Signal",
    navLabel: "Growth Signal",
    seoTitle: "Growth Signal — the small set of numbers your marketing should be judged on | Mengo",
    seoDescription:
      "Growth Signal defines what to measure for your business model, what to ignore, and what each number should trigger — so reporting produces decisions instead of dashboards.",
    summary:
      "Reporting fails when it produces charts nobody acts on. Growth Signal picks the few numbers that matter for your business model, states what each one should trigger, and turns the review into a short recurring decision.",
    updated: "2026-08-15",
    tagline: "Fewer numbers, each attached to a decision",
    jobToBeDone:
      "Know whether the marketing is working, and know what to change when it is not — without building a reporting habit you will abandon in a month.",
    how: [
      {
        title: "Choose the measurable few",
        body: "Mengo selects a small set of metrics from your business model — typically one demand metric, one conversion metric and one retention or repeat metric — and explicitly names the vanity metrics to stop watching.",
      },
      {
        title: "Attach a decision to each",
        body: "Every metric is paired with the action its movement should trigger. A number with no attached decision is removed from the set.",
      },
      {
        title: "Set the review rhythm",
        body: "Weekly for execution, monthly for channel mix, quarterly for strategy. Each review has a fixed agenda so it takes minutes.",
      },
      {
        title: "Feed the decision back into the plan",
        body: "Review conclusions update the calendar and channel ranking in Marketing Engine, which is what keeps the system from drifting away from reality.",
      },
    ],
    features: [
      "metric-selection",
      "review-cadence",
      "channel-attribution",
      "funnel-diagnostics",
      "content-performance",
      "experiment-log",
      "reporting-templates",
    ],
    outputs: [
      "A defined metric set with a decision attached to each",
      "An explicit stop-watching list",
      "Weekly, monthly and quarterly review agendas",
      "Funnel diagnostic showing where the drop-off is",
      "An experiment log with hypotheses and outcomes",
    ],
    inputs: [
      "Your business model and price point",
      "Whatever analytics you already have, however incomplete",
      "The decisions you actually need to make",
    ],
    faqs: [
      {
        q: "Does this replace my analytics tool?",
        a: "No. It decides what is worth reading in the tools you already have, and what each reading should cause you to do.",
      },
      {
        q: "What if my tracking is a mess?",
        a: "That is the normal starting point. Growth Signal begins with the smallest reliable measurement you can actually trust and adds to it, rather than waiting for perfect attribution.",
      },
    ],
    related: {
      solutions: ["build-a-marketing-system", "fix-inconsistent-posting", "prove-marketing-roi"],
      industries: ["saas", "ecommerce", "b2b-services"],
      useCases: ["decide-what-to-measure", "diagnose-a-funnel-drop", "run-a-monthly-marketing-review"],
    },
    accent: "lime",
  },
];

export const productBySlug = new Map(products.map((p) => [p.slug, p]));
