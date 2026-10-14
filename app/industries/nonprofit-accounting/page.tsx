import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/nonprofit-accounting';

export const metadata: Metadata = genMeta({
  title: 'Nonprofit Accounting & Bookkeeping Support',
  description:
    'Nonprofit bookkeeping for restricted and unrestricted funds, grant-level records, functional expense coding, reconciliations and board reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'What makes nonprofit bookkeeping different from for-profit bookkeeping?',
    answer:
      'Nonprofit records often need to show not only which account a transaction belongs to, but also which fund, grant or program it relates to and whether donor restrictions apply. Reports should follow the organization’s approved chart of accounts, fund structure and reporting requirements.',
  },
  {
    question: 'Can you track restricted and unrestricted funds separately?',
    answer:
      'Bookkeeping can maintain separate fund or class coding based on restrictions and instructions documented by the organization and its qualified accountant. Accounstone can flag transactions whose classification is unclear, but management and its accountant retain responsibility for interpreting donor terms and approving releases from restrictions.',
  },
  {
    question: 'Can grant income and spending be tracked by grant?',
    answer:
      'Where the client supplies grant terms, budgets, periods and approved coding rules, transactions can be tagged to the relevant grant and summarized against the supplied budget. The organization remains responsible for determining allowable costs, grant compliance and required submissions to funders.',
  },
  {
    question: 'What financial reports can be prepared for a nonprofit board?',
    answer:
      'Based on the organization’s approved reporting format, bookkeeping support can prepare reconciled financial statements and schedules by fund or program, along with budget-to-actual information where the source data and approved allocations support it. Management and the board decide how to interpret the reports.',
  },
  {
    question: 'Do you provide nonprofit audit opinions or legal and tax advice?',
    answer:
      'No. Accounstone can organize bookkeeping records and supporting schedules for the organization’s independent auditor or tax preparer. It does not issue audit opinions, determine legal compliance, interpret grant agreements, or replace the nonprofit’s qualified accounting and legal advisers.',
  },
];

export default function NonprofitAccountingPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Nonprofit Accounting & Bookkeeping',
        description:
          'Accounting support for nonprofit organizations that need consistent fund and grant records, reconciliations, functional expense coding based on approved rules, and financial reports prepared for management and board review.',
      }}
      overview="Nonprofit accounting needs to preserve the story behind each dollar. A bank deposit alone may not show whether money was unrestricted, designated for a program, or received under a grant with specific reporting terms. If fund and program detail is lost during routine coding, it can be difficult to produce a reliable statement of activities, compare spending with an approved budget, or prepare a clear year-end handoff. Accounstone can maintain records against the organization’s documented fund structure, reconcile accounts, apply client-approved coding rules, and prepare schedules for management, board and tax-preparer review. Decisions about donor restrictions, allowable grant costs, financial-statement policy and compliance remain with the organization and its qualified advisers."
      benefits={[
        'Fund- and program-level transaction coding using the organization’s approved structure',
        'Separate tracking of restricted and unrestricted balances based on documented instructions',
        'Grant income and spending schedules against client-supplied budgets and periods',
        'Bank, credit-card, balance-sheet and fund-balance reconciliations',
        'Functional expense coding using management-approved allocation methods',
        'Monthly financial reports and organized year-end records for board and CPA review',
      ]}
      relatedLinks={[
        { name: 'Bookkeeping services', href: '/services/bookkeeping/united-states' },
        { name: 'Accounts payable support', href: '/services/accounts-payable/united-states' },
        { name: 'Accounts receivable support', href: '/services/accounts-receivable/united-states' },
        { name: 'Tax preparation support', href: '/services/tax-preparation/united-states' },
      ]}
      faqs={faqs}
      depth={industryDepth.nonprofit}
    />
  );
}
