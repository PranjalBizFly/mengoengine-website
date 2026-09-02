import type { DepthMap } from "@/data/depth";
import { close, s } from "@/data/depth";

/**
 * Industry depth.
 *
 * The industry records carry the specifics — buyer, cycle, realities,
 * objections, constraints. What they did not carry was the context that makes
 * those specifics make sense, and an honest account of where marketing in this
 * sector usually goes wrong. Both are page-specific by construction: an entry
 * that would read the same for a neighbouring industry has not been written yet.
 */
export const industryDepth: DepthMap = {
  saas: {
    intro:
      "Software is the clearest case of a market where the sale happens before the conversation. A buyer defines the problem, searches, reads comparisons, asks a peer, tries something free, and only then appears in your pipeline — by which point most of the decision has already been made in material you may or may not have published.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Almost everything gets written about the product and almost nothing about the problem. Search demand for the problem is larger, earlier and considerably less contested than demand for your category name, and it reaches buyers while they still have an open mind about the approach.",
      ),
      s(
        "What a plan looks like here",
        "Problem-led search articles as the foundation, comparison and objection material for the evaluation stage, and onboarding content treated as a marketing asset rather than a support one — because in self-serve software, time to first value is the conversion event.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook", "metric-selection-framework"],
      articles: ["marketing-before-product-market-fit", "onboarding-is-marketing"],
    },
    close: close(
      "Publish where the decision is made",
      "Most software marketing is present for the last ten per cent of the buyer's process. Join our waitlist and tell us what you sell.",
    ),
  },

  "b2b-services": {
    intro:
      "A B2B services buyer is not primarily assessing whether the work will be good. They are assessing how exposed they will be if it is not. That reframing explains most of what works in this sector: process transparency beats capability claims, and material that survives being forwarded beats material that impresses in a meeting.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Everything is written for the person you spoke to. The decision is frequently made by someone you have never met, reading a document with none of the context of your conversation, and that person defers rather than declining.",
      ),
      s(
        "What a plan looks like here",
        "Method content that shows what actually happens in week one, a one-page document written for the approver rather than the champion, and a nurture arc paced for a cycle that includes a stall while internal approval is sought.",
      ),
    ],
    related: {
      guides: ["objection-map-template", "lead-nurture-blueprint"],
      articles: ["the-internal-champion-problem", "the-follow-up-gap"],
    },
    close: close(
      "Write for the room you are not in",
      "The stall in the middle of a B2B services cycle is usually an internal argument you did not equip anyone to win. Join our waitlist for early access.",
    ),
  },

  "professional-services": {
    intro:
      "Professional services are bought on trust in a specific person's judgement. That creates a structural tension: the thing being sold does not scale, and generic marketing actively erodes it, because a firm that sounds like every other firm has removed the only evidence of judgement a prospect had.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Firms publish service descriptions, which are interchangeable, instead of reasoning, which is not. A short piece explaining how you would approach a specific situation does more than a page listing the areas you practise in.",
      ),
      s(
        "What a plan looks like here",
        "Named-individual content rather than firm-voice content, search coverage on the specific problems clients arrive with, and guardrails configured to whatever your professional body restricts — since the constraints are real and the penalties are not commercial.",
      ),
    ],
    related: {
      guides: ["positioning-framework", "ai-content-guardrails-checklist"],
      articles: ["content-that-only-you-could-write"],
    },
    close: close(
      "Judgement is the product",
      "Marketing that hides the individual removes the reason someone would choose your firm. Join our waitlist for early access.",
    ),
  },

  "consulting-firms": {
    intro:
      "Consulting without a stated point of view competes on rate card, and rate card competitions are won by whoever is willing to be cheapest. A firm's published position is the only thing that reliably moves the conversation away from day rates and towards whether this is the right team.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Thought leadership that surveys a topic rather than arguing about it. A balanced overview of a market signals competence and generates no preference; a specific claim about what most firms get wrong generates both preference and disagreement, which is the point.",
      ),
      s(
        "What a plan looks like here",
        "One argument sustained across a quarter, expressed through partner-led writing, spoken formats where the reasoning can be heard, and material sized for a procurement process that will involve people who never read the original piece.",
      ),
    ],
    related: {
      guides: ["positioning-framework", "90-day-content-plan"],
      articles: ["your-positioning-is-a-description", "content-that-only-you-could-write"],
    },
    close: close(
      "A position, not a survey",
      "The firms that avoid rate-card comparisons are the ones that published something a competitor would dispute. Join our waitlist for early access.",
    ),
  },

  "marketing-agencies": {
    intro:
      "Agencies market themselves last, and prospects can tell. It is not hypocrisy so much as economics: billable work always has a deadline and internal marketing never does, which is precisely the structural problem agencies are hired to solve for other people.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "The agency's own pipeline runs on referrals and on the occasional burst of activity between projects. That produces a feast-and-famine cycle that is visible from outside and is the most common reason a good agency has an inconsistent year.",
      ),
      s(
        "What a plan looks like here",
        "A cadence that survives a busy delivery month, work shown in enough detail to demonstrate judgement without breaching client confidentiality, and a documented system that can also be used to keep client accounts sounding distinct from each other.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook", "content-brief-template"],
      articles: ["marketing-when-you-are-the-business", "batching-beats-daily"],
    },
    close: close(
      "The pipeline that runs during delivery",
      "Agency marketing stops the week the work gets busy, which is the week the next pipeline was being built. Join our waitlist for early access.",
    ),
  },

  "it-services": {
    intro:
      "Managed IT is bought immediately after something breaks, which creates a difficult timing problem: the enquiry arrives with no research phase, from a buyer who was not looking yesterday, and goes to whoever was already visible and can state a response time.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Content is written about services and infrastructure, when the buyer's actual question is what happens at nine in the morning when something is down. Response commitments, escalation paths and onboarding timelines convert better than capability lists.",
      ),
      s(
        "What a plan looks like here",
        "Search and paid coverage on the failure moments, evergreen material that keeps you findable during the long period when nothing is wrong, and follow-up that recognises the enquiry may be urgent or may be a planned review months out.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "lead-nurture-blueprint"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Be present before the failure",
      "The enquiry arrives with no research phase, which means the research had to already have happened. Join our waitlist for early access.",
    ),
  },

  cybersecurity: {
    intro:
      "Security marketing has an ethical and a practical problem in the same place. Fear converts in the short term and it also trains buyers to discount everything the category says, which is why so much security content is simultaneously alarming and ignored.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Vague efficacy claims and threat statistics with no source. A sophisticated buyer — and this buyer is usually sophisticated, or answering to someone who is — discounts both immediately, and the discount extends to the accurate parts of the same page.",
      ),
      s(
        "What a plan looks like here",
        "Specific, defensible statements about what is detected and how, compliance-deadline content timed against the frameworks your buyers actually report to, and guardrails that block unverifiable efficacy language before it reaches a draft.",
      ),
    ],
    related: {
      guides: ["ai-content-guardrails-checklist", "objection-map-template"],
      articles: ["the-hallucination-that-matters"],
    },
    close: close(
      "Urgency without fear",
      "A claim your buyer's auditor could challenge is a claim that costs more than it converts. Join our waitlist for early access.",
    ),
  },

  fintech: {
    intro:
      "In fintech, compliance is not a review step at the end of production — it is a constraint on what can be written at all. Teams that treat it as an approval gate produce work that gets rejected late and expensively; teams that treat it as an input produce work that ships.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Consumer and infrastructure motions get run from one plan. A consumer money decision takes days and turns on trust signals; an infrastructure sale takes months and turns on integration detail and risk. Sharing a content calendar between them serves neither.",
      ),
      s(
        "What a plan looks like here",
        "Two separate tracks with their own segments and cadences, guardrails configured to your jurisdiction's financial promotion rules, and a review step built into the workflow rather than bolted on after the draft exists.",
      ),
    ],
    related: {
      guides: ["ai-content-guardrails-checklist", "positioning-framework"],
      articles: ["should-you-disclose-ai", "the-hallucination-that-matters"],
    },
    close: close(
      "Compliance as an input",
      "Financial promotion rules are a constraint on generation, not a check afterwards. Join our waitlist and tell us your jurisdiction.",
    ),
  },

  "financial-services": {
    intro:
      "Advice is bought from a person and found through a firm, which means two things have to be consistent at once: the firm has to be discoverable and credible, and the individual adviser has to be someone a client can imagine trusting with a decision that has money attached.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Firm-voice content that could have been published by any practice in the country, and no visible individual anywhere on it. The client is choosing a person, and the marketing has carefully removed all the evidence about people.",
      ),
      s(
        "What a plan looks like here",
        "Adviser-led content within firm-level guardrails, timing built around fiscal deadlines and life events rather than around a flat calendar, and outcome language constrained to what your regulator permits.",
      ),
    ],
    related: {
      guides: ["ai-content-guardrails-checklist", "seasonal-planning-playbook"],
      articles: ["content-that-only-you-could-write"],
    },
    close: close(
      "The firm is found, the person is chosen",
      "Content with no individual in it removes the basis on which the decision is actually made. Join our waitlist for early access.",
    ),
  },

  "insurance-brokers": {
    intro:
      "Insurance is a reluctant purchase with an automatic renewal, which concentrates almost all of the available opportunity into a small number of predictable moments. Marketing spread evenly across the year is spending most of its budget when nobody is deciding anything.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "A constant, undifferentiated presence aimed at everyone, when the addressable audience at any given moment is people approaching a renewal date, starting a business, buying a property or taking on an obligation.",
      ),
      s(
        "What a plan looks like here",
        "Renewal-window sequences timed against known dates, search and paid coverage on the trigger events, and content that explains cover accurately — because a policy description that overstates what is included is a regulatory problem, not a copy one.",
      ),
    ],
    related: {
      guides: ["seasonal-planning-playbook", "ai-content-guardrails-checklist"],
      articles: ["what-quiet-months-are-for"],
    },
    close: close(
      "Spend where the decisions cluster",
      "Almost all insurance demand appears in a small number of predictable windows. Join our waitlist for early access.",
    ),
  },

  "accounting-firms": {
    intro:
      "Accounting demand is shaped by the calendar more than by anything a firm does. Enquiries cluster in the weeks before each deadline, they arrive from people who have just realised they are late, and the firms that capture them are the ones already visible when the panic starts.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Marketing that starts when demand starts. By the time the deadline is close enough to prompt an enquiry, the search results and the referral conversations have already happened, and a firm that began publishing that month is invisible in both.",
      ),
      s(
        "What a plan looks like here",
        "Production scheduled into the quiet months and publication timed against the deadline calendar, with the referral motion made deliberate rather than left to chance, since it is the channel that actually carries most of this sector.",
      ),
    ],
    related: {
      guides: ["seasonal-planning-playbook", "local-seo-checklist"],
      articles: ["what-quiet-months-are-for", "referrals-are-not-a-strategy"],
    },
    close: close(
      "Visible before the deadline, not during",
      "The work that captures deadline demand has to exist several months before it. Join our waitlist for early access.",
    ),
  },

  "legal-services": {
    intro:
      "Legal enquiries arrive at a moment of stress, from someone who is not comparing expertise because they cannot assess it. What they can assess is whether the firm is findable, whether the page answers their question, and how quickly someone responds — and those three usually decide it.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Content written in the register of the profession rather than in the words of a worried person. A page titled with the statutory name of a process will not be found by someone describing their situation in ordinary language.",
      ),
      s(
        "What a plan looks like here",
        "Search coverage in the client's vocabulary, pages that answer the immediate question before introducing the firm, response commitments made visible, and guardrails configured to the outcome and comparison restrictions your regulator applies.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "ai-content-guardrails-checklist"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Findable, clear, and quick to answer",
      "In most legal matters the firm that responds first is the firm that is instructed. Join our waitlist for early access.",
    ),
  },

  "real-estate": {
    intro:
      "Property is an infrequent, high-value decision where the agent is chosen on local credibility rather than on marketing polish. A national-standard brand presence loses to someone who obviously knows the three streets the seller is asking about.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Listings posted as inventory. A feed of properties tells a prospective seller nothing about whether you understand their area, and it competes directly with portals that will always have more listings than you do.",
      ),
      s(
        "What a plan looks like here",
        "Area-level knowledge published as content — what is selling, what is not, what buyers in this postcode are asking for — with messaging channels used for the fast, personal follow-up this sector actually runs on.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "whatsapp-nurture-playbook"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Local knowledge is the differentiator",
      "A seller is choosing someone who knows their street, not someone with better photography. Join our waitlist for early access.",
    ),
  },

  "property-management": {
    intro:
      "Property management is won on operational credibility and lost on responsiveness, which makes the marketing argument almost entirely about process. A landlord switching providers has usually just experienced a failure, and they are looking for evidence that yours works differently.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Fee comparison. Competing on percentage invites a race that ends with margins too thin to deliver the service that was being sold, and it ignores the actual trigger, which is a bad tenancy or a regulatory change rather than a price.",
      ),
      s(
        "What a plan looks like here",
        "Process content — what happens when a boiler fails at midnight, how compliance deadlines are tracked — plus jurisdiction-specific regulatory updates on a review schedule, since obligations change and dated content becomes a liability.",
      ),
    ],
    related: {
      guides: ["objection-map-template", "local-seo-checklist"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Sell the process, not the percentage",
      "Landlords switch after a failure, which means they are buying reassurance about handling rather than a lower fee. Join our waitlist for early access.",
    ),
  },

  construction: {
    intro:
      "Construction and trades sell on two things a website often fails to show: evidence of finished work, and confidence that you will turn up and complete it. The second is the real anxiety, and it is rarely addressed anywhere in the marketing.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Galleries of finished projects with no process around them. A photograph proves capability; it does not address the fear that the job will stall halfway, which is what most homeowners have either experienced or been warned about.",
      ),
      s(
        "What a plan looks like here",
        "Work shown in progress as well as finished, explicit content about scheduling, communication and what happens when something is found behind a wall, plus fast local response through search and messaging where the enquiry is urgent.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "objection-map-template"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Answer the fear, not just the spec",
      "Most homeowners are not worried the work will be poor. They are worried it will not be finished. Join our waitlist for early access.",
    ),
  },

  "architecture-firms": {
    intro:
      "Architecture is chosen on portfolio and on a client's belief that the practice will understand what they actually want. The portfolio gets attention and the second half is where most enquiries are won or lost, because a client who cannot articulate their ambition is looking for evidence you can.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Images without reasoning. A finished building shows what you did; it does not show how the brief was interpreted, what constraint shaped the decision, or how a difficult client conversation was resolved — which is what a prospective client is actually assessing.",
      ),
      s(
        "What a plan looks like here",
        "Project narratives that explain decisions alongside the visual work, patient publishing paced for a cycle with long funding and planning gaps, and follow-up that survives a six-month silence without going cold.",
      ),
    ],
    related: {
      guides: ["content-brief-template", "lead-nurture-blueprint"],
      articles: ["content-that-only-you-could-write"],
    },
    close: close(
      "Show the thinking, not just the building",
      "Clients choose a practice for how it will interpret their brief, which photographs cannot demonstrate. Join our waitlist for early access.",
    ),
  },

  "interior-design": {
    intro:
      "Interior design is discovered visually and bought on trust in taste, which splits the marketing into two jobs that behave completely differently. Images generate the enquiry; written material converts it, by addressing budget, process and the fear of losing control of a home.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "All effort goes into the visual channels and nothing exists behind them. A prospective client who loves the work arrives at a site with no explanation of how projects run, what they cost, or what is expected of them, and quietly does not enquire.",
      ),
      s(
        "What a plan looks like here",
        "Visual discovery through the platforms where people browse spaces, backed by written material on process and budget ranges, and a long nurture that accommodates a browsing period measured in months rather than days.",
      ),
    ],
    related: {
      guides: ["landing-page-checklist", "lead-nurture-blueprint"],
      articles: ["price-objections-are-rarely-about-price"],
    },
    close: close(
      "Images bring them, words convert them",
      "The gap between a saved image and an enquiry is usually a missing page about money and process. Join our waitlist for early access.",
    ),
  },

  "home-services": {
    intro:
      "Home services demand is urgent, local and decided fast. A homeowner with a leak is not comparing values or reading an about page; they are calling whoever appears first with a clear price and a time they can turn up.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Effort goes into brand presence for a decision that has no consideration phase. Meanwhile the enquiry form takes four fields, the phone number is in the footer, and a competitor answered on the second ring.",
      ),
      s(
        "What a plan looks like here",
        "Local search coverage on the urgent jobs, prices or ranges published where competitors hide them, phone-first contact, and messaging-channel follow-up for the planned work that does have a research phase.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "landing-page-checklist"],
      articles: ["speed-is-a-conversion-strategy", "forms-that-lose-you-money"],
    },
    close: close(
      "Answer first, with a price and a time",
      "In urgent home services the decision is usually made before your second competitor calls back. Join our waitlist for early access.",
    ),
  },

  automotive: {
    intro:
      "A vehicle buyer researches for weeks and visits once. By the time they arrive, the shortlist is set, the finance question is half-answered and the visit is a confirmation rather than a comparison — which makes the pre-visit content the actual showroom.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Inventory posted as content. Stock listings compete with aggregators that will always carry more, while the questions that actually decide a shortlist — finance structure, part-exchange, running costs, what the model is genuinely like after a year — go unanswered.",
      ),
      s(
        "What a plan looks like here",
        "Model-level and finance-level content that answers the shortlist questions, messaging channels for the fast personal exchange this sector runs on, and finance promotion language kept inside the disclosure rules that apply in your market.",
      ),
    ],
    related: {
      guides: ["whatsapp-nurture-playbook", "ai-content-guardrails-checklist"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "The showroom is now the research phase",
      "One visit, weeks of reading — and most dealers publish only stock. Join our waitlist for early access.",
    ),
  },

  manufacturing: {
    intro:
      "Industrial buyers are technical and specification-driven, working to a defined engineering problem with a procurement process attached. They are unusually tolerant of dense content and unusually intolerant of marketing language, which inverts most general advice.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Copy written to be accessible. Simplifying a specification for a reader who is an engineer removes the exact information they were looking for and signals that you do not understand the application.",
      ),
      s(
        "What a plan looks like here",
        "Application-led technical content, specification detail published rather than gated, and a nurture cadence paced for a cycle that can run for a year or more without the enquiry going cold.",
      ),
    ],
    related: {
      guides: ["lead-nurture-blueprint", "content-brief-template"],
      articles: ["how-much-marketing-is-enough"],
    },
    close: close(
      "Technical readers want technical content",
      "Simplifying a specification for an engineer removes the reason they were reading. Join our waitlist for early access.",
    ),
  },

  logistics: {
    intro:
      "Logistics is bought on reliability and switched over failure. The addressable moment is narrow — shortly after an incumbent misses something important — which means the marketing job is to be already credible when that moment arrives.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Claims about service levels with nothing behind them. Every provider claims reliability, so the word has stopped carrying information; what carries information is a description of how exceptions are actually handled when something goes wrong.",
      ),
      s(
        "What a plan looks like here",
        "Operational transparency published as content, search coverage on the specific failure scenarios that trigger a switch, and a long nurture for the buyers who are dissatisfied but not yet at the point of moving.",
      ),
    ],
    related: {
      guides: ["objection-map-template", "lead-nurture-blueprint"],
      articles: ["the-follow-up-gap"],
    },
    close: close(
      "Be credible before the failure happens",
      "The switch happens quickly and the credibility has to already exist. Join our waitlist for early access.",
    ),
  },

  ecommerce: {
    intro:
      "Ecommerce is an arithmetic problem before it is a creative one. Acquisition cost, margin and repeat rate decide whether a brand is viable, and content is what makes all three survivable — by reducing dependence on paid discovery and by giving people a reason to buy again.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Everything is spent on acquisition and almost nothing on the second purchase. A brand acquiring at close to breakeven on the first order is entirely dependent on repeat, and repeat is usually left to a discount code sent to everyone.",
      ),
      s(
        "What a plan looks like here",
        "Owned-channel content that reduces paid dependence, post-purchase sequences designed around the second order rather than around a discount, and pricing and sustainability claims kept inside consumer protection rules.",
      ),
    ],
    related: {
      guides: ["email-newsletter-playbook", "metric-selection-framework"],
      articles: ["onboarding-is-marketing", "how-much-marketing-is-enough"],
    },
    close: close(
      "The second order is where the margin is",
      "A brand that only markets acquisition is renting its customers from an ad platform. Join our waitlist for early access.",
    ),
  },

  "local-retail": {
    intro:
      "Local retail cannot win on price or range against online, and does not have to. It wins on immediacy, on curation, and on being part of a place — none of which are communicated by posting product photographs into a feed.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "The account becomes a catalogue. Product images with prices compete directly on the terms where online has every advantage, while the things a local shop can uniquely say — what arrived this week, what the owner recommends, what is happening locally — go unsaid.",
      ),
      s(
        "What a plan looks like here",
        "Content built around curation and locality, search presence for the searches that end in a visit today, and a small owned list for the customers who already come in — since those are the ones worth reaching directly.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist"],
      articles: ["content-that-only-you-could-write"],
    },
    close: close(
      "Curation is the thing online cannot copy",
      "A catalogue account competes on the one axis where a local shop cannot win. Join our waitlist for early access.",
    ),
  },

  "food-beverage": {
    intro:
      "Food brands work on appetite and repeat. The first is visual and immediate; the second is where the business actually lives, and it depends on being remembered between purchases that may be weeks apart in a category with very low attention.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Launch-shaped marketing for a repeat-purchase business. Attention concentrated on listings and launches leaves nothing running during the periods when existing customers decide whether to buy again.",
      ),
      s(
        "What a plan looks like here",
        "Visual content that carries appetite on the channels where food is browsed, a separate track aimed at retail buyers with entirely different concerns, and health and nutrition language kept inside what your labelling rules permit.",
      ),
    ],
    related: {
      guides: ["instagram-reels-playbook", "ai-content-guardrails-checklist"],
      articles: ["write-for-the-format"],
    },
    close: close(
      "Two audiences, two motions",
      "A consumer scrolling and a retail buyer assessing a listing share no concerns at all. Join our waitlist for early access.",
    ),
  },

  restaurants: {
    intro:
      "A restaurant is chosen in the last twenty minutes before a decision, usually on a phone, by someone who is already hungry. That compresses the marketing question to a single test: when someone looks, is the current information there and is it correct?",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Effort spent on brand-building while the opening hours are wrong, the menu is a photograph of a PDF, and the last post was in March. In this category accuracy and recency outrank creativity by a large margin.",
      ),
      s(
        "What a plan looks like here",
        "Current information everywhere it is checked, visual content that shows what is actually being served now, and a separate, longer track for occasion bookings, which behave nothing like a weekday lunch decision.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "instagram-reels-playbook"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Correct beats clever",
      "Most restaurant marketing losses happen on a wrong opening time rather than on a weak caption. Join our waitlist for early access.",
    ),
  },

  hospitality: {
    intro:
      "Hotels are compared on channels the hotel does not control, against competitors selected by someone else's algorithm, on price and photographs. Every direct booking avoids a commission, which makes content that produces direct bookings the highest-value marketing work available.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Competing with aggregators on their terms — price and room photography — rather than on the things a hotel can say and an aggregator cannot: the area, the staff, what a stay is actually like, and what is happening locally that week.",
      ),
      s(
        "What a plan looks like here",
        "Destination and experience content that gives a direct visit a reason to exist, an owned list built from past guests, and pre-arrival and post-stay sequences that make the next booking direct.",
      ),
    ],
    related: {
      guides: ["email-newsletter-playbook", "local-seo-checklist"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "Every direct booking is a saved commission",
      "The content that wins one is the content an aggregator cannot publish. Join our waitlist for early access.",
    ),
  },

  "travel-tourism": {
    intro:
      "Travel is researched at length and booked emotionally, which means a single piece of content usually has to do two incompatible jobs: create the desire and answer the practical questions that would otherwise stop the booking.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Inspiration with no logistics, or logistics with no inspiration. The first produces saved posts and no bookings; the second produces comparison shopping on price. The booking happens when both are present in the same place.",
      ),
      s(
        "What a plan looks like here",
        "Trip-shaped content that carries desire and practical reassurance together, planned against a research period measured in months, with pricing and cancellation terms stated accurately as package travel rules require.",
      ),
    ],
    related: {
      guides: ["landing-page-checklist", "seasonal-planning-playbook"],
      articles: ["your-landing-page-asks-for-too-much"],
    },
    close: close(
      "Desire and logistics in the same piece",
      "Separating them produces either saved posts or price comparisons, and rarely a booking. Join our waitlist for early access.",
    ),
  },

  "events-weddings": {
    intro:
      "An event business sells an outcome the buyer cannot sample, for a date that cannot move, to someone who will make this decision once. Every part of the marketing has to reduce a risk that is emotional as much as financial.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Portfolios of finished events with no process behind them. Beautiful images raise confidence in taste and do nothing for the underlying fear, which is that something will go wrong on a day that cannot be repeated.",
      ),
      s(
        "What a plan looks like here",
        "Process and contingency content alongside the visual work, a long nurture matched to a research period that can run for a year, and material that reaches both decision-makers, who often have different concerns entirely.",
      ),
    ],
    related: {
      guides: ["objection-map-template", "lead-nurture-blueprint"],
      articles: ["price-objections-are-rarely-about-price"],
    },
    close: close(
      "Reduce a risk that cannot be repeated",
      "The decision is made once, which makes reassurance worth more than aspiration. Join our waitlist for early access.",
    ),
  },

  healthcare: {
    intro:
      "A healthcare reader is frequently anxious, and anxiety changes what works. Persuasive technique reads as pressure, while clarity, restraint and practical information read as competence — which is the opposite of the default in most marketing advice.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Marketing language applied to a clinical subject. Urgency devices, outcome claims and testimonial-led pages are variously ineffective, restricted, or both, and they undermine the trust the page exists to establish.",
      ),
      s(
        "What a plan looks like here",
        "Plain, accurate content answering the questions patients actually search, written to be reviewed by a qualified practitioner before publication, with guardrails blocking outcome claims and any testimonial use your regulator restricts.",
      ),
    ],
    related: {
      guides: ["ai-content-guardrails-checklist", "local-seo-checklist"],
      articles: ["the-hallucination-that-matters"],
    },
    close: close(
      "Clarity outperforms persuasion here",
      "Nothing generated for a clinical page should reach a patient without practitioner review. Join our waitlist for early access.",
    ),
  },

  "dental-practices": {
    intro:
      "A dental practice runs two businesses from one building. Routine care is local, habitual and price-sensitive; elective treatment is researched for months and decided on confidence. Marketing them with one voice serves whichever one is louder.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "A single account alternating between check-up reminders and cosmetic transformations. The routine patient is not the elective patient, and content aimed at both simultaneously converts neither well.",
      ),
      s(
        "What a plan looks like here",
        "Separate tracks with separate segments and cadences, elective content that addresses cost and recovery honestly, and strict adherence to the imagery and testimonial rules your regulator applies to before-and-after material.",
      ),
    ],
    related: {
      guides: ["ai-content-guardrails-checklist", "local-seo-checklist"],
      articles: ["price-objections-are-rarely-about-price"],
    },
    close: close(
      "Two patients, two plans",
      "Routine and elective demand behave nothing alike and should not share a calendar. Join our waitlist for early access.",
    ),
  },

  veterinary: {
    intro:
      "Pet owners are emotionally invested and cost-sensitive at the same time, and the tension between those two is where most veterinary marketing struggles. Being unclear about price does not remove the concern; it moves it to the consultation room.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Price treated as something to be discussed later. Owners searching for a practice are comparing on cost whether or not you publish, and the practices that publish ranges receive better-qualified registrations and fewer difficult conversations.",
      ),
      s(
        "What a plan looks like here",
        "Transparent pricing where it can be given, content about preventative care that builds the relationship before an emergency, and treatment material reviewed by a qualified professional before it is published.",
      ),
    ],
    related: {
      guides: ["ai-content-guardrails-checklist", "objection-map-template"],
      articles: ["price-objections-are-rarely-about-price"],
    },
    close: close(
      "Transparency reduces the hard conversation",
      "Owners are comparing on cost whether or not the number is on your site. Join our waitlist for early access.",
    ),
  },

  "mental-health-practices": {
    intro:
      "Someone looking for therapy has usually been considering it for a long time and is contacting you at a low point. Every additional step between deciding and making contact loses a proportion of the people who had finally decided to act.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Friction, mostly unintentional. Long forms, unclear pricing, no indication of availability, no explanation of what a first session involves — each of which asks a hesitant person to tolerate more uncertainty than they currently can.",
      ),
      s(
        "What a plan looks like here",
        "Content that reduces the effort of first contact: what happens in a first session, what it costs, when you are available, and a form that asks for the minimum. Claims and testimonials kept inside professional body rules.",
      ),
    ],
    related: {
      guides: ["landing-page-checklist", "ai-content-guardrails-checklist"],
      articles: ["forms-that-lose-you-money"],
    },
    close: close(
      "Remove the steps between deciding and contacting",
      "The people lost at this stage had already made the hardest decision. Join our waitlist for early access.",
    ),
  },

  "fitness-wellness": {
    intro:
      "Fitness businesses acquire in bursts and lose members quietly. The acquisition spikes are visible and satisfying; the attrition happens without an event, three or four months in, and it is where the economics of the business are actually decided.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "All the effort goes to new members. The joining offer is polished, the first week is well handled, and month three is silent — which is exactly when the member who has stopped attending decides to cancel.",
      ),
      s(
        "What a plan looks like here",
        "Retention sequences triggered by declining attendance rather than by the renewal date, seasonal acquisition planned around the dates that actually drive signups, and body composition or outcome claims kept inside advertising rules.",
      ),
    ],
    related: {
      guides: ["reengagement-playbook", "seasonal-planning-playbook"],
      articles: ["onboarding-is-marketing"],
    },
    close: close(
      "Retention is the cheaper number to move",
      "A member who stopped attending in week six cancels in month four and is recorded as a pricing problem. Join our waitlist for early access.",
    ),
  },

  "beauty-salons": {
    intro:
      "Salons are booked on visible proof and rebooked on habit. Acquisition is largely a portfolio problem and retention is largely a scheduling one, and the second is where most of the revenue sits and least of the attention goes.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Constant posting of results with no rebooking mechanism behind it. A client who enjoyed the appointment and was not prompted at the right interval simply drifts, and is replaced at the cost of another acquisition.",
      ),
      s(
        "What a plan looks like here",
        "Visual proof on the channels where clients browse, messaging-channel rebooking prompts timed to the treatment's natural interval, and careful handling of any claim that crosses into medical-adjacent territory.",
      ),
    ],
    related: {
      guides: ["whatsapp-nurture-playbook", "instagram-reels-playbook"],
      articles: ["onboarding-is-marketing"],
    },
    close: close(
      "The rebooking is the marketing",
      "A client who drifts costs an acquisition to replace, and the prompt that would have kept them takes a minute. Join our waitlist for early access.",
    ),
  },

  "med-spas": {
    intro:
      "Aesthetics sits between beauty and healthcare, and inherits the marketing expectations of one and the regulatory constraints of the other. The visual proof that converts is frequently the visual proof that is restricted, which is the central problem of the category.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Borrowing beauty-sector tactics without the medical-sector constraints. Before-and-after imagery, testimonials and naming prescription treatments are restricted or prohibited in many jurisdictions, and enforcement is not theoretical.",
      ),
      s(
        "What a plan looks like here",
        "Practitioner credibility and process content doing the work that restricted imagery cannot, honest treatment of cost and recovery, and guardrails configured to your jurisdiction's rules on prescription treatment advertising.",
      ),
    ],
    related: {
      guides: ["ai-content-guardrails-checklist", "objection-map-template"],
      articles: ["the-hallucination-that-matters"],
    },
    close: close(
      "Convert inside the rules",
      "The imagery that converts best in this category is frequently the imagery you are not permitted to publish. Join our waitlist for early access.",
    ),
  },

  education: {
    intro:
      "Education demand is set by intake dates rather than by marketing. Enquiries cluster before deadlines, decisions are made on outcome and trust, and a course that is not visible during the decision window waits for the next cohort.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Promotion that begins when applications open. The consideration period runs for months before that, and a provider who appears only during the application window is competing for people whose shortlist is already formed.",
      ),
      s(
        "What a plan looks like here",
        "Outcome-led content published well ahead of the intake, a nurture sequence that survives the gap between initial interest and application, and accreditation and employment claims stated only where they can be evidenced.",
      ),
    ],
    related: {
      guides: ["seasonal-planning-playbook", "lead-nurture-blueprint"],
      articles: ["the-follow-up-gap"],
    },
    close: close(
      "The decision starts months before the deadline",
      "A provider visible only during the application window is choosing from what is left. Join our waitlist for early access.",
    ),
  },

  "tutoring-centres": {
    intro:
      "Tutoring is bought by a parent responding to a specific event — a school report, a mock result, an approaching exam — under time pressure and with more anxiety than they will express. Demand is highly seasonal and highly urgent inside each season.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Marketing to students. The learner is not the buyer, and the buyer's concerns — will this help, how quickly, is my child going to be alright — are different from anything the student would say.",
      ),
      s(
        "What a plan looks like here",
        "Parent-facing content addressing the trigger events directly, local search coverage timed against exam calendars, and grade improvement claims evidenced and caveated rather than asserted.",
      ),
    ],
    related: {
      guides: ["seasonal-planning-playbook", "local-seo-checklist"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "The parent is the buyer",
      "The enquiry arrives days after a report and cools within a fortnight. Join our waitlist for early access.",
    ),
  },

  edtech: {
    intro:
      "EdTech runs two businesses with almost nothing in common: an institutional sale with budget cycles, procurement and a decision that takes a year, and a consumer sale that closes in an afternoon. Very few teams resource both properly.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "One plan covering both. Institutional buyers need evidence, integration detail and procurement-ready material; individual learners need outcome and immediacy. A shared calendar produces content that is too shallow for the first and too heavy for the second.",
      ),
      s(
        "What a plan looks like here",
        "Two separate motions with their own segments, cadences and metrics, learning outcome claims backed by evidence, and particular care with data protection where minors are involved.",
      ),
    ],
    related: {
      guides: ["metric-selection-framework", "lead-nurture-blueprint"],
      articles: ["how-much-marketing-is-enough"],
    },
    close: close(
      "Two motions, resourced separately",
      "An eighteen-month institutional cycle and a same-day consumer purchase cannot share a plan. Join our waitlist for early access.",
    ),
  },

  "childcare-preschools": {
    intro:
      "Childcare is chosen on trust and proximity, researched anxiously months ahead, and decided almost immediately after a visit. That makes the visit the conversion event and everything before it a mechanism for producing visits.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Marketing that tries to close online. The decision will not be made from a website, and effort spent persuading is better spent removing every obstacle between a nervous parent and a booked visit.",
      ),
      s(
        "What a plan looks like here",
        "Content that answers the questions parents are too polite to ask, an obvious and low-friction path to booking a visit, and strict handling of children's imagery with documented consent and content review.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "ai-content-guardrails-checklist"],
      articles: ["forms-that-lose-you-money"],
    },
    close: close(
      "Everything exists to produce a visit",
      "No parent chooses a nursery from a website, but plenty decline one from a website. Join our waitlist for early access.",
    ),
  },

  "driving-schools": {
    intro:
      "Driving instruction is a local, referral-heavy purchase decided largely on availability. A learner who is ready to start does not wait a fortnight for a reply, and most of the competitive advantage available is in responding quickly and being easy to book.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Time spent on presence rather than on responsiveness. In a category where the decision takes a day, an unanswered message on Tuesday is a customer who booked with someone else on Wednesday.",
      ),
      s(
        "What a plan looks like here",
        "Local search coverage, availability made visible, messaging-channel booking because that is how learners actually communicate, and a deliberate referral ask at the point a pupil passes.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "whatsapp-nurture-playbook"],
      articles: ["referrals-are-not-a-strategy", "speed-is-a-conversion-strategy"],
    },
    close: close(
      "Availability is the offer",
      "The pass rate matters less than whether someone can start next week. Join our waitlist for early access.",
    ),
  },

  recruitment: {
    intro:
      "Recruitment is a two-sided market where agencies almost always market to one side. Client acquisition gets the budget and the attention, while candidate supply — which is the actual constraint on delivery — is left to job boards and outreach.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Winning a mandate you cannot fill. Client-side marketing that outpaces candidate-side presence produces roles that stay open, clients who go elsewhere, and a reputation problem that is expensive to reverse.",
      ),
      s(
        "What a plan looks like here",
        "Two audiences with separate content tracks — clients need evidence of process and market knowledge, candidates need a reason to trust you with their career — and employment advertising kept free of discriminatory criteria.",
      ),
    ],
    related: {
      guides: ["channel-selection-framework", "lead-nurture-blueprint"],
      articles: ["the-follow-up-gap"],
    },
    close: close(
      "Market to the side that constrains you",
      "A mandate you cannot fill costs more than one you never won. Join our waitlist for early access.",
    ),
  },

  "hr-consulting": {
    intro:
      "HR consulting is bought when something has gone wrong or a regulation has changed. Both are unpredictable individually and entirely predictable in aggregate, which makes topical authority the mechanism that captures demand as it appears.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Employment law content published once and left. This material dates quickly, and an out-of-date page stating a superseded obligation is worse than no page — it damages exactly the credibility the content was meant to build.",
      ),
      s(
        "What a plan looks like here",
        "Jurisdiction-specific content on the obligations and thresholds that trigger enquiries, published with a review schedule attached, plus faster-moving material when a live matter is driving the search.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "marketing-audit-checklist"],
      articles: ["why-your-content-does-not-compound"],
    },
    close: close(
      "Authority needs a review schedule",
      "Employment law content without a review date becomes a liability rather than an asset. Join our waitlist for early access.",
    ),
  },

  nonprofits: {
    intro:
      "Nonprofits market to two audiences with opposite needs. Funders want evidence, structure and accountability; supporters want a story they can feel something about. Most organisations have the resource to do one of these properly.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "One voice used for both. Funder-shaped reporting sent to supporters reads as bureaucratic; supporter-shaped storytelling sent to funders reads as unrigorous. The same programme needs to be described twice, differently.",
      ),
      s(
        "What a plan looks like here",
        "Separate tracks for funders and supporters drawing on the same underlying work, a rhythm sustainable with no marketing budget, and beneficiary stories used only with documented informed consent and dignity safeguards.",
      ),
    ],
    related: {
      guides: ["email-newsletter-playbook", "ai-content-guardrails-checklist"],
      articles: ["marketing-when-you-are-the-business"],
    },
    close: close(
      "Two audiences, one programme, two tellings",
      "The same work has to be described very differently to a funder and to a supporter. Join our waitlist for early access.",
    ),
  },

  "creator-economy": {
    intro:
      "For a creator the audience is the asset, and the failure mode is optimising audience growth at the expense of the thing that monetises it. An account can grow steadily for two years and produce almost no revenue if the offer never developed alongside it.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Growth content and offer content are treated as opposing forces, so the offer is mentioned rarely and apologetically. The audience then learns that nothing is for sale, which is a much harder position to reverse than starting with a clear offer.",
      ),
      s(
        "What a plan looks like here",
        "An offer ladder built alongside the audience rather than after it, an owned list so reach does not depend entirely on platform decisions, and disclosure handled properly on sponsored and affiliate content.",
      ),
    ],
    related: {
      guides: ["offer-ladder-framework", "email-newsletter-playbook"],
      articles: ["founder-brand-without-oversharing", "why-your-content-does-not-compound"],
    },
    close: close(
      "An audience without an offer is a hobby",
      "The offer has to develop alongside the audience, not after it. Join our waitlist for early access.",
    ),
  },

  "coaching-consulting": {
    intro:
      "An independent coach or consultant sells their own judgement, which collapses visibility and credibility into a single problem resting on one person. It also means every hour spent marketing is an hour not spent delivering, and delivery has the deadline.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Feast and famine. Marketing happens between clients, so the pipeline is empty exactly when delivery finishes, and the next quiet period arrives with nothing in it. The cycle is structural rather than a discipline failure.",
      ),
      s(
        "What a plan looks like here",
        "A cadence sized to what is sustainable during a full delivery month, content that demonstrates judgement rather than describing services, and a nurture arc that handles a long lurking period before anyone makes contact.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook", "linkedin-founder-playbook"],
      articles: ["marketing-when-you-are-the-business", "batching-beats-daily"],
    },
    close: close(
      "The pipeline has to run during delivery",
      "Marketing only between clients guarantees the gap. Join our waitlist for early access.",
    ),
  },

  "nonprofit-membership": {
    intro:
      "A membership organisation is judged once a year, at renewal, against what the member actually used. That makes continuous demonstration of value the entire marketing job, and it makes the quiet months more important than the recruitment campaign.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Communication concentrated at renewal. A member who heard nothing for ten months and then receives an invoice evaluates the subscription against a blank period, which is a difficult comparison to win.",
      ),
      s(
        "What a plan looks like here",
        "Regular, useful member communication throughout the year, benefits surfaced at the moments they are relevant rather than listed annually, and recruitment content that reflects what members actually value in practice.",
      ),
    ],
    related: {
      guides: ["email-newsletter-playbook", "reengagement-playbook"],
      articles: ["onboarding-is-marketing"],
    },
    close: close(
      "Renewal is decided during the year",
      "A silent ten months makes the renewal invoice the only thing being evaluated. Join our waitlist for early access.",
    ),
  },

  "saas-marketplaces": {
    intro:
      "A marketplace has to market to both sides, and the scarce side changes as the platform grows. Running one plan for both — or continuing to market to the side that was scarce last year — is the standard way marketplace growth stalls.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "Optimising the easier side. Demand acquisition is usually more familiar and more measurable, so it continues after supply has become the constraint, producing users who arrive to insufficient selection and do not return.",
      ),
      s(
        "What a plan looks like here",
        "Separate content tracks per side with their own metrics, an explicit review of which side is currently scarce, and marketplace-specific consumer protection obligations reflected in what is claimed.",
      ),
    ],
    related: {
      guides: ["metric-selection-framework", "channel-selection-framework"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "Market to whichever side is scarce now",
      "The constraint moves, and marketing usually notices a quarter late. Join our waitlist for early access.",
    ),
  },

  "events-conferences": {
    intro:
      "A conference is a race against a fixed date with three audiences who need entirely different arguments. Attendees justify time and cost, speakers want a platform worth their preparation, and sponsors want access to a specific room.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "One campaign aimed at everyone. The attendee case, the speaker case and the sponsor case share a date and almost nothing else, and material written for all three persuades whichever audience is largest.",
      ),
      s(
        "What a plan looks like here",
        "Three tracks with their own sequences and deadlines, promotion sequenced backwards from early-bird and final deadlines, and a post-event motion that turns this year's attendees into next year's early bookings.",
      ),
    ],
    related: {
      guides: ["webinar-playbook", "launch-checklist"],
      articles: ["speed-is-a-conversion-strategy"],
    },
    close: close(
      "Three audiences, three arguments",
      "An attendee, a speaker and a sponsor are being sold three different things. Join our waitlist for early access.",
    ),
  },

  "subscription-boxes": {
    intro:
      "Subscription commerce looks like an acquisition business and behaves like a retention one. The churn curve decides everything, and a brand that acquires well into a steep curve is spending faster to stand still.",
    explain: [
      s(
        "Where the marketing usually goes wrong",
        "The introductory offer is optimised and the second month is silent. Most cancellations happen in the first two or three cycles, and a heavy joining discount frequently acquires exactly the subscribers most likely to leave.",
      ),
      s(
        "What a plan looks like here",
        "Early-cycle content that builds the habit the subscription depends on, pause options offered before cancellation is considered, and auto-renewal terms disclosed as clearly as the rules in your market require.",
      ),
    ],
    related: {
      guides: ["reengagement-playbook", "metric-selection-framework"],
      articles: ["onboarding-is-marketing", "how-much-marketing-is-enough"],
    },
    close: close(
      "The churn curve decides the business",
      "A heavy joining discount usually buys the subscribers most likely to cancel. Join our waitlist for early access.",
    ),
  },
};
