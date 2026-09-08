import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';
import PlatformDepthSection from '@/components/platform-depth';
import { platformDepth } from '@/lib/platform-depth';
import InquiryTrigger from '@/components/inquiry-trigger';

export const metadata: Metadata = generateMetadata({
  title: 'CCH Axcess Accounting Support',
  description: 'CCH Axcess support for tax-practice workflows, document organization, preparation tasks, review queues and recurring practice operations.',
  path: '/technology/cch',
});

const faqs = platformDepth.cch.faqs;

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'CCH Axcess', url: `${baseUrl}/technology/cch` },
]);

const workflows = [
  'Tax return preparation and workpaper organization',
  'Document management inside CCH Axcess Workflow',
  'Review-queue support for multi-client, multi-engagement work',
  'Audit documentation and testing support within CCH Axcess',
  'Bookkeeping and accounting work that feeds prepared returns',
  'Multi-entity and multi-state preparation support',
];

export default function CCHPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="Platform Workflow Support"
        title="CCH Axcess Accounting Support"
        description="Help with the tax-practice workflow inside CCH Axcess — preparation, review queues and document organization, not system administration."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">What buyers usually care about</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">CCH Axcess is the system. Someone still has to keep the review queue moving.</h2><p className="text-lg text-muted leading-8">A firm running CCH Axcess across a large book of clients still needs preparation, documentation and review-queue work handled consistently, especially during tax season. We work inside your firm's existing CCH Axcess access and security setup on that recurring preparation work, while system administration and licensing stay with your firm.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Work Around CCH Axcess</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/technology/cch"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-8">Connect CCH Axcess to the practice work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/tax-preparation/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Tax Preparation</Link><Link href="/services/audit-support/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Audit Support</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/technology" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">All Platforms</Link></div></div></section>


      <PlatformDepthSection platform={platformDepth.cch} />

      <FAQSection subtitle="CCH Axcess Questions" items={faqs} columns={2} />

      <InquirySection source="/technology/cch" title="Talk to Us About Your CCH Axcess Workflow" lead="A free consultation, and a call that costs nothing. Tell us how returns move through CCH in your firm and where the queue forms." compact />

      <CTABanner title="Where Is Your CCH Axcess Review Queue Getting Stuck?" description="Tell us whether the pressure is preparation capacity, document organization or tax-season volume." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
