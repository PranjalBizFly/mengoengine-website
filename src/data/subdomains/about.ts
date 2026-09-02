import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The about site.
 *
 * Register: editorial with a corporate lean.
 *
 * Content provenance. Everything factual here is drawn from material already
 * published on the main site — the about, how-it-works, who-its-for, founder and
 * responsible-AI pages. That is deliberate: a company's own account of itself
 * should not have two versions, and a subdomain that paraphrases the main site
 * eventually contradicts it. Where this site adds value it is by arranging the
 * same facts for a different reader — someone evaluating the company rather
 * than the product.
 *
 * The only person named anywhere is the founder, who is publicly documented.
 * No other people, no offices, no company registration details and no history
 * beyond what is published appear here.
 */
export const about: SubSite = {
  key: "about",
  name: "About Mengo",
  shortName: "About",
  tagline: "The company behind the product",
  description:
    "About Mengo: the problem it exists to solve, what it builds, who it is for, and who founded it.",
  register: "editorial",
  nav: [
    { label: "About", path: "" },
    { label: "Story", path: "story" },
    { label: "Product", path: "product" },
    { label: "Who it is for", path: "who-its-for" },
    { label: "Leadership", path: "leadership" },
    { label: "Contact", path: "contact" },
  ],
  pages: [
    {
      path: "",
      title: "About Mengo",
      seoTitle: "About Mengo — the AI co-founder for marketing",
      seoDescription:
        "Mengo exists because most small businesses fail at marketing for the same reason: nobody has time to decide what to do next. What we build, and why.",
      hero: {
        kind: "editorial",
        eyebrow: "About",
        title: "Marketing is the only job with no deadline",
        lead:
          "Mengo is an AI co-founder for the marketing function. It turns a short business brief into strategy, a year of calendar, the content that fills it, and the follow-up that converts what it generates.",
        actions: [
          { label: "Our story", href: "story" },
          { label: "What we build", href: "product" },
        ],
        facts: [
          { label: "Founded by", value: "Jainam Jain" },
          { label: "Stage", value: "Early, building against a waitlist" },
          { label: "Product", value: "A strategy and content layer" },
          { label: "Boundary", value: "Writes and structures; does not send" },
        ],
      },
      blocks: [
        {
          type: "editorial",
          heading: "Where we started",
          sections: [
            {
              heading: "The problem we started from",
              body: "Most small businesses do not fail at marketing because they cannot write. They fail because marketing is the only function with no external deadline. Delivery has clients waiting. Finance has filing dates. Marketing has an intention, and intentions lose to whatever is urgent. The result is a familiar pattern: a burst of activity, two good weeks, a busy month, and a reset.",
            },
            {
              heading: "What we concluded",
              body: "The expensive part of marketing is not production. It is the decision — what to say, to whom, in what format, this week. A founder makes that decision from scratch every morning, and it costs a disproportionate amount of attention for something that could have been settled once. Take the decision away and the rest becomes tractable.",
            },
            {
              heading: "Where we are",
              body: "Mengo is early. The product is being built in the open, and the waitlist is how we decide what to build next. If you join it, expect to be asked what is actually broken in your marketing rather than to be sold to.",
            },
          ],
        },
        {
          type: "definitions",
          heading: "What Mengo does",
          items: [
            { label: "It writes the strategy down", body: "Positioning, audience segments and channel priorities become stored objects rather than opinions you re-form each week." },
            { label: "It decides the year", body: "A 365-day calendar themed by month and week, so a slot arrives as a brief rather than an empty date." },
            { label: "It produces the assets", body: "Over a hundred defined formats, each written to the platform it ships to rather than reformatted from one generic draft." },
            { label: "It builds the follow-up", body: "Segmented, objection-led sequences, because most businesses lose more leads to silence than to competitors." },
            { label: "It keeps the measurement small", body: "A few numbers, each attached to a decision, reviewed on a rhythm short enough to survive a busy week." },
          ],
        },
        {
          type: "prose",
          heading: "What we will not do",
          body: [
            "Mengo does not send your email, publish to your accounts or hold your ad spend. Sending, publishing and consent stay in the tools you already use, where your deliverability and your legal obligations sit.",
            "We also do not invent facts about your business: editorial guardrails restrict claims to what you supplied, and mark everything else as a gap for you to fill.",
          ],
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "Careers", href: siteUrl("careers"), external: true },
            { label: "Investor information", href: siteUrl("investors"), external: true },
            { label: "Press and media", href: siteUrl("media"), external: true },
          ],
        },
      ],
    },

    {
      path: "story",
      title: "Our story",
      group: "The company",
      seoTitle: "Our story — why Mengo exists",
      seoDescription:
        "Mengo Engine was founded by Jainam Jain at 14 to solve a problem he kept seeing: marketing that was slow, scattered and inconsistent in every business around him.",
      hero: {
        kind: "document",
        eyebrow: "The company",
        title: "Our story",
        lead:
          "Mengo Engine was founded by Jainam Jain, who built it to solve a problem he kept seeing in the businesses around him.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why Mengo exists",
          body: [
            "At 14, Jainam founded Mengo Engine to solve a problem he kept seeing in every business around him: marketing was slow, scattered and inconsistent. Founders were spending their days writing captions instead of building their companies.",
            "Mengo is his answer — an AI co-founder that turns a few business inputs into a complete marketing system: channel-specific strategy, campaign frameworks and lead conversion flows. What used to take a team of marketers months now takes minutes.",
          ],
        },
        {
          type: "statement",
          text:
            "Success is built not on what you achieve, but on the mindset you shape and the steps you take to turn your dreams into reality.",
          attribution: "Jainam Jain",
        },
        {
          type: "prose",
          heading: "Where the company is now",
          body: [
            "Early, pre-launch, and building against a waitlist. Traction and financial details are shared directly with prospective investors rather than published.",
            "The product is being built in the open. What gets built next is decided partly by what people on the waitlist say they need, which is why joining it starts with a question about what is broken rather than a pitch.",
          ],
        },
      ],
      related: [
        {
          heading: "Related",
          links: [
            { label: "The founder", href: "leadership" },
            { label: "Full founder profile", href: mainUrl("/company/founder/"), external: true },
          ],
        },
      ],
    },

    {
      path: "mission",
      title: "Mission",
      group: "The company",
      seoTitle: "Mission — what Mengo is trying to change",
      seoDescription:
        "Mengo's mission stated as the change it is trying to produce: making a marketing system something a small business can hold, rather than something it restarts every quarter.",
      hero: {
        kind: "document",
        eyebrow: "The company",
        title: "Mission",
        lead:
          "Stated as the change we are trying to produce rather than as a slogan, because a mission that could belong to any company is not a mission.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The change",
          body: [
            "To make a working marketing system something a small business can hold, rather than something it restarts every quarter. That means the strategy is written down, the year is decided, the content exists, and the follow-up runs — without requiring a decision every morning from the person least able to spare one.",
            "The measure of success is not output volume. It is whether marketing survives a busy month, which is the specific point at which it has always failed before.",
          ],
        },
        {
          type: "definitions",
          heading: "What follows from it",
          intro:
            "A mission is only useful if it rules things out. These are the consequences that shape the product.",
          items: [
            { label: "The system stays with the business", body: "If the strategy layer, calendar and sequences belong to an agency or to us, the business has not gained a system — it has rented one." },
            { label: "Sustainability beats optimality", body: "Channel ranking weighs what a business can actually maintain. A plan abandoned in month two is worse than a smaller one that survives." },
            { label: "The measurement has to be small", body: "A review that takes an afternoon does not happen in a bad week, which is exactly when it matters." },
            { label: "Claims have to be safe", body: "A system writing under someone's name cannot be allowed to invent, or the whole proposition becomes a liability." },
          ],
        },
      ],
    },

    {
      path: "vision",
      title: "Vision",
      group: "The company",
      seoTitle: "Vision — where this is going",
      seoDescription:
        "Mengo's view of where marketing software is heading: the value moving from producing content to holding the context that decides which content is worth producing.",
      hero: {
        kind: "document",
        eyebrow: "The company",
        title: "Vision",
        lead:
          "A view about where the value in marketing software is moving, rather than a prediction about the company's size.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The thesis",
          body: [
            "The cost of generating competent copy has collapsed, which has made competent copy worthless as a differentiator. What remains scarce is knowing what to make, for whom, and in what order.",
            "That is a structured-context problem rather than a model problem, and it is where the durable product surface is. A general-purpose assistant will write you a post; it will not tell you which post, for which segment, in which week, or why — because it does not hold the strategy the asset is supposed to serve.",
          ],
        },
        {
          type: "editorial",
          heading: "What we think that implies",
          sections: [
            {
              heading: "Context becomes the asset",
              body: "If generation is commoditised, the defensible thing is the structured model of a business that decides what to generate. That model is also the thing a customer would least want to rebuild elsewhere, which is why we think it should belong to them rather than to us.",
            },
            {
              heading: "Guardrails become table stakes",
              body: "As more marketing is machine-written, the failure that matters shifts from bad prose to confident invention. Systems that cannot decline to answer will become unusable in any regulated context, and eventually in unregulated ones too.",
            },
            {
              heading: "Narrow products outlast broad ones here",
              body: "Sending, publishing and pipeline management have strong incumbents. A product that expands into them competes on ground where it has no advantage and takes on obligations — deliverability, consent, spend — that make it a worse product for the thing it was good at.",
            },
          ],
        },
      ],
    },

    {
      path: "product",
      title: "What Mengo does",
      navLabel: "Product",
      group: "The product",
      seoTitle: "What Mengo does — the five engines and one brief",
      seoDescription:
        "Mengo is five engines reading from one business brief: Marketing Engine, Content Studio, Campaign Lab, Lead Nurturing and Growth Signal.",
      hero: {
        kind: "document",
        eyebrow: "The product",
        title: "What Mengo does",
        lead:
          "Five engines, one business brief between them. That shared context is what stops a year of output sounding like it came from five different companies.",
      },
      blocks: [
        {
          type: "table",
          heading: "The five engines",
          columns: ["Engine", "What it decides"],
          rows: [
            ["Marketing Engine", "Positioning, audience segments, offer ladder, channel ranking and the 365-day calendar"],
            ["Content Studio", "How each calendar slot becomes a finished asset in the format it ships in"],
            ["Campaign Lab", "How a campaign begins, sequences across channels, and ends"],
            ["Lead Nurturing", "What happens after someone raises a hand — segmented, objection-led follow-up"],
            ["Growth Signal", "Which few numbers are worth watching, and what each one changes"],
          ],
        },
        {
          type: "checklist",
          heading: "What comes out",
          intro: "Artefacts you can open, edit and hand to someone else — not recommendations to go and do the work.",
          items: [
            "A positioning statement and message hierarchy your team can quote",
            "Two to four audience segments, each carrying the objection it holds",
            "A ranked channel strategy naming what you are choosing not to run",
            "A 365-day calendar themed by month and by week",
            "Briefs and finished assets across social, video, email and search",
            "Segmented nurture sequences with one objection per message",
            "A metric set with a decision attached to every number",
          ],
        },
        {
          type: "callout",
          heading: "The full product detail is on the main site",
          body:
            "This page is the summary a reader evaluating the company needs. The platform pages, feature pages and documentation go considerably deeper.",
          action: { label: "The platform", href: mainUrl("/platform/"), external: true },
        },
      ],
    },

    {
      path: "how-it-works",
      title: "How Mengo works",
      navLabel: "How it works",
      group: "The product",
      seoTitle: "How Mengo works — five steps from a brief to a running system",
      seoDescription:
        "What happens between answering the guided business brief and having a marketing system that runs without a daily decision.",
      hero: {
        kind: "document",
        eyebrow: "The product",
        title: "How Mengo works",
        lead:
          "Five steps, one brief. What actually happens between answering a guided questionnaire and having a system that runs without a daily decision.",
      },
      blocks: [
        {
          type: "steps",
          heading: "The five steps",
          steps: [
            { title: "The brief", body: "A guided questionnaire about what you sell, who buys it, what they pay, what stops them buying and where you already have traction. No integrations, no onboarding call." },
            { title: "The strategy layer", body: "Positioning, two to four audience segments, an offer ladder and a ranked channel strategy committing to one primary channel, one secondary and one experiment. Editable and versioned." },
            { title: "The calendar", body: "A year laid out, themed by month and week, sequenced so foundational content lands before the offers that depend on it. The next quarter is detailed to slot level; the rest stays thematic until it is closer." },
            { title: "The assets", body: "Each slot expands into a brief and then into finished assets written to the anatomy of their format. Rejections are specific, so only the failing part regenerates." },
            { title: "The follow-up and the review", body: "Nurture sequences per intent level with one objection per message, and a small metric set reviewed against fixed agendas. Review conclusions update the calendar and the channel ranking." },
          ],
        },
        {
          type: "callout",
          heading: "What stays with you",
          body:
            "Publishing, sending and ad spend remain in your own tools. Consent records, deliverability and account access stay under your control. Mengo produces the strategy and the content; it does not take custody of your channels.",
          action: { label: "Full walkthrough", href: mainUrl("/company/how-it-works/"), external: true },
        },
      ],
    },

    {
      path: "who-its-for",
      title: "Who it is for",
      navLabel: "Who it is for",
      group: "The product",
      seoTitle: "Who Mengo is for — and who it is not for",
      seoDescription:
        "Mengo suits businesses where marketing keeps stopping because nobody has time to decide what to do next. It suits some situations badly, and this page says which.",
      hero: {
        kind: "document",
        eyebrow: "The product",
        title: "Who it is for",
        lead:
          "Mengo is built for businesses where marketing is one person's fourth priority. It is a poor fit for several situations, and it is more useful to say which than to claim it works for everyone.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "It fits well when",
          items: [
            { label: "Marketing stops when you get busy", body: "The system runs on a schedule rather than on your attention, which is the specific failure it was designed around." },
            { label: "You have delivery capacity to fill", body: "Generating demand only helps if you can serve it. Where you can, follow-up alone often produces the fastest return." },
            { label: "You are the marketing function", body: "Solo founders and one-person marketing teams get the most from removing the daily decision." },
            { label: "You want the system to remain yours", body: "The brief, positioning, calendar and sequences stay with your business rather than with an agency." },
          ],
        },
        {
          type: "definitions",
          heading: "It fits badly when",
          items: [
            { label: "Delivery is the constraint", body: "If you cannot serve more customers, generating demand damages your reputation faster than an absence of marketing does. Wait." },
            { label: "You need someone accountable", body: "Mengo removes the work, not the responsibility. If nobody internally will own marketing, a tool will not change that." },
            { label: "You need media buying or production", body: "Ad placement, video production, photography and design remain outside what Mengo does." },
            { label: "Your marketing already works", body: "If your current system is consistent and producing, the honest answer is that you may not need this." },
          ],
        },
      ],
    },

    {
      path: "company",
      title: "Company information",
      navLabel: "Company",
      group: "Corporate",
      seoTitle: "Company information — what is published",
      seoDescription:
        "Published company information for Mengo Engine, and an explicit account of the corporate details that have not been published.",
      hero: {
        kind: "split",
        eyebrow: "Corporate",
        title: "Company information",
        lead:
          "What is published, and what is not. A corporate information page that quietly omits the second half is how a company ends up appearing to claim things it never said.",
        facts: [
          { label: "Trading name", value: "Mengo" },
          { label: "Product", value: "MengoEngine" },
          { label: "Founder", value: "Jainam Jain" },
          { label: "Stage", value: "Pre-launch" },
        ],
      },
      blocks: [
        {
          type: "prose",
          heading: "What is published",
          body: [
            "Mengo is the trading name; the product is MengoEngine. It was founded by Jainam Jain and is early — pre-launch, building against a waitlist, with the roadmap influenced by what people on that list say they need.",
            "The legal terms governing use of the product, data handling and acceptable use are published on the main site and are the documents that actually bind. Anything on this page is summary rather than substitute.",
          ],
        },
        {
          type: "pending",
          heading: "Corporate registration details",
          body:
            "Registered entity name, company number, jurisdiction of incorporation, registered office and VAT or tax registration have not been published. These are precisely the details a counterparty relies on, so none is inferred here.",
          needs: [
            "Registered legal entity name and company number",
            "Jurisdiction of incorporation and registered office address",
            "Tax or VAT registration where applicable",
            "Trading addresses, if different",
            "Directors and officers as filed",
          ],
          action: { label: "Contact us", href: "contact" },
        },
        {
          type: "index",
          heading: "Published legal documents",
          links: [
            { label: "Privacy policy", href: mainUrl("/legal/privacy-policy/"), external: true },
            { label: "Terms of service", href: mainUrl("/legal/terms-of-service/"), external: true },
            { label: "Cookie policy", href: mainUrl("/legal/cookie-policy/"), external: true },
            { label: "Acceptable use policy", href: mainUrl("/legal/acceptable-use/"), external: true },
          ],
        },
      ],
    },

    {
      path: "leadership",
      title: "Leadership",
      group: "Corporate",
      seoTitle: "Leadership — Jainam Jain, founder",
      seoDescription:
        "Mengo Engine was founded by Jainam Jain, Dubai's youngest AI startup founder, a TEDx speaker and leadership coach. The published record of his background.",
      hero: {
        kind: "document",
        eyebrow: "Corporate",
        title: "Leadership",
        lead:
          "One publicly documented person. No other leadership has been announced, and this page does not imply a team that has not been published.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Jainam Jain, founder",
          body: [
            "Jainam founded Mengo Engine at 14 to solve a problem he kept seeing in every business around him: marketing was slow, scattered and inconsistent, and founders were spending their days writing captions instead of building their companies.",
            "Alongside the company he delivers keynotes, webinars, workshops and seminars that help people, especially young people, build confidence, sharpen focus and turn potential into purpose. His speaking, writing and other work sits at jainamjain.com.",
          ],
        },
        {
          type: "checklist",
          heading: "Published record",
          intro: "As stated on the main site's founder page.",
          items: [
            "Dubai's youngest AI startup founder — founded Mengo Engine at 14",
            "National Young Achievers Award, honoured by Suryadatta Institutes, February 2025",
            "Change Your Life: Super Hero Award, presented by Bollywood actor Sonu Sood at LifeGurukul, January 2025",
            "Jain Baal Ratna and Jain Star Puraskar, honoured by Shrirampur Shree Sangh and Bhagwan Mahavir Swami Samiti, 2024",
            "Completed IGCSE 10th board exams at age 13",
            "TEDx speaker",
          ],
        },
        {
          type: "pending",
          heading: "Other leadership",
          body:
            "No other executives, directors or advisors have been announced. Rather than presenting a single founder page as though a wider team were merely absent from it, this states the position.",
          needs: [
            "Any other executives or directors, with consent to publish",
            "Advisors or board members, if any",
            "Photography and biographies where individuals agree",
          ],
        },
        {
          type: "callout",
          heading: "Speaking enquiries",
          body:
            "For keynotes, workshops, webinars, panels, or school and startup events, the speaking enquiry route on the main site reaches the team directly.",
          action: { label: "Founder page and speaking enquiries", href: mainUrl("/company/founder/"), external: true },
        },
      ],
    },

    {
      path: "contact",
      title: "Contact",
      group: "Corporate",
      seoTitle: "Contact Mengo — routing your enquiry",
      seoDescription:
        "How to reach Mengo, and which of the ecosystem destinations handles support, partnership, vendor, press, investor and careers enquiries.",
      hero: {
        kind: "document",
        eyebrow: "Corporate",
        title: "Contact",
        lead:
          "One form, several enquiry types. Choosing the right one is the difference between a direct answer and a redirect.",
      },
      blocks: [
        {
          type: "index",
          heading: "Where each enquiry goes",
          links: [
            { label: "Product support", href: siteUrl("support", "contact"), external: true, blurb: "Using Mengo, or something not behaving as documented." },
            { label: "Partnership", href: siteUrl("partners", "apply"), external: true, blurb: "Agency, consulting, technology or strategic partnership." },
            { label: "Supplying Mengo", href: siteUrl("vendors", "contact"), external: true, blurb: "Selling to Mengo, or assessing Mengo as a supplier." },
            { label: "Affiliate and referral", href: siteUrl("affiliates", "apply"), external: true, blurb: "Recommending Mengo to an audience." },
            { label: "Press and media", href: siteUrl("media", "contact"), external: true, blurb: "Interviews, brand assets, company facts." },
            { label: "Investor enquiries", href: siteUrl("investors", "contact"), external: true, blurb: "Handled directly by the founder." },
            { label: "Careers", href: siteUrl("careers", "application"), external: true, blurb: "Registering interest — there are no open roles." },
            { label: "Developers", href: siteUrl("developers", "contact"), external: true, blurb: "Integration and API questions." },
          ],
        },
        {
          type: "callout",
          heading: "The route of record",
          body:
            "All of the above currently reach the same contact form on the main site, routed by enquiry type. Dedicated addresses per destination are on the list of things to be decided rather than invented.",
          action: { label: "Contact form", href: mainUrl("/contact/"), external: true },
        },
      ],
    },
  ],
};
