import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The documentation centre.
 *
 * Register: technical. Sidebar navigation, a strict reading order, and pages
 * that describe the system rather than answer a question — that job belongs to
 * support, and the two sites cross-link rather than duplicating each other.
 *
 * Scope discipline. Everything here describes documented product behaviour: the
 * five engines, what each produces, and the concepts underneath them. Where the
 * product surface is not published — sign-in, seats, roles, export formats —
 * the page carries an approved-content block instead of describing a screen
 * that may not exist in that shape. Documentation that describes an imagined UI
 * is worse than absent documentation, because people plan around it.
 */
export const docs: SubSite = {
  key: "docs",
  name: "Mengo Documentation",
  shortName: "Docs",
  tagline: "How the Mengo system works",
  description:
    "Reference documentation for Mengo: core concepts, the five engines, content and campaign workflows, lead nurturing, and administration.",
  register: "technical",
  sidebar: true,
  nav: [
    { label: "Home", path: "" },
    { label: "Getting started", path: "introduction" },
    { label: "Platform", path: "platform" },
    { label: "Workflows", path: "content-workflow" },
    { label: "Resources", path: "glossary" },
  ],
  pages: [
    /* ---------------------------------------------------------------- */
    {
      path: "",
      title: "Mengo Documentation",
      seoTitle: "Mengo Documentation — concepts, engines and workflows",
      seoDescription:
        "Reference documentation for the Mengo platform: core concepts, the five engines, content and campaign workflows, lead nurturing, measurement and administration.",
      hero: {
        kind: "editorial",
        eyebrow: "Documentation",
        title: "How the system works, in order",
        lead:
          "Mengo is five engines reading from one business brief. This documentation describes what each engine decides, what it produces, and how a change in one place reflows the rest.",
        actions: [
          { label: "Start with the introduction", href: "introduction" },
          { label: "Core concepts", href: "concepts" },
        ],
        facts: [
          { label: "Input", value: "One guided business brief" },
          { label: "Engines", value: "Five, sharing one context" },
          { label: "Horizon", value: "365 days, themed and sequenced" },
          { label: "Boundary", value: "Writes and structures; does not send" },
        ],
      },
      blocks: [
        {
          type: "prose",
          heading: "Read this in order the first time",
          body: [
            "Mengo is not a set of independent tools that happen to share a login. Each engine inherits from the layer above it, which means the documentation has a correct reading order and a fairly unhelpful random-access order. Concepts, then the platform overview, then the engine you care about.",
            "After that it is a reference. The workflow sections — content, campaigns, leads — describe the loops you will actually run week to week, and assume the concepts.",
          ],
        },
        {
          type: "index",
          heading: "Getting started",
          links: [
            { label: "Introduction", href: "introduction", blurb: "What Mengo is, what it produces, and what it deliberately does not do." },
            { label: "Setup", href: "setup", blurb: "The business brief: what it asks, and what makes an answer useful." },
            { label: "Your first workflow", href: "first-workflow", blurb: "From a generated strategy layer to an approved week of content." },
            { label: "Core concepts", href: "concepts", blurb: "Brief, strategy layer, slot, format anatomy, voice profile, objection." },
          ],
        },
        {
          type: "index",
          heading: "The platform",
          links: [
            { label: "Platform overview", href: "platform", blurb: "The five engines and the context they share." },
            { label: "Marketing Engine", href: "marketing-engine", blurb: "Positioning, segments, channel ranking, the 365-day calendar." },
            { label: "Content Studio", href: "content-studio", blurb: "Format-native drafting under a stored voice profile." },
            { label: "Campaign Lab", href: "campaign-lab", blurb: "Offer, sequence, asset checklist, exit rule." },
            { label: "Lead Nurturing", href: "lead-nurturing", blurb: "Intent segmentation and objection-led sequences." },
            { label: "Growth Signal", href: "growth-signal", blurb: "A small metric set with a decision attached to each number." },
          ],
        },
        {
          type: "index",
          heading: "Workflows and reference",
          links: [
            { label: "Content workflow", href: "content-workflow", blurb: "Planning, creation, repurposing and approval." },
            { label: "Campaign workflow", href: "campaign-workflow", blurb: "Planning, execution and measurement." },
            { label: "Lead workflow", href: "lead-workflow", blurb: "Capture, segmentation, nurturing and scoring." },
            { label: "Administration", href: "administration", blurb: "Account, settings, teams and permissions." },
            { label: "Glossary", href: "glossary", blurb: "The terms this documentation uses precisely." },
            { label: "Documentation FAQ", href: "faq", blurb: "Questions about the docs themselves." },
          ],
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "Help centre", href: siteUrl("support"), external: true },
            { label: "Developer portal", href: siteUrl("developers"), external: true },
            { label: "System status", href: siteUrl("status"), external: true },
          ],
        },
      ],
    },

    /* --- Getting started --------------------------------------------- */
    {
      path: "introduction",
      title: "Introduction",
      group: "Getting started",
      seoTitle: "Introduction to Mengo — what it produces and what it does not",
      seoDescription:
        "What Mengo is, the artefacts it produces, the boundary it deliberately keeps around publishing and sending, and who the system is designed for.",
      hero: {
        kind: "document",
        eyebrow: "Getting started",
        title: "Introduction",
        lead:
          "Mengo turns a short business brief into a marketing system: strategy, a year of calendar, the content that fills it, and the follow-up that converts it.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The problem the system is shaped around",
          body: [
            "Marketing is the only business function with no external deadline. Delivery has clients waiting, finance has filing dates, and marketing has an intention — which loses to whatever is urgent. The result is a familiar pattern: a burst of activity, two good weeks, a busy month, a reset.",
            "The expensive part of that is not production. It is the decision: what to say, to whom, in what format, this week. Mengo is built to take the decision away, which is why the strategy layer exists before any content does.",
          ],
        },
        {
          type: "checklist",
          heading: "What the system produces",
          intro: "Every one of these is an artefact you can open, edit and hand to someone else.",
          items: [
            "A positioning statement and message hierarchy",
            "Two to four defined audience segments, each carrying the objection it holds",
            "An offer ladder, and a ranked channel strategy naming what you are choosing not to run",
            "A 365-day calendar themed by month and by week",
            "Briefs and finished assets across a large set of defined formats",
            "Segmented nurture sequences with one objection per message",
            "A metric set with a decision attached to every number, and a review agenda",
          ],
        },
        {
          type: "definitions",
          heading: "What Mengo does not do",
          intro:
            "This boundary is a design decision rather than a roadmap gap, and most of the system's behaviour follows from it.",
          items: [
            {
              label: "No sending",
              body: "Deliverability and consent records stay in your platform. Sequences are written and structured here and exported to the tool you already run.",
            },
            {
              label: "No publishing",
              body: "Your social accounts stay yours. There is no OAuth grant to make and no token to revoke, which means an incident here cannot become a post under your name.",
            },
            {
              label: "No ad spend",
              body: "Placement and budget stay in your ad accounts. Mengo writes ad copy and campaign structure; it does not hold the card.",
            },
            {
              label: "No system of record",
              body: "Pipeline management is a solved problem with strong incumbents. Mengo exports into your CRM rather than trying to become it.",
            },
            {
              label: "No media production",
              body: "Filming, design and photography stay outside the system. It produces scripts, briefs and structure.",
            },
            {
              label: "No invented facts",
              body: "Statistics and customer outcomes appear only where you supplied them. Anything unsourced surfaces as an explicit gap rather than being filled.",
            },
          ],
        },
        {
          type: "statement",
          text:
            "The cost of writing competent copy has collapsed, which has made competent copy worthless as a differentiator. What is still scarce is knowing what to make, for whom, and in what order.",
          attribution: "The product thesis",
        },
      ],
    },

    {
      path: "setup",
      title: "Setup: the business brief",
      navLabel: "Setup",
      group: "Getting started",
      seoTitle: "Setup — the Mengo business brief and how to answer it",
      seoDescription:
        "The business brief is the only input Mengo asks for. What it covers, why it works from memory rather than from your data, and what makes an answer produce useful output.",
      hero: {
        kind: "document",
        eyebrow: "Getting started",
        title: "Setup",
        lead:
          "There are no integrations to connect and no onboarding call. Setup is a single guided pass through a questionnaire about your business.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why the brief is not a data import",
          body: [
            "The brief asks what you sell, who buys it, what they pay, what stops them buying, and where you already have traction. Those are questions about judgement, not history — and no analytics export can answer the one that matters most, which is which objection loses you the most deals.",
            "It is a single guided pass rather than a form you save and return to, because the answers you can give from memory are enough to produce a defensible first plan. Everything after this inherits from it.",
          ],
        },
        {
          type: "definitions",
          heading: "What the brief covers",
          columns: 1,
          items: [
            { label: "The offer", body: "What you sell, at what price, and what the buyer is actually purchasing when they buy it. The offer ladder is derived from this." },
            { label: "The buyer", body: "Who decides, who influences, and what their situation looks like at the moment they start looking. Segments are derived from this." },
            { label: "The objection", body: "What stops them, in their words rather than paraphrased. Every nurture message is assigned one of these." },
            { label: "The traction", body: "Where something already works, however small. Channel ranking weights this heavily, because a channel with a signal beats a channel with a theory." },
            { label: "The capacity", body: "What you can sustain rather than what is optimal. A plan you abandon in month two is worse than a smaller plan that survives." },
            { label: "The calendar constraints", body: "Launches, seasons, closures and quiet periods. Omitting these is the most common cause of a first calendar that feels subtly wrong." },
          ],
        },
        {
          type: "callout",
          heading: "The brief is a living document",
          body:
            "Change your offer, add a segment or drop a channel and the plan reflows. Correcting the brief is the intended way to change downstream output — editing an asset fixes one artefact and leaves the cause running.",
          action: { label: "Core concepts", href: "concepts" },
        },
        {
          type: "pending",
          heading: "Account creation and access",
          body:
            "How you create an account, what authentication is offered and how access is granted are product decisions that have not been published. Documenting a sign-up flow before it exists is how documentation and product diverge on day one.",
          needs: [
            "The authentication method offered at launch",
            "Whether the brief is completed before or after account creation",
            "How waitlist access converts into an account",
          ],
          action: { label: "How access works today", href: siteUrl("support", "account"), external: true },
        },
      ],
    },

    {
      path: "first-workflow",
      title: "Your first workflow",
      navLabel: "First workflow",
      group: "Getting started",
      seoTitle: "Your first workflow — from strategy layer to an approved week",
      seoDescription:
        "The loop to run first: read the strategy layer, correct the brief rather than the assets, approve one week of content, and set up follow-up before chasing traffic.",
      hero: {
        kind: "document",
        eyebrow: "Getting started",
        title: "Your first workflow",
        lead:
          "The order that holds. Most first weeks fail by trying to run the whole system at once, or by editing artefacts instead of the layer that generated them.",
      },
      blocks: [
        {
          type: "steps",
          heading: "The loop",
          steps: [
            { title: "Read the strategy layer", body: "End to end, before looking at any content. If the positioning is wrong, every asset is wrong in the same direction and reviewing them individually wastes the week." },
            { title: "Correct upstream", body: "Fix the brief and the strategy layer rather than the assets. A correction here reflows what follows; an edit downstream fixes one artefact." },
            { title: "Approve one week", body: "Not one month, until the voice profile has settled. Early batches are where the voice profile earns its edits." },
            { title: "Set the follow-up running", body: "Before chasing more traffic. Most businesses lose more after an enquiry than before one." },
            { title: "Pick three numbers", body: "Choose the metrics you will actually look at and ignore the rest until the quarterly review." },
          ],
        },
        {
          type: "editorial",
          heading: "Three habits that decide how well this goes",
          sections: [
            {
              heading: "Reject specifically",
              body: "Rejections name the failing part — the hook, the close, a claim — so only that part regenerates. A blanket rejection discards the parts that worked and gives the system nothing to act on. This single habit is the difference between a review that takes twenty minutes and one that takes an afternoon.",
            },
            {
              heading: "Promote repeated corrections",
              body: "If you fix the same thing three times, it is a voice profile rule or a brief correction, not three edits. The third instance is the signal, and noticing it early is what stops the system feeling like it never learns.",
            },
            {
              heading: "Separate wrong from unwelcome",
              body: "A channel ranking that drops the platform you enjoy, or a segment list that excludes a customer type you like, is doing its job. That is different from a defect, and conflating the two leads to overriding the system in exactly the places it was most useful.",
            },
          ],
        },
      ],
    },

    {
      path: "concepts",
      title: "Core concepts",
      group: "Getting started",
      seoTitle: "Core concepts — brief, strategy layer, slot, format anatomy, voice profile",
      seoDescription:
        "The six objects the rest of the Mengo documentation assumes: the business brief, the strategy layer, the calendar slot, format anatomy, the voice profile and the objection.",
      hero: {
        kind: "document",
        eyebrow: "Getting started",
        title: "Core concepts",
        lead:
          "Six objects. Everything else in this documentation is built from them, and most confusion about the product is really confusion about which one owns a decision.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "The objects",
          columns: 1,
          items: [
            {
              label: "Business brief",
              body: "The single input. What you sell, who buys it, what stops them, where you have traction, what you can sustain, and when your year is quiet. Every engine reads from it, which is why it is the first place to look when output is wrong.",
            },
            {
              label: "Strategy layer",
              body: "The generated, editable, versioned output of the brief: positioning, message hierarchy, two to four audience segments, an offer ladder and a ranked channel strategy. Downstream objects inherit from it, so editing it reflows rather than requiring a rewrite.",
            },
            {
              label: "Slot",
              body: "A dated position in the calendar carrying a theme, a segment, an angle and a format. A slot is why Content Studio never starts from a blank page: by the time drafting begins, four decisions have already been made.",
            },
            {
              label: "Format anatomy",
              body: "The structure and rules of a specific format. A carousel is not a blog post cut into slides and a short-form script is not a caption with line breaks. Assets are built to an anatomy rather than poured into a container.",
            },
            {
              label: "Voice profile",
              body: "Stored constraints on how things are said: banned words and constructions, sentence length, formality, and which claims are allowed. Hard constraints rather than preferences, and the reason a year of output does not drift.",
            },
            {
              label: "Objection",
              body: "A specific reason a specific segment does not buy, held in the segment and assigned one-per-message across nurture sequences. A message that answers four objections answers none of them well.",
            },
          ],
        },
        {
          type: "table",
          heading: "Which object owns which decision",
          intro: "The lookup most people need in their first fortnight.",
          columns: ["If you want to change…", "Edit this", "Not this"],
          rows: [
            ["Who the content is aimed at", "The segment in the strategy layer", "The individual asset"],
            ["Which channels get effort", "The channel ranking", "The calendar"],
            ["When something is published", "The calendar slot", "The asset draft"],
            ["How something is written", "The voice profile", "Each asset in turn"],
            ["What a nurture message argues", "The objection on the segment", "The message body"],
            ["Which numbers you review", "The metric set in Growth Signal", "Your analytics tool"],
          ],
        },
      ],
    },

    /* --- Platform ----------------------------------------------------- */
    {
      path: "platform",
      title: "Platform overview",
      navLabel: "Platform overview",
      group: "Platform",
      seoTitle: "Platform overview — five engines and one shared brief",
      seoDescription:
        "How Mengo's five engines divide the marketing function, why they read from one shared business brief, and how a change in one engine propagates to the others.",
      hero: {
        kind: "document",
        eyebrow: "Platform",
        title: "Platform overview",
        lead:
          "Five engines, one brief between them. Each solves one part of the marketing function; the shared context is what stops a year of output sounding like five different companies.",
      },
      blocks: [
        {
          type: "table",
          heading: "The five engines",
          columns: ["Engine", "Decides", "Produces"],
          rows: [
            ["Marketing Engine", "Who you are for, what you say, where you say it, and when", "Positioning, segments, offer ladder, channel ranking, 365-day calendar"],
            ["Content Studio", "How each slot becomes a finished asset in its own format", "Platform-native assets under a stored voice profile"],
            ["Campaign Lab", "How a push begins, sequences and ends", "Campaign structure, channel sequence, asset checklist, exit rule"],
            ["Lead Nurturing", "What happens after someone raises a hand", "Intent-segmented sequences, one objection per message"],
            ["Growth Signal", "Which numbers matter and what each one changes", "A small metric set with decisions attached, and review agendas"],
          ],
        },
        {
          type: "prose",
          heading: "How a change propagates",
          body: [
            "Because the engines share the brief and the strategy layer, an edit high in the chain reflows everything below it. Correct a segment and the calendar re-themes, the assets re-target and the nurture objections change. Correct an asset and you have corrected an asset.",
            "This is the single most important operational fact about the platform, and the reason both this documentation and the help centre push almost every question upstream.",
          ],
        },
        {
          type: "callout",
          heading: "Marketing Engine is the root",
          body:
            "If you are unsure which engine owns something, start at Marketing Engine and work down. Everything else inherits from what it decides.",
          action: { label: "Marketing Engine", href: "marketing-engine" },
        },
      ],
    },

    {
      path: "marketing-engine",
      title: "Marketing Engine",
      group: "Platform",
      seoTitle: "Marketing Engine — positioning, segments, channels and the annual calendar",
      seoDescription:
        "How Marketing Engine turns the business brief into a positioning layer, audience segments, a ranked channel strategy and a 365-day calendar that stays a working document.",
      hero: {
        kind: "document",
        eyebrow: "Platform",
        title: "Marketing Engine",
        lead:
          "Strategy, positioning and a year of calendar, generated from your brief. This is the root engine; everything else inherits from what it decides.",
      },
      blocks: [
        {
          type: "steps",
          heading: "What it does, in order",
          steps: [
            { title: "Reads the brief", body: "A guided questionnaire about what you sell, who buys it, what they pay, what stops them buying, and where you already have traction." },
            { title: "Builds the positioning layer", body: "Value proposition, the two to four audience segments worth separating, and the message each segment needs to hear first. Everything downstream inherits from this layer." },
            { title: "Ranks the channels", body: "Channels are weighed against your buying cycle, price point and sustainable effort, then committed to a primary, a secondary and one experiment." },
            { title: "Lays out 365 days", body: "Themed by month and by week, sequenced so awareness content lands before the offers that depend on it, and paced against launches, seasons and quiet periods." },
            { title: "Stays live", body: "The calendar is a working document. Change an input and the plan reflows rather than going stale." },
          ],
        },
        {
          type: "definitions",
          heading: "Design decisions worth knowing",
          items: [
            { label: "The ranking commits to exclusions", body: "Naming a primary, a secondary and an experiment also names everything you are choosing not to run. A narrow-looking ranking is the feature rather than a shortfall." },
            { label: "The next quarter is detailed; the rest is thematic", body: "Slot-level detail eleven months out is guesswork dressed as diligence, and it is the part of an annual plan that always gets discarded." },
            { label: "Sequencing is a dependency graph", body: "Foundational content is placed before the offers that depend on it, which is why moving one slot can move others." },
            { label: "Segments carry their objection", body: "A segment is not a demographic label. It is a buyer plus the specific reason that buyer hesitates, which is what makes it useful downstream." },
          ],
        },
      ],
      related: [
        {
          heading: "Related",
          links: [
            { label: "Content Studio", href: "content-studio" },
            { label: "Marketing Engine on the main site", href: mainUrl("/platform/marketing-engine/"), external: true },
          ],
        },
      ],
    },

    {
      path: "content-studio",
      title: "Content Studio",
      group: "Platform",
      seoTitle: "Content Studio — format-native drafting under a stored voice profile",
      seoDescription:
        "How Content Studio expands a calendar slot into a finished asset, writes to the anatomy of each format, and applies a stored voice profile across a year of output.",
      hero: {
        kind: "document",
        eyebrow: "Platform",
        title: "Content Studio",
        lead:
          "Every asset the calendar asks for, written for the platform it ships to. It starts from a slot, not from nothing.",
      },
      blocks: [
        {
          type: "steps",
          heading: "How an asset is produced",
          steps: [
            { title: "It starts from the slot", body: "The slot already carries a theme, a segment, an angle and a format, so four decisions are made before drafting begins." },
            { title: "It writes to the format", body: "Each format has an anatomy with rules. The draft is built to that structure rather than reformatted from one generic version." },
            { title: "It holds your voice", body: "A stored voice profile constrains every asset: banned words and constructions, sentence length, formality, and the claims allowed." },
            { title: "You approve in batches", body: "A week or a month arrives at once, so review is a single sitting rather than a daily interruption." },
          ],
        },
        {
          type: "definitions",
          heading: "The voice profile in detail",
          columns: 1,
          items: [
            { label: "Banned list", body: "Words, constructions and claims you never want to see are hard constraints rather than preferences. Adding to this list is the correct fix for a recurring irritation." },
            { label: "Claim rules", body: "Unprovable superlatives are rewritten into claims you could defend if challenged. Statistics and outcomes appear only where you supplied them." },
            { label: "Sector constraints", body: "Regulated sectors carry blocked-language sets, so drafts in healthcare, financial services or legal practice arrive already constrained." },
            { label: "Consistency over a year", body: "The reason voice is a stored object rather than a per-asset setting is drift. A system with no memory of its own voice produces twelve months of output that reads as machine-written." },
          ],
        },
        {
          type: "callout",
          heading: "Guardrails are not compliance",
          body:
            "They reduce the failure rate substantially; they do not make you compliant. In regulated industries human review before publication remains mandatory, and where a jurisdiction requires professional sign-off, Mengo produces drafts for that review rather than replacing it.",
          action: { label: "Responsible AI", href: mainUrl("/company/responsible-ai/"), external: true },
        },
      ],
    },

    {
      path: "campaign-lab",
      title: "Campaign Lab",
      group: "Platform",
      seoTitle: "Campaign Lab — offer, channel sequence, asset checklist and exit rule",
      seoDescription:
        "How Campaign Lab defines a campaign by its offer and its exit condition, sequences channels rather than launching them together, and sets decision rules in advance.",
      hero: {
        kind: "document",
        eyebrow: "Platform",
        title: "Campaign Lab",
        lead:
          "The full arc of a campaign, from offer to exit rule. A run of posts is not a campaign; this engine is what makes the difference explicit.",
      },
      blocks: [
        {
          type: "steps",
          heading: "The four parts",
          steps: [
            { title: "Define the offer and the exit", body: "What is being offered, to whom, and the condition under which the campaign stops — a date, a target, or a signal that the offer is not landing." },
            { title: "Sequence the channels", body: "Channels are ordered rather than run in parallel, so awareness lands before the ask and the ask is not the first thing a cold audience sees." },
            { title: "Generate the asset checklist", body: "The campaign expands into the specific assets it needs, dated. This is where an intention becomes a list with a deadline." },
            { title: "Set the decision rules in advance", body: "What you do if it works and what you do if it does not, decided before the numbers arrive. Rules set afterwards are rationalisations." },
          ],
        },
        {
          type: "definitions",
          heading: "Common structural errors",
          items: [
            { label: "The offer is not an offer", body: "“Awareness” cannot be exited. Without something a person can say yes to, a campaign runs indefinitely and is judged on numbers never tied to a decision." },
            { label: "Simultaneous launch", body: "Launching every channel at once feels like scale and behaves like noise. Sequencing exists so each channel addresses an audience the previous one warmed." },
            { label: "An exit nobody checks", body: "An exit condition only works if a review checks it. That review belongs to Growth Signal, which is why the two engines are usually configured together." },
            { label: "Competing with the calendar", body: "A campaign layers onto the calendar rather than replacing it. If it is starving your baseline content, it was scoped for capacity you do not have." },
          ],
        },
      ],
    },

    {
      path: "lead-nurturing",
      title: "Lead Nurturing",
      group: "Platform",
      seoTitle: "Lead Nurturing — intent segmentation and objection-led sequences",
      seoDescription:
        "How Mengo builds nurture sequences segmented by intent rather than by source, assigns one objection per message, and paces cadence to your real buying cycle.",
      hero: {
        kind: "document",
        eyebrow: "Platform",
        title: "Lead Nurturing",
        lead:
          "The follow-up that turns interest into a decision. For most businesses this is the shortest path from the system to a result.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why follow-up is the highest-yield engine",
          body: [
            "The first reply to an enquiry is always excellent. The second, fourth and eighth need a system, and in most businesses no system exists — which means the losses are to silence rather than to competitors.",
            "That makes nurture the cheapest place to start for anyone with existing enquiry flow. There is no new audience to build; the people are already there.",
          ],
        },
        {
          type: "definitions",
          heading: "How sequences are constructed",
          items: [
            { label: "One objection per message", body: "Each message removes a single obstacle. A message handling four objections handles none of them well and reads as a brochure." },
            { label: "Segmented by intent, not source", body: "Someone who asked for a price and someone who downloaded a guide are at different points. Segmenting by origin rather than signal is the most common structural error." },
            { label: "Paced to the buying cycle", body: "Cadence comes from how long your buyers actually take. A seven-day sequence aimed at a six-month purchase is pressure rather than follow-up." },
            { label: "Re-engagement is separate", body: "People who went quiet need a different argument from people who never replied. Mixing them produces messages that assume a conversation that did not happen." },
          ],
        },
        {
          type: "callout",
          heading: "Sequences export; they do not send",
          body:
            "Mengo writes and structures. Sending happens in the email or CRM tool you already run, which keeps deliverability, consent records and sender reputation with you.",
          action: { label: "Lead workflow", href: "lead-workflow" },
        },
      ],
    },

    {
      path: "growth-signal",
      title: "Growth Signal",
      group: "Platform",
      seoTitle: "Growth Signal — fewer numbers, each attached to a decision",
      seoDescription:
        "How Growth Signal selects a small metric set, attaches a decision to every number, defines an explicit stop-watching list, and sets weekly, monthly and quarterly agendas.",
      hero: {
        kind: "document",
        eyebrow: "Platform",
        title: "Growth Signal",
        lead:
          "Fewer numbers, each attached to a decision. A metric that cannot change what you do next is a number you are reading for reassurance.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "What it produces",
          items: [
            "A defined metric set, with a decision attached to each number",
            "An explicit stop-watching list — the metrics you have decided to ignore",
            "Weekly, monthly and quarterly review agendas",
            "A funnel diagnostic showing where the drop-off actually is",
          ],
        },
        {
          type: "editorial",
          heading: "Why the set is deliberately small",
          sections: [
            {
              heading: "A metric without a decision is decoration",
              body: "The test applied to every number is: if this moves, what do I do differently? If there is no answer, the number goes on the stop-watching list. That list is as much of the output as the metric set is, because deciding what to ignore is what makes a review survive a busy week.",
            },
            {
              heading: "The review rhythm is part of the design",
              body: "A number nobody looks at on a schedule is not a metric, it is a dashboard. Weekly, monthly and quarterly agendas are fixed and short, which is what makes them survivable when the week goes wrong — the point at which measurement usually stops.",
            },
            {
              heading: "Conclusions feed back upstream",
              body: "Review outcomes update the calendar and the channel ranking. That loop is what stops the system drifting away from reality, and it is why measurement sits inside the platform rather than beside it.",
            },
          ],
        },
      ],
    },

    /* --- Workflows ---------------------------------------------------- */
    {
      path: "content-workflow",
      title: "Content workflow",
      group: "Workflows",
      seoTitle: "Content workflow — planning, creation, repurposing and approval",
      seoDescription:
        "The weekly and monthly loop for content in Mengo: how planning inherits from the calendar, how assets are created and reviewed in batches, and how repurposing works.",
      hero: {
        kind: "document",
        eyebrow: "Workflows",
        title: "Content workflow",
        lead:
          "The loop you actually run. Planning is inherited rather than performed; the work is review, and the skill is reviewing at the right altitude.",
      },
      blocks: [
        {
          type: "steps",
          heading: "The loop",
          steps: [
            { title: "Planning", body: "Already done. The calendar carries themes by month and week; the next quarter is detailed to slot level. Planning here means checking the coming month against anything that changed in the business." },
            { title: "Creation", body: "Slots expand into briefs and then into finished assets, written to the anatomy of their format. This is generated rather than commissioned." },
            { title: "Review", body: "A batch arrives at once. Read for argument first, then for writing. Reject specifically so only the failing part regenerates." },
            { title: "Repurposing", body: "Reuse happens at the idea level rather than the text level, so an argument can produce a different asset in a different format rather than the same text reformatted." },
            { title: "Approval", body: "Approve in batches. Approving asset by asset as they arrive reintroduces the daily decision the system exists to remove." },
          ],
        },
        {
          type: "definitions",
          heading: "Reviewing at the right altitude",
          items: [
            { label: "First pass: argument", body: "Is this the right point to the right segment at the right time? Line-editing an asset that should not exist is the main way a review overruns." },
            { label: "Second pass: writing", body: "Only after the argument holds. Tone problems that recur belong in the voice profile rather than in the asset." },
            { label: "Never: the calendar", body: "If a slot is wrong, change the slot. Rewriting an asset to be about something else leaves the calendar claiming it covered a theme it did not." },
          ],
        },
      ],
    },

    {
      path: "campaign-workflow",
      title: "Campaign workflow",
      group: "Workflows",
      seoTitle: "Campaign workflow — planning, execution and measurement",
      seoDescription:
        "Running a campaign in Mengo end to end: scoping against real capacity, executing a sequenced channel plan, and measuring against rules set before the campaign started.",
      hero: {
        kind: "document",
        eyebrow: "Workflows",
        title: "Campaign workflow",
        lead:
          "Planning, execution and measurement for a campaign — including the part most campaigns skip, which is deciding in advance what the result will mean.",
      },
      blocks: [
        {
          type: "steps",
          heading: "End to end",
          steps: [
            { title: "Scope against capacity", body: "A campaign layers onto the standing calendar. Scope it for the effort left over, not for the effort you wish you had." },
            { title: "Define the offer and the exit", body: "Something a person can say yes to, and the condition under which the campaign stops." },
            { title: "Sequence and generate", body: "Order the channels, then generate the dated asset checklist the campaign needs." },
            { title: "Execute in your own tools", body: "Publishing, sending and spend happen where they already happen. Mengo produced the plan and the assets." },
            { title: "Measure against the pre-set rules", body: "Compare to the decision rules written before launch. This is the step that makes a campaign a learning rather than an anecdote." },
          ],
        },
        {
          type: "table",
          heading: "What to decide before launch",
          intro: "Each of these is much harder to answer honestly once results exist.",
          columns: ["Decision", "Written before launch", "Why it matters"],
          rows: [
            ["Success", "The number and the threshold", "Prevents a mediocre result being reframed as a learning experience"],
            ["Failure", "The signal that says stop", "Campaigns without a stop condition decay instead of ending"],
            ["Promotion", "What gets moved into the standing calendar if it works", "Otherwise a successful campaign produces nothing durable"],
            ["Attribution", "How you will know it was this", "Decided afterwards, attribution becomes an argument"],
          ],
        },
      ],
    },

    {
      path: "lead-workflow",
      title: "Lead workflow",
      group: "Workflows",
      seoTitle: "Lead workflow — capture, segmentation, nurturing and scoring",
      seoDescription:
        "How leads move through Mengo: what capture means when the system does not host your forms, how intent segmentation works, and where scoring sits.",
      hero: {
        kind: "document",
        eyebrow: "Workflows",
        title: "Lead workflow",
        lead:
          "Capture, segmentation, nurturing and scoring — and a clear line around which of those happen inside Mengo and which happen in your own stack.",
      },
      blocks: [
        {
          type: "table",
          heading: "Where each step happens",
          intro:
            "This boundary causes more confusion than any other part of the product, so it is worth stating plainly.",
          columns: ["Step", "Where it happens", "What Mengo contributes"],
          rows: [
            ["Capture", "Your site, forms and ad platforms", "Landing page copy, form framing and the offer that earns the details"],
            ["Segmentation", "Your CRM or email tool", "The intent segments and the rules that define them"],
            ["Nurturing", "Your sending tool", "The sequences: message order, objection per message, cadence"],
            ["Scoring", "Your CRM", "The signal definitions worth scoring on, and what each score should trigger"],
            ["Review", "Growth Signal", "The drop-off diagnostic and the decision attached to it"],
          ],
        },
        {
          type: "checklist",
          heading: "Before turning a sequence on",
          items: [
            "Check the objections in the sequence are the ones you actually hear, not the ones easiest to write.",
            "Confirm cadence against a real recent deal rather than an average.",
            "Make sure consent for the contacts is genuine and recorded in your own system.",
            "Decide what a reply does — a sequence that keeps sending after someone answers is worse than none.",
            "Set the exit: what removes someone, and where they go next.",
          ],
        },
      ],
    },

    {
      path: "administration",
      title: "Administration",
      group: "Workflows",
      seoTitle: "Administration — account, settings, teams and permissions",
      seoDescription:
        "What is documented about administering Mengo, and what is awaiting product decisions: account structure, settings, team management and the permission model.",
      hero: {
        kind: "document",
        eyebrow: "Workflows",
        title: "Administration",
        lead:
          "The shortest page in this documentation, and honestly so. Mengo is pre-launch, and most administrative surfaces are not published.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What is settled",
          body: [
            "Two things can be documented today because they follow from product decisions already made. Your work belongs to your business — the brief, strategy layer, calendar, assets and sequences are artefacts you keep rather than access you rent. And Mengo holds no credentials for your channels, because it does not publish or send, so there is no access to grant, audit or revoke.",
            "Everything else on this page depends on objects that do not exist yet.",
          ],
        },
        {
          type: "pending",
          heading: "Account structure, settings, teams and permissions",
          body:
            "Whether accounts are personal or organisational, how seats work, which roles exist and what each can do are unpublished product decisions. Documenting a permission model before it is built is how a security review ends up citing a document that describes nothing real.",
          needs: [
            "Account model: per-person, per-organisation, or both",
            "The role and permission matrix, if more than one role exists",
            "Settings that are account-level versus brief-level",
            "Audit logging, if any, and what it records",
            "Data export formats and the retention period after closure",
          ],
          action: { label: "Account help in the support centre", href: siteUrl("support", "account"), external: true },
        },
      ],
    },

    /* --- Resources ---------------------------------------------------- */
    {
      path: "glossary",
      title: "Glossary",
      group: "Resources",
      seoTitle: "Glossary — the terms this documentation uses precisely",
      seoDescription:
        "Definitions for the terms Mengo's documentation uses in a specific way: strategy layer, slot, format anatomy, voice profile, objection, intent segment and stop-watching list.",
      hero: {
        kind: "document",
        eyebrow: "Resources",
        title: "Glossary",
        lead:
          "Terms this documentation uses precisely rather than loosely. Where a word has a general marketing meaning and a specific Mengo meaning, the specific one is given.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "Terms",
          columns: 1,
          items: [
            { label: "Business brief", body: "The guided questionnaire that is the system's only input, and the document its answers become." },
            { label: "Strategy layer", body: "The generated, editable, versioned set of positioning, segments, offer ladder and channel ranking. Everything downstream inherits from it." },
            { label: "Slot", body: "A dated calendar position carrying a theme, a segment, an angle and a format." },
            { label: "Format anatomy", body: "The structural rules of a specific asset format, which the draft is built to rather than poured into." },
            { label: "Voice profile", body: "Stored, hard constraints on how output is written: banned words, sentence length, formality and permitted claims." },
            { label: "Objection", body: "The specific reason a specific segment hesitates. Held on the segment, and assigned one per nurture message." },
            { label: "Intent segment", body: "A grouping by what someone signalled rather than by where they came from." },
            { label: "Offer ladder", body: "The ordered set of things a buyer can say yes to, from lowest to highest commitment." },
            { label: "Channel ranking", body: "One primary channel, one secondary and one experiment — and by implication everything you are choosing not to run." },
            { label: "Stop-watching list", body: "Metrics explicitly decided against. Part of the Growth Signal output rather than an absence in it." },
            { label: "Exit rule", body: "The pre-declared condition that ends a campaign." },
            { label: "Reflow", body: "The propagation of an upstream edit through the calendar, assets and sequences that inherited from it." },
          ],
        },
        {
          type: "callout",
          heading: "The marketing glossary is elsewhere",
          body:
            "This glossary covers terms specific to the Mengo system. General marketing vocabulary — positioning, attribution, nurture, and the rest — is defined on the main site.",
          action: { label: "Marketing glossary", href: mainUrl("/glossary/"), external: true },
        },
      ],
    },

    {
      path: "faq",
      title: "Documentation FAQ",
      navLabel: "FAQ",
      group: "Resources",
      seoTitle: "Documentation FAQ — scope, accuracy and what is missing",
      seoDescription:
        "Questions about the Mengo documentation itself: what it covers, why some sections are marked as awaiting content, and where to go for answers it does not hold.",
      hero: {
        kind: "document",
        eyebrow: "Resources",
        title: "Documentation FAQ",
        lead: "Questions about these documents rather than about the product.",
      },
      blocks: [
        {
          type: "faq",
          heading: "About this documentation",
          items: [
            {
              q: "Why are several sections marked as awaiting content?",
              a: "Because Mengo is pre-launch and those surfaces are not published. Documenting an unbuilt sign-up flow or permission model is how documentation and product diverge on day one — and a security reviewer citing a fictional permission matrix is a worse outcome than an honest gap.",
            },
            {
              q: "Is this documentation versioned?",
              a: "The structure is built to be, and pages carry the concepts rather than screenshots for that reason. Version labelling starts when there is a released version to label.",
            },
            {
              q: "Where do I report something inaccurate here?",
              a: "Through the support contact route, naming the page. Documentation that has drifted from behaviour is treated as a defect rather than a copy issue.",
            },
            {
              q: "What is the difference between this and the help centre?",
              a: "This describes the system in order; the help centre answers questions and diagnoses problems. If you are learning Mengo, read here. If something is wrong, start there.",
            },
            {
              q: "Is there API documentation?",
              a: "There is a developer portal with the information architecture for it, and an explicit statement that no public API has been published. Nothing there describes endpoints that do not exist.",
            },
          ],
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "Help centre", href: siteUrl("support"), external: true },
            { label: "Developer portal", href: siteUrl("developers"), external: true },
            { label: "System status", href: siteUrl("status"), external: true },
          ],
        },
      ],
    },
  ],
};
