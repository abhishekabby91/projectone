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
    symptom: 'Owner statements go out late, and the late ones generate the most questions',
    reading:
      'Almost always a close problem wearing a reporting costume. Where bank, deposit and escrow accounts are reconciled at reporting time rather than monthly, the statement cannot be produced until the worst surprise of the month has been found and explained. Reconciling on a fixed monthly cycle makes the statement a print job.',
    ask: 'Owner statements are going out late',
  },
  {
    symptom: 'Nobody can answer a tenant ledger question without opening the bank',
    reading:
      'The receivable is being built from deposits rather than from the lease. Once what a tenant owes and what arrived in the bank are the same record, partial payments, prepaid rent and concessions all collapse into one line and the ledger stops being able to settle a dispute.',
    ask: 'Our tenant ledgers cannot answer a dispute',
  },
  {
    symptom: 'Security deposits are sitting somewhere in operating cash',
    reading:
      'Deposits held are the tenant’s money. Carried as income or inside operating cash they overstate both, and the error compounds with every new lease — it is one of the first things a lender or a buyer tests. Getting the ledger straight is ours; how the account itself must be held is your managing broker or counsel.',
    ask: 'Deposits are not separated in our books',
  },
  {
    symptom: 'CAM or recoverable costs are reconciled once a year, in a panic',
    reading:
      'Recoverability is decided at the point of coding or it is reconstructed a year later from vendor names and memory. Coded as it posts, the annual reconciliation is a report rather than a project, and a tenant challenge is answerable from the file.',
    ask: 'CAM reconciliation is an annual fire drill',
  },
  {
    symptom: 'You took on doors this year and the accounting did not scale with them',
    reading:
      'The usual break is that the portfolio view was built by allocating down into properties rather than up from them. That holds until an owner asks for one building pulled out, or until a property is sold. It is a chart-of-accounts decision, and it is cheap now and expensive once a year of history exists in the wrong shape.',
    ask: 'We grew and the books did not keep up',
  },
  {
    symptom: 'Your controller is doing data entry and you cannot justify another hire',
    reading:
      'The recurring processing, coding, reconciling and statement preparation is the part that scales with doors. The review, the owner relationship and the approvals do not. Handing over the first and keeping the second is what capacity actually means here.',
    ask: 'Our accounting person is doing the wrong work',
  },
];

/** Who this page is written for. Managers, never owners — owners are /industries/real-estate. */
export const segments: PMSegment[] = [
  {
    name: 'Residential Property Managers',
    who: 'Apartments, single-family and small multifamily',
    body:
      'High transaction count, low value per transaction, and a rent roll that changes every month through move-ins, move-outs, renewals and concessions. The accounting risk is not complexity, it is that a thousand small postings a month leave no room to reconstruct anything later.',
    points: [
      'Rent charged from the lease, receipts applied against it',
      'Move-in and move-out recorded as deposit events, not income',
      'Late fees and concessions posted where the ledger can show them',
      'Turn costs coded to the unit as they happen',
    ],
  },
  {
    name: 'Commercial & Retail Managers',
    who: 'Office, retail, industrial and mixed-use',
    body:
      'Fewer tenants, far more structure. Base rent, percentage rent, escalations and recoverable operating costs all sit in the lease, and a tenant who is billed from a schedule instead of from their lease will find it.',
    points: [
      'Recoverable and non-recoverable split decided at coding',
      'Escalations and step rents billed from the lease terms',
      'CAM pools reconciled from the ledger, not rebuilt annually',
      'Tenant billing supported with the detail behind it',
    ],
  },
  {
    name: 'Third-Party Fee Managers',
    who: 'Managing on behalf of owners you do not own with',
    body:
      'The purest form of the problem this page is about: every book belongs to somebody else, every statement is read by somebody who did not see the transactions, and your management fee is itself a transaction inside the accounts you are keeping.',
    points: [
      'Management fee calculated and posted on its own schedule',
      'Owner draws and contributions recorded as owner activity',
      'One owner’s properties reportable without the others',
      'A clean file if an owner moves to another manager',
    ],
  },
  {
    name: 'Single-Family Rental Operators',
    who: 'Scattered-site portfolios under one roof',
    body:
      'Geographically spread, individually small, and usually owned across several entities. The reporting question is almost always the same: show me this house, this entity and the whole book, without three different spreadsheets.',
    points: [
      'Property-level books that roll up rather than allocate down',
      'Entity and portfolio views built from the same ledger',
      'Repairs and capital separated as they post',
      'Per-property performance answerable at any point',
    ],
  },
  {
    name: 'Short-Term & Furnished Rental Managers',
    who: 'Platform-booked, high-frequency, multi-channel',
    body:
      'Income arrives as a net settlement from a platform with the gross, the commission, the taxes collected and the refunds already blended into one deposit. Booked as one number, the revenue is wrong, the margin is invisible and the tax collected is unidentifiable.',
    points: [
      'Payouts broken back out into gross, fees and refunds',
      'Channel-by-channel revenue kept separable',
      'Taxes collected tracked as amounts held, not as income',
      'Owner splits calculated from gross, not from the payout',
    ],
  },
  {
    name: 'Build-to-Rent & Lease-Up Teams',
    who: 'New properties moving into operation',
    body:
      'The month a property stops being a construction project and starts being an operating one is the month its accounting has to change shape. Done late, the first year of operating history carries development costs through it and nothing compares to anything.',
    points: [
      'Development and operating costs kept apart from day one',
      'The operating chart of accounts in place before first rent',
      'Lease-up concessions recorded where they can be measured',
      'A first full operating month that is comparable to the next one',
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
    h: 'Property-level books, with the entity view built from them',
    p: 'Every property carries its own income, its own costs and its own bank position, and the portfolio view is assembled from those rather than allocated down into them. That is a chart-of-accounts and property-tracking decision made at setup — cheap to make now, expensive to retrofit once a year of history exists in the wrong shape. It is also the difference between answering "how did Maple Street do?" in a minute and answering it in a day.',
  },
  {
    h: 'Rental income recorded against the lease, not against the deposit',
    p: 'What a tenant owes comes from their lease; what arrived in the bank is a separate fact. Where the two are treated as one, partial payments, prepaid rent and concessions all disappear into the same line and the tenant ledger stops being able to answer a dispute. Kept apart, the receivable is real, the aging means something, and a delinquency conversation starts from a schedule rather than from a search.',
  },
  {
    h: 'Security deposits carried as a liability, never as income',
    p: 'Deposits held are the tenant’s money and are often subject to rules about how they are held. Sitting in operating cash and in income, they overstate both, and the error compounds with every new lease — it is one of the first things a lender or a buyer looks at. We keep the deposit ledger per tenant and reconcile it to the account that holds it. How that account itself must be held, and what may be deducted at move-out, is a question for your managing broker or counsel.',
  },
  {
    h: 'Vendor invoices coded to the property before they are approved',
    p: 'An invoice that reaches approval without a property and a category attached gets approved on the amount alone, and the coding is guessed afterwards by someone reading a vendor name. Captured, coded and routed with the property already on it, the approver is approving a fact rather than reconstructing one. The release of payment stays entirely with your team — we prepare the queue, you pay it.',
  },
  {
    h: 'Recoverable costs identified as they post, not at reconciliation',
    p: 'Whether a cost is recoverable, from which tenants, under which pool and subject to which cap or exclusion is knowable at the moment it is coded and largely unknowable a year later. Decided as it posts, the annual CAM or operating-expense reconciliation becomes a report that already exists. Decided at reconciliation time, it becomes an archaeology project carried out under a deadline with a tenant waiting.',
  },
  {
    h: 'Owner statements prepared with their own supporting detail',
    p: 'An owner statement with no backing is a number to be trusted or argued with. Prepared with the transaction detail, the reconciliation and the open items attached, it is a document that answers itself — which is what actually reduces the volume of owner email. Where a figure is genuinely unresolved it is named on the statement rather than smoothed into an accrual and discovered later.',
  },
  {
    h: 'Management fees and owner draws posted as their own events',
    p: 'The fee you earn and the distributions an owner takes are transactions inside books that belong to the owner, and both get read closely. Calculated on a stated basis, posted on a schedule and shown separately from operating activity, they stop being the line an owner asks about every month.',
  },
  {
    h: 'Month-end that reconciles rather than reconstructs',
    p: 'Bank, deposit and escrow accounts reconciled monthly, recurring journals posted, property accounts checked and anything unresolved listed by name. A close done this way takes the same work every month. A close done at reporting time takes however long the worst surprise takes, which is why it is always the growth month that breaks.',
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
    'Property management is a local business run under local rules, and the rules that matter most here — how client or tenant money must be held, who may hold it, and what a licensed agent is answerable for — are not ours to interpret in any market. What we do is the same in all three: keep the ledger so that whoever is answerable can see the position at any point, and reconcile it to the account that actually holds the money.',
  markets: [
    {
      region: 'United States',
      href: '/markets/united-states',
      calls: 'Property management companies and brokerages',
      body:
        'Trust and security-deposit handling is set at state level and your managing broker carries it. Our side is the deposit ledger per tenant, the reconciliation to the account holding it, and property-level books that let one building be pulled out of a portfolio intact. Which state rules apply, and how the account must be held, is your broker, your counsel and your CPA.',
    },
    {
      region: 'United Kingdom',
      href: '/markets/united-kingdom',
      calls: 'Letting agents, block managers and managing agents',
      body:
        'A UK reader is managing blocks and tenancies rather than "doors", and the money held for landlords and leaseholders is not the agent’s own. We keep those balances visible and reconciled rather than netted into the agency’s cash. Which client-money scheme applies to you, and who signs off the annual accounts a leaseholder receives, stays with your own qualified accountant and your scheme.',
    },
    {
      region: 'Australia',
      href: '/markets/australia',
      calls: 'Real estate agencies and property management departments',
      body:
        'An Australian agency runs rent and outgoings through accounts it holds for landlords, and the licensed agent is answerable for them. We keep the tenant and landlord ledgers and reconcile them to the account; the licence, the audit of it and the state rules that govern it stay with the agency and its own auditor.',
    },
  ],
};

/** Written from this reader's own exposure, not from a generic list. */
export const boundaries = [
  'We never hold, release or transfer your money, your owners’ money or a tenant’s deposit. We prepare the payment queue; your team releases it.',
  'We do not decide whether a trust, client-money or deposit account is being held correctly. That is your managing broker, your scheme or your counsel.',
  'We do not deduct from, or advise on deductions from, a security deposit at move-out.',
  'We take no position on a lease, an eviction, a notice or a tenant dispute. We keep the ledger the position is argued from.',
  'We do not sign, review or take final responsibility for a tax return. We prepare the records and schedules your CPA works from.',
  'We give no tax planning, entity-structure, cost-segregation or 1031 advice, in any phrasing.',
  'We do not implement, configure, migrate or administer Yardi, AppFolio, Buildium, QuickBooks or anything else, and we hold no vendor certification.',
  'We do not set your management fee, your rents or your owner splits. We post what you have agreed.',
];

/** Four phases in this reader's language. Same rail, different vocabulary. */
export const processPhases = [
  {
    n: '01',
    title: 'One property, one month',
    body: 'We take a single property and a single closed month, in your system and your formats, and produce what the owner would actually receive. Nothing else moves until you have compared it against what you produce today.',
  },
  {
    n: '02',
    title: 'Set the structure',
    body: 'Property tracking, the chart of accounts, the deposit and escrow ledgers, the recoverable split and the owner statement format are agreed in writing. This is the phase that decides whether year two is a report or a reconstruction.',
  },
  {
    n: '03',
    title: 'Run alongside',
    body: 'We process, code, reconcile and prepare while your team keeps doing the same, and the two outputs are compared. Discrepancies are cheap here and expensive after the handover.',
  },
  {
    n: '04',
    title: 'You keep the approvals',
    body: 'Steady state: we deliver the close, the statements and the schedules on an agreed cycle. Payment release, owner and tenant relationships, and every judgement call stay with you. That boundary does not move.',
    // The accent is spent here, on the phase where the boundary sits.
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
    question: 'Do you hold or move any of our money, or our owners’ money?',
    answer:
      'No, and this is the boundary we are least flexible about. We prepare the payment queue, the deposit ledger and the reconciliations. Every release of money — to a vendor, to an owner, from a deposit — is executed by your team with your own credentials and your own approvals. We are never a signatory and never hold banking control.',
  },
  {
    question: 'Can you work in Yardi, AppFolio, Buildium or Propertyware?',
    answer:
      'Our team has experience with Yardi, including Voyager and Breeze, and with QuickBooks, Xero, Sage and NetSuite. Where you run something else we would confirm at scoping whether we can genuinely work in it rather than assume, and if the answer is no we would tell you. What we do not do is implement, configure, migrate or administer any of them, and we hold no vendor certification — that is a different profession, and a provider offering both is asking you to take their word on the setup and on the work done inside it.',
  },
  {
    question: 'How do you make sure security deposits are handled correctly?',
    answer:
      'We keep the deposit ledger per tenant, carry it as a liability rather than as income, and reconcile it monthly to the account that holds it — so the balance you are answerable for is visible at any point rather than at move-out. What we do not do is determine whether the account itself is held correctly, whether interest is owed, or what may be deducted at move-out. Those are set by your jurisdiction and belong to your managing broker or counsel.',
  },
  {
    question: 'We manage for several owners. Can you keep them properly separate?',
    answer:
      'That separation is the setup, not a reporting step at the end. Each property carries its own books and the owner and portfolio views are assembled upward from them, so one owner’s properties can be reported, reviewed or handed over without touching anyone else’s. It also means that if an owner moves to another manager, what they take with them is a clean file rather than an extraction project.',
  },
  {
    question: 'Our books are behind. Do you take on cleanup, or only ongoing work?',
    answer:
      'Both, but they are scoped separately and deliberately so. A cleanup has a defined end and a defined output; recurring work has a cycle. Running them as one engagement is how a cleanup quietly becomes permanent and nobody can say whether the monthly work is on time. We would look at the current state first and tell you which of the two the real problem is.',
  },
  {
    question: 'How does this compare to hiring an in-house bookkeeper?',
    answer:
      'The honest comparison is about what scales. Processing, coding, reconciling and statement preparation scale with the number of doors; review, owner relationships and approvals do not. An in-house hire absorbs both and becomes the single point of failure for both. This model takes the first set and leaves the second with you — and capacity moves through a lease-up or an acquisition without a hire. Where it is not the right answer is where the work is genuinely small or genuinely irregular, and we would say so at scoping.',
  },
  {
    question: 'Do you prepare our tax returns?',
    answer:
      'We prepare the records, workpapers and property-level schedules a return is built from, and we work directly with your CPA. We do not sign returns, take final responsibility for them, represent anyone before a tax authority, or give tax planning, cost-segregation or 1031 advice. Those require a licensed professional and they stay with yours.',
  },
  {
    question: 'What does the first month actually look like?',
    answer:
      'One property and one closed month, run in your system and your formats, producing what an owner would actually receive. You compare it against what you produce today before anything else moves. Nothing transfers on the first call and nothing moves in bulk — the point of starting this way is that both sides can judge the output against something real rather than against a proposal.',
  },
];
