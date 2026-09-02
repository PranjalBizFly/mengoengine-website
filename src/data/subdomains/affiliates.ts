import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The affiliate site.
 *
 * Register: commercial. Process-led, with an unusual amount of space given to
 * responsible promotion — which is not decoration. An affiliate programme for a
 * marketing product attracts exactly the promotion style the product exists to
 * argue against, and saying so early is both honest and a filter.
 *
 * The hard constraint is commission. No rate, structure, cookie window or payout
 * threshold has been agreed, and every one of those is a number a prospective
 * affiliate would plan around. They are marked as awaiting approved content
 * rather than estimated. The educational material on attribution and disclosure
 * is genuinely useful and entirely true, so the site is substantial without
 * being speculative.
 */
export const affiliates: SubSite = {
  key: "affiliates",
  name: "Mengo Affiliates",
  shortName: "Affiliates",
  tagline: "Referring Mengo",
  description:
    "How referring Mengo would work: who it suits, how attribution behaves, what responsible promotion means, and which commercial terms are still undecided.",
  register: "commercial",
  nav: [
    { label: "Home", path: "" },
    { label: "How it works", path: "how-it-works" },
    { label: "Eligibility", path: "eligibility" },
    { label: "Resources", path: "resources" },
    { label: "Terms", path: "terms" },
    { label: "Apply", path: "apply" },
  ],
  pages: [
    {
      path: "",
      title: "Mengo Affiliates",
      seoTitle: "Mengo Affiliates — the referral programme",
      seoDescription:
        "How referring Mengo would work, who the programme suits, what responsible promotion of an AI marketing product means, and which commercial terms are undecided.",
      hero: {
        kind: "editorial",
        eyebrow: "Referral programme",
        title: "Referring Mengo",
        lead:
          "The programme is being defined rather than launched. What is settled — who it suits, how attribution works, and what responsible promotion means here — is on this site. Commission is not, and is not guessed at.",
        actions: [
          { label: "How it would work", href: "how-it-works" },
          { label: "Register interest", href: "apply" },
        ],
        facts: [
          { label: "Stage", value: "Programme being defined" },
          { label: "Commission", value: "Not published" },
          { label: "Cookie window", value: "Not published" },
          { label: "What is open", value: "Registering interest" },
        ],
      },
      blocks: [
        {
          type: "callout",
          heading: "No commission rate is published",
          body:
            "There is no rate, no tier structure, no cookie window and no payout threshold. Those are the numbers an affiliate plans around, and publishing an estimate would be the single most misleading thing this site could do. They are marked as awaiting approved content on the commission page rather than filled with something plausible.",
          action: { label: "What is undecided", href: "commission" },
        },
        {
          type: "prose",
          heading: "Why this site spends so long on how to promote",
          body: [
            "An affiliate programme for an AI marketing tool attracts a specific kind of promotion: inflated claims, invented results, and content that exists to rank rather than to inform. That style would work against the product directly — Mengo's entire argument is that competent copy is no longer scarce and that judgement is, and it ships editorial guardrails specifically to stop confident invented claims going out under someone's name.",
            "So the standards here are stricter than a commission-first programme would set, and they are stated before the commercial terms rather than buried in an agreement.",
          ],
        },
        {
          type: "index",
          heading: "The programme",
          links: [
            { label: "How it works", href: "how-it-works", blurb: "The referral model, and where attribution genuinely sits." },
            { label: "Eligibility", href: "eligibility", blurb: "Who this suits, and who it does not." },
            { label: "Commission", href: "commission", blurb: "Undecided — and why no figure appears." },
            { label: "Tracking and attribution", href: "tracking", blurb: "How referral attribution actually behaves, including where it fails." },
            { label: "Promotion resources", href: "resources", blurb: "What you may use, and how to write about Mengo accurately." },
            { label: "Programme terms", href: "terms", blurb: "The rules that would apply." },
          ],
        },
      ],
    },

    {
      path: "how-it-works",
      title: "How the programme works",
      navLabel: "How it works",
      group: "The programme",
      seoTitle: "How the Mengo affiliate programme works",
      seoDescription:
        "The referral model for Mengo: a waitlist-stage product means referrals lead to a list rather than a purchase, which changes what an affiliate is actually being paid for.",
      hero: {
        kind: "document",
        eyebrow: "The programme",
        title: "How it works",
        lead:
          "The mechanics are ordinary. The complication is stage: Mengo is pre-launch, so a referral today leads to a waitlist rather than a purchase.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The stage problem, stated plainly",
          body: [
            "In a normal affiliate programme the chain is simple: someone clicks your link, buys, and you are paid a share. Mengo has no purchase to make. Access opens in batches from a waitlist, and there is no published price.",
            "That leaves two honest possibilities, and which one is chosen is a business decision that has not been made. Either the programme launches when the product does, and referrals made now are unattributed goodwill. Or referrals are attributed from the waitlist onward, in which case the attribution window has to survive a gap of unknown length between signup and purchase — which is a genuinely hard problem, not a detail.",
          ],
        },
        {
          type: "steps",
          heading: "The model, once there is one",
          intro:
            "The shape most likely to apply, described so you can judge whether it would fit how you work. None of it is a commitment.",
          steps: [
            { title: "You are given a referral link", body: "A unique link identifying you as the source. Nothing here is unusual." },
            { title: "Someone follows it and joins the waitlist", body: "This is where a normal programme records a sale and this one records an intention. The gap between the two is the design problem." },
            { title: "Access opens in a batch", body: "Possibly weeks or months later, which is longer than a typical attribution window is designed to survive." },
            { title: "They become a paying customer", body: "Assuming pricing exists by then, and that they still want it." },
            { title: "Attribution is resolved", body: "Against whatever rule the eventual terms set. That rule is the whole programme, and it does not exist yet." },
          ],
        },
        {
          type: "callout",
          heading: "What this means if you are deciding today",
          body:
            "If your model depends on predictable per-referral revenue, this programme cannot be evaluated yet and probably should not be. If you would recommend Mengo to your audience regardless of commission, registering interest costs nothing and puts you in the conversation about how the programme is designed.",
          action: { label: "Register interest", href: "apply" },
        },
      ],
    },

    {
      path: "eligibility",
      title: "Who can take part",
      navLabel: "Eligibility",
      group: "The programme",
      seoTitle: "Affiliate eligibility — who this suits and who it does not",
      seoDescription:
        "Who the Mengo referral programme is designed for, the promotion styles that would not be accepted, and the audience characteristics that make a referral genuinely useful.",
      hero: {
        kind: "document",
        eyebrow: "The programme",
        title: "Who can take part",
        lead:
          "Written as a filter rather than an invitation. The wrong affiliate for this product costs more in reputation than they generate in signups.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "This fits well when",
          items: [
            { label: "Your audience is small businesses that market inconsistently", body: "Founders and one-person marketing teams where the work stops when the week gets busy. That is the specific failure Mengo is designed around." },
            { label: "You already advise rather than sell", body: "Consultants, educators, community operators and writers whose audience trusts them to filter. A recommendation from that position is worth something to the reader." },
            { label: "You are comfortable describing an early product", body: "Mengo is pre-launch. An affiliate who has to imply maturity to make the recommendation work is in the wrong programme." },
            { label: "You would recommend it without a commission", body: "The most reliable test. If the answer is no, the content will read like it, and audiences are better at detecting that than affiliates usually assume." },
          ],
        },
        {
          type: "definitions",
          heading: "This fits badly when",
          items: [
            { label: "Your model needs guaranteed conversion volume", body: "Access opens in batches from a waitlist. Nobody can responsibly promise throughput." },
            { label: "You promote through coupon and deal sites", body: "There is no pricing and therefore no discount. There is nothing here for that channel to work with." },
            { label: "Your content is written to rank rather than to inform", body: "Mengo's whole argument is that generic content has lost its value. Promoting it with generic content is self-defeating, and would not be accepted." },
            { label: "You would need to invent results", body: "There are no published customer outcomes, statistics or case studies. An affiliate needing those to promote effectively would have to make them up, which is the specific behaviour the product ships guardrails against." },
          ],
        },
        {
          type: "callout",
          heading: "The audience test",
          body:
            "Before anything else: would the person following your link thank you for the introduction six months later? A business whose real constraint is delivery capacity rather than demand will be harmed by more demand, and Mengo's own site says so plainly. Referring them is a bad referral even when it converts.",
          action: { label: "Who Mengo is for", href: mainUrl("/company/who-its-for/"), external: true },
        },
      ],
    },

    {
      path: "commission",
      title: "Commission",
      group: "The programme",
      seoTitle: "Affiliate commission — not published",
      seoDescription:
        "No commission rate, structure, cookie window or payout threshold has been published for the Mengo affiliate programme, and this page explains why none is estimated.",
      hero: {
        kind: "document",
        eyebrow: "The programme",
        title: "Commission",
        lead:
          "Undecided, and deliberately not estimated. This is the page a prospective affiliate opens first, which is exactly why a plausible-looking number would do the most damage here.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why there is no indicative figure",
          body: [
            "An affiliate reading a rate will model revenue against it, decide how much effort the programme is worth, and in some cases produce content on the strength of it. A figure published before it was agreed would be a commitment made by a web page rather than by the business, and the correction later would land on people who acted in good faith.",
            "It also cannot be derived. Commission depends on pricing, and Mengo has not published pricing. There is no number to take a percentage of.",
          ],
        },
        {
          type: "pending",
          heading: "Commission structure and payment terms",
          body:
            "Every commercial term of the programme sits here. Each depends on decisions about pricing and attribution that have not been made.",
          needs: [
            "Commission rate and whether it is one-time or recurring",
            "Whether rates are tiered, and on what basis",
            "Cookie window and the attribution rule across the waitlist gap",
            "Payout threshold, schedule and method",
            "Currency, tax treatment and self-billing arrangements",
            "Clawback policy for refunds and cancellations",
            "Whether referrals made before launch are recognised",
          ],
          action: { label: "Register interest", href: "apply" },
        },
        {
          type: "callout",
          heading: "The one thing you can rely on",
          body:
            "Whatever is decided will be published here before anyone is asked to promote on the strength of it. Nobody will be invited to generate referrals against terms that have not been written down.",
        },
      ],
    },

    {
      path: "tracking",
      title: "Tracking and attribution",
      navLabel: "Tracking",
      group: "The programme",
      seoTitle: "Referral tracking and attribution — how it actually behaves",
      seoDescription:
        "How referral attribution works in practice, the four ways it commonly fails, and why the gap between a waitlist signup and a purchase makes it harder here than usual.",
      hero: {
        kind: "document",
        eyebrow: "The programme",
        title: "Tracking and attribution",
        lead:
          "Useful whether or not you ever join this programme. Attribution is more fragile than affiliate marketing usually admits, and the failure modes are worth knowing.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What attribution actually claims",
          body: [
            "A referral link records that a particular visit came from a particular source, and an attribution rule decides which recorded source gets credit for a later purchase. Both halves are assumptions rather than observations — the link records a click, not a cause, and the rule allocates credit rather than measuring it.",
            "That is not an argument against affiliate programmes. It is an argument for understanding what the number means, because affiliates who treat attribution as measurement are consistently surprised by it.",
          ],
        },
        {
          type: "table",
          heading: "Where attribution commonly fails",
          columns: ["Failure", "What happens", "Effect on an affiliate"],
          rows: [
            ["Cross-device", "Read on a phone, signed up on a laptop", "Referral lost entirely"],
            ["Window expiry", "The decision takes longer than the cookie lasts", "Credit lost to a later touch or to none"],
            ["Storage cleared", "Privacy settings or a different browser", "Referral lost"],
            ["Last-touch overwrite", "Another source is visited before signup", "Credit reassigned"],
            ["Direct return", "The person types the address later", "Referral lost"],
          ],
        },
        {
          type: "prose",
          heading: "Why the waitlist makes this harder here",
          body: [
            "In a normal programme the gap between click and purchase is short enough for a thirty- or sixty-day window to work. Mengo opens access in batches, so the gap between a referred signup and a purchase could be months, and no ordinary cookie window survives that.",
            "The realistic answer is to attribute at the point of waitlist signup and carry that attribution forward on the account, rather than depending on a browser to remember. Whether that is what the programme does is an unmade decision, and it is the main one this programme has to get right.",
          ],
        },
        {
          type: "pending",
          heading: "The tracking implementation",
          body:
            "Link format, storage mechanism, attribution rule and reporting are unspecified.",
          needs: [
            "Referral link format and parameter",
            "How attribution is stored, and for how long",
            "The rule across the waitlist-to-purchase gap",
            "What reporting an affiliate can see, and how current it is",
            "Dispute process for contested attribution",
          ],
        },
      ],
    },

    {
      path: "resources",
      title: "Promotion resources",
      navLabel: "Resources",
      group: "Promotion",
      seoTitle: "Promotion resources — writing about Mengo accurately",
      seoDescription:
        "What an affiliate may use when writing about Mengo, the claims that are accurate, the claims that are not, and why accuracy matters more than usual for this product.",
      hero: {
        kind: "document",
        eyebrow: "Promotion",
        title: "Promotion resources",
        lead:
          "No swipe copy, because swipe copy is how twelve affiliates end up publishing the same paragraph. What is here is the accurate description, and the claims to avoid.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "Accurate things you can say",
          intro:
            "All drawn from published material. Each is defensible if a reader challenges it.",
          columns: 1,
          items: [
            { label: "What it produces", body: "A strategy layer, a 365-day calendar themed by month and week, platform-native assets across a large set of defined formats, objection-led nurture sequences, and a small metric set with a decision attached to each number." },
            { label: "What it refuses to do", body: "It does not publish, send, hold ad spend, buy media, produce video or act as a system of record. Saying this makes a recommendation more credible, not less." },
            { label: "How it handles claims", body: "Editorial guardrails restrict factual and numerical claims to what the user supplied; anything unsourced surfaces as an explicit gap rather than being invented." },
            { label: "Who it is not for", body: "Businesses where delivery is the constraint rather than demand, and businesses where nobody internally will own marketing. Mengo's own site says both." },
            { label: "The stage", body: "Pre-launch, with access opening in batches from a waitlist. Not describing this is the most likely way an affiliate misleads someone here." },
          ],
        },
        {
          type: "definitions",
          heading: "Claims to avoid",
          items: [
            { label: "Any performance figure", body: "No published statistics about results, growth or time saved exist. A number in your content would be invented, and would be attributed to Mengo by readers." },
            { label: "Customer counts or names", body: "None are published. There are no case studies to reference." },
            { label: "Pricing or value comparisons", body: "There is no published price, so any cost comparison against an agency or a hire is fabricated." },
            { label: "“Replaces your marketing team”", body: "The product removes work, not accountability. Its own comparison pages are explicit that judgement, media buying and production stay human." },
            { label: "Implied endorsement", body: "Writing as though you speak for Mengo, or describing yourself as a partner, misrepresents the relationship." },
          ],
        },
        {
          type: "index",
          heading: "Material you can use",
          links: [
            { label: "Brand assets and usage rules", href: siteUrl("media", "brand-assets"), external: true, blurb: "The logo, and what may be done with it." },
            { label: "Comparison pages", href: mainUrl("/compare/"), external: true, blurb: "Honest positioning against the alternatives, written by Mengo." },
            { label: "How Mengo works", href: mainUrl("/company/how-it-works/"), external: true, blurb: "The five-step description, accurate to the product." },
            { label: "Product documentation", href: siteUrl("docs"), external: true, blurb: "If you want to write about it in depth." },
          ],
        },
        {
          type: "callout",
          heading: "On disclosure",
          body:
            "Disclose the relationship clearly wherever you promote. Beyond the legal requirement in most jurisdictions, an undisclosed affiliate recommendation for a marketing product is exactly the credibility problem the product argues against. Prominent and plain, not a footnote.",
        },
      ],
    },

    {
      path: "terms",
      title: "Programme terms",
      navLabel: "Terms",
      group: "Promotion",
      seoTitle: "Affiliate programme terms — the rules that would apply",
      seoDescription:
        "The conduct rules that would apply to Mengo affiliates, which are settled in principle, and the contractual terms that have not been drafted.",
      hero: {
        kind: "document",
        eyebrow: "Promotion",
        title: "Programme terms",
        lead:
          "The conduct rules are settled in principle because they follow from the company's published positions. The contract does not exist.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "Conduct rules that would apply",
          intro:
            "These follow from the acceptable use policy and the responsible-AI position, so they are stable even though the agreement is not written.",
          items: [
            "No invented statistics, outcomes, customers or endorsements.",
            "No bidding on Mengo brand terms in paid search without written permission.",
            "No misrepresenting the relationship — you are not a partner, employee or spokesperson.",
            "No promotion through unsolicited email, or to lists without proper consent.",
            "Clear and prominent disclosure of the affiliate relationship wherever a link appears.",
            "No promotion to businesses the product is explicitly not for, where you know that to be the case.",
            "No content that presents Mengo as generally available while it is pre-launch.",
          ],
        },
        {
          type: "pending",
          heading: "The affiliate agreement",
          body:
            "The contractual terms — the enforceable version of the rules above, plus everything commercial — have not been drafted.",
          needs: [
            "The affiliate agreement itself, with legal review",
            "Termination grounds and process",
            "Clawback and fraud provisions",
            "Brand and trademark usage permissions",
            "Jurisdiction and dispute resolution",
            "How changes to terms are notified",
          ],
        },
      ],
    },

    {
      path: "faq",
      title: "Affiliate FAQ",
      navLabel: "FAQ",
      group: "Promotion",
      seoTitle: "Affiliate FAQ — commission, stage and what is possible now",
      seoDescription:
        "Direct answers about the Mengo affiliate programme: what exists, what does not, and whether it is worth registering interest at this stage.",
      hero: {
        kind: "document",
        eyebrow: "Promotion",
        title: "Affiliate FAQ",
        lead: "Short answers, including several that are simply no.",
      },
      blocks: [
        {
          type: "faq",
          heading: "Questions",
          items: [
            {
              q: "Can I join the affiliate programme today?",
              a: "No, because there is not one to join. You can register interest, which puts you in the conversation about how it is designed and means you hear when terms are published.",
            },
            {
              q: "What is the commission rate?",
              a: "Undecided. It also cannot be derived, because commission depends on pricing and no pricing has been published.",
            },
            {
              q: "Will referrals I make now be credited later?",
              a: "Unknown, and that is one of the specific decisions the programme has to make. Do not generate referrals on the assumption that they will be.",
            },
            {
              q: "Can I write a review of Mengo?",
              a: "Yes, and you do not need a programme to do it. The promotion resources page lists what is accurate and what would be invented, which is the part worth reading before you publish.",
            },
            {
              q: "Are there case studies or results I can quote?",
              a: "No. None are published, which means any figure in a review would be fabricated. This is the most common way affiliate content about early products goes wrong.",
            },
            {
              q: "Is this different from the partner programme?",
              a: "Yes. Affiliates refer; partners deliver. If you would be implementing Mengo for clients rather than recommending it to an audience, the partner site is the right place.",
            },
          ],
        },
      ],
    },

    {
      path: "apply",
      title: "Register interest",
      navLabel: "Apply",
      group: "Promotion",
      seoTitle: "Register interest in the Mengo affiliate programme",
      seoDescription:
        "How to register interest in the Mengo referral programme, what to include, and what registering does and does not commit either side to.",
      hero: {
        kind: "document",
        eyebrow: "Promotion",
        title: "Register interest",
        lead:
          "Not an application, since there is no programme to be admitted to. Registering means you are in the conversation about how it should work and you hear when terms exist.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "What to include",
          items: [
            "Who your audience is, specifically — the closer they are to small businesses whose marketing keeps stopping, the better the fit.",
            "How you would promote: written review, course, newsletter, community. The channel matters more than the size.",
            "Roughly how many people you reach, honestly. Nobody is being screened on scale at this stage.",
            "Whether commission terms are a condition of your involvement. A straight answer here is useful rather than awkward.",
            "Anything about the waitlist-gap attribution problem that you have solved elsewhere — that is genuinely valuable input.",
          ],
        },
        {
          type: "callout",
          heading: "What registering commits you to",
          body:
            "Nothing. There are no terms to accept, no exclusivity and no obligation to promote. Equally, it does not create an affiliate relationship or entitle anyone to describe themselves as one.",
          action: { label: "Contact form", href: mainUrl("/contact/"), external: true },
        },
        {
          type: "index",
          heading: "Other routes",
          links: [
            { label: "Partner programme", href: siteUrl("partners"), external: true, blurb: "If you would deliver Mengo to clients rather than refer." },
            { label: "Join the waitlist", href: mainUrl("/get-started/"), external: true, blurb: "If you want to use the product yourself first — which is the strongest basis for recommending it." },
            { label: "Press and media", href: siteUrl("media"), external: true, blurb: "If you are writing editorially rather than promotionally." },
          ],
        },
      ],
    },
  ],
};
