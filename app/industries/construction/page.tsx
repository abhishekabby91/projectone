import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/construction';

export const metadata: Metadata = genMeta({
  title: 'Construction Accounting & Bookkeeping Support',
  description:
    'Outsourced construction bookkeeping for contractors: job-cost coding, subcontractor bills, retainage records, reconciliations and project-level reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'What construction accounting work can be outsourced?',
    answer:
      'Depending on the agreed scope, support can include transaction coding to client-approved job or cost codes, vendor-bill processing, accounts payable and receivable records, bank reconciliations, payroll journal allocation, retainage tracking and month-end reporting. Payment approvals and accounting-policy decisions remain with the client.',
  },
  {
    question: 'Can you help organize job-cost records?',
    answer:
      'Project costs can be grouped against the cost codes and reporting structure the contractor already uses, with differences between vendor bills, purchase records and project reports flagged for review. The client should approve the cost-code structure and resolve disputed allocations.',
  },
  {
    question: 'Can you prepare work-in-progress (WIP) schedules?',
    answer:
      'Where the client supplies project budgets, costs incurred, billing records and an approved calculation method, accounting support can help organize the data and prepare draft schedules for management or CPA review. Accounstone does not independently set revenue-recognition policy or certify schedules for lenders, bonding agents or sureties.',
  },
  {
    question: 'Can you track retainage and progress-billing balances?',
    answer:
      'Retainage and progress-billing records can be maintained from approved contracts, applications, invoices and payment information. Contract interpretation, certification, lien rights and decisions about when an amount is billable or collectible remain with the contractor and its qualified advisers.',
  },
  {
    question: 'Which construction software can fit into the workflow?',
    answer:
      'The accounting workflow can be scoped around the client’s accounting system and project records. If a contractor uses QuickBooks, Buildertrend or JobTread, we first confirm what exports, permissions and reports are available rather than assuming a native integration.',
  },
  {
    question: 'Does construction bookkeeping replace a CPA or tax adviser?',
    answer:
      'No. Bookkeeping support organizes transaction records and recurring schedules. The contractor’s management and qualified accounting or tax advisers retain responsibility for accounting policies, tax positions, revenue-recognition judgments, financial-statement opinions and other professional determinations.',
  },
];

export default function ConstructionIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Construction & Contractors',
        description:
          'Accounting and bookkeeping support for contractors built around job-cost records, subcontractor and vendor bills, retainage, progress-billing data, reconciliations and project-level reporting.',
      }}
      overview="Construction books have to explain both the company-wide position and what is happening on each job. A vendor invoice may need a project, cost code and approval before it can be reported correctly; progress-billing records and retainage may not match cash received in the same period; and payroll or equipment costs can be hard to compare across jobs if coding changes month to month. The recurring accounting work is to maintain consistent records, reconcile supporting reports to the ledger, flag exceptions and produce a reviewable month-end view. Project budgets, cost-code rules and accounting policies are supplied or approved by the contractor and its advisers."
      benefits={[
        'Vendor and subcontractor bill records organized by approved project and cost code',
        'Accounts payable, receivable and bank-reconciliation workflows',
        'Retainage and progress-billing balances tracked from client-approved records',
        'Payroll and other shared costs allocated using the client’s approved basis',
        'Project-level cost summaries and period-end reporting support',
        'Exception lists that identify missing approvals, unmatched bills and ledger-to-project differences',
      ]}
      relatedLinks={[
        { name: 'Bookkeeping Services — United States', href: '/services/bookkeeping/united-states' },
        { name: 'Accounting Services — United States', href: '/services/accounting/united-states' },
        { name: 'Accounts Payable — United States', href: '/services/accounts-payable/united-states' },
        { name: 'Accounts Receivable — United States', href: '/services/accounts-receivable/united-states' },
        { name: 'Outsourced Accounting Services Guide', href: '/resources/guides/outsourced-accounting-services-guide' },
      ]}
      faqs={faqs}
      depth={industryDepth.construction}
      boundaries={[
        'Construction contract terms, cost-code policies, WIP calculations and revenue-recognition methods must be supplied or approved by the client and its qualified advisers.',
        'We do not provide legal opinions on contracts, lien rights or retainage enforceability, and do not certify reports for lenders, bonding agents or sureties.',
        'Any workflow involving Buildertrend, JobTread or other project software depends on the client’s permissions, exports and agreed scope; a named platform is not a claim of native integration.',
      ]}
    />
  );
}
