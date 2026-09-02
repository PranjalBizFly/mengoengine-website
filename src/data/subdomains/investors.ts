import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The investor site.
 *
 * Register: corporate. Fact columns, tables, restrained motion, short
 * paragraphs. The reader is skimming for substance and is unusually alert to
 * padding.
 *
 * The governing constraint is stated on the main site's invest page and is
 * repeated here rather than worked around: "Early, pre-launch, and building
 * against a waitlist. Traction, financial and cap table details are shared
 * directly with prospective investors rather than published here."
 *
 * That means no revenue, no valuation, no funding history, no investor names, no
 * user numbers, no growth rates, no market sizing and no forecasts appear
 * anywhere on this site. Market sizing deserves a specific note: a TAM figure
 * lifted from an analyst report is the most common fabrication on an investor
 * page, and it is fabrication even when the underlying report is real, because
 * the applicability to this company is asserted rather than shown. The market
 * page therefore describes the population qualitatively and says so.
 */
export const investors: SubSite = {
  key: "investors",
  name: "Mengo Investor Relations",
  shortName: "Investors",
  tagline: "Investor information",
  description:
    "Investor information for Mengo: what the company is building, the thesis behind it, and how investor conversations are handled.",
  register: "corporate",
  nav: [
    { label: "Overview", path: "" },
    { label: "Business", path: "business" },
    { label: "Market", path: "market" },
    { label: "Strategy", path: "strategy" },
    { label: "Governance", path: "governance" },
    { label: "Contact", path: "contact" },
  ],
  pages: [
    {
      path: "",
      title: "Investor Relations",
      seoTitle: "Mengo Investor Relations",
      seoDescription:
        "Investor information for Mengo: an early-stage company building an AI co-founder for the marketing function. Financial details are shared directly rather than published.",
      hero: {
        kind: "split",
        eyebrow: "Investor relations",
        title: "Early, and direct about it",
        lead:
          "Mengo is building an AI co-founder for the marketing function of small businesses. Investor conversations are handled directly by the founder rather than through an investor relations process.",
        facts: [
          { label: "Stage", value: "Pre-launch, waitlist-driven" },
          { label: "Financials", value: "Shared directly, not published" },
          { label: "Cap table", value: "Not published" },
          { label: "Process", value: "A conversation with the founder" },
        ],
      },
      blocks: [
        {
          type: "callout",
          heading: "What this site does not contain",
          body:
            "No revenue, valuation, funding history, investor names, user numbers, growth rates, market size estimates or forecasts. As the main site states, traction, financial and cap table details are shared directly with prospective investors rather than published. Nothing on these pages should be read as a substitute for that conversation.",
          action: { label: "Start a conversation", href: "contact" },
        },
        {
          type: "prose",
          heading: "What we are building",
          body: [
            "A strategy and content layer for the marketing function: a system that takes a short business brief and produces positioning, a 365-day calendar, platform-native assets across more than a hundred formats, and objection-led nurture sequences.",
            "The wedge is the decision layer, not the drafting — the part of marketing that a general-purpose model does not address.",
          ],
        },
        {
          type: "prose",
          heading: "Why now",
          body: [
            "The cost of generating competent copy has collapsed, which has made competent copy worthless as a differentiator. What remains scarce is knowing what to make, for whom, and in what order.",
            "That is a structured-context problem rather than a model problem, and it is where the durable product surface is.",
          ],
        },
        {
          type: "index",
          heading: "More detail",
          links: [
            { label: "Company overview", href: "company", blurb: "What is published about the company itself." },
            { label: "Business model", href: "business", blurb: "How the product is intended to make money, and what is undecided." },
            { label: "Market", href: "market", blurb: "The population, described qualitatively and deliberately unsized." },
            { label: "Strategy", href: "strategy", blurb: "The wedge, the boundary, and what the company refuses to do." },
            { label: "Company updates", href: "updates", blurb: "The public record." },
            { label: "Financial information", href: "financials", blurb: "Not published, and why." },
            { label: "Governance", href: "governance", blurb: "What exists at this stage." },
          ],
        },
      ],
    },

    {
      path: "company",
      title: "Company overview",
      navLabel: "Company",
      group: "The company",
      seoTitle: "Company overview — Mengo for investors",
      seoDescription:
        "Published information about Mengo for prospective investors: what the company builds, its stage, and what is deliberately shared directly rather than published.",
      hero: {
        kind: "document",
        eyebrow: "The company",
        title: "Company overview",
        lead:
          "The published facts, arranged for an investor rather than a customer. Everything material is elsewhere, by design.",
      },
      blocks: [
        {
          type: "table",
          heading: "At a glance",
          columns: ["", ""],
          rows: [
            ["Product", "MengoEngine — a strategy and content layer for the marketing function"],
            ["Customer", "Small businesses where marketing is one person's fourth priority"],
            ["Founder", "Jainam Jain"],
            ["Stage", "Pre-launch, building against a waitlist"],
            ["Go to market", "Waitlist, access opening in batches"],
            ["Product boundary", "Writes and structures; does not publish, send or hold ad spend"],
          ],
        },
        {
          type: "prose",
          heading: "Why the company is narrow on purpose",
          body: [
            "Sending, publishing and pipeline management are solved problems with strong incumbents. Building them badly would make the product worse; building them well would mean competing where the company has no advantage and taking on deliverability, consent and spend obligations that change its risk profile entirely.",
            "For an investor the relevant consequence is that the product's surface area is small and its obligations are limited, which keeps the operating burden of a pre-revenue company correspondingly small.",
          ],
        },
        {
          type: "pending",
          heading: "Corporate and shareholder information",
          body:
            "Registered entity, incorporation details, share structure and shareholders are not published.",
          needs: [
            "Registered entity name, number and jurisdiction",
            "Share classes and capitalisation",
            "Existing shareholders and any prior rounds",
            "Directors and any board composition",
          ],
          action: { label: "About the company", href: siteUrl("about", "company"), external: true },
        },
      ],
    },

    {
      path: "business",
      title: "Business model",
      navLabel: "Business",
      group: "The business",
      seoTitle: "Business model — what is decided and what is not",
      seoDescription:
        "How Mengo intends to make money, the structural facts that shape the model, and an explicit statement that pricing and unit economics are not published.",
      hero: {
        kind: "document",
        eyebrow: "The business",
        title: "Business model",
        lead:
          "The structural facts are decided. The numbers are not, and this page does not construct them from plausible assumptions.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "What is structurally decided",
          intro:
            "These follow from product decisions already made and published, so they are not speculation.",
          items: [
            { label: "Software, not services", body: "The product generates the strategy and the content. There is no delivery team whose hours are being resold, which is the cost structure that separates this from an agency." },
            { label: "The customer keeps the artefacts", body: "The system stays with the business. That is a deliberate contrast with a retainer, and it shapes what the product can charge for — access to the engine rather than custody of the output." },
            { label: "No spend passes through", body: "Mengo does not hold ad budgets, so there is no media margin and no float. Revenue would be product revenue only." },
            { label: "Low integration burden", body: "Because the product requires no channel credentials, onboarding does not depend on connecting accounts — which removes the most common source of activation drop-off for marketing tools." },
          ],
        },
        {
          type: "pending",
          heading: "Pricing, unit economics and revenue",
          body:
            "Pricing has not been published, and every derived figure — revenue, margin, acquisition cost, retention, payback — depends on it. Constructing an illustrative model here would produce numbers that get quoted back as though they were the company's own projections.",
          needs: [
            "Pricing model and plan structure",
            "Gross margin, including inference cost per account",
            "Acquisition cost and channel mix",
            "Retention and expansion behaviour once there are customers",
            "Current revenue, if any, and runway",
          ],
          action: { label: "Request a conversation", href: "contact" },
        },
      ],
    },

    {
      path: "market",
      title: "Market",
      group: "The business",
      seoTitle: "Market — the population, described rather than sized",
      seoDescription:
        "The population Mengo is built for, described qualitatively. No market size estimate is published, and this page explains why a borrowed figure would be misleading.",
      hero: {
        kind: "document",
        eyebrow: "The business",
        title: "Market",
        lead:
          "Described rather than sized. A market page without a number is unusual, and the reason is worth reading before the description.",
      },
      blocks: [
        {
          type: "callout",
          heading: "Why there is no market size figure",
          body:
            "A total addressable market number on an early-stage page is almost always a real analyst figure applied to a company it was not measured for. The report may be genuine; the applicability is asserted rather than shown, and the number then anchors a conversation it has no business anchoring. Mengo has not commissioned market research, so none is cited.",
        },
        {
          type: "definitions",
          heading: "The population, qualitatively",
          intro:
            "Defined by a behaviour rather than by a firmographic band, because the behaviour is what makes the product relevant.",
          columns: 1,
          items: [
            {
              label: "The defining characteristic",
              body: "Businesses where marketing stops when the week gets busy. Not businesses without marketing budgets, and not businesses without ambition — businesses where the function has no external deadline and therefore loses to whatever is urgent.",
            },
            {
              label: "Where it concentrates",
              body: "Solo founders, professional services firms, and small teams where one person owns marketing alongside a different primary job. The main site organises much of its content around industries for this reason.",
            },
            {
              label: "Who is excluded, deliberately",
              body: "Businesses whose constraint is delivery capacity rather than demand, and businesses where nobody internally will own marketing. Both are stated publicly as poor fits, which narrows the addressable population and is intended to.",
            },
            {
              label: "The realistic alternative",
              body: "For most of this population the competitor is not another product — it is the marketing not happening. That shapes both the sales conversation and what counts as success.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Market analysis",
          body:
            "Sizing, segmentation and competitive analysis have not been produced or published.",
          needs: [
            "Addressable population sizing with a stated method",
            "Segment prioritisation and why",
            "Competitive landscape and displacement assumptions",
            "Pricing sensitivity evidence",
          ],
        },
      ],
    },

    {
      path: "strategy",
      title: "Strategy",
      group: "The business",
      seoTitle: "Strategy — the wedge and the boundary",
      seoDescription:
        "Mengo's strategy: entering through the decision layer rather than the drafting layer, and defending a deliberately narrow product boundary.",
      hero: {
        kind: "document",
        eyebrow: "The business",
        title: "Strategy",
        lead:
          "Two decisions carry most of the strategy: where the product enters, and what it refuses to become.",
      },
      blocks: [
        {
          type: "editorial",
          heading: "The two decisions",
          sections: [
            {
              heading: "Enter at the decision layer",
              body: "Most AI marketing products enter at drafting, which is the part that has been commoditised fastest and where a general-purpose assistant is a direct substitute. Mengo enters at the layer above: holding the strategy that decides which asset is worth producing. That is harder to build, harder to copy, and considerably harder to explain — which is a real go-to-market cost the company accepts deliberately.",
            },
            {
              heading: "Refuse to expand into execution",
              body: "Publishing, sending, ad spend and CRM are each an obvious next step and each is refused. The reasoning is published: those are solved problems with strong incumbents, and taking them on would import deliverability, consent and spend obligations that change what the product is. For an investor the question is whether that discipline holds under pressure to grow, which is a fair thing to probe.",
            },
            {
              heading: "Build against the waitlist",
              body: "Roadmap order is influenced by what people on the waitlist say they need, and access opens in batches. That trades early revenue for information, which is a defensible choice at this stage and an obvious one to challenge.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Plans and milestones",
          body:
            "Roadmap, launch timing, hiring plans and use of funds are shared directly rather than published.",
          needs: [
            "Product roadmap and launch timing",
            "Hiring plan and key roles",
            "Use of funds and the milestones they buy",
            "Key risks as the company sees them",
          ],
          action: { label: "Request a conversation", href: "contact" },
        },
      ],
    },

    {
      path: "updates",
      title: "Company updates",
      navLabel: "Updates",
      group: "Reporting",
      seoTitle: "Company updates — the public record",
      seoDescription:
        "The public record of Mengo company updates, and how updates to investors are handled while the company is pre-launch.",
      hero: {
        kind: "document",
        eyebrow: "Reporting",
        title: "Company updates",
        lead:
          "No public updates have been issued. Announcements, when made, appear on the media site; investor updates go directly to investors.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Two different things",
          body: [
            "A public announcement is news anyone can read, and belongs on the media site. An investor update is a periodic report to existing shareholders, and is sent rather than published.",
            "Neither exists yet in a formal sense, and combining them on a page would create the impression of a reporting cadence that has not been established.",
          ],
        },
        {
          type: "pending",
          heading: "Investor reporting",
          body:
            "There is no established investor update cadence, format or distribution list.",
          needs: [
            "Update frequency and format",
            "What metrics are reported once there are any",
            "Distribution and access arrangements",
          ],
          action: { label: "Announcements on the media site", href: siteUrl("media", "announcements"), external: true },
        },
      ],
    },

    {
      path: "financials",
      title: "Financial information",
      navLabel: "Financials",
      group: "Reporting",
      seoTitle: "Financial information — shared directly, not published",
      seoDescription:
        "Mengo does not publish financial information. What is shared with prospective investors, how, and why nothing is published here.",
      hero: {
        kind: "document",
        eyebrow: "Reporting",
        title: "Financial information",
        lead:
          "Not published. This is a stated company position rather than an omission, and it is repeated here in the same terms the main site uses.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The position",
          body: [
            "As published on the main site: traction, financial and cap table details are shared directly with prospective investors rather than published. That is the whole of it.",
            "A page like this on a larger company would carry statements, filings and reports. For a pre-launch company there is nothing of that kind, and constructing an illustrative version would be the single most serious misrepresentation available on this site — investor pages are read as though they carry a higher standard of care, and they should.",
          ],
        },
        {
          type: "pending",
          heading: "Financial disclosure",
          body:
            "Nothing is published, and nothing is estimated. What follows is what a prospective investor should expect to receive directly.",
          needs: [
            "Current revenue and runway",
            "Historical financial statements, where they exist",
            "Capitalisation table and any prior rounds",
            "Current fundraising status, terms and instrument",
            "Projections, with the assumptions behind them",
          ],
          action: { label: "Request a conversation", href: "contact" },
        },
      ],
    },

    {
      path: "governance",
      title: "Governance",
      group: "Reporting",
      seoTitle: "Governance — what exists at this stage",
      seoDescription:
        "Mengo's governance position: the published policies that constrain how the product behaves, and the corporate governance structures that do not yet exist.",
      hero: {
        kind: "document",
        eyebrow: "Reporting",
        title: "Governance",
        lead:
          "Two different things are often merged under this heading. The product governance is real and published; the corporate governance is not yet established.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "Product governance, which is published",
          intro:
            "These are enforceable commitments in the product rather than statements of intent, which makes them the substantive part of this page.",
          items: [
            { label: "Claims are sourced or flagged", body: "Statistics and customer outcomes appear only where the user supplied them. Anything unsourced surfaces as an explicit gap rather than being filled." },
            { label: "Regulated sectors carry constraints", body: "Blocked-language sets apply so drafts in healthcare, financial services or legal practice arrive already constrained." },
            { label: "Human review stays mandatory", body: "Guardrails reduce the failure rate; they do not confer compliance. Where a jurisdiction requires professional sign-off, the product produces drafts for that review rather than replacing it." },
            { label: "No custody of channels", body: "The product does not publish, send or hold ad spend, which limits both the obligations it takes on and the damage a failure could do." },
          ],
        },
        {
          type: "pending",
          heading: "Corporate governance",
          body:
            "Board, committees, policies and reporting lines have not been published, and at this size may not yet exist.",
          needs: [
            "Board composition and meeting cadence, if a board exists",
            "Any committees and their remits",
            "Conflict of interest, anti-bribery and whistleblowing policies",
            "Risk register and who owns it",
            "Auditor, if appointed",
          ],
        },
      ],
    },

    {
      path: "faq",
      title: "Investor FAQ",
      navLabel: "FAQ",
      group: "Reporting",
      seoTitle: "Investor FAQ — stage, raising and information access",
      seoDescription:
        "Direct answers to investor questions about Mengo: whether it is raising, what information is available, and why nothing financial is published.",
      hero: {
        kind: "document",
        eyebrow: "Reporting",
        title: "Investor FAQ",
        lead: "Short answers, several of which are that the information is not public.",
      },
      blocks: [
        {
          type: "faq",
          heading: "Questions",
          items: [
            {
              q: "Is Mengo currently raising?",
              a: "Not stated publicly. Investor enquiries go through the contact route with the enquiry type set to investment, and the answer comes directly from the founder.",
            },
            {
              q: "Why is there no financial information here?",
              a: "Because the company's published position is that traction, financial and cap table details are shared directly with prospective investors rather than published. Publishing an illustrative version would contradict that and would be quoted as though it were real.",
            },
            {
              q: "What about market size?",
              a: "No market research has been commissioned, so none is cited. A borrowed analyst figure would anchor a conversation it was not measured for.",
            },
            {
              q: "Who has invested so far?",
              a: "Not published. Cap table details are part of what is shared directly.",
            },
            {
              q: "How many users are there?",
              a: "Not published. The company is pre-launch with access opening in batches from a waitlist.",
            },
            {
              q: "What should I expect from a first conversation?",
              a: "A direct reply from the founder rather than an investor relations process. The company is small enough that the person building it is the person answering.",
            },
          ],
        },
      ],
    },

    {
      path: "contact",
      title: "Investor contact",
      navLabel: "Contact",
      group: "Reporting",
      seoTitle: "Investor contact — how conversations start",
      seoDescription:
        "How to start an investor conversation with Mengo: the route, what to include, and what to expect in reply.",
      hero: {
        kind: "document",
        eyebrow: "Reporting",
        title: "Investor contact",
        lead:
          "Investor enquiries go through the contact form with the enquiry type set to investment. Expect a direct reply from the founder rather than an investor relations process.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "What to include",
          items: [
            "Who you are and the kind of cheque you write, including stage and typical size.",
            "What specifically interests you about this — the decision-layer thesis, the customer, the founder, or something else.",
            "What you would need to see to proceed, so it is clear early whether that exists.",
            "Your timeline.",
            "Anything you would want to challenge. The strategy page names two decisions worth probing, and a conversation that starts there is more useful than one that starts with a deck request.",
          ],
        },
        {
          type: "callout",
          heading: "The route",
          body:
            "Use the contact form on the main site with the enquiry type set to investment. There is no dedicated investor relations address, and this page will not invent one.",
          action: { label: "Contact form", href: mainUrl("/contact/"), external: true },
        },
        {
          type: "index",
          heading: "Background reading",
          links: [
            { label: "Invest in Mengo", href: mainUrl("/company/invest/"), external: true, blurb: "The company's own statement of what it is building and why now." },
            { label: "About the company", href: siteUrl("about"), external: true, blurb: "The problem, the product and the founder." },
            { label: "Product documentation", href: siteUrl("docs"), external: true, blurb: "The most direct way to assess what has actually been built." },
          ],
        },
      ],
    },
  ],
};
