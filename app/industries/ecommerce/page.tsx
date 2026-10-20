import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/ecommerce';

export const metadata: Metadata = genMeta({
  title: 'E-Commerce Accounting Services',
  description:
    'E-commerce accounting services for Shopify and marketplace sellers: settlement reconciliation, fees, refunds, inventory and COGS records, and channel reporting.'
  path: PATH,
});

const faqs = [
  {
    question: 'What do e-commerce accounting services include?',
    answer:
      'The scope can include reconciling gross sales, marketplace fees, refunds, chargebacks, reserves and net payouts to available platform and payment-processor reports, then tying settlements to the bank and existing accounting records.',
  },
  {
    question: 'Do you handle inventory and cost of goods sold (COGS) accounting?',
    answer:
      'Inventory and COGS records can be maintained using the method and source information approved for the engagement. Margin reporting depends on current inventory records, purchase costs, returns and the agreed costing method.',
  },
  {
    question: 'Can you organise sales data for a tax adviser to review?',
    answer:
      'Sales data can be organized by destination state for review by the client’s tax adviser. Tax registration decisions, tax advice and filings remain with the client or its appointed tax professional.',
  },
  {
    question: 'Do you account for marketplace fees and chargebacks separately?',
    answer:
      'Marketplace fees, refunds, chargebacks and reserves can be classified separately where the source reports support that detail, so channel reporting distinguishes gross sales from net settlement amounts.',
  },
  {
    question: 'What platforms do you support?',
    answer:
      'QuickBooks or Xero can remain the accounting record. Available storefront and payment-processor reports can support reconciliation; platform configuration, connector implementation and software migration are outside this service scope.',
  },
];

export default function EcommerceIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'E-Commerce',
        description:
          'E-commerce accounting services for online retailers selling across marketplaces and their own storefront, including settlement reconciliation, fees, refunds, inventory/COGS records and channel reporting.',
      }}
      overview="E-commerce accounting services need to connect the gross sales reported by each storefront or marketplace to the net settlement that reaches the bank. Platform fees, refunds, chargebacks, reserves, payment-processor charges and timing differences can make a payout look like revenue when it is only the net cash received. We reconcile available channel and processor reports to the existing accounting records, keep fees and returns visible, and maintain inventory and cost-of-goods-sold records using the client’s approved method. Sales can be organised by destination state for review by the client’s tax adviser; tax registration decisions and filings remain with the client or its appointed tax professional."
      benefits={[
        'Multi-channel reconciliation across Shopify, Amazon, and other marketplaces',
        'Inventory and cost of goods sold (COGS) tracking for accurate margins',
        'Sales data organised by destination state for tax-adviser review',
        'Marketplace fees, refunds, and chargebacks broken out as separate line items',
        'True net revenue reporting per sales channel',
        'QuickBooks and Xero integration with common e-commerce platforms',
      ]}
      relatedLinks={[
        { name: 'Amazon Seller Accounting', href: '/industries/ecommerce/amazon-seller-accounting' },
        { name: 'Shopify Accounting', href: '/industries/ecommerce/shopify-accounting' },
        { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
        { name: 'Accounts Payable', href: '/services/accounts-payable/united-states' },
        { name: 'Offshore Accounting Support', href: '/solutions/offshore-accounting-support' },
      ]}
      faqs={faqs}
      depth={industryDepth.ecommerce}
    />
  );
}
