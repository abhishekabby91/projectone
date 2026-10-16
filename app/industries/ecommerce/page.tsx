import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/ecommerce';

export const metadata: Metadata = genMeta({
  title: 'Accounting for E-Commerce Businesses',
  description:
    'Outsourced bookkeeping for online retail — multi-channel sales reconciliation across Shopify and Amazon, inventory and COGS, and nexus tracking.',
  path: PATH,
});

const faqs = [
  {
    question: 'Can you reconcile sales across multiple channels?',
    answer:
      'Sales, fees and payouts can be reconciled across channels like Shopify, Amazon, and other marketplaces, matching what actually lands in your bank account against what each platform reports.',
  },
  {
    question: 'Do you handle inventory and cost of goods sold (COGS) accounting?',
    answer:
      'Inventory costs and COGS can be tracked so your margins reflect actual product cost, not just revenue minus operating expenses.',
  },
  {
    question: 'Can you help with multi-state sales tax nexus tracking?',
    answer:
      'Sales and transaction data can be organized for sales-tax nexus review across states based on your sales volume and activity, and can work alongside a sales tax filing service or your tax advisor for the actual filings.',
  },
  {
    question: 'Do you account for marketplace fees and chargebacks separately?',
    answer:
      'Marketplace fees, refunds and chargebacks can be separated as their own line items so you can see true net revenue per channel, not a blended number that hides where margin is being lost.',
  },
  {
    question: 'What platforms do you support?',
    answer:
      'QuickBooks or Xero can serve as the existing accounting record. Sales, fees, refunds and payouts are reconciled from available storefront and payment-processor reports; platform configuration or integration is not part of the service.',
  },
];

export default function EcommerceIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'E-Commerce',
        description:
          'Multi-channel sales reconciliation, inventory and COGS accounting, and sales tax nexus tracking for online retailers selling across marketplaces and their own storefront.',
      }}
      overview="E-commerce accounting becomes difficult when a business sells across multiple channels — each platform reports revenue, fees, and payouts differently, and none of it automatically matches what lands in your bank account. Add multi-state sales tax nexus rules and inventory-based cost of goods sold, and generic bookkeeping quickly falls behind. We reconcile available channel reports against the accounting records, separate fees and returns, and maintain inventory and cost-of-goods-sold records using the client’s approved method. Sales can also be organized by destination state for review by the client’s tax adviser."
      benefits={[
        'Multi-channel reconciliation across Shopify, Amazon, and other marketplaces',
        'Inventory and cost of goods sold (COGS) tracking for accurate margins',
        'Sales organized by destination state to support review with the client’s tax adviser',
        'Marketplace fees, refunds, and chargebacks broken out as separate line items',
        'True net revenue reporting per sales channel',
        'Reconciliation of storefront and payment-processor reports to existing QuickBooks or Xero records',
      ]}
      relatedLinks={[
        { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
        { name: 'Accounts Payable', href: '/services/accounts-payable/united-states' },
        { name: 'Offshore Accounting Support', href: '/solutions/offshore-accounting-support' },
      ]}
      faqs={faqs}
      depth={industryDepth.ecommerce}
    />
  );
}
