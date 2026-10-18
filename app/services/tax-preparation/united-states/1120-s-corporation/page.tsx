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

const PATH = '/services/tax-preparation/united-states/1120-s-corporation';
const returnType = returnDepth['1120S'];

export const metadata: Metadata = genMeta({
  title: 'Form 1120-S Tax Preparation Outsourcing',
  description: 'S corporation return preparation support for U.S. CPA firms: shareholder schedules, K-1 workpapers and book-to-tax records prepared for review.',
  path: PATH,
});

const overview =
  'Form 1120-S preparation connects the corporation’s books to the items reported for its shareholders. A reviewable file depends on a settled trial balance, supporting schedules, prior-year records, shareholder information and a clear trail for items that need a CPA’s decision. Accounstone can prepare agreed return workpapers and supporting schedules in the firm’s confirmed workflow. The firm retains the professional decisions on basis, compensation treatment, tax positions and the final review and filing process.';

const benefits = [
  'Preparation from an agreed S corporation trial balance and supporting records',
  'Shareholder schedule workpapers organized around the firm’s review checklist',
  'Reconciliation support for distributions, loans and other shareholder-related ledger activity',
  'Book-to-tax schedules with source references and unresolved questions listed clearly',
  'Prior-year information and fixed-asset support carried into the preparation package',
  'Defined review handoff for shareholder-specific decisions and final approval',
];

const faqs = returnType.faqs;

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Form 1120-S Preparation Support for U.S. CPA Firms',
  description: overview,
  slug: 'tax-preparation/united-states/1120-s-corporation',
  basePath: '/services/',
  areaServed: ['United States'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Tax Preparation — United States', url: `${baseUrl}/services/tax-preparation/united-states` },
  { name: 'Form 1120-S', url: `${baseUrl}${PATH}` },
]);

export default function Form1120SPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="US CPA Firms"
        title="Form 1120-S Preparation, With the Shareholder Schedules in View"
        description="S corporation return workpapers and supporting schedules prepared from agreed books and shareholder records, with unresolved items routed to your reviewer. Tax positions and final approval stay with your firm."
        cta={{ text: 'Discuss Form 1120-S Support', href: '/contact' }}
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
          <li aria-current="page" className="text-primary font-medium">Form 1120-S</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-6">
            <>
              <div className="space-y-2">
                <span className="text-sm font-semibold tracking-wide uppercase text-accent">S corporation return workflow</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Corporate Ledger and the Shareholder Schedules Must Agree</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">{overview}</p>
              <p className="text-lg text-muted leading-relaxed">
                The overall scope, taxpayer-information handling and professional boundaries are explained on the{' '}
                <Link href="/services/tax-preparation/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">U.S. tax preparation support page</Link>.
                For C corporation returns, see{' '}
                <Link href="/services/tax-preparation/united-states/1120-corporation" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">Form 1120 corporate return preparation</Link>;
                for partnership returns and partner K-1s, see{' '}
                <Link href="/services/tax-preparation/united-states/1065-partnership" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">Form 1065 preparation</Link>.
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
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Official S corporation return references</h2>
          <p className="text-muted leading-7">The IRS explains that Form 1120-S reports income, gains, losses, deductions, credits and other information for a domestic corporation or other entity for a tax year covered by an S corporation election. Use the current official form and instructions with your firm’s established review procedures.</p>
          <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="https://www.irs.gov/forms-pubs/about-form-1120-s" target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-accent">IRS: About Form 1120-S</a>
            <a href="https://www.irs.gov/instructions/i1120s" target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-accent">IRS: Instructions for Form 1120-S</a>
          </p>
          <p className="text-sm leading-relaxed text-muted">These links are general references, not tax advice. The firm or its qualified tax professional determines applicable treatment, elections and filing positions.</p>
        </div>
      </section>

      <section className="w-full px-6 py-8 md:px-8 md:py-12 bg-input">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">Related tax preparation workflows</h2>
          <p className="text-muted leading-7">Form 1120-S preparation depends on records for both the corporation and its shareholders. For the wider scope of outsourced tax work, see the <Link href="/blog/tax-preparation-outsourcing" className="font-medium text-primary underline underline-offset-4 hover:text-accent">tax preparation outsourcing guide</Link>. For recurring accounting support behind the return, see <Link href="/services/accounting/united-states" className="font-medium text-primary underline underline-offset-4 hover:text-accent">U.S. accounting support</Link> and the <Link href="/industries/cpa-firms" className="font-medium text-primary underline underline-offset-4 hover:text-accent">CPA firm outsourcing overview</Link>.</p>
        </div>
      </section>

      <FAQSection subtitle="Form 1120-S Questions" items={faqs} columns={2} />

      <InquirySection region="united-states" source={PATH} title="Start With One S Corporation File" lead="Tell us which shareholder schedules and supporting records your reviewers need, which tax software you use and which questions should be returned before a file is ready for review." />

      <CTABanner
        title="Build a Reviewable 1120-S Workpaper Package"
        description="Start with a defined return, the records behind it and a clear boundary for shareholder-specific decisions."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
