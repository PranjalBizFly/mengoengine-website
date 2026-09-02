import type { DepthMap } from "@/data/depth";
import { close, s } from "@/data/depth";

/**
 * Comparison depth.
 *
 * A comparison page is read by someone who has already decided to solve the
 * problem and is choosing how. What each record was missing is the situation
 * that brings a reader to this specific comparison, and the honest answer to
 * whether the two options are alternatives at all — because several of them
 * are complements, and saying so is more useful than pretending otherwise.
 */
export const comparisonDepth: DepthMap = {
  "mengo-vs-a-marketing-agency": {
    intro:
      "This comparison usually arrives after a quote. An agency retainer is a significant monthly commitment, and the question underneath it is whether you are buying execution capacity, senior judgement, or accountability — because those three are priced together and needed in different proportions by different businesses.",
    explain: [
      s(
        "They are not always alternatives",
        "A good agency running against a documented strategy layer is a different engagement from one asked to invent the strategy first. Several agencies use exactly this kind of system internally; the comparison is really about who holds the strategy afterwards.",
      ),
      s(
        "What the retainer is actually buying",
        "People, availability and someone to be accountable when something slips. If your constraint is that nobody is doing the work, that is worth paying for. If your constraint is that nobody has decided what the work should be, a retainer often produces expensive output against an unsettled brief.",
      ),
    ],
    related: {
      guides: ["marketing-audit-checklist"],
      articles: ["hire-or-tool"],
      solutions: ["agencies-and-freelancers"],
    },
    close: close(
      "Decide what you are actually buying",
      "If the constraint is execution capacity, an agency is a reasonable answer. Join our waitlist and describe the constraint.",
    ),
  },

  "mengo-vs-an-in-house-marketer": {
    intro:
      "A first marketing hire is one of the largest fixed commitments a small business makes, and the case for it is usually made on volume. The part that gets underestimated is how much of the first six months goes into building the strategy layer rather than producing anything.",
    explain: [
      s(
        "What the six months actually contains",
        "Positioning, segments, channel reasoning, voice, and a calendar — reconstructed from conversations with you, because it exists in your head. A hire arriving to a documented version of all five starts producing in week one instead.",
      ),
      s(
        "Where a person is irreplaceable",
        "Relationships, negotiation, judgement in an unfamiliar situation, and the willingness to disagree with you. None of that comes from software, and a business whose constraint is judgement rather than throughput should hire.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook"],
      articles: ["hire-or-tool", "the-brief-is-the-bottleneck"],
      solutions: ["scale-content-without-hiring"],
    },
    close: close(
      "Document it either way",
      "The same strategy layer that makes generation useful is what makes a hire productive from week one. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-freelance-writers": {
    intro:
      "Most dissatisfaction with freelance writing is briefing dissatisfaction wearing a talent costume. A writer given a one-line topic has to guess the claim, the audience and the evidence, and the odds of guessing all three correctly are low regardless of how good they are.",
    explain: [
      s(
        "The brief is the shared bottleneck",
        "A specific brief improves what a freelancer produces and what a model produces, by the same mechanism and for the same reason. Fixing the brief is worth doing before deciding who writes against it.",
      ),
      s(
        "What a good writer brings that a brief cannot",
        "Taste, judgement about what to leave out, and the ability to notice when the brief itself is wrong. On material where the phrasing genuinely matters, that is worth paying for.",
      ),
    ],
    related: {
      guides: ["content-brief-template"],
      articles: ["the-brief-is-the-bottleneck", "ai-does-not-remove-the-work"],
      useCases: ["brief-a-freelance-writer"],
    },
    close: close(
      "Fix the brief first",
      "The same document makes a freelancer effective and makes generation usable. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-a-general-ai-chatbot": {
    intro:
      "A general assistant will write a good post about almost anything, immediately, for very little money. The reason that does not solve marketing is that the expensive decision was never the writing — it was deciding which post, for whom, this week, and why.",
    explain: [
      s(
        "What the chatbot is missing is memory and constraint",
        "Each session starts from whatever you happen to type. There is no stored positioning, no segment definitions, no calendar and no record of what you published last month, so nothing accumulates and consistency depends entirely on your prompting.",
      ),
      s(
        "Where a general assistant is genuinely better",
        "Anything unstructured and one-off: thinking through a problem, rewriting a difficult email, summarising research. Those are not the jobs a marketing system does, and using one for the other in either direction is a poor trade.",
      ),
    ],
    related: {
      articles: ["a-chatbot-is-not-a-strategy", "prompt-engineering-is-not-the-skill"],
      features: ["business-brief", "annual-calendar"],
    },
    close: close(
      "Which post, not just the post",
      "The decision is the expensive part, and it is the part a blank prompt hands back to you. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-a-social-scheduler": {
    intro:
      "Schedulers are good products solving a real problem, and most of them contain an empty calendar. The tool removed the friction of publishing and left the harder question — what to publish — exactly where it was.",
    explain: [
      s(
        "They sit at different points in the process",
        "A scheduler is the last step. Deciding the theme, the audience, the format and the argument all happen before it, and a business with those decided will get value from a scheduler rather than staring at it.",
      ),
      s(
        "The empty-calendar symptom",
        "If your scheduler is mostly unused, the missing piece is upstream. Buying a second scheduling tool reliably produces a second empty calendar.",
      ),
    ],
    related: {
      guides: ["90-day-content-plan"],
      articles: ["ai-marketing-tools-that-stay-empty", "the-daily-decision-is-the-cost"],
      useCases: ["fill-an-empty-calendar"],
    },
    close: close(
      "The calendar, then the scheduler",
      "Publishing was never the bottleneck. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-an-email-platform": {
    intro:
      "Email platforms are mature, capable and largely interchangeable at the volumes most small businesses run. They send, segment, automate and report extremely well, and every one of them presents you with an empty sequence builder.",
    explain: [
      s(
        "You will still need one",
        "Sending, consent records and deliverability infrastructure stay with your platform. This is a complement rather than a replacement, and any comparison that implies otherwise is misdescribing what either thing does.",
      ),
      s(
        "The blank part is the expensive part",
        "Deciding what six messages should say, to whom, in what order and how far apart is where the outcome is determined. The platform executes that decision perfectly and does not help you make it.",
      ),
    ],
    related: {
      guides: ["lead-nurture-blueprint", "welcome-sequence-template"],
      articles: ["the-follow-up-gap"],
      features: ["sequence-builder", "objection-mapping"],
    },
    close: close(
      "Keep the platform, fill the sequence",
      "Automation is not the missing piece; the words are. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-marketing-automation": {
    intro:
      "CRM automation is exceptionally good at executing rules against records: if this happens, do that, to these people, at this time. What it cannot supply is the judgement about which rules are worth having and what the resulting messages should say.",
    explain: [
      s(
        "Rules without content are an empty machine",
        "Most underused automation modules are underused for one reason: nobody had time to write the sequences the rules were supposed to trigger. The licence was never the constraint.",
      ),
      s(
        "They are complements, and should be",
        "Your CRM holds the records and the triggers. The strategy that decides segmentation and the copy that fills the messages sit upstream of it, and keeping them there is what makes the automation worth its cost.",
      ),
    ],
    related: {
      guides: ["lead-nurture-blueprint"],
      articles: ["ai-marketing-tools-that-stay-empty"],
      features: ["intent-segmentation", "cadence-planning"],
    },
    close: close(
      "The rules are ready, the words are not",
      "An automation module with no sequences in it is a licence cost. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-a-content-calendar-template": {
    intro:
      "A template is a reasonable place to start and costs nothing, which makes this the most honest comparison on the site: for some businesses the template is genuinely enough, and it is worth trying before paying for anything.",
    explain: [
      s(
        "Where templates stop working",
        "The grid does not tell you what goes in the cells. Filling it requires deciding what to publish, for whom and why, thirty times in one sitting — which is a strategy exercise disguised as an admin task, and the reason most downloaded templates are abandoned partway through.",
      ),
      s(
        "When a template is the right answer",
        "When you already know what you want to say and simply need somewhere to organise it. If your constraint is organisation rather than decision-making, a spreadsheet is a complete solution.",
      ),
    ],
    related: {
      guides: ["90-day-content-plan", "content-brief-template"],
      articles: ["the-daily-decision-is-the-cost"],
      useCases: ["fill-an-empty-calendar"],
    },
    close: close(
      "Try the template first",
      "If it stays filled for three months, you did not need anything else. Join our waitlist if it does not.",
    ),
  },

  "mengo-vs-ai-writing-tools": {
    intro:
      "AI writing tools improve sentences, and sentences were rarely the problem. A business publishing well-written content with no argument behind it is in a slightly better position than one publishing badly-written content with no argument, and not a materially different one.",
    explain: [
      s(
        "Better prose does not fix an unclear claim",
        "If the underlying position is a description rather than a claim, polishing it produces a well-phrased description. The improvement is real and it is happening at the wrong layer.",
      ),
      s(
        "Why output alone tends to sound the same",
        "Without stored positioning, segments and a voice profile with a banned list, every generation reverts towards the model's average register. That is the specific reason so much generated marketing reads as interchangeable.",
      ),
    ],
    related: {
      guides: ["voice-profile-worksheet"],
      articles: ["ai-content-sounds-the-same", "prompt-engineering-is-not-the-skill"],
      features: ["voice-profile", "positioning-generator"],
    },
    close: close(
      "The sentence is downstream of the claim",
      "Improving phrasing cannot rescue an argument that was never made. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-a-marketing-course": {
    intro:
      "This one turns entirely on which resource is scarce. A course transfers knowledge and leaves the execution with you; if the shortage is understanding, that is exactly the right trade and it is considerably cheaper than any alternative.",
    explain: [
      s(
        "Knowledge scarcity versus time scarcity",
        "Someone who does not know what positioning is should learn. Someone who knows precisely what to do and has not done it for four months has a capacity problem, and another course adds to the backlog rather than reducing it.",
      ),
      s(
        "The uncomfortable middle case",
        "Many people buy courses because learning feels like progress and executing does not. If you have completed two and published nothing, the third is not the missing piece.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook"],
      articles: ["the-quiet-period-you-are-waiting-for", "marketing-is-a-systems-problem"],
    },
    close: close(
      "Which one is actually scarce?",
      "Knowledge or time. The answer decides this comparison entirely. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-a-fractional-cmo": {
    intro:
      "A fractional marketing leader brings senior judgement for a few days a month. The recurring frustration in these engagements is how much of that limited time goes into producing documents that could have been generated, leaving less for the judgement you are paying for.",
    explain: [
      s(
        "Where the days actually go",
        "Writing the strategy document, building the calendar, briefing production and assembling reports. Necessary work, done at a senior rate, that consumes the sessions where the harder questions were meant to be discussed.",
      ),
      s(
        "The strongest combination",
        "The system produces the documents; the fractional leader challenges them. That is a considerably better use of two days a month than watching someone build a spreadsheet you are paying senior rates for.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook", "monthly-review-template"],
      articles: ["hire-or-tool"],
      solutions: ["small-marketing-teams"],
    },
    close: close(
      "Spend the senior days on judgement",
      "The documents can be generated; the challenge to them cannot. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-doing-it-yourself": {
    intro:
      "Doing it yourself is free, entirely viable, and works well until the business gets busy. That last clause is the whole comparison, because the busy period is both when marketing stops and when the pipeline it produces is most needed.",
    explain: [
      s(
        "The cost is deferred rather than avoided",
        "A quarter of silence is paid for two quarters later, in an empty pipeline during a quiet month. The cycle is visible in almost every small business that markets manually, and it repeats at roughly the same interval.",
      ),
      s(
        "When continuing manually is correct",
        "When output is low enough that the daily decision is not a burden, when the work is genuinely enjoyable, or when the business is small enough that referrals cover it. All three are real, and none of them are permanent.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook"],
      articles: ["marketing-when-you-are-the-business", "the-cost-of-restarting"],
      solutions: ["solo-founders"],
    },
    close: close(
      "It works until it is needed most",
      "The month marketing stops is the month the next quarter's pipeline was being built. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-an-seo-agency": {
    intro:
      "SEO engagements stall on content far more often than on technical work. The audit is delivered, the keyword map is built, the recommendations are sound — and then somebody has to write forty pages, and that is where the timeline goes.",
    explain: [
      s(
        "The content bottleneck is the usual failure point",
        "Technical fixes are finite and get done. Content is unbounded, requires subject knowledge the agency does not have, and depends on a client who is already busy. That dependency is why so many engagements underdeliver.",
      ),
      s(
        "What a specialist genuinely brings",
        "Technical depth, link acquisition, competitive analysis and diagnosis of problems you would not find yourself. Those are real capabilities that a content system does not replace.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist"],
      articles: ["why-your-content-does-not-compound"],
      channels: ["organic-search"],
    },
    close: close(
      "Remove the content bottleneck",
      "Most SEO engagements are waiting on pages nobody has time to write. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-an-all-in-one-suite": {
    intro:
      "All-in-one suites solve a genuine problem — tools that do not talk to each other — and they solve it well. What they share with every individual tool they replace is that each module arrives empty and waiting for someone to decide what goes in it.",
    explain: [
      s(
        "Consolidation is not content",
        "One login is better than seven. It does not answer what the email sequence should say, which campaign to run next month or which channel to pause, and those are the decisions that determine whether the suite gets used.",
      ),
      s(
        "The common outcome",
        "A capable platform used for perhaps a fifth of what it does, because the remaining four fifths need content and strategy that nobody has produced. The licence cost is unaffected by how much of it is used.",
      ),
    ],
    related: {
      articles: ["ai-marketing-tools-that-stay-empty"],
      features: ["business-brief", "annual-calendar"],
      guides: ["marketing-audit-checklist"],
    },
    close: close(
      "Full toolbox, empty modules",
      "Consolidating tools does not answer what to put in them. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-hiring-a-content-agency": {
    intro:
      "A content agency produces at volume with editorial oversight, which is a genuine capability. The question worth asking is where the strategy that governs that volume lives, because if it lives with the agency it leaves when the relationship does.",
    explain: [
      s(
        "Volume against an unsettled brief",
        "Where the strategy is thin, a content agency produces a large quantity of competent material that does not accumulate into a position. The output is fine and the year does not add up to anything.",
      ),
      s(
        "What leaves at the end of the engagement",
        "The accumulated understanding of your positioning, voice and audience — unless it was documented in a form you hold. That is worth deciding deliberately rather than discovering at the handover.",
      ),
    ],
    related: {
      guides: ["content-brief-template", "voice-profile-worksheet"],
      articles: ["why-your-content-does-not-compound"],
      solutions: ["build-a-content-engine"],
    },
    close: close(
      "Keep the strategy in the business",
      "Volume without a settled position produces a year that does not add up. Join our waitlist for early access.",
    ),
  },

  "mengo-vs-waiting-until-later": {
    intro:
      "Deferring marketing until the business is less busy is the most widely held marketing strategy there is. It is also the one with the clearest track record, because the quiet period it depends on is produced by exactly the marketing being deferred.",
    explain: [
      s(
        "Why the quiet period never arrives",
        "If the business is busy, there is no time. If it becomes quiet, the pipeline that would have been built during the busy period is empty, and the quiet period is spent on urgent short-term work instead.",
      ),
      s(
        "The compounding cost of restarting",
        "Each restart pays for an audience that has moved on, a positioning that has to be re-decided and a search presence that has decayed. Three months of consistency lost costs considerably more than three months to rebuild.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook"],
      articles: ["the-quiet-period-you-are-waiting-for", "the-cost-of-restarting"],
      solutions: ["fix-inconsistent-posting"],
    },
    close: close(
      "The calm period is produced by the work",
      "It does not arrive first and then permit the marketing. Join our waitlist for early access.",
    ),
  },
};
