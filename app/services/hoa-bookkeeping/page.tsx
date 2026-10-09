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

const PATH = '/services/hoa-bookkeeping';

export const metadata: Metadata = genMeta({
  title: 'HOA Bookkeeping Services',
  description: 'HOA bookkeeping for assessments, payables, reconciliations, homeowner ledgers, reserve activity and monthly close support.',
  path: PATH,
});

const scope = [
  'Transaction posting and account maintenance',
  'Assessment receipts and homeowner ledger updates',
  'Bank and credit-card reconciliations',
  'Vendor invoice and accounts payable processing',
  'Operating and reserve activity tracking',
  'Receivable aging and delinquency schedules',
  'Recurring journal entries and month-end close support',
  'Supporting schedules for monthly board reporting',
  'Catch-up and cleanup bookkeeping when separately scoped',
];

const faqs = [
  { question: 'What is included in HOA bookkeeping?', answer: 'The recurring bookkeeping layer can include transaction posting, assessment and payment records, bank reconciliations, payables, fund activity, receivable schedules, journal entries and supporting schedules for the monthly close.' },
  { question: 'Can a small self-managed HOA use outsourced bookkeeping?', answer: 'Yes. A small association can use a right-sized monthly process instead of relying on one volunteer to maintain the books. The scope can follow transaction volume and the board’s reporting needs.' },
  { question: 'Can you keep operating and reserve activity separate?', answer: 'Yes. The accounting records can maintain separate operating and reserve activity, with transfers and reserve-related transactions clearly identified.' },
  { question: 'Do you work with HOA management companies?', answer: 'Yes. Each association can remain separate while the management company uses a consistent bookkeeping and close process across its portfolio.' },
];

const schema = generateServiceSchema({
  name: 'HOA Bookkeeping Services',
  description: 'Recurring bookkeeping support for homeowners associations and community management companies.',
  slug: 'hoa-bookkeeping',
  basePath: '/services/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'HOA Bookkeeping Services', url: `${baseUrl}${PATH}` },
]);

export default function HoaBookkeepingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="Recurring bookkeeping for HOAs and community associations"
        title="HOA Bookkeeping Services"
        description="Keep the books current between board meetings with assessment records, reconciliations, payables, fund activity and supporting schedules handled on a repeatable monthly cycle."
        cta={{ text: 'Discuss the Bookkeeping Scope', href: '/contact' }}
        ctaSecondary={{ text: 'HOA Accounting Services', href: '/services/hoa-accounting' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="py-1.5">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">HOA Bookkeeping</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-5">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">The recurring layer</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Bookkeeping That Is Ready for the Monthly Close</h2>
            <p className="text-lg leading-relaxed text-muted">HOA bookkeeping is not only bank-feed categorization. The books need to connect assessments and homeowner balances with vendor expenses, bank activity, operating and reserve funds, and the board’s reporting structure. The recurring preparation keeps the monthly close starting from current records.</p>
          </Reveal>
          <Reveal delay={0.12}><ServiceIllustration service="bookkeeping" className="mx-auto w-full max-w-[300px] lg:max-w-none" /></Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-3 mb-10"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Scope</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">What the Bookkeeping Cycle Includes</h2></Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scope.map((item, i) => <Reveal key={item} delay={Math.min(i * 0.04, 0.24)}><li className="flex h-full items-start gap-3 rounded-xl border border-border bg-white p-5"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span className="leading-6">{item}</span></li></Reveal>)}
          </ul>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ['1. Capture', 'Record assessments, receipts, invoices, expenses and other activity in the existing accounting system.'],
            ['2. Reconcile', 'Match bank and ledger activity, investigate differences and keep operating and reserve records current.'],
            ['3. Prepare', 'Leave the reconciled books and supporting schedules ready for the monthly financial reporting and board review.'],
          ].map(([title, text], i) => <Reveal key={title} delay={i * 0.06}><div className="h-full rounded-2xl border border-border bg-input p-6"><h3 className="text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-7 text-muted">{text}</p></div></Reveal>)}
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-7"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related HOA services</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Connect the Books to the Reporting</h2></Reveal>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/hoa-accounting" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">HOA Accounting</Link>
            <Link href="/services/hoa-financial-reporting" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">HOA Financial Reporting</Link>
            <Link href="/industries/hoa-accounting" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">HOA Accounting Overview</Link>
            <Link href="/blog/hoa-accounting-month-end-checklist" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">HOA Month-End Checklist</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="HOA bookkeeping questions" items={faqs} columns={2} />
      <InquirySection source={PATH} title="Review the HOA Bookkeeping Cycle" lead="Tell us what is current, what is behind and what the board needs to see each month." />
      <CTABanner title="Books Ready Before the Board Meeting" description="A repeatable bookkeeping cycle can be structured around existing assessment records, bank accounts and HOA systems." cta={{ text: 'Start a Conversation', href: '/contact' }} ctaSecondary={{ text: 'HOA Accounting', href: '/services/hoa-accounting' }} background="primary" />
    </main>
  );
}
