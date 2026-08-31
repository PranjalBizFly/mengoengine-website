import type { CompanyPage, LegalPage } from "@/lib/types";

/**
 * Company and legal pages.
 *
 * Biographical and corporate facts are deliberately limited to what is publicly
 * verifiable. Where a section needs information only the business holds — team,
 * funding, entity details — the structure is here and the copy is marked for
 * replacement rather than invented.
 */

export const companyPages: CompanyPage[] = [
  {
    kind: "company",
    slug: "about",
    title: "About Mengo",
    seoTitle: "About Mengo — the AI co-founder for marketing | Mengo",
    seoDescription:
      "Mengo exists because most small businesses fail at marketing for the same reason: nobody has time to decide what to do next. Here is what we build and why.",
    summary:
      "Mengo is an AI co-founder for the marketing function. It turns a short business brief into strategy, a year of calendar, the content that fills it, and the follow-up that converts what it generates.",
    updated: "2026-08-25",
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
        heading: "What Mengo does",
        bullets: [
          { label: "It writes the strategy down", body: "Positioning, audience segments and channel priorities become stored objects rather than opinions you re-form each week." },
          { label: "It decides the year", body: "A 365-day calendar themed by month and week, so a slot arrives as a brief rather than an empty date." },
          { label: "It produces the assets", body: "Over a hundred defined formats, each written to the platform it ships to rather than reformatted from one generic draft." },
          { label: "It builds the follow-up", body: "Segmented, objection-led sequences, because most businesses lose more leads to silence than to competitors." },
          { label: "It keeps the measurement small", body: "A few numbers, each attached to a decision, reviewed on a rhythm short enough to survive a busy week." },
        ],
      },
      {
        heading: "What we will not do",
        body: "Mengo does not send your email, publish to your accounts or hold your ad spend. Sending, publishing and consent stay in the tools you already use, where your deliverability and your legal obligations sit. We also do not invent facts about your business: editorial guardrails restrict claims to what you supplied, and mark everything else as a gap for you to fill.",
      },
      {
        heading: "Where we are",
        body: "Mengo is early. The product is being built in the open, and the waitlist is how we decide what to build next. If you join it, expect to be asked what is actually broken in your marketing rather than to be sold to.",
      },
    ],
  },

  {
    kind: "company",
    slug: "how-it-works",
    title: "How Mengo Works",
    seoTitle: "How Mengo Works — from a ten-minute brief to a running marketing system | Mengo",
    seoDescription:
      "A walkthrough of what happens between filling in the Mengo business brief and having a year of calendar, a month of assets and working follow-up sequences.",
    summary:
      "Five steps, one brief. This is what actually happens between answering twelve questions about your business and having a marketing system that runs without a daily decision.",
    updated: "2026-08-25",
    sections: [
      {
        heading: "Step one — the brief",
        body: "Twelve questions about what you sell, who buys it, what they pay, what stops them buying and where you already have traction. It takes about ten minutes. There are no integrations to connect and no onboarding call, because the answers you can give from memory are enough to produce a defensible first plan.",
      },
      {
        heading: "Step two — the strategy layer",
        body: "Mengo drafts positioning, two to four audience segments, an offer ladder and a ranked channel strategy that commits to one primary channel, one secondary and one experiment. This layer is editable and versioned. Everything downstream inherits from it, which is why a correction here reflows the whole plan rather than requiring a rewrite.",
      },
      {
        heading: "Step three — the calendar",
        body: "A year is laid out, themed by month and by week, sequenced so foundational content lands before the offers that depend on it, and paced around the launches and quiet periods you flagged. The next quarter is detailed to slot level; the rest stays thematic until it is closer.",
      },
      {
        heading: "Step four — the assets",
        body: "Each slot expands into a brief and then into finished assets, written to the anatomy of the format they ship in. Content arrives a week or a month at a time so review is a single sitting. Rejections are specific — the hook, the close, the claim — so only the failing part regenerates.",
      },
      {
        heading: "Step five — the follow-up and the review",
        body: "Nurture sequences are generated per intent level, with each message assigned one objection. A small metric set is defined with a decision attached to each number, and reviewed weekly, monthly and quarterly against fixed agendas. Review conclusions update the calendar and the channel ranking, which is what stops the system drifting away from reality.",
      },
      {
        heading: "What stays with you",
        body: "Publishing, sending and ad spend remain in your own tools. Consent records, deliverability and account access stay under your control. Mengo produces the strategy and the content; it does not take custody of your channels.",
      },
    ],
  },

  {
    kind: "company",
    slug: "who-its-for",
    title: "Who Mengo Is For",
    seoTitle: "Who Mengo Is For — and who it is not for | Mengo",
    seoDescription:
      "Mengo suits businesses where marketing keeps stopping because nobody has time to decide what to do next. It suits some situations badly, and this page says which.",
    summary:
      "Mengo is built for the businesses where marketing is one person's fourth priority. It is a poor fit for several situations, and it is more useful to say which than to claim it works for everyone.",
    updated: "2026-08-25",
    sections: [
      {
        heading: "It fits well when",
        bullets: [
          { label: "Marketing stops when you get busy", body: "The system runs on a schedule rather than on your attention, which is the specific failure it was designed around." },
          { label: "You have delivery capacity to fill", body: "Generating demand only helps if you can serve it. Where you can, follow-up alone often produces the fastest return." },
          { label: "You are the marketing function", body: "Solo founders and one-person marketing teams get the most from removing the daily decision." },
          { label: "You want the system to remain yours", body: "The brief, positioning, calendar and sequences stay with your business rather than with an agency." },
        ],
      },
      {
        heading: "It fits badly when",
        bullets: [
          { label: "Delivery is the constraint", body: "If you cannot serve more customers, generating demand damages your reputation faster than an absence of marketing does. Wait." },
          { label: "You need someone accountable", body: "Mengo removes the work, not the responsibility. If nobody internally will own marketing, a tool will not change that." },
          { label: "You need media buying or production", body: "Ad placement, video production, photography and design remain outside what Mengo does." },
          { label: "Your marketing already works", body: "If your current system is consistent and producing, the honest answer is that you may not need this." },
        ],
      },
      {
        heading: "Where it sits with what you already have",
        body: "Mengo is deliberately narrow. It is a strategy and content layer that exports into the scheduling, email and CRM tools you already run. It does not attempt to become your system of record, because sending, publishing and pipeline management are solved problems with strong incumbents.",
      },
    ],
  },

  {
    kind: "company",
    slug: "founder",
    title: "The Founder",
    seoTitle: "The founder behind Mengo | Mengo",
    seoDescription:
      "Mengo was founded by Jainam Jain. This page covers why the product exists and where to read more about the founder's other work.",
    summary:
      "Mengo was founded by Jainam Jain. The product came out of a straightforward observation about why small businesses stop marketing, and an unwillingness to accept that the answer was simply discipline.",
    updated: "2026-08-25",
    sections: [
      {
        heading: "Why this product",
        body: "The recurring pattern across small businesses is not a lack of effort or ideas. It is that marketing is the only function that can be postponed indefinitely without anything visibly breaking that week. Mengo was built on the premise that this is a systems problem rather than a character problem — that if the daily decision is removed, the consistency follows.",
      },
      {
        heading: "How Mengo is being built",
        body: "In the open, and against the waitlist. What gets built next is decided by what waitlist members say is actually broken in their marketing, rather than by a roadmap written in advance of any users.",
      },
      {
        heading: "Elsewhere",
        body: "The founder's speaking, writing and other work sits at jainamjain.com.",
      },
    ],
  },

  {
    kind: "company",
    slug: "invest",
    title: "Invest in Mengo",
    seoTitle: "Invest in Mengo — investor enquiries | Mengo",
    seoDescription:
      "Mengo is early and building an AI co-founder for the marketing function. Investor enquiries are handled directly; this page explains what we are building and how to start a conversation.",
    summary:
      "Mengo is building an AI co-founder for the marketing function of small businesses. Investor conversations are handled directly by the founder.",
    updated: "2026-08-25",
    sections: [
      {
        heading: "What we are building",
        body: "A strategy and content layer for the marketing function: a system that takes a short business brief and produces positioning, a 365-day calendar, platform-native assets across more than a hundred formats, and objection-led nurture sequences. The wedge is the decision layer, not the drafting — the part of marketing that a general-purpose model does not address.",
      },
      {
        heading: "Why now",
        body: "The cost of generating competent copy has collapsed, which has made competent copy worthless as a differentiator. What remains scarce is knowing what to make, for whom, and in what order. That is a structured-context problem rather than a model problem, and it is where the durable product surface is.",
      },
      {
        heading: "Where we are",
        body: "Early, pre-launch, and building against a waitlist. Traction, financial and cap table details are shared directly with prospective investors rather than published here.",
      },
      {
        heading: "Starting a conversation",
        body: "Investor enquiries go through the contact form with the enquiry type set to investment. Expect a direct reply from the founder rather than an investor relations process.",
      },
    ],
  },

  {
    kind: "company",
    slug: "responsible-ai",
    title: "How We Use AI Responsibly",
    seoTitle: "Responsible AI at Mengo — what the system will and will not claim | Mengo",
    seoDescription:
      "Mengo generates marketing content, which makes claim safety a product requirement rather than a policy statement. This is how editorial guardrails work and where human review stays mandatory.",
    summary:
      "A system that writes marketing under your name can cause real damage by inventing one confident, specific, plausible fact. This page explains what Mengo does about that, and what remains your responsibility.",
    updated: "2026-08-25",
    sections: [
      {
        heading: "The failure mode we design against",
        body: "The risk in AI-assisted marketing is not bad prose, which is obvious and easily fixed. It is a fluent, specific, entirely invented claim — a statistic, a customer outcome, a regulatory assertion — published under your name. Guardrails exist because that failure is silent until someone challenges it.",
      },
      {
        heading: "What the guardrails do",
        bullets: [
          { label: "Claims are sourced or flagged", body: "Statistics and customer outcomes appear only where you supplied them. Anything unsourced surfaces as an explicit gap rather than being filled." },
          { label: "Industry rules are applied", body: "Regulated sectors carry blocked-language sets, so drafts in healthcare, financial services or legal practice arrive already constrained." },
          { label: "Superlatives are constrained", body: "Unprovable superlatives are rewritten into claims you could defend if asked." },
          { label: "Your banned list is enforced", body: "Words, constructions and claims you never want to see are hard constraints, not preferences." },
        ],
      },
      {
        heading: "What remains yours",
        body: "Guardrails reduce the failure rate substantially. They do not make you compliant. In regulated industries, human review before publication remains mandatory, and responsibility for what you publish stays with you. Where a jurisdiction requires professional sign-off — clinical, legal or financial — Mengo produces drafts for that review rather than replacing it.",
      },
      {
        heading: "On disclosure",
        body: "We think being explicit about where AI accelerates the work and where judgement is human tends to build more trust than concealing it. That is a recommendation rather than a requirement, and how you present your process is your decision.",
      },
    ],
  },
];

export const legalPages: LegalPage[] = [
  {
    kind: "legal",
    slug: "privacy-policy",
    title: "Privacy Policy",
    seoTitle: "Privacy Policy | Mengo",
    seoDescription:
      "How Mengo collects, uses and protects personal information submitted through this website and the Mengo product.",
    summary:
      "This policy explains what personal information Mengo collects through this website, why it is collected, how long it is kept and what rights you have over it.",
    updated: "2026-08-25",
    effective: "2026-08-25",
    sections: [
      { heading: "Who we are", body: "Mengo operates this website and the Mengo product. Contact details for privacy enquiries are on the contact page. The registered entity details and data controller identity are to be confirmed by Mengo before this policy is published as final." },
      { heading: "What we collect", bullets: [
        { label: "Information you give us", body: "Name, email address, phone number, company name and anything you write into a form or message." },
        { label: "Information about your visit", body: "Pages viewed, referring source and general device information, collected to understand how the site is used." },
        { label: "Product data", body: "Where you use the Mengo product, the business information you enter and the content generated from it." },
      ] },
      { heading: "Why we use it", body: "To respond to enquiries, to operate and improve the product, to send communications you have asked for, and to meet legal obligations. We do not sell personal information." },
      { heading: "Legal basis", body: "Where required, processing relies on your consent for marketing communications, on the performance of a contract for product use, and on legitimate interests for website analytics and security." },
      { heading: "How long we keep it", body: "Enquiry records are kept for as long as needed to respond and for a reasonable period afterwards. Product data is kept for the life of the account and deleted on request, subject to any legal retention requirement. Specific retention periods are to be confirmed by Mengo." },
      { heading: "Sharing", body: "Personal information is shared with service providers who host, send and support the service, under contract and only as needed to provide it. A current list of processors is available on request." },
      { heading: "Your rights", body: "Depending on your location, you may have the right to access, correct, delete, restrict or port your personal information, and to object to processing or withdraw consent. Requests can be made through the contact page." },
      { heading: "Cookies", body: "This site uses only what is necessary to operate and to understand aggregate usage. See the cookie policy for detail." },
      { heading: "Changes", body: "Material changes to this policy will be reflected in the effective date above." },
    ],
  },
  {
    kind: "legal",
    slug: "terms-of-service",
    title: "Terms of Service",
    seoTitle: "Terms of Service | Mengo",
    seoDescription: "The terms that govern use of the Mengo website and product, including acceptable use, content ownership and liability.",
    summary:
      "These terms govern your use of this website and the Mengo product. The governing law, entity details and commercial terms are to be confirmed by Mengo before final publication.",
    updated: "2026-08-25",
    effective: "2026-08-25",
    sections: [
      { heading: "Agreement", body: "By using this website or the Mengo product you agree to these terms. If you do not agree, do not use the service." },
      { heading: "Your account", body: "You are responsible for the accuracy of the information you provide, for keeping your credentials secure, and for activity under your account." },
      { heading: "Content you provide", body: "You retain ownership of the business information you enter. You grant Mengo the licence necessary to process it in order to provide the service." },
      { heading: "Content the service generates", body: "Subject to payment of any applicable fees, you own the marketing content generated for your business. You are responsible for reviewing it before publication, including for factual accuracy and regulatory compliance in your industry." },
      { heading: "Acceptable use", body: "You may not use the service to produce unlawful, deceptive, harassing or infringing content, to impersonate others, or to circumvent platform rules of the channels you publish to. See the acceptable use policy." },
      { heading: "AI-generated output", body: "Output is generated by automated systems and may contain errors. Editorial guardrails reduce but do not eliminate this. You remain responsible for what you publish." },
      { heading: "Availability", body: "The service is provided on an as-available basis. We aim for continuity but do not guarantee uninterrupted operation." },
      { heading: "Liability", body: "To the extent permitted by law, liability is limited. Specific limitation, warranty and indemnity terms are to be confirmed by Mengo with legal advice before final publication." },
      { heading: "Termination", body: "You may stop using the service at any time. We may suspend access for breach of these terms." },
      { heading: "Governing law", body: "The governing law and jurisdiction are to be confirmed by Mengo before final publication." },
    ],
  },
  {
    kind: "legal",
    slug: "cookie-policy",
    title: "Cookie Policy",
    seoTitle: "Cookie Policy | Mengo",
    seoDescription: "What cookies and similar technologies this website uses, why, and how to control them.",
    summary: "This page lists the categories of cookies and similar technologies used on this website and explains how to control them.",
    updated: "2026-08-25",
    effective: "2026-08-25",
    sections: [
      { heading: "What cookies are", body: "Small files stored by your browser that let a site remember information between pages and visits." },
      { heading: "What we use", bullets: [
        { label: "Strictly necessary", body: "Required for the site to function, including security and form submission. These cannot be switched off." },
        { label: "Analytics", body: "Used in aggregate to understand which pages are useful. Where required by your jurisdiction, these are set only with consent." },
      ] },
      { heading: "What we do not use", body: "This website does not run third-party advertising or cross-site tracking cookies." },
      { heading: "Controlling cookies", body: "Browsers allow cookies to be blocked or deleted. Blocking strictly necessary cookies may prevent parts of the site from working." },
      { heading: "Changes", body: "The specific cookie inventory is to be confirmed by Mengo and will be listed here once the production analytics configuration is final." },
    ],
  },
  {
    kind: "legal",
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    seoTitle: "Acceptable Use Policy | Mengo",
    seoDescription: "What the Mengo product may and may not be used to produce, including rules on deception, regulated claims and platform compliance.",
    summary:
      "Mengo generates marketing content at volume. This policy sets out what it may not be used to produce, and what obligations remain with you when you publish.",
    updated: "2026-08-25",
    effective: "2026-08-25",
    sections: [
      { heading: "Prohibited content", bullets: [
        { label: "Deception", body: "Fabricated reviews, invented testimonials, false scarcity, impersonation of a person or organisation, or misrepresentation of qualifications and accreditation." },
        { label: "Unlawful material", body: "Content that is unlawful in the market you publish to, including prohibited financial, medical and legal claims." },
        { label: "Harassment and hate", body: "Content targeting individuals or protected groups." },
        { label: "Infringement", body: "Content that infringes copyright, trade marks or other rights." },
      ] },
      { heading: "Regulated industries", body: "Where your industry regulates advertising claims, guardrails will block known-prohibited language, but you remain responsible for compliance and for obtaining any professional review your regulator requires." },
      { heading: "Messaging and consent", body: "Email, SMS and messaging sequences generated by Mengo must only be sent to contacts who have given valid consent under the rules of your jurisdiction. Consent capture and record-keeping remain your responsibility." },
      { heading: "Platform rules", body: "Content published to third-party platforms must comply with those platforms' own rules, including any disclosure requirements for sponsored or AI-assisted content." },
      { heading: "Enforcement", body: "Accounts used in breach of this policy may be suspended." },
    ],
  },
];

export const companyPageBySlug = new Map(companyPages.map((x) => [x.slug, x]));
export const legalPageBySlug = new Map(legalPages.map((x) => [x.slug, x]));
