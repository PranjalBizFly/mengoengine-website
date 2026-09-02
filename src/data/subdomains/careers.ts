import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The careers site.
 *
 * Register: editorial. Longer measure, statements, more prose than the
 * technical sites — this is the one destination in the ecosystem whose reader is
 * deciding something about their life rather than looking something up.
 *
 * What can be written honestly. Mengo is pre-launch with a founder who is
 * publicly documented; there is no published team, no office, no benefits
 * package, no salary bands and no open roles. So this site does not describe a
 * culture it cannot evidence. What it does instead is describe the working
 * principles that are *visible in what has been built* — the narrow product
 * boundary, the guardrails, the refusal to invent claims, the published list of
 * who the product is not for — and is explicit that these are inferences from
 * artefacts rather than an HR values statement. Everything an employment
 * decision actually turns on is marked as awaiting approved content.
 */
export const careers: SubSite = {
  key: "careers",
  name: "Mengo Careers",
  shortName: "Careers",
  tagline: "Working at Mengo",
  description:
    "What working at Mengo would involve: the principles visible in what has been built, how hiring works at a pre-launch company, and what is not yet decided.",
  register: "editorial",
  nav: [
    { label: "Home", path: "" },
    { label: "Why Mengo", path: "why-mengo" },
    { label: "How we work", path: "culture" },
    { label: "Teams", path: "teams" },
    { label: "Roles", path: "roles" },
    { label: "FAQ", path: "faq" },
  ],
  pages: [
    {
      path: "",
      title: "Careers at Mengo",
      seoTitle: "Careers at Mengo — working at a pre-launch company",
      seoDescription:
        "There are no open roles at Mengo today. What working here would involve, the principles visible in what has been built, and how to register interest honestly.",
      hero: {
        kind: "editorial",
        eyebrow: "Careers",
        title: "There are no open roles",
        lead:
          "Starting with the answer rather than making you look for it. Mengo is pre-launch and has no published vacancies. This site describes what the work is and how hiring will be handled, so that when there is a role you already know whether it is for you.",
        actions: [
          { label: "What the work is", href: "why-mengo" },
          { label: "Register interest", href: "application" },
        ],
        facts: [
          { label: "Open roles", value: "None currently published" },
          { label: "Stage", value: "Pre-launch, building against a waitlist" },
          { label: "Founded by", value: "Jainam Jain" },
          { label: "Team details", value: "Not published" },
        ],
      },
      blocks: [
        {
          type: "prose",
          heading: "Why this site exists with nothing to apply for",
          body: [
            "A careers page that appears only when a company is hiring tells a candidate nothing except that a vacancy exists. The more useful thing, and the harder one, is to describe the work clearly enough that someone can decide in advance whether they would want it.",
            "It is also a filter that works in both directions. Most of what makes a job good or bad at a company this size is not in the job description — it is the stage, the ambiguity, the breadth of what one person ends up owning. Those are describable now.",
          ],
        },
        {
          type: "definitions",
          heading: "What is honestly knowable today",
          intro:
            "Everything below is either published or directly visible in what has been built. Nothing here is an aspiration written as a fact.",
          items: [
            { label: "The company is early", body: "Pre-launch, building against a waitlist, with what gets built next decided partly by what people on that list say they need. That is published on the main site." },
            { label: "The founder is public", body: "Jainam Jain founded Mengo Engine at 14. He is a TEDx speaker and works as a leadership coach alongside building the product." },
            { label: "The product has a narrow boundary", body: "It writes and structures; it does not publish, send, buy media or produce video. Someone joining would be working on a product that says no to things, which is a specific kind of engineering and design culture." },
            { label: "Claim safety is a product requirement", body: "Editorial guardrails restrict what the system will assert. Anyone working on the generation side would be working on that problem directly." },
          ],
        },
        {
          type: "index",
          heading: "More detail",
          links: [
            { label: "Why Mengo", href: "why-mengo", blurb: "The problem the company is working on, and why it is interesting." },
            { label: "How we work", href: "culture", blurb: "Principles visible in the artefacts, rather than a values statement." },
            { label: "Values", href: "values", blurb: "What the published positions imply, and what is not formalised." },
            { label: "Life at Mengo", href: "life-at-mengo", blurb: "The honest version, including what is unknown." },
            { label: "Teams", href: "teams", blurb: "The disciplines the work would divide into." },
            { label: "Open roles", href: "roles", blurb: "None currently — and how that will change." },
          ],
        },
      ],
    },

    {
      path: "why-mengo",
      title: "Why Mengo",
      group: "The work",
      seoTitle: "Why Mengo — the problem and why it is interesting",
      seoDescription:
        "The problem Mengo works on: marketing is the only business function with no external deadline, and the expensive part is deciding rather than producing.",
      hero: {
        kind: "document",
        eyebrow: "The work",
        title: "Why Mengo",
        lead:
          "The case for the problem rather than the case for the company. If the problem is not interesting, nothing about the stage or the team will compensate.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The problem",
          body: [
            "Most small businesses do not fail at marketing because they cannot write. They fail because marketing is the only function with no external deadline. Delivery has clients waiting, finance has filing dates, and marketing has an intention — which loses to whatever is urgent. The result is a familiar shape: a burst of activity, two good weeks, a busy month, and a reset.",
            "The expensive part is not production. It is the decision: what to say, to whom, in what format, this week. A founder makes that decision from scratch every morning, and it costs a disproportionate amount of attention for something that could have been settled once.",
          ],
        },
        {
          type: "statement",
          text:
            "The cost of writing competent copy has collapsed, which has made competent copy worthless as a differentiator. What is still scarce is knowing what to make, for whom, and in what order.",
          attribution: "The product thesis",
        },
        {
          type: "editorial",
          heading: "Why it is a harder problem than it looks",
          sections: [
            {
              heading: "It is a context problem, not a model problem",
              body: "Generating a competent post is solved. Deciding which post, for which segment, in which week, and why, requires holding a structured model of a business and keeping every downstream artefact consistent with it. The interesting engineering is in that structure and in what happens when it changes — an edit to positioning has to reflow a year of calendar without producing nonsense.",
            },
            {
              heading: "Claim safety is a product requirement",
              body: "The risk in AI-assisted marketing is not bad prose, which is obvious and fixable. It is a fluent, specific, entirely invented claim published under someone's name. Building a system that refuses to fill a gap with something plausible — and surfaces it as a gap instead — is harder than building one that always produces an answer, and it is the difference between a product a regulated business can use and one it cannot.",
            },
            {
              heading: "Saying no is most of the design",
              body: "Mengo does not publish, send, hold ad spend or act as a system of record. Each of those would be an obvious feature request and each is refused deliberately. Working here means working on a product where the boundary is defended rather than expanded, which suits some people and frustrates others.",
            },
          ],
        },
      ],
    },

    {
      path: "culture",
      title: "How we work",
      navLabel: "How we work",
      group: "The work",
      seoTitle: "How we work at Mengo — principles visible in the artefacts",
      seoDescription:
        "Rather than a culture statement, the working principles that are directly visible in what Mengo has published and built — and an explicit note on what is not formalised.",
      hero: {
        kind: "document",
        eyebrow: "The work",
        title: "How we work",
        lead:
          "Not a culture statement. A description of working principles you can verify yourself by reading what has been published, because a candidate has no way to check anything else.",
      },
      blocks: [
        {
          type: "callout",
          heading: "How to read this page",
          body:
            "Everything below is inferred from artefacts that exist — the product's boundary, the published policies, the way the main site handles claims. It is not an internal values document, and there is no team large enough for a culture to have been formally described. Treat it as evidence rather than as testimony.",
        },
        {
          type: "definitions",
          heading: "Principles you can verify",
          columns: 1,
          items: [
            {
              label: "State the limitation before the benefit",
              body: "The main site has a page listing who the product is not for, and comparison pages that open by describing what the alternative does well. That is a deliberate and slightly costly editorial choice, and it is visible across four hundred pages.",
            },
            {
              label: "Refuse to invent",
              body: "The product surfaces unsourced claims as gaps rather than filling them. This ecosystem marks unpublished information as awaiting approval rather than guessing. The same rule is applied to the software and to the marketing.",
            },
            {
              label: "Narrow beats broad",
              body: "Publishing, sending, ad spend, media production and CRM are all refused. A company that says no to five obvious features has decided something about scope, and works accordingly.",
            },
            {
              label: "Build in the open, against real input",
              body: "The roadmap is influenced by what people on the waitlist say they need. That implies short feedback loops and a willingness to be told the plan is wrong.",
            },
            {
              label: "Write things down",
              body: "The product exists because positioning and channel priorities living in one person's head means every decision is re-made. It would be strange to build that and not apply it internally.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Working practices",
          body:
            "How the team actually operates day to day — hours, location, meeting rhythm, decision-making, review process — is not published, and describing it from the outside would be invention rather than inference.",
          needs: [
            "Team size and structure",
            "Remote, hybrid or in-person, and which locations",
            "Working hours and timezone expectations",
            "Meeting and planning rhythm",
            "How decisions are made and recorded",
          ],
        },
      ],
    },

    {
      path: "values",
      title: "Values",
      group: "The work",
      seoTitle: "Values — what the published positions imply",
      seoDescription:
        "Mengo has not published a formal values statement. What its published policies and product decisions imply about how it operates, stated as inference rather than declaration.",
      hero: {
        kind: "document",
        eyebrow: "The work",
        title: "Values",
        lead:
          "There is no formal values statement, and this page does not invent one. What there is, is a set of published positions that constrain behaviour — which is a more reliable signal anyway.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why this page is not a list of adjectives",
          body: [
            "A values page usually contains words no company would disclaim: integrity, excellence, customer focus. They cost nothing to publish and predict nothing about how an organisation behaves under pressure.",
            "The published positions below are different, because each of them costs something. Refusing to publish means giving up a feature customers ask for. Marking claims as gaps means shipping output that looks incomplete. Naming who the product is not for means losing enquiries. Positions that cost something are the only ones worth reading.",
          ],
        },
        {
          type: "definitions",
          heading: "Positions that cost something",
          items: [
            { label: "Human review stays mandatory in regulated work", body: "The published responsible-AI position states that guardrails reduce failure rates but do not confer compliance, and that where a jurisdiction requires professional sign-off, Mengo produces drafts for that review rather than replacing it. That is a limit on the product's own claims." },
            { label: "The customer keeps the system", body: "The brief, positioning, calendar and sequences stay with the business rather than with an agency or with Mengo. This is stated as a deliberate contrast with a retainer arrangement." },
            { label: "Consent and deliverability stay with the customer", body: "The product refuses to take custody of sending, which forecloses an entire category of product surface." },
            { label: "The waitlist is asked what is broken, not sold to", body: "Stated on the main site. It sets an expectation that early users are a source of information rather than a funnel." },
          ],
        },
        {
          type: "pending",
          heading: "A formal values statement",
          body:
            "If the company writes one, it belongs here. It should be written by the people it describes rather than derived from artefacts.",
          needs: [
            "Values as the company would state them",
            "How they are used in hiring and review, if at all",
            "A code of conduct",
          ],
        },
      ],
    },

    {
      path: "life-at-mengo",
      title: "Life at Mengo",
      navLabel: "Life at Mengo",
      group: "The work",
      seoTitle: "Life at Mengo — the honest version",
      seoDescription:
        "What joining a pre-launch company with an unpublished team actually involves: breadth, ambiguity, and the specific risks worth weighing before applying.",
      hero: {
        kind: "document",
        eyebrow: "The work",
        title: "Life at Mengo",
        lead:
          "The section where most careers sites show photographs of a team. There is no published team, so this is the written version — including the parts that are not attractive.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "What early-stage actually means",
          intro:
            "Not a warning, and not a pitch. These are the conditions, and different people want opposite things from them.",
          columns: 1,
          items: [
            {
              label: "Breadth instead of depth",
              body: "At this size roles are wide. Someone joining would touch things well outside a job title, which is either the best part of the job or the reason to leave, depending on the person.",
            },
            {
              label: "Ambiguity is the default state",
              body: "Pricing is not decided. The API is not designed. The permission model does not exist. Several sections of this very ecosystem are marked as awaiting decisions. Someone who needs a settled context to do good work would find this difficult, and that is worth knowing before rather than after.",
            },
            {
              label: "Your work is visible immediately",
              body: "There is no layer between building something and it being the product. That is unusually satisfying and unusually exposed.",
            },
            {
              label: "The company might not work",
              body: "It is pre-launch with no published traction. Anyone joining an early company is taking that risk, and a careers site that implies otherwise is not being straight.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Everything an employment decision turns on",
          body:
            "Compensation, equity, benefits, leave, location and working arrangements are not published. These are the things that actually decide whether someone can take a job, and none of them can be responsibly described from the outside.",
          needs: [
            "Compensation approach and whether bands are published",
            "Equity or option arrangements, if any",
            "Benefits, leave and working-time policy",
            "Location, remote policy and which countries can be employed in",
            "Employment versus contract arrangements",
            "Probation, review and progression",
          ],
        },
      ],
    },

    {
      path: "teams",
      title: "Teams",
      group: "Roles",
      seoTitle: "Teams — the disciplines the work divides into",
      seoDescription:
        "The disciplines Mengo's work divides into — engineering, product, design and marketing — and the specific problems each would own.",
      hero: {
        kind: "split",
        eyebrow: "Roles",
        title: "The disciplines, and what each would own",
        lead:
          "Described as areas of work rather than as existing teams, because no team structure has been published. Each is a real problem the product creates.",
        facts: [
          { label: "Engineering", value: "Structure, reflow and generation" },
          { label: "Product", value: "Deciding what the system refuses" },
          { label: "Design", value: "Making a large system legible" },
          { label: "Marketing", value: "Practising what the product argues" },
        ],
      },
      blocks: [
        {
          type: "index",
          heading: "By discipline",
          links: [
            { label: "Engineering", href: "engineering", blurb: "Structured context, reflow, and generation that refuses to invent." },
            { label: "Product", href: "product", blurb: "Holding a narrow boundary against reasonable feature requests." },
            { label: "Design", href: "design", blurb: "Making a system with hundreds of artefacts navigable." },
            { label: "Marketing", href: "marketing", blurb: "Marketing a marketing product without the tactics it argues against." },
          ],
        },
        {
          type: "callout",
          heading: "These are not vacancies",
          body:
            "No roles are open in any of these areas. The pages describe the work so that someone can decide whether it interests them, and so that a speculative approach can be specific rather than generic.",
          action: { label: "Open roles", href: "roles" },
        },
      ],
    },

    {
      path: "engineering",
      title: "Engineering",
      group: "Roles",
      seoTitle: "Engineering at Mengo — structured context and reflow",
      seoDescription:
        "The engineering problems Mengo creates: modelling a business as structured context, propagating edits through a year of artefacts, and generation that refuses to invent.",
      hero: {
        kind: "document",
        eyebrow: "Roles",
        title: "Engineering",
        lead:
          "Three problems that are genuinely difficult, described concretely rather than as a technology list.",
      },
      blocks: [
        {
          type: "editorial",
          heading: "The problems",
          sections: [
            {
              heading: "Structured context",
              body: "The product's central claim is that it holds the strategy an asset is supposed to serve. That means modelling a business — positioning, segments, offers, objections, channel priorities, seasonality — as structured, versioned, editable objects rather than as a prompt. Getting that model right determines whether a year of output is coherent or merely fluent, and it is the part that cannot be bolted on later.",
            },
            {
              heading: "Reflow",
              body: "Correcting positioning has to propagate through a 365-day calendar, the assets generated from it and the sequences that inherit from those, without producing nonsense and without discarding work a user has already approved. This is a dependency and invalidation problem with a human in the loop, and it is the behaviour users notice most when it is wrong.",
            },
            {
              heading: "Generation that refuses",
              body: "The system must decline to fill an unsourced claim with something plausible, and surface it as an explicit gap instead. Building a generator whose most important behaviour is not producing an answer runs against the grain of how these systems are usually evaluated, and it is what makes the output usable in regulated work.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Stack, practices and roles",
          body: "The technology stack, engineering practices and any role definitions are not published.",
          needs: [
            "Languages, frameworks and infrastructure",
            "Engineering practices — review, testing, deployment",
            "Seniority levels and what each is expected to own",
            "Whether roles are backend, frontend, full-stack or ML-leaning",
          ],
        },
      ],
    },

    {
      path: "product",
      title: "Product",
      group: "Roles",
      seoTitle: "Product at Mengo — holding a narrow boundary",
      seoDescription:
        "The product problem at Mengo: defending a deliberately narrow scope against reasonable feature requests, and designing for a user whose alternative is doing nothing.",
      hero: {
        kind: "document",
        eyebrow: "Roles",
        title: "Product",
        lead:
          "The unusual part of this product job is that most of the work is deciding what not to build, against requests that are individually reasonable.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "What the work involves",
          columns: 1,
          items: [
            {
              label: "Defending the boundary",
              body: "Publishing, sending, ad spend, CRM. Each will be requested, each is refused, and each refusal has to be explained in a way that does not sound like an excuse. The main site already argues these positions publicly, which raises the bar for changing them.",
            },
            {
              label: "Designing for a user whose alternative is nothing",
              body: "The competitor is usually not another tool — it is the marketing not happening. That changes what success looks like: a plan someone actually follows beats a better plan they abandon, which is why channel ranking weighs sustainable effort rather than theoretical optimum.",
            },
            {
              label: "Deciding what the system is allowed to assert",
              body: "Where guardrails sit is a product decision with real consequences. Too loose and the product publishes invented claims under a customer's name; too tight and the output is full of holes. This is judgement, not configuration.",
            },
            {
              label: "Keeping the review loop survivable",
              body: "The whole product fails if reviewing output becomes another daily decision. Batch size, rejection granularity and approval flow are load-bearing rather than cosmetic.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Role definition",
          body: "No product roles are defined or published.",
          needs: ["Whether product is a distinct function yet", "Seniority and scope", "How product decisions are made today"],
        },
      ],
    },

    {
      path: "marketing",
      title: "Marketing",
      group: "Roles",
      seoTitle: "Marketing at Mengo — practising what the product argues",
      seoDescription:
        "Marketing a marketing product without using the tactics it argues against: the constraint, and why it makes the work harder and more interesting.",
      hero: {
        kind: "document",
        eyebrow: "Roles",
        title: "Marketing",
        lead:
          "A constrained brief: market a product whose central argument is that most marketing content is worthless, without producing any.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The constraint",
          body: [
            "Mengo argues that competent copy has stopped being a differentiator and that generic content is a liability. That rules out the tactics most software companies reach for, and it is visible in what has been published: comparison pages that open by describing what the alternative does well, a page listing who the product is not for, and no statistics anywhere that are not sourced.",
            "It is a harder brief than it sounds. Every shortcut available to a normal marketing function is one this company has publicly argued against, which means the work has to be good rather than merely plentiful.",
          ],
        },
        {
          type: "checklist",
          heading: "What the work looks like",
          items: [
            "Writing that takes a position, since a position is the only thing that cannot be generated generically.",
            "Publishing what is not true of the product as readily as what is — the disqualification pages do more conversion work than the persuasion pages.",
            "Maintaining a large, interlinked content architecture rather than a campaign calendar.",
            "Using the product as its first serious user, and reporting honestly when it falls short.",
          ],
        },
        {
          type: "pending",
          heading: "Role definition",
          body: "No marketing roles are defined or published.",
          needs: ["Whether marketing is hired for or founder-led", "Scope and seniority", "How performance would be judged"],
        },
      ],
    },

    {
      path: "design",
      title: "Design",
      group: "Roles",
      seoTitle: "Design at Mengo — making a large system legible",
      seoDescription:
        "The design problem at Mengo: a system that produces hundreds of artefacts a year, which has to stay navigable and reviewable by one busy person.",
      hero: {
        kind: "document",
        eyebrow: "Roles",
        title: "Design",
        lead:
          "The product generates a year of artefacts. Making that navigable, reviewable and non-overwhelming for one busy person is the whole design problem.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "What the work involves",
          columns: 1,
          items: [
            {
              label: "Volume without overwhelm",
              body: "A 365-day calendar, assets across a large set of formats, sequences per segment. Presenting that so it reads as a plan rather than as a backlog is the difference between a product someone opens weekly and one they avoid.",
            },
            {
              label: "Review as the primary interaction",
              body: "The main thing a user does is approve, reject and correct. Rejection granularity in particular is a design problem: rejections have to name the failing part, which means the interface has to make parts nameable.",
            },
            {
              label: "Showing inheritance",
              body: "Because everything reflows from the strategy layer, users need to understand what a change will affect before making it. Making a dependency visible without making it frightening is genuinely hard.",
            },
            {
              label: "Designing an honest empty state",
              body: "Guardrails produce gaps on purpose. A gap has to read as a deliberate prompt for information rather than as a defect, or users will fill it carelessly to make it go away.",
            },
          ],
        },
        {
          type: "pending",
          heading: "Role definition",
          body: "No design roles are defined or published.",
          needs: ["Whether design is product, brand, or both", "Seniority and scope", "Existing design system ownership"],
        },
      ],
    },

    {
      path: "roles",
      title: "Open roles",
      navLabel: "Roles",
      group: "Applying",
      seoTitle: "Open roles at Mengo — none currently",
      seoDescription:
        "Mengo has no published open roles. What will appear here when that changes, and how to register interest in the meantime.",
      hero: {
        kind: "document",
        eyebrow: "Applying",
        title: "Open roles",
        lead:
          "None. Rather than an empty listing widget, this page says plainly what will appear here and what to do meanwhile.",
      },
      blocks: [
        {
          type: "callout",
          heading: "No vacancies are published",
          body:
            "Mengo is pre-launch and has not published any open positions. If you see a Mengo role advertised elsewhere, it did not come from here — that is worth stating, because early-stage company names are used in recruitment fraud.",
          action: { label: "Register interest instead", href: "application" },
        },
        {
          type: "checklist",
          heading: "What a role listing here will contain",
          intro:
            "Committing to this in advance, because job descriptions written under hiring pressure omit exactly these things.",
          items: [
            "What the role actually owns, in terms of problems rather than responsibilities.",
            "The compensation range, in the currency and country it applies to.",
            "Location and working arrangements, stated rather than implied.",
            "What the first ninety days would involve.",
            "The process, including how many stages and roughly how long.",
            "What would make someone unsuitable, said directly.",
          ],
        },
        {
          type: "pending",
          heading: "Hiring plans",
          body: "Whether, when and for what Mengo will hire has not been published.",
          needs: [
            "Hiring plans and timeline",
            "Which disciplines first",
            "Whether an applicant tracking system will be used",
          ],
        },
      ],
    },

    {
      path: "faq",
      title: "Careers FAQ",
      navLabel: "FAQ",
      group: "Applying",
      seoTitle: "Careers FAQ — hiring, stage and speculative applications",
      seoDescription:
        "Questions about working at Mengo: whether there are roles, what is known about the team, remote work, and whether speculative applications are worthwhile.",
      hero: {
        kind: "document",
        eyebrow: "Applying",
        title: "Careers FAQ",
        lead: "Direct answers, several of which are that the information does not exist.",
      },
      blocks: [
        {
          type: "faq",
          heading: "Questions",
          items: [
            {
              q: "Are you hiring?",
              a: "No roles are published. That is different from “never”, but it means there is nothing to apply for today.",
            },
            {
              q: "How big is the team?",
              a: "Not published. The founder is public; nothing else about team size or composition has been stated, and this site does not estimate it.",
            },
            {
              q: "Is the work remote?",
              a: "Not published. Location and working arrangements are on the list of things that have to be decided before a role could honestly be advertised.",
            },
            {
              q: "What is the salary?",
              a: "Not published. When roles appear, this site commits to including a range rather than asking candidates to guess.",
            },
            {
              q: "Is a speculative application worth sending?",
              a: "Only if it is specific. A message describing which of the problems on the teams pages you would want to work on, and what you have done that is relevant, is genuinely useful. A general CV with no context is not.",
            },
            {
              q: "Do you take interns or students?",
              a: "Nothing is published either way. The founder works with young people as a coach and speaker, but that is separate from employment and should not be read as a programme.",
            },
            {
              q: "I saw a Mengo job advert elsewhere — is it real?",
              a: "If it is not published here, it did not come from Mengo. Treat any request for payment, personal financial details or documents during a supposed recruitment process as fraudulent.",
            },
          ],
        },
      ],
    },

    {
      path: "application",
      title: "Registering interest",
      navLabel: "Apply",
      group: "Applying",
      seoTitle: "Registering interest in working at Mengo",
      seoDescription:
        "How to register interest in working at Mengo when there are no open roles, what makes a speculative approach useful, and what happens to what you send.",
      hero: {
        kind: "document",
        eyebrow: "Applying",
        title: "Registering interest",
        lead:
          "There is no application process, because there is nothing to apply for. There is a way to be remembered, and it works better when it is specific.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "What makes a speculative approach useful",
          items: [
            "Name the problem you would want to work on — structured context, reflow, generation that refuses, the review loop. The teams pages describe them specifically for this reason.",
            "Show something you have built or written that is relevant to it. One real artefact beats a list of technologies.",
            "Say what you would need to make a move — compensation, location, notice period. It saves a conversation that would otherwise happen three rounds in.",
            "Be honest about timing. “Interested in a year” is useful information, not a reason not to write.",
            "Skip the covering letter conventions. There is no HR filter to get past.",
          ],
        },
        {
          type: "prose",
          heading: "What happens to what you send",
          body: [
            "It reaches a small team and is read by a person. There is no applicant tracking system, no automated acknowledgement, and no queue being worked through — which means a reply is not guaranteed and its absence is not a judgement.",
            "Because there is no formal process, there is also no formal retention policy for speculative applications yet. If you would prefer your details not to be kept, say so and they will not be.",
          ],
        },
        {
          type: "callout",
          heading: "The route",
          body:
            "Career enquiries go through the contact form on the main site. There is no dedicated careers address, and this page will not invent one.",
          action: { label: "Contact form", href: mainUrl("/contact/"), external: true },
        },
        {
          type: "index",
          heading: "Elsewhere",
          links: [
            { label: "About Mengo", href: siteUrl("about"), external: true, blurb: "The company, its story and what it does." },
            { label: "The founder", href: mainUrl("/company/founder/"), external: true, blurb: "Publicly documented background." },
            { label: "Product documentation", href: siteUrl("docs"), external: true, blurb: "The best way to understand what is actually being built." },
          ],
        },
      ],
    },
  ],
};
