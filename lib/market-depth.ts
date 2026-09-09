/**
 * Depth content for the UK and Australia sub-market pages.
 *
 * These exist because the US had three sub-market pages (`/markets/united-states/
 * {california,florida,texas}`) and the UK and Australia had none — the two markets
 * the site sells into hardest carried strictly less surface area than the domestic
 * one. `docs/SEARCH-INTENTS.md` had no owner for either market's primary recurring
 * compliance cycle, which `knowledge/markets/uk.md` and `knowledge/markets/au.md`
 * both name explicitly: VAT reporting in the UK, GST and BAS reporting in Australia.
 *
 * **The differentiation rule these are written to, and it is the whole reason they
 * do not cannibalise `/markets/{country}`:** the market page covers the whole year
 * across every cycle at one level of detail. A page here covers ONE cycle at the
 * level of the ledger — what gets decided at the point of posting, and what that
 * costs when it is decided at the deadline instead. If you find yourself writing a
 * second cycle onto one of these pages, it belongs on the market page.
 *
 * **No rates, thresholds, registration limits, deadlines or turnaround times appear
 * anywhere in this file, and none may be added.** This is the same constraint
 * `lib/us-states.ts` records and for the same reason: they change every year, a
 * figure that is right today is wrong within a year with nobody watching, and
 * inventing one breaches the never-invent-statistics rule. Every page routes the
 * computation, the position and the submission to the licensed party.
 *
 * **The boundary is per-market and it is not decoration.** `knowledge/markets/uk.md`:
 * "HMRC portal submission stays with the client's registered practitioner.
 * Accounstone must not hold HMRC portal credentials." `knowledge/markets/au.md`:
 * "income tax lodgment stays with a registered tax agent. BAS lodgment stays with a
 * registered BAS agent. Accounstone must not hold ATO portal access." Hence
 * `boundaryHeading` — "your CPA" is the US phrasing and is wrong in both markets.
 *
 * Terminology is checked against those same files: "VAT" never "sales tax",
 * "year-end accounts" never "annual report", "BAS-ready" never "sales tax filing",
 * "preparation" never "lodgement". `/markets/united-kingdom` addresses accountancy
 * practices and `/markets/australia` accounting firms — do not let "CPA firm" leak
 * into either.
 */

export interface MarketDepth {
  slug: string;
  /** Used in the ledger-section heading. */
  name: string;
  /** Heading over the boundary block — the licensed party differs per market. */
  boundaryHeading: string;
  /** The assumption this market's buyers actually arrive with. */
  misconception: { claim: string; reality: string };
  /** What this cycle changes about the ledger itself. */
  ledger: { h: string; p: string }[];
  faqs: { question: string; answer: string }[];
  boundary: string;
}

export const marketDepth: Record<string, MarketDepth> = {
  'uk-vat': {
    slug: 'uk-vat',
    name: 'The VAT Quarter',
    boundaryHeading: 'What stays with your registered practitioner',
    misconception: {
      claim: '"The VAT return is a job at the end of the quarter."',
      reality:
        'It is a readout of decisions already made. Every transaction that posted during the quarter carried a VAT treatment at the moment it was recorded, and the return is the sum of those treatments. A quarter assembled in the final week is not a preparation job — it is a reconstruction, performed under deadline, by someone deciding three months of treatments at once from bank lines and memory. That is where the errors come from, and it is also why the work feels bigger every quarter rather than smaller.',
    },
    ledger: [
      {
        h: 'The treatment is decided when the transaction posts, not sorted out afterwards',
        p: 'Standard-rated, zero-rated, exempt and outside the scope are four different things that a hurried coder collapses into two. The distinction matters at the point of entry because that is when the supporting document is in front of someone and the supplier is still answering emails. Coded correctly as it lands, the quarter closes on the reconciliation. Coded loosely, someone re-derives it later from a bank narrative, which is the most expensive way to get a plausible answer.',
      },
      {
        h: 'The digital link chain has to survive every step between record and return',
        p: 'Making Tax Digital does not simply require software — it requires the path from the underlying record to the submitted figure to be unbroken. A quarter that is exported, hand-adjusted in a spreadsheet and re-keyed produces a number nobody can walk back to a transaction. We work inside the accounting file so the chain stays intact and any adjustment is a posted entry with a reason attached, rather than a cell someone typed over.',
      },
      {
        h: 'Partial exemption and mixed supplies need separable accounts, not one VAT bucket',
        p: 'A client with both taxable and exempt activity cannot be run through a single control account and split at the end — the split has to be visible in the ledger structure or it is guesswork. Where a business has changed activity mid-year, that is exactly the year the structure needed to change with it. We set the accounts up to carry the distinction and keep them that way, so the recovery position is readable rather than recalculated.',
      },
      {
        h: 'No valid VAT invoice means no supported input tax, whatever the entry says',
        p: 'A posted credit with nothing behind it is worse than a missing one, because it looks finished. Missing or inadequate evidence goes to an open-items list naming what is absent and who was asked for it. It does not receive a plausible code and disappear into the ledger, which is the failure that surfaces years later when someone asks to see the file.',
      },
      {
        h: 'The VAT control account either agrees or it does not, and that is knowable monthly',
        p: 'Reconciling it once a quarter means finding a break three months after it happened, when the person who made the entry has forgotten the circumstances. Reconciling monthly means the break is a day old and the answer is usually still in someone’s inbox. The work is the same; only the cost of the discrepancy changes.',
      },
    ],
    faqs: [
      {
        question: 'Do you submit the VAT return to HMRC?',
        answer:
          'No. We do not hold HMRC portal credentials and we do not want them. We prepare the quarter so the return can be produced from records that reconcile, and your practice reviews it, approves it and submits it. That division is deliberate and it is not negotiable at any price.',
      },
      {
        question: 'Who decides an arguable VAT treatment?',
        answer:
          'Your practice does. Where a transaction has a genuinely arguable liability position — a mixed supply, a place-of-supply question, a partial exemption method — it goes to you flagged, with what we know and what we could not establish. We apply the treatment you set. We do not form the view and we do not advise on it.',
      },
      {
        question: 'We use a bridging spreadsheet. Does that have to change?',
        answer:
          'Not necessarily, and that is your call. What we will tell you is where the digital link actually breaks in your current path, because that is usually less obvious than it looks and it is the part that matters if the file is ever examined. We work inside your accounting software either way.',
      },
      {
        question: 'Our last few quarters were prepared under pressure and we are not confident in them.',
        answer:
          'That is common and it is scoped separately from the recurring work. Bringing prior quarters into agreement is a different job from keeping the current one current, and pricing it as though it were routine would misrepresent both. We would look at what is there before saying anything about what it would take.',
      },
      {
        question: 'Can we try this on one client before moving a portfolio?',
        answer:
          'That is the way we would suggest doing it — one client, one VAT quarter. If the output is not what you wanted, you have spent a quarter of one client’s preparation finding out rather than a year.',
      },
    ],
    boundary:
      'Submission through the HMRC portal, and the credentials that permit it. Any arguable liability or place-of-supply position. The partial exemption method. Registration and deregistration decisions. Anything approaching advice on how a transaction should be structured. We prepare the records the return is produced from; the return is submitted by the registered practitioner who is accountable for it, and that is your practice.',
  },

  'uk-year-end': {
    slug: 'uk-year-end',
    name: 'The Year-End File',
    boundaryHeading: 'What stays with your registered practitioner',
    misconception: {
      claim: '"Year-end accounts are a job that starts after the year ends."',
      reality:
        'The preparation is not the expensive part. The reconstruction is. Related-party transactions, director balances, lease commitments and the handful of items the disclosure notes actually turn on were all decided during the year and mostly recorded as ordinary transactions. Rebuilding them afterwards means reading twelve months of ledger backwards to work out which entries were something other than what they appeared to be — every year, for every client, in the same eight weeks.',
    },
    ledger: [
      {
        h: 'Disclosure inputs accumulate during the year or get rebuilt under deadline',
        p: 'A related-party transaction looks exactly like an ordinary one in the ledger unless somebody marks it when it posts. So do director loans, and so do commitments that were entered into in March and disclosed in December. Capturing them as they occur costs a field. Recovering them afterwards costs a review of the whole year, done by whoever is available in the busiest month of it.',
      },
      {
        h: 'The reporting framework changes what the ledger has to carry, and it is set at the start',
        p: 'FRS 102 and FRS 105 do not ask the same things of the underlying records, and a client that moves between them, or crosses into a different regime as it grows, needs its books to have been kept for where it is going rather than where it was. Your practice determines the framework. We keep the records to the standard it requires, and we say early when what is being kept will not support what is coming.',
      },
      {
        h: 'The accounts and the VAT returns have to be the same set of books',
        p: 'When year-end adjustments are made in one place and the quarters were prepared from another, the two stop agreeing and nobody notices until something has to be explained. One ledger, adjusted by posted entries with reasons attached, means the year-end file ties to the quarters that fed it without anyone having to build a bridge between them.',
      },
      {
        h: 'Comparatives and prior-year adjustments are where a clean file goes wrong quietly',
        p: 'A restatement, a reclassification, or a correction to an opening balance changes what last year’s figures mean, and if it is handled only in the accounts and not in the ledger, next year starts from a position that no longer reconciles. We carry the change through the records so the following year opens on a balance that agrees, rather than one that has to be explained again.',
      },
      {
        h: 'The file that arrives with you should be reviewable, not re-performable',
        p: 'A year-end pack whose workings are not visible is a pack your reviewer has to redo. Every file has a named preparer and a named internal reviewer before it reaches your practice, and that review looks at exceptions and judgement items rather than re-performing the posting. What is unresolved arrives labelled as unresolved.',
      },
    ],
    faqs: [
      {
        question: 'Do you file the accounts at Companies House?',
        answer:
          'No. We prepare the file; your practice reviews it, approves it, signs it and files it. We do not hold filing credentials for Companies House or for HMRC, and there is no engagement in which we would.',
      },
      {
        question: 'Which framework do you prepare under?',
        answer:
          'The one your practice has determined for that client — FRS 102 for most entities, FRS 105 for micro-entities, or whatever treatment you have set where a client reports otherwise. We follow the framework decision. We do not make it, and we would not be the right party to.',
      },
      {
        question: 'Who decides accounting policy and judgement items?',
        answer:
          'Your practice, in every case. Estimates, provisions, impairment, revenue recognition on anything genuinely arguable — these come to you with the working and what we could establish, and we apply what you decide. A preparer forming those views independently is precisely what makes an outsourced file untrustworthy.',
      },
      {
        question: 'Can you work in our templates rather than introducing your own?',
        answer:
          'Yes, and we would prefer to. A parallel set of workpapers creates reconciliation work instead of removing it, and it makes your reviewer learn a second format for no benefit.',
      },
      {
        question: 'The bookkeeping for these clients is not ours — it arrives in whatever state it arrives in.',
        answer:
          'That is the ordinary case and it is worth scoping honestly. Preparing accounts from records that were kept for something else is a different job from preparing them from records we maintained, and it takes longer. We would rather say that at the start than discover it in the eighth week.',
      },
    ],
    boundary:
      'The reporting framework, and the tier a client sits in. Every accounting policy and every judgement item — estimates, provisions, impairment, arguable recognition. The going-concern assessment. Approval, signature and filing at Companies House, and the credentials that permit them. Corporation tax positions of any kind. We prepare the file and show our working; the accounts are your practice’s to review, judge, sign and file.',
  },

  'au-bas': {
    slug: 'au-bas',
    name: 'The BAS Quarter',
    boundaryHeading: 'What stays with your registered BAS or tax agent',
    misconception: {
      claim: '"The BAS is a form somebody fills in each quarter."',
      reality:
        'It is a readout of coding that already happened. Every transaction carried a GST treatment when it was entered, and the statement adds them up. The firms for whom BAS season is genuinely painful are almost never the ones with the most transactions — they are the ones whose transactions were coded loosely as they landed, so the fortnight before the statement is spent deciding three months of treatments retrospectively and hoping the control account lands somewhere defensible.',
    },
    ledger: [
      {
        h: 'GST-free, input-taxed and taxable are not interchangeable, and the difference is set at entry',
        p: 'They produce different numbers on the statement and they are decided by what the supply actually was — which is knowable when the document is in front of someone and much less knowable in retrospect from a bank feed. Coded as it lands, the quarter closes on a reconciliation. Coded roughly, someone rebuilds the logic later from narratives, and every ambiguous line becomes a judgement call made by whoever is fastest.',
      },
      {
        h: 'No valid tax invoice means no supported credit, whatever the entry looks like',
        p: 'A claimed credit with nothing behind it is more dangerous than an unclaimed one, because it looks complete. Missing or inadequate documentation goes on an open-items list naming what is absent and who was asked. The alternative — a plausible code and a quiet disappearance into the ledger — is the failure that costs a firm its confidence in the whole file.',
      },
      {
        h: 'The GST control account has to agree before the statement, not after it',
        p: 'It either reconciles or it does not, and that is a fact available every month rather than a discovery made in the last fortnight. Finding a break a week before the statement is due means fixing it under time pressure with the wrong people available. Finding it in the month it happened usually means an email and a correcting entry.',
      },
      {
        h: 'PAYG withholding and instalments land on the same statement and come from somewhere else',
        p: 'They are payroll and income-tax figures arriving on a GST form, which is why they are the part that gets checked last and reconciles least often. The withholding on the statement has to agree with what payroll actually reported, and if the two are maintained by different people on different rhythms they drift. We keep them reconciled to each other as part of the same quarter rather than as a separate exercise.',
      },
      {
        h: 'Cash or accruals changes what the quarter even contains',
        p: 'The same set of transactions produces a different statement depending on the basis the client is on, and the basis is a decision that was made once and is often not front of mind for whoever is coding. Where a client has changed basis, the transition quarter is the one that needs care and is the one most likely to be handled as though nothing changed. We keep the basis explicit in how the records are maintained.',
      },
    ],
    faqs: [
      {
        question: 'Do you lodge the BAS?',
        answer:
          'No. BAS lodgment stays with a registered BAS agent and income tax lodgment with a registered tax agent. We are neither, we do not hold ATO portal access, and there is no arrangement in which we would. We prepare the records so the statement can be produced from figures that reconcile; your firm reviews and lodges.',
      },
      {
        question: 'Who decides a GST treatment we are not certain about?',
        answer:
          'Your firm. Where a supply is genuinely arguable — mixed supplies, going-concern questions, anything where the classification is a position rather than a fact — it comes to you flagged with what we established and what we could not. We apply your determination. We do not form it and we do not advise on it.',
      },
      {
        question: 'Does this overlap with our existing bookkeeping arrangement?',
        answer:
          'It might, and that is worth establishing before anything moves. If GST coding is already being done well as transactions post, the quarter is mostly reconciliation and the gain here is smaller. Where the coding happens retrospectively, that is the whole cost and it is the part this addresses.',
      },
      {
        question: 'Our previous quarters were reconstructed and we would not want them examined closely.',
        answer:
          'Bringing prior quarters into agreement is scoped separately from keeping the current one current — they are different jobs and quoting them as one would misrepresent both. We would want to look at what is actually there before saying anything about the size of it.',
      },
      {
        question: 'Can we start with a single client?',
        answer:
          'One client, or one BAS quarter, is what we would suggest. Both sides see real output on real records before anything scales, and if it is not what you wanted you have spent a quarter finding that out rather than a lodgment season.',
      },
    ],
    boundary:
      'Lodgment of the BAS and of income tax returns, and the registered-agent status that permits it. ATO portal access of any kind. Any arguable GST classification or liability position. The reporting basis, and any change to it. Anything approaching tax planning — which in an Australian context includes capital gains structuring, negative gearing and salary sacrificing, none of which we advise on in any form. We prepare BAS-ready records; the statement is lodged by your registered agent.',
  },
};
