/**
 * Named sub-audiences absorbed into an existing industry page, and the limits
 * that go with them.
 *
 * **Why these are not their own URLs (owner's decision, 2026-09-16).** The
 * industries brief asked for `/industries/saas-technology` and
 * `/industries/law-firms`. Both collide with a page that is already live and
 * indexed: `/industries/technology` is titled for SaaS and ranks for it, and
 * `/industries/professional-services` names legal in its own description and
 * carries the trust, WIP and partner-draw content. Building the new URLs would
 * have put two pages on one intent, which is the cannibalisation the same
 * brief forbids elsewhere. The owner ruled: absorb, do not split. So the
 * buyer gets addressed by name, in a segment band, on the page that already
 * owns the query.
 *
 * If a segment ever earns its own demand, the block lifts off cleanly — but
 * that is a decision made from Search Console data, not from a wish list.
 *
 * **The boundaries here are load-bearing, not garnish.** Both of these pages
 * previously overclaimed, and absorbing the segments was the pass that caught
 * it:
 *
 * - Professional Services said trust compliance was "handled correctly". Client
 *   money is regulated by a bar association or an equivalent regulator, per
 *   jurisdiction, and a bookkeeper does not make a firm compliant. We keep the
 *   ledger and run the three-way reconciliation; whether the firm satisfies its
 *   regulator is the firm's own responsibility.
 * - Technology promised "investor-ready financials for fundraising and due
 *   diligence" and said we "apply ASC 606 revenue recognition principles".
 *   The first is an outcome promise of the kind `AI-WEBSITE-GUIDE.md` bans; the
 *   second reads as taking a technical accounting position, which is the
 *   client's CPA or auditor. Both are rewritten to describe the work.
 *
 * Nothing in this file may name a rate, a threshold, a turnaround time, a
 * saving percentage or a client count.
 */

import type { IndustrySegment } from '@/components/industry-page-template';

export const technologySegments: IndustrySegment[] = [
  {
    name: 'SaaS and subscription businesses',
    who: 'Recurring revenue',
    body:
      'The ledger has to carry a deferred balance that still ties to the subscription base after a year of upgrades, downgrades and mid-term changes. That reconciliation is the whole job, and it is the one that quietly stops being true.',
    points: [
      'Deferred revenue maintained and released against the contract term',
      'Deferred balance reconciled to the subscription base, proration included',
      'Payment processor settlements decomposed, including fees and failed payments',
      'Recognised revenue and operating metrics kept distinct and labelled',
      'Month-end close and monthly management reporting',
    ],
  },
  {
    name: 'Software and IT services companies',
    who: 'Projects and licences together',
    body:
      'Mixed revenue is where the books get hard: a licence, an implementation project and a support contract behave differently and often sit on one invoice. Kept undivided, neither margin is knowable.',
    points: [
      'Revenue streams separated in the ledger rather than at reporting time',
      'Project costs and unbilled work brought into the accounts consistently',
      'Contractor and vendor payables processed and coded',
      'Cost of revenue separated from sales, marketing and R&D on a stated basis',
      'Financial statements and month-end close on your cadence',
    ],
  },
  {
    name: 'Marketplaces and usage-billed platforms',
    who: 'Net settlement and metered revenue',
    body:
      'A platform that collects on behalf of somebody else settles net, and what lands in the bank is several things at once. Booking the deposit is the fastest way to a plausible P&L with the wrong margin in it.',
    points: [
      'Settlements decomposed to gross, fees, refunds, chargebacks and reserves',
      'Amounts held for third parties carried as a liability, not as revenue',
      'Usage and metered billing reconciled to what was invoiced',
      'Payables, receivables and bank reconciliation',
      'Management reporting by revenue stream rather than blended',
    ],
  },
];

export const technologyBoundaries = [
  'We give no fundraising, valuation or financial-modelling advice, and we do not build a forecast for you to raise on. We prepare the accounts and the reports; what you present and to whom is yours.',
  'We do not set your revenue recognition policy. ASC 606 judgements — performance obligations, standalone selling price, contract combination — are your CPA’s or your auditor’s. We apply the policy they set and show the schedule.',
  'We give no tax advice. No R&D credit positions, no entity or jurisdiction planning, no nexus registration decisions. Records and schedules are ours; the return and the signature are your CPA’s.',
  'We do not implement, configure or integrate billing systems, subscription platforms or your accounting software. We work inside the stack you already run.',
  'We never hold banking control, and we do not release payments.',
  'We do not describe our output as investor-ready or audit-proof. What we can tell you is what was reconciled, on what basis, and what is still open.',
];

export const professionalServicesSegments: IndustrySegment[] = [
  {
    name: 'Law firms',
    who: 'Client money and matter-level work',
    body:
      'A law firm carries an obligation most businesses never meet: money that belongs to clients, held separately, reconciled against a ledger per matter. The bookkeeping around it is exacting and it is not where a generalist has practice.',
    points: [
      'Client trust and operating ledgers kept strictly separate in the accounts',
      'Three-way reconciliation — bank, trust ledger and the sum of client balances',
      'Client disbursements and recoverable costs tracked apart from firm expense',
      'Matter-level billing, WIP and unbilled time brought into the ledger',
      'Retainers carried as a liability and released as the work is earned',
    ],
  },
  {
    name: 'Consulting firms',
    who: 'Fee-billed engagements',
    body:
      'Engagements run across months and the accounts are read monthly, so the only question that matters is whether cost and revenue land in the same period as each other.',
    points: [
      'Work in progress brought into the ledger on a consistent basis',
      'Write-offs recorded explicitly, so realisation is visible',
      'Project costing and the general ledger agreed to one basis',
      'Subcontractor payables and expense recharges processed',
      'Profitability reporting by engagement, client or practice area',
    ],
  },
  {
    name: 'Agencies and studios',
    who: 'Retainers and pass-through cost',
    body:
      'Pass-through spend is the trap. Media, print and production bought on a client’s behalf runs through the agency’s accounts and inflates both sides if it is treated as the agency’s own revenue and cost.',
    points: [
      'Pass-through and rebillable cost separated from agency revenue',
      'Retainers and advance fees carried as liabilities and released as earned',
      'Freelance and supplier payables processed and coded to the job',
      'Job-level cost tracking tied back to the monthly accounts',
      'Month-end close and management reporting on your cadence',
    ],
  },
];

export const professionalServicesBoundaries = [
  'We do not make your firm compliant with its regulator. Client-money rules are set by a bar association or an equivalent body and differ by jurisdiction. We keep the ledger and run the three-way reconciliation; satisfying the rule is the firm’s own responsibility, and the exceptions we find come to you named.',
  'We never hold banking control, and we never move money between a client account and an operating account. Every transfer is initiated and authorised by your firm.',
  'We give no legal advice of any kind, and no tax advice — no partner tax planning, no entity structuring, no distribution strategy.',
  'We do not decide what is billable, what gets written off or what a client is charged. Those are the firm’s judgements; we record them and make the realisation visible.',
  'We do not advise on partner compensation, profit-sharing or capital account arrangements. We maintain the accounts that follow from what the partners agree.',
  'We do not implement, configure or migrate practice management, time and billing or accounting software. We work inside what you already run.',
];
