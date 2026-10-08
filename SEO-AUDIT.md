# Accounstone SEO, Content & UX Audit

**Audit date:** 2026-08-14  
**Primary domain:** `https://www.accounstone.com`

## Executive summary

Accounstone has a strong starting architecture: Next.js App Router, reusable templates, a shared SEO helper, robots and sitemap files, structured data, breadcrumbs on key pages, and distinct clusters for services, solutions, markets, industries, technology and resources.

The main opportunity is **not adding more pages**. It is making existing pages more useful, distinct, accurate and internally connected. The current URL architecture should be preserved.

### Highest-impact priorities

1. Establish one predictable metadata/canonical system.
2. Remove unsupported or unverifiable trust claims.
3. Improve Tier 1 pages around real accounting workflows and buyer questions.
4. Strengthen contextual internal links between service, market, industry, technology and resource clusters.
5. Make sitemap inclusion reflect actual indexability rather than merely the presence of a data object.
6. Preserve URLs unless a documented consolidation/redirect is genuinely necessary.
7. Improve accessibility and performance without removing the visual identity unnecessarily.

## What is already good

### Technical foundation

- Clear App Router organization by business intent.
- Reusable `lib/seo.ts` metadata and schema helpers.
- Production canonical domain centralized in `lib/seo.ts`.
- `app/robots.ts` exists and points to the production sitemap.
- `app/sitemap.ts` exists and uses the production domain.
- Organization, WebSite, Service, FAQ, BreadcrumbList and Article schema generators exist.
- Breadcrumb navigation/schema exists on important service templates.
- Skip-to-content accessibility link exists in the root layout.
- Hero images use Next.js `Image`.
- Reusable service/industry/page components reduce duplicated UI code.

### Information architecture

The repository clearly separates:

- Services
- Solutions
- Markets
- Industries
- Technology
- Resources
- Delivery framework
- Trust/compliance
- Company pages

This is a useful hierarchy and should remain stable.

### Content direction

The recent direction is stronger than generic outsourcing copy: workflow ownership, review standards, knowledge transfer, close activities, reconciliations, quality review and communication are useful differentiators.

## Current weaknesses

### 1. Global metadata

`app/layout.tsx` still contains a `keywords` metadata array. Remove it. The global metadata should establish the brand and broad topic, not attempt to rank for every service.

The root title template is useful, but page-level metadata and the helper must remain coordinated so titles are not duplicated or inconsistently branded.

### 2. Canonicals

`lib/seo.ts` creates self-referencing canonicals by default, which is correct. The optional `canonical` override should be treated as exceptional and documented. It should only be used for a deliberate consolidation case.

### 3. Sitemap

`app/sitemap.ts` automatically turns all entries in the service/solution/market/technology/industry data arrays into sitemap URLs. Sitemap inclusion should follow actual indexability and content quality, not just data existence.

The current `lastModified: new Date()` makes every URL look newly modified every time the sitemap is generated. That is not an accurate content date. Use real route-level modification dates when available, otherwise omit `lastModified`.

Priority values should not be treated as a ranking strategy.

### 4. Structured data and trust claims

The repository contains a Review schema generator while current testimonial data is explicitly described as illustrative engagement themes, not real endorsements. Do not emit Review schema for illustrative content.

The Organization schema contains contact/location information that should be verified by the owner before being treated as an entity fact.

### 5. Trust badges and statistics

The homepage currently displays `QuickBooks Certified ProAdvisor (since 2022)` and `24+ Years of Team Accounting Experience`. These are factual claims. They should remain only if the owner can verify them. Otherwise replace them with non-credential workflow/support statements.

### 6. Testimonials

The current `lib/data.ts` records are labelled as illustrative engagement themes but are rendered through a testimonials component. That presentation can imply customer endorsements.

Until genuine, permissioned testimonials exist, present this content as **Engagement Themes / Common Outcomes** and do not attach Review schema.

### 7. Template repetition

The shared service template repeats Overview, Benefits, Process, Deliverables, Related Services, Questions and CTA sections. Consistency is good, but Tier 1 pages need intent-specific content instead of only filling the same template.

For example, U.S. bookkeeping should explain delegation boundaries, month-end workflow, review points, cleanup situations, technology and handoff to the client's CPA/tax team.

### 8. Tier 1 depth

U.S. bookkeeping is more specific than a generic service page, but the CPA Firms and Real Estate pages should become much more operational and audience-specific. U.S. Tax Preparation and Audit Support should similarly explain what is prepared, what remains with the client/CPA, review checkpoints and handoff.

### 9. State/location pages

Texas, California and Florida pages exist. Preserve their URLs, but keep them indexable only if each contains meaningful local relevance beyond a state-name substitution. Do not create a large set of templated state pages.

The existing Yardi/Texas page has stronger long-tail intent because it combines software, industry and location.

### 10. Knowledge hub

Existing guides such as outsourced bookkeeping cost, outsourcing questions, QuickBooks vs Xero and tax-season staff augmentation are useful starting points. Future content should build topic clusters around real questions rather than generate large volumes of generic AI articles.

### 11. Performance

The repository contains multiple interactive components, including carousel, reveal, ripple/cursor and animation components. They are not automatically a problem, but they should be reviewed for unnecessary client-side JavaScript, motion and layout shift. Preserve the current visual identity unless a measurable accessibility/performance issue exists.

## Recommended page hierarchy

```text
Home
├── Solutions
│   ├── Offshore Accounting Support
│   ├── Staff Augmentation
│   ├── Dedicated Accounting Teams
│   └── Back Office Support
├── Services
│   ├── Bookkeeping
│   │   ├── United States
│   │   ├── United Kingdom
│   │   └── Australia
│   ├── Tax Preparation
│   │   ├── United States
│   │   ├── United Kingdom
│   │   └── Australia
│   ├── Audit Support
│   │   ├── United States
│   │   ├── United Kingdom
│   │   └── Australia
│   ├── Accounting
│   ├── Payroll
│   ├── Accounts Payable
│   └── Accounts Receivable
├── Industries
│   ├── CPA Firms
│   ├── Real Estate
│   ├── E-Commerce
│   ├── Healthcare
│   ├── Technology
│   └── Professional Services
├── Technology
│   ├── QuickBooks
│   ├── Xero
│   ├── Sage
│   ├── NetSuite
│   ├── Drake Tax
│   ├── CCH Axcess
│   └── MYOB
├── Markets
│   ├── United States
│   │   ├── Texas
│   │   ├── California
│   │   └── Florida
│   ├── United Kingdom
│   └── Australia
└── Resources
    ├── Guides
    ├── Insights
    └── Case Studies
```

## Page intent model

| Cluster | Primary intent | Conversion role |
|---|---|---|
| Homepage | Understand what Accounstone does and who it supports | Start a conversation |
| CPA Firms | Understand how accounting capacity can support a CPA practice | Discuss workflow/capacity |
| Service pages | Understand what is actually handled | Request a scope discussion |
| Market pages | Understand market-specific support | Explore the relevant service |
| Industry pages | Understand industry workflow familiarity | Explore suitable services |
| Technology pages | Understand software-related accounting workflows | Connect software need to service |
| Guides | Answer one specific accounting question | Move to relevant service/technology page |
| Insights | Explain a specialist accounting topic | Build topical authority |
| Trust pages | Understand security, QA and delivery process | Reduce risk before contact |

## Tiered content priority

### Tier 1

1. Homepage
2. CPA Firms
3. U.S. Bookkeeping
4. U.S. Tax Preparation
5. U.S. Audit Support
6. Real Estate
7. QuickBooks
8. Xero

### Tier 2

- UK Bookkeeping
- Australia Bookkeeping
- NetSuite
- Sage
- Yardi-related content
- E-Commerce
- Professional Services

### Tier 3

- Supporting market pages
- Additional technology pages
- Delivery framework pages
- Supporting guides and insights

## Internal linking priorities

Use contextual links rather than adding links for quantity.

- CPA Firms → Bookkeeping, Tax Preparation, Audit Support, Staff Augmentation
- Real Estate → Bookkeeping, AP, AR, Yardi-related content
- QuickBooks/Xero → Bookkeeping and relevant guides
- Market pages → market-specific service pages
- Guides → one or two closely related commercial/technology pages
- Service pages → relevant industries, technologies and resources

## What should NOT change

- Do not rebuild the website.
- Do not casually rename existing URLs.
- Do not create dozens of state/city pages using a template.
- Do not keyword-stuff metadata or content.
- Do not fabricate clients, reviews, testimonials, awards, certifications, offices, years of experience, partnerships, guarantees or statistics.
- Do not use Review schema for illustrative content.
- Do not canonicalize unrelated pages to the homepage.
- Do not use arbitrary word counts as a content goal.
- Do not remove visual design elements without a real UX, accessibility or performance reason.

## Owner verification TODOs

Before using these as factual trust signals, verify:

- [ ] QuickBooks Certified ProAdvisor status and start year.
- [ ] 24+ years of team accounting experience.
- [ ] Exact wording/status of the Global Delivery Center claim.
- [ ] Any future certification or security-certification claims.
- [ ] Any real client testimonials and permission to publish them.

If a claim cannot be verified, remove it rather than replacing it with another unsupported claim.

## Bottom line

Accounstone should not look more "SEO-looking." It should look more like a company that understands how accounting work actually gets done.

The target impression is:

> Practical accounting support, delivered with clear ownership, documented processes, technology familiarity, quality review and dependable communication.

That positioning should guide both the human experience and the search architecture.


## 2026-10-08 audit — HOA completion and site-wide findings

### HOA cluster findings

- The HOA month-end checklist existed but was missing from both the blog index and sitemap. It is now linked from /blog and included in the sitemap.
- The HOA sitemap contained duplicate entries for reserve reconciliation, reserve reporting, AP, vendor expense tracking and year-end pages. These duplicates have been removed.
- The month-end article now connects the core workflow to QuickBooks, QuickBooks Online, AppFolio, Yardi, eUnify and relevant U.S. state context without turning the article into separate doorway pages.
- The month-end article now has visible query-specific FAQs and matching FAQ structured data.
- The HOA sitemap currently contains 38 HOA-related URLs with no duplicate HOA paths.
- The initial HOA topic map remains expandable; it is not a fixed 50-page limit.

### Site-wide findings

#### High priority

1. Entity consistency: The site should consistently describe Accounstone as an India-based accounting, bookkeeping and tax outsourcing provider. Avoid reverting to broad finance, CFO, advisory or financial-services positioning where those services are not actually offered.
2. Service hub wording: The Services hub used Accounting & Finance Services as its H1 even though the current core positioning is accounting, bookkeeping and tax outsourcing. The H1 has been aligned to Accounting, Bookkeeping & Tax Services.
3. Internal authority architecture: Industry, service, software, market and article pages need deliberate parent/child and horizontal links. More pages should not be added until orphaning and cluster relationships are checked.
4. Third-party crawlability: AhrefsBot and SemrushBot were previously blocked. They are now allowed to crawl public pages so backlink and technical-authority monitoring can remain current. This does not directly improve Google rankings; it improves external diagnostics.
5. AI reference consistency: llms.txt and llms-full.txt now mention the current HOA software coverage, including eUnify. These files are supplementary references, not ranking mechanisms.

#### Medium priority

- Review every market page for unique local value and current regulatory claims. State-specific tax/compliance statements should be source-checked before publication.
- Review resource pages for overlap with service pages and identify cases where one page should be the clear canonical intent target.
- Audit internal anchors so they describe the destination accurately rather than repeating generic phrases such as learn more or view details.
- Review technology pages for the distinction between genuine workflow experience and software implementation/certification claims.
- Keep visible FAQs for users and semantic understanding, but do not treat FAQ structured data as a guaranteed Google rich-result mechanism; Google removed the FAQ rich-result feature in 2026.

#### Technical caution

components/article-layout.tsx currently requires a careful build/deployment review because its getText() implementation contains a literal escaped newline sequence in the source. Do not rewrite this shared component casually; validate it with the build/deployment owner before making changes.

### What is not the current bottleneck

- The site already has robots, sitemap, canonical metadata, Organization/WebSite/Service/Article/Breadcrumb schema and public AI reference files.
- The absence of llms.txt is not a reason for poor Google ranking. Google explicitly states that llms.txt is not required for Google Search and does not itself improve or reduce visibility.
- Word count is not a target. Pages should be expanded when additional information satisfies the query, not to reach an arbitrary length.
- A fixed page-count target is not part of the strategy.

### Next audit sequence

1. Finish HOA internal-link and content-quality pass.
2. Audit Property Management cluster.
3. Audit Real Estate cluster.
4. Audit CPA/accounting-firm cluster.
5. Audit core service pages and regional service pages.
6. Audit technology/software pages.
7. Audit market/state pages.
8. Run a full orphan/duplicate/cannibalization/broken-link review.
9. Reconcile Search Console queries with page intent and indexing status.
10. Build a relevant authority/backlink plan after the on-site architecture is stable.


### 2026-10-08 implementation pass

- CPA Firms industry page: added direct contextual links to U.S. bookkeeping, U.S. tax preparation and the U.S. market page.
- Real Estate industry page: added contextual links to Property Management, QuickBooks technology context and HOA accounting, clarifying the relationship between adjacent industries.
- Property Management already has useful cross-industry links to Yardi/Texas, HOA and Real Estate; no forced link expansion was made.
- No deployment was performed. Changes are on main and should be validated by the deployment/build owner.
