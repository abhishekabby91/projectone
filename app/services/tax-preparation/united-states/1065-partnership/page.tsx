import { Metadata } from 'next';
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

const PATH = '/services/tax-preparation/united-states/1065-partnership';
const returnType = returnDepth['1065'];

export const metadata: Metadata = genMeta({
  title: 'Form 1065 and K-1 Preparation Outsourcing',
  description:
    'Partnership return and K-1 preparation for US CPA firms: trial balance in, schedules and capital accounts out. Allocations and signature stay with your firm.',
  path: PATH,
});

const overview =
  'A partnership return is judged by its K-1s, because those are the part with an audience. The return goes to the IRS; the K-1s go to partners who read them, act on them and notice when an allocation or a capital account does not look like what they expected. So the preparation is built backwards from that output: a trial balance that has stopped moving, guaranteed payments kept distinguishable from distributions, tax basis capital maintained rather than reconstructed, and book-to-tax differences that tie to something a reviewer can follow. What we do not do is read the partnership agreement — the allocations are your firm’s determination, and we prepare to it.';

const benefits = [
  'Preparation from an agreed trial balance, with the state the books need to be in named before the season rather than during it',
  'Guaranteed payments and distributions kept separable, so neither has to be untangled from the other at year end',
  'Tax basis capital accounts maintained as contributions, allocations and distributions occur',
  'Book-to-tax differences supported line by line, so the M-1 is reviewable rather than only arithmetically correct',
  'K-1s and their supporting detail prepared for your review before anything reaches a partner',
  'Composite filings and non-resident withholding prepared from apportionment the books actually support',
];

const faqs = returnType.faqs;

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Form 1065 and Schedule K-1 Preparation Support for U.S. CPA Firms',
  description: overview,
  slug: 'tax-preparation/united-states/1065-partnership',
  basePath: '/services/',
  areaServed: ['US'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Tax Preparation — United States', url: `${baseUrl}/services/tax-preparation/united-states` },
  { name: 'Form 1065', url: `${baseUrl}${PATH}` },
]);

export default function Form1065Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="US CPA Firms"
        title="Form 1065 Preparation, Built Around the K-1s"
        description="Partnership returns prepared from a trial balance that has stopped moving, with capital accounts and schedules a reviewer can follow. Allocations stay yours."
        cta={{ text: 'Get Started', href: '/contact' }}
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
          <li aria-current="page" className="text-primary font-medium">Form 1065</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-6">
            <>
              <div className="space-y-2">
                <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Return Files. The K-1s Get Read.</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">{overview}</p>
              <p className="text-lg text-muted leading-relaxed">
                The engagement terms, the IRC §7216 consent requirement and the Circular 230 boundary are set out on{' '}
                <Link href="/services/tax-preparation/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">the US tax preparation page</Link>.
                Where the close is the real constraint, that work sits under{' '}
                <Link href="/services/accounting/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">accounting and month-end close</Link>, and the partners’ own returns under{' '}
                <Link href="/services/tax-preparation/united-states/1040-individual" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">Form 1040 preparation</Link>.
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
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
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

      <FAQSection subtitle="1065 Questions" items={faqs} columns={2} />

      <InquirySection region="united-states" source={PATH} title="Start With One Partnership" lead="A free consultation, and a call that costs nothing. Ideally the one that ran late or reconstructed badly last year — that is where the difference shows." />

      <CTABanner
        title="How Late Do Your K-1s Go Out?"
        description="Let's look at one partnership and what the return actually waits on."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
