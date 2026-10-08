import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ServiceIllustration from '@/components/service-illustration';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/hoa-accounting';

export const metadata: Metadata = genMeta({
  title: 'HOA Accounting Services',
  description: 'HOA accounting support for assessments, homeowner ledgers, operating and reserve funds, reconciliations, payables, budgets and monthly board reporting.',
  path: PATH,
});

const overview = 'HOA accounting connects assessments, homeowner balances, vendor bills, bank activity, operating funds, reserves and the approved budget into records the board can review each month. The recurring accounting cycle covers record maintenance, reconciliations, reporting and year-end schedules while approvals, payments and governance decisions remain with the association.';

const scope = [
  'Assessment and homeowner ledger maintenance',
  'Operating and reserve fund accounting',
  'Bank and balance-sheet reconciliations',
  'Accounts payable and vendor expense processing',
  'Budget-to-actual reporting',
  'Delinquency and receivable aging schedules',
  'Monthly financial statements and board packages',
  'Year-end schedules and CPA support',
];

const process = [
  { title: 'Review the current books', text: 'The accounting system, chart of accounts, assessment schedule, bank accounts, budget and current reporting package establish the starting point.' },
  { title: 'Set the monthly structure', text: 'The recurring close is organized around the association’s own budget lines, fund structure and board meeting calendar.' },
  { title: 'Reconcile and report', text: 'Transactions are posted, accounts reconciled, assessment balances reviewed and the monthly package assembled for board review.' },
  { title: 'Keep decisions with the association', text: 'The board or authorized manager retains approval, payment release, collections decisions and other governance responsibilities.' },
];

const faqs = [
  { question: 'What does HOA accounting include?', answer: 'It can include assessment and homeowner ledgers, bank reconciliations, payables, receivables, operating and reserve fund accounting, budget-to-actual reporting, monthly financial statements and year-end schedules.' },
  { question: 'Can you work with our existing HOA software?', answer: 'Often, yes. The practical starting point is the system already holding your assessments, homeowner records, bank activity and general ledger. We organize the accounting around the existing workflow where it can support the required records.' },
  { question: 'Do you work with self-managed HOAs?', answer: 'Yes. The process can be right-sized for a volunteer board as well as a community management company handling multiple associations. Each association remains separately accounted for.' },
  { question: 'Can you support an HOA management company?', answer: 'Yes. A portfolio can use a consistent close and reporting structure while each association keeps its own books, budget, homeowner balances and fund activity.' },
  { question: 'Do you handle association tax work?', answer: 'We can organize accounting records and supporting schedules for association tax work and coordinate the information needed for the tax engagement. The exact filing and sign-off arrangement depends on the engagement and applicable requirements.' },
];

const serviceSchema = generateServiceSchema({
  name: 'HOA Accounting Services',
  description: overview,
  slug: 'hoa-accounting',
  basePath: '/services/',
  areaServed: ['US'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'HOA Accounting Services', url: `${baseUrl}${PATH}` },
]);

export default function HoaAccountingServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="For homeowners associations and community management companies"
        title="HOA Accounting Services"
        description="Clean assessment records, reconciled accounts, clear fund reporting and a monthly board package built around the way an association actually operates."
        cta={{ text: 'Discuss the Accounting Scope', href: '/contact' }}
        ctaSecondary={{ text: 'HOA Accounting Overview', href: '/industries/hoa-accounting' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">HOA Accounting Services</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-5">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">What the service covers</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Accounting Built Around the Board Calendar</h2>
            <p className="text-lg text-muted leading-relaxed">{overview}</p>
          </Reveal>
          <Reveal delay={0.12}><ServiceIllustration service="accounting" className="mx-auto w-full max-w-[300px] lg:max-w-none" /></Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-3 mb-10">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">Core scope</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Monthly Accounting Scope</h2>
          </Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scope.map((item, i) => (
              <Reveal key={item} delay={Math.min(i * 0.04, 0.24)}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-border bg-white p-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="leading-6 text-foreground">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-3 mb-10">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">Workflow</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A Practical HOA Accounting Process</h2>
          </Reveal>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i * 0.06, 0.2)}>
                <li className="h-full rounded-2xl border border-border bg-input p-6 md:p-7">
                  <span className="text-sm font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-2 text-xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-7">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">Related HOA work</span>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Go Deeper Into a Specific Part of the Books</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link href="/services/hoa-bookkeeping" className="rounded-xl border border-border bg-white p-5 hover:border-primary/50"><h3 className="font-bold text-primary">HOA Bookkeeping</h3><p className="mt-2 text-sm leading-6 text-muted">Recurring transaction processing, reconciliations and monthly close support.</p></Link>
            <Link href="/services/hoa-financial-reporting" className="rounded-xl border border-border bg-white p-5 hover:border-primary/50"><h3 className="font-bold text-primary">HOA Financial Reporting</h3><p className="mt-2 text-sm leading-6 text-muted">Board-ready financial statements, fund reporting and budget-to-actual schedules.</p></Link>
            <Link href="/industries/hoa-accounting" className="rounded-xl border border-border bg-white p-5 hover:border-primary/50"><h3 className="font-bold text-primary">HOA Accounting Overview</h3><p className="mt-2 text-sm leading-6 text-muted">See the full workflow, association types, software and common accounting questions.</p></Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="HOA accounting questions" items={faqs} columns={2} />
      <InquirySection source={PATH} title="Talk Through Your HOA Accounting" lead="Tell us how many units or associations you manage, what system you use and where the accounting process is getting stuck." />
      <CTABanner title="Need a Cleaner HOA Close?" description="We can start with one association and one month, then build the recurring accounting workflow around what the board already uses." cta={{ text: 'Discuss the Accounting Scope', href: '/contact' }} ctaSecondary={{ text: 'HOA Accounting Overview', href: '/industries/hoa-accounting' }} background="primary" />
    </main>
  );
}
