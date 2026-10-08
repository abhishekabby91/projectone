import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ServiceIllustration from '@/components/service-illustration';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/services/property-management-accounting';

export const metadata: Metadata = genMeta({
  title: 'Property Management Accounting Services',
  description:
    'Property management accounting for rent and tenant ledgers, owner statements, AP and AR, property-level reconciliations, deposits and monthly close.',
  path: PATH,
});

const scope = [
  ['Property-level bookkeeping', 'Record income and expenses to the correct property, unit, owner or account structure used by the management operation.'],
  ['Rent and tenant accounting', 'Maintain rent postings, receipts, tenant balances and supporting schedules so the rent roll can be reconciled to the accounting records.'],
  ['Owner statement support', 'Prepare recurring owner reporting from the underlying property records, with income, expenses, management fees and other agreed activity clearly presented.'],
  ['Accounts payable', 'Process vendor invoices, code expenses to the appropriate property and maintain supporting records for the payment and month-end process.'],
  ['Accounts receivable', 'Track tenant or customer receivables, apply receipts and maintain aging information for follow-up by the property management team.'],
  ['Bank, property and platform reconciliations', 'Reconcile operating and property-related accounts, compare property-management system activity with the accounting records where both are used, investigate differences and keep the ledger aligned with the underlying activity.'],
  ['Owner, tenant and deposit ledgers', 'Maintain owner and tenant balances and track security-deposit activity separately from operating income and expenses, with reconciliation to the related account or ledger where applicable.'],
  ['Trust or client-money reconciliation support', 'Reconcile the accounting records to the relevant bank and sub-ledger balances where the engagement includes client or trust accounts. The exact control, frequency and responsible party follow the applicable jurisdiction and management structure.'],
  ['Month-end close', 'Complete recurring reconciliations, adjustments and supporting schedules so property-level reports are prepared from current books rather than reconstructed later.'],
];

const workflow = [
  ['1. Property setup', 'Confirm the property, owner, unit and account structure already used by the management operation before recurring transactions are processed.'],
  ['2. Transaction processing', 'Record rent, receipts, vendor bills, operating expenses, management fees and other agreed activity at the appropriate property or ledger level.'],
  ['3. Reconciliation', 'Compare bank, rent, property-management platform and ledger activity where applicable, identify differences and keep supporting schedules tied to the accounting records.'],
  ['4. Monthly close', 'Complete the agreed close checklist and prepare the reports and schedules needed by the property manager and owners.'],
];

const faqs = [
  {
    question: 'What does property management accounting include?',
    answer:
      'The scope can include property-level bookkeeping, rent and tenant ledgers, owner statement support, accounts payable and receivable, bank reconciliations, security-deposit records, month-end close and recurring financial reporting.',
  },
  {
    question: 'Can property management accounting be handled in an existing system?',
    answer:
      'Yes. The accounting work can be performed within the existing accounting or property-management system where access and workflow permit. The system and reporting structure should be reviewed during scoping rather than assumed.',
  },
  {
    question: 'Do you work with residential and commercial property managers?',
    answer:
      'The accounting structure can support residential, commercial and other property-management portfolios where the required records and workflow are within scope. Commercial portfolios may require additional attention to lease, recovery and property-level reporting structures.',
  },
  {
    question: 'How are owner statements prepared?',
    answer:
      'Owner statements are prepared from the underlying property records and agreed reporting format. Income, expenses, management fees, distributions and other relevant activity should be traceable to the supporting accounting records.',
  },
  {
    question: 'Can property management accounting include AP and AR?',
    answer:
      'Yes. Accounts payable can include vendor invoice processing and coding, while accounts receivable can include tenant or customer receipt posting, aging and supporting schedules.',
  },
  {
    question: 'Can you handle catch-up or cleanup work?',
    answer:
      'Historical cleanup can be scoped when records, bank statements and supporting documentation are available. The required period and reconciliation work should be reviewed before a cleanup scope is defined.',
  },
];

const schema = generateServiceSchema({
  name: 'Property Management Accounting Services',
  description:
    'Property-level accounting and bookkeeping support covering rent and tenant ledgers, owner statements, AP, AR, reconciliations, security-deposit records and month-end close.',
  slug: 'property-management-accounting',
  basePath: '/services/',
  areaServed: ['US'],
});

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Property Management Accounting', url: `${baseUrl}${PATH}` },
]);

export default function PropertyManagementAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Accounting for property management companies"
        title="Property Management Accounting Services"
        description="Property-level books, rent and tenant ledgers, owner statement support, AP/AR, reconciliations, deposit records and a repeatable month-end close."
        cta={{ text: 'Discuss the Accounting Scope', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services" className="py-1.5">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Property Management Accounting</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-5">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">The accounting layer</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Property Books Need to Reconcile at More Than One Level</h2>
            <p className="text-lg leading-relaxed text-muted">
              A property management company is maintaining books for a portfolio while also reporting activity back to owners and tracking balances for tenants or occupants. The accounting therefore needs to stay clear at the property level while still rolling into a useful portfolio view.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              The recurring work connects transaction posting, rent and receivable records, vendor expenses, owner reporting, bank reconciliations and month-end close. Where a property-management platform and accounting ledger are both in use, the two records also need a defined reconciliation point. The exact workflow follows the existing system, portfolio structure and reporting requirements.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="accounting" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-3 mb-10">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">Accounting scope</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">What the Accounting Cycle Can Cover</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scope.map(([title, text], i) => (
              <Reveal key={title} delay={Math.min(i * 0.04, 0.24)}>
                <div className="h-full rounded-xl border border-border bg-white p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-primary">{title}</h3>
                      <p className="mt-2 text-sm md:text-base leading-6 text-muted">{text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">Monthly workflow</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">From Property Activity to Owner Reporting</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">
              A repeatable close makes the portfolio easier to review because each month follows the same accounting sequence.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workflow.map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-input p-6">
                  <h3 className="text-xl font-bold text-primary">{title}</h3>
                  <p className="mt-3 leading-7 text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-7">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">Related scope</span>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Property Management and Real Estate Are Not the Same Accounting Scope</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/industries/property-management" className="rounded-xl border border-border bg-white p-5 hover:border-primary/50 transition-colors">
              <h3 className="font-bold text-primary">Property Management</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Portfolio, tenant, owner and property-level accounting workflow.</p>
            </Link>
            <Link href="/industries/real-estate" className="rounded-xl border border-border bg-white p-5 hover:border-primary/50 transition-colors">
              <h3 className="font-bold text-primary">Real Estate Accounting</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Accounting for real estate owners and investment/property activity.</p>
            </Link>
            <Link href="/services/bookkeeping/united-states" className="rounded-xl border border-border bg-white p-5 hover:border-primary/50 transition-colors">
              <h3 className="font-bold text-primary">U.S. Bookkeeping</h3>
              <p className="mt-2 text-sm leading-6 text-muted">General bookkeeping scope that can support the property accounting workflow.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-7">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">Systems</span>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Work Within the Existing Accounting System</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">
              Property management portfolios may use property-management platforms alongside accounting software. The relevant system, access, property structure and reporting format should be confirmed during scoping.
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            <Link href="/technology/yardi" className="rounded-lg border border-border bg-input px-4 py-2 font-medium text-primary">Yardi</Link>
            <Link href="/technology/quickbooks" className="rounded-lg border border-border bg-input px-4 py-2 font-medium text-primary">QuickBooks</Link>
            <Link href="/technology/xero" className="rounded-lg border border-border bg-input px-4 py-2 font-medium text-primary">Xero</Link>
            <Link href="/technology" className="rounded-lg border border-border bg-input px-4 py-2 font-medium text-primary">Technology overview</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="Property management accounting questions" items={faqs} columns={2} />
      <InquirySection source={PATH} title="Review the Property Accounting Scope" lead="Share the number of properties or units, current system, reporting requirements and the part of the monthly cycle that needs attention." />
      <CTABanner
        title="A Cleaner Property-Level Close"
        description="Start with the accounting cycle that needs the most attention and build the scope around the existing portfolio and reporting structure."
        cta={{ text: 'Discuss the Accounting Scope', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management Overview', href: '/industries/property-management' }}
        background="primary"
      />
    </main>
  );
}
