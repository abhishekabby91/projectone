import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { industryDepth } from '@/lib/industry-depth';
import { professionalServicesSegments, professionalServicesBoundaries } from '@/lib/industry-segments';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/professional-services';

export const metadata: Metadata = genMeta({
  title: 'Law Firm & Professional Services Accounting',
  description:
    'Outsourced bookkeeping for law firms, consulting firms and agencies: client trust ledgers, three-way reconciliation, WIP, retainers and month-end close.',
  path: PATH,
});

/**
 * This page absorbs the law-firm intent rather than handing it a second URL.
 * `/industries/law-firms` was requested and deliberately not built — see the
 * header note in `lib/industry-segments.ts`.
 *
 * The compliance claim that used to sit here must not come back. The page said
 * trust compliance was "handled correctly" and that our bookkeeping was
 * "consistent with how law firms need to handle client funds". Client money is
 * regulated by a bar association or an equivalent body, per jurisdiction, and a
 * bookkeeper does not make a firm compliant. We keep the ledger and run the
 * three-way reconciliation; satisfying the rule is the firm's own
 * responsibility. Write it that way.
 */
const faqs = [
  {
    question: 'Do you handle client trust and IOLTA bookkeeping for law firms?',
    answer:
      'We keep the ledger and run the reconciliation. Client trust and operating funds are kept strictly separate in the accounts, each client balance is maintained per matter, and the three-way reconciliation — bank, trust ledger and the sum of client balances — is run on a monthly cycle with any break reported to you rather than absorbed. What we do not do is make your firm compliant: the client-money rules belong to your bar association or equivalent regulator and differ by jurisdiction, and satisfying them is the firm’s own responsibility.',
  },
  {
    question: 'What exactly is a three-way reconciliation, and who does it?',
    answer:
      'Three figures that must agree: the trust bank balance, the trust ledger control account, and the total of every individual client balance. Two of the three agreeing is the usual way a problem hides. We prepare it and present the exceptions; a responsible person in your firm reviews and signs it, because that review is part of what the rule is asking for.',
  },
  {
    question: 'Can you move money between the trust and operating accounts?',
    answer:
      'No, and we would decline if asked. We never hold banking control anywhere on this site, and on client money the line is absolute — every transfer is initiated and authorised by your firm. We record it, reconcile it and tell you if the supporting detail does not hold up.',
  },
  {
    question: 'Can you track work-in-progress and unbilled time?',
    answer:
      'Yes. Time recorded but not yet invoiced is an asset, and in most firms it exists only in the practice management tool while the ledger knows nothing about it — which gives you a P&L showing the cost of delivering work in one month and the revenue from it in another. We bring WIP into the ledger on a consistent basis so monthly results are comparable.',
  },
  {
    question: 'How do you handle retainers and advance fees?',
    answer:
      'As a liability, released as the work is earned. A retainer received is not fee income until the work is done: booking it to revenue on receipt inflates the period it arrives in, empties the period the work lands in, and hides a real obligation to the client.',
  },
  {
    question: 'Do you handle partner draws and distributions?',
    answer:
      'We maintain partner capital accounts and record draws and distributions as the partners agree them, working alongside your CPA on the tax treatment. We do not advise on partner compensation, profit-sharing or capital arrangements — we keep the accounts that follow from what is decided.',
  },
  {
    question: 'Can you report profitability by matter, project or client?',
    answer:
      'Yes, provided project costing and the general ledger are agreed to one basis. Where they are tracked in separate systems without that, both are right and they disagree, which usually ends with somebody maintaining a third spreadsheet. Agreeing the basis at setup is cheaper than reconciling two forever.',
  },
  {
    question: 'What kinds of firms do you work with?',
    answer:
      'Law firms, consulting firms, agencies and studios, and similar practices that bill for time or for fee-based engagements. The mechanics overlap — WIP, write-offs, retainers, pass-through cost — but what each one is read on differs, so the scope is shaped around which you are.',
  },
];

export default function ProfessionalServicesIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Professional Services',
        description:
          'Client trust ledgers and three-way reconciliation, work-in-progress, retainers and partner accounts — bookkeeping for law firms, consulting firms, agencies and other fee-billed practices.',
      }}
      overview="Firms that bill for time carry two problems ordinary businesses do not. The first is that the largest asset on the books is often work that has been done and not yet invoiced, and it usually lives in the practice management system where the ledger cannot see it — so cost lands in one month and the revenue from it in another, and nothing is comparable. The second applies to anyone holding client money: it has to be kept strictly apart from the firm's own, reconciled against a balance per client, and be defensible at any point in the year. Neither of these is difficult work. Both of them are exacting, recurring, and precisely the kind of thing that gets postponed when the people who could do it are billable. We take that recurring load — the trust ledger and its reconciliation, WIP, write-offs, retainers, disbursements, payables and the close — and leave every judgement, every authorisation and the firm's own regulatory responsibility exactly where they already sit."
      benefits={[
        'Client trust and operating ledgers kept strictly separate in the accounts',
        'Three-way reconciliation prepared monthly, with breaks reported rather than absorbed',
        'Work-in-progress and unbilled time brought into the ledger on a consistent basis',
        'Write-offs recorded explicitly, so realisation is visible rather than buried',
        'Retainers and advance fees carried as liabilities and released as earned',
        'Disbursements and recoverable client costs tracked apart from firm expense',
      ]}
      segments={professionalServicesSegments}
      boundaries={professionalServicesBoundaries}
      relatedLinks={[
        { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
        { name: 'Accounting & month-end close', href: '/services/accounting/united-states' },
        { name: 'Accounts receivable', href: '/services/accounts-receivable/united-states' },
        { name: 'Payroll', href: '/services/payroll/united-states' },
        { name: 'Dedicated accounting teams', href: '/solutions/dedicated-accounting-teams' },
        { name: 'All industries', href: '/industries' },
      ]}
      faqs={faqs}
      depth={industryDepth['professional-services']}
    />
  );
}
