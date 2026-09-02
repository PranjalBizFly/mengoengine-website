import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The developer portal.
 *
 * Register: technical. Sidebar, precise language, reference shape.
 *
 * The hard constraint on this site. Mengo has not published an API. There are
 * no endpoints, no authentication scheme, no SDKs and no webhooks to document,
 * and this portal does not invent any. That decision is worth being explicit
 * about because a developer portal is exactly where invention does the most
 * damage: someone reads a plausible endpoint, scopes two weeks of work around
 * it, and discovers at implementation time that it never existed.
 *
 * What the site does instead is real and useful. The integration model follows
 * from documented product architecture — Mengo writes and structures but does
 * not publish or send, which determines the shape any future API must take and
 * what a team should build against today. Each reference page states the
 * architectural constraint truthfully and marks the specification as awaiting
 * official documentation.
 */
export const developers: SubSite = {
  key: "developers",
  name: "Mengo Developers",
  shortName: "Developers",
  tagline: "Building with Mengo",
  description:
    "The developer portal for Mengo: the integration model, what an interface would have to respect, and the reference structure awaiting published API documentation.",
  register: "technical",
  sidebar: true,
  nav: [
    { label: "Home", path: "" },
    { label: "Getting started", path: "getting-started" },
    { label: "API", path: "api" },
    { label: "Integrations", path: "integrations" },
    { label: "Changelog", path: "changelog" },
  ],
  pages: [
    /* ---------------------------------------------------------------- */
    {
      path: "",
      title: "Mengo Developers",
      seoTitle: "Mengo Developers — the integration model and API status",
      seoDescription:
        "The Mengo developer portal: how the platform is designed to integrate, what no published API means for planning, and the reference structure that will hold it.",
      hero: {
        kind: "editorial",
        eyebrow: "Developer portal",
        title: "Building with Mengo",
        lead:
          "Mengo has not published a public API. This portal is honest about that, and is useful anyway: the integration model is determined by the product's architecture, and you can plan against the architecture today.",
        actions: [
          { label: "Read the integration model", href: "getting-started" },
          { label: "API status", href: "api" },
        ],
        facts: [
          { label: "Public API", value: "Not published" },
          { label: "SDKs", value: "None published" },
          { label: "Webhooks", value: "None published" },
          { label: "What is stable", value: "The architectural boundary" },
        ],
      },
      blocks: [
        {
          type: "callout",
          heading: "Read this before anything else on this site",
          body:
            "No Mengo API, SDK, webhook or authentication scheme has been published. Nothing in this portal describes an endpoint you can call. Every reference page states what belongs in it and marks the specification as awaiting official documentation, rather than showing an example that would not work. If you are scoping an integration, scope against the architecture below and treat interface details as unknown.",
          action: { label: "What is actually known", href: "api" },
        },
        {
          type: "prose",
          heading: "Why the architecture is plannable even without an interface",
          body: [
            "Mengo occupies a deliberately narrow position: it produces strategy, calendar, assets and sequences, and it does not publish, send, hold ad spend or act as a system of record. That boundary is a product decision rather than a roadmap gap, and it constrains any interface that is eventually published.",
            "In practice that means an integration with Mengo will be about moving generated artefacts outward into the tools that do the sending and publishing, and moving business context inward. It will not be about granting Mengo posting rights on your accounts, because the product is designed never to need them.",
          ],
        },
        {
          type: "index",
          heading: "Reference",
          links: [
            { label: "Getting started", href: "getting-started", blurb: "The integration model, and what to build against today." },
            { label: "API overview", href: "api", blurb: "What is published, what is not, and what the shape implies." },
            { label: "Authentication", href: "authentication", blurb: "Constraints any scheme must satisfy, and what is unspecified." },
            { label: "Quickstart", href: "quickstart", blurb: "The honest version: what you can do now." },
            { label: "Integrations", href: "integrations", blurb: "The destination categories the output is built for." },
            { label: "Webhooks", href: "webhooks", blurb: "The events a Mengo system would emit, and why." },
            { label: "SDKs", href: "sdks", blurb: "Status, and what a client library would need to wrap." },
            { label: "Examples", href: "examples", blurb: "Integration patterns described in prose, not fabricated code." },
            { label: "Error handling", href: "errors", blurb: "Failure classes that follow from the architecture." },
            { label: "Rate limits", href: "rate-limits", blurb: "Not published — and why guessing would be harmful." },
            { label: "Changelog", href: "changelog", blurb: "What has changed in this portal." },
            { label: "System status", href: "status", blurb: "How to consume status as a dependency." },
          ],
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "Product documentation", href: siteUrl("docs"), external: true },
            { label: "System status", href: siteUrl("status"), external: true },
            { label: "Vendor security review", href: siteUrl("vendors", "security"), external: true },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      path: "getting-started",
      title: "Getting started",
      group: "Overview",
      seoTitle: "Getting started — the Mengo integration model",
      seoDescription:
        "How Mengo is designed to integrate: artefacts move outward to your sending and publishing tools, context moves inward, and no channel credentials are ever exchanged.",
      hero: {
        kind: "document",
        eyebrow: "Overview",
        title: "Getting started",
        lead:
          "There is no key to obtain and no endpoint to call. What there is, is a stable architectural model you can design against — this page describes it.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The shape of an integration",
          body: [
            "Mengo produces artefacts: a strategy layer, a dated calendar, finished assets in defined formats, and nurture sequences. It does not act on them. Everything that touches an audience — publishing, sending, spending — happens in tools you already run.",
            "An integration therefore has two directions. Outward, generated artefacts need to reach a scheduler, an email platform or a CRM in a shape those systems accept. Inward, business context and outcomes need to reach Mengo so the strategy layer and the metric set reflect reality.",
          ],
        },
        {
          type: "table",
          heading: "What moves, and which way",
          columns: ["Direction", "What moves", "Why it has to"],
          rows: [
            ["Outward", "Calendar slots with dates, themes and formats", "Your scheduler owns publication timing"],
            ["Outward", "Finished assets in format-native form", "The receiving platform has its own field structure"],
            ["Outward", "Nurture sequences: order, cadence, objection per message", "Your email tool owns sending and consent"],
            ["Inward", "Business brief changes", "The strategy layer reflows from them"],
            ["Inward", "Outcome signals for the metric set", "Growth Signal attaches decisions to real numbers"],
          ],
        },
        {
          type: "definitions",
          heading: "Constraints that will not change",
          intro:
            "These follow from the product boundary rather than from the current stage, so they are safe to design against.",
          items: [
            {
              label: "No channel credentials",
              body: "Mengo does not request posting or sending access, so an integration will never involve granting it an OAuth scope on your social or email accounts. This is the single most important fact for a security review.",
            },
            {
              label: "Artefacts are text and structure",
              body: "Output is documents, dated items and ordered sequences rather than a proprietary binary. Whatever the transport turns out to be, the payload is representable in ordinary formats.",
            },
            {
              label: "The brief is the root",
              body: "Anything that changes downstream output changes it by changing the brief or the strategy layer. An integration that writes assets directly would be fighting the model.",
            },
            {
              label: "Human approval sits in the loop",
              body: "Assets are reviewed in batches before use, and guardrails mark unsourced claims as gaps. An integration that publishes generated output unreviewed would remove the control the guardrails exist to support.",
            },
          ],
        },
        {
          type: "callout",
          heading: "What to do today",
          body:
            "If you are planning work that depends on Mengo, design the boundary in your own system now — where artefacts land, who approves them, which tool sends — and treat the transport as pluggable. That work is not wasted whatever the eventual interface looks like, and it is the part that takes longest.",
          action: { label: "Integration patterns", href: "examples" },
        },
      ],
    },

    {
      path: "api",
      title: "API overview",
      navLabel: "API",
      group: "Reference",
      seoTitle: "API overview — status and what the architecture implies",
      seoDescription:
        "Mengo has not published a public API. What that means for planning, what the architecture implies about a future interface, and what official documentation must supply.",
      hero: {
        kind: "document",
        eyebrow: "Reference",
        title: "API overview",
        lead:
          "No public API has been published. This page says what that means precisely, so nobody has to infer it from an absence.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The current position",
          body: [
            "There is no base URL, no versioning scheme, no resource model and no published contract. Mengo is pre-launch and building against a waitlist; a public interface is not among the things it has announced.",
            "It is worth stating the negative explicitly rather than leaving the page empty. A developer portal that simply omits the API section reads as an oversight, and someone will assume the API exists and is undocumented — which is a worse belief than knowing it does not exist.",
          ],
        },
        {
          type: "definitions",
          heading: "What can be said about a future interface",
          intro:
            "These are implications of the product architecture, not commitments about a design that has not been made.",
          items: [
            {
              label: "It would be artefact-shaped",
              body: "The product's nouns are already clear: brief, strategy layer, segment, slot, asset, sequence, metric. Any reasonable interface would expose those rather than inventing new ones.",
            },
            {
              label: "It would be read-heavy outward",
              body: "The dominant direction is retrieving generated artefacts to move them into other tools.",
            },
            {
              label: "It would not carry channel credentials",
              body: "Because the product never publishes or sends, an interface has no reason to hold tokens for platforms you own.",
            },
            {
              label: "Reflow makes freshness matter",
              body: "An upstream edit reflows downstream artefacts, so any integration will need a way to know something changed — which is why the webhooks page exists as a structure even though no events are published.",
            },
          ],
        },
        {
          type: "pending",
          heading: "The API specification",
          body:
            "Everything a developer actually needs to write code is unpublished. This section will hold it. Until it does, no example on this site will show a request that cannot be made.",
          needs: [
            "Base URL, transport and versioning policy",
            "The resource model and its relationships",
            "Authentication and authorisation scheme",
            "Pagination, filtering and sorting conventions",
            "Error format and status code semantics",
            "Rate limits and quota behaviour",
            "Deprecation policy and support window",
            "A machine-readable schema — OpenAPI or equivalent",
          ],
          action: { label: "Ask about API plans", href: "contact" },
        },
      ],
    },

    {
      path: "authentication",
      title: "Authentication",
      group: "Reference",
      seoTitle: "Authentication — constraints and unpublished specification",
      seoDescription:
        "No authentication scheme has been published for Mengo. The constraints any scheme must satisfy, and the specification a security review would need.",
      hero: {
        kind: "document",
        eyebrow: "Reference",
        title: "Authentication",
        lead:
          "No scheme has been published. What can be stated is the set of constraints any scheme would have to satisfy, which is what a security reviewer needs earliest.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "Constraints that follow from the architecture",
          intro:
            "None of these is a specification. All of them are consequences of what the product does and does not do.",
          items: [
            "No credential Mengo holds can grant access to your social, email or advertising accounts, because the product never connects to them.",
            "The sensitive material in a Mengo account is business strategy — positioning, segments, pricing context, objections — rather than customer personal data at volume.",
            "Artefacts are owned by the business rather than by an individual, so an eventual scheme has to answer the organisation question before the identity question.",
            "Because upstream edits reflow downstream artefacts, any machine access needs the same audit story as human access.",
          ],
        },
        {
          type: "pending",
          heading: "The authentication specification",
          body:
            "Scheme, credential lifecycle and scope model are unpublished. This is deliberately not filled with a plausible bearer-token description: a security questionnaire answered from invented documentation is a serious problem for both sides.",
          needs: [
            "Credential type and issuance flow",
            "Scope or permission model for machine access",
            "Rotation, revocation and expiry behaviour",
            "Whether credentials are per-user or per-organisation",
            "Transport and storage requirements placed on the integrator",
          ],
          action: { label: "Vendor security information", href: siteUrl("vendors", "security"), external: true },
        },
      ],
    },

    {
      path: "quickstart",
      title: "Quickstart",
      group: "Reference",
      seoTitle: "Quickstart — what you can actually do today",
      seoDescription:
        "An honest quickstart for Mengo: there is no key to obtain or call to make, so this covers the preparation that is genuinely useful before an interface exists.",
      hero: {
        kind: "document",
        eyebrow: "Reference",
        title: "Quickstart",
        lead:
          "A quickstart that cannot start you quickly is a strange document, so this one is explicit: there is nothing to call. Here is the preparation that is not wasted.",
      },
      blocks: [
        {
          type: "steps",
          heading: "Useful work you can do now",
          steps: [
            {
              title: "Map your destinations",
              body: "List the tools that will receive Mengo output: scheduler, email platform, CRM. For each, write down the fields it needs to accept a post, a message or a contact. That mapping is the real work and it is transport-independent.",
            },
            {
              title: "Decide where approval happens",
              body: "Assets are reviewed in batches before use. Decide now whether approval happens in Mengo or in your system, because it determines which side holds state.",
            },
            {
              title: "Model the artefacts locally",
              body: "Brief, strategy layer, segment, slot, asset, sequence, metric. Modelling these in your own schema is safe: they are product nouns rather than interface details.",
            },
            {
              title: "Plan for reflow",
              body: "An upstream edit changes downstream artefacts. Assume anything you cache can change, and design for re-fetch rather than one-time import.",
            },
            {
              title: "Register interest",
              body: "If a published interface would change what you build, say so through the developer contact route. Roadmap order is influenced by what people on the waitlist say they need.",
            },
          ],
        },
        {
          type: "callout",
          heading: "No code samples appear on this site",
          body:
            "Not because samples are unimportant, but because a sample implies a callable endpoint. Every snippet here would be fiction, and fiction in a quickstart is the fastest way to waste a developer's afternoon.",
          action: { label: "Integration patterns in prose", href: "examples" },
        },
      ],
    },

    {
      path: "integrations",
      title: "Integrations",
      group: "Reference",
      seoTitle: "Integrations — the destination categories Mengo output is built for",
      seoDescription:
        "Mengo output is designed to land in schedulers, email platforms and CRMs. What each destination needs, and why no named integrations are listed here.",
      hero: {
        kind: "document",
        eyebrow: "Reference",
        title: "Integrations",
        lead:
          "Mengo exports into the tools you already run. This page describes the destination categories and what each needs — without naming partners that have not been announced.",
      },
      blocks: [
        {
          type: "table",
          heading: "Destination categories",
          intro:
            "Categories rather than product names. Listing named integrations that do not exist would imply relationships with those companies.",
          columns: ["Destination", "Receives", "Owns"],
          rows: [
            ["Scheduling and publishing", "Dated slots and format-native assets", "Publication timing and platform accounts"],
            ["Email and marketing automation", "Sequences: order, cadence, objection per message", "Sending, deliverability and consent records"],
            ["CRM", "Intent segment definitions and scoring signals", "Contact records and pipeline state"],
            ["Analytics", "The metric set definitions", "Measurement and the underlying data"],
            ["Document storage", "Strategy layer and briefs", "Version history and team access"],
          ],
        },
        {
          type: "prose",
          heading: "Why the boundary is drawn there",
          body: [
            "Sending, publishing and pipeline management are solved problems with strong incumbents. Building them badly inside Mengo would make the product worse, and building them well would mean competing on ground where the product has no advantage.",
            "The practical consequence for an integrator is favourable: Mengo never becomes a single point of failure for your audience. If it is unavailable, your scheduled posts still go out and your sequences still send, because those systems hold the artefacts.",
          ],
        },
        {
          type: "pending",
          heading: "Named integrations and export formats",
          body:
            "Which specific tools are supported, and in what format artefacts are exported, are product decisions that have not been announced.",
          needs: [
            "The list of supported destinations at launch",
            "Export formats per artefact type",
            "Whether integration is direct, via file export, or both",
            "Any partner or marketplace listing arrangements",
          ],
          action: { label: "Technology partnership", href: siteUrl("partners", "technology-partners"), external: true },
        },
      ],
    },

    {
      path: "webhooks",
      title: "Webhooks",
      group: "Reference",
      seoTitle: "Webhooks — the events a Mengo system would emit",
      seoDescription:
        "No webhooks are published. The events that matter in Mengo's model — reflow, batch ready, approval — and the specification an integration would need.",
      hero: {
        kind: "document",
        eyebrow: "Reference",
        title: "Webhooks",
        lead:
          "None are published. The section exists because the events that would matter are already determined by how the product behaves, and knowing them is useful when planning.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why events matter more here than in a typical product",
          body: [
            "Mengo's defining behaviour is reflow: correcting the brief or the strategy layer changes the calendar, the assets and the sequences that inherited from it. Any integration that has copied artefacts elsewhere therefore holds data that can become stale without anyone touching it directly.",
            "That makes change notification unusually load-bearing. A polling integration would work but would either lag or waste requests; the natural design is an event that says something upstream changed and these artefacts are affected.",
          ],
        },
        {
          type: "definitions",
          heading: "The event classes that follow from the model",
          intro: "Described as concepts. No event names, payloads or delivery semantics are published.",
          items: [
            { label: "Reflow occurred", body: "An upstream edit propagated. The consumer needs to know which artefacts changed, not merely that something did." },
            { label: "Batch ready for review", body: "A week or month of assets has been generated and is awaiting approval." },
            { label: "Approval completed", body: "Assets moved from draft to approved, which is the point at which an export becomes safe." },
            { label: "Campaign exit condition met", body: "A campaign reached its pre-declared stop condition." },
            { label: "Review cycle due", body: "A weekly, monthly or quarterly agenda has come round." },
          ],
        },
        {
          type: "pending",
          heading: "Webhook specification",
          body:
            "Event names, payload schemas, delivery guarantees, retry behaviour and signature verification are all unpublished. Signature verification in particular must never be guessed at: an integrator implementing an imagined scheme would believe they had verified authenticity when they had not.",
          needs: [
            "Event catalogue with payload schemas",
            "Delivery guarantees, ordering and retry policy",
            "Signature or verification scheme",
            "Endpoint registration and management",
            "Replay and backfill behaviour",
          ],
        },
      ],
    },

    {
      path: "sdks",
      title: "SDKs",
      group: "Reference",
      seoTitle: "SDKs — status and what a client library would wrap",
      seoDescription:
        "No Mengo SDKs have been published. What a client library would need to handle given the platform's reflow behaviour and artefact model.",
      hero: {
        kind: "document",
        eyebrow: "Reference",
        title: "SDKs",
        lead:
          "None published, in any language. If you see a package claiming to be an official Mengo SDK, it is not one.",
      },
      blocks: [
        {
          type: "callout",
          heading: "A note on unofficial packages",
          body:
            "Because no official client exists, any package published under a name suggesting otherwise has no relationship with Mengo and should be treated with the caution you would apply to any unattributed dependency. This portal will name official clients if and when they are released.",
          action: { label: "Report something you have found", href: "contact" },
        },
        {
          type: "checklist",
          heading: "What a client library would have to handle",
          intro:
            "Useful if you end up writing your own wrapper around whatever interface arrives.",
          items: [
            "Re-fetch on reflow, since cached artefacts can be invalidated by an upstream edit rather than by a direct change.",
            "Artefact identity that survives regeneration, so a re-generated asset is recognisably the same slot.",
            "Approval state, because an unapproved asset must never be publishable by accident.",
            "Partial rejection semantics, since rejections name the failing part rather than the whole asset.",
            "The organisation-versus-user distinction, given that artefacts belong to the business.",
          ],
        },
        {
          type: "pending",
          heading: "Official client libraries",
          body: "Languages, distribution and support policy are unpublished.",
          needs: [
            "Which languages are supported at launch",
            "Package registry and naming",
            "Versioning and compatibility policy",
            "Where source and issues live",
          ],
        },
      ],
    },

    {
      path: "examples",
      title: "Integration patterns",
      navLabel: "Examples",
      group: "Reference",
      seoTitle: "Integration patterns — described in prose, not fabricated code",
      seoDescription:
        "Three integration patterns for Mengo described at the design level: batch export after approval, reflow-aware sync, and sequence handoff to an email platform.",
      hero: {
        kind: "document",
        eyebrow: "Reference",
        title: "Integration patterns",
        lead:
          "Patterns rather than snippets. Each describes a design that would work against the product's architecture, and none pretends to be runnable.",
      },
      blocks: [
        {
          type: "editorial",
          heading: "Three patterns",
          sections: [
            {
              heading: "Batch export after approval",
              body: "The simplest and safest pattern. Nothing leaves Mengo until a batch is approved; on approval, assets are pushed to their destination with their slot dates. Approval is the natural transaction boundary because it is already the human checkpoint, and using anything earlier means publishing content that guardrails have flagged but nobody has reviewed. Failure handling is straightforward: a failed push leaves the asset approved-but-unsent, which is a state a person can resolve.",
            },
            {
              heading: "Reflow-aware synchronisation",
              body: "Harder, and necessary if you mirror artefacts rather than exporting them once. The consumer treats every mirrored artefact as invalidatable by an upstream edit it never saw, and reconciles on a change signal. The trap is treating a reflowed asset as a new asset: the slot is the stable identity, and duplicating on regeneration produces a calendar with two of everything.",
            },
            {
              heading: "Sequence handoff",
              body: "Nurture sequences are structure — order, cadence, one objection per message — that has to become whatever your email platform calls a campaign or a journey. The mapping is usually lossy in one direction: platforms model timing richly and objection assignment not at all. Keeping the objection as metadata on your side preserves the ability to audit why a message exists, which is the thing that decays first.",
            },
          ],
        },
        {
          type: "callout",
          heading: "Why there is no code here",
          body:
            "A snippet would need a base URL, a resource path and an authentication header, and all three would be invented. The patterns above are the part that would still be true once the interface exists; the syntax is the part that would be wrong.",
        },
      ],
    },

    {
      path: "errors",
      title: "Error handling",
      navLabel: "Errors",
      group: "Reference",
      seoTitle: "Error handling — failure classes that follow from the architecture",
      seoDescription:
        "The failure classes an integration with Mengo would need to handle, derived from the product's approval workflow and reflow behaviour rather than from a published error catalogue.",
      hero: {
        kind: "document",
        eyebrow: "Reference",
        title: "Error handling",
        lead:
          "No error catalogue is published. The failure classes below are derived from how the product behaves, and are the ones worth designing for regardless of the eventual format.",
      },
      blocks: [
        {
          type: "table",
          heading: "Failure classes",
          columns: ["Class", "What causes it", "Sensible handling"],
          rows: [
            ["Not yet approved", "An artefact was requested before batch approval", "Treat as expected, not exceptional; wait rather than retry aggressively"],
            ["Stale reference", "A reflow regenerated the artefact after you fetched it", "Re-fetch by slot identity rather than by artefact identity"],
            ["Incomplete claim", "Guardrails marked an unsourced statistic as a gap", "Surface to a human; never auto-fill, which defeats the guardrail"],
            ["Upstream conflict", "The brief changed while a downstream edit was in flight", "Prefer the upstream layer, since everything inherits from it"],
            ["Destination rejection", "The receiving platform refused the asset's shape", "A mapping defect on your side, not a Mengo failure"],
          ],
        },
        {
          type: "pending",
          heading: "The error specification",
          body:
            "Status codes, error bodies, machine-readable codes and retry guidance are unpublished.",
          needs: [
            "Error response format and machine-readable codes",
            "Which failures are retryable, and with what backoff",
            "Idempotency semantics for anything that writes",
            "How partial failures in a batch are reported",
          ],
        },
      ],
    },

    {
      path: "rate-limits",
      title: "Rate limits",
      group: "Reference",
      seoTitle: "Rate limits — not published",
      seoDescription:
        "No rate limits have been published for Mengo, and this page explains why a plausible-sounding guess would be more harmful here than an acknowledged gap.",
      hero: {
        kind: "document",
        eyebrow: "Reference",
        title: "Rate limits",
        lead:
          "Not published. This page is short because the only honest content is the absence and the reason it is not filled in.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why this page is not filled with a reasonable default",
          body: [
            "Rate limits are the kind of number that looks harmless to estimate and is not. An integrator who reads a figure here will size a job around it, provision workers against it, and discover the real limit under production load — which is the worst possible time.",
            "A stated limit is also a commitment. Publishing one before the infrastructure that enforces it exists would mean either honouring a number nobody chose deliberately, or breaking a documented promise later.",
          ],
        },
        {
          type: "pending",
          heading: "Rate limit and quota policy",
          body:
            "Limits, windows, headers and burst behaviour are all unpublished, and no figure should be inferred from anything on this site.",
          needs: [
            "Limits per credential and per organisation, with the window",
            "Response headers exposing remaining quota",
            "Behaviour on exceeding a limit, and the retry signal",
            "Whether limits differ by plan",
          ],
        },
      ],
    },

    {
      path: "changelog",
      title: "Changelog",
      group: "Operations",
      seoTitle: "Developer changelog — what has changed in this portal",
      seoDescription:
        "A record of changes to the Mengo developer portal. Product and API changes will appear here once there is a published interface to change.",
      hero: {
        kind: "document",
        eyebrow: "Operations",
        title: "Changelog",
        lead:
          "Changes to this portal, and eventually to the interface it documents. Entries are dated and describe what a reader has to do differently.",
      },
      blocks: [
        {
          type: "timeline",
          heading: "Portal history",
          intro:
            "The record starts with the portal itself. It contains no API entries because there is no API to have changed.",
          entries: [
            {
              when: "Initial",
              title: "Developer portal published",
              body: "The reference structure — integration model, API, authentication, webhooks, SDKs, errors, rate limits — established, with every unpublished specification explicitly marked rather than described speculatively.",
            },
          ],
        },
        {
          type: "pending",
          heading: "API and product changelog",
          body:
            "Once an interface is published, breaking changes, additions and deprecations belong here with dates and migration notes.",
          needs: [
            "A change policy: what counts as breaking, and the notice period",
            "A deprecation window and how it is communicated",
            "Whether the changelog is also machine-readable",
          ],
        },
      ],
    },

    {
      path: "status",
      title: "System status for integrators",
      navLabel: "Status",
      group: "Operations",
      seoTitle: "System status for integrators — treating Mengo as a dependency",
      seoDescription:
        "How to treat Mengo as a dependency: why an outage should not stop your scheduled posts or sequences, and where operational status is published.",
      hero: {
        kind: "document",
        eyebrow: "Operations",
        title: "System status",
        lead:
          "Operational status lives on its own site. This page covers what an integrator should do with it — which is less than usual, for a structural reason.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Mengo should not be in your critical path",
          body: [
            "Because Mengo does not publish or send, an outage cannot stop your scheduled posts going out or your sequences being delivered. Those artefacts already live in the systems that act on them.",
            "That means an integration should degrade to “no new artefacts arrived today” rather than to “marketing stopped”. If your design has Mengo in the path of an outbound message at send time, that is worth revisiting: the product is not built to be there, and putting it there imports a dependency the architecture was specifically shaped to avoid.",
          ],
        },
        {
          type: "callout",
          heading: "Where status is published",
          body:
            "The status site carries the service board, incident record and maintenance notices. It is a separate host so that it stays reachable independently of the product it reports on.",
          action: { label: "Go to the status site", href: siteUrl("status"), external: true },
        },
        {
          type: "pending",
          heading: "Machine-readable status",
          body:
            "An endpoint or feed an integration could poll, and a subscription mechanism for incident notifications, are not published.",
          needs: [
            "A status endpoint or feed, and its format",
            "Component granularity — which services are reported separately",
            "Notification channels for integrators",
          ],
        },
      ],
    },

    {
      path: "faq",
      title: "Developer FAQ",
      navLabel: "FAQ",
      group: "Operations",
      seoTitle: "Developer FAQ — API plans, access and what to build against",
      seoDescription:
        "Common developer questions about Mengo: whether an API exists, what to build against in the meantime, and why this portal contains no code samples.",
      hero: {
        kind: "document",
        eyebrow: "Operations",
        title: "Developer FAQ",
        lead: "The questions this portal gets asked, answered without hedging.",
      },
      blocks: [
        {
          type: "faq",
          heading: "Questions",
          items: [
            {
              q: "Is there an API I can use today?",
              a: "No. No base URL, no authentication scheme, no resource model and no contract have been published. Anything presenting itself as one is not from Mengo.",
            },
            {
              q: "When will there be one?",
              a: "No date has been announced. Mengo is pre-launch and building against a waitlist, and roadmap order is influenced by what people on that list say they need — which is the honest route to influencing it.",
            },
            {
              q: "Then what is this portal for?",
              a: "The integration model is determined by product architecture that is already decided and published: Mengo produces artefacts and never publishes or sends. You can design your boundary, your destination mapping and your approval flow against that today, and none of that work depends on the eventual transport.",
            },
            {
              q: "Why are there no code samples anywhere?",
              a: "Every sample would need an invented endpoint and an invented auth header. A fabricated snippet in a developer portal is the single most expensive kind of fiction, because it is copied rather than read.",
            },
            {
              q: "Will Mengo need access to my social or email accounts?",
              a: "No, and this is architectural rather than a current limitation. The product does not publish or send, so there is no scope to grant and no token for it to hold.",
            },
            {
              q: "Can I build an unofficial integration?",
              a: "There is nothing to integrate against yet. When something is published, this portal will carry the terms that apply to it.",
            },
          ],
        },
      ],
    },

    {
      path: "contact",
      title: "Developer contact",
      navLabel: "Contact",
      group: "Operations",
      seoTitle: "Developer contact — API enquiries and integration questions",
      seoDescription:
        "How to reach Mengo about API plans, integration design or technology partnership, and what to include so the reply is useful.",
      hero: {
        kind: "document",
        eyebrow: "Operations",
        title: "Developer contact",
        lead:
          "There is no developer relations function. Technical enquiries reach a small team directly — this page covers how to make that worth both sides' time.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "What to include",
          items: [
            "What you are building, and where Mengo sits in it.",
            "Which artefacts you need — strategy layer, calendar, assets, sequences, metrics — rather than which endpoints you imagine.",
            "Whether you need to read, write, or both. The architecture makes reading much more likely to be supported early.",
            "Your timeline, and whether an unpublished interface is a blocker or an optimisation.",
            "Whether this is a technology partnership conversation rather than an integration one — those go through the partner site.",
          ],
        },
        {
          type: "index",
          heading: "Related routes",
          links: [
            { label: "Technology partnership", href: siteUrl("partners", "technology-partners"), external: true, blurb: "If the conversation is commercial as well as technical." },
            { label: "Vendor security review", href: siteUrl("vendors", "security"), external: true, blurb: "If you are assessing Mengo as a supplier." },
            { label: "Product support", href: siteUrl("support"), external: true, blurb: "If the question is about using the product rather than building on it." },
            { label: "General contact form", href: mainUrl("/contact/"), external: true, blurb: "The route of record while a developer channel does not exist." },
          ],
        },
        {
          type: "pending",
          heading: "A developer channel of record",
          body:
            "A dedicated address, an issue tracker or a community space would all be reasonable. None exists, so this page points at the general contact route rather than inventing an inbox.",
          needs: [
            "A developer contact address and who monitors it",
            "Whether there will be a public issue tracker or community forum",
            "An early-access programme for the interface, if one is planned",
          ],
        },
      ],
    },
  ],
};
