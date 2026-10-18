import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import MarketDepthBlock from '@/components/market-depth';
import RegionIllustration from '@/components/region-illustration';
import { marketDepth } from '@/lib/market-depth';
import InquiryTrigger from '@/components/inquiry-trigger';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/markets/united-kingdom/year-end-accounts';
const market = marketDepth['uk-year-end'];

export const metadata: Metadata = genMeta({
  title: 'UK Year-End Accounts Preparation',
  description:
    'FRS 102 and FRS 105 year-end accounts prepared for UK accountancy practices — disclosure inputs captured through the year, in your templates, for your sign-off.',
  path: PATH,
});

const overview =
  'A year-end file is expensive in proportion to how much of it has to be reconstructed. The preparation itself is routine work on a known calendar; what turns eight weeks into twelve is going back through a year of ledger to establish which entries were related-party transactions, which balances moved between a director and the company, and what was committed to in the spring that has to be disclosed in the winter. None of that is visible in the accounts unless somebody captured it as it happened. We keep those inputs as the year runs, prepare the file in your templates, and put a named preparer and a named reviewer against it before it reaches you. The framework, every policy and judgement, the signature and the filing remain your practice’s.';

const benefits = [
  'Related-party and director transactions identified when they post, not recovered from the ledger in January',
  'Lease, commitment and disclosure inputs accumulated through the year rather than reconstructed under deadline',
  'Prepared to the framework your practice has set — FRS 102, FRS 105, or the treatment you have determined',
  'The year-end file tied to the VAT quarters that fed it, from one ledger rather than two',
  'Prior-year adjustments carried through the records, so the following year opens on a balance that agrees',
  'Your workpaper templates, your review points, and a named preparer and reviewer on every file',
];

const faqs = market.faqs;

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Year-End Accounts Preparation for UK Accountancy Practices',
  description: overview,
  slug: 'united-kingdom/year-end-accounts',
  basePath: '/markets/',
  areaServed: ['GB'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United Kingdom', url: `${baseUrl}/markets/united-kingdom` },
  { name: 'Year-End Accounts', url: `${baseUrl}${PATH}` },
]);

export default function UkYearEndAccountsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="UK Accountancy Practices"
        title="Year-End Accounts, Without the Reconstruction"
        description="Disclosure inputs captured as the year runs, prepared in your templates to the framework you have set. You review, judge, sign and file."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View UK Services', href: '/markets/united-kingdom' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/markets" className="inline-block py-1.5 hover:text-primary transition-colors">Markets</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/markets/united-kingdom" className="inline-block py-1.5 hover:text-primary transition-colors">United Kingdom</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Year-End Accounts</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-6">
            <>
              <div className="space-y-2">
                <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Why Year-End Costs What It Costs</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">{overview}</p>
              <p className="text-lg text-muted leading-relaxed">
                The quarters that feed this file are covered in{' '}
                <Link href="/markets/united-kingdom/vat-returns" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">VAT return preparation</Link>, and where a year-end leads into an audit, the delegable half of that work is set out in{' '}
                <Link href="/services/audit-support/united-kingdom" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">audit support for UK practices</Link>.
              </p>
            </>
          </Reveal>
          <Reveal delay={0.16}>
            <RegionIllustration region="united-kingdom" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <MarketDepthBlock market={market} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">Support</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Arrives With Your Reviewer</h2>
            </>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-lg border-2 border-border transition-colors hover:border-primary/40 h-full" source={PATH} region="united-kingdom">
                  <Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" />
                  <p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{b}</p>
                </InquiryTrigger></li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection subtitle="Year-End Questions" items={faqs} columns={2} />

      <InquirySection region="united-kingdom" source={PATH} title="Talk to Us Before the Next Year-End Cycle" lead="A free consultation, and a call that costs nothing. The useful time to look at a year-end file is before the year ends — tell us which clients are the difficult ones." />

      <CTABanner
        title="Is Year-End the Constraint on Your Practice?"
        description="Let's look at one client file and what it would take to stop rebuilding it."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
