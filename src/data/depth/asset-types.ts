import type { DepthMap } from "@/data/depth";
import { close, s } from "@/data/depth";

/**
 * Asset format depth.
 *
 * The format records themselves answer "what has to be where". What they did
 * not answer, and what a reader arriving from search actually wants, is when to
 * reach for this format at all, where it comes from inside a plan, and how it
 * fails. Those three questions are what each entry here adds.
 *
 * The "where it comes from" section replaces a single paragraph that was
 * previously hardcoded into the template and therefore identical on all
 * seventy-two format pages.
 */
export const assetTypeDepth: DepthMap = {
  /* ---------------- LinkedIn ---------------- */

  "linkedin-text-post": {
    intro:
      "The text post is the format LinkedIn is actually built around, and the one a founder can sustain without a camera, a designer or an editing workflow. It is also the format where the difference between a post that travels and a post that disappears is almost entirely structural rather than stylistic.",
    explain: [
      s(
        "Where it comes from in the plan",
        "A text post is usually the first expression of a monthly theme — the place a claim gets tested before it is committed to a carousel, an article or a landing page. The slot arrives already carrying the argument, the segment it addresses and the angle it takes on the month's theme.",
      ),
      s(
        "Why most of them fail",
        "Two reasons, both fixable. The opening two lines are written as a warm-up rather than as the claim, so nobody expands them. Or the post makes three arguments, which reads as thorough and lands as unmemorable. One idea, argued from a position, outperforms a summary of everything you think.",
      ),
    ],
    related: {
      features: ["hook-writer", "voice-profile", "content-briefs"],
      channels: ["linkedin"],
      guides: ["linkedin-founder-playbook"],
      useCases: ["start-posting-on-linkedin"],
    },
    close: close(
      "The format that carries the argument",
      "Mengo generates text posts from a calendar slot that already knows the theme and the segment, so the writing starts from a position rather than from a blank box. Join our waitlist for early access.",
    ),
  },

  "linkedin-carousel": {
    intro:
      "A carousel earns a swipe by withholding something. It suits material with genuine sequence — a framework, a process, a set of steps that only makes sense in order — and it is wasted on content that could have been a single post with a list in it.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Carousels are usually the second life of an idea that already worked as a text post or a guide section. Mengo produces them from the underlying claim rather than by slicing the earlier draft, which is what stops slide four reading as a paragraph that lost its context.",
      ),
      s(
        "The failure is treating slides as pages",
        "An article cut into eight slides gives the reader no reason to swipe, because each slide completes rather than opens. A working carousel sets up the next slide on the current one, which is a writing decision rather than a design one.",
      ),
    ],
    related: {
      features: ["carousel-builder", "repurposing-engine", "asset-library"],
      channels: ["linkedin"],
      guides: ["linkedin-founder-playbook"],
      useCases: ["repurpose-one-idea-into-ten"],
    },
    close: close(
      "Built from the claim, not from the draft",
      "The Carousel Builder works from the argument the slot carries and structures the sequence so each slide has a reason to be swiped past. Join our waitlist for early access.",
    ),
  },

  "linkedin-newsletter": {
    intro:
      "A LinkedIn newsletter notifies subscribers on publication, which makes it the only format on the platform that is not entirely at the mercy of the feed. That advantage is only worth having if the issues arrive on a schedule people can come to expect.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The newsletter takes the month's theme and treats it at length, in the one slot where a reader has explicitly asked for more from you. It is planned as the anchor of the month rather than as an overflow for ideas that did not fit elsewhere.",
      ),
      s(
        "Consistency matters more than length",
        "An issue every fortnight for a year builds something. Three issues in one month and nothing for the next quarter builds a list of people who no longer recognise your name in a notification. The cadence is the commitment, not the word count.",
      ),
    ],
    related: {
      features: ["long-form-drafting", "annual-calendar", "cadence-planning"],
      channels: ["linkedin", "email"],
      guides: ["email-newsletter-playbook"],
      useCases: ["launch-a-newsletter"],
    },
    close: close(
      "A recurring slot you can actually hold",
      "Mengo places the newsletter in the calendar at a cadence sized to your real capacity, with each issue drawn from the month's argument. Join our waitlist for early access.",
    ),
  },

  "linkedin-poll": {
    intro:
      "A poll is research that happens to be public. Used properly it tells you something about your market and produces a follow-up post you could not have written otherwise. Used as an engagement device it produces a number nobody, including you, learns anything from.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Polls are scheduled where the month's argument rests on an assumption worth checking — that a particular objection is common, that a practice is widespread. The result then feeds the follow-up slot, which is planned at the same time.",
      ),
      s(
        "Write the options before the question",
        "If the options are not mutually exclusive, the result cannot be interpreted, and a poll you cannot interpret was a waste of the only research your audience will do for free. Drafting the options first exposes that problem before it is published.",
      ),
    ],
    related: {
      features: ["audience-segments", "campaign-themes", "experiment-log"],
      channels: ["linkedin"],
      guides: ["linkedin-founder-playbook"],
      articles: ["testing-adjectives-teaches-nothing"],
    },
    close: close(
      "A poll with a follow-up already planned",
      "Mengo schedules the result post alongside the poll, so the answer becomes content rather than a screenshot nobody uses. Join our waitlist for early access.",
    ),
  },

  "founder-story-post": {
    intro:
      "A founder story post builds recognition for a person rather than for a business, which is why it works on a platform where people follow people. The structural risk is that the story becomes the point and the reader leaves with a feeling rather than an idea.",
    explain: [
      s(
        "Where it comes from in the plan",
        "These slots are placed deliberately and sparingly — usually one a month — and they are assigned the same argument as the surrounding content. The story is the entry route to the month's claim, not a separate personal track running beside it.",
      ),
      s(
        "The detail is what makes it credible",
        "A date, a number, a place, a sentence someone actually said. Stories written in generalities read as invented even when they are true, and the specific detail is exactly the part software cannot supply. Mengo asks for it rather than filling it in.",
      ),
    ],
    related: {
      features: ["voice-profile", "editorial-guardrails", "hook-writer"],
      channels: ["linkedin"],
      guides: ["linkedin-founder-playbook"],
      articles: ["founder-brand-without-oversharing"],
    },
    close: close(
      "Your story, your details",
      "Mengo structures the post and requests the specific moment from you rather than generating a plausible one. Join our waitlist for early access.",
    ),
  },

  "case-breakdown-post": {
    intro:
      "A case breakdown demonstrates competence by showing the work. It is the most persuasive format available to a business that cannot yet publish outcome figures, because the method is verifiable in a way a percentage never is.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Breakdowns are scheduled into the middle-of-funnel slots, where a reader is comparing approaches rather than deciding on a supplier. The month's theme supplies the angle: the same project can be broken down for the decision, the constraint or the sequence depending on what the month is arguing.",
      ),
      s(
        "Results only to the precision you can hold",
        "Editorial guardrails will not let a breakdown claim a figure you have not supplied. In practice this improves the post: the decisions and the reasoning carry it, and a vague outcome sentence is less persuasive than an honest one.",
      ),
    ],
    related: {
      features: ["editorial-guardrails", "long-form-drafting", "objection-mapping"],
      channels: ["linkedin"],
      useCases: ["write-case-studies-without-data"],
      articles: ["marketing-before-product-market-fit"],
    },
    close: close(
      "Method as proof",
      "Mengo builds the breakdown around the decisions you made and asks for the results you can evidence, rather than inventing the ones you cannot. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Instagram ---------------- */

  "instagram-reel-script": {
    intro:
      "A reel script is a timing document. It specifies what is said, what appears on screen and what is happening visually at each beat, because on this platform the three arrive together and a script that only handles the words produces a video that reads as a talking head.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Reel slots take the month's argument and ask what part of it can be demonstrated rather than explained. That constraint is productive: it selects for the concrete, which is also what performs.",
      ),
      s(
        "Written against what you can actually film",
        "A script requiring three locations and a second person will not be made. Mengo generates against the production capacity you declare, which is why the scripts tend to specify a desk, a screen or a single prop rather than a shoot.",
      ),
    ],
    related: {
      features: ["short-form-scripts", "hook-writer", "content-briefs"],
      channels: ["instagram"],
      guides: ["instagram-reels-playbook"],
      assetTypes: ["reel-hook-set"],
    },
    close: close(
      "Scripts you can film this week",
      "Short-Form Scripts generates to the equipment and time you actually have, with the visual and spoken layers written together. Join our waitlist for early access.",
    ),
  },

  "instagram-carousel": {
    intro:
      "The Instagram carousel is a saveable format, and saves are what the platform reads as value. That makes it the right container for something a reader would want to return to — a checklist, a framework, a set of comparisons — and the wrong one for a passing observation.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Carousel slots are assigned to the reference-shaped parts of a theme: the parts a reader might screenshot. Mengo identifies those from the month's argument rather than converting whatever was published elsewhere that week.",
      ),
      s(
        "The cover is most of the decision",
        "In a feed, the cover slide competes as a still image. If it does not state a specific outcome in type large enough to read at thumbnail size, the remaining eight slides are irrelevant however good they are.",
      ),
    ],
    related: {
      features: ["carousel-builder", "asset-library", "voice-profile"],
      channels: ["instagram"],
      guides: ["instagram-reels-playbook"],
      assetTypes: ["instagram-caption"],
    },
    close: close(
      "Made to be saved",
      "The Carousel Builder structures the sequence around a payoff worth reaching and writes the cover to be legible at feed size. Join our waitlist for early access.",
    ),
  },

  "instagram-caption": {
    intro:
      "A caption is a second channel, not a label. The image has already done one job; the caption's job is to add the thing the image cannot carry — the context, the reasoning, the story behind what is being shown.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Captions are generated alongside the visual they accompany, from the same slot brief, which is why they add rather than restate. Written afterwards and separately, a caption almost always describes the picture.",
      ),
      s(
        "The first line is a hook whether you treat it as one or not",
        "Feed truncation means the opening line is read on its own by most people who see the post. A caption that opens with a greeting spends its only guaranteed line on nothing.",
      ),
    ],
    related: {
      features: ["hook-writer", "voice-profile", "content-briefs"],
      channels: ["instagram"],
      guides: ["instagram-reels-playbook"],
      assetTypes: ["instagram-carousel"],
    },
    close: close(
      "Written with the visual, not after it",
      "Mengo produces the caption from the same brief as the asset it accompanies, so the two layers say different things on purpose. Join our waitlist for early access.",
    ),
  },

  "story-sequence": {
    intro:
      "Stories are the one place on Instagram where an audience that already knows you can be addressed directly and briefly. Planned as a sequence they can carry an argument or an offer; posted ad hoc they are a stream of fragments with no destination.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Story sequences are scheduled against offers and launches, where a warm audience needs several small touches rather than one large one. The slot specifies the destination first, and the frames are built backwards from it.",
      ),
      s(
        "Frames expire, which changes the writing",
        "Nothing here has to work for a stranger next month. That licenses a more direct, more immediate register than a feed post, and it is why story copy written in the same voice as a caption tends to feel oddly formal.",
      ),
    ],
    related: {
      features: ["campaign-briefs", "channel-sequencing", "voice-profile"],
      channels: ["instagram"],
      useCases: ["run-a-product-launch"],
      assetTypes: ["instagram-reel-script"],
    },
    close: close(
      "A sequence with a destination",
      "Mengo plans stories as a unit that arrives somewhere, with the link frame decided before the opening one is written. Join our waitlist for early access.",
    ),
  },

  "reel-hook-set": {
    intro:
      "A hook set exists because the opening second explains most of the variance in short-form performance, and because guessing at one opening teaches you nothing. Five genuinely different entry points give you a result you can generalise from.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The set is generated with the reel it belongs to, from the same slot brief. It is not a separate exercise: the hooks have to promise something the script actually delivers, which is only checkable when both exist together.",
      ),
      s(
        "Vary the angle, not the adjective",
        "Five rewordings of one opening produce five similar results and no information. A contrast, a number, an admitted mistake, a question and a demonstration are different arguments, and the winner tells you which argument your audience responds to.",
      ),
    ],
    related: {
      features: ["hook-writer", "experiment-log", "content-performance"],
      channels: ["instagram", "tiktok"],
      guides: ["instagram-reels-playbook"],
      articles: ["hooks-are-not-clickbait"],
    },
    close: close(
      "Five ways in, ranked",
      "The Hook Writer produces openings that differ by angle and notes why each might work, so testing builds judgement rather than a list of winners. Join our waitlist for early access.",
    ),
  },

  "grid-plan": {
    intro:
      "The profile grid is what a new visitor sees when they arrive from a single post, which makes it a landing page that most accounts never design. A grid plan treats the next nine to twelve posts as a composition rather than as a queue.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The grid plan is assembled from the slots already scheduled, which is what makes it feasible: it arranges work that was going to happen anyway so the top row explains the account to a stranger.",
      ),
      s(
        "It is not a reason to post filler",
        "Grids designed for visual balance produce posts that exist to occupy a square. The plan's job is ordering and alternation, not manufacturing content to complete a pattern.",
      ),
    ],
    related: {
      features: ["annual-calendar", "batch-approval", "asset-library"],
      channels: ["instagram"],
      useCases: ["fill-an-empty-calendar"],
      assetTypes: ["instagram-carousel"],
    },
    close: close(
      "The profile as a first impression",
      "Mengo arranges scheduled posts so the visible grid explains what the account is for, without inventing posts to fill it. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Email ---------------- */

  "welcome-sequence": {
    intro:
      "The welcome sequence runs unchanged for years and every subscriber passes through it, which makes it the highest-leverage set of emails a business owns. It is also the one most often replaced by a single automated thank-you and then forgotten.",
    explain: [
      s(
        "Where it comes from in the plan",
        "It is generated with whatever people are signing up for — a lead magnet, a newsletter, an enquiry form — because the first email has to deliver on that specific promise. A generic welcome flow attached to five different entry points fails at all five.",
      ),
      s(
        "The transition email is where sequences break",
        "Moving from useful to commercial too early reads as a bait and switch; never moving at all produces a list that likes you and never buys. The sequence positions that transition against a problem the earlier emails established.",
      ),
    ],
    related: {
      features: ["sequence-builder", "email-copywriting", "lead-magnet-builder"],
      channels: ["email"],
      guides: ["welcome-sequence-template"],
      useCases: ["write-a-welcome-sequence"],
    },
    close: close(
      "Written for what they actually signed up for",
      "Mengo generates the welcome sequence alongside each entry point, so the first email delivers the specific thing that was promised. Join our waitlist for early access.",
    ),
  },

  "nurture-email": {
    intro:
      "A nurture email is one message with one job inside a longer sequence. Its constraint is what makes it work: assigned a single objection, it has somewhere to go, and the reader has a reason to open the next one.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Each message is drawn from the objection map for the segment it addresses. The map decides the order — objections are answered roughly in the sequence they surface in real conversations — and the message inherits the objection rather than choosing a topic.",
      ),
      s(
        "Evidence beats reassurance",
        "Telling a hesitant reader not to worry restates the pitch. Showing them how the concern is handled — the process, the constraint, the specific case — is what actually dissolves it, and it is why these emails are shorter than they look.",
      ),
    ],
    related: {
      features: ["objection-mapping", "sequence-builder", "email-copywriting"],
      channels: ["email"],
      guides: ["lead-nurture-blueprint", "objection-map-template"],
      articles: ["the-follow-up-gap"],
    },
    close: close(
      "One email, one objection",
      "Objection mapping assigns each message its job before it is written, which is what stops a sequence repeating itself in four voices. Join our waitlist for early access.",
    ),
  },

  "newsletter-issue": {
    intro:
      "A newsletter is a standing commitment to be worth opening. It is the only channel a business genuinely owns, and the only one where the audience does not have to be re-earned from an algorithm every time.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The issue takes the month's argument and treats it at more length than any feed slot allows. Working from the theme is what stops the newsletter becoming a roundup, which is the format's most common and most fatal drift.",
      ),
      s(
        "Roundups train people to skim",
        "An issue with five short items teaches the reader that nothing in it requires attention, and skimming becomes not opening within a few months. One idea, argued properly, is a harder discipline and a much better retention strategy.",
      ),
    ],
    related: {
      features: ["long-form-drafting", "annual-calendar", "voice-profile"],
      channels: ["email"],
      guides: ["email-newsletter-playbook"],
      useCases: ["launch-a-newsletter"],
    },
    close: close(
      "One idea, every issue",
      "Mengo draws each issue from the month's argument so the newsletter accumulates a position rather than reporting the week. Join our waitlist for early access.",
    ),
  },

  "launch-email": {
    intro:
      "A launch email is defined by its position in an arc. The same offer needs a different email at announcement, at the objection stage, at proof and at deadline, and writing all four the same way is why launch sequences feel like nagging.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The campaign brief fixes the offer, the audience, the window and the end condition first. Each email is then generated for its position in that window, which is what makes the arc escalate specificity rather than volume.",
      ),
      s(
        "Urgency has to be real",
        "A deadline that passes without consequence is noticed, and it costs you the next launch. Editorial guardrails block manufactured scarcity, so the urgency in these emails comes from an actual constraint you supplied.",
      ),
    ],
    related: {
      features: ["campaign-briefs", "channel-sequencing", "editorial-guardrails"],
      channels: ["email"],
      guides: ["launch-checklist"],
      useCases: ["write-a-launch-sequence"],
    },
    close: close(
      "An arc, not four reminders",
      "Campaign Lab positions each email in the launch window and writes it for that position. Join our waitlist for early access.",
    ),
  },

  "reengagement-email": {
    intro:
      "This is the email you send to people who stopped listening. It has two acceptable outcomes and a genuinely uncomfortable requirement: it has to make leaving easy, because the contacts who will not respond are costing you delivery to the ones who would.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Re-engagement is scheduled into quiet periods as part of list hygiene, not run reactively when a send underperforms. The mini-sequence is generated with the suppression rule attached, so the archive step actually happens.",
      ),
      s(
        "Name the silence",
        "Emails that pretend no gap occurred read as automated. Acknowledging directly that you have not been in touch, and saying what has changed since, is the opening that recovers people — and it is the one most businesses avoid writing.",
      ),
    ],
    related: {
      features: ["reengagement-flows", "list-hygiene", "intent-segmentation"],
      channels: ["email"],
      guides: ["reengagement-playbook"],
      useCases: ["revive-a-cold-list"],
    },
    close: close(
      "Recover some, release the rest",
      "Mengo writes the sequence with an explicit exit and pairs it with the suppression schedule, so the list ends up smaller and more responsive. Join our waitlist for early access.",
    ),
  },

  "sales-followup-email": {
    intro:
      "The follow-up to a real conversation is the highest-converting email most businesses send and the one most often delayed until it is awkward. Its advantage is that it can be specific: it knows what was discussed and what was hesitated over.",
    explain: [
      s(
        "Where it comes from in the plan",
        "This one is generated from handoff notes rather than from a calendar slot. What the contact read, what they asked and the objection they actually raised are the inputs, which is what makes the email recognisably about that conversation.",
      ),
      s(
        "One proposal with a date",
        "Ending on an open invitation to be in touch transfers the work back to the person who was already hesitating. A specific next step with a specific time is easier to accept and, importantly, easier to decline cleanly.",
      ),
    ],
    related: {
      features: ["sales-handoff-notes", "objection-mapping", "email-copywriting"],
      channels: ["email"],
      articles: ["speed-is-a-conversion-strategy"],
      useCases: ["handle-price-objections"],
    },
    close: close(
      "Written from the conversation you actually had",
      "Handoff notes carry the objection and the context into the follow-up, so it does not read like a template with a name inserted. Join our waitlist for early access.",
    ),
  },

  /* ---------------- WhatsApp ---------------- */

  "whatsapp-opt-in-message": {
    intro:
      "The opt-in message arrives on a device where every other message is from a person the recipient knows. That context sets the standard: it has to confirm what they agreed to, deliver something immediately, and make leaving obvious.",
    explain: [
      s(
        "Where it comes from in the plan",
        "It is generated with whatever the opt-in was attached to — an enquiry, a booking, a download — because the confirmation has to name that specific thing. A generic welcome on this channel reads as a business that bought a list.",
      ),
      s(
        "Burying the exit is a false economy",
        "Making it hard to stop produces reports rather than retention, and on messaging channels a report is far more costly than an opt-out. Stating the exit plainly in the first message is what keeps the channel usable.",
      ),
    ],
    related: {
      features: ["whatsapp-sequences", "editorial-guardrails", "list-hygiene"],
      channels: ["whatsapp"],
      guides: ["whatsapp-nurture-playbook"],
      assetTypes: ["whatsapp-nurture-message"],
    },
    close: close(
      "Permission, confirmed properly",
      "Mengo writes the opt-in against the specific thing that was agreed to, with the exit stated rather than hidden. Join our waitlist for early access.",
    ),
  },

  "whatsapp-nurture-message": {
    intro:
      "A nurture message on WhatsApp is written to be answered, not clicked. The channel's advantage is that replies are normal here in a way they are not in email, and a message that closes with a link wastes that advantage.",
    explain: [
      s(
        "Where it comes from in the plan",
        "It draws on the same objection map as the email sequence but is rewritten for the medium: shorter, more direct, no preamble. The same objection sounds different when it arrives on a phone from a business you spoke to last week.",
      ),
      s(
        "Only send it if someone can reply",
        "A message inviting a response into an unmonitored number is worse than no message. Mengo asks who is available to reply before generating a nurture sequence for this channel, and paces the sequence against that answer.",
      ),
    ],
    related: {
      features: ["whatsapp-sequences", "objection-mapping", "cadence-planning"],
      channels: ["whatsapp"],
      guides: ["whatsapp-nurture-playbook"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Written for a reply",
      "Mengo generates WhatsApp sequences against your actual reply capacity, closing on questions someone can answer in a line. Join our waitlist for early access.",
    ),
  },

  "whatsapp-broadcast": {
    intro:
      "A broadcast reaches many people on a channel built for one-to-one contact, which is exactly why it needs more restraint than an email would. The frequency cap is not a nicety here; it is what determines whether the list survives.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Broadcasts are scheduled against the promotional calendar and counted against a per-segment frequency limit, so two campaigns cannot independently decide to message the same audience in the same fortnight.",
      ),
      s(
        "One subject per broadcast",
        "A message covering an announcement and an offer converts on neither, because the reader resolves the first thing they see and closes the chat. Splitting them across the calendar is almost always the better trade.",
      ),
    ],
    related: {
      features: ["whatsapp-sequences", "promotional-calendars", "cadence-planning"],
      channels: ["whatsapp"],
      guides: ["whatsapp-nurture-playbook"],
      assetTypes: ["catalogue-message"],
    },
    close: close(
      "Counted against a cap",
      "Mengo tracks broadcast frequency per segment so no audience receives three messages in a week from three different campaigns. Join our waitlist for early access.",
    ),
  },

  "whatsapp-reply-script": {
    intro:
      "Reply scripts exist because speed converts and improvisation does not scale. The point is not to automate the conversation but to remove the pause between an enquiry arriving and someone knowing what to say.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The branches are built from the questions you actually receive, which means this asset requires input Mengo cannot infer: your inbox. What comes back is a set of prepared answers in your voice rather than a generic FAQ.",
      ),
      s(
        "Scripts should sound like a person having a normal day",
        "Prepared replies fail when they read as prepared. Keeping each branch to one to three lines, in the register you would actually use, is what keeps the speed advantage without the automated tone.",
      ),
    ],
    related: {
      features: ["whatsapp-sequences", "voice-profile", "sales-handoff-notes"],
      channels: ["whatsapp"],
      guides: ["whatsapp-nurture-playbook"],
      useCases: ["qualify-leads-before-a-call"],
    },
    close: close(
      "Fast without sounding automated",
      "Mengo builds the branches from your real enquiries and writes them in your voice profile. Join our waitlist for early access.",
    ),
  },

  "catalogue-message": {
    intro:
      "A catalogue message answers a specific enquiry with a narrowed selection. Sending the full range is easier and consistently worse: choice at that scale moves the work of deciding back to someone who asked you to do it.",
    explain: [
      s(
        "Where it comes from in the plan",
        "This asset is generated in response to an enquiry rather than from a calendar slot. The enquiry supplies the constraint — budget, timing, use — and the selection is made against it.",
      ),
      s(
        "The framing line does the selling",
        "Three items with one sentence explaining why these three converts better than fifteen items with no explanation. That sentence is the part worth writing carefully, and it is usually the part omitted.",
      ),
    ],
    related: {
      features: ["whatsapp-sequences", "offer-architecture", "voice-profile"],
      channels: ["whatsapp"],
      guides: ["offer-ladder-framework"],
      industries: ["local-retail", "automotive"],
    },
    close: close(
      "A short list, chosen for them",
      "Mengo narrows the selection against what the enquiry actually said and writes the line explaining the choice. Join our waitlist for early access.",
    ),
  },

  /* ---------------- YouTube ---------------- */

  "youtube-long-form-script": {
    intro:
      "A long-form script is written for a viewer who arrived from a search or a recommendation and is deciding, in the first fifteen seconds, whether this video answers the thing they came for. Everything structural about the format follows from that one moment.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Long-form video slots are assigned to the parts of a theme that genuinely need ten minutes — a process, a walkthrough, an argument with several dependencies. The script inherits the query it is answering, which is what keeps it from becoming a monologue.",
      ),
      s(
        "Cut the introduction",
        "Channel branding, a welcome and an explanation of what the channel is about all sit in front of the promise the title made. Viewers who came for that promise leave during it, and the retention graph shows the drop in the first twenty seconds every time.",
      ),
    ],
    related: {
      features: ["long-form-drafting", "content-briefs", "content-performance"],
      channels: ["youtube"],
      assetTypes: ["chapter-plan", "video-title-set"],
      articles: ["write-for-the-format"],
    },
    close: close(
      "Structured for retention, not for introduction",
      "Mengo scripts long-form video around the question it answers, with the promise confirmed before anything else happens. Join our waitlist for early access.",
    ),
  },

  "youtube-short-script": {
    intro:
      "A YouTube Short reaches a different audience from your long-form videos, on a surface that behaves like a feed rather than like a library. Treating shorts as trailers for longer videos usually produces something that works as neither.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Shorts are generated from ideas in the theme that can be delivered completely in under a minute. That is a selection criterion, not a compression exercise, and it is why the shorts in a plan are rarely cut-downs of the long-form slot.",
      ),
      s(
        "Deliver the whole thing",
        "A short that withholds the payoff to drive a click leaves the viewer with nothing and rarely earns the click anyway. One complete idea builds the recognition that eventually sends people to the longer work.",
      ),
    ],
    related: {
      features: ["short-form-scripts", "hook-writer", "repurposing-engine"],
      channels: ["youtube", "tiktok"],
      assetTypes: ["tiktok-script"],
      articles: ["repurposing-is-not-reposting"],
    },
    close: close(
      "Complete in sixty seconds",
      "Mengo selects short-form ideas that can be finished rather than teased, and writes them natively for the format. Join our waitlist for early access.",
    ),
  },

  "video-title-set": {
    intro:
      "The title and the thumbnail are a single decision made by a viewer in under a second, and the title is the half that also has to work in search results. A set of options exists because the right title depends on which audience you want the video to find.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Titles are generated with the script from the same brief, and the target query comes from the intent map rather than from instinct. That is what allows the search-led option to be genuinely search-led rather than a guess with keywords in it.",
      ),
      s(
        "Five rewordings is not a set",
        "Useful options differ in what they target: one written for a search query, one for curiosity in a recommendation feed, one stating the outcome plainly. Choosing between those is a real decision; choosing between five synonyms is not.",
      ),
    ],
    related: {
      features: ["hook-writer", "content-briefs", "experiment-log"],
      channels: ["youtube"],
      assetTypes: ["thumbnail-brief", "youtube-long-form-script"],
      glossary: ["search-intent"],
    },
    close: close(
      "Options that differ by intent",
      "Mengo generates titles that target different entry routes and pairs each with the thumbnail idea it works alongside. Join our waitlist for early access.",
    ),
  },

  "thumbnail-brief": {
    intro:
      "A thumbnail is designed at 1280 by 720 and seen at roughly a fifth of that. Almost every failure in the format comes from designing for the canvas rather than for the size at which the decision is actually made.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The brief is produced with the title, because the two have to divide the work rather than repeat it. If the title states the outcome, the thumbnail shows the situation; if the thumbnail carries the number, the title supplies the context.",
      ),
      s(
        "Three elements is the ceiling",
        "A subject, one text fragment and one contrast element. Anything beyond that becomes an indistinct rectangle at feed size, which is why detailed thumbnails so often underperform simpler ones from smaller channels.",
      ),
    ],
    related: {
      features: ["asset-library", "content-briefs"],
      channels: ["youtube"],
      assetTypes: ["video-title-set"],
      articles: ["write-for-the-format"],
    },
    close: close(
      "Specified for the size it is seen at",
      "Mengo briefs thumbnails against legibility at feed width and checks the pairing with the title. Join our waitlist for early access.",
    ),
  },

  "video-description": {
    intro:
      "A description does two unrelated jobs: the first 150 characters sell the click in a truncated preview, and the rest supplies context, navigation and links. Writing it as one continuous block means neither job is done properly.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The description is generated from the script and the chapter plan, which is what makes the timestamps accurate and the summary match what was actually said. Written separately from memory, descriptions drift from the video within a few uploads.",
      ),
      s(
        "One primary link",
        "A list of eight links produces no clicks on any of them. Choosing the single destination this video should send people to, and placing it above the fold, is worth more than comprehensive linking.",
      ),
    ],
    related: {
      features: ["content-briefs", "long-form-drafting"],
      channels: ["youtube"],
      assetTypes: ["chapter-plan"],
      glossary: ["meta-description"],
    },
    close: close(
      "Written for the truncated view first",
      "Mengo writes the visible opening as its own unit and builds the remainder from the chapter plan. Join our waitlist for early access.",
    ),
  },

  "chapter-plan": {
    intro:
      "Chapters are planned before filming, not added afterwards. A video recorded without a chapter structure rarely has one, and the attempt to impose it in the edit produces sections that begin mid-thought.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The chapter plan is the outline. It is generated first, from the question the video answers, and the script is written into it — which is why the resulting recording has the shape the chapters describe.",
      ),
      s(
        "Name chapters as questions",
        "A chapter called Background tells a viewer nothing. A chapter named for the question it answers is both more useful to someone scrubbing the timeline and more likely to surface in search.",
      ),
    ],
    related: {
      features: ["content-briefs", "long-form-drafting"],
      channels: ["youtube"],
      assetTypes: ["youtube-long-form-script", "video-description"],
      glossary: ["search-intent"],
    },
    close: close(
      "The outline that shapes the recording",
      "Mengo produces the chapter structure before the script, so the video has the segmentation the description will claim it has. Join our waitlist for early access.",
    ),
  },

  /* ---------------- TikTok ---------------- */

  "tiktok-script": {
    intro:
      "TikTok rewards watch-through above almost everything else, which makes pacing the dominant variable. A script for this platform is closer to an edit list than to a piece of writing: it specifies what happens second by second.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The slot supplies the idea and the audience; the format supplies the constraint. Mengo generates against what you can film alone in a few minutes, because scripts requiring a production are the ones that never get made.",
      ),
      s(
        "Assume the sound is off for part of the audience",
        "Captions are not an accessibility addition on this platform, they are the primary text layer for a meaningful share of viewers. Writing the on-screen text as its own layer rather than as a transcript is what makes a video work silently.",
      ),
    ],
    related: {
      features: ["short-form-scripts", "hook-writer", "content-performance"],
      channels: ["tiktok"],
      assetTypes: ["tiktok-hook-set"],
      glossary: ["watch-through-rate"],
    },
    close: close(
      "Written to hold attention, not to fill time",
      "Short-Form Scripts generates to a length the idea can sustain, with the caption layer written separately. Join our waitlist for early access.",
    ),
  },

  "tiktok-hook-set": {
    intro:
      "On TikTok the variance between two versions of the same video is dominated by the first second. A hook set exists so that variance is something you steer rather than something that happens to you.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Hooks are generated with the script and checked against it. An opening that promises something the video does not deliver is rejected before it reaches you, because the cost of that mismatch is paid in watch-through and in follower trust.",
      ),
      s(
        "Under eight words, and different from each other",
        "Length is a hard constraint on this platform. Difference is the useful one: a contrast, an admitted mistake, a result, a question and a demonstration are five arguments, and the winner tells you something about your audience.",
      ),
    ],
    related: {
      features: ["hook-writer", "experiment-log", "editorial-guardrails"],
      channels: ["tiktok"],
      assetTypes: ["reel-hook-set"],
      articles: ["hooks-are-not-clickbait"],
    },
    close: close(
      "Openings that pay off",
      "Guardrails reject hooks the script does not deliver, so testing improves performance without spending credibility. Join our waitlist for early access.",
    ),
  },

  "trend-adaptation-brief": {
    intro:
      "Using a trending format is a distribution decision. The risk is that the format arrives with its own meaning attached and quietly replaces yours, leaving a video that performed and said nothing about your business.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The brief maps a claim you are already making onto the structure the trend requires. Starting from your existing theme rather than from the trend is what keeps the adaptation from becoming an unrelated post that happened to reach people.",
      ),
      s(
        "The honest answer is sometimes no",
        "Some formats do not suit some businesses, and forcing the fit reads exactly as it is. The brief includes a fit assessment that is allowed to conclude this one is not for you.",
      ),
    ],
    related: {
      features: ["campaign-themes", "voice-profile", "editorial-guardrails"],
      channels: ["tiktok", "instagram"],
      articles: ["you-do-not-need-to-be-on-tiktok"],
      assetTypes: ["tiktok-script"],
    },
    close: close(
      "Your message, their structure",
      "Mengo separates the mechanics of a trend from the example, so what you publish carries your argument rather than someone else's. Join our waitlist for early access.",
    ),
  },

  "comment-response-video": {
    intro:
      "A comment is a question your audience has already asked, in public, in their own words. Responding on camera produces content with demand attached and removes the hardest part of short-form: deciding what to make.",
    explain: [
      s(
        "Where it comes from in the plan",
        "These are the reactive slots — the roughly one per week reserved for something you could not have planned. Holding that slot open is what allows a good comment to be used within days rather than filed and forgotten.",
      ),
      s(
        "Answer immediately, then elaborate",
        "Withholding the answer to keep people watching produces the opposite. Answering in the first five seconds and spending the rest on the reasoning holds attention because the viewer knows what they are getting.",
      ),
    ],
    related: {
      features: ["short-form-scripts", "annual-calendar", "content-performance"],
      channels: ["tiktok", "instagram"],
      assetTypes: ["tiktok-script"],
      useCases: ["turn-reviews-into-content"],
    },
    close: close(
      "Content the audience asked for",
      "Mengo reserves reactive slots in the calendar so a good question can become a video while it is still live. Join our waitlist for early access.",
    ),
  },

  "series-plan": {
    intro:
      "A series gives a viewer a reason to follow rather than merely to watch. The repeating structure is what makes the second episode recognisable, and the defined end is what stops the format outliving its idea.",
    explain: [
      s(
        "Where it comes from in the plan",
        "A series is scoped against how many episodes you can realistically produce, which is asked before the arc is designed. A twelve-part series planned by someone with capacity for five is a plan to abandon something publicly.",
      ),
      s(
        "Escalation is what makes following worthwhile",
        "If each episode is interchangeable, there is no reason to follow rather than to watch whichever one appears. Building so that later episodes assume the earlier ones is what converts a viewer into a subscriber.",
      ),
    ],
    related: {
      features: ["campaign-themes", "annual-calendar", "cadence-planning"],
      channels: ["tiktok", "youtube"],
      guides: ["90-day-content-plan"],
      articles: ["batching-beats-daily"],
    },
    close: close(
      "Scoped to what you can finish",
      "Mengo sizes a series against your declared capacity and plans the ending before the first episode. Join our waitlist for early access.",
    ),
  },

  /* ---------------- X ---------------- */

  "x-post": {
    intro:
      "The character limit is the point. A claim that survives compression to a single post is a claim you understand well enough to use everywhere else, which makes this format a cheap test of whether an argument is actually ready.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Single posts are where the month's argument is tried in its shortest form, often before the longer assets that depend on it are produced. What resists compression usually needs more thinking rather than more words.",
      ),
      s(
        "Hedging costs more here than anywhere",
        "Qualifiers consume a large share of a small budget and remove the edge that made the claim worth posting. Stating it flatly and handling the exceptions in replies is the format's native rhythm.",
      ),
    ],
    related: {
      features: ["hook-writer", "positioning-generator", "voice-profile"],
      channels: ["x"],
      assetTypes: ["x-thread"],
      articles: ["your-positioning-is-a-description"],
    },
    close: close(
      "The shortest version of the argument",
      "Mengo uses the single post to test a claim before the assets that depend on it are produced. Join our waitlist for early access.",
    ),
  },

  "x-thread": {
    intro:
      "A thread is not a long post broken up. Each post in it is quoted, screenshotted and read alone, which means each has to survive that treatment — a constraint that shapes the writing more than the length does.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Threads are generated from arguments with genuine internal structure: a sequence of steps, a case built from several pieces of evidence. Ideas without that structure become a list, and a list reads better as one post.",
      ),
      s(
        "No sentence spans two posts",
        "Continuing a thought across a break forces the reader to hold it while the interface scrolls. Writing each post as a complete unit is what makes the thread readable and what makes any individual post quotable.",
      ),
    ],
    related: {
      features: ["long-form-drafting", "repurposing-engine", "content-briefs"],
      channels: ["x"],
      assetTypes: ["x-post"],
      articles: ["write-for-the-format"],
    },
    close: close(
      "Each post survives alone",
      "Mengo writes threads so no idea is split across a break, which is what makes them quotable rather than merely long. Join our waitlist for early access.",
    ),
  },

  "reply-strategy-brief": {
    intro:
      "For a small account, replying is usually higher-reach than posting. It is also the activity most likely to consume an entire morning, which is why it belongs in a plan with a time box rather than in the gaps between other work.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The target set is chosen from where your audience already is rather than from follower counts, and it is treated as a scheduled activity with a defined window. That framing is what makes it sustainable past the second week.",
      ),
      s(
        "Agreement adds nothing",
        "A reply that restates the original post in different words is invisible. The replies worth making add a specific example, a qualification, or a respectful disagreement — all of which require you to have a position.",
      ),
    ],
    related: {
      features: ["channel-ranking", "review-cadence", "voice-profile"],
      channels: ["x", "linkedin"],
      guides: ["channel-selection-framework"],
      articles: ["be-everywhere-is-bad-advice"],
    },
    close: close(
      "Bounded, deliberate, scheduled",
      "Mengo treats replying as a planned activity with a target set and a time limit rather than an open-ended habit. Join our waitlist for early access.",
    ),
  },

  "quote-post": {
    intro:
      "A quote post borrows someone else's audience and owes them something in return. That something is a position: agreement adds nothing to either audience, and the quote is only worth making if you have somewhere different to stand.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Quote posts sit in the reactive part of the plan, drawing on the month's argument to respond to something current. The theme supplies the angle, which is what stops the response being a generic endorsement.",
      ),
      s(
        "Disagree with the argument, not the person",
        "Disagreement travels further than agreement and costs more when it is aimed at an individual. Keeping the disagreement about the claim is both fairer and, in practice, considerably more persuasive.",
      ),
    ],
    related: {
      features: ["voice-profile", "editorial-guardrails", "campaign-themes"],
      channels: ["x"],
      assetTypes: ["x-post"],
      articles: ["content-that-only-you-could-write"],
    },
    close: close(
      "Add a position or say nothing",
      "Mengo generates quote posts only where the month's argument gives you something specific to add. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Facebook ---------------- */

  "facebook-group-post": {
    intro:
      "Groups are communities with rules, most of which exist because someone previously used the group as a distribution channel. Posting well here means accepting that the return is indirect and arrives through recognition rather than through clicks.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Group posts are drawn from the practical end of your expertise — the specific thing you know because you do the work. That specificity is what earns attention in a room that has seen a great deal of generic advice.",
      ),
      s(
        "The link belongs in a comment",
        "An outbound link in the body is the fastest way to have a post removed and an account distrusted. Being useful first, with a path to you available for anyone who wants it, is slower and considerably more effective.",
      ),
    ],
    related: {
      features: ["voice-profile", "content-briefs", "channel-ranking"],
      channels: ["facebook"],
      industries: ["home-services", "local-retail"],
      articles: ["referrals-are-not-a-strategy"],
    },
    close: close(
      "Useful first, findable second",
      "Mengo writes group posts from your actual experience and keeps the contact path where the group's norms allow it. Join our waitlist for early access.",
    ),
  },

  "local-community-post": {
    intro:
      "A local post is read by people who will recognise the street names. That is the entire advantage of the format, and it disappears the moment the post could have been written about anywhere.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Local slots require input Mengo cannot infer: the areas you actually cover, a job you did nearby, a local condition that affects the work. The post is structured around that detail rather than around a service description.",
      ),
      s(
        "Phone first, where that is how people behave",
        "In many local categories a number is used and a form is not. Matching the contact path to how local buyers actually get in touch matters more than the copy above it.",
      ),
    ],
    related: {
      features: ["landing-page-copy", "content-briefs", "editorial-guardrails"],
      channels: ["facebook"],
      industries: ["home-services", "restaurants"],
      useCases: ["build-a-local-seo-page-set"],
    },
    close: close(
      "Written for people who know the area",
      "Mengo asks for the local specifics rather than generating a plausible substitute, and flags the pages that lack them. Join our waitlist for early access.",
    ),
  },

  "facebook-event-page": {
    intro:
      "An event listing converts a browse into a commitment, and it does so mostly on practical information. The description sells the reason to come; the details decide whether someone can.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The listing is generated from the event brief alongside the promotion sequence, so the page and the reminders describe the same thing. Written separately, the two drift and the reminders reference details the page never stated.",
      ),
      s(
        "Missing practicalities are the usual blocker",
        "Cost, parking, accessibility, duration and whether children are welcome. Their absence does not produce a question, it produces a scroll, which is why these belong above the persuasive copy rather than beneath it.",
      ),
    ],
    related: {
      features: ["campaign-briefs", "launch-checklists", "landing-page-copy"],
      channels: ["facebook", "events-webinars"],
      industries: ["hospitality", "events-weddings"],
      assetTypes: ["registration-page"],
    },
    close: close(
      "The details people actually check",
      "Mengo generates the listing from the same brief as the promotion sequence, with the practical fields required rather than optional. Join our waitlist for early access.",
    ),
  },

  "facebook-video-post": {
    intro:
      "Native video on Facebook autoplays without sound into a feed where most viewers never enable it. Captions are therefore the primary text layer, and a video that only works with audio is a video most of its audience will not understand.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Video slots here are assigned to material with something to show — a place, a process, a before and after. Talking-head explanations of abstract points work considerably better on channels where sound is expected.",
      ),
      s(
        "Captions are written, not transcribed",
        "A verbatim transcript is difficult to read at speed. Phrasing the caption layer for reading, in shorter units than the spoken line, is what makes a silent viewing comprehensible rather than merely available.",
      ),
    ],
    related: {
      features: ["short-form-scripts", "asset-library", "content-briefs"],
      channels: ["facebook"],
      assetTypes: ["instagram-reel-script"],
      articles: ["write-for-the-format"],
    },
    close: close(
      "Legible with the sound off",
      "Mengo writes the caption layer as its own pass rather than as a transcript of the script. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Organic search ---------------- */

  "seo-article": {
    intro:
      "An article written for search has one job: answer a specific query completely, for a reader who arrived mid-sentence and will leave the moment it becomes clear this is not the page they wanted.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The target query comes from the intent map, which is built from your actual services rather than from a keyword tool's suggestions. That is what stops the archive filling with articles about topics you do not sell.",
      ),
      s(
        "The answer goes first",
        "Withholding the answer until after the context is a habit from print. On a search page it produces an immediate return to the results, and the return is itself a signal. Answer, then explain why, then handle the caveats.",
      ),
    ],
    related: {
      features: ["long-form-drafting", "content-briefs", "content-performance"],
      channels: ["organic-search"],
      guides: ["local-seo-checklist"],
      glossary: ["search-intent", "long-tail-keyword"],
    },
    close: close(
      "One query, answered completely",
      "Mengo writes each article to a single intent taken from your intent map, with the internal links planned at draft time. Join our waitlist for early access.",
    ),
  },

  "comparison-article": {
    intro:
      "A comparison page catches people at the point of decision, which makes it valuable and makes honesty a practical requirement rather than a virtue. Readers arrive expecting bias and calibrate against it.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Mengo generates comparisons against categories of approach rather than named competitors. Category comparisons stay accurate as products change, avoid claims about someone else's roadmap, and answer the question the reader is actually asking.",
      ),
      s(
        "State who should choose the other thing",
        "A page where the alternative never wins is read as marketing and discarded. Naming the situations where the alternative is genuinely better is what makes the rest of the page credible, and it also filters out buyers you would have lost later.",
      ),
    ],
    related: {
      features: ["competitor-context", "editorial-guardrails", "long-form-drafting"],
      channels: ["organic-search"],
      comparisons: ["mengo-vs-doing-it-yourself"],
      glossary: ["objection-handling"],
    },
    close: close(
      "Honest enough to be believed",
      "Mengo writes comparisons at the level of approach and requires an explicit statement of who should choose the alternative. Join our waitlist for early access.",
    ),
  },

  "landing-page": {
    intro:
      "A landing page is defined by exclusion. Every element on it either advances one decision or competes with it, and the discipline of the format is in what does not appear rather than in what does.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The page is generated from the campaign brief, which has already fixed the single decision and the audience. Each section is then justified by a named objection from the objection map rather than added because the page felt short.",
      ),
      s(
        "Repeat the action in the same words",
        "Placing the same call to action at each natural decision point, phrased identically, outperforms varying it. Different wording for the same action reads as different actions and reintroduces the hesitation the section just removed.",
      ),
    ],
    related: {
      features: ["landing-page-copy", "objection-mapping", "campaign-briefs"],
      channels: ["organic-search"],
      guides: ["landing-page-checklist"],
      useCases: ["write-landing-page-copy"],
    },
    close: close(
      "Defined by what it leaves off",
      "Landing Page Copy generates each section against the objection it removes, with the action repeated in consistent language. Join our waitlist for early access.",
    ),
  },

  "faq-page": {
    intro:
      "An FAQ page is the cheapest conversion asset most businesses own and the one most often filled with questions nobody asked. Its value comes entirely from using the real questions, including the ones that are uncomfortable to answer.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The questions come from your inbox, your calls and your enquiry form, not from a template. Mengo asks for them and structures the answers; it will not invent a question to fill the page out.",
      ),
      s(
        "Order by frequency, not by flattery",
        "Most FAQ pages open with the questions the business enjoys answering. Putting the most-asked question first — usually about price or scope — is what turns the page from marketing into a service.",
      ),
    ],
    related: {
      features: ["objection-mapping", "editorial-guardrails", "landing-page-copy"],
      channels: ["organic-search"],
      guides: ["objection-map-template"],
      glossary: ["schema-markup", "objection-handling"],
    },
    close: close(
      "The awkward questions, answered",
      "Mengo builds the page from questions you actually receive and orders them by how often they arrive. Join our waitlist for early access.",
    ),
  },

  "glossary-entry": {
    intro:
      "A glossary entry ranks because it answers a definitional query quickly, and it earns a visit because it explains why the term matters to someone running a business. A page that does only the first is a dictionary; a page that does only the second never gets found.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Glossary terms are generated from the vocabulary your own content uses. That keeps the set coherent and internally linkable, and it avoids the common failure of publishing two hundred definitions unrelated to anything else on the site.",
      ),
      s(
        "The definition has to be quotable",
        "One sentence, precise enough to stand alone in a search result and plain enough to be understood by someone outside the field. Everything else on the page is context, and the context is why the reader stays.",
      ),
    ],
    related: {
      features: ["content-briefs", "long-form-drafting"],
      channels: ["organic-search"],
      glossary: ["search-intent", "internal-linking"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "Definitions that connect to something",
      "Mengo generates glossary terms from the vocabulary your content already uses, so the set links together rather than sitting apart. Join our waitlist for early access.",
    ),
  },

  "location-page": {
    intro:
      "A location page is a bet that someone searching for your service near a specific place should find you rather than a directory. It only pays off if the page contains information a directory could not generate.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Each page requires local substance supplied by you: areas covered, travel considerations, work done nearby, regional differences that affect the job. Mengo structures the page and flags the ones where that substance is missing.",
      ),
      s(
        "Ten real pages beat sixty thin ones",
        "A large set of near-identical pages with the place name swapped ranks poorly, converts worse, and creates a maintenance liability. Restricting the set to locations you genuinely serve is both the safer and the more effective choice.",
      ),
    ],
    related: {
      features: ["landing-page-copy", "editorial-guardrails", "content-briefs"],
      channels: ["organic-search"],
      guides: ["local-seo-checklist"],
      useCases: ["build-a-local-seo-page-set"],
    },
    close: close(
      "Local pages with local substance",
      "Mengo requires genuine local detail per page and will flag a thin one rather than generating plausible filler. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Google Ads ---------------- */

  "search-ad-copy": {
    intro:
      "Responsive search ads are assembled by the platform from the assets you supply, in combinations you do not choose. That changes the writing task: you are not writing an advert, you are writing components that have to make sense in any arrangement.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Copy is generated per keyword group from the intent map, and it is written against the page it points at. A headline promising something the destination does not deliver is the most expensive kind of mismatch on this channel.",
      ),
      s(
        "Qualify in the ad, not on the page",
        "Including a price band or a fit signal reduces clicks and improves what arrives. On a channel where every click is paid for, suppressing the wrong ones is worth more than maximising the total.",
      ),
    ],
    related: {
      features: ["ad-concepting", "landing-page-copy", "metric-selection"],
      channels: ["google-ads"],
      assetTypes: ["keyword-intent-map", "negative-keyword-plan"],
      glossary: ["impression-share"],
    },
    close: close(
      "Written to be assembled",
      "Mengo generates headline and description sets that hold together in any combination and match the page they point at. Join our waitlist for early access.",
    ),
  },

  "keyword-intent-map": {
    intro:
      "An intent map sorts queries by what the searcher is trying to do, which is the decision that determines both the ad and the page behind it. Grouping by topic instead of by intent is why so many accounts send research traffic to a booking page.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The map is built from your actual service list and your positioning, not from a volume export. Queries you deliberately will not bid on are recorded with the reason, which is what stops the same term being added back in six months.",
      ),
      s(
        "Every group needs a destination",
        "A group with no page written for its intent is a group that will underperform however well the ad is written. Building the map surfaces the pages you are missing before you spend to discover it.",
      ),
    ],
    related: {
      features: ["channel-ranking", "landing-page-copy", "content-briefs"],
      channels: ["google-ads", "organic-search"],
      glossary: ["search-intent", "long-tail-keyword"],
      assetTypes: ["negative-keyword-plan"],
    },
    close: close(
      "Intent first, then the page",
      "Mengo maps queries to intent stages and assigns each group a destination, flagging the ones that have nowhere to land. Join our waitlist for early access.",
    ),
  },

  "ad-extension-set": {
    intro:
      "Extensions occupy more of a search advert's visible area than the advert itself, and they are routinely filled with generic phrases. Treated as real information they are the cheapest available improvement to a paid search account.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Sitelinks are drawn from pages that actually exist and are genuinely different from each other. Where the account has four sitelinks pointing at variations of one page, that is a content gap the plan surfaces rather than papers over.",
      ),
      s(
        "Concrete beats complimentary",
        "Free initial call, same-week appointments, fixed quote — each of these tells a searcher something. Great service and quality guaranteed tell them nothing and occupy the same space.",
      ),
    ],
    related: {
      features: ["ad-concepting", "offer-architecture", "landing-page-copy"],
      channels: ["google-ads"],
      assetTypes: ["search-ad-copy"],
      guides: ["offer-ladder-framework"],
    },
    close: close(
      "Extensions that carry information",
      "Mengo writes extensions from your real differentiators and checks that each sitelink has somewhere distinct to go. Join our waitlist for early access.",
    ),
  },

  "negative-keyword-plan": {
    intro:
      "Negative keywords are the part of a paid search account that saves money rather than spending it. Built before launch they prevent waste; discovered afterwards they are a record of what you already paid for.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The initial list comes from what you do not sell and who is not your buyer — both answered in the brief. Job seekers, students, people looking for free versions and adjacent services you do not offer are the standard first four groups.",
      ),
      s(
        "It needs a review rhythm",
        "Search terms evolve, and a list built once decays. Scheduling a fixed monthly review of actual search terms is what keeps the plan working, and it is the step most accounts skip after the first month.",
      ),
    ],
    related: {
      features: ["ad-concepting", "review-cadence", "metric-selection"],
      channels: ["google-ads"],
      assetTypes: ["keyword-intent-map"],
      guides: ["monthly-review-template"],
    },
    close: close(
      "Exclusions decided before the spend",
      "Mengo builds the exclusion list from what you told it you do not sell, with a review schedule attached. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Meta Ads ---------------- */

  "meta-ad-creative-brief": {
    intro:
      "On Meta, creative carries most of the performance difference between campaigns. That makes the brief the highest-value document in a paid social plan and the one most often replaced by a link to a competitor's advert.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Each brief carries one angle from the offer angle set, so the result of a test is interpretable. Briefs combining three claims produce creative that performs or does not for reasons nobody can identify afterwards.",
      ),
      s(
        "Formats are specified, not cropped",
        "Vertical and square are different compositions. Producing one master and cropping it puts the subject in the wrong place in at least one placement, which is a common and entirely avoidable performance loss.",
      ),
    ],
    related: {
      features: ["ad-concepting", "campaign-briefs", "experiment-log"],
      channels: ["meta-ads"],
      assetTypes: ["offer-angle-set", "meta-ad-copy"],
      glossary: ["creative-fatigue"],
    },
    close: close(
      "One angle per brief",
      "Mengo specifies the hook shot by shot and separates the format variants, so a test result means something. Join our waitlist for early access.",
    ),
  },

  "meta-ad-copy": {
    intro:
      "Meta ad copy is read in truncated form by nearly everyone who sees it. The visible portion has to complete the proposition on its own, because the expansion is a decision most people never make.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The copy is generated with the creative brief and the destination, so the promise, the image and the page agree. Written separately, ad copy tends to describe the product while the creative sells the outcome.",
      ),
      s(
        "Put the objection inside the visible text",
        "The most common reason someone scrolls past is usually predictable — price, relevance, credibility. Addressing it before the truncation point does more than any improvement to the expanded copy underneath.",
      ),
    ],
    related: {
      features: ["ad-concepting", "objection-mapping", "landing-page-copy"],
      channels: ["meta-ads"],
      assetTypes: ["meta-ad-creative-brief"],
      guides: ["objection-map-template"],
    },
    close: close(
      "Complete before the cut",
      "Mengo writes the visible portion as a self-contained proposition with the main objection already handled. Join our waitlist for early access.",
    ),
  },

  "retargeting-sequence": {
    intro:
      "Retargeting reaches people who already visited, which means the audience is qualified and the message should not be the same one they already declined. A sequence treats recency as information rather than as a targeting parameter.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The tiers are built from the objection map: recent visitors get the specific objection they were most likely stuck on, older ones get a reintroduction. The frequency cap is set as part of the plan rather than left at the platform default.",
      ),
      s(
        "Over-serving costs more than it returns",
        "An advert seen twenty times by someone who chose not to buy converts almost nobody and attaches irritation to your name. The cap protects an asset that does not appear in the campaign report.",
      ),
    ],
    related: {
      features: ["intent-segmentation", "ad-concepting", "cadence-planning"],
      channels: ["meta-ads"],
      glossary: ["retargeting", "creative-fatigue"],
      useCases: ["recover-abandoned-enquiries"],
    },
    close: close(
      "Different message, different recency",
      "Mengo tiers the sequence by how recently someone visited and sets a frequency ceiling as part of the plan. Join our waitlist for early access.",
    ),
  },

  "ugc-brief": {
    intro:
      "A creator brief has to be specific enough to be usable and loose enough that the result still sounds like a person. Scripting it word for word produces a performance, and the performance is exactly what this format exists to avoid.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The talking points come from your claims and the evidence behind them, and the do-not-say list comes from your editorial guardrails and any regulatory constraints in your sector. Both are supplied up front rather than corrected in review.",
      ),
      s(
        "The do-not-say list protects both sides",
        "A creator who unknowingly makes a claim you cannot support creates a problem for you and an awkward conversation for them. Naming the boundaries in the brief is faster and considerably fairer than editing afterwards.",
      ),
    ],
    related: {
      features: ["editorial-guardrails", "ad-concepting", "voice-profile"],
      channels: ["meta-ads", "tiktok"],
      guides: ["ai-content-guardrails-checklist"],
      industries: ["healthcare", "financial-services"],
    },
    close: close(
      "Points to hit, lines not to cross",
      "Mengo generates the talking points from your evidence and the do-not-say list from your sector's constraints. Join our waitlist for early access.",
    ),
  },

  "offer-angle-set": {
    intro:
      "One offer can be entered through several different problems. An angle set makes those routes explicit so that testing compares arguments rather than phrasings, which is the difference between learning something and generating a winner you cannot explain.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Angles are derived from your audience segments and the objection map: each one enters through a problem a specific segment actually has. That is why the set is usually four to six rather than twenty.",
      ),
      s(
        "Run the ones that can be told apart",
        "Two angles addressing the same problem in different words will produce indistinguishable results. The set specifies which angles to run together so the outcome distinguishes between them.",
      ),
    ],
    related: {
      features: ["audience-segments", "ad-concepting", "experiment-log"],
      channels: ["meta-ads"],
      assetTypes: ["meta-ad-creative-brief"],
      articles: ["testing-adjectives-teaches-nothing"],
    },
    close: close(
      "Test the argument, not the adjective",
      "Mengo builds angle sets from your segments and objections, and specifies which to run together. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Pinterest ---------------- */

  "pin-design-brief": {
    intro:
      "Pinterest is a search surface where the query is answered with images. That makes a pin a search result, and the text on it the thing that has to communicate the outcome before anyone reads the description.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The brief is generated from the destination page, so the pin promises what the page delivers. Pins produced independently of a destination are the most common reason Pinterest traffic bounces immediately.",
      ),
      s(
        "One subject, four to eight words",
        "In a masonry grid, a busy image is indistinguishable from the images around it. A single focal point with a short outcome statement is what survives being one of thirty results on a phone screen.",
      ),
    ],
    related: {
      features: ["asset-library", "content-briefs", "landing-page-copy"],
      channels: ["pinterest"],
      assetTypes: ["pin-description"],
      industries: ["interior-design", "events-weddings"],
    },
    close: close(
      "Built from the page it points at",
      "Mengo briefs pins against the destination so the promise on the image matches what the click delivers. Join our waitlist for early access.",
    ),
  },

  "pin-description": {
    intro:
      "A pin description is written for a search engine that happens to be a mood board. It should use the language people type rather than the language your brand prefers, because the description is largely how the pin gets found.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Target phrases come from the intent map, and the description is generated with the pin brief so the visual and the text target the same query rather than two adjacent ones.",
      ),
      s(
        "Say what the click delivers",
        "A description that only describes the image produces clicks that bounce, and bounces are a signal. Stating what the linked page actually contains costs a sentence and improves the quality of the traffic considerably.",
      ),
    ],
    related: {
      features: ["content-briefs", "landing-page-copy"],
      channels: ["pinterest"],
      assetTypes: ["pin-design-brief", "board-structure-plan"],
      glossary: ["search-intent"],
    },
    close: close(
      "Query language, not brand language",
      "Mengo writes descriptions from the intent map's phrasing and states what the destination delivers. Join our waitlist for early access.",
    ),
  },

  "board-structure-plan": {
    intro:
      "Boards are how Pinterest works out what an account is about. Organising them around your internal product categories rather than around how people search is the structural mistake that limits most business accounts.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Board clusters are derived from your content themes and the intent map, which is why the resulting names read as things people look for rather than as your service list with title case applied.",
      ),
      s(
        "Distribution keeps boards coherent",
        "Without a plan for where new pins go, boards blur into each other within a few months and the topical signal weakens. Assigning each content theme a home board is a small discipline with a long payoff.",
      ),
    ],
    related: {
      features: ["campaign-themes", "annual-calendar", "content-briefs"],
      channels: ["pinterest"],
      assetTypes: ["pin-description"],
      glossary: ["content-pillar"],
    },
    close: close(
      "Boards shaped like searches",
      "Mengo derives the board structure from your themes and search phrasing, with a distribution rule for new pins. Join our waitlist for early access.",
    ),
  },

  "idea-pin-script": {
    intro:
      "An idea pin keeps the viewer on the platform, which limits its ability to send traffic and increases its ability to build recognition. Judging it by clicks misreads what the format is for.",
    explain: [
      s(
        "Where it comes from in the plan",
        "These slots are assigned to processes and step sequences — the material that benefits from being shown page by page. The theme supplies the process; the format supplies the pagination.",
      ),
      s(
        "Every page should survive a screenshot",
        "Pages are saved and shared individually, which means each one has to make sense alone. Building pages that only work in sequence loses most of the format's distribution advantage.",
      ),
    ],
    related: {
      features: ["short-form-scripts", "repurposing-engine", "asset-library"],
      channels: ["pinterest"],
      assetTypes: ["pin-design-brief"],
      industries: ["interior-design", "food-beverage"],
    },
    close: close(
      "Recognition, not clicks",
      "Mengo scripts idea pins as self-contained pages and measures them against the job the slot assigned. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Podcasts ---------------- */

  "podcast-pitch": {
    intro:
      "A pitch to appear on a show competes with dozens of others that all describe the sender's background. The one that gets read proposes an episode, which is the thing the host actually needs and rarely receives.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The angle comes from your positioning: the claim you are making that their audience has not heard argued. Pitching your biography produces a generic request; pitching a specific argument produces a booking.",
      ),
      s(
        "Reference a real episode",
        "One accurate sentence about something they actually published separates the pitch from a mailshot immediately. It is the single highest-return sentence in the format and it requires listening to one episode.",
      ),
    ],
    related: {
      features: ["positioning-generator", "voice-profile", "competitor-context"],
      channels: ["podcasts"],
      assetTypes: ["guest-talking-points"],
      solutions: ["build-a-founder-brand"],
    },
    close: close(
      "Pitch an episode, not a biography",
      "Mengo builds the pitch around an argument from your positioning and prompts for the specific episode reference. Join our waitlist for early access.",
    ),
  },

  "guest-talking-points": {
    intro:
      "Preparation for an interview is not a script. It is a small set of points you can reach for, each attached to a concrete story, so that answers are specific without the conversation sounding rehearsed.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Points are drawn from your positioning and the stories you have supplied. Abstractions do not survive audio: a listener remembers the specific situation and forgets the principle it illustrated, which is why every point carries an example.",
      ),
      s(
        "One natural mention, not five",
        "Guests who route every answer back to their offer are noticed and rarely invited back. Deciding in advance where the offer genuinely belongs lets the rest of the conversation be useful.",
      ),
    ],
    related: {
      features: ["positioning-generator", "voice-profile", "objection-mapping"],
      channels: ["podcasts"],
      assetTypes: ["podcast-pitch"],
      articles: ["founder-brand-without-oversharing"],
    },
    close: close(
      "Specific answers, unscripted delivery",
      "Mengo pairs each talking point with one of your own stories and marks the single place the offer belongs. Join our waitlist for early access.",
    ),
  },

  "episode-outline": {
    intro:
      "An outline for a show you host exists to make the recording disciplined and the edit short. Segments with timings are what stop a forty-minute episode becoming seventy minutes of which twenty are usable.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The episode subject comes from the month's theme, which is what makes a podcast reinforce the rest of the plan rather than run as a parallel activity with its own topics.",
      ),
      s(
        "The cold open is chosen, not recorded first",
        "The most interesting thirty seconds usually happens partway through. Planning to lift it to the front changes how the episode is structured, and it is the single largest improvement available to most shows.",
      ),
    ],
    related: {
      features: ["campaign-themes", "long-form-drafting", "content-briefs"],
      channels: ["podcasts"],
      assetTypes: ["show-notes", "podcast-clip-plan"],
      guides: ["90-day-content-plan"],
    },
    close: close(
      "Segments, timings, and a chosen opening",
      "Mengo outlines episodes from the month's argument with timed blocks and a nominated cold open. Join our waitlist for early access.",
    ),
  },

  "show-notes": {
    intro:
      "Show notes are read by people who will never listen to the episode. That is not a failure of the format; it is what makes notes worth writing carefully, because they are the searchable, linkable version of forty minutes of audio.",
    explain: [
      s(
        "Where it comes from in the plan",
        "Notes are generated from the outline and the recording, which is what keeps the timestamps accurate. Written from memory a week later, they summarise what you intended to say rather than what was said.",
      ),
      s(
        "Timestamps are navigation and search at once",
        "Marking every substantive segment lets a listener jump to the part they want and gives the page a set of question-shaped headings. Both benefits come from the same fifteen minutes of work.",
      ),
    ],
    related: {
      features: ["content-briefs", "long-form-drafting", "repurposing-engine"],
      channels: ["podcasts", "organic-search"],
      assetTypes: ["episode-outline"],
      glossary: ["internal-linking"],
    },
    close: close(
      "The searchable version of the episode",
      "Mengo generates notes from the outline with timestamps and a single clear next step. Join our waitlist for early access.",
    ),
  },

  "podcast-clip-plan": {
    intro:
      "Clips are how an episode reaches people who do not listen to podcasts. Chosen as promotion they perform poorly; chosen as standalone pieces of value they perform as well as any short-form content you make.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The plan is produced with the episode outline, so the moments worth clipping are identified before recording rather than hunted for afterwards. Knowing which moments matter also improves how they are delivered.",
      ),
      s(
        "A clip that needs context is not a clip",
        "If a viewer has to know what came before, the clip fails on a feed. Selecting for moments that stand alone is the constraint that makes the format work, and it usually rules out the parts you liked most.",
      ),
    ],
    related: {
      features: ["repurposing-engine", "short-form-scripts", "content-performance"],
      channels: ["podcasts", "tiktok"],
      assetTypes: ["episode-outline"],
      useCases: ["repurpose-one-idea-into-ten"],
    },
    close: close(
      "Clips that stand alone",
      "Mengo identifies clip moments from the outline and maps each to the channel it suits. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Events and webinars ---------------- */

  "webinar-promotion-sequence": {
    intro:
      "Promoting a live session is two separate campaigns that most businesses run as one: getting a registration, and then getting the person who registered to actually turn up. The second is where the drop-off is largest and the effort is smallest.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The sequence is generated from the session outline, so each touch can reveal a genuine piece of the content. Promotion written before the session exists can only describe the title, which is why it escalates in volume rather than in specificity.",
      ),
      s(
        "The final call is not optional",
        "A meaningful share of registrations arrive within hours of the start. Omitting the day-of message to avoid being pushy removes the touch that produces the most registrations in the sequence.",
      ),
    ],
    related: {
      features: ["campaign-briefs", "channel-sequencing", "sequence-builder"],
      channels: ["events-webinars", "email"],
      guides: ["webinar-playbook"],
      useCases: ["build-a-webinar-funnel"],
    },
    close: close(
      "Registration and attendance, planned separately",
      "Mengo builds the promotion arc from the session outline and treats attendance as its own sequence. Join our waitlist for early access.",
    ),
  },

  "session-outline": {
    intro:
      "The structure of a live session determines whether people stay to the part where you make an offer. Delivering the promised value in full before mentioning it is not generosity; it is the condition under which the offer is heard at all.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The topic comes from the theme and the offer from your offer ladder, which means the transition between them is planned rather than improvised. An unplanned transition is what makes a webinar feel like a bait and switch.",
      ),
      s(
        "Participation holds the middle",
        "Attendance falls off around the twenty-minute mark. Planned questions and polls at those points are what keep people present, and they need to be in the outline rather than remembered on the day.",
      ),
    ],
    related: {
      features: ["offer-architecture", "campaign-briefs", "content-briefs"],
      channels: ["events-webinars"],
      guides: ["webinar-playbook"],
      assetTypes: ["registration-page"],
    },
    close: close(
      "Value first, offer bounded",
      "Mengo structures the session so the promised content is complete before the offer, with a defined start and end to that segment. Join our waitlist for early access.",
    ),
  },

  "registration-page": {
    intro:
      "A registration page asks for an hour of someone's time, which is a larger request than most download pages make. It has to be specific about what they will be able to do afterwards and unambiguous about the practical details.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The page is generated from the session outline, so the promise on it matches what the session actually covers. It also inherits the objections for the segment being invited, which is what determines the order of the copy.",
      ),
      s(
        "Every extra field costs registrations",
        "Company size, job title and phone number each reduce the number of people who complete the form. Asking only for what you will genuinely use is the highest-return edit available on this page.",
      ),
    ],
    related: {
      features: ["landing-page-copy", "campaign-briefs", "objection-mapping"],
      channels: ["events-webinars"],
      guides: ["webinar-playbook", "landing-page-checklist"],
      articles: ["forms-that-lose-you-money"],
    },
    close: close(
      "A short form and a specific promise",
      "Mengo writes the page from the session outline and keeps the form to fields you will actually use. Join our waitlist for early access.",
    ),
  },

  "attendance-reminder-set": {
    intro:
      "Reminders convert a registration into an attendance, and they are the step most event plans omit entirely. Three short messages routinely move attendance more than any improvement to the promotion that produced the registrations.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The set is generated with the registration page, so the reminders reference the same promise. Each has a distinct job: the day-before re-sells, the hour-before is purely practical, the at-start is one line and a link.",
      ),
      s(
        "Do not re-sell in the last two",
        "Someone an hour from the session has already decided. What they need is the link and how to join, and a persuasive message at that point creates work rather than attendance.",
      ),
    ],
    related: {
      features: ["sequence-builder", "cadence-planning", "launch-checklists"],
      channels: ["events-webinars", "email"],
      guides: ["webinar-playbook"],
      assetTypes: ["registration-page"],
    },
    close: close(
      "Three messages, three different jobs",
      "Mengo generates the reminder set with the registration page so the promise stays consistent and the last message stays practical. Join our waitlist for early access.",
    ),
  },

  "post-event-sequence": {
    intro:
      "Most of the value of a live session is realised afterwards, and most of it is left on the table. The people who registered and did not attend are a larger group than the attendees, and they need an entirely different email.",
    explain: [
      s(
        "Where it comes from in the plan",
        "The sequence splits on attendance data and draws on what was actually asked during the session. That is why it can be specific: it references the real questions rather than the planned agenda.",
      ),
      s(
        "Answering live questions individually converts best",
        "The questions nobody had time for are the highest-intent signals the session produced. Answering them one at a time is unglamorous work and is consistently the most effective message in the set.",
      ),
    ],
    related: {
      features: ["sequence-builder", "objection-mapping", "sales-handoff-notes"],
      channels: ["events-webinars", "email"],
      guides: ["webinar-playbook"],
      useCases: ["build-a-webinar-funnel"],
    },
    close: close(
      "Two paths, split by attendance",
      "Mengo writes attendee and non-attendee sequences separately and turns unanswered live questions into individual follow-ups. Join our waitlist for early access.",
    ),
  },

  "event-followup-note": {
    intro:
      "The note after meeting someone in person is short, individual and time-sensitive. Its only real requirement is that it could not have been sent to anyone else, which is also the requirement that makes it hard to automate.",
    explain: [
      s(
        "Where it comes from in the plan",
        "It is generated from your notes about the conversation rather than from a slot. Mengo structures the message and requests the one specific detail that makes it recognisable; it will not invent a remembered exchange.",
      ),
      s(
        "Send something useful, unasked",
        "Attaching the article, tool or introduction you mentioned during the conversation converts a pleasantry into a reason to reply. It also demonstrates the thing you were describing rather than restating it.",
      ),
    ],
    related: {
      features: ["sales-handoff-notes", "voice-profile", "email-copywriting"],
      channels: ["events-webinars", "email"],
      useCases: ["prepare-for-a-trade-show"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Recognisably about that conversation",
      "Mengo drafts the note from your own notes and prompts for the detail that stops it reading as a template. Join our waitlist for early access.",
    ),
  },
};
