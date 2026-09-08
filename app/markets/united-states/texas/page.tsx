import { Metadata } from 'next';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import InquiryTrigger from '@/components/inquiry-trigger';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/markets/united-states/texas';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Accounting for Texas',
  description:
    'Bookkeeping and accounting built around Texas specifics — franchise (margin) tax, no state income tax, and the Houston, Dallas and Austin markets.',
  path: PATH,
});

const overview =
  "Texas has no state personal income tax, which surprises a lot of business owners into thinking accounting is simpler here — it isn't quite that simple. Most Texas entities above the no-tax-due threshold still owe the state's franchise tax (sometimes called the \"margin tax\"), calculated differently than income tax and easy to get wrong if your books aren't structured for it. Combined with Texas's large and fast-growing small business market — especially around Houston, Dallas-Fort Worth, and Austin — bookkeeping that's built around these specifics matters more than generic support.";

const benefits = [
  'Bookkeeping structured to support Texas franchise tax (margin tax) calculations',
  'No state income tax means different — not absent — compliance considerations, and we help you understand which apply',
  'Support for the industries concentrated in Texas: energy, real estate, professional services, and a growing tech sector',
  'QuickBooks Online and Xero setup aligned with Texas entity structures (LLCs, S-Corps, and franchise-taxable entities)',
  'Multi-location support for businesses operating across Houston, Dallas, Austin, and San Antonio',
  'Coordination with your Texas CPA for franchise tax filing and entity-level tax planning',
];

const faqs = [
  {
    question: 'Does Texas really have no business taxes at all?',
    answer:
      "Texas has no state personal income tax, but most business entities above a revenue threshold owe the Texas franchise tax (margin tax), which is calculated differently than income tax. We structure your books to support that calculation, and coordinate with your CPA for the actual filing.",
  },
  {
    question: 'Do you work with businesses across different Texas cities?',
    answer:
      'Yes, we support Texas businesses regardless of city — Houston, Dallas-Fort Worth, Austin, San Antonio, and elsewhere — since our support is delivered remotely and structured around your business, not your physical location.',
  },
  {
    question: 'Can you help with multi-location Texas businesses?',
    answer:
      'Yes, we support consolidated bookkeeping across multiple Texas locations alongside location-level detail where that matters for your reporting.',
  },
  {
    question: 'Do you support Texas real estate and energy sector businesses?',
    answer:
      'Yes, these are two of the industries most concentrated in Texas, and we have relevant experience — see our dedicated real estate industry support for more detail.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Accounting Services for Texas Businesses',
  description: overview,
  slug: 'united-states/texas',
  basePath: '/markets/',
  areaServed: ['US'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United States', url: `${baseUrl}/markets/united-states` },
  { name: 'Texas', url: `${baseUrl}${PATH}` },
]);

export default function TexasPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Texas Businesses"
        title="Accounting & Bookkeeping Built for Texas"
        description="Franchise tax awareness, no state income tax nuances, and support across Houston, Dallas, and Austin."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View U.S. Services', href: '/markets/united-states' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/markets" className="inline-block py-1.5 hover:text-primary transition-colors">Markets</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/markets/united-states" className="inline-block py-1.5 hover:text-primary transition-colors">United States</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Texas</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Makes Texas Different</h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Support</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Built Around Texas Specifics</h2>
            </>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-lg border-2 border-border transition-colors hover:border-primary/40 h-full" source="/markets/united-states/texas" region="united-states">
                  <Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" />
                  <p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{b}</p>
                </InquiryTrigger></li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection subtitle="Texas Questions" items={faqs} columns={2} />

      {/* The Yardi page is Texas-specific and had one inbound link (2026-09-07 crawl). */}

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-xl font-bold text-primary mb-4">Related Texas work</h2>

          <div className="flex flex-wrap gap-3">

            <Link href="/industries/real-estate/yardi-accounting-outsourcing-texas" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-input transition-colors">Yardi accounting for Texas property firms <ArrowRight size={14} aria-hidden="true" /></Link>

            <Link href="/industries/real-estate" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-input transition-colors">Real estate <ArrowRight size={14} aria-hidden="true" /></Link>

          </div>

        </div>

      </section>


      <InquirySection region="united-states" source="/markets/united-states/texas" title="Talk to Us About Your Texas Clients" lead="A free consultation, and a call that costs nothing. Franchise tax, no state income tax, and sales tax that still has to be tracked as it posts — tell us where the work sits." />

      <CTABanner
        title="Running a Business in Texas?"
        description="Let's talk about your specific setup — city, industry, and entity structure."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
