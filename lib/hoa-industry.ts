/**
 * Content for `/industries/hoa-accounting`.
 *
 * **Why the URL carries the keyword and the others do not.** The site's
 * industry slugs are audience nouns — `cpa-firms`, `real-estate`,
 * `professional-services`. `hoa` alone would match that pattern and would be a
 * three-letter slug that says nothing; `hoa-accounting` is the head term this
 * page is built to rank for, and the owner's 2026-09-17 instruction was to take
 * whichever structure ranks and converts best. The inconsistency is deliberate
 * and it is the right trade.
 *
 * **The split that stops this cannibalising its two neighbours.** Three
 * different readers, and the test is the deliverable:
 *
 * - `/industries/real-estate` — someone who **owns** property. Deliverable: a
 *   financial statement a lender or partner reads.
 * - `/industries/property-management` — someone managing property that belongs
 *   to an owner. Deliverable: the **owner statement**. Receivable: tenant rent.
 * - **this page** — an association, or the company that manages one.
 *   Deliverable: the **board pack**. Receivable: the homeowner assessment.
 *
 * An association has no landlord, no tenant, no lease and no rent. It has
 * members who own their own homes, a volunteer board that changes, a budget
 * approved in public and a reserve balance everybody checks first. **If a
 * paragraph here would read just as naturally on the property management page,
 * it is in the wrong file.**
 *
 * **What may not be written into this file.**
 *
 * - **No reserve-study, funding-level or assessment-setting advice.** How much
 *   an association should hold, what the assessment should be and what a
 *   reserve study concludes are board decisions informed by a reserve
 *   specialist. We account for what the board decides. Saying otherwise is
 *   financial advisory, which `scope-boundaries.md` forbids outright.
 * - **No reserve-account compliance claim.** How reserve funds must be held,
 *   whether a transfer out of reserves is permitted and what disclosure is
 *   owed are set by the governing documents and by state or local law. We keep
 *   the fund accounting; the association's counsel, CPA and board carry that.
 * - **No collections, lien, foreclosure or enforcement position.** When a
 *   notice goes out and when a matter goes to counsel are board decisions
 *   taken under the governing documents. We keep the delinquency schedule the
 *   decision is made from, and nothing more.
 * - **No audit or review opinion, and no claim to prepare one.** An
 *   association's annual audit or review is performed by an independent CPA.
 *   We prepare what that CPA asks for. §4.
 * - **No interpretation of the CC&Rs, bylaws, declaration or any governing
 *   document.**
 * - **No software implementation, configuration or "certified" claim.** §5.
 * - **No assessment figure, reserve percentage, fee, statutory deadline,
 *   turnaround time, door count or client count.** Same rule as
 *   `lib/us-states.ts`: annual figures go stale silently and invented ones
 *   breach the never-invent rule.
 *
 * **Locality is a band, never a URL split** — see the same note in
 * `lib/property-management-industry.ts`. The HOA is a specifically American
 * institution and the band says so rather than pretending the term travels.
 */

export interface HOASegment {
  name: string;
  who: string;
  body: string;
  points: string[];
}

export interface HOAWorkItem {
  h: string;
  p: string;
}

export interface HOAServiceCard {
  name: string;
  body: string;
  href?: string;
}

/**
 * The lead-generation router, in the association's own words.
 *
 * A board member or community manager does not search for "outsourced
 * accounting" — they search after a meeting went badly. Each symptom is
 * written as it would be said in that meeting, and each opens the enquiry
 * dialog already carrying it.
 */
export interface HOATrigger {
  symptom: string;
  reading: string;
  ask: string;
}

export const triggers: HOATrigger[] = [
  {
    symptom: 'The board meeting spends its first half hour working out what the numbers mean',
    reading:
      'Usually the ledger is structured the way the software arrived rather than the way the board approved the budget. Every meeting then opens with a translation exercise and real variances get explained away as mapping differences. Mapping the ledger to the approved budget once removes that permanently.',
    ask: 'Our board meetings start by decoding the financials',
  },
  {
    symptom: 'Nobody can say what the reserve balance actually is without a conversation',
    reading:
      'Operating and reserve are being netted into one cash figure somewhere. The whole point of a reserve balance is that it is visible and is not quietly financing operations — netted together, an operating shortfall is invisible until the reserve is needed. Kept as distinct funds with transfers recorded as transfers, the position is readable on any day of the year.',
    ask: 'Our reserve position is not clearly separated',
  },
  {
    symptom: 'A homeowner queries their balance and it takes a day to answer',
    reading:
      'The homeowner ledger is being maintained from deposits rather than from the assessment schedule. A homeowner with a partial payment, a late fee and a special assessment cannot then be answered without reconstructing their year — and that is the homeowner most likely to ask.',
    ask: 'We cannot answer a homeowner ledger question quickly',
  },
  {
    symptom: 'Delinquency is discussed as an impression rather than a number',
    reading:
      'Without an aged schedule by unit with the status of each balance, a collections conversation cannot become a decision the board can minute, and the allowance question has no answer. The schedule is ours; every step of what the board then does with it is theirs and their counsel’s.',
    ask: 'We have no real delinquency schedule',
  },
  {
    symptom: 'The annual audit or review turns into a scramble every year',
    reading:
      'The request list is the same list every year, and almost all of it is produced by a close that has already happened — reconciliations, fund balances, the assessment roll, the delinquency schedule. Where those are produced monthly, the auditor gets a file. Where they are produced on request, the association gets a scramble.',
    ask: 'The annual audit is a scramble',
  },
  {
    symptom: 'You manage several associations and each one keeps its books differently',
    reading:
      'Inherited structures, inherited software and a different treasurer’s preference at each one. The cost is not the bookkeeping, it is that no two board packs look alike, so nothing your team learns at one association transfers to the next. A single format applied across the portfolio is usually the largest single saving available to a management company.',
    ask: 'Our associations all keep books differently',
  },
];

export const segments: HOASegment[] = [
  {
    name: 'Self-Managed Associations',
    who: 'A volunteer board, no management company',
    body:
      'The treasurer is a homeowner with a day job and the books usually live in whatever they inherited. The risk is concentration rather than complexity: when one volunteer holds the entire financial history, an election or a house move can take it with them.',
    points: [
      'A monthly close that does not depend on one volunteer',
      'A board pack a new treasurer can read unaided',
      'Assessment and delinquency records kept outside a personal machine',
      'Continuity when the board changes',
    ],
  },
  {
    name: 'Community Management Companies',
    who: 'Managing a portfolio of associations',
    body:
      'Every association is a separate set of books, a separate board and a separate budget, and your accounting staff carry all of them through the same month-end. This is where a single consistent format across the portfolio pays for itself more than any per-association saving.',
    points: [
      'One reporting format across every association you manage',
      'Each association’s books fully separable for handover',
      'Close capacity that does not spike at every year-end',
      'Board packs produced on the meeting calendar, not after it',
    ],
  },
  {
    name: 'Condominium Associations',
    who: 'Shared structure, shared systems, shared risk',
    body:
      'A condo association owns the building elements its members depend on, so the reserve conversation is not theoretical — roof, elevator, envelope and mechanical systems all land on the same balance. The accounting has to make the funding position legible long before the expense arrives.',
    points: [
      'Operating and reserve funds kept distinct in the ledger',
      'Reserve transfers recorded as transfers, never as spending',
      'Major repair and replacement costs tracked against their fund',
      'Special assessments accounted for separately from regular dues',
    ],
  },
  {
    name: 'Master-Planned & Large-Scale Communities',
    who: 'Sub-associations, shared amenities, layered budgets',
    body:
      'A master association collecting from sub-associations, amenities with their own cost centres and members who belong to more than one body. Every one of those is a place where an allocation gets made, and an allocation nobody can reproduce is the thing that eventually reaches a lawyer.',
    points: [
      'Allocations between master and sub-associations documented',
      'Amenity operations tracked as their own cost centres',
      'Budgets consolidated without losing the component views',
      'Inter-association balances reconciled rather than assumed',
    ],
  },
  {
    name: 'Newly Transitioned Associations',
    who: 'Just handed over from the developer',
    body:
      'Turnover is the one moment when an association’s entire financial history changes hands at once, and the opening balances it inherits set every comparison it will make for years. Getting the opening position and the fund split right here is worth more than any efficiency later.',
    points: [
      'Opening balances established and documented at turnover',
      'Operating and reserve funds separated from the first month',
      'A chart of accounts matching the board’s first approved budget',
      'A clean baseline the first audit can start from',
    ],
  },
  {
    name: 'Small Associations & Co-ops',
    who: 'A handful of units, a real board, a real budget',
    body:
      'A small association has the same obligations as a large one and a fraction of the capacity to meet them. What it usually needs is not more accounting but a repeatable monthly one — the same close, the same pack, every month, at a size that fits.',
    points: [
      'A right-sized monthly close rather than an annual catch-up',
      'A board pack that fits the meeting it is read in',
      'Assessment tracking per unit without a system change',
      'Records an accountant can pick up without a handover call',
    ],
  },
];

/**
 * The core workflow block. Lifted from the real estate page's HOA band on
 * 2026-09-17 and expanded; removed from that page in the same commit, so
 * nothing is duplicated between the two.
 */
export const workflow: HOAWorkItem[] = [
  {
    h: 'Assessments billed and aged by homeowner, not by the bank',
    p: 'The homeowner ledger is the association’s receivable record: what was assessed, what was paid, what remains, and in what order payments were applied. Where it is maintained from deposits rather than from the assessment schedule, a homeowner with a partial payment and a late fee cannot be answered without reconstructing their year — and that is exactly the homeowner who will ask, in writing, at a meeting.',
  },
  {
    h: 'Operating and reserve funds kept separate in the ledger',
    p: 'Reserves are held for a purpose the board has identified, and the whole point of the balance is that it is visible and not quietly financing operations. Netted into one cash figure, a shortfall in operating is invisible until the reserve is needed. Kept as distinct funds with transfers recorded as transfers, the position is readable at any point in the year. What the reserve level should be, and what a reserve study concludes, is the board’s call and their reserve specialist’s.',
  },
  {
    h: 'Special assessments accounted for apart from regular dues',
    p: 'A special assessment is raised for a stated purpose, often collected over a schedule, and frequently the single thing members watch hardest. Run through the same accounts as regular dues, nobody can show what was raised against what was spent — which is the question that gets asked at the meeting where it matters. Tracked separately, the answer is a report.',
  },
  {
    h: 'Delinquency tracked as a schedule, not as a feeling',
    p: 'An aged delinquency schedule by unit, with the status of each balance, is what turns a collections conversation into a decision the board can minute. It also makes the allowance question answerable. Every step of a collections process — when a notice goes out, when a matter goes to counsel — stays a board decision taken under the governing documents; we keep the record it is made from.',
  },
  {
    h: 'Payables run against board-approved invoices',
    p: 'Association spending is approved by people who meet monthly, so the payables cycle has to fit the board calendar rather than the other way round. Invoices captured, coded to the board’s own budget lines and presented in a form the board recognises means an approval meeting spends its time on decisions rather than on identifying what an invoice was for. Payment itself is released by the association, never by us.',
  },
  {
    h: 'Budget versus actual in the board’s lines, not the software’s',
    p: 'A board approved a budget in particular categories, and that is the report they expect back. Where the accounting uses a different structure, every meeting starts with a translation exercise and variances get explained as mapping differences. Mapping the ledger to the approved budget once removes that permanently, and makes a real variance impossible to hide behind a category name.',
  },
  {
    h: 'A board pack that survives the meeting',
    p: 'Balance sheet, income statement against budget, cash and reserve position, aged delinquency, and the reconciliations behind them — assembled the same way every month so a new treasurer can read the current pack against last year’s without a guide. Consistency is the feature here: a pack that changes shape each month cannot be compared, and a board that cannot compare cannot govern.',
  },
  {
    h: 'An audit file built monthly rather than annually',
    p: 'The independent CPA’s request list is substantially the same every year and almost all of it is a by-product of a close that has already happened: reconciliations, fund balances, the assessment roll, the delinquency schedule, the minutes of what was approved. Produced monthly, the annual audit or review starts from a file. Produced on request, it starts from a scramble — and the opinion is the CPA’s either way.',
  },
];

/**
 * Locality. The HOA is an American institution and this band says so plainly
 * rather than pretending the term travels — which is itself the market-correct
 * vocabulary rule in `CLAUDE.md` applied honestly.
 *
 * **No statute, regulator, threshold or deadline appears here and none may be
 * added.** `knowledge/markets/` records nothing about community associations,
 * so there is no source for a regulatory claim.
 */
export const locality = {
  lead:
    'Community associations are governed locally — by their own declaration and bylaws first, and then by the law of the state or country they sit in. None of that is ours to interpret in any market, and the parts that differ most between markets are exactly the parts that belong to the association’s counsel, its CPA and its board. What does not differ is the accounting: money collected from members for a shared purpose has to be traceable to that purpose, per member and per fund.',
  markets: [
    {
      region: 'United States',
      href: '/markets/united-states',
      calls: 'HOAs, condominium associations, COAs and community management companies',
      body:
        'This is the market the term belongs to, and the one most of this page is written for. Governing documents come first and state law sits behind them, and both vary enough that the association’s counsel and CPA carry them. Our side is the fund accounting, the assessment roll, the delinquency schedule and the board pack. The annual audit or review opinion is the independent CPA’s.',
    },
    {
      region: 'United Kingdom',
      href: '/markets/united-kingdom',
      calls: 'Residents’ management companies, RTM companies and block managing agents',
      body:
        'There is no HOA in the UK and we will not pretend otherwise. The nearest reader is a residents’ management or right-to-manage company, or the agent acting for one, where money is collected from leaseholders for the upkeep of a shared building. The ledger question is the same — what was collected, from whom, for what, and what remains — and who certifies the annual statement leaseholders receive stays with your own qualified accountant.',
    },
    {
      region: 'Australia',
      href: '/markets/australia',
      calls: 'Strata schemes, owners corporations and body corporate managers',
      body:
        'The Australian equivalent is a strata scheme or owners corporation, with levies in place of assessments and an administrative fund and a capital works fund in place of operating and reserve. The separation is the same idea and the same discipline. The licensing of the strata manager, the audit and the state legislation behind all of it stay with the scheme and its own advisers.',
    },
  ],
};

export const boundaries = [
  'We never hold, release or transfer association funds, and we are never a signatory on an operating or reserve account.',
  'We do not tell a board what its assessments should be, what its reserves should hold, or what a reserve study should conclude. Those are board decisions and a reserve specialist’s.',
  'We do not decide whether reserve funds are held correctly or whether a transfer out of reserves is permitted. That is the governing documents, counsel and the board.',
  'We take no step in a collections, lien or foreclosure process, and we do not advise on one. We keep the delinquency schedule the board decides from.',
  'We do not interpret the CC&Rs, the bylaws, the declaration or any governing document.',
  'We do not audit or review an association’s financial statements and we issue no opinion. We prepare what your independent CPA asks for.',
  'We do not sign a tax return or take final responsibility for one, and we represent nobody before a tax authority.',
  'We do not implement, configure or administer association management software, and we hold no vendor certification.',
];

export const processPhases = [
  {
    n: '01',
    title: 'One association, one month',
    body: 'We take a single association and a single closed month and produce the board pack the board would actually receive — in your format, from your system. Nothing else moves until the treasurer has compared it against what they get today.',
  },
  {
    n: '02',
    title: 'Map to the approved budget',
    body: 'The chart of accounts is mapped to the budget the board approved, the operating and reserve funds are separated, and the assessment roll is reconciled. This is the phase that stops every future meeting opening with a translation exercise.',
  },
  {
    n: '03',
    title: 'Run to the meeting calendar',
    body: 'The close, the payables run and the pack are timed to when the board actually meets rather than to a generic month-end. We run alongside your team first, and the two outputs are compared before anything is handed over.',
  },
  {
    n: '04',
    title: 'The board keeps every decision',
    body: 'Steady state: pack, reconciliations and schedules delivered on the meeting cycle. Approvals, payment release, collections steps and every judgement stay with the board and its manager. That boundary does not move.',
    // The accent is spent here, on the phase where the boundary sits.
    accent: true,
  },
];

export const services: HOAServiceCard[] = [
  { name: 'Association bookkeeping', body: 'Daily posting, coding to the board’s approved budget lines, recurring journals and account maintenance kept current.', href: '/services/bookkeeping/united-states' },
  { name: 'Monthly close & board pack', body: 'Reconciliations, fund balances, budget-versus-actual and the supporting schedules, assembled the same way every month.', href: '/services/accounting/united-states' },
  { name: 'Assessment & homeowner ledgers', body: 'Assessments billed from the schedule, receipts applied in a stated order, and a per-unit ledger that can answer a homeowner directly.' },
  { name: 'Delinquency reporting', body: 'An aged schedule by unit with the status of each balance — the record a board minutes a collections decision from.' },
  { name: 'Reserve fund accounting', body: 'Operating and reserve kept as distinct funds, transfers recorded as transfers, and the funding position readable on any day.' },
  { name: 'Accounts payable', body: 'Invoices captured, coded to budget lines and presented for board approval. The association releases every payment.', href: '/services/accounts-payable/united-states' },
  { name: 'Audit & review support', body: 'The independent CPA’s request list produced from a close that already happened. The opinion is theirs; the file is ours.', href: '/services/audit-support/united-states' },
  { name: 'Tax preparation support', body: 'Records and schedules organised for the CPA who signs the association’s return. We prepare; we never sign.', href: '/services/tax-preparation/united-states' },
  { name: 'Budget preparation support', body: 'Prior-year actuals, variance history and the working schedules a board builds next year’s budget from. The budget itself is theirs.' },
];

export const faqs = [
  {
    question: 'Do you ever touch the association’s money?',
    answer:
      'No. We are never a signatory on an operating or reserve account, we never hold funds, and we never release a payment. We prepare the payables run, the reconciliations and the fund accounting; the association or its manager executes every transaction with their own credentials and their own approvals. For a body governed by volunteers and answerable to its members, that separation is the point rather than a limitation.',
  },
  {
    question: 'Can you tell us whether our reserves are adequately funded?',
    answer:
      'No, and anybody who offers to on a marketing page is overreaching. Reserve adequacy is a conclusion drawn from a reserve study by a specialist, and the funding decision is the board’s. What we do is make the position legible: operating and reserve held as distinct funds, transfers recorded as transfers, and the balance readable on any day of the year rather than at the point somebody needs to spend it.',
  },
  {
    question: 'Will you handle collections on delinquent accounts?',
    answer:
      'We keep the aged delinquency schedule by unit with the status of each balance — the record a board makes a decision from, and the one that makes the allowance question answerable. We take no step in a collections process and we do not advise on one. When a notice goes out, when a payment plan is accepted and when a matter goes to counsel are board decisions taken under the governing documents.',
  },
  {
    question: 'Can you prepare our annual audit?',
    answer:
      'We prepare the file an audit or review is performed against: reconciliations, fund balances, the assessment roll, the delinquency schedule and the supporting detail. We do not perform the audit or review, and we issue no opinion — that is your independent CPA, and it needs to be independent to be worth anything. What changes is the starting point. Where the close happens monthly, the auditor receives a file; where it does not, the association spends weeks assembling one.',
  },
  {
    question: 'We manage several associations. Can you keep them properly separate?',
    answer:
      'Each association is its own set of books with its own board, its own approved budget and its own fund structure, and it stays fully separable — so an association can be reported on, reviewed, or handed to another manager without touching any other. What you gain across a portfolio is consistency: the same close and the same pack shape at every association, so what your team learns at one transfers to the next and no board is reading a format nobody else uses.',
  },
  {
    question: 'Our board only meets monthly. Does that work?',
    answer:
      'It is what the cycle is built around. Association spending is approved by people who meet on a fixed calendar, so the payables run and the pack are timed to the meeting rather than to a generic month-end — invoices captured and coded to the board’s own budget lines and presented in a form they recognise, so the meeting spends its time on decisions rather than on working out what an invoice was for.',
  },
  {
    question: 'What if our books are a mess after a self-managed period or a turnover?',
    answer:
      'That is common and it is scoped as its own piece of work rather than folded into the monthly cycle — a cleanup has a defined end and a defined output, and running the two together is how a cleanup quietly becomes permanent. For a turnover in particular the opening balances and the operating-versus-reserve split matter more than anything that comes after, because every comparison the association makes for years is measured from them.',
  },
  {
    question: 'Do you work with associations outside the United States?',
    answer:
      'The HOA is an American institution and most of this page is written for that market. The nearest readers elsewhere are a UK residents’ management or right-to-manage company and an Australian strata scheme or owners corporation, and the ledger discipline is the same — money collected from members for a shared purpose, traceable per member and per fund. What differs is the governing law and who certifies the annual statement members receive, and that stays with your own local qualified adviser in every case.',
  },
];
