import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/professional-services';

export const metadata: Metadata = genMeta({
  title: 'Accounting for Professional Services',
  description:
    'Outsourced accounting for law, consulting and agency businesses — client fund accounting, time and billing (WIP) tracking and partner distributions.',
  path: PATH,
});

const faqs = [
  {
    question: 'Do you understand client trust fund accounting (like IOLTA for law firms)?',
    answer:
      'Yes, we structure bookkeeping to keep client trust funds clearly segregated from operating funds, consistent with how professional services firms — particularly law firms — need to handle client funds.',
  },
  {
    question: 'Can you track work-in-progress (WIP) and unbilled time?',
    answer:
      'Yes, we track WIP and unbilled time and tie it to billing cycles, so partners and managers have visibility into revenue that has been earned but not yet invoiced.',
  },
  {
    question: 'Do you handle partner draws and distributions?',
    answer:
      'Yes, we support partner capital account tracking, draws, and distributions as part of the firm\'s bookkeeping, working alongside your CPA or tax advisor for the tax treatment.',
  },
  {
    question: 'What types of professional services firms do you work with?',
    answer:
      'We support law firms, consulting firms, and similar professional services businesses that bill for time and need to track project or matter-level profitability.',
  },
  {
    question: 'Can you provide matter-level or project-level profitability reporting?',
    answer:
      'Yes, we can structure reporting to show profitability by matter, project, or client, not just firm-wide totals.',
  },
];

export default function ProfessionalServicesIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Professional Services',
        description:
          'Trust/client fund accounting, time and billing (WIP) tracking, and partner distribution support for law firms, consulting firms, and other professional services businesses.',
        icon: '⚖️',
      }}
      overview="Professional services firms — law firms in particular — carry accounting obligations that don't apply to most small businesses: client trust funds must be kept strictly segregated from operating funds, and revenue is often earned as work-in-progress well before it's invoiced. On top of that, partner-based ownership structures need draws and distributions tracked accurately. We build bookkeeping around these realities, so trust compliance, WIP visibility, and partner accounting are handled correctly, not bolted on after the fact."
      benefits={[
        'Client trust fund accounting kept properly segregated from operating funds',
        'Work-in-progress (WIP) and unbilled time tracking tied to billing cycles',
        'Partner capital account tracking, draws, and distributions',
        'Matter-level or project-level profitability reporting',
        'Support for law firms, consulting firms, and similar professional services businesses',
        'NDA-backed, confidential handling of client and firm financial data',
      ]}
      relatedLinks={[
        { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
        { name: 'Accounting Services', href: '/services/accounting/united-states' },
        { name: 'Dedicated Accounting Teams', href: '/solutions/dedicated-accounting-teams' },
      ]}
      faqs={faqs}
      depth={industryDepth['professional-services']}
    />
  );
}
