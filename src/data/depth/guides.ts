import type { DepthMap } from "@/data/depth";
import { close } from "@/data/depth";

/**
 * Resource depth.
 *
 * The guides are already long-form and already carry their argument in the
 * sections. What they lacked was an opening that tells a reader whether this is
 * the document they need, and a closing summary they can act on without
 * re-reading. Those are the two things added here.
 */
export const guideDepth: DepthMap = {
  "marketing-system-playbook": {
    intro:
      "This is the longest document on the site and the one the others sit underneath. It walks through building a marketing function in four layers — strategy, calendar, production, review — in the order that makes each one cheaper than it would have been on its own. Read it if your marketing works in bursts and you cannot say why the bursts stop.",
    takeaways: [
      "Marketing stops because it is the only business function with no external deadline, not because of a discipline failure.",
      "Write the strategy layer down once. Its value is not insight; it is that four decisions stop being re-made every week.",
      "Theme the year before filling the dates, and detail only the current quarter — planning further ahead is guesswork dressed as diligence.",
      "Produce in batches and review in fifteen minutes against a fixed agenda, because a rhythm that fails in a busy week is not a rhythm.",
    ],
    close: close(
      "Four layers, in order",
      "Everything here is doable by hand and most of it stops when the business gets busy. Join our waitlist if you would rather review the work than produce it.",
    ),
  },

  "90-day-content-plan": {
    intro:
      "A quarter is long enough to build an argument and short enough to predict. This playbook covers how to make ninety days of content advance a single position rather than accumulate as ninety unrelated observations — including how to plan for the weeks you already know will be difficult.",
    takeaways: [
      "Pick the one thing you want your market to believe by the end of the quarter that they do not believe now.",
      "Give each month a step in that argument, and each slot within it a distinct angle — objection, proof, contrast, story, mechanism.",
      "Plan the format mix against the hours you have in a normal week rather than an ideal one.",
      "Reserve about one slot a week for something reactive, or the plan becomes irrelevant by week six.",
    ],
    close: close(
      "Ninety days, one argument",
      "Mengo assigns each month an argument and each slot an angle, from a brief about your business. Join our waitlist for early access.",
    ),
  },

  "positioning-framework": {
    intro:
      "Four questions and a test. This framework exists because most positioning exercises produce an accurate description and stop, and the difference between a description and a position is something a competitor would be unwilling to say.",
    takeaways: [
      "Define the buyer by the situation they are in rather than by demographics or job title.",
      "Name what they are actually choosing between, including doing nothing, which is usually the real alternative.",
      "Find the claim a competitor would dispute — if nobody would argue with it, it is a category description.",
      "Apply the repeatability test: could a customer say this to a colleague from memory?",
    ],
    close: close(
      "A claim, not a description",
      "The Positioning Generator drafts this from your brief and holds it as a constraint on everything downstream. Join our waitlist for early access.",
    ),
  },

  "channel-selection-framework": {
    intro:
      "This framework produces a decision you can defend, which matters more than it sounds: the reason most businesses run six channels is that nobody ever wrote down why they were not running three. The scoring here is deliberately weighted towards capacity, because that is the constraint that actually decides the outcome.",
    takeaways: [
      "Score against your buying cycle first — a channel suited to a same-day decision rarely suits a six-month one.",
      "Weight capacity heavily. A channel you cannot sustain scores badly regardless of its theoretical fit.",
      "Commit to one primary, one secondary and one experiment, and write down what is paused.",
      "Set the review threshold before you start, so a decision to stop is a plan rather than a retreat.",
    ],
    close: close(
      "Three channels and a written no",
      "Channel Ranking scores every channel against your actual constraints and names the ones to pause. Join our waitlist for early access.",
    ),
  },

  "offer-ladder-framework": {
    intro:
      "A business with a single price point asks strangers to make a large decision immediately. This framework designs the steps between first contact and the core offer, and — more importantly — defines what has to be true before someone climbs one.",
    takeaways: [
      "A single offer forces every prospect into the same commitment regardless of how much they trust you yet.",
      "The free entry point should solve one narrow problem completely, not one large problem partially.",
      "Each rung needs a qualifying signal, or the ladder is just a price list.",
      "Three well-defined rungs beat seven blurred ones; each additional step has to be explained, delivered and maintained.",
    ],
    close: close(
      "A path, not a price list",
      "Offer Architecture designs the rungs and the signals that move someone up one. Join our waitlist for early access.",
    ),
  },

  "objection-map-template": {
    intro:
      "One page that turns the reasons people do not buy into the structure of your marketing. The map is useful because objections are finite: almost every business faces the same four or five, over and over, and writing them down converts follow-up from improvisation into a sequence.",
    takeaways: [
      "Start with what you actually hear, in the words the buyer used rather than in your paraphrase.",
      "Add the objections nobody states — internal approval, timing, the fear of being sold to.",
      "Order them by when they surface, which is the order your sequence should answer them in.",
      "Give each one an answer and an asset, so the map produces work rather than sitting in a document.",
    ],
    close: close(
      "One objection, one message",
      "Objection Mapping assigns each nurture message a single hesitation to dissolve. Join our waitlist for early access.",
    ),
  },

  "launch-checklist": {
    intro:
      "Ordered by when each item has to be decided rather than by category, because the most common launch failure is an asset nobody realised was needed until the week it was due. The unglamorous items — tracking, redirects, reply capacity — are included deliberately.",
    takeaways: [
      "Settle the offer, the audience, the window and the success condition four weeks out, while they are still cheap to argue about.",
      "The destination page has to exist before the promotion that points at it is written.",
      "Work backwards from launch day; an item due in launch week is an item that will not be done.",
      "Agree the exit condition before you start, because stop rules are almost never written afterwards.",
    ],
    close: close(
      "Nothing launches with a missing page",
      "Campaign Lab generates the checklist from the brief, with owners and dates derived backwards from launch. Join our waitlist for early access.",
    ),
  },

  "seasonal-planning-playbook": {
    intro:
      "Every business has a shape to its year and most plan as though it were flat. This playbook works backwards from the peak, which is the only sequence that puts production in a period where there is capacity to do it.",
    takeaways: [
      "Find the real season from your own enquiry data, not from the category's assumed one.",
      "Work backwards from the enquiry window rather than forwards from today.",
      "Assign production to the trough — it is capacity, not downtime.",
      "Space offers against the buying cycle so a season does not become four discounts to the same audience.",
    ],
    close: close(
      "Enter the peak already built",
      "Seasonality Planning shapes the calendar around your demand pattern and places production in the quiet months. Join our waitlist for early access.",
    ),
  },

  "lead-nurture-blueprint": {
    intro:
      "The longest-return work available to most small businesses, and the least done. This blueprint covers designing follow-up that converts leads you already have — including the ones that went quiet months ago and feel too awkward to contact.",
    takeaways: [
      "Segment by what people did, not by where they came from; behaviour predicts buying and source does not.",
      "Assign each message exactly one objection, or the sequence restates the pitch four times.",
      "Derive cadence from your buying cycle — a four-day sequence against a two-month decision stops too early.",
      "Define the end. A sequence with no exit pursues people indefinitely and damages the list it runs on.",
    ],
    close: close(
      "Most leads are lost to silence",
      "Lead Nurturing designs the segments, writes the sequences and paces them against your cycle. Join our waitlist for early access.",
    ),
  },

  "welcome-sequence-template": {
    intro:
      "Five emails over roughly eleven days, with a defined job for each. Every subscriber passes through this sequence and it runs unchanged for years, which makes it the one worth over-investing in — and the one most often replaced by a single confirmation message.",
    takeaways: [
      "Deliver what was promised within minutes, with no other ask attached.",
      "Establish recurring value before making any commercial mention, or the transition reads as a bait and switch.",
      "Position the first offer against a problem the earlier emails established rather than introducing it cold.",
      "End with a standing invitation that stays the same in every subsequent email.",
    ],
    close: close(
      "The sequence every subscriber sees",
      "Mengo generates a welcome sequence alongside every lead magnet, written for what was actually promised. Join our waitlist for early access.",
    ),
  },

  "reengagement-playbook": {
    intro:
      "How to work a quiet list without damaging the deliverability you depend on. The uncomfortable part of this playbook is that it treats a clean exit as a successful outcome, which is what makes the recovery half work at all.",
    takeaways: [
      "Segment before sending — a contact from last month and one from three years ago need different messages.",
      "Lead with something genuinely new rather than asking whether they still want to hear from you.",
      "Name the silence directly. Pretending no gap occurred reads as automated.",
      "Offer the exit early and archive properly, because the non-responders are suppressing reach to everyone else.",
    ],
    close: close(
      "Recover some, release the rest",
      "Re-engagement Flows end in an explicit archive decision and are scheduled into the quiet periods. Join our waitlist for early access.",
    ),
  },

  "metric-selection-framework": {
    intro:
      "Choosing what not to measure is most of this framework. Every additional metric dilutes attention and increases the chance of reacting to noise, which at the volumes most small businesses run is most of what weekly movement actually is.",
    takeaways: [
      "Start from the business model — subscription, transactional and services businesses need different numbers.",
      "Pick roughly one per stage: demand, conversion, retention.",
      "Attach a decision to each. A number you would not act on is costing you attention.",
      "Name the stop list explicitly, and review the set quarterly rather than adding to it monthly.",
    ],
    close: close(
      "Three numbers, each with a decision",
      "Metric Selection chooses the set from your business model and names what to stop watching. Join our waitlist for early access.",
    ),
  },

  "monthly-review-template": {
    intro:
      "A fixed fifteen-minute agenda. The length is the point: a review that requires preparation does not happen in the month you most need it, and a review that ends without a written decision was a conversation.",
    takeaways: [
      "Put last month's numbers beside this month's, in the same shape, so the comparison is immediate.",
      "Check what you said you would do and whether it happened, before discussing anything new.",
      "Read the channel mix rather than individual posts — patterns matter, single results are mostly noise.",
      "Leave with one change and write it down, or the same discussion happens again in four weeks.",
    ],
    close: close(
      "Fifteen minutes, one decision",
      "Review Cadence separates weekly execution from monthly mix and quarterly strategy, each with a fixed agenda. Join our waitlist for early access.",
    ),
  },

  "content-brief-template": {
    intro:
      "What a brief has to contain for the first draft to be usable, whether a person or a model writes it. This is the document that turns commissioning from a topic into a specification, and it is the single highest-return template here.",
    takeaways: [
      "State the claim, not the topic. A topic asks the writer to guess what you wanted argued.",
      "Name the reader and the state they are in, because a comparison-stage reader needs something different from a first-encounter one.",
      "List the evidence each section needs, and mark the pieces only you can supply.",
      "Give the format's anatomy and a success condition, so the draft can be judged against something.",
    ],
    close: close(
      "The bottleneck, removed",
      "Content Briefs expand every calendar slot into this structure automatically. Join our waitlist for early access.",
    ),
  },

  "voice-profile-worksheet": {
    intro:
      "Voice that lives in one person's head cannot be delegated — to a hire, a freelancer or software. This worksheet extracts it from writing you already have, which is considerably more reliable than trying to describe it from scratch.",
    takeaways: [
      "Start from five pieces that sounded right, rather than from adjectives about how you want to sound.",
      "Extract patterns — sentence length, vocabulary, what you never do — instead of qualities.",
      "The banned list does more work than any positive description, because it is immediately enforceable.",
      "Set the personal boundary: what you are and are not willing to share publicly.",
    ],
    close: close(
      "Written down once, applied every time",
      "The Voice Profile stores this and constrains every generated asset against it. Join our waitlist for early access.",
    ),
  },

  "linkedin-founder-playbook": {
    intro:
      "A practice you can hold for a year rather than a strategy for a good month. This playbook assumes you are also delivering the work, which changes what a realistic cadence looks like and what the posting time has to accommodate.",
    takeaways: [
      "Post from your personal profile; company pages consistently reach less on this platform.",
      "Write the first two lines last, once you know what the post actually argues.",
      "Hold one argument for a month and vary the angle, so the content reinforces rather than repeats.",
      "Be available in the first hour after posting — early comments matter more than any other signal.",
    ],
    close: close(
      "A cadence you can hold",
      "Mengo sizes the LinkedIn plan against the time you actually have and writes ahead. Join our waitlist for early access.",
    ),
  },

  "instagram-reels-playbook": {
    intro:
      "Reels are a distribution channel rather than a content type, and treating them as one is what separates accounts that grow from accounts that post consistently and do not. This playbook covers what each Instagram format is actually for.",
    takeaways: [
      "Reels reach beyond your followers; the grid explains you to people who arrive; stories talk to people who already follow.",
      "The first second decides retention and retention decides distribution.",
      "Optimise for saves and shares rather than likes — they are the stronger distribution signal.",
      "Judge performance across thirty videos, not three. Individual results at this volume are noise.",
    ],
    close: close(
      "Three formats, three jobs",
      "Mengo plans reels, grid and stories separately, against the production capacity you declare. Join our waitlist for early access.",
    ),
  },

  "email-newsletter-playbook": {
    intro:
      "The only channel you own outright. This playbook is mostly about sustainability, because newsletters rarely fail on quality — they fail at issue five, when the rhythm turns out to have been chosen optimistically.",
    takeaways: [
      "Define the promise before the name. A newsletter without a stated subject becomes a roundup within a quarter.",
      "Choose a rhythm you could hold during your busiest month, not your calmest.",
      "One idea per issue. Roundups train readers to skim, and skimming becomes not opening.",
      "Measure replies rather than opens; open rate has become unreliable and reply rate has not.",
    ],
    close: close(
      "The channel you own",
      "Mengo draws each issue from the month's argument and paces the cadence to your real capacity. Join our waitlist for early access.",
    ),
  },

  "local-seo-checklist": {
    intro:
      "Unglamorous work that outperforms most social channels for a business serving a place. It is ordered by return rather than by effort, which is why the map listing comes before anything anyone would describe as marketing.",
    takeaways: [
      "Fix the map listing first — hours, categories, photographs and service area outrank everything else here.",
      "Make review collection a process with a defined moment, not something you remember occasionally.",
      "Build one page per area you genuinely serve, with real local substance in each.",
      "Check the whole thing on a phone on mobile data, which is how most local searches actually happen.",
    ],
    close: close(
      "The work that produces local enquiries",
      "Mengo requires genuine local substance per page and flags the thin ones. Join our waitlist for early access.",
    ),
  },

  "landing-page-checklist": {
    intro:
      "A landing page is defined by what it excludes. This checklist is mostly a series of removals, and the most useful item on it is the one asking you to name the single decision the page exists to produce.",
    takeaways: [
      "Name the single decision. If you cannot, the page will ask for several things and get none of them.",
      "Complete the proposition above the fold on a phone, where most first visits happen.",
      "One section per real objection, ordered by when it surfaces — not sections added because the page felt short.",
      "Repeat the same call to action in identical wording; varied phrasing reads as different actions.",
    ],
    close: close(
      "One page, one decision",
      "Landing Page Copy generates each section against the objection it removes. Join our waitlist for early access.",
    ),
  },

  "webinar-playbook": {
    intro:
      "Most webinar effort goes into filling the room and most of the value sits in what happens afterwards. This playbook treats registration, attendance and follow-up as three separate problems, because they are.",
    takeaways: [
      "Registration and attendance are different problems with different messages.",
      "Promote the problem the session solves rather than the session's title.",
      "Deliver everything you promised before mentioning an offer, and bound the offer segment clearly.",
      "Follow up within 48 hours, split by attendance, and answer unanswered live questions individually.",
    ],
    close: close(
      "The follow-up is the funnel",
      "Mengo plans promotion, reminders, session structure and a split follow-up as one system. Join our waitlist for early access.",
    ),
  },

  "whatsapp-nurture-playbook": {
    intro:
      "The highest-attention channel available and the least forgiving. This playbook is as much about restraint as technique, because the cost of an unwanted message here is paid in blocks and reports rather than in unsubscribes.",
    takeaways: [
      "Opt-in quality decides everything; a list assembled without genuine consent will not survive contact.",
      "Write short and answerable — a message that invites a reply beats one that requests a click.",
      "Respect the clock. A notification at nine in the evening is a different intrusion from an email.",
      "Do not start a sequence you cannot answer. Reply capacity is a prerequisite, not an optimisation.",
    ],
    close: close(
      "Only start it if you can answer",
      "Mengo asks about reply capacity before generating a WhatsApp sequence and paces it accordingly. Join our waitlist for early access.",
    ),
  },

  "ai-content-guardrails-checklist": {
    intro:
      "What to check before publishing anything a model wrote under your name. The risk is not clumsy prose, which is visible and gets fixed — it is a fluent, specific, entirely invented claim that reads exactly like the true sentences around it.",
    takeaways: [
      "Every number needs a source you can point at, including the ones that sound too ordinary to check.",
      "Every customer reference must be real and used with permission.",
      "Regulated claims need a human with the relevant qualification, not a careful reader.",
      "Superlatives have to be defensible, and the final test is whether it sounds like you rather than like the category.",
    ],
    close: close(
      "The claim you never made is the risk",
      "Editorial Guardrails restrict claims to what you supplied and flag the gaps. Join our waitlist for early access.",
    ),
  },

  "marketing-audit-checklist": {
    intro:
      "Establish what you already have before deciding what to build. The most common audit finding is not that content is missing — it is that content exists, arrives at a follow-up process that does not, and is therefore being wasted rather than being insufficient.",
    takeaways: [
      "Inventory before opinion. List what exists before deciding what is wrong with it.",
      "Check the follow-up first; it is where the largest unworked return usually sits.",
      "Check the offer ladder for the missing entry step, which is the most common structural gap.",
      "Sequence fixes by return rather than by ease, or you will do the easy ones and stop.",
    ],
    close: close(
      "Find the constraint first",
      "Effort spent on a layer that was not the constraint produces no visible change. Join our waitlist and tell us what feels broken.",
    ),
  },
};
