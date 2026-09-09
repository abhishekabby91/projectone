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

const PATH = '/markets/australia/bas-preparation';
const market = marketDepth['au-bas'];

export const metadata: Metadata = genMeta({
  title: 'BAS Preparation for Australian Firms',
  description:
    'BAS-ready records for Australian accounting firms — GST coded as transactions post and the control account reconciled monthly, for your agent to lodge.',
  path: PATH,
});

const overview =
  'BAS season is rarely painful because of transaction volume. It is painful when three months of GST treatments were applied loosely as the transactions landed, so the fortnight before the statement is spent deciding them retrospectively from bank narratives — and then hoping the control account settles somewhere defensible. The firms that find the quarter routine are the ones whose coding was correct at the point of entry, whose evidence was chased when it was missing rather than when it was needed, and whose control account was reconciled monthly. That is the work we do. What reaches your firm is a quarter that reconciles and an open-items list of what genuinely could not be resolved. Lodgment stays with your registered BAS or tax agent, and so does every arguable classification.';

const benefits = [
  'GST coded at the point of entry, while the tax invoice is in front of someone and the supplier still answers',
  'The GST control account reconciled monthly, so a break is found in the month it happened',
  'Missing or inadequate tax invoices raised on an open-items list rather than given a plausible code',
  'PAYG withholding on the statement reconciled to what payroll actually reported, as part of the same quarter',
  'Cash or accruals basis kept explicit in how the records are maintained, including through a change of basis',
  'Xero, QuickBooks Online and MYOB maintained inside your existing file, on your quarter dates',
];

const faqs = market.faqs;

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'BAS Preparation for Australian Accounting Firms',
  description: overview,
  slug: 'australia/bas-preparation',
  basePath: '/markets/',
  areaServed: ['AU'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'Australia', url: `${baseUrl}/markets/australia` },
  { name: 'BAS Preparation', url: `${baseUrl}${PATH}` },
]);

export default function AustraliaBasPreparationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Australian Accounting Firms"
        title="BAS-Ready Records, Coded as They Land"
        description="GST applied at the point of entry and the control account reconciled monthly, so the quarter closes on a reconciliation. Your registered agent lodges."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Australian Services', href: '/markets/australia' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/markets" className="inline-block py-1.5 hover:text-primary transition-colors">Markets</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/markets/australia" className="inline-block py-1.5 hover:text-primary transition-colors">Australia</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">BAS Preparation</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-6">
            <>
              <div className="space-y-2">
                <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Why the Quarter Is Hard When It Is Hard</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">{overview}</p>
              <p className="text-lg text-muted leading-relaxed">
                The transaction processing underneath sits in{' '}
                <Link href="/services/bookkeeping/australia" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">bookkeeping for Australian firms</Link>, and the payroll figures that reach the statement are covered in{' '}
                <Link href="/services/payroll/australia" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">payroll processing for Australia</Link>.
              </p>
            </>
          </Reveal>
          <Reveal delay={0.16}>
            <RegionIllustration region="australia" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <MarketDepthBlock market={market} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">Support</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What We Maintain Through the Quarter</h2>
            </>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-lg border-2 border-border transition-colors hover:border-primary/40 h-full" source={PATH} region="australia">
                  <Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" />
                  <p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{b}</p>
                </InquiryTrigger></li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection subtitle="BAS Questions" items={faqs} columns={2} />

      <InquirySection region="australia" source={PATH} title="Talk to Us About One BAS Quarter" lead="A free consultation, and a call that costs nothing. Start with one client and one quarter — that is what you spend if the output is not what you wanted." />

      <CTABanner
        title="Does the Lodgment Program Set the Pace of Your Year?"
        description="Let's look at one client's records and what the quarter actually takes."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
