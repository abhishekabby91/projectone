# Accounstone SEO Changelog

## 2026-09-10 (a correction: no cross-granting between the businesses)

`CLAUDE.md` carried an instruction to add a `theaucorp.com` account as a **Full
user** on `sc-domain:accounstone.com`. **The owner has ruled that out.** AU Corp
and `registercompanyinindia.com` are separate concerns from Accounstone, and the
"AU Corporate" GA4 property belongs to that side, not this one.

That instruction was mine and it was the wrong recommendation. The diagnosis
underneath it was sound — the Search Console connector is authenticated as an
account that does not own `accounstone.com` — but I jumped from "here is the
account the connector is on" to "grant it access" without asking whether those
two businesses should share data at all. Identifying an account is not the same
as establishing that it should be given access, and only the owner can answer
the second part.

**The correct fix is the other direction:** re-connect the Search Console
connector signed in as an Accounstone-side account —
**`partner@accounstone.com`** (also the Cloudflare account holder for the
domain) or `contactus7070@gmail.com` (which owns the Vercel project); the owner
has confirmed those two are linked. That puts the connector on the account that
already owns the data instead of widening access to a second business.

`CLAUDE.md` open item 2 now states the prohibition explicitly, so no future
session re-proposes the cross-grant. The `theaucorp.com` references that remain
in that section are diagnostic context and the prohibition itself — not an
instruction.

No site content changed.

## 2026-09-09e (the Search Console diagnosis was wrong)

Since 2026-09-07 this changelog and `CLAUDE.md` have said Search Console access
broke because the verifying DNS TXT record was removed or the account's access
was revoked. **Both were wrong**, and the wrong answer was repeated across three
sessions because each one ran the same ambiguous check.

The owner confirmed on 2026-09-09 that Search Console shows the property
*successfully verified* via Domain name provider. The TXT record is intact. The
property was never the problem.

**The connector is signed in to the wrong Google account.** Evidence:

| Check | Result |
|---|---|
| `get_site_details` | **404 — "'sc-domain:accounstone.com' is not a verified Search Console site in this account."** |
| `list_properties` | property listed at `siteUnverifiedUser` |
| GA4 on the same token | one property, "AU Corporate" (549024501), account "Abhishek", created 2026-08-07, INR/Asia-Calcutta, **0 sessions in 28 days** |

`siteUnverifiedUser` does not mean verification was lost. It means *this
account* added the property to its own Search Console and never verified it —
which is why `list_properties` kept returning it and looking healthy. And the
GA4 side is conclusive: the connected account cannot see Accounstone's GA4
property (`G-D1L72NM0GY`) at all, only an unrelated empty one.

Both connectors (`Geneio-projectone`, `GenieSEO`) are on that same account.

### The reusable lesson

**Call `get_site_details` before any analytics call.** A 403 from
`get_search_analytics` reads like a revoked permission and points at DNS. The
404 from `get_site_details` says "not verified *in this account*" and points at
the actual cause. The cheaper, more specific check existed the whole time and
nobody ran it — including me, across two passes today.

Second lesson, more general: **an error message that is consistent is not the
same as a diagnosis that is confirmed.** "Still 403" was recorded three times as
if the repetition were evidence. It only ever confirmed the symptom.

Nothing in the site changed in this entry. `CLAUDE.md` open item 2 is rewritten
with the corrected cause, the fix, and the diagnostic order.

## 2026-09-09d (the response-time promise, all five of it)

The 2026-09-08 pass recorded that the unverified response-time claim had been
removed. It had not. Grepping the **pattern** rather than the two pages someone
had noticed found five surviving instances, in two different numbers:

| Where | What it said |
|---|---|
| `components/inquiry-form.tsx` | "We reply within 24 business hours." |
| `app/thank-you/page.tsx` | "You hear back within one business day" |
| `app/contact/page.tsx` | "We reply within one business day" |
| `app/contact/page.tsx` | "A reply within one business day" |
| `lib/contact-faqs.ts` | "You get a reply within one business day, usually sooner" |

**The form one was the worst and was invisible to any page-by-page read.** It is
the fallback in `{r?.hours ?? '…'}` under the submit button, so it rendered on
every page whose inquiry form carries no `region` prop — and it promised a
different number from the other four, which is precisely the "two pages, two
wordings" failure the previous entry says it was fixing.

All five are gone. The regional `hours` strings ("We cover UK business hours
from our delivery centre in New Delhi") are coverage rather than commitment and
stay; the fallback now matches their shape.

Where a reader genuinely wants to know when they will hear, going silent is
worse than answering. `/contact`'s FAQ and `/thank-you` now say why there is no
number, in the voice `/markets/australia` already used for turnaround: the
honest answer depends on volume and market, and what is fixed is that it is
agreed in writing at onboarding.

**Method, because this is the reusable part:** grep the claim pattern across the
repo, never fix only the instances someone happened to spot. Verified after: 0
hits for `within one business day|24 business hours|within 24 hours` in source,
and 0 in the rendered text of `/`, `/contact`, `/thank-you`, a Service x Region
page, a market page and a guide.

`components/Sidebar.tsx` deleted in the same pass. It held
`wa.me/919990597192`, was imported nowhere and so never reached the build — but
a dead file carrying the number is a landmine for whoever mounts it next.
`components/header-bar.tsx`'s `CALL_HREF` is now the only occurrence in the
whole repo.

Still the owner's: `knowledge/company/identity.md` lists the number against
"header bar, ContactPoint schema", and the ContactPoint half is now wrong —
`telephone` came out of the schema on 2026-09-09b. That file is human-edit-only
by its own rule, so it was left alone deliberately.

## 2026-09-09c (the call icon comes back, the digits do not)

Owner's revision on 2026-09-09b: "you can use the icon but dont show number
directly." So the header bar's phone icon is restored as a working `tel:` link,
and the number stays absent as readable text everywhere.

`CALL_HREF` in `components/header-bar.tsx` is now the only place it lives.
Deliberately not back on `companyInfo` — that object is imported sitewide, so a
value on it invites the next person to render it. Only the E.164 form exists;
there is no `phoneDisplay` to print by accident.

The icon's `aria-label` and `title` are both "Call Accounstone" rather than the
old "Call Accounstone at +91 …". A screen-reader user still learns what the link
does; nobody hears the digits.

**Nothing from 2026-09-09b was un-done.** The five display sites stay removed —
the inquiry band's contact block, `/thank-you`'s "or call", `/contact`'s Phone
row, and `telephone` in both schema blocks. Restoring the schema pair would
republish the number to Google in readable form, which is the substance of what
was asked for.

Verified on a clean production build:

| Check | Result |
|---|---|
| Occurrences as readable text, any page | **0** (tags stripped, then searched) |
| Occurrences in `.next` | 117 across 99 files |
| …of those, **not** inside a `tel:` href | **0** |
| `telephone` in JSON-LD | absent, homepage and `/contact` |
| Call icon tap target | 28x28 at 390 and 1280 (WCAG 2.5.8 wants >=24) |
| eslint / build | silent / green |

99 files because the header bar is sitewide — that is the price of a working
call link, not a defect.

### The honest limit, stated so nobody rediscovers it

**This hides the number from readers, not from scrapers.** It is in the `href`
on every page and in `.next/static/chunks/app/layout-*.js`, because
`header-bar.tsx` is a client component. Any HTML parser gets it. If the goal is
ever "no bot can harvest this", the `tel:` link has to go and the icon should
open the inquiry dialog instead. There is no arrangement that keeps a
one-tap call and hides the number from machines.

## 2026-09-09b (the phone number comes off the site)

Owner's instruction: hide the mobile number. Removed rather than hidden, which
is a different thing — CSS-hiding it, or leaving it in `lib/data.ts` unused,
would both still ship it to the browser.

`companyInfo` is imported by client components, so every property on it lands in
the client bundle and in page source regardless of what renders. `phone` and
`phoneDisplay` are therefore deleted from `lib/data.ts`, not orphaned.

Six render sites:

| File | What went |
|---|---|
| `components/header-bar.tsx` | the phone icon and its `tel:` link |
| `components/inquiry-section.tsx` | the phone line in the contact block (85 pages) |
| `app/thank-you/page.tsx` | "or call …" in the confirmation sentence |
| `app/contact/page.tsx` | the whole Phone row of the contact details |
| `lib/seo.ts` | `telephone` on the sitewide `ContactPoint` |
| `app/contact/layout.tsx` | `telephone` on the Organization **and** its Sales `ContactPoint` |

**The schema is the half that is easy to miss.** Taking the number off the page
while leaving it in JSON-LD keeps publishing it to Google, which is most of the
point of removing it. Both schema files were done in the same pass.

Two now-unused `Phone` lucide imports were dropped with them. The `phone` field
on the enquiry form is the *visitor's* number and is untouched.

Verified: `grep -r "9990597192\|99905 97192" .next/` returns **0 files** after a
clean production build, `.next/static` included; `tel:` appears in the rendered
HTML of none of `/`, `/contact`, `/thank-you`, `/markets/united-kingdom`,
`/services/bookkeeping/united-states`, `/about`; eslint silent; build green;
`/contact`'s detail list reads Email then Delivery centre with no gap, and the
header bar sits correctly with one icon at 390 and 1280.

### Two loose ends, recorded not actioned

- `components/Sidebar.tsx` contains `https://wa.me/919990597192`. It is
  **imported nowhere**, so it never reaches the build and is why the grep above
  returns clean. It is a landmine rather than a live exposure: mounting that
  component republishes the number. Left in place because deleting a component
  is the owner's call.
- `knowledge/company/identity.md` still lists the number in its contact table.
  That file is human-edit-only by its own rule, so the owner needs to update it.

## 2026-09-09 (UK and AU cycle pages)

Three pages added: `/markets/united-kingdom/vat-returns`,
`/markets/united-kingdom/year-end-accounts`, `/markets/australia/bas-preparation`.
93 routes on disk, 91 in the sitemap.

**Search Console is still unreadable** — `list_properties` returns
`sc-domain:accounstone.com` at `permission_level: "siteUnverifiedUser"` and every
analytics call returns HTTP 403. Re-checked 2026-09-09 on the reconnected
connector; unchanged. So none of this was chosen from query data. It was chosen
from a structural gap that is visible inside the repo, and that distinction
should stay attached to it: **these three pages are a hypothesis, not a
measurement.** Whether they were the right three is not knowable until the
property is re-verified.

### The gap

The US had three sub-market pages (`/markets/united-states/{texas,california,
florida}`); the UK and Australia had none. The two markets the site sells into
hardest carried strictly less surface area than the domestic one. Both knowledge
files name the recurring cycle each market runs on, and neither cycle had a URL —
`knowledge/markets/uk.md`, "VAT registration and reporting is the primary
recurring compliance cycle"; `knowledge/markets/au.md`, "GST and BAS reporting is
the primary recurring compliance cycle". `docs/SEARCH-INTENTS.md` had no owner for
either, so nothing was cannibalised.

### What keeps them off the market pages' intent

A market page covers the whole year across every cycle at one level of detail; a
cycle page covers one cycle at the level of the ledger. That rule is recorded in
`docs/SEARCH-INTENTS.md` and in the header of `lib/market-depth.ts`, because it
is the thing that will erode first.

### Measured, not asserted

| Check | Result |
|---|---|
| Worst near-duplicate pair involving a new page | **5.5%** (vs 25% ceiling; registration trio hit 53% on its first attempt) |
| Word count | 1,351 - 1,411 (site median was 1,118) |
| Titles incl. `%s \| Accounstone` | 46, 50, 53 chars — all inside 60 |
| Descriptions | 151-158 — the AU one was 165 on the first pass and was cut |
| `h1` per page / heading skips | 1 each / none |
| Sitemap drift, llms.txt invariant | 93 disk, 91 sitemap, 91 llms — difference is the 2 noindex routes only |
| Overflow + sub-24px tap targets, 320/390/768/1280/1440 | none |
| Contextual inbound links | 2 each; routes with <=1 back to the documented 6 |

The AU page shipped its first draft with **one** inbound link, which is exactly
the failure `CLAUDE.md`'s internal-link section says the crawl exists to catch.
Fixed by repointing `/technology/myob`'s related row from
`/services/payroll/united-states` — a market mismatch on an AU/NZ-only platform
page — to the BAS page.

### Constraints held

No rate, threshold, registration limit, deadline or turnaround time appears on
any of the three. Every page routes submission to the licensed party, and the
party differs per market, which is why `components/depth-block.tsx` takes
`boundaryHeading` as a prop rather than hardcoding the US "your CPA".
`components/state-depth.tsx` is now a thin adapter over that same renderer. The
three US state pages were diffed before and after the refactor and differ by
exactly eight characters each: the ledger heading was `{state.name} Specifics,
in Terms of the Books` (two JSX text nodes, so React emitted a `<!-- -->`
separator between them) and is now one template literal, so the separator is
gone. Same visible text, same DOM text content, one fewer comment node. Nothing
else on those pages moved.

## 2026-09-08f (the homepage hero, and the last three emoji)

The owner asked for the site to look better and delegated the choice, so this
is a decision rather than a menu. Three directions were drafted on a design
canvas first; what shipped is **A + C** — the drawn illustration language from
A on the deep navy panel from C.

**B was the most distinctive and was not built.** It laid the page out like an
accounting document, on a ruled 44px baseline everything sits on. It is the
best-looking of the three and the wrong choice for this site: a strict baseline
across 90 routes is fragile at mobile widths and a permanent tax on every page
written afterwards. Worth recording so nobody rediscovers it as a good idea
without the cost attached.

### The carousel was the problem

`components/hero-carousel.tsx` rotated three stock photographs — pens, a
calculator, a spreadsheet. Three things were wrong with it, and all three are
visible in a screenshot rather than arguable:

- The photography was generic. It said nothing a competitor's could not, on a
  site whose entire content strategy is operational specificity.
- The white headline sat on mid-tone photographs. No single fixed type colour
  holds a reliable contrast ratio across three rotating images, so the headline
  was legible on one and marginal on the others.
- It belonged to a different visual system than everything below it. The rest
  of the page is navy, gold and hand-drawn line work; the hero was the one part
  that looked bought rather than made.

`AI-WEBSITE-GUIDE.md` says not to change the hero imagery without the owner
asking. They asked twice and then delegated the call, which is why this shipped
rather than staying a proposal.

### What replaced it

`components/site-hero.tsx` — a deep navy panel built entirely from what the
site already owns: the `--color-primary-light` to `--color-primary-dark`
gradient, the gold hairline rule, the `ledger-lines-dark` motif already in
`globals.css`, and a drawing in the language of `service-illustration.tsx`
(200x150 viewBox, 1.6 stroke, gold ground rule, the accent spent exactly once —
on the flagged exception, the only thing in the picture that needs a person).

**No new photography, nothing to license, nothing to art-direct later**, which
is also why it cannot drift back out of alignment with the rest of the site.

Two structural notes. The `h1` is now the visible headline: the carousel kept a
separate `sr-only` h1 because its titles rotated, and there is one headline
now, so there is still exactly one h1 per page. And the drawing is
`aria-hidden`, because it sits beside copy that already says the same thing.

Deleted with it: `components/hero-carousel.tsx`, `components/hero.tsx` and
`public/carousel-{budget-planning,tax-returns,worldwide}.jpg`. Nothing imported
any of them afterwards.

### The last three emoji, and a dead prop

`trustBadges` in `lib/data.ts` still held `🔒 ✓ ▣` — the last emoji rendering
anywhere on the site, missed by the sitewide removal because they lived in data
rather than in markup. They are lucide icons now, through
`components/trust-icon.tsx`, and they take the accent colour like every other
icon here.

The six industry pages each passed an emoji `icon` into `IndustryPageTemplate`,
which **never rendered it** — dead data behind a dead interface field, left
behind by the same cleanup. The prop is gone, interface included.

Both had survived by living in data rather than in markup, which is where to
look if another one turns up.

### Verification

- `pnpm eslint .` — silent
- `pnpm next build` — green, 97 static pages
- Playwright sweep, all 90 routes at 320 / 768 / 1440px — no horizontal
  overflow, no sub-24px tap target
- exactly one `h1` on the homepage at both 390 and 1440px, and it is the
  visible headline
- three fewer files in `public/`, two fewer components, and no reference left
  to either

## 2026-09-08e (thin pages deepened; region illustrations; interaction claims corrected)

Three asks: more content on pages too thin to rank or to answer a question,
more accuracy about how people actually interact with the firm, and region
specific creativity on the region pages. All three, plus a set of accuracy
problems found while doing the first two.

### The measurement first

A crawl of all 90 routes recording word count, heading structure and FAQ schema
found **29 indexable pages under 650 words**, and the thinnest of them were not
the ones anyone would guess. The four trust pages a buyer reads before handing
over their books were the worst on the site: `/compliance` 259 words,
`/delivery-framework/communication` 274, `/delivery-framework/quality-assurance`
282, `/data-security` 330.

| | before | after |
|---|---|---|
| indexable pages under 650 words | 29 | **12** |
| median words per route | 998 | **1118** |
| mean | 987 | 1088 |

The 12 that remain are almost all hub and index pages, which are navigational by
design, plus the two insights, `/delivery-framework/onboarding` and
`/compliance` at 620. Those are named at the end of this entry rather than
padded.

### Region illustrations — a third drawn set

`components/region-illustration.tsx`, to the same system as
`service-illustration.tsx` and `solution-illustration.tsx`: 200x150 viewBox,
1.6 stroke, navy through `currentColor`, gold ground rule, and the burnt-orange
accent spent exactly once on the thing that needs a human decision.

Each shows the recurring compliance mechanic that market actually runs on,
taken from `knowledge/markets/{us,uk,au}.md`:

- **US** — nexus is per-state and transaction-based rather than one national
  threshold, so: state columns against a registration line, accent on the one
  that has crossed it. Registering is the CPA's decision.
- **UK** — the VAT quarter is the recurring cycle and MTD requires the digital
  link to stay unbroken, so: four quarters joined by a visible chain, accent on
  the submission gate held by the registered practitioner.
- **AU** — GST is coded as transactions post rather than reconstructed at
  lodgment, so: transactions coded as they land, collecting into the BAS block
  inside the year, accent on the lodgment gate belonging to the registered agent.

**No flags, no maps, no landmarks.** A flag identifies a country; it says
nothing about what is different about doing the work there, and the market pages
already carry a flag component for identification. The US drawing also renders
on the three state pages, where the per-state nexus mechanic is directly the
subject.

### What was deepened

| cluster | before | after | worst pair |
|---|---|---|---|
| US state pages (3) | 558-582 | **1128-1141** | 6.5% |
| platform pages (7) | 468-610 | **987-1228** | 9.3%, down from 17.4% |
| industry pages (5) | 580-623 | **962-1022** | 11.9%, down from 15.1% |
| trust pages (4) | 259-330 | **620-824** | n/a |

Three new content modules, each with a note at the top explaining what may and
may not be written into it: `lib/us-states.ts`, `lib/platform-depth.ts`,
`lib/industry-depth.ts`.

**The state pages are written about the books, not about tax figures**, and that
is a constraint rather than a stylistic choice. `knowledge/markets/us.md` records
exactly one regulatory fact per state; rates, thresholds and deadlines change
every year, so quoting one correctly today would be wrong within a year with
nobody watching, and inventing one breaches the never-invent-statistics rule.
Each page answers "what is different about my accounting here" in ledger terms
and routes every computation, election and filing to the client's CPA.

**The platform pages now say what actually goes wrong in each system** — bank
rules that were right once, Undeposited Funds as a holding pen, Xero's
"reconciled" meaning matched rather than agreed to the statement, Sage control
accounts posted to directly, NetSuite intercompany that never quite agrees,
CCH rollforward carrying last year's errors in as continuity, MYOB GST
reconstructed at BAS time. None of them is a software fault; all of them are
accounting failures the software accepts without complaint. Every page states
what we do not do in that platform, because `scope-boundaries.md` §5 is easiest
to breach by omission.

Near-duplicate scores went **down** where content was added, which is worth
recording because the instinct says otherwise: per-page substance dilutes shared
boilerplate. `quickbooks` vs `xero` was the worst pair on the site at 17.4% and
is now 9.3%.

### The accuracy problems, which were the more serious finding

`/resources/guides/how-to-choose-accounting-outsourcing-partner` tells readers
that *"'full compliance' or 'guaranteed' language"* is a red flag and that *"a
provider that guarantees outcomes rather than describing a process is
overpromising"*. The site was failing its own test in eight places:

1. `/delivery-framework/communication` promised a **"24-Hour Response Time"** and
   said its channels **"ensure you're always informed"** — a service-level
   guarantee and a banned absolute, in the hero of the page about how we
   communicate.
2. `/solutions/offshore-accounting-support` carried a **"24-hour response
   commitment"**.
3. The same communication page promised **"Monthly Business Reviews — Strategic
   reviews"** (advisory drift) and Slack and Teams as channels.
4. `/delivery-framework/quality-assurance` claimed **"All work reviewed by senior
   accountants"**, "Compliance Audits", "Error Tracking", "Monthly KPI reviews",
   an **"On-Time Delivery Commitment"** and "Continuous Training" — six
   operational claims, none verifiable from `knowledge/`.
5. `/compliance` claimed **"continuous monitoring of regulatory changes"** and
   closed with a banner reading **"Compliance You Can Trust"**, on a page whose
   own body says "here is where we honestly stand today".
6. `/markets/united-states/texas` offered **"entity-level tax planning"** — a
   hard-rule breach — and an FAQ claiming **"we have relevant experience"** in
   energy and real estate.
7. `/markets/united-states/california` claimed **"experience with
   California-concentrated industries"** and **"a cost structure that make sense
   against California's high in-house bookkeeper salary market"** — an unverified
   salary-market statistic, and a grammar error that had been live.
8. `/markets/united-states/florida` offered **"clarity on which Florida entities
   owe corporate income tax vs. which pass-through structures don't"**, which is
   entity-level tax determination and belongs to the client's CPA.

All of it now describes structure rather than promising a number. Response times
and working-hours overlap are stated as agreed in writing at onboarding and named
in the engagement.

**Owner decision, added to the verification list: is 24 hours the real
commitment?** If it is, it can go back — it needs confirming once, and then
stating the same way everywhere rather than appearing on two pages in two
wordings. It was removed rather than kept because an unverified SLA is the one
kind of claim a client will hold you to.

### What each trust page gained

- **`/data-security`** named the three questions a vendor security review asks
  and then did not answer them. It answers them now, including "none yet" on
  certifications and "we do not have a certified incident response programme and
  are not going to describe one we do not run". It also states what bounds the
  worst case, which is the strongest true thing available: no payment authority,
  no tax-authority credentials, no copy of the accounting system, so revoking
  access ends access.
- **`/compliance`** gained the distinction the category depends on — a
  preparation provider does not carry your compliance obligation, which is why
  the sign-off line is drawn where it is. It also records that this page once
  cited the FCA and ASIC, and why that was wrong, because it is a common pattern
  on competitor pages.
- **`/delivery-framework/quality-assurance`** gained "what our review does not
  replace", which CLAUDE.md already said was that page's job and which the page
  did not do.
- **`/delivery-framework/communication`** gained the three places communication
  actually breaks — the question with no owner, the handover nobody documented,
  the status nobody can see — and the time-zone shape, which for an offshore
  provider is the question underneath the question.

### Verification

- `pnpm eslint .` — silent
- `pnpm next build` — green, 97 static pages
- Playwright sweep, all 90 routes at 320 / 768 / 1440px — no horizontal overflow,
  no sub-24px tap target
- heading order sequential on every changed page — no `h2 -> h4`
- near-duplicate across the 49 commercial routes — worst pair 18.3%
  (`company-registration` trio, unchanged), **zero pairs above 25%**
- sitemap drift — 90 on disk, 88 listed, the two expected noindex differences
- no `24-hour`, `24 hour` or `ensure you` claim left in `app/` or `components/`

### The last three content pages (same day, second pass)

The three real content pages left short were then done:

| page | before | after |
|---|---|---|
| `/resources/insights/asc-606-revenue-recognition-saas` | 456 | **986** |
| `/resources/insights/sales-tax-nexus-ecommerce-guide` | 461 | **945** |
| `/delivery-framework/onboarding` | 431 | **853** |

ASC 606 gained the five-step model, the four places subscription bookkeeping
actually breaks (mid-term changes, implementation fees, hybrid pricing, credits
and refunds), what a reviewable deferred revenue schedule contains, and an
explicit statement that choosing the policy is the CPA's and the auditor's while
implementing and reconciling it is ours.

The nexus article gained the two things that actually catch e-commerce sellers
and were both missing: **physical nexus did not go away** — inventory in a
third-party fulfilment warehouse can create it, and a fulfilment network may move
stock between states without asking — and **the marketplace facilitator
confusion**, where "the marketplace collects the tax" is read as "I have no
obligation", when whether those sales still count toward the threshold is a
separate question that varies by state. It also gained what the books have to
produce for the question to be answerable at all. No thresholds or rates are
quoted anywhere; the existing not-tax-advice disclaimer stands.

Onboarding gained what it costs the client — a few front-loaded hours from
someone senior, and the honest note that a provider implying otherwise is setting
you up to be disappointed in week three — and the exit ramp, which is a
structural property rather than a promise: the work happens in your system, so
revoking access ends access and there is no separate database to ask for back.

**One more accuracy fix found there.** The onboarding steps listed establishing
access to "QuickBooks, Xero, **banking platforms**". That contradicts the
no-banking-control posture stated on `/data-security`, `/contact` and
`scope-boundaries.md`. It now reads: access to your accounting platform at the
level you set, under your credentials, never payment authority, read-only where
a bank feed is involved.

### Still thin, and correctly so

`/resources/insights` (197), `/markets` (316), `/industries` (341),
`/solutions` (369), `/blog` (412), `/resources` (507),
`/resources/case-studies` (513) and `/resources/guides` (595) are hub and index
pages — their job is orientation and they are short because they are lists. No
content page on the site is now under 620 words.

## 2026-09-08d (the type scale was never being applied; footer restructured)

The owner said the footer looked big and unsystemised. The footer was part of
it. The larger cause was not.

### Every heading on the site was ignoring its own size class

`app/globals.css` ended with element defaults for `h1`-`h4` and `p`, under a
comment reading *"Tailwind text-* utilities override these. These only apply
when no Tailwind class is present."* That comment was wrong, and had been for as
long as it existed.

Those rules sat **outside any cascade layer**. Tailwind v4 emits utilities into
`@layer utilities`, and unlayered CSS beats every layer regardless of
specificity — so `h3 { font-size: 1.25rem }` beat `.text-sm`, `.text-xl` and
`.text-[11px]` alike. Measured on the live dev server before the fix:

| authored | rendered before | after |
|---|---|---|
| `h1.text-[1.75rem] md:…` | 30px | 44px |
| `h2.text-3xl` | 24px | 30px |
| `h2.text-2xl` | 24px | 30px |
| `h2.text-xl` | 24px | 24px |
| `h3.text-sm` | 20px | 14px |
| `h3.text-base` | 20px | 18px |
| `h3.text-[11px]` (footer) | 20px | 12px |
| `p.leading-5` | 26.4px | 20px |
| `p.leading-7` | 26.4px | 28px |

Every heading collapsed to one of four sizes and every paragraph to one rhythm,
whatever was written on it. The site had a type scale and was not using it —
which is a fair description of "unsystemised".

The fix is a single `@layer base { … }` wrapper around those rules. The comment
was replaced with the mechanism and the measurements, because the next person to
read it would otherwise have the same false assurance.

Worth noting: the mechanism was already known in this file. A note on the `img`
rule reads *"globals.css is cascade-priority above @layer utilities"* and works
around it by deleting a `height: auto` declaration. Nobody carried that finding
up to the heading block twelve lines away.

Three unlayered element rules were left unlayered deliberately, and are now
documented as such: `input, textarea, select { font-size: 16px }` (stops iOS
Safari zooming the page on focus) and the `max-width: 100%` on `img, video` and
`svg`.

**Verification of a change this wide:** all 90 routes re-swept at 320 / 390 /
768 / 1280 / 1440px — no horizontal overflow and no sub-24px tap target at any
width. Before/after screenshots of the homepage, a Service x Region page and a
blog post confirmed the hierarchy reads correctly rather than merely larger.

### Footer: four columns, two blocks each

Building on the services compaction earlier the same day:

- **Even shape.** One column previously carried three blocks and another
  carried one, leaving a ragged gap at the bottom of the grid. Now every column
  has two.
- **How We Work** is its own block. Onboarding, Communication and Quality
  Assurance were filed under "Company", where they read as filler.
- **Compliance and Data Security appeared twice** — once under Company and once
  in the legal bar. They are trust pages, not policies; they stay in Company and
  the legal bar is now Privacy, Cookie Policy and Terms only.
- **`/solutions` and `/industries`** gained the "All …" entry that Services,
  Markets and Technology already had. They were the only two section hubs the
  footer did not link.
- **The email address is now readable text.** It was a circular icon button with
  an `sr-only` label — the only item in the footer that was not text.
- Heading tracking widens at `lg:` rather than `sm:`. At 768px in a four-column
  grid, "TECHNOLOGY" needed 180px in a 158px column and was genuinely clipped.

| viewport | before | after |
|---|---|---|
| 320px | 3171px | **2575px** |
| 390px | 2307px | 1826px |
| 768px | 1669px | 1120px |
| 1024px | 1392px | 989px |
| 1440px | 1315px | 973px |

**No URL was lost.** Verified by extracting the rendered `<footer>` href set
before and after and diffing them: 63 unique internal URLs before, 65 after, the
two additions being the `/solutions` and `/industries` hubs. That is the check
to run if this is ever touched again — counting links in the JSX will not catch
a `.map()` that quietly changed shape.

Eight footer headings were being clipped by their own columns at 1024px before
this pass. Zero are now, at any of five widths.

### Verification

- `pnpm eslint .` — silent
- `pnpm next build` — green, 97 static pages
- Playwright sweep, all 90 routes at 320 / 390 / 768 / 1280 / 1440px — no
  horizontal overflow, no sub-24px tap target
- footer measured at five widths before and after, with the href set diffed
- before/after screenshots on `/`, `/services/bookkeeping/united-states` and
  `/blog/tax-preparation-outsourcing`

## 2026-09-08c (footer services block compacted; ROUTES.md re-verified)

### The footer's three service columns are now one block

The owner asked for the footer service links to be shortened or hidden. Hiding
them is not available: the navbar renders dropdown contents only when open and
emits **zero** links into server HTML, so the footer is the site's entire crawl
skeleton. Dropping two of the three regions would have orphaned 14 of the 21
primary commercial pages — the exact failure repaired on 2026-08-27.

So the presentation changed and the link set did not. Three columns of seven
(`United States Services`, `United Kingdom Services`, `Australia Services`)
became one `Services` block of seven rows, each row a service name with
`US · UK · AU` beside it:

| viewport | footer height before | after | change |
|---|---|---|---|
| 320px | 3171px | 2625px | **-546px** |
| 390px | 2307px | 2064px | -243px |
| 768px | 1669px | 1537px | -132px |
| 1024px | 1392px | 1197px | -195px |
| 1440px | 1315px | 1149px | -166px |

Footer link count is **69 before and 69 after**, and the 21 Service x Region
hrefs are all still in the server HTML — checked by counting them in `curl`
output, not by reading the JSX.

Two details in the new block:

- **The service name is plain text, not a link.** The generic `/services/{slug}`
  URLs are 301s; linking one from the footer would put a redirect on all 90
  pages.
- **Each region link carries an `aria-label`** with the full service and region
  name, because "US" alone is not an accessible name.

`short` (`US`/`UK`/`AU`) was added to `regions` in `lib/data.ts` so the
abbreviation has one source rather than being spelled out in the footer.

The freed width let the remaining nav grid drop from six column groups to four,
which also fixed a real clipping bug: at 1024px, six of the eight footer
headings were being clipped by their own columns. Zero are now. The
`US Company Registration` heading was shortened to `Company Registration` for
the same reason. Re-checked at 320 / 390 / 768 / 1024 / 1440px: no horizontal
overflow, no footer link under 24px tall, no clipped heading.

### docs/ROUTES.md had drifted, and it is the route inventory

It still claimed **"89 routes total ... 89 page files, 89 sitemap URLs, exact
parity"**, verified 2026-08-21, and its copy of the drift check said "both
should print nothing". Both are now wrong: it is 90 on disk against 88 in the
sitemap, and the second command is *supposed* to print two lines. A route
registry that reports parity when there is a deliberate two-route gap will make
the next person think they have found a bug.

Corrected, and while in there:

- `/resources` and `/thank-you` were missing from the tables entirely
- the three US state pages and the Yardi Texas page were listed only as a
  "spokes" cell on their parent's row, so an extraction of the file did not
  enumerate them; they now have their own rows
- the `/company-registration` rows had four cells in a three-column table
- `/technology/myob` and `/thank-you` now carry their `noindex` status, why they
  are absent from the sitemap and `llms.txt`, and why they must **not** go in
  `robots.txt`
- the redirect count was wrong: it said one, there are eight
- the drift-check section gained the `llms.txt` parity check and the
  `generate-sitemap-dates.mjs` step
- the Markets section gained the note that "offshore" belongs to
  `/solutions/offshore-accounting-support` and not to a market page's title

### Verification

- `pnpm eslint .` — silent
- `pnpm next build` — green, 97 static pages
- sitemap 88 URLs; drift 90 on disk / 88 listed, the two expected noindex
  differences
- `llms.txt` 88 URLs, every one resolving to a route on disk
- contextual internal-link graph unchanged: 6 routes at <=1 inbound, 1 at zero
  (`/thank-you`), median 6
- footer measured at five widths, before and after, with the link count held
  constant

## 2026-09-08b (sitemap dates generated; llms.txt rewritten)

Both files had drifted quietly, in the way files nobody renders tend to.

### The sitemap was telling Google nothing had changed

`app/sitemap.ts` carried a literal `lastModified` per entry, defaulting to a
`LAST_AUDIT = '2026-08-14'` constant. Rendered, that came out as:

| | before | after |
|---|---|---|
| URLs | 88 | 88 |
| URLs carrying a `lastmod` | 66 | **88** |
| declaring 2026-08-14 | 41 | 0 |
| newest date anywhere in the file | 2026-08-27 | 2026-09-08 |

Four content passes — 09-03, 09-04, 09-07 and 09-08 — had rewritten most of the
site since the newest date the sitemap was willing to admit to. `lastmod` is a
recrawl hint; a stale one is worse than an absent one, because it actively says
the page you just rewrote has not changed.

The fix is to stop writing the dates. `scripts/generate-sitemap-dates.mjs`
derives them from git — for each route, the last commit that changed its
rendered body, meaning its own `page.tsx` plus the shared module its body lives
in where there is one (`components/registration-state-page.tsx`,
`lib/service-depth.ts`, `lib/regional-context.ts`,
`components/article-layout.tsx`, `lib/company-registration.ts`). It writes
`lib/sitemap-dates.ts`, which `app/sitemap.ts` now reads. Run it at the end of a
content pass.

It is deliberately **not** `lastModified: new Date()`. That is the one-liner
everyone reaches for and it is a fabricated date on every route that has not
changed — the exact thing `AI-WEBSITE-GUIDE.md` bans. The human-side corollary
is in `CLAUDE.md`: never touch a page just to refresh its date.

While in the file, 21 dead lines came out. All 21 Service x Region URLs were
spelled out by hand in `specializedRoutes` after `serviceRegionPaths.map()` had
already generated them; the dedupe kept the first and dropped the second, so
editing those lines did nothing and nothing said so. The loop is now the only
source, and the legal pages moved up into `staticRoutes` where they belong.

### llms.txt was serving claims the site had already retracted

`public/llms.txt` is what AI assistants read and repeat, and it had not been
touched since before the 2026-08-27 restructure. Two real defects:

- **It linked all seven retired generic `/services/{slug}` URLs.** Those have
  been 301s since 2026-08-27. The sitewide "zero internal links pointing at a
  redirect" check crawls rendered pages, so it never reads `public/`, and
  nothing else does either.
- **It carried "QuickBooks Certified ProAdvisor (since 2022)" and "24+ years of
  combined accounting experience".** Both are open owner-verification items in
  `AI-WEBSITE-GUIDE.md`; both had already been removed from every page on the
  site. They were still being fed to LLMs weeks later. Removed, and replaced
  with what `knowledge/company/identity.md` actually verifies — plus an explicit
  note that team size, founding year and legal entity name are not published and
  must not be estimated.

Rewritten from 67 lines to 165. It now lists **all 88 indexable routes** and
excludes exactly the two `noindex` ones, which is the same invariant the sitemap
holds and can be checked the same way (the `comm` pair is in `CLAUDE.md`). New
sections cover the region-first service structure and why it exists, the four
engagement models, the company-registration cluster with its arranged-and-
coordinated scope stated up front, the delivery framework, and all 19 articles,
guides and insights.

The section that matters most is **"What Accounstone does not do"**, condensed
from `knowledge/company/scope-boundaries.md`: no tax representation or power of
attorney, no tax planning or strategy, no entity-selection advice, no CFO or
financial-advisory work, no audit judgement, no HR services, no software
implementation or vendor certification, no banking control or filing
credentials. An assistant summarising Accounstone should get the boundaries in
the same breath as the capabilities rather than inferring them — which is the
whole reason to publish the file at all.

`app/robots.ts` was reviewed and left alone: it already allows the AI crawlers
by name, blocks AhrefsBot and SemrushBot deliberately, and declares the sitemap.

### Verification

- `pnpm eslint .` — silent
- `pnpm next build` — green, 97 static pages
- sitemap — 88 URLs, 88 with `lastmod`, dates spanning 2026-08-21 to 2026-09-08
- sitemap drift — 90 on disk, 88 listed, the two differences `/technology/myob`
  and `/thank-you`
- llms.txt parity — 88 URLs, every one resolving to a route on disk, neither
  `noindex` route linked
- `/robots.txt`, `/sitemap.xml` and `/llms.txt` all 200

## 2026-09-08 (internal linking measured and repaired; five more illustrations)

Three things were asked for: update per Search Console, increase internal
linking, and add non-AI-generated artwork. The first is still blocked; the
other two are done and measured.

### Search Console is still 403 — nothing was read

Re-checked at the start of this pass. `list_properties` still returns
`sc-domain:accounstone.com` with `permission_level: "siteUnverifiedUser"`, and
`searchAnalytics/query` still returns HTTP 403 "User does not have sufficient
permission". No GSC-derived change was made in this pass, and every GSC figure
quoted anywhere in the repo remains frozen at the 2026-09-04 reading. The fix
is the owner's: re-verify the DNS TXT record for the domain property, or
re-grant that Google account at least Full user in Search Console.

### The internal link graph was the thing that could be measured

A Playwright crawl of all 90 routes, counting only **contextual** links —
anything inside `header` or `footer` is excluded, because site-wide chrome is
constant and tells you nothing about which pages the site actually recommends —
produced the inbound count for every route. Self-links and duplicate hrefs from
the same source page are counted once.

The result explained something the GSC read had already hinted at.
`/blog/tax-preparation-outsourcing` holds 435 impressions at position 27.8, the
most of any indexable page, and had **one** contextual inbound link. Five of
the six blog posts had one. So did `/technology` (a hub), all three
`/company-registration/{state}` pages, `/delivery-framework/communication` and
the Yardi Texas page.

`components/further-reading.tsx` is the fix, and it is topic-driven rather than
hand-maintained: it matches against the topics already declared per resource in
`lib/resources.ts`, so a new guide with the right topic appears without anyone
editing 25 files. Articles are listed first, deliberately — they are the thin
ones and the ones that need the equity. It caps at three, which keeps it a
reading suggestion rather than a link farm, and it is rendered on the 21
Service x Region pages (keyed to that page's service) and the four solutions
pages (keyed to `'Engagement models'`).

Four smaller repairs:

- the 7 platform pages gained an **All Platforms** chip in their existing
  Related row, pointing at `/technology`
- the three registration state pages gained a **Looking at a different state**
  row linking the other two states and `/markets/united-states`
- `/delivery-framework/onboarding` now links to `communication` in the sentence
  that already links to `quality-assurance`, closing the three-page loop
- `/markets/united-states/texas` and
  `/industries/real-estate/yardi-accounting-outsourcing-texas` now link to each
  other

Measured with the same crawl before and after:

| | before | after |
|---|---|---|
| routes with <=1 contextual inbound link | 17 | **6** |
| routes with 0 | 1 | 1 |
| median inbound | 5 | 6 |
| total contextual edges | 777 | **850** |

All six remaining are correct. `/thank-you` is the zero and is `noindex`;
`/about`, `/privacy`, `/terms`, `/cookie-policy` and `/resources/case-studies`
are reached from the navbar or footer by design. Per page, the six blog posts
went 1-2 -> 4-5, the two insights 2 -> 5, and the guides that were thinnest
(`questions-to-ask-before-outsourcing-bookkeeping` 4 -> 10,
`staff-augmentation-tax-season-guide` 5 -> 10,
`client-accounting-services-cas-guide` 3 -> 7) gained the most.

### Five more illustrations, drawn to the existing system

`components/solution-illustration.tsx`, covering the four engagement models and
the registration hub, which had no artwork at all. Nothing is AI-generated or
stock: same constraints as `components/service-illustration.tsx` — one 200x150
viewBox, 1.6 stroke weight, navy line work through `currentColor`, the brand
gold as a single ground rule along the base, and the burnt-orange accent spent
**exactly once**, always on the thing that needs a human decision:

- **staff augmentation** — extra hands joining an existing queue; the accent is
  the review gate, which stays the client's
- **offshore** — the working-day boundary, with prepared work crossing it into
  a reviewer's tray; the accent is the point of arrival, where judgement starts
- **dedicated teams** — a standing group attached to one portfolio; the accent
  is the single named point of contact
- **back office** — many recurring inputs collapsing into one lane; the accent
  is the signature line, left blank
- **registration** — the certificate and the ledger that opens behind it; the
  accent is the fork, because the entity-and-state choice stays with the
  client's own attorney and CPA (`scope-boundaries.md` §2)

Inline SVG, so no extra request and nothing to lazy-load, and `aria-hidden`
because each sits beside copy that already says the same thing.

### A dev-server trap worth recording

Running `pnpm next build` and then `pnpm dev` against the same `.next`
directory makes the dev server hand back the **prerendered** HTML from the
build. Edits compile, the file on disk is right, and the served page is stale —
which silently invalidated one crawl in this pass before it was caught by
diffing `curl` output against the source. This is the mirror image of the
already-recorded "do not build against a running dev server". The rule is
simply: `rm -rf .next` whenever switching between `build` and `dev`.

### Verification

- `pnpm eslint .` — silent
- `pnpm next build` — green, 97 static pages
- sitemap drift — 90 on disk, 88 listed, the two differences `/technology/myob`
  and `/thank-you`, both `noindex`, both expected
- near-duplicate, 6-gram Jaccard across the 49 commercial routes — worst pair
  18.3% (`company-registration/nevada` vs `wyoming`, up 0.3pt from 18.0% and
  still far under the 25% ceiling); zero pairs above 25%
- Playwright sweep at 320 / 768 / 1280 / 1440px — no horizontal overflow and no
  sub-24px tap target on any of the 90 routes

## 2026-09-07b (Search Console access has broken; documentation refreshed)

### GSC is returning 403, and no data can be read

`list_properties` still returns `sc-domain:accounstone.com`, but the permission
level is now **`siteUnverifiedUser`**, and every analytics call returns:

```
HTTP 403 — User does not have sufficient permission for site
'sc-domain:accounstone.com'
```

It was readable on 2026-09-03 and again on 2026-09-04, when the offshore and
MYOB decisions were made from it. Both connected MCP servers
(`Geneio-projectone` and `GenieSEO`) are the same Google account and both fail
identically, so this is the account's access having changed rather than one
connector misbehaving.

Two likely causes, both outside this repo and both the owner's to fix: the DNS
TXT record that verified the domain property was changed or removed, or the
connected account's access was revoked in Search Console. Either way it needs
re-verifying, or that account re-granted at least Full user.

**Until it is fixed, every GSC-driven judgement in `CLAUDE.md` is frozen at its
2026-09-04 reading** — including whether the offshore consolidation, the
MYOB noindex and the staff-augmentation rewrite actually worked, which is
exactly what the next read was supposed to answer.

### Documentation refreshed against measurement

Four numbers in `CLAUDE.md` had drifted from reality. All re-measured rather
than estimated:

| Claim | Was | Now |
|---|---|---|
| "Current state (verified …)" | 2026-08-27 | 2026-09-07 |
| Drift-check baseline | 85 on disk / 84 in sitemap | **90 / 88** |
| Inquiry band coverage | "on 81 pages" | **on 85 of 90**, counted by rendering every route |
| Open item 2's MYOB paragraph | described as an unfixed problem | resolved, points at the noindex section |

The five pages without the band are now named rather than approximated:
`/contact` (which is the form), `/cookie-policy`, `/privacy`, `/terms` and
`/thank-you`. The previous wording listed three.

### Deploys confirmed

All ten production deployments since 2026-09-03 are `READY`, including the
engagement-triggered prompt (`4a137e0`). Nothing is stuck or rolled back.

## 2026-09-07 (engagement-triggered inquiry prompt on content pages)

The ask was a form that appears after a few seconds of scrolling on the SEO
content pages, for lead generation. Built, with one constraint that shaped the
whole thing.

### Why it is not a popup

Google treats interstitials that obscure content shortly after a visitor arrives
from search as a negative mobile signal. The naive version of this feature —
open a modal after five seconds — fires on arrival, covers the article, and puts
the rankings of the very pages it is meant to convert at risk. That would have
been a self-defeating build on a site where the whole point of those pages is
search traffic.

Three properties prevent it, all verified rather than assumed:

- **Two conditions, both required.** Eight seconds on the page *and* 45% of the
  article scrolled. It stays hidden after 11 seconds with no scrolling, and
  hidden at 60% scroll under the dwell time. It cannot appear on arrival however
  someone behaves.
- **It never covers the article on mobile**, which is the viewport the guidance
  is about. Below `lg` it is a slim bottom bar — one line plus a button that
  opens the existing dialog — measured at **under 20% of a 390x844 viewport**
  and pinned to the bottom edge. The full form only renders as a corner card at
  `lg` and up, where it sits in the margin beside the text (measured at x > 900
  on a 1440px viewport).
- **Trivially dismissible** — close button, Escape, and dismissal remembered for
  30 days, so it does not follow the reader to the next article.

### Where it is, and what it does not disturb

`ArticleLayout` only, so the 6 blog posts, 11 guides and 2 insights — the pages
where someone actually reads. Absent from service, solutions and market pages,
which already have the rail and the card triggers.

It stands down while the `#inquiry` band is on screen, the same rule the rail
follows, and it will not fire while the cookie banner is up — a first-time
visitor is never asked two things at the same moment.

**It renders nothing on the server.** No prompt markup and no `scroll-` field
ids appear in the HTML, so although it repeats the page's own `inquiryTitle` and
`inquiryLead`, it cannot affect indexed content or the near-duplicate scores.

### Tested

22 assertions: the trigger in both its negative cases and its positive one, the
desktop and mobile geometry, dismissal persistence across a navigation, Escape,
the band stand-down, absence on a service page, and — with four form instances
now possible on one page — no duplicate ids, exactly one `#inquiry` and exactly
one `#inquiry-heading`. The sitewide sweep at 320/768/1280/1440 stays clean, and
the drift check still shows only `/technology/myob` and `/thank-you`.

## 2026-09-04d (MYOB noindexed; registration recorded in identity.md)

Two owner decisions actioned.

### /technology/myob is now noindex

857 impressions in 28 days, the most of any page on the site, and never a click,
because the demand is MYOB product research and a hunt for a certified
consultant or implementer — none of which Accounstone can honestly claim. The
owner chose to take it out of the index rather than keep ~27% of site
impressions that will not convert.

**The cost was flagged before doing it, and it is real:** this also drops the 30
`"myob bookkeeper offshore"` impressions, the one genuine buyer query on the
page and the reader the page had just been retitled for. That intent was rehomed
first — the offshore bookkeeping entry on `/solutions/offshore-accounting-support`
now names MYOB explicitly, alongside QuickBooks and Xero, so the search still has
somewhere on the site to land.

Three implementation details that are easy to get wrong:

- **Removed from `app/sitemap.ts`** via a filter on the technologies array. A
  noindex URL in a sitemap is a contradiction Search Console reports. The drift
  check now expects **two** unlisted routes — `/technology/myob` and
  `/thank-you` — where it previously expected one.
- **Not added to `robots.txt`, deliberately.** A blocked URL cannot be crawled,
  so the noindex would never be read. This is the same trap already documented
  for `/thank-you`, and it is the most common way a noindex silently fails.
- **The page stays live and linked** from the technology hub and the footer.
  Noindex is not deletion, and a visitor who lands there still gets an honest
  page about what is and is not offered.

Worth being straight about what this does and does not buy. It will clean up
average position and impression reporting, which is the stated reason. It will
not improve any other page's ranking — low CTR on one page does not harm the
rest of a site. The decision is a reporting-hygiene one, not a ranking one, and
it is one line to reverse.

### Company registration recorded in identity.md

`knowledge/company/identity.md` listed seven service lines and did not include
the registration work the cluster was built for on 2026-09-04. That file is
edit-on-client-evidence-only by its own rule, so it had been left alone and
flagged. The owner confirmed the service twice in session and then asked for it
to be written down, so it is now recorded with its provenance, its date, and —
more importantly — its actual scope: **arranged and coordinated, not performed
in-house**, with entity selection advice still forbidden under
`scope-boundaries.md` §2, which this change does not touch.

## 2026-09-04c (US company registration cluster)

Four new pages: `/company-registration` and one each for Delaware, Wyoming and
Nevada. 90 routes on disk, 89 in the sitemap, `/thank-you` still the one expected
difference.

### The premise had to be checked first

The brief was to target company registration. The site had no such service line
— `identity.md` lists seven, and registration is not among them — and
`scope-boundaries.md` §2 explicitly forbids **entity selection advice**, which is
most of what a registration page is tempted to offer. So the work paused on one
question: does Accounstone actually do this?

The owner confirmed it is arranged and coordinated rather than performed
in-house, and asked that the arrangement not be named on the page. Every line is
written to that split: the filing is coordinated, the accounting that follows is
ours. Nothing claims Accounstone lodges the documents, acts as registered agent
or opens bank accounts, and a grep for the two words the owner excluded runs as
part of verification.

`knowledge/company/identity.md` still does not list this service. That file is
human-edit-only by its own rule, so **the owner needs to add it there.**

### What the pages do and do not say

Each page names the boundary explicitly rather than hedging around it: we do not
advise which entity or which state, do not give legal advice or interpret the
Corporate Transparency Act, do not sign or file returns, do not hold banking
credentials. Two FAQs on the hub exist purely to answer "which state should we
pick?" and "LLC or corporation?" with *that is not our call, and here is whose it
is*.

No filing fee, franchise tax figure or turnaround time appears anywhere. Those
move by state and by year, and the site's rule against inventing statistics
applies. The pages describe the mechanics — how Delaware's franchise tax is
calculated from share structure rather than profit, why Nevada's commerce tax is
a gross-revenue measure, why forming in one state and operating in another means
two sets of deadlines — and say the current figures are confirmed at scoping.

### The near-duplicate problem, found by measuring

Three state pages sharing one component measured **53-55% 6-gram overlap against
each other** on the first build — more than twice the 25% ceiling, and enough for
Google to treat them as one page. About 730 of each page's 1,100 words were
shared boilerplate.

| Pass | Worst state-vs-state pair |
|---|---|
| First build | **55.2%** |
| Shared steps and full boundaries moved to the hub; per-state FAQs | 24.2% |
| Per-state `feesNote`, `ctaNote` and `whoFormsHere` replacing the last shared paragraphs | **18.0%** |

That final figure sits alongside the site's existing worst pair of 16.6%. The
lesson is recorded in `CLAUDE.md`: a fourth state needs all of those fields
written properly rather than templated.

### Structure

Explicit `page.tsx` files per state rather than a `[state]` dynamic segment,
because the sitemap drift check walks `find app -name "page.tsx"` and a dynamic
segment would appear there as a literal `[state]` path that can never match a
sitemap URL — permanent false drift. The cluster is linked from the footer,
which is the site's actual crawl skeleton since the navbar emits no server-side
links.

Verified: eslint silent, build green at 97 static pages, zero duplicate titles
across all 90 routes, every title and description inside the length budget,
sitemap parity correct, and the sweep at 320/768/1280/1440 clean on scroll, tap
targets, duplicate ids, heading skips and h1 count.

## 2026-09-04b (two pages were fighting over "offshore"; MYOB refocused)

### The UK market page had been quietly eating the offshore cluster

`/markets/united-kingdom` is now the site's third-biggest page by impressions
(160, up from 124 a day earlier). Reading its query list explains why, and it is
not a good reason: **roughly 140 of its 144 country-resolved impressions are
"offshore …" queries** — offshore accounting (15), offshore accounting services
(15), offshore audit services (11), dedicated offshore bookkeeping team (10),
offshore bookkeeping uk (6), hire offshore accountant for uk firm (8), and so on.

`/solutions/offshore-accounting-support` — the page actually built for that
intent — holds 148 impressions on its own overlapping set. The two share
queries outright, and on the shared ones **the market page ranks better**:
offshore contractor accounting at 79.3 against 83.8, offshore audit at 75.3
against 83.1. Google was picking the wrong page, and the cluster was split
across two URLs at positions 55–90, earning nothing.

The cause was in plain sight in the metadata:

| | Before |
|---|---|
| `/markets/united-kingdom` title | **Offshore Accounting for UK Practices** |
| `/markets/united-kingdom` h1 | Your Practice's **Offshore** Accounting Team |
| `/solutions/offshore-accounting-support` title | Offshore Accounting Support for Firms |

Two pages both announcing themselves as offshore pages. `docs/SEARCH-INTENTS.md`
already assigns `/markets/united-kingdom` a different brief entirely — "how
accounting/tax/payroll works in the UK (HMRC, VAT, MTD, PAYE, Companies House),
informational, regional authority" — so the page had drifted off its own
registry entry.

Realigned rather than deleted:

- `/markets/united-kingdom` → **Outsourced Accounting for UK Practices**, h1
  "Your Practice's Outsourced Accounting Team", description led by FRS 102, VAT
  under MTD and Companies House. "Offshore" now appears twice in the body
  instead of framing the page, and the related-links row gained a direct link to
  the offshore page, so the intent is handed over rather than contested.
- `/solutions/offshore-accounting-support` → **Offshore Accounting Services for
  Firms**, h1 "Offshore Accounting Services, Inside Your Existing Systems".
  "Offshore accounting services" and "offshore accounting" are the head terms
  the cluster actually uses and the old title carried neither.
- A new section on that page, *What an Offshore Accounting Company Actually
  Does*, gives the long-tail sub-intents a home for the first time — offshore
  bookkeeping, offshore audit support, offshore payroll, offshore AP/AR,
  offshore tax preparation, a dedicated offshore accountant — each linking to
  the service page behind it, plus how firms actually start.

Measured after: the two pages now share **1.7%** of their 6-grams, "offshore"
appears 2 times on the market page against 25 on the solutions page, and no
site-wide near-duplicate pair moved above 6.6%.

### MYOB: 857 impressions, no clicks, and almost none of it ours to win

The biggest page on the site by impressions, and the query list finally makes
the reason unambiguous:

| Query | Impressions | Position |
|---|---|---|
| myob consultants | 83 | 58.7 |
| myob consolidation software | 79 | 39.6 |
| myob accounting software | 61 | 49.2 |
| myob consultant | 40 | 58.4 |
| myob accounting | 35 | 41.9 |
| **myob bookkeeper offshore** | **30** | **62.1** |
| myob certified consultant | 29 | 67.2 |
| myob cloud software | 21 | 50.2 |

Almost all of it is product research or a search for a **certified consultant or
implementer** — which `scope-boundaries.md` §5 forbids Accounstone claiming, and
which the page correctly refuses to claim. That is why it has never had a click:
the page is honest, and the traffic is looking for something else.

Exactly one query in the set is a real buyer: **"myob bookkeeper offshore"**, 30
impressions. So the page now speaks to that reader — title **Offshore MYOB
Bookkeeping Support**, h1 "Offshore MYOB Bookkeeping, Inside Your Existing File"
— rather than presenting as a general MYOB resource competing for software
research it cannot serve.

**Open for the owner:** whether to `noindex` this page. It is ~27% of site
impressions and none of it converts, so it drags average position down for a
metric-shaped reason rather than a commercial one. Refocusing the title is the
reversible half; removing it from the index is a judgement call about whether
the vanity impressions are worth anything. Not done unilaterally.

### Also worth recording: last pass is working

"accounting staff augmentation" moved from **62 impressions at 53.9** to **85 at
36.1** in a day, and `/solutions/staff-augmentation` took its first click. That
page got the pricing-structure and working-day sections plus a head-term h1 on
2026-09-03. `/blog/tax-preparation-outsourcing` grew 366 → 435 impressions at a
held position of 27.8.

## 2026-09-04 (cookie consent: GA4 now waits to be asked)

Closes open item #1 in `CLAUDE.md`, which had been sitting since GA4 went in on
2026-09-03: analytics loaded on every page for every visitor, before anyone had
been asked anything, on a site that sells to UK practices.

### The audit came first, and it shortened the job considerably

Both source and a real browser session, rather than assumption. What is actually
on this site:

| Tracker | Provider | Category | Consent needed |
|---|---|---|---|
| `_ga`, `_ga_D1L72NM0GY` | Google Analytics 4 | Analytics | Yes |
| `accounstone.cookie-consent` | Accounstone | Essential | No — it *is* the choice |
| Web3Forms POST | api.web3forms.com | Essential | No — fires only on submit, sets no cookie |

And, more usefully, what is **not**: no Google Tag Manager container, no Google
Ads tag, no Meta Pixel, no Microsoft Clarity, no Hotjar, no chat or CRM widget,
no social pixels, no embedded players, no web fonts from a third party. The
social icons in the footer are ordinary links. A browser session across four
representative pages requested exactly two hosts: `localhost` and
`googletagmanager.com`.

Two things worth recording from the sweep:

- **`components/SectorSection.tsx` references nine images on
  `cdn.corenexis.com`** — a host nobody has documented and which is not in
  `next.config.mjs`'s `remotePatterns`. It is an orphan: nothing imports it, so
  it never renders and never makes a request. Left in place, flagged here. If it
  is ever wired up it becomes both an unconsented third-party request and a
  build error. **Unknown — Requires Verification.**
- `__next_hmr_refresh_hash__` appears in dev only. It is Next's hot-reload
  cookie and does not exist in production.

### The gate is that the script is never rendered

Not "loaded and told to behave". Before a choice is made there is no request to
googletagmanager.com and no `_ga` cookie — asserted in the test suite, not
assumed. On top of that, `app/layout.tsx` sets Consent Mode v2 defaults to
denied in a plain inline `<head>` script, so a tag added later through GTM would
inherit denied even if it bypassed the loader entirely.

Three files, kept apart on purpose: `lib/consent.ts` is the state and has no
React in it, `components/cookie-consent.tsx` is the interface and knows nothing
about Google, `components/analytics.tsx` is the consequence. Adding a service
later means editing one array and one loader, not the UI.

The record is stored in `localStorage` rather than a cookie — nothing
server-side varies on it, so a cookie would ride on every request for no
benefit. A corrupt, foreign or out-of-version record is treated as *no* record,
so the failure mode is asking again rather than assuming consent.

### Design: it had to stop looking like a plugin

Same card as the inquiry dialog — `rounded-2xl border border-border bg-white
shadow-2xl` — same serif heading, same accent eyebrow, and the burnt-orange
accent spent exactly once, on the shield mark, per the rule the service
illustrations follow. Accept and Reject are the same size, weight and prominence
tier; only colour separates them.

Two measured fixes:

- The preferences panel was **1042px tall against a 768px laptop**, putting Save
  below the fold, and on mobile the bottom sheet pushed its own heading off the
  top — the same failure `inquiry-modal.tsx` already had recorded. It is now a
  flex column capped to the viewport with header and actions pinned and only the
  list scrolling: **774px at 1440x900, 660px at 1366x768, 523px at 320x568**,
  Save in viewport at every size.
- "Reject non-essential" needed 161px and had 162px, so it wrapped to two lines
  on desktop while "Customise" did not. The card went 26rem → 28rem; both are
  44px now.

### Tested

64 assertions, all passing: first visit, Accept all, Reject non-essential,
Customise → toggle → Save, returning visitor, navigation, stale version, corrupt
record, footer reopen, withdrawal (record + `ga-disable` flag + Consent Mode
update), Escape, focus trap, scroll lock, focus restore, keyboard-operable
switches, and banner/panel geometry at 320/390/768/1440.

One methodology note worth keeping: an early run reported "no analytics request"
on every check, which looked like a pass and was not. Running `pnpm next build`
while `pnpm dev` was live had clobbered the shared `.next/` directory, so the
client chunks 404'd and no JavaScript ran at all. **Do not build against a
running dev server** — and treat an all-green consent test with suspicion until
you have seen it go red for the right reason.

### The banner was too big, and is now a third smaller

First version was 280px tall and 448px wide. The owner asked for it to be very
small, which was the right call: it is a question, not a landing page, and on a
site whose homepage is the first impression it should cost as little of the
screen as possible.

Now **162px tall and 352px wide** — the icon moved inline with the heading, the
copy is one shorter sentence, and the three actions sit on a single row instead
of stacking. Nothing was traded away for it: all three choices are still equally
prominent (same size, same weight, only colour differs), buttons are 34px and
step to 44px on touch devices via the existing `globals.css` rule, and the
Cookie Policy link keeps its own target. The preferences dialog is unchanged —
that is where the detail belongs.

The compact Reject reads "Reject" and carries
`aria-label="Reject non-essential cookies"`, so its accessible name stays the
full one.

### Content

`/cookie-policy` added (86 routes on disk, 85 in the sitemap, `/thank-you` still
the one expected difference). It names every stored item, what it does and how
long it lasts, says plainly that the Google durations are documented rather than
observed, and marks four items `[CLIENT / LEGAL REVIEW REQUIRED]` instead of
asserting compliance. `/privacy` gained a Cookies and Analytics section — it
previously did not use the word "cookie" once.

## 2026-09-03h (retired-URL redirect targets, decided on country data)

The owner authorised settling the retired generic service URLs. The previous
entry raised them as an open question; this one answers it, and corrects part
of how that question was framed.

### The country split, which changes the reading

2026-09-03g recorded that four retired URLs "rank better than any of their own
regional children", from unsegmented positions. Segmenting by country does not
support that. `/services/accounts-payable` at 27.2 resolves to **three Indian
impressions at 11.3**, and `/services/payroll` at 28.0 to two Indian and one
Czech. India is the delivery centre, not a market. Those positions were an
artifact of tiny off-market samples, and the earlier reading is withdrawn.

What survives is narrower and more actionable — only three of the seven carry
real market demand at all:

| Retired URL | Country-resolved impressions | Verdict |
|---|---|---|
| `/services/tax-preparation` | usa 59, ind 2, idn 1 | US confirmed |
| `/services/accounts-receivable` | usa 40, gbr 2, ind 2, can 1 | US confirmed |
| `/services/audit-support` | **gbr 40**, ind 3, usa 1, can 1, vnm 1 | **retargeted to UK** |
| `/services/accounts-payable` | ind 3 | no signal — stays US |
| `/services/payroll` | ind 2, cze 1 | no signal — stays US |
| `/services/bookkeeping` | none | no signal — stays US |
| `/services/accounting` | none | no signal — stays US |

### One redirect was pointed at the wrong market

`/services/audit-support` now targets `/services/audit-support/united-kingdom`
instead of the United States page. 40 of its 46 country-resolved impressions are
British, and the page they were being sent to is written for a different reader
entirely. Measured on rendered `main` text:

| | UK page | US page |
|---|---|---|
| "CPA firm" | 0 | 3 |
| GAAS / PCAOB | 0 / 0 | 1 / 1 |
| HMRC | 2 | 0 |
| Companies House | 2 | 0 |
| "practice" | 3 | 0 |

So British searchers for outsourced audit support were arriving on a page that
frames the work around US audit standards and calls them a CPA firm — the exact
vocabulary leak `CLAUDE.md` says must never reach a UK reader. The UK page draws
gbr 53 impressions independently, so the demand and the page already agree; the
redirect was the only thing pointing the wrong way.

The four URLs with no market signal stay on United States. There is nothing to
justify moving them, and moving a redirect without evidence is how the original
guess got made.

Verified: all seven retired URLs resolve in **one hop to a 200** (308 Permanent
Redirect, which is what Next emits for `permanent: true` and which Google
consolidates identically to a 301). Zero internal links point at any retired
URL, so nothing internal now traverses a redirect. `/services/cfo-support` still
returns 410.

### Still open

The generic-tier question is untouched and remains the owner's. Google is
choosing `/blog/tax-preparation-outsourcing` — 366 impressions, 320 of them
American, position 27.8 — over `/services/tax-preparation/united-states`, which
has zero. Redirect targets were a one-line decision with evidence behind them.
A generic layer above the regional pages is a restructure, and it contradicts a
standing architectural rule. Not done.

## 2026-09-03g (first page-level GSC read: two defects, four deepened pages, two overclaims removed)

Every prior Search Console pull on this site used the **query** dimension. This
one used **page**, and it answered a question the query view cannot: which URL
Google actually chose for each search. Three things fell out of it that were not
visible before.

### /services/cfo-support was ranking. It has never existed.

17 impressions, average position 56.9, on a URL that returns 404 — and one that
advertises a service `scope-boundaries.md` §1 forbids outright. The historical
note in that file records ten internal links once pointing at this page; the
links were removed, the impressions were not.

A 404 tells Google "try again later". `app/services/cfo-support/route.ts` now
returns **410 Gone**, which is the correct answer for a URL that is never coming
back, and it is the fastest way to get it out of the index. It is a route
handler, not a page, so it does not appear in the sitemap and does not change
the 85-on-disk count.

### Every blog post was emitting a broken breadcrumb

`ArticleLayout` was built for `/resources/guides/*`. The six posts under
`/blog/*` reached it by passing `slug="../../../blog/tax-preparation-outsourcing"`,
which produced this in the BreadcrumbList schema on all six:

```
"item": "https://www.accounstone.com/resources/guides/../../../blog/tax-preparation-outsourcing"
```

and a visible trail reading **Home > Resources > Guides** on a blog URL. The
layout now takes `section: 'guides' | 'insights' | 'blog'` and derives the hub
href, the label, the canonical base and the crumb list from it. Blog posts pass
their bare slug. Verified: zero `../../../` occurrences in the rendered HTML of
all six, and the guides and insights trails are unchanged.

### The pages with impressions and no clicks, deepened

Four URLs carry real impression volume and returned nothing:

| Page | Impr. | Clicks | Avg pos | Head query |
|---|---|---|---|---|
| `/blog/tax-preparation-outsourcing` | 366 | 0 | 27.8 | ~40 commercial variants |
| `/solutions/offshore-accounting-support` | 133 | 0 | 75.2 | offshore accounting support (31) |
| `/solutions/staff-augmentation` | 128 | 0 | 53.9 | accounting staff augmentation (62) |
| `/blog/accounts-payable-outsourcing` | 123 | 1 | 65.4 | accounts payable outsourcing (101) |

Each got the substance its own query set asks for, not more words:

- **Tax preparation** — the §7216 consent most firms meet late, the return-by-return
  workflow, entity returns beyond 1040s, why a per-return price can mislead, and
  five questions to ask before busy season.
- **Accounts payable** — the seven-step journey of one invoice with the two steps
  that need your authority named explicitly; three-way matching and when it is
  the wrong control; what access an AP team needs and what it must never have;
  and four signals that show a failing arrangement in month three rather than
  month six.
- **Staff augmentation** — the three pricing structures and the four variables
  that move the figure inside any of them (no rate is published, because any
  rate would be wrong for most readers); and where the working-day overlap
  actually sits for each market, since IST is UTC+5:30 and that changes what is
  worth delegating.
- **Offshore accounting support** — the four questions firms ask before sending
  anything offshore: where the data goes, what holds quality up at distance,
  which work travels and which does not, and what offshore *audit* support
  covers. That last one matters: "offshore audit support" is the second-largest
  query cluster on the page and the page previously said nothing about it.

`/solutions/back-office-support` (88 impressions) already carried a firm-facing
section answering its own head query and was left alone.

**Three h1s now carry their head term.** "Add Accounting Capacity Without
Rebuilding Your Team" ranked at 53.9 for *accounting staff augmentation* without
containing the phrase; it is now "Accounting Staff Augmentation, Without
Rebuilding Your Team". Same for offshore support, and "End-to-End Operations
Support" — which was also filler by `scope-boundaries.md` §7 — became
"Back-Office Support for the Work That Repeats Every Month".

### Two scope-boundary overclaims found while reading those pages

Neither was introduced by this pass; both were sitting in production.

`/solutions/back-office-support` carried an **Implementation** panel promising
"Week 3-4: Transition — Data migration and system setup". That is the exact
list `scope-boundaries.md` §5 forbids, and the same page's own FAQ already said
data migration and system setup are handled by the client's software vendor or
an implementation partner. The panel is now **Onboarding** — Discovery, soft
launch, steady state — which is what actually happens, matches
`/delivery-framework/onboarding`, and drops three invented week ranges the rest
of the site refuses to give.

`/solutions/staff-augmentation` offered capacity for "a defined implementation,
transition, audit-support or reporting project". Staffing an implementation is
still implementation. Now "a defined system transition, cleanup, audit-support
or reporting project", which is the vocabulary the same array already used two
lines down.

### The finding that is not ours to act on

`/blog/tax-preparation-outsourcing` holds 366 impressions at position 27.8 for
roughly forty commercial tax-outsourcing queries. `/services/tax-preparation/united-states`
holds **zero**. The blog post has 2 internal links; the service page has 14 — so
this is not a link-equity problem. Google is choosing the non-regional page for
non-regional queries.

The retired generic service URLs say the same thing. All seven 301 to their
United States page, and six still hold impressions a month later:

| Retired URL | Impr. | Pos | Best regional child |
|---|---|---|---|
| `/services/tax-preparation` | 70 | 78.8 | AU 92.6 |
| `/services/accounts-receivable` | 54 | 80.4 | US 64.7 |
| `/services/audit-support` | 52 | 71.7 | US 79.1 |
| `/services/accounts-payable` | 17 | 27.2 | UK 64.4 |
| `/services/payroll` | 11 | 28.0 | AU 86.0 |

Four of those five rank **better** than any of their own regional children. That
is evidence bearing directly on **open item #3** in `CLAUDE.md` — and on the
region-first architecture itself. It is not an agent's decision. Recorded here,
raised with the owner, and nothing was changed.

## 2026-09-03f (mobile height: the form, and which cards actually benefit from 2-up)

The brief was to size the inquiry form properly for mobile and put cards 2-up to
cut scrolling. The first half was straightforward. The second half was measured,
and the measurement contradicted the assumption.

### The inquiry band was two screens tall on a phone

1540px at 390px wide, on 81 pages, because it used desktop padding and rhythm at
every width. Field padding, label spacing, vertical rhythm, the band's left
column and the message box all now step up at `sm:` instead of starting there.
The band is 1370px on a Service x Region page, and mean page height across all
85 routes fell from 11.4 to 11.0 screens.

**The form fields deliberately stay one column.** Two-column fields on a 390px
screen is a known usability regression - smaller targets, more mis-taps, more
errors on the one interaction the page exists for. Inputs stay pinned at 16px by
`globals.css` to stop iOS Safari auto-zooming. Height came out of padding, which
costs nothing.

FAQ accordions got the same treatment for the same reason: a question in a 170px
column wraps to four lines, so the padding shrank rather than the column count.

### Six grids went 2-up. Four of them made pages longer.

Each converted grid was measured at 390px against itself forced back to one
column. The results were not what the instinct predicted:

| Grid | Cards | Chars each | Effect |
|---|---|---|---|
| `sm:grid-cols-4` | 4 | ~57 | **-243px** x 11 grids |
| `md:grid-cols-4 gap-6` | 4 | ~80 | **-255px** x 2 grids |
| `md:grid-cols-2 gap-3` | 7 | ~117 | +42px - reverted |
| `sm:grid-cols-2 gap-2.5` | 8 | ~21 | +137px - reverted |
| `md:grid-cols-3 gap-4` | 3 | ~177 | +221px - reverted |
| `md:grid-cols-3 gap-6` | 6 | ~135 | +222px - reverted |

The reason is mechanical: a card with 135+ characters wraps far more in a 170px
column, and the tallest card in a row sets the height for both. Halving the
column count does not halve the height, and past a certain text length it
increases it.

**Rule of thumb: 2-up wins below roughly 60 characters per card and loses above
~120. In between, measure.** The method is cheap - set
`gridTemplateColumns: '1fr'` on the live element and diff the bounding box.

Three grid sites kept the change; fifteen were reverted.

### Result

Every one of the eleven longest pages is shorter, none longer:

- `/services/tax-preparation/united-states` 17.5 -> 16.8 screens (-568px)
- `/markets/united-kingdom` 16.6 -> 16.1 (-469px)
- `/markets/united-states` 17.1 -> 16.6 (-454px)
- `/services` 15.8 -> 15.3 (-452px)
- `/markets/australia` 17.5 -> 17.1 (-408px)
- `/services/bookkeeping/united-states` 16.4 -> 16.0 (-382px)
- `/` 16.4 -> 16.0 (-370px)

### Verification

`pnpm eslint .` silent, `pnpm next build` clean. Across all 85 routes at 390px:
zero pages scroll horizontally and zero have a tap target under 24px. Desktop is
untouched - every changed value is a mobile-first default that steps back up at
`sm:`.

## 2026-09-03e (process flow on the homepage)

`components/process-flow.tsx` - four numbered phases on a connected rail, added
between the services grid and the testimonials.

It answers a question the homepage did not: what actually happens if I get in
touch. That is principle 1 in `AI-WEBSITE-GUIDE.md` - reduce uncertainty before
selling - and it is also the objection most likely to stop a considered enquiry.
The heading says the useful part out loud: "Four Phases, and You Can Stop After
Any of Them".

**The copy is a compression of existing content, not a new claim.** Scope / Set
up / Soft launch / Steady state summarises the seven documented steps on
`/delivery-framework/onboarding`, and the section links there. Phase 04 carries
the boundary that matters - review, judgement and sign-off stay with the client
firm.

### On the reference it came from

The owner shared a four-up infographic: numbered nodes hanging off a line, each
with an icon, a title and a short paragraph. The structure is genuinely good and
was adopted. **The four saturated colours were not.** Teal, orange, red and
purple against a navy-and-gold identity reads as a stock template - the same
failure mode this repo already recorded when generic emoji icons were replaced
sitewide with one designed set.

So it follows the rule the service illustrations established: navy line work, a
gold rail, and the burnt-orange accent spent exactly once, on the step where
something actually changes hands. Colour carries meaning rather than decoration,
and the section reads as part of the site instead of pasted into it.

### Implementation notes

The rail is inset `left-[12.5%] right-[12.5%]` - node-centre to node-centre
across four columns - so it terminates at the first and last node rather than
running off the edge. It renders only at `lg:`; stacked cards have no horizontal
line to draw, and the numbered badge above each card carries the sequence
instead.

### Verification

`pnpm eslint .` silent, `pnpm next build` clean. Playwright across all 85 routes
at 320/768/1280/1440px: no page scrolls horizontally, no tap target under 24px,
no duplicate element ids, no heading-level skips. Sitemap parity holds at 85 on
disk against 84 listed, with `/thank-you` the single expected exception.

## 2026-09-03d (bespoke service illustrations)

Seven original line drawings, one per service, now render beside the Overview
copy on all 21 Service x Region pages. `components/service-illustration.tsx`.

They are drawn for this site rather than picked from a stock set, and the point
of each is that it shows the **actual mechanic** of the work rather than a
generic finance motif:

- **Bookkeeping** - two ledger columns agreeing, and the one row that does not.
- **Accounting** - a sequence of period work collapsing into one reviewable
  close, with the sign-off left to the reviewer.
- **Tax preparation** - workpapers fanned behind a return, and the signature
  line deliberately left blank and dashed. It pairs with the copy on that page:
  "the only part that actually requires your licence".
- **Payroll** - the same run, every cycle.
- **Accounts payable** - a queue, an approval gate, and the invoice held back.
- **Accounts receivable** - the aging profile with the 90+ bucket picked out.
- **Audit support** - a schedule tying to a balance, with the opinion outside
  the frame.

This is `AI-WEBSITE-GUIDE.md` principle 5 - operational specificity as proof of
understanding - applied to pictures instead of prose. A stock calculator
illustration would say nothing a competitor's could not.

### The system, so an eighth can be added without breaking it

One `200x150` viewBox and one `1.6` stroke weight throughout. Navy line work via
`currentColor`. The brand gold as a single ground rule along the base of every
drawing. And the burnt-orange accent used **exactly once per illustration**,
always on the thing that needs a human decision - the exception, the unsigned
line, the held invoice, the overdue bucket. Spend that accent twice and the
drawing stops pointing anywhere.

### Cost and accessibility

Inline SVG, so no extra request and nothing to lazy-load; the pages grew by
about 120 bytes each. All seven carry `aria-hidden` because each sits beside
copy that already says the same thing - exposing them would make a screen reader
announce it twice. Verified across all 85 routes that none is exposed.

Text leads on mobile and the art sits right on desktop, which falls out of DOM
order. The first version forced the art above the section heading on mobile with
`order-first`, which pushed the h2 down the page for no benefit; removed.

### Verification

`pnpm eslint .` silent, `pnpm next build` clean. Playwright across all 85 routes
at 320/768/1280/1440px: no page scrolls horizontally, no tap target under 24px,
no duplicate element ids, and every illustration correctly hidden from assistive
technology.

## 2026-09-03c (/contact rebuilt as a trust page; rail rollout; type sizing)

### /contact was 153 words and read like a form with an address next to it

Rebuilt to ~1,140 words. The brief was to make it a page where a prospect
decides to trust us, not a page where they find an email address. Structure
follows the content-psychology principles already written in
`AI-WEBSITE-GUIDE.md` - which explicitly ban manufactured urgency, fear framing
and exaggerated outcomes, so none of that is here. No scarcity language, no
invented statistic, no testimonial.

What changed, and why each piece is where it is:

- **"What the first call actually is" now sits above the form.** The most common
  reason a considered B2B enquiry does not get sent is not knowing what happens
  next, so that answer comes before the ask rather than after it: thirty
  minutes, free, no obligation, and the person who replies is the person who
  would scope the work.
- **"What we will not do, whatever you are paying us"** - six boundaries, every
  one traced to `scope-boundaries.md`. No filing credentials in any market, no
  banking control, no tax-authority representation, no tax positions, no audit
  judgment, no software implementation. This is the strongest trust asset the
  business has and it was not on the page a prospect visits to decide.
- **A situation router** - eight lines in the visitor's own words ("busy season
  is going to break the review queue", "the books are behind and need a cleanup
  first") linking to the guide that answers each. Placed after the form so the
  form keeps first claim. It also gave `/contact` its first real internal links:
  it had none.
- **Eight objection FAQs**, answering the questions the guide names - will I
  spend more time reviewing, do we have to train another team, what if the books
  are behind, who keeps sign-off, is there a contract, how is data handled. They
  live in `lib/contact-faqs.ts` so the client page can render them and the
  server layout can emit `FAQPage` schema.

### A factual error found while rebuilding

The coverage block advertised **"9:00 AM - 6:00 PM EST"** and nothing else, on a
site whose whole architecture is US / UK / Australia. To a UK practice or an
Australian firm that reads as "not for you", and it contradicted the enquiry
form, which has always said it covers UK and Australian business hours. All
three markets now get a line. No new clock time was invented - the US detail was
already on the page, and the other two say what the form already says.

Also fixed: `companyInfo.contact.phone` is raw E.164 for `tel:` links, and every
page that displayed it was rendering `+919990597192`. Added
`phoneDisplay` for the grouped, readable version and used it on `/contact`, the
enquiry band and `/thank-you`.

### The inquiry rail went to all 21 Service x Region pages

After the owner reviewed it on one page. Phone was restored to it - dropping it
had been the wrong half of the trade, since it is real lead data. What stays
hidden is the service select, and only on these pages, because a Service x
Region page has already told the form which service it is about; the value still
reaches the payload from the prop, verified against a stubbed Web3Forms
response.

Height: 752px originally, which scrolled inside itself on a 1366x768 and a
1536x864 laptop; 590px now, fitting without scrolling from 1280x720 up.

Type was then enlarged without growing the panel - labels 12 to 13px, submit 14
to 15px, footnote 11 to 12px, panel heading 16 to 18px. Inputs are pinned to
16px by `globals.css` to stop iOS Safari auto-zooming on focus; an earlier
comment in the compact size claimed 15px inputs, which was simply untrue and has
been removed.

### Verification

`pnpm eslint .` silent, `pnpm next build` clean, 91 static pages. Sitemap parity
holds at 85 on disk against 84 listed, with `/thank-you` the single expected
exception.

Playwright across all 85 routes at 320/768/1280/1440px: no page scrolls
horizontally, no tap target under 24px, no duplicate element ids. Metadata still
inside the length budget on every page - the `/thank-you` description was two
characters under the 110 floor and was extended.

`/contact` specifically: one `h1`, no heading-level skips, `ContactPage` +
`BreadcrumbList` + `FAQPage` schema, and both submit branches re-tested against
a stubbed Web3Forms response - success redirects to `/thank-you` with the
payload intact, failure stays put and offers the email fallback.

Its title also carried the brand twice ("Contact Accounstone — Free Consultation
| Accounstone"), which wasted SERP width on a repeat of the site name. Now
"Contact Us — Free Consultation".

## 2026-09-03b (metadata length budget, GA4, /thank-you conversion page)

### 48 titles and 46 descriptions were being truncated in the SERP

A full audit of all 84 pages found the largest click-through defect on the site,
and it had nothing to do with copy quality:

- **48 of 84 titles exceeded 60 characters**, so Google cut them off mid-phrase.
  The `%s | Accounstone` template adds 14 characters to every page, which nobody
  had been budgeting for. Worst offenders ran to 100 characters
  (`/blog/outsourced-bookkeeping-guide`).
- **46 of 84 descriptions exceeded 160 characters**, truncating mid-sentence.
  `/blog/outsourced-payroll-services` ran to 247.
- Two titles were under 30 characters and five descriptions under 110, wasting
  space that was available.

Every page has been rewritten to a budget: **titles ≤ 46 characters before the
template so the rendered title lands inside 60, descriptions between 110 and
160.** Titles now lead with the phrasing Search Console actually shows rather
than internal naming — "Accounts Payable Outsourcing, U.S." rather than
"Outsourced Accounts Payable for U.S. Businesses".

After: 0 titles over 60, 0 under 30, 0 descriptions over 160, 0 under 110, and
still 0 duplicate titles, descriptions or canonicals. Median title 50
characters, median description 143.

Worth being straight about the expected return. The Search Console read earlier
today showed every high-impression query ranking 36-75. **Metadata cannot move a
result on page four.** This work matters because a truncated title wastes the
impression whenever a page does start ranking, not because it will lift clicks
next week. The ranking constraint is unchanged.

### Two scope-boundary violations found in metadata

`/technology/quickbooks` and `/technology/xero` both described "support for
**setup**, cleanup, bookkeeping...". `scope-boundaries.md` §5 forbids claiming
implementation or configuration for third-party platforms. Both now say cleanup
and recurring work *inside an existing file*.

### Heading hierarchy

12 pages skipped a heading level. Fixed:

- `components/article-visual.tsx` rendered an `<h3>` inside an `<aside>` that
  already had `aria-label={title}` — a duplicate label that also injected a
  phantom heading level into every guide using it. Now a `<p>`; identical
  visually, and it cleared 7 pages at once.
- `/delivery-framework/quality-assurance` used `<h4>` under an `<h2>`.
- Five sections held card `<h3>`s with no `<h2>` above them. Rather than demote
  the cards, each section got the `SectionHeading` it was missing — these blocks
  were also unlabelled for anyone scanning the page, so this is a UX fix as much
  as a semantic one.

Result: 0 heading skips, still exactly one `h1` per page.

### GA4 installed

The owner supplied `G-D1L72NM0GY`, which closes CLAUDE.md open item 1 — the site
has had no analytics at all until now. Loaded via `next/script` with
`strategy="afterInteractive"` so it stays off the critical path. Verified in a
browser: the gtag request fires, `dataLayer` populates, `gtag` is a function and
the `config` call lands.

No new dependency — `@next/third-parties` would have added one for no benefit
over eight lines of `next/script`.

**Not done, and it matters:** there is no consent banner. GA4 sets cookies
before consent, which is a live exposure for UK and EU visitors on a site that
markets to UK practices, and the privacy policy does not mention analytics.
Flagged to the owner.

### /thank-you, so ads can count a conversion

New route. Google Ads and Meta both count conversions from a destination URL,
and the old inline "thanks" state was invisible to them because the URL never
changed.

All three submission paths now redirect there on success — the inquiry band, the
inquiry dialog, and `/contact`. **The failure path deliberately does not
redirect**: the visitor keeps what they typed and is offered the email fallback,
which is the behaviour recorded in CLAUDE.md and which a redirect would have
silently destroyed. Both branches are covered by Playwright against a stubbed
Web3Forms response.

Three decisions worth recording:

- **`noindex`.** A thank-you page that ranks can be reached directly from
  search, which inflates the conversion count with people who never submitted
  anything.
- **Not in the sitemap**, because a noindex URL in a sitemap is a contradiction
  Search Console reports. This is now the one expected difference in the sitemap
  drift check: 85 routes on disk, 84 in the sitemap. Documented in CLAUDE.md so
  a later pass does not "fix" it.
- **Not in robots.txt.** Blocking it would stop the crawl that reads the
  `noindex`.

The page fires GA4's recommended `generate_lead` event
(`components/conversion-event.tsx`), guarded on `window.gtag` existing.
Recommended event names import into Google Ads as conversions without extra
configuration; a custom name would need setting up by hand.

### Verification

`pnpm eslint .` silent. `pnpm next build` clean. All 85 routes return 200.
Sitemap drift check: nothing listed that does not exist, and only `/thank-you`
existing but unlisted, as intended.

Playwright across all 85 routes: zero tap targets under 24px, zero duplicate
element ids, and **no page can be scrolled horizontally at 320, 375, 768 or
1440px**.

One honest note on that last measurement. `/delivery-framework/quality-assurance`
reports a root `scrollWidth` of 323 against a 320 viewport. Every element
exceeding the viewport on that page sits inside a clipping ancestor, and the
page cannot actually be scrolled sideways — it is the ink area of a blurred
decorative span in the hero, not reachable layout. Recorded rather than rounded
down to "zero overflow", because `overflow-x: clip` hiding a real problem is
exactly how the nav CTA became unreachable at 768px once before.

Separately, `/delivery-framework/communication` had a genuine overflow at 320px
and 375px, fixed earlier today: a flex item with `min-width: auto` could not
shrink below its longest word inside a two-column grid. Now
`w-full min-w-0 break-words`.

## 2026-09-03 (first Search Console data; inquiry form site-wide; card triggers)

### Search Console is connected, and it changes the picture

Open item 2 in CLAUDE.md ("no Search Console connection") is resolved. The
`sc-domain:accounstone.com` property is readable and returns real data for the
first time. Last 28 days (2026-08-06 to 2026-09-03):

**51 clicks · 2,893 impressions · 1.76% CTR · average position 54.6**

Three findings worth recording, because they contradict assumptions the
on-page work has been running on:

1. **One query has clicks.** `accounstone` — 15 clicks at position 1. Every
   other named query returned zero. The remaining 36 clicks sit in queries
   Google anonymises and does not return through the API.
2. **There are no CTR quick wins, because almost nothing ranks.** Only 14
   queries sit in positions 6-20, totalling ~54 impressions; the largest is
   `us tax preparation outsourcing` at 17 impressions, position 19.6. Every
   high-impression query ranks 36-75. Rewriting titles cannot help a result on
   page 4 — this is a ranking problem, not a snippet problem.
3. **~788 impressions (27% of the site total) are MYOB product research** —
   "myob consultants", "myob consolidation software", "myob exo", "myob
   certified consultant", "myob implementation sydney". `/technology/myob` is
   pulling software-buyer traffic that will never convert, and it drags the
   site average position down while doing it.

The genuinely commercial cluster is tax-preparation outsourcing: roughly forty
query variants at positions 19-35, low impressions each but consistently the
closest thing on the site to page one.

### Content written against that data

Not retitling — new sections that answer the specific question behind the
query.

- **`/services/tax-preparation/united-states`** — three new sections. What
  outsourcing return preparation actually moves (and why it does not help if
  review is the bottleneck); **the IRC §7216 consent requirement**, which is
  the real answer to the query "outsourcing tax return preparation and its
  implications" and which nobody in this market writes down; and which returns
  and which tax software, with the honest note that we work in Drake Tax and
  CCH Axcess and that a different package depends on licence seats the firm can
  provide. Four FAQs added covering whether it is allowed, outsource-vs-hire,
  how a first season runs, and turnaround. The §7216 section explicitly routes
  the obligation to the firm and its own counsel rather than implying we carry
  it.
- **`/services/audit-support/united-states`** — answers "what is audit
  support" (29 impressions, position 60.7) directly, and separates the two
  different readers who search it: the company being audited and the audit firm.
  Restates the preparation-vs-judgment boundary under GAAS/PCAOB, ISAs and ASAs.
- **`/technology/myob`** — states plainly that Accounstone is not an MYOB
  partner, reseller, certified consultant or implementer, answers the software
  question and the Single Touch Payroll question honestly, and routes the
  reader to what we do do. This is the right answer for the 788 impressions
  even though most of it is "not us".
- **`/services/accounts-payable/united-states`** — what outsourced AP includes,
  and an explicit section on why payment release stays inside the client's own
  controls (101 impressions on "accounts payable outsourcing", position 65.4).
- **`/solutions/staff-augmentation`** — augmentation defined against a managed
  function and a dedicated team, plus when augmentation is the wrong answer.
  Notes that "finance staff augmentation" searchers often want something we do
  not offer, and says so rather than implying otherwise.
- **`/solutions/back-office-support`** — reframed for accounting firms, which
  is how the demand is actually phrased ("back-office support for accountants",
  39 impressions). Title was the bare label "Back Office Support".
- **`/solutions/dedicated-accounting-teams`** — what "dedicated" guarantees and
  what it does not. This page holds position 11.3, the best non-brand position
  on the site.

Metadata updated on those pages to match query language, not internal naming.

### The inquiry form is now on 81 of 84 pages

Was 51. Added to the 30 remaining content pages. `/contact` is excluded (it is
the form), and `/privacy` and `/terms` are excluded on the owner's call.

`ArticleLayout` now renders the band, which covers the 6 blog posts, 11 guides
and 2 insights in one place — each passing its own `inquiryTitle` and
`inquiryLead`, because the 2026-08-14 rollout showed what identical copy on
forty pages does to near-duplicate scores. The other 11 pages pass their own
copy for the same reason.

### Cards that used to be dead ends now open the form

New `components/inquiry-modal.tsx` (mounted once in `app/layout.tsx`) and
`components/inquiry-trigger.tsx`. Roughly 60 card-render sites across the site
— service scope cards, workstream cards, technology situation cards, market
compliance and trust cards, industry benefit cards, solutions step cards,
`FeatureCard` with no `href` — now open the enquiry form in a dialog over the
page.

Two implementation notes worth keeping:

- **It is a dialog, not an anchor.** The owner's requirement was that the form
  appear without moving the reader. Verified: page `scrollY` is identical
  before opening, while open, and after closing, at 1280x900 and 390x740. Both
  the open focus and the focus restore use `preventScroll` — without it, the
  restore scrolled the page ~340px on close.
- **The trigger is an overlay button, not a wrapper.** These cards contain
  headings and lists, which are flow content and invalid inside `<button>`, and
  a screen reader flattens anything a button does contain into one accessible
  name. The card keeps its own markup; a transparent `absolute inset-0` button
  carries the click and the name.

The dialog deliberately avoids `id="inquiry"` and `id="inquiry-heading"` (the
band owns those; exactly one per page) and its form is namespaced
`formId="modal"` so field ids cannot collide with the band's. Verified with the
dialog open: zero duplicate ids on the page, one `#inquiry`.

### Fixed while sweeping

`/delivery-framework/communication` overflowed horizontally at 320px and 375px
— the card's inner text block is a flex item, and `min-width: auto` stopped it
shrinking below its longest word inside a two-column grid. Now
`w-full min-w-0 break-words`.

### Verification

`pnpm eslint .` silent. `pnpm next build` clean, 90/90 static pages. Sitemap
parity holds at 84 ↔ 84 with nothing in either direction of the drift check.
Playwright across all 84 routes at 320/375/768/1024/1440px: zero horizontal
overflow, zero tap targets under 24px.

Near-duplicate re-measured after the band went onto 30 more pages (6-gram
Jaccard over rendered text, all 84 pages):

- Worst pair across the 21 commercial Service × Region pages: **15.1%**
  (`accounts-receivable/australia` vs `accounts-receivable/united-kingdom`),
  down from 16.6%; median across that set 4.4%.
- `/technology/quickbooks` vs `/technology/xero`: 17.2%, effectively unchanged
  from the 17.3% recorded on 2026-08-28.
- Only one pair site-wide sits above 25%: **`/resources` vs
  `/resources/guides` at 30.0%**. This is **pre-existing and not caused by the
  band** — measured with the band's text stripped it is 29.6%. Both hubs list
  the same guide titles and descriptions. Resolving it means restructuring what
  the Resources hub repeats from its child, which is a content decision for the
  owner rather than a side effect of this pass.

### Still open

- The 7 service redirects all point at the United States page (CLAUDE.md open
  item 3), chosen without data. There is now data, but not enough on those
  specific URLs to justify changing any of them yet. Worth re-checking once
  impressions accumulate.
- Blog posts pass `slug="../../../blog/<slug>"` to `ArticleLayout`, which is a
  workaround for a component that assumes `/resources/{section}/`. It produces
  a traversal path in the article schema URL and breadcrumbs that read
  "Resources > Guides" for a `/blog/` URL. Pre-existing, not touched here, but
  it is a real defect and should be fixed properly rather than patched again.
- Analytics is still not installed (CLAUDE.md open item 1). None of the
  conversion work above is measurable until it is.

## 2026-08-28 (drop the software field from the inquiry form)

The owner confirmed the region-specific inquiry is working in production, and
removed the "Which software do you work in?" select. One fewer field between a
visitor and a submitted enquiry, on a form whose only job is lead capture; the
platform conversation belongs in the reply, not the form.

Removed from the field list, the Web3Forms payload (`software`), the mailto
fallback body, and the per-region platform lists. The rest of the region
tailoring is untouched — field labels, email and phone placeholders, the
assurances, the business-hours line, and the region carried into the subject
and payload for routing.

Re-tested end to end against a stubbed Web3Forms: from
`/services/bookkeeping/united-kingdom` the payload still carries
`service_interest: "Bookkeeping"`, `region: "United Kingdom"`,
`page: "/services/bookkeeping/united-kingdom"` and a region-tagged subject,
with no `software` key. UK labels and placeholders intact.

Duplication was re-measured because the platform lists had been carrying
region-distinct tokens (Xero/Sage/IRIS vs QuickBooks/Drake/CCH) that helped
separate the region pages. Removing them moved nothing meaningfully: worst
site pair unchanged at 17.3%, markets against each other 16.1% / 9.7% / 8.9%,
market-vs-own-services 6.4% / 8.2% / 6.4%.

84 routes all 200, 0 duplicate titles or `h1`s, 0 broken links, 0 links to
redirects, 0 orphans, Playwright clean at 320-1440px.

**URL changed:** No. **Metadata changed:** No. **Content changed:** the inquiry
form on 51 pages plus `/contact`.

## 2026-08-28 (an inquiry form on every commercial page, region-specific)

The owner's correction to the pass above: consultations and calls are always
free, and that is the lead source. The free-consultation language is back on
`/contact`, and every commercial page now carries a form rather than a link to
one.

**51 pages.** `components/inquiry-form.tsx` plus `components/inquiry-section.tsx`,
inserted before the `CTABanner` on every service, market, solution, industry
and technology page, the four hubs and the homepage. Not on legal pages, not on
Resources articles, and not on `/contact`, which is the form.

**Region-specific, not one form repeated.** On a region page the band changes
its field labels ("Practice name" in the UK, "Firm name" elsewhere), its email
and phone placeholders, its software list — Xero/Sage/IRIS for the UK,
QuickBooks/Drake/CCH for the US, Xero/MYOB/Reckon for Australia — its
assurances, and its business-hours line. The region also travels into the
Web3Forms subject and payload, so an enquiry arrives already routed. Service ×
Region pages pre-select their own service; every page records its own path.

Verified end to end in a browser against a stubbed Web3Forms. From
`/services/bookkeeping/united-kingdom` the payload carried
`service_interest: "Bookkeeping"`, `region: "United Kingdom"`,
`software: "Xero"`, `page: "/services/bookkeeping/united-kingdom"` and the
subject `"United Kingdom enquiry from …"`. The blocked path still keeps the
visitor on the page with their input intact.

**The duplication this created, and the fix.** Putting the same band on 45
pages is exactly the kind of change that quietly undoes a restructure. The
first pass pushed `/technology/quickbooks` vs `/technology/xero` from 12.0% to
**22.8%**, and clustered the six industry pages around 20%. Two changes brought
it back: every non-region page passes its own `title` and `lead`, and thin
pages pass `compact`, which drops the shared assurances and contact block.

```
worst new pair   22.8% -> 17.3%   (industries/professional-services vs technology)
technology pair  22.8% -> 17.2%
markets vs each other   US-UK 16.2%, US-AU 9.8%, UK-AU 9.1%
market vs own services  7.0% / 8.7% / 6.9%  (boundary intact)
still only one pair above 25%: /resources vs /resources/guides at 28.3%,
which predates all of this and is structural — both list the same guides
```

84 routes all 200, sitemap parity 84 ↔ 84, 0 duplicate titles or `h1`s (the
band uses `h2`), 0 broken links, 0 links to redirects, 0 orphans, exactly one
`#inquiry` per page, and Playwright clean at 320-1440px with every new field
above the 24px tap target.

**URL changed:** No. **Metadata changed:** No. **Content changed:** 51 pages
gain an inquiry band; `/contact` regains its free-consultation copy.

## 2026-08-28 (no price positioning; no competitor framing)

Two owner directives, one pass.

### Price

**The rule, as the owner set it:** market-rate education in the Resources
guides is fine; Accounstone competing on an exact price is not. So every
statement about what Accounstone charges is gone, and the guides are untouched.

Removed: the "How is pricing determined?" FAQ from the homepage and `/services`
(now "How is an engagement scoped?"), the whole "What is included in the
pricing? / transparent and fixed-fee / No hidden costs or surprise fees" FAQ
from `/solutions/back-office-support`, "Meaningfully reduce operational
overhead vs. in-house staffing", "makes the arrangement cheaper over time",
"Scale Your Operations Affordably", "at a cost-effective rate",
"Cost-Effective Without Compromising Quality", "at a fraction of the cost",
the cost-comparison FAQ on `/solutions/offshore-accounting-support`, "Ongoing,
fixed-fee based on transaction volume and function mix" from the engagement-model
table, "expect two line items" from the services guide, and "Free
consultation" / "Schedule Free Consultation" / "Free initial consultation" from
`/contact` — free is still a price.

Kept deliberately: idiomatic cost-of-error language ("trivial to fix in the
fall and expensive to chase in January", "cheap early and expensive later").
That describes the cost of doing the work badly, not what Accounstone charges.
Also kept: early-payment discounts and invoice discounting in the AR material,
which are accounting concepts, and "allocating transaction price", which is
ASC 606 wording.

Verified across every commercial page — homepage, `/services`, all four
`/solutions`, all three markets, `/contact`, `/about`, `/resources`,
technology — that no pricing term survives in rendered page text. Nowhere does
the site say what Accounstone charges.

### Competitors

The owner's framing: the competition is Accounstone's own thinking and system,
not other suppliers. Three market pages ended a boundary argument by warning
about what a rival would do — "a supplier who blurs that line is offering you a
competitor with a copy of your client list". Each now states Accounstone's own
operating model instead: no client-facing contact without instruction, no
credential that would allow acting in the firm's name, every file returned for
review.

The payroll banking-control passages made the same move ("worth questioning,
whoever is offering it") and now read as a design choice: the workflow is built
so it never needs banking control, which is why the question does not arise.

The provider-comparison guide lost "a cheap provider that creates rework costs
more than an expensive one" — the point stands without the price comparison,
and it reads as advice rather than a swipe.

**Fixed while in `/contact`:** the hero still said "Let's Talk About Your
Business" to what is now a firm audience.

Verified: 84 routes all 200, 0 duplicate titles or `h1`s, 0 broken links, 0
links to redirects, 0 orphans, Playwright clean at 320-1440px.

**URL changed:** No. **Metadata changed:** `/solutions/offshore-accounting-support`
description. **Content changed:** homepage, `/services`, three `/solutions`
pages, three market pages, `/contact`, two guides, `lib/regional-context.ts`.

## 2026-08-28 (audience wording: "businesses" out of the reader-facing copy)

Follow-on from the repositioning above. With all three markets now addressing
firms, the site was still calling its reader a business in the places that
matter most.

**The distinction that governed every edit.** "Business" appears in two
completely different roles, and a blanket replacement would have wrecked the
second:

1. *The reader* — "accounting support for businesses", "your business", the CTA
   copy. Changed.
2. *The client's clients* — the industry pages, the three US state pages, and
   the guides explaining what a business does. Left alone. An accounting firm
   serving e-commerce clients still needs a page about e-commerce businesses;
   "e-commerce firms" would have meant something else entirely.

Changed: the homepage `h1` and meta description, the delivery-diagram node label
("Your Business" → "Your Firm"), `lib/data.ts` region and platform descriptions,
the Organization schema description, the `/services` hub intro, all four
`/solutions` pages, `/technology/myob`, and eleven Service × Region FAQ answers
that still said "your business" to what is now a firm audience.

Region descriptions now use each market's own word: CPA firms for the US,
accountancy practices for the UK, accounting firms for Australia.

**The homepage `h1` changed and the `<title>` did not.** The title the owner
specified verbatim — `Accounting, Bookkeeping, Tax & Payroll Outsourcing
Services` — carries no audience word, so it is untouched. The `h1` moved from
"...for CPA Firms and Businesses" to "...for CPA Firms and Accounting
Practices", keeping "CPA firms" as the strongest US term while covering the UK
and Australian audiences.

**The meta description was also owner-specified, and this changes it.** It read
"...for CPA firms and businesses. Expand your accounting capacity with
Accounstone." and now reads "...for CPA firms and accounting practices. Expand
your firm's capacity with Accounstone." Flagged rather than done silently.

**Two pre-existing overclaims fixed while in `/solutions/dedicated-accounting-teams`:**
an FAQ still quoted team sizes ("1-2 professionals for smaller businesses to 10+
for larger enterprises") — `identity.md` says team size is not on file and must
be asked for, not estimated — and another claimed the team handles "all
accounting and financial operations", which is both an absolute and a drift
toward financial services.

**Not changed, deliberately:** `knowledge/company/identity.md` still records the
ICP as CPA firms and growing businesses. Only a human may edit that file, and
the marketing focus narrowing is not the same as the company's stated ICP
changing. If the ICP itself has changed, that is an owner edit.

Verified: 84 routes all 200, sitemap parity 84 ↔ 84, 0 duplicate titles,
canonicals or `h1`s, 0 broken links, 0 links to redirects, 0 orphans, duplication
unchanged (worst market pair 14.2%), Playwright clean at 320-1440px.

**URL changed:** No. **Metadata changed:** homepage description, staff
augmentation title, region descriptions. **Content changed:** homepage,
`/services`, four `/solutions` pages, eleven service-page FAQs,
`/technology/myob`.

## 2026-08-28 (US and Australia repositioned for firms, matching the UK pass)

The UK pass on 2026-08-28 moved that market from "outsourced accounting services
for businesses" to "your practice's offshore accounting team". This applies the
same move to the United States and Australia, at the owner's request.

**Six surfaces per market, mirroring the UK:**

- `/markets/united-states` rebuilt for **CPA firms**: three packages, the U.S.
  filing calendar (31 January, 15 March, 15 April, quarterlies, extension
  season, state by state), a prepared/retained split, and the six trust
  sections — engagement start, internal review, what happens when a client's
  records are incomplete, data security, turnaround, named contact.
- `/markets/australia` rebuilt for **accounting firms**: BAS quarters, STP pay
  events, superannuation cut-offs, 31 March FBT, year-end, the lodgment
  program.
- US and AU **bookkeeping, tax preparation and payroll** pages re-titled and
  re-framed to address a firm rather than a business.
- `lib/regional-context.ts` US and AU narrative for those three services moved
  from "your business" to "your firm" and "a client's employee".
- The homepage's UK-only section became a **three-region block**. Leaving the US
  and Australia out of it read as though the offer applied to one market.

**Terminology is per-market and deliberate.** CPA firms in the US, accountancy
practices in the UK, accounting firms in Australia. Using the wrong word is the
fastest way to signal the copy was not written for that market. Verified that no
market page's copy carries another market's term.

**The boundary leads rather than sits in a footer.** We do not hold an EFIN and
do not sign or e-file (US); income tax lodgment belongs to a registered tax agent
and BAS lodgment to a registered BAS agent, and we hold no ATO portal access
(AU). For this audience that is the reason the arrangement is safe to enter, not
a disclaimer.

Measured after:

```
market pages vs each other      US-UK 14.2%, US-AU 7.5%, UK-AU 6.9%
market vs own service pages     1.4% / 3.6% / 1.8%  (boundary intact)
worst pair among the three      19.7% -> 7.5% after differentiating the AU page
84 routes all 200, sitemap parity 84 <-> 84
0 duplicate titles, canonicals or h1s; 0 broken links; 0 links to
redirects; 0 orphans; 0 images missing alt
Playwright 20 pages x 7 widths: no overflow, no sub-24px tap target
```

No pricing, client names, measured outcomes, SOC 2 claim, team size, FCA or ASIC
reference anywhere in the new copy. No claim of IRS representation, ATO lodgment,
tax planning, or software implementation.

**One judgement call worth the owner's eye:** the Australian pages name Division
7A loan schedules as something maintained. That is record-keeping, and the
decisions are explicitly kept with the firm — but Division 7A is a
tax-technical area, so if you would rather not name it at all, it is two lines
to remove.

**Pre-existing, not from this pass:** `/resources` and `/resources/guides`
measure 28.3% against each other. Both list the same guides, so the overlap is
structural rather than written. Worth a look if the Resources hub is ever
revisited.

**URL changed:** No. **Metadata changed:** 8 pages. **Content changed:**
`/markets/united-states`, `/markets/australia`, six US/AU service pages, the
homepage.

## 2026-08-28 (contact form: submit from the browser, because Cloudflare)

The form now sends the enquiry and shows the result on the page. No redirect,
no mail client, unless the send genuinely fails.

**Root cause.** The server-side design could not have worked. Web3Forms sits
behind Cloudflare, which answers a server-side call with a JS challenge. Every
submission failed as `Web3Forms rejected submission 403 null` - which reads as a
rejected key and is not one. Capturing the response body showed Cloudflare's
`Just a moment...` interstitial: the request never reached Web3Forms. A probe
with a *deliberately invalid* key got the identical page, proving the key was
never involved. Browser `User-Agent`, `Origin` and `Referer` headers did not
help and cannot - what is fingerprinted is the TLS handshake.

**The fix.** The browser submits, which clears the challenge, and fetches the
key from `/api/contact/key` at submit time. The key is therefore public - which
is how Web3Forms is designed, their docs put it in client HTML - but it still
never enters this public repo or the static bundle, and rotating it in Vercel
takes effect without a redeploy. `NEXT_PUBLIC_` would have lost that.

`app/api/contact/route.ts` is now diagnosis only, kept because the Hobby plan
holds runtime logs for one hour and a failed submission otherwise leaves no
trace: `GET /api/contact` reports configuration, `?probe=1` distinguishes a WAF
block from a bad key and sends no mail.

Verified in a browser against a stubbed Web3Forms, both paths: on success the
page stays put, the form clears and confirms; on failure the page stays put,
every field is preserved and an email is *offered* as a button. The full payload
was checked on the wire - name, email, company, phone, service interest, message
and the honeypot.

**Outstanding for the owner:** turn on domain restriction for the key in the
Web3Forms dashboard. That is the control that makes a public key safe, and it
cannot be set from the repo.

**URL changed:** No. **Metadata changed:** No. **Content changed:** No.

## 2026-08-28 (contact form: diagnose why it falls back to the mail client)

The owner reported the form behaving as a mailto link: fill it in, press send,
and your mail client opens with the message as homework. That is the fallback
path in `app/contact/page.tsx` firing, which means `/api/contact` returned 503
(no access key) or 502 (Web3Forms refused). Vercel runtime logs held no
`/api/contact` invocation at all in the last 24h, so they could not distinguish
the two — on a site this new the logs age out before anyone submits.

Three changes:

1. **`GET /api/contact` is now a health check.** It reports `configured`,
   `keyPresent` and `keyWellFormed` and never the key itself. Without it there
   is no way to tell an unset environment variable from a provider outage
   without submitting the live form and catching the log before it ages out.
2. **The key is normalised and shape-checked.** `WEB3FORMS_ACCESS_KEY` is
   trimmed and stripped of surrounding quotes before use, and validated as a
   UUID. A value pasted from the Web3Forms dashboard with a trailing newline or
   wrapping quotes now works instead of silently failing upstream. The failure
   log also carries the provider's full response rather than one field of it.
3. **The fallback offers, it no longer hijacks.** On 502/503 the page used to
   navigate straight to `mailto:` — which is exactly the behaviour that read as
   "this is not a real form". It now says the send failed, keeps what was typed,
   and offers a *Send by email instead* button the visitor can choose.

**Fixed while testing:** `message` was optional in the form and required by the
API, so an empty message produced a 400 for a field the form never marked
required. It is `required` now.

**URL changed:** No. **Metadata changed:** No. **Content changed:** `/contact`
error state.

## 2026-08-28 (About page rewrite; favicon un-cropped)

### About page

`/about` rewritten from copy supplied by the owner: an opening on milestones,
support areas, people and shared knowledge, technology, four engagement models,
a transparency section, data security and working environments, reach across the
three markets, the founder story, and a closing "More Milestones. More
Possibilities."

Two editorial decisions on top of the supplied copy:

- The "areas we may support" and "technology we may work with" lists render as
  real internal links (to `/services/*/united-states`, `/solutions/*`,
  `/technology/*`) rather than plain text, so the page contributes to the link
  graph instead of being a dead end. "Working Across Borders" links the three
  `/markets/*` pages with their flags.
- The page's hedged register ("may", "can", "is being built") is the owner's own
  and was kept. It reads carefully rather than confidently, which is the correct
  side to err on given `scope-boundaries.md`.

Title was shipping as `About Accounstone | Accounstone` — the layout template
appends the brand to a title that already carried it. Now absolute:
`About Accounstone | Outsourced Accounting Support Team`.

Measured: 1,290 words, one `h1`, canonical present, Organization + AboutPage +
BreadcrumbList schema intact, 0.2% worst 5-gram overlap against all 83 other
routes, no banned phrase or scope-boundary claim.

**Two items for the owner, not resolved here:**

1. The support list includes **financial reporting**.
   `knowledge/company/identity.md` still records that as "Needs decision"
   (conflicts with scope boundary §1 as a *service-line name*). It is published
   here as a support area linking to `/services/accounting/united-states`, not as
   a named service line, which stays inside the boundary — but `identity.md` is
   human-edit-only and still says undecided.
2. The **Microsoft Azure virtual desktop** claim is an owner assertion about
   Accounstone's own infrastructure. Nothing in `knowledge/` corroborates it; it
   is published on the owner's authority.

### Favicon

The icon set had been tiered: 16 and 32 used a tighter 24% inset crop on the
theory that the mark's two outer frames collapse into noise at small sizes. What
it actually did was clip the S and the foot of the A — and that clipped version
is what Google was serving in search results.

Every size is now rendered from one uncropped square: the mark's ink box
(x 48-284, y 43-253 of `accounstone-logo-horizontal.png`) centred at 84% of a
white square. `favicon.ico` (16/32/48), `icon-16x16`, `icon-32x32`,
`apple-touch-icon` (180), `icon-192`, `icon-512`, and `icon-maskable-512` (mark
at 55% so a circular OS mask cannot clip it). 16px is softer than the old crop;
the mark is whole, which is the trade that matters in a SERP.

Google re-crawls favicons on its own schedule — expect days, not hours, before
search results update.

**URL changed:** No. **Metadata changed:** `/about` title. **Content changed:**
`/about`.

## 2026-08-27 (design pass: type system, Resources, tap targets)

Visual and accessibility work, no architecture change.

### Typography

The brand defined `--font-serif` (Georgia) and nothing used it. Display and
section headings are now serif, body and UI stay sans - 165 headings across 47
files plus both hero components. No new colours or fonts were introduced; this
is the existing palette applied with more intent.

### Resources

`lib/resources.ts` became the single source of truth for guides, insights and
blog articles, each carrying factual topic and region classifications. Counts
and the topic index on the hub derive from it, so they cannot drift from the
content.

The hub gained a stat strip, a featured "start here" guide, section cards with
counts, a latest-guides list, and a topic index where each topic links through
to the service page that work sits behind. Guides and insights share a
`ResourceCard` with topic and region chips and an accent rail that carries
hierarchy. Case studies became numbered scenarios with a Situation / Approach /
Outcome rail, and the "illustrative, not real client work" disclaimer is now a
visible notice rather than a line inside the intro paragraph.

Listings stay one per row - these titles run 60-90 characters and wrap badly at
half width, which `CLAUDE.md` already records.

### Tap targets - the substantive finding

A Playwright sweep across 20 pages x 7 widths found **73 links below the WCAG
2.5.8 24px minimum**: 65 breadcrumb links, 8 more with no className at all, the
`/services` industry and technology lists, and the contact page's email and
phone - the page's primary conversion targets - at 19px.

WCAG 2.5.8 exempts links inline in a sentence. None of these qualified: they
are navigation, lists and contact details. All are now at least 24px. One of
them was introduced by the previous content pass and had quietly broken the
"homepage has no tap target under the minimum" invariant recorded in
`CLAUDE.md`.

This is worth recording as a method note: the previous responsive work was
verified by screenshot, which is why 73 undersized targets survived it. Sizes
have to be measured.

### Verification

Playwright across 320, 375, 390, 768, 1024, 1280 and 1440px on 20 pages: no
horizontal overflow, nothing outside the viewport, no tap target under 24px.
Crawl after: 84 routes all 200, 0 broken internal links, 0 links to redirects,
0 orphans, no duplicate titles or H1s. `pnpm eslint .` silent; build clean.

## 2026-08-27 (content pass: region-specific narrative on the commercial pages)

Follow-up to the restructure. The 21 Service x Region pages were
architecturally correct but read as feature inventories - scope checklists,
delegated/retained lists and numbered steps, with very little prose. The
guide asks for the opposite.

### What was added

One narrative section per page (`lib/regional-context.ts`, rendered by
`components/regional-context.tsx`), written against the content-psychology
principles in `AI-WEBSITE-GUIDE.md`: name the reader's situation (4),
operational specificity as proof of understanding (5), the hidden cost of
review (2), respect the buyer's control (3), and say what happens when
information is missing (1).

It sits before the mechanics section, so the page leads with the reader's
problem rather than with a list of what is included.

Each entry is genuinely regional. A sample:

| Page | Angle |
|---|---|
| bookkeeping/US | The suspense account the reviewer unpicks every month |
| bookkeeping/UK | Why MTD raised the cost of ordinary ledger drift |
| bookkeeping/AU | GST coding errors that only surface at lodgment |
| payroll/US | A remote hire creating a registration obligation nobody noticed |
| payroll/UK | RTI removing the room to fix it later |
| payroll/AU | Superannuation calculated on gross instead of ordinary time earnings |
| AP/UK | Approval as the step everything waits on |
| AR/UK | Credit control being nobody's actual job |
| AR/AU | Receivables and the BAS as the same problem |
| audit/AU | The audit request list arriving with the June BAS |

Every entry carries an aside naming a boundary or a decision that stays with
the client - payment authority, worker classification, lodgment, credit
decisions - because that is the objection these pages have to answer.

### Two entries were rewritten after measuring

`accounts-receivable/united-kingdom` repeated its own ServiceDepth section at
**22.1%** - statutory interest and VAT bad debt relief appeared twice on the
same page, in near-identical wording. `accounts-payable/united-kingdom` was
conceptually duplicative at 9.1% (both sections led on VAT invoice validity).
Both were rewritten onto ground nothing else on the page covers: ownership and
customer relationship for AR, intake and approval flow for AP. Worst
intra-page repetition is now 7.0%.

This is worth recording as a method note: cross-page duplication was being
measured throughout the restructure, but **duplication within a single page**
was not, and it is the failure mode that adding content to already-built pages
actually produces.

### Measured

| | Before | After |
|---|---|---|
| Page depth | 623-1001w | 855-1293w |
| Worst cross-page pair | 16.6% | 13.6% |
| Pairs above 25% | 0 | 0 |
| Worst intra-page repetition | 22.1% | 7.0% |

Cross-page duplication *fell*, because the new prose is regional enough to
dilute shared vocabulary rather than add to it.

### Tone and scope checks

No banned phrases from the guide's "Human tone" list. No absolutes
("full compliance", "guaranteed", "we ensure"). Every occurrence of tax
planning, CFO, advisory or representation across the new content is an
explicit disclaimer, not a claim. All regional facts trace to
`knowledge/markets/{us,uk,au}.md`.

84 routes all 200, 0 broken internal links, 0 links to redirects, 0 orphans,
no duplicate titles or H1s. `pnpm eslint .` silent; `pnpm next build` clean.

## 2026-08-27 (region-first services restructure)

Full crawl of all 89 routes, then a restructure to a region-first commercial
architecture. Audit delivered before any change was made.

### The finding that reframed the work

A Service x Region layer already existed — this was a completion and a
re-pointing of authority, not a greenfield build. Three measured facts drove
every decision:

1. **The navbar contributed zero crawlable links.** Dropdown contents render
   only when `isOpen` is true, and parent items with children render as
   `<button>`, not `<a>`. Nothing from the navbar appears in server HTML.
   `/technology` and `/blog` had **0** inbound links sitewide as a result.
2. **The footer was the real crawl skeleton, pointing at the wrong layer.** It
   linked all 7 generic service pages and 0 of the 19 Service x Region pages.
3. **Authority was inverted.** Generic pages held 600-1301 words with zero
   editorial inbound links; the regional pages held the commercial intent at
   484-758 words. The site was arguing with itself.

### Changes

**Completed the matrix.** Added `/services/accounting/united-kingdom` and
`/services/accounting/australia`. The navbar had been silently falling back to
the generic page for those two regions. Now 7 services x 3 regions = 21 pages.

**Retired the generic layer.** Content merged into the regional pages first
(`lib/service-depth.ts`), all 68 internal links repointed, 19 breadcrumb schemas
collapsed so structured data no longer declares a redirected URL, then the page
files removed and 301s added. Order mattered: nothing redirected until its
target held the content.

**Rebuilt `/services`** as the core authority page — H1 "Accounting & Finance
Services", overview, then US / UK / AU sections with real introductory copy and
region-specific service descriptions, plus how-we-work, industries, technology,
compliance, resources, FAQ and CTA.

**Rewrote the three Market pages** as broad regional authority. They previously
shared a rigid template and carried almost no regional substance — no HMRC, VAT
or MTD on the UK page; no ATO, GST or BAS on the Australian one.

**Fixed a 52.6% duplicate pair.** `/services/audit-support/united-kingdom` and
`/services/audit-support/australia` were the same page with the country
adjective swapped.

**Navigation.** Services dropdown is region-first and every entry resolves to a
real page. Markets removed from the primary navbar (pages preserved, indexable,
now linked contextually and from the footer). Compliance promoted. The footer
was rebuilt as the crawl skeleton.

**Homepage.** Title set to `Accounting, Bookkeeping, Tax & Payroll Outsourcing
Services` with no brand suffix — this required an `absoluteTitle` option in
`lib/seo.ts` to opt out of the `"%s | Accounstone"` template. Description set
per brief. The `sr-only` H1 was `"... for CPA Firms | Accounstone"`; the
pipe-and-brand construction is a title-tag artifact that reads badly aloud, so
it is now `Outsourced Accounting, Bookkeeping, Tax and Payroll for CPA Firms and
Businesses`. Homepage service cards were building `/services/{slug}` from
`lib/data.ts` — all 7 became redirects, on the highest-authority page — and now
point at the US regional pages.

**Five double-suffixed titles fixed** (`"... | Accounstone | Accounstone"`), and
`components/service-page-template.tsx` deleted as dead code.

### The sitemap drift trap, again

`app/sitemap.ts` generated the 7 generic URLs from a `services.map()` loop.
Removing them required **changing the loop, not deleting lines** — exactly the
failure mode `CLAUDE.md` documents. The loop now emits `serviceRegionPaths`.

### Measured before → after

| | Before | After |
|---|---|---|
| Routes | 89 | 84 |
| Sitemap parity | 89 ↔ 89 | 84 ↔ 84 |
| Worst duplicate pair | 52.6% | 16.6% |
| Pairs above 25% | 3 | 0 |
| Crawlable links per page | 36 | 58 |
| Service x Region pages in footer | 0 | 21 |
| Orphan pages | 2 (`/technology`, `/blog`) | 0 |
| Market page depth | 594-627w | 1127-1223w |
| Market vs Service x Region overlap | 0.1% | 0.0% |
| Internal links to redirects | — | 0 |
| Broken internal links | 0 | 0 |

All 84 routes return 200. Zero duplicate titles, zero duplicate H1s, exactly one
H1 per page, zero accidental `noindex`, zero canonical mismatches, every image
has `alt`. `pnpm eslint .` silent; `pnpm next build` clean.

### Regulatory guardrails held

ASIC is **not** cited on the Australian pages. The brief listed it, but
`knowledge/markets/au.md` records it as a financial-services regulator that was
already found live on the Compliance page and removed once. FCA is likewise
absent from UK copy. CFO Support was specified in the brief as an eighth service
in all three regions; `CLAUDE.md` and `scope-boundaries.md` forbid it and record
that `/services/cfo-support` "never existed — do not recreate it". Confirmed with
the owner and excluded; both CFO and HR are planned for a future pass.

### Not done — needs the owner

- **Analytics and Search Console are still absent.** No GA4, GTM or Vercel
  Analytics tag exists anywhere. Until at least GA4 and GSC are connected, none
  of this restructure is measurable, and the redirect decision below cannot be
  validated.
- **The 7 redirects target the United States page.** That was the owner's
  decision ("merge content down, then redirect"), taken without traffic data
  because none was obtainable — Ahrefs returns `Insufficient plan` and Semrush
  reports insufficient API units. If GSC later shows non-US demand on those
  URLs, each redirect is one independently reversible line in `next.config.mjs`.
- **Email authentication (SPF/DKIM/DMARC) was not verified.** These are DNS
  records, not repository files, and production DNS is unreachable from the
  sandbox. No DNS was modified.
- **Content gaps remain** for UK tax/VAT/MTD, AU BAS/GST, and UK/AU payroll
  resources. Each has a commercial page to support and no article yet.


## 2026-08-21 (finalization pass: full-site technical verification + 6 unlisted sitemap URLs)

End-of-engagement verification sweep across all 89 routes, checking the things that quietly break rather than re-reading copy. Everything passed except one real finding.

### `app/sitemap.ts` — six indexable pages were never declared for crawling

**Changed:** Added `/resources/guides/outsourced-accounting-services-guide`, `/resources/guides/outsourced-payroll-processing-guide`, `/resources/guides/outsourced-accounts-payable-guide`, `/resources/guides/outsourced-accounts-receivable-guide`, plus `/privacy` and `/terms`.  
**Why:** The four guides shipped 2026-08-14 and were internally linked but never added to the sitemap, so they were crawlable only by link discovery. The accounting-services guide is the most consequential of the four — it is the 301 target for the retired `/blog/outsourced-accounting-services` URL, so the destination of a permanent redirect was itself unlisted. `/privacy` and `/terms` are indexable and footer-linked exactly like `/compliance` and `/data-security`, which were already listed; excluding only those two was an inconsistency rather than a decision.  
**How it was missed until now:** `app/sitemap.ts` mixes hardcoded `path:` entries with URLs auto-generated from `lib/data.ts`, so grepping the source undercounts by ~30 URLs and looks fine. The check only works against the *generated* `/sitemap.xml`. That method is now documented in `docs/ROUTES.md` so it is reproducible.  
**Result:** 89 page files ↔ 89 sitemap URLs, exact parity in both directions.

### Verification performed (all clean, no changes needed)

- **Every route responds:** all 89 return HTTP 200 — no broken or orphaned routes.
- **Internal links:** crawled all 89 pages, extracted 87 unique internal link targets, every one resolves to a real page. Zero dead links — the failure mode that previously produced 15 of them here.
- **Metadata integrity across all 89 pages:** 0 duplicate `<title>`, 0 duplicate canonicals, 0 missing title/description/canonical, 0 pages without an `<h1>`, 0 pages with multiple `<h1>`s, 0 accidental `noindex`.
- **Redirect:** the retired blog URL still resolves 308 → the guide.
- **Registry accuracy:** `docs/ROUTES.md` said 85 routes against an actual 89; corrected to the measured figure.

**URL changed:** No. **Metadata changed:** No. **Content changed:** No (sitemap declarations and docs only).  
**Verified:** `next build` and `eslint .` both pass.

## 2026-08-21 (responsive audit: unreachable tablet nav + CTA, tap targets, footer overflow)

Ran an instrumented responsive audit (not a visual skim) across 320/360/375/390/768/820/1024/1280/1440px, measuring horizontal overflow, tap-target sizes against WCAG 2.5.8 AA, and per-element clipping. Found one significant bug and two real accessibility issues.

### `components/navbar.tsx` — the significant one: primary CTA unreachable on iPad portrait

**Changed:** The desktop nav switched on at `md:` (768px), but the seven nav items plus the logo and CTA need ~963px. At 768px — iPad portrait, the most common tablet width — "Resources", "About", and the **"Get Started" button** were pushed past the viewport edge. Because `html` sets `overflow-x: clip`, the page could not scroll to reach them: the primary conversion CTA was simply invisible and untappable on tablets. Moved the desktop nav to `lg:` (1024px) so tablets get the mobile menu (which carries every link plus its own Get Started button), and grouped the CTA with the hamburger so `justify-between` keeps them together on the right instead of stranding the CTA mid-header. Also tightened the nav gap and logo padding at `lg:` only — at exactly 1024px the logo, nav, and CTA were touching with 0px between them; they now have 13px, and the CTA no longer wraps to two lines.  
**Why:** A conversion CTA that does not exist on tablets is a revenue bug, not a styling nit. Verified before and after by enumerating which header elements fell outside the viewport at each width, and confirming the page genuinely could not scroll to them.

### `components/footer.tsx` and `components/hero-carousel.tsx` — tap targets below the accessibility minimum

**Changed:** Footer navigation links rendered at 20px tall and the legal links (Privacy, Terms, Data Security, Compliance) at 14px — both under the 24×24px WCAG 2.5.8 AA minimum, and awkward to hit on a phone. Added vertical padding (28px and 26px respectively) and reduced the row gap to match, so the footer's overall height barely changes. The hero carousel's slide indicators were **3px tall** buttons; the button is now padded to 27px with the padding cancelled by a negative margin, so the hit area grows while the 3px bar stays visually identical and in the same position.  
**Result:** sub-24px interactive targets on the homepage went from 40+ to 0 (the one remaining is the `sr-only` skip link, correctly 1×1 until keyboard focus).

### `components/footer.tsx` — horizontal overflow traced and fixed

**Changed:** Every page reported a 4px horizontal overflow (`scrollWidth` 379 vs `clientWidth` 375). Traced it to the footer's wide uppercase `tracking-[0.14em]` section headings: "TECHNOLOGY" needed 180px inside a 152px column and was clipped at the viewport edge. Tightened tracking and size on mobile only, and dropped the footer nav to a single column below 375px, where no readable size of that word fits a 2-column grid. Breakpoint chosen by measurement, not assumption — 360px still clipped, 375px does not.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (layout/accessibility only, 3 components).  
**Verified:** Zero horizontal overflow and zero clipped headings at all nine widths; desktop dropdowns, tablet menu, and phone submenu all confirmed still functional after the header restructure. `next build` and `eslint .` both pass.

## 2026-08-21 (mobile UX sweep: every remaining single-column card grid on mobile)

User asked to find and convert any other card grids sitewide that were still stacking one-per-row on mobile, following the same pattern already fixed on the main Services/Solutions grids. Audited every `grid-cols-1 md:grid-cols-2` (and `md:grid-cols-3`) occurrence in the codebase and classified each by content, not just by class name — the same Tailwind classes are used for genuinely different layouts (short checklist cards vs. large "delegated vs. retained" 2-panel splits vs. sequential numbered process steps), so a blind find-and-replace would have broken several pages.

### Converted to 2-per-row on mobile (short-item card grids only)

**Changed:** `components/service-page-template.tsx` (benefits + deliverables grids — used by 7 pages via the shared template: `/services/accounting` and all 6 `/industries/*` pages), `components/industry-page-template.tsx` (benefits grid), the inline "benefits/preparation/support" checklist grids on all region-specific bookkeeping/tax-preparation/audit-support pages (9 files), the "elements" compliance-layer grids on all region-specific payroll/AP/AR/accounting pages (10 files), the "workflows" grids on all 7 technology pages, the 3 US state market pages' benefits grids, the Yardi/Texas industry page's benefits grid, the "Services for X Market" title-only link grids on all 3 market pages, both grids on the About page (2-card "Growing Team" row and 6-card "Why Choose Us" grid), the AR and Bookkeeping general-service pages' title+description info-box grids, the Quality Assurance page's two 4-item boxes (nested inside the existing 2-column QA Framework/Quality Standards split, which itself stays 1-column on mobile), and the Communication page's 6-item channel grid. Padding, icon/text size, and description line-clamp are tightened on mobile in each case, matching the earlier Services/Solutions fix; desktop is unchanged throughout.  
**Why:** Direct user request to extend the same fix everywhere it applied. Verified with Playwright screenshots across a representative sample (UK bookkeeping, Xero, Australia market, About, Quality Assurance, Communication) at 375×812 before shipping.

### Deliberately left alone (checked, not just skipped)

**Not changed:** "Delegated vs. retained" 2-panel splits (each panel holds 5-6 list items — halving the width would cram far too much into one column), numbered process-step timelines (sequential narrative content reads better top-to-bottom than in a 2-column zigzag), the 3-item "Common starting points" paragraph cards on technology pages (each already has full-paragraph content, a separate treatment from the short-item grids), and the Blog/Guides/Insights/Case-studies article listing cards — checked visually first: article titles run 60-90 characters and would wrap to 8+ lines at half-width, which is worse, not better.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (layout/typography only, ~35 files).  
**Verified:** `next build` (all routes) and `eslint .` both pass.

## 2026-08-21 (mobile UX follow-up: 2-per-row card grid)

Follow-up to the same-day card-density fix. User reviewed the shipped 1-per-row result and asked whether 2 cards per row was possible to fit more on screen. Prototyped it, found a real tradeoff (2-up cuts the description to ~1 line and, without care, truncates short titles mid-word), fixed the truncation, and shipped once it looked "systematic and organized" per the user's own bar rather than just technically fitting.

### `components/section-grid.tsx`, `components/feature-card.tsx`, `components/icon-badge.tsx`

**Changed:** Grid is `grid-cols-2` on mobile (was `grid-cols-1`), unchanged at `md:grid-cols-3`+. Card padding, icon size (`IconBadge`'s `md` size is now responsive: 40px on mobile, 56px from `sm:` up), title size, and description size/line-clamp are all tightened further on mobile only. Title no longer clamps with an ellipsis — a first pass did, and a 3-word service name mid-truncated to "Dedicated Accounti…", which reads as broken; titles now wrap fully with only a reserved minimum height for row alignment across cards. Description clamps to 2 lines on mobile (was 3 in the 1-per-row version), 3 lines at `sm:`, uncapped at `md:`+.  
**Why:** Direct user request, verified against the specific failure mode (title truncation) before shipping rather than shipping the first version that technically fit two columns.  
**Verified:** Playwright screenshots at 375×812 (iPhone SE — the narrowest common device) for `/services` and `/solutions`, plus a 1440px desktop screenshot confirming zero visual change above the `md:` breakpoint. `next build` and `eslint .` both pass.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (layout/typography only).

## 2026-08-21 (mobile UX: services/solutions cards were taking nearly a full screen each)

User-reported bug: on mobile (iOS/Android), browsing Services or Solutions felt like cards were "coming on one by one," each taking the whole screen, making it slow to check the full list. Verified with Playwright at a 390×844 mobile viewport before touching anything: on `/services`, each card measured ~385px tall against an 844px viewport — roughly 46% of the screen per card, so only ~1.3 cards were visible at once. Root cause: `FeatureCard` (shared by every `SectionGrid` usage — services, solutions, industries, technology, and markets grids, plus the homepage) rendered the full marketing-length `description` with generous padding and no height cap, which reads fine on desktop but is disproportionate on a narrow phone screen.

### `components/feature-card.tsx`, `components/section-grid.tsx`

**Changed:** Capped the description to 3 lines on mobile only (`line-clamp-3 md:line-clamp-none` — desktop still shows the full text, matching current behavior exactly), tightened card padding (`p-7 md:p-8` → `p-5 md:p-8`), title size (`text-xl` → `text-lg md:text-xl`), and internal spacing (`space-y-5` → `space-y-3 md:space-y-5`) on mobile, and reduced the grid gap between cards on mobile (`gap-6 md:gap-7` → `gap-4 md:gap-7`). Desktop values are unchanged throughout — this is a mobile-only fix.  
**Why:** This single shared component drives every service/solution/industry/technology/market card sitewide, so fixing it here fixes the complaint everywhere it occurs rather than patching one page.  
**Verified:** Re-measured with Playwright at the same 390×844 viewport after the change — card height dropped from ~385px to ~258px (about 2.5 cards now visible per screen instead of 1.3), full `/services` page height dropped from 6229px to 5462px. Also screenshotted `/solutions`, the homepage's services section, and a 1440px desktop view of `/services` to confirm desktop rendering is byte-for-byte the same (full description text, same 3-column layout, same card heights). `next build` and `eslint .` both pass.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (styling/layout only — same copy, no truncation on desktop; mobile truncates with a CSS ellipsis rather than removing any text).

## 2026-08-21 (deepen the 3 market pages — content depth, differentiation, internal linking)

Owner asked to focus on the US/UK/Australia markets specifically, since live ranking data (GSC, Ahrefs, Semrush) isn't reachable from this environment — this is on-page depth and linking work, not a ranking-data-driven change. Ran the local SEO agent scan first: all three market pages already score 90/100 with no flagged issues, but a manual read showed they were noticeably shallower than the region-specific service pages a visitor lands on next — a bullet-list "expertise" section with no operational specificity, and no links out to the site's own blog/guide/insight content.

### `app/markets/{united-states,united-kingdom,australia}/page.tsx`

**Changed:** Added a second paragraph to each market's "expertise" intro explaining *why* that market's accounting is harder to get right in practice — not a generic claim, but the specific mechanism (US: three states means three filing calendars, not one; UK: Making Tax Digital plus Companies House deadlines create a reporting cadence, not just a VAT-rate difference; Australia: BAS/STP/EOFY create a rhythm where a missed deadline cascades into the next cycle). Added a "Related resources" link row to each page pointing at genuinely relevant existing content that wasn't linked from these pages before (US → sales-tax-nexus insight, ASC 606 insight, accounting-services guide; UK → the same guide's FRS 102 section, QuickBooks-vs-Xero, the CAS guide; Australia → the payroll/super guide, MYOB, the how-to-choose-a-partner guide).  
**Why:** Matches the site's own stated psychology principle — "use operational specificity as proof of understanding" — and closes an internal-linking gap the audit's linking review didn't catch because it was looking cluster-to-cluster, not within a single page.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (3 pages).

**Verified:** `next build` and `eslint .` both pass.

## 2026-08-21 (growth-system audit: merge the accounting-services blog/guide pair — owner decision)

Owner decision on the one cannibalization pair the audit couldn't resolve on its own: merge `/blog/outsourced-accounting-services` into `/resources/guides/outsourced-accounting-services-guide` rather than deepen-and-differentiate. Executed per the standard the audit itself proposed for a merge (see `docs/CONTENT-REGISTRY.md`).

### `/resources/guides/outsourced-accounting-services-guide` — extended before the merge

**Changed:** Ported the blog's "Cost Ranges" section — the guide's only real content gap versus the blog — into a new "What Does It Cost?" section (SMB vs. mid-market offshore ranges, onshore comparison, a pointer to the bookkeeping cost guide's fuller framework). Title/description updated to "...Month-End Close, Cost, GAAP vs IFRS..." to reflect the addition.  
**Why:** A merge shouldn't lose the one piece of the losing page that wasn't already duplicated.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### `/blog/outsourced-accounting-services` — retired

**Changed:** Deleted `app/blog/outsourced-accounting-services/page.tsx`. Added a permanent 301 redirect from `/blog/outsourced-accounting-services` to the guide in `next.config.mjs`. Removed its entry from the `/blog` listing and `app/sitemap.ts`. Searched the repo for remaining references — the only other mentions were in `docs/*.md`, `SEO-CHANGELOG.md`, and auto-generated `seo-agent/reports/*` (updated or left to regenerate on the next scheduled run).  
**Why:** The two pages shared several near-identical sections; retiring the weaker, less-linked page into the stronger one removes the duplication rather than papering over it.  
**URL changed:** Yes — `/blog/outsourced-accounting-services` now 301s to `/resources/guides/outsourced-accounting-services-guide`. **Metadata changed:** N/A (page removed). **Content changed:** N/A (page removed; see above for what it became).

**Verified:** `next build` and `eslint .` both pass; confirmed the redirect resolves and no remaining internal `<Link>` points at the retired URL.

## 2026-08-21 (growth-system audit, Stage 6: engagement-model comparison guide)

Closed the content gap flagged in the Growth System Audit §06: no page compared the four `/solutions/*` engagement models against each other, so a visitor deciding between staff augmentation, a dedicated team, offshore accounting support, and back-office support had no single page to work from.

### New: `/resources/guides/choosing-an-engagement-model`

**Changed:** Added a comparison guide — a side-by-side table (unit of engagement, best fit, typical duration), a four-question decision framework, and honest notes that the models overlap in practice (a dedicated team can end up doing back-office-style work; offshore support can look like staff augmentation once running) rather than presenting them as four rigid, non-overlapping tiers. Cross-linked from all four `/solutions/*` pages, the `/solutions` index, and the "how to choose a partner" guide (kept distinct — that guide covers evaluating a provider generally; this one covers choosing between models once you've decided to work with Accounstone).  
**Why:** Real content gap identified in the audit's search-intent registry — the intent existed with no owning URL.  
**URL changed:** No (new URL only). **Metadata changed:** N/A (new page). **Content changed:** Yes (1 new page + 6 cross-link updates).

### `/solutions/offshore-accounting-support` — found while researching the comparison guide

**Changed:** The page claimed "2-4 Weeks to Full Onboarding" as a stat and "Most clients are fully onboarded within 2-4 weeks" in an FAQ — the same category of overclaim already removed from `delivery-framework/onboarding` in an earlier pass ("Typically 2-4 weeks" / "immediate productivity" contradicted the honest ramp-up language on the CPA-firms page), just not caught on this page at the time. Reworded the FAQ to route to a discovery conversation instead of a fixed number, and replaced the stat with "Flexible — Scope That Scales With You."  
**Why:** Same standard the site already applies elsewhere: don't promise a timeline that depends on a client's specific file complexity.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

**Verified:** `next build` (86 routes) and `eslint .` both pass.

## 2026-08-21 (growth-system audit, Stage 4: UK/AU payroll, AP, AR pages)

Closed the regional-coverage gap flagged in the Growth System Audit §06: payroll, accounts payable, and accounts receivable had dedicated U.S. pages but fell back to the generic overview for UK and Australia, unlike bookkeeping, tax preparation, and audit support, which already had all three regions.

### New pages

**Changed:** Added `/services/payroll/united-kingdom`, `/services/payroll/australia`, `/services/accounts-payable/united-kingdom`, `/services/accounts-payable/australia`, `/services/accounts-receivable/united-kingdom`, `/services/accounts-receivable/australia` — each following the existing region-page pattern (Service/FAQ/Breadcrumb schema, delegated-vs-retained split) with genuine jurisdiction-specific detail rather than a template substitution: UK payroll covers RTI/PAYE/NI/auto-enrolment, AU payroll covers STP Phase 2/superannuation/PAYG/award rates, UK AP/AR cover input/output VAT and Making Tax Digital, AU AP/AR cover GST input tax credits/ABN verification/RCTI.  
**Why:** Same root cause as the U.S. pages created in an earlier pass — a service existing in `lib/data.ts` and the market pages' prose doesn't mean a matching page exists for every region it's described in.  
**URL changed:** No (new URLs only). **Metadata changed:** N/A (new pages). **Content changed:** Yes (6 new pages).

### Updated: navbar, sitemap, market pages, general service pages

**Changed:** `components/navbar.tsx` now declares all three regions for Payroll, Accounts Payable, and Accounts Receivable (previously US-only, matching the pattern already fixed for Bookkeeping/Tax Preparation/Audit Support in an earlier pass). `app/sitemap.ts` includes the 6 new routes. `app/markets/united-kingdom/page.tsx` and `app/markets/australia/page.tsx` "Services for X Markets" grids now point Payroll/AP/AR at the new dedicated pages instead of the generic overview — the same fix already applied to the U.S. market page. The three general service pages (`/services/payroll`, `/services/accounts-payable`, `/services/accounts-receivable`) gained UK/AU cross-links alongside the existing U.S. one. `/services/accounting` intentionally stays U.S.-only — no UK/AU page exists, and nothing now claims one does.  
**Why:** Same class of bug the navbar/market-page region-URL fix caught earlier this session — a page existing without every place that links to it being updated to point at it.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (5 files) — plus `docs/ROUTES.md` and `docs/CONTENT-REGISTRY.md` updated so the registry doesn't go stale the same day it was created.

**Verified:** `next build` (all 85 routes) and `eslint .` both pass.

## 2026-08-21 (growth-system audit, Stage 1: governance registries + blog/guide cannibalization fixes)

Ran a full Phase 1–4 repository audit against the hub-and-spoke/search-intent architecture requested for the site's SEO growth system, delivered as a report for review. This entry covers the Stage 1 work approved to proceed without further sign-off: the registries the audit's own framework requires, and the low-risk cannibalization fixes it identified with high confidence. The one pair flagged as needing an explicit merge-vs-deepen decision (`/blog/outsourced-accounting-services` vs. `/resources/guides/outsourced-accounting-services-guide`) was **not** touched — see `docs/CONTENT-REGISTRY.md` for why.

### New: `docs/ROUTES.md`, `docs/SEARCH-INTENTS.md`, `docs/CONTENT-REGISTRY.md`

**Changed:** Added a formal route registry (all 79 routes, by cluster), search-intent registry (intent → primary URL), and content registry (blog/guide inventory with status) — none existed before in this form, though the same governance intent was previously spread informally across `AI-WEBSITE-GUIDE.md`, `SEO-AUDIT.md`, and `ACCounstone-SEO-AGENT.md`.  
**Why:** Prevents the specific failure this pass found (see below) from recurring — future agents/sessions now have one place to check for an existing intent owner before creating a page.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** N/A (new docs, no site-facing content).

### `/blog/outsourced-bookkeeping-guide`, `/blog/outsourced-payroll-services`, `/blog/accounts-payable-outsourcing` — cannibalization fix

**Changed:** These three blog articles independently grew near-duplicate coverage of the same questions already owned by a `/resources/guides/*` counterpart (verified by reading both pages in each pair, not just titles). Re-scoped each blog's title, meta description, intro, and the one most-duplicated section to lead with the angle its own title already half-promised but the body didn't deliver on, and added an explicit cross-link to the guide that owns the overlapping intent:
- **Bookkeeping:** title/intro re-scoped away from "what it costs" (the guide's job — it has the `CostEstimator` widget) toward "what to expect day to day, software workflows, red flags" (the blog's actual unique content: QBO/Xero mechanics, Reddit-sourced FAQ, warning signs). Added a pointer to the cost guide above the pricing tables.
- **Payroll:** title/intro re-scoped away from "what it covers" (the guide's job — it has the full US/UK/AU jurisdiction breakdown) toward "costs, bank-access red flags, watch-outs." Condensed the duplicated "what's included" bullet list to a short summary + link to the guide's full version.
- **Accounts Payable:** title/intro re-scoped toward "fraud controls, software workflows, real costs" (the blog's unique operational detail) away from restating the guide's control-and-authority framework. Condensed the duplicated "what the AP team handles vs. stays with you" section to a summary + link.

Also updated the corresponding listing entries on `/blog` (title/description) to match.  
**Why:** `/blog` and `/resources/guides` grew as two separately-built content systems; nothing before `docs/SEARCH-INTENTS.md` existed would have caught two pages competing for the same primary intent. This is the concrete instance the growth-system audit was designed to surface.  
**URL changed:** No (no page removed or redirected — differentiation only, per the audit's own escalation path: only MERGE/REDIRECT require the URL-change approval this pass didn't seek). **Metadata changed:** Yes (3 pages). **Content changed:** Yes (3 pages + blog index).

**Not touched:** `/blog/outsourced-accounting-services` vs. `/resources/guides/outsourced-accounting-services-guide` — overlap here is paragraph-level, not just topical (several sections are near word-for-word matches). A title/intro edit wouldn't fix it, and a real fix means either merging with a 301 or a substantial rewrite — both need an explicit owner decision. Flagged in `docs/CONTENT-REGISTRY.md`, left as-is.

**Verified:** `next build` and `eslint .` both pass.

## 2026-08-21 (follow-up sweep: caught one missed FAQ + tone/absolute-claim cleanup)

Re-ran the same red-flag grep sweep after the market-pages fix shipped, to catch anything missed. Found one real gap and a few lower-severity tone issues.

### `app/markets/united-kingdom/page.tsx` — missed in the previous pass

**Changed:** FAQ #1 ("Are you familiar with UK IFRS standards?") still said "**We ensure compliance** with international financial reporting standards" — the same absolute-claim pattern already fixed on the other 5 FAQs on this page, but this one was the first item and got missed. Reworded to "our... reporting is structured around IFRS accounting standards," with statutory-accounts sign-off routed to the client's accountant of record.  
**Why:** Same category as the rest of the market-pages fix — an unhedged compliance claim.

### Tone/absolute-claim consistency (lower severity — no scope violation, just inconsistent voice)

**Changed:** Two FAQ answers still opened with "**Absolutely.**" (`app/solutions/dedicated-accounting-teams/page.tsx`, `app/solutions/back-office-support/page.tsx`) — the same unhedged-affirmation style already removed from the Australia market page's tax-planning FAQ in an earlier pass. Reworded both to a plain "Yes." opener. Also softened "Multi-level QA processes... **ensure** accuracy and compliance" (back-office-support FAQ) and "Learn how our QA processes **ensure** accuracy and compliance" (quality-assurance page CTA, which also dropped the vague "Premium Quality" framing) to describe the review process rather than guarantee its outcome.  
**Why:** Neither claim was factually wrong, but "ensure"/"Absolutely" read as guarantees, which the site's own principles (`scope-boundaries.md` §7) treat as something to avoid consistently, not just where a legal-risk claim happens to ride along with it.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (4 files).

**Verified:** re-ran the full grep sweep (Absolutely., "ensure compliance/accuracy", "full compliance/knowledge/ATO/HMRC", "optimization", "we handle all", "we file/submit/lodge on your behalf") across the entire `app/` tree — clean. `next build` and `eslint .` both pass.

## 2026-08-21 (market pages: cleared leftover pre-cleanup overclaims in FAQs and hero/meta copy)

Resumed general content-accuracy review after the previous fixes were merged and deployed. Swept the codebase for the site's established banned-phrase categories (superlatives, "optimization"/tax-strategy language, "full compliance", regulator citations, HR-scope overclaims) and found the three market pages (`app/markets/{australia,united-kingdom,united-states}/page.tsx`) still carried unhedged FAQ answers and hero/meta copy from before the site's main August accuracy pass — that earlier pass (see the `2026-08-14` entries below) only touched the "Industries We Serve" lists and one tax-planning FAQ on each page; the rest of the FAQ set, hero description and meta description were never revisited.

### `app/markets/australia/page.tsx`

**Changed:** Meta description and hero description both said "**ASIC** ... compliance included" — the exact FCA/ASIC violation already fixed on the Compliance page in an earlier pass, reintroduced here. Removed. The "Do you understand IFRS and ASIC requirements?" FAQ claimed "**we ensure compliance** with... ASIC reporting requirements" — rewrote to route ASIC/Corporations Act obligations to the client's accountant and auditor, matching the pattern already used correctly on `services/audit-support/australia/page.tsx`. The GST FAQ said "**Absolutely**. We manage GST registration... and **optimization** of GST positions" — removed the absolute opener and the tax-strategy word "optimization," reframed as BAS-ready preparation with registration/lodgment left to the client's registered agent. The ABN FAQ claimed "**full ATO compliance requirements**" — an absolute claim banned under `scope-boundaries.md` §7 — softened to preparation-only language.  
**Why:** Direct violations of two already-documented scope boundaries (§1/§6 regulator citation, §7 absolute claims) that had already been fixed once elsewhere on the site but were missed on this page.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### `app/markets/united-kingdom/page.tsx` — the more serious finding of this pass

**Changed:** The "Our UK Expertise" list included three items outside anything Accounstone actually offers: **"Director obligations and filings"** (a governance/legal matter, not an accounting deliverable — removed), **"Pension and benefits administration"** (the same HR-scope overclaim already fixed on the back-office-support page — replaced with "Pension auto-enrolment bookkeeping," the legitimate payroll-adjacent version already used on the Payroll service page), and **"R&D tax relief"** / **"Grant funding and incentives"** (specialist tax-advisory and grants-consulting services that aren't in Accounstone's service lines at all — removed, no hedge could make these accurate since they're not offered in any form). "VAT management and **optimization**" → "VAT reconciliation and return preparation." "Corporation tax compliance" / "Companies House compliance" → reworded to "return/filing preparation" framing.  
**FAQs rewritten:** VAT FAQ dropped "Absolutely... **optimization**... full knowledge" for a prep-scoped answer that explicitly states Accounstone doesn't hold HMRC portal credentials (matching `knowledge/markets/uk.md`). Companies House FAQ dropped "**we handle all** ... **director obligations**" (a legal-authority overclaim) for preparation-only language. Corporation tax FAQ dropped "**optimization for R&D relief and other CT reliefs**" — a direct tax-advisory overclaim, the same category as the already-fixed IRS-representation and Australian tax-planning findings — for return-preparation language that routes relief-eligibility questions to the client's accountant or an R&D specialist. The entity-structure FAQ dropped "**entity structure optimization**" — entity selection advice is explicitly banned under `scope-boundaries.md` §2.  
**Why:** This page had the most and the most serious overclaims of the three — several items claimed services genuinely outside Accounstone's scope, not just imprecise wording around real services.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### `app/markets/united-states/page.tsx`

**Changed:** The state-requirements FAQ said "**we... handle** specific state compliance, **filings**, and reporting" — filing authority stays with the client's CPA; reworded to preparation-for-review language. The multi-state FAQ opened with "**Absolutely**" and claimed "**proper nexus analysis**" — nexus determination is a tax-judgment call; reworded to describe tracking activity by state so exposure is *visible*, with the determination itself left to the client's CPA/tax advisor. The payroll-tax FAQ claimed "**quarterly filings**" as something Accounstone handles — reworded to match the already-established Payroll knowledge doc pattern (filing can be included in scope or stay with the client's accountant, agreed at onboarding).  
**Why:** Same category as the UK/Australia fixes — filing-authority and tax-determination claims that contradict the site's own scope boundaries.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

**Verified:** `next build` (all routes, no errors), `eslint .` clean, and a targeted re-grep for every removed pattern (ASIC, "optimization," "full ... compliance," "Absolutely.", "benefits administration," "R&D tax relief," "grant funding," "entity structure optimization") across all three files confirmed clean before committing.


Picked up from a Claude.ai handoff prompt. Verified the prompt's Priority 1 claims first: `app/industries/cpa-firms/page.tsx` and the healthcare/e-commerce/professional-services industry pages were already reworked with 250–650+ words, workflow-specific FAQs, and auto-generated FAQ/Breadcrumb schema via `IndustryPageTemplate` — the "57 lines / thin content" note in the handoff was stale (line count is misleading because the template pulls content from data arrays). No changes made there; making them longer for its own sake would have violated the guide's anti-padding rule. Moved to the parts of the handoff that were genuinely unaddressed.

### New pages — Priority 2 (zero-coverage bottom-funnel guides)

**Changed:** Created `app/resources/guides/how-to-choose-accounting-outsourcing-partner/page.tsx` and `app/resources/guides/client-accounting-services-cas-guide/page.tsx`, both using `ArticleLayout` (`section="guides"`), which auto-generates Article + BreadcrumbList schema. Added both to `app/resources/guides/page.tsx`'s guide list and to `app/sitemap.ts`.
**Why:** Both were confirmed zero-coverage (`grep` found no existing content) and are high commercial-intent, pre-shortlist search terms per the handoff brief.
**Content notes:**
- The partner-selection guide is a decision framework (scope-first comparison, review structure, red flags, onboarding expectations) — written as buyer-neutral evaluation criteria, not a sales pitch for Accounstone. Its "red flags" section explicitly calls out unqualified IRS-representation claims and "guaranteed/full compliance" language as warning signs, reinforcing `knowledge/company/scope-boundaries.md` from the buyer's side.
- The CAS guide explains Client Accounting Services as an industry practice-growth model for CPA firms, then draws the same production-vs-judgment delegation line used everywhere else on the site: bookkeeping/close/reporting production can be delegated, advisory and sign-off stay with the firm's licensed staff. No CFO/advisory positioning introduced.
**SEO purpose:** Fills two zero-coverage, high-intent bottom-funnel search terms named in the handoff brief; both link back into the CPA-firms, staff-augmentation and bookkeeping-cost-guide clusters.
**URL changed:** No (new URLs). **Metadata changed:** N/A (new pages). **Content changed:** Yes (new pages).

### Schema completion — Priority 3

**Audited:** Every `page.tsx` route for BreadcrumbList and FAQPage coverage against visible content. Result: every page with visible FAQ content already had matching `FAQPage` schema (0 gaps — the earlier "37/77" FAQ count undercounted because it didn't account for `IndustryPageTemplate`/`ServicePageTemplate`/`ArticleLayout` auto-generating schema for every page that uses them). Breadcrumb coverage had two real gaps.
**Changed:** Added `BreadcrumbList` schema to `app/compliance/page.tsx` and `app/data-security/page.tsx` (both had none; neither has FAQ-style visible content, so `FAQPage` schema was correctly not added — schema must match visible content). `app/page.tsx` (homepage) and `/terms`, `/privacy` (utility pages, intentionally excluded from the sitemap per its own documented policy) were left without breadcrumb schema, consistent with existing site convention.
**SEO purpose:** Closes the last real BreadcrumbList gaps; confirms FAQPage coverage was already effectively complete rather than the 37/77 figure the handoff cited.
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (schema only).

### Knowledge base expansion — Priority 4

**Added:** `knowledge/services/{bookkeeping,accounting,tax-preparation,payroll,accounts-payable,accounts-receivable,audit-support}.md` (one per service line, each with exact deliverables split into "can be delegated" vs. "stays with the client/CPA," sourced from `lib/data.ts` service descriptions and the existing service pages — no new claims invented). `knowledge/markets/{us,uk,au}.md` (regulatory context, the FCA/ASIC boundary restated per-market, terminology differences, buyer expectations, software ecosystem). `knowledge/icp/cpa-firms.md` (buyer persona, what they outsource, the seasonal-capacity pattern, the handoff pattern, vocabulary, primary objection, and a note on the CAS trend tying back to the new CAS guide).
**Why:** Requested in the handoff's Priority 4; these didn't exist yet. Written as internal reference docs for future agents/content passes, not as site copy.
**URL changed:** No. **Metadata changed:** No. **Content changed:** Documentation only (not rendered on the site).

### Tooling: ESLint dependency

**Changed:** Re-added `eslint`, `eslint-config-next`, `@eslint/eslintrc` to `package.json` devDependencies — pinned to `eslint@^9` / `eslint-config-next@^15` (matching the project's Next 15 major version) rather than letting the resolver pick the latest majors, which is what caused the peer-dependency mismatch (`eslint-config-next` 16.x wanting `eslint` 9.x, resolver installing `eslint` 10.x) that broke this the last time it was attempted (commit `7dfca5f`, "Fix Vercel deploy: remove ESLint devDeps that broke pnpm-lock.yaml sync"). Regenerated `pnpm-lock.yaml` via `pnpm add -D`.  
**Why:** `npm run lint` / `pnpm run lint` had no working `eslint` installed even though `eslint.config.mjs` existed — the previous fix had to be reverted for breaking the Vercel build.  
**Verified:** `npx eslint .` runs clean (0 findings), `pnpm install --frozen-lockfile` succeeds (the exact command Vercel runs on deploy), and `next build` still produces all 79 static routes.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (tooling only).

### Tooling: fixed a word-count undercount bug in `scripts/accounstone-seo-agent.mjs`

**Found while triaging the agent's "content-depth" priority queue:** `app/services/accounting/page.tsx` was flagged MEDIUM at only 46 words — but reading the actual page showed a full overview, 6 benefits, a 5-step process, 5 deliverables, related services, and 4 FAQs (~490 words), all rendered through `ServicePageTemplate`. Root cause: the scanner's tag-stripping regex (`<[^>]+>`) has no way to tell a real HTML tag from a multi-line, self-closing component call like `<ServicePageTemplate overview="..." benefits={[...]} .../>` — since that entire call contains no literal `>` character until its closing `/>`, the regex swallowed everything between as one "tag" and erased it, including every prop string.  
**Changed:** Tightened the regex to `<[a-zA-Z][^>{]*>`, which stops matching at the first `{` — a real JSX tag's attributes don't contain raw `{`, so plain tags still strip correctly, while a component call with JS-expression props now survives as visible text instead of vanishing.  
**Impact:** Re-ran the full scan. Word counts corrected upward across nearly every page (undercounts had ranged from ~15% on long-form guides to the 10x case on `/services/accounting`). Medium-priority findings dropped from 18 to 11 — the false positives on already-substantial pages cleared. The 11 that remain are exactly the site's hub/index pages (`/industries`, `/markets`, `/solutions`, `/resources`, `/resources/insights`) and legal/trust pages (`/terms`, `/privacy`, `/compliance`, `/data-security`, `/delivery-framework/communication`, `/delivery-framework/quality-assurance`) — all legitimately short by design per `AI-WEBSITE-GUIDE.md`'s own rule against padding hub and utility pages. **No content changes made** — confirmed there is no genuine thin-content problem left on the site; the previous "18 medium findings" figure was mostly a tooling artifact.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (tooling only; `seo-agent/reports/2026-08-21.md` regenerated with corrected counts).

### Tooling: fixed internal-link undercount, then closed the genuine gaps it revealed

**Changed:** Broadened the internal-link counter from `href\s*=\s*["']\/` to `href\s*[:=]\s*["'\`]\/`, so it also catches object-literal links (`href: '/...'`) used by `relatedLinks` arrays passed into `IndustryPageTemplate`, not just JSX-attribute links. Low-priority internal-linking findings dropped from 33 to 12 once this and the word-count fix were both applied — most of the original 33 were the same class of false positive (a template component renders the actual `<a href>`, but the scanner only walks `app/`, not `components/`). Documented the remaining known limitation in a code comment: pages using `ServicePageTemplate`'s `relatedServices` prop (bare `slug:` values resolved to a URL only inside the template) still won't be counted, so LOW findings on those pages should be treated with skepticism, not as confirmed gaps.  
**Checked the 12 that remained:** most are legal/utility pages (contact, privacy, terms, compliance, data-security) or hub pages that link out via card grids rather than literal `href=` strings — not real gaps, left alone per the site's own "don't add links just to increase count" rule. Three were genuine: `app/delivery-framework/{onboarding,communication,quality-assurance}.tsx` had no content links at all beyond a generic `/contact` CTA, leaving a reader in the "how we work" cluster with no path back into services/industries content.  
**Added:** One short, on-topic paragraph of contextual links to each of the three pages — onboarding links to CPA firms, staff augmentation, and quality assurance; communication links to CPA firms, quality assurance, and onboarding; quality assurance links to audit support, tax preparation, onboarding, and communication. All three cross-reference each other, forming a small linked cluster instead of three dead ends.  
**Also found and fixed while reading these pages (real content-accuracy issues, not just linking):**
- `app/delivery-framework/onboarding/page.tsx` claimed "Typically 2-4 weeks" for onboarding and "immediate productivity" in its meta description — this directly contradicts the honest-ramp-up language already established elsewhere on the site (the CPA-firms FAQ explicitly says *"We prefer to establish a realistic ramp-up plan... rather than promise an arbitrary number of days"*, and a fixed timeline claim was already removed from that same page in an earlier pass — see the `2026-08-14` entry below, "Removed a fixed productivity timeline claim"). Reworded both to match the rest of the site.
- `app/delivery-framework/quality-assurance/page.tsx` said "Monthly reports and **filings** delivered on the schedule we agree to" — "filings" reads as a claim to handle the actual filing/lodgment, which contradicts `knowledge/company/scope-boundaries.md` §2 (lodgment/filing stays with the client's CPA, EA, or registered agent). Changed to "filing-ready documentation."  
**URL changed:** No. **Metadata changed:** Yes (onboarding page description). **Content changed:** Yes (3 pages; small additions + 2 accuracy fixes).

### Navbar Services dropdown: fixed misleading region grouping, added 4 real U.S. service pages

**Reported by the client:** the Services dropdown looked like it was "only showing USA services," and services appeared to have "USA in their cluster as others."  
**Root cause:** `components/navbar.tsx`'s Services mega-menu bucketed Payroll, Accounts Payable, Accounts Receivable and Accounting Services under the "USA" column only (alongside Bookkeeping/Tax Preparation/Audit Support, which do have real region pages), while the UK and Australia columns showed just 3 items each. None of those 4 services are actually US-exclusive — they simply had no dedicated region page yet — but the layout made it look that way: USA had 7 listed services, UK/Australia had 3.  
**First fix (superseded below):** briefly split the 4 generic services into a separate "All Regions" row instead of nesting them under USA. The client's follow-up made clear the actual ask was for these to become genuinely region-specific, not just relabeled — so this was reverted before shipping.  
**Actual fix — created 4 new dedicated U.S. service pages:**
- `app/services/payroll/united-states/page.tsx` — federal/state withholding, FICA, FUTA/SUTA, W-2/1099-NEC record-keeping, delegated-vs-retained split (filing authority stays with the client's accountant).
- `app/services/accounts-payable/united-states/page.tsx` — ACH/check/wire payment-run preparation, 1099-NEC vendor tracking, sales/use tax coding on vendor invoices.
- `app/services/accounts-receivable/united-states/page.tsx` — USD invoicing, ACH/check payment application, DSO framing, aging/follow-up cadence.
- `app/services/accounting/united-states/page.tsx` — U.S. GAAP-oriented reconciliations, month-end close, management reporting, explicit hand-off boundary to tax preparation.

Each follows the same pattern as the existing `bookkeeping/tax-preparation/audit-support` region pages: Service + FAQ + BreadcrumbList schema, a delegated-vs-retained split, genuine U.S.-specific detail (not a find-and-replace of the generic page), and a link back to the general multi-region overview. Added all 4 to `app/sitemap.ts`.  
**Navbar restructured:** `regionServiceGroups` now derives from one `allServices` list where each service declares which regions have a dedicated page for it. USA links to all 7 dedicated U.S. pages. UK and Australia link to their 3 dedicated region pages plus fall back to the general (multi-region) page for the 4 services that don't have UK/Australia-specific versions yet — so no column ever links to a URL that doesn't exist, and no column looks artificially empty relative to another.  
**Cross-linked:** the 4 general service pages (`/services/payroll`, `/services/accounts-payable`, `/services/accounts-receivable`, `/services/accounting`) now each link to their new U.S.-specific page.  
**Verified:** `next build` (81 routes, up from 77), `eslint .` clean, and visually confirmed in a browser (desktop dropdown, mobile menu, and the new pages themselves) via Playwright before committing.  
**URL changed:** No existing URL changed; 4 new URLs added. **Metadata changed:** N/A (new pages) + minor related-link additions on 4 existing pages. **Content changed:** Yes.

### `app/markets/united-states/page.tsx` — same inconsistency the client had just flagged in the navbar, found on the U.S. market page too

**Found:** the "Services for U.S. Markets" card grid on this page already mixed region-specific slugs (`bookkeeping/united-states`, `tax-preparation/united-states`, `audit-support/united-states`) with plain, non-regional slugs (`accounting`, `payroll`, `accounts-payable`, `accounts-receivable`) — the exact same inconsistency just fixed in the navbar, on the one page whose entire purpose is describing U.S. services specifically. Grepped the rest of the codebase for the same dynamic-slug link pattern (`` href={`/services/${...}`} ``) to confirm this was the only remaining instance.  
**Changed:** all 7 entries now point at their dedicated U.S. page (`accounting/united-states`, `payroll/united-states`, `accounts-payable/united-states`, `accounts-receivable/united-states`, joining the existing 3). Card labels updated to match ("Accounting Services" → "Accounting Services for U.S. Businesses", etc.) for consistency with the other four.  
**Checked, no change needed:** the UK and Australia market pages have the identical-looking pattern (3 region-specific + 4 generic slugs) — that's correct there, since no UK/Australia-specific pages exist yet for those 4 services; changing them would link to nothing.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (7 link targets + labels on one page).

### Open questions — unchanged, still awaiting client answer

Per `knowledge/company/identity.md` and `knowledge/company/scope-boundaries.md`: (1) whether Canada is a real market needing a content cluster or a third-party directory error, and (2) whether "Financial reporting" should exist as a named service line or stay strictly as accounting-deliverable terminology. Neither was resolved this pass — both require a client decision, not an agent judgment call.

## 2026-08-14 (top bar, footer, robots, sitemap, performance)

### `components/header-bar.tsx` (full rework)

**Changed:** Replaced the generic announcement-bar banner ("Transform Your Accounting with Offshore Expertise" + Get Started + close button) with a slim, permanent top bar containing the site's contact info (email + phone on left) and social media icons (LinkedIn, Facebook, Instagram, YouTube on right), matching the same social links already used in the footer. Added a small "Get Started" CTA that's desktop-only (hidden on mobile since the navbar's own CTA covers that). The bar is now `bg-primary-dark` (one shade darker than the navbar's `bg-primary`) so the two bars are visually distinct but related.  
**Why:** Social media visibility at the top of the page (above the fold, before scrolling to the footer) is a common trust/reach signal for B2B service businesses. The previous announcement banner read as generic marketing ("Transform Your Accounting") and had a dismissible close button, meaning it could vanish permanently for returning visitors.  
**SEO purpose:** Social-media links above the fold are a crawlability and brand-signal benefit; no metadata change.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `components/footer.tsx` (alignment and structure fix)

**Changed:** Restructured the footer into three visually separated bands: a top band (logo/tagline/social + right-aligned contact info), a middle band (the 6-column link grid, now using `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6` instead of the previous fractional-width grid that didn't align cleanly on tablets), and a bottom bar with a subtle darker background (`bg-primary-dark/50`) for legal links. The contact column's text is now right-aligned on desktop and left-aligned on mobile (previously left-aligned everywhere, leaving the right side of the footer's top row empty on desktop). The 6-column link grid now wraps to 2 columns on mobile and 3 on tablet instead of a single column, which was unnecessarily long on smaller screens.  
**Why:** The previous footer had alignment issues at intermediate breakpoints (the fractional-width grid broke, and the contact info floated awkwardly) and no visual separation between the link section and the legal section.  
**SEO purpose:** Cleaner, more scannable footer helps both crawlers and visitors find links.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (same links, same copy).

### `app/robots.ts` (AI crawler rules)

**Changed:** Added explicit `allow: '/'` rules for GPTBot (OpenAI/ChatGPT), Google-Extended (Google AI features), PerplexityBot, ClaudeBot, Applebot-Extended, and anthropic-ai. These are the AI crawlers that respect robots.txt and that the site wants to be discoverable by (the site already publishes `llms.txt` for exactly this purpose).  
**Why:** Without explicit allow rules, some AI crawlers default to restricted crawling. Since the site actively publishes `llms.txt` as its AI-crawler-facing content summary, it should also explicitly allow those crawlers at the robots.txt level.  
**SEO purpose:** Maximizes AI-tool discoverability (ChatGPT, Perplexity, Google AI Overviews, Apple Intelligence) alongside the existing Google crawling.

### `app/sitemap.ts` (lastModified dates)

**Changed:** Added `lastModified: '2026-08-14'` to every route that was touched in today's content/crawlability audit. Routes that weren't touched don't get a `lastModified` (per the existing sitemap policy: "Do not invent lastModified dates").  
**Why:** `lastModified` tells crawlers which pages have been recently updated, helping them prioritize re-crawling freshly reworked content over pages that haven't changed.  
**SEO purpose:** Signals content freshness to search engines for the ~50 pages that were materially updated today.

### `app/globals.css` (font stack performance)

**Changed:** Replaced `var(--font-inter), "Helvetica Neue", system-ui, sans-serif` (where `--font-inter` was undefined — never loaded from anywhere, so the browser was doing a lookup for a missing variable on every text element) with a clean system font stack (`"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`). System fonts have zero download time and zero FOIT/FOUT since they're already on the user's device.  
**Why:** An undefined CSS variable in the font stack is a small but real performance waste (the browser resolves it to nothing on every repaint). The site was never actually loading Inter from anywhere — the `--font-inter` variable was referenced but never defined.  
**SEO purpose:** Faster text rendering contributes to LCP and CLS metrics.


## 2026-08-14 (homepage: visual decoration pass)

Purely visual work — no content, metadata, or URL changes on this pass.

### Signature direction

The site already had the seed of a "ledger" motif (`.ledger-rule` hairline dividers, an `animate-ledger-fill` progress-bar animation named for it, and an inline ruled-paper texture used once on the homepage's stats panel). Extended this into a proper, reusable signature system instead of inventing an unrelated decorative language: a bookkeeping ledger's own visual vocabulary (ruled lines, a margin rule with tick marks, a page-break tick) is specific to an accounting company in a way generic gradients/blobs aren't.

### `app/globals.css`

**Added:** Three new reusable utility classes building on the existing `.ledger-rule`: `.ledger-lines` / `.ledger-lines-dark` (a faint repeating horizontal-line texture echoing ruled ledger paper, light and dark variants), `.margin-rule` (a vertical accent-colored rule with soft opacity, echoing the ruled margin column of a paper ledger — used as a left-border treatment, not a claim of any kind), and `.ledger-divider` (a hairline section divider with a small centered accent dot, replacing plain empty gaps between homepage sections). All additive — nothing existing was changed, so this doesn't affect any other page.

### `components/hero-carousel.tsx` (homepage-only component, confirmed no other usages)

**Changed:** Added the `.margin-rule` accent beside the hero's text content, and replaced the plain progress-dot row with a small ledger-style slide counter ("01 / 03", tabular-nums) above it — an appropriate use of numbering here since it's a real sequence (slide position), unlike a decorative 01/02/03 badge on non-sequential content.

### `app/page.tsx`

**Changed:** Applied the new texture/divider classes across the homepage: `.ledger-lines` on the trust-badge strip, `.ledger-lines-dark` on the primary-colored capacity CTA band (matching the texture already used once on the stats panel, now consistent across all primary-colored sections), `.ledger-divider` between three major section transitions, `.margin-rule` on the "Why Accounstone" checklist, and a small accent-tick treatment (a short horizontal line before the uppercase text) applied consistently to the two eyebrow labels that didn't already have one, matching the pattern already used in shared components elsewhere on the site.  
**Verification:** Ran a full production build and served it locally; confirmed via the rendered HTML and compiled CSS that all new classes and the slide counter render correctly. No headless-browser/screenshot tooling is available in this environment, so this was verified at the HTML/CSS level rather than visually — worth a quick look in an actual browser after deploy.


## 2026-08-14 (compliance page + tax-advisory overclaim cleanup)

Continued the accuracy sweep into pages not yet checked: the standalone Compliance page, and tax-related content on the services and market pages.

### `app/compliance/page.tsx` — most serious finding of this pass

**Changed:** The UK compliance list included **"FCA Requirements"** — the Financial Conduct Authority regulates financial services firms (banks, investment firms, insurers), not accounting/bookkeeping providers. This directly contradicted the entire "we don't provide financial services" cleanup from earlier today. Replaced with "Anti-Money Laundering (AML) Requirements", which is the regulation that actually applies to UK accountancy service providers. Also replaced "ASIC Standards" (Australia) with "GST and BAS Reporting Standards" (ASIC is primarily a financial-services/corporate-securities regulator; GST/BAS is the accounting-scoped equivalent). Also fixed an internal contradiction: the page's own meta description and hero said "Full compliance" / "Full adherence" (absolute claims), while a section further down the same page honestly stated "as a growing company, here is where we honestly stand today... actively working toward formal certifications." Softened the absolute claims so the page is consistent with its own honesty elsewhere. Same fix applied to the CTA description, which said "Learn about our compliance certifications" — implying certifications already held.  
**Why:** FCA in particular is a direct, unambiguous regulatory-scope overclaim on a page whose entire purpose is building compliance trust.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### `app/services/tax-preparation/page.tsx` — IRS representation overclaim

**Changed:** An FAQ literally said "Can you represent us with the IRS? Yes, we can provide power of attorney to represent your interests in IRS matters." **This is false and risky as written** — IRS representation with power of attorney (Form 2848) requires being a licensed CPA, Enrolled Agent, or attorney under Circular 230, and nothing elsewhere on the site suggests Accounstone itself holds those credentials (every other tax page explicitly routes representation/sign-off to "your CPA or Enrolled Agent"). Changed the answer to explicitly say no and explain the distinction. Also removed "Tax reduction strategies and optimization," "Multi-entity tax planning," "Tax planning summary and recommendations," and "IRS representation letters" from the benefits/deliverables lists, and reworded the process steps ("Analysis & Planning" → "Organization & Review", "Review & Optimization" → "Quality Review") to remove tax-strategy/advisory framing throughout.  
**Why:** This is the most concrete legal-risk finding of the entire cleanup — a specific, actionable false claim about a credentialed activity, not just marketing tone.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (full page).

### `app/markets/australia/page.tsx` — unhedged tax-advisory claim

**Changed:** An FAQ said "Can you help with tax planning? Absolutely. We provide strategic tax planning including capital gains strategies, negative gearing optimization, and salary sacrificing" — a direct, unhedged claim to provide tax advisory services, the same category of issue as the FCA and IRS-representation findings. Rewrote to explain Accounstone prepares the underlying bookkeeping/documentation, while those specific strategies are advice from the client's registered tax agent or accountant. Also removed "tax optimization" from the page's body copy, "GST management and **optimization**" → "reconciliation", "Capital gains tax **planning**" → "reporting support", and "Income tax returns and **lodgement**" → "preparation" (lodging on a client's behalf requires registered tax/BAS agent status, which isn't established anywhere on the site).  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `app/services/payroll/page.tsx`, `app/markets/united-states/page.tsx`

**Changed:** Removed "full compliance with federal and state regulations" (absolute claim) from the payroll page description. Removed "entity selection and tax planning" (advisory claim) from a US market FAQ, and "Multi-state tax **optimization**" / "Quarterly estimated tax **planning**" bullets, replacing with preparation/calculation framing consistent with the rest of the site.  
**URL changed:** No. **Metadata changed:** Some. **Content changed:** Yes.

### Also checked, no changes needed

State pages (California, Texas, Florida), homepage trust badges, testimonials data (already clearly labeled "illustrative engagement themes, not client testimonials"), and the case studies page (already clearly labeled as illustrative scenarios, not real client results) were all already accurate and appropriately hedged — no fabricated stats, no unlabeled claims.

## 2026-08-14 (broader content sweep: technology hub page, generic filler, HR-scope overclaim)

Continued the content-quality pass after finishing the technology pages — swept the rest of the site for the same categories of issue: generic marketing filler ("seamless," "enterprise-grade," "superior results") and scope overclaims (implementation/dev work, advisory work, and — newly found — general HR services).

### `app/technology/page.tsx` (full rework)

**Changed:** This was the worst offender found in the sweep. Replaced "We leverage the latest... to deliver superior results," "Advanced analytics and forecasting" (forecasting overclaim, same category as the earlier back-office-support fix), "Enterprise-grade security" (used twice, vague), and a "Schedule Demo" CTA (odd for an accounting firm — no other page on the site uses "demo" language) with concrete, accounting-scoped content. Added a new "What Stays With Your Software Provider" panel that's explicit about what's out of scope: software licensing/hosting, implementation/configuration for larger platforms, custom development, and forecasting/BI tools. Updated one FAQ that claimed "advanced business intelligence tools for... forecasting" and another claiming the team can "build custom integrations as needed" — both are scope overclaims for an accounting-support company.  
**Why:** This is the hub page for all seven technology pages, so it's high-visibility, and it had the most generic, unspecific copy on the site.  
**SEO purpose:** Consistency with the now-reworked individual technology pages; removes unverifiable/vague claims.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes (full rework).

### `app/solutions/back-office-support/page.tsx` — HR scope overclaim (new finding)

**Changed:** This page's meta description, hero, one FAQ, and two bullet lists all claimed "HR," "HR compliance," "benefits administration," and "regulatory requirements" as part of back-office support. None of that is in the `back-office-support` solution's actual description in `lib/data.ts` ("bookkeeping, payables, receivables, payroll processing, and account maintenance"). Rescoped every instance to the payroll-related accounting work Accounstone actually does (payroll processing, payroll tax withholding, payroll reporting), and added an explicit line in the FAQ stating broader HR functions (benefits administration, employment compliance, regulatory filings) sit with the client's HR provider or in-house team.  
**Why:** Same category of issue as the earlier "financial services"/CFO cleanup — claiming a regulated adjacent service (general HR/benefits administration) that isn't actually offered.  
**SEO purpose:** Accuracy.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### Generic filler cleanup ("seamless," "enterprise-grade," "strategic partnership")

**Changed:** Replaced vague, unelaborated "Seamless integration with X" bullets and similar filler phrases with concrete detail across `app/solutions/staff-augmentation/page.tsx`, `app/solutions/dedicated-accounting-teams/page.tsx` (also removed "Proactive tax planning and optimization" — the same tax-advisory overclaim already fixed on the Drake Tax page — and reworded the hero from "Your Strategic Accounting Partner" / "strategic partnership, and long-term value creation" to concrete language), `app/solutions/offshore-accounting-support/page.tsx`, `app/services/bookkeeping/page.tsx`, `app/delivery-framework/quality-assurance/page.tsx` ("Enterprise-grade quality standards" → specific description of the actual review process), and `app/delivery-framework/onboarding/page.tsx` (page title "Seamless Client Onboarding" and two body instances).  
**Why:** These phrases read as generic outsourcing marketing language rather than the specific, workflow-grounded tone established elsewhere on the site (per AI-WEBSITE-GUIDE's content principles).  
**SEO purpose:** Consistency; replaces vague adjectives with content that actually differentiates the page.  
**URL changed:** No. **Metadata changed:** Some (titles/descriptions on a few pages). **Content changed:** Yes.

### Full sitewide sweep performed

Grepped the entire `app/` tree for the AI-WEBSITE-GUIDE's banned superlatives list (best, number one, world-class, unparalleled, cheapest, guaranteed, industry-leading) plus "seamless," "enterprise-grade," "cutting-edge," "state-of-the-art," "revolutionary." After this pass, zero remaining hits except contextually appropriate uses (e.g. "best practices" as a standard industry term, "which service is best for my business" as a natural FAQ question).

## 2026-08-14 (finish technology page rework: CCH, MYOB, Drake Tax)

Follow-up to the NetSuite/Sage rework — the same generic vendor-marketing pattern was present on the three remaining technology pages.

### `app/technology/cch/page.tsx`, `app/technology/myob/page.tsx`, `app/technology/drake-tax/page.tsx`

**Changed:** Same rework as NetSuite/Sage. Removed "is the leading..." vendor-marketing openers (CCH Axcess, MYOB, and Drake Tax pages each claimed to be "the leading" software in their category — an unverifiable superlative about a third party's product, not something Accounstone can substantiate), "Why Choose \[Vendor\]" bullet lists that were really just describing the software's own features rather than Accounstone's work, and "setup and configuration" implementation-style claims. Replaced with accounting-scoped workflow content matching each platform's real use case (CCH: tax-practice review queues and document management; MYOB: AU/NZ GST/BAS and STP-aligned payroll bookkeeping; Drake Tax: return-preparation capacity for tax season). Also removed "Tax planning and optimization" from the Drake Tax services list and added an explicit FAQ stating tax planning/advisory stays with the client's CPA/EA — the same class of overclaim as the earlier CFO/financial-advisory cleanup.  
**Why:** Same reasoning as the NetSuite/Sage pass: this is an accounting-support company, not a software vendor or implementation partner, and "the leading software" claims about third-party products aren't something Accounstone can verify or should be making on their behalf.  
**SEO purpose:** Consistent accounting-scoped positioning across all seven technology pages; removes unverifiable superlative claims per the AI-WEBSITE-GUIDE content rules.  
**URL changed:** No. **Metadata changed:** Yes (all three titles/descriptions). **Content changed:** Yes (full rework, all three pages).

All seven `/technology/*` pages (QuickBooks, Xero, NetSuite, Sage, CCH, MYOB, Drake Tax) are now consistently accounting-scoped.

## 2026-08-14 (Tier 2 review: rework NetSuite and Sage pages)

Spot-checked the Tier 2 pages flagged in the original audit (UK/Australia bookkeeping, NetSuite, Sage, e-commerce, professional services). UK/Australia bookkeeping and both industry pages were already at the same specificity bar as Tier 1 (region-specific workflow detail, not generic filler) — no changes needed. NetSuite and Sage were the exception: both still read as generic software-vendor marketing copy rather than accounting-support content, unlike the already-reworked QuickBooks/Xero pages.

### `app/technology/netsuite/page.tsx`, `app/technology/sage/page.tsx`

**Changed:** Full content rework of both pages to match the established QuickBooks/Xero pattern. Removed vendor-marketing language ("leading cloud-based ERP", "powerful accounting platform... of all sizes", "Strong user community", "Competitive pricing", "Regular updates and improvements" — none of which describe anything Accounstone does) and claims that read as ERP-implementation-partner positioning ("NetSuite implementation and deployment", "we handle complete Sage implementation... including... training"). Replaced with accounting-scoped workflow content: multi-entity/multi-currency reconciliations, intercompany eliminations, consolidation, close activities — consistent with each technology's own description in `lib/data.ts`. Added an explicit FAQ on each page clarifying Accounstone supports the accounting work inside these systems, not implementation/configuration, and is not NetSuite/Oracle or Sage (matching the disclaimer pattern already used on the QuickBooks page).  
**Why:** These two pages hadn't been through the same content pass as QuickBooks/Xero and were making claims (software implementation, "why choose \[vendor\]" marketing bullets) well outside what an accounting/bookkeeping support company does.  
**SEO purpose:** Aligns both pages with the site's actual positioning and the AI-WEBSITE-GUIDE content rules (avoid generic/vendor-style copy, avoid unsupported superlatives).  
**URL changed:** No.  
**Metadata changed:** Yes (both titles/descriptions).  
**Content changed:** Yes (full page rework, both pages).

## 2026-08-14 (set up ESLint properly)

### `eslint.config.mjs` (new), `package.json`

**Changed:** Added a flat ESLint config (`eslint-config-next` via `FlatCompat`, since this is ESLint 9 + Next.js 15) so linting runs non-interactively instead of prompting for first-time setup. Switched `package.json`'s `lint` script from the deprecated `next lint` (removed in Next.js 16) to the plain `eslint .` CLI, which is Next's own recommended migration path. Also fixed the two real (non-cosmetic) findings: an unused `Link` import in `app/technology/drake-tax/page.tsx`, and an `any` type in `components/touch-ripple.tsx` (replaced with a properly typed optional property for the legacy IE `msMaxTouchPoints` check). Disabled `react/no-unescaped-entities`, which flagged ~75 plain apostrophes/quotes inside JSX text across ~20 content files — purely cosmetic (doesn't affect rendering, accessibility, or crawling), and mechanically escaping that many instances risked mangling copy for no functional benefit.  
**Why:** This was a pending item from the original audit ("Set up ESLint config"). Without it, `npm run lint` couldn't run in CI at all.  
**SEO purpose:** N/A directly, but a working lint step catches real bugs (like the unused import and `any` type) before they ship.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (code/tooling only).  
**Caveat:** `package.json` now lists `eslint` and `eslint-config-next` as devDependencies, but this environment only has `npm` available, not `pnpm` (the project's canonical package manager per `pnpm-lock.yaml`). `pnpm-lock.yaml` was **not** regenerated here — run `pnpm install` locally once to bring it in sync before relying on a clean `pnpm install` in CI/deploy.

## 2026-08-14 (crawlability audit: Google + AI-tool crawling)

Full site-wide crawlability sweep, prompted by a direct request to check for crawling issues affecting Google and other AI tools (ChatGPT/Perplexity-style crawlers that read `llms.txt`, etc.).

### `app/services/accounting/page.tsx` (new page — the big one)

**Changed:** Created the missing `/services/accounting` page. This route was referenced from **15 places** across the codebase — including the site-wide footer (every page), the homepage service grid, `public/llms.txt`'s own Services list, and `app/sitemap.ts` (which auto-generates `/services/${slug}` for every entry in `lib/data.ts`'s `services` array, which already included `accounting`) — but no `page.tsx` existed for it. Every one of those links, and the sitemap entry, was a 404.  
**Why:** This is exactly the kind of issue that hurts both Google and AI-tool crawling: a sitemap referencing a dead URL wastes crawl budget and can trigger Search Console errors, `llms.txt` (the file AI tools use to discover site content) pointed AI crawlers at a 404, and a footer link that's broken on literally every page is a poor signal for both crawlers and visitors. Built the page using the `accounting` service's existing description in `lib/data.ts` and the same `ServicePageTemplate` pattern as the other service pages, so it's now consistent with the rest of the services cluster.  
**SEO purpose:** Fixes 15 internal 404s at once, makes the sitemap fully accurate, and makes `llms.txt` accurate for AI-crawler discovery.  
**URL changed:** No (this URL already existed conceptually everywhere it was linked from — it just didn't resolve).  
**Metadata changed:** Yes (new page).  
**Content changed:** Yes (new page).

### `app/services/page.tsx`

**Changed:** Meta title "Accounting Services" → "Accounting & Bookkeeping Services".  
**Why:** Adding the new `/services/accounting` page created an exact duplicate `<title>` with the `/services` hub page, which had reused the same title.  
**SEO purpose:** Removes a duplicate-title issue between two distinct, now-both-real pages.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** No.

### Full audit performed, no other issues found

- **Sitemap accuracy:** Programmatically diffed every URL in the generated `sitemap.xml` against every real `page.tsx` route. Before this pass: 1 sitemap URL with no page (`/services/accounting`, now fixed). After: 0 mismatches in either direction. (`/privacy` and `/terms` are intentionally excluded per the sitemap's own documented utility-page policy.)
- **Internal links:** Programmatically checked every `href="/..."` and every `slug`-based link pattern across the entire `app/` and `components/` tree against the real route list. 0 broken links remain.
- **robots.ts / meta robots:** Confirmed no page has an accidental `noindex`; robots.ts correctly allows crawling and points at the production sitemap.
- **Duplicate titles/descriptions:** Programmatically parsed every page's `generateMetadata()` call. Found and fixed 1 duplicate title (`/services` vs the new `/services/accounting`). No duplicate descriptions found.
- **Heading structure:** Every page renders exactly one `<h1>` (via the shared `PremiumHero`, `HeroCarousel`, or `ArticleLayout` components).
- **External images:** No `<Image>` usage references a domain outside `next.config.mjs`'s `remotePatterns` (only `images.unsplash.com` is allowed, and nothing else is used) — an unlisted domain would silently break the image at build/runtime.
- **`public/llms.txt`:** No stale CFO references; the `/services/accounting` link it already contained is now a real page instead of a 404.

## 2026-08-14 (market pages: fix "Industries We Serve" accuracy + add internal links)

Follow-up to the note left at the end of the previous pass.

### `app/markets/united-states/page.tsx`, `app/markets/united-kingdom/page.tsx`, `app/markets/australia/page.tsx`

**Changed:** Replaced each market page's "Industries We Serve" list. Previously each list was plain, unlinked text mixing the site's six real industries (CPA Firms, Technology, Healthcare, E-Commerce, Real Estate, Professional Services) with several industries that have no dedicated page anywhere on the site (Manufacturing, Non-profit, Construction, Hospitality, Mining, Agriculture, Tourism). Replaced with the site's actual industries only, each now a real internal link to its `/industries/*` page (previously plain `<span>` text, not links).  
**Why:** The old lists implied industry coverage the site doesn't actually have pages for, and were a missed internal-linking opportunity between market pages and industry pages (flagged as a pending item in the original audit).  
**SEO purpose:** Removes inaccurate claims; adds genuine contextual internal links from three market pages to six industry pages.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes.

## 2026-08-14 (remove "financial services" / CFO positioning throughout the site)

Accounstone does not offer financial services, financial advisory, or CFO services — only accounting, bookkeeping, tax preparation support, payroll, AP/AR, and audit support. This pass removed language and links that claimed or implied otherwise. Standard accounting terminology that legitimately contains the word "financial" (financial statements, financial reporting, financial data/position, GAAP/IFRS financial reporting standards) was intentionally left in place — those are accurate descriptions of bookkeeping/accounting deliverables, not service-scope claims, and removing them would make the content less accurate.

### Broken links to a non-existent `/services/cfo-support` page (biggest finding)

**Changed:** Removed 10 internal links across `app/industries/technology`, `app/industries/healthcare`, `app/industries/professional-services`, `app/services/tax-preparation`, `app/services/audit-support`, `app/markets/united-kingdom`, `app/markets/united-states`, `app/markets/australia`, and `app/technology/netsuite`, all pointing to `/services/cfo-support` — a page that does not exist anywhere in `lib/data.ts` or the `app/services` route tree, and a service Accounstone does not provide. Replaced each with a real, existing related-service link (Audit Support, Tax Preparation, Accounting Services, etc.) where the list needed a replacement item, or simply removed the line.  
**Why:** These were both dead links (404s — bad for crawlability and UX) and a claim to offer CFO/financial-advisory services that isn't accurate.  
**SEO purpose:** Eliminates internal 404s and false service claims.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes (related-link lists only).

### `app/solutions/dedicated-accounting-teams/page.tsx`

**Changed:** Replaced "Dedicated CFO-level strategic guidance" with "Dedicated senior-level oversight and coordination", "CFO-level Lead + Multi-specialist team" with "Senior Accounting Lead + Multi-specialist team", "strategic financial partnership" (meta description) with "dependable, long-term accounting partnership", and "provide strategic financial guidance that drives growth" with "provide dependable accounting support that keeps pace with your growth".  
**Why:** CFO-level guidance and financial partnership/advisory positioning overclaim what the company does.  
**SEO purpose:** Accuracy; avoids implying a regulated advisory service.  
**URL changed:** No. **Metadata changed:** Yes (description). **Content changed:** Yes.

### `app/about/page.tsx`

**Changed:** Hero title "Building Better Financial Futures" → "Practical Accounting Support, Built to Last"; hero description no longer says "manage their finances"; mission copy "we deliver financial clarity and strategic guidance that drives growth" → "we deliver accurate books and dependable accounting support that helps your business run smoothly".  
**Why:** "Financial Futures" and "strategic guidance" read as financial-advisory/wealth-management positioning.  
**SEO purpose:** Accuracy on the company's own About page.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `app/terms/page.tsx`

**Changed:** "Accounstone provides accounting, bookkeeping, tax, payroll, and related financial services" → "...tax preparation support, and payroll processing services" (removed the umbrella "financial services" claim from the Terms & Conditions itself).  
**Why:** A legal document should not describe the company's own offering using a category it doesn't provide.  
**SEO purpose:** N/A (legal accuracy).  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `app/markets/united-kingdom/page.tsx`, `app/markets/united-states/page.tsx`, `app/markets/australia/page.tsx`

**Changed:** Removed "Financial services" from each page's "Industries We Serve" list (it isn't one of the six industries actually built out in `lib/data.ts`/`app/industries`). Removed "CFO and financial advisory services" from the US page's tax-services list.  
**Why:** These implied Accounstone serves the financial-services industry vertical and/or offers CFO/advisory services, neither of which is accurate or backed by an actual page.  
**SEO purpose:** Accuracy; these lists still don't fully match the real industries architecture (see note below).  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `app/solutions/staff-augmentation/page.tsx`

**Changed:** "Bring in specialists for areas like tax, audit, or financial advisory" → "...or specialized accounting support".  
**SEO purpose:** Accuracy.

### `app/solutions/back-office-support/page.tsx`

**Changed:** "Financial analysis and forecasting" → "Financial reporting and trend summaries".  
**Why:** "Forecasting" implies FP&A/advisory work beyond back-office bookkeeping scope.  
**SEO purpose:** Accuracy.

### `app/services/bookkeeping/page.tsx`

**Changed:** "Professional bookkeeping is the foundation of financial management" → "...the foundation of accurate, reliable accounting records".  
**Why:** "Financial management" is a broader category claim than bookkeeping.  
**SEO purpose:** Accuracy.

### Note for a future pass

The "Industries We Serve" lists on the three market pages (UK/US/Australia) still include several industries (Manufacturing, Non-profit, Construction, Hospitality, Mining, Agriculture, etc.) that aren't part of the site's actual six-industry architecture in `lib/data.ts`/`app/industries`. That's a broader content-accuracy question beyond this "financial"/CFO cleanup and worth a dedicated review.

## 2026-08-14 (homepage hero: remove AI-generated carousel images)

### `app/page.tsx`, `public/carousel-accounting-team.png` (deleted), `public/carousel-global-team.png` (deleted)

**Changed:** Removed the first two homepage hero carousel slides, which used AI-generated stock images. Both had visible AI-generation artifacts (garbled on-screen text, a fabricated "Acuity Financial Partners" logo rendered on an office wall in the first image, distorted hands/objects in the second). Replaced them with two already-present, genuine stock photos (`carousel-budget-planning.jpg`, `carousel-worldwide.jpg`) that were sitting unused in `public/`. The third slide (`carousel-tax-returns.jpg`, a real stock photo) was kept as-is.  
**Why:** AI-generated imagery with visible artifacts (and an unrelated fake competitor/company logo) undermines trust on the highest-visibility part of the homepage.  
**SEO purpose:** No ranking impact expected; this is a trust/brand-integrity fix. Alt text was updated to match the new images.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes (hero slide images, alt text, ids). Titles/subtitles per slide were kept as-is since they already matched the intended message, not the specific photo.

## 2026-08-14

### `SEO-AUDIT.md`

**Changed:** Added the initial repository-wide SEO, content and UX audit.  
**Why:** Establish implementation priorities before broad page rewriting.  
**SEO purpose:** Create a stable roadmap and prevent unnecessary URL or design changes.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** No.

### `app/layout.tsx`

**Changed:** Removed global meta keywords and simplified the site-wide title, description and social metadata.  
**Why:** Global metadata was trying to represent too many individual services.  
**SEO purpose:** Keep global metadata concise and brand-focused.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Global metadata only.

### `lib/seo.ts`

**Changed:** Simplified the shared metadata helper, tightened self-canonical behavior, removed unused Review schema generation, removed the unsupported WebSite SearchAction pointing at a non-existent `/search` route, corrected the Organization logo to the actual production PNG, and limited Organization/Service market claims to US, UK and Australia.  
**Why:** Reduce schema errors, unsupported claims and conflicting SEO logic.  
**SEO purpose:** Make canonical, Open Graph and structured-data behavior more predictable.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Schema/SEO helper only.

### `app/sitemap.ts`

**Changed:** Removed generated `new Date()` last-modified values, added route deduplication, and kept the sitemap focused on useful indexable content.  
**Why:** A sitemap should not claim every URL was modified every time it is generated.  
**SEO purpose:** More accurate crawl/indexation signals.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Sitemap logic only.

### `lib/data.ts`

**Changed:** Replaced illustrative testimonial records with clearly labelled engagement themes and replaced credential-style trust badges with factual workflow/process statements.  
**Why:** The old content could be interpreted as client endorsements or unsupported credentials.  
**SEO purpose:** Improve factual accuracy and avoid misleading trust signals.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes.

### `components/testimonials-section.tsx`

**Changed:** Reframed the component from customer testimonials to `Common Engagement Themes`.  
**Why:** The repository does not currently contain verified, permissioned client testimonials.  
**SEO purpose:** Prevent illustrative content from appearing to be fabricated endorsements.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes.

### `app/page.tsx`

**Changed:** Removed the unsupported `24+ Years of Team Accounting Experience` statistic and replaced it with workflow-oriented statements. The engagement section now clearly describes common workflow situations rather than client testimonials.  
**Why:** Avoid unsupported claims while improving the practical positioning of the homepage.  
**SEO purpose:** Stronger trust, clearer entity positioning and better human usefulness.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/industries/cpa-firms/page.tsx`

**Changed:** Reworked the page around review queues, busy-season capacity, delegation boundaries, onboarding, software workflows and quality review. Removed a fixed productivity timeline claim.  
**Why:** CPA firm buyers need workflow detail rather than generic outsourcing language.  
**SEO purpose:** Strengthen the CPA-firm intent cluster and reduce unsupported claims.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/services/bookkeeping/united-states/page.tsx`

**Changed:** Expanded the page around what bookkeeping can include, what can be delegated, what normally remains with the client/CPA, month-end workflow and related internal resources.  
**Why:** Make the page answer the operational questions behind outsourced bookkeeping.  
**SEO purpose:** Improve U.S. bookkeeping intent coverage and contextual internal linking.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/services/tax-preparation/united-states/page.tsx`

**Changed:** Expanded the page around preparation scope, review/sign-off boundaries, tax-season workflow and related technology/resources.  
**Why:** Clarify what is delegated and what remains with the licensed tax professional.  
**SEO purpose:** Strengthen U.S. tax-preparation intent while avoiding overclaiming filing authority.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/services/audit-support/united-states/page.tsx`

**Changed:** Expanded the page around working papers, schedules, documentation, testing support, audit-team boundaries and related services.  
**Why:** Explain audit support as preparation work rather than implying Accounstone issues audit opinions.  
**SEO purpose:** Strengthen U.S. audit-support intent and improve factual clarity.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/industries/real-estate/page.tsx`

**Changed:** Refined the page around property-level bookkeeping, AP/AR, owner reporting, CAM reconciliation, Yardi workflows and multi-entity close. Compliance language was qualified by jurisdiction/scope.  
**Why:** Make real estate content genuinely workflow-specific.  
**SEO purpose:** Improve real-estate topical relevance without making universal compliance claims.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/technology/quickbooks/page.tsx`

**Changed:** Reworked the page around QuickBooks accounting workflows, cleanup, capacity, close and practical starting points. Removed unsupported certification claims and vendor-like language.  
**Why:** Technology pages should demonstrate workflow familiarity rather than pretend to be the software vendor.  
**SEO purpose:** Strengthen QuickBooks topical intent and connect it to bookkeeping services/resources.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/technology/xero/page.tsx`

**Changed:** Reworked the page around Xero setup, cleanup, reconciliation, AP/AR, month-end and capacity use cases.  
**Why:** Make the page useful to someone evaluating Xero-related accounting support.  
**SEO purpose:** Strengthen Xero topical intent and internal connections to bookkeeping/resources.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `AI-WEBSITE-GUIDE.md`

**Changed:** Added a persistent developer/AI handoff document covering positioning, SEO architecture, metadata, sitemap, schema, content tone, internal linking, URL policy, trust rules and future-agent restrictions.  
**Why:** Future development should preserve the reasoning behind the current architecture.  
**SEO purpose:** Prevent regressions and inconsistent SEO/content implementation.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Documentation only.

## Production crawl observation

A production crawl performed before the latest deployment still showed older homepage content containing CFO/finance positioning and illustrative client testimonials. Those items have been removed from the current `main` branch implementation. The live site should be re-crawled after the connected Vercel deployment becomes ready.

## URL policy

No existing public URL was renamed during this implementation pass.

## Owner verification TODOs

- [ ] Verify any QuickBooks certification claim before publishing it again.
- [ ] Verify any team-experience statistic before publishing it again.
- [ ] Verify exact wording/status of the Global Delivery Center claim.
- [ ] Verify any future certification/security-certification claims.
- [ ] Add genuine, permissioned client testimonials only when available.

If a claim cannot be verified, remove it rather than inventing a replacement.

## Next planned changes

- Strengthen contextual internal linking across all clusters.
- Review state pages for unique local value.
- Review Tier 2 pages and resource content.
- Set up ESLint config (`next lint` currently prompts for first-time setup; not run in CI yet).
- Re-crawl production after deployment.

## 2026-08-14 (build verification + crawlability/responsiveness pass)

This pass followed up on the "Next planned changes" items from the audit above: running a real production build (crawlability depends on the site actually deploying) and auditing page-level metadata and responsive image handling across the full route set.

### `app/resources/guides/questions-to-ask-before-outsourcing-bookkeeping/page.tsx`

**Changed:** Added the required `publishedDate`, `section`, and `slug` props to the `ArticleLayout` call.  
**Why:** `next build` failed a type check on this page (missing required props), which would have blocked production deployment entirely — i.e. the whole site would not have been crawlable/live until this was fixed.  
**SEO purpose:** Restore a working production build; this also fixes the Article schema and breadcrumb generation for this page, which depend on those props.  
**URL changed:** No.  
**Metadata changed:** No (schema/structured data only).  
**Content changed:** No visible content change.

### `app/contact/layout.tsx` (new file)

**Changed:** Added a route-level layout that supplies page-specific metadata (title, description, canonical, Open Graph/Twitter) via `generateMetadata()` from `lib/seo.ts`.  
**Why:** `/contact` is a `'use client'` page (it holds form state), so it cannot export Next.js `metadata` directly. It was the only route in the app with no page-specific metadata and was silently inheriting only the generic site-wide title/description.  
**SEO purpose:** A high commercial-intent page (contact/conversion) now has its own title, description and canonical instead of a generic fallback.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** No.

### `components/SectorSection.tsx`

**Changed:** Added a `sizes` attribute to the `<Image fill>` usage in the sector/industry card grid.  
**Why:** A Next.js `fill` image with no `sizes` prop defaults to requesting a full-viewport-width image on every breakpoint, including mobile, which works visually but is wasteful and can hurt mobile LCP/Core Web Vitals.  
**SEO purpose:** Better mobile performance signal; no visual change.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** No.

### Verification performed, no changes needed

- Confirmed every other `app/**/page.tsx` exports `metadata` or `generateMetadata`.
- Confirmed `app/robots.ts` and `app/sitemap.ts` point at the production domain and exclude non-indexable routes.
- Confirmed root `viewport` meta (`width=device-width, initialScale=1`) is set in `app/layout.tsx`.
- Confirmed the mobile navigation (`components/navbar.tsx`) has a working toggle with `aria-expanded`/`aria-controls`/`aria-label` and closes on Escape.
- Confirmed responsive (`sm:`/`md:`/`lg:`) classes are used throughout the homepage, navbar, footer and hero carousel.
- Ran a full `next build`: all 69 routes now compile and prerender as static content with no type errors.

### Next planned changes (updated)

- Strengthen contextual internal linking across all clusters.
- Review state pages for unique local value.
- Review Tier 2 pages and resource content.
- Set up ESLint config (`next lint` prompts for first-time setup; not run yet) and fix any lint findings.
- Manual/visual responsive QA at 375px, 768px and 1280px viewports (this pass checked code-level responsive patterns, not rendered screenshots).
- Re-crawl production after deployment and confirm the `/contact` metadata and Article schema fix are live.
