/**
 * Content for `/industries/real-estate` — the page for people who **own**
 * property: investors, developers, commercial operators and owning entities.
 *
 * **This file used to argue against splitting, and that note is gone because
 * the owner reversed it on 2026-09-17.** It said property management and HOA
 * "are not separate search intents yet" and that splitting them "produces two
 * thin pages competing for one buyer". The owner's instruction was that
 * property management and HOA accounting/bookkeeping are the highest-demand
 * terms in this cluster and that the structure should be whatever ranks and
 * converts best. It also left itself the exit: "if the segments earn their own
 * demand later, the material below is already separated into blocks that lift
 * out cleanly." They did, and it did.
 *
 * `propertyManagement` and `hoa` no longer exist in this file. They moved to
 * `lib/property-management-industry.ts` and `lib/hoa-industry.ts` and were
 * **removed here rather than copied**, which is the only reason the three pages
 * do not compete. The real estate page now carries a two-card router to them
 * instead.
 *
 * **The split is by reader, and that is the test to apply to any new
 * paragraph:**
 *
 * - **this page** — someone who owns property. Reader: a lender, a partner, an
 *   investor or their own CPA. Deliverable: a financial statement. Receivable:
 *   none.
 * - `/industries/property-management` — someone managing property that belongs
 *   to an owner. Reader: the owner. Deliverable: the owner statement.
 *   Receivable: tenant rent.
 * - `/industries/hoa-accounting` — an association or its manager. Reader: a
 *   volunteer board. Deliverable: the board pack. Receivable: the homeowner
 *   assessment.
 *
 * If a paragraph here would read just as naturally on either of the other two,
 * it belongs there.
 *
 * **What may not be written into this file.**
 *
 * - **No trust-accounting compliance claim.** Broker trust accounts and
 *   deposit accounts are regulated per state and per jurisdiction. We keep the
 *   ledger and the reconciliation; whether an account is held correctly is the
 *   client's own counsel, CPA or managing broker. `scope-boundaries.md` §1.
 * - **No reserve-study, funding-level or assessment-setting advice.** That
 *   material lives on the HOA page now and the rule travels with it.
 * - **No tax planning, no entity-structure advice, no cost-segregation, no
 *   1031 guidance, no depreciation elections.** Every one of those is the
 *   client's CPA. We prepare records and schedules; the return is signed by a
 *   licensed professional. §2 and §4.
 * - **No software implementation, configuration, migration or "certified"
 *   claim** for Yardi, QuickBooks or anything else. §5.
 * - **No rate, fee, statutory deadline, savings percentage, turnaround time or
 *   client count.** Same rule as `lib/us-states.ts` and `lib/market-depth.ts`.
 *
 * The page stays region-neutral: there is no US, UK or AU variant and there
 * should not be one, because a region split would collide with the Service ×
 * Region matrix that already owns "{service} in {region}". The two new pages
 * handle locality as a band on the page for the same reason.
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
