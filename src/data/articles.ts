import type { Article, Slug } from "@/lib/types";
import { withDepth } from "@/data/depth";
import { articleDepth } from "@/data/depth/articles";

/**
 * Blog articles.
 *
 * Opinionated pieces on marketing practice. Each argues one position rather
 * than surveying a topic, which is the same standard the product applies to
 * the content it generates.
 */
type Row = [
  slug: Slug,
  title: string,
  category: Article["category"],
  published: string,
  readingTime: number,
  summary: string,
  sections: [string, string][],
  related: Slug[],
];

const rows: Row[] = [
  /* ---------------- Strategy ---------------- */
  ["marketing-is-a-systems-problem", "Marketing Is a Systems Problem, Not a Discipline Problem", "marketing-automation", "2026-08-24", 6,
    "Businesses that stop marketing are not lazy. They are running a process with no deadline, and processes with no deadline lose to processes that have one.",
    [["The pattern is too consistent to be personal", "Almost every small business that stops marketing stops the same way: a strong start, two or three good weeks, a busy month, a reset. When a failure mode is that consistent across thousands of different people, the explanation is structural rather than individual."],
     ["What makes it structural", "Marketing is the only function without an external deadline. A client is waiting for delivery. A regulator is waiting for a filing. Nobody is waiting for Tuesday's post. Under pressure, work with an external deadline always wins, and it should."],
     ["Discipline is the wrong lever", "The standard advice is to be more consistent, which is a description of the desired outcome presented as a method. Telling someone to be disciplined about a task that competes with client work is asking them to lose the same argument more determinedly."],
     ["Where the leverage actually is", "Remove the decision. The expensive part is not writing a post; it is deciding what post, for whom, today. Settle that once, in advance, in a form you can execute from — and the consistency stops requiring willpower."]],
    ["fix-inconsistent-posting", "build-a-marketing-system", "annual-calendar"]],

  ["be-everywhere-is-bad-advice", "Be Everywhere Is Bad Advice for Almost Everyone", "marketing-automation", "2026-08-22", 5,
    "Multi-channel presence is a description of what large marketing teams can afford, repeated as a recommendation to people who cannot.",
    [["Where the advice comes from", "Presence on nine platforms is genuinely correct for an organisation with nine people. It is repeated to businesses with one, where it produces nine neglected accounts and a permanent sense of falling behind."],
     ["The cost is not the posting", "It is the context switching. Each platform has different mechanics, formats, audiences and rhythms. Holding nine of those in mind, badly, is more expensive than the posting itself and produces content that is native to none of them."],
     ["Three is the sustainable shape", "One primary channel with a twelve-month commitment, one secondary that supports it, one experiment with a defined window and success condition. Everything else is explicitly paused — and writing down what you are not doing is the part that actually saves time."],
     ["The uncomfortable part", "Deprioritising a channel means accepting you will miss opportunities on it. That is a real cost, and it is smaller than the cost of doing everything at a standard that persuades nobody."]],
    ["choose-the-right-channels", "channel-ranking", "channel-selection-framework"]],

  ["your-positioning-is-a-description", "Your Positioning Is Probably Just a Description", "marketing-automation", "2026-08-19", 5,
    "There is a simple test for whether you have positioning: would a competitor be happy to use your statement on their own homepage?",
    [["The test", "Read your positioning statement and ask whether your closest competitor could put it on their site without changing anything. If they could, it is a category description. Accurate, complete, and doing no work at all."],
     ["Why descriptions feel safe", "A description offends nobody and excludes nobody, which is exactly the problem. Positioning works by making you the obvious choice for some people, which requires being the wrong choice for others."],
     ["What a real position looks like", "It contains something a reasonable competitor would dispute. A stated method, a deliberate limitation, a refusal to serve a segment, a claim about what actually matters in your category. It has an edge, and the edge is the mechanism."],
     ["The cost is real and worth paying", "You will lose enquiries. They will be the ones you would have declined or lost anyway, and what remains converts substantially better because it arrives already agreeing with you."]],
    ["define-your-positioning", "positioning-generator", "positioning-framework"]],

  ["the-follow-up-gap", "Most Businesses Do Not Have a Lead Problem", "sales-automation", "2026-08-16", 6,
    "They have a follow-up problem, and it is the cheapest fixable gap in almost every small business.",
    [["Where leads actually go", "Ask any small business what happened to the enquiries from six months ago and you will usually get an estimate rather than an answer. The leads did not choose a competitor. They received one enthusiastic reply and then nothing."],
     ["Why the first reply is always excellent", "Because it happens when the enquiry arrives and attention is high. The second, fourth and eighth touches require a system, and in most businesses no system exists — so they do not happen."],
     ["The arithmetic", "Generating a new lead costs money and time. Contacting one you already have costs neither. Any business considering increasing its ad spend before fixing its follow-up is buying more of something it is already failing to use."],
     ["What good follow-up looks like", "Segmented by what the person actually did. One objection per message. Cadence set from how long your buyers genuinely take to decide. A defined end, so nobody is pursued indefinitely and nobody is quietly forgotten."]],
    ["follow-up-with-every-enquiry", "lead-nurture-blueprint", "sequence-builder"]],

  ["what-quiet-months-are-for", "What Your Quiet Months Are Actually For", "marketing-automation", "2026-08-13", 5,
    "Every seasonal business has months where nothing sells, and treats them as a problem rather than as the only production capacity it has.",
    [["The trough is not wasted, it is unassigned", "Businesses experience quiet periods as a revenue problem, which is correct, and respond by trying to generate demand in a window where demand structurally does not exist. That effort has a poor return and consumes the capacity the trough actually offers."],
     ["Peaks are lost in the trough", "The assets a peak needs — landing pages, sequences, campaign content, updated photography — cannot be built during the peak. If they are not built beforehand, the peak is entered improvising, which is why every peak feels the same."],
     ["The work that never happens", "Evergreen content, list hygiene, review collection, case documentation, testing. Permanently deferred during busy periods, and each one makes the following peak measurably better."],
     ["Schedule it as calendar items", "The distinction between intending to do trough work and doing it is whether it has a date and a defined output. Assign it the way you would assign client work, because it is the work that determines next year's numbers."]],
    ["plan-a-seasonal-campaign", "seasonality-planning", "seasonal-planning-playbook"]],

  ["stop-measuring-everything", "Stop Measuring Everything", "marketing-automation", "2026-08-09", 5,
    "A dashboard with forty numbers produces the same decisions as a dashboard with none, and takes considerably longer to build.",
    [["Why big dashboards fail", "Nobody can hold forty numbers in mind while deciding something. Faced with too much information, people fall back on intuition — which means the dashboard cost time and changed nothing."],
     ["The test for keeping a metric", "Write the sentence: if this moves this far, we will do this. If you cannot write it, the number is being watched rather than used, and it should leave the set."],
     ["Three is usually right", "One demand metric, one conversion metric, one retention metric. Enough to diagnose most problems, few enough to actually consult. The full set can still exist for reporting; the question is which few drive weekly decisions."],
     ["Name what you are ignoring", "Writing down the metrics you are deliberately not watching is what stops the set quietly growing back. Impressions, followers, open rate — say so explicitly, and the discipline holds."]],
    ["decide-what-to-measure", "metric-selection", "metric-selection-framework"]],

  ["referrals-are-not-a-strategy", "Referrals Are Not a Strategy Until They Are a Process", "sales-automation", "2026-08-06", 5,
    "Most businesses that say they grow by word of mouth mean they grow by luck and have not examined it.",
    [["Referral as an accident", "A business receiving referrals it did not ask for is receiving a fraction of the referrals available to it. Satisfied customers refer when prompted at the right moment; unprompted referral is the residual."],
     ["The moment matters more than the ask", "The right moment is at demonstrated value, which is usually earlier than the end of an engagement. Asking at invoice associates the request with payment, which is exactly the wrong association."],
     ["Vague asks produce nothing", "Let me know if you know anyone gives the referrer a research task. Naming the specific situation or role you want introduced to converts several times better, because it is answerable."],
     ["Make referring trivial", "A forwardable message the referrer can send without composing anything. The friction between willingness and action is where most referrals are lost, and it is entirely removable."]],
    ["build-a-referral-ask", "sequence-builder", "objection-mapping"]],

  ["why-your-content-does-not-compound", "Why Your Content Does Not Compound", "content-automation", "2026-08-03", 6,
    "Publishing consistently is necessary and not sufficient. Most small business content expires, and expiring content requires the same effort every month forever.",
    [["The difference between output and assets", "Content that is only ever consumed once is output. Content that keeps earning — through search, through repurposing, through internal links — is an asset. Most businesses produce the first and believe they are building the second."],
     ["What makes content durable", "It answers a question people will keep asking, it is findable, and it is linked to from other things you own. Timely commentary can be valuable and it is never durable, which is fine as long as you know which you are producing."],
     ["The archive as a channel", "A hundred published pieces with no internal links between them is a hundred dead ends. The same hundred pieces properly linked becomes a structure that keeps people reading and keeps search engines crawling."],
     ["Reuse at the idea level", "Repurposing that copies text reads as automation. Repurposing that takes the underlying claim and re-argues it in another format's native structure produces genuinely new assets from work already done."]],
    ["build-a-content-engine", "repurposing-engine", "evergreen-content"]],

  /* ---------------- Content ---------------- */
  ["the-daily-decision-is-the-cost", "The Daily Decision Is the Cost, Not the Writing", "content-automation", "2026-08-23", 5,
    "People who abandon content habits rarely abandon them because writing was hard. They abandon them because choosing was.",
    [["Where the effort actually goes", "Ask someone who stopped posting what the hard part was. It is almost never the writing. It is opening the app and confronting the question of what today's post should be, with no constraints and no starting point."],
     ["Blank pages are expensive", "A blank page with infinite options is a harder cognitive task than a brief with constraints. Constraint is what makes creative work tractable, which is why writers with a commission produce and writers with an intention do not."],
     ["What a slot should contain", "A theme, an angle, an audience, a format and a job. That is not a schedule; it is a brief. The difference between a calendar entry that says product post and one that says these five things is the difference between a habit and an intention."],
     ["Decide in batches, execute in batches", "Deciding thirty things at once is far cheaper than deciding one thing thirty times, because the context is already loaded. The same is true of writing them."]],
    ["fill-an-empty-calendar", "annual-calendar", "content-briefs"]],

  ["hooks-are-not-clickbait", "Hooks Are Not Clickbait", "content-automation", "2026-08-20", 5,
    "The objection to hooks is usually an objection to overpromising, which is a different thing and a real problem.",
    [["Why hooks exist", "On feed platforms, the first line decides whether the rest of the asset exists at all. Refusing to write a hook is not integrity; it is choosing not to be read, which serves nobody including the people who would have found the content useful."],
     ["What makes a hook dishonest", "Not intensity. Mismatch. A hook that promises something the content does not deliver is the problem, and it is a problem precisely because it works once and costs you the audience it earned."],
     ["Specificity beats drama", "The most reliable hooks are specific rather than sensational. A concrete number, a named situation, an unexpected but true claim. Manufactured urgency is both less effective and more corrosive than most people assume."],
     ["Write it last", "Write the piece, then write the opening from what the piece actually contains. Hooks written first tend to promise whatever sounds compelling, and then the content is bent to justify them."]],
    ["hook-writer", "asset-format", "instagram-reels-playbook"]],

  ["repurposing-is-not-reposting", "Repurposing Is Not Reposting", "content-automation", "2026-08-17", 5,
    "Posting the same text on four platforms is not a content strategy. It is visible automation, and everyone who follows you twice can see it.",
    [["What most repurposing does", "Takes a finished asset and redistributes it. The result reads as a message written for somewhere else, because it was. Each platform's audience recognises the shape of content that belongs to a different platform."],
     ["Work from the idea, not the artefact", "Extract the claim and the evidence, then re-argue them in the new format's native structure. A carousel derived from an article should pick one section and argue it properly, not compress the whole thing into nine frames."],
     ["Depth changes with format", "A thread and an article can carry the same idea at very different resolutions. Deciding which resolution each format gets is the actual work of repurposing, and it is what makes derived assets feel original."],
     ["Space it out", "The same idea appearing across three platforms on one afternoon reads as a broadcast. Distributing derived assets across weeks lets the idea build rather than saturate."]],
    ["repurpose-one-idea-into-ten", "repurposing-engine", "asset-library"]],

  ["write-for-the-format", "Write for the Format, Not for the Word Count", "content-automation", "2026-08-14", 5,
    "Every content format has an anatomy. Ignoring it is why so much content is structurally wrong before a word is judged.",
    [["Formats are structures, not labels", "A carousel is a sequence that withholds information deliberately. A short-form script is timed beats. An email is a promise and a payoff. Calling something a carousel and then writing a list is why it does not perform."],
     ["The anatomy comes first", "Decide what the opening must do, what carries the middle and what the close asks for, before writing sentences. Getting the structure right makes mediocre prose work; getting it wrong makes excellent prose fail."],
     ["Length follows the argument", "Word counts are a proxy for depth and a poor one. A page that needs eight hundred words padded to two thousand is worse in every respect, including for search, than the eight hundred it needed."],
     ["Platform rules are part of the format", "Character limits, aspect ratios, link behaviour, what each algorithm rewards. These are not constraints to work around; they are the definition of what the format is."]],
    ["asset-library", "content-briefs", "content-brief-template"]],

  ["the-brief-is-the-bottleneck", "The Brief Is the Bottleneck", "content-automation", "2026-08-11", 5,
    "Disappointing content from freelancers, agencies and AI almost always traces back to the same place, and it is not the writer.",
    [["The common factor", "Businesses that get generic output from freelancers usually get generic output from AI, and generic output from agencies. When the variable changes and the result does not, the problem is the input."],
     ["What a thin brief looks like", "A topic and a word count. That contains no claim, no audience, no evidence and no success condition, which means the writer has to invent all four — and their inventions will be generic because they do not know your business."],
     ["The section only you can fill", "Evidence. The numbers, examples and customer language that exist inside your business and nowhere else. A brief without them produces generalities, and no amount of writing skill compensates."],
     ["Argue about the brief, not the draft", "Disagreement at brief stage costs a conversation. The same disagreement about a finished draft costs the draft. This is true whether the writer is a person or a model."]],
    ["brief-a-freelance-writer", "content-briefs", "content-brief-template"]],

  ["batching-beats-daily", "Batching Beats a Daily Habit", "content-automation", "2026-08-08", 4,
    "The advice to write for twenty minutes every morning is excellent for writers and poor for people running a business.",
    [["Why daily fails for operators", "A daily habit requires the same slot to be free every day, which is not what running a business looks like. One genuinely busy week breaks the chain, and broken chains rarely restart."],
     ["Context loading is the hidden cost", "Getting into the frame of mind to write takes longer than most people account for. Paying that cost once for ten assets is dramatically cheaper than paying it ten times."],
     ["What batching actually needs", "A plan. Batching without a calendar is thirty consecutive blank pages, which is worse than the daily version. The plan is what makes a batch session productive rather than exhausting."],
     ["A realistic rhythm", "One planning session a quarter, one production session a month, one review session a week. That is a shape that survives an ordinary business, which is the only test that matters."]],
    ["produce-a-month-of-content", "batch-approval", "90-day-content-plan"]],

  ["nobody-reads-your-about-page", "Nobody Is Reading Your About Page the Way You Think", "marketing-automation", "2026-08-05", 4,
    "About pages are among the most visited pages on a small business site and among the least useful, because they answer the wrong question.",
    [["What visitors are actually checking", "Not your founding story. They are checking whether you are real, whether you have done this before, and whether you will still exist in six months. The page is a credibility check, not a narrative."],
     ["Why founding stories underperform", "They are written for the founder. A reader deciding whether to enquire needs evidence, specificity and a sense of how you work — and a story about a moment of inspiration provides none of it."],
     ["What to put there instead", "How you work, what you believe about the problem, who you are for and who you are not for, and something checkable — real names, real detail, real constraints."],
     ["The exception", "Where the founder's judgement is the product, the person genuinely matters. Even then it is their thinking that persuades, not the origin story."]],
    ["positioning-generator", "build-a-founder-brand", "social-proof"]],

  ["content-that-only-you-could-write", "Write the Content Only You Could Write", "content-automation", "2026-08-02", 5,
    "The fastest way to sound like everyone else is to write things anyone could have written, and the fix is specificity rather than style.",
    [["The abundance problem", "Competent general advice on any marketing topic is now free, instant and infinite. Publishing more of it adds nothing, regardless of how well written it is."],
     ["Where your advantage actually is", "In the specifics: what you have seen, what surprised you, what you were wrong about, what your customers say in their own words. None of that is available to anyone else, and all of it is more persuasive than a framework."],
     ["A test for a draft", "Could a competent writer with no knowledge of your business have produced this? If yes, it will read as generic — not because of the prose, but because it contains nothing only you knew."],
     ["This applies to AI-assisted content too", "A model can structure, draft and format. It cannot know what happened on your last three projects. Supplying that is the part of the work that stays yours, and it is the part that decides whether the output is worth publishing."]],
    ["editorial-guardrails", "voice-profile", "voice-profile-worksheet"]],

  /* ---------------- Conversion ---------------- */
  ["your-landing-page-asks-for-too-much", "Your Landing Page Is Asking for Too Many Things", "sales-automation", "2026-08-21", 5,
    "Pages built from whatever sections a template offered ask visitors to make several decisions at once, and get none of them.",
    [["One page, one decision", "The defining property of a landing page is what it excludes. Navigation, secondary offers, related products and general company information all compete with the single action the page exists to produce."],
     ["Justify every section", "Each section should be defensible in one sentence: this exists because people worry about X. Sections that cannot be defended that way are decoration, and decoration on a conversion page is a cost."],
     ["Order by when objections surface", "Trust concerns before price concerns. A page that leads with pricing to someone who does not yet believe you can do the work is answering a question they have not reached."],
     ["Repeat the call to action verbatim", "Varying the wording feels less repetitive to the writer and reads as inconsistency to the reader. Same words, at each natural decision point."]],
    ["write-landing-page-copy", "landing-page-copy", "landing-page-checklist"]],

  ["price-objections-are-rarely-about-price", "Price Objections Are Rarely About Price", "sales-automation", "2026-08-18", 5,
    "When someone says it is too expensive, they are usually saying they do not yet believe it is worth it, which is a different problem with a different fix.",
    [["Discounting answers the wrong question", "Lowering the price in response to a value objection confirms the buyer's suspicion that the original price was arbitrary. It also resets your pricing and attracts buyers who will object again."],
     ["Establish the cost of the status quo first", "The real comparison is not your price against a competitor's. It is your price against the ongoing cost of the problem continuing. Until that number is concrete, any price sounds like an expense."],
     ["Make the price specific", "What is included, what is not, what happens if it goes wrong. Vagueness about scope reads as risk, and buyers price risk into their objection whether or not they say so."],
     ["When it genuinely is about price", "Then the answer is a smaller rung on the offer ladder, not a discount on the large one. An honest smaller step keeps the pricing intact and keeps the relationship."]],
    ["handle-price-objections", "offer-architecture", "objection-map-template"]],

  ["the-lead-magnet-nobody-wanted", "The Lead Magnet Nobody Wanted", "sales-automation", "2026-08-15", 5,
    "Most lead magnets fail before they are downloaded, because they promise breadth where the reader wanted one thing finished.",
    [["Breadth signals thinness", "An ultimate guide to everything reads as a document nobody will finish, because that is usually what it is. Narrow promises convert better and, more importantly, deliver better."],
     ["The job is the next email", "A magnet's real purpose is to establish that hearing from you is worth it. A weak one trains the recipient to ignore your next message, which makes it worse than not having one at all."],
     ["Finish the problem", "Scope it so that someone using it actually resolves the small thing it promised. Completeness on something small is what earns the trust that a partial answer to something large destroys."],
     ["Ship it with the sequence", "A magnet without a follow-up sequence is a download into silence. Write both at once, or the sequence never gets written."]],
    ["build-a-lead-magnet", "lead-magnet-builder", "offer-ladder-framework"]],

  ["speed-is-a-conversion-strategy", "Speed Is a Conversion Strategy", "sales-automation", "2026-08-12", 4,
    "In several industries the business that replies first wins regardless of relative quality, and most businesses are competing on the wrong axis.",
    [["Where speed dominates", "Home services, legal, insurance, property, anything urgent or anything where the buyer is contacting several providers. In these markets response time predicts conversion better than almost any messaging variable."],
     ["The window is shorter than it feels", "An enquiry sent at eleven and answered at four has usually been answered by someone else at eleven fifteen. Intent decays quickly, and the second reply competes with a conversation already underway."],
     ["What to build", "An immediate acknowledgement that says something specific, a genuine reply window you can hold, and a recovery sequence for the ones you miss. Automation here is honest as long as the acknowledgement does not pretend to be a person."],
     ["Where it does not apply", "Considered B2B purchases with formal procurement. Speed still helps and it is not decisive, and treating it as decisive there produces pressure that reads badly."]],
    ["follow-up-with-every-enquiry", "recover-abandoned-enquiries", "cadence-planning"]],

  ["testing-adjectives-teaches-nothing", "Testing Adjectives Teaches You Nothing", "marketing-automation", "2026-08-10", 4,
    "Most small-scale A/B testing varies the wording rather than the argument, which produces results with no information in them.",
    [["What a good test isolates", "The claim. Testing five phrasings of the same proposition tells you which sentence sounds better, which is rarely worth the traffic it consumed. Testing five different propositions tells you something about your market."],
     ["Traffic determines what is testable", "Below a certain volume, only large differences resolve. That is an argument for testing bigger variables, not for abandoning testing — and it is an argument against testing button colours."],
     ["Record the hypothesis first", "A result without a stated expectation is uninterpretable, and it will be reinterpreted later to fit whatever happened. Write what you expect before you run it."],
     ["Keep the negative results", "The tests that failed are the ones most likely to be repeated in eighteen months by someone who does not know. A log of failures is more valuable than a log of wins."]],
    ["ab-testing", "experiment-log", "create-ad-concepts"]],

  ["forms-that-lose-you-money", "The Form Fields That Are Costing You Enquiries", "sales-automation", "2026-08-07", 4,
    "Every field on an enquiry form has a conversion cost. Most businesses have never checked whether the field is worth it.",
    [["Every field is a decision", "Each one gives the visitor a small reason to stop. Phone number, company size, budget range, how did you hear about us — each is defensible individually and collectively they are expensive."],
     ["The test", "Will this answer change what you do next? If a field's answer would not alter your response, routing or priority, it is being collected out of habit and should go."],
     ["Qualification is different from data collection", "A field that filters out people you would decline is worth its conversion cost. A field that produces a statistic for a monthly report is not."],
     ["Ask later instead", "Most of what a long form collects can be gathered in the follow-up, once the person has already engaged. Front-loading it converts the enquiry into an application before there is any reason to apply."]],
    ["qualify-leads-before-a-call", "landing-page-copy", "conversion-rate"]],

  ["onboarding-is-marketing", "Your Onboarding Sequence Is a Marketing Asset", "sales-automation", "2026-08-04", 5,
    "The messages after purchase determine retention, referral and repeat business, and they are usually the least-considered content a business owns.",
    [["Where churn is decided", "Early, and usually silently. Most cancellations are decided within the first weeks and actioned much later, which means the intervention window has closed long before the cancellation appears in your numbers."],
     ["First value is the whole target", "Identify the specific moment a customer knows this was worth it, then design everything to shorten the path to it. Everything else in onboarding is secondary to that one event."],
     ["Remove blockers before they occur", "The two or three things that stop people reaching first value are usually well known internally and never addressed proactively. Pre-empting them is cheaper than supporting them."],
     ["Ask something answerable", "Check-ins that announce availability get ignored. A specific question that can be answered in one line surfaces the problems that would otherwise become quiet cancellations."]],
    ["build-an-onboarding-email-flow", "onboarding", "churn-rate"]],

  ["the-internal-champion-problem", "Your Buyer Cannot Sell You Internally", "sales-automation", "2026-08-01", 5,
    "Deals stall in the middle because someone has to argue your case in a meeting you are not in, using material written for them rather than for the approver.",
    [["Where B2B deals actually stall", "Not at the decision. In the gap while your contact tries to explain the proposal to a finance lead or a director who has never spoken to you and has no context."],
     ["Proposals are written for the wrong reader", "They are written for the person you have been talking to, who already understands. The document that matters is the one that works for someone with no relationship and no context."],
     ["What the approver needs", "The business case first — cost, risk, outcome — before capability. And the internal objection pre-empted, because that is the argument that will actually be made in the room."],
     ["Keep it to one page", "The moment it becomes three, it stops being forwarded and starts being filed. One page that argues the case is worth more than twenty that describe the service."]],
    ["create-a-sales-one-pager", "shorten-the-sales-cycle", "objection-mapping"]],

  /* ---------------- AI ---------------- */
  ["ai-content-sounds-the-same", "Why AI Content Sounds the Same", "ai-cofounder", "2026-08-25", 6,
    "The tell is not the prose. It is that every asset was generated from the same prompt, which makes them structurally identical whatever the words are.",
    [["The real signature", "People say AI content sounds robotic. Usually it does not — it is fluent and grammatical. What it is, is uniform: the same rhythm, the same three-part structure, the same reassuring conclusion, on every topic."],
     ["Where uniformity comes from", "One prompt produces one shape. Ten assets from one prompt are ten instances of that shape, which is why they feel interchangeable even when the subjects differ."],
     ["Variation has to be structural", "The fix is not asking for more creative writing. It is giving each asset a genuinely different assignment: a different angle, a different audience, a different funnel stage, a different format anatomy."],
     ["Voice is a constraint, not an instruction", "Describing a voice in a prompt produces an impression of it. Storing vocabulary rules, rhythm patterns and an explicit banned list produces enforcement, and enforcement is what holds over a hundred assets."]],
    ["voice-profile", "asset-library", "content-that-only-you-could-write"]],

  ["the-hallucination-that-matters", "The Hallucination That Actually Matters in Marketing", "ai-cofounder", "2026-08-22", 5,
    "It is not the obviously wrong answer. It is the plausible, specific, confident claim about your business that nobody catches.",
    [["Obvious errors are safe", "A model that says something absurd gets corrected immediately. The dangerous output is fluent, specific and reasonable — a percentage, a customer outcome, a regulatory statement — that reads exactly like a fact you supplied."],
     ["Why marketing is high-risk", "Because the output is published under your name, at volume, to people who will hold you to it. A fabricated statistic in a draft is an inconvenience; the same statistic on a landing page is a liability."],
     ["Constrain rather than review", "Reviewing every claim in every asset does not scale. Restricting the model to claims you supplied, and surfacing everything else as an explicit gap, moves the work from detection to prevention."],
     ["Where human review stays mandatory", "Regulated industries. Clinical, financial and legal content needs qualified sign-off regardless of how well the constraints performed. Automation reduces the burden; it does not transfer the responsibility."]],
    ["editorial-guardrails", "ai-content-guardrails-checklist", "responsible-ai"]],

  ["a-chatbot-is-not-a-strategy", "A Chatbot Will Write You a Post. It Will Not Tell You Which Post.", "ai-cofounder", "2026-08-19", 5,
    "General assistants solve the drafting problem, which was never the expensive part of marketing.",
    [["What is genuinely solved", "Turning an instruction into competent copy is now fast, cheap and reliable. That is a real change and it has removed a real cost from marketing."],
     ["What remains unsolved", "Deciding what to make. Which audience, which claim, which format, this week, in a sequence that builds towards something. A model answers questions; it does not generate the questions from a plan."],
     ["Context that persists versus context you retype", "The difference between a chatbot and a system is whether the brief, positioning, segments and voice survive between sessions. Retyped context degrades; stored context compounds."],
     ["When a chatbot is the right tool", "When you already have the strategy and need occasional drafting. That is a genuinely common situation, and pretending otherwise would be dishonest."]],
    ["mengo-vs-a-general-ai-chatbot", "business-brief", "annual-calendar"]],

  ["should-you-disclose-ai", "Should You Tell People You Use AI?", "mengotalks", "2026-08-16", 5,
    "The instinct is to hide it. The evidence, so far, suggests being explicit about where it helps and where judgement is human tends to build trust rather than cost it.",
    [["Why concealment is fragile", "It requires the content to be indistinguishable forever, and it puts you in a position where being found out is a story. Fragile positions in marketing tend to fail at the worst moment."],
     ["What audiences actually object to", "Not assistance. Substitution — the sense that nobody thought about them, that the output was produced without care or knowledge. Content that is specific, evidenced and useful rarely provokes the objection at all."],
     ["A useful framing", "Be explicit about the division: AI accelerates drafting and structure, humans supply judgement, evidence and approval. That is both accurate and reassuring, and it survives scrutiny."],
     ["Where disclosure is required", "Some platforms and some regulators require it for specific content types. That is a compliance question rather than a strategic one, and it should be checked per market."]],
    ["responsible-ai", "editorial-guardrails", "editorial-guardrail"]],

  ["prompt-engineering-is-not-the-skill", "Prompt Engineering Is Not the Durable Skill", "ai-cofounder", "2026-08-13", 4,
    "Investing heavily in prompt craft is optimising a layer that keeps getting easier, while the layer underneath keeps getting more valuable.",
    [["Prompting is getting cheaper", "Every model generation requires less prompt scaffolding to produce good output. Skills that improve as the tool improves are not the ones worth compounding."],
     ["What does not get cheaper", "Knowing your market, your customers' actual objections, and what your business can credibly claim. No model has access to any of that, and no improvement in models will change it."],
     ["Judgement is the scarce input", "The ability to look at a draft and say this is fine but it is not what we should be saying is the skill that determines output quality, and it is the one that transfers across tools."],
     ["The practical implication", "Spend your effort on the brief and the evidence rather than on the phrasing of the request. The brief is where quality is decided regardless of what writes the draft."]],
    ["content-briefs", "brief-a-freelance-writer", "content-brief-template"]],

  ["ai-does-not-remove-the-work", "AI Does Not Remove the Work, It Moves It", "ai-cofounder", "2026-08-10", 4,
    "The time saved on drafting reappears as time spent on deciding and reviewing, which is a good trade and not the same as free.",
    [["Where the time actually goes", "Businesses that adopt AI content expecting to save all the time are usually disappointed. The drafting time collapses; the deciding, briefing and reviewing time does not, and it becomes the whole job."],
     ["Why this is still a good trade", "Deciding and reviewing scale far better than writing. One person can direct and approve considerably more content than they could produce, which is where the leverage genuinely is."],
     ["The failure mode", "Skipping the review because the output looks finished. Fluency is not accuracy, and a polished draft that misrepresents your business is more dangerous than an obviously rough one."],
     ["Budget for the moved work", "Plan the review sessions the way you would have planned the writing sessions. Teams that do not tend to publish either too little or too carelessly."]],
    ["batch-approval", "scale-content-without-hiring", "editorial-guardrails"]],

  ["what-ai-cannot-know-about-your-business", "What AI Cannot Know About Your Business", "ai-cofounder", "2026-08-07", 4,
    "The gap between generic output and useful output is almost always a set of facts that exist only inside your business.",
    [["The unavailable inputs", "What your last twenty customers actually said. Why the deals you lost were lost. Which objection comes up in every call. What your delivery genuinely costs. None of it is public and all of it is decisive."],
     ["Why generic output happens", "Not because models are weak, but because they are working with public information about your category. Public information produces category-level content, which is by definition indistinguishable."],
     ["Making the private inputs available", "Write them down. Customer language, objections, real examples, honest constraints. This is a one-off cost that improves every asset produced afterwards, whoever produces it."],
     ["This is also the human advantage", "The same facts are what make a good in-house marketer outperform an agency. The input matters more than the writer, which is why it is worth the effort to capture properly."]],
    ["business-brief", "turn-reviews-into-content", "voice-profile"]],

  ["ai-marketing-tools-that-stay-empty", "Why AI Marketing Tools End Up Unused", "mengotalks", "2026-08-04", 5,
    "Adoption fails for the same reason scheduling tools fail: the tool solves production, and the user's problem was deciding.",
    [["The empty-tool pattern", "Businesses buy a tool, use it enthusiastically for two weeks, and stop. The tool was capable throughout. What ran out was the supply of decisions about what to ask it for."],
     ["Tools that wait are tools that stop being opened", "Anything requiring the user to arrive with an idea inherits the user's idea-generation problem. If that problem were solved, the tool would have been less necessary in the first place."],
     ["What changes adoption", "Arriving with the assignment already made. A calendar slot with a theme, an audience and a format is a prompt the user did not have to construct, which is the difference between a tool and a system."],
     ["The honest caveat", "This does not eliminate the need for input. It relocates it to a single planning session rather than a daily one, which is a shape businesses can actually sustain."]],
    ["mengo-vs-a-social-scheduler", "annual-calendar", "fix-inconsistent-posting"]],

  /* ---------------- Founders ---------------- */
  ["marketing-when-you-are-the-business", "Marketing When You Are Also the Delivery", "ai-cofounder", "2026-08-24", 5,
    "Solo operators do not need better marketing advice. They need marketing that works on the weeks they have no time.",
    [["The structural conflict", "Delivery has clients waiting and marketing does not, so marketing loses. This is not a failure of prioritisation; it is correct prioritisation with an unfortunate long-term consequence."],
     ["Plan for your worst week", "A marketing system designed around your best week is designed around a condition that occurs occasionally. Design for the week where everything goes wrong, and the good weeks take care of themselves."],
     ["Automate the follow-up first", "Nurture sequences are the highest-return automation available to a solo operator, because they act on demand you already have and require no ongoing attention."],
     ["Batch everything else", "One planning session a quarter, one production session a month. Anything requiring daily attention will be the first casualty of a busy period, and building it is optimism rather than planning."]],
    ["solo-founders", "sequence-builder", "batch-approval"]],

  ["the-quiet-period-you-are-waiting-for", "The Quiet Period You Are Waiting For Is Not Coming", "marketing-automation", "2026-08-21", 4,
    "Starting marketing properly once things calm down is the most common marketing strategy there is, and it has a consistent record of never being executed.",
    [["The plan that never executes", "Almost every business owner has a version of it. The calm period is always one project away, and when it arrives it is usually a revenue trough caused by the marketing that did not happen."],
     ["Pipeline lag makes waiting expensive", "Marketing started today produces enquiries in one to six months depending on your cycle. Starting when you are quiet means starting when it is already too late to fix being quiet."],
     ["Restarts cost the compounding", "Each abandoned attempt loses the archive, the list and the search presence that were beginning to accumulate. Three false starts is not three attempts; it is three resets to zero."],
     ["A smaller commitment exists", "The alternative to a full programme is not nothing. Follow-up sequences alone run without ongoing attention and act on demand you have already paid to generate."]],
    ["mengo-vs-waiting-until-later", "lead-nurture-blueprint", "established-local-businesses"]],

  ["hire-or-tool", "Should You Hire a Marketer or Buy a System?", "mengotalks", "2026-08-18", 5,
    "The honest answer depends on which constraint you actually have, and most founders diagnose it wrongly.",
    [["Two different constraints", "A judgement constraint means you do not know what to do. A capacity constraint means you know and cannot get to it. A hire fixes the first; a system fixes the second, and buying the wrong one is expensive."],
     ["Why hires fail early", "A first marketing hire without a documented strategy spends months reconstructing decisions that were never written down, then leaves before the results arrive. The hire was not the problem."],
     ["The sequence that works", "Document the strategy, then hire into it. A marketer inheriting a written positioning, calendar and voice profile is productive in weeks rather than quarters."],
     ["When to hire regardless", "When you need relationships, partnerships, events or media buying. Those require a person, and no system substitutes for someone in the room."]],
    ["mengo-vs-an-in-house-marketer", "onboard-a-new-marketing-hire", "build-a-marketing-system"]],

  ["founder-brand-without-oversharing", "Building a Founder Brand Without Oversharing", "mengotalks", "2026-08-15", 5,
    "The dominant style of founder content is confessional, which is one option among several and a poor fit for most people.",
    [["The false choice", "Founder content is presented as a binary between corporate anonymity and personal disclosure. Most of the effective middle ground — specific, opinionated, professional — is simply less visible because it does not go viral."],
     ["Identifiable, not confessional", "The requirement is that a reader can tell a specific person wrote it and form a view of their judgement. That needs a position and specificity, not vulnerability."],
     ["Decide the boundary once", "In writing, when you are calm, rather than in the moment before posting. Decisions about how personal to be, made repeatedly under pressure, are how people end up regretting posts."],
     ["What actually persuades", "Demonstrated judgement. A founder who explains why they made a difficult call is more convincing than one who describes how they felt about it, particularly to the buyers worth having."]],
    ["build-a-founder-brand", "voice-profile", "linkedin-founder-playbook"]],

  ["how-much-marketing-is-enough", "How Much Marketing Is Enough?", "marketing-automation", "2026-08-12", 4,
    "The answer is set by your delivery capacity and your pipeline lag, not by what a competitor appears to be doing.",
    [["Start from capacity", "How many more customers can you serve this quarter? Marketing beyond that number produces enquiries you decline, which costs goodwill and your own time."],
     ["Work back through the funnel", "Customers needed, multiplied by the conversion rates you actually have, gives enquiries required. That number tells you how much demand generation is needed, which is usually less than the anxiety suggests."],
     ["Account for the lag", "Marketing done now produces enquiries in one to six months. The volume question is therefore about the quarter after next, which is why intuition about it is so unreliable."],
     ["Consistency beats volume", "A sustainable amount held for a year outperforms an intense amount held for six weeks, in every channel and in every measurement."]],
    ["decide-what-to-measure", "channel-ranking", "prove-marketing-roi"]],

  ["marketing-before-product-market-fit", "Marketing Before You Have Customers", "ai-cofounder", "2026-08-09", 5,
    "The instinct is to wait for something to show. The consequence is launching to nobody.",
    [["The problem exists before the product", "Your future buyers already have the problem and are already looking for ways to think about it. That demand is reachable now, without a product, and it is where a pre-launch audience comes from."],
     ["Publish the reasoning", "The thinking behind what you are building is credible content that requires no customers and no results. It also attracts precisely the people who share your view of the problem."],
     ["The list is the asset", "Everything else — followers, engagement, coverage — is borrowed. A pre-launch email list of a few hundred engaged people changes launch day more than any other single preparation."],
     ["Version the positioning", "Pre-launch positioning will change, and that is fine. Versioning it means the plan evolves without every past asset contradicting the current one."]],
    ["pre-launch-startups", "define-your-positioning", "launch-a-newsletter"]],

  ["the-cost-of-restarting", "The Real Cost of Restarting Your Marketing", "marketing-automation", "2026-08-06", 4,
    "Three false starts is not three attempts. It is three returns to zero, and the compounding lost is larger than the effort spent.",
    [["What gets lost", "The archive that was beginning to earn search traffic, the list that was beginning to grow, the audience that was beginning to recognise you. Each restart discards all of it, and the discarded value is invisible."],
     ["The psychological cost", "Restarting after abandonment is harder than starting fresh, because the gap is now evidence. Many businesses stop permanently after the third attempt for this reason rather than a strategic one."],
     ["Why the attempts fail identically", "Because the design is identical each time: a daily habit, an ambitious cadence, no plan, and reliance on willpower. Changing the effort rather than the design produces the same result."],
     ["Design for continuity instead", "A smaller commitment with a plan behind it beats an ambitious one without. The measure of a marketing design is not its peak output; it is whether it survives your worst month."]],
    ["fix-inconsistent-posting", "build-a-marketing-system", "marketing-is-a-systems-problem"]],

  ["you-do-not-need-to-be-on-tiktok", "You Probably Do Not Need to Be on TikTok", "mengotalks", "2026-08-03", 4,
    "Channel anxiety is a marketing product in itself, and most of what it sells you is unnecessary.",
    [["Where the pressure comes from", "Platform growth stories are told loudly and selectively. The businesses for which a channel did not work do not publish case studies about it, which makes every channel look universally effective."],
     ["The actual question", "Are your buyers reachable there, in a buying frame of mind, at a cost you can sustain? For many B2B, local and considered-purchase businesses the honest answer for any given feed platform is no."],
     ["The cost of being everywhere", "It is not the posting. It is that the effort is subtracted from the channel that was working, which is how businesses dilute their one functioning acquisition route."],
     ["When to reconsider", "At a fixed quarterly review, against evidence, rather than after seeing a competitor's video perform. Channel decisions made from anxiety are consistently worse than channel decisions made from a schedule."]],
    ["choose-the-right-channels", "channel-selection-framework", "be-everywhere-is-bad-advice"]],
];

const articleRows: Article[] = rows
  .map(([slug, title, category, published, readingTime, summary, sections, related]) => ({
    kind: "article" as const,
    slug,
    title,
    category,
    published,
    readingTime,
    summary,
    sections: sections.map(([heading, body]) => ({ heading, body })),
    related,
    updated: published,
  }))
  .sort((a, b) => (a.published < b.published ? 1 : -1));

/** Each piece carries a framing opening and its own takeaways — see `articleDepth`. */
export const articles: Article[] = withDepth(articleRows, articleDepth);

export const articleBySlug = new Map(articles.map((x) => [x.slug, x]));

/**
 * Editorial taxonomy, matching the categories published on mengoengine.com/blog.
 *
 * The live site also lists "Learning Mengo" and "Launches & Updates". Both need
 * product documentation only Mengo can supply — dashboard walkthroughs, release
 * notes — so they are tracked in docs/audit.md as content gaps rather than
 * shipped as empty category pages.
 */
export const articleCategories = [
  { slug: "marketing-automation", label: "Marketing Automation", blurb: "Why manual marketing execution breaks down, and what a system does about it." },
  { slug: "content-automation", label: "Content Automation", blurb: "Formats, briefs, voice and producing consistently without losing your voice." },
  { slug: "sales-automation", label: "Sales Automation", blurb: "Follow-up, objections, landing pages and the work of turning interest into a decision." },
  { slug: "ai-cofounder", label: "AI Cofounder", blurb: "What treating AI as a working partner changes, and what it does not." },
  { slug: "mengotalks", label: "MengoTalks", blurb: "Perspective on where marketing execution is headed, and what teams get wrong on the way." },
] as const;

export function articlesByCategory(category: Article["category"]): Article[] {
  return articles.filter((a) => a.category === category);
}
