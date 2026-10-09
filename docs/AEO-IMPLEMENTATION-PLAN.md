# Accounstone AEO (Answer Engine Optimization) implementation plan

Status: separate workstream, created 2026-10-09.

## What AEO means here

AEO is a practical label for making pages easy for people and systems to understand and cite when answering a question. It is not a separate ranking switch, and there is no guaranteed method to make ChatGPT, Google AI Overviews, or another answer engine mention a website. Google's published guidance says its AI search features use the same core search foundations: pages need to be crawlable and eligible for Search, and content should be useful, reliable and people-first.

## AEO priorities

### 1. Clear answer-first writing
- For question-led content, answer the question in the first short section, then explain why, how, exceptions and next steps.
- Put the real subject in headings; avoid clever headings that hide the topic.
- Explain industry-specific terms such as HOA assessments, reserve funds, owner statements, CAM recoveries and Form 1065 when the intended reader may need definitions.
- Use short lists or tables when they make a process, comparison or checklist easier to follow. Do not split content into artificial tiny chunks or chase a word count.

### 2. Consistent company facts
Keep these consistent across the homepage, About, Contact, service pages, industry pages, schema and AI-readable references:
- Company: Accounstone.
- Delivery base: New Delhi, India.
- Core offer: accounting, bookkeeping and tax preparation outsourcing/support.
- Audiences: accounting/CPA firms and businesses.
- Market pages: United States, United Kingdom and Australia.
- Software: mention only platforms the firm genuinely works with; do not imply reseller, vendor-partner or certification status without evidence.
- Scope: describe what the firm actually performs, with engagement responsibilities and review points agreed for each engagement.
- Do not invent clients, testimonials, team size, credentials, security certifications, results or local offices.

### 3. Page-level answer structure
For a service/industry page:
1. Who the service is for and what work is supported.
2. Direct description of the workflow/tasks.
3. What inputs are needed and how handoffs/reviews work.
4. Software and industry context where genuinely relevant.
5. Scope/fit questions and next step.
6. FAQs that resolve remaining objections or misunderstandings.

For an educational article:
1. Direct answer/definition.
2. Process or comparison.
3. Example/checklist/table where it materially helps.
4. Common errors and how to review the result.
5. Related guide/service link.

### 4. Structured data
- Keep Organization and WebSite identity consistent.
- Use BreadcrumbList where it accurately describes the page hierarchy.
- Use Service schema on real service pages only, and keep the schema URL and service details consistent with the canonical page and visible content.
- FAQPage schema must reflect FAQs actually visible on that page. Do not expect FAQ markup alone to produce a rich result or ranking increase.
- Do not add LocalBusiness solely to satisfy an audit score. Use it only if the business and represented location genuinely fit the type.
- Do not add special schema just for AI systems. Structured data should describe the visible page accurately.

### 5. Crawlable information
- Ensure important content is available as readable page text, not only inside images.
- Keep important links as crawlable links.
- Check canonical URLs, robots rules, redirects and sitemap inclusion.
- Maintain `llms.txt` and `llms-full.txt` as optional references for systems that choose to use them. Google says these files are not a requirement and do not improve Google Search or AI feature visibility by themselves.
- Do not create artificial “AI-only” content, hidden text, or unverified third-party mentions.

### 6. AEO measurement
Track separately from traditional SEO:
- Whether answer-led pages are crawlable and indexed.
- Referrals/visits from AI assistants where analytics can identify them.
- Brand and service mentions in a repeatable set of relevant questions, recording date and exact prompt; results may vary by user, region and time.
- Conversions and qualified inquiries from these visits.
- Quality/accuracy of company information shown by systems when tested.
Do not treat a third-party “AI visibility score” as an official ranking signal.

## Separate SEO vs AEO work log

| Area | SEO checks | AEO checks |
|---|---|---|
| Page purpose | Primary query, intent and keyword cannibalization | Clear answer to the likely user question |
| Metadata | Title, description, canonical | Consistent description and subject; no special AI meta tag required |
| Content | Relevance, usefulness, depth and links | Answer-first structure, definitions, examples and sourceable facts |
| Technical | Crawlability, indexability, redirects, sitemap, mobile performance | Same crawlability plus readable main content and useful link structure |
| Structured data | Valid schema appropriate to page type | Schema matches visible facts and FAQs; no AI-specific markup requirement |
| External authority | Relevant genuine links and references | Accurate third-party descriptions and credible sources; no fake mentions |
| Measurement | Queries, impressions, clicks, rankings, conversions | AI referral traffic, repeatable citation/mention checks and conversions |

## Official references

- Google Search Central, Optimizing your website for generative AI features in Google Search: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central, Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
