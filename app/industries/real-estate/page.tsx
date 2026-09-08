import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/real-estate';

export const metadata: Metadata = genMeta({
  title: 'Real Estate Accounting Support',
  description: 'Property-level bookkeeping, reconciliations, AP/AR, owner reporting and multi-entity workflows for real estate and property management companies.',
  path: PATH,
});

const faqs = [
  { question: 'Do you handle trust accounting for owner and tenant funds?', answer: 'Where trust accounting is part of the engagement, we can support the bookkeeping and reconciliation workflow needed to keep relevant funds and records organized. Exact compliance requirements depend on the property and jurisdiction.' },
  { question: 'Can you prepare owner statements across a multi-property portfolio?', answer: 'Yes. We can organize property-level records and supporting schedules for owner reporting, with the reporting structure agreed to the client’s property and entity setup.' },
  { question: 'What property management platforms do you support?', answer: 'Our team has experience with Yardi, including Voyager and Breeze, and can also work with QuickBooks and other systems depending on the engagement.' },
  { question: 'Do you support CAM reconciliations?', answer: 'Yes, CAM reconciliation can be included for commercial property workflows where it is part of the agreed scope and lease documentation is available.' },
  { question: 'Do you support residential and commercial portfolios?', answer: 'Yes. The workflow can be adapted to residential property-level detail or commercial lease, CAM and owner-reporting requirements.' },
  { question: 'What does month-end look like for property accounting?', answer: 'A typical close can include bank reconciliations, AP/AR review, property-level account checks, supporting schedules, owner-report preparation and identification of unresolved items before reporting is finalized.' },
];

export default function RealEstateIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Real Estate',
        description: 'Property-level bookkeeping, reconciliations, AP/AR, owner reporting and multi-entity accounting support for real estate and property management workflows.',
        icon: '🏠',
      }}
      overview="Real estate accounting is usually more structured than ordinary business bookkeeping because the records often need to be understood at both the property and entity level. Depending on the portfolio, that can mean separate bank accounts, owner statements, tenant-related activity, AP/AR, CAM reconciliations, property management software and a month-end close that rolls property detail into broader reporting. The right workflow depends on how the portfolio is organized, so the first step is understanding the existing property and entity structure."
      benefits={[
        'Property-level bookkeeping and bank reconciliations',
        'Owner statement preparation and supporting schedules',
        'AP/AR workflows for property-level transactions',
        'CAM reconciliation support for commercial portfolios where in scope',
        'Yardi Voyager, Yardi Breeze and QuickBooks workflow familiarity',
        'Multi-entity and multi-property close support',
        'Documentation and reporting organized around the existing portfolio structure',
      ]}
      relatedLinks={[
        { name: 'Yardi Accounting for Texas Property Managers', href: '/industries/real-estate/yardi-accounting-outsourcing-texas' },
        { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
        { name: 'Accounts Payable', href: '/services/accounts-payable/united-states' },
        { name: 'Accounts Receivable', href: '/services/accounts-receivable/united-states' },
        { name: 'Back Office Support', href: '/solutions/back-office-support' },
      ]}
      faqs={faqs}
      depth={industryDepth['real-estate']}
    />
  );
}
