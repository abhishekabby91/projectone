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
  title: 'Drake Tax Accounting Support',
  description: 'Drake Tax support for organized return-preparation workflows, source-document handling, workpapers and recurring tax-season processes.',
  path: '/technology/drake-tax',
});

const faqs = platformDepth['drake-tax'].faqs;

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'Drake Tax', url: `${baseUrl}/technology/drake-tax` },
]);

const workflows = [
  'Return preparation and data entry inside Drake Tax',
  'Source-document organization and workpapers',
  'Multi-state return preparation support',
  'Quarterly estimated tax calculations',
  'E-filing-ready documentation for CPA/EA review',
  'Prior-year data organization and migration support',
];

export default function DrakeTaxPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="Platform Workflow Support"
        title="Drake Tax Accounting Support"
        description="Preparation and workpaper support inside Drake Tax that scales with tax-season volume, while your CPA or Enrolled Agent keeps final review and filing control."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">What buyers usually care about</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Drake Tax is the system. Someone still has to get every return prep-ready by April.</h2><p className="text-lg text-muted leading-8">Tax season volume doesn't scale evenly — the same firm handling steady work in November needs meaningfully more preparation capacity in March. We work inside your firm's existing Drake Tax setup on data entry, workpapers and preparation, so your CPA or Enrolled Agent can focus review time on judgment calls instead of data entry.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Work Around Drake Tax</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/technology/drake-tax"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-8">Connect Drake Tax to the practice work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/tax-preparation/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">U.S. Tax Preparation</Link><Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Staff Augmentation</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/technology" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">All Platforms</Link></div></div></section>


      <PlatformDepthSection platform={platformDepth['drake-tax']} />

      <FAQSection subtitle="Drake Tax Questions" items={faqs} columns={2} />

      <InquirySection source="/technology/drake-tax" title="Talk to Us About Your Drake Tax Season" lead="A free consultation, and a call that costs nothing. Tell us the return mix and the volume, and we will scope the preparation around your review." compact />

      <CTABanner title="Ready for the Next Tax Season Volume Spike?" description="Tell us whether the pressure is data entry, multi-state returns or simply peak-season capacity." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
