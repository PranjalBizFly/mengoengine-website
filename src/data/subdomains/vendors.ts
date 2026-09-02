import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The vendor portal.
 *
 * Register: commercial, with a corporate lean. Requirements, tables and process
 * rather than persuasion — the reader is either selling to Mengo or assessing
 * Mengo as a supplier, and both want facts in a fixed order.
 *
 * Two audiences, deliberately separated. Suppliers to Mengo need the
 * procurement path. Companies assessing Mengo as their own vendor need security
 * and compliance information, and arrive here because that is where a
 * procurement team looks. Both are served, and each page says which direction it
 * is talking about — conflating them is how a security questionnaire gets
 * answered with a supplier onboarding policy.
 *
 * The absolute constraint: no certification, audit, framework alignment or
 * compliance claim appears anywhere on this site. Mengo has published none, and
 * a fabricated SOC 2 or ISO reference in a vendor portal is not a copy problem —
 * it is a misrepresentation that procurement teams rely on and that would
 * survive into signed contracts. What is stated instead is architectural fact,
 * which is verifiable and genuinely useful.
 */
export const vendors: SubSite = {
  key: "vendors",
  name: "Mengo Vendors",
  shortName: "Vendors",
  tagline: "Supplying Mengo, and assessing Mengo",
  description:
    "The vendor portal: how to supply Mengo, and the security and compliance information a company needs when assessing Mengo as a supplier.",
  register: "commercial",
  nav: [
    { label: "Home", path: "" },
    { label: "Overview", path: "vendor-overview" },
    { label: "Requirements", path: "vendor-requirements" },
    { label: "Security", path: "security" },
    { label: "Procurement", path: "procurement" },
    { label: "Contact", path: "contact" },
  ],
  pages: [
    {
      path: "",
      title: "Mengo Vendors",
      seoTitle: "Mengo Vendors — supplying Mengo and assessing Mengo",
      seoDescription:
        "The vendor portal for Mengo: how suppliers engage with a pre-launch company, and the security and compliance information procurement teams need to assess Mengo.",
      hero: {
        kind: "editorial",
        eyebrow: "Vendor portal",
        title: "Two directions, one portal",
        lead:
          "Some readers want to supply Mengo. Others are assessing Mengo as a supplier to them. Both are answered here, and every page says which direction it is describing.",
        actions: [
          { label: "Assessing Mengo", href: "security" },
          { label: "Supplying Mengo", href: "vendor-overview" },
        ],
        facts: [
          { label: "Company stage", value: "Pre-launch" },
          { label: "Certifications", value: "None claimed" },
          { label: "Binding document", value: "The published privacy policy" },
          { label: "Procurement", value: "Direct, not tendered" },
        ],
      },
      blocks: [
        {
          type: "callout",
          heading: "On certifications",
          body:
            "Mengo holds no security certification, has completed no third-party audit, and claims no framework alignment. Nothing on this site should be read as asserting otherwise. If your procurement process requires an attestation, Mengo cannot currently satisfy it, and it is better to know that on the first page than after a questionnaire.",
          action: { label: "What can be stated", href: "security" },
        },
        {
          type: "index",
          heading: "If you are assessing Mengo",
          intro:
            "The information a procurement or security team needs, in the order they usually need it.",
          links: [
            { label: "Security information", href: "security", blurb: "The architectural facts that reduce risk, and what is not certified." },
            { label: "Compliance", href: "compliance", blurb: "Data handling, the binding policy, and what is not claimed." },
            { label: "Integration", href: "integration", blurb: "What Mengo connects to, and what it never asks for." },
            { label: "Vendor FAQ", href: "faq", blurb: "The questions questionnaires ask." },
          ],
        },
        {
          type: "index",
          heading: "If you want to supply Mengo",
          links: [
            { label: "Vendor overview", href: "vendor-overview", blurb: "What a pre-launch company buys, and what it does not." },
            { label: "Requirements", href: "vendor-requirements", blurb: "What is expected of a supplier." },
            { label: "Onboarding", href: "onboarding", blurb: "How a supplier relationship starts." },
            { label: "Procurement", href: "procurement", blurb: "How buying decisions are actually made here." },
            { label: "Resources", href: "resources", blurb: "Documents that exist, and those that do not." },
          ],
        },
      ],
    },

    {
      path: "vendor-overview",
      title: "Vendor ecosystem overview",
      navLabel: "Vendor overview",
      group: "Supplying Mengo",
      seoTitle: "Vendor ecosystem overview — what a pre-launch company buys",
      seoDescription:
        "What Mengo procures at its current stage, how buying decisions are made without a procurement function, and the categories where a supplier conversation is realistic.",
      hero: {
        kind: "document",
        eyebrow: "Supplying Mengo",
        title: "Vendor ecosystem overview",
        lead:
          "Mengo is a small, pre-launch company. That shapes what it buys, how quickly it decides, and which supplier conversations are worth either side's time.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The honest description of the buyer",
          body: [
            "There is no procurement department, no vendor management system and no annual purchasing cycle. Decisions are made by a small team, quickly, and usually because something is blocking work rather than because a category review came round.",
            "For a supplier that has two consequences. Cycles are short — a decision can happen in days rather than quarters. And volumes are small, so a supplier whose model requires a substantial minimum commitment is unlikely to find a fit regardless of how good the product is.",
          ],
        },
        {
          type: "table",
          heading: "Where a conversation is realistic",
          intro:
            "Categories rather than named needs, and no commitment that any of these are currently being purchased.",
          columns: ["Category", "Realistic", "Why"],
          rows: [
            ["Infrastructure and developer tooling", "Yes", "Core to building the product, and decisions are made by the people using it"],
            ["Design, content and brand services", "Occasionally", "Specialist work that is genuinely outside the team"],
            ["Legal and accounting", "Yes", "Necessary for a company at any stage"],
            ["Enterprise software with seat minimums", "Rarely", "The team is small; per-seat minimums usually exceed the whole company"],
            ["Marketing services", "Rarely", "This is the problem the company exists to solve, and buying it externally would be odd"],
            ["Recruitment services", "Not currently", "No published open roles"],
          ],
        },
        {
          type: "callout",
          heading: "A note on unsolicited approaches",
          body:
            "Cold outreach offering marketing services to a marketing company is common and rarely lands well. Approaches that reference something specific about what Mengo is building get read; generic ones do not.",
          action: { label: "How to make contact", href: "contact" },
        },
      ],
    },

    {
      path: "vendor-requirements",
      title: "General requirements",
      navLabel: "Requirements",
      group: "Supplying Mengo",
      seoTitle: "Vendor requirements — what Mengo expects of a supplier",
      seoDescription:
        "What Mengo expects from suppliers: honesty about limitations, data handling that matches the published privacy policy, and no requirement for access it does not need.",
      hero: {
        kind: "document",
        eyebrow: "Supplying Mengo",
        title: "General requirements",
        lead:
          "Modest, and deliberately so. A pre-launch company imposing an enterprise supplier framework on a three-person vendor would be wasting everyone's time.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "What is expected",
          columns: 1,
          items: [
            {
              label: "Honesty about limitations",
              body: "The single most valuable supplier quality at this stage. A tool that does eighty per cent of what is needed and says so is more useful than one that claims a hundred and reveals the gap during implementation.",
            },
            {
              label: "Data handling consistent with our published policy",
              body: "Any supplier touching data that reaches Mengo's users has to be compatible with the commitments in the privacy policy on the main site. That policy is the binding document, and a supplier arrangement cannot quietly weaken it.",
            },
            {
              label: "No access beyond what the work requires",
              body: "The same principle Mengo applies to its own users. A supplier requesting broad access as a default rather than as a requirement will be asked why.",
            },
            {
              label: "Terms a small company can actually sign",
              body: "Unlimited liability, long lock-ins and automatic escalators are ordinary in enterprise contracts and are not appropriate here. Terms that assume a purchasing department will negotiate them will simply end the conversation.",
            },
            {
              label: "Subprocessor transparency",
              body: "If a supplier passes data to others, that has to be visible, because it becomes part of what Mengo has to be able to state about its own handling.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Formal supplier policy",
          body:
            "A written vendor policy, an approved supplier list and a standard agreement would normally sit here. None exists, and inventing one would misrepresent how decisions are actually made.",
          needs: [
            "A written vendor and third-party risk policy",
            "Standard supplier terms and a data processing agreement template",
            "Insurance and liability requirements, if any",
            "A supplier review cadence",
          ],
        },
      ],
    },

    {
      path: "onboarding",
      title: "Vendor onboarding",
      navLabel: "Onboarding",
      group: "Supplying Mengo",
      seoTitle: "Vendor onboarding — how a supplier relationship starts",
      seoDescription:
        "How a supplier relationship with Mengo begins in practice: a specific problem, a trial, a decision, and a short paper trail rather than a formal onboarding programme.",
      hero: {
        kind: "document",
        eyebrow: "Supplying Mengo",
        title: "Vendor onboarding",
        lead:
          "Four steps, none of them a portal. This is a description of what actually happens rather than a process somebody designed.",
      },
      blocks: [
        {
          type: "steps",
          heading: "How it goes",
          steps: [
            { title: "A specific problem exists", body: "Purchasing here is problem-led rather than category-led. Without a current blocker, there is usually no decision to be made regardless of the offer's quality." },
            { title: "A trial against real work", body: "Evaluation happens by using the thing on an actual task, not by demonstration. Suppliers who cannot support that struggle at this stage." },
            { title: "A decision, quickly", body: "One or two people decide. There is no committee, which cuts both ways — fast approval and fast rejection." },
            { title: "A short paper trail", body: "Terms, data handling and billing recorded in a form that will survive the company growing. Light, but not absent." },
          ],
        },
        {
          type: "pending",
          heading: "Formal onboarding",
          body:
            "Supplier registration, due-diligence questionnaires and an approved-vendor register would appear here as the company grows.",
          needs: [
            "A supplier registration route and record",
            "A due-diligence questionnaire proportionate to the company's size",
            "Payment terms and invoicing process",
            "Who owns the supplier relationship internally",
          ],
        },
      ],
    },

    {
      path: "security",
      title: "Security information",
      navLabel: "Security",
      group: "Assessing Mengo",
      seoTitle: "Security information — architectural facts and what is not certified",
      seoDescription:
        "Security information for teams assessing Mengo: the architectural decisions that reduce risk, what data the product holds, and an explicit statement of what is not certified.",
      hero: {
        kind: "split",
        eyebrow: "Assessing Mengo",
        title: "Security information",
        lead:
          "For teams assessing Mengo as a supplier. This page separates what is architecturally true and verifiable from what is not certified — and does not blur the two.",
        facts: [
          { label: "Certifications held", value: "None" },
          { label: "Third-party audit", value: "None completed" },
          { label: "Channel credentials held", value: "None, by design" },
          { label: "Binding document", value: "The published privacy policy" },
        ],
      },
      blocks: [
        {
          type: "callout",
          heading: "What this page is not",
          body:
            "It is not a security attestation, a framework mapping or an audit summary. Mengo has none of those. If your process requires one before proceeding, that requirement cannot currently be met, and no amount of further discussion will change it.",
        },
        {
          type: "definitions",
          heading: "Architectural facts that reduce risk",
          intro:
            "These are consequences of product design rather than security controls, which makes them unusually durable — they cannot quietly regress in a release.",
          columns: 1,
          items: [
            {
              label: "Mengo holds no credentials for your channels",
              body: "The product does not publish or send. There is no OAuth grant to your social accounts, no SMTP credential, no ad account access. A compromise of Mengo therefore cannot produce a post under your name or an email from your domain — the two highest-impact outcomes for a marketing tool.",
            },
            {
              label: "It is not a system of record",
              body: "Pipeline management and contact ownership stay in your CRM. Mengo is not designed to hold a customer database, which limits the personal data present in the first place.",
            },
            {
              label: "The sensitive material is strategy, not personal data at volume",
              body: "What a Mengo account contains is business positioning, segments, pricing context and objections. That is commercially sensitive and worth protecting; it is a different risk profile from a system holding customer records.",
            },
            {
              label: "Output is text and structure",
              body: "Artefacts are documents, dated items and ordered sequences. There is no execution surface in the output itself.",
            },
            {
              label: "Human review sits in the workflow",
              body: "Assets are approved in batches before use, and guardrails surface unsourced claims as explicit gaps rather than filling them. Publication is never automatic.",
            },
          ],
        },
        {
          type: "pending",
          heading: "The security programme",
          body:
            "Everything a security questionnaire asks about — hosting, encryption, access control, logging, incident response, penetration testing, subprocessors — requires answers from the business rather than inference from the product. They are deliberately absent rather than estimated.",
          needs: [
            "Hosting arrangements and data residency",
            "Encryption in transit and at rest",
            "Internal access control and authentication",
            "Logging, monitoring and retention",
            "Incident response process and notification commitments",
            "Penetration testing and vulnerability management",
            "The subprocessor list",
            "Business continuity and backup arrangements",
            "Any certification or audit intent, and the timeline",
          ],
          action: { label: "Send a security questionnaire", href: "contact" },
        },
      ],
      related: [
        {
          heading: "Related",
          links: [
            { label: "Compliance", href: "compliance" },
            { label: "Privacy policy", href: mainUrl("/legal/privacy-policy/"), external: true },
            { label: "Developer integration model", href: siteUrl("developers", "getting-started"), external: true },
          ],
        },
      ],
    },

    {
      path: "compliance",
      title: "Compliance information",
      navLabel: "Compliance",
      group: "Assessing Mengo",
      seoTitle: "Compliance information — the binding policy and what is not claimed",
      seoDescription:
        "Compliance information for teams assessing Mengo: which published document is binding, what the product's architecture means for data processing, and what is not claimed.",
      hero: {
        kind: "document",
        eyebrow: "Assessing Mengo",
        title: "Compliance information",
        lead:
          "Short, because the honest version is short. The published privacy policy is the binding document; everything else here is context rather than commitment.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What is binding",
          body: [
            "The privacy policy, terms of service, cookie policy and acceptable use policy published on the main site are the documents that govern the relationship. Nothing on this page overrides them, and where this page and those documents differ, those documents are correct.",
            "That matters more than it sounds. A vendor portal that paraphrases legal terms creates a second, unreviewed version of them, and procurement teams reasonably rely on whichever they read first.",
          ],
        },
        {
          type: "definitions",
          heading: "Context a reviewer usually wants",
          items: [
            { label: "Processing is generation, not analysis", body: "The product takes a business brief and produces marketing artefacts. It is not built to profile individuals or to analyse customer datasets." },
            { label: "Consent stays with you", body: "Because Mengo does not send, consent records and lawful basis for contacting people remain in your own systems, where they legally belong." },
            { label: "Regulated sectors get constraints, not compliance", body: "Blocked-language sets mean drafts arrive constrained, and human review before publication remains mandatory. Guardrails reduce failure rates; they do not confer compliance." },
            { label: "Claims are restricted to what you supplied", body: "Statistics and customer outcomes appear only where you provided them, which is a meaningful control for regulated advertising." },
          ],
        },
        {
          type: "pending",
          heading: "Regulatory position and framework alignment",
          body:
            "No alignment with any regulatory framework or standard is claimed. Statements of this kind must come from the business with legal review, and a portal that produced them on its own initiative would be creating liability rather than reducing it.",
          needs: [
            "Data protection role — controller or processor — per data category",
            "A data processing agreement and standard contractual clauses where applicable",
            "Data residency and international transfer position",
            "Retention schedules per data type",
            "Any framework alignment or certification intent",
            "Records of processing, and who is accountable internally",
          ],
          action: { label: "Read the privacy policy", href: mainUrl("/legal/privacy-policy/"), external: true },
        },
      ],
    },

    {
      path: "integration",
      title: "Integration information",
      navLabel: "Integration",
      group: "Assessing Mengo",
      seoTitle: "Integration information — what Mengo connects to and what it never requests",
      seoDescription:
        "What connecting Mengo to your stack involves, why it never requires posting or sending credentials, and where the technical detail lives.",
      hero: {
        kind: "document",
        eyebrow: "Assessing Mengo",
        title: "Integration information",
        lead:
          "The question a security reviewer asks third, and the one with the most reassuring answer: what access does this thing want?",
      },
      blocks: [
        {
          type: "prose",
          heading: "The short answer",
          body: [
            "Less than comparable tools. Mengo produces artefacts and hands them to the systems that act on them; it does not act on them itself. There is no requirement to grant it posting rights on social accounts, sending rights on an email domain, or spending rights on an ad account.",
            "That makes the integration risk profile unusual for a marketing product. The failure mode of a compromised scheduling tool is content published under your brand. Mengo is structurally unable to produce that outcome.",
          ],
        },
        {
          type: "table",
          heading: "Access, by system",
          columns: ["System", "Mengo requests", "Retains"],
          rows: [
            ["Social accounts", "Nothing", "Your accounts and publishing rights"],
            ["Email platform", "Nothing", "Sending, deliverability, consent records"],
            ["Advertising accounts", "Nothing", "Budget and placement"],
            ["CRM", "Nothing required to operate", "Contact records and pipeline"],
          ],
        },
        {
          type: "callout",
          heading: "No public interface is published",
          body:
            "There is no API, SDK or webhook catalogue. The developer portal documents the integration model and marks every specification as awaiting official documentation, which is where a technical reviewer should look.",
          action: { label: "Developer portal", href: siteUrl("developers"), external: true },
        },
      ],
    },

    {
      path: "procurement",
      title: "Procurement process",
      navLabel: "Procurement",
      group: "Process",
      seoTitle: "Procurement — how buying decisions are made at Mengo",
      seoDescription:
        "How Mengo makes purchasing decisions at its current size: problem-led, decided by one or two people, evaluated against real work rather than by demonstration.",
      hero: {
        kind: "document",
        eyebrow: "Process",
        title: "Procurement",
        lead:
          "A description rather than a policy. Mengo has no procurement function, and pretending to one would set a supplier's expectations wrongly in both directions.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "How decisions are actually made",
          items: [
            { label: "Problem-led", body: "Something is blocking work. Without that, there is usually no decision available however good the offer." },
            { label: "Evaluated on real work", body: "Trials on an actual task rather than demonstrations. This favours suppliers who let you start without a sales process." },
            { label: "Decided by one or two people", body: "No committee, no scoring matrix. Fast approval and equally fast rejection." },
            { label: "Weighted towards reversibility", body: "At this stage the cost of a wrong choice is dominated by how hard it is to undo. A supplier with easy exit wins against a better one with a lock-in." },
          ],
        },
        {
          type: "pending",
          heading: "Formal procurement policy",
          body:
            "Thresholds, approval limits, competitive tendering and payment terms would appear here once the company is large enough for them to be real.",
          needs: [
            "Spend thresholds and approval authority",
            "Standard payment terms",
            "When competitive quotes are required",
            "Conflict-of-interest and anti-bribery position",
          ],
        },
      ],
    },

    {
      path: "resources",
      title: "Vendor resources",
      navLabel: "Resources",
      group: "Process",
      seoTitle: "Vendor resources — documents that exist and documents that do not",
      seoDescription:
        "The documents available to suppliers and to teams assessing Mengo, and an explicit list of the standard vendor documents that do not yet exist.",
      hero: {
        kind: "document",
        eyebrow: "Process",
        title: "Vendor resources",
        lead:
          "A short list of real documents, and an explicit list of the ones a procurement team will look for and not find.",
      },
      blocks: [
        {
          type: "index",
          heading: "Documents that exist",
          links: [
            { label: "Privacy policy", href: mainUrl("/legal/privacy-policy/"), external: true, blurb: "The binding document on data handling." },
            { label: "Terms of service", href: mainUrl("/legal/terms-of-service/"), external: true, blurb: "The contractual terms for use of the product." },
            { label: "Acceptable use policy", href: mainUrl("/legal/acceptable-use/"), external: true, blurb: "What the product may not be used for." },
            { label: "Cookie policy", href: mainUrl("/legal/cookie-policy/"), external: true, blurb: "Website tracking and cookies." },
            { label: "Responsible AI position", href: mainUrl("/company/responsible-ai/"), external: true, blurb: "Guardrails and the limits of what they achieve." },
          ],
        },
        {
          type: "pending",
          heading: "Documents a procurement team will look for",
          body:
            "These are standard, expected, and absent. Listing them is more useful than an empty page, because it lets a reviewer decide early whether to proceed.",
          needs: [
            "A completed security questionnaire or standard response set",
            "A data processing agreement",
            "The subprocessor list",
            "Insurance certificates",
            "A business continuity statement",
            "Any audit report or certification",
          ],
          action: { label: "Ask what can be provided", href: "contact" },
        },
      ],
    },

    {
      path: "faq",
      title: "Vendor FAQ",
      navLabel: "FAQ",
      group: "Process",
      seoTitle: "Vendor FAQ — the questions procurement asks",
      seoDescription:
        "Direct answers to the questions procurement and security teams ask about Mengo, including the ones where the answer is that the information does not exist.",
      hero: {
        kind: "document",
        eyebrow: "Process",
        title: "Vendor FAQ",
        lead: "The questions that arrive most often, answered without deflection.",
      },
      blocks: [
        {
          type: "faq",
          heading: "Assessing Mengo",
          items: [
            {
              q: "Is Mengo SOC 2, ISO 27001 or similarly certified?",
              a: "No. Mengo holds no security certification and has completed no third-party audit. If certification is a hard requirement in your process, Mengo cannot satisfy it today.",
            },
            {
              q: "Will Mengo need access to our social or email accounts?",
              a: "No. The product does not publish or send, so there is no scope to grant and no credential for it to hold. This is architectural rather than a current limitation.",
            },
            {
              q: "What personal data does Mengo process?",
              a: "The product is built around a business brief — positioning, segments, offers, objections — rather than around customer records. The binding statement on data handling is the published privacy policy, and it should be read rather than paraphrased here.",
            },
            {
              q: "Can you complete our security questionnaire?",
              a: "You can send it. Some questions will be answerable from architecture, and some will not be answerable at all at this stage. Every answer given will be one the company can stand behind.",
            },
            {
              q: "Do you have a DPA we can sign?",
              a: "Not published. It is on the list of documents a procurement team will look for and not find, which is why that list is published rather than left implicit.",
            },
          ],
        },
        {
          type: "faq",
          heading: "Supplying Mengo",
          items: [
            {
              q: "How do I get on an approved vendor list?",
              a: "There is not one. Purchasing is problem-led and decided by one or two people, so the useful thing is being reachable when a specific need arises rather than being pre-registered.",
            },
            {
              q: "What are your payment terms?",
              a: "Not published as a standard. They are agreed per supplier at this stage.",
            },
            {
              q: "Do you run competitive tenders?",
              a: "No. The company is too small for a tender to be a proportionate process.",
            },
          ],
        },
      ],
    },

    {
      path: "contact",
      title: "Vendor contact",
      navLabel: "Contact",
      group: "Process",
      seoTitle: "Vendor contact — supplier enquiries and security questionnaires",
      seoDescription:
        "How to reach Mengo as a supplier or as a team assessing Mengo, what to include, and which enquiries belong on the partner or developer sites instead.",
      hero: {
        kind: "document",
        eyebrow: "Process",
        title: "Vendor contact",
        lead:
          "One route, two kinds of message. Saying which direction you are coming from in the first line saves a round trip.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "What to include",
          items: [
            { label: "If you are assessing Mengo", body: "Your questionnaire or the specific controls you need evidence for, and your hard requirements. If certification is mandatory, say so first — it settles the conversation immediately." },
            { label: "If you are selling to Mengo", body: "The specific problem you solve, evidence it applies to a company of this size, and whether you can support a trial without a sales process." },
            { label: "Either way", body: "Your timeline. A pre-launch company can move quickly, but it cannot produce documents that do not exist, and knowing which constraint you are under determines whether the conversation is worth starting." },
          ],
        },
        {
          type: "callout",
          heading: "The route",
          body:
            "Vendor and procurement enquiries go through the contact form on the main site. Expect a direct reply, including a direct no where the fit is not there.",
          action: { label: "Contact form", href: mainUrl("/contact/"), external: true },
        },
        {
          type: "index",
          heading: "Other directions",
          links: [
            { label: "Partnership", href: siteUrl("partners"), external: true, blurb: "Delivering Mengo to clients rather than supplying Mengo." },
            { label: "Technical integration", href: siteUrl("developers"), external: true, blurb: "Interfaces and the integration model." },
            { label: "Product support", href: siteUrl("support"), external: true, blurb: "Using the product." },
          ],
        },
      ],
    },
  ],
};
