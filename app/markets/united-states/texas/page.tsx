import { Metadata } from 'next';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import StateDepth from '@/components/state-depth';
import RegionIllustration from '@/components/region-illustration';
import { stateDepth } from '@/lib/us-states';
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
  'Books structured so the franchise (margin) computation reads from them rather than being rebuilt each year',
  'Revenue separated by type, and cost of goods sold kept distinct from operating overhead, as transactions post',
  'Sales recorded by destination state, so multi-state activity is visible rather than reconstructed at year end',
  'Consolidated reporting with location-level detail for businesses across Houston, Dallas-Fort Worth, Austin and San Antonio',
  'QuickBooks Online and Xero maintained inside your existing file — we work in your setup, not a copy of it',
  'Supporting schedules prepared in the form your Texas CPA asks for, ahead of the filing they run',
];

const faqs = stateDepth.texas.faqs;

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
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <Reveal className="space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Makes Texas Different</h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
          </>
        </Reveal>
        <Reveal delay={0.16}>
          <RegionIllustration region="united-states" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
        </Reveal>
        </div>
      </section>

      <StateDepth state={stateDepth.texas} />

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
