import type { Depth } from "@/lib/types";
import { close, s } from "@/data/depth";

/**
 * Channel × industry depth.
 *
 * These sixty-nine pages are generated from the pairs a channel guide names,
 * and the template composes most of the page from the two records. What it
 * could not compose was the thing a reader actually came for: what changes
 * about this channel when it is used by this specific kind of business.
 *
 * Keyed `channel:industry`. `npm run check:depth` fails on a key that does not
 * correspond to a real pair, and warns on a pair with no entry.
 */
export const channelIndustryDepth: Record<string, Depth> = {
  /* ---------------- LinkedIn ---------------- */

  "linkedin:b2b-services": {
    intro:
      "LinkedIn is where a B2B services buyer does their unofficial diligence. They will not enquire from a post; they will read three of them, look at who else engaged, and form a view about whether you are the sort of firm they could defend choosing internally.",
    explain: [
      s(
        "What changes here",
        "The content has to work for a reader who is assessing risk rather than capability. Method posts — what happens in week one, how a difficult situation was handled — do considerably more than case results, because they let the reader picture being your client.",
      ),
    ],
    close: close(
      "Post for the person who has to justify it",
      "Mengo writes LinkedIn content against the objection your buyer will face internally, not just the one they raise with you. Join our waitlist for early access.",
    ),
  },

  "linkedin:saas": {
    intro:
      "For software, LinkedIn sits at a different point in the funnel than search does. Search catches people already looking; LinkedIn reaches the ops lead who has not yet decided the spreadsheet is the problem, which is earlier and considerably less contested.",
    explain: [
      s(
        "What changes here",
        "The best-performing material is usually about the workflow rather than the product — the specific mess a team is living with, described accurately enough that someone recognises their own week in it.",
      ),
    ],
    close: close(
      "Reach them before the search",
      "Mengo plans LinkedIn as the problem-recognition layer feeding the search content that captures the resulting demand. Join our waitlist for early access.",
    ),
  },

  "linkedin:professional-services": {
    intro:
      "In professional services the firm is found and the individual is chosen, and LinkedIn is one of the few places where an individual can be visible at scale without a marketing budget. That is the whole opportunity, and it is why firm-page posting underperforms so badly here.",
    explain: [
      s(
        "What changes here",
        "Regulatory constraints on comparative and outcome claims apply to a personal post exactly as they do to a brochure. The content that works within those limits is reasoning about a situation rather than assertion about results.",
      ),
    ],
    close: close(
      "A named person, inside the rules",
      "Guardrails are configured to your professional body, so partner-led posting stays within what you are permitted to claim. Join our waitlist for early access.",
    ),
  },

  "linkedin:recruitment": {
    intro:
      "Recruitment is the one sector on this list with two audiences on the same platform. Clients and candidates both live on LinkedIn, they read the same feed, and content aimed at one is visible to the other — which is usually treated as a problem and is actually the constraint that improves the writing.",
    explain: [
      s(
        "What changes here",
        "Nothing posted to win a mandate should embarrass you in front of a candidate, and vice versa. Content about the market itself — what is moving, what employers are getting wrong, what candidates are actually weighing — serves both without pandering to either.",
      ),
    ],
    close: close(
      "One feed, two audiences",
      "Mengo plans client-side and candidate-side content as separate tracks that can survive being read by the other side. Join our waitlist for early access.",
    ),
  },

  "linkedin:consulting-firms": {
    intro:
      "For a consulting firm, LinkedIn is where the point of view becomes visible or does not exist. A firm publishing balanced overviews is indistinguishable from every other firm publishing balanced overviews, and the resulting conversation is about day rates.",
    explain: [
      s(
        "What changes here",
        "Partner-authored posts outperform firm accounts by a wide margin, and the posts that travel are the ones a competitor would dispute. Procurement will eventually involve people who never read any of it, which is what the longer material is for.",
      ),
    ],
    close: close(
      "Publish something arguable",
      "Mengo holds one argument across a month so the position accumulates rather than resetting weekly. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Instagram ---------------- */

  "instagram:ecommerce": {
    intro:
      "For a product business, Instagram is both a discovery channel and a shopfront, and confusing the two produces an account that is a catalogue. Reels find people who have never heard of you; the grid decides whether they trust you enough to buy.",
    explain: [
      s(
        "What changes here",
        "Product photography alone rarely earns reach, because it gives the algorithm nothing to distribute and the viewer nothing to save. Demonstration, use and the specific problem the product solves are what travel.",
      ),
    ],
    close: close(
      "Reels reach, grid converts",
      "Mengo plans the two separately, because they do different jobs for a product business. Join our waitlist for early access.",
    ),
  },

  "instagram:hospitality": {
    intro:
      "A hotel is chosen on photographs, but not the ones the marketing team would pick. Guests are looking for the specific things a booking site cannot show: what the area is actually like, what the staff are like, what a morning there feels like.",
    explain: [
      s(
        "What changes here",
        "Content that differentiates from an aggregator is content an aggregator cannot host. Destination material, local recommendations and the human side of the property are what make a direct booking preferable to a listing.",
      ),
    ],
    close: close(
      "Show what the listing cannot",
      "Every direct booking avoids a commission, and the content that produces one is the content a platform will not carry. Join our waitlist for early access.",
    ),
  },

  "instagram:fitness-wellness": {
    intro:
      "Fitness accounts grow easily and convert unevenly, because transformation content attracts an audience interested in transformation content. The people who join are usually reached by something less dramatic: the class schedule, the room, the person who will actually be teaching.",
    explain: [
      s(
        "What changes here",
        "Outcome and body composition claims are regulated in many markets, which rules out a large share of what the category posts. What remains — the environment, the coaching, the practicalities — converts better anyway.",
      ),
    ],
    close: close(
      "Growth is not the same as signups",
      "Guardrails block unverified outcome claims and the plan weights retention content alongside acquisition. Join our waitlist for early access.",
    ),
  },

  "instagram:beauty-salons": {
    intro:
      "For a salon, Instagram functions as a portfolio that people check before booking and after being recommended. The account is doing reassurance work more than discovery work, which changes what belongs on it.",
    explain: [
      s(
        "What changes here",
        "Consistency of visible results matters more than volume, and the rebooking prompt matters more than either. An account posting daily with no rebooking mechanism behind it is losing clients faster than it is finding them.",
      ),
    ],
    close: close(
      "The portfolio brings them, the prompt keeps them",
      "Mengo pairs visual proof with messaging-channel rebooking timed to the treatment interval. Join our waitlist for early access.",
    ),
  },

  "instagram:creator-economy": {
    intro:
      "For a creator the account is the business, which makes the usual advice about consistency almost irrelevant — that is already happening. The problem is nearly always that the audience has learned nothing is for sale.",
    explain: [
      s(
        "What changes here",
        "The offer has to appear regularly enough to be normal rather than as an occasional apologetic post. Content and offer are planned together, so the audience grows into something rather than alongside nothing.",
      ),
    ],
    close: close(
      "An audience that knows what you sell",
      "Mengo builds the offer ladder alongside the content plan rather than after it. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Email ---------------- */

  "email:saas": {
    intro:
      "For software, email is where trial behaviour becomes a conversation. It is also the only channel that reaches someone during the specific fortnight when they are deciding whether the product has become part of their week.",
    explain: [
      s(
        "What changes here",
        "Onboarding email is marketing rather than support. Time to first value is the conversion event in self-serve software, which makes the sequence between signup and first result the highest-leverage email you own.",
      ),
    ],
    close: close(
      "The trial is decided by email",
      "Mengo writes onboarding flows around a defined first-value moment, not around a feature tour. Join our waitlist for early access.",
    ),
  },

  "email:ecommerce": {
    intro:
      "In ecommerce, email is where the margin is. Acquisition is frequently close to breakeven on a first order, which makes the second purchase the entire commercial case — and the second purchase happens, or does not, in an inbox.",
    explain: [
      s(
        "What changes here",
        "Post-purchase sequences matter more than promotional broadcasts, and a discount sent to everyone is the most expensive way to produce a repeat order. Segmentation by what someone actually bought is the cheapest improvement available.",
      ),
    ],
    close: close(
      "The second order is the business",
      "Mengo designs post-purchase sequences around the next order rather than around a blanket discount. Join our waitlist for early access.",
    ),
  },

  "email:education": {
    intro:
      "Education demand is set by intake dates, which creates a long, awkward gap between initial interest and the moment an application is possible. Email is the only channel that can hold a relationship across that gap without paying for it repeatedly.",
    explain: [
      s(
        "What changes here",
        "The sequence has to survive months rather than weeks, and it has to address the funder as well as the learner where an employer is paying. Accreditation and outcome claims must be evidenced rather than implied.",
      ),
    ],
    close: close(
      "Hold the relationship until the intake",
      "Cadence planning paces the sequence to the gap between interest and application. Join our waitlist for early access.",
    ),
  },

  "email:professional-services": {
    intro:
      "Professional services firms usually have a list of past clients and enquirers that nobody has contacted deliberately. It is the most valuable and least worked asset in the business, and email is the only way to reach it.",
    explain: [
      s(
        "What changes here",
        "The register is different from a consumer list: a former client receiving something that reads as a marketing broadcast is a small reputational cost. Individual, useful and infrequent outperforms designed and regular here.",
      ),
    ],
    close: close(
      "The list you already have",
      "Mengo writes for a professional list in a register that will not embarrass you at the next meeting. Join our waitlist for early access.",
    ),
  },

  "email:nonprofits": {
    intro:
      "A nonprofit's list contains donors, volunteers, funders and beneficiaries, all of whom need something different and most of whom receive the same newsletter. That single undifferentiated send is usually the largest available improvement.",
    explain: [
      s(
        "What changes here",
        "Funders want evidence and structure; supporters want a story. The same programme has to be described twice, and beneficiary stories require documented informed consent regardless of how well they would perform.",
      ),
    ],
    close: close(
      "One list, several audiences",
      "Mengo separates funder and supporter tracks from the same underlying work. Join our waitlist for early access.",
    ),
  },

  /* ---------------- WhatsApp ---------------- */

  "whatsapp:real-estate": {
    intro:
      "Property runs on speed and on personal contact, and WhatsApp is where both already happen. Buyers message agents; agents message buyers; the channel is not an experiment here so much as an unmanaged reality.",
    explain: [
      s(
        "What changes here",
        "The opportunity is structure rather than adoption: prepared replies for the questions that arrive constantly, and a viewing follow-up that goes out the same evening rather than when someone remembers.",
      ),
    ],
    close: close(
      "Structure what is already happening",
      "Mengo writes the reply branches and the follow-up in your voice so speed does not cost consistency. Join our waitlist for early access.",
    ),
  },

  "whatsapp:healthcare": {
    intro:
      "In healthcare WhatsApp is used for appointments, reminders and practical questions, which is exactly where it works. It is also a channel where a marketing message would be badly received and, in many jurisdictions, a compliance problem.",
    explain: [
      s(
        "What changes here",
        "The line between service messaging and promotion has to be explicit, and patient data cannot travel through the channel casually. What belongs here is logistics — confirmations, preparation instructions, follow-up — written plainly.",
      ),
    ],
    close: close(
      "Service messaging, not promotion",
      "Guardrails keep clinical and promotional language separate, and clinical content requires practitioner review. Join our waitlist for early access.",
    ),
  },

  "whatsapp:education": {
    intro:
      "For education providers, WhatsApp reaches parents and adult learners on the device they actually answer. It suits reminders, deadlines and short practical exchanges, and it fails badly at anything resembling a prospectus.",
    explain: [
      s(
        "What changes here",
        "Where minors are involved, data protection rules are strict and the parent rather than the student is the correct contact. Message content stays logistical, with anything persuasive kept to email.",
      ),
    ],
    close: close(
      "Deadlines and reminders, not prospectuses",
      "Mengo keeps the channel practical and routes persuasion to where it belongs. Join our waitlist for early access.",
    ),
  },

  "whatsapp:automotive": {
    intro:
      "Vehicle buyers ask a small number of specific questions — availability, finance, part-exchange — and they ask them on messaging apps. Answering quickly and precisely is most of what decides which dealership gets the visit.",
    explain: [
      s(
        "What changes here",
        "A narrowed selection with a line explaining the choice converts far better than a link to the full stock list. Finance figures sent through the channel are still regulated promotions and need the same disclosures as any other.",
      ),
    ],
    close: close(
      "Three options, not the whole forecourt",
      "Catalogue messages are narrowed against what the enquiry actually said. Join our waitlist for early access.",
    ),
  },

  "whatsapp:hospitality": {
    intro:
      "For a hotel or venue, WhatsApp handles the questions that stop a booking: whether the room has a bath, whether parking is available, whether the kitchen can handle an allergy. These are small, urgent and decisive.",
    explain: [
      s(
        "What changes here",
        "The channel is best used around a booking rather than to generate one — pre-arrival details, on-stay requests, post-stay follow-up. Broadcast promotions to a guest list are the fastest way to lose the permission.",
      ),
    ],
    close: close(
      "Around the booking, not instead of it",
      "Mengo plans pre-arrival and post-stay sequences and keeps broadcasts inside a frequency cap. Join our waitlist for early access.",
    ),
  },

  /* ---------------- YouTube ---------------- */

  "youtube:saas": {
    intro:
      "For software, YouTube is where the demo lives permanently. A walkthrough published once keeps answering the same question for years, which is unusual for a channel that most software companies treat as a launch asset.",
    explain: [
      s(
        "What changes here",
        "Search-intent video — how to do the specific job your product does — outperforms product tours, because it reaches people solving the problem rather than evaluating you. The product appears as the method rather than the subject.",
      ),
    ],
    close: close(
      "A demo that keeps working",
      "Mengo scripts video against the query it answers, using the intent map rather than a feature list. Join our waitlist for early access.",
    ),
  },

  "youtube:education": {
    intro:
      "Education is the one category where YouTube's audience arrives already wanting to learn something, which removes the usual attention problem and replaces it with a harder one: the free version has to be genuinely good.",
    explain: [
      s(
        "What changes here",
        "Teaching properly on the free channel is the demonstration. Withholding the useful part to drive enrolment reads as a trailer and converts poorly against providers who simply taught the thing.",
      ),
    ],
    close: close(
      "Teach the free version properly",
      "Mengo plans the free channel as the demonstration rather than as an advertisement for the paid one. Join our waitlist for early access.",
    ),
  },

  "youtube:home-services": {
    intro:
      "Home services is an unlikely fit for video until you consider what homeowners actually search: whether a job is a repair or a replacement, what it should cost, and what a good one looks like when it is finished.",
    explain: [
      s(
        "What changes here",
        "Diagnostic and explanatory video builds local trust before an urgent enquiry exists, which is the only time it can be built. Filming is a phone on site rather than a production, which is what makes it sustainable.",
      ),
    ],
    close: close(
      "Answer the question before the emergency",
      "Mengo generates scripts against what you can film on a job rather than in a studio. Join our waitlist for early access.",
    ),
  },

  "youtube:financial-services": {
    intro:
      "Financial advice is bought from a person, and video is the closest a stranger gets to meeting one. That is the argument for the channel; the constraint is that financial promotion rules apply to every second of it.",
    explain: [
      s(
        "What changes here",
        "Educational content on decisions and deadlines works within the rules where outcome and performance claims do not. Scripts have to be reviewed like any other promotion, and guardrails should block the claims your regulator restricts.",
      ),
    ],
    close: close(
      "The closest thing to meeting you",
      "Guardrails are configured to your regulator so scripts stay inside the promotion rules. Join our waitlist for early access.",
    ),
  },

  "youtube:creator-economy": {
    intro:
      "For a creator, YouTube is the platform where an audience becomes durable rather than rented. It is also the most demanding: the production commitment is real and the payback is measured in months.",
    explain: [
      s(
        "What changes here",
        "Search-led video compounds while feed video expires, which makes the mix a strategic choice rather than a preference. Shorts reach a different audience and rarely convert into long-form viewers on their own.",
      ),
    ],
    close: close(
      "Durable rather than rented",
      "Mengo plans search video and shorts as separate tracks with different jobs. Join our waitlist for early access.",
    ),
  },

  /* ---------------- TikTok ---------------- */

  "tiktok:ecommerce": {
    intro:
      "TikTok can move product volume quickly, which is exactly why it is dangerous for a brand with thin margins. Demand arriving faster than the unit economics can support is a failure that looks like success for about six weeks.",
    explain: [
      s(
        "What changes here",
        "Demonstration outperforms production value, and a product that is genuinely interesting to watch has an advantage nothing else compensates for. Pricing and sustainability claims remain subject to consumer protection rules regardless of format.",
      ),
    ],
    close: close(
      "Check the margin before the volume",
      "Mengo pairs the channel plan with the metric set, so a spike is read against contribution rather than revenue. Join our waitlist for early access.",
    ),
  },

  "tiktok:beauty-salons": {
    intro:
      "Beauty is one of the categories TikTok genuinely favours: a treatment is visual, short and has a visible before and after. The complication is that a salon serves one town and the platform distributes nationally.",
    explain: [
      s(
        "What changes here",
        "Reach without locality produces views and no bookings. Location has to be visible in the content itself rather than only in the profile, and the account is judged on enquiries rather than on follower growth.",
      ),
    ],
    close: close(
      "National reach, local business",
      "Mengo plans for local conversion rather than for a follower count that cannot book. Join our waitlist for early access.",
    ),
  },

  "tiktok:fitness-wellness": {
    intro:
      "Fitness performs well on TikTok and converts unevenly, for the same reason it does on Instagram: content optimised for reach attracts an audience interested in watching rather than in joining.",
    explain: [
      s(
        "What changes here",
        "Claims about results, body composition and nutrition are regulated in many markets, which removes a large share of what the category posts. Coaching, environment and the practical experience of a class are what remain and what convert locally.",
      ),
    ],
    close: close(
      "Views are not members",
      "Guardrails block unverified outcome claims and the plan keeps local conversion in view. Join our waitlist for early access.",
    ),
  },

  "tiktok:food-beverage": {
    intro:
      "Food is one of the formats the platform was effectively built for. The risk is that a video performs enormously, drives a wave of interest, and reaches a brand with no listing, no stock and no way to convert any of it.",
    explain: [
      s(
        "What changes here",
        "Distribution readiness has to precede reach. Where the product is in retail, content should support the listing rather than compete with it, and health and nutrition claims stay inside labelling rules.",
      ),
    ],
    close: close(
      "Be ready before you are seen",
      "Mengo plans the channel alongside the retail and fulfilment reality rather than in isolation. Join our waitlist for early access.",
    ),
  },

  "tiktok:creator-economy": {
    intro:
      "TikTok gives a creator the fastest available audience growth and the weakest available ownership of it. Every video starts from close to zero, and an account with a large following still has no direct way to reach them.",
    explain: [
      s(
        "What changes here",
        "The priority is converting reach into something you own — a list, a community, a subscription — before the distribution changes. Growth here is genuinely fast and genuinely borrowed.",
      ),
    ],
    close: close(
      "Convert the reach into something you own",
      "Mengo pairs the growth channel with an owned list so the audience survives a distribution change. Join our waitlist for early access.",
    ),
  },

  /* ---------------- X ---------------- */

  "x:saas": {
    intro:
      "X remains a genuine gathering place for software people, which makes it unusually efficient for a technical product. Build-in-public posting works here because the audience is interested in how things are made, not only in what they do.",
    explain: [
      s(
        "What changes here",
        "Specificity is rewarded and marketing register is punished. A concrete detail about a technical decision travels; a product announcement written in launch language does not.",
      ),
    ],
    close: close(
      "Specific beats promotional",
      "Mengo writes for a platform where the audience can tell the difference immediately. Join our waitlist for early access.",
    ),
  },

  "x:creator-economy": {
    intro:
      "For a creator, X is the cheapest place to find out whether an idea has weight. A claim that gets no traction in a single post rarely improves at three thousand words, and the feedback arrives within an hour.",
    explain: [
      s(
        "What changes here",
        "The platform's volume tolerance makes it a testing ground rather than a publishing destination. Ideas that survive here become the newsletter, the video and eventually the offer.",
      ),
    ],
    close: close(
      "Test the claim, then build on it",
      "Mengo uses short-form testing to select what deserves the longer formats. Join our waitlist for early access.",
    ),
  },

  "x:b2b-services": {
    intro:
      "X is a supporting channel for most B2B services firms rather than a primary one, and it is worth being honest about that. Where it earns its place is in reaching a specific professional community that happens to gather there.",
    explain: [
      s(
        "What changes here",
        "Replies reach further than original posts for a small account, which makes participation more valuable than publishing. That is also what makes the channel expensive in attention, so it needs a time box.",
      ),
    ],
    close: close(
      "A supporting channel, honestly",
      "Mengo ranks channels against your buying cycle and will place this one below others where it belongs. Join our waitlist for early access.",
    ),
  },

  "x:fintech": {
    intro:
      "Fintech has an unusually concentrated community on X — founders, analysts, journalists and regulators all reading the same posts. That concentration is the opportunity and the reason every post is a promotion in the regulatory sense.",
    explain: [
      s(
        "What changes here",
        "Financial promotion rules do not distinguish between a considered campaign and a quick post. Guardrails have to apply to short-form content exactly as they do to a landing page, which is the part most teams get wrong.",
      ),
    ],
    close: close(
      "A short post is still a promotion",
      "Guardrails are configured to your jurisdiction and applied to every format, not only the long ones. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Facebook ---------------- */

  "facebook:home-services": {
    intro:
      "Local Facebook groups are where a homeowner asks who to call, and the answer is given by neighbours rather than by advertising. Being the trade that gets named in those threads is worth more than any page you could build.",
    explain: [
      s(
        "What changes here",
        "You cannot buy the recommendation, and posting promotionally into a group usually costs you the chance of receiving one. What works is being visibly useful about the problem before anyone needs you.",
      ),
    ],
    close: close(
      "Be the name that gets given",
      "Mengo writes group content from your actual experience, with the contact path where the group's rules allow it. Join our waitlist for early access.",
    ),
  },

  "facebook:local-retail": {
    intro:
      "For a local shop, Facebook is where the town already talks to itself. Events, recommendations and community pages carry more weight here than a business page posting product photographs into a feed almost nobody sees.",
    explain: [
      s(
        "What changes here",
        "The content that works is the content only a local business could post: what arrived this week, what is happening in the area, what the owner would actually recommend. None of that competes with online retail.",
      ),
    ],
    close: close(
      "Curation, not catalogue",
      "Mengo plans around what a local shop can uniquely say rather than around stock. Join our waitlist for early access.",
    ),
  },

  "facebook:hospitality": {
    intro:
      "Hospitality on Facebook is mostly events and local discovery. A venue posting its own promotions reaches a fraction of its followers; a venue listed in an event that people are attending reaches their friends as well.",
    explain: [
      s(
        "What changes here",
        "Event pages carry the practical detail that decides attendance — cost, parking, accessibility, duration — and their absence is what stops responses more often than the copy above them.",
      ),
    ],
    close: close(
      "Events reach further than posts",
      "Mengo generates the listing from the same brief as the promotion sequence, with the practical fields required. Join our waitlist for early access.",
    ),
  },

  "facebook:nonprofits": {
    intro:
      "Facebook remains where a large share of a nonprofit's supporters actually are, particularly for local causes and older demographics. It is also where the two audiences — supporters and funders — are least distinguishable.",
    explain: [
      s(
        "What changes here",
        "Supporter-facing storytelling belongs here and funder-facing evidence does not, but both are visible to both. Beneficiary content requires documented informed consent, and that requirement does not relax because the post is organic.",
      ),
    ],
    close: close(
      "Supporter stories, properly consented",
      "Guardrails hold the consent and dignity requirements as a constraint rather than a review step. Join our waitlist for early access.",
    ),
  },

  "facebook:real-estate": {
    intro:
      "Property listings travel on Facebook because people share them with the person they would be moving with. That sharing behaviour, rather than the reach of the page itself, is what makes the channel worth running here.",
    explain: [
      s(
        "What changes here",
        "A listing written to be forwarded needs the details a second reader would ask about immediately. Local group participation, where the rules allow it, produces more valuable contact than page posting does.",
      ),
    ],
    close: close(
      "Written to be forwarded",
      "Mengo writes listings for the second reader as well as the first. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Organic search ---------------- */

  "organic-search:saas": {
    intro:
      "Search is the foundation of most software marketing because the buyer defines their problem in a search box weeks before they consider a category. Publishing there is how you are present for the part of the decision you would otherwise miss entirely.",
    explain: [
      s(
        "What changes here",
        "Problem-led queries have larger volume, earlier intent and considerably less competition than category terms. Comparison pages matter too, and they work better written against approaches than against named competitors.",
      ),
    ],
    close: close(
      "Own the problem, not the category name",
      "Mengo builds the intent map from your actual product and writes each page to a single query. Join our waitlist for early access.",
    ),
  },

  "organic-search:professional-services": {
    intro:
      "Clients search for the situation they are in, not for the service that resolves it. A firm whose pages are named after its practice areas is invisible to a person describing a problem in ordinary language.",
    explain: [
      s(
        "What changes here",
        "Page titles and structure have to use the client's vocabulary rather than the profession's. Outcome and comparative claims remain restricted by your professional body, which shapes what a page may promise.",
      ),
    ],
    close: close(
      "Their words, not the profession's",
      "The intent map is built from how clients actually describe the problem. Join our waitlist for early access.",
    ),
  },

  "organic-search:financial-services": {
    intro:
      "Financial searches cluster around deadlines and life events — a tax year end, a house purchase, a redundancy. That makes the demand predictable in timing and unusually high in intent when it appears.",
    explain: [
      s(
        "What changes here",
        "Pages have to be published well before the deadline they serve, because search results take months to establish. Financial promotion rules apply to every page, and outcome or performance language must stay inside them.",
      ),
    ],
    close: close(
      "Published long before the deadline",
      "Seasonality planning schedules search work backwards from the dates your demand actually clusters around. Join our waitlist for early access.",
    ),
  },

  "organic-search:healthcare": {
    intro:
      "Patients search symptoms before they search providers, often anxiously and often at night. Being present for that search is valuable and it carries an obligation that most marketing channels do not.",
    explain: [
      s(
        "What changes here",
        "Content has to be clinically accurate and reviewed by a qualified practitioner before publication, regardless of how it was drafted. Outcome claims and testimonial use are restricted in most jurisdictions.",
      ),
    ],
    close: close(
      "Accurate first, findable second",
      "Nothing clinical reaches a patient without practitioner review, and guardrails block the claims your regulator restricts. Join our waitlist for early access.",
    ),
  },

  "organic-search:legal-services": {
    intro:
      "Legal search is the clearest example of a category where the client's vocabulary and the profession's are completely different. Someone searches for the problem they are having; the firm has published a page named after the statute.",
    explain: [
      s(
        "What changes here",
        "Pages should answer the immediate question before introducing the firm, and response commitments should be visible — in urgent matters, the firm that replies first is usually the one instructed.",
      ),
    ],
    close: close(
      "Answer the question, then introduce the firm",
      "Mengo builds the intent map from how clients describe their situation rather than from practice areas. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Google Ads ---------------- */

  "google-ads:legal-services": {
    intro:
      "Legal is among the most expensive categories in paid search, which makes exclusion work more valuable here than in almost any other sector. A single unqualified click can cost more than an hour of paid staff time.",
    explain: [
      s(
        "What changes here",
        "Negative keywords are not an optimisation, they are the plan. Job seekers, students, free-advice searches and adjacent practice areas you do not handle account for a large share of wasted spend before anything else is tuned.",
      ),
    ],
    close: close(
      "Exclusions before optimisation",
      "Mengo builds the exclusion list from what you told it you do not handle, before launch. Join our waitlist for early access.",
    ),
  },

  "google-ads:home-services": {
    intro:
      "Paid search for home services buys people who need something fixed today. The ad has to state what you do, roughly what it costs and when you can attend — because the searcher is comparing three results in under a minute.",
    explain: [
      s(
        "What changes here",
        "Qualifying in the ad is worth more than maximising clicks. A price band suppresses the clicks that were never going to convert, and on a paid channel every one of those is a direct cost.",
      ),
    ],
    close: close(
      "Qualify in the advert",
      "Ad copy is written against the page it points at, with fit signals included deliberately. Join our waitlist for early access.",
    ),
  },

  "google-ads:healthcare": {
    intro:
      "Healthcare paid search reaches people at a moment of worry, and the same regulatory constraints that govern the site govern the advert. The margin for careless language is smaller here than the ad platform's own rules suggest.",
    explain: [
      s(
        "What changes here",
        "Outcome claims and comparative language are restricted regardless of character limits. Landing pages must match the query precisely, because a mismatch in this category is both a wasted click and a poor experience for an anxious reader.",
      ),
    ],
    close: close(
      "The advert is regulated too",
      "Guardrails apply to short-form ad copy exactly as they do to a page. Join our waitlist for early access.",
    ),
  },

  "google-ads:financial-services": {
    intro:
      "Financial paid search combines high click costs with strict promotion rules, which means the two levers that matter are precision of targeting and accuracy of language. Neither is a creative exercise.",
    explain: [
      s(
        "What changes here",
        "Brand and non-brand campaigns behave completely differently and should never share a budget line. Every headline is a financial promotion, subject to the same disclosure requirements as any other.",
      ),
    ],
    close: close(
      "Precision, then compliance, then copy",
      "Mengo separates brand and non-brand intent in the map and configures guardrails to your regulator. Join our waitlist for early access.",
    ),
  },

  "google-ads:b2b-services": {
    intro:
      "B2B paid search buys a click and rarely buys a decision. The enquiry that results enters a cycle measured in months, which means the campaign has to be judged on qualified enquiries rather than on immediate conversion.",
    explain: [
      s(
        "What changes here",
        "The landing page has to serve a researcher rather than a buyer, and the follow-up matters more than the ad. Without a nurture sequence behind it, paid search in this sector buys enquiries that go quiet.",
      ),
    ],
    close: close(
      "The click is the start of a long cycle",
      "Mengo pairs paid search with a nurture arc paced to your actual buying cycle. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Meta Ads ---------------- */

  "meta-ads:ecommerce": {
    intro:
      "Meta remains the default acquisition channel for consumer product businesses, and the arithmetic decides whether it works. Creative carries most of the performance, and margin decides how much creative you can afford to test.",
    explain: [
      s(
        "What changes here",
        "Retargeting and prospecting need separate budgets and separate messages, and creative fatigue arrives on a predictable schedule. A plan without a refresh cadence will call that fatigue an algorithm change.",
      ),
    ],
    close: close(
      "Creative is the lever, margin is the limit",
      "Angle sets vary the argument so a test result can actually be attributed. Join our waitlist for early access.",
    ),
  },

  "meta-ads:fitness-wellness": {
    intro:
      "Fitness advertising on Meta works because the decision to join is triggered by a date or an event, and the platform can reach someone in the week that trigger occurs. The constraint is what may be claimed while doing it.",
    explain: [
      s(
        "What changes here",
        "Body composition and outcome claims are restricted in many markets and are also what the category's best-performing creative traditionally relied on. Environment, coaching and the practical offer have to carry the advert instead.",
      ),
    ],
    close: close(
      "Convert the trigger, inside the rules",
      "Guardrails block unverified outcome claims before they reach a creative brief. Join our waitlist for early access.",
    ),
  },

  "meta-ads:education": {
    intro:
      "Education advertising on Meta has a timing problem: the intake date is fixed and the consideration period is long, so the same campaign has to work for someone six months out and someone deciding this week.",
    explain: [
      s(
        "What changes here",
        "Prospecting and deadline campaigns need entirely different messages, and accreditation or employment outcome claims must be evidenced. A single always-on campaign serves the deadline audience and wastes the earlier one.",
      ),
    ],
    close: close(
      "Two audiences, two campaigns",
      "Mengo separates early-consideration and deadline messaging rather than running one campaign at both. Join our waitlist for early access.",
    ),
  },

  "meta-ads:beauty-salons": {
    intro:
      "For a salon, paid social has to convert into a booking in a specific location, which makes most of the platform's reach irrelevant. Tight geographic targeting and an obvious booking path do more than any creative improvement.",
    explain: [
      s(
        "What changes here",
        "Before-and-after imagery is restricted for medical-adjacent treatments in many markets, and the restriction applies to paid advertising most strictly of all. The offer and the availability have to carry the advert.",
      ),
    ],
    close: close(
      "Local reach, obvious booking",
      "Mengo keeps claims inside the rules for treatment advertising in your market. Join our waitlist for early access.",
    ),
  },

  "meta-ads:hospitality": {
    intro:
      "Hospitality advertising on Meta competes directly with aggregators bidding on the same audience with a larger budget. The winning position is usually not price but the specific thing the aggregator cannot show.",
    explain: [
      s(
        "What changes here",
        "Direct booking is the point, since every one avoids a commission. Creative that shows the location, the room and the actual experience outperforms a rate-led advert competing on the aggregator's own terms.",
      ),
    ],
    close: close(
      "Compete on what a listing cannot show",
      "Mengo writes creative around the direct-booking argument rather than the nightly rate. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Pinterest ---------------- */

  "pinterest:ecommerce": {
    intro:
      "Pinterest reaches shoppers earlier than any other commerce channel — while they are still assembling an idea rather than choosing a product. That long window is why pins keep producing traffic months after they are published.",
    explain: [
      s(
        "What changes here",
        "The pin has to promise what the destination page delivers, or the traffic bounces and the signal suffers. Text overlay stating the outcome outperforms product photography without context.",
      ),
    ],
    close: close(
      "Earlier than the purchase decision",
      "Pins are briefed from the destination page so the promise and the landing match. Join our waitlist for early access.",
    ),
  },

  "pinterest:interior-design": {
    intro:
      "Interior design is Pinterest's native category. Clients arrive having collected images for months, which means the practice they contact is frequently the one whose work they saved without noticing whose it was.",
    explain: [
      s(
        "What changes here",
        "Attribution matters more than reach: a recognisable treatment and a destination that explains process and budget are what convert a saved image into an enquiry months later.",
      ),
    ],
    close: close(
      "Be the practice they saved",
      "Mengo pairs visual discovery with the written material that converts a long browse into an enquiry. Join our waitlist for early access.",
    ),
  },

  "pinterest:events-weddings": {
    intro:
      "Wedding and event planning happens on Pinterest for a year before a supplier is contacted. That is an unusually long window in which a business can be present cheaply and repeatedly without spending anything.",
    explain: [
      s(
        "What changes here",
        "Boards function as a topical map of what you actually do, which matters when someone is narrowing from a mood board to a shortlist. The enquiry arrives late, so the nurture behind it has to be patient.",
      ),
    ],
    close: close(
      "A year of browsing, one decision",
      "Board structure is planned as a topical map rather than as a product list. Join our waitlist for early access.",
    ),
  },

  "pinterest:food-beverage": {
    intro:
      "Recipes and food ideas are among the most-searched categories on the platform, and they keep earning impressions long after publication. For a food brand this is the rare channel where content does not expire in a day.",
    explain: [
      s(
        "What changes here",
        "The product usually appears inside a use rather than as the subject. Health and nutrition claims remain regulated, and a pin is a promotion like any other in that respect.",
      ),
    ],
    close: close(
      "The product inside a use",
      "Mengo plans pins around what the product is for rather than around the packaging. Join our waitlist for early access.",
    ),
  },

  "pinterest:beauty-salons": {
    intro:
      "Beauty content performs on Pinterest in a specific way: people save styles months before an occasion. That makes it a planning channel rather than a booking channel, and a salon that treats it as the latter will be disappointed.",
    explain: [
      s(
        "What changes here",
        "The value is in being found during the planning phase for a wedding, an event or a seasonal change. Location has to be findable from the pin, since the platform's reach is national and the business is not.",
      ),
    ],
    close: close(
      "A planning channel, not a booking one",
      "Mengo plans for the long window rather than for immediate conversion. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Podcasts ---------------- */

  "podcasts:b2b-services": {
    intro:
      "A B2B services buyer listening to an interview hears something no written content conveys: how you think when you are not editing. For a purchase decided on trust in judgement, that is unusually persuasive.",
    explain: [
      s(
        "What changes here",
        "Guesting on shows your buyers already listen to is faster and cheaper than building an audience. Attribution is genuinely poor, so the channel has to be justified on assisted conversion rather than tracked enquiries.",
      ),
    ],
    close: close(
      "How you think, unedited",
      "Talking points are drawn from your positioning so the conversation reinforces the rest of the plan. Join our waitlist for early access.",
    ),
  },

  "podcasts:consulting-firms": {
    intro:
      "Consulting is sold on a point of view, and audio is the format where a point of view is hardest to fake. An hour of unscripted conversation demonstrates depth in a way a published framework does not.",
    explain: [
      s(
        "What changes here",
        "The pitch has to propose an episode rather than a biography, and the preparation has to produce specific answers without sounding scripted. Every point needs a concrete example, because abstractions do not survive audio.",
      ),
    ],
    close: close(
      "Depth is audible",
      "Mengo builds the pitch around an argument and pairs each talking point with one of your own stories. Join our waitlist for early access.",
    ),
  },

  "podcasts:saas": {
    intro:
      "Software has an unusually dense podcast ecosystem, with shows aimed at almost every role a software company sells to. That specificity is the opportunity: a niche show reaches exactly the buyer a broad channel dilutes.",
    explain: [
      s(
        "What changes here",
        "Pitching works when it proposes an episode the show has not made, referencing one they have. Guesting on three well-chosen shows usually outperforms starting one of your own in the first year.",
      ),
    ],
    close: close(
      "Borrow the audience first",
      "Mengo builds pitches against a show's back catalogue rather than sending the same one to everyone. Join our waitlist for early access.",
    ),
  },

  "podcasts:financial-services": {
    intro:
      "Financial advice is bought from a person, and audio is the format that lets a stranger assess one. The constraint is that a recorded conversation is still a financial promotion, and it cannot be edited after publication.",
    explain: [
      s(
        "What changes here",
        "Preparation has to include what cannot be said, not only what should be. A talking-points document with an explicit do-not-say list is the difference between a useful appearance and a compliance problem.",
      ),
    ],
    close: close(
      "Prepare what you cannot say",
      "Guardrails supply the restricted language for your regulator as part of the preparation. Join our waitlist for early access.",
    ),
  },

  "podcasts:education": {
    intro:
      "Education providers have a natural advantage in audio: teaching is what they do, and an hour of genuinely useful explanation is both the content and the demonstration.",
    explain: [
      s(
        "What changes here",
        "The free version has to be substantively good, because the audience is judging the teaching. Claims about accreditation and employment outcomes require the same evidence in a conversation as they do on a page.",
      ),
    ],
    close: close(
      "The teaching is the demonstration",
      "Mengo prepares talking points that teach properly rather than withholding for the paid version. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Events and webinars ---------------- */

  "events-webinars:b2b-services": {
    intro:
      "A live session with B2B services buyers is worth running for the questions alone. An hour of people asking what they are actually worried about is better objection research than any survey, and it arrives free.",
    explain: [
      s(
        "What changes here",
        "The follow-up matters more than the session, and answering unanswered live questions individually is consistently the highest-converting message in the set. Attendees and non-attendees need entirely different emails.",
      ),
    ],
    close: close(
      "The questions are the research",
      "Live questions feed straight into the objection map that shapes the rest of the plan. Join our waitlist for early access.",
    ),
  },

  "events-webinars:saas": {
    intro:
      "For software, a live session is the demo that answers questions. It compresses evaluation for people who would otherwise spend three weeks reading, and it surfaces the objections your documentation is not handling.",
    explain: [
      s(
        "What changes here",
        "The recording is frequently worth more than the live session and should be planned as an asset from the start. Registration and attendance are separate problems, and the reminder set is what closes the gap.",
      ),
    ],
    close: close(
      "Plan the recording as an asset",
      "Mengo plans promotion, reminders, session and split follow-up as one system. Join our waitlist for early access.",
    ),
  },

  "events-webinars:education": {
    intro:
      "Open days and information sessions are the closest an education provider gets to a conversion event. They work because a prospective student or funder gets to assess the teaching directly rather than reading claims about it.",
    explain: [
      s(
        "What changes here",
        "Sessions have to be timed against intake deadlines, and the follow-up has to hold a relationship until applications open. Anything said about accreditation or outcomes needs the same evidence as a published page.",
      ),
    ],
    close: close(
      "Timed to the intake, not to the calendar",
      "Promotion is sequenced backwards from the application deadline. Join our waitlist for early access.",
    ),
  },

  "events-webinars:financial-services": {
    intro:
      "Seminars remain effective in financial services because the subject is complicated, the stakes are high, and people would rather ask a question than read a page. The format suits the sale almost perfectly.",
    explain: [
      s(
        "What changes here",
        "Everything presented is a financial promotion, including the slides and the answers given live. Preparation has to cover the restricted language, and the follow-up has to observe the same constraints as any other communication.",
      ),
    ],
    close: close(
      "Live answers are promotions too",
      "Guardrails are configured to your regulator and applied to session material as well as to pages. Join our waitlist for early access.",
    ),
  },

  "events-webinars:professional-services": {
    intro:
      "For professional services, a live session is how a firm demonstrates judgement to several prospects at once. It also removes the main obstacle to enquiring: someone who has heard you think for an hour is no longer contacting a stranger.",
    explain: [
      s(
        "What changes here",
        "Delivering the promised content in full before mentioning any engagement is what makes the offer segment credible. Comparative and outcome claims remain restricted by your professional body, live as well as in writing.",
      ),
    ],
    close: close(
      "They stop being a stranger",
      "The session structure delivers value before the offer, and the follow-up is split by attendance. Join our waitlist for early access.",
    ),
  },
};
