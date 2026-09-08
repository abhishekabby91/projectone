import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/technology';

export const metadata: Metadata = genMeta({
  title: 'Accounting for SaaS & Technology Companies',
  description:
    'Outsourced accounting for SaaS and technology companies — MRR and ARR tracking, deferred revenue under ASC 606, and investor-ready reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'Do you understand SaaS-specific metrics like MRR and ARR?',
    answer:
      'Yes, we track Monthly and Annual Recurring Revenue, churn, and related SaaS metrics alongside standard financial statements, so your reporting reflects how subscription businesses are actually evaluated.',
  },
  {
    question: 'Can you handle deferred revenue recognition?',
    answer:
      'Yes, we apply ASC 606 revenue recognition principles for subscription and multi-period contracts, so revenue is recognized correctly across the life of a contract rather than all at signing.',
  },
  {
    question: 'Do you support burn rate and runway reporting for investors?',
    answer:
      "Yes, we prepare burn rate and runway reporting formatted for board decks and investor updates, so you're not scrambling before every board meeting.",
  },
  {
    question: 'Can you work alongside our existing finance stack?',
    answer:
      'Yes, we integrate with QuickBooks, Xero, and NetSuite, along with common billing tools, to keep your financial data connected rather than duplicated across systems.',
  },
  {
    question: "We're pre-revenue or early stage — is this still useful for us?",
    answer:
      'Yes, early-stage companies benefit from clean books and investor-ready reporting from day one, which avoids costly cleanup work later during fundraising or an audit.',
  },
];

export default function TechnologyIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Technology & SaaS',
        description:
          'Outsourced accounting built around how software and subscription businesses actually get measured — recurring revenue, deferred revenue, and burn rate, not just a standard P&L.',
        icon: '💻',
      }}
      overview="Technology and SaaS companies get evaluated on metrics that a standard chart of accounts doesn't naturally produce: MRR, ARR, net revenue retention, and burn rate against runway. Subscription revenue also needs to be recognized under ASC 606 across the life of a contract, not booked all at once. We build accounting operations around these realities from the start, so your financials are usable for board reporting and fundraising, not just tax compliance."
      benefits={[
        'MRR, ARR, and churn tracking alongside standard financial statements',
        'ASC 606-aligned revenue recognition for subscription and multi-period contracts',
        'Burn rate and runway reporting formatted for board decks and investor updates',
        'Integration with QuickBooks, Xero, NetSuite, and common billing platforms',
        'Investor-ready financials for fundraising and due diligence',
        'Support scales with headcount and complexity as you grow',
      ]}
      relatedLinks={[
        { name: 'NetSuite', href: '/technology/netsuite' },
        { name: 'Dedicated Accounting Teams', href: '/solutions/dedicated-accounting-teams' },
      ]}
      faqs={faqs}
      depth={industryDepth.technology}
    />
  );
}
