// ---------------------------------------------------------------------------
// Region-specific narrative for the Service x Region pages.
//
// Written against AI-WEBSITE-GUIDE.md "Content psychology principles":
//   1. Reduce uncertainty before selling - say what happens when information
//      is missing, who escalates, where the boundary sits.
//   2. Speak to the hidden cost of review - the expensive problem for a firm
//      is usually senior time spent finding and re-explaining corrections.
//   3. Respect the buyer's control - never imply the books or the client
//      relationship move.
//   4. Make the reader feel understood - name the actual situation, without
//      manufacturing pain.
//   5. Operational specificity as proof of understanding - real forms, real
//      deadlines, real sequences beat adjectives.
//
// Prose, not bullets: these pages already carry scope checklists,
// delegated/retained lists and numbered steps. Another list would add length
// without adding understanding.
//
// Every regional fact traces to knowledge/markets/{us,uk,au}.md. No page here
// claims tax planning, advisory, representation, lodgment/submission, software
// implementation, or CFO/HR services - see knowledge/company/scope-boundaries.md.
// ---------------------------------------------------------------------------

interface ContextEntry {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  aside?: { label: string; text: string };
}

export const regionalContext: Record<string, ContextEntry> = {
  // ---------------------------------------------------------------- bookkeeping
  'bookkeeping/united-states': {
    eyebrow: 'If this sounds familiar',
    title: 'When the Books Are Done but the Reviewer Still Has Work',
    paragraphs: [
      "The books are usually not the problem. The problem is what your reviewer finds when they open them: a suspense account that has been growing quietly, a run of card transactions coded to the wrong entity, an owner draw sitting in operating expenses. None of it is difficult. All of it takes a senior person an afternoon to unpick, that afternoon repeats every month, and across a client base it is most of a full-time role nobody budgeted for.",
      "So the useful question is not whether bookkeeping can be handed over. It is whether the handoff leaves your reviewer with less work than before. That depends almost entirely on how exceptions are handled. When a transaction cannot be coded from the bank feed alone, the choice is to guess or to ask. Guessing produces a clean-looking ledger and a bad month-end. We ask, and we put the open items in one place instead of scattering them through the ledger.",
      "For any client operating in more than one state, the same discipline decides whether the state picture is visible or has to be reconstructed later. Revenue and activity tracked by state as it posts is a routine habit. Rebuilding it after twelve months is a project, and it lands on your firm rather than on the client who created it.",
    ],
    aside: {
      label: 'What we do when information is missing',
      text: "The transaction is posted to a holding account and added to an open-items list with what we need and who we asked. It does not get a plausible code and disappear. You see the list before the close, not after.",
    },
  },
  'bookkeeping/united-kingdom': {
    eyebrow: 'If this sounds familiar',
    title: 'When the VAT Quarter Turns Into a Reconstruction',
    paragraphs: [
      "The pattern repeats across a portfolio. A client\u2019s ledger drifts for two months, the quarter ends, and someone in your practice spends a week getting it into a state the return can be prepared from. The work is not hard. It is compressed, it is unbillable at the rate the person doing it costs, and it happens four times a year per client whether or not anyone has capacity for it.",
      "Under Making Tax Digital the cost of that drift went up, because the ledger is no longer just an internal record. It is the substantiation behind a figure that has been submitted. A transaction coded standard-rated when it should have been zero-rated is no longer a tidy-up item; it is a correction with a trail. Getting the coding right in the week it happens is a different job from getting it right in the week the return is due.",
      "None of that changes who decides. Your practice keeps the VAT scheme decisions, any treatment that is genuinely arguable, the client conversation, and the submission itself. What moves is the recurring preparation underneath \u2014 and with it, the reason your qualified people were posting transactions in the first place.",
    ],
    aside: {
      label: 'The question practices ask first',
      text: "\"What if the client\u2019s books are already behind?\" That is common across any portfolio, and it is scoped separately from the recurring work. Bringing prior quarters into agreement is a different job from keeping the current one current, and pricing it as though it were routine would misrepresent both.",
    },
  },
  'bookkeeping/australia': {
    eyebrow: 'If this sounds familiar',
    title: 'When GST Coding Errors Only Surface at Lodgment',
    paragraphs: [
      "A mis-coded transaction in Australia does not announce itself. It sits in the ledger looking ordinary, flows into the BAS, and stays there until someone reconciles the GST control account against what was actually reported. If that only happens at year end, the reconciliation stops being a check and becomes an investigation, usually in the same weeks as everything else.",
      "The distinctions that cause it are not exotic. GST-free, input-taxed and taxable supplies each behave differently, and the line is not always obvious in food, health, education or financial supplies. A bank feed cannot tell you which applies, and it cannot tell you whether the supplier was registered for GST at all. Without the tax invoice, the credit is not supported no matter how the entry looks.",
      "So the recurring work is worth doing properly at the point of entry rather than at the point of lodgment. The registered BAS or tax agent in your firm keeps the lodgment and any question of treatment. What we keep current is the ledger they rely on, with GST control reconciled each period rather than once a year — across the client base, not just the clients somebody got to.",
    ],
    aside: {
      label: 'On the 30 June concentration',
      text: "Because almost every Australian entity shares a year end, your firm has no quiet quarter to catch up in. Work deferred on one client is not absorbed later - it lands in the same weeks as the June BAS and every other client's year-end close.",
    },
  },

  // ----------------------------------------------------------------- accounting
  'accounting/united-states': {
    eyebrow: 'If this sounds familiar',
    title: 'When the Close Package Gets Assembled Twice',
    paragraphs: [
      "There is a version of month-end where the numbers arrive, the controller reviews them, and the close is done. There is a more common version where the numbers arrive, the controller finds that two accounts do not tie, rebuilds the schedules to work out why, and effectively closes the month a second time. The second version is expensive, and it is expensive in senior hours rather than in fees.",
      "What separates them is usually the checklist. Not a checklist as a document that exists, but as the thing the work actually runs on: each recurring task with an owner, a position in the sequence, and a due day relative to period end. Without it, the close is a shared assumption about what someone probably did, and the reviewer has to verify rather than review.",
      "The judgment stays where it belongs. Reclassifications that turn on intent, accounting policy, anything with a tax consequence, and sign-off on the statements remain with your controller or CPA. What we prepare is the reconciled position those decisions are made from, with the exceptions listed rather than buried.",
    ],
    aside: {
      label: 'What arrives with your reviewer',
      text: "A closed period, tied-out schedules, and a short list of the items that need a decision - each one flagged with what we found and what we need. The reviewer spends time deciding, not locating.",
    },
  },
  'accounting/united-kingdom': {
    eyebrow: 'If this sounds familiar',
    title: 'When the Year End Starts From a Standing Start',
    paragraphs: [
      "A UK close carries two obligations that draw on the same records: the VAT quarter that keeps arriving, and the year-end accounts that arrive once but need everything the quarters were supposed to have kept in order. When the monthly work is treated as VAT preparation alone, the year end begins by establishing what the balances actually are.",
      "That shows up in predictable places. Accruals and prepayments carried forward without being interrogated. Director transactions that need a decision nobody made at the time. Disclosure inputs - related parties, commitments, leases - that were never accumulated during the year and now have to be reconstructed from twelve months of detail under time pressure.",
      "Running the close so both obligations draw on one finished set of records is mostly a sequencing question rather than a volume one. Your registered practitioner keeps the framework decision, anything that turns on judgment, and the filings to HMRC and Companies House. We keep the underlying position current enough that their review is a review.",
    ],
    aside: {
      label: 'On who holds what',
      text: "We do not hold HMRC or Companies House credentials, and we do not make the FRS 102 policy calls. Where a treatment is genuinely arguable, it comes to your practitioner as a question with the supporting detail attached, not as a decision already taken.",
    },
  },
  'accounting/australia': {
    eyebrow: 'If this sounds familiar',
    title: 'When Every Deadline Lands in the Same Six Weeks',
    paragraphs: [
      "Australian finance teams do not have a spread of deadlines. They have a cliff. Year-end close, the June quarter BAS, superannuation for the quarter, and the start of the audit or tax preparation queue all arrive within weeks of each other, and they arrive for the same small team every year.",
      "What decides how that period goes is almost entirely what happened before it. If GST control accounts were reconciled each period, June is a check. If clearing accounts were agreed as they went, the opening position is known. If neither happened, the same weeks now carry the reconciliation work that was deferred, and it is being done at the point of least available time.",
      "So the practical value of a recurring close here is less about the monthly report and more about what it prevents. Your registered agent keeps the lodgments and the treatment decisions. We keep the ledger in a state where 30 June is a deadline rather than a project.",
    ],
    aside: {
      label: 'What BAS-ready actually means',
      text: "GST coding reviewed and the control account agreed, the ledger current, and the supporting detail organised - so your registered BAS agent is checking and lodging rather than reconstructing. The lodgment itself stays with them.",
    },
  },

  // ------------------------------------------------------------ tax-preparation
  'tax-preparation/united-states': {
    eyebrow: 'If this sounds familiar',
    title: 'When Tax Season Capacity Is the Constraint, Not Skill',
    paragraphs: [
      "Most firms that look for tax-season help are not short of expertise. They are short of hours in a ten-week window, and the work that consumes those hours is rarely the judgment. It is the organising: chasing the document that never arrived, building the workpaper, tying the schedule, and then doing it again for the next return.",
      "The risk in delegating that is well understood, because everyone has seen it go the other way. A return arrives prepared but with the workpapers assembled afterwards to justify what was entered, and the reviewer ends up reconstructing the preparation to trust it. That costs more than doing it in-house. What prevents it is building the workpapers as the work proceeds and stopping at anything that requires a decision rather than deciding it.",
      "The boundary is not negotiable and we would rather be explicit about it. Signing, filing and representing a taxpayer before the IRS require a licence under Circular 230. Those stay inside your firm, with the CPA or enrolled agent who holds it. We prepare; your people decide and sign.",
    ],
    aside: {
      label: 'What gets flagged rather than decided',
      text: "A position that could reasonably go more than one way, a basis question, an unusual transaction, or an item where the documentation does not support the obvious treatment. These reach the reviewer as questions with the supporting detail attached.",
    },
  },
  'tax-preparation/united-kingdom': {
    eyebrow: 'If this sounds familiar',
    title: 'When January Arrives and the Records Are Not Ready',
    paragraphs: [
      "The Self Assessment deadline concentrates a great deal of work into a few weeks, and Corporation Tax dates scattered across the year make capacity planning harder rather than easier. The pressure is rarely the computation. It is that the records the computation depends on have not been finished, so preparation begins with reconciliation \u2014 usually performed by the person who was supposed to be reviewing.",
      "A CT600 needs a settled set of accounts behind it. If the year end is still moving while the computation is being built, the work gets done twice: once on the draft position and again when the balances are agreed. The same is true of a Self Assessment where income sources have not been confirmed complete before anyone starts.",
      "Preparation work moves; judgment does not. Whether an expense is genuinely disallowable, how a director transaction should be treated, anything approaching planning or advice, and the submission to HMRC all stay with your practice. We do not hold HMRC portal credentials and we do not offer tax planning in any form.",
    ],
    aside: {
      label: 'Something we would rather say early',
      text: "If the bookkeeping underneath is not finished, tax preparation will not be quick regardless of who does it. Where that is the situation we will say so and suggest scoping the catch-up first, rather than taking the work and disappointing you in January.",
    },
  },
  'tax-preparation/australia': {
    eyebrow: 'If this sounds familiar',
    title: 'When the Lodgment Queue Forms Behind a Shared Year End',
    paragraphs: [
      "Because Australian entities overwhelmingly share a 30 June year end, return preparation does not spread across the calendar. It queues. Every client needs the same work in roughly the same months, and the constraint is how quickly files can be brought to a reviewable state rather than how quickly a return can be completed.",
      "What slows that queue is usually inherited. GST differences that were never resolved during the year now appear as unexplained variances. A trust needs its distribution resolutions before anything can be finalised, and they are not always where they should be. A company return waits on a reconciliation that the BAS cycle should have settled months earlier.",
      "The registered tax agent in your firm keeps the lodgment, and a registered BAS agent keeps activity statement lodgment - those are separately registered roles and neither is one we hold. We do not hold ATO portal access, and structuring or planning advice is outside what we offer. What we prepare is the workpaper set and the return behind your review.",
    ],
    aside: {
      label: 'Where the file usually stalls',
      text: "Trust distribution resolutions, unreconciled GST differences carried from earlier quarters, and Division 7A questions nobody raised at the time. Each is faster to resolve during the year than in the lodgment window.",
    },
  },

  // -------------------------------------------------------------------- payroll
  'payroll/united-states': {
    eyebrow: 'If this sounds familiar',
    title: 'When a Remote Hire Creates an Obligation Nobody Noticed',
    paragraphs: [
      "Payroll errors are rarely arithmetic. The calculation is the part software handles well. What goes wrong is structural: a client's employee who moved states and now creates a withholding and unemployment registration obligation there, a contractor whose classification was never really examined, a tax identification number that has been missing since onboarding and will be missing again in January.",
      "None of these announce themselves at the time. They surface later as a notice, and by then the correction is an amendment rather than an edit. The work that prevents them is unglamorous - keeping employee and vendor data current, checking the registration position when someone is hired, confirming the run before it goes out - and it is exactly the work that gets deferred when payroll is one person's fourth priority.",
      "One thing we will not do regardless of how it is framed: hold the ability to move money. We prepare the run and the funding file; releasing payment stays with your firm or the client's authorised signatory. That is a deliberate design choice rather than a limitation - a preparation service does not need banking control to do its job, and building the workflow so it never requires one removes the question entirely.",
    ],
    aside: {
      label: 'What stays a decision',
      text: "Worker classification. Whether someone is an employee or a contractor changes withholding, forms and liability, and getting it wrong carries consequences that belong with someone qualified to advise. We process to the classification you have set; we do not set it.",
    },
  },
  'payroll/united-kingdom': {
    eyebrow: 'If this sounds familiar',
    title: 'When RTI Removed the Room to Fix It Later',
    paragraphs: [
      "Before Real Time Information, a payroll error could be tidied up quietly before year end. Now the Full Payment Submission goes to HMRC on or before each pay date, so a mistake is reported at the moment it is made. Correcting it means an amended submission with its own trail \u2014 and the client\u2019s employee has usually already seen the number in their own net pay.",
      "That changes which part of the process matters. The calculation is routine; the check before submission is where the value sits. It is also where things slip in a practice running payroll for many clients at once, because pay dates do not move and there is no natural catch-up period. A tax code that arrived mid-month and was applied a cycle late produces exactly the kind of visible error that costs a client relationship.",
      "Auto-enrolment runs on the same rhythm and is missed for the same reason. Eligibility has to be assessed every pay period, not once at onboarding \u2014 someone crossing the earnings threshold or reaching the qualifying age triggers duties that nothing external flags.",
    ],
    aside: {
      label: 'What we will never ask for',
      text: "Banking control. We prepare the run and the payment file; releasing funds stays with your practice or the client\u2019s authorised signatory. We prepare the RTI data; your practice submits it. The workflow is built so that neither step ever needs us to hold the ability to move money - which is why the question does not arise.",
    },
  },
  'payroll/australia': {
    eyebrow: 'If this sounds familiar',
    title: 'When Superannuation Is Calculated on the Wrong Base',
    paragraphs: [
      "Superannuation guarantee is calculated on ordinary time earnings, which is not the same as gross pay. Overtime is generally excluded; many allowances and loadings are not. Treating gross as the base is a common error and a quietly expensive one, because it does not fail loudly - it compounds every quarter until somebody checks the calculation rather than the total.",
      "The deadline compounds it further. Contributions have to reach the employee's fund by the quarterly cut-off, and late payment is treated differently from an ordinary late creditor. That makes both the accrual and the payment timing things to get right during the quarter rather than to reconstruct afterwards.",
      "Single Touch Payroll removes the other margin. Every pay event is reported as it happens, and year-to-date figures are visible to the ATO and to the client's employees continuously. There is no year-end adjustment to absorb an error into - which is why the check before the pay run is the one that matters, and why running payroll across many clients at once concentrates the risk in a single fortnightly window.",
    ],
    aside: {
      label: 'Outside our scope, deliberately',
      text: "Superannuation fund advice is not something we offer in any form. We calculate, accrue and support the payroll obligation; anything about fund choice or strategy belongs with a licensed adviser.",
    },
  },

  // ----------------------------------------------------------- accounts-payable
  'accounts-payable/united-states': {
    eyebrow: 'If this sounds familiar',
    title: 'When the Invoice Was in Someone\u2019s Inbox the Whole Time',
    paragraphs: [
      "The classic AP failure is not a payment made twice. It is a payment made late because the invoice arrived in an individual inbox, waited for that person to have a free afternoon, and was invisible to the process and to the accrual in the meantime. The month closes without it, the vendor calls, and someone goes looking.",
      "Fixing that is mostly about intake and status. One defined channel, logged on arrival, with each item carrying a named approver and a visible state. When \"waiting on approval\" identifies a person rather than describing a mood, the queue can be worked. When it does not, AP becomes a recurring archaeology exercise.",
      "The other quiet cost is vendor data. W-9 information that is incomplete during the year is what makes January difficult, because 1099-NEC accuracy depends on identification numbers and addresses that should have been captured at onboarding. Chasing them in the last week of the year is the ordinary cause of year-end delay, and it is entirely avoidable.",
    ],
    aside: {
      label: 'Payment authority',
      text: "We prepare the run - matched, coded, approved, duplicates checked. Releasing payment stays with your authorised signatory. The approval matrix is yours and we work inside it rather than around it.",
    },
  },
  'accounts-payable/united-kingdom': {
    eyebrow: 'If this sounds familiar',
    title: 'When Approval Is the Step Everything Waits On',
    paragraphs: [
      "Purchase invoices rarely go missing. They go quiet. An invoice arrives, needs a manager to confirm the work was done, and sits while that manager is travelling, in a client meeting, or simply not thinking about the purchase ledger. Nobody has done anything wrong, and the supplier still calls.",
      "The way out is not a firmer reminder. It is making the queue visible: one intake channel rather than individual inboxes, every item logged on arrival, and a named approver with a status attached so an unpaid invoice can always be traced to a person and a reason. Once that exists, the conversation changes from \"where is this invoice\" to \"this one is waiting on you\".",
      "It also protects the month-end. An invoice sitting unlogged in somebody\u2019s email is invisible to the accrual as well as to the supplier, so the period closes understated and the correction lands in the following month for no good reason.",
    ],
    aside: {
      label: 'Where the authority stays',
      text: "The approval matrix is yours and we work inside it. We prepare the payment run - matched, coded, approved, duplicates checked - and your authorised signatory releases the funds. We do not hold banking control.",
    },
  },
  'accounts-payable/australia': {
    eyebrow: 'If this sounds familiar',
    title: 'When the Supplier Was Never Registered for GST',
    paragraphs: [
      "In Australia the right to a GST credit depends on facts about the supplier, not only about the transaction. A supplier can hold an ABN without being registered for GST, and invoices from unregistered suppliers do sometimes show a GST line. If nobody validates registration status, the ledger accumulates credits that were never available.",
      "The reverse problem is quieter still. Where a supplier does not quote an ABN at all, the business is generally required to withhold from the payment at the top rate. Nothing about the invoice announces this, and the consequence lands on the payer rather than the supplier - which is why validation belongs at intake rather than at review.",
      "Both are cheap to handle when invoices arrive through one channel and are checked on the way in. Both are expensive to unpick from a BAS that has already been lodged, particularly if the pattern has been running for several quarters before anyone reconciles the control account.",
    ],
    aside: {
      label: 'A coding split worth keeping',
      text: "The BAS reports capital acquisitions separately from other acquisitions. If that distinction is not applied as invoices are coded, it has to be rebuilt from the detail every period.",
    },
  },

  // -------------------------------------------------------- accounts-receivable
  'accounts-receivable/united-states': {
    eyebrow: 'If this sounds familiar',
    title: 'When the Aged Debt Is a Dispute Nobody Logged',
    paragraphs: [
      "An invoice sitting at ninety days is usually not a customer refusing to pay. It is a missing purchase order number, a delivery query raised by email and never recorded, or an invoice sent to somebody who left the company in March. Treated as a collections problem it produces an uncomfortable phone call. Treated as an administrative problem it usually gets resolved.",
      "Reading the aging for cause rather than filing it as a report is what separates the two. So is applying cash promptly: when receipts are not matched as they land, the aging shows balances that are not really outstanding, and chasing a customer who has already paid costs more than the delay did.",
      "The arithmetic is worth being concrete about, because receivables is the one function where process improvement converts directly into cash. On two million dollars of annual revenue, moving days sales outstanding from fifty-five to forty releases roughly eighty-two thousand dollars. That is not new profit - it is money already earned, arriving sooner.",
    ],
    aside: {
      label: 'What stays your call',
      text: "Credit limits, credit holds, terms, write-off approval, and whether an account goes to a collections agency or to counsel. We run the cycle and surface the escalations; the commercial decisions are yours.",
    },
  },
  'accounts-receivable/united-kingdom': {
    eyebrow: 'If this sounds familiar',
    title: 'When Chasing Payment Is Nobody\u2019s Actual Job',
    paragraphs: [
      "In most growing UK businesses credit control is not a role. It is something the finance manager does when the week allows, which means it happens properly in quiet months and barely at all in busy ones. Customers notice that pattern faster than anyone expects, and they organise their own payment runs around it.",
      "The usual worry about moving it outside is reasonable: these are your customers, and a clumsy chase can cost more than the invoice is worth. That concern is really about tone and authority rather than about who sends the email. Reminders go out in your company name, following a sequence and a tone you have agreed, and anything that turns into a real conversation comes back to you rather than being handled by someone who does not know the relationship.",
      "What changes is consistency. The same escalation timetable applied every month, receipts matched as they arrive so the aged debtor report can be trusted, and disputes recorded when they are raised rather than discovered at ninety days.",
    ],
    aside: {
      label: 'Decisions that stay with you',
      text: "Credit limits and holds, terms, whether to apply statutory interest to a particular account, write-off approval, and whether anything goes to a collections agency or solicitor. We run the routine and bring you the exceptions.",
    },
  },
  'accounts-receivable/australia': {
    eyebrow: 'If this sounds familiar',
    title: 'When Receivables and the BAS Are the Same Problem',
    paragraphs: [
      "How an Australian business accounts for GST decides what slow payment actually costs. On a non-cash basis, GST on an invoice falls due whether or not the customer has paid, so the business funds the ATO ahead of receiving the money. On a cash basis, an unapplied receipt is revenue that has not been recognised - so a tidy-up problem becomes a reporting one.",
      "Either way, the sales ledger is not just a cash record. It feeds the activity statement, which means an unapplied receipt or a credit note posted late does not stay contained to the aging report. It shows up in a figure that has been lodged.",
      "The most avoidable delay is a deficient tax invoice. A customer who cannot claim a credit will send it back, and the payment clock restarts on the replacement. ABN, the GST amount or a clear statement that it is included, and a proper description are worth getting right at issue rather than in a follow-up email three weeks later.",
    ],
    aside: {
      label: 'Timing that is worth planning',
      text: "Collection effort concentrated before 30 June improves both the cash position and the debtors figure the close reports. After the year turns, the same effort produces the same cash against a worse set of accounts.",
    },
  },

  // -------------------------------------------------------------- audit-support
  'audit-support/united-states': {
    eyebrow: 'If this sounds familiar',
    title: 'When Fieldwork Starts and the PBC List Is Still Open',
    paragraphs: [
      "Audits rarely run late because the accounting was difficult. They run late because the audit team spends the first week waiting - for a reconciliation that was not finished, a schedule that does not agree to the trial balance, or a sample selection sitting behind invoices nobody has pulled yet.",
      "That waiting is expensive on both sides. It extends the engagement, it pulls your finance team into ad-hoc retrieval during their normal month, and it tends to produce a second round of requests because the first round arrived incomplete. The fix is unglamorous: work the prepared-by-client list as a checklist with a visible status per item, so open items are known throughout rather than discovered at the end.",
      "It is worth being exact about what this is. Everything above is preparation performed for the company, not audit work performed for the auditor. The engaged auditor designs the procedures, selects the samples, evaluates the evidence and issues the opinion. That line does not move, and an arrangement that blurred it would not be worth having.",
    ],
    aside: {
      label: 'What indexed actually means',
      text: "Supporting documents retrieved against the auditor's own selections and labelled with the reference they asked for - not delivered as a folder for them to sort. It is a small distinction that decides whether the second week of fieldwork is spent testing or searching.",
    },
  },
  'audit-support/united-kingdom': {
    eyebrow: 'If this sounds familiar',
    title: 'When the Audit File Has to Be Built From Scratch Each Year',
    paragraphs: [
      "For many UK companies the audit is an annual event that arrives against records kept for a different purpose. The ledger has been maintained to serve the VAT quarter, which is a real obligation but a different one, and the lead schedules an auditor expects have to be constructed once fieldwork is already scheduled.",
      "The predictable consequences follow. Movements on balance sheet accounts have to be explained retrospectively rather than as they occurred. Disclosure inputs - related parties, commitments, leases, deferred tax movements - are assembled from twelve months of detail under time pressure. Intercompany balances that were never agreed during the year get agreed now, with the other side also under pressure.",
      "Preparing that layer during the year rather than in the fortnight before fieldwork does not change the audit. It changes how much of it is spent waiting. The engaged registered auditor keeps every procedure, all professional judgment and the opinion.",
    ],
    aside: {
      label: 'A question worth asking early',
      text: "Whether an audit is required at all depends on turnover, balance sheet total and employee numbers, and on group and sector circumstances. Because those tests interact, it is a question for your accountant rather than a rule of thumb - and worth settling before the year end, not after.",
    },
  },
  'audit-support/australia': {
    eyebrow: 'If this sounds familiar',
    title: 'When the Audit Request List Arrives With the June BAS',
    paragraphs: [
      "The Australian audit calendar has a structural problem that the UK and US do not share: almost every entity reports to 30 June. Year-end close, the June quarter activity statement, superannuation for the quarter and the opening of the audit request list all land on the same finance team within a few weeks.",
      "That compression, rather than technical difficulty, is what pushes Australian audits late. There is no slack period to absorb it, and the work that would have made it manageable - reconciliations brought current, GST control agreed, superannuation accruals supported with the payroll detail behind them - is the work that gets deferred when the team is already at capacity.",
      "Preparing ahead of that window is most of the answer. The engaged registered company auditor keeps the procedures, the sample selection, the evaluation of evidence and the opinion. What can move is the state of the file they open.",
    ],
    aside: {
      label: 'One boundary worth stating plainly',
      text: "We can prepare the payroll detail and accrual support an auditor asks for on superannuation guarantee. Whether the obligation has been met is the auditor's assessment, and superannuation fund advice is outside what we offer in any form.",
    },
  },
};
