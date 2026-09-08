/**
 * Depth content for the seven `/technology/{platform}` pages.
 *
 * These pages were 468-610 words and answered "we support this platform"
 * without saying anything a competitor's page could not. What a buyer
 * searching a platform name actually wants to know is narrower and more
 * specific: what goes wrong in *this* system, what the recurring work inside it
 * is, and where the line sits.
 *
 * **The boundary is the hard part here.** `knowledge/company/scope-boundaries.md`
 * §5 forbids claiming implementation, configuration, customisation or
 * administration of any of these platforms, and forbids claiming vendor
 * certification or partner status. Accounstone works *inside* an existing
 * setup. Every entry below is written to that: the failure modes are accounting
 * failure modes that show up in the software, not software faults, and each
 * carries an explicit `notOurs` line rather than leaving it implied.
 *
 * No version numbers, no feature comparisons against competitors, no pricing.
 * Those age badly and none of them is what the reader is deciding.
 */

export interface PlatformDepth {
  slug: string;
  name: string;
  /** What actually goes wrong in this system, in the ledger rather than the UI. */
  failureModes: { h: string; p: string }[];
  /** The recurring work, named specifically enough to be checkable. */
  routine: string[];
  /** The line, in this platform's own terms. */
  notOurs: string;
  /** Questions a buyer searching this platform name actually asks. */
  faqs: { question: string; answer: string }[];
}

export const platformDepth: Record<string, PlatformDepth> = {
  quickbooks: {
    slug: 'quickbooks',
    name: 'QuickBooks Online',
    failureModes: [
      {
        h: 'Bank rules that were right once',
        p: 'A rule written to catch one vendor keeps firing after that vendor changes its descriptor, or after the business starts spending with someone whose descriptor looks similar. Nothing errors. The transactions post, the feed clears, and a category quietly accumulates things that do not belong in it. This is the single most common reason a QuickBooks file looks reconciled and still cannot be trusted at year end.',
      },
      {
        h: 'Undeposited Funds as a holding pen',
        p: 'Payments received but never matched to a deposit sit in Undeposited Funds indefinitely. The balance grows, the bank reconciles anyway because the deposits themselves cleared, and revenue is overstated by whatever never got matched. It is invisible from the P&L and obvious from the account detail.',
      },
      {
        h: 'Reconciliation discrepancies absorbed rather than resolved',
        p: 'When a previously reconciled transaction is edited or deleted, QuickBooks records the difference rather than refusing. The next reconciliation still balances. The Reconciliation Discrepancies account quietly holds the history of every change nobody chased, and it is one of the first places we look on a file we are taking over.',
      },
      {
        h: 'Aging that nobody works',
        p: 'A/R and A/P aging reports are only as useful as the follow-up behind them. Invoices marked as sent but never chased, and bills entered twice from an emailed PDF and a supplier statement, both age silently. The reports are right; the ledger reflects a position nobody acted on.',
      },
    ],
    routine: [
      'Bank and credit-card feeds reviewed against the rules that catch them, not just cleared',
      'Undeposited Funds worked down to zero, or explained',
      'Reconciliations completed with discrepancies chased rather than accepted',
      'A/R and A/P aging reviewed, with exceptions raised as exceptions',
      'Class or location tracking maintained where the reporting needs it',
      'Month-end close pack prepared in the form your reviewer reads',
    ],
    notOurs:
      'We do not implement or configure QuickBooks Online, migrate you onto it as a project, administer users and permissions as an IT function, or hold any Intuit certification or partner status. We work inside the file you already have, in your accounting routine.',
    faqs: [
      {
        question: 'What does outsourced QuickBooks bookkeeping actually involve day to day?',
        answer:
          'Transactions categorised as they arrive rather than in a monthly batch, bank and credit-card accounts reconciled, Undeposited Funds cleared, A/R and A/P aging reviewed with exceptions raised, and a month-end pack prepared in the form your reviewer reads. The work happens inside your existing file.',
      },
      {
        question: 'Our QuickBooks file is a mess. Where do you start?',
        answer:
          'With what can be established from the records that exist: unreconciled accounts, the Reconciliation Discrepancies balance, Undeposited Funds, duplicate bills and vendors, and categories that have drifted. We produce a list of what can be corrected and a shorter list of what needs a decision from you. Nothing is guessed at to make a period close.',
      },
      {
        question: 'Will you have access to our bank accounts through QuickBooks?',
        answer:
          'No. Read access to the file is enough for the work, and we do not hold payment authority anywhere. Where a bank feed connection is needed it stays under your credentials. Payments are prepared for your approval and released by you.',
      },
      {
        question: 'Are you QuickBooks certified?',
        answer:
          'We do not claim certification or Intuit partner status, and you should verify any such claim independently wherever you see it. What we offer is the accounting work around the file — bookkeeping, reconciliations, close preparation — not vendor accreditation.',
      },
      {
        question: 'Can you work in QuickBooks Online alongside our in-house bookkeeper?',
        answer:
          'Yes, and it is a common arrangement. The usual split is that we take the recurring processing and reconciliation volume and your bookkeeper keeps ownership of the relationships, the judgement calls and the review. It works when the boundary is written down at onboarding rather than assumed.',
      },
      {
        question: 'We are moving from QuickBooks Desktop. Can you help?',
        answer:
          'We can prepare for it and clean up after it — opening balances checked, post-migration reconciliation, historical periods reviewed against what came across. The migration itself is a software project and is not something we run.',
      },
    ],
  },

  xero: {
    slug: 'xero',
    name: 'Xero',
    failureModes: [
      {
        h: '"Reconciled" in Xero does not mean reconciled',
        p: 'Xero\'s reconcile tab clears when a statement line is matched to a transaction. That is a matching exercise, not a statement reconciliation — the account can be fully green while the balance disagrees with the bank. The check that matters is the Bank Reconciliation Summary against the actual statement balance, and it is the one most commonly skipped.',
      },
      {
        h: 'Bank rules and the OK button',
        p: 'Suggested matches and bank rules make clearing the feed fast, which is the point and also the risk. Accepting a suggestion is a decision, and at volume it stops feeling like one. Categories drift, and because everything is green nothing signals it.',
      },
      {
        h: 'Tracking categories set up once and never maintained',
        p: 'Tracking categories are what make Xero report by department, location or project. They are also optional on every transaction, so coverage decays quietly — a few months in, the reports are technically correct and materially misleading because half the spend is untracked.',
      },
      {
        h: 'Multi-currency revaluation left to the year end',
        p: 'Where a Xero organisation runs foreign-currency bank accounts or invoices, unrealised gains and losses accumulate. Left to the year end, the adjustment arrives as a surprise on the accounts rather than as a movement someone watched. It belongs in the monthly routine.',
      },
    ],
    routine: [
      'Feeds cleared with the rule reviewed, not just the suggestion accepted',
      'Bank Reconciliation Summary checked against the statement balance, monthly',
      'Tracking-category coverage checked rather than assumed',
      'Aged receivables and payables reviewed, with disputes and duplicates flagged',
      'Foreign-currency revaluation run as part of the close where it applies',
      'Fixed-asset register and depreciation kept current',
    ],
    notOurs:
      'We do not implement or configure Xero, run a migration onto it, manage your subscription or user access, or claim Xero certification or partner status. We work inside the organisation you already run.',
    faqs: [
      {
        question: 'Our Xero shows everything reconciled. Why would we need help?',
        answer:
          'Because Xero\'s reconcile tab clears when a statement line is matched, which is not the same as the account agreeing with the bank. The check that catches a real difference is the Bank Reconciliation Summary against the statement balance, and it is the one most often skipped. A fully green file can still disagree with the bank.',
      },
      {
        question: 'What does the monthly Xero routine actually cover?',
        answer:
          'Feeds cleared with the rules reviewed rather than accepted blind, the Bank Reconciliation Summary checked against statements, tracking-category coverage verified, aged receivables and payables reviewed with disputes and duplicates flagged, foreign-currency revaluation where it applies, and the fixed-asset register kept current.',
      },
      {
        question: 'Do you need adviser access to our Xero?',
        answer:
          'We need enough access to do the bookkeeping and nothing beyond it. Payment authority is never part of it — we prepare, you approve and release. Access levels are agreed in writing at onboarding rather than defaulted to the highest available.',
      },
      {
        question: 'Can you keep our tracking categories usable?',
        answer:
          'Yes, and it is mostly a maintenance job rather than a setup one. Tracking is optional on every transaction, so coverage decays quietly and the reports stay technically correct while becoming materially misleading. We check coverage as part of the close instead of assuming it.',
      },
      {
        question: 'We use Xero in more than one country. Does that work?',
        answer:
          'Yes. Different organisations run to different compliance cycles — the VAT quarter in the UK, BAS in Australia, sales tax in the US — and we keep each to its own rhythm rather than forcing one calendar across all of them.',
      },
      {
        question: 'Should we be on Xero or QuickBooks?',
        answer:
          'That depends on your workflows and who else touches the file, and we have written a comparison rather than a recommendation. We work in both, so we have no reason to push you toward either.',
      },
    ],
  },

  sage: {
    slug: 'sage',
    name: 'Sage',
    failureModes: [
      {
        h: 'A nominal ledger that grew rather than was designed',
        p: 'Sage files that have been running for years usually carry a nominal structure nobody owns: codes added for a one-off, near-duplicates that mean the same thing, and management reports built on top of both. Nothing is broken, and every report needs a mental translation before it can be believed.',
      },
      {
        h: 'Periods left open',
        p: 'Where periods are not locked after sign-off, entries land in months that were already reported. The comparatives move, nobody knows why, and reconciling this month means re-checking last month too. Locking is a discipline, not a feature nobody enabled.',
      },
      {
        h: 'Control accounts posted to directly',
        p: 'Debtors, creditors and VAT control accounts are meant to be driven by the sub-ledgers. Manual journals straight into them break the agreement between control account and sub-ledger, and the break usually surfaces at year end when someone tries to tie them out.',
      },
      {
        h: 'VAT treatment decided per transaction, inconsistently',
        p: 'Sage will accept whatever code is chosen. Where the same kind of supply gets coded three different ways depending on who entered it, the return still submits and the underlying detail no longer supports it. Consistency is a bookkeeping standard, not a software setting.',
      },
    ],
    routine: [
      'Bank, cash and card accounts reconciled to statement, monthly',
      'Debtors and creditors control accounts agreed to their sub-ledgers',
      'VAT coding checked for consistency as transactions post',
      'Periods closed and locked once reported',
      'Accruals, prepayments and depreciation posted as part of the close',
      'Year-end file prepared in the form your accountant asks for',
    ],
    notOurs:
      'We do not implement Sage, restructure your nominal ledger as a project, administer users, or claim Sage certification or partner status. We work inside the company file you already run, to your period calendar.',
    faqs: [
      {
        question: 'What does outsourced Sage bookkeeping cover?',
        answer:
          'Reconciliation of bank, cash and card accounts to statement; debtors and creditors control accounts agreed to their sub-ledgers; VAT coding checked for consistency as transactions post; accruals, prepayments and depreciation at the close; and periods locked once reported.',
      },
      {
        question: 'Our nominal ledger has become unusable. Can that be fixed?',
        answer:
          'Usually. Most of the problem is near-duplicate codes and codes created for a one-off that never got retired, and it can be cleaned up without disturbing history. What it needs first is a decision from you about what the management reporting should show — that is a business question, not a bookkeeping one, so we put it to you rather than assume it.',
      },
      {
        question: 'Do you prepare and submit our VAT return?',
        answer:
          'We prepare the records the return is read from, and we check that coding is consistent as transactions post rather than at quarter end. Submission stays with your registered practitioner — we do not hold HMRC credentials.',
      },
      {
        question: 'Why does locking periods matter?',
        answer:
          'Because an unlocked period accepts entries into months that were already reported. Comparatives shift, nobody knows why, and reconciling the current month means re-checking the last one. Locking after sign-off is what makes a reported month stay reported.',
      },
      {
        question: 'Are you a Sage partner?',
        answer:
          'No, and we do not claim any vendor accreditation. We provide the accounting work inside a Sage file; anyone claiming certification or partner status is worth verifying independently.',
      },
      {
        question: 'We are on an older Sage version. Is that a problem?',
        answer:
          'Not for the bookkeeping. The work is reconciliation, control-account agreement, coding consistency and close preparation, and those are the same on any version. Whether to upgrade is a software decision and not one we make for you.',
      },
    ],
  },

  netsuite: {
    slug: 'netsuite',
    name: 'NetSuite',
    failureModes: [
      {
        h: 'Intercompany balances that never quite agree',
        p: 'In a multi-subsidiary NetSuite account, intercompany entries are posted twice by two people with two views of the same transaction. They disagree by timing, by exchange rate, or by one side never being posted at all. Consolidation still runs. The elimination difference is what tells you, and by then it is a hunt.',
      },
      {
        h: 'Close checklists that live in someone\'s head',
        p: 'NetSuite has a period-close structure, and plenty of accounts run the close outside it anyway, on a spreadsheet the controller maintains. It works while that person is there. The failure mode is not the spreadsheet — it is that nobody else can tell what has actually been done this month.',
      },
      {
        h: 'Saved searches reporting on stale definitions',
        p: 'Management reporting in NetSuite typically rests on saved searches written against a segment structure that has since changed. The searches still run and still return numbers. Whether those numbers still mean what the report title says is a question nobody asks until they disagree with the GL.',
      },
      {
        h: 'Subsidiary-level detail lost to consolidated habits',
        p: 'Where the routine is built around the consolidated view, subsidiary-level reconciliation slips. Each entity still needs its own accounts to stand up on their own — for a local filing, an audit, or a buyer — and rebuilding that from a consolidated position is far more work than maintaining it.',
      },
    ],
    routine: [
      'Bank and balance-sheet account reconciliation per subsidiary, not only consolidated',
      'Intercompany balances agreed both ways before period close',
      'Period-close checklist worked inside NetSuite, so status is visible to more than one person',
      'Accruals, prepayments, deferrals and revenue schedules maintained as part of the routine',
      'Saved-search definitions checked against the current segment structure',
      'Consolidated and per-entity reporting packs prepared for review',
    ],
    notOurs:
      'We do not implement, configure or customise NetSuite, write or modify scripts and workflows, administer roles and permissions, or claim any NetSuite certification or partner status. Implementation is a specialist discipline and it is not ours. We do the accounting work inside an account that already runs.',
    faqs: [
      {
        question: 'Can you support a multi-subsidiary NetSuite account?',
        answer:
          'Yes, and the part that matters most is reconciling per subsidiary rather than only at the consolidated level. Each entity still needs accounts that stand up on their own for a local filing, an audit or a buyer, and rebuilding that from a consolidated position later is much more work than maintaining it.',
      },
      {
        question: 'Do you configure or customise NetSuite?',
        answer:
          'No. Implementation, configuration, scripting and workflow customisation are a specialist discipline and not one we claim. We work inside an account that already runs — reconciliation, close, intercompany and reporting preparation.',
      },
      {
        question: 'How do you handle intercompany?',
        answer:
          'By agreeing both sides before the period closes rather than after. Most intercompany differences are timing, exchange rate, or one side simply never posted, and all three are cheap to catch in the month and expensive to unpick at the year end.',
      },
      {
        question: 'Our close runs on a spreadsheet outside NetSuite. Is that a problem?',
        answer:
          'It works until the person maintaining it is unavailable, and then nobody can tell what has been done this month. We work the close inside NetSuite\'s own period structure so status is visible to more than one person, without changing what the close actually contains.',
      },
      {
        question: 'Can you take on just part of the NetSuite work?',
        answer:
          'Yes. A common split is that we take reconciliation and the recurring close preparation while your controller keeps ownership of judgement, review and anything client- or board-facing. The boundary gets written down at onboarding rather than assumed.',
      },
      {
        question: 'What about our saved searches and management reports?',
        answer:
          'We check that the definitions still match the current segment structure, because a saved search written against an older structure keeps running and keeps returning numbers that may no longer mean what the report title says. Changing what the reports should show is your decision, not ours.',
      },
    ],
  },

  'drake-tax': {
    slug: 'drake-tax',
    name: 'Drake Tax',
    failureModes: [
      {
        h: 'Season capacity is a preparation problem, not a review problem',
        p: 'The bottleneck in most firms is not the number of licensed reviewers, it is the hours those reviewers spend on organiser chasing, data entry and workpaper assembly before a return is reviewable. That is the part that scales with headcount, and it is the part that can be prepared elsewhere.',
      },
      {
        h: 'Returns that arrive at review incomplete',
        p: 'A return that reaches a reviewer with missing documents, unexplained variances against prior year, or unagreed book-to-tax differences is not a review — it is a second preparation pass by the most expensive person in the firm. The fix is a preparation standard, not more review capacity.',
      },
      {
        h: 'Prior-year comparatives nobody reconciled',
        p: 'Drake carries forward, which is what makes it fast and what makes an error persistent. A misclassification that survived last season rolls into this one and looks like agreement. Comparing against the trial balance rather than against last year\'s return is what breaks the chain.',
      },
      {
        h: 'Workpapers that cannot be followed a year later',
        p: 'The test is whether someone who was not there can pick up the file and see how a number was arrived at. Workpapers assembled to get through the season rarely pass it, and the cost lands on whoever handles the notice, the amendment or the audit.',
      },
    ],
    routine: [
      'Client documents gathered against a checklist and chased before the return is started',
      'Data entry into Drake from source documents, not from summaries',
      'Book-to-tax differences identified and supported rather than plugged',
      'Prior-year comparatives reconciled to the trial balance, not to last year\'s return',
      'Workpapers assembled so a reviewer can follow every number to its source',
      'Return packaged for your preparer to review, sign and file',
    ],
    notOurs:
      'We do not sign or e-file returns, hold an EFIN or PTIN, represent anyone before the IRS, give tax advice, or claim Drake certification. Every return is prepared for your CPA or Enrolled Agent to review, sign and file under their own credentials. That is a licensed responsibility and it stays with them.',
    faqs: [
      {
        question: 'How does outsourced tax preparation in Drake actually work?',
        answer:
          'We work inside your Drake environment, prepare returns from source documents rather than summaries, identify and support book-to-tax differences, reconcile prior-year comparatives to the trial balance, and assemble workpapers a reviewer can follow. Your CPA or EA reviews, signs and files.',
      },
      {
        question: 'Do you sign or e-file the returns?',
        answer:
          'No. We hold no EFIN or PTIN and we never sign a return. Signing and filing are licensed responsibilities under Circular 230 and they stay with your CPA or Enrolled Agent.',
      },
      {
        question: 'Can you represent our clients before the IRS?',
        answer:
          'No, and nobody should offer to on this basis. IRS representation requires a Form 2848 power of attorney held by a licensed CPA, Enrolled Agent or attorney. We prepare; your licensed people represent.',
      },
      {
        question: 'What does this actually free up during season?',
        answer:
          'The hours your reviewers currently spend on document chasing, data entry and workpaper assembly. Those are the tasks that scale with volume rather than with judgement, and they are what turns review into a second preparation pass by the most expensive person in the firm.',
      },
      {
        question: 'How do you handle client documents securely?',
        answer:
          'Through your systems rather than ours wherever possible, under NDA, with access limited to the people on your engagement. We do not move client data into tools you have not agreed to.',
      },
      {
        question: 'Can you scale up for the March and April crunch and back down after?',
        answer:
          'That is the usual shape of a tax-season engagement — capacity added for a defined window rather than a permanent headcount decision. It is scoped before the season starts, not negotiated during it.',
      },
    ],
  },

  cch: {
    slug: 'cch',
    name: 'CCH Axcess',
    failureModes: [
      {
        h: 'The engagement binder as an afterthought',
        p: 'Where workpapers are assembled at the end to satisfy a reviewer rather than built as the work happens, the binder documents a conclusion instead of supporting it. It passes review and fails the harder test a year later, when someone outside the engagement needs to follow how a number was reached.',
      },
      {
        h: 'Rollforward carrying last year\'s mistakes forward',
        p: 'Rollforward is what makes the platform efficient and what makes an error durable. A tickmark that was wrong last year, a schedule that no longer ties, a lead sheet mapped to a superseded trial balance — all of them roll cleanly into the new year and look like continuity.',
      },
      {
        h: 'Trial balance mapping nobody re-checks',
        p: 'When the client\'s chart of accounts changes and the mapping does not, the grouping still produces a report. It is simply reporting the wrong accounts under the right headings, and it will keep doing so quietly until someone reconciles the grouped totals back to the source.',
      },
      {
        h: 'Review notes as the only quality control',
        p: 'If everything is caught at review, review is doing preparation\'s job. A preparation standard that fixes the recurring findings before they reach a reviewer is what actually reduces the cycle, and it is measurable — the same notes stop recurring.',
      },
    ],
    routine: [
      'Trial balance imported and mapping re-checked against the current chart of accounts',
      'Lead schedules and supporting workpapers built as the work happens, not assembled after',
      'Rollforward reviewed rather than accepted, so last year\'s errors do not become this year\'s baseline',
      'Book-to-tax differences documented with support a reviewer can follow',
      'Recurring review findings tracked and closed out at the preparation stage',
      'Engagement file left in a state someone outside it can pick up',
    ],
    notOurs:
      'We do not implement or administer CCH Axcess, sign or file returns, form an audit opinion, or claim Wolters Kluwer certification or partner status. We prepare inside your environment, to your templates and your review points; every judgement, conclusion and signature stays with your firm.',
    faqs: [
      {
        question: 'What can be prepared in CCH Axcess without our reviewers?',
        answer:
          'Trial balance import and mapping checks, lead schedules, supporting workpapers, book-to-tax difference documentation, and the recurring preparation your reviewers currently absorb. Every conclusion, judgement and signature stays with your firm.',
      },
      {
        question: 'Do you form audit conclusions?',
        answer:
          'No. Audit support means preparing schedules, documentation and evidence for the engagement. Materiality, sampling decisions, testing conclusions and the opinion belong to the audit firm and cannot be delegated.',
      },
      {
        question: 'How do you avoid rolling last year\'s errors into this year?',
        answer:
          'By reviewing the rollforward rather than accepting it. Rollforward is what makes the platform efficient and also what makes an error durable — a tickmark that was wrong last year or a lead sheet mapped to a superseded trial balance rolls in cleanly and looks like continuity.',
      },
      {
        question: 'Will our review notes go up before they go down?',
        answer:
          'Expect a first cycle with more notes than usual while we learn your standards, and then fewer than before. We track recurring findings and close them out at preparation, which is the point of the arrangement — if the same notes keep recurring after two cycles, something is wrong and we would rather you told us.',
      },
      {
        question: 'Do you work inside our CCH environment or your own?',
        answer:
          'Yours. The engagement file stays where your firm controls it, under your access model and your retention rules. We do not move client data into tools you have not agreed to.',
      },
      {
        question: 'Are you CCH certified?',
        answer:
          'No, and we do not claim vendor accreditation of any kind. We provide the accounting and preparation work inside the platform, not certification.',
      },
    ],
  },

  myob: {
    slug: 'myob',
    name: 'MYOB',
    failureModes: [
      {
        h: 'GST coding reconstructed at BAS time',
        p: 'Where GST is decided when the activity statement is prepared rather than as transactions post, every BAS becomes a review of the whole quarter. The statement still lodges. The work is simply done three months late, under time pressure, by someone reading transactions they did not enter.',
      },
      {
        h: 'Bank feeds cleared without the rule being read',
        p: 'MYOB will match and clear quickly, which is the point. At volume, accepting a suggestion stops feeling like a decision, and categories drift while the feed stays green.',
      },
      {
        h: 'Payroll categories that do not match how STP reports them',
        p: 'Single Touch Payroll reports what the payroll categories say. Where categories were set up for internal convenience rather than to the reporting classification, what is reported and what the ledger shows diverge, and the divergence persists every pay run until someone reconciles them.',
      },
      {
        h: 'Superannuation accrued but not reconciled',
        p: 'The guarantee accrues each pay run whether or not anyone agrees the liability account back to what was actually paid. The gap is invisible in the P&L and obvious on the balance sheet, usually at the worst time.',
      },
    ],
    routine: [
      'GST coded as transactions post, so the BAS period is a read rather than a reconstruction',
      'Bank feeds cleared with the rule reviewed, not just the match accepted',
      'Payroll categories checked against how STP actually reports them',
      'Superannuation liability agreed to what was paid, each cycle',
      'Bank and balance-sheet accounts reconciled monthly, not quarterly',
      'BAS-ready records and supporting detail prepared for your registered agent',
    ],
    notOurs:
      'We do not implement or configure MYOB, migrate you onto it, hold ATO portal access, lodge activity statements or income tax returns, or claim MYOB certification or consultant status. BAS lodgment stays with your registered BAS agent and income tax lodgment with your registered tax agent.',
    faqs: [
      {
        question: 'What does offshore MYOB bookkeeping actually cover?',
        answer:
          'GST coded as transactions post rather than reconstructed at BAS time, bank feeds cleared with the rules reviewed, payroll categories checked against how STP reports them, superannuation agreed to what was paid, monthly reconciliation, and BAS-ready records prepared for your registered agent.',
      },
      {
        question: 'Do you lodge our BAS?',
        answer:
          'No. We prepare BAS-ready records and the supporting detail. Lodgment stays with your registered BAS agent, and income tax lodgment with your registered tax agent — we hold no ATO portal access.',
      },
      {
        question: 'Why code GST as transactions post rather than at quarter end?',
        answer:
          'Because deciding it at quarter end makes every BAS a review of the whole quarter, done under time pressure by someone reading transactions they did not enter. Coding at the point of posting turns the BAS period into a read.',
      },
      {
        question: 'Can you handle payroll and superannuation in MYOB?',
        answer:
          'The bookkeeping side, yes: processing, categories checked against how STP reports them, and the superannuation liability agreed to what was actually paid each cycle. Superannuation fund advice and employment advice are not ours.',
      },
      {
        question: 'Are you MYOB certified consultants?',
        answer:
          'No, and we do not claim it. If you need an MYOB implementation, configuration or a certified consultant, that is a different discipline and we would tell you so rather than take the work.',
      },
      {
        question: 'We use MYOB and Xero across different clients. Does that work?',
        answer:
          'Yes. The routine differs by platform but the standard does not — coded as it posts, reconciled monthly, exceptions raised rather than absorbed.',
      },
    ],
  },
};
