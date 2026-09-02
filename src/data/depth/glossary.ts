import type { DepthMap } from "@/data/depth";
import { close, s } from "@/data/depth";

/**
 * Glossary depth.
 *
 * A definition page that stops at the definition is a dictionary entry, and a
 * dictionary entry is not worth a visit. Each term here gains three things: the
 * context that makes the definition mean something, two sections on how it
 * behaves in practice, and a closing argument written about this term rather
 * than about glossaries in general.
 *
 * `related` replaces what used to be one hand-picked rail repeated across all
 * seventy-three terms.
 */
export const glossaryDepth: DepthMap = {
  /* ---------------- Strategy layer ---------------- */

  positioning: {
    intro:
      "Positioning is a decision, not a description. It is the point at which a business stops trying to be relevant to everyone who might conceivably buy and commits to being the obvious answer for a narrower group. That commitment is what makes every later piece of work cheaper: a headline, an email subject line and a sales reply all inherit the same claim instead of inventing one.",
    explain: [
      s(
        "It is defined by what it excludes",
        "A statement no competitor would dispute is a category description. Real positioning contains something arguable — a method you commit to, a segment you decline, a belief about what actually matters in your category. The discomfort of writing it down is the signal that it is doing work.",
      ),
      s(
        "How to tell whether it is holding",
        "Ask three customers what you do. If the answers differ from each other, the position has not transferred. If they are the same and they are the words you chose, it has. That test is cheaper and more honest than any brand tracking a business at this size can afford.",
      ),
    ],
    related: {
      features: ["positioning-generator", "business-brief", "voice-profile"],
      guides: ["positioning-framework"],
      articles: ["your-positioning-is-a-description"],
      useCases: ["define-your-positioning"],
    },
    close: close(
      "Positioning is the first thing Mengo settles",
      "Everything downstream inherits it, which is why the Business Brief asks about your offer and your buyer before it generates a single asset. Join our waitlist to see the claim it drafts for your business.",
    ),
  },

  "value-proposition": {
    intro:
      "A value proposition is the working sentence of your positioning — the version that goes at the top of a page, in an email opener, or in the first ten seconds of a conversation. Positioning is the strategic decision; the value proposition is that decision written so a stranger can act on it.",
    explain: [
      s(
        "Outcome first, mechanism second",
        "Buyers assess the outcome before they care how it is produced. A proposition that opens with your method asks the reader to do the translation, and most will not. State what changes for them, then earn attention for how.",
      ),
      s(
        "Where propositions get diluted",
        "The usual failure is repeated softening: each round of edits removes the sharp clause that made the sentence specific, until what remains is accurate and inert. Version the statement so you can see what was removed and when it stopped working.",
      ),
    ],
    related: {
      features: ["positioning-generator", "offer-architecture", "landing-page-copy"],
      guides: ["positioning-framework", "landing-page-checklist"],
      articles: ["your-positioning-is-a-description"],
    },
    close: close(
      "One claim, propagated everywhere",
      "Mengo drafts the proposition from your brief and holds it as the constraint every headline, subject line and landing page has to work within. Join our waitlist for early access.",
    ),
  },

  "ideal-customer-profile": {
    intro:
      "An ideal customer profile describes a situation rather than a person. The useful version is not a demographic sketch with a stock photo attached — it is a statement of what has to be true about a business or a household before your offer is the sensible next step for them.",
    explain: [
      s(
        "Built from your existing best customers",
        "The most reliable source is work you have already done well: which engagements went smoothly, which buyers understood the value quickly, which ones came back. That evidence is specific to you and cannot be researched from outside.",
      ),
      s(
        "It has to exclude someone",
        "A profile describing everyone you would accept payment from is a revenue target, not a profile. The value comes from the segments it rules out, because those are the ones you stop writing for and stop pursuing.",
      ),
    ],
    related: {
      features: ["business-brief", "audience-segments", "competitor-context"],
      guides: ["positioning-framework"],
      articles: ["marketing-before-product-market-fit"],
    },
    close: close(
      "Your profile, taken from your own answers",
      "The Business Brief asks what you sell and who has bought it before, and the profile is derived from that rather than from an industry template. Join our waitlist to see it built.",
    ),
  },

  "audience-segmentation": {
    intro:
      "Segmentation exists to solve one problem: a single message written for a mixed audience persuades the average of that audience, and the average is nobody. Splitting the market lets each message assume something about the reader, and assumption is what makes copy feel written rather than broadcast.",
    explain: [
      s(
        "Segment on the message, not on the data",
        "The right number of segments is the number of genuinely different arguments you need to make. If two groups respond to the same claim and the same objection, they are one segment with two labels, and maintaining both costs time for no gain.",
      ),
      s(
        "Two to four is usually the honest answer",
        "Most small businesses can sustain two to four. Beyond that the segments stop being maintained, the content reverts to the average, and the framework becomes a document rather than a working constraint.",
      ),
    ],
    related: {
      features: ["audience-segments", "intent-segmentation", "objection-mapping"],
      guides: ["positioning-framework", "objection-map-template"],
      articles: ["content-that-only-you-could-write"],
    },
    close: close(
      "Segments that earn their existence",
      "Mengo creates a segment only where the message actually differs, and attaches one objection to each so the distinction stays visible in the content. Join our waitlist for early access.",
    ),
  },

  "intent-segmentation": {
    intro:
      "Intent segmentation sorts people by what they have done rather than by who they are. Someone who has read your pricing page twice this week is in a different state from someone who downloaded a checklist in March, even when both sit in the same industry and the same company size band.",
    explain: [
      s(
        "Behaviour is available before intent is stated",
        "Most buyers will not tell you they are evaluating. What they will do is return, read further, forward something, or reply. Those actions are the earliest reliable signal you have, and they are already in your systems.",
      ),
      s(
        "It changes the message, not just the timing",
        "The point of separating high-intent contacts is not to email them more often. It is to send them something different: specifics, objections, a next step sized to where they actually are rather than to where the sequence has reached.",
      ),
    ],
    related: {
      features: ["intent-segmentation", "lead-scoring-model", "sequence-builder"],
      guides: ["lead-nurture-blueprint"],
      articles: ["the-follow-up-gap"],
      useCases: ["qualify-leads-before-a-call"],
    },
    close: close(
      "Follow-up that reads the room",
      "Lead Nurturing routes each contact into a sequence based on what they actually did, so a hesitant reader and a ready buyer stop receiving the same email. Join our waitlist to see it configured.",
    ),
  },

  "buyer-journey": {
    intro:
      "The buyer journey is a description of states, not of steps you control. A buyer moves from not recognising the problem, to naming it, to comparing approaches, to choosing one. Your marketing does not move them; it either meets them where they already are or misses.",
    explain: [
      s(
        "Most content is written for one state",
        "Businesses tend to publish at whichever state they find easiest to write about — usually the last one, because that is where the product lives. The gaps earlier in the journey are where the audience is largest and the competition thinnest.",
      ),
      s(
        "The journey is rarely linear",
        "People loop back, stall, and re-enter at a different point months later. This is an argument for having material at every stage available at all times, rather than for orchestrating a sequence that assumes forward motion.",
      ),
    ],
    related: {
      features: ["annual-calendar", "content-briefs", "campaign-themes"],
      guides: ["90-day-content-plan"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "Coverage across the whole path",
      "Every calendar slot Mengo generates carries a journey stage, so a month of content does not accidentally address the same reader four times. Join our waitlist for early access.",
    ),
  },

  "buying-cycle": {
    intro:
      "The buying cycle is measured from the buyer's side: from the moment they recognise a need to the moment they decide. It is usually longer than businesses estimate, because the estimate starts at first contact and the cycle started weeks earlier, quietly, without you.",
    explain: [
      s(
        "It sets the length of your follow-up",
        "A three-email sequence against a four-month cycle stops talking to people three months before they decide. The cycle is the number that tells you how many touches you need and how far apart they belong.",
      ),
      s(
        "How to estimate it honestly",
        "Ask recent customers when they first started looking. The answer is almost always earlier than your records show, and the gap between the two is exactly the period your marketing is currently absent from.",
      ),
    ],
    related: {
      features: ["cadence-planning", "sequence-builder", "channel-ranking"],
      guides: ["lead-nurture-blueprint"],
      articles: ["how-much-marketing-is-enough"],
    },
    close: close(
      "Sequences paced to your actual cycle",
      "Cadence planning derives sequence length and spacing from the cycle you describe in the brief, rather than from a default that suits software but not surveying. Join our waitlist to see it.",
    ),
  },

  "sales-cycle": {
    intro:
      "The sales cycle is the same period measured from your side: qualified enquiry to closed decision. It is the operational number, and it is what turns a revenue target into a pipeline requirement you can act on this quarter rather than next year.",
    explain: [
      s(
        "It works backwards from the target",
        "If the cycle is two months and you need decisions in December, the enquiries have to exist in October. Most marketing panic is the result of doing this arithmetic in November.",
      ),
      s(
        "Lengthening is a signal, not a season",
        "A cycle that stretches usually means an objection has appeared that the material does not answer, or a new decision-maker has joined the conversation. Both are content problems before they are sales problems.",
      ),
    ],
    related: {
      features: ["sales-handoff-notes", "objection-mapping", "funnel-diagnostics"],
      guides: ["objection-map-template", "metric-selection-framework"],
      articles: ["the-internal-champion-problem"],
      useCases: ["shorten-the-sales-cycle"],
    },
    close: close(
      "Work the cycle backwards",
      "Mengo sizes campaign windows and nurture length against the cycle you report, so the plan produces decisions in the month you need them. Join our waitlist for early access.",
    ),
  },

  "top-of-funnel": {
    intro:
      "Top-of-funnel content speaks to people who have the problem but are not yet shopping. It is the least immediately rewarding content to produce and the reason anyone is available to convert later, which is why it is the first thing cut in a busy month and the last thing to recover.",
    explain: [
      s(
        "Judge it on the right thing",
        "Measuring awareness content against enquiries produces the conclusion that it does not work, followed by a decision to publish only offers. Reach, recall and the quality of the audience it builds are the honest tests.",
      ),
      s(
        "It is where a position gets established",
        "Nobody forms a view of a business from its pricing page. They form it from the arguments it makes when it is not selling anything, which is what makes this the layer where recognition is actually built.",
      ),
    ],
    related: {
      features: ["annual-calendar", "content-briefs", "hook-writer"],
      guides: ["90-day-content-plan"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "Awareness work that keeps happening",
      "Top-of-funnel slots are assigned in the calendar with their job attached, so they survive the month when everything urgent arrives at once. Join our waitlist to see the plan.",
    ),
  },

  "middle-of-funnel": {
    intro:
      "The middle of the funnel is where someone has accepted they have a problem and is deciding how to solve it. They are comparing approaches, not yet vendors, and they are looking for a reason to trust one method over another. Most businesses have almost nothing here.",
    explain: [
      s(
        "Comparison happens whether you publish or not",
        "The buyer will compare approaches using whatever material exists. Publishing an honest account of when your approach is the wrong one is unusually persuasive here, because it is the only kind of comparison a buyer expects to be biased.",
      ),
      s(
        "Method is the content",
        "Explaining how the work is actually done — the sequence, the decisions, the trade-offs — does more here than any claim about results. It lets the reader simulate working with you, which is what they are actually trying to do.",
      ),
    ],
    related: {
      features: ["long-form-drafting", "objection-mapping", "content-briefs"],
      guides: ["objection-map-template"],
      articles: ["the-internal-champion-problem"],
      comparisons: ["mengo-vs-doing-it-yourself"],
    },
    close: close(
      "The layer most plans are missing",
      "Mengo schedules comparison, proof and objection slots deliberately rather than leaving the middle of the funnel to whatever gets written on a good week. Join our waitlist for early access.",
    ),
  },

  "bottom-of-funnel": {
    intro:
      "Bottom-of-funnel content is read by someone who has already decided to act and is checking for a reason not to. It is short, factual and unglamorous: pricing, process, guarantees, what happens in week one. It converts the demand everything else created.",
    explain: [
      s(
        "It is mostly objection removal",
        "At this point persuasion is finished. What remains is a list of specific hesitations, and the page's job is to answer each one plainly rather than to restate why the product is good.",
      ),
      s(
        "Cheap to write, routinely missing",
        "This material takes an afternoon and is frequently absent, because it feels less like marketing than the content that precedes it. The absence shows up as enquiries that go quiet after the pricing page.",
      ),
    ],
    related: {
      features: ["landing-page-copy", "objection-mapping", "decision-rules"],
      guides: ["landing-page-checklist", "objection-map-template"],
      articles: ["your-landing-page-asks-for-too-much"],
    },
    close: close(
      "Answer the last question first",
      "Landing page and FAQ copy is generated against the objections that actually surface at this stage, one section per hesitation. Join our waitlist to see it written for your offer.",
    ),
  },

  "lead-magnet": {
    intro:
      "A lead magnet trades something useful for a contact detail. The exchange is only fair if what arrives is worth the address, and the cost of getting that wrong is not a wasted PDF — it is a subscriber who now ignores everything you send afterwards.",
    explain: [
      s(
        "Narrow beats comprehensive",
        "A one-page checklist that solves a specific problem this week outperforms a forty-page guide almost every time. The comprehensive version is harder to produce, slower to consume, and rarely finished by the person who downloaded it.",
      ),
      s(
        "The follow-up is part of the asset",
        "A magnet with no sequence behind it produces a list of people who received one thing and heard nothing more. The sequence should be written at the same time, because the magnet is what makes the first email relevant.",
      ),
    ],
    related: {
      features: ["lead-magnet-builder", "sequence-builder", "landing-page-copy"],
      guides: ["welcome-sequence-template"],
      articles: ["the-lead-magnet-nobody-wanted"],
      useCases: ["build-a-lead-magnet"],
    },
    close: close(
      "Nothing gets downloaded into silence",
      "The Lead Magnet Builder scopes the asset narrowly and generates the follow-up sequence alongside it, so the exchange continues past the first email. Join our waitlist for early access.",
    ),
  },

  "lead-nurturing": {
    intro:
      "Nurturing is what happens in the weeks between someone raising their hand and someone deciding. For most small businesses that period is empty, which means enquiries are lost to nothing more competitive than silence and the passage of time.",
    explain: [
      s(
        "It is not a newsletter",
        "A newsletter goes to everyone on the same day about the same thing. A nurture sequence starts when a specific person does a specific thing, and each message has one job. Sending the newsletter instead is the most common substitution.",
      ),
      s(
        "One objection per message",
        "Sequences fail when every email restates the pitch. Assigning each message a single hesitation to dissolve gives the sequence somewhere to go, and gives the reader a reason to open the next one.",
      ),
    ],
    related: {
      features: ["sequence-builder", "objection-mapping", "cadence-planning"],
      guides: ["lead-nurture-blueprint"],
      articles: ["the-follow-up-gap"],
      products: ["lead-nurturing"],
    },
    close: close(
      "The highest-return work most businesses skip",
      "Lead Nurturing designs the segments, writes the sequences and paces them against your buying cycle. Join our waitlist and tell us where enquiries currently go quiet.",
    ),
  },

  "lead-scoring": {
    intro:
      "Lead scoring turns a list into an order of operations. Its only real job is answering who to contact first when there is not time to contact everyone, which is the situation almost every small business is actually in.",
    explain: [
      s(
        "Behaviour outperforms resemblance",
        "Scores built from firmographics measure how much a contact looks like a customer. Scores built from behaviour measure whether they are acting like one. The second is a much better predictor and considerably cheaper to maintain.",
      ),
      s(
        "If it cannot be explained, it will be ignored",
        "A score that arrives without a reason gets overridden by whoever is making the calls. A small, legible model that shows what drove the number survives contact with the person using it.",
      ),
    ],
    related: {
      features: ["lead-scoring-model", "intent-segmentation", "sales-handoff-notes"],
      guides: ["lead-nurture-blueprint"],
      articles: ["the-follow-up-gap"],
      useCases: ["qualify-leads-before-a-call"],
    },
    close: close(
      "A score you can argue with",
      "Mengo's model is behaviour-weighted, small enough to explain, and shows the reason behind each number so the person following up can disagree with it. Join our waitlist for early access.",
    ),
  },

  "marketing-qualified-lead": {
    intro:
      "Marketing qualified is a threshold, and thresholds are negotiated rather than discovered. The definition is worth having only if the person doing the follow-up accepts it; otherwise it becomes a number in a report that nobody acts on.",
    explain: [
      s(
        "Set it against capacity, not ambition",
        "A threshold producing forty leads a week for a person who can call ten produces thirty ignored records and an argument about lead quality. The right threshold is the one that fills the available follow-up time.",
      ),
      s(
        "Review it when the argument starts",
        "Persistent disagreement about lead quality is usually a sign the threshold has drifted from what a good conversation actually looks like. It is a definition problem before it is a performance problem.",
      ),
    ],
    related: {
      features: ["lead-scoring-model", "sales-handoff-notes", "metric-selection"],
      guides: ["metric-selection-framework"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "A threshold both sides accept",
      "Mengo sets the qualification bar against how many conversations you can actually have, which is what stops the definition drifting apart from the follow-up. Join our waitlist for early access.",
    ),
  },

  "sales-qualified-lead": {
    intro:
      "Sales qualified means a human has spoken to the contact and judged the opportunity real. It is the first point in the pipeline where the assessment is based on a conversation rather than on behaviour inferred from clicks.",
    explain: [
      s(
        "The gap is the useful number",
        "The proportion of marketing qualified leads that survive into sales qualified tells you whether the earlier threshold is set correctly. A very high pass rate usually means the bar is too high and volume is being lost upstream.",
      ),
      s(
        "The handoff decides the first call",
        "A qualifying conversation that starts from nothing repeats questions the contact has already answered by their behaviour. What they read, what they downloaded and what they asked should arrive with the record.",
      ),
    ],
    related: {
      features: ["sales-handoff-notes", "lead-scoring-model", "funnel-diagnostics"],
      guides: ["metric-selection-framework"],
      articles: ["speed-is-a-conversion-strategy"],
      useCases: ["qualify-leads-before-a-call"],
    },
    close: close(
      "Start the call already informed",
      "Handoff notes summarise what a contact has read and asked, so the first conversation begins where their research left off. Join our waitlist for early access.",
    ),
  },

  "conversion-rate": {
    intro:
      "A conversion rate is only interpretable with both ends named. Visitors to enquiries, enquiries to calls, calls to customers — these are different numbers with different healthy ranges, and averaging them into a single site-wide figure destroys the information each one carried.",
    explain: [
      s(
        "Compare a step to its own kind",
        "A landing page and a blog post convert at different rates because they do different jobs. Judging both against one benchmark leads to the conclusion that the content is failing when it is simply doing something else.",
      ),
      s(
        "Small numbers move a lot",
        "At the volumes most small businesses run, a rate calculated from a few dozen visits will swing week to week for no reason at all. Reading noise as a trend is the most common way conversion data leads to a bad decision.",
      ),
    ],
    related: {
      features: ["funnel-diagnostics", "metric-selection", "landing-page-copy"],
      guides: ["metric-selection-framework", "landing-page-checklist"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "Rates that carry a decision",
      "Funnel Diagnostics compares each step against what that step type should achieve, and names the fix rather than reporting the number. Join our waitlist for early access.",
    ),
  },

  funnel: {
    intro:
      "A funnel is a diagnostic device. Its value is not the diagram but the fact that naming each step makes drop-off visible at a specific point, which turns weak results from a general worry into a locatable problem.",
    explain: [
      s(
        "The leak is rarely where it feels",
        "Poor results feel like a traffic problem, because traffic is the number everyone looks at first. More often a middle step is losing people who already arrived, and adding volume simply pushes more of them into the same gap.",
      ),
      s(
        "Each step has a different fix",
        "A page that does not convert is a copy problem. Enquiries that do not become calls are a speed problem. Calls that do not close are usually an objection problem. Naming the step tells you which kind of work is required.",
      ),
    ],
    related: {
      features: ["funnel-diagnostics", "metric-selection", "objection-mapping"],
      guides: ["marketing-audit-checklist", "metric-selection-framework"],
      articles: ["stop-measuring-everything"],
      useCases: ["diagnose-a-funnel-drop"],
    },
    close: close(
      "Find the step, not the symptom",
      "Growth Signal locates the step dropping more than its type should and names the fix for that step. Join our waitlist and describe where things currently stall.",
    ),
  },

  "click-through-rate": {
    intro:
      "Click-through rate measures the strength of a promise. It tells you how many people found the opening compelling enough to act on, and nothing whatsoever about whether what followed was worth their time.",
    explain: [
      s(
        "Always read it with the next number",
        "A high click-through rate paired with a poor conversion rate is the signature of an overstated promise. Improving the first number in isolation makes that gap wider, which is how a business optimises its way into a worse result.",
      ),
      s(
        "It moves for reasons other than quality",
        "Audience, placement, time of day and how recently the same people saw something similar all move the rate. Attributing a change to the copy alone usually means concluding something confident about noise.",
      ),
    ],
    related: {
      features: ["hook-writer", "content-performance", "metric-selection"],
      guides: ["metric-selection-framework"],
      articles: ["hooks-are-not-clickbait", "testing-adjectives-teaches-nothing"],
    },
    close: close(
      "The promise and the delivery, together",
      "Content Performance scores an asset against the job it was assigned rather than against whichever number moved, so a strong hook with a weak payoff is visible. Join our waitlist for early access.",
    ),
  },

  "open-rate": {
    intro:
      "Open rate used to be the headline email metric and is now a rough directional signal. Privacy features that pre-fetch images register opens that never happened, which inflates the number in a way that varies by audience and by mail client.",
    explain: [
      s(
        "What to watch instead",
        "Replies and clicks require a decision by a human being, which makes both far harder to inflate. A list with a falling reply rate is in trouble regardless of what the open rate reports.",
      ),
      s(
        "It is still useful as a comparison",
        "Comparing one send against your own recent sends to the same segment remains informative, because the inflation is roughly constant. Comparing your number against a published industry average is not.",
      ),
    ],
    related: {
      features: ["email-copywriting", "list-hygiene", "metric-selection"],
      guides: ["email-newsletter-playbook", "metric-selection-framework"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "Weight the signals that still mean something",
      "Mengo treats open rate as directional and weights reply behaviour more heavily, because that is the number that still reflects a person deciding. Join our waitlist for early access.",
    ),
  },

  deliverability: {
    intro:
      "Deliverability is decided largely by your own sending history. Mailbox providers watch whether the people you send to engage, and they apply that judgement to every future send — including the ones going to your best customers.",
    explain: [
      s(
        "Sending to everyone quietly costs you the ones who matter",
        "Every send to a contact who never opens is evidence against you. The damage is invisible in your reports and shows up as declining reach among the people who were still reading.",
      ),
      s(
        "The fixes are structural and dull",
        "Authenticated sending, genuine consent, consistent volume and scheduled suppression of dormant contacts. None of it is interesting, and all of it matters more than the copy in the message.",
      ),
    ],
    related: {
      features: ["list-hygiene", "reengagement-flows", "cadence-planning"],
      guides: ["reengagement-playbook"],
      articles: ["the-follow-up-gap"],
    },
    close: close(
      "Protect the reach you already have",
      "Mengo generates the suppression and re-permission rules and schedules them into quiet periods, so hygiene happens rather than being intended. Join our waitlist for early access.",
    ),
  },

  "list-hygiene": {
    intro:
      "List hygiene is the discipline of removing people who have stopped listening. It reduces a number most businesses are attached to — list size — in exchange for improving the number that actually matters, which is how many of the remaining contacts see what you send.",
    explain: [
      s(
        "Size is vanity, reach is the asset",
        "A list of eight thousand with four hundred engaged contacts is worse than a list of six hundred engaged contacts, because the dormant majority is actively suppressing delivery to the minority still reading.",
      ),
      s(
        "Schedule it, or it will not happen",
        "Nobody removes contacts during a busy quarter. Placing suppression and re-permission in a defined quiet window is the difference between a policy and an intention.",
      ),
    ],
    related: {
      features: ["list-hygiene", "reengagement-flows", "seasonality-planning"],
      guides: ["reengagement-playbook"],
      articles: ["what-quiet-months-are-for"],
    },
    close: close(
      "The maintenance nobody schedules",
      "Suppression, re-permission and archiving rules are generated with dates attached and placed in the periods where the work can actually be done. Join our waitlist for early access.",
    ),
  },

  "double-opt-in": {
    intro:
      "Double opt-in asks a new subscriber to confirm before anything else is sent. It costs you a portion of every signup and returns a list where every address belongs to someone who deliberately asked to be there.",
    explain: [
      s(
        "The trade is a smaller list and better everything else",
        "Open, click, reply and deliverability all improve, because the confirmation step removes mistyped addresses, reluctant signups and a meaningful share of automated ones before they ever enter the list.",
      ),
      s(
        "Consent is a legal question in some markets",
        "Where consent standards are strict, a recorded confirmation is the cleanest evidence you have. Whether it is required depends on your jurisdiction and is worth checking rather than assuming.",
      ),
    ],
    related: {
      features: ["list-hygiene", "sequence-builder", "editorial-guardrails"],
      guides: ["welcome-sequence-template"],
      articles: ["forms-that-lose-you-money"],
    },
    close: close(
      "Confirmation, then a reason to stay",
      "Consent capture stays in your sending platform; Mengo writes the confirmation message and the welcome flow that has to earn the second open. Join our waitlist for early access.",
    ),
  },

  "drip-campaign": {
    intro:
      "A drip campaign describes a delivery mechanism: messages released on a schedule after a trigger. The name says nothing about what the messages contain, which is why so many drip campaigns are four versions of the same email arriving at intervals.",
    explain: [
      s(
        "Mechanism is the easy half",
        "Setting up automated sending takes an afternoon in any email platform. Deciding what each message should say, in what order, to someone at a specific stage of doubt, is the part that determines whether it works.",
      ),
      s(
        "Give the sequence somewhere to go",
        "A well-built sequence has a direction: from the reason they arrived, through the specific hesitations in the order they usually surface, to a decision. If the messages could be reordered without loss, there is no sequence.",
      ),
    ],
    related: {
      features: ["sequence-builder", "objection-mapping", "cadence-planning"],
      guides: ["lead-nurture-blueprint"],
      articles: ["the-follow-up-gap"],
    },
    close: close(
      "Automation with an argument in it",
      "Mengo assigns each message one objection to dissolve, so the sequence progresses rather than restating the pitch on a timer. Join our waitlist for early access.",
    ),
  },

  "welcome-sequence": {
    intro:
      "The welcome sequence is read at the only moment you are guaranteed attention: immediately after someone chose to hear from you. What happens in those first few messages sets whether anything you send in the following year gets opened at all.",
    explain: [
      s(
        "Deliver, then set expectations",
        "The first message should hand over whatever was promised and say plainly what will arrive next and how often. Ambiguity here is what produces unsubscribes three weeks later from people who no longer remember signing up.",
      ),
      s(
        "It is the one sequence worth over-investing in",
        "Every subscriber passes through it, and it runs unchanged for years. An hour spent improving the welcome flow compounds in a way an hour spent on a single campaign email cannot.",
      ),
    ],
    related: {
      features: ["sequence-builder", "email-copywriting", "lead-magnet-builder"],
      guides: ["welcome-sequence-template"],
      articles: ["onboarding-is-marketing"],
      useCases: ["write-a-welcome-sequence"],
    },
    close: close(
      "The first few emails do the most work",
      "Mengo generates a welcome sequence alongside every lead magnet, written to deliver, orient and set the cadence before it asks for anything. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Retention and unit economics ---------------- */

  onboarding: {
    intro:
      "Onboarding is the stretch between paying and getting the thing they paid for. It is usually owned by delivery or support, and it is the period in which the customer decides whether the purchase was a good idea — which makes it a marketing surface whether or not marketing is looking at it.",
    explain: [
      s(
        "Define the first real result",
        "Every offer has a moment where the customer gets something they can point at: the first report, the first session, the first working configuration. Onboarding is the shortest honest path to that moment, and everything that does not shorten it is decoration.",
      ),
      s(
        "Churn is decided long before it is recorded",
        "A cancellation in month five was usually determined in week two, when the customer did not get started and quietly stopped trying. Watching for the absence of early activity is far more useful than surveying people on their way out.",
      ),
    ],
    related: {
      features: ["sequence-builder", "email-copywriting", "cadence-planning"],
      guides: ["welcome-sequence-template"],
      articles: ["onboarding-is-marketing"],
      useCases: ["build-an-onboarding-email-flow"],
    },
    close: close(
      "Treat the first month as marketing",
      "Mengo designs onboarding flows around a defined first-value moment, so the sequence has a target rather than a schedule. Join our waitlist for early access.",
    ),
  },

  "re-engagement-campaign": {
    intro:
      "A re-engagement campaign is a deliberate last approach to people who have stopped responding. It has two acceptable outcomes: they come back, or they leave cleanly. A campaign with no exit is just more email to people who already decided.",
    explain: [
      s(
        "Lead with a reason, not with a plea",
        "Messages that ask whether someone still wants to hear from you give the reader nothing to react to. Messages that arrive with something genuinely new — a change, a result, a piece of work — give a dormant contact a reason to re-open the relationship.",
      ),
      s(
        "The archive step is the point",
        "The value is as much in the removal as in the recovery. Contacts who do not respond to a direct approach are suppressed, which improves delivery for everyone still reading and makes future numbers honest.",
      ),
    ],
    related: {
      features: ["reengagement-flows", "list-hygiene", "intent-segmentation"],
      guides: ["reengagement-playbook"],
      articles: ["the-cost-of-restarting"],
      useCases: ["revive-a-cold-list"],
    },
    close: close(
      "Recover some, release the rest",
      "Re-engagement flows lead with a real reason to make contact and end with an explicit archive decision, so the list gets smaller and better at the same time. Join our waitlist for early access.",
    ),
  },

  "churn-rate": {
    intro:
      "Churn is the rate at which customers stop. In a recurring-revenue business it silently sets the ceiling on growth: at a high enough churn rate, acquisition is a treadmill and no amount of new marketing produces a bigger business.",
    explain: [
      s(
        "It changes what marketing should spend on",
        "When churn is high, money spent on onboarding, education and early-life communication returns more than money spent on acquisition. Most businesses discover this after two quarters of increasing ad spend and flat revenue.",
      ),
      s(
        "Segment it before you react to it",
        "One badly-fitting customer segment can produce a churn number that looks like a product problem. Splitting churn by how the customer arrived usually locates the real cause in acquisition rather than in delivery.",
      ),
    ],
    related: {
      features: ["metric-selection", "reporting-templates", "sequence-builder"],
      guides: ["metric-selection-framework"],
      articles: ["onboarding-is-marketing"],
      useCases: ["win-back-churned-customers"],
    },
    close: close(
      "A retention number in the marketing set",
      "For subscription and membership models Mengo includes churn in the metric set, because acquisition targets set without it produce plans that cannot work. Join our waitlist for early access.",
    ),
  },

  "customer-lifetime-value": {
    intro:
      "Lifetime value is the total profit a customer produces across the whole relationship, not the value of their first order. It is the number that converts marketing from a cost line into an investment decision, because it states what a customer is actually worth acquiring.",
    explain: [
      s(
        "A rough figure beats no figure",
        "Precision here is not the point. Average order value, average repeat rate and a reasonable margin estimate produce a number good enough to size a budget, and businesses that wait for an exact one spend years deciding by feel.",
      ),
      s(
        "It differs sharply by segment",
        "One channel or one service line often produces customers worth several times another. A single blended figure hides that, and hiding it is how a business keeps spending to acquire its least valuable customers.",
      ),
    ],
    related: {
      features: ["metric-selection", "offer-architecture", "reporting-templates"],
      guides: ["metric-selection-framework", "offer-ladder-framework"],
      articles: ["how-much-marketing-is-enough"],
    },
    close: close(
      "Size the spend against the return",
      "Mengo uses lifetime value to set metric thresholds and to sanity-check acquisition targets, so a plan is affordable before it is written. Join our waitlist for early access.",
    ),
  },

  "customer-acquisition-cost": {
    intro:
      "Acquisition cost is total sales and marketing spend divided by the customers it produced. Reported on its own it is a number with no verdict attached: whether it is good or bad depends entirely on what a customer is worth and how long you wait to find out.",
    explain: [
      s(
        "Include the time, not only the spend",
        "For an owner-operated business the largest input is hours, and leaving them out produces a flattering figure that makes an unsustainable channel look efficient. Costing your own time at a realistic rate changes most channel comparisons.",
      ),
      s(
        "It rises as you scale a channel",
        "The cheapest audience on any channel is the first one. Planning growth on the assumption that today's acquisition cost holds at three times the volume is the most common way a working plan stops working.",
      ),
    ],
    related: {
      features: ["metric-selection", "channel-attribution", "channel-ranking"],
      guides: ["metric-selection-framework", "channel-selection-framework"],
      articles: ["how-much-marketing-is-enough"],
    },
    close: close(
      "Never reported alone",
      "Mengo pairs acquisition cost with lifetime value and payback in the metric set, so the number always arrives with the context that makes it a decision. Join our waitlist for early access.",
    ),
  },

  "payback-period": {
    intro:
      "Payback period is how long a customer takes to repay what it cost to acquire them. For a business funding its own growth this matters more than lifetime value, because lifetime value is a promise about the future and payback is a claim on this quarter's cash.",
    explain: [
      s(
        "It sets your safe growth rate",
        "A long payback period means each new customer consumes cash before returning any, so growing faster makes the cash position worse before it makes it better. The period tells you how hard you can push without a funding conversation.",
      ),
      s(
        "Shortening it is usually an offer problem",
        "An entry offer, a deposit, or a shorter first commitment can cut payback substantially without changing acquisition at all. This is one of the few marketing levers that improves cash flow directly.",
      ),
    ],
    related: {
      features: ["offer-architecture", "metric-selection", "promotional-calendars"],
      guides: ["offer-ladder-framework", "metric-selection-framework"],
      articles: ["how-much-marketing-is-enough"],
    },
    close: close(
      "The number that decides your pace",
      "Payback sits in the metric set for subscription and repeat-purchase models, and shapes how aggressive Mengo's plan is willing to be. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Measurement ---------------- */

  attribution: {
    intro:
      "Attribution assigns credit for a sale to the marketing that contributed to it. The honest position is that it is always partial: buyers use devices you cannot link, read things you cannot track, and are recommended by people who never appear in your data.",
    explain: [
      s(
        "Ask the buyer as well as the analytics",
        "A single open question at enquiry — how did you come across us — recovers information no tracking configuration can, particularly for word of mouth and offline discovery. It is the cheapest attribution improvement available.",
      ),
      s(
        "Decide what level you actually need",
        "Most small businesses need to know which two or three channels deserve continued investment. That question is answerable with rough data. Building a model precise enough to allocate credit per touch is a project that outlives its usefulness.",
      ),
    ],
    related: {
      features: ["channel-attribution", "metric-selection", "experiment-log"],
      guides: ["metric-selection-framework", "marketing-audit-checklist"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "Honest about what the data can carry",
      "Mengo works at the level of attribution your setup genuinely supports and states the uncertainty rather than presenting a confident number. Join our waitlist for early access.",
    ),
  },

  "first-touch-attribution": {
    intro:
      "First-touch attribution gives the whole sale to the first interaction. It is the most generous possible reading of discovery channels, and it is useful precisely because it errs in a known direction rather than in an unknown one.",
    explain: [
      s(
        "Use it to defend the top of the funnel",
        "Awareness work is chronically undervalued because its contribution appears months later under someone else's name. First-touch is the view that makes that contribution visible, which is why it belongs in the conversation about what to cut.",
      ),
      s(
        "It says nothing about what closed the deal",
        "The first touch often produced a reader, not a buyer. Reading it as a ranking of what drives revenue leads to over-investing in reach and starving the material that converts the interest reach created.",
      ),
    ],
    related: {
      features: ["channel-attribution", "content-performance", "channel-ranking"],
      guides: ["metric-selection-framework"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "One end of a range",
      "Mengo reports first-touch alongside last-touch so the gap between the two is visible, rather than picking whichever model flatters the current plan. Join our waitlist for early access.",
    ),
  },

  "last-touch-attribution": {
    intro:
      "Last-touch attribution gives the whole sale to the final interaction before purchase. It is the default in most analytics tools, and it systematically rewards whatever happens to be closest to the transaction rather than what created the demand.",
    explain: [
      s(
        "It over-credits demand harvesting",
        "Branded search and retargeting reach people who already decided. Under last-touch they look like the best-performing channels in the account, which frequently leads to budget moving out of the work that made those people exist.",
      ),
      s(
        "It is still the right model for one job",
        "For assessing the final step — the page, the offer, the enquiry form — last-touch is exactly the right lens, because that step genuinely is the last thing that happened.",
      ),
    ],
    related: {
      features: ["channel-attribution", "funnel-diagnostics", "landing-page-copy"],
      guides: ["metric-selection-framework", "landing-page-checklist"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "The other end of the range",
      "Reported next to first-touch, last-touch stops being a verdict and becomes a boundary — which is all either model can honestly be. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Planning ---------------- */

  "channel-strategy": {
    intro:
      "Channel strategy is mostly a set of refusals. Deciding where to invest is easy and pleasant; deciding what to stop, and writing it down so it stays stopped, is the part that returns the time a small team needs to be good anywhere.",
    explain: [
      s(
        "Commit for longer than feels comfortable",
        "Channels compound. A primary channel given twelve months usually outperforms three channels given four months each, because the first accumulates an audience and the others each start from nothing.",
      ),
      s(
        "Write down the paused list",
        "An unwritten no gets quietly reversed the first time someone forwards you a post about a platform. A named, dated pause with a review point survives that conversation and takes the guilt out of it.",
      ),
    ],
    related: {
      features: ["channel-ranking", "channel-sequencing", "review-cadence"],
      guides: ["channel-selection-framework"],
      articles: ["be-everywhere-is-bad-advice"],
      useCases: ["choose-the-right-channels"],
    },
    close: close(
      "A primary, a secondary and one experiment",
      "Channel Ranking commits you to that shape and names everything else as explicitly paused, with a date to revisit. Join our waitlist for early access.",
    ),
  },

  "marketing-mix": {
    intro:
      "The marketing mix is the whole combination in use at once: which channels, which offers, which messages, in what proportion. Individual pieces get reviewed constantly; the mix as a whole is what almost nobody steps back to look at.",
    explain: [
      s(
        "Mixes drift rather than change",
        "No one decides to become an account that only posts offers. It happens gradually, one busy week at a time, as the content that takes longest to write is skipped first. A periodic review is what surfaces the drift.",
      ),
      s(
        "Review it on a slower clock",
        "Weekly review is for execution, monthly for channel performance, quarterly for the mix. Reconsidering the whole shape too often produces a plan that never runs long enough to be evaluated.",
      ),
    ],
    related: {
      features: ["review-cadence", "channel-ranking", "seasonality-planning"],
      guides: ["monthly-review-template", "marketing-audit-checklist"],
      articles: ["how-much-marketing-is-enough"],
      useCases: ["run-a-monthly-marketing-review"],
    },
    close: close(
      "Look at the shape, not just the parts",
      "Mengo reviews the mix on the monthly cadence and defers strategy questions to the quarterly one, so the plan gets long enough to judge. Join our waitlist for early access.",
    ),
  },

  "content-calendar": {
    intro:
      "A content calendar is a device for removing a daily decision. Its value is not that the dates are filled but that the question of what to publish has already been answered somewhere other than in your head on a Tuesday morning.",
    explain: [
      s(
        "An empty calendar solves nothing",
        "A grid with dates and no assigned arguments moves the decision rather than removing it. The useful version carries a theme, an audience and a job for each slot, so producing the asset is execution rather than invention.",
      ),
      s(
        "Plan at two resolutions",
        "Themes for the year, slot-level detail for the current quarter. Detail beyond that is guesswork that will be rewritten, and no detail at all is the state most calendars are actually in.",
      ),
    ],
    related: {
      features: ["annual-calendar", "content-briefs", "batch-approval"],
      guides: ["90-day-content-plan"],
      articles: ["the-daily-decision-is-the-cost"],
      useCases: ["fill-an-empty-calendar"],
    },
    close: close(
      "Decide once, not every morning",
      "Mengo themes the year by month and week, and every slot arrives with a brief attached rather than a date and an empty box. Join our waitlist for early access.",
    ),
  },

  "editorial-calendar": {
    intro:
      "An editorial calendar organises content by argument rather than by date. Where a content calendar answers when, an editorial calendar answers what case is being built — which is the difference between thirty posts and one sustained position.",
    explain: [
      s(
        "One argument a month, several angles a week",
        "A month spent on a single claim, approached from the objection, the proof, the contrast and the story, reads as depth. The same month spread across four unrelated topics reads as noise, whatever the quality of each piece.",
      ),
      s(
        "It makes repetition deliberate",
        "Readers see a fraction of what you publish, so repeating a claim is necessary rather than lazy. Planning editorially lets you repeat the argument while varying the entry point, which is what makes repetition land as reinforcement.",
      ),
    ],
    related: {
      features: ["campaign-themes", "annual-calendar", "content-briefs"],
      guides: ["90-day-content-plan"],
      articles: ["why-your-content-does-not-compound"],
      useCases: ["plan-a-year-of-content"],
    },
    close: close(
      "Themes before dates",
      "Mengo assigns each month one argument and each week an angle on it, which is what turns a publishing schedule into a case. Join our waitlist for early access.",
    ),
  },

  "content-pillar": {
    intro:
      "A pillar is a subject you return to often enough that people start associating it with you. Three or four give an audience a reason to expect something specific; a dozen give them no reason to expect anything.",
    explain: [
      s(
        "Derive them from positioning, not from interest",
        "The test is whether a pillar supports the claim you are making about your business. Topics that are merely interesting to you produce an engaged audience for the topic and no recognition for the offer.",
      ),
      s(
        "Distribute, do not alternate rigidly",
        "Rotating pillars strictly by week makes content feel administrative. Weighting them — a dominant pillar with two supporting ones — reads as a point of view rather than a rota.",
      ),
    ],
    related: {
      features: ["campaign-themes", "positioning-generator", "annual-calendar"],
      guides: ["90-day-content-plan", "positioning-framework"],
      articles: ["content-that-only-you-could-write"],
    },
    close: close(
      "A small number of things, said well",
      "Pillars are derived from your positioning and used to distribute calendar slots, so the year adds up to something recognisable. Join our waitlist for early access.",
    ),
  },

  "campaign-theme": {
    intro:
      "A campaign theme is the single argument everything in a period is making. It is the reason a month of assets reinforces rather than repeats, and its absence is why so much consistent publishing still accumulates into nothing.",
    explain: [
      s(
        "One claim, many entry points",
        "The theme is the destination; the angles are the routes. A story, a breakdown, a comparison and an objection answer can all arrive at the same claim without any of them reading like the others.",
      ),
      s(
        "It gives you a stopping condition",
        "A theme has a beginning and an end, which is what allows you to judge whether it worked and to move on. Content produced without one has no natural point of review, so it never gets reviewed.",
      ),
    ],
    related: {
      features: ["campaign-themes", "campaign-briefs", "content-briefs"],
      guides: ["90-day-content-plan", "launch-checklist"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "A month that argues one thing",
      "Every month in Mengo's calendar is assigned one argument, and each slot takes a different angle on it. Join our waitlist for early access.",
    ),
  },

  campaign: {
    intro:
      "A campaign is bounded work: a defined offer, a defined audience, a defined window and a defined end. The boundaries are what make it a campaign rather than a permanent state, and permanent states are what discounting brands are made of.",
    explain: [
      s(
        "All four decisions come before the assets",
        "Producing creative before the audience and the end condition are settled is how a campaign becomes a set of posts. The four decisions take an hour and determine whether anything produced afterwards can be judged.",
      ),
      s(
        "The end date is the most important one",
        "Campaigns that fade rather than finish leave the offer running quietly forever, which teaches your market to wait. A stated end gives urgency a legitimate basis rather than a manufactured one.",
      ),
    ],
    related: {
      features: ["campaign-briefs", "channel-sequencing", "campaign-retrospectives"],
      guides: ["launch-checklist"],
      articles: ["what-quiet-months-are-for"],
      products: ["campaign-lab"],
    },
    close: close(
      "Four decisions, then a campaign",
      "Campaign Lab requires the offer, the audience, the window and the end condition before it generates anything at all. Join our waitlist for early access.",
    ),
  },

  "promotional-calendar": {
    intro:
      "A promotional calendar plans offers across a year rather than one at a time. Planned individually, promotions cluster on whoever is easiest to reach, and the same audience receives four discounts in six weeks without anyone deciding that should happen.",
    explain: [
      s(
        "Spacing is derived from the buying cycle",
        "Offers made more often than customers buy train people to wait. The correct gap is a function of how long a purchase decision takes in your category, not of how the quarter is going.",
      ),
      s(
        "Plan the non-promotional months too",
        "A calendar that only marks the offers leaves the rest of the year undefined, which is how a business ends up with nothing to say between promotions and then promotes again to fill the silence.",
      ),
    ],
    related: {
      features: ["promotional-calendars", "seasonality-planning", "offer-architecture"],
      guides: ["seasonal-planning-playbook", "offer-ladder-framework"],
      articles: ["what-quiet-months-are-for"],
      useCases: ["plan-a-seasonal-campaign"],
    },
    close: close(
      "Offers spaced on purpose",
      "Mengo derives offer spacing from your buying cycle and tracks it per segment, so no audience receives three promotions in a row. Join our waitlist for early access.",
    ),
  },

  seasonality: {
    intro:
      "Seasonality is the predictable shape of your year. Every business has one — a peak, a trough, a period when nobody answers email — and the plans that fail are the ones that assume a flat twelve months of equal capacity and equal demand.",
    explain: [
      s(
        "Schedule backwards from the peak",
        "Preparation for a peak has to happen before the peak, in a period when there is time. Working forwards from today produces plans that arrive during the busiest fortnight of the year, which is when they get abandoned.",
      ),
      s(
        "Troughs are production windows",
        "The quiet period is the only time evergreen assets, list hygiene and next year's planning can realistically be done. Treating it as downtime rather than as capacity is the most common seasonal mistake.",
      ),
    ],
    related: {
      features: ["seasonality-planning", "promotional-calendars", "annual-calendar"],
      guides: ["seasonal-planning-playbook"],
      articles: ["what-quiet-months-are-for"],
      useCases: ["plan-a-seasonal-campaign"],
    },
    close: close(
      "Plan around the year you actually have",
      "Seasonality planning shapes calendar intensity and places production work in the periods where it can be done. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Content mechanics ---------------- */

  repurposing: {
    intro:
      "Repurposing takes one idea and expresses it properly in several places. The failure mode is obvious to anyone reading: the same paragraphs reformatted for four platforms, none of which they were written for.",
    explain: [
      s(
        "Work from the claim, not from the draft",
        "Going back to the underlying argument and writing it natively for the next format produces something that belongs there. Cutting an article into slides produces slides that read like a cut-up article.",
      ),
      s(
        "Different formats reach different people",
        "The audience overlap between a newsletter and a short video is smaller than most businesses assume, which is what makes repurposing worth doing at all. It is reach, not economy.",
      ),
    ],
    related: {
      features: ["repurposing-engine", "asset-library", "content-briefs"],
      guides: ["content-brief-template"],
      articles: ["repurposing-is-not-reposting"],
      useCases: ["repurpose-one-idea-into-ten"],
    },
    close: close(
      "One idea, written properly four times",
      "The Repurposing Engine works from the underlying claim and generates each format to its own anatomy rather than reformatting a finished draft. Join our waitlist for early access.",
    ),
  },

  "evergreen-content": {
    intro:
      "Evergreen content is written to still be true in two years. It is the only content that accumulates rather than expiring, and it is consistently deprioritised because nothing about it feels urgent on the day it could be written.",
    explain: [
      s(
        "It is the only content that compounds",
        "A timely post is finished within a week. An evergreen page keeps arriving in search results, keeps being linked, and keeps being repurposed. The return is slow enough that most businesses stop before it starts.",
      ),
      s(
        "Evergreen still needs maintenance",
        "Prices change, tools change, regulations change. A yearly review of the pages that carry the most traffic is what keeps evergreen content an asset rather than a slowly ageing liability.",
      ),
    ],
    related: {
      features: ["long-form-drafting", "seasonality-planning", "content-performance"],
      guides: ["local-seo-checklist", "90-day-content-plan"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "The work that keeps earning",
      "Mengo schedules evergreen production into the quiet periods, because it is precisely the work that never survives a busy month. Join our waitlist for early access.",
    ),
  },

  "asset-format": {
    intro:
      "A format is a set of structural rules, not a container. A carousel, a reel script and a nurture email each have their own anatomy, their own length constraint and their own definition of success, and ignoring that is why so much repurposed content underperforms.",
    explain: [
      s(
        "The anatomy is the useful part",
        "Knowing that a carousel opens by stating the outcome and closes with one action is more useful than knowing it has eight slides. Structure is what makes ordinary writing work in a format that is unforgiving of it.",
      ),
      s(
        "Formats change what an idea can be",
        "Some arguments need eight hundred words and cannot survive a caption. Choosing the format before the idea produces content shaped by the container, which is the wrong way round.",
      ),
    ],
    related: {
      features: ["asset-library", "repurposing-engine", "content-briefs"],
      guides: ["content-brief-template"],
      articles: ["write-for-the-format"],
    },
    close: close(
      "Written to the format, not into it",
      "The asset library defines the anatomy of every format Mengo produces, and Content Studio writes to that structure. Join our waitlist for early access.",
    ),
  },

  "search-intent": {
    intro:
      "Search intent is the job behind the query. Two people typing similar words can want completely different things — a definition, a comparison, a supplier — and a page that answers the wrong one will not rank however well it is written.",
    explain: [
      s(
        "The results page tells you the intent",
        "What already ranks is the search engine's own answer to what the query means. If the first page is all definitions and you have written a sales page, the mismatch is settled before you publish.",
      ),
      s(
        "One page, one intent",
        "Pages that try to define, compare and sell at once satisfy none of the three. Splitting them produces pages that each rank for something, and lets you link between them.",
      ),
    ],
    related: {
      features: ["long-form-drafting", "content-briefs", "landing-page-copy"],
      guides: ["local-seo-checklist"],
      articles: ["write-for-the-format"],
      assetTypes: ["seo-article", "comparison-article"],
    },
    close: close(
      "One question, answered properly",
      "Mengo writes each page to a single intent, working from an intent map produced from your actual services. Join our waitlist for early access.",
    ),
  },

  "long-tail-keyword": {
    intro:
      "Long-tail queries are longer, more specific and less contested. They are searched by fewer people, and the people searching them are much closer to acting — which is the trade that makes them the only realistic search strategy for most small businesses.",
    explain: [
      s(
        "Specific queries convert because they self-qualify",
        "Someone searching a precise problem with a location or a constraint attached has already narrowed their own options. The page has less persuading to do because the search did most of it.",
      ),
      s(
        "Volume figures understate them",
        "Keyword tools report near-zero volume for many specific phrases while a steady trickle of them collectively produces meaningful traffic. Dismissing them on reported volume is a common and expensive misreading.",
      ),
    ],
    related: {
      features: ["content-briefs", "long-form-drafting", "landing-page-copy"],
      guides: ["local-seo-checklist"],
      articles: ["why-your-content-does-not-compound"],
      assetTypes: ["seo-article", "location-page"],
    },
    close: close(
      "Win the queries you can actually win",
      "The intent map prioritises specific, winnable queries for early search work rather than the competitive terms everyone bids on. Join our waitlist for early access.",
    ),
  },

  "internal-linking": {
    intro:
      "Internal linking is how the pages you already own support each other. It is entirely within your control, costs nothing, and is the difference between an archive that works and a folder of pages that each stand alone.",
    explain: [
      s(
        "Link at writing time, not afterwards",
        "Retrofitting links across an archive is a project nobody completes. Deciding what a page should link to while it is being written keeps the graph connected as it grows.",
      ),
      s(
        "Links should be useful to a reader first",
        "A link inserted for search value and no reader value is visible as such. The reliable test is whether the linked page is genuinely the next thing this reader would want.",
      ),
    ],
    related: {
      features: ["content-briefs", "long-form-drafting", "asset-library"],
      guides: ["local-seo-checklist", "content-brief-template"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "An archive that connects itself",
      "Related links are planned at draft time as part of the brief, so the connections exist when the page publishes rather than being added later. Join our waitlist for early access.",
    ),
  },

  "canonical-url": {
    intro:
      "A canonical URL nominates the definitive version of a page. Sites accumulate near-duplicates without meaning to — tracking parameters, print views, paginated variants — and without a canonical those copies quietly compete with each other.",
    explain: [
      s(
        "Duplicates are usually accidental",
        "Almost nobody publishes the same page twice on purpose. They arrive through campaign parameters, category paths and content management defaults, which is why the tag matters even on a small, carefully-built site.",
      ),
      s(
        "It is a declaration, not an instruction",
        "Search engines treat the tag as a strong hint rather than an order. Conflicting signals — internal links pointing at the non-canonical version, for instance — can override it, so the rest of the site has to agree with the tag.",
      ),
    ],
    related: {
      features: ["content-briefs", "asset-library"],
      guides: ["local-seo-checklist"],
      articles: ["why-your-content-does-not-compound"],
      glossary: ["meta-description", "schema-markup"],
    },
    close: close(
      "Declared on every page here",
      "This site sets a canonical on every indexable URL and checks it at build time, which is the standard Mengo applies to the pages it generates. Join our waitlist for early access.",
    ),
  },

  "meta-description": {
    intro:
      "A meta description is a sales line for a search result. It does not influence whether the page ranks, and it heavily influences whether the person who saw it ranked chooses your result over the four around it.",
    explain: [
      s(
        "It is often rewritten for you",
        "Search engines frequently substitute their own snippet when the description does not match the query. A well-written description still matters: it is what gets used when it does match, which is on your most valuable queries.",
      ),
      s(
        "Uniqueness is the low bar most sites fail",
        "Duplicated descriptions across dozens of pages are the norm on template-driven sites. Every page here derives its own from the record's summary, and the build fails when two collide.",
      ),
    ],
    related: {
      features: ["content-briefs", "landing-page-copy"],
      guides: ["local-seo-checklist"],
      glossary: ["canonical-url", "click-through-rate"],
    },
    close: close(
      "Written per page, checked at build",
      "Mengo generates a description per page from the page's own summary rather than from a site-wide template. Join our waitlist for early access.",
    ),
  },

  "schema-markup": {
    intro:
      "Schema markup describes a page to a machine. It states, in a format search engines read directly, that this block is a question and answer, this is a breadcrumb trail, this is an article with an author and a date.",
    explain: [
      s(
        "It makes richer results possible, not certain",
        "Valid markup is a requirement for expanded search listings, not a guarantee of them. Treating it as a ranking lever leads to disappointment; treating it as a prerequisite for eligibility is accurate.",
      ),
      s(
        "It has to match what is on the page",
        "Markup that describes questions the page does not contain is a policy problem as well as a technical one. The safe rule is to generate it from the same data that renders the visible content.",
      ),
    ],
    related: {
      features: ["content-briefs", "asset-library"],
      guides: ["local-seo-checklist"],
      glossary: ["canonical-url", "meta-description"],
    },
    close: close(
      "Generated from the content itself",
      "Every page type on this site emits schema built from the same records that render the page, so the two cannot disagree. Join our waitlist for early access.",
    ),
  },

  "core-web-vitals": {
    intro:
      "Core Web Vitals measure three things a visitor feels immediately: how long until the main content appears, how quickly the page responds when touched, and whether anything moves under their finger while they read.",
    explain: [
      s(
        "The reader notices before the ranking does",
        "A page that takes four seconds to become useful loses visitors regardless of where it ranks. The search benefit is real and secondary to the plain fact that slow pages are abandoned.",
      ),
      s(
        "Layout shift is the most preventable failure",
        "Images without reserved dimensions and late-loading banners push content around as the reader starts. Reserving space is a small technical discipline with a disproportionate effect on whether a page feels trustworthy.",
      ),
    ],
    related: {
      features: ["landing-page-copy"],
      guides: ["landing-page-checklist"],
      glossary: ["above-the-fold", "landing-page"],
    },
    close: close(
      "Speed is part of the conversion path",
      "Mengo does not host your site, so this sits with your infrastructure — but it is defined here because it changes whether the copy gets read at all. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Conversion ---------------- */

  "landing-page": {
    intro:
      "A landing page exists to support one decision. Everything on it either helps the reader make that decision or competes with it, and the discipline of the format is entirely in what gets left off.",
    explain: [
      s(
        "Remove the alternatives",
        "Navigation, related links and secondary offers each give a hesitant reader somewhere else to go. A page with one route through it converts better than the same content with an escape route beside every paragraph.",
      ),
      s(
        "Each section should answer one objection",
        "Sections added because a page felt short add length without persuasion. The reliable structure is a sequence of hesitations answered in the order they occur to the reader.",
      ),
    ],
    related: {
      features: ["landing-page-copy", "objection-mapping", "decision-rules"],
      guides: ["landing-page-checklist"],
      articles: ["your-landing-page-asks-for-too-much"],
      useCases: ["write-landing-page-copy"],
    },
    close: close(
      "One page, one decision",
      "Landing page copy is generated against the single decision the page exists for, with each section justified by the objection it removes. Join our waitlist for early access.",
    ),
  },

  "call-to-action": {
    intro:
      "A call to action names the next step. Its job is not to be persuasive but to be unambiguous: the reader should know exactly what happens if they act, and the size of the ask should match how much they currently trust you.",
    explain: [
      s(
        "Specific beats enthusiastic",
        "Get in touch and learn more ask the reader to work out what happens next. Book a twenty-minute call or download the two-page checklist do not, and the difference in response is consistent enough to rely on.",
      ),
      s(
        "One per asset",
        "Two actions in the same piece split attention and reliably reduce both. If a second action genuinely matters, it belongs on the page the first one leads to.",
      ),
    ],
    related: {
      features: ["landing-page-copy", "email-copywriting", "offer-architecture"],
      guides: ["landing-page-checklist", "offer-ladder-framework"],
      articles: ["your-landing-page-asks-for-too-much"],
    },
    close: close(
      "One action, sized to the reader",
      "Every asset Mengo generates ends with a single action chosen against the reader's current level of commitment. Join our waitlist for early access.",
    ),
  },

  "above-the-fold": {
    intro:
      "Above the fold is whatever a reader sees before deciding to scroll. The exact boundary varies by device and hardly matters; what matters is that this is the region in which the page has to prove it is relevant.",
    explain: [
      s(
        "Complete the proposition on a small screen",
        "Most first visits are on a phone, where the visible area holds a headline and perhaps two lines. If the proposition needs a subheading and three paragraphs to make sense, most readers will never assemble it.",
      ),
      s(
        "It is not an argument for cramming",
        "Compressing everything above the boundary produces a wall nobody reads. The target is one clear statement of what this is and who it is for, with a visible reason to continue.",
      ),
    ],
    related: {
      features: ["hook-writer", "landing-page-copy"],
      guides: ["landing-page-checklist"],
      articles: ["your-landing-page-asks-for-too-much"],
      glossary: ["hook", "landing-page"],
    },
    close: close(
      "The first screen has to carry it",
      "Mengo structures landing copy so the opening section completes the proposition on a phone rather than assuming a desktop reader. Join our waitlist for early access.",
    ),
  },

  hook: {
    intro:
      "A hook is the first line, and on a feed it is the entire decision. Everything after it is read only by people the hook already convinced, which makes it the highest-leverage sentence in any asset and the one most often written last.",
    explain: [
      s(
        "Specificity, not exaggeration",
        "A hook works by promising something precise enough to be worth the next ten seconds. Overstating creates a gap between the opening and the body, and readers who feel that gap do not return for the next post.",
      ),
      s(
        "Vary the angle, not the wording",
        "Rewriting the same opening five ways tests punctuation. Writing five genuinely different entry points — the objection, the number, the story, the contrast, the admission — tests something you can learn from.",
      ),
    ],
    related: {
      features: ["hook-writer", "short-form-scripts", "content-performance"],
      guides: ["linkedin-founder-playbook", "instagram-reels-playbook"],
      articles: ["hooks-are-not-clickbait"],
    },
    close: close(
      "Ranked options, not one guess",
      "The Hook Writer generates options that vary the angle rather than the phrasing, so the choice is between approaches. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Testing and paid ---------------- */

  "ab-testing": {
    intro:
      "An A/B test compares two versions to learn which performs better. At small traffic volumes the honest constraint is that most differences will never reach a conclusion, which makes what you choose to test more important than how you run it.",
    explain: [
      s(
        "Test the argument, not the adjective",
        "Swapping a word rarely produces a difference large enough to detect. Changing the claim, the offer or the audience produces effects big enough to see at modest volumes, and teaches you something transferable.",
      ),
      s(
        "Decide the sample before you start",
        "Watching a test until it looks favourable and stopping there is not an experiment, it is a search for a comfortable moment. Setting the window and the volume in advance is what makes the result mean anything.",
      ),
    ],
    related: {
      features: ["experiment-log", "ad-concepting", "landing-page-copy"],
      guides: ["metric-selection-framework"],
      articles: ["testing-adjectives-teaches-nothing"],
    },
    close: close(
      "Tests that can actually resolve",
      "Mengo builds test sets that isolate the claim and sizes them against your traffic, so a result is reachable rather than theoretical. Join our waitlist for early access.",
    ),
  },

  experiment: {
    intro:
      "A marketing experiment is a change made deliberately, with a written expectation and an end date. The written expectation is the whole difference between an experiment and simply doing something new and hoping.",
    explain: [
      s(
        "Record the negative results",
        "Ideas that did not work are the most valuable entries in the log, because they are the ones that will otherwise be proposed again in eighteen months by someone who was not there.",
      ),
      s(
        "One change at a time, where you can",
        "Changing the channel, the offer and the creative together produces a result you cannot attribute. Where circumstances force a combined change, note that in the log so the conclusion is not over-read later.",
      ),
    ],
    related: {
      features: ["experiment-log", "review-cadence", "decision-rules"],
      guides: ["monthly-review-template"],
      articles: ["testing-adjectives-teaches-nothing"],
    },
    close: close(
      "A record that outlives the quarter",
      "The experiment log keeps hypothesis, change, result and conclusion together, including the ones that failed. Join our waitlist for early access.",
    ),
  },

  "creative-fatigue": {
    intro:
      "Creative fatigue is the predictable decline that happens as the same audience sees the same advertisement repeatedly. It is not a sign the creative was wrong; it is a property of finite audiences, and it arrives faster the smaller the audience is.",
    explain: [
      s(
        "Plan the refresh, do not react to it",
        "Waiting for performance to fall before producing new creative guarantees a gap where results are poor and nothing is ready. A refresh cadence set in advance keeps the next set queued before it is needed.",
      ),
      s(
        "Refresh the angle, not just the image",
        "New visuals over the same argument buy a short reprieve. A genuinely different angle on the same offer resets attention properly, which is why fatigue is a content problem more than a design one.",
      ),
    ],
    related: {
      features: ["ad-concepting", "campaign-briefs", "promotional-calendars"],
      guides: ["launch-checklist"],
      articles: ["testing-adjectives-teaches-nothing"],
      channels: ["meta-ads"],
    },
    close: close(
      "The next set, before you need it",
      "Mengo builds a scheduled creative refresh into paid planning rather than leaving it as a response to a falling number. Join our waitlist for early access.",
    ),
  },

  retargeting: {
    intro:
      "Retargeting advertises to people who already visited. It is efficient because the audience is pre-qualified by their own behaviour, and it is easy to overdo because that same efficiency makes it tempting to keep spending.",
    explain: [
      s(
        "Frequency caps are a brand decision",
        "An advert seen twenty times by someone who chose not to buy stops being a reminder and becomes an irritation attached to your name. Capping frequency costs a little reach and protects something harder to rebuild.",
      ),
      s(
        "Recency should change the message",
        "Someone who visited yesterday and someone who visited two months ago need different things. Tiering the audience by recency lets the message match the state rather than repeating one offer to everyone.",
      ),
    ],
    related: {
      features: ["ad-concepting", "intent-segmentation", "campaign-briefs"],
      guides: ["launch-checklist"],
      channels: ["meta-ads", "google-ads"],
      assetTypes: ["retargeting-sequence"],
    },
    close: close(
      "Tiered by recency, capped by frequency",
      "Mengo plans retargeting as a sequence with defined tiers and a frequency limit rather than as one audience shown one advert indefinitely. Join our waitlist for early access.",
    ),
  },

  "lookalike-audience": {
    intro:
      "A lookalike audience is built by an advertising platform to resemble a list you supply. The modelling is done for you; the only part you control is the source list, and that control determines almost everything about the result.",
    explain: [
      s(
        "Source quality is the whole lever",
        "A lookalike modelled on everyone who ever purchased includes your worst customers. One modelled on your highest-value, longest-retained customers describes a much more useful population, and the lists are usually the same size.",
      ),
      s(
        "It cannot invent demand",
        "Lookalikes find more people resembling your customers. Where the constraint is that few people want the offer at all, a better audience will not fix it, and spending more to reach them makes the problem more expensive.",
      ),
    ],
    related: {
      features: ["audience-segments", "ad-concepting", "metric-selection"],
      guides: ["channel-selection-framework"],
      channels: ["meta-ads"],
      glossary: ["customer-lifetime-value", "retargeting"],
    },
    close: close(
      "Mengo does not run your ad account",
      "Audience construction stays with you and your platform. What Mengo supplies is the segment definition and the creative angles the audience should be shown. Join our waitlist for early access.",
    ),
  },

  "impression-share": {
    intro:
      "Impression share tells you what proportion of the available auctions you actually appeared in. It converts a vague sense that a campaign is underperforming into one of two specific diagnoses: you are being outbid, or you are not eligible.",
    explain: [
      s(
        "It separates budget from targeting",
        "Low share lost to budget means the demand exists and you stopped paying for it. Low share lost to rank means relevance or bid quality is the constraint. These have entirely different fixes and one number distinguishes them.",
      ),
      s(
        "High share is not automatically good",
        "Owning nearly all impressions on a narrow, low-value term is easy and rarely worth it. Read the share alongside the value of what it is a share of.",
      ),
    ],
    related: {
      features: ["metric-selection", "ad-concepting", "channel-attribution"],
      guides: ["metric-selection-framework"],
      channels: ["google-ads"],
      glossary: ["click-through-rate"],
    },
    close: close(
      "A signal with a decision attached",
      "Where paid search is in your plan, Mengo tracks impression share next to cost per qualified enquiry so the number leads somewhere. Join our waitlist for early access.",
    ),
  },

  "engagement-rate": {
    intro:
      "Engagement rate reports how many people who saw something interacted with it. On every social platform it also influences how many more people are shown it, which makes it a distribution signal rather than a business result.",
    explain: [
      s(
        "Optimising it directly is a trap",
        "Content designed to provoke reactions reliably produces reactions, and just as reliably produces an audience assembled around the provocation rather than around the offer. The engagement is real and the audience is the wrong one.",
      ),
      s(
        "Read it against the asset's job",
        "An awareness post and a bottom-of-funnel explainer should not be held to the same engagement standard. Judging both by one number is how the useful content gets cut for underperforming.",
      ),
    ],
    related: {
      features: ["content-performance", "metric-selection", "annual-calendar"],
      guides: ["metric-selection-framework"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "Scored against the job it was given",
      "Content Performance judges an asset against the slot job it was assigned, so a deliberately quiet post is not read as a failure. Join our waitlist for early access.",
    ),
  },

  "watch-through-rate": {
    intro:
      "Watch-through rate is the proportion of a video an average viewer sees before leaving. On short-form platforms it is the dominant distribution signal, which makes editing discipline more valuable than production budget.",
    explain: [
      s(
        "The first three seconds decide the rest",
        "Most of the drop-off happens immediately. A strong opening frame and a spoken first line that states the payoff do more for the average than any improvement to the middle of the video.",
      ),
      s(
        "Shorter is usually the honest fix",
        "A ninety-second video that holds forty per cent will be distributed less than a forty-second version of the same idea that holds eighty. Cutting is almost always available and almost always resisted.",
      ),
    ],
    related: {
      features: ["short-form-scripts", "hook-writer", "content-performance"],
      guides: ["instagram-reels-playbook"],
      channels: ["tiktok", "youtube"],
      assetTypes: ["tiktok-script", "instagram-reel-script"],
    },
    close: close(
      "Written to hold, not to fill",
      "Short-form scripts are generated to a length the idea can sustain, with the payoff stated early rather than withheld. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Voice and trust ---------------- */

  "brand-voice": {
    intro:
      "Brand voice is the set of language choices that make content recognisable as yours: the vocabulary you use, the sentence rhythm, the level of formality, the things you refuse to say. It is what makes a year of content read as one business.",
    explain: [
      s(
        "It is documented, or it is imagined",
        "Voice that lives in one person's head cannot be delegated, to a freelancer or to software. Writing down the vocabulary, the rhythm and the banned list is what makes it a constraint rather than a preference.",
      ),
      s(
        "A banned list does more than a style guide",
        "Positive descriptions of voice are hard to apply. A specific list of words and constructions you will not use is immediately actionable and catches most of what makes content sound generic.",
      ),
    ],
    related: {
      features: ["voice-profile", "editorial-guardrails", "batch-approval"],
      guides: ["voice-profile-worksheet"],
      articles: ["ai-content-sounds-the-same"],
      useCases: ["document-your-brand-voice"],
    },
    close: close(
      "A voice profile, enforced at generation",
      "Mengo stores vocabulary, rhythm, formality and a banned list, and applies them as a constraint on every asset rather than as advice. Join our waitlist for early access.",
    ),
  },

  "tone-of-voice": {
    intro:
      "Tone is voice adapted to circumstance. The same business should sound recognisably itself while announcing a launch, apologising for an outage and answering a support question — but not identical across the three.",
    explain: [
      s(
        "Voice is fixed, tone moves",
        "Treating them as the same thing produces either a brand that jokes during a service failure or one that sounds like a legal notice when celebrating something. Separating them makes both problems avoidable.",
      ),
      s(
        "Set tone per situation, not per platform",
        "Platform is a weak predictor. What actually determines the right register is what the reader is doing and feeling — deciding, complaining, browsing — and that cuts across channels.",
      ),
    ],
    related: {
      features: ["voice-profile", "email-copywriting", "editorial-guardrails"],
      guides: ["voice-profile-worksheet"],
      articles: ["ai-content-sounds-the-same"],
      glossary: ["brand-voice"],
    },
    close: close(
      "Same voice, appropriate register",
      "Tone rules are set per asset type inside the voice profile, so a launch email and an apology inherit the same voice with different settings. Join our waitlist for early access.",
    ),
  },

  "editorial-guardrail": {
    intro:
      "An editorial guardrail is a rule about what generated content may claim. The real hazard in AI-assisted marketing is not clumsy prose, which is visible and fixable, but a fluent and entirely invented specific published under your name.",
    explain: [
      s(
        "Constrain facts to what you supplied",
        "Numbers, customer names, credentials and results should come from a store you filled, and a gap should be surfaced as a gap. Content that quietly invents a plausible figure is the failure mode worth designing against.",
      ),
      s(
        "Some industries need a blocked vocabulary",
        "Health, finance, legal and childcare all carry language that cannot be used regardless of whether it would convert. Encoding that once is safer than relying on a reviewer to catch it every time.",
      ),
    ],
    related: {
      features: ["editorial-guardrails", "voice-profile", "batch-approval"],
      guides: ["ai-content-guardrails-checklist"],
      articles: ["the-hallucination-that-matters"],
      products: ["content-studio"],
    },
    close: close(
      "The claim you never made is the risk",
      "Guardrails restrict factual claims to what you supplied and block regulated language for your sector, flagging gaps rather than filling them. Join our waitlist for early access.",
    ),
  },

  "social-proof": {
    intro:
      "Social proof is evidence that other people already chose you. It works in proportion to how specific and checkable it is, which is why a named client with a described outcome outperforms a wall of anonymous five-star ratings.",
    explain: [
      s(
        "Specific proof survives scrutiny",
        "A sophisticated buyer discounts generic praise automatically. A detailed account of what was done, for whom, under what constraints, cannot be discounted the same way because it contains information.",
      ),
      s(
        "Proof you cannot evidence costs more than it earns",
        "An unverifiable claim discovered to be soft undermines everything else on the page. Where proof does not exist yet, publishing the method is a better substitute than inventing the outcome.",
      ),
    ],
    related: {
      features: ["editorial-guardrails", "objection-mapping", "long-form-drafting"],
      guides: ["ai-content-guardrails-checklist"],
      articles: ["marketing-before-product-market-fit"],
      useCases: ["write-case-studies-without-data"],
    },
    close: close(
      "Only the proof you actually hold",
      "Guardrails ensure that testimonials, figures and client names appear only when you supplied them, with gaps flagged for you to fill. Join our waitlist for early access.",
    ),
  },

  "objection-handling": {
    intro:
      "Objection handling means answering the specific reasons someone has not to proceed, before they have to raise them. Done well it is indistinguishable from being helpful; done badly it is the pitch repeated at higher volume.",
    explain: [
      s(
        "Objections are finite and knowable",
        "Almost every business faces the same four or five hesitations over and over. Writing them down turns follow-up from improvisation into a sequence with a defined job for each message.",
      ),
      s(
        "The stated objection is often not the real one",
        "Price is the most common stated reason and frequently a proxy for uncertainty about outcome, timing or internal approval. Answering the stated version alone leaves the actual blocker untouched.",
      ),
    ],
    related: {
      features: ["objection-mapping", "sequence-builder", "sales-handoff-notes"],
      guides: ["objection-map-template"],
      articles: ["price-objections-are-rarely-about-price"],
      useCases: ["handle-price-objections"],
    },
    close: close(
      "One objection, one message",
      "Objection mapping assigns each nurture message exactly one hesitation to dissolve, which is what gives a sequence direction. Join our waitlist for early access.",
    ),
  },

  "offer-ladder": {
    intro:
      "An offer ladder is the set of increasing commitments available to someone who is interested. Without one, a business asks strangers to make its largest decision as their first decision, and most of them decline.",
    explain: [
      s(
        "Each rung needs a qualifying step",
        "A ladder is only useful if there is a defined signal that someone is ready to move up: a completed session, a result achieved, a question asked. Rungs without that become a price list rather than a path.",
      ),
      s(
        "More rungs is not better",
        "Three well-defined steps beat seven blurred ones. Each additional rung has to be worth explaining, delivering and maintaining, and most businesses find the third one is where the returns stop.",
      ),
    ],
    related: {
      features: ["offer-architecture", "lead-magnet-builder", "promotional-calendars"],
      guides: ["offer-ladder-framework"],
      articles: ["price-objections-are-rarely-about-price"],
      glossary: ["payback-period", "lead-magnet"],
    },
    close: close(
      "A path, not a price list",
      "Offer Architecture designs the rungs and defines what qualifies someone to move up one, so the ladder is operable rather than theoretical. Join our waitlist for early access.",
    ),
  },

  "minimum-viable-audience": {
    intro:
      "A minimum viable audience is the smallest group that could sustain the business if you served them properly. It is a target chosen for reachability rather than for size, which is what makes it usable by a business with no budget.",
    explain: [
      s(
        "Small enough to actually reach",
        "A few hundred people who share a specific situation can be found, addressed directly and served consistently. A market of millions cannot be addressed at all without spending money you do not have.",
      ),
      s(
        "It is a starting point, not a ceiling",
        "Serving a narrow audience well is how a business earns the right to widen. Starting wide to keep options open usually means never being distinctive enough to be chosen by anyone.",
      ),
    ],
    related: {
      features: ["audience-segments", "positioning-generator", "business-brief"],
      guides: ["positioning-framework"],
      articles: ["marketing-before-product-market-fit"],
      solutions: ["pre-launch-startups"],
    },
    close: close(
      "Narrow enough to be reachable",
      "Mengo uses this in the positioning layer to resist describing a market broader than you could serve if it responded. Join our waitlist for early access.",
    ),
  },

  "location-page": {
    intro:
      "A location page targets a place you serve. Done properly it is one of the most reliable sources of local enquiries; done as a template with the town name swapped, it is a page that ranks for nothing and convinces nobody.",
    explain: [
      s(
        "It needs information only a local would have",
        "Named neighbourhoods, travel times, local constraints, work you have actually done nearby. This is the substance that distinguishes a real page from a generated one, and it cannot be produced without input from you.",
      ),
      s(
        "Fewer, better pages",
        "Ten genuine location pages outperform sixty thin ones, and carry none of the risk that comes with publishing a large set of near-identical pages.",
      ),
    ],
    related: {
      features: ["landing-page-copy", "content-briefs", "editorial-guardrails"],
      guides: ["local-seo-checklist"],
      articles: ["why-your-content-does-not-compound"],
      useCases: ["build-a-local-seo-page-set"],
    },
    close: close(
      "Local substance, requested not invented",
      "Mengo requires genuine local detail for each page and flags the ones that lack it rather than filling the gap with plausible text. Join our waitlist for early access.",
    ),
  },
};
