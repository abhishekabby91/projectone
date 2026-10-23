import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/healthcare/dental-practice-accounting';

export const metadata: Metadata = genMeta({
  title: 'Dental Practice Accounting & Bookkeeping',
  description:
    'Accounting and bookkeeping outsourcing for dental practices, covering production-to-collection records, insurance adjustments, deposit reconciliation and provider-level reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'What is different about bookkeeping for a dental practice?',
    answer:
      'The accounting records may need to distinguish production reports, contractual adjustments, insurer and patient receipts, merchant deposits, lab fees and dental supplies. The exact mapping should follow reports and accounting rules approved by the practice and its accountant.',
  },
  {
    question: 'Can you reconcile dental practice software reports to the bank?',
    answer:
      'Using reports and remittance information supplied by the practice, accounting support can compare recorded collections and adjustments with merchant or bank deposits, document differences and send unresolved items to the practice or its billing provider. This is accounting reconciliation, not claims submission or denial management.',
  },
  {
    question: 'Can you track lab fees and dental supplies separately?',
    answer:
      'Transactions can be coded to the practice-approved accounts and categories so lab fees, clinical supplies, equipment and general overhead are not automatically blended into one expense line. Management and the practice accountant approve the chart of accounts and any capitalization treatment.',
  },
  {
    question: 'Can reporting distinguish providers or locations?',
    answer:
      'Where source records and the agreed chart of accounts support it, bookkeeping records can be coded by provider or location and summarized for review. Any allocation method and the interpretation of production or profitability measures remain with practice management and its accountant.',
  },
  {
    question: 'Do you provide dental billing, insurance claims or HIPAA certification?',
    answer:
      'This page describes accounting and bookkeeping support based on financial reports supplied through an agreed workflow. It does not offer clinical coding, claims submission, denial follow-up, patient collections, or a representation that Accounstone holds a HIPAA certification. The practice must confirm required safeguards and whether a business associate agreement is needed before sharing any protected health information.',
  },
];

export default function DentalPracticeAccountingPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Dental Practice Accounting',
        description:
          'Bookkeeping support for dental offices and dental groups, focused on tying production and collection reports to recorded receipts, separating dental lab and supply costs, and preparing consistent provider- or location-level records for review.',
      }}
      overview="Dental practice accounting has a more specific reconciliation pattern than general medical bookkeeping. Production reports, insurance adjustments, patient portions, merchant settlements and bank deposits may describe different stages of the same activity. If those totals are treated as interchangeable, the books can overstate collections or leave differences unexplained. Accounstone can organize client-provided financial reports, reconcile recorded receipts and adjustments to deposits, and maintain the practice-approved expense and reporting structure. The practice and its billing provider retain responsibility for clinical coding, claims, payer disputes and patient collection activity."
      benefits={[
        'Reconciliation of client-provided production, collection and adjustment reports to recorded receipts',
        'Merchant processor and bank-deposit tie-outs, with unresolved differences documented for review',
        'Separate bookkeeping categories for lab fees, clinical supplies, equipment and overhead',
        'Provider- or location-level coding where source records and approved accounting structures support it',
        'Month-end reconciliations and organized records for the practice accountant or tax preparer',
        'Defined handling of source reports, access permissions and client review responsibilities',
      ]}
      relatedLinks={[
        { name: 'Healthcare accounting for medical practices', href: '/industries/healthcare' },
        { name: 'Bookkeeping services', href: '/services/bookkeeping/united-states' },
        { name: 'Accounts receivable accounting support', href: '/services/accounts-receivable/united-states' },
      ]}
      faqs={faqs}
      depth={industryDepth.dental}
    />
  );
}
