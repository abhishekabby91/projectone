import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/ecommerce';

export const metadata: Metadata = genMeta({
  title: 'E-Commerce Accounting Services',
  description:
    'E-commerce accounting support for Shopify and marketplace sellers: settlement reconciliation, fees, refunds, inventory and COGS records, and channel reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'What do e-commerce accounting services include?',
    answer:
      'The scope can include reconciling gross sales, marketplace fees, refunds, chargebacks, reserves and net payouts to available platform and payment-processor reports, then tying settlements to the bank and existing accounting records.',
  },
  {
    question: 'Can you support inventory and cost of goods sold (COGS) records?',
    answer:
      'We can maintain inventory and COGS records using the method and source information approved for the engagement. The reliability of margin reporting depends on current inventory records, purchase costs, returns and the agreed costing method.',
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
    question: 'Which storefronts and accounting platforms can be included?',
    answer:
      'Shopify, Amazon and other marketplace or payment-processor reports can be used where access and source records are available. QuickBooks or Xero can remain the accounting record; platform configuration, connector implementation and software migration are not part of the service.',
  },
];

export default function EcommerceIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'E-Commerce',
        description:
          'E-commerce accounting services for online retailers selling across marketplaces and their own storefront, including settlement reconciliation, fees, refunds, inventory and COGS records, and channel reporting.',
      }}
      overview="E-commerce accounting services need to connect the gross sales reported by each storefront or marketplace to the net settlement that reaches the bank. Platform fees, refunds, chargebacks, reserves, payment-processor charges and timing differences can make a payout look like revenue when it is only the net cash received. We reconcile available channel and processor reports to the existing accounting records, keep fees and returns visible, and maintain inventory and cost-of-goods-sold records using the client’s approved method. Sales can also be organized by destination state for review by the client’s tax adviser; tax registration decisions and filings remain with the client or its appointed tax professional."
      benefits={[
        'Reconciliation of gross sales, fees, refunds, reserves and net payouts across Shopify, Amazon and other marketplaces',
        'Inventory and cost-of-goods-sold records maintained using the client-approved method and available source data',
        'Sales data organized by destination state to support review by the client’s tax adviser',
        'Marketplace fees, refunds, and chargebacks broken out as separate line items',
        'Channel-level revenue and fee reporting that separates gross sales from net settlement amounts',
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
