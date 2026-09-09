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

const PATH = '/markets/united-kingdom/vat-returns';
const market = marketDepth['uk-vat'];

export const metadata: Metadata = genMeta({
  title: 'VAT Return Preparation for UK Practices',
  description:
    'VAT-quarter records prepared under MTD for UK accountancy practices — coded as transactions post and reconciled monthly, ready for your review and submission.',
  path: PATH,
});

const overview =
  'For most UK accountancy practices the VAT quarter is the heaviest recurring thing in the calendar, and it is heavy in a specific way: the work is not difficult, it is compressed. Four times a year, across a whole portfolio, someone has to turn three months of transactions into a figure that can be submitted and defended — and how expensive that is depends almost entirely on whether the records were maintained through the quarter or assembled at the end of it. We do the maintaining. Transactions are coded and reconciled as they land, the control account is checked monthly rather than discovered quarterly, and what reaches your practice is a quarter that reconciles, with anything unresolved named rather than buried. Submission, and every arguable liability position behind it, stays with you.';

const benefits = [
  'VAT treatment applied at the point of posting, while the supporting document is still to hand',
  'Records maintained inside your accounting software, so the digital link back to the transaction is not broken',
  'The VAT control account reconciled monthly, so a break is days old rather than a quarter old',
  'Partial exemption and mixed supplies kept separable in the ledger rather than split by estimate at quarter-end',
  'Missing or inadequate VAT evidence raised on an open-items list, never given a plausible code',
  'Xero, QuickBooks Online and Sage maintained inside your existing file, on your quarter dates',
];

const faqs = market.faqs;

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'VAT Return Preparation for UK Accountancy Practices',
  description: overview,
  slug: 'united-kingdom/vat-returns',
  basePath: '/markets/',
  areaServed: ['GB'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United Kingdom', url: `${baseUrl}/markets/united-kingdom` },
  { name: 'VAT Returns', url: `${baseUrl}${PATH}` },
]);

export default function UkVatReturnsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="UK Accountancy Practices"
        title="VAT Return Preparation, Quarter by Quarter"
        description="Records coded as they post and reconciled monthly, so the quarter closes on a reconciliation rather than a reconstruction. You review and submit."
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
          <li aria-current="page" className="text-primary font-medium">VAT Returns</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-6">
            <>
              <div className="space-y-2">
                <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Where the VAT Quarter Actually Costs You</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">{overview}</p>
              <p className="text-lg text-muted leading-relaxed">
                The same records support the{' '}
                <Link href="/markets/united-kingdom/year-end-accounts" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">year-end accounts file</Link>{' '}
                that follows them, and the underlying processing sits in{' '}
                <Link href="/services/bookkeeping/united-kingdom" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">bookkeeping for UK practices</Link>.
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
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What We Maintain Through the Quarter</h2>
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

      <FAQSection subtitle="VAT Questions" items={faqs} columns={2} />

      <InquirySection region="united-kingdom" source={PATH} title="Talk to Us About One VAT Quarter" lead="A free consultation, and a call that costs nothing. Start with one client and one quarter — if the output is not what you wanted, that is what you have spent finding out." />

      <CTABanner
        title="Is the VAT Quarter Setting the Pace of Your Year?"
        description="Let's look at one client's records and what the quarter actually takes."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
