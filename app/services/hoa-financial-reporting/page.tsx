import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ServiceIllustration from '@/components/service-illustration';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/hoa-financial-reporting';

export const metadata: Metadata = genMeta({
  title: 'HOA Financial Reporting Services',
  description: 'Monthly HOA financial reporting with balance sheets, income statements, budget-to-actual results, fund balances, reconciliations and board-ready schedules.',
  path: PATH,
});

const reports = [
  ['Balance sheet', 'Shows assets, liabilities and the association’s financial position at the reporting date.'],
  ['Income and expense statement', 'Shows current and year-to-date activity so the board can compare actual results with the approved budget.'],
  ['Budget-to-actual report', 'Uses the board’s own budget categories so variances are easier to identify and discuss.'],
  ['Operating and reserve reporting', 'Keeps fund activity visible instead of presenting operating and reserve cash as one unexplained balance.'],
  ['Receivable and delinquency aging', 'Shows outstanding homeowner balances in a schedule the board can review and follow up on.'],
  ['Bank reconciliation support', 'Provides the reconciliation status and supporting detail behind the reported cash balances.'],
  ['Cash and ledger activity', 'Shows supporting cash movement or ledger detail needed to understand changes behind reported balances.'],
  ['Year-end reporting schedules', 'Organizes recurring schedules and supporting detail for the year-end accounting or CPA engagement.']
];

const faqs = [
  { question: 'What should an HOA financial package include?', answer: 'A monthly package commonly includes the balance sheet, income and expense statement, budget-to-actual results, cash and fund information, receivable aging and bank reconciliation support. The exact package should follow the association’s budget and board reporting needs.' },
  { question: 'Can reports follow our existing board budget?', answer: 'Yes. Reports are more useful when the accounting structure maps clearly to the budget the board approved, rather than forcing directors to translate a different chart of accounts every month.' },
  { question: 'Can you prepare reports for multiple associations?', answer: 'Yes. Each association remains separately reported while a management company can use a consistent package structure across its portfolio.' },
  { question: 'Do you prepare audit opinions?', answer: 'No. An audit or review opinion is issued by the independent CPA. We can organize the reconciliations, schedules and supporting records needed for that engagement.' },
];

const schema = generateServiceSchema({
  name: 'HOA Financial Reporting Services',
  description: 'Monthly financial reporting and board reporting support for homeowners associations and community management companies.',
  slug: 'hoa-financial-reporting',
  basePath: '/services/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'HOA Financial Reporting Services', url: `${baseUrl}${PATH}` },
]);

export default function HoaFinancialReportingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="Monthly reports for HOA boards and community managers"
        title="HOA Financial Reporting Services"
        description="Board-ready financial statements that connect the monthly close to the approved budget, homeowner receivables and operating and reserve activity."
        cta={{ text: 'Discuss the Reporting Scope', href: '/contact' }}
        ctaSecondary={{ text: 'HOA Accounting Services', href: '/services/hoa-accounting' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="py-1.5">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">HOA Financial Reporting</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-5">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">Reporting that can be read</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">The Board Should Not Need an Accountant to Read the Board Pack</h2>
            <p className="text-lg leading-relaxed text-muted">An HOA financial report is useful when it answers the questions directors actually ask: what came in, what went out, what is owed, how actual spending compares with the budget, and how operating and reserve activity changed. Recurring reports are prepared from reconciled accounting records, with a consistent format from month to month.</p>
          </Reveal>
          <Reveal delay={0.12}><ServiceIllustration service="accounting" className="mx-auto w-full max-w-[300px] lg:max-w-none" /></Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-3 mb-10"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Reporting package</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">What the Monthly Package Can Show</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reports.map(([title, text], i) => <Reveal key={title} delay={Math.min(i * 0.05, 0.25)}><div className="h-full rounded-xl border border-border bg-white p-5"><div className="flex items-start gap-3"><FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><div><h3 className="font-bold text-primary">{title}</h3><p className="mt-2 text-sm md:text-base leading-6 text-muted">{text}</p></div></div></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-8"><span className="text-sm font-semibold uppercase tracking-wide text-accent">A consistent close</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Why Consistency Matters</h2><p className="max-w-3xl text-lg leading-relaxed text-muted">A board can compare this month with last month only when the report structure stays stable. A management company can compare one association with another only when the underlying process is consistent while each set of books remains separate.</p></Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Same report structure each month', 'Budget lines that match the approved budget', 'Operating and reserve activity shown clearly', 'Supporting schedules behind reported balances', 'Receivable aging that can be followed over time', 'Reports prepared from reconciled accounts'].map((item, i) => <Reveal key={item} delay={Math.min(i * 0.04, 0.2)}><li className="flex items-start gap-3 rounded-xl border border-border bg-input p-5"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span className="leading-6">{item}</span></li></Reveal>)}
          </ul>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-7"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related HOA work</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Build the Reporting on Clean Books</h2></Reveal>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/hoa-accounting" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">HOA Accounting</Link>
            <Link href="/services/hoa-bookkeeping" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">HOA Bookkeeping</Link>
            <Link href="/blog/hoa-board-financial-package" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">Board Financial Package Guide</Link>
            <Link href="/blog/hoa-budget-to-actual-reports" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">Budget-to-Actual Guide</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="HOA reporting questions" items={faqs} columns={2} />
      <InquirySection source={PATH} title="Review the Current Board Package" lead="Tell us what the board receives today and which part of the monthly report is hardest to explain." />
      <CTABanner title="A Clearer Monthly Board Package" description="The reporting structure can follow the existing budget, accounting system and board meeting calendar." cta={{ text: 'Start a Conversation', href: '/contact' }} ctaSecondary={{ text: 'HOA Accounting', href: '/services/hoa-accounting' }} background="primary" />
    </main>
  );
}
