import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The support centre.
 *
 * Register: utility. Search first, categories second, prose third — a reader
 * arriving here has a specific question and every element between them and the
 * answer is a cost.
 *
 * What this site can and cannot say. Mengo is pre-launch and building against a
 * waitlist, which means there is no ticketing system, no published pricing and
 * no customer history to describe. What there *is* is a documented product with
 * five engines, a documented set of things it deliberately does not do, and a
 * genuine set of workflows and failure modes that follow from both. That is
 * what this site explains. Anything requiring a commercial fact we have not
 * published — plan names, refund windows, response times — renders as an
 * approved-content block rather than a plausible invention.
 */
export const support: SubSite = {
  key: "support",
  name: "Mengo Support",
  shortName: "Support",
  tagline: "Help with the Mengo platform",
  description:
    "Guidance for using Mengo: getting started, the five engines, account and billing questions, and what to do when output is not what you expected.",
  register: "utility",
  sidebar: true,
  nav: [
    { label: "Home", path: "" },
    { label: "Topics", path: "search" },
    { label: "Getting started", path: "getting-started" },
    { label: "Troubleshooting", path: "troubleshooting" },
    { label: "FAQ", path: "faq" },
    { label: "Contact", path: "contact" },
  ],
  pages: [
    /* ---------------------------------------------------------------- */
    {
      path: "",
      title: "Mengo Support",
      seoTitle: "Mengo Support — help with strategy, content, campaigns and follow-up",
      seoDescription:
        "Search the Mengo help centre, or browse guidance on getting started, the five engines, account and billing, and what to do when output is not what you expected.",
      hero: {
        kind: "search",
        eyebrow: "Help centre",
        title: "What do you need help with?",
        lead:
          "Search the help centre, or start from one of the areas below. Every article here describes how Mengo actually behaves — where something is not yet decided, the page says so rather than guessing.",
        placeholder: "Try “voice profile”, “billing” or “the calendar is wrong”",
      },
      blocks: [
        {
          type: "index",
          heading: "Start here",
          intro:
            "Four routes into the help centre, in the order most people need them.",
          links: [
            {
              label: "Getting started",
              href: "getting-started",
              blurb:
                "What the guided brief asks for, what arrives afterwards, and what a first useful week looks like.",
            },
            {
              label: "Help with the platform",
              href: "platform",
              blurb:
                "The five engines, how they share one brief, and which engine owns the thing you are trying to change.",
            },
            {
              label: "Account and access",
              href: "account",
              blurb: "Signing in, the waitlist, your data, and how to leave with your work.",
            },
            {
              label: "Troubleshooting",
              href: "troubleshooting",
              blurb:
                "The output is generic, the calendar looks wrong, the tone is off — the common failures and their causes.",
            },
          ],
        },
        {
          type: "definitions",
          heading: "How support here is different",
          intro:
            "Two things about this help centre are worth knowing before you use it, because they change what you should expect to find.",
          items: [
            {
              label: "It documents behaviour, not aspiration",
              body: "Every article describes what Mengo does today. Where a capability is planned but not built, the article says planned rather than describing it in the present tense — which is the single most common way product documentation misleads people.",
            },
            {
              label: "It is honest about gaps",
              body: "Mengo is early. Several things a mature help centre would answer — plan pricing, refund terms, guaranteed response times — are not decided yet. Those sections are marked as awaiting approved content instead of being filled with something reasonable-sounding.",
            },
            {
              label: "Most problems are brief problems",
              body: "Because every engine reads from the same business brief, a surprising share of “the output is wrong” questions resolve to “the brief said something you did not mean”. The troubleshooting guide starts there for that reason.",
            },
            {
              label: "It will not resolve your account for you",
              body: "There is no ticket queue behind this site yet. The contact page explains what does exist and what happens when you use it, which is a direct reply rather than a support process.",
            },
          ],
        },
        {
          type: "index",
          heading: "Help by engine",
          intro:
            "Mengo is five engines reading from one brief. If you know which part of the system your question is about, start there.",
          links: [
            {
              label: "Marketing Engine",
              href: "platform",
              blurb: "Positioning, audience segments, channel ranking and the 365-day calendar.",
            },
            {
              label: "Content Studio",
              href: "content-studio",
              blurb: "Assets written to the format they ship in, and the voice profile that constrains them.",
            },
            {
              label: "Campaign Lab",
              href: "campaign-lab",
              blurb: "An offer, the sequence of channels behind it, and the rule that ends it.",
            },
            {
              label: "Lead Nurturing",
              href: "lead-nurturing",
              blurb: "Segmented follow-up, one objection per message, paced to your buying cycle.",
            },
          ],
        },
        {
          type: "callout",
          heading: "Looking for the product documentation instead?",
          body:
            "This site answers questions. The documentation site describes the system in order, from core concepts through to administration, and is the better starting point if you are learning Mengo rather than unblocking something.",
          action: { label: "Go to the documentation", href: siteUrl("docs"), external: true },
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "Product documentation", href: siteUrl("docs"), external: true },
            { label: "System status", href: siteUrl("status"), external: true },
            { label: "How Mengo works", href: mainUrl("/company/how-it-works/"), external: true },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "about-support",
      title: "How Mengo support works",
      navLabel: "How support works",
      group: "About this site",
      seoTitle: "How Mengo support works — what to expect when you ask for help",
      seoDescription:
        "What the Mengo help centre covers, how questions reach us while the product is pre-launch, and which kinds of problem are best solved by editing your brief instead.",
      hero: {
        kind: "document",
        eyebrow: "About this site",
        title: "How support works",
        lead:
          "Mengo is early, and the support model reflects that. This page sets out what exists today so you are not waiting on a process that has not been built.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What this site is",
          body: [
            "This is a written help centre. It covers how Mengo behaves, what each engine is responsible for, the failure modes people run into most often, and the questions that come up before anyone has used the product at all. It is maintained alongside the product rather than written once at launch.",
            "It is not a ticketing system, and there is no chat widget hiding in the corner. Mengo is pre-launch and building against a waitlist, so the honest description of support today is that questions reach a small team directly and are answered by a person, usually the founder. That is slower than a staffed queue in the worst case and considerably faster in the typical one.",
          ],
        },
        {
          type: "steps",
          heading: "The order worth trying",
          intro:
            "Most questions about generated output resolve one step earlier than people expect. This is the sequence that wastes the least time.",
          steps: [
            {
              title: "Check the brief",
              body: "Every engine inherits from the business brief. If positioning, segments or constraints are wrong there, everything downstream will be confidently wrong in the same direction. This is the single highest-yield check.",
            },
            {
              title: "Check the voice profile",
              body: "Tone complaints are almost never a model problem. They are a stored-voice problem: banned words, sentence length, formality and the claims you allow are constraints the system applies, and they are editable.",
            },
            {
              title: "Read the article for that engine",
              body: "Each engine owns a specific decision. Knowing which one owns yours tells you where the setting lives — and often that the thing you want to change is upstream of where you were looking.",
            },
            {
              title: "Check troubleshooting",
              body: "The common failures — generic output, a calendar that ignores your season, sequences that read as one long argument — have documented causes rather than being general quality problems.",
            },
            {
              title: "Ask",
              body: "If none of that resolves it, the contact page explains exactly what happens when you write in and what to include so the first reply is useful rather than a request for more detail.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Response times and support tiers",
          body:
            "A mature help centre states how quickly you will hear back and what differs between plans. Mengo has not published either, and inventing a service level here would create an expectation nobody has agreed to meet.",
          needs: [
            "An agreed first-response target, and the hours it applies within",
            "Whether support differs by plan, once plans exist",
            "An escalation path for account, billing and data requests",
            "The channel of record — email address, form, or a ticketing tool",
          ],
          action: { label: "What contacting us does today", href: "contact" },
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "getting-started",
      title: "Getting started with Mengo",
      navLabel: "Getting started",
      group: "Using Mengo",
      seoTitle: "Getting started with Mengo — the brief, the strategy layer and your first week",
      seoDescription:
        "What the guided business brief asks for, how to answer it well, what Mengo returns afterwards, and what a realistic first week of using the output looks like.",
      hero: {
        kind: "document",
        eyebrow: "Using Mengo",
        title: "Getting started",
        lead:
          "Mengo asks for one thing and returns a system. This page covers what it asks, how to answer it so the output is worth using, and what to do with the first week of it.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The only input is the brief",
          body: [
            "There are no integrations to connect and no onboarding call. Mengo starts from a guided questionnaire about your business: what you sell, who buys it, what they pay, what stops them buying, and where you already have some traction.",
            "The reason it works from memory rather than from your data is that the questions are about judgement rather than history. No analytics export can tell Mengo which objection loses you the most deals. You can, in a sentence.",
          ],
        },
        {
          type: "definitions",
          heading: "How to answer the brief well",
          intro:
            "The brief is the highest-leverage twenty minutes you will spend in the product. Four habits separate a brief that produces useful output from one that produces plausible output.",
          columns: 1,
          items: [
            {
              label: "Name the buyer, not the market",
              body: "“Operations managers at 20–80 person logistics firms who have just lost a contract” produces different content from “SMEs”. The second is a market; the first is a person with a bad week, and the system can write to a person.",
            },
            {
              label: "Write the objection in their words",
              body: "The objection field is doing more work than any other. If prospects say “we tried something like this and it sat unused”, put that. Paraphrasing it into “concerns about adoption” strips out the thing that makes a rebuttal land.",
            },
            {
              label: "Be honest about capacity",
              body: "Channel ranking weighs what you can sustain, not what is theoretically optimal. If you will realistically post twice a week, say twice a week. A plan built for five posts a week that you abandon in month two is worse than one built for two that survives.",
            },
            {
              label: "Flag the quiet periods",
              body: "Launches, seasons, closures and the months your buyers disappear all change the calendar's shape. Omitting them is the most common reason a first calendar feels subtly wrong without anyone being able to say why.",
            },
          ],
        },
        {
          type: "steps",
          heading: "What arrives, in order",
          steps: [
            {
              title: "The strategy layer",
              body: "Positioning, two to four audience segments, an offer ladder and a ranked channel strategy that commits to one primary channel, one secondary and one experiment. Editable and versioned.",
            },
            {
              title: "The year",
              body: "A 365-day calendar themed by month and by week, sequenced so foundational content lands before the offers that depend on it. The next quarter is detailed to slot level; the rest stays thematic until it is closer.",
            },
            {
              title: "The assets",
              body: "Each slot expands into a brief and then into finished content written to the anatomy of the format it ships in. Content arrives a week or a month at a time so review is a single sitting.",
            },
            {
              title: "The follow-up",
              body: "Nurture sequences per intent level, each message assigned one objection, paced to your buying cycle.",
            },
            {
              title: "The review rhythm",
              body: "A small metric set with a decision attached to every number, and weekly, monthly and quarterly agendas short enough to survive a busy week.",
            },
          ],
        },
        {
          type: "checklist",
          heading: "A realistic first week",
          intro:
            "The failure mode for a new system is trying to run all of it at once. This is the order that tends to hold.",
          items: [
            "Read the strategy layer end to end before looking at any content. If the positioning is wrong, every asset will be wrong in the same way and reviewing them individually wastes the week.",
            "Correct the brief rather than editing individual assets. A correction upstream reflows what follows; an edit downstream fixes one artefact and leaves the cause in place.",
            "Approve one week of content, not one month, until the voice profile has settled.",
            "Set up the follow-up sequences before chasing more traffic. Most businesses lose more to silence after an enquiry than to a shortage of enquiries.",
            "Pick the three numbers you will actually look at, and ignore the rest until the quarterly review.",
          ],
        },
        {
          type: "faq",
          heading: "Before you start",
          items: [
            {
              q: "How long does the brief take?",
              a: "It is a single guided pass rather than a form you save and return to. The questions are ones you can answer from memory about your own business; the time is spent deciding what you actually think, not looking things up.",
            },
            {
              q: "Do I need existing marketing to start?",
              a: "No. The brief asks where you already have traction because that information improves channel ranking, but “none yet” is a valid and common answer that the ranking handles.",
            },
            {
              q: "Can I change the strategy layer after it is generated?",
              a: "Yes — it is editable and versioned, and it is designed to be edited. Everything downstream inherits from it, which is why correcting it reflows the calendar rather than requiring a rewrite.",
            },
            {
              q: "Will Mengo publish or send anything for me?",
              a: "No. It writes and structures; publishing, sending and ad spend stay in the tools you already use. That keeps your deliverability, consent records and account access under your control.",
            },
          ],
        },
      ],
      related: [
        {
          heading: "Next",
          links: [
            { label: "Help with the platform", href: "platform" },
            { label: "Troubleshooting", href: "troubleshooting" },
            { label: "Core concepts in the documentation", href: siteUrl("docs", "concepts"), external: true },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "account",
      title: "Account and access",
      navLabel: "Account and access",
      group: "Using Mengo",
      seoTitle: "Account and access — sign-in, the waitlist, your data and leaving Mengo",
      seoDescription:
        "How access to Mengo works during the waitlist period, what happens to the work you create, and how data requests are handled under the published privacy policy.",
      hero: {
        kind: "document",
        eyebrow: "Using Mengo",
        title: "Account and access",
        lead:
          "How access works while Mengo is pre-launch, what happens to your work, and where the answers that are legally binding actually live.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Access during the waitlist period",
          body: [
            "Mengo is not generally available. Access opens in batches from the waitlist, and what gets built next is decided partly by what people on that list say they need. Joining the list is a request for access and a description of your situation, not a purchase.",
            "That means several account questions a general-availability product would answer — plan changes, seat management, organisation-level roles — do not have answers yet, because the objects they refer to do not exist. Where that is the case this site says so rather than describing a control you cannot find.",
          ],
        },
        {
          type: "definitions",
          heading: "What is settled",
          intro:
            "These answers are stable because they follow from published policy or from product decisions that are already made.",
          items: [
            {
              label: "Your work stays yours",
              body: "The brief, positioning, calendar, assets and sequences belong to your business. The product is designed so the system is something you keep rather than something you rent access to, which is the difference the comparison pages draw against an agency retainer.",
            },
            {
              label: "Mengo does not hold your channels",
              body: "There is no account access to hand over and none to revoke. Publishing, sending and ad spend stay in your own tools, so leaving Mengo does not strand your audience or your deliverability.",
            },
            {
              label: "Everything is exportable in principle",
              body: "Output is text and structure rather than a proprietary artefact — a calendar, a set of documents, a set of sequences. The specific export formats are documented on the docs site as they ship.",
            },
            {
              label: "Privacy is governed by the published policy",
              body: "Data handling, retention and your rights over your data are covered by the privacy policy on the main site, which is the binding document. Nothing on this page overrides it.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Sign-in, seats and organisation settings",
          body:
            "How you sign in, whether teams share an organisation, and what roles exist are product decisions that are not published. Describing them here would create expectations about a screen that may not look like that.",
          needs: [
            "The authentication method offered at launch",
            "Whether accounts are per-person or per-organisation, and how seats work",
            "The role and permission model, if there is more than one role",
            "Account recovery and deletion routes, aligned to the privacy policy",
          ],
          action: { label: "Read the privacy policy", href: mainUrl("/legal/privacy-policy/"), external: true },
        },
        {
          type: "faq",
          heading: "Common account questions",
          items: [
            {
              q: "How do I get access?",
              a: "Join the waitlist and describe what is actually broken in your marketing. Access opens in batches, and the description matters — it is used to decide who is a good fit for the current state of the product.",
            },
            {
              q: "What happens to my brief if I stop using Mengo?",
              a: "The work is yours. Because the output is documents and structure rather than a hosted-only artefact, the practical answer is that you keep what you have exported and generated. The exact retention period after an account closes is governed by the privacy policy.",
            },
            {
              q: "Does Mengo need access to my social or email accounts?",
              a: "No, and this is deliberate. Mengo writes and structures; it does not publish or send. There is no OAuth connection to grant and no token to revoke, which is why an account compromise at Mengo cannot become a posting incident on your channels.",
            },
          ],
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "Privacy policy", href: mainUrl("/legal/privacy-policy/"), external: true },
            { label: "Terms of service", href: mainUrl("/legal/terms-of-service/"), external: true },
            { label: "Billing", href: "billing" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "billing",
      title: "Billing and subscription",
      navLabel: "Billing",
      group: "Using Mengo",
      seoTitle: "Billing and subscription — what is published about paying for Mengo",
      seoDescription:
        "Mengo is pre-launch and pricing is not published. This page explains what that means for the waitlist, and what billing information will appear here once it is agreed.",
      hero: {
        kind: "document",
        eyebrow: "Using Mengo",
        title: "Billing and subscription",
        lead:
          "Pricing is not published yet. Rather than describe a plan structure that does not exist, this page sets out what is true today and what will appear here when it changes.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Where things stand",
          body: [
            "Mengo is pre-launch and building against a waitlist. Joining the waitlist costs nothing and commits you to nothing; it is a request for access, not a subscription.",
            "Because no plans have been published, every question that depends on them — what a plan includes, how billing cycles work, what happens when you cancel — has no answer that could be given here honestly. The structure below is what this page will contain, so that when the commercial model is agreed the information appears in one predictable place rather than being scattered through a marketing page.",
          ],
        },
        {
          type: "pending",
          heading: "Plans, pricing and billing terms",
          body:
            "This is the section a reader comes to this page for, and it is exactly the section that cannot be written without approved commercial decisions. A plausible-looking price table here would be the most damaging invention anywhere in this ecosystem: people make budget decisions on it.",
          needs: [
            "Plan names, what each includes, and the price in each currency offered",
            "Billing cycle, proration behaviour, and how mid-cycle changes are handled",
            "Payment methods accepted and the payment processor of record",
            "Cancellation, refund and dunning policy, consistent with the terms of service",
            "Tax treatment and invoicing for business customers",
          ],
          action: { label: "Join the waitlist", href: mainUrl("/get-started/"), external: true },
        },
        {
          type: "faq",
          heading: "What can be answered now",
          items: [
            {
              q: "Does joining the waitlist cost anything?",
              a: "No. It is a request for access and a description of your situation. There is no card involved and no commitment on either side.",
            },
            {
              q: "Will there be a free tier?",
              a: "Not decided, or at least not decided publicly. Anything said here would be a guess, and a guess about pricing is the kind that gets quoted back later.",
            },
            {
              q: "Who do I talk to about invoicing for a business?",
              a: "Until billing exists there is nothing to invoice. Procurement and vendor-side questions — the direction where Mengo is the supplier — are handled through the vendor portal.",
            },
          ],
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "Terms of service", href: mainUrl("/legal/terms-of-service/"), external: true },
            { label: "Vendor portal", href: siteUrl("vendors"), external: true },
            { label: "Account and access", href: "account" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "platform",
      title: "Help with the platform",
      navLabel: "Platform",
      group: "By engine",
      seoTitle: "Platform help — the five engines and which one owns your question",
      seoDescription:
        "Mengo is five engines reading from one business brief. This page explains what each engine decides, so you know where to change the thing you are trying to change.",
      hero: {
        kind: "document",
        eyebrow: "By engine",
        title: "Help with the platform",
        lead:
          "Five engines, one brief between them. Most support questions are really questions about which engine owns a decision — this page answers that first.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why the shared brief matters for support",
          body: [
            "Each engine solves one part of the marketing function, and every one of them reads from the same business brief. That shared context is what stops a year of output sounding like it came from five different companies — and it is also why support here works upstream.",
            "If an asset is wrong, the cause is usually not in the asset. It is in the layer the asset inherited from: the positioning, the segment, the channel ranking or the voice profile. Fixing it at the source reflows everything downstream; fixing it in the asset leaves the cause running.",
          ],
        },
        {
          type: "table",
          heading: "Which engine owns what",
          intro:
            "If you know the decision you want to change, this tells you where it lives.",
          columns: ["Engine", "Owns the decision about", "Change it here when"],
          rows: [
            [
              "Marketing Engine",
              "Positioning, audience segments, offer ladder, channel ranking, the 365-day calendar",
              "The plan is aimed at the wrong person, the wrong channel, or the wrong time of year",
            ],
            [
              "Content Studio",
              "Asset formats, format anatomy, the stored voice profile, drafting and batch approval",
              "The argument is right but the writing is wrong — tone, length, structure or claims",
            ],
            [
              "Campaign Lab",
              "Campaign offers, channel sequencing, asset checklists, the rule that ends a campaign",
              "A push needs a beginning, a middle and a defined exit rather than more posts",
            ],
            [
              "Lead Nurturing",
              "Intent segmentation, objection mapping, message cadence, re-engagement paths",
              "Enquiries arrive and then go quiet, or follow-up stops after the first reply",
            ],
            [
              "Growth Signal",
              "Which numbers are tracked, the decision attached to each, and the review agenda",
              "You are looking at metrics that never change what you do next",
            ],
          ],
        },
        {
          type: "definitions",
          heading: "Things that surprise people",
          items: [
            {
              label: "The calendar is a working document",
              body: "It is not a PDF generated once. Change your offer, add a segment or drop a channel and the plan reflows. If yours looks stale, the usual cause is that the change was made in an asset rather than in the strategy layer.",
            },
            {
              label: "The next quarter is detailed; the rest is thematic",
              body: "This is deliberate rather than incomplete. Slot-level detail eleven months out is guesswork dressed as diligence, and it is the part of an annual plan that always gets thrown away.",
            },
            {
              label: "Channel ranking commits to what you drop",
              body: "The strategy names one primary channel, one secondary and one experiment — and by implication everything you are choosing not to run. If the ranking looks narrow, that is the feature.",
            },
            {
              label: "Claims are constrained, not invented",
              body: "Statistics and customer outcomes appear only where you supplied them. If an asset has an obvious gap where a number should be, the guardrails put it there on purpose rather than filling it with something plausible.",
            },
          ],
        },
        {
          type: "callout",
          heading: "Looking for the reference rather than the answer?",
          body:
            "The documentation site covers each engine in order, with the concepts underneath them. This page is for working out where to look; that one is for reading.",
          action: { label: "Platform documentation", href: siteUrl("docs", "platform"), external: true },
        },
      ],
      related: [
        {
          heading: "By engine",
          links: [
            { label: "Content Studio help", href: "content-studio" },
            { label: "Campaign Lab help", href: "campaign-lab" },
            { label: "Lead Nurturing help", href: "lead-nurturing" },
          ],
        },
        {
          heading: "Elsewhere",
          links: [
            { label: "The platform on the main site", href: mainUrl("/platform/"), external: true },
            { label: "Troubleshooting", href: "troubleshooting" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "content-studio",
      title: "Content Studio help",
      navLabel: "Content Studio",
      group: "By engine",
      seoTitle: "Content Studio help — formats, voice profile and batch approval",
      seoDescription:
        "How Content Studio writes to a format rather than reformatting one draft, how the stored voice profile constrains output, and how to review a month of assets in one sitting.",
      hero: {
        kind: "document",
        eyebrow: "By engine",
        title: "Content Studio",
        lead:
          "The engine that turns a calendar slot into a finished asset. Most questions here are about voice, format or the review loop.",
      },
      blocks: [
        {
          type: "prose",
          heading: "It starts from the slot, not from nothing",
          body: [
            "Content Studio never opens a blank page. Every asset begins as a calendar slot that already carries a theme, an audience segment, an angle and a format — which is the difference between generating content and generating this week's content for this segment about this objection.",
            "It then writes to the anatomy of the format it ships in. A carousel is not a blog post cut into slides, and a short-form video script is not a caption with line breaks. Each format has a structure with rules, and the draft is built to that structure rather than poured into it.",
          ],
        },
        {
          type: "definitions",
          heading: "The voice profile",
          intro:
            "Almost every complaint about tone is a voice profile question. It is a stored object, it is editable, and it constrains every asset the studio produces.",
          columns: 1,
          items: [
            {
              label: "It is a constraint, not a style suggestion",
              body: "Banned words and constructions are hard constraints rather than preferences. If a word keeps appearing that you never want to see, adding it to the banned list is the fix — editing it out of individual assets is not.",
            },
            {
              label: "It holds across a year of output",
              body: "The reason a stored profile exists rather than a per-asset tone setting is consistency at volume. Twelve months of assets written by a system with no memory of its own voice will drift, and the drift is what reads as machine-written.",
            },
            {
              label: "It is downstream of positioning",
              body: "Voice governs how something is said. What is said comes from the strategy layer. If the assets sound right but argue for the wrong thing, the voice profile is not where to look.",
            },
            {
              label: "Claim rules live here too",
              body: "Unprovable superlatives are rewritten into claims you could defend if challenged, and regulated sectors carry blocked-language sets so drafts arrive already constrained.",
            },
          ],
        },
        {
          type: "steps",
          heading: "Reviewing a batch",
          intro:
            "Content arrives a week or a month at a time so review is a single sitting rather than a daily interruption. This is how to make that sitting short.",
          steps: [
            {
              title: "Read for argument first",
              body: "Skim the batch for whether each asset is making the right point to the right segment. Line-editing an asset that should not exist is the most common way a review runs long.",
            },
            {
              title: "Reject specifically",
              body: "Rejections name the failing part — the hook, the close, a claim — so only that part regenerates. A blanket rejection throws away the parts that were fine and gives the system nothing to learn from.",
            },
            {
              title: "Promote repeated corrections upstream",
              body: "If you fix the same thing three times, it is a voice profile rule or a brief correction, not three edits.",
            },
            {
              title: "Approve in batches, not individually",
              body: "The batch is the unit the workflow is designed around. Approving asset by asset as they arrive reintroduces exactly the daily decision the product exists to remove.",
            },
          ],
        },
        {
          type: "faq",
          heading: "Content Studio questions",
          items: [
            {
              q: "Why does the output sound generic?",
              a: "Generic output comes from every asset being generated from the same prompt. If assets here read the same as each other, the usual causes are a thin brief, a voice profile that has never been edited, or segments that are not actually distinct — three audiences that are really one audience will produce three near-identical assets.",
            },
            {
              q: "Can I change the format of an asset?",
              a: "The format comes from the calendar slot, so changing it means changing the slot rather than the draft. That is deliberate: format follows the channel strategy and the theme, and swapping it in isolation breaks the sequencing the calendar was built around.",
            },
            {
              q: "Will it invent facts about my business?",
              a: "Editorial guardrails restrict factual and numerical claims to what you supplied. Anything unsourced surfaces as an explicit gap for you to fill rather than being filled with something plausible.",
            },
            {
              q: "Does it write for regulated industries?",
              a: "It applies blocked-language sets for regulated sectors so drafts arrive constrained, but guardrails reduce the failure rate rather than making you compliant. Where a jurisdiction requires professional sign-off, Mengo produces drafts for that review rather than replacing it.",
            },
          ],
        },
      ],
      related: [
        {
          heading: "Related",
          links: [
            { label: "Troubleshooting generic output", href: "troubleshooting" },
            { label: "Content Studio on the main site", href: mainUrl("/platform/content-studio/"), external: true },
            { label: "Responsible AI", href: mainUrl("/company/responsible-ai/"), external: true },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "campaign-lab",
      title: "Campaign Lab help",
      navLabel: "Campaign Lab",
      group: "By engine",
      seoTitle: "Campaign Lab help — offers, channel sequencing and exit rules",
      seoDescription:
        "How a Mengo campaign is defined by its offer and its exit condition, how channels are sequenced within it, and why the decision rules are set before the campaign runs.",
      hero: {
        kind: "document",
        eyebrow: "By engine",
        title: "Campaign Lab",
        lead:
          "A campaign is an offer with a beginning, a sequence and an end. This page covers what that means in practice and where people get stuck.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What makes something a campaign",
          body: [
            "A run of posts is not a campaign. A campaign has an offer, an audience, a sequence of channels that build on each other, and a condition that ends it. Campaign Lab is the engine that holds those four things together, which is why it exists separately from the calendar.",
            "The exit condition is the part people skip and the part that matters most. A campaign without a defined end does not end — it decays, and the decay is invisible because there was never a moment where it was supposed to stop.",
          ],
        },
        {
          type: "steps",
          heading: "How a campaign is built",
          steps: [
            {
              title: "Define the offer and the exit",
              body: "What is being offered, to whom, and the condition under which the campaign stops — a date, a target, or a signal that the offer is not landing.",
            },
            {
              title: "Sequence the channels",
              body: "Channels are ordered rather than run in parallel, so that awareness lands before the ask and the ask is not the first thing a cold audience sees.",
            },
            {
              title: "Generate the asset checklist",
              body: "The campaign expands into the specific assets it needs, dated. This is where a campaign stops being an intention and becomes a list with a deadline attached.",
            },
            {
              title: "Set the decision rules in advance",
              body: "What you will do if it works, and what you will do if it does not, decided before the numbers arrive. Rules set afterwards are rationalisations.",
            },
          ],
        },
        {
          type: "definitions",
          heading: "Where campaigns go wrong",
          items: [
            {
              label: "The offer is not actually an offer",
              body: "“Awareness” is not an offer and cannot be exited. If a campaign has no thing a person can say yes to, it will run indefinitely and be judged on numbers that were never tied to a decision.",
            },
            {
              label: "Every channel launches at once",
              body: "Simultaneous launch across channels feels like scale and behaves like noise. Sequencing exists so that each channel is talking to an audience the previous one warmed.",
            },
            {
              label: "The exit is a date nobody honours",
              body: "An exit condition only works if the review that checks it exists. That review belongs to Growth Signal, which is why the two engines are usually configured together.",
            },
            {
              label: "It competes with the calendar",
              body: "A campaign is layered onto the calendar rather than replacing it. If a campaign is starving your baseline content, the campaign was scoped for a capacity you do not have.",
            },
          ],
        },
        {
          type: "faq",
          heading: "Campaign Lab questions",
          items: [
            {
              q: "Does Mengo place or manage ads?",
              a: "No. Ad placement, budget and media buying stay outside what Mengo does. It produces the campaign structure, the sequencing and the copy, including ad copy variants; the spend and the placement remain in your accounts.",
            },
            {
              q: "Can I run more than one campaign at once?",
              a: "The constraint is capacity rather than the tool. Two campaigns aimed at different segments can coexist; two campaigns aimed at the same segment are competing for the same attention and usually mean neither lands.",
            },
            {
              q: "What happens when a campaign ends?",
              a: "The exit is a decision point, not just a stop: the review either promotes what worked into the standing calendar or records why it did not, which feeds the next channel ranking.",
            },
          ],
        },
      ],
      related: [
        {
          heading: "Related",
          links: [
            { label: "Lead Nurturing help", href: "lead-nurturing" },
            { label: "Campaign Lab on the main site", href: mainUrl("/platform/campaign-lab/"), external: true },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "lead-nurturing",
      title: "Lead Nurturing help",
      navLabel: "Lead Nurturing",
      group: "By engine",
      seoTitle: "Lead Nurturing help — intent segmentation, objections and cadence",
      seoDescription:
        "How Mengo builds nurture sequences with one objection per message, how cadence is matched to your buying cycle, and why follow-up usually returns more than new traffic.",
      hero: {
        kind: "document",
        eyebrow: "By engine",
        title: "Lead Nurturing",
        lead:
          "The follow-up that turns interest into a decision. For most businesses this is the engine with the shortest path to a result.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why this is usually the fastest return",
          body: [
            "The first reply to an enquiry is always excellent. The second, fourth and eighth need a system, and in most businesses no system exists — which means the losses are not to competitors but to silence.",
            "That makes nurture the cheapest place to start for anyone who already has some enquiry flow. There is no new audience to build; the people are already there and the work is remembering to talk to them in a way that answers what is actually stopping them.",
          ],
        },
        {
          type: "definitions",
          heading: "How the sequences are built",
          items: [
            {
              label: "One objection per message",
              body: "Each message in a sequence is assigned a single objection to remove. A message that handles four objections handles none of them well and reads as a brochure.",
            },
            {
              label: "Segmented by intent, not by source",
              body: "Someone who asked for a price and someone who downloaded a guide are at different points and need different sequences. Segmenting by where they came from rather than what they signalled is the most common structural error.",
            },
            {
              label: "Paced to your buying cycle",
              body: "Cadence comes from how long your buyers actually take to decide. A seven-day sequence aimed at a six-month purchase is not follow-up, it is pressure.",
            },
            {
              label: "Re-engagement is a separate path",
              body: "People who went quiet need a different argument from people who never replied, and mixing them produces messages that assume a conversation that did not happen.",
            },
          ],
        },
        {
          type: "checklist",
          heading: "Before you turn a sequence on",
          items: [
            "Check that the objections in the sequence are the objections you actually hear, not the ones that were easiest to write.",
            "Confirm the cadence against a real recent deal rather than an average — averages hide the long tail that most sequences are too short for.",
            "Make sure consent for the contacts you are adding is genuine and recorded in your own system, because that record stays with you.",
            "Decide what a reply does. A sequence that keeps sending after someone answers is worse than no sequence.",
            "Set the exit: what removes someone from the sequence, and where they go next.",
          ],
        },
        {
          type: "callout",
          heading: "Sending stays with you",
          body:
            "Mengo writes and structures sequences; it does not send them. They export into the email or CRM tool you already run, which keeps your deliverability, your consent records and your sender reputation under your control — and means a problem at Mengo cannot become a problem in your inbox reputation.",
          action: { label: "What Mengo deliberately does not do", href: mainUrl("/platform/"), external: true },
        },
        {
          type: "faq",
          heading: "Lead Nurturing questions",
          items: [
            {
              q: "Does Mengo send the emails?",
              a: "No. Sequences are written and structured here and exported to your own sending tool. Deliverability, consent and sender reputation stay where they legally belong, which is with you.",
            },
            {
              q: "How long should a sequence be?",
              a: "As long as your buying cycle, which is usually longer than people expect. The failure mode is a sequence that stops two messages before the point at which the buyer was going to decide.",
            },
            {
              q: "What about people who never reply at all?",
              a: "They get a re-engagement path rather than more of the same sequence. The argument that works on someone who has gone quiet is different from the one that works on someone still deciding.",
            },
          ],
        },
      ],
      related: [
        {
          heading: "Related",
          links: [
            { label: "Campaign Lab help", href: "campaign-lab" },
            { label: "Lead Nurturing on the main site", href: mainUrl("/platform/lead-nurturing/"), external: true },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "troubleshooting",
      title: "Troubleshooting",
      navLabel: "Troubleshooting",
      group: "When something is wrong",
      seoTitle: "Troubleshooting Mengo — generic output, wrong calendar, off tone",
      seoDescription:
        "The failures people hit most often with Mengo, what actually causes each one, and the fix — nearly always upstream, in the brief, the segments or the voice profile.",
      hero: {
        kind: "document",
        eyebrow: "When something is wrong",
        title: "Troubleshooting",
        lead:
          "Six symptoms, their real causes and the fix. Nearly all of these resolve upstream of where the symptom appears, which is why editing the artefact rarely helps.",
      },
      blocks: [
        {
          type: "table",
          heading: "Symptom, cause, fix",
          intro:
            "Read the cause column before the fix column. The wrong repair applied confidently is how a system drifts.",
          columns: ["Symptom", "Usual cause", "Where to fix it"],
          rows: [
            [
              "Everything sounds the same",
              "Segments that are not actually distinct, or a voice profile that has never been edited",
              "Strategy layer — merge or genuinely differentiate the segments; then edit the voice profile",
            ],
            [
              "The tone is wrong",
              "Stored voice constraints do not match how you write",
              "Voice profile — banned words, sentence length, formality and allowed claims",
            ],
            [
              "The calendar ignores my quiet season",
              "Seasonality and closures were not flagged in the brief",
              "Business brief — add the periods, then let the calendar reflow",
            ],
            [
              "The content targets the wrong buyer",
              "The brief describes a market rather than a person",
              "Business brief — replace the segment description with a specific buyer and their objection",
            ],
            [
              "Assets have gaps where numbers should be",
              "Working as intended: guardrails will not invent statistics or outcomes",
              "Supply the figure, or rewrite the claim so it does not need one",
            ],
            [
              "Follow-up stops too early",
              "Sequence length was set from an average rather than a real cycle",
              "Lead Nurturing — re-set cadence against an actual recent deal",
            ],
          ],
        },
        {
          type: "editorial",
          heading: "The three questions worth asking first",
          intro:
            "Before investigating a specific output, these three checks eliminate most causes.",
          sections: [
            {
              heading: "Is the brief still true?",
              body: "Briefs go stale. An offer changed, a segment turned out not to buy, a channel stopped working. Everything downstream inherits from the brief, so a stale brief produces output that is internally consistent and externally wrong — which is the hardest kind of wrong to spot, because nothing looks broken.",
            },
            {
              heading: "Am I fixing the artefact or the cause?",
              body: "Editing an asset fixes one artefact. Editing the layer it inherited from fixes the artefact and everything after it. If you have made the same correction three times, you are fixing the wrong thing, and the third correction is the signal.",
            },
            {
              heading: "Is this a Mengo problem or a marketing problem?",
              body: "Some outputs are correct and unwelcome. A channel ranking that drops the platform you enjoy posting on, or a segment list that excludes a customer type you like, is doing its job. Worth separating from a genuine defect before changing anything.",
            },
          ],
        },
        {
          type: "faq",
          heading: "Still stuck",
          items: [
            {
              q: "I changed the brief and nothing downstream updated.",
              a: "Reflow is the intended behaviour, so this is worth reporting rather than working around. Include what you changed, what you expected to reflow and what did not — that is enough to reproduce it.",
            },
            {
              q: "The output contradicts something on my website.",
              a: "Mengo only knows what the brief told it. A contradiction is nearly always a brief that describes the business you are becoming rather than the one you are running today.",
            },
            {
              q: "Something looks broken rather than wrong.",
              a: "If the product itself is misbehaving rather than the output being unsatisfactory, check the status site first, then write in with what you were doing when it happened.",
            },
          ],
        },
      ],
      related: [
        {
          heading: "Related",
          links: [
            { label: "System status", href: siteUrl("status"), external: true },
            { label: "Contact support", href: "contact" },
            { label: "Content Studio help", href: "content-studio" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "faq",
      title: "Frequently asked questions",
      navLabel: "FAQ",
      group: "When something is wrong",
      seoTitle: "Mengo support FAQ — the questions that come up most",
      seoDescription:
        "The questions asked most often about Mengo: what it produces, what it refuses to do, how it avoids inventing facts, and who it is a poor fit for.",
      hero: {
        kind: "document",
        eyebrow: "Questions",
        title: "Frequently asked questions",
        lead:
          "Answers to what comes up most. Product-specific and industry-specific questions are answered on the pages that own them, where the answer can be specific.",
      },
      blocks: [
        {
          type: "faq",
          heading: "About the product",
          items: [
            {
              q: "What exactly does Mengo produce?",
              a: "A written strategy layer, a 365-day content calendar, finished assets in a large set of defined formats, segmented nurture sequences, and a small metric set with a review rhythm attached. All of it editable, all of it yours.",
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
              q: "Will it invent facts about my business?",
              a: "Editorial guardrails restrict factual and numerical claims to what you supplied. Anything unsourced is surfaced as an explicit gap for you to fill rather than filled with something plausible.",
            },
          ],
        },
        {
          type: "faq",
          heading: "About fit",
          items: [
            {
              q: "Who is Mengo not for?",
              a: "Businesses where delivery is the constraint rather than demand, and businesses where nobody internally will own marketing. Mengo removes the work; it does not remove the responsibility.",
            },
            {
              q: "Do I need a marketing background?",
              a: "No. The brief asks about your business rather than about marketing, and the strategy layer is written to be read by the person running the company rather than by a specialist.",
            },
            {
              q: "Does it replace an agency?",
              a: "It replaces the part of an agency that decides and produces. It does not replace media buying, production, or somebody being accountable for the outcome. The comparison pages on the main site set out that boundary in detail.",
            },
          ],
        },
        {
          type: "faq",
          heading: "About this site and the company",
          items: [
            {
              q: "Why are some sections marked as awaiting content?",
              a: "Because Mengo is pre-launch and several answers — pricing, response times, certifications — depend on decisions that have not been made or published. A marked gap is more useful than a confident guess, and considerably more useful than a guess someone later quotes back.",
            },
            {
              q: "Is there a phone number?",
              a: "No. Questions reach a small team in writing and are answered by a person. The contact page explains what to include so the first reply is an answer rather than a request for detail.",
            },
            {
              q: "Where do I report something that looks like a bug?",
              a: "Through the same contact route, with what you were doing when it happened. If the product itself is down rather than misbehaving, the status site is the faster check.",
            },
          ],
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "Every question we answer", href: mainUrl("/faq/"), external: true },
            { label: "Who Mengo is for", href: mainUrl("/company/who-its-for/"), external: true },
            { label: "Contact support", href: "contact" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "search",
      title: "Browse all support topics",
      navLabel: "All topics",
      group: "When something is wrong",
      seoTitle: "Browse all Mengo support topics",
      seoDescription:
        "Search or browse the full Mengo help centre: getting started, the five engines, account and billing, troubleshooting and frequently asked questions.",
      hero: {
        kind: "search",
        eyebrow: "All topics",
        title: "Browse everything",
        lead:
          "The full contents of the help centre. Search filters across every page's title, headings and questions.",
        placeholder: "Search titles, headings and questions",
      },
      blocks: [
        {
          type: "index",
          heading: "Using Mengo",
          links: [
            { label: "Getting started", href: "getting-started", blurb: "The brief, what arrives, and a realistic first week." },
            { label: "Account and access", href: "account", blurb: "Waitlist access, your work, and data requests." },
            { label: "Billing and subscription", href: "billing", blurb: "What is published about paying for Mengo." },
          ],
        },
        {
          type: "index",
          heading: "By engine",
          links: [
            { label: "Help with the platform", href: "platform", blurb: "Which engine owns which decision." },
            { label: "Content Studio", href: "content-studio", blurb: "Formats, voice profile and batch review." },
            { label: "Campaign Lab", href: "campaign-lab", blurb: "Offers, sequencing and exit rules." },
            { label: "Lead Nurturing", href: "lead-nurturing", blurb: "Intent segmentation, objections and cadence." },
          ],
        },
        {
          type: "index",
          heading: "When something is wrong",
          links: [
            { label: "Troubleshooting", href: "troubleshooting", blurb: "Symptoms, causes and where to fix them." },
            { label: "Frequently asked questions", href: "faq", blurb: "What comes up most." },
            { label: "How support works", href: "about-support", blurb: "What to expect when you ask." },
            { label: "Contact support", href: "contact", blurb: "What happens when you write in." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "contact",
      title: "Contact support",
      navLabel: "Contact",
      group: "When something is wrong",
      seoTitle: "Contact Mengo support — what happens when you write in",
      seoDescription:
        "How to reach Mengo while the product is pre-launch, what to include so the first reply is useful, and which questions belong on the partner, vendor or media sites instead.",
      hero: {
        kind: "document",
        eyebrow: "Contact",
        title: "Contact support",
        lead:
          "There is no ticket queue behind this site. Questions reach a small team and are answered by a person — this page explains how to make that first reply useful.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What actually happens",
          body: [
            "Mengo is pre-launch. Support is not a staffed rota with a service level; it is a small team reading what comes in. That is worth knowing because it changes what a good message looks like: there is nobody to triage a vague report into a specific one, so the detail you include is the detail that gets used.",
            "Contact goes through the form on the main site, which routes by enquiry type. Using the right type matters more than it sounds — an investor question in the support queue and a support question in the investor queue both take longer to answer than either should.",
          ],
        },
        {
          type: "checklist",
          heading: "What to include",
          intro:
            "Five things that turn a first reply into an answer rather than a question.",
          items: [
            "What you were trying to do, in the terms the product uses — the engine, the object, the step.",
            "What you expected and what happened instead, kept separate. These get merged constantly and the difference is where the bug usually is.",
            "Whether it is reproducible, and what you did the second time.",
            "For output problems: what the brief says about the relevant segment or channel, since that is where the cause usually is.",
            "What you have already tried, so nobody sends you back around a loop you have finished.",
          ],
        },
        {
          type: "index",
          heading: "Some questions belong elsewhere",
          intro:
            "These have their own destinations, with people and context attached.",
          links: [
            { label: "Partnership enquiries", href: siteUrl("partners"), external: true, blurb: "Agency, consulting, technology and strategic partnership." },
            { label: "Supplying Mengo", href: siteUrl("vendors"), external: true, blurb: "Vendor onboarding, security review and procurement." },
            { label: "Affiliate and referral", href: siteUrl("affiliates"), external: true, blurb: "Promoting Mengo and how attribution works." },
            { label: "Press and media", href: siteUrl("media"), external: true, blurb: "Interview requests, brand assets and company facts." },
            { label: "Investor enquiries", href: siteUrl("investors"), external: true, blurb: "Handled directly rather than through a support process." },
            { label: "Working at Mengo", href: siteUrl("careers"), external: true, blurb: "Roles, culture and how applications are handled." },
          ],
        },
        {
          type: "callout",
          heading: "Check status first if something is down",
          body:
            "If the product is unreachable rather than unsatisfactory, the status site is the faster check — and if there is an active incident, writing in will not make it resolve sooner.",
          action: { label: "System status", href: siteUrl("status"), external: true },
        },
        {
          type: "pending",
          heading: "The support channel of record",
          body:
            "A dedicated support address, an in-product route and a published first-response target all belong here. None has been agreed, so this page points at the general contact form rather than inventing an inbox that nobody is watching.",
          needs: [
            "A support email address, and who monitors it",
            "Whether support is offered in-product once accounts exist",
            "A published first-response target and the hours it applies within",
            "A route for urgent data and privacy requests, aligned to the privacy policy",
          ],
          action: { label: "Contact form on the main site", href: mainUrl("/contact/"), external: true },
        },
      ],
    },
  ],
};
