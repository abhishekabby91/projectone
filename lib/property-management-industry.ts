/**
 * Content for `/industries/property-management`.
 *
 * **Why this page exists, and why it did not until 2026-09-17.**
 * `lib/real-estate-industry.ts` used to carry a header note arguing that
 * property management and HOA were not separate search intents and should stay
 * as bands inside `/industries/real-estate`. The owner reversed that on
 * 2026-09-17: property management and HOA accounting/bookkeeping are the
 * highest-demand terms in this cluster, and the instruction was to take
 * whichever structure ranks and converts best. That is a dedicated URL, because
 * a page cannot rank for a term its URL, title and h1 do not carry — the real
 * estate page said "Real Estate & Property Accounting Outsourcing" and buried
 * property management as one h2 among fourteen.
 *
 * **The split is by reader, not by keyword, and that is what stops it
 * cannibalising.** Three different people:
 *
 * - `/industries/real-estate` — someone who **owns** property. Their reader is
 *   a lender, a partner, an investor or their own CPA.
 * - **this page** — someone who **manages property that belongs to somebody
 *   else**. Their reader is the owner, and the deliverable is the owner
 *   statement.
 * - `/industries/hoa-accounting` — an association or the company that manages
 *   one. Their reader is a volunteer board, and the deliverable is the board
 *   pack.
 *
 * Different reader, different deliverable, different receivable: none, tenant
 * rent, homeowner assessment. **If a paragraph here would read just as
 * naturally on either of the other two, it is in the wrong file.** That is the
 * same test `lib/cpa-firms-industry.ts` uses and it is the only thing keeping
 * the three apart.
 *
 * **What may not be written into this file.**
 *
 * - **No trust- or escrow-accounting compliance claim.** Broker trust accounts
 *   and security-deposit accounts are regulated per state and per jurisdiction,
 *   and the rules differ on commingling, interest and permitted transfers. We
 *   keep the ledger and the reconciliation; whether an account is *held*
 *   correctly is the client's managing broker, counsel or CPA.
 *   `scope-boundaries.md` §1.
 * - **No claim to release money, sign, or approve anything.** Payment release,
 *   deposit disbursement and every approval stay with the client. The whole
 *   trust proposition of this page is that we never touch the money.
 * - **No tax planning, entity-structure advice, cost segregation, 1031
 *   guidance or depreciation elections.** Every one is the client's CPA. §2, §4.
 * - **No software implementation, configuration, migration or "certified"
 *   claim** for Yardi, AppFolio, Buildium, QuickBooks or anything else. We work
 *   inside the system already running, and we hold no vendor certification. §5.
 * - **No legal position on a lease, an eviction, or a deposit dispute.**
 * - **No rate, fee, deposit-interest figure, statutory deadline, turnaround
 *   time, savings percentage, portfolio size or client count.** Same rule as
 *   `lib/us-states.ts` and `lib/market-depth.ts`: annual figures go stale
 *   silently and invented ones breach the never-invent rule outright.
 *
 * **Locality is a band on this page, never a URL split.** There is no
 * `/industries/property-management/united-states`. A region-specific split
 * would collide head-on with the Service × Region matrix that already owns
 * "{service} in {region}". The locality band names what the reader is called in
 * each market and routes every regulatory question to the licensed local party
 * — it states no statute, regulator, threshold or deadline, because
 * `knowledge/markets/` records none for property and inventing one is the
 * failure mode this whole file is written against.
 */

export interface PMSegment {
  name: string;
  /** Who this is, in their own words. */
  who: string;
  body: string;
  points: string[];
}

export interface PMWorkItem {
  h: string;
  p: string;
}

export interface PMServiceCard {
  name: string;
  body: string;
  /** Where the underlying service lives, when it has its own page. */
  href?: string;
}

/**
 * The lead-generation router.
 *
 * It is on this page rather than a generic "contact us" band because a property
 * manager does not arrive asking for "outsourced accounting" — they arrive
 * because one specific thing is late or wrong. Matching their own words to the
 * scope, and opening the enquiry dialog pre-filled with it, is the difference
 * between a form and a conversation. `AI-WEBSITE-GUIDE.md` principle 1.
 *
 * Each `symptom` is written as the manager would say it out loud, not as we
 * would categorise it.
 */
export interface PMTrigger {
  symptom: string;
  reading: string;
  /** Pre-fills the enquiry dialog so the first message is already specific. */
  ask: string;
}

export const triggers: PMTrigger[] = [
  {
    symptom: 'Owner statements are delayed or need repeated corrections',
    reading: 'Review the monthly close, bank reconciliations, open transactions and the supporting detail used to prepare each owner statement.',
    ask: 'Owner statements are delayed or need corrections',
  },
  {
    symptom: 'Tenant balances do not match receipts or the lease schedule',
    reading: 'Compare charges, receipts, credits and outstanding balances so the tenant ledger can be reviewed without relying on bank activity alone.',
    ask: 'Tenant ledgers need review',
  },
  {
    symptom: 'Security deposit balances are difficult to reconcile',
    reading: 'Maintain a tenant-level deposit ledger and reconcile the recorded balances to the relevant account records. Requirements for holding or returning deposits depend on the applicable jurisdiction and engagement.',
    ask: 'Security deposit records need review',
  },
  {
    symptom: 'CAM or other recoverable costs take too long to reconcile',
    reading: 'Keep expense coding and supporting detail organised during the year so recoverable-cost schedules can be prepared from the records.',
    ask: 'CAM or recoverable-cost schedules need support',
  },
  {
    symptom: 'The accounting workload has grown with the portfolio',
    reading: 'Review the recurring volume of transaction processing, reconciliations and reporting to identify work that can be documented and handled consistently.',
    ask: 'The portfolio has grown',
  },
  {
    symptom: 'Senior staff spend too much time on routine accounting tasks',
    reading: 'Separate recurring processing and reporting work from review, owner communication and payment approvals, then agree the responsibilities for each.',
    ask: 'Routine accounting work is taking too much time',
  },
];

/** Who this page is written for. Managers, never owners — owners are /industries/real-estate. */
export const segments: PMSegment[] = [
  {
    name: 'Residential Property Managers',
    who: 'Apartments, single-family and multifamily rentals',
    body: 'Monthly activity can include rent charges, receipts, lease changes, move-ins and move-outs, repairs and owner reporting. Property-level records make it easier to review balances across a portfolio.',
    points: [
      'Rent charges and receipts recorded against tenant ledgers',
      'Move-in and move-out activity reflected in the relevant records',
      'Repairs and operating costs coded to the property',
      'Owner reporting prepared from reconciled records',
    ],
  },
  {
    name: 'Commercial & Retail Managers',
    who: 'Office, retail, industrial and mixed-use properties',
    body: 'Lease terms, rent changes and recoverable operating costs can create different reporting needs for each tenant. Supporting schedules should be traceable to the underlying accounting records.',
    points: [
      'Property and expense coding maintained consistently',
      'Lease-related charges recorded from approved information',
      'CAM and other recovery schedules prepared from ledger detail',
      'Tenant charges supported by reviewable calculations',
    ],
  },
  {
    name: 'Third-Party Property Managers',
    who: 'Managers reporting to multiple property owners',
    body: 'The accounting needs to keep each owner’s activity identifiable while still giving the management company a useful portfolio view.',
    points: [
      'Property activity maintained separately',
      'Management fees and owner transactions recorded clearly',
      'Owner statements prepared in agreed formats',
      'Records organised for review or handover when needed',
    ],
  },
  {
    name: 'Single-Family Rental Operators',
    who: 'Scattered-site portfolios and multiple entities',
    body: 'When properties are spread across locations or entities, consistent coding and reporting help teams compare individual properties with the wider portfolio.',
    points: [
      'Property-level income and expense reporting',
      'Entity and portfolio summaries from consistent records',
      'Repairs and capital costs classified using agreed rules',
      'Balances available for periodic property review',
    ],
  },
  {
    name: 'Short-Term & Furnished Rental Managers',
    who: 'Platform-booked, multi-channel rentals',
    body: 'Platform payouts may combine booking revenue, fees, refunds and other adjustments. The accounting process should separate these items where the source data allows.',
    points: [
      'Platform settlements reconciled to booking reports',
      'Fees and refunds recorded with supporting detail',
      'Revenue tracked by channel where required',
      'Owner reporting prepared using the agreed calculation basis',
    ],
  },
  {
    name: 'Build-to-Rent & Lease-Up Teams',
    who: 'Properties moving from development into operations',
    body: 'As units begin leasing, operating activity needs to be identifiable and reported separately from development costs according to the client’s accounting policies.',
    points: [
      'Operating transactions coded to the relevant property',
      'Development and operating costs classified using agreed policies',
      'Lease-up activity recorded consistently',
      'Monthly reports structured for comparison over time',
    ],
  },
];

/**
 * The core workflow block. Lifted from the real estate page's property
 * management band on 2026-09-17 and expanded — the originals were good and
 * specific, and rewriting good copy to look different would have been vandalism.
 * They were removed from `/industries/real-estate` in the same commit, so
 * nothing is duplicated between the two.
 */
export const workflow: PMWorkItem[] = [
  {
    h: 'Maintain records at property level',
    p: 'Record income and expenses against the relevant property and entity. This supports property-level reporting and a portfolio view built from consistent underlying records.',
  },
  {
    h: 'Keep tenant charges separate from receipts',
    p: 'Record rent and other charges using the approved lease information, then apply receipts and credits to the tenant ledger. This makes outstanding balances easier to review.',
  },
  {
    h: 'Track security deposits with supporting records',
    p: 'Maintain tenant-level deposit balances and reconcile them to the relevant account records. Handling and return requirements should be confirmed under the applicable jurisdiction and engagement.',
  },
  {
    h: 'Code vendor invoices before approval',
    p: 'Record the property, expense category and supporting details before routing invoices through the client’s approval process. Payment approval and release follow the agreed controls.',
  },
  {
    h: 'Maintain detail for recoverable expenses',
    p: 'Where costs are recoverable under the lease, retain the coding and supporting information needed to prepare the relevant CAM or operating-expense schedules.',
  },
  {
    h: 'Prepare owner statements from reconciled records',
    p: 'Owner statements should tie back to the property ledger and include the supporting detail agreed for the engagement. Open or unresolved items should be identified for review.',
  },
  {
    h: 'Record management fees and owner transactions clearly',
    p: 'Post management fees, owner contributions and distributions as separate transactions using the agreed accounting treatment, so they can be identified in reporting.',
  },
  {
    h: 'Close the month and report exceptions',
    p: 'Complete the agreed reconciliations, review unusual balances and prepare the monthly reporting package. List items that need client clarification rather than leaving them unexplained.',
  },
];

/**
 * Locality. Names what the reader is called in each market and what changes in
 * the ledger — and nothing else.
 *
 * **No statute, regulator, threshold or deadline appears here and none may be
 * added.** `knowledge/markets/` records nothing about property management in
 * any of the three markets, so there is no source to trace a regulatory claim
 * to, and `CLAUDE.md` bans naming a regulator without verifying it applies to
 * accounting services. What is safe, and what is actually differentiating, is
 * using the reader's own word for themselves and routing every compliance
 * question to the licensed local party.
 */
export const locality = {
  lead:
    'Property management requirements differ by jurisdiction and by the type of property or account involved. The accounting process should keep transactions, balances and supporting records clear, while jurisdiction-specific questions are confirmed with the client’s qualified local advisers.',
  markets: [
    {
      region: 'United States',
      href: '/markets/united-states',
      calls: 'Property management companies and brokerages',
      body:
        'Support can include property-level books, tenant and deposit ledgers, reconciliations and owner reporting. State-specific requirements for trust accounts and security deposits should be confirmed with the client’s broker or qualified adviser.',
    },
    {
      region: 'United Kingdom',
      href: '/markets/united-kingdom',
      calls: 'Letting agents, block managers and managing agents',
      body:
        'Accounting records can track landlord, tenant and property activity separately and support regular reporting. Client-money and other jurisdiction-specific obligations should be confirmed with the relevant qualified adviser.',
    },
    {
      region: 'Australia',
      href: '/markets/australia',
      calls: 'Real estate agencies and property management departments',
      body:
        'Support can include rent and landlord ledgers, reconciliations and property-level reporting. Requirements that apply to the agency, trust accounts or licensing should be confirmed with the relevant local professional.',
    },
  ],
};

/** Written from this reader's own exposure, not from a generic list. */
export const boundaries = [
  'Payment approvals and release follow the client’s documented process and assigned authorisations.',
  'Responsibility for holding or returning tenant deposits depends on the account arrangement and applicable local requirements.',
  'Lease interpretation, eviction matters and tenant disputes should be handled by the client’s qualified legal or property professionals.',
  'Tax positions and tax-return sign-off should be agreed with the client and the relevant tax professional as part of the engagement.',
  'Software implementation or specialist configuration is not assumed; support for a specific system is confirmed during scoping.',
  'Management fees, rents, owner allocations and other commercial decisions are based on information and instructions approved by the client.',
];

/** Four phases in this reader's language. Same rail, different vocabulary. */
export const processPhases = [
  {
    n: '01',
    title: 'Review a sample property and month',
    body: 'Review the existing records, reporting format, systems and recurring tasks to understand the scope before work begins.',
  },
  {
    n: '02',
    title: 'Agree the records and workflow',
    body: 'Confirm the property structure, coding rules, reconciliations, reporting format, access and review responsibilities.',
  },
  {
    n: '03',
    title: 'Process and compare',
    body: 'Complete the agreed accounting tasks and review the output with your team so questions and adjustments are addressed early.',
  },
  {
    n: '04',
    title: 'Move to the agreed monthly cycle',
    body: 'Once the process is confirmed, deliver reconciliations, statements and reporting on the agreed schedule, with review and approvals assigned as documented.',
    accent: true,
  },
];

export const services: PMServiceCard[] = [
  { name: 'Property-level bookkeeping', body: 'Transaction posting, property and unit coding, recurring journals and account maintenance kept current rather than caught up.', href: '/services/bookkeeping/united-states' },
  { name: 'Month-end close', body: 'Bank, deposit and escrow reconciliations, accruals, intercompany and a close pack your team reviews rather than rebuilds.', href: '/services/accounting/united-states' },
  { name: 'Accounts payable', body: 'Invoice capture, property and category coding, approval routing and a prepared payment queue. Release stays yours.', href: '/services/accounts-payable/united-states' },
  { name: 'Accounts receivable', body: 'Rent charged from the lease, receipts applied, aging maintained and a delinquency schedule the team can act on.', href: '/services/accounts-receivable/united-states' },
  { name: 'Owner statement preparation', body: 'Statements assembled with transaction detail, reconciliation and open items attached, in the format your owners already recognise.' },
  { name: 'CAM & recovery support', body: 'Recoverable costs coded as they post and reconciliation schedules prepared from the ledger, with the workings a tenant can be shown.' },
  { name: 'Tenant & deposit ledgers', body: 'Deposits held tracked per tenant as a liability and reconciled to the account holding them, so a move-out starts from a fact.' },
  { name: 'Tax preparation support', body: 'Workpapers, schedules and property-level detail organised for the CPA who signs. We prepare; we never sign.', href: '/services/tax-preparation/united-states' },
  { name: 'Payroll processing', body: 'On-site staff, maintenance teams and leasing agents processed against your existing provider and approvals.', href: '/services/payroll/united-states' },
];

export const faqs = [
  {
    question: 'What property management accounting work can be supported?',
    answer:
      'Depending on the agreed scope, work may include property-level bookkeeping, tenant and owner ledgers, accounts payable and receivable, bank and account reconciliations, month-end close, owner statements and CAM or other recoverable-cost schedules.',
  },
  {
    question: 'Can you work with our property management software?',
    answer:
      'Systems may include Yardi, QuickBooks, Xero, Sage and NetSuite. The exact product, access requirements and workflow should be confirmed during scoping before work is agreed.',
  },
  {
    question: 'How are security deposit records handled?',
    answer:
      'The accounting scope can include maintaining tenant-level deposit balances and reconciling them to the relevant account records. Requirements for holding, interest or returning deposits vary, so those responsibilities need to be confirmed for the relevant jurisdiction and engagement.',
  },
  {
    question: 'Can you keep multiple owners and properties separate?',
    answer:
      'Yes, the agreed accounting structure can track activity by property and entity, with owner statements and portfolio summaries prepared from those records. The setup depends on the client’s existing systems, chart of accounts and reporting requirements.',
  },
  {
    question: 'Can you help if the books are behind?',
    answer:
      'Catch-up work can be considered as a separately scoped project. The initial review should establish the period involved, condition of the records, outstanding reconciliations and the output needed before ongoing monthly work is agreed.',
  },
  {
    question: 'How does this work alongside an in-house team?',
    answer:
      'The scope can be divided between recurring processing and reporting tasks and the internal team’s review, client communication and approvals. The division of responsibilities is agreed before work begins.',
  },
  {
    question: 'Can you support tax preparation?',
    answer:
      'Accounting records and supporting schedules can be organised for the tax engagement. The applicable filing, review and sign-off responsibilities should be confirmed based on the jurisdiction, engagement and professionals involved.',
  },
  {
    question: 'What happens before ongoing work begins?',
    answer:
      'The initial review covers the properties involved, current records, systems, reporting format, access and monthly tasks. The parties then agree the scope, responsibilities and review process before recurring work starts.',
  },
];
