import type { DepthMap } from "@/data/depth";
import { close } from "@/data/depth";

/**
 * Article depth.
 *
 * Each piece already argues one position across four sections. What was missing
 * was an opening that tells a reader whether this argument is aimed at their
 * situation, and a short set of conclusions they can act on without re-reading.
 * The closing copy is written per article rather than per page type.
 */
export const articleDepth: DepthMap = {
  "ai-content-sounds-the-same": {
    intro:
      "This is aimed at anyone who has used a generation tool, been reasonably pleased with the first output, and then noticed that the twentieth one felt oddly familiar. The uniformity is real and it is not primarily a prose problem, which is why editing harder does not fix it.",
    takeaways: [
      "The signature of generated content is structural sameness, not word choice.",
      "Uniformity comes from generating everything against the same context-free prompt.",
      "Variation has to be designed in — different formats, angles and jobs — rather than requested.",
      "Voice works as an enforced constraint with a banned list, not as an adjective in an instruction.",
    ],
    close: close(
      "Structure is what varies, or nothing does",
      "Mengo generates each asset from a slot that already differs in theme, audience and format. Join our waitlist for early access.",
    ),
  },

  "marketing-when-you-are-the-business": {
    intro:
      "Written for people who deliver the work as well as sell it. Most marketing advice assumes an available afternoon; this argues that a plan which only works in a calm week is a plan for a week you are not going to have.",
    takeaways: [
      "Marketing and delivery compete daily, and delivery correctly wins on most days.",
      "Plan against your worst week rather than your best one, or the plan collapses on schedule.",
      "Automate the follow-up before the publishing — it is where the unworked return is.",
      "Batch everything else, because context loading is the real cost of a daily habit.",
    ],
    close: close(
      "Built for the week you have no time",
      "Mengo sizes the plan to the capacity you declare rather than to an ideal week. Join our waitlist for early access.",
    ),
  },

  "marketing-is-a-systems-problem": {
    intro:
      "If your marketing has stopped and restarted several times and you have concluded the problem is you, this piece disagrees. The pattern is too consistent across too many different people to be about individual discipline.",
    takeaways: [
      "The stop-start pattern is structural: marketing is the only function with no external deadline.",
      "Advice to be more consistent describes the outcome and calls it a method.",
      "The expensive part is deciding what to publish, not publishing it.",
      "Settle the decision once, in advance, and consistency stops requiring willpower.",
    ],
    close: close(
      "Change the structure, not the resolve",
      "Deciding the year once is what removes the daily argument with yourself. Join our waitlist for early access.",
    ),
  },

  "the-daily-decision-is-the-cost": {
    intro:
      "For anyone who has kept a content habit for three weeks and then quietly stopped. The usual explanation is that writing takes too long; this argues that the writing was never the part that exhausted you.",
    takeaways: [
      "Choosing what to write consumes more energy than writing it.",
      "A blank page carries a decision cost that recurs every single day.",
      "A useful slot carries the audience, the claim, the format and the job before anyone writes.",
      "Decide in batches and execute in batches, so the deciding happens once a month.",
    ],
    close: close(
      "Remove the decision, keep the output",
      "Every slot Mengo generates arrives with a brief attached rather than a date and an empty box. Join our waitlist for early access.",
    ),
  },

  "the-hallucination-that-matters": {
    intro:
      "Written for anyone using generation on customer-facing material, particularly in a regulated sector. The risk everyone discusses is the obviously wrong answer; the risk worth designing against is the one that reads exactly like the true sentences around it.",
    takeaways: [
      "Obvious errors are safe because they are caught. Plausible ones are not.",
      "Marketing is high-risk because the reviewer often cannot verify a claim about their own business quickly.",
      "Constrain what may be claimed at generation time rather than relying on review.",
      "Some categories — clinical, legal, financial — require a qualified human regardless of guardrails.",
    ],
    close: close(
      "Constrain rather than review",
      "Editorial Guardrails restrict claims to what you supplied and mark the gaps. Join our waitlist for early access.",
    ),
  },

  "be-everywhere-is-bad-advice": {
    intro:
      "For anyone maintaining six accounts and feeling behind on all of them. The advice to be present everywhere is a description of what a nine-person marketing team can afford, repeated to people running a business alone.",
    takeaways: [
      "Multi-channel advice describes large-team capacity, not a strategy for a small business.",
      "The cost is context switching between platforms with different mechanics, not the posting itself.",
      "One primary, one secondary and one experiment is the shape that survives a busy quarter.",
      "Write down what you are not doing; an unwritten no gets reversed within a fortnight.",
    ],
    close: close(
      "Three channels, chosen and defended",
      "Channel Ranking commits you to a shape and names what is paused. Join our waitlist for early access.",
    ),
  },

  "the-quiet-period-you-are-waiting-for": {
    intro:
      "If your plan is to start marketing properly once things calm down, this piece is about why that particular quarter keeps not arriving — and why the arithmetic of pipeline lag makes waiting more expensive than starting badly.",
    takeaways: [
      "The calm period is produced by the marketing you are deferring until it arrives.",
      "Pipeline lag means today's silence is paid for two quarters from now.",
      "Each restart loses the compounding the previous attempt had begun to build.",
      "A smaller commitment you can hold beats a larger one you will abandon.",
    ],
    close: close(
      "Start smaller rather than later",
      "A plan sized to a busy month is the one that survives the month you were waiting to get through. Join our waitlist for early access.",
    ),
  },

  "your-landing-page-asks-for-too-much": {
    intro:
      "For anyone with a page that describes the offer accurately and converts poorly. The usual diagnosis is weak copy; more often the page is asking a visitor to make three decisions and getting none of them.",
    takeaways: [
      "A landing page supports one decision, and is defined by what it excludes.",
      "Every section should be justified by the objection it removes, not by the template offering it.",
      "Order sections by when the objection surfaces in a real conversation.",
      "Repeat the call to action in identical wording; varied phrasing reads as different actions.",
    ],
    close: close(
      "One decision, defended section by section",
      "Landing Page Copy is generated against the single decision and the mapped objections. Join our waitlist for early access.",
    ),
  },

  "hooks-are-not-clickbait": {
    intro:
      "Written for people who find hook-writing advice slightly distasteful. That instinct is usually a reaction to overpromising rather than to hooks themselves, and separating the two makes the objection more useful.",
    takeaways: [
      "A hook is necessary because the opening line is the entire decision on a feed.",
      "A hook is dishonest when the body does not pay it off, not when it is compelling.",
      "Specificity outperforms drama and costs nothing in credibility.",
      "Write the opening last, once you know what the piece actually argues.",
    ],
    close: close(
      "Compelling and honest are compatible",
      "Guardrails reject openings the asset does not deliver, which protects the thing that compounds. Join our waitlist for early access.",
    ),
  },

  "a-chatbot-is-not-a-strategy": {
    intro:
      "For anyone who tried a general assistant for marketing, got a good post, and could not work out why the results stopped feeling useful by week three. The drafting was genuinely solved; the deciding was not.",
    takeaways: [
      "General assistants solved drafting, which was never the expensive part.",
      "Deciding which post, for whom, this week, remains unsolved by a blank prompt.",
      "Persistent context beats context you retype, because nothing accumulates without it.",
      "A chatbot is the right tool for unstructured, one-off thinking — and a poor one for a recurring system.",
    ],
    close: close(
      "Which post, not just the post",
      "Mengo holds the positioning, the segments and the calendar the post is supposed to serve. Join our waitlist for early access.",
    ),
  },

  "your-positioning-is-a-description": {
    intro:
      "A short test you can apply to your own homepage in about ten seconds. Most businesses fail it, and failing it explains a surprising amount about why their content is harder to write than it should be.",
    takeaways: [
      "If a competitor could publish your positioning unchanged, it is a category description.",
      "Descriptions feel safe because they exclude nobody, which is precisely the problem.",
      "A real position contains something a reasonable competitor would dispute.",
      "You will lose some enquiries, and they will be ones you would have lost later anyway.",
    ],
    close: close(
      "Would a competitor dispute it?",
      "The Positioning Generator drafts a claim rather than a description, from your own brief. Join our waitlist for early access.",
    ),
  },

  "hire-or-tool": {
    intro:
      "Written for the point at which a business decides marketing needs a person. The decision usually turns on a constraint that has not been diagnosed, and diagnosing it wrongly is an expensive mistake in either direction.",
    takeaways: [
      "Knowledge scarcity and time scarcity are different constraints with different answers.",
      "Early hires often spend six months rebuilding a strategy layer that was never written down.",
      "Documenting the strategy first makes a hire productive faster and makes software usable.",
      "Hire regardless when the constraint is judgement, relationships or negotiation.",
    ],
    close: close(
      "Diagnose before you commit",
      "The documentation that makes a hire effective is the same documentation a system needs. Join our waitlist for early access.",
    ),
  },

  "price-objections-are-rarely-about-price": {
    intro:
      "For anyone who has started discounting to close and noticed that the discounted deals still stall. Price is the most commonly stated objection and one of the least commonly real ones.",
    takeaways: [
      "Discounting answers the stated objection and leaves the actual one untouched.",
      "Establish the cost of the status quo before naming the cost of the solution.",
      "A specific price with a specific scope is easier to accept than a vague one.",
      "Sometimes it genuinely is price, and the honest response is a smaller first step rather than a discount.",
    ],
    close: close(
      "Answer the objection behind the objection",
      "Objection Mapping separates the stated hesitation from the real one. Join our waitlist for early access.",
    ),
  },

  "repurposing-is-not-reposting": {
    intro:
      "If your repurposing consists of pasting the same paragraphs into four platforms, this explains why anyone who follows you in two places can tell — and what the version that actually works costs.",
    takeaways: [
      "Reformatted text reads as reformatted text to anyone in your audience overlap.",
      "Work from the underlying idea rather than from the finished artefact.",
      "Each format changes how much depth the idea can carry, which changes the argument.",
      "Space the versions out; publishing all of them in one week defeats the purpose.",
    ],
    close: close(
      "One idea, argued natively four times",
      "The Repurposing Engine starts from the claim rather than the draft. Join our waitlist for early access.",
    ),
  },

  "should-you-disclose-ai": {
    intro:
      "A practical question rather than a philosophical one, aimed at businesses already using generation and unsure whether to mention it. The instinct is concealment; the argument here is that concealment is the fragile option.",
    takeaways: [
      "Concealment is fragile because it fails badly and all at once.",
      "Audiences object to carelessness and invented claims, not to assistance.",
      "A workable framing separates where the tool helps from where judgement stays human.",
      "In some sectors and platforms disclosure is required rather than optional.",
    ],
    close: close(
      "Explicit is more durable than hidden",
      "Mengo's guardrails are designed so the honest version of that statement is true. Join our waitlist for early access.",
    ),
  },

  "the-follow-up-gap": {
    intro:
      "For any business currently trying to generate more leads. Before spending on that, this piece argues the case for checking what happens to the ones already arriving — because in most small businesses the answer is very little.",
    takeaways: [
      "Leads are lost to silence far more often than to competitors or price.",
      "The first reply is always excellent; message four, three weeks later, is where it fails.",
      "Follow-up improvements compound against leads you have already paid to acquire.",
      "Good follow-up is a sequence with one objection per message and a defined end.",
    ],
    close: close(
      "Check the follow-up before buying more leads",
      "More volume into a leaking funnel scales the leak. Join our waitlist and describe where enquiries go quiet.",
    ),
  },

  "founder-brand-without-oversharing": {
    intro:
      "For founders who accept that people follow people and have no intention of writing about their divorce. The confessional style is one option among several, and it is a poor fit for most people and most businesses.",
    takeaways: [
      "Identifiable and confessional are not the same thing, and only the first is required.",
      "Decide your personal boundary once rather than negotiating it with yourself weekly.",
      "Stories from the work are more relevant to a reader than stories from your private life.",
      "What persuades is a consistent position, not personal revelation.",
    ],
    close: close(
      "A position, not a diary",
      "The voice profile stores the personal boundary as a constraint, so it holds. Join our waitlist for early access.",
    ),
  },

  "the-lead-magnet-nobody-wanted": {
    intro:
      "If your download converts poorly, this explains why the failure usually happens before anyone reads it. The promise on the page is doing the damage, and the fix is narrower rather than better.",
    takeaways: [
      "Breadth reads as thinness — a guide to everything promises depth on nothing.",
      "The magnet's real job is to make the next email worth opening.",
      "Finish one problem completely rather than surveying a category.",
      "Ship it with the sequence, or you have collected addresses and nothing else.",
    ],
    close: close(
      "Narrow, finished, and followed up",
      "The Lead Magnet Builder scopes the asset and writes the sequence alongside it. Join our waitlist for early access.",
    ),
  },

  "write-for-the-format": {
    intro:
      "For anyone whose content is competent and underperforms in specific places. Structural mismatch is invisible in a document and obvious in a feed, which is why it survives review and fails on publication.",
    takeaways: [
      "A format is a structure with rules, not a container you pour text into.",
      "Decide the anatomy before writing; it determines what the piece can argue.",
      "Length follows the argument rather than a target word count.",
      "Platform mechanics — truncation, autoplay, sound-off viewing — are part of the format.",
    ],
    close: close(
      "Written to the format, not into it",
      "The asset library defines the anatomy of every format Mengo produces. Join our waitlist for early access.",
    ),
  },

  "prompt-engineering-is-not-the-skill": {
    intro:
      "Aimed at anyone investing serious time in prompt craft. The argument is not that prompting does not matter, but that it is a layer getting cheaper every few months while the layer beneath it becomes more valuable.",
    takeaways: [
      "Prompting keeps getting easier as models improve, which erodes the value of expertise in it.",
      "Knowing what should be produced, for whom and why does not get cheaper.",
      "Judgement about your own market is the scarce input and the one no model holds.",
      "Invest in the strategy layer rather than in phrasing techniques.",
    ],
    close: close(
      "Invest in the layer that does not get cheaper",
      "Mengo holds the strategy the prompt was standing in for. Join our waitlist for early access.",
    ),
  },

  "what-quiet-months-are-for": {
    intro:
      "For seasonal businesses that dread the trough. The months where nothing sells are the only period with enough capacity to build what the peak requires, which reframes them from a revenue problem into a production window.",
    takeaways: [
      "The trough is unassigned capacity rather than wasted time.",
      "Peaks are won or lost during the quiet months that precede them.",
      "Evergreen assets, list hygiene and next year's planning only ever happen here.",
      "Put the work in the calendar as dated items, or the quiet period fills with something else.",
    ],
    close: close(
      "Capacity, not downtime",
      "Seasonality Planning places production in the trough and works backwards from the peak. Join our waitlist for early access.",
    ),
  },

  "how-much-marketing-is-enough": {
    intro:
      "For anyone benchmarking their output against a competitor's feed. The right volume is set by your delivery capacity and your pipeline lag, and both are private numbers a competitor cannot tell you.",
    takeaways: [
      "Start from how many customers you could actually serve, not from a growth target.",
      "Work back through the funnel to an enquiry number, then to a content volume.",
      "Add the lag; today's work produces enquiries a quarter or two from now.",
      "A sustainable cadence held for a year beats a heavy one held for six weeks.",
    ],
    close: close(
      "Enough is a number you can calculate",
      "Mengo sizes the plan from your capacity and cycle rather than from a category average. Join our waitlist for early access.",
    ),
  },

  "speed-is-a-conversion-strategy": {
    intro:
      "For businesses in categories where enquiries arrive urgently — trades, legal, healthcare, local services. The competitive axis most people optimise is quality; in these categories it is frequently response time.",
    takeaways: [
      "In several industries the business that replies first wins regardless of relative quality.",
      "The window is shorter than it feels, often hours rather than days.",
      "Prepared reply scripts and short qualifying questions are what make speed sustainable.",
      "It does not apply everywhere — considered, multi-person purchases are decided differently.",
    ],
    close: close(
      "Fast without sounding automated",
      "Reply scripts and handoff notes remove the pause between an enquiry and a good answer. Join our waitlist for early access.",
    ),
  },

  "the-brief-is-the-bottleneck": {
    intro:
      "For anyone disappointed by output from freelancers, agencies or generation tools. The common factor across all three is upstream of the writer, and until it is fixed, changing the writer changes very little.",
    takeaways: [
      "Disappointing output usually traces to a thin brief rather than to the person writing.",
      "A thin brief names a topic and leaves the claim, the reader and the evidence to be guessed.",
      "The evidence section is the one only your business can fill, and it is the one usually left blank.",
      "Argue about the brief before the draft exists; it is far cheaper than arguing about the draft.",
    ],
    close: close(
      "Fix the input, not the writer",
      "Content Briefs expand each slot into the specification the draft needs. Join our waitlist for early access.",
    ),
  },

  "ai-does-not-remove-the-work": {
    intro:
      "A corrective for anyone expecting generation to free up a day a week. The drafting time genuinely disappears and reappears as deciding and reviewing time, which is a good trade and is not the same as a saving.",
    takeaways: [
      "Time saved on drafting reappears as time spent deciding and reviewing.",
      "It is still a good trade, because deciding and reviewing are higher-value uses of your attention.",
      "The failure mode is budgeting for the saving and not for the moved work.",
      "Plan the review capacity explicitly, or output accumulates unapproved.",
    ],
    close: close(
      "Budget for the work that moved",
      "Batch Approval is designed for the review load that generation creates. Join our waitlist for early access.",
    ),
  },

  "testing-adjectives-teaches-nothing": {
    intro:
      "For anyone running small-scale tests and finding the results uninformative. At modest traffic, a difference in wording will never resolve, and the test was never capable of teaching you anything.",
    takeaways: [
      "A good test isolates the argument, not the phrasing.",
      "Your traffic volume determines what size of difference is detectable at all.",
      "Record the hypothesis before you start, or the result can be read any way afterwards.",
      "Keep negative results; they are the ones that stop the idea being retried in two years.",
    ],
    close: close(
      "Test something that can resolve",
      "Ad Concepting varies the claim and the angle so a result carries information. Join our waitlist for early access.",
    ),
  },

  "marketing-before-product-market-fit": {
    intro:
      "For pre-launch founders who feel they have nothing to say. The usual proof does not exist yet, which rules out one kind of marketing and leaves another that is frequently more persuasive anyway.",
    takeaways: [
      "The problem exists before your product does, and it is publishable now.",
      "Publish the reasoning — what you believe about the problem and why your approach differs.",
      "A list built before launch is the asset that makes the launch possible.",
      "Version the positioning, because it will change and the changes should be visible.",
    ],
    close: close(
      "Publish the reasoning, not the proof",
      "Method and specificity build credibility that case studies you cannot yet write would carry. Join our waitlist for early access.",
    ),
  },

  "stop-measuring-everything": {
    intro:
      "For anyone with a dashboard they check weekly and act on never. Adding metrics feels like rigour and behaves like noise, particularly at the volumes most small businesses actually run.",
    takeaways: [
      "A dashboard with forty numbers produces the same decisions as one with none.",
      "Keep a metric only if you can name what you would do differently when it moves.",
      "Three is usually right: one demand, one conversion, one retention.",
      "Name what you are deliberately ignoring, or the set grows back within a quarter.",
    ],
    close: close(
      "Fewer numbers, each with a decision",
      "Metric Selection produces the set and the explicit stop-watching list. Join our waitlist for early access.",
    ),
  },

  "batching-beats-daily": {
    intro:
      "For business owners who have been told to write for twenty minutes every morning. That advice is excellent for writers and poor for operators, and the difference is what each of them is competing against for the time.",
    takeaways: [
      "A daily habit competes with client work every single day and loses on most of them.",
      "Context loading is the hidden cost, and batching pays it once instead of thirty times.",
      "Batching needs a plan to work from — a batch session with no briefs becomes a planning session.",
      "A realistic rhythm is one long session a month rather than a short one every day.",
    ],
    close: close(
      "A month in one sitting",
      "Batch Approval shows theme, segment and stage next to each draft so a month takes a session. Join our waitlist for early access.",
    ),
  },

  "what-ai-cannot-know-about-your-business": {
    intro:
      "For anyone whose generated output keeps coming back generic. The gap is almost never model capability; it is a set of facts that exist only inside your business and have never been written down anywhere.",
    takeaways: [
      "Prices, objections, customer language and real constraints are unavailable unless you supply them.",
      "Generic output is the honest response to a prompt with no private information in it.",
      "Making those inputs available once is what changes the quality of everything afterwards.",
      "The same private knowledge is what makes a human writer inside your business better than one outside it.",
    ],
    close: close(
      "Supply what only you know",
      "The Business Brief is the mechanism for making private inputs available once rather than every session. Join our waitlist for early access.",
    ),
  },

  "forms-that-lose-you-money": {
    intro:
      "For anyone whose enquiry form has grown a field at a time. Each one was added for a good reason and none of them were ever tested, which is how a two-field form becomes a seven-field form nobody completes.",
    takeaways: [
      "Every field has a conversion cost, and most have never been checked against it.",
      "The test is simple: would you rather have this information or the enquiry?",
      "Qualification and data collection are different jobs and only one belongs on the form.",
      "Ask later. Almost everything can be collected in the reply instead.",
    ],
    close: close(
      "Fewer fields, more enquiries",
      "Mengo keeps forms to fields you will actually use and moves the rest into the follow-up. Join our waitlist for early access.",
    ),
  },

  "the-cost-of-restarting": {
    intro:
      "For anyone about to start again after a gap. Three false starts is not three attempts; it is three returns to zero, and the compounding lost is usually larger than the effort that was spent.",
    takeaways: [
      "Each restart loses audience, momentum and a search presence that was beginning to accumulate.",
      "The psychological cost is real and it makes the next attempt smaller.",
      "The attempts fail identically because nothing structural changed between them.",
      "Design for continuity — a smaller commitment held is worth more than a larger one abandoned.",
    ],
    close: close(
      "Design the next attempt to survive",
      "A plan sized to your worst month is the one that does not need a fourth restart. Join our waitlist for early access.",
    ),
  },

  "referrals-are-not-a-strategy": {
    intro:
      "For businesses that say most of their work comes from word of mouth. That is usually true and usually means the most important channel is the one nobody manages, which also makes it the one that cannot be increased.",
    takeaways: [
      "Referrals that arrive by luck cannot be increased when you need them.",
      "The moment you ask matters more than the wording of the ask.",
      "Vague asks produce nothing; name the kind of person you want to be introduced to.",
      "Make referring trivial — a forwardable message beats a request to think of someone.",
    ],
    close: close(
      "A process, not a hope",
      "Mengo defines the moment, writes the ask and builds the follow-up around it. Join our waitlist for early access.",
    ),
  },

  "nobody-reads-your-about-page": {
    intro:
      "About pages are among the most visited pages on a small business site and among the least useful. The reason is that they answer a question about you when the visitor arrived with a question about themselves.",
    takeaways: [
      "Visitors are checking whether you are credible and whether you handle their situation.",
      "Founding stories underperform because they answer a question nobody asked.",
      "Put the evidence a visitor is actually looking for: who you work with, how you work, what you refuse.",
      "The exception is a personal brand, where the person genuinely is the product.",
    ],
    close: close(
      "Answer the visitor's question",
      "Mengo writes company pages around what a reader is checking rather than around a narrative. Join our waitlist for early access.",
    ),
  },

  "ai-marketing-tools-that-stay-empty": {
    intro:
      "For anyone with a subscription to a marketing tool they open once a month. The pattern is identical to the one that leaves scheduling tools unused, and it is not a usability problem.",
    takeaways: [
      "Tools that solve production fail when the user's constraint was deciding.",
      "A tool that waits for input becomes a tool that stops being opened.",
      "Adoption changes when the tool arrives with the decision already made.",
      "The honest caveat: no tool fixes a business that has not decided what it is for.",
    ],
    close: close(
      "The empty box is the problem",
      "Mengo arrives with the calendar filled rather than waiting for you to fill it. Join our waitlist for early access.",
    ),
  },

  "onboarding-is-marketing": {
    intro:
      "For subscription and service businesses where retention is the real constraint. The messages after purchase determine renewal, referral and repeat business, and they are usually the least-considered content the business owns.",
    takeaways: [
      "Churn is decided in the first weeks and recorded months later as a pricing objection.",
      "Getting the customer to a first real result is the whole target of onboarding.",
      "Pre-empt the blockers you already know about rather than waiting to be asked.",
      "Ask something answerable early; a reply is the best early signal of engagement you will get.",
    ],
    close: close(
      "The first month is marketing",
      "Mengo designs onboarding flows around a defined first-value moment. Join our waitlist for early access.",
    ),
  },

  "you-do-not-need-to-be-on-tiktok": {
    intro:
      "Written for the specific anxiety produced by watching a competitor start a channel. Channel pressure is itself a marketing product, and most of what it sells is unnecessary for the business receiving it.",
    takeaways: [
      "The pressure comes from people whose business is your attention, not your results.",
      "The actual question is whether your buyers are there and whether you can sustain the format.",
      "Being everywhere costs context switching, which is paid from the same hours as delivery.",
      "Reconsider when the answer to both questions changes, not when a competitor starts.",
    ],
    close: close(
      "The honest answer is sometimes no",
      "Channel Ranking will tell you when a channel belongs on the paused list. Join our waitlist for early access.",
    ),
  },

  "why-your-content-does-not-compound": {
    intro:
      "For businesses publishing consistently and seeing no accumulation. Consistency is necessary and not sufficient: most small business content expires, and expiring content requires the same effort every month indefinitely.",
    takeaways: [
      "Output and assets are different things; only one of them keeps working.",
      "Durability comes from evergreen subject matter, search intent and internal linking.",
      "The archive is a channel if it is connected, and dead weight if it is not.",
      "Reuse at the idea level rather than the text level, so old work keeps producing new assets.",
    ],
    close: close(
      "Build the archive deliberately",
      "Internal links are planned at brief time, so the archive connects as it grows. Join our waitlist for early access.",
    ),
  },

  "content-that-only-you-could-write": {
    intro:
      "For anyone whose content is competent and forgettable. The fix is not a better style; it is specificity, and specificity comes from information that exists inside your business and nowhere else.",
    takeaways: [
      "Anything anyone could have written will read as though anyone did.",
      "Your advantage is the specific, the numeric and the recently observed.",
      "Test a draft by asking whether a competitor could publish it unchanged.",
      "This applies more, not less, to AI-assisted content — the private input is what makes it distinct.",
    ],
    close: close(
      "Specificity is the differentiator",
      "Mengo asks for the details only you hold rather than generating a plausible substitute. Join our waitlist for early access.",
    ),
  },

  "the-internal-champion-problem": {
    intro:
      "For B2B businesses whose deals stall in the middle for no stated reason. The stall is usually an argument happening in a meeting you are not in, conducted by someone using material that assumed you were.",
    takeaways: [
      "Deals stall where your contact has to sell you internally without you.",
      "Proposals written for the person you spoke to do not survive being forwarded.",
      "The approver needs the problem, the cost of inaction, the outcome and the price — in their own terms.",
      "Keep it to one page, because a forwarded document is skimmed rather than read.",
    ],
    close: close(
      "Arm the person arguing for you",
      "Mengo writes the one-pager for the approver rather than for the conversation you already had. Join our waitlist for early access.",
    ),
  },
};
