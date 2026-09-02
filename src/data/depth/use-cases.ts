import type { DepthMap } from "@/data/depth";
import { close, s } from "@/data/depth";

/**
 * Use-case depth.
 *
 * A use case already states the trigger, the before, the after and the
 * workflow. What it did not state is why the obvious approach to this job
 * tends to fail, and what you are actually holding when it is finished. Those
 * two questions are what each entry answers, in that order.
 */
export const useCaseDepth: DepthMap = {
  "plan-a-year-of-content": {
    intro:
      "Planning a year sounds like an exercise in optimism until you realise what is actually being planned. Not twelve months of posts — twelve months of arguments, at a resolution that gets finer as the date approaches. The output is a structure, and the structure is what removes the daily question of what to publish.",
    explain: [
      s(
        "Why an annual plan usually fails",
        "Most attempts plan dates rather than arguments, which produces a grid that has to be filled by the same person who was already struggling to decide what to write. Twelve months of empty slots relocates the problem rather than removing it.",
      ),
      s(
        "What you end up holding",
        "A themed year, a detailed current quarter, and a dependency order — awareness content scheduled before the offers that depend on it. Each slot in the detailed quarter carries an argument, an audience segment and a format before anything is written.",
      ),
    ],
    related: {
      guides: ["90-day-content-plan", "marketing-system-playbook"],
      articles: ["the-daily-decision-is-the-cost", "why-your-content-does-not-compound"],
    },
    close: close(
      "The year, decided in one sitting",
      "Detail firms up a quarter out, which is the horizon most businesses can genuinely predict. Join our waitlist and tell us what you are planning around.",
    ),
  },

  "define-your-positioning": {
    intro:
      "Positioning is usually rewritten three or four times before anyone notices that rewriting is not the problem. The statement keeps coming out accurate and forgettable because the underlying decision — who this is not for — has not been made. This job is about making that decision, and then propagating it.",
    explain: [
      s(
        "Why writing it again does not work",
        "Each rewrite tries to describe the business more precisely, when the issue is that description is not positioning. Until something in the statement is arguable, a competitor could publish it unchanged and it will keep failing the same way.",
      ),
      s(
        "What you end up holding",
        "A primary claim, a message hierarchy separating claim from proof from pre-empted objection, and a specific line per segment. All of it versioned, so the next change is visible rather than silent.",
      ),
    ],
    related: {
      guides: ["positioning-framework"],
      articles: ["your-positioning-is-a-description", "content-that-only-you-could-write"],
    },
    close: close(
      "A claim a customer could repeat",
      "If the honest finding is that you are not differentiated on the axis you assumed, Mengo says so and moves it. Join our waitlist for early access.",
    ),
  },

  "choose-the-right-channels": {
    intro:
      "Nobody chooses six channels. They accumulate — one at a time, each for a good reason at the time — until the total exceeds what one person can hold in mind. This job is mostly subtraction, and the hard part is not analysis but writing down what you are stopping.",
    explain: [
      s(
        "Why the decision keeps getting deferred",
        "Dropping a channel means accepting you will miss the opportunities on it, and that cost is concrete while the benefit of focus is diffuse. Deferring feels free, which is why the six persist for years.",
      ),
      s(
        "What you end up holding",
        "A ranked primary, secondary and experiment, each scored against your buying cycle, price point and capacity — plus a named, dated list of what is paused. The paused list is what actually returns the time.",
      ),
    ],
    related: {
      guides: ["channel-selection-framework"],
      articles: ["be-everywhere-is-bad-advice", "you-do-not-need-to-be-on-tiktok"],
    },
    close: close(
      "Three channels and a written no",
      "Mengo will tell you when a channel you are attached to should be the one you pause. Join our waitlist for early access.",
    ),
  },

  "produce-a-month-of-content": {
    intro:
      "Production is the step where a good plan usually dies, because the plan says what to publish on Thursday and the writing still has to happen on Wednesday night. Doing a month at once changes the economics: context is loaded once, decisions are made in a batch, and quality stops depending on the state of a single evening.",
    explain: [
      s(
        "Why daily production fails predictably",
        "It competes with client work every single day and loses on most of them. The failure is structural rather than personal, and increasing discipline is asking someone to lose the same argument more determinedly.",
      ),
      s(
        "What you end up holding",
        "A month of finished assets, each in its own format's structure, reviewed in a single session where the theme, segment and funnel stage are shown next to every draft so decisions take seconds rather than minutes.",
      ),
    ],
    related: {
      guides: ["content-brief-template"],
      articles: ["batching-beats-daily", "the-daily-decision-is-the-cost"],
    },
    close: close(
      "A month, approved in one sitting",
      "Context gets loaded once instead of thirty times, which is what makes a month of output cost less than a week of daily attempts. Join our waitlist for early access.",
    ),
  },

  "repurpose-one-idea-into-ten": {
    intro:
      "A good idea usually reaches one audience once and then stops, which is a distribution failure rather than a content one. Repurposing fixes it, but only in the version that returns to the argument. The version that copies the text is visible to anyone who follows you in two places.",
    explain: [
      s(
        "Why the copy-paste version backfires",
        "Formats have different anatomy, and text moved between them reads as text moved between them. The overlap in your audience is small enough that the reach is real, and the people in the overlap are the ones most likely to notice.",
      ),
      s(
        "What you end up holding",
        "Six to ten assets that each argue the same underlying point in a structure native to where it appears — a carousel that opens loops, a script with timed beats, an article with a spine, a thread whose posts survive alone.",
      ),
    ],
    related: {
      guides: ["content-brief-template"],
      articles: ["repurposing-is-not-reposting", "write-for-the-format"],
    },
    close: close(
      "One idea, argued properly in each place",
      "Repurposing is reach, not economy, which is why the second version cannot be cheaper than the first. Join our waitlist for early access.",
    ),
  },

  "write-a-launch-sequence": {
    intro:
      "A launch email arc fails in a specific way: the same pitch arrives four times with increasing enthusiasm. What it needs instead is escalating specificity — each message revealing more of the actual thing, and each one handling a different reason someone has not acted yet.",
    explain: [
      s(
        "Why one announcement is not enough",
        "The people ready on day one would have bought anyway. The value of a sequence is in reaching those who were interested and busy, and they need a reason to reconsider that is not simply a reminder that the offer exists.",
      ),
      s(
        "What you end up holding",
        "A staged arc with a defined role per message — announcement, objection, proof, deadline — where the urgency at the end rests on a real constraint rather than a manufactured one.",
      ),
    ],
    related: {
      guides: ["launch-checklist", "objection-map-template"],
      articles: ["price-objections-are-rarely-about-price"],
    },
    close: close(
      "Four emails that are not the same email",
      "Each message gets one objection and one job, which is what makes the sequence progress. Join our waitlist for early access.",
    ),
  },

  "run-a-product-launch": {
    intro:
      "Most launches are an announcement with assets produced around it during the week it happens. Treating a launch as a campaign moves all four of the decisions that matter to before anything is made, which is when they are cheap to make and possible to disagree with.",
    explain: [
      s(
        "Why launch week production is the trap",
        "Producing while launching means every asset is made at the worst possible time, under pressure, by someone also handling the launch. The result is uneven quality and a set of things that were never checked against each other.",
      ),
      s(
        "What you end up holding",
        "A brief with the offer, audience, window and success condition settled; a dated checklist derived backwards from launch; the full asset set; and decision rules agreed before any money is committed.",
      ),
    ],
    related: {
      guides: ["launch-checklist"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Decisions before assets",
      "A launch with no agreed definition of success can always be described afterwards as one. Join our waitlist for early access.",
    ),
  },

  "plan-a-seasonal-campaign": {
    intro:
      "Every seasonal business knows the peak is coming and most of them prepare during it. The work required before a peak has to happen in the trough, and the trough is the period that feels least like the right time to be doing marketing.",
    explain: [
      s(
        "Why preparation slips into the peak",
        "Planning forwards from today puts production a few weeks out, which lands inside the busy window. Scheduling backwards from the peak exposes what has to exist in the quiet month, when there is capacity to make it.",
      ),
      s(
        "What you end up holding",
        "A campaign built before the window opens: assets produced, sequences written, offer spacing checked against your other promotions, and a defined end so the seasonal offer does not become the permanent one.",
      ),
    ],
    related: {
      guides: ["seasonal-planning-playbook"],
      articles: ["what-quiet-months-are-for"],
    },
    close: close(
      "Built in the trough, run in the peak",
      "The quiet period is capacity, not downtime. Join our waitlist and tell us when your season starts.",
    ),
  },

  "build-a-webinar-funnel": {
    intro:
      "A live session is three separate problems that most plans treat as one: getting registrations, getting attendance, and doing something with what the session produced. The third is where nearly all the value sits and it is the one that usually stops at a thank-you email.",
    explain: [
      s(
        "Why registrations are the wrong finish line",
        "A meaningful share of registrants never attend, and attendees who are never contacted afterwards convert at close to nothing. Optimising promotion while ignoring the two later steps improves the number that matters least.",
      ),
      s(
        "What you end up holding",
        "A promotion arc, a three-message reminder set, a session outline where value lands before the offer, and a follow-up split by attendance — with unanswered live questions answered individually.",
      ),
    ],
    related: {
      guides: ["webinar-playbook"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "The follow-up is the funnel",
      "The highest-converting message in a webinar system is usually a reply to a question nobody had time to answer live. Join our waitlist for early access.",
    ),
  },

  "follow-up-with-every-enquiry": {
    intro:
      "Almost every business believes its follow-up is adequate and almost none can say what happens after the second exchange. The gap is not caused by carelessness; it is caused by follow-up being the one task with no external deadline, competing with delivery work that has one.",
    explain: [
      s(
        "Why enthusiasm is not a system",
        "First replies are fast because the enquiry is in front of you. Message four, three weeks later, requires someone to remember, and remembering is the part that fails during exactly the busy periods when enquiries are highest.",
      ),
      s(
        "What you end up holding",
        "A sequence per enquiry type, each message assigned one objection, paced against your actual buying cycle, with a defined exit so nobody is pursued indefinitely.",
      ),
    ],
    related: {
      guides: ["lead-nurture-blueprint"],
      articles: ["the-follow-up-gap", "speed-is-a-conversion-strategy"],
    },
    close: close(
      "Most leads are lost to silence",
      "Not to competitors, and not to price. Join our waitlist and tell us where your enquiries currently go quiet.",
    ),
  },

  "revive-a-cold-list": {
    intro:
      "The list of old enquiries is uncomfortable in a specific way: too valuable to delete, too awkward to email. That discomfort is worth resolving, because these contacts were already paid for and a proportion of them are still in the market.",
    explain: [
      s(
        "Why the awkwardness is misplaced",
        "The reason a contact went quiet is usually timing rather than rejection. An approach that names the gap directly and arrives with something new is received far better than businesses expect, and the ones who do not want it will simply leave.",
      ),
      s(
        "What you end up holding",
        "A segmented re-engagement flow with a genuine reason to make contact, an explicit exit, and a suppression rule that archives the non-responders — which improves delivery for everyone who stays.",
      ),
    ],
    related: {
      guides: ["reengagement-playbook"],
      articles: ["the-cost-of-restarting"],
    },
    close: close(
      "Work what you already paid for",
      "These contacts already cost you something to acquire, and a proportion of them are still in the market. Join our waitlist for early access.",
    ),
  },

  "qualify-leads-before-a-call": {
    intro:
      "A full calendar looks like success until the conversion rate from those calls is examined. Time spent establishing in the first five minutes that someone was never a candidate is the most expensive waste available to a small business, because it is paid in the founder's hours.",
    explain: [
      s(
        "Why qualification gets skipped",
        "Filtering feels like turning away demand, and demand is scarce. In practice the calls being filtered out were never going to convert, and removing them raises both the conversion rate and the amount of attention the real candidates receive.",
      ),
      s(
        "What you end up holding",
        "An enquiry flow that surfaces price and fit before a booking, a behaviour-weighted score you can argue with, and a handoff note that opens the call from what the contact actually read.",
      ),
    ],
    related: {
      guides: ["lead-nurture-blueprint"],
      articles: ["the-follow-up-gap", "speed-is-a-conversion-strategy"],
    },
    close: close(
      "Fewer calls, better calls",
      "Filtering on fit before the meeting is booked is the cheapest conversion improvement most businesses have available. Join our waitlist for early access.",
    ),
  },

  "decide-what-to-measure": {
    intro:
      "Analytics accumulate faster than judgement does. The problem is rarely a lack of numbers; it is that none of them have a decision attached, so the dashboard gets checked, produces a vague feeling, and changes nothing about the following week.",
    explain: [
      s(
        "Why more measurement makes it worse",
        "Every additional metric dilutes attention and increases the chance of reacting to noise. At small volumes most weekly movement is random, and a large dashboard is mostly a machine for generating false signals.",
      ),
      s(
        "What you end up holding",
        "Three or four numbers — typically one demand, one conversion, one retention — each with the action you would take if it moved, plus an explicit list of what you are deliberately no longer watching.",
      ),
    ],
    related: {
      guides: ["metric-selection-framework"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "Every number with a decision attached",
      "A metric you would not act on is a metric that is costing you attention. Join our waitlist for early access.",
    ),
  },

  "diagnose-a-funnel-drop": {
    intro:
      "When results fall, the instinct is to add volume at the top, because that is the lever everyone knows how to pull. If the loss is happening further down, more traffic pushes more people into the same gap and makes the problem more expensive rather than smaller.",
    explain: [
      s(
        "Why the leak is rarely where it feels",
        "Traffic is the most visible number, so a decline reads as a traffic problem. More often a middle step is losing people who already arrived, and that step has been performing badly for long enough to look normal.",
      ),
      s(
        "What you end up holding",
        "A named step, benchmarked against what that step type should achieve, a specific fix matched to the kind of failure it is, and a re-measurement point so you find out whether the fix worked.",
      ),
    ],
    related: {
      guides: ["marketing-audit-checklist", "metric-selection-framework"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "Name the step before spending",
      "More volume into a leaking funnel is the most common and most expensive response to a bad quarter. Join our waitlist for early access.",
    ),
  },

  "run-a-monthly-marketing-review": {
    intro:
      "The monthly marketing meeting has a reliable shape: two days assembling a picture, an hour discussing it, and no recorded decision. The fix is not better charts. It is a fixed agenda short enough to survive a bad month and specific enough to end in something being decided.",
    explain: [
      s(
        "Why the meeting produces nothing",
        "Reviewing everything means prioritising nothing, and a review with no pre-agreed questions becomes a discussion of whatever moved most. Movement is not the same as significance, particularly at small volumes.",
      ),
      s(
        "What you end up holding",
        "A fixed agenda, a metric set small enough to read in minutes, and a written record of what was decided — which is also what makes the next review a comparison rather than a fresh interpretation.",
      ),
    ],
    related: {
      guides: ["monthly-review-template"],
      articles: ["stop-measuring-everything", "the-cost-of-restarting"],
    },
    close: close(
      "Fifteen minutes, one decision",
      "A review that requires preparation does not happen in the month you most need it. Join our waitlist for early access.",
    ),
  },

  "build-a-lead-magnet": {
    intro:
      "A signup box offering updates converts at roughly nothing, because updates are not worth an email address. The exchange only works if what arrives solves something specific — and if what follows it earns the right to keep sending.",
    explain: [
      s(
        "Why bigger is not better",
        "Comprehensive guides take weeks to produce and are rarely finished by the people who download them. A narrow asset that completes one job this week produces a better first impression and a much higher completion rate.",
      ),
      s(
        "What you end up holding",
        "A usable asset scoped to one problem, the landing page written against the single decision, and the welcome sequence generated at the same time so nothing gets downloaded into silence.",
      ),
    ],
    related: {
      guides: ["welcome-sequence-template", "offer-ladder-framework"],
      articles: ["the-lead-magnet-nobody-wanted"],
    },
    close: close(
      "Worth the address, and followed up",
      "A weak magnet trains the recipient to ignore your next email, which makes it worse than none. Join our waitlist for early access.",
    ),
  },

  "write-a-welcome-sequence": {
    intro:
      "The moment after someone subscribes is the only moment you are guaranteed their attention. A single confirmation message spends it, and by the time your first real email arrives several weeks later the recipient no longer remembers agreeing to anything.",
    explain: [
      s(
        "Why the gap is fatal",
        "Attention decays quickly and recognition decays with it. An email from an unfamiliar sender is deleted regardless of quality, which is how a list grows while reach falls.",
      ),
      s(
        "What you end up holding",
        "Four to six messages that deliver what was promised immediately, establish what will arrive and how often, and position the first commercial mention against a problem the earlier emails established.",
      ),
    ],
    related: {
      guides: ["welcome-sequence-template"],
      articles: ["onboarding-is-marketing"],
    },
    close: close(
      "The sequence every subscriber sees",
      "It runs unchanged for years, which makes it the one worth over-investing in. Join our waitlist for early access.",
    ),
  },

  "fill-an-empty-calendar": {
    intro:
      "Starting is a different problem from sustaining. An empty calendar carries a specific paralysis: every possible first post seems arbitrary, because there is no argument yet for it to be part of. The fix is to decide the argument before the dates.",
    explain: [
      s(
        "Why the blank grid stays blank",
        "Filling it requires answering what to publish, for whom and why, thirty times in one sitting. That is a strategy exercise disguised as an admin task, which is why it is abandoned partway through.",
      ),
      s(
        "What you end up holding",
        "A month of slots that each carry a theme, an angle and a format, ordered so foundational pieces land before the ones that depend on them. Producing against it is execution rather than invention.",
      ),
    ],
    related: {
      guides: ["90-day-content-plan"],
      articles: ["the-daily-decision-is-the-cost", "the-quiet-period-you-are-waiting-for"],
    },
    close: close(
      "From blank to a month, in one session",
      "The hard part of an empty calendar is the deciding, not the typing. Join our waitlist for early access.",
    ),
  },

  "start-posting-on-linkedin": {
    intro:
      "Almost every founder in a considered-purchase business knows LinkedIn matters and has posted four times in two years. The barrier is not the writing. It is that each post requires deciding what to say, from nothing, on a day when something else is urgent.",
    explain: [
      s(
        "Why starting repeatedly does not work",
        "Two good weeks followed by a busy month is the standard pattern, and each restart costs more than the last because the audience has to be re-earned. Consistency has to be designed rather than intended.",
      ),
      s(
        "What you end up holding",
        "A stated position, a cadence sized to the time you actually have, and a set of posts already written — so the first busy month reduces output rather than ending it.",
      ),
    ],
    related: {
      guides: ["linkedin-founder-playbook"],
      articles: ["marketing-is-a-systems-problem", "founder-brand-without-oversharing"],
    },
    close: close(
      "A cadence you can hold for a year",
      "Posting weekly for twelve months beats posting daily for three. Join our waitlist for early access.",
    ),
  },

  "launch-a-newsletter": {
    intro:
      "An audience that exists only on platforms is an audience you rent. A newsletter is the one channel where reach is not adjusted by someone else's product decisions, which is why it is worth starting before it feels necessary.",
    explain: [
      s(
        "Why most newsletters stall by issue five",
        "They start without a promise. Without a defined subject and a fixed rhythm, each issue becomes a fresh decision about what to write, and the format collapses into a roundup that trains people to skim.",
      ),
      s(
        "What you end up holding",
        "A named newsletter with a stated promise, a cadence you can hold, and the first issues written — each one arguing a single idea drawn from the month's theme rather than reporting the week.",
      ),
    ],
    related: {
      guides: ["email-newsletter-playbook"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "The channel you own",
      "A newsletter with a stated promise and a rhythm you can hold is the one channel nobody can adjust on you. Join our waitlist for early access.",
    ),
  },

  "write-landing-page-copy": {
    intro:
      "A page that describes the offer and does not convert is usually not a copy quality problem. It is a page asking for several things at once, with sections chosen because a template offered them rather than because a reader needed them.",
    explain: [
      s(
        "Why describing the offer is not enough",
        "A reader arrives already knowing roughly what you do. What they are looking for is a reason not to proceed, and a page organised around features rather than hesitations leaves every one of those reasons standing.",
      ),
      s(
        "What you end up holding",
        "A page built around one decision, with each section mapped to a named objection in the order those objections surface, and the same call to action repeated in identical wording at each decision point.",
      ),
    ],
    related: {
      guides: ["landing-page-checklist", "objection-map-template"],
      articles: ["your-landing-page-asks-for-too-much", "forms-that-lose-you-money"],
    },
    close: close(
      "Defined by what it leaves out",
      "Pages that ask for three things reliably get none of them. Join our waitlist for early access.",
    ),
  },

  "create-ad-concepts": {
    intro:
      "Underperforming ads are usually tested badly rather than written badly. Five headlines that phrase the same claim differently produce five similar results, and the winner teaches you nothing you can carry to the next campaign.",
    explain: [
      s(
        "Why variant testing stalls",
        "Small differences need large volumes to resolve, and most small businesses do not have them. Testing the argument instead produces effects large enough to detect at modest spend, and the finding transfers to your landing pages and emails.",
      ),
      s(
        "What you end up holding",
        "A set of four to six concepts that each enter through a different problem for a different segment, sized against your budget, with a note on which to run together so the result can be attributed.",
      ),
    ],
    related: {
      guides: ["launch-checklist"],
      articles: ["testing-adjectives-teaches-nothing"],
    },
    close: close(
      "Test arguments, not adjectives",
      "A test that cannot resolve is a budget line with no information attached. Join our waitlist for early access.",
    ),
  },

  "build-a-referral-ask": {
    intro:
      "Businesses that run mostly on referrals often have no process for producing them, which means the most important channel is the least managed. Making it deliberate is not about incentives; it is about choosing a moment and writing down what to say.",
    explain: [
      s(
        "Why hoping does not scale",
        "Referrals arrive when a customer happens to be asked by someone at the right time. Without a moment and a script, the rate is set entirely by chance and cannot be increased even when the work is going well.",
      ),
      s(
        "What you end up holding",
        "A defined moment in the customer relationship, a written ask that names the kind of person you want to be introduced to, and a follow-up that makes the introduction easy to actually send.",
      ),
    ],
    related: {
      guides: ["lead-nurture-blueprint"],
      articles: ["referrals-are-not-a-strategy"],
    },
    close: close(
      "A process, not a hope",
      "Naming who you want to be introduced to is what turns a vague ask into a specific one. Join our waitlist for early access.",
    ),
  },

  "onboard-a-new-marketing-hire": {
    intro:
      "Hiring someone to run marketing transfers the work but not the context, and the context is in your head. The first months are usually spent reconstructing decisions you already made, which is expensive and produces a version that quietly differs from the original.",
    explain: [
      s(
        "Why osmosis is slow and lossy",
        "Positioning, segment definitions, channel reasoning and voice all exist as accumulated judgement. Transferring that by working alongside someone takes months and loses the reasoning, which is the part that matters when a new situation arrives.",
      ),
      s(
        "What you end up holding",
        "A written strategy layer, a calendar with themes assigned, brief templates and a voice profile with a banned list — enough for a new hire to produce something recognisably yours in week one.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook", "voice-profile-worksheet"],
      articles: ["hire-or-tool", "the-brief-is-the-bottleneck"],
    },
    close: close(
      "Hand over a system, not a habit",
      "The documentation that makes a hire productive is the same documentation that makes the work delegable at all. Join our waitlist for early access.",
    ),
  },

  "brief-a-freelance-writer": {
    intro:
      "Rewriting most of what a freelancer produces is almost always a briefing failure rather than a talent one. A one-line topic asks the writer to guess at the claim, the audience and the evidence, and the odds of guessing all three correctly are low.",
    explain: [
      s(
        "Why the second draft is not the fix",
        "Edit rounds correct the output without correcting the input, so the next commission has the same problem. The cost of a vague brief is paid every time rather than once.",
      ),
      s(
        "What you end up holding",
        "A brief carrying the claim, the audience segment, the evidence each section needs, the format anatomy, the call to action and the success condition — specific enough that the first draft is usable.",
      ),
    ],
    related: {
      guides: ["content-brief-template"],
      articles: ["the-brief-is-the-bottleneck"],
    },
    close: close(
      "A brief good enough to delegate",
      "The same brief that makes a freelancer effective is what makes generation useful. Join our waitlist for early access.",
    ),
  },

  "handle-price-objections": {
    intro:
      "When enquiries stall at price and the response is a discount, the price becomes the new price and the buyers it attracts are more price-sensitive than the last ones. The alternative is to establish the cost of the current situation before naming the cost of changing it.",
    explain: [
      s(
        "Why price is usually a proxy",
        "Buyers say price when they mean uncertainty about outcome, timing, or their ability to get the decision approved internally. Discounting answers the stated objection and leaves the actual one untouched, which is why discounted deals still stall.",
      ),
      s(
        "What you end up holding",
        "Content and sequence messages that quantify the status quo, a mapped set of the objections behind the price question, and answers written for each rather than one concession applied to all.",
      ),
    ],
    related: {
      guides: ["objection-map-template", "offer-ladder-framework"],
      articles: ["price-objections-are-rarely-about-price"],
    },
    close: close(
      "Structure instead of discount",
      "A discount closes the deal and resets your pricing. Join our waitlist for early access.",
    ),
  },

  "write-case-studies-without-data": {
    intro:
      "Confidential work and an empty case studies page is a common position, and the usual response is to publish nothing. There is a version that works: showing the situation and the method, which demonstrates judgement without disclosing anything identifiable.",
    explain: [
      s(
        "Why method persuades without numbers",
        "A buyer reading a case study is trying to simulate working with you. The decisions you made and the constraints you worked under do that better than a percentage they cannot verify and have learned to discount.",
      ),
      s(
        "What you end up holding",
        "Situation-and-method pieces with the client anonymised, results stated only to the precision you can evidence, and guardrails preventing any figure or detail you did not supply.",
      ),
    ],
    related: {
      guides: ["ai-content-guardrails-checklist"],
      articles: ["marketing-before-product-market-fit", "the-hallucination-that-matters"],
    },
    close: close(
      "Competence without disclosure",
      "The method is publishable when the outcome is not. Join our waitlist for early access.",
    ),
  },

  "plan-a-rebrand-announcement": {
    intro:
      "A change of name, look or position risks the recognition you have already built. Announced as a single post it reaches a fraction of the people who need to know, and the rest encounter an unfamiliar business at an inconvenient moment.",
    explain: [
      s(
        "Why one announcement is not enough",
        "Different audiences need different things: customers need continuity, prospects need the reason, and search needs the old and new to be connected. One message cannot do all three, and the ones who miss it simply stop recognising you.",
      ),
      s(
        "What you end up holding",
        "A sequenced announcement that explains the reasoning, carries the existing recognition forward, and reaches customers, prospects and quiet contacts through different messages at different moments.",
      ),
    ],
    related: {
      guides: ["positioning-framework", "launch-checklist"],
      articles: ["your-positioning-is-a-description"],
    },
    close: close(
      "Change the name, keep the recognition",
      "The audience that misses the announcement is the one that quietly stops responding. Join our waitlist for early access.",
    ),
  },

  "build-a-local-seo-page-set": {
    intro:
      "One page listing ten towns competes for none of them. A page per area can work, but only if each contains information a directory could not generate — which means the constraint is not writing time, it is local knowledge.",
    explain: [
      s(
        "Why templated location pages fail twice",
        "They rank poorly because they contain nothing specific, and they convert poorly because a local reader recognises immediately that the page is not about their area. Publishing sixty of them adds a maintenance liability to both problems.",
      ),
      s(
        "What you end up holding",
        "A page per area you genuinely serve, carrying named local detail, work done nearby where you can reference it, and internal links between them — with thin pages flagged rather than published.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "Ten real pages beat sixty thin ones",
      "Mengo requires the local substance and will tell you which pages do not have enough. Join our waitlist for early access.",
    ),
  },

  "turn-reviews-into-content": {
    intro:
      "Reviews are the only place your customers have written down, in their own words, what mattered to them. Leaving that language on a profile page wastes the most reliable source of copy a business has.",
    explain: [
      s(
        "Why customer language outperforms yours",
        "Businesses describe their work in the vocabulary of the trade. Customers describe it in the vocabulary of the problem, which is also the vocabulary they use when searching and when recommending you to someone else.",
      ),
      s(
        "What you end up holding",
        "Recurring phrases extracted into headline and hook language, the objections reviews reveal mapped into your sequences, and a defined moment for asking so the supply continues.",
      ),
    ],
    related: {
      guides: ["objection-map-template", "voice-profile-worksheet"],
      articles: ["content-that-only-you-could-write"],
    },
    close: close(
      "They already wrote your copy",
      "The words customers use are the words the next customer will search with. Join our waitlist for early access.",
    ),
  },

  "recover-abandoned-enquiries": {
    intro:
      "Partial enquiries are the highest-intent contacts a business ignores. Someone who started a form and stopped, or asked for a quote and went quiet, was interested enough to begin — and the window in which that interest is still live is short.",
    explain: [
      s(
        "Why speed matters more than polish here",
        "Intent decays quickly. A short, plain message within hours recovers substantially more than a considered one sent next week, and the effort required is smaller.",
      ),
      s(
        "What you end up holding",
        "A fast, short sequence triggered by the abandonment itself, written to re-open rather than to re-sell, with a defined stop so an unanswered form does not become a campaign.",
      ),
    ],
    related: {
      guides: ["lead-nurture-blueprint"],
      articles: ["speed-is-a-conversion-strategy", "forms-that-lose-you-money"],
    },
    close: close(
      "Reach them while the intent is live",
      "A quote request that goes unanswered for a week is usually gone. Join our waitlist for early access.",
    ),
  },

  "announce-a-price-change": {
    intro:
      "A price increase announced without reasoning and with little notice reads as opportunism, and the churn it triggers is often larger than the increase it produces. The same change communicated properly is usually accepted with almost no loss.",
    explain: [
      s(
        "Why the notice period does the work",
        "People object to being surprised more than to paying more. Adequate notice, with the reason stated plainly, converts the announcement from something done to them into something they can plan around.",
      ),
      s(
        "What you end up holding",
        "A sequenced announcement with the reasoning, a stated notice period, an option for existing customers where one is appropriate, and prepared answers for the replies the change will generate.",
      ),
    ],
    related: {
      guides: ["offer-ladder-framework", "objection-map-template"],
      articles: ["price-objections-are-rarely-about-price"],
    },
    close: close(
      "Increase the price, keep the customers",
      "Most churn after a price change is a response to how it was communicated. Join our waitlist for early access.",
    ),
  },

  "prepare-for-a-trade-show": {
    intro:
      "A stand is one of the largest single marketing costs a small business incurs, and the plan is frequently to turn up and collect cards. The return is decided by the two weeks either side of the event rather than by the event itself.",
    explain: [
      s(
        "Why the box of cards produces nothing",
        "A generic email two weeks later reaches people who no longer remember the conversation. By then the specific detail that would have made the message worth reading has been forgotten by both parties.",
      ),
      s(
        "What you end up holding",
        "Pre-show outreach to people you want to meet, a qualifying question to use on the stand, and a follow-up sequence written before you travel so the notes go out while the conversation is still recent.",
      ),
    ],
    related: {
      guides: ["launch-checklist", "lead-nurture-blueprint"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "The follow-up is written before you travel",
      "Notes sent the same evening convert differently from notes sent in a fortnight. Join our waitlist for early access.",
    ),
  },

  "build-an-onboarding-email-flow": {
    intro:
      "The weeks after purchase decide retention, and in most businesses they are silent. A customer who does not reach a first result quickly rarely announces that they are drifting; they simply do not renew, months later, for reasons recorded as price.",
    explain: [
      s(
        "Why churn is decided earlier than it is recorded",
        "The decision to disengage usually happens in the first fortnight, when the customer did not get started and quietly stopped trying. Surveying people at cancellation asks about a decision that was made long before.",
      ),
      s(
        "What you end up holding",
        "A sequence built around a defined first-value moment, pre-empting the specific reasons people stall, with the absence of early activity treated as the signal it is.",
      ),
    ],
    related: {
      guides: ["welcome-sequence-template"],
      articles: ["onboarding-is-marketing"],
    },
    close: close(
      "The first month is marketing",
      "Getting a customer to their first result is cheaper than acquiring their replacement. Join our waitlist for early access.",
    ),
  },

  "create-a-sales-one-pager": {
    intro:
      "Deals stall in the gap where your contact has to explain your offer to someone who has never spoken to you. Whatever you sent them was written for a conversation you were in, and it does not survive being forwarded without you.",
    explain: [
      s(
        "Why your proposal does not travel",
        "It assumes context from the call: what was discussed, what was ruled out, what the specific situation is. The approver reads it cold, cannot reconstruct that context, and defers rather than declining.",
      ),
      s(
        "What you end up holding",
        "A one-page document that states the problem in the approver's terms, the cost of leaving it, what happens if they proceed and what it costs — written to be read by someone with no prior conversation.",
      ),
    ],
    related: {
      guides: ["objection-map-template"],
      articles: ["the-internal-champion-problem"],
    },
    close: close(
      "Arm the person arguing for you",
      "Your contact is selling internally with material that assumes you are in the room. Join our waitlist for early access.",
    ),
  },

  "win-back-churned-customers": {
    intro:
      "Former customers are treated as permanently gone far more often than they are. A meaningful share left for reasons that no longer apply — a missing capability, a budget cycle, a bad month — and none of them have been contacted since.",
    explain: [
      s(
        "Why the generic win-back email fails",
        "An offer sent to everyone who left ignores why each of them went. A customer who left over a specific gap needs to hear that the gap closed; one who left over budget needs a different conversation entirely.",
      ),
      s(
        "What you end up holding",
        "A segmented sequence built around what has genuinely changed since each group left, with an honest acknowledgement of the departure rather than a message pretending it did not happen.",
      ),
    ],
    related: {
      guides: ["reengagement-playbook"],
      articles: ["the-cost-of-restarting", "onboarding-is-marketing"],
    },
    close: close(
      "Some of them left for reasons that are gone",
      "A win-back segmented by reason converts differently from one sent to a list. Join our waitlist for early access.",
    ),
  },

  "launch-in-a-new-city": {
    intro:
      "Expanding to a second location usually means repeating what worked, thinly, across a wider area. Density is what made the first location work — local recognition, local proof, local referral — and thin coverage produces none of it.",
    explain: [
      s(
        "Why thin coverage stalls",
        "A location page and some paid spend put you in front of people who have never heard of you, in a market where the incumbents have local proof. Without density, each enquiry costs more and converts worse than the equivalent at home.",
      ),
      s(
        "What you end up holding",
        "A concentrated launch in one area rather than a region, with genuine local content, whatever local proof you can assemble, and a bounded success condition before the second area is opened.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "channel-selection-framework"],
      articles: ["marketing-before-product-market-fit"],
    },
    close: close(
      "Density before coverage",
      "One area done properly is what makes the second one cheaper. Join our waitlist for early access.",
    ),
  },

  "build-a-community-content-plan": {
    intro:
      "Communities where your buyers gather are valuable and unforgiving. The businesses that do well in them are the ones that contribute for months before asking for anything, and the ones that do badly are usually not malicious — they simply arrived with a link.",
    explain: [
      s(
        "Why promotional posting costs more than it returns",
        "A group that recognises you as a promoter discounts everything you subsequently say, including the useful parts. The reputational cost is paid once and takes considerably longer to reverse than it did to incur.",
      ),
      s(
        "What you end up holding",
        "A participation rhythm with a defined contribution-to-promotion boundary, the specific experience worth sharing in each community, and a contact path that respects each group's rules.",
      ),
    ],
    related: {
      guides: ["channel-selection-framework"],
      articles: ["referrals-are-not-a-strategy", "be-everywhere-is-bad-advice"],
    },
    close: close(
      "Contribute first, and mean it",
      "The return from a community is slow, indirect and durable. Join our waitlist for early access.",
    ),
  },

  "document-your-brand-voice": {
    intro:
      "When voice lives in one person's head, that person becomes a permanent editing bottleneck. Writing it down is not a branding exercise; it is what makes the work delegable to a hire, a freelancer or software without the output drifting.",
    explain: [
      s(
        "Why most style guides do nothing",
        "They describe voice in positive abstractions — friendly, professional, human — which nobody can apply consistently. A specific list of words and constructions you will not use is immediately actionable and catches most of the drift.",
      ),
      s(
        "What you end up holding",
        "A profile with vocabulary, sentence rhythm, formality, humour tolerance and a banned list, plus tone settings per asset type — enforced at generation rather than corrected in review.",
      ),
    ],
    related: {
      guides: ["voice-profile-worksheet"],
      articles: ["ai-content-sounds-the-same"],
    },
    close: close(
      "Written down once, applied every time",
      "Voice that only exists in your judgement cannot be handed to anyone. Join our waitlist for early access.",
    ),
  },

  "audit-your-existing-marketing": {
    intro:
      "The sense that everything needs improving is what makes starting feel arbitrary. An audit replaces it with an ordered list, and the most common finding is that the missing piece is not more content but the follow-up behind it.",
    explain: [
      s(
        "Why starting anywhere is expensive",
        "Effort spent on a layer that was not the constraint produces no visible change, which is discouraging enough that the next attempt is delayed. Finding the constraint first is what makes the first improvement noticeable.",
      ),
      s(
        "What you end up holding",
        "A structured view of what exists across strategy, content, campaigns, follow-up and measurement; what is missing; and an order to fix it in, with the constraint named rather than everything listed.",
      ),
    ],
    related: {
      guides: ["marketing-audit-checklist", "marketing-system-playbook"],
      articles: ["the-follow-up-gap", "stop-measuring-everything"],
    },
    close: close(
      "Find the constraint first",
      "Most businesses have a follow-up problem and describe it as a lead problem. Join our waitlist and tell us what feels broken.",
    ),
  },
};
