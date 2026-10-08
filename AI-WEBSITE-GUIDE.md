# Accounstone AI / Developer Website Guide

## Purpose

Accounstone is an accounting operations and support company serving CPA firms and growing businesses. The website should explain practical accounting work clearly and help visitors understand how support fits into their existing workflows.

The site is **not** a generic low-cost outsourcing catalogue and should not be written like one.

## Core positioning

Accounstone communicates:

- Practical accounting support
- Dependable execution
- Familiarity with real accounting workflows
- CPA firm support
- Support for growing businesses
- Technology familiarity
- Flexible capacity
- Process discipline
- Clear communication
- Quality review
- Security-conscious handling
- Transparency

Avoid unsupported superlatives such as `best`, `number one`, `world-class`, `unparalleled`, `cheapest`, `guaranteed`, `save 70%`, or `industry-leading`.

Do not fabricate clients, testimonials, reviews, ratings, awards, certifications, employees, offices, partnerships, statistics or years of experience.

## Primary audiences

### CPA firm partners

Think like a partner who has limited review time and does not want another management problem. They care about workload, realization, deadlines, staff capacity, review time, tax-season pressure, hiring difficulty, consistency, client communication and whether delegated work will actually reduce pressure.

A CPA partner is often silently asking:

- Will this create more review work for me?
- Will the team follow our way of doing things?
- Can I trust the handoff?
- What happens when something is unclear?
- Will I lose control of the client relationship?
- Can this help during the part of the year when capacity is tightest?

Content should answer those concerns naturally, without pretending every firm has the same problem.

### Accounting firm managers

Think about workflow rather than abstract outsourcing. They care about review queues, standardization, turnaround time, documentation, coordination, error reduction and whether work is predictable from one cycle to the next.

### Business owners

Think about accurate books, visibility, taxes, reporting, timely information, predictable support and the mental cost of not knowing whether the books are actually current.

The page should answer the visitor's question before explaining Accounstone.

## Content psychology principles

Humanized content should reflect how accounting buyers actually make decisions.

### 1. Reduce uncertainty before selling

A buyer is usually more concerned about what could go wrong than about a list of features. Explain boundaries, ownership, review, escalation and what happens when information is missing.

### 2. Speak to the hidden cost of review

For CPA firms, the expensive problem is not always transaction volume. It can be senior people spending time finding mistakes, asking for missing schedules or explaining the same correction repeatedly.

### 3. Respect the buyer's control

Do not imply that outsourcing means handing over the books or client relationship. Explain what can be delegated and what normally remains with the CPA, owner or manager.

### 4. Make the reader feel understood, not targeted

Use situations such as:

- `If the review queue keeps growing...`
- `When month-end becomes a catch-up exercise...`
- `If your team knows the process but does not have enough hours to run it...`
- `The concern is understandable: moving work out of the office only helps if it reduces the work left for your reviewer.`

Do not overuse these phrases or manufacture pain.

### 5. Use operational specificity as proof of understanding

A useful explanation of reconciliations, PBC lists, supporting schedules, month-end close, exception handling or handoffs can build more trust than adjectives about quality.

### 6. Do not force urgency

Avoid fake scarcity, countdown language and exaggerated consequences. Accounting buyers respond better to clear process, realistic expectations and evidence of understanding.

### 7. Use objections as content opportunities

Good pages should answer natural objections such as:

- `Will I have to train another team?`
- `What if the books are already behind?`
- `What if the first few files need heavy review?`
- `Who makes the final decision?`
- `What happens when client information is incomplete?`
- `Can you work inside our existing systems?`

The answer should be practical, not defensive.

### 8. Use progressive disclosure

Do not put every detail in the hero. The first screen should establish what Accounstone does, who it is for and why the visitor should continue. Deeper sections should answer objections, workflow questions, technology questions and trust questions in that order.

### 9. Make claims proportional to proof

The stronger the claim, the stronger the evidence required. Prefer observable process statements over outcome guarantees. For example, explain a review workflow rather than promising zero errors or a fixed percentage of savings.

### 10. Separate information from persuasion

A visitor should be able to learn something useful even if they never contact Accounstone. Commercial sections should follow useful explanations rather than interrupt them.

## Future content decision framework

Before changing or creating any page, use this sequence:

1. **Search intent:** What is the visitor actually trying to understand or decide?
2. **Buyer stage:** Is the visitor learning, comparing options, evaluating a provider, or ready to discuss a workflow?
3. **Primary anxiety:** What could make the visitor hesitate? Review burden, control, quality, confidentiality, training, turnaround, cost or communication?
4. **Accounting reality:** What would an experienced accountant explain about this workflow?
5. **Proof:** What can Accounstone truthfully demonstrate through process, technology familiarity, documentation or delivery method?
6. **Decision boundary:** What should remain with the CPA, owner, manager or other licensed professional?
7. **Next step:** What is the most natural useful next action or internal link?
8. **Differentiation check:** Does this page add something that another existing Accounstone page does not? If not, improve or consolidate rather than creating duplication.

### Content maturity rule

Do not rewrite a page simply because it is old or because a keyword has changed. Change it when there is a clear improvement in one or more of these areas:

- Better answer to the user's question
- More accurate accounting workflow explanation
- Better handling of buyer objections
- Stronger internal-link relationship
- More useful page-specific metadata
- Removal of unsupported or outdated claims
- Better accessibility or comprehension

If none of these applies, leave the page alone.

## Site architecture

```text
Home
├── Solutions
├── Services
├── Markets
├── Industries
├── Technology
├── Resources
├── Delivery Framework
└── Trust / Company
```

Existing URLs are established architecture. Preserve them unless a URL is clearly broken, duplicate or strategically unnecessary. If a URL must change, add a 301 redirect, update internal links, canonical and sitemap, and document the change in `SEO-CHANGELOG.md`.

## SEO architecture

### Canonical domain

`https://www.accounstone.com`

Do not introduce the Vercel staging domain into canonical, sitemap or robots output.

### Metadata

Shared metadata helpers live in `lib/seo.ts`.

Use page-specific metadata for every indexable page:

- Clear title
- Natural description
- Self-referencing canonical by default
- Appropriate Open Graph data
- Appropriate Twitter data
- `noindex` only where there is a genuine indexation reason

Do not use meta keywords.

Do not stuff multiple keyword variants into titles or descriptions.

The root layout in `app/layout.tsx` should establish broad brand metadata only. Child pages should own their specific search intent.

### Sitemap

The sitemap lives in `app/sitemap.ts`.

Only include useful canonical, indexable URLs. Do not treat the existence of a data object as proof that a page belongs in the sitemap.

Do not generate fake `lastModified` dates. Add a real date only when a reliable source exists.

Sitemap priority is not a ranking strategy.

### Robots

Robots rules live in `app/robots.ts`.

Keep important site content crawlable and point the sitemap to the production domain.

### Structured data

Helpers live in `lib/seo.ts`.

Use only schema types that match visible/verifiable page content:

- Organization
- WebSite
- Service
- BreadcrumbList
- Article
- FAQPage when the visible page has useful FAQs

Do not add Review schema for illustrative content. Do not fabricate ratings, reviews or endorsements.

## Content rules

Every page should have one primary intent.

For each page, decide:

1. What question does this page answer?
2. What related questions are useful?
3. What is the visitor likely worried about before choosing a provider?
4. What should the visitor understand next?
5. What is the most relevant next internal link or CTA?

### Human tone

Avoid phrases such as:

- In today's fast-paced business landscape
- In the ever-evolving world
- Unlock your potential
- Take your business to the next level
- Seamless solutions
- Cutting-edge
- Best-in-class
- Game-changing
- Revolutionary

Prefer concrete accounting language:

- Month-end becomes difficult when review queues build up.
- The issue is often not transaction volume but the time required to review and correct the work afterward.
- A firm may have enough people overall but still lack capacity for a specific workflow.
- The concern is not whether work can be delegated. It is whether the handoff leaves the reviewer with less work, not more.

Use short paragraphs, specific examples and realistic process descriptions.

Do not add content just to reach a word count.

## Tier 1 content

Priority pages:

1. Homepage
2. CPA Firms
3. U.S. Bookkeeping
4. U.S. Tax Preparation
5. U.S. Audit Support
6. Real Estate
7. QuickBooks
8. Xero

These pages should be strengthened before creating large quantities of new content.

## Service page rules

A strong service page should explain, where relevant:

- What the service includes
- Who normally needs it
- Common workflow problems
- What the buyer may be worried about
- How the work is handled
- What can be delegated
- What the client/CPA retains in-house
- Review and quality controls
- Communication and ownership
- Technology/workflow context
- Useful FAQs
- Relevant internal resources
- A clear next step

Avoid generic paragraphs that simply claim that Accounstone is reliable, scalable and cost-effective.

## CPA Firms page

Speak directly to actual practice situations:

- Work accumulating before tax season
- Review queues
- Senior staff spending time on transaction-level work
- Hiring difficulty
- Client books needing cleanup
- Recurring monthly bookkeeping
- Tax-season capacity
- Staff augmentation
- Maintaining review control
- Documentation and communication

Also address the real psychological objection: `If I outsource this, will I spend more time reviewing it?`

Use careful language such as `Many firms run into...`, `When your team is already carrying...`, and `If the review queue keeps growing...` rather than pretending every firm has the same problem.

## Real Estate page

Where supported by the actual offering, discuss:

- Property-level bookkeeping
- Bank reconciliations
- Owner statements
- Tenant-related accounting
- AP/AR
- Month-end close
- Property management software
- Yardi/Buildium workflows
- Reporting
- Entity-level accounting

The reader should understand why property accounting becomes harder as properties, entities and reporting requirements multiply.

## Technology pages

Technology pages should explain accounting workflows around the software, not pretend Accounstone is the software vendor.

Discuss relevant topics such as:

- What the software is commonly used for
- Setup or cleanup situations
- Reconciliation
- Reporting
- Month-end close
- Integrations
- Workflow support
- When outside accounting capacity may help

A technology page should make clear that software access does not remove the need for accounting ownership and review.

## State/location pages

Do not create thin state pages by replacing a location name in a template.

Keep existing Texas, California and Florida URLs only if they provide meaningful local value. If they do not, recommend consolidation rather than creating more location pages.

## Internal linking

Use contextual links between clusters:

- CPA Firms → Bookkeeping / Tax / Audit / Staff Augmentation
- Real Estate → Bookkeeping / AP / AR / Yardi resources
- QuickBooks / Xero → Bookkeeping / relevant guides
- Markets → market-specific service pages
- Resources → closely related commercial or technology pages

Do not add links just to increase link count.

## Trust and factual accuracy

Before publishing a factual trust claim, verify it.

Current owner-verification items include:

- QuickBooks Certified ProAdvisor status and start year
- 24+ years of team accounting experience
- Exact Global Delivery Center wording/status
- Any future certifications
- Any client testimonials and permission to publish them

If information is unavailable, use a TODO or remove the claim. Never invent a replacement.

## Component guidance

Important shared components include:

- `components/navbar.tsx`
- `components/footer.tsx`
- `components/premium-hero.tsx`
- `components/service-page-template.tsx`
- `components/industry-page-template.tsx`
- `components/section-grid.tsx`
- `components/feature-card.tsx`
- `components/faq-section.tsx`
- `components/article-layout.tsx`
- `components/hero-carousel.tsx`

Prefer improving shared components rather than duplicating fixes across dozens of pages.

## Performance and accessibility

Preserve the current design, but review:

- Client component usage
- Animation cost
- Image sizing and loading
- Layout shift
- Keyboard navigation
- Focus states
- Heading hierarchy
- Alt text
- Button/link semantics
- Form labels
- Color contrast
- Reduced-motion behavior

Do not remove design elements merely because they animate. Remove or reduce them when they create a real usability or performance problem.

## Known build gotchas (checked 2026-08-14)

- **Always run `npx next build` before considering a pass finished.** A single missing prop on one guide/insight page (`ArticleLayout` requires `publishedDate`, `section`, and `slug`) previously broke the type check for the *entire* production build, which would have blocked deployment of every route, not just that page.
- **`app/contact/page.tsx` is a `'use client'` component** (it holds form state) and therefore cannot export `metadata` directly. Its page-specific metadata lives in `app/contact/layout.tsx` instead. If you convert other interactive pages to client components, give them the same sibling-`layout.tsx` treatment rather than letting them silently fall back to the generic site-wide title/description.
- **`lib/data.ts` entries don't guarantee a page exists.** `app/sitemap.ts` and the navbar auto-generate URLs from every entry in `services`/`solutions`/`markets`/`technologies`/`industries`, and many pages link to related items by `slug` alone (e.g. `/services/${slug}`). This previously produced 15 dead links + a broken sitemap entry for `/services/accounting`, which had a data entry but no `page.tsx` (fixed 2026-08-14). Before adding a new entry to any array in `lib/data.ts`, create the matching page in the same pass — and periodically diff `app/**/page.tsx` routes against the sitemap output to catch drift.
- **Never share a `.next` directory between `next build` and `next dev`.** Both directions are broken, and both have now cost real time. Running `next build` while `pnpm dev` is up clobbers the dev server's client chunks — they 404, React never hydrates, and a client-side check silently reports the *absence* of whatever it was looking for, which looks like a pass. Running `pnpm dev` after a `next build` is the mirror image: dev serves the build's **prerendered** HTML, so an edit compiles, the file on disk is correct, and the page you fetch is stale. `rm -rf .next` whenever switching between the two (recorded 2026-09-07 and 2026-09-08).
- **`<Image fill>` usages need an explicit `sizes` prop** (see `components/hero-carousel.tsx` for the pattern) or they will request a full-viewport-width image on mobile, hurting LCP for no visual benefit.

## What future AI agents must NOT do

- Do not rebuild the website from scratch.
- Do not rename URLs casually.
- Do not add a large batch of templated location pages.
- Do not add keyword stuffing.
- Do not invent testimonials, reviews, certifications or statistics.
- Do not add Review schema without genuine visible reviews.
- Do not create fake `lastModified` dates.
- Do not canonicalize pages to the homepage just to simplify metadata.
- Do not create competing SEO helper systems without first evaluating `lib/seo.ts`.
- Do not replace useful accounting workflow explanations with generic marketing copy.
- Do not remove the current visual identity without a documented UX/accessibility/performance reason.
- Do not use manipulative sales psychology such as fake urgency, fear-based claims or exaggerated outcomes.
- Do not change the hero imagery/slider unless the owner explicitly requests a hero change.
- Do not reintroduce financial services or CFO positioning because a keyword tool suggests it. Accounstone has no `/services/cfo-support` page and does not offer CFO or financial-advisory services — do not add "CFO Support" links/copy anywhere (checked and removed repo-wide 2026-08-14). "Financial statements", "financial reporting", "financial data" etc. are fine (accurate accounting-deliverable terminology); "financial services", "financial advisory", "CFO-level", "strategic financial guidance/partnership" are not.
- Same rule for general HR services: Accounstone's payroll support covers payroll processing, tax withholding, and payroll reporting only. Do not claim "HR compliance", "benefits administration", or "regulatory requirements/filings" as something Accounstone handles (found and rescoped repo-wide on `app/solutions/back-office-support/page.tsx`, 2026-08-14) — those belong to the client's HR provider or in-house team.
- Avoid generic filler adjectives with no concrete backing: "seamless[ly]", "enterprise-grade", "cutting-edge", "state-of-the-art", "deliver superior results". If a claim needs a specific detail to be true (what exactly integrates with what, what specifically makes it "enterprise-grade"), either add the detail or cut the claim (cleaned up sitewide 2026-08-14).
- Do not claim software implementation, configuration, custom development, or system administration for third-party platforms (NetSuite, Sage, CCH Axcess, etc.) — Accounstone supports the accounting/bookkeeping work *inside* an existing setup, not the IT/implementation-partner work of setting the system up. Each `/technology/*` page should make this boundary explicit (done for all seven pages 2026-08-14).
- **Never claim IRS representation or power of attorney.** This requires being a licensed CPA, Enrolled Agent, or attorney under Circular 230. A page previously claimed exactly this ("we can provide power of attorney to represent your interests in IRS matters") — this was false as written and a genuine legal-risk claim, not just marketing tone (fixed 2026-08-14). Every tax page must route representation, sign-off, and final filing responsibility to "your CPA or Enrolled Agent."
- **Never claim to provide tax planning, tax strategy, or tax advisory services** (capital gains strategies, negative gearing, salary sacrificing, entity selection, "tax optimization," "tax reduction strategies"). Accounstone prepares returns and the underlying bookkeeping; strategy and planning advice is the client's CPA/tax agent's role. Found and fixed on the AU market page (an unhedged "Absolutely, we provide strategic tax planning..." FAQ), the tax-preparation service page, and the US market page (2026-08-14).
- **Verify a regulator actually applies to accounting/bookkeeping services before naming it.** The Compliance page previously listed "FCA Requirements" (UK) and "ASIC Standards" (Australia) — both are financial-services/corporate-securities regulators, not accounting-service regulators, and directly undercut the financial-services-scope cleanup elsewhere on the site. Use AML requirements (UK) and GST/BAS reporting (Australia) instead (fixed 2026-08-14). Same logic applies to any future country page: check what actually regulates *accounting and bookkeeping service providers* in that jurisdiction, not what regulates the broader financial sector.
- Avoid absolute claims like "full compliance" or "full adherence" — they read as guarantees and can contradict more honest language elsewhere on the same page (the Compliance page said both "Full compliance" in its hero and "here is where we honestly stand today... actively working toward" three sections later). Prefer "structured around" / "aligned with" / "prepared to."
- Do not turn every page into a sales page; informational pages must remain useful on their own.
- Do not rewrite content solely to increase word count.
- Do not publish AI-generated claims that cannot be traced to an existing business fact or a clearly stated general accounting principle.

## Change management

Every SEO/content implementation pass should be recorded in `SEO-CHANGELOG.md` with:

- Date
- File/page
- What changed
- Why it changed
- SEO purpose
- Whether URL changed
- Whether metadata changed
- Whether content changed

For future content passes, record not only the copy change but also the **buyer concern being addressed** when that is material. This makes the reasoning recoverable for future developers and AI agents.

## Final quality test

Before merging, ask:

> Would a real accounting professional say this?

Then verify:

- The page answers its intended question.
- The copy acknowledges realistic buyer concerns.
- Claims are factual.
- The reader understands what happens next.
- Metadata matches the page.
- Canonical is correct.
- Internal links are useful.
- Schema matches visible content.
- No important URL changed accidentally.
- No unsupported trust claim was introduced.
- Build/type/lint checks pass.

The target is not an `SEO-looking` website. The target is a useful accounting resource that understands how CPA firms and business owners actually think about workload, control, risk and review time.


---

# Living project state — content, SEO and AI handoff

> Last updated: 2026-10-08
>
> This section is intentionally maintained as a living implementation guide. It records what the current content program is doing, what has already been implemented in the repository, and how another AI/developer should continue without resetting the strategy.

## 1. Current strategic direction

The website is being developed as an expandable accounting knowledge + commercial architecture, not as a website with a fixed number of pages.

### No fixed page-count target

Do not interpret any previous list such as 50, 100, 500 or 1,000 pages as a target or limit.

A content cluster grows when there is a legitimate reason to add another useful page:

- A real search query
- A recurring client or buyer question
- A distinct accounting workflow
- A meaningful software/platform topic
- A useful comparison
- A genuine state/location-specific reason
- A new industry issue
- A useful commercial decision question
- A topic where Accounstone can eventually develop real practical experience

If a topic does not have enough distinct value or search intent, do not create a page simply to increase the page count.

The architecture should be capable of growing indefinitely while remaining structured.

### Current content development method

Use this cycle for new industry/software content:

Discover → Research → Learn → Create → Rank → Get experience → Update

The important rule is that publishing a page does not mean claiming expertise that Accounstone does not yet have.

For example, when entering a newer platform such as eUnify:

1. Research the platform and its documented accounting workflows.
2. Learn what the relevant client workflow actually requires.
3. Publish useful, accurate information without inventing hands-on experience.
4. Use real client work to develop practical experience.
5. Update the page when genuine experience can support stronger observations.

This allows Accounstone to build useful early content without making false capability claims.

## 2. Current positioning

The homepage is intentionally market-neutral/global rather than forcing U.S. keywords into the core positioning.

Current core positioning:

Accounting, Bookkeeping & Tax Outsourcing

The homepage speaks primarily to:

- Accounting firms
- Businesses

U.S. intent is built through dedicated market, service, industry, state and supporting-content clusters rather than repeating "USA" on every page.

Accounstone remains clearly positioned as an India-based accounting outsourcing provider, not as a U.S.-based company.

## 3. Current homepage implementation

app/page.tsx has been reworked around:

- Accounting, Bookkeeping & Tax Outsourcing
- Accounting firms
- Businesses
- Services
- Industry pathways
- Why Accounstone
- Engagement models
- Process
- FAQs
- Neutral inquiry path

Primary industry pathways currently include:

- /industries/real-estate
- /industries/property-management
- /industries/hoa-accounting
- /industries/cpa-firms

Homepage metadata was also aligned with the broader positioning instead of making the homepage U.S.-specific.

Important implementation commits:

- 347f18f — homepage positioning/structure
- f34d8f0 — homepage internal-link correction

## 4. U.S. market implementation

app/markets/united-states/page.tsx has been strengthened as the dedicated U.S. market page.

It now addresses:

- U.S. accounting firms
- U.S. businesses
- Bookkeeping
- Accounting
- Tax preparation
- AP/AR
- Payroll
- Close/reconciliation workflows
- Client/CPA responsibility boundaries

The U.S. market page owns the stronger U.S. geographic intent. Do not move all of that wording back into the homepage merely for keyword reasons.

## 5. Neutral inquiry form is a site-wide pattern

components/inquiry-section.tsx is the reusable inquiry component.

Generic copy is intentionally neutral:

- Tell Us About the Work You Need Support With
- Share a little about your current workflow, the work you need help with, or the system you use. We can review the requirements and discuss the next step.
- Explain the work, software or process involved
- Keep your existing review and approval responsibilities
- Discuss the scope before deciding how to proceed

The inquiry component should be available on industry, guide, software and other useful content pages.

Do not turn every inquiry section into aggressive sales copy.

Implementation commit:

- 78f5be5f650e212a4cb0b2c8d9ece28c0bea565

## 6. HOA is currently the deepest industry content program

The current priority sequence is:

HOA → Property Management → Real Estate

HOA is being developed as a genuine topic cluster rather than a single industry landing page.

### HOA architecture

The HOA cluster can grow across:

1. HOA accounting fundamentals
2. Assessment and homeowner accounting
3. Bank/reconciliation workflows
4. Operating/reserve accounting
5. Financial reporting
6. AP/vendor workflows
7. Month-end/year-end workflows
8. Software/platform workflows
9. Commercial/decision content
10. State/location content where there is a real local reason
11. FAQs
12. Internal links back to the HOA pillar and between related topics
13. Neutral inquiry paths

The earlier 50-topic HOA map is an initial topic map only, not a limit.

### HOA pillar

app/industries/hoa-accounting/page.tsx

The pillar currently explains:

- HOA/community association accounting
- Homeowner ledgers
- Operating and reserve funds
- Delinquency
- Board reporting
- Accounting workflow
- Service boundaries
- FAQs
- Related accounting guides
- Inquiry path

The pillar's supporting-guide section was expanded in commit:

- 27e59076ed260c611cc992b551631cc7bb6267e3

### HOA supporting content already created

The repository now contains a substantial HOA content set, including topics such as:

- Month-end checklist
- Assessment accounting
- Homeowner ledgers
- Assessment receivables reconciliation
- Chart of accounts
- Bookkeeping vs accounting
- Accounting mistakes
- Accounting controls
- Bank reconciliation
- Delinquency accounting
- Reserve accounting
- Operating vs reserve funds
- Reserve reconciliation
- Reserve financial reporting
- Reserve expenses
- Accounts payable
- Vendor expense tracking
- Maintenance expense accounting
- Vendor invoice processing
- Vendor 1099 tracking
- Unapplied payments
- AR aging
- Monthly close
- Year-end accounting
- Year-end checklist
- Balance sheet
- Income statement
- Cash vs accrual accounting
- Accounting workflow
- Budget-to-actual reports
- Board financial package
- Accounting cleanup

Not every future HOA topic needs to be created. Check search intent, overlap and usefulness first.

### HOA software cluster already started

Existing content includes:

- HOA accounting in QuickBooks
- QuickBooks Online for HOA accounting
- HOA accounting with AppFolio
- HOA accounting with Yardi
- HOA accounting with eUnify
- eUnify + QuickBooks for HOA accounting

eUnify is a deliberate early-mover example. The pages explain relevant documented workflows while avoiding any claim that Accounstone has years of eUnify experience when that has not been established.

Recent eUnify cleanup commits:

- f99b269ea15cf1e83936b61606ca93389d43e429
- 75b77b291560cc00e5c50d63a32f1b60c1222cd9

### HOA commercial content already started

Existing pages include:

- How to outsource HOA bookkeeping and accounting
- HOA accounting outsourcing vs. hiring in-house
- HOA accounting cleanup
- Other decision/workflow content

Commercial pages should remain practical and should explain when outsourcing may or may not make sense.

## 7. HOA internal-linking and sitemap work already completed

The HOA cluster has been added to the sitemap and blog/resource index in multiple passes.

Recent sitemap coverage was updated in:

- e0134a171f9c62f78d4e296554fd5e5e9602d7d5

Blog index coverage was also updated in several passes as new articles were created.

The HOA pillar now links to a meaningful selection of supporting guides rather than leaving the industry page isolated.

### Important next step

The cluster is not considered permanently finished.

Continue the internal-link and FAQ audit across individual HOA articles:

- Each useful article should link back to the HOA pillar.
- Add 2–5 genuinely related contextual links where useful.
- Add query-specific FAQs where they improve the answer.
- Avoid mechanically adding the same links to every page.
- Check that no internal link points to a redirect or nonexistent route.
- Keep the sitemap and content registry aligned with actual routes.

## 8. Property Management is the next expandable industry cluster

A property-management topic map has been developed as an initial starting structure covering:

- Accounting fundamentals
- Rent and tenant accounting
- Bank/trust/reconciliation workflows
- Owner statements/reporting
- AP/vendor/expense workflows
- Software/platform workflows
- State/location opportunities
- Outsourcing/commercial questions

Again, this is not a 50-page target.

The cluster should grow only where a distinct search intent or useful accounting workflow exists.

The Property Management cluster should eventually connect naturally with:

- /industries/property-management
- Real Estate content
- Relevant bookkeeping/AP/AR services
- Yardi/Buildium and other verified platform content
- Relevant U.S. state pages
- Neutral inquiry sections

## 9. Software/content cluster rules

Software pages are accounting-workflow pages, not vendor pages.

For every software topic:

- Explain the accounting workflow.
- Explain what should be reconciled/reviewed/tracked.
- Explain what the software does only to the extent supported by reliable sources.
- Do not claim Accounstone is the software vendor.
- Do not claim implementation/configuration/custom development unless genuinely offered.
- Do not claim hands-on experience that has not been established.
- Link to the related industry/service pages where natural.

Software can become a strong long-tail content source, but avoid mass-producing thin pages for every possible platform.

## 10. AI/search crawlability implementation

The repository already has a strong technical crawlability foundation.

Relevant files:

- app/robots.ts
- app/sitemap.ts
- public/llms.txt
- public/llms-full.txt
- lib/seo.ts

The robots configuration intentionally keeps important search/AI crawlers able to access public content while excluding private/internal areas.

The site also provides machine-readable company/site information through the llms.txt files.

Do not create artificial "AI SEO" copy. The better approach is:

- Clear headings
- Direct answers
- Accurate entities
- Useful FAQs
- Good internal linking
- Consistent organization
- Correct structured data
- Crawlable server-rendered content
- Accurate sitemap/robots behavior

When adding a page, check that it is actually discoverable through internal links and/or the sitemap. Do not assume that putting a file on disk is enough.

## 11. Content writing standard for all future articles

The working editorial rule is:

Humanize the content. Do not write generic AI content. The page must answer the search query.

A good article should:

1. Answer the main query early.
2. Cover the related questions a real searcher would ask.
3. Use specific accounting examples.
4. Explain the workflow, not just the service.
5. State boundaries where professional judgement or client approval remains necessary.
6. Use natural sentence variation.
7. Avoid filler introductions and artificial conclusions.
8. Avoid keyword stuffing.
9. Avoid writing to an arbitrary word count.
10. Link to genuinely related Accounstone pages.
11. Include a neutral inquiry path where appropriate.
12. Be useful even if the reader never contacts Accounstone.

Use the pattern:

Primary query → related questions → practical accounting explanation → relevant entities/software → useful internal links → neutral next step

## 12. Location/market content rules

Location matters, but not every page needs a location modifier.

Use geography where it changes:

- Search intent
- Regulation/compliance context
- Accounting workflow
- Software usage
- Buyer need
- Commercial relevance

Do not create state pages by changing only the state name.

For U.S. industry/state clusters, a page should have a genuine reason to exist before it is created.

Existing U.S. market context includes:

- /markets/united-states/california
- /markets/united-states/texas
- /markets/united-states/florida

Use existing market pages as contextual parents instead of duplicating the same state explanation across multiple pages.

## 13. Current SEO/content priorities

The current work should generally follow this order unless new evidence changes it:

1. Keep the homepage positioning clear and market-neutral.
2. Build HOA topical depth and internal relationships.
3. Continue Property Management content.
4. Strengthen Real Estate content where there is a distinct query.
5. Build useful software/accounting workflow content.
6. Add state/location content only where justified.
7. Improve FAQs and internal links across existing content.
8. Keep metadata, sitemap and robots accurate.
9. Review Search Console/query evidence when available.
10. Update older pages when new genuine experience or better information exists.

Do not abandon a useful cluster just because it has not yet produced impressions. Content should be allowed to mature, while weak or redundant pages should still be consolidated.

## 14. Repository files that future AI should inspect first

For content/SEO work, inspect these before making changes:

| File/path | Purpose |
|---|---|
| CLAUDE.md | First-level AI orientation and repository rules |
| AI-WEBSITE-GUIDE.md | This living strategy and implementation guide |
| knowledge/ | Business facts and scope boundaries |
| docs/SEARCH-INTENTS.md | Search-intent/URL decisions |
| docs/ROUTES.md | Route inventory and sitemap relationships |
| docs/CONTENT-REGISTRY.md | Content inventory/status |
| SEO-CHANGELOG.md | Historical reasoning for changes |
| app/sitemap.ts | Actual sitemap generation |
| app/robots.ts | Crawl rules |
| lib/seo.ts | Metadata/schema helpers |
| lib/data.ts | Shared service/industry/market data |
| components/inquiry-section.tsx | Reusable neutral inquiry pattern |
| components/article-layout.tsx | Article rendering/schema/layout |

## 15. Files/components that require extra caution

### components/article-layout.tsx

Do not casually modify this file.

A previous attempted fix introduced a literal \\n into the TypeScript source and caused a production build failure with:

Expected unicode escape

The owner has explicitly chosen to have Claude handle deployment/build troubleshooting.

For current content work:

- Prefer editing individual article pages.
- Do not modify article-layout.tsx unless there is a clear reason.
- Do not deploy from this content workflow.
- If a build problem is discovered, document it clearly rather than making unrelated framework changes.

### Deployment

For the current content program:

Do not deploy.

Content/SEO work is being committed to main; deployment/build handling is intentionally separate.

Do not use Vercel deployment tools unless the owner explicitly asks for deployment or deployment debugging.

## 16. Definition of done for a new content page

Before committing a new page, verify:

### Content
- The primary search query is clear.
- The opening answers it.
- The article contains useful accounting detail.
- The content is not just a longer version of another page.
- Claims are supported.
- Software/platform claims are accurate.
- Any professional/tax/legal boundary is clear.
- Tone is human and neutral.

### SEO
- Unique title.
- Useful description.
- Correct canonical.
- Correct H1.
- Logical H2/H3 hierarchy.
- Appropriate schema.
- Correct lastmod handling through the repository's existing mechanism.
- Added to the appropriate content registry/index if required.
- Added to sitemap when indexable.
- Internal links from relevant pages.
- No orphan route.

### UX
- Neutral inquiry section where appropriate.
- Useful related links.
- No unnecessary popups or pressure.
- Mobile-friendly content.
- Accessible headings, links and form labels.

### Repository safety
- No URL changed accidentally.
- No redirect introduced unnecessarily.
- No change to shared components unless required.
- No deployment.
- Changelog updated for meaningful SEO/content passes.

## 17. How to diagnose mistakes

When another AI finds a problem, it should first classify it rather than rewriting the site.

### If a page is missing from search
Check:

1. Is the route in app/?
2. Is it indexable?
3. Does it have canonical metadata?
4. Is it in app/sitemap.ts?
5. Does another page link to it?
6. Is the content actually satisfying a distinct query?
7. Is the page accidentally blocked by robots?
8. Is the page too similar to another page?

### If pages are too similar
Do not add filler.

Check whether:

- They target the same search intent.
- One should be consolidated.
- The workflow explanation can be made genuinely different.
- The pages belong to different stages of the buyer journey.

### If a page is not ranking
Do not immediately add keywords.

Check:

- Search intent
- Query specificity
- Content usefulness
- Internal links
- Entity/topic coverage
- SERP competition
- Page uniqueness
- Search Console evidence

### If a page makes an unsupported claim
Remove or qualify the claim. Do not invent a replacement fact.

### If a page is orphaned
Add a natural contextual link from the most relevant parent/cluster page rather than adding arbitrary sitewide links.

## 18. Recent implementation history worth preserving

The following commits represent major parts of the current content architecture:

- 347f18f — homepage positioning/structure
- f34d8f0 — homepage internal-link correction
- 78f5be5f650e212a4cb0b2c8d9ece28c0bea565 — reusable neutral inquiry component
- 27e59076ed260c611cc992b551631cc7bb6267e3 — HOA pillar supporting-guide links
- e0134a171f9c62f78d4e296554fd5e5e9602d7d5 — expanded HOA sitemap coverage
- f99b269ea15cf1e83936b61606ca93389d43e429 — eUnify article cleanup
- 75b77b291560cc00e5c50d63a32f1b60c1222cd9 — eUnify + QuickBooks cleanup

Earlier HOA article commits are preserved in the individual article history and should not be treated as a reason to recreate those pages.

## 19. Standing rule for future AI agents

The website should become broader and deeper over time, but never random or inflated.

The correct question is not:

"How many pages should we make?"

The correct questions are:

"What useful search/problem does this page solve?"

"Does it deserve its own URL?"

"Where does it belong in the cluster?"

"What existing page should link to it?"

"What evidence supports the claims?"

"Can we improve it later when we gain real experience?"

If the answer is yes, create the page and connect it to the architecture.

If the answer is no, do not create a page just to hit a number.


## 20. 2026-10-08 execution split: what this AI can fix vs. Claude

### Executed in this pass

- CPA Firms industry page now links to U.S. bookkeeping, U.S. tax preparation and the U.S. market hierarchy.
- Real Estate industry page now links contextually to Property Management, QuickBooks technology context and HOA Accounting.
- Property Management was reviewed; its existing cross-industry links were retained rather than adding artificial links.
- components/article-layout.tsx had a real source-level defect: the getText() helper contained a literal escaped newline sequence inside the TypeScript source. This was corrected in commit 19ee989b52a534c534bf98c3f7275807c380b118.
- No deployment was performed.

### Leave to Claude / deployment owner

- Run the production build and TypeScript validation after the article-layout.tsx correction.
- If the build reports another error, fix only the actual error and avoid unrelated framework/template rewrites.
- Deploy only after build validation succeeds.
- Verify representative article pages in the deployed environment, especially heading IDs/TOC behavior because article-layout.tsx is shared.
- Use Google Search Console URL Inspection and sitemap/indexing reports after deployment; repository changes alone cannot confirm Google's current index state.
- Review live Search Console queries, impressions, CTR and positions to decide which existing pages need content/title improvements.
- Run a live crawl/backlink/authority audit if external SEO tooling is available.

### Do not duplicate this work

Future AI agents should first read the latest guide, SEO changelog and Git history before making another structural change. The objective is to fix real gaps, not repeatedly rewrite already-correct pages.


## 21. AI crawler/readability verification — 2026-10-08

### Current crawler policy

The public site is intentionally open to major search and AI crawlers:

- OAI-SearchBot — allowed for ChatGPT Search discovery.
- OAI-AdsBot — allowed for future/eligible ChatGPT advertising landing-page validation.
- GPTBot — allowed for OpenAI training use.
- Google-Extended — allowed for Gemini-related use of Google-crawled content.
- ClaudeBot — allowed.
- PerplexityBot — allowed.
- Applebot-Extended — allowed.
- Bytespider and CCBot — allowed.
- AhrefsBot and SemrushBot — allowed for technical/authority monitoring.

Protected paths remain disallowed: /admin, /private, /internal, /api and /_next/.

OpenAI currently states that allowing OAI-SearchBot is the key robots.txt requirement for inclusion in ChatGPT Search. OAI-AdsBot is a separate crawler for advertising landing-page validation. GPTBot is independently controlled for training use. Do not assume these permissions guarantee inclusion or citation.

### AI-readable content policy

Do not add artificial AI-only text to pages.

The preferred implementation is:

1. Important information must exist as normal server-rendered HTML.
2. Use clear H1/H2/H3 headings.
3. Put the direct answer near the beginning of articles.
4. Use descriptive link text instead of vague "click here".
5. Keep entity names, service names, software names and geography consistent.
6. Use visible FAQs where they genuinely answer recurring questions.
7. Use structured data only when it accurately describes visible page content.
8. Keep canonical URLs, sitemap and internal links aligned.
9. Keep llms.txt and llms-full.txt factual and synchronized with canonical pages.
10. Do not hide important content behind client-only interactions or login walls.

The llms files are supplementary references, not a replacement for crawlable HTML. They do not guarantee AI inclusion, citations or rankings.

### What cannot be verified from repository code

The repository cannot prove that a live crawler receives HTTP 200 responses. Claude/deployment owner should verify after deployment:

- /robots.txt returns 200.
- /sitemap.xml returns 200 and contains only intended canonical/indexable URLs.
- Representative public pages return 200 to normal crawlers.
- No WAF/CDN/bot protection returns 403/429 to legitimate crawlers.
- No authentication, CAPTCHA or JavaScript challenge blocks public content.
- Google Search Console URL Inspection confirms crawl/index status.
- Search Console and server/CDN logs are checked for crawler access where available.

### Important distinction

Robots access controls affect whether a crawler may fetch content. They do not by themselves make content rank, create topical authority, or guarantee an AI system will cite the site. Content quality, internal linking, external authority and search relevance still matter.
