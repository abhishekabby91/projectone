import { Metadata } from 'next';
import { Check } from 'lucide-react';
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

const PATH = '/markets/united-states/florida';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Accounting for Florida',
  description:
    'Bookkeeping and accounting for Florida businesses — no state personal income tax, corporate income tax for C-Corps, and Department of Revenue sales tax.',
  path: PATH,
});

const overview =
  "Florida has no state personal income tax, which is a real advantage for pass-through entities like most LLCs and S-Corps — but C-Corporations still owe Florida corporate income tax, a distinction that trips up business owners who assume \"no income tax\" applies across the board. Sales tax is administered by the Florida Department of Revenue, with its own registration and filing rhythm. Florida's fast-growing business population, especially in real estate, e-commerce, and professional services, means bookkeeping needs to keep pace with rapid growth rather than just steady-state maintenance.";

const benefits = [
  'A monthly reconciliation rhythm, because no state personal return means one fewer external look at the numbers',
  'Sales and use tax recorded as it posts — taxable versus exempt, with exemption documentation attached',
  'Owner and entity kept properly separated in the ledger, which is the most common thing we clean up',
  'Reporting that shows the working-capital shape through a season rather than only an annual total',
  'Bookkeeping that absorbs a rising transaction volume without the routine being rebuilt',
  'Coordination with your Florida CPA, who determines what the entity actually owes and files it',
];

const faqs = stateDepth.florida.faqs;

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Accounting Services for Florida Businesses',
  description: overview,
  slug: 'united-states/florida',
  basePath: '/markets/',
  areaServed: ['US'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United States', url: `${baseUrl}/markets/united-states` },
  { name: 'Florida', url: `${baseUrl}${PATH}` },
]);

export default function FloridaPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Florida Businesses"
        title="Accounting & Bookkeeping Built for Florida"
        description="No personal income tax nuances, corporate income tax clarity, and support for Florida's fast-growing business market."
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
          <li aria-current="page" className="text-primary font-medium">Florida</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <Reveal className="space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Makes Florida Different</h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
          </>
        </Reveal>
        <Reveal delay={0.16}>
          <RegionIllustration region="united-states" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
        </Reveal>
        </div>
      </section>

      <StateDepth state={stateDepth.florida} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Support</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Built Around Florida Specifics</h2>
            </>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-lg border-2 border-border transition-colors hover:border-primary/40 h-full" source="/markets/united-states/florida" region="united-states">
                  <Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" />
                  <p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{b}</p>
                </InquiryTrigger></li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection subtitle="Florida Questions" items={faqs} columns={2} />

      <InquirySection region="united-states" source="/markets/united-states/florida" title="Talk to Us About Your Florida Clients" lead="A free consultation, and a call that costs nothing. No personal income tax does not mean no obligations — tell us what the client base looks like." />

      <CTABanner
        title="Running a Business in Florida?"
        description="Let's talk about your entity structure and growth plans."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
