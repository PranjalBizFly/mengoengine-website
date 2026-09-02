import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The sustainability site.
 *
 * Register: corporate.
 *
 * This is the destination in the ecosystem most prone to invention, because the
 * genre has a fixed shape — a commitment, a target year, a percentage, a
 * certification — and the shape is easy to fill convincingly. Mengo has
 * published no environmental data, holds no certification, has made no
 * commitment and has no measurement in place. So no figure, target, offset
 * claim or framework reference appears anywhere here.
 *
 * What can be written honestly turns out to be more interesting than the genre
 * usually allows: a very small pre-launch software company's real environmental
 * question is inference and hosting, not commuting or paper, and its real
 * governance question is what the product does to the information environment.
 * The site says that, declines to greenwash, and marks everything measurable as
 * awaiting approved data.
 */
export const sustainability: SubSite = {
  key: "sustainability",
  name: "Mengo Sustainability",
  shortName: "Sustainability",
  tagline: "Our position, stated honestly",
  description:
    "Mengo's sustainability position: what a pre-launch software company can honestly say, what it has not measured, and what it refuses to claim.",
  register: "corporate",
  nav: [
    { label: "Overview", path: "" },
    { label: "Approach", path: "approach" },
    { label: "Priorities", path: "priorities" },
    { label: "Governance", path: "governance" },
    { label: "Progress", path: "progress" },
    { label: "Contact", path: "contact" },
  ],
  pages: [
    {
      path: "",
      title: "Sustainability",
      seoTitle: "Sustainability at Mengo — our position, stated honestly",
      seoDescription:
        "Mengo has published no environmental data, holds no certification and has made no commitments. What a pre-launch software company can honestly say about sustainability.",
      hero: {
        kind: "split",
        eyebrow: "Sustainability",
        title: "No claims, and the reason why",
        lead:
          "Mengo has not measured its environmental impact, holds no certification, and has made no public commitments. This site says that plainly rather than filling the space with the genre's usual language.",
        facts: [
          { label: "Certifications", value: "None" },
          { label: "Emissions measured", value: "Not measured" },
          { label: "Targets set", value: "None" },
          { label: "Offsets purchased", value: "None" },
        ],
      },
      blocks: [
        {
          type: "callout",
          heading: "Why this page is not the usual one",
          body:
            "A sustainability page has a familiar shape — a commitment, a target year, a percentage reduction, a certification badge — and that shape is easy to fill convincingly without any of it being true. Mengo has no measurement, no target and no certification, and the honest version of this site is therefore mostly a description of what has not been done and what would have to happen first.",
        },
        {
          type: "prose",
          heading: "What is actually true",
          body: [
            "Mengo is a very small, pre-launch software company. Its environmental footprint is dominated by two things: the compute used to generate content, and the hosting behind the product and this site. Not commuting, not paper, not travel — the categories a template sustainability page tends to lead with.",
            "Neither has been measured. Saying so is more useful than an unmeasured statement of intent, because the first thing anyone assessing this should know is whether there is data behind it. There is not.",
          ],
        },
        {
          type: "index",
          heading: "The rest of this site",
          links: [
            { label: "Our approach", href: "approach", blurb: "The principle applied here, and why it is the same one the product uses." },
            { label: "Priorities", href: "priorities", blurb: "What would actually matter for a company of this shape." },
            { label: "Environment", href: "environment", blurb: "Compute and hosting — the only material categories." },
            { label: "People and workplace", href: "people", blurb: "What can be said with no published team." },
            { label: "Governance", href: "governance", blurb: "The information environment, which is the substantive part." },
            { label: "Progress", href: "progress", blurb: "Nothing to report, and what reporting would require." },
            { label: "Reports", href: "reports", blurb: "None published." },
          ],
        },
      ],
    },

    {
      path: "approach",
      title: "Our approach",
      navLabel: "Approach",
      group: "Position",
      seoTitle: "Our approach — measure before claiming",
      seoDescription:
        "Mengo applies the same rule to its sustainability statements that its product applies to marketing claims: no assertion without a source.",
      hero: {
        kind: "document",
        eyebrow: "Position",
        title: "Our approach",
        lead:
          "One principle, and it is the same one the product enforces: a claim without a source does not get made.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The same rule the product applies",
          body: [
            "Mengo's editorial guardrails restrict factual and numerical claims to what a user has supplied, and surface anything unsourced as an explicit gap rather than filling it with something plausible. It would be difficult to defend a product that behaves that way while its own sustainability page carried unmeasured percentages.",
            "So the rule here is the same. No figure appears without measurement behind it, no target without a plan, and no certification reference without a certificate.",
          ],
        },
        {
          type: "definitions",
          heading: "What that rules out",
          items: [
            { label: "Intensity metrics with no baseline", body: "A per-user or per-request figure requires knowing both numerator and denominator. Neither is measured." },
            { label: "Offset claims", body: "None have been purchased, and offset purchases are in any case a weak substitute for reduction in a company whose footprint has never been measured." },
            { label: "Carbon-neutral or net-zero language", body: "Both are specific claims with definitions attached. Using them loosely is the most common form of greenwashing." },
            { label: "Framework alignment", body: "No reporting framework has been adopted. Naming one to signal seriousness would be exactly the behaviour this page is written against." },
            { label: "Supplier claims inherited as our own", body: "A hosting provider's renewable commitments belong to the provider. Restating them here as though they were the company's own achievement is a common and misleading move." },
          ],
        },
      ],
    },

    {
      path: "priorities",
      title: "Priorities",
      group: "Position",
      seoTitle: "Sustainability priorities — what would actually matter",
      seoDescription:
        "The sustainability priorities that would be material for a small pre-launch software company: compute intensity, hosting, and the product's effect on the information environment.",
      hero: {
        kind: "document",
        eyebrow: "Position",
        title: "Priorities",
        lead:
          "Written as an assessment of what would be material for a company of this shape, rather than as a list of commitments nobody has made.",
      },
      blocks: [
        {
          type: "table",
          heading: "Materiality assessment",
          intro:
            "An honest ranking. Several of the categories a template would include are genuinely immaterial here, and saying so is part of taking the subject seriously.",
          columns: ["Category", "Materiality", "Why"],
          rows: [
            ["Compute for generation", "High", "The product generates a year of content per customer; inference is the dominant recurring cost and the dominant footprint"],
            ["Hosting and infrastructure", "Moderate", "A static-heavy site and an application, both small, but persistent"],
            ["Product effect on information quality", "High", "A system that writes marketing at volume affects the information environment, which is a governance question this company cannot avoid"],
            ["Travel and commuting", "Low", "A very small pre-launch company"],
            ["Physical goods and waste", "Low", "No physical product, no premises published"],
            ["Supply chain", "Low", "Software suppliers only"],
          ],
        },
        {
          type: "prose",
          heading: "Why the third row is on this list",
          body: [
            "Most sustainability pages treat the subject as environmental only. For a company whose product generates marketing content at scale, the more significant externality is what that content does to the information environment — whether it adds noise, and whether it can assert things that are not true.",
            "That is not a rhetorical move to avoid talking about emissions. It is where a product like this has the most leverage and the most responsibility, and it is the one area where Mengo has already made and published enforceable decisions.",
          ],
        },
      ],
    },

    {
      path: "environment",
      title: "Environmental considerations",
      navLabel: "Environment",
      group: "Areas",
      seoTitle: "Environmental considerations — compute and hosting",
      seoDescription:
        "The two environmental categories that are material for Mengo — compute for content generation and hosting — and the fact that neither has been measured.",
      hero: {
        kind: "document",
        eyebrow: "Areas",
        title: "Environmental considerations",
        lead:
          "Two material categories, neither measured. The design choices that affect them are real and worth stating; the numbers are not available.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "Design choices that affect compute",
          intro:
            "These were made for product reasons rather than environmental ones, but they have an effect and it is honest to say which way.",
          columns: 1,
          items: [
            {
              label: "Batch generation rather than continuous",
              body: "Content arrives a week or a month at a time rather than being regenerated on demand. Fewer, larger generations for the same output.",
            },
            {
              label: "Specific rejection rather than wholesale regeneration",
              body: "Rejections name the failing part — the hook, the close, a claim — so only that part regenerates. Regenerating a whole asset because one line is wrong is the wasteful pattern this avoids.",
            },
            {
              label: "Reflow rather than rebuild",
              body: "An upstream correction propagates to what it affects rather than triggering a full regeneration of the year.",
            },
            {
              label: "Structured context rather than long prompts",
              body: "The strategy layer is a stored object the system reads from, rather than context re-supplied on every request.",
            },
            {
              label: "Reuse at the idea level",
              body: "Repurposing works from the argument rather than re-processing finished text, which is the cheaper operation as well as the better editorial one.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Measurement",
          body:
            "None of the above is quantified. Without measurement they are design descriptions rather than environmental claims, and they are presented as such.",
          needs: [
            "Compute footprint per account and in total, with a stated method",
            "Hosting provider, regions, and their published energy position",
            "A baseline year and what is in scope",
            "Whether any reduction target will be set, and against what",
            "Whether reporting will be published, and how often",
          ],
        },
      ],
    },

    {
      path: "people",
      title: "People and workplace",
      navLabel: "People",
      group: "Areas",
      seoTitle: "People and workplace — what can be said",
      seoDescription:
        "What Mengo can honestly say about people and workplace with no published team: the founder's public work with young people, and everything that is not established.",
      hero: {
        kind: "document",
        eyebrow: "Areas",
        title: "People and workplace",
        lead:
          "There is no published team, which makes most of this section unwritable. What exists is one publicly documented strand of work.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What is published",
          body: [
            "The founder delivers keynotes, webinars, workshops and seminars aimed particularly at young people, intended to help them build confidence, sharpen focus and turn potential into purpose, and mentors young people to think like founders. That is published on the main site and is the one people-related activity with a public record.",
            "It is a personal strand of work rather than a company programme, and it is described that way here rather than being presented as corporate social responsibility.",
          ],
        },
        {
          type: "pending",
          heading: "Workplace policies",
          body:
            "Everything a workplace section would normally contain requires a published team and established policies. Neither exists.",
          needs: [
            "Team size and composition",
            "Employment policies, working arrangements and leave",
            "Diversity and inclusion position and any data",
            "Health, safety and wellbeing arrangements",
            "Learning and development provision",
            "Any community or volunteering programme run by the company rather than by the founder personally",
          ],
          action: { label: "Careers", href: siteUrl("careers"), external: true },
        },
      ],
    },

    {
      path: "governance",
      title: "Governance",
      group: "Areas",
      seoTitle: "Governance — the information environment",
      seoDescription:
        "The governance question that matters most for an AI marketing product: what the system is allowed to assert, and the published, enforceable rules that constrain it.",
      hero: {
        kind: "document",
        eyebrow: "Areas",
        title: "Governance",
        lead:
          "The substantive part of this site. For a product that writes marketing at volume, the most consequential governance question is what it is allowed to assert.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The externality this product could create",
          body: [
            "A system that generates marketing content for many businesses at once has an obvious failure mode beyond its own customers: it can flood the information environment with confident, specific, invented claims published under real companies' names.",
            "That is not a hypothetical risk, and it is not primarily an environmental question. It is the one area where this company's decisions have material consequences beyond its own operations, which is why it appears in a sustainability section rather than only in a product page.",
          ],
        },
        {
          type: "definitions",
          heading: "Published, enforceable constraints",
          intro:
            "These are product behaviours rather than statements of intent, which is what makes them different from the rest of this site.",
          items: [
            { label: "Claims are sourced or flagged", body: "Statistics and customer outcomes appear only where the user supplied them. Anything unsourced surfaces as an explicit gap rather than being filled." },
            { label: "Superlatives are constrained", body: "Unprovable superlatives are rewritten into claims a user could defend if challenged." },
            { label: "Regulated sectors carry blocked language", body: "Drafts in healthcare, financial services and legal practice arrive already constrained." },
            { label: "Human review stays mandatory", body: "Guardrails reduce the failure rate; they do not confer compliance. Where a jurisdiction requires professional sign-off, the product produces drafts for that review rather than replacing it." },
            { label: "Responsibility stays with the publisher", body: "The company states plainly that responsibility for what a user publishes remains theirs. That is a limit on the product's claims about itself." },
          ],
        },
        {
          type: "callout",
          heading: "On disclosure",
          body:
            "The company's published position is that being explicit about where AI accelerates work and where judgement is human tends to build more trust than concealing it — offered as a recommendation to users rather than a requirement.",
          action: { label: "Responsible AI in full", href: mainUrl("/company/responsible-ai/"), external: true },
        },
        {
          type: "pending",
          heading: "Corporate governance",
          body: "Board, policies and oversight structures are not published.",
          needs: [
            "Board or oversight arrangements",
            "Anti-bribery, conflict of interest and whistleblowing policies",
            "Risk register and ownership",
            "Any external ethics input on the product's guardrails",
          ],
        },
      ],
    },

    {
      path: "progress",
      title: "Progress",
      group: "Reporting",
      seoTitle: "Progress — nothing to report",
      seoDescription:
        "Mengo has no sustainability progress to report because it has set no targets and taken no baseline measurement. What would have to happen first.",
      hero: {
        kind: "document",
        eyebrow: "Reporting",
        title: "Progress",
        lead:
          "Nothing to report. Progress requires a baseline and a target, and neither exists — so this page describes what would have to happen before it could contain anything.",
      },
      blocks: [
        {
          type: "steps",
          heading: "What would have to happen first",
          intro:
            "In order. Most sustainability reporting fails at the first step and reports against the third.",
          steps: [
            { title: "Decide what is in scope", body: "For this company that means compute, hosting and the supply chain behind them. Deciding scope before measuring is what stops a boundary being drawn around a convenient answer." },
            { title: "Measure a baseline", body: "With a stated method, so it can be checked and repeated. An unrepeatable baseline makes every later comparison meaningless." },
            { title: "Set a target that costs something", body: "A target already achieved by ordinary growth is not a target. This is the step most often skipped." },
            { title: "Report against it, including failures", body: "A progress report that only ever shows progress is a marketing document. The value is in the years it does not." },
          ],
        },
        {
          type: "callout",
          heading: "The commitment this page does make",
          body:
            "When there is something to report, it will be reported with its method attached and its failures included. That is the only commitment on this site, and it is one that can be kept.",
        },
      ],
    },

    {
      path: "reports",
      title: "Reports",
      group: "Reporting",
      seoTitle: "Sustainability reports — none published",
      seoDescription:
        "No sustainability reports have been published by Mengo. What a first report would need to contain to be worth publishing.",
      hero: {
        kind: "document",
        eyebrow: "Reporting",
        title: "Reports",
        lead:
          "None published. A short page, because the alternative is a page-length explanation of why an absence is really a presence.",
      },
      blocks: [
        {
          type: "pending",
          heading: "Sustainability reporting",
          body:
            "No report has been produced. When one is, it should be checkable rather than persuasive — which means the method matters more than the presentation.",
          needs: [
            "A reporting framework, if one is adopted, and why that one",
            "Scope and boundary definitions",
            "Baseline year and measurement method",
            "Whether any figures are externally assured",
            "Reporting frequency",
          ],
        },
        {
          type: "callout",
          heading: "What is published today",
          body:
            "The legal and product policies on the main site are the documents that currently constrain company behaviour, and the governance page here explains the product constraints that go beyond them.",
          action: { label: "Governance", href: "governance" },
        },
      ],
    },

    {
      path: "faq",
      title: "Sustainability FAQ",
      navLabel: "FAQ",
      group: "Reporting",
      seoTitle: "Sustainability FAQ",
      seoDescription:
        "Questions about Mengo's sustainability position: certifications, emissions, offsets, and why this site makes no claims.",
      hero: {
        kind: "document",
        eyebrow: "Reporting",
        title: "Sustainability FAQ",
        lead: "Short answers, most of which are no.",
      },
      blocks: [
        {
          type: "faq",
          heading: "Questions",
          items: [
            {
              q: "Is Mengo carbon neutral?",
              a: "No. The company has not measured its emissions, has purchased no offsets, and makes no neutrality claim. Both terms have specific definitions and using them loosely is the most common form of greenwashing.",
            },
            {
              q: "What are your emissions?",
              a: "Not measured. The material categories would be compute for content generation and hosting; both are unquantified.",
            },
            {
              q: "Do you hold any environmental certification?",
              a: "No.",
            },
            {
              q: "Have you set any targets?",
              a: "No. The progress page sets out the four steps that would have to happen before a target would mean anything.",
            },
            {
              q: "Your hosting provider says it runs on renewable energy — doesn't that count?",
              a: "That is the provider's commitment, not this company's achievement. Restating a supplier's position as your own is a common and misleading move, and it is one this site avoids.",
            },
            {
              q: "Why does the governance page talk about content rather than the environment?",
              a: "Because for a product that writes marketing at volume, the largest externality is what it does to the information environment. That is where this company's decisions have consequences beyond its own operations, and it is the one area where enforceable rules already exist.",
            },
          ],
        },
      ],
    },

    {
      path: "contact",
      title: "Contact",
      group: "Reporting",
      seoTitle: "Sustainability contact",
      seoDescription:
        "How to raise a sustainability question with Mengo, including from a procurement or due-diligence process.",
      hero: {
        kind: "document",
        eyebrow: "Reporting",
        title: "Contact",
        lead:
          "For questions about anything on this site, including from a procurement or due-diligence process that requires sustainability information.",
      },
      blocks: [
        {
          type: "callout",
          heading: "If you are running a procurement assessment",
          body:
            "The short answer is that Mengo has no environmental data, certification or targets, and cannot complete a sustainability questionnaire with figures. If that is a hard requirement in your process, it is better to know now. The vendor site covers the security and compliance side of the same assessment.",
          action: { label: "Vendor information", href: siteUrl("vendors"), external: true },
        },
        {
          type: "callout",
          heading: "The route",
          body:
            "Sustainability enquiries go through the contact form on the main site. There is no dedicated address.",
          action: { label: "Contact form", href: mainUrl("/contact/"), external: true },
        },
      ],
    },
  ],
};
