import type { DepthMap } from "@/data/depth";
import { close, s } from "@/data/depth";

/**
 * Engine depth.
 *
 * The product records already carry the job, the process, the inputs and the
 * outputs. What a reader on a platform page also needs is the problem the
 * engine exists to remove — stated as they would state it — and an honest
 * account of what it does not do, because five engines described only in terms
 * of what they produce start to sound alike.
 */
export const productDepth: DepthMap = {
  "marketing-engine": {
    intro:
      "Marketing Engine is the layer almost every small business skips, and skipping it is why the layers above it keep collapsing. Positioning, segments, channel priorities and a calendar are not documents for their own sake — they are the decisions that, once settled, stop being re-made every week under time pressure.",
    explain: [
      s(
        "The problem it removes",
        "The daily question of what to publish, and the weekly re-litigation of who you are for. Both are expensive because they recur, and both are answered badly when they are answered at eight in the morning by someone with client work waiting.",
      ),
      s(
        "What it deliberately does not do",
        "It does not produce assets. Handing you a strategy and a calendar and leaving you to write everything would reproduce the original problem, which is why Content Studio exists and why the two share the same brief rather than being sold separately.",
      ),
      s(
        "Who gets the most from it",
        "Businesses that have been publishing inconsistently for a while and cannot say what any of it was building towards. The strategy layer is what converts accumulated effort into an accumulating position.",
      ),
    ],
    connects:
      "Everything downstream resolves back to here. Content Studio inherits the positioning and the voice profile, Campaign Lab inherits the offer ladder and the segments, Lead Nurturing inherits the buying cycle, and Growth Signal measures against the business model captured in the same brief.",
    related: {
      guides: ["marketing-system-playbook", "positioning-framework"],
      articles: ["marketing-is-a-systems-problem", "the-daily-decision-is-the-cost"],
      solutions: ["build-a-marketing-system"],
    },
    close: close(
      "Settle the decisions once",
      "The strategy layer takes a sitting to produce and stops being re-decided every Monday. Join our waitlist and tell us what you sell.",
    ),
  },

  "content-studio": {
    intro:
      "Content Studio is where a themed calendar slot becomes a finished asset. The distinction that matters is that it never starts from a blank prompt: every piece arrives carrying the month's argument, the segment it addresses, the funnel stage it occupies and the format anatomy it has to respect.",
    explain: [
      s(
        "The problem it removes",
        "The blank page, and the version of the blank page that is worse — a generation tool with no context, producing competent text that could have been published by anyone in your category.",
      ),
      s(
        "What it deliberately does not do",
        "It does not invent facts. Numbers, customer names, credentials and results come from what you supplied, and a gap is surfaced as a gap. That constraint costs a little fluency and removes the failure mode that actually damages a business.",
      ),
      s(
        "Why the format library is large",
        "A carousel, a reel script and a negative keyword plan have almost nothing structurally in common. Treating them as variations of one text generator is precisely what makes generated marketing recognisable as generated marketing.",
      ),
    ],
    connects:
      "Content Studio consumes calendar slots and the voice profile from Marketing Engine, produces the assets Campaign Lab sequences into launches, writes the messages Lead Nurturing paces, and hands Growth Signal a slot job to score each asset against.",
    related: {
      guides: ["content-brief-template", "voice-profile-worksheet"],
      articles: ["ai-content-sounds-the-same", "write-for-the-format"],
      solutions: ["build-a-content-engine"],
    },
    close: close(
      "Never from a blank prompt",
      "Every asset arrives carrying the theme, the segment and the format it has to work within. Join our waitlist for early access.",
    ),
  },

  "campaign-lab": {
    intro:
      "Campaign Lab exists because a campaign is not a post with an offer in it. It is a bounded piece of work with four decisions attached, and the reason most promotions underperform is that three of the four were never made explicitly.",
    explain: [
      s(
        "The problem it removes",
        "Campaigns that drift into being permanent. Without a defined end condition an offer runs until someone gets bored of it, which teaches your market to wait for the next discount and quietly resets your pricing.",
      ),
      s(
        "What it deliberately does not do",
        "It does not run your ad accounts or place your media. Audience construction and spend management stay with you and your platforms; what Campaign Lab supplies is the brief, the sequence, the assets and the rules for when to stop.",
      ),
      s(
        "Why the retrospective is part of it",
        "A campaign scored against a success condition invented afterwards can always be described as a success. Writing the condition into the brief beforehand is what makes the retrospective worth holding.",
      ),
    ],
    connects:
      "Campaign Lab draws the offer ladder and the segments from Marketing Engine, commissions assets from Content Studio, hands responders to Lead Nurturing, and reports its outcome into the Growth Signal experiment log.",
    related: {
      guides: ["launch-checklist", "seasonal-planning-playbook"],
      articles: ["testing-adjectives-teaches-nothing", "what-quiet-months-are-for"],
      solutions: ["launch-a-new-product"],
    },
    close: close(
      "A beginning, a middle and a defined end",
      "Four decisions before anything is produced, and a rule for when to stop. Join our waitlist for early access.",
    ),
  },

  "lead-nurturing": {
    intro:
      "Most businesses describe a lead problem and have a follow-up problem. The enquiries arrive, the first reply is enthusiastic and fast, and then a decision that takes eight weeks meets a sequence that ended after four days.",
    explain: [
      s(
        "The problem it removes",
        "Silence. Not competitors, not price — the weeks between someone raising their hand and someone deciding, during which nothing arrives because remembering to follow up competes with delivery work that has a deadline.",
      ),
      s(
        "What it deliberately does not do",
        "It does not send. Your email platform, your CRM and your messaging tools keep the records, the consent and the delivery; what Lead Nurturing supplies is the segmentation, the objection map, the messages and the pacing those systems execute.",
      ),
      s(
        "Why one objection per message",
        "A sequence where every message restates the pitch gives a hesitant buyer nothing new to change their mind with. Assigning each message a single hesitation is what gives the arc direction and the reader a reason to open the next one.",
      ),
    ],
    connects:
      "It takes segments and the buying cycle from Marketing Engine, receives responders from Campaign Lab, uses email and messaging copy from Content Studio, and reports conversion between stages into Growth Signal's funnel diagnostics.",
    related: {
      guides: ["lead-nurture-blueprint", "objection-map-template"],
      articles: ["the-follow-up-gap", "speed-is-a-conversion-strategy"],
      solutions: ["generate-qualified-leads"],
    },
    close: close(
      "Most leads are lost to silence",
      "The sequence that matters is messages three through seven, and almost nobody has written them. Join our waitlist for early access.",
    ),
  },

  "growth-signal": {
    intro:
      "Reporting fails in a specific and predictable way: it produces a picture rather than a decision. Growth Signal starts from the opposite end, selecting only numbers that would change what you do next and naming explicitly what to stop watching.",
    explain: [
      s(
        "The problem it removes",
        "A dashboard nobody reads, and decisions still made on instinct alongside it. Every additional metric dilutes attention and increases the chance of reacting to noise, which at small volumes is most of what weekly movement is.",
      ),
      s(
        "What it deliberately does not do",
        "It does not promise attribution certainty. Buyers use devices you cannot link and are recommended by people who never appear in your data, so Growth Signal reports a range and states the uncertainty rather than implying precision it does not have.",
      ),
      s(
        "Why three reviews rather than one",
        "Execution, channel mix and strategy move on different clocks. Reviewing all three weekly produces a plan that never runs long enough to be judged; reviewing them quarterly means execution problems persist for months.",
      ),
    ],
    connects:
      "Growth Signal reads the business model from the Business Brief, scores Content Studio's assets against the job each slot was assigned, receives campaign outcomes from Campaign Lab, and feeds its findings back into the quarterly review of channel ranking and positioning.",
    related: {
      guides: ["metric-selection-framework", "monthly-review-template"],
      articles: ["stop-measuring-everything"],
      solutions: ["prove-marketing-roi"],
    },
    close: close(
      "Fewer numbers, each with a decision",
      "A metric you would not act on is costing you attention. Join our waitlist for early access.",
    ),
  },
};
