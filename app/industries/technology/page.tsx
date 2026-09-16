import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { technologySegments, technologyBoundaries } from '@/lib/industry-segments';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/technology';

export const metadata: Metadata = genMeta({
  title: 'SaaS & Technology Accounting Outsourcing',
  description:
    'Outsourced bookkeeping for SaaS and technology companies: deferred revenue maintained against the contract term, settlements decomposed, month-end close.',
  path: PATH,
});

/**
 * This page absorbs the SaaS intent rather than handing it a second URL.
 * `/industries/saas-technology` was requested and deliberately not built — see
 * the header note in `lib/industry-segments.ts`.
 *
 * Three claims were removed in the same pass and must not come back:
 * "investor-ready financials", which promises an outcome nobody can guarantee;
 * "we apply ASC 606 revenue recognition principles", which reads as taking a
 * technical accounting position that belongs to the client's CPA or auditor;
 * and "we integrate with QuickBooks, Xero and NetSuite", which is software
 * implementation language and is forbidden by `scope-boundaries.md` §5.
 */
const faqs = [
  {
    question: 'Can you handle deferred revenue for subscription contracts?',
    answer:
      'Yes — that is the core of the work. An annual contract billed up front is one cash event and twelve months of revenue, so the deferred balance is maintained and released against the contract term rather than recognised on invoice. The recognition policy itself, and the ASC 606 judgements behind it, are set by your CPA or auditor; we apply it and show the schedule.',
  },
  {
    question: 'What happens when customers upgrade or downgrade mid-term?',
    answer:
      'Proration is where subscription bookkeeping actually breaks. A mid-term change alters both the deferred balance and the release schedule, and where it is handled in the billing system but not in the ledger the two quietly stop agreeing. We reconcile the deferred balance back to the subscription base so a drift is caught in the month it happens.',
  },
  {
    question: 'Do you track MRR and ARR alongside the financial statements?',
    answer:
      'We can maintain them and report them, kept clearly distinct from recognised revenue. They are computed differently and they will not agree — a board pack that presents one as the other invites a question nobody in the room can answer. Keeping both, and labelling both, is the discipline that matters.',
  },
  {
    question: 'Can you separate cost of revenue from operating expense?',
    answer:
      'Yes, on a basis your team states and we then apply consistently. Hosting, third-party APIs, support headcount and payment processing behave differently from sales, marketing and R&D, and where the split is made loosely the gross margin is not comparable to anyone else’s. Fixing it during a diligence request is late.',
  },
  {
    question: 'Can you work inside our existing finance stack?',
    answer:
      'That is the intention. Our team works in QuickBooks, Xero, Sage and NetSuite, and alongside common billing and payment platforms. We do not implement, configure, integrate or migrate any of them — we work inside the setup you already run, and if we cannot work in a system we will say so at scoping.',
  },
  {
    question: 'We are early stage. Is this worth doing yet?',
    answer:
      'It is usually cheaper than the alternative, because the expensive problems here are setup problems. Deferred revenue, the cost-of-revenue split and the reconciliation between billing and the ledger cost almost nothing to establish now and become a reconstruction project once a year of history exists in the wrong shape.',
  },
  {
    question: 'Do you prepare board or investor reporting?',
    answer:
      'We prepare the accounts and the recurring reports your board pack is built from, in the format your team already uses. We do not advise on fundraising, valuation or what to present — and we would not describe any output as investor-ready. What we can tell you is what was reconciled, on what basis, and what is still open.',
  },
];

export default function TechnologyIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Technology & SaaS',
        description:
          'Bookkeeping built around how subscription and software businesses actually record revenue — deferred balances that tie to the subscription base, settlements decomposed, and a close that reconciles.',
      }}
      overview="Subscription and software businesses break in a place ordinary bookkeeping never visits: the gap between what was billed and what has been earned. An annual contract billed up front is one cash event and twelve months of revenue, and a ledger that recognises it on invoice produces a spike at renewal and a collapse afterwards — neither of which describes the business. Underneath that sit the same problems in different clothes: mid-term plan changes that move the deferred balance, processor settlements that arrive net of fees and refunds, and a cost-of-revenue line that has quietly become a residual category. None of these is difficult once the structure is right, and all of them are expensive to reconstruct a year later. We maintain that structure as transactions post, in the systems you already run, and leave every judgement — the recognition policy, the tax position, what goes in front of a board — with the people whose call it is."
      benefits={[
        'Deferred revenue maintained and released against the contract term, not on invoice',
        'Deferred balance reconciled to the subscription base, including mid-term changes',
        'Payment processor settlements decomposed to gross, fees, refunds and reserves',
        'Cost of revenue separated from sales, marketing and R&D on a basis your team states',
        'Recognised revenue and operating metrics kept distinct and labelled',
        'Month-end close, management reporting and AP/AR inside your existing stack',
      ]}
      segments={technologySegments}
      boundaries={technologyBoundaries}
      relatedLinks={[
        { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
        { name: 'Accounting & month-end close', href: '/services/accounting/united-states' },
        { name: 'Accounts payable', href: '/services/accounts-payable/united-states' },
        { name: 'NetSuite', href: '/technology/netsuite' },
        { name: 'Dedicated accounting teams', href: '/solutions/dedicated-accounting-teams' },
        { name: 'All industries', href: '/industries' },
      ]}
      faqs={faqs}
      depth={industryDepth.technology}
    />
  );
}
