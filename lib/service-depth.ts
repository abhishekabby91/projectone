// ---------------------------------------------------------------------------
// Operational depth for the Service x Region pages.
//
// This content was merged down from the generic /services/{slug} pages before
// those URLs were redirected (2026-08-27). Those pages carried 600-1301 words
// each - the deepest content on the site - but had zero editorial inbound
// links, while the regional pages carried the commercial intent at 484-758
// words. The merge moves the substance to where the intent already was.
//
// Keyed `${serviceSlug}/${regionSlug}`. Every entry is region-adapted rather
// than a shared block with the country name swapped - that templating is what
// produced the 52.6% duplicate pair this restructure had to fix.
// ---------------------------------------------------------------------------

interface DepthItem { h: string; p: string }
interface DepthEntry { eyebrow: string; title: string; intro: string; items: DepthItem[] }

export const serviceDepth: Record<string, DepthEntry> = {
  // ---------------------------------------------------------------- bookkeeping
  'bookkeeping/united-states': {
    eyebrow: 'What decides the outcome',
    title: 'The Parts of Bookkeeping That Affect Everything Downstream',
    intro: 'Bookkeeping rarely fails on the posting itself. It fails on the inputs, the structure, and the review — and in the U.S. those problems surface at the state level long before anyone looks at the federal return.',
    items: [
      { h: 'Source documents are usually the real bottleneck', p: 'Transactions cannot be coded correctly from a bank feed alone. A card charge shows an amount and a merchant, not what was bought or which entity it belonged to. Where receipts and invoices arrive late or not at all, the ledger fills with plausible guesses that someone has to unpick at year end. Fixing document flow first usually does more for accuracy than any change to the posting process.' },
      { h: 'A chart of accounts compounds its own mistakes', p: 'A chart that grew by accretion — a new account each time something did not fit — produces reports nobody trusts. In the U.S. this bites hardest on multi-state activity: if revenue is not separable by state, the nexus picture cannot be assembled without rebuilding history. Getting the structure right is cheap early and expensive later.' },
      { h: 'Review is part of the process, not an audit of it', p: 'Every engagement has a named preparer and a named reviewer, with the review point agreed before work starts. The reviewer is looking at exceptions and judgment items, not re-performing the posting. Without that split, either everything gets checked twice or nothing gets checked at all.' },
      { h: 'The first month is not the steady state', p: 'Onboarding usually involves cleanup: unreconciled periods, an opening balance that does not agree, historical coding that has to be understood before it can be continued. That work is scoped separately from the recurring engagement, because pricing it as though it were routine misleads everyone.' },
      { h: 'Cost is driven by volume and mess, not by headcount', p: 'What moves the number is transaction volume, the number of accounts and entities, how many bank and card feeds have to reconcile, the state of the opening position, and turnaround expectations. Two businesses with the same revenue can differ several-fold on all of these.' },
    ],
  },
  'bookkeeping/united-kingdom': {
    eyebrow: 'What decides the outcome',
    title: 'The Parts of UK Bookkeeping That Affect Everything Downstream',
    intro: 'Under Making Tax Digital the ledger is no longer just an internal record — it is the substantiation behind a submitted return. That raises the cost of the ordinary problems.',
    items: [
      { h: 'The digital link is what usually breaks', p: 'MTD requires an unbroken digital path from the underlying record to the submitted figure. The break is rarely dramatic: someone exports to a spreadsheet, adjusts a total, and types the result into the return. Keeping the work inside the accounting system rather than around it is most of what compliance actually requires.' },
      { h: 'VAT coding has to be right at entry, not at quarter end', p: 'Standard-rated, zero-rated, exempt and outside-the-scope supplies each behave differently, and reverse charge adds another layer for construction and cross-border services. Correcting coding during the quarter is routine; reconstructing it during the return week is not.' },
      { h: 'Source documents are usually the real bottleneck', p: 'A bank feed shows an amount and a payee, not the VAT treatment. Without the invoice, the recoverable amount cannot be supported — and an unsupported claim is a different kind of problem from a miscoded one. Document flow is worth fixing before anything else.' },
      { h: 'The nominal ledger has to serve the year end too', p: 'The same ledger that produces the VAT return also produces the year-end accounts and the Corporation Tax computation. A structure that satisfies the quarter but obscures accruals, prepayments or director transactions creates work later that nobody budgeted for.' },
      { h: 'The first month is not the steady state', p: 'Onboarding typically involves bringing prior quarters into agreement, confirming the opening position, and understanding coding decisions made by whoever kept the books before. That cleanup is scoped separately from the recurring engagement.' },
    ],
  },
  'bookkeeping/australia': {
    eyebrow: 'What decides the outcome',
    title: 'The Parts of Australian Bookkeeping That Affect Everything Downstream',
    intro: 'In Australia the ledger feeds the BAS, and the BAS reports several obligations at once. A coding error therefore rarely stays contained to one line.',
    items: [
      { h: 'GST coding discipline is the whole game', p: 'GST-free, input-taxed and taxable supplies behave differently, and the distinction is not always obvious — food, health, education and financial supplies all have their own treatment. A mis-coded transaction distorts the BAS quietly and keeps distorting it until someone reconciles the GST control account against what was actually reported.' },
      { h: 'The control account has to be reconciled during the year', p: 'Reconciling GST control accounts only at year end means discovering twelve months of drift at the point when there is least time to investigate it. Doing it each BAS period turns a forensic exercise into a short check.' },
      { h: 'Source documents are usually the real bottleneck', p: 'A bank feed cannot tell you whether a supplier was registered for GST or whether a purchase was capital or expense. Without the tax invoice, the credit cannot be properly supported. Fixing document flow does more for BAS accuracy than any change to posting.' },
      { h: 'The chart of accounts has to survive 30 June', p: 'Because almost every entity shares a year end, there is no quiet period to restructure in. A chart that separates GST treatment cleanly, and that accommodates trust distributions where the entity is a trust, is worth establishing before the peak rather than during it.' },
      { h: 'The first month is not the steady state', p: 'Onboarding usually means bringing prior BAS periods into agreement, confirming the opening position, and understanding earlier coding decisions. That cleanup is scoped separately from the recurring work.' },
    ],
  },

  // ----------------------------------------------------------------- accounting
  'accounting/united-states': {
    eyebrow: 'How the work moves',
    title: 'How a U.S. Close Engagement Actually Runs',
    intro: 'The close is a sequence, and most of the difficulty comes from starting it before the prior steps are finished. This is the order the work is set up in.',
    items: [
      { h: '1. Review the current process', p: 'Before anything changes, we look at how the close runs today: what is reconciled and when, where the delays are, who reviews what, and which accounts consistently cause trouble. The point is to find the actual constraint rather than assume it.' },
      { h: '2. Define the close checklist', p: 'Every recurring task is written down with an owner, a sequence position and a due day relative to period end. This is the artefact the engagement runs on — without it, "the close" is a shared assumption rather than a process.' },
      { h: '3. Run the recurring reconciliations and entries', p: 'Bank, card and balance sheet reconciliations, recurring accruals, prepaid amortisation, and standard journals are prepared to the checklist. Exceptions are flagged as they arise rather than collected into a list at the end.' },
      { h: '4. Close and report', p: 'The period is closed and the reporting package assembled — P&L, balance sheet, and the supporting schedules a reviewer or lender will ask for, formatted to U.S. GAAP conventions.' },
      { h: '5. Review and hand off', p: 'The package goes to your controller or CPA with exceptions and judgment items called out explicitly, so review time is spent on decisions rather than on locating them.' },
    ],
  },
  'accounting/united-kingdom': {
    eyebrow: 'How the work moves',
    title: 'How a UK Close Engagement Actually Runs',
    intro: 'A UK close has to serve two masters — the VAT quarter and the year-end accounts — so the sequence is set up to satisfy both from one set of records.',
    items: [
      { h: '1. Review the current process', p: 'We start with how the close runs now: which accounts are reconciled, how the VAT return is currently assembled, where the year end typically slips, and which balances have been carried forward without being interrogated.' },
      { h: '2. Define the close checklist against both cycles', p: 'Tasks are written down with an owner and a due day, positioned so the VAT quarter and the year-end requirements draw on the same finished work rather than triggering two separate efforts.' },
      { h: '3. Run the recurring reconciliations and entries', p: 'Bank, debtor, creditor, accrual and prepayment reconciliations are prepared each period under FRS 102 conventions, with VAT control accounts agreed as part of the routine rather than at the quarter deadline.' },
      { h: '4. Close and report', p: 'The period is closed and management reporting assembled, with the year-end disclosure inputs — related parties, commitments, leases — accumulated during the year instead of reconstructed in the final weeks.' },
      { h: '5. Review and hand off', p: 'The package goes to your registered practitioner with exceptions and judgment items identified, ready for the decisions and submissions that are theirs to make.' },
    ],
  },
  'accounting/australia': {
    eyebrow: 'How the work moves',
    title: 'How an Australian Close Engagement Actually Runs',
    intro: 'With a shared 30 June year end, an Australian close has to be built so the peak is absorbed by work already done rather than work still to do.',
    items: [
      { h: '1. Review the current process', p: 'We look at how the close and the BAS currently interact, whether GST control accounts have been reconciled through the year, how last year end actually went, and which balances have been rolled forward unexamined.' },
      { h: '2. Define the close checklist against the BAS cycle', p: 'Recurring tasks are written down with an owner and a due day, positioned so each BAS period leaves the ledger in a state the year end can build on directly.' },
      { h: '3. Run the recurring reconciliations and entries', p: 'Bank, debtor, creditor and clearing account reconciliations are completed each period alongside GST control account agreement, with recurring accruals and provisions posted under AASB conventions.' },
      { h: '4. Close and report', p: 'The period is closed and reporting assembled, with BAS-ready records produced as an output of the close rather than as a separate exercise afterwards.' },
      { h: '5. Review and hand off', p: 'The package goes to your registered agent with exceptions and judgment items flagged, ready for the lodgment decisions that belong to them.' },
    ],
  },

  // ------------------------------------------------------------ tax-preparation
  'tax-preparation/united-states': {
    eyebrow: 'The handoff',
    title: 'A Better Handoff Starts Before the Return Is Opened',
    intro: 'Most tax-season friction is not in preparing the return. It is in the state of what arrives — and that is decided weeks earlier.',
    items: [
      { h: 'Intake', p: 'Source documents are gathered against a checklist built for the entity type, so a partnership return is not started while K-1 inputs are still outstanding. Missing items are identified at the start rather than discovered halfway through.' },
      { h: 'Prepare', p: 'The return is prepared in your software — Drake, CCH Axcess or whatever the practice runs — with workpapers built as the work proceeds rather than reconstructed afterwards for the reviewer.' },
      { h: 'Flag', p: 'Anything requiring judgment is stopped and flagged rather than decided: a position that could go more than one way, a basis question, an unusual transaction, an item where the documentation does not support the obvious treatment.' },
      { h: 'Review', p: 'What reaches the reviewer is a prepared return with tied-out workpapers and an explicit list of open questions. The reviewer applies judgment to flagged items instead of hunting for them.' },
      { h: 'Signature and filing stay with the licensed professional', p: 'The CPA or enrolled agent signs and files. We do not sign returns, do not file, and do not represent taxpayers before the IRS — that requires a licence under Circular 230.' },
    ],
  },
  'tax-preparation/united-kingdom': {
    eyebrow: 'The handoff',
    title: 'A Better Handoff Starts Before the Return Is Opened',
    intro: 'UK tax preparation pressure concentrates around the January Self Assessment deadline and each company’s own Corporation Tax date. Both are decided by how the file arrives.',
    items: [
      { h: 'Intake', p: 'Source documents and the underlying records are gathered against a checklist appropriate to the return — a CT600 needs a finished set of accounts behind it, a Self Assessment needs income sources confirmed and complete.' },
      { h: 'Prepare', p: 'Workpapers and computations are prepared from records that have already been reconciled, so the computation is built on an agreed position rather than a moving one.' },
      { h: 'Flag', p: 'Judgment items are stopped and raised: a disallowable expense that is arguable, a capital-versus-revenue question, a director transaction that needs a decision rather than a default treatment.' },
      { h: 'Review', p: 'The practitioner receives a prepared computation with supporting workpapers and a short list of open questions, rather than a folder to work through.' },
      { h: 'Submission stays with your registered practitioner', p: 'Filing to HMRC is theirs. We do not hold HMRC portal credentials, and we do not provide tax planning or advisory work in any form.' },
    ],
  },
  'tax-preparation/australia': {
    eyebrow: 'The handoff',
    title: 'A Better Handoff Starts Before the Return Is Opened',
    intro: 'Australian return preparation sits downstream of the BAS cycle and the 30 June close. Whatever was left unresolved there arrives here.',
    items: [
      { h: 'Intake', p: 'Records are gathered against a checklist matched to the entity — a company, a trust and a partnership each need different supporting material, and a trust needs its distribution resolutions before anything can be finalised.' },
      { h: 'Prepare', p: 'Workpapers and the return are prepared from a reconciled position, with GST-related differences already resolved during the year rather than surfacing as unexplained variances now.' },
      { h: 'Flag', p: 'Judgment items are raised rather than decided: deductibility that is arguable, a capital-versus-revenue question, a Division 7A consideration, a trust distribution that needs the agent’s direction.' },
      { h: 'Review', p: 'Your registered tax agent receives a prepared return with tied-out workpapers and an explicit list of open questions to apply judgment to.' },
      { h: 'Lodgment stays with your registered tax agent', p: 'Lodgment is theirs, as is BAS lodgment for a registered BAS agent. We do not hold ATO portal access, and we do not provide tax planning or structuring advice in any form.' },
    ],
  },

  // -------------------------------------------------------------------- payroll
  'payroll/united-states': {
    eyebrow: 'What goes wrong',
    title: 'Where Outsourced Payroll Actually Fails',
    intro: 'Payroll problems are rarely arithmetic. They come from access, registration and data that was wrong before the run started.',
    items: [
      { h: 'Bank access is the wrong thing to hand over', p: 'A payroll provider does not need the ability to move your money. We prepare the run and the funding file; releasing payment stays with your authorised signatory. Any arrangement that requires handing over banking control should be questioned regardless of who is offering it.' },
      { h: 'Remote employees create registration obligations', p: 'An employee working from another state generally requires the employer to register there for withholding and unemployment insurance. This is routinely missed because nothing about hiring the person signals it, and the consequence surfaces as a notice months later.' },
      { h: 'Worker classification is a decision, not a data field', p: 'Whether someone is an employee or a contractor determines withholding, tax forms and liability. We process according to the classification you have set; we do not make the determination, because getting it wrong carries consequences that belong with someone qualified to advise.' },
      { h: 'Year-end forms depend on data collected months earlier', p: 'W-2 and 1099-NEC accuracy depends on identification numbers and addresses being correct well before January. Chasing a missing TIN in the last week of the year is the ordinary cause of year-end delay, and it is entirely preventable.' },
      { h: 'Approval has to be a real step', p: 'Every run has a documented preparation and approval point. Without one, an error is only discovered after the money has moved, when correcting it is a payroll amendment rather than an edit.' },
    ],
  },
  'payroll/united-kingdom': {
    eyebrow: 'What goes wrong',
    title: 'Where Outsourced UK Payroll Actually Fails',
    intro: 'Real Time Information removed the catch-up period. What used to be corrected quietly at year end is now visible to HMRC immediately.',
    items: [
      { h: 'RTI leaves no room to reconcile later', p: 'The Full Payment Submission goes to HMRC on or before each pay date. An error is not an internal issue to tidy up at year end — it is already reported, and correcting it means an amended submission with its own trail.' },
      { h: 'Auto-enrolment assessment runs every period', p: 'Eligibility has to be assessed each pay period, not once at onboarding. Someone crossing the earnings threshold, or reaching the qualifying age, triggers duties that are easy to miss because nothing external announces them.' },
      { h: 'Bank access is the wrong thing to hand over', p: 'We prepare the run and the payment file; releasing funds stays with your authorised signatory. A payroll arrangement should never require handing over banking control.' },
      { h: 'Tax codes arrive mid-year and must be applied on time', p: 'HMRC issues code changes throughout the year. Applying one late produces an under- or over-deduction that the employee notices in their net pay, which is the most visible kind of payroll error there is.' },
      { h: 'Approval has to be a real step', p: 'Each run has a documented preparation and approval point before submission. Because RTI reports at the moment of payment, that check is the last opportunity to catch something cheaply.' },
    ],
  },
  'payroll/australia': {
    eyebrow: 'What goes wrong',
    title: 'Where Outsourced Australian Payroll Actually Fails',
    intro: 'Single Touch Payroll reports every pay event as it happens, and superannuation carries deadlines that behave unlike other payables.',
    items: [
      { h: 'Superannuation deadlines are unforgiving', p: 'Guarantee contributions are calculated on ordinary time earnings and must reach the fund by the quarterly cut-off. Missing it is treated differently from an ordinary late payment, so both the accrual and the payment timing need to be right and supported rather than reconstructed.' },
      { h: 'Ordinary time earnings is not the same as gross pay', p: 'Overtime is generally excluded from the calculation base while many allowances and loadings are included. Treating gross pay as the base is a common and quietly expensive error, because it compounds every quarter until someone checks.' },
      { h: 'STP reports each pay event, so errors surface immediately', p: 'Year-to-date figures are visible to the ATO and to employees continuously. An error is corrected in-cycle rather than absorbed into a year-end adjustment, which makes the pre-payment check the one that matters.' },
      { h: 'Bank access is the wrong thing to hand over', p: 'We prepare the run and the payment file; releasing funds stays with your authorised signatory. No payroll arrangement should require banking control.' },
      { h: 'Approval has to be a real step', p: 'Each pay event has a documented preparation and approval point before it is reported. Given that reporting happens at payment, this is the last inexpensive opportunity to catch a problem.' },
    ],
  },

  // ----------------------------------------------------------- accounts-payable
  'accounts-payable/united-states': {
    eyebrow: 'The workflow',
    title: 'The U.S. AP Workflow, Step by Step',
    intro: 'AP works when every invoice has an obvious next action and an obvious owner. These are the five points where that either holds or breaks down.',
    items: [
      { h: '1. Invoice received', p: 'Invoices arrive through a single defined channel rather than to individual inboxes, and are logged on arrival. An invoice sitting in someone’s email is invisible to the process and to the accrual.' },
      { h: '2. Matched and coded', p: 'The invoice is matched to a purchase order or receipt where one exists, coded to the correct account and entity, and checked against the vendor record — including the W-9 data that year-end 1099 reporting will depend on.' },
      { h: '3. Routed for approval', p: 'Approval follows your authority matrix, not an ad-hoc judgment about who to ask. Each item has a named approver and a visible status, so "waiting on approval" identifies a person rather than describing a state.' },
      { h: '4. Payment run prepared', p: 'Approved invoices are assembled into a run against the schedule, with duplicates and early-payment discounts checked. We prepare the run; releasing payment stays with your authorised signatory.' },
      { h: '5. Reconciled and closed', p: 'The AP subledger is agreed to the general ledger, the aging is reviewed for items stuck at any step, and unresolved queries are carried forward explicitly rather than silently.' },
    ],
  },
  'accounts-payable/united-kingdom': {
    eyebrow: 'What decides recovery',
    title: 'Why the UK Purchase Ledger Is a VAT Record First',
    intro: 'A UK purchase ledger does two jobs at once: it tracks what you owe, and it substantiates what you reclaim. The second job is the one that fails quietly.',
    items: [
      { h: 'Not every document is a VAT invoice', p: 'A pro-forma, a statement, an order confirmation and a delivery note all look like paperwork and none of them supports a reclaim. Identifying this at intake — rather than at the quarter — is the difference between requesting a proper invoice while the supplier relationship is warm and defending an unsupported claim later.' },
      { h: 'Reverse charge changes who accounts for the tax', p: 'For domestic construction services under the CIS reverse charge, and for many cross-border services, the customer accounts for the VAT rather than the supplier. The invoice will say so, but only if someone reads it. Missing this understates both output and input tax simultaneously.' },
      { h: 'CIS deductions belong at approval, not at payment', p: 'Where the Construction Industry Scheme applies, subcontractor status and the deduction rate need to be settled before the payment is prepared. Discovering at the payment run that verification was never done means either delaying the payment or making one that has to be corrected.' },
      { h: 'Partial exemption changes what is recoverable', p: 'A business making both taxable and exempt supplies cannot recover input tax in full, and the calculation depends on how costs are attributed. If the ledger does not distinguish those costs as they are posted, the attribution has to be reconstructed.' },
      { h: 'The ledger has to agree before the return, not after', p: 'The purchase ledger is agreed to the nominal ledger and the VAT control account checked as part of the routine close. Doing this at the quarter deadline converts a short reconciliation into a search.' },
    ],
  },
  'accounts-payable/australia': {
    eyebrow: 'What decides the credit',
    title: 'Why Supplier Data Decides Your Australian GST Credits',
    intro: 'In Australia the right to a GST credit turns on facts about the supplier as much as on the transaction. Those facts have to be captured when the invoice arrives.',
    items: [
      { h: 'An unregistered supplier cannot give you a credit', p: 'A supplier may hold an ABN without being registered for GST. If they are not registered, no credit arises no matter how the invoice is worded — and invoices from unregistered suppliers do sometimes show a GST line. Validating registration status, not just the ABN, is what protects the claim.' },
      { h: 'A missing ABN triggers withholding', p: 'Where a supplier does not quote an ABN, the business is generally required to withhold from the payment at the top rate. This is easy to miss because nothing about the invoice announces it, and the consequence lands on the business rather than the supplier.' },
      { h: 'Tax invoice thresholds are not optional', p: 'Above the prescribed threshold a document must meet the tax invoice requirements to support a credit. Below it, simpler evidence suffices. Treating every document the same way either creates unsupported claims or wastes effort chasing paperwork that was never needed.' },
      { h: 'Capital and expense purchases report separately', p: 'The BAS reports capital acquisitions separately from other acquisitions. If the ledger does not distinguish them as invoices are coded, that split has to be reconstructed each period from the detail.' },
      { h: 'The ledger has to agree before the BAS, not after', p: 'The purchase ledger is agreed to the general ledger and the GST control account checked each period. Left to the lodgment deadline, an ordinary difference becomes an investigation with no time to run it.' },
    ],
  },

  // -------------------------------------------------------- accounts-receivable
  'accounts-receivable/united-states': {
    eyebrow: 'The economics',
    title: 'What Slow Collection Actually Costs',
    intro: 'Receivables is the one accounting function where a process improvement shows up directly as cash. It is worth being concrete about the size of it.',
    items: [
      { h: 'DSO is working capital you have already earned', p: 'Days sales outstanding measures how long revenue sits on someone else’s balance sheet before it reaches yours. On $2M of annual revenue, moving DSO from 55 days to 40 releases roughly $82,000 of cash. That is not new profit — it is money you had already earned, arriving sooner.' },
      { h: 'The invoice date is the start of the clock', p: 'Terms run from issue, so every day between finishing the work and sending the invoice is a day of financing you have given away for nothing. Invoicing delay is the cheapest cash-flow problem to fix and the most commonly tolerated.' },
      { h: 'Unapplied cash makes collection harder than the debt does', p: 'When receipts are not matched promptly, the aging shows balances that are not really outstanding. Chasing a customer who has already paid costs the relationship, and it teaches your own team to distrust the report.' },
      { h: 'Consistency does more than escalation', p: 'A reminder sequence that runs on a defined cadence collects more than an aggressive one that runs sporadically. Customers organise their payment runs around suppliers who are predictable; intermittent chasing signals that your terms are negotiable.' },
      { h: 'Most aged debt is a dispute nobody logged', p: 'An invoice sitting at 90 days is usually not a customer refusing to pay. It is a missing purchase order number, a delivery query, or an invoice sent to a person who left. Reading the aging for cause turns collection into administration rather than confrontation.' },
    ],
  },
  'accounts-receivable/united-kingdom': {
    eyebrow: 'Credit control',
    title: 'What UK Credit Control Has That Other Markets Do Not',
    intro: 'UK receivables sit inside a statutory framework that gives creditors specific entitlements — and a VAT system that eventually gives relief on genuinely bad debt.',
    items: [
      { h: 'Statutory interest is an entitlement, not a threat', p: 'Under the Late Payment of Commercial Debts legislation, a business is generally entitled to interest and fixed compensation on overdue commercial invoices. Many businesses never apply it. Applying it consistently, and saying so in the terms, changes payment behaviour more reliably than a firmer email does.' },
      { h: 'VAT is owed on the invoice, not on the payment', p: 'Unless the business operates cash accounting for VAT, output tax falls due when the invoice is raised — so a slow-paying customer means funding HMRC ahead of receiving the money. That makes collection speed a VAT cash-flow question as well as a working capital one.' },
      { h: 'Bad debt relief has conditions and a clock', p: 'Where a debt goes genuinely unpaid, VAT bad debt relief may be available once the statutory conditions and time period are met and the debt has been written off in the accounts. It depends on records that show when the debt arose and what was done about it, which is a reason to document collection activity rather than just perform it.' },
      { h: 'An invalid invoice restarts the clock', p: 'A customer who cannot recover on your invoice will ask for it to be reissued, and their payment terms will run from the corrected version. Getting the VAT details right at issue is a collection measure, not just a compliance one.' },
      { h: 'The ledger has to be trustworthy to be useful', p: 'The sales ledger is agreed to the nominal ledger each period, with credit notes and write-offs documented, so the aged debtor report is something the business can act on rather than argue with.' },
    ],
  },
  'accounts-receivable/australia': {
    eyebrow: 'Cash and GST',
    title: 'How Australian Receivables Interact With the BAS',
    intro: 'In Australia the timing of what you report depends on how you account for GST — which means receivables and the BAS are the same problem viewed from two directions.',
    items: [
      { h: 'Accruals or cash accounting changes everything downstream', p: 'On a non-cash basis, GST is reported when the invoice is issued, so slow payment means remitting GST before the money arrives. On a cash basis, it is reported when payment is received. Which basis applies determines whether receivables are a working capital issue alone or a BAS timing issue as well.' },
      { h: 'A deficient tax invoice is a collection problem', p: 'A customer who cannot claim a credit on your invoice will send it back. The payment clock then restarts on the replacement. Getting the ABN, the GST amount and the description right at issue prevents a delay that has nothing to do with willingness to pay.' },
      { h: 'Written-off debts can carry a decreasing adjustment', p: 'Where GST has been reported on an invoice that is subsequently written off as bad, a decreasing adjustment may be available in a later activity statement. Claiming it depends on the write-off being properly recorded and dated, which makes documentation of collection activity worth keeping.' },
      { h: 'Unapplied cash distorts the BAS as well as the aging', p: 'On a cash basis, a receipt that has not been applied has not been recognised. The aging is wrong and the reported figure may be too, which is a more expensive kind of error than an untidy ledger.' },
      { h: 'Follow-up before 30 June is worth more than after', p: 'Collection effort concentrated ahead of the year end improves both the cash position and the debtors figure that the close reports. Once the year has turned, the same effort produces the same cash but a worse-looking set of accounts.' },
    ],
  },

  // -------------------------------------------------------------- audit-support
  'audit-support/united-states': {
    eyebrow: 'The workstreams',
    title: 'The Preparation Work Behind a U.S. Audit File',
    intro: 'A U.S. audit rarely stalls on technical accounting. It stalls on the distance between the PBC list and the state of the file.',
    items: [
      { h: 'Lead schedules that agree to the trial balance', p: 'Balance sheet lead schedules built from the general ledger, cast and agreed, with movements explained rather than left for the audit team to derive from the detail.' },
      { h: 'Year-end reconciliations finished first', p: 'Bank, receivable, payable, accrual, prepaid and intercompany reconciliations completed and supported before the request list arrives, so fieldwork is not spent waiting.' },
      { h: 'The PBC list worked as a checklist', p: 'Prepared-by-client requests tracked item by item with a visible status, so open items are known throughout rather than discovered at the end of fieldwork.' },
      { h: 'Sample support pulled and indexed', p: 'Invoices, contracts and supporting documents retrieved against the auditor’s selections and indexed to the reference they asked for, rather than delivered as an undifferentiated folder.' },
      { h: 'Disclosure support under U.S. GAAP', p: 'Underlying analysis for the footnotes — related parties, commitments, leases, revenue disaggregation under ASC 606 — prepared for your CPA to review and finalise.' },
      { h: 'The line that does not move', p: 'Every item above is preparation performed for the company. The engaged auditor designs the procedures, selects the samples, evaluates the evidence and issues the opinion.' },
    ],
  },
};
