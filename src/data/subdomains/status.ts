import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The status site.
 *
 * Register: operational. Calm, legible at a glance, almost no ornament. Someone
 * arriving here is usually already irritated and wants one fact.
 *
 * The rule that shapes every page: no uptime figure, no invented incident, no
 * green indicator. There is no monitoring behind this application, so a green
 * dot would be a claim about availability that nothing is measuring — the most
 * quietly dishonest element a website can contain, because it is believed
 * instantly and checked by nobody. Every indicator rests in an explicitly
 * indeterminate state, and the pages are built so a real provider's payload
 * replaces the neutral state rather than requiring a redesign.
 */
export const status: SubSite = {
  key: "status",
  name: "Mengo Status",
  shortName: "Status",
  tagline: "Service availability",
  description:
    "Service status for Mengo: the component board, incident record, maintenance notices and how status will be published once monitoring is connected.",
  register: "operational",
  nav: [
    { label: "Status", path: "" },
    { label: "Services", path: "services" },
    { label: "Incidents", path: "incidents" },
    { label: "Maintenance", path: "maintenance" },
    { label: "History", path: "history" },
    { label: "Subscribe", path: "subscribe" },
  ],
  pages: [
    {
      path: "",
      title: "Mengo System Status",
      seoTitle: "Mengo System Status",
      seoDescription:
        "Current service status for Mengo, the component board, and how availability will be reported once monitoring is connected to this page.",
      hero: {
        kind: "board",
        eyebrow: "System status",
        title: "Status monitoring is not yet connected",
        lead:
          "This page will report live service availability. Until a monitoring provider is connected it reports nothing, and shows no indicator — because an indicator with nothing behind it is worse than an empty page.",
      },
      blocks: [
        {
          type: "callout",
          heading: "Why there is no green tick",
          body:
            "A status page with a green indicator and no monitoring behind it is a claim about availability that nothing is measuring. People believe it instantly and almost nobody checks. Every component below therefore rests in an explicitly indeterminate state, and will keep doing so until real telemetry replaces it.",
          action: { label: "How this page will work", href: "services" },
        },
        {
          type: "statusBoard",
          heading: "Components",
          intro:
            "The services that would be reported separately. Component boundaries are chosen so that a reader can tell whether the part they depend on is affected.",
          services: [
            { name: "Marketing Engine", blurb: "Strategy layer generation, channel ranking and the annual calendar." },
            { name: "Content Studio", blurb: "Asset generation, format rendering and voice profile application." },
            { name: "Campaign Lab", blurb: "Campaign structure, sequencing and asset checklists." },
            { name: "Lead Nurturing", blurb: "Sequence generation and objection mapping." },
            { name: "Growth Signal", blurb: "Metric definitions, diagnostics and review agendas." },
            { name: "Web application", blurb: "Sign-in, the brief, review and approval surfaces." },
            { name: "Marketing website", blurb: "The public site and this ecosystem." },
          ],
        },
        {
          type: "prose",
          heading: "What an outage would and would not affect",
          body: [
            "Mengo does not publish, send or hold ad spend. Content that has already been approved and exported lives in your scheduler, your email platform and your CRM, and those systems are unaffected by anything reported here.",
            "In practice that means a Mengo outage degrades to “no new artefacts today” rather than to “marketing stopped”. It is worth stating because it changes how urgently a reader needs to act on anything this page eventually says.",
          ],
        },
      ],
      related: [
        {
          heading: "Elsewhere",
          links: [
            { label: "Help centre", href: siteUrl("support"), external: true },
            { label: "Status for integrators", href: siteUrl("developers", "status"), external: true },
          ],
        },
      ],
    },

    {
      path: "services",
      title: "Services",
      group: "Status",
      seoTitle: "Services — what is reported and how",
      seoDescription:
        "The components Mengo reports status for, why they are split that way, and the state definitions that will apply once monitoring is connected.",
      hero: {
        kind: "document",
        eyebrow: "Status",
        title: "Services",
        lead:
          "What gets reported, at what granularity, and what each state will mean. Defined in advance so the definitions are not written during an incident.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why the components are split this way",
          body: [
            "Component boundaries on a status page exist to answer one question: is the thing I am relying on affected? Splitting by internal architecture answers that badly, because a reader does not know which service their calendar lives in.",
            "So the board follows the product's own nouns — the five engines, the application and the website. Those are the names in the documentation and the interface, which means a reader can map a status entry onto what they were trying to do.",
          ],
        },
        {
          type: "table",
          heading: "State definitions",
          intro:
            "Written before there is anything to report, deliberately. Definitions drafted during an incident get stretched to fit the incident.",
          columns: ["State", "Means", "Reader should"],
          rows: [
            ["Operational", "Working within normal expectations", "Nothing"],
            ["Degraded", "Working, but slower or partially reduced", "Expect delays; avoid starting long operations"],
            ["Partial outage", "One component unavailable, others working", "Check whether the affected component is one you need"],
            ["Major outage", "The service is unavailable", "Wait; already-exported artefacts are unaffected"],
            ["Maintenance", "Planned work, announced in advance", "Follow the notice"],
            ["Awaiting monitoring", "No telemetry is connected — the current state", "Treat status as unknown rather than as good"],
          ],
        },
        {
          type: "pending",
          heading: "Monitoring connection",
          body:
            "This board is built to be driven by a monitoring provider. Which one, and how it publishes, is undecided.",
          needs: [
            "A monitoring or status provider, and the integration into this page",
            "Health checks per component and the thresholds for each state",
            "Who is authorised to change a component's state",
            "Whether a machine-readable status endpoint is exposed",
          ],
        },
      ],
    },

    {
      path: "incidents",
      title: "Incidents",
      group: "Status",
      seoTitle: "Incidents — the current record and how incidents are reported",
      seoDescription:
        "The current incident record for Mengo, the disclosure standard incident reports will follow, and why no incidents are listed.",
      hero: {
        kind: "document",
        eyebrow: "Status",
        title: "Incidents",
        lead:
          "No incidents are recorded. That is a statement about the absence of an incident-reporting process, not a claim about a flawless operating history.",
      },
      blocks: [
        {
          type: "callout",
          heading: "An empty incident list is not an uptime claim",
          body:
            "Status pages routinely blur these. An empty list here means no incident-reporting process has run, because the product is pre-launch and there is no monitoring connected. It does not mean nothing has ever gone wrong, and it should not be read as evidence of reliability.",
        },
        {
          type: "definitions",
          heading: "The reporting standard incidents will follow",
          intro:
            "Committing to this in advance is the point of the page. A disclosure standard written after an embarrassing incident is written to accommodate it.",
          columns: 1,
          items: [
            { label: "Reported when detected, not when resolved", body: "An incident acknowledged only after it is fixed is a press release. The value of a status page is entirely in the window where something is still wrong." },
            { label: "Plain language about impact", body: "What a user cannot do, in the terms the product uses, rather than the name of the failing internal component." },
            { label: "Updates on a stated cadence", body: "Including updates that say nothing has changed. Silence during an incident is read as abandonment." },
            { label: "A resolution note that says what happened", body: "Cause, duration and what changes as a result. “A brief service interruption” is not a resolution note." },
            { label: "Kept permanently", body: "Incidents are not removed once resolved. A history that quietly shortens is worthless as a record." },
          ],
        },
        {
          type: "pending",
          heading: "Incident management",
          body:
            "The process behind this page — detection, declaration, communication and review — is not established.",
          needs: [
            "Detection and alerting, and who is on call",
            "Severity definitions and who declares an incident",
            "Update cadence commitments per severity",
            "Post-incident review process and whether reviews are published",
            "Notification channels for affected users",
          ],
        },
      ],
    },

    {
      path: "maintenance",
      title: "Maintenance",
      group: "Status",
      seoTitle: "Maintenance — planned work notices",
      seoDescription:
        "Where planned maintenance for Mengo is announced, the notice period that will apply, and why no maintenance windows are currently scheduled.",
      hero: {
        kind: "document",
        eyebrow: "Status",
        title: "Maintenance",
        lead:
          "No maintenance is scheduled. Planned work that affects availability will be announced here before it happens.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What would appear here",
          body: [
            "Planned work with user-visible impact: what will be affected, when, for how long, and what a user should do about it. Work with no user-visible impact does not belong on a status page, because filling it with routine deployments trains people to ignore it.",
            "Because Mengo does not publish or send, maintenance windows carry unusually low urgency. Scheduled content already sits in the systems that will publish it, and a maintenance window does not put a campaign at risk.",
          ],
        },
        {
          type: "pending",
          heading: "Maintenance policy",
          body:
            "Notice periods and scheduling conventions are not established, and committing to a notice period this page could not honour would be worse than saying so.",
          needs: [
            "Standard notice period for planned maintenance",
            "Preferred windows, and the timezone they are stated in",
            "How emergency maintenance is distinguished and communicated",
            "Whether maintenance notices go to subscribers as well as appearing here",
          ],
        },
      ],
    },

    {
      path: "history",
      title: "Incident history",
      navLabel: "History",
      group: "Status",
      seoTitle: "Incident history — the permanent record",
      seoDescription:
        "The permanent incident record for Mengo, the retention commitment that applies to it, and why no uptime percentage is published.",
      hero: {
        kind: "document",
        eyebrow: "Status",
        title: "Incident history",
        lead:
          "The permanent record. Empty, because no incident-reporting process has run — and it will not be pruned once it is not.",
      },
      blocks: [
        {
          type: "callout",
          heading: "No uptime percentage is published",
          body:
            "A figure like 99.9% requires continuous measurement over a defined period against a defined definition of availability. None of those exists here, so any percentage would be decoration. This page will publish a figure only when there is measurement behind it and the measurement window is stated alongside it.",
        },
        {
          type: "definitions",
          heading: "The retention commitment",
          items: [
            { label: "Entries are permanent", body: "Resolved incidents stay. A history that shortens over time is a marketing surface rather than a record, and the people who most need it are the ones evaluating reliability." },
            { label: "Post-incident notes stay attached", body: "The cause and the change made as a result are the part with lasting value; the outage duration is the part that gets quoted." },
            { label: "Corrections are visible", body: "If a report was wrong, the correction appears alongside it rather than replacing it." },
          ],
        },
        {
          type: "pending",
          heading: "Historical availability reporting",
          body:
            "Uptime measurement, the availability definition and the reporting period are not established.",
          needs: [
            "The definition of availability per component",
            "Measurement method and the provider of record",
            "Reporting period and where the figure is published",
            "Whether any availability commitment is offered contractually",
          ],
        },
      ],
    },

    {
      path: "subscribe",
      title: "Status notifications",
      navLabel: "Subscribe",
      group: "Status",
      seoTitle: "Status notifications — how to be told about incidents",
      seoDescription:
        "How Mengo status notifications will work once monitoring is connected, and what to do in the meantime.",
      hero: {
        kind: "document",
        eyebrow: "Status",
        title: "Status notifications",
        lead:
          "There is nothing to subscribe to yet. Rather than collect addresses for a notification service that does not exist, this page says what is planned and what to do meanwhile.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why there is no form here",
          body: [
            "A subscribe form on a status page with no monitoring behind it would collect email addresses against a promise nobody can currently keep. It would also create a list whose purpose is hard to describe honestly in a privacy notice.",
            "When monitoring exists, subscription will be offered here with a clear statement of what triggers a notification and how to stop receiving them.",
          ],
        },
        {
          type: "callout",
          heading: "In the meantime",
          body:
            "If something appears to be wrong, the help centre's troubleshooting guide distinguishes product failure from unsatisfactory output, which is the more common cause. If it is genuinely broken, the contact route reaches a person.",
          action: { label: "Troubleshooting", href: siteUrl("support", "troubleshooting"), external: true },
        },
        {
          type: "pending",
          heading: "Notification service",
          body: "Channels, triggers and subscription management are not established.",
          needs: [
            "Notification channels — email, RSS, webhook",
            "Which state changes trigger a notification",
            "Per-component subscription, or all-or-nothing",
            "Subscription management and unsubscribe handling",
          ],
          action: { label: "Contact", href: mainUrl("/contact/"), external: true },
        },
      ],
    },
  ],
};
