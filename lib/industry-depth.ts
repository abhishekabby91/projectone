/**
 * Depth content for the industry pages.
 *
 * These were 580-623 words and described the industry rather than the
 * accounting inside it. What a reader searching "ecommerce bookkeeping" or
 * "property management accounting" wants is the specific thing that breaks in
 * their books — the one their generalist bookkeeper gets wrong — and whether
 * you have seen it before.
 *
 * Every entry is a bookkeeping mechanic, not an advisory claim.
 * `knowledge/company/scope-boundaries.md` §1 and §2 forbid financial advisory
 * and tax planning, and an industry page is where "we understand your business"
 * most easily turns into "we will advise you on it". Each `breaks` item
 * describes what goes wrong in the ledger and what maintaining it properly
 * looks like; none recommends a course of action.
 *
 * Written to be genuinely different per industry — re-measure the near-duplicate
 * scores if you add one.
 */

export interface IndustryDepth {
  /** The thing that actually breaks in this industry's books. */
  breaks: { h: string; p: string }[];
  /** What we would want to see in month one. */
  firstMonth: string[];
}

export const industryDepth: Record<string, IndustryDepth> = {
  ecommerce: {
    breaks: [
      {
        h: 'The payout is not the revenue',
        p: 'Marketplaces and payment processors settle net: gross sales less fees, refunds, chargebacks, reserves and sometimes advertising, in one deposit that lands days after the sales it covers. Booking that deposit as revenue is the single most common e-commerce bookkeeping error, and it understates both revenue and expense at once, so the P&L looks plausible and the margin is wrong. Each settlement has to be decomposed to its components against the platform report, every period.',
      },
      {
        h: 'Inventory that only exists at year end',
        p: 'Where cost of goods sold is calculated once a year from a physical count, monthly margin is fiction — every month carries a full-price inventory purchase as if it were cost, and the true position appears in a single year-end adjustment. Maintaining COGS as sales post is what makes a monthly gross margin mean anything, and it is the number most e-commerce decisions actually rest on.',
      },
      {
        h: 'Nexus accumulating in states nobody is watching',
        p: 'Selling into a state accrues obligation on transaction and revenue triggers, per state, with no single national threshold to watch. Because nothing notifies you, the first sign is often a notice covering periods already closed. Recording sales by destination state keeps the position visible; whether and when to register is a decision for your CPA.',
      },
      {
        h: 'Channel-blind reporting',
        p: 'A blended gross margin across marketplace, own storefront and wholesale hides that one of them is losing money. The fee structures differ enough — marketplace commission against payment processing against wholesale terms — that the blended number rarely describes any of the three. Recording revenue and its associated fees by channel is a setup decision that makes the difference visible.',
      },
    ],
    firstMonth: [
      'Every settlement decomposed to gross sales, fees, refunds, chargebacks and reserves against the platform report',
      'Inventory and COGS maintained as sales post rather than reconstructed at year end',
      'Sales recorded by destination state so multi-state exposure is visible',
      'Revenue and its own fees recorded per channel, not blended',
      'Merchant account and bank reconciled, including timing between sale and payout',
    ],
  },

  healthcare: {
    breaks: [
      {
        h: 'Billed is not collectible, and neither is revenue',
        p: 'Where third-party payers are involved, the amount billed, the amount allowed and the amount eventually received are three different numbers, separated by weeks. Books that recognise the billed amount and then write the difference off later show revenue that never existed followed by an expense that is really a pricing adjustment. Recording the contractual adjustment as it is known keeps the receivable meaningful.',
      },
      {
        h: 'Aged receivables that are aged for different reasons',
        p: 'A balance sitting at 90 days because a claim was denied is a completely different problem from one sitting there because a patient has not paid, and both look identical on a standard aging report. Splitting the receivable by who owes it — payer versus patient — is what turns the aging into something anyone can act on.',
      },
      {
        h: 'Deposits and prepayments treated as income',
        p: 'Money taken before a service is delivered is a liability until it is. Where that is booked straight to revenue, income is overstated in one period and the obligation is invisible in the next. It is a small discipline that materially changes what a month looks like.',
      },
      {
        h: 'Payroll that carries most of the cost and none of the detail',
        p: 'In most practices staffing is the largest line, and a single lump posting tells you nothing about which service line, location or shift pattern is consuming it. Recording payroll at the detail the reporting needs is a setup decision, and it is difficult to reconstruct afterwards.',
      },
    ],
    firstMonth: [
      'Contractual adjustments recorded as they become known, not written off later',
      'Receivables split by payer versus patient responsibility',
      'Prepayments and deposits carried as liabilities until earned',
      'Payroll recorded at the detail the reporting actually needs',
      'Bank, merchant and clearing accounts reconciled monthly',
    ],
  },

  'professional-services': {
    breaks: [
      {
        h: 'Work in progress that lives in the practice management system only',
        p: 'Time recorded but not yet invoiced is an asset, and in most firms it exists only in the time-tracking tool while the ledger knows nothing about it. The result is a P&L that shows the cost of delivering work in one month and the revenue from it in another, and a balance sheet missing one of the firm\'s largest assets. Bringing WIP into the ledger on a consistent basis is what makes monthly results comparable.',
      },
      {
        h: 'Write-offs that disappear into revenue',
        p: 'When time is written off at billing, the reduction usually just lowers the invoice, so realisation is invisible in the accounts. The work still cost what it cost. Recording the write-off explicitly is what lets anyone see the gap between what was worked and what was recovered, which for most firms is the number that matters most.',
      },
      {
        h: 'Retainers and advance fees recognised on receipt',
        p: 'A retainer received is not fee income until the work is done. Booking it to revenue on receipt inflates the period it arrives in and empties the one the work lands in, and it hides a real obligation to the client. The liability has to be carried and released as it is earned.',
      },
      {
        h: 'Projects and periods that never reconcile',
        p: 'Project profitability and monthly accounts drift apart when project costs are tracked in one system and posted in another without a common basis. Both are then right and they disagree, which usually ends with someone maintaining a third spreadsheet. Agreeing one basis at setup is cheaper than reconciling two forever.',
      },
    ],
    firstMonth: [
      'Work in progress brought into the ledger on a consistent basis',
      'Write-offs recorded explicitly so realisation is visible',
      'Retainers and advance fees carried as liabilities and released as earned',
      'Project costing and the general ledger agreed to one basis',
      'Disbursements and recoverable client costs tracked separately from firm expense',
    ],
  },

  technology: {
    breaks: [
      {
        h: 'Cash collected is not revenue recognised',
        p: 'An annual contract billed up front is one cash event and twelve months of revenue. Where the ledger recognises it on invoice, every renewal month looks like a spike and every month after looks like a collapse, and neither describes the business. Maintaining deferred revenue and releasing it on schedule is the single change that makes a SaaS P&L readable — our explainer on ASC 606 covers the recognition principles behind it.',
      },
      {
        h: 'ARR and revenue used interchangeably',
        p: 'Annual recurring revenue is a forward-looking operating metric; recognised revenue is an accounting output. They are computed differently, they will not agree, and a board pack that presents one as the other invites a question nobody in the room can answer. Keeping both, and keeping them labelled, is a reporting discipline rather than an accounting one.',
      },
      {
        h: 'Upgrades, downgrades and mid-term changes',
        p: 'Proration is where subscription bookkeeping actually breaks. A mid-term plan change alters both the deferred balance and the schedule, and where changes are handled in the billing system but not in the ledger, deferred revenue slowly stops tying to the contracts behind it. Reconciling the deferred balance to the subscription base is what catches it early.',
      },
      {
        h: 'Cost of revenue as a residual category',
        p: 'Hosting, third-party APIs, support headcount and payment processing are cost of revenue; sales, marketing and R&D are not. Where the split is made loosely, gross margin — the number every investor and acquirer looks at first — is not comparable to anyone else\'s. Fixing it after a diligence request is late.',
      },
    ],
    firstMonth: [
      'Deferred revenue maintained and released on schedule, not recognised on invoice',
      'Deferred balance reconciled to the subscription base, including mid-term changes',
      'Cost of revenue separated from sales, marketing and R&D on a stated basis',
      'Recognised revenue and operating metrics kept distinct and labelled',
      'Payment processor settlements reconciled, including fees and failed payments',
    ],
  },

  'real-estate': {
    breaks: [
      {
        h: 'Property-level detail lost to entity-level books',
        p: 'A portfolio kept only at entity level cannot answer which property is actually performing, and rebuilding that history later is expensive. Each property needs to stand on its own — for a lender, a partner, a valuation or a sale — and that is a chart-of-accounts and class or property tracking decision made at setup rather than a monthly allocation exercise.',
      },
      {
        h: 'Security deposits treated as cash',
        p: 'Deposits held are the tenant\'s money and a liability, often with statutory rules about how they are held. Where they sit in operating cash and in income, the balance sheet misstates both, and the error compounds with every new lease. It is one of the first things a lender or a buyer checks.',
      },
      {
        h: 'CAM reconciliations left to the year end',
        p: 'Recoverable common area costs accumulate all year and are reconciled against tenant recoveries once. Where the underlying costs were not coded as recoverable when they posted, the reconciliation becomes a manual review of twelve months of expenses under time pressure — and any error is billed to a tenant, which is the version of this problem that generates disputes.',
      },
      {
        h: 'Capital and repair treated interchangeably',
        p: 'Whether a cost is capitalised or expensed changes the period result and the carrying value, and where the two are used loosely neither the P&L nor the asset register can be relied on. We apply the policy consistently as costs post; setting the policy itself is a decision for you and your CPA.',
      },
    ],
    firstMonth: [
      'Property-level reporting established, with the entity view built from it rather than the reverse',
      'Security deposits carried as liabilities and held per the lease terms',
      'Recoverable costs coded as recoverable when they post, so CAM reconciles rather than reconstructs',
      'Capitalisation policy applied consistently, with the fixed asset register kept current',
      'Bank, mortgage and escrow accounts reconciled monthly',
    ],
  },
};
