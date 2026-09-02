import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The partner site.
 *
 * Register: commercial. Qualification-led rather than persuasion-led — the
 * useful thing a partner page can do is let the wrong partner disqualify
 * themselves in ninety seconds.
 *
 * Honesty constraints. Mengo is pre-launch. There is no signed partner
 * agreement, no published margin, no tier structure and no named partners. What
 * can be written truthfully is substantial: which partner shapes fit a product
 * with this architecture, what each would actually do, where the boundaries sit,
 * and what a partnership conversation looks like today. Commercial terms carry
 * approved-content markers, and no partner is named anywhere on this site.
 */
export const partners: SubSite = {
  key: "partners",
  name: "Mengo Partners",
  shortName: "Partners",
  tagline: "The Mengo partner ecosystem",
  description:
    "How partnership with Mengo works: the partner types the product fits, what each contributes, the boundaries, and how a conversation starts.",
  register: "commercial",
  nav: [
    { label: "Home", path: "" },
    { label: "Partner types", path: "partner-types" },
    { label: "How it works", path: "how-it-works" },
    { label: "Resources", path: "resources" },
    { label: "FAQ", path: "faq" },
    { label: "Apply", path: "apply" },
  ],
  pages: [
    {
      path: "",
      title: "Mengo Partners",
      seoTitle: "Mengo Partners — the partner ecosystem",
      seoDescription:
        "Partnership with Mengo: which partner types the product actually fits, what the collaboration model looks like, and how to start a conversation while the programme is being defined.",
      hero: {
        kind: "editorial",
        eyebrow: "Partner programme",
        title: "Partnership, described honestly",
        lead:
          "Mengo is early. The partner programme is being defined rather than launched, and this site describes what is genuinely settled — which partner shapes fit, what each would do, and where the boundaries are.",
        actions: [
          { label: "Which partner are you?", href: "partner-types" },
          { label: "Start a conversation", href: "apply" },
        ],
        facts: [
          { label: "Stage", value: "Programme being defined" },
          { label: "Named partners", value: "None announced" },
          { label: "Commercial terms", value: "Not yet published" },
          { label: "What is open", value: "Conversations" },
        ],
      },
      blocks: [
        {
          type: "callout",
          heading: "Read this first",
          body:
            "There is no signed partner agreement, no published commission or margin structure, and no tier system. Anyone describing themselves as a Mengo partner today is describing an intention rather than a status. This site sets out the shape a partnership would take so that a conversation can start from something real.",
          action: { label: "What is not decided yet", href: "how-it-works" },
        },
        {
          type: "prose",
          heading: "What Mengo is, in partner terms",
          body: [
            "Mengo turns a short business brief into a marketing system: a strategy layer, a 365-day calendar, platform-native content, and objection-led nurture sequences. It writes and structures; it does not publish, send, hold ad spend, or act as a system of record.",
            "That boundary is the most important fact for any prospective partner, because it defines the space left over. Mengo removes the deciding and the drafting. It does not remove accountability, media buying, production, or the human relationship with a client — which is precisely where an agency or a consultant earns their fee.",
          ],
        },
        {
          type: "index",
          heading: "Four partner shapes",
          intro:
            "Different relationships with different economics. The pages below describe what each would actually do.",
          links: [
            { label: "Agency partners", href: "agency-partners", blurb: "Firms delivering marketing for clients who want to raise capacity without raising headcount." },
            { label: "Consulting partners", href: "consulting-partners", blurb: "Advisors who produce strategy and need it to survive contact with execution." },
            { label: "Technology partners", href: "technology-partners", blurb: "Tools that receive what Mengo produces — schedulers, email platforms, CRMs." },
            { label: "Strategic partners", href: "strategic-partners", blurb: "Organisations with distribution to a population Mengo is built for." },
          ],
        },
        {
          type: "definitions",
          heading: "Who this is not for",
          intro:
            "Said early because it saves the most time, and because a partner programme that claims to suit everyone suits nobody.",
          items: [
            { label: "Resellers wanting a margin today", body: "There is no published commercial structure to resell against. A conversation is welcome; a signed reseller arrangement is not currently available." },
            { label: "Anyone needing volume commitments", body: "Mengo is pre-launch with access opening in batches. Nobody can responsibly promise a partner a pipeline." },
            { label: "Agencies whose value is production", body: "If what a client buys from you is drafting, Mengo compresses that. The partnership works where your value is judgement, accountability and the relationship." },
            { label: "Platforms wanting posting access", body: "Mengo does not publish or send, and will not hold channel credentials. An integration that assumes it can is designing against the architecture." },
          ],
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "How Mengo works", href: mainUrl("/company/how-it-works/"), external: true },
            { label: "Compared with an agency", href: mainUrl("/compare/mengo-vs-a-marketing-agency/"), external: true },
            { label: "Affiliate and referral", href: siteUrl("affiliates"), external: true },
          ],
        },
      ],
    },

    {
      path: "partner-types",
      title: "Types of partner",
      navLabel: "Partner types",
      group: "The programme",
      seoTitle: "Types of Mengo partner — agency, consulting, technology, strategic",
      seoDescription:
        "The four partner shapes Mengo's architecture supports, what each contributes, what each gets, and the honest test for whether the fit is real.",
      hero: {
        kind: "split",
        eyebrow: "The programme",
        title: "Four shapes, four different economics",
        lead:
          "These are not tiers of the same relationship. They differ in what the partner contributes, what they need from Mengo, and what a working arrangement would look like.",
        facts: [
          { label: "Agency", value: "Delivers marketing for clients" },
          { label: "Consulting", value: "Produces strategy that must survive execution" },
          { label: "Technology", value: "Receives what Mengo produces" },
          { label: "Strategic", value: "Holds distribution to the right population" },
        ],
      },
      blocks: [
        {
          type: "table",
          heading: "At a glance",
          columns: ["Partner", "Contributes", "Needs from Mengo", "The honest test"],
          rows: [
            [
              "Agency",
              "Client relationships, accountability, media buying, production",
              "Capacity without headcount; a strategy layer that holds across accounts",
              "Is your value judgement, or is it drafting?",
            ],
            [
              "Consulting",
              "Diagnosis, positioning, senior judgement",
              "A way for recommendations to become a running system rather than a deck",
              "Do your engagements end where execution begins?",
            ],
            [
              "Technology",
              "The destination that acts on artefacts — scheduling, sending, CRM",
              "A clean artefact hand-off and a documented boundary",
              "Can you accept structured content without demanding posting rights?",
            ],
            [
              "Strategic",
              "Access to a population that has this specific problem",
              "Something genuinely useful to offer that population",
              "Would your audience thank you for the introduction?",
            ],
          ],
        },
        {
          type: "prose",
          heading: "Why the boundary makes agency partnership viable rather than competitive",
          body: [
            "The obvious objection is that a product which writes marketing competes with firms that write marketing. That is true only where the firm's value is the writing.",
            "The comparison pages on the main site put it directly: a good agency gives you experienced people who own outcomes, chase you for inputs, and bring pattern recognition from dozens of other businesses. Software does not replicate that. What software does replicate is the drafting and the deciding — which is the part of an agency's cost base that scales worst and is hardest to charge for honestly.",
          ],
        },
      ],
    },

    {
      path: "agency-partners",
      title: "Agency partnership",
      group: "Partner types",
      seoTitle: "Agency partnership — capacity without headcount",
      seoDescription:
        "How a marketing agency would work with Mengo: where the product raises capacity, what stays with the agency, and the client-ownership question that has to be answered first.",
      hero: {
        kind: "document",
        eyebrow: "Partner types",
        title: "Agency partnership",
        lead:
          "For firms delivering marketing for clients. The premise is capacity without headcount, and it only works if your value is judgement rather than production.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "Where the product would help",
          items: [
            { label: "The strategy layer per client", body: "Positioning, segments, offer ladder and channel ranking as stored, versioned objects rather than a deck that ages. Written once, edited when the business changes." },
            { label: "A year decided in advance", body: "A themed 365-day calendar per client removes the recurring planning meeting that neither side enjoys and nobody bills for properly." },
            { label: "First drafts at volume", body: "Assets arrive written to the anatomy of their format, in batches, which changes the junior workload from producing to reviewing." },
            { label: "Nurture sequences", body: "Objection-led follow-up is the deliverable most agencies underprice because it is unglamorous and time-consuming to write." },
          ],
        },
        {
          type: "checklist",
          heading: "What stays with the agency",
          intro: "None of this is displaced, and pretending otherwise would sell the partnership badly.",
          items: [
            "Accountability for the outcome, which is what the client is actually buying.",
            "Media buying, placement and budget management.",
            "Production — filming, design, photography.",
            "The judgement call about when the plan is wrong and should be overridden.",
            "The client relationship, including the difficult conversations.",
          ],
        },
        {
          type: "callout",
          heading: "The question to settle before anything else",
          body:
            "Who owns the brief and the strategy layer — the agency or the client? Mengo is designed so the system stays with the business it describes. An arrangement where the client cannot leave with their own positioning is one the product actively works against, and it is better to decide that deliberately than to discover it at the end of a retainer.",
          action: { label: "How Mengo compares with an agency", href: mainUrl("/compare/mengo-vs-a-marketing-agency/"), external: true },
        },
        {
          type: "pending",
          heading: "Agency commercial terms",
          body:
            "Pricing for multi-client use, whether agency accounts differ from direct accounts, and any margin or referral arrangement are undecided.",
          needs: [
            "Whether a multi-client account structure exists",
            "Pricing model for agencies and any volume treatment",
            "Margin, referral fee or discount structure, if any",
            "Client data ownership terms in an agency-held account",
            "Whether white-labelling is permitted",
          ],
          action: { label: "Start a conversation", href: "apply" },
        },
      ],
    },

    {
      path: "consulting-partners",
      title: "Consulting partnership",
      group: "Partner types",
      seoTitle: "Consulting partnership — strategy that survives execution",
      seoDescription:
        "How independent consultants and advisory firms would work with Mengo: turning a diagnosis into a running system rather than a document the client cannot operate.",
      hero: {
        kind: "document",
        eyebrow: "Partner types",
        title: "Consulting partnership",
        lead:
          "For advisors whose recommendations are sound and whose engagements end at the point where somebody has to execute them.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The problem this addresses",
          body: [
            "The recurring frustration in marketing consulting is not the quality of the diagnosis. It is that a good diagnosis is handed to a client who has no capacity to act on it, and six months later the positioning work is a document nobody has opened.",
            "Mengo is a way for a recommendation to become a running system. The strategy layer is exactly the artefact a consultant produces — positioning, segments, offer ladder, channel priorities — except that it is executable, and it generates the calendar and content that follow from it.",
          ],
        },
        {
          type: "steps",
          heading: "How an engagement could be shaped",
          steps: [
            { title: "Diagnose as usual", body: "The consulting work is unchanged. The judgement about what a business should be saying and to whom is not something the product supplies." },
            { title: "Encode the conclusion", body: "The brief and the strategy layer become where the recommendation lives, in a form the client can operate after you leave." },
            { title: "Validate the first outputs", body: "Review the first calendar and the first content batch against your own judgement. This is where a consultant adds most value and where the client is least equipped." },
            { title: "Hand over an operating rhythm", body: "The review agendas give the client something to run, which is the part that usually goes missing at the end of an engagement." },
            { title: "Return on a cadence", body: "Quarterly review of the strategy layer is a natural, honest recurring engagement rather than a retainer with vague scope." },
          ],
        },
        {
          type: "pending",
          heading: "Consulting arrangements",
          body:
            "Whether consultants can hold client accounts, and any referral or certification arrangement, are undecided.",
          needs: [
            "Whether a consultant can operate a client's account, and under what terms",
            "Any referral arrangement",
            "Whether a certification or training path is planned",
          ],
          action: { label: "Start a conversation", href: "apply" },
        },
      ],
    },

    {
      path: "technology-partners",
      title: "Technology partnership",
      group: "Partner types",
      seoTitle: "Technology partnership — the tools Mengo output lands in",
      seoDescription:
        "How scheduling, email and CRM platforms would partner with Mengo: what the product hands over, what it will never ask for, and why that makes integration low-risk.",
      hero: {
        kind: "document",
        eyebrow: "Partner types",
        title: "Technology partnership",
        lead:
          "For the platforms that act on what Mengo produces. The integration is unusually clean because Mengo will never ask for the thing platforms are most reluctant to grant.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Mengo does not want posting rights",
          body: [
            "Most content tools want to publish on your behalf, which means an integration conversation starts with scopes, tokens and the risk of something being posted under someone else's name. Mengo does not publish or send, so that conversation does not happen.",
            "What it produces is structure: dated calendar slots, format-native assets, and nurture sequences with an order, a cadence and one objection per message. A partner platform receives those and does what it already does well.",
          ],
        },
        {
          type: "table",
          heading: "What each destination receives",
          columns: ["Platform type", "Receives", "Retains"],
          rows: [
            ["Scheduling and publishing", "Dated slots and format-native assets", "Publication timing, account connections"],
            ["Email and automation", "Sequence structure and copy", "Sending, deliverability, consent records"],
            ["CRM", "Intent segment definitions and scoring signals", "Contact records and pipeline state"],
            ["Analytics", "The metric set definitions", "Measurement and the data"],
          ],
        },
        {
          type: "callout",
          heading: "The interface is not published yet",
          body:
            "There is no public API, SDK or webhook catalogue. The developer portal documents the integration model and marks every specification as awaiting official documentation, which is the right place to start a technical conversation.",
          action: { label: "Developer portal", href: siteUrl("developers"), external: true },
        },
        {
          type: "pending",
          heading: "Technology partnership terms",
          body:
            "Listing arrangements, co-marketing, technical support commitments and any revenue share are undecided.",
          needs: [
            "Whether a partner directory or marketplace listing will exist",
            "Technical support commitments in both directions",
            "Co-marketing terms and brand usage rules",
            "Any revenue share or referral arrangement",
          ],
          action: { label: "Start a conversation", href: "apply" },
        },
      ],
    },

    {
      path: "strategic-partners",
      title: "Strategic partnership",
      group: "Partner types",
      seoTitle: "Strategic partnership — distribution to the right population",
      seoDescription:
        "Organisations with access to founders and small businesses — accelerators, associations, banks, communities — and how a partnership with Mengo could serve them honestly.",
      hero: {
        kind: "document",
        eyebrow: "Partner types",
        title: "Strategic partnership",
        lead:
          "For organisations that already hold the attention of the people Mengo is built for, and are careful about what they put in front of them.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Who this means in practice",
          body: [
            "Accelerators and incubators, trade associations, chambers of commerce, business banking and accounting practices, startup communities, and educational programmes — organisations whose members are small businesses where marketing keeps stopping because nobody has time to decide what to do next.",
            "The reason this is a distinct partner type rather than a large affiliate arrangement is that the relationship is reputational. An association that recommends a tool is spending trust it took years to build, which means the conversation has to start with whether the recommendation is genuinely good for the member rather than with commercial terms.",
          ],
        },
        {
          type: "definitions",
          heading: "What would have to be true",
          items: [
            { label: "Your population has this problem", body: "Businesses where marketing is one person's fourth priority. If your members have marketing teams, the fit is weaker and worth saying so." },
            { label: "They have delivery capacity", body: "Generating demand for a business that cannot serve it damages them. This is the disqualifier Mengo's own site states plainly, and it applies to a partner's members too." },
            { label: "Somebody will own it internally", body: "Mengo removes the work, not the responsibility. A member with nobody accountable for marketing will not be helped by a better system." },
            { label: "You can be honest about the stage", body: "Mengo is pre-launch. A partner introducing it has to be comfortable describing it as early rather than as established." },
          ],
        },
        {
          type: "pending",
          heading: "Strategic partnership terms",
          body:
            "Member pricing, co-branded arrangements and any commercial structure are undecided, and are exactly the terms this kind of partner needs before committing their reputation.",
          needs: [
            "Whether member or cohort pricing is possible",
            "Co-branding and communication approval process",
            "Onboarding support for a group rather than an individual",
            "Any commercial arrangement, and whether it must be disclosed to members",
          ],
          action: { label: "Start a conversation", href: "apply" },
        },
      ],
    },

    {
      path: "partner-benefits",
      title: "What a partner would get",
      navLabel: "Benefits",
      group: "The programme",
      seoTitle: "Partner benefits — what is real today and what is undecided",
      seoDescription:
        "An honest account of what partnering with Mengo offers now — access, influence over the roadmap, and early information — and which commercial benefits are undecided.",
      hero: {
        kind: "document",
        eyebrow: "The programme",
        title: "What a partner would get",
        lead:
          "Split into what is genuinely available today and what depends on decisions nobody has made. A benefits page that blurred the two would be the least trustworthy page on this site.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "Available now",
          intro: "These follow from the stage rather than from a programme, which is why they are real.",
          items: [
            { label: "Direct access to the people building it", body: "There is no partner manager layer. Conversations are with the small team making the decisions, which is an advantage of early-stage that disappears later." },
            { label: "Genuine influence on the roadmap", body: "What gets built next is decided partly by what people on the waitlist say they need. A partner describing a concrete blocker is unusually likely to affect priority." },
            { label: "Early visibility", body: "Knowing what is coming, and when a capability you depend on is not coming, is worth more to a partner planning delivery than most formal benefits." },
            { label: "A product boundary you can rely on", body: "Mengo will not start publishing, sending or buying media. For an agency or a platform, a supplier that will not expand into your work is a real commercial benefit." },
          ],
        },
        {
          type: "pending",
          heading: "Commercial and programme benefits",
          body:
            "Margin, discounts, tiers, certification, lead sharing, directory listing and co-marketing budgets are all undecided. These are the benefits a mature programme leads with, and inventing them here would be making commitments on behalf of a business that has not agreed to them.",
          needs: [
            "Margin, discount or commission structure",
            "Tier definitions and qualification criteria, if tiers exist",
            "Certification or training programme",
            "Lead sharing or referral routing",
            "Partner directory listing and co-marketing support",
            "Support commitments and escalation paths for partners",
          ],
          action: { label: "Register interest", href: "apply" },
        },
      ],
    },

    {
      path: "how-it-works",
      title: "How partnership works",
      navLabel: "How it works",
      group: "Process",
      seoTitle: "How Mengo partnership works — the process as it exists today",
      seoDescription:
        "The partnership process at Mengo's current stage: a conversation, a fit assessment, and a pilot — rather than an application form and a tier assignment.",
      hero: {
        kind: "document",
        eyebrow: "Process",
        title: "How partnership works",
        lead:
          "There is no application portal and no tier assignment. The process is a conversation, which is both the honest description and, at this stage, the more useful one.",
      },
      blocks: [
        {
          type: "steps",
          heading: "The process",
          steps: [
            { title: "You describe the fit", body: "What you do, who your clients or members are, and what specifically you would want from Mengo. Concrete beats enthusiastic." },
            { title: "We say whether it works", body: "Including when it does not. A partner told early that the product does not fit their model has lost an email; one told late has lost a quarter." },
            { title: "A real conversation", body: "About the boundary, what is built, what is not, and what you would be depending on that does not exist yet." },
            { title: "A pilot rather than an agreement", body: "With no published commercial terms, the sensible next step is one client or one cohort — small enough that being wrong is cheap." },
            { title: "Terms when there are terms", body: "A formal arrangement follows the commercial model being decided. Nobody is asked to sign something that has not been written." },
          ],
        },
        {
          type: "prose",
          heading: "Why it is not an application form",
          body: [
            "An application form implies a programme with criteria, a review process and an outcome. None of those exist yet, and a form would create the impression of a queue that nobody is working through.",
            "The direct conversation is also better information for both sides. What a partner needs is usually specific — a capability, a data ownership arrangement, a timeline — and a form is exactly the wrong shape for capturing it.",
          ],
        },
      ],
    },

    {
      path: "onboarding",
      title: "Partner onboarding",
      navLabel: "Onboarding",
      group: "Process",
      seoTitle: "Partner onboarding — what preparation is genuinely useful",
      seoDescription:
        "What a prospective Mengo partner can usefully prepare before a formal onboarding programme exists: understanding the boundary, the brief, and the review workflow.",
      hero: {
        kind: "document",
        eyebrow: "Process",
        title: "Partner onboarding",
        lead:
          "There is no onboarding programme to enrol in. There is preparation that would make a partnership work, and it is the same preparation whatever the eventual programme looks like.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "Preparation that is not wasted",
          items: [
            "Understand the boundary precisely — no publishing, no sending, no ad spend, no system of record. Most partner misunderstandings trace back to one of these four.",
            "Learn the brief. It is the product's only input, and the quality of everything downstream depends on how it is answered. A partner who can run a good briefing conversation is a partner whose clients get good output.",
            "Understand reflow. Correcting the strategy layer changes the calendar and the assets. A partner who edits artefacts instead will conclude the product does not learn.",
            "Decide who owns the brief in your arrangement — you or the client. This is a commercial and ethical question, not a technical one.",
            "Read the responsible-AI position, because a partner putting generated content in front of a client inherits the claim-safety obligation.",
          ],
        },
        {
          type: "index",
          heading: "Where to learn each of those",
          links: [
            { label: "Core concepts", href: siteUrl("docs", "concepts"), external: true, blurb: "The six objects the system is built from." },
            { label: "Setup: the business brief", href: siteUrl("docs", "setup"), external: true, blurb: "What the brief asks and what makes an answer useful." },
            { label: "Platform overview", href: siteUrl("docs", "platform"), external: true, blurb: "The five engines and how a change propagates." },
            { label: "Responsible AI", href: mainUrl("/company/responsible-ai/"), external: true, blurb: "Guardrails, and what remains a human obligation." },
          ],
        },
        {
          type: "pending",
          heading: "The onboarding programme",
          body: "Training, certification, sandbox access and partner documentation are undecided.",
          needs: [
            "Whether partner training or certification will exist",
            "Sandbox or demonstration access for partners",
            "Partner-specific documentation and support routes",
            "Timeline from agreement to first client",
          ],
        },
      ],
    },

    {
      path: "resources",
      title: "Partner resources",
      navLabel: "Resources",
      group: "Process",
      seoTitle: "Partner resources — what exists today",
      seoDescription:
        "The material a Mengo partner can use today: public product documentation, comparison pages and brand assets — and the partner-specific collateral that does not exist yet.",
      hero: {
        kind: "document",
        eyebrow: "Process",
        title: "Partner resources",
        lead:
          "Everything listed here is public and real. Partner-only collateral — decks, one-pagers, co-branded material — does not exist, and this page does not pretend otherwise.",
      },
      blocks: [
        {
          type: "index",
          heading: "Available today",
          links: [
            { label: "Product documentation", href: siteUrl("docs"), external: true, blurb: "The system described in order. The best preparation for any client conversation." },
            { label: "Help centre", href: siteUrl("support"), external: true, blurb: "Failure modes and diagnosis, which is what clients ask about second." },
            { label: "Comparison pages", href: mainUrl("/compare/"), external: true, blurb: "Honest positioning against agencies, hires, chatbots and schedulers." },
            { label: "Brand assets", href: siteUrl("media", "brand-assets"), external: true, blurb: "The logo and its usage rules, on the media site." },
            { label: "Who Mengo is for", href: mainUrl("/company/who-its-for/"), external: true, blurb: "Including who it is not for — the fastest qualification tool available." },
          ],
        },
        {
          type: "pending",
          heading: "Partner collateral",
          body:
            "A partner deck, co-branded templates, client-facing one-pagers and case material would normally live here.",
          needs: [
            "An approved partner deck and one-pager",
            "Co-branding rules and templates",
            "Client-facing material a partner may use unedited",
            "Case material — which requires customers and their consent",
          ],
        },
      ],
    },

    {
      path: "faq",
      title: "Partner FAQ",
      navLabel: "FAQ",
      group: "Process",
      seoTitle: "Partner FAQ — competition, terms, exclusivity and stage",
      seoDescription:
        "Direct answers on whether Mengo competes with agencies, what commercial terms exist, exclusivity, and what partnering with a pre-launch product actually means.",
      hero: {
        kind: "document",
        eyebrow: "Process",
        title: "Partner FAQ",
        lead: "The questions that come up, answered without the usual softening.",
      },
      blocks: [
        {
          type: "faq",
          heading: "Questions",
          items: [
            {
              q: "Does Mengo compete with my agency?",
              a: "Where your value is drafting and deciding, yes — that is what the product does, and pretending otherwise would waste your time. Where your value is accountability, judgement, media buying, production and the client relationship, no. The comparison page on the main site sets out the boundary in detail and is deliberately fair to agencies.",
            },
            {
              q: "What commission or margin is available?",
              a: "None is published. There is no commercial structure to quote, and quoting one that had not been agreed would be the most damaging thing this site could do.",
            },
            {
              q: "Is there exclusivity by territory or sector?",
              a: "No, and nothing suggests there will be. Exclusivity is a commitment that constrains a company far more than it looks like it does at the point of signing.",
            },
            {
              q: "Can I white-label Mengo for my clients?",
              a: "Undecided. It also runs against the product's design, which keeps the system with the business it describes — a client who cannot see or take their own strategy layer is in a weaker position than the product intends.",
            },
            {
              q: "What does partnering with a pre-launch product actually mean?",
              a: "Access opens in batches, capabilities change, and some things you might depend on do not exist. In exchange you get direct access to the people building it and real influence over what comes next. Whether that trade is good depends entirely on your risk tolerance and your timeline.",
            },
            {
              q: "Can I say I am a Mengo partner?",
              a: "Not yet, because there is no partner status to hold. Describing an intention as a partnership would misrepresent both sides, and brand usage rules are on the media site.",
            },
          ],
        },
      ],
    },

    {
      path: "apply",
      title: "Start a partner conversation",
      navLabel: "Apply",
      group: "Process",
      seoTitle: "Start a Mengo partner conversation",
      seoDescription:
        "How to begin a partnership conversation with Mengo, what to include so the first reply is substantive, and which enquiries belong on the vendor or affiliate sites instead.",
      hero: {
        kind: "document",
        eyebrow: "Process",
        title: "Start a conversation",
        lead:
          "Not an application, because there is no programme to be admitted to. A conversation, with enough detail that the first reply is an answer.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "What to include",
          items: [
            "Which of the four partner shapes you are closest to, and where the description does not quite fit you.",
            "Who your clients or members are, specifically enough to judge whether they are the population Mengo is built for.",
            "What you would want from Mengo, in terms of capability rather than commercial terms.",
            "What you would be depending on that does not exist yet — this is the most useful thing you can tell us.",
            "Your timeline, and whether the pre-launch stage is a blocker or acceptable.",
          ],
        },
        {
          type: "callout",
          heading: "Where the enquiry goes",
          body:
            "Partnership enquiries go through the contact form on the main site with the enquiry type set appropriately. Expect a direct reply rather than a partner-management process, and expect a straight answer if the fit is not there.",
          action: { label: "Contact form", href: mainUrl("/contact/"), external: true },
        },
        {
          type: "index",
          heading: "Some enquiries belong elsewhere",
          links: [
            { label: "Supplying Mengo", href: siteUrl("vendors"), external: true, blurb: "If you want to sell to Mengo rather than partner with it." },
            { label: "Affiliate and referral", href: siteUrl("affiliates"), external: true, blurb: "If you want to refer individuals rather than build a delivery relationship." },
            { label: "Technical integration", href: siteUrl("developers"), external: true, blurb: "If the question is about interfaces rather than commercials." },
            { label: "Press and media", href: siteUrl("media"), external: true, blurb: "If you are writing about Mengo." },
          ],
        },
        {
          type: "pending",
          heading: "A partner application process",
          body:
            "A dedicated intake route, qualification criteria and a stated response time would all belong here once a programme exists.",
          needs: [
            "A partner enquiry route separate from general contact",
            "Qualification criteria, if the programme is selective",
            "A stated response time for partner enquiries",
          ],
        },
      ],
    },
  ],
};
