# Brief for an external AI writing a new Accounstone page

**Purpose:** paste this entire file into ChatGPT (or any assistant working
outside this repo), then add one line saying what page you want. Everything it
needs is inline, because it cannot open our files, cannot see our other pages
and cannot run our checker.

`docs/PAGE-FORMAT.md` is the contract for someone working *inside* the repo
with `node scripts/verify-pages.mjs` available. This file is the same contract
restated for someone who has neither. If the two ever disagree,
`PAGE-FORMAT.md` and the checker win.

---

## 1. What to hand back — six things, every time

An answer that is only page copy is not usable. Produce all six:

1. **`app/<route>/page.tsx`** — complete file, from the template in §3.
2. **One line for `app/sitemap.ts`** (§8).
3. **One line for `public/llms.txt`** (§8).
4. **One row each for `docs/ROUTES.md`, `docs/CONTENT-REGISTRY.md` and
   `docs/SEARCH-INTENTS.md`** (§8).
5. **A word count** of the body prose, and which floor in §4 it clears.
6. **A list of every claim you made that you could not source**, if any. Say so
   plainly rather than leaving it to be discovered. An unsourced claim is the
   single most expensive thing you can hand over.

And **before** those six: name the closest **2–3 existing routes** from the route
inventory (§11) and say in one line why the new page does not duplicate them —
or that it does, and should be folded into one of them instead. A page proposed
without that comparison cannot be reviewed for cannibalisation, which is the
most expensive mistake available here and the hardest to undo once a URL is
indexed.

---

## 2. The one rule behind all the others

> Would a regulator, a licensed CPA, or a client's attorney read this sentence
> and conclude Accounstone is claiming to do something it is not licensed or
> resourced to do?

If yes — **or if you are unsure** — describe the preparation work and name who
holds the authority. "We prepare the schedule your CPA reviews" is always safe.
"We ensure compliance" is never.

Accounstone is an outsourced accounting company. It keeps books, prepares
returns and workpapers, runs payroll and AP/AR, and prepares what a licensed
professional reviews. It serves accounting firms and businesses in the **US, UK
and Australia**, delivered from New Delhi.

---

## 3. The page file template

This is a blog/guide article, which is what most new pages are. Fill every
`<...>`. Do not add imports that are not here.

```tsx
import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: '<max 46 characters — see section 5>',
  description: '<110-160 characters — see section 5>',
  path: '/blog/<slug>',
});

// Visible on the page AND the source of FAQPage schema. Never one without
// the other — see section 7.
const faqs = [
  { question: '<a real question, ending in ?>', answer: '<60-700 characters of prose>' },
  { question: '<second question>', answer: '<...>' },
];

export default function Page() {
  return (
    <ArticleLayout
      title="<the full h1 — length is free here, unlike the title>"
      category="<e.g. HOA Accounting | Property Management | Outsourcing>"
      description="<one or two sentences, the standfirst under the h1>"
      publishedDate="<YYYY-MM-DD>"
      section="blog"
      slug="<slug only — no /blog/ prefix, no ../>"
      faqs={faqs}
      inquiryTitle="<page-specific ask — see section 9>"
      inquiryLead="<page-specific, one or two sentences>"
    >
      <p><!-- Opening. State what the page answers. No preamble. --></p>

      <h2><!-- First real section --></h2>
      <p><!-- ... --></p>

      <h2><!-- ... --></h2>
      <p><!-- ... --></p>

      <h2>Related Resources</h2>
      <p>See <a href="/<existing-route>">...</a> and <a href="/<existing-route>">...</a>.</p>
    </ArticleLayout>
  );
}
```

**Do not** add a `<script type="application/ld+json">` tag for FAQs. Passing
`faqs` renders them and emits the schema from one place. Hand-rolling it is how
two pages shipped with 9 Q&A pairs in schema that no reader could see.

**Do not** add `hreflang` or `<link rel="alternate">`. It is derived from the
path for the 21 Service × Region pages and 3 market pages only, and the checker
fails any other page that carries one.

---

## 4. Word floors — the floor, not the target

Body prose inside `<main>`, excluding nav and footer.

| Page type | Floor | What good looks like |
|---|---|---|
| Blog post | **650** | ~870 |
| Guide / insight | **900** | ~1,240 |
| Service × Region | **1,000** | ~1,330 |
| Industry hub | **900** | ~1,920 |
| Industry sub-page | **650** | ~910 |
| Market sub-page | **900** | ~1,390 |
| Homepage | **1,200** | ~1,610 |
| Section hub (`/blog`, `/resources`) | exempt — keep short | ~570 |

**A page under its floor is missing a section, not missing padding.** Add
another real question answered. Never restate a point in new words to reach a
number — that is detectable, and it is the thing this floor exists to prevent.
If you cannot find a 650th word that earns its place, say so: the topic
probably belongs inside an existing page instead of at its own URL.

---

## 5. Metadata budgets — count characters, decoded

| Field | Rule |
|---|---|
| `title` | **≤ 46 characters.** The site appends ` \| Accounstone` (14 more) and Google truncates at 60. |
| `description` | **110–160 characters.** Shorter wastes the snippet, longer is cut mid-sentence. |

Count `&` as one character, not five.

**The question form goes in the `h1`, not the `title`.** `"HOA Accounts
Payable: How Should Vendor Bills Be Reviewed?"` is 57 and truncates. Put the
compact keyword in `title`, keep the full question as the `h1` and as an FAQ
entry, where length is free and the answer-engine value actually lands.

---

## 6. Structure and headings

Order inside the page: hero (`h1`) → body sections → FAQs → enquiry band → CTA.
The last two are added by the layout; you do not write them.

- **Exactly one `h1`**, and it is the `title` prop on `ArticleLayout`.
- **No heading-level skips.** `h2` → `h4` fails. Body sections are `h2`;
  sub-points inside one are `h3`.
- Sentence-case or title-case headings, consistently within a page.

---

## 7. FAQs — visible and marked up, never one without the other

This is the highest-value answer-engine surface on the site and it has failed
in **both** directions here:

- 20 pages emitted `FAQPage` schema for text no reader could see. Google
  requires FAQPage content to be visible; invisible markup is a violation.
- 62 pages wrote a heading ending in `?` with the answer underneath and no
  schema on any of them.

Passing `faqs` solves both. Rules:

- **At least 2 pairs.** One question is not an FAQ.
- **Answers are prose**, 60–700 characters. Never answer only with a table — a
  table flattens into `"SectionTypical examplesAssetsBank accounts…"`, which is
  the string an assistant then quotes back as Accounstone's own words.
- **End on a sentence boundary.** A truncated accounting statement can change
  its meaning.
- Write answers that are true if read alone, because they will be.

---

## 8. The finish — five snippets

**`app/sitemap.ts`** — add inside the hardcoded list:
```ts
{ path: '/blog/<slug>', priority: 0.75, changeFrequency: 'monthly' },
```

**`public/llms.txt`** — add under the right section. This is what AI assistants
read and repeat, so the descriptor must be as careful as the page:
```
- [<the h1>](https://www.accounstone.com/blog/<slug>) — <the meta description, without the full stop>
```

**`docs/ROUTES.md`**
```
| `/blog/<slug>` | Article | <Cluster> | Published |
```

**`docs/CONTENT-REGISTRY.md`**
```
| <the h1> | `/blog/<slug>` | <Cluster> | <the search intent in a clause> | New page | <YYYY-MM-DD> |
```

**`docs/SEARCH-INTENTS.md`** — the cannibalisation guard, one intent → one URL:
```
| <the search intent> | `/blog/<slug>` | Informational / <what it covers; and what it is NOT, to keep it off a neighbour's intent> |
```

`lib/sitemap-dates.ts` is **generated**, never hand-edited. Leave it alone.

---

## 9. Linking and the enquiry band

- **Never link `/services/{slug}`** — those 7 URLs are redirects. Link the
  regional page: `/services/bookkeeping/united-states`, and for audit support
  `/services/audit-support/united-kingdom`.
- **Only link routes you know exist.** If you are unsure, say which link you
  want and let a human supply it. A link to a page that does not exist is worse
  than no link.
- A new page should earn **2+ contextual links from existing pages** — name
  which pages should link to it and with what sentence.
- **`inquiryTitle` and `inquiryLead` must be page-specific.** The same
  paragraph on twenty pages reads as boilerplate *and* pushes those pages
  together on a near-duplicate measure, which is a real problem this site has
  already had to fix once.

---

## 10. Claims — what will get the page sent back

**Never claim** (each is a hard rule here, not a style preference):

- IRS representation or power of attorney — needs a licensed CPA/EA/attorney.
- Tax planning, tax strategy, tax advisory. Accounstone prepares returns and
  the books under them; strategy belongs to the client's CPA.
- CFO, financial-advisory or HR services. Not offered in any form.
- Software implementation, configuration, or being "certified" in a platform.
  Accounstone works *inside* an existing setup.
- An audit or review opinion, or preparing one. An independent CPA does that.
- Holding bank credentials, moving money, or being a signatory.

**Never invent** a client, testimonial, statistic, certification, credential,
headcount, turnaround time, response time, rate, fee, threshold or deadline.
Rates and deadlines change annually and go stale silently, so a figure that is
right today is wrong within a year with nobody watching. Write "confirmed at
scoping" instead.

**Avoid absolutes:** "full compliance", "guaranteed", "we ensure", "best",
"industry-leading", "world-class", "cheapest", "seamless", "cutting-edge".
Prefer "structured around", "aligned with", "prepared for".

**SOC 2:** Accounstone is *working toward* it. Never describe it as held.

**Verify a regulator applies before naming it.** The FCA and ASIC regulate
financial services, not accounting services.

**Use the market's own word for its audience:** CPA firms in the US,
accountancy practices in the UK, accounting firms in Australia. "CPA firm" in
UK copy is the fastest signal the page was not written for that reader.

**A promise about how people are treated is a claim too.** "Dedicated account
manager", "weekly updates", "24-hour response" all read as harmless marketing
and all are things a client will expect on day one. Leave them out; say what is
agreed in writing at onboarding.

**US spelling** on US-audience pages — HOA and property-management pages are
US-facing. "Authorised" and "recognised" signal copy written for elsewhere.

---

## 11. Before the URL exists at all

**`docs/ROUTE-INVENTORY.md` must be pasted in alongside this brief.** It lists
all 204 indexable routes with their titles. Without it this whole section is
unexecutable: you cannot tell whether a topic duplicates an existing intent, and
"prefer improving an existing page" becomes a rule you can agree with and never
apply. **If it was not provided, ask for it before writing anything** rather
than guessing at what exists.

- **One search intent → one URL.** Two pages splitting one intent means neither
  earns a click. This has happened here twice and cost real rankings.
- **Prefer deepening an existing page over adding a new one.**
- A new page must share **under 25%** of its 6-grams with every existing page.
  Three pages built from one template once measured 53% against each other. If
  you are given a topic close to an existing page, the honest answer may be
  "this belongs in that page" — say it.

---

## 12. What a brand-new page cannot satisfy on its own

Two checker rules depend on things that only exist after the page is committed,
so do not try to satisfy them in the file and do not hand-write a value:

- **`lastmod` in the sitemap** comes from `lib/sitemap-dates.ts`, which is
  **generated** from git history by `node scripts/generate-sitemap-dates.mjs`.
  Never add an entry by hand and never write `new Date()`.
- **`dateModified`** is emitted by the layout, falling back to your
  `publishedDate`. You do not pass it. Pass `updatedDate` **only** when the
  page is genuinely a revision of older material and you know the real date.

**Known good:** a page straight from the template in §3 passes every shape rule
except the word floor, which is yours to clear with real content. That was
verified on 2026-10-16 by building this exact template and running the checker
against it — which is also how the `dateModified` gap above was found and
fixed.

---

## 13. Review on arrival

Whoever merges the page runs, against a production build:

```bash
pnpm next build && pnpm next start -p 3100 &
node scripts/verify-pages.mjs /blog/<slug>
```

It mechanically checks the title and description budgets, the canonical, a
single `h1` inside `<main>`, heading skips, the word floor, the closing
sequence, links to redirects, `Organization` and `BreadcrumbList` schema,
whether every marked-up FAQ answer is visible, `dateModified`, hreflang in both
directions, and sitemap and `llms.txt` parity. It must pass before merge.

---

## 14. Keeping the route inventory current (for whoever is inside the repo)

```bash
node scripts/route-inventory.mjs
```

Re-run it whenever routes are added or removed, then re-paste the file for the
next page. Its route count must match what `scripts/verify-pages.mjs` reports as
checked — if the two disagree, regenerate the inventory rather than trusting it.
