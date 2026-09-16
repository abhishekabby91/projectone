/**
 * Content for `/industries/real-estate` — the industry page that covers real
 * estate, property management and community associations together.
 *
 * **Why one page and not three.** Property management and HOA are the two
 * segments the sales team actually prospects into, and the temptation is to
 * give each its own URL. They are not separate search intents yet: a property
 * manager searching "property management bookkeeping outsourcing" and a
 * community manager searching "HOA bookkeeping services" both want the same
 * answer — who keeps the property-level books and produces the statement the
 * owner or the board reads. Splitting them now produces two thin pages
 * competing for one buyer, which is the failure `docs/SEARCH-INTENTS.md`
 * exists to prevent. If the segments earn their own demand later, the material
 * below is already separated into blocks that lift out cleanly.
 *
 * **What may not be written into this file.**
 *
 * - **No trust-accounting compliance claim.** Broker trust accounts and HOA
 *   reserve accounts are regulated per state and per jurisdiction, and the
 *   rules differ on commingling, interest and permitted transfers. We keep the
 *   ledger and the reconciliation; whether a given account is held correctly is
 *   the client's own counsel, CPA or managing broker. `scope-boundaries.md` §1.
 * - **No reserve-study, funding-level or assessment-setting advice.** How much
 *   an association should hold in reserves, and what the assessment should be,
 *   is a board decision informed by a reserve study. We account for what the
 *   board decides. Saying otherwise is financial advisory.
 * - **No tax planning, no entity-structure advice, no cost-segregation, no
 *   1031 guidance, no depreciation elections.** Every one of those is the
 *   client's CPA. We prepare records and schedules; the return is signed by a
 *   licensed professional. `scope-boundaries.md` §2 and §4.
 * - **No software implementation, configuration, migration or "certified"
 *   claim** for Yardi, QuickBooks or anything else. We work inside the system
 *   that is already running. §5.
 * - **No rate, fee, deposit-interest rate, statutory deadline, savings
 *   percentage, turnaround time or client count.** Same rule as
 *   `lib/us-states.ts` and `lib/market-depth.ts`: annual figures go stale
 *   silently, and invented ones breach the never-invent rule outright.
 *
 * The page is region-neutral by design — there is no US, UK or AU variant and
 * there should not be one. The mechanics below (owner statements, assessments,
 * reserves, CAM) are recognisable to a property operator in any of the three
 * markets, and a region-specific split would collide with the Service × Region
 * matrix that already owns "{service} in {region}".
 */

export interface REServiceCard {
  name: string;
  body: string;
  /** Where the underlying service lives, when it has its own page. */
  href?: string;
}

export interface RESegment {
  name: string;
  /** Who this is, in their own words. */
  who: string;
  body: string;
  points: string[];
}

export interface REWorkflowGroup {
  heading: string;
  lead: string;
  items: { h: string; p: string }[];
}

/** The six segments the page is written for. */
export const segments: RESegment[] = [
  {
    name: 'Property Management Companies',
    who: 'Residential and mixed portfolios',
    body:
      'You run books for properties you do not own, and the output is a statement somebody else reads and questions. The accounting has to hold at the property level first and roll up second, because that is the direction the owner reads it in.',
    points: [
      'Property-level bookkeeping and bank reconciliation',
      'Rental income, tenant ledgers and security deposits held as liabilities',
      'Vendor invoice processing, approvals and payment runs',
      'Owner statements and the supporting detail behind them',
      'Month-end close and management reporting across the portfolio',
    ],
  },
  {
    name: 'HOA & Community Associations',
    who: 'Boards and community managers',
    body:
      'An association is a small entity with an unusually well-informed audience. The board reads the financials monthly, homeowners ask about their own ledger, and the reserve balance is the number everyone checks first.',
    points: [
      'Assessment billing, homeowner ledgers and delinquency tracking',
      'Operating and reserve funds kept separate in the ledger, not netted',
      'Vendor payables and payment runs against board-approved invoices',
      'Budget-versus-actual reporting in the board’s own budget lines',
      'Monthly board reporting packs and the schedules behind them',
    ],
  },
  {
    name: 'Commercial Real Estate',
    who: 'Office, retail and industrial operators',
    body:
      'Commercial books are lease books. What a tenant owes is a reading of their lease, recoverable costs accumulate all year, and the reconciliation at the end of it is billed to somebody who will check it.',
    points: [
      'Lease-driven billing, tenant receivables and aged recovery',
      'Recoverable costs coded as recoverable at the point of posting',
      'CAM reconciliation support where the lease documentation is available',
      'Vendor payables, accruals and property-level expense reporting',
      'Straight-line and escalation schedules maintained as leases change',
    ],
  },
  {
    name: 'Real Estate Investors',
    who: 'Rental portfolios and syndications',
    body:
      'A portfolio kept only at entity level cannot answer which property is actually performing, and the question always arrives attached to a refinance, a partner or a sale — which is the worst time to start rebuilding the history.',
    points: [
      'Per-property books with the entity view built from them, not over them',
      'Mortgage, escrow and closing-statement entries recorded as they occur',
      'Cash-flow and distribution tracking by property and by entity',
      'Fixed asset register kept current as improvements are capitalised',
      'Year-end schedules organised for your CPA rather than reconstructed for them',
    ],
  },
  {
    name: 'Real Estate Developers',
    who: 'Ground-up and repositioning projects',
    body:
      'A development is a cost pool that has to survive until it becomes an asset. Costs arrive from many vendors against a budget nobody wants to re-cut, and the job-level record is the only thing that answers where the project actually is.',
    points: [
      'Project and phase-level cost tracking against the approved budget',
      'Vendor invoices, retention and draw-package supporting detail',
      'Capitalised versus expensed applied consistently as costs post',
      'Construction-period interest and soft costs recorded to the project',
      'Handover of the completed project into operating books',
    ],
  },
  {
    name: 'Real Estate Businesses',
    who: 'Brokerages and operating companies',
    body:
      'The operating company has its own books — commissions, agents, overhead and the management fee income the portfolio generates — and it is usually the set that gets attention last, because everything else has a deadline attached to it.',
    points: [
      'Day-to-day bookkeeping, banking and card reconciliation',
      'Commission and agent payable tracking where it is part of scope',
      'Management fee income recognised against the properties it came from',
      'Payables, receivables and recurring month-end close',
      'Financial statements and management reporting on your cadence',
    ],
  },
];

/** The ten services, in the site's own language. */
export const services: REServiceCard[] = [
  {
    name: 'Bookkeeping',
    body: 'Day-to-day transaction processing and reconciliation, kept at property level as well as entity level so neither view has to be rebuilt later.',
    href: '/services/bookkeeping/united-states',
  },
  {
    name: 'Property Accounting',
    body: 'Property-level books: rent and assessment income, operating costs, deposits held, and the schedules that tie a property back to the entity it sits in.',
  },
  {
    name: 'AP & AR',
    body: 'Vendor invoices captured, coded and routed for your approval; receivables, tenant and homeowner balances chased and aged. Approval and release stay with you.',
    href: '/services/accounts-payable/united-states',
  },
  {
    name: 'Bank Reconciliation',
    body: 'Operating, trust, deposit, reserve and mortgage escrow accounts reconciled on a monthly cycle, with unresolved items named rather than absorbed.',
  },
  {
    name: 'Month-End Close',
    body: 'Reconciliations, accruals, recurring journals and property-level account checks, with a close file a reviewer can follow rather than re-derive.',
    href: '/services/accounting/united-states',
  },
  {
    name: 'Financial Reporting',
    body: 'Monthly statements at property, portfolio and entity level, plus the management reports your team or your board already reads.',
  },
  {
    name: 'Owner & Board Reporting',
    body: 'Owner statements and board packs prepared to your existing format, with the supporting detail attached so the first question can be answered without a rebuild.',
  },
  {
    name: 'Tax Preparation Support',
    body: 'Records, workpapers and schedules organised for the return, and return preparation where that is in scope. Review, signature and filing stay with your CPA.',
    href: '/services/tax-preparation/united-states',
  },
  {
    name: 'Payroll Support',
    body: 'Payroll-related accounting support where it is part of the engagement — the posting, allocation and reconciliation side of payroll rather than the advice.',
    href: '/services/payroll/united-states',
  },
  {
    name: 'Audit Support',
    body: 'Schedules, reconciliations and documentation prepared for an audit or a review. The audit judgement is the auditor’s; the preparation does not have to be.',
    href: '/services/audit-support/united-states',
  },
];

/** Property management, at the level of the work. */
export const propertyManagement: REWorkflowGroup = {
  heading: 'Property Management Accounting',
  lead:
    'The distinguishing feature of property management accounting is that the books are not yours and the reader is not you. An owner statement goes to somebody who did not see the transactions, will compare it to last month, and will ask about the one line that moved. That changes what "done" means: the statement is finished when the questions it will generate can already be answered from the file.',
  items: [
    {
      h: 'Property-level books, with the entity view built from them',
      p: 'Every property carries its own income, its own costs and its own bank position, and the portfolio view is assembled from those rather than allocated down into them. That is a chart-of-accounts and property-tracking decision made at setup — cheap to make now, expensive to retrofit once a year of history exists in the wrong shape.',
    },
    {
      h: 'Rental income recorded against the lease, not against the deposit',
      p: 'What a tenant owes comes from their lease; what arrived in the bank is a separate fact. Where the two are treated as one, partial payments, prepaid rent and concessions all disappear into the same line and the tenant ledger stops being able to answer a dispute. Kept apart, the receivable is real and the aging means something.',
    },
    {
      h: 'Security deposits carried as a liability',
      p: 'Deposits held are the tenant’s money and often subject to rules about how they are held. Sitting in operating cash and in income, they overstate both, and the error compounds with every new lease — it is one of the first things a lender or a buyer looks at. How the account itself must be held is a question for your managing broker or counsel; keeping the ledger straight is ours.',
    },
    {
      h: 'Vendor invoices coded to the property before they are approved',
      p: 'An invoice that reaches approval without a property and a category attached gets approved on the amount alone, and the coding is guessed afterwards by someone reading a vendor name. Captured, coded and routed with the property already on it, the approver is approving a fact rather than reconstructing one — and the release of payment stays entirely with your team.',
    },
    {
      h: 'Owner statements prepared with their own supporting detail',
      p: 'An owner statement with no backing is a number to be trusted or argued with. Prepared with the transaction detail, the reconciliation and the open items attached, it is a document that answers itself. Where a figure is genuinely unresolved it is named on the statement rather than smoothed into an accrual.',
    },
    {
      h: 'Month-end that reconciles rather than reconstructs',
      p: 'Bank, deposit and escrow accounts reconciled monthly, recurring journals posted, property accounts checked and anything unresolved listed. A close done this way takes the same work every month; a close done at reporting time takes however long the worst surprise takes.',
    },
  ],
};

/** HOA and community associations, at the level of the work. */
export const hoa: REWorkflowGroup = {
  heading: 'HOA & Community Association Accounting',
  lead:
    'An association has a smaller ledger than a property portfolio and a much more attentive audience. Volunteer board members read the financials every month, homeowners query their own ledger directly, and the reserve balance is the figure everyone checks first. The accounting has to be legible to a non-accountant without being simplified into something that cannot be audited.',
  items: [
    {
      h: 'Assessments billed and aged by homeowner, not by the bank',
      p: 'The homeowner ledger is the association’s receivable record: what was assessed, what was paid, what remains, and in what order payments were applied. Where it is maintained from deposits rather than from the assessment schedule, a homeowner with a partial payment and a late fee cannot be answered without reconstructing their year.',
    },
    {
      h: 'Operating and reserve funds kept separate in the ledger',
      p: 'Reserves are held for a purpose the board has identified, and the whole point of the balance is that it is visible and not quietly financing operations. Netted into one cash figure, a shortfall in operating is invisible until the reserve is needed. Kept as distinct funds with transfers recorded as transfers, the position is readable at any point in the year. What the reserve level should be, and what a reserve study concludes, is the board’s call and their reserve specialist’s.',
    },
    {
      h: 'Delinquency tracked as a schedule, not as a feeling',
      p: 'An aged delinquency schedule by unit, with the status of each balance, is what turns a collections conversation into a decision the board can minute. It also makes the allowance question answerable. Every step of a collections process — when a notice goes out, when a matter goes to counsel — stays a board decision; we keep the record it is made from.',
    },
    {
      h: 'Payables run against board-approved invoices',
      p: 'Association spending is approved by people who meet monthly, so the payables cycle has to fit the board calendar rather than the other way round. Invoices captured, coded to the board’s own budget lines and presented in a form the board recognises means an approval meeting spends its time on decisions rather than on identifying what an invoice was for.',
    },
    {
      h: 'Budget versus actual in the board’s lines, not the software’s',
      p: 'A board approved a budget in particular categories, and that is the report they expect back. Where the accounting uses a different structure, every meeting starts with a translation exercise and variances get explained as mapping differences. Mapping the ledger to the approved budget once removes that permanently.',
    },
    {
      h: 'A board pack that survives the meeting',
      p: 'Balance sheet, income statement against budget, cash and reserve position, aged delinquency, and the reconciliations behind them — assembled the same way every month so a new treasurer can read the current pack against last year’s without a guide.',
    },
  ],
};

/** The four process phases, in this industry's language. */
export const processPhases = [
  {
    n: '01',
    title: 'Share the portfolio',
    body: 'A free call. How many properties or associations, which system they live in, who signs off, and what the owner or board currently receives.',
  },
  {
    n: '02',
    title: 'Build the right team',
    body: 'People assigned to your portfolio and your software, with your coding conventions and reporting formats documented before anything moves.',
  },
  {
    n: '03',
    title: 'Run one property first',
    body: 'A single property, building or association runs alongside your current process, so both sides can judge the output before the portfolio follows.',
  },
  {
    n: '04',
    title: 'You stay in control',
    body: 'Approvals, payment release, board and owner relationships, and every decision that needs judgement stay with your team. We keep the books behind them.',
    accent: true,
  },
];

/** What we will not do, in this industry's terms. The trust anchor. */
export const boundaries = [
  'We never hold banking control. Payment release and transfers between operating, trust and reserve accounts stay with your team.',
  'We do not decide how a trust or reserve account must be held. That is your managing broker, your counsel or your CPA — we keep the ledger and the reconciliation.',
  'We do not advise on reserve funding levels, assessment amounts or reserve studies. The board decides; we account for the decision.',
  'We give no tax advice — no entity structuring, no cost segregation, no 1031 guidance, no depreciation elections. Records and schedules are ours; the return and the signature are your CPA’s.',
  'We do not implement, configure or migrate accounting or property management software. We work inside the setup you already run.',
  'We do not contact your owners, tenants, homeowners or board on your behalf unless you have specifically asked us to and defined what that means.',
];

export const faqs = [
  {
    question: 'What accounting can a real estate business actually outsource?',
    answer:
      'The recurring, rule-bound part: transaction processing, bank and deposit reconciliation, vendor invoice coding, receivables and aging, month-end close, and the preparation of owner statements, board packs and management reports. What does not move is approval, payment release, and any judgement that needs your licence or your authority — including the tax return, which stays with your CPA.',
  },
  {
    question: 'Can you support property management companies?',
    answer:
      'Yes, and it is one of the two segments this page is written for. The work is property-level bookkeeping, tenant ledgers and deposits, vendor payables routed for your approval, bank and escrow reconciliation, month-end close, and owner statements with their supporting detail attached. The engagement is shaped around your existing owner reporting format rather than a standard one.',
  },
  {
    question: 'Do you provide property-level bookkeeping?',
    answer:
      'Yes, and we would treat it as the default rather than an option. A portfolio kept only at entity level cannot answer which property is performing, and rebuilding that history later — usually for a refinance, a partner or a sale — costs considerably more than setting it up correctly at the start.',
  },
  {
    question: 'Can you support HOA and community association bookkeeping?',
    answer:
      'Yes. Assessment billing and homeowner ledgers, operating and reserve funds kept separate in the ledger, vendor payables against board-approved invoices, bank reconciliation, aged delinquency tracking, and a monthly board pack with budget-versus-actual in the board’s own budget lines. What the reserve level should be, and what the assessment should be, remain board decisions.',
  },
  {
    question: 'Can you handle AP and AR for property managers?',
    answer:
      'Yes. On the payables side, invoices are captured, coded to the property and category, and routed into your approval workflow — approval and the release of payment stay entirely with your team, and we never hold banking control. On the receivables side, tenant and homeowner balances are maintained against the lease or assessment schedule rather than from bank deposits, so the aging is real.',
  },
  {
    question: 'Can you prepare owner financial statements?',
    answer:
      'Yes, to your existing format. An owner statement is only finished when the questions it will generate can be answered from the file, so it goes out with the transaction detail, the reconciliation and any open items attached rather than as a standalone figure.',
  },
  {
    question: 'Can real estate investors outsource bookkeeping for a rental portfolio?',
    answer:
      'Yes. Per-property books with the entity view built from them, mortgage and escrow entries recorded as they occur, closing statements broken out rather than posted as a single number, the fixed asset register kept current, and year-end schedules organised for your CPA. We do not make depreciation, entity or disposition decisions — those are your CPA’s.',
  },
  {
    question: 'Can you support month-end close across a portfolio?',
    answer:
      'Yes. Bank, deposit, reserve and escrow reconciliations, recurring journals, accruals, property-level account checks and a close file a reviewer can follow. Where something is unresolved it is listed as an open item rather than absorbed into an accrual to make the close land on time.',
  },
  {
    question: 'Can you work in our existing accounting or property management software?',
    answer:
      'That is the intention — we work inside the system you already run rather than moving you to one of ours. Our team has experience with Yardi, including Voyager and Breeze, and with QuickBooks, Xero, Sage and NetSuite. We do not implement, configure or migrate systems; where you use something else, we would confirm at scoping whether we can work in it rather than assume.',
  },
  {
    question: 'How does the outsourcing engagement actually start?',
    answer:
      'With a free consultation, then a narrow first slice — one building, one association or one owner’s portfolio — running alongside what you do today. Both sides see real output on real properties before the volume moves, and a workflow that already works is a much smaller problem to scale than one being fixed mid-year.',
  },
];
