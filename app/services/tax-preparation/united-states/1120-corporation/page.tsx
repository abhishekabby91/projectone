import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ReturnDepthBlock from '@/components/return-depth';
import ServiceIllustration from '@/components/service-illustration';
import InquiryTrigger from '@/components/inquiry-trigger';
import { returnDepth } from '@/lib/us-return-depth';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/services/tax-preparation/united-states/1120-corporation';
const returnType = returnDepth['1120'];

export const metadata: Metadata = genMeta({
  title: 'Form 1120 Corporate Tax Outsourcing',
  description: 'Corporate return preparation support for U.S. CPA firms: book-to-tax schedules, depreciation records and workpapers prepared for review.',
  path: PATH,
});

const overview =
  'Form 1120 preparation starts with corporate books, but the financial statements are not the same thing as the completed tax return. The file may need reconciled balance-sheet accounts, fixed-asset support, book-to-tax schedules, prior-year carryforwards and clear explanations for items that require the CPA’s decision. Accounstone can prepare agreed return workpapers in the firm’s confirmed software workflow, using the accounting records and treatment the firm supplies or approves. The result should make each number traceable and each unresolved question visible before the return reaches review.';

const benefits = [
  'Preparation from an agreed trial balance and supporting financial statements',
  'Book-to-tax schedules with references to the underlying workpaper or source record',
  'Fixed-asset rollforward support based on client records and the firm-approved treatment',
  'Open-item list for missing information, unresolved balances and decisions that need the CPA',
  'Workpaper organization that follows your existing file names, templates and review notes',
  'A defined handoff for review, approval and filing without transferring professional judgment',
];

const faqs = returnType.faqs;

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Form 1120 Corporate Return Preparation Support for U.S. CPA Firms',
  description: overview,
  slug: 'tax-preparation/united-states/1120-corporation',
  basePath: '/services/',
  areaServed: ['United States'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Tax Preparation — United States', url: `${baseUrl}/services/tax-preparation/united-states` },
  { name: 'Form 1120', url: `${baseUrl}${PATH}` },
]);

export default function Form1120Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="US CPA Firms"
        title="Form 1120 Preparation, Built Around the Corporate Books"
        description="Corporate return workpapers prepared from an agreed trial balance, with book-to-tax support and unresolved questions organized for your review. Your firm retains tax positions and final approval."
        cta={{ text: 'Discuss Form 1120 Support', href: '/contact' }}
        ctaSecondary={{ text: 'All US Tax Preparation', href: '/services/tax-preparation/united-states' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services/tax-preparation/united-states" className="inline-block py-1.5 hover:text-primary transition-colors">Tax Preparation — US</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Form 1120</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-6">
            <>
              <div className="space-y-2">
                <span className="text-sm font-semibold tracking-wide uppercase text-accent">Corporate return workflow</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Return Is Only as Reviewable as the Schedules Behind It</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">{overview}</p>
              <p className="text-lg text-muted leading-relaxed">
                The overall scope, taxpayer-information handling and professional boundaries are explained on the{' '}
                <Link href="/services/tax-preparation/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">U.S. tax preparation support page</Link>.
                For a different business-return workflow, compare{' '}
                <Link href="/services/tax-preparation/united-states/1065-partnership" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">Form 1065 and partnership K-1 preparation</Link>
                {' '}and{' '}
                <Link href="/services/tax-preparation/united-states/1120s-s-corporation" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">Form 1120-S preparation</Link>.
              </p>
            </>
          </Reveal>
          <Reveal delay={0.16}>
            <ServiceIllustration service="tax-preparation" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <ReturnDepthBlock returnType={returnType} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">Support</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Reaches Your Reviewer</h2>
            </>
          </Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-lg border-2 border-border transition-colors hover:border-primary/40 h-full" source={PATH} region="united-states" service="tax-preparation">
                  <Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" />
                  <p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{b}</p>
                </InquiryTrigger></li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full px-6 py-8 md:px-8 md:py-12 bg-white">
        <div className="mx-auto max-w-5xl space-y-4">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Official corporate return references</h2>
          <p className="text-muted leading-7">The IRS describes Form 1120 as the U.S. Corporation Income Tax Return used by domestic corporations to report income, gains, losses, deductions and credits and figure income tax liability. Use the current official form and instructions alongside the CPA firm’s established procedures.</p>
          <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="https://www.irs.gov/forms-pubs/about-form-1120" target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-accent">IRS: About Form 1120</a>
            <a href="https://www.irs.gov/instructions/i1120" target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-accent">IRS: Instructions for Form 1120</a>
          </p>
          <p className="text-sm leading-relaxed text-muted">These links are general references, not tax advice. The firm or its qualified tax professional determines applicable treatment, elections and filing positions.</p>
        </div>
      </section>

      <section className="w-full px-6 py-8 md:px-8 md:py-12 bg-input">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">Related tax preparation workflows</h2>
          <p className="text-muted leading-7">Form 1120 preparation is one part of a CPA firm’s business-return workflow. For the broader scope and boundaries of outsourced return preparation, read the <Link href="/blog/tax-preparation-outsourcing" className="font-medium text-primary underline underline-offset-4 hover:text-accent">tax preparation outsourcing guide</Link>. For recurring accounting and the records behind the return, see <Link href="/services/accounting/united-states" className="font-medium text-primary underline underline-offset-4 hover:text-accent">U.S. accounting support</Link> and the <Link href="/industries/cpa-firms" className="font-medium text-primary underline underline-offset-4 hover:text-accent">CPA firm outsourcing overview</Link>.</p>
        </div>
      </section>

      <FAQSection subtitle="Form 1120 Questions" items={faqs} columns={2} />

      <InquirySection region="united-states" source={PATH} title="Start With One Corporate Return Workflow" lead="Tell us which workpapers your reviewers need, which tax software you use, and where corporate returns currently pause for missing records or schedule review." />

      <CTABanner
        title="Make Corporate Return Preparation Easier to Review"
        description="Start with a defined file, the source schedules and an agreed reviewer handoff."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
