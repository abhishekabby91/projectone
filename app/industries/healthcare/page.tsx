import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/healthcare';

export const metadata: Metadata = genMeta({
  title: 'Healthcare Accounting Outsourcing',
  description:
    'Outsourced bookkeeping for medical practices and healthcare providers — reimbursement reconciliation, payer mix reporting and a practice chart of accounts.',
  path: PATH,
});

const faqs = [
  {
    question: 'Do you reconcile insurance reimbursements against billed claims?',
    answer:
      'Payer reimbursements and adjustments can be reconciled against billed claims, which is a different process than standard accounts receivable and needs its own workflow.',
  },
  {
    question: 'Can you report on payer mix (insurance vs. self-pay revenue)?',
    answer:
      'Revenue can be reported by payer type so you can see how your patient mix is affecting collections and cash flow, not just a single revenue total.',
  },
  {
    question: 'Do you use a chart of accounts specific to medical practices?',
    answer:
      'The chart of accounts can be structured around how medical practices actually operate — separating clinical revenue, ancillary services, and practice overhead clearly.',
  },
  {
    question: 'Do you handle multi-provider or multi-location practices?',
    answer:
      'Consolidated reporting can cover multiple providers or locations across multiple providers or office locations alongside location-level detail for practice management decisions.',
  },
  {
    question: 'Is patient billing data handled securely?',
    answer:
      'Bookkeeping and reporting should use only the financial or billing-summary information required for the agreed workflow. Confirm HIPAA and any other regulated-data requirements with your practice\'s compliance officer before access is granted; we do not claim HIPAA certification.',
  },
];

export default function HealthcareIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Healthcare',
        description:
          'Bookkeeping and accounting for medical practices and healthcare providers, built around insurance reimbursement cycles and payer mix — not generic small business bookkeeping.',
      }}
      overview="Medical practice accounting has a structural difference from most small businesses: revenue doesn't arrive as a simple invoice-and-payment cycle, it comes through insurance reimbursements that are billed at one amount, adjusted, and paid at another, often weeks or months later. Standard bookkeeping approaches struggle with this. We reconcile reimbursements against billed claims, track payer mix, and structure a chart of accounts that reflects how a practice actually generates revenue."
      benefits={[
        'Insurance reimbursement reconciliation against billed claims',
        'Payer mix reporting (insurance vs. self-pay revenue breakdown)',
        'Chart of accounts structured for clinical revenue, ancillary services, and overhead',
        'Consolidated reporting across multiple providers or locations',
        'Support for practice management and profitability analysis',
        'Agreed data scope and access responsibilities',
      ]}
      relatedLinks={[
        { name: 'Dental practice accounting and bookkeeping', href: '/industries/healthcare/dental-practice-accounting' },
        { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
        { name: 'Accounts Receivable', href: '/services/accounts-receivable/united-states' },
        { name: 'Audit Support', href: '/services/audit-support/united-states' },
      ]}
      faqs={faqs}
      depth={industryDepth.healthcare}
    />
  );
}
