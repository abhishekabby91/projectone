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
