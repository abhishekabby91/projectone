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
      'Yes, we reconcile sales, fees, and payouts across channels like Shopify, Amazon, and other marketplaces, matching what actually lands in your bank account against what each platform reports.',
  },
  {
    question: 'Do you handle inventory and cost of goods sold (COGS) accounting?',
    answer:
      'Yes, we track inventory costs and COGS so your margins reflect actual product cost, not just revenue minus operating expenses.',
  },
  {
    question: 'Can you help with multi-state sales tax nexus tracking?',
    answer:
      'We help track where you may have sales tax nexus obligations across states based on your sales volume and activity, and can work alongside a sales tax filing service or your tax advisor for the actual filings.',
  },
  {
    question: 'Do you account for marketplace fees and chargebacks separately?',
    answer:
      'Yes, we break out marketplace fees, refunds, and chargebacks as their own line items so you can see true net revenue per channel, not a blended number that hides where margin is being lost.',
  },
  {
    question: 'What platforms do you support?',
    answer:
      'We work with QuickBooks and Xero as the accounting backbone, connected to common e-commerce and payment platforms your business already uses.',
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
        icon: '🛒',
      }}
      overview="E-commerce accounting breaks down when a business sells across multiple channels — each platform reports revenue, fees, and payouts differently, and none of it automatically matches what lands in your bank account. Add multi-state sales tax nexus rules and inventory-based cost of goods sold, and generic bookkeeping quickly falls behind. We reconcile each channel individually, track true net revenue after fees and returns, and keep inventory-based COGS accurate so your margins reflect reality."
      benefits={[
        'Multi-channel reconciliation across Shopify, Amazon, and other marketplaces',
        'Inventory and cost of goods sold (COGS) tracking for accurate margins',
        'Multi-state sales tax nexus tracking',
        'Marketplace fees, refunds, and chargebacks broken out as separate line items',
        'True net revenue reporting per sales channel',
        'QuickBooks and Xero integration with common e-commerce platforms',
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
