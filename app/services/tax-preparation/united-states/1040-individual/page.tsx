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

const PATH = '/services/tax-preparation/united-states/1040-individual';
const returnType = returnDepth['1040'];

export const metadata: Metadata = genMeta({
  title: 'Form 1040 Tax Preparation Outsourcing',
  description:
    'Individual return preparation for US CPA firms: source documents organised, basis reconstructed, open items named. Your firm reviews, signs and e-files.',
  path: PATH,
});

const overview =
  'A 1040 practice does not run out of capacity because the returns are hard. It runs out because forty files are open at once, most of them waiting on a document somebody else has to send, and the number of people who can sign is fixed. We prepare individual returns and the workpapers behind them, in your software and to your checklist, so what reaches your reviewer is a file with its gaps named rather than a file that has to be read before anyone can tell what state it is in. Review, signature and e-filing stay with your CPA or Enrolled Agent.';

const benefits = [
  'Source documents organised against your own checklist, with duplicates and wrong-year forms caught at intake',
  'A named open-items list per return — what is missing, which line it feeds and who was asked',
  'Non-covered basis reconstructed from statements and shown as working, never asserted as a figure',
  'Prior-year carryforwards picked up from the prior return rather than inferred from this year’s documents',
  'Schedule C and Schedule E detail tied back to the underlying books before the schedule is built',
  'Returns waiting on a K-1 identified at intake and sequenced separately from returns that can go out',
];

const faqs = returnType.faqs;

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Form 1040 Preparation Support for U.S. CPA Firms',
  description: overview,
  slug: 'tax-preparation/united-states/1040-individual',
  basePath: '/services/',
  areaServed: ['US'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Tax Preparation — United States', url: `${baseUrl}/services/tax-preparation/united-states` },
  { name: 'Form 1040', url: `${baseUrl}${PATH}` },
]);

export default function Form1040Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="US CPA Firms"
        title="Form 1040 Preparation, Documents and All"
        description="Individual returns prepared from the documents as they arrive, with what has not arrived named rather than worked around. You review, sign and e-file."
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
          <li aria-current="page" className="text-primary font-medium">Form 1040</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-6">
            <>
              <div className="space-y-2">
                <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Where an Individual Return Actually Costs You</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">{overview}</p>
              <p className="text-lg text-muted leading-relaxed">
                The engagement terms, the IRC §7216 consent requirement and the Circular 230 boundary that governs all of this are set out on{' '}
                <Link href="/services/tax-preparation/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">the US tax preparation page</Link>.
                Where a return depends on a partnership, the preparation of that return is covered under{' '}
                <Link href="/services/tax-preparation/united-states/1065-partnership" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">Form 1065 and its K-1s</Link>.
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

      <FAQSection subtitle="1040 Questions" items={faqs} columns={2} />

      <InquirySection region="united-states" source={PATH} title="Start With One Partner’s 1040 List" lead="A free consultation, and a call that costs nothing. Take the returns that ran late last season and see what comes back before the volume arrives." />

      <CTABanner
        title="Is Review the Constraint, or Is Preparation?"
        description="Let's look at a sample of your actual returns and where the season goes."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
