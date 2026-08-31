# MengoEngine — existing site audit and content inventory

Audit of `mengoengine.com` carried out 31 August 2026, against the live HTML and
the site's own WordPress sitemap. Everything below is taken from the live site;
nothing is inferred.

---

## 1. What is actually there

**Platform:** WordPress. `robots.txt` allows everything except `/wp-admin/` and
points at `https://mengoengine.com/wp-sitemap.xml`.

**The sitemap is almost empty.** It lists four URLs: the homepage,
`/hello-world/` (the default WordPress sample post), `/category/uncategorized/`
and `/author/chetan1xl-com/`.

**Six substantive pages exist but are absent from the sitemap**, so they are
unlikely to be indexed reliably:

| URL | Title | Status |
| --- | --- | --- |
| `/` | Mengo — Your AI Co-founder | In sitemap |
| `/marketing-engine` | Marketing Engine \| Mengo | Not in sitemap |
| `/lead-nurturing` | Lead Nurturing \| Mengo | Not in sitemap |
| `/blog` | Blog \| Mengo | Not in sitemap |
| `/founder` | About the Founder \| Jainam Jain \| Mengo | Not in sitemap |
| `/invest` | Invest In Mengo | Not in sitemap, and very thin (~5KB) |
| `/privacy-policy` | Privacy Policy \| Mengo | Not in sitemap |

> **Finding.** The single highest-value SEO fix available today is publishing a
> sitemap that contains the real pages. The rebuild does this automatically.

**Navigation (all pages):** About · How It Works · Who It's For · About the
Founder · Join our waitlist → · Invest In Mengo. All except the last two are
homepage anchors (`#about`, `#how`, `#who`, `#join`) rather than pages, so the
current IA is effectively a one-page site with five satellites.

**Footer:** Marketing Engine · Lead Nurturing · Blog · Privacy Policy ·
JainamJain.com, plus nine social profiles (Facebook, X, Instagram, LinkedIn,
Threads, Pinterest, Medium, Quora, TikTok). Copyright reads "© 2026 Mengo".

**Brand assets found:** one logo (`/assets/logo.png`, 201×230 lime pinwheel
mark). Colours in the stylesheet: `#A3E625` lime, `#022018` deep forest, plus
supporting greens `#0a2e1c` `#123322` `#1b3f2a` and `#8FA396`. Fonts loaded:
Sora, Instrument Sans, Instrument Serif (italic), Montserrat, Poppins.

> **Finding.** Five font families are loaded across the site, which is two or
> three more than the design needs and a real performance cost. The rebuild
> standardises on Sora / Instrument Sans / Instrument Serif and drops Montserrat
> and Poppins.

**Forms found:**

| Form | Location | Fields |
| --- | --- | --- |
| Waitlist modal | All pages | Name, Email, Phone, Company Name, Designation, "What Are You Looking For?" |
| Speaker invitation | `/founder` | Full Name, Email, Phone, Organisation/School, Event Type, Event Date, Expected Audience Size, message |
| Investor interest | `/invest` | "Submit your details" (unspecified) |
| Early access | Footer, all pages | Email |

**CTAs in use:** "Join our waitlist →", "Invest In Mengo", "See How It Works",
"Try the Demo", "Invite Me to Speak", "Submit Interest", "Send Invitation →".

**Reassurance microcopy in use:** "No credit card required · Cancel anytime ·
Free to start" and "No setup required · Built for speed · Ready to launch".

**Claims made on the live site:** "10x Faster Execution", "24/7 Never Sleeps",
"100+ Asset Types", "Free To Start", "365 Days of Content".

**Social proof found:** four testimonials on `/lead-nurturing`, attributed only
by role and initials — "Ecommerce Founder", "Agency Owner", "SaaS Founder".

> **Finding.** These are unattributed. They should be confirmed as real and
> consented before reuse. They are **not** carried into the rebuild until Mengo
> confirms provenance.

---

## 2. Content inventory

| Content | Category | Existing URL | SEO intent | Decision |
| --- | --- | --- | --- | --- |
| Homepage positioning ("Your AI Co-founder", "The co-founder that never sleeps", "Build faster. Market smarter. Convert better.") | Brand | `/` | Brand | **Retain** — used verbatim as the site's tagline and promise |
| Marketing Engine page: 4 systems, 3-step flow, without/with comparison, 6 outcomes, 10 FAQs | Product | `/marketing-engine` | Commercial | **Retain and expand** into a full product page |
| Lead Nurturing page: 4 systems, 3-step flow, without/with comparison, FAQs | Product | `/lead-nurturing` | Commercial | **Retain and expand** into a full product page |
| Blog taxonomy: Learning Mengo, Launches & Updates, Marketing Automation, Content Automation, Sales Automation, AI Cofounder, MengoTalks | Editorial | `/blog` | Informational | **Retain** as the editorial taxonomy |
| 15 planned article titles with descriptions | Editorial | `/blog` | Informational | **Expand** — titles are real, bodies are not yet written |
| Founder biography and milestones | Company | `/founder` | Brand | **Retain** — all facts carried across verbatim |
| Speaker invitation form | Conversion | `/founder` | Transactional | **Retain** — rebuilt as the `speaking` intent |
| Privacy policy, 16 sections | Legal | `/privacy-policy` | Navigational | **Retain verbatim** — client's own legal text |
| Investor interest | Company | `/invest` | Commercial | **Expand** — currently a form with two lines of copy |
| Testimonials (4, role-attributed) | Social proof | `/lead-nurturing` | Trust | **Hold** — verify provenance and consent before use |
| `/hello-world`, `/category/uncategorized`, `/author/chetan1xl-com` | CMS artefacts | various | None | **Redirect and remove** |

### Product structure as the live site describes it

The live Marketing Engine page names four systems — **Content System**,
**Marketing Strategy**, **Campaign Engine**, **Conversion System**. The live
Lead Nurturing page names four more — **Lead Capture System**, **Follow Up
Engine**, **Conversion Messaging**, **Lead Nurture Workflow**.

The rebuild expresses these as five products, preserving the two the live site
already brands as pages:

| Live site concept | Rebuild |
| --- | --- |
| Marketing Strategy | Marketing Engine (`/platform/marketing-engine/`) |
| Content System | Content Studio (`/platform/content-studio/`) |
| Campaign Engine | Campaign Lab (`/platform/campaign-lab/`) |
| Lead Capture / Follow Up / Conversion Messaging / Nurture Workflow | Lead Nurturing (`/platform/lead-nurturing/`) |
| — (not on the live site) | Growth Signal (`/platform/growth-signal/`) |

> **Decision needed from Mengo.** Growth Signal (measurement and review) is not
> described anywhere on the live site. It is included because every other engine
> produces output that needs judging, but it should be confirmed as a real part
> of the product before launch, or removed.

---

## 3. Corrections applied to the rebuild

The audit found statements in the first build that the live site does not
support. All have been corrected:

| Was | Now | Why |
| --- | --- | --- |
| "Twelve questions", "about ten minutes" | "A guided questionnaire" | The live site says "guided questionnaire" and never states a count or a duration |
| Blog categories: Strategy, Content, Conversion, AI, For Founders | The live site's real taxonomy | The live blog already publishes seven named categories |
| Founder page with minimal placeholder facts | Real milestones, awards and quote | The `/founder` page carries verifiable detail that was not fetched first time |
| Privacy policy with "to be confirmed" placeholders | The published 16-section policy, verbatim | It is the client's own legal text and already exists |
| Waitlist modal fields invented | The live modal's fields | Matching the existing form keeps the data shape consistent |

---

## 4. Redirect map

Implemented in `next.config.ts` as permanent (308) redirects.

| From | To | Reason |
| --- | --- | --- |
| `/marketing-engine` | `/platform/marketing-engine/` | Moved under the platform hierarchy |
| `/lead-nurturing` | `/platform/lead-nurturing/` | Moved under the platform hierarchy |
| `/founder` | `/company/founder/` | Moved under company |
| `/invest` | `/company/invest/` | Moved under company |
| `/privacy-policy` | `/legal/privacy-policy/` | Moved under legal |
| `/hello-world` | `/blog/` | WordPress sample post |
| `/category/*` | `/blog/` | CMS archive, no standalone value |
| `/author/*` | `/company/about/` | CMS archive, no standalone value |
| `/wp-sitemap*.xml` | `/sitemap.xml` | Sitemap moved |
| `/blog` | unchanged | Same URL, rebuilt |

**Not redirectable server-side:** the homepage anchors `#about`, `#how`, `#who`
and `#join`. Fragments never reach the server. Equivalent destinations exist at
`/company/about/`, `/company/how-it-works/`, `/company/who-its-for/` and
`/get-started/`; any external link using the old fragments will land on the
homepage, which is an acceptable outcome.

---

## 5. Missing content and assets

Ordered by what blocks launch.

### Blocks launch

1. **Lead destination.** `MENGO_LEAD_WEBHOOK` must point at the inbox, CRM or
   automation that should receive form submissions. Until it is set, `/api/lead`
   validates and logs but delivers nowhere. The `download` intent additionally
   needs a delivery mechanism: the success state promises the resource by email,
   and nothing sends it yet. That is the single integration point — no fake
   download links exist anywhere in the UI.
2. **Legal entity details.** Terms of service, cookie policy and acceptable use
   still contain sections marked "to be confirmed": registered entity, governing
   law, retention periods, cookie inventory. The privacy policy is complete
   because it already existed.
3. **Growth Signal confirmation.** Confirm it is a real part of the product, or
   remove the five pages that describe it.

### Blocks credibility

4. **Testimonial provenance.** Confirm the four role-attributed quotes on the
   live site are real and consented, or leave them out.
5. **Photography.** There is none on the live site beyond the logo. Every page
   in the rebuild is typographic by design, which works, but a founder portrait
   and any genuine product screenshots would strengthen the founder, platform
   and product pages.
6. **Product screenshots.** The blog promises a dashboard tour. No product UI
   exists publicly. Nothing in the rebuild depicts a fabricated interface.

### Blocks the blog

7. **Learning Mengo** and **Launches & Updates** categories need product
   documentation only Mengo can write — dashboard walkthroughs, release notes.
   They are deliberately not shipped as empty category pages. Five real titles
   exist on the live site and are listed below.
8. **The 15 live blog titles** are real editorial intent with descriptions but
   no bodies. They should be written against the existing titles rather than
   replaced.

### Nice to have

9. **Case studies.** None exist and none were invented. The `CaseStudyPage`
   template is deliberately not built until there is a real customer outcome to
   describe — see §6.
10. **Pricing.** The site says "Free to start" and nothing else. No pricing page
    exists in the rebuild because there is no pricing to publish.

---

## 6. Deliberate omissions

Things the brief listed that were **not** built, with the reason:

| Not built | Why |
| --- | --- |
| Case study *content* | The `CaseStudyPage` template, the `CaseStudy` type and the route are now built; `src/data/case-studies.ts` ships empty. Publishing the first study is a data change. The template renders `results` only where every figure carries an `evidence` string, so an unsourced number cannot ship. |
| Pricing page | No pricing exists beyond "free to start". |
| Careers / team pages | No team information is public. |
| Learning Mengo / Launches & Updates blog categories | Require product documentation that does not exist yet. Shipping them empty would create thin pages. |

Each becomes a page type the moment the underlying content exists; none requires
new architecture.

---

## Appendix — the 15 article titles published on `/blog`

Real editorial intent from the live site. Titles and descriptions exist; bodies
do not. These should be written against the existing titles.

### Learning Mengo — needs product documentation
1. Getting Started with Mengo: Build Your First Marketing Engine in Minutes
2. Inside the Mengo Dashboard: Understanding Every Section and What It Does
3. How to Generate 365 Days of Content Using Mengo

### Launches & Updates — needs release information
4. What's New in Mengo This Quarter
5. Behind the Roadmap: What We're Building Next

### Marketing Automation
6. Marketing Automation Explained: What It Actually Solves
7. AI Powered Marketing vs Manual Execution: A Practical Comparison

### Content Automation
8. How to Create On Brand Content With AI, Without Losing Your Voice
9. Why a Content System Beats a Content Calendar

### Sales Automation
10. Automating Lead Follow Up Without Losing the Personal Touch
11. Where Sales Automation Ends and Marketing Automation Begins

### AI Cofounder
12. Why Every Founder Needs an AI Cofounder in 2026
13. The AI Tools Founders and SaaS Marketers Actually Rely On

### MengoTalks
14. MengoTalks: What Agencies Are Getting Wrong About AI Marketing
15. MengoTalks: The Future of Building Businesses With Fewer Bottlenecks

Items 6–15 map onto categories the rebuild already ships, so they can be added
as data rows. Items 1–5 need information only Mengo holds.
