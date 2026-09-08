import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';
import PlatformDepthSection from '@/components/platform-depth';
import { platformDepth } from '@/lib/platform-depth';
import InquiryTrigger from '@/components/inquiry-trigger';

export const metadata: Metadata = generateMetadata({
  title: 'NetSuite Accounting Support',
  description: 'NetSuite support for multi-entity reconciliations, intercompany eliminations, multi-currency consolidation and recurring close activities.',
  path: '/technology/netsuite',
});

export default function NetSuitePage() {
  const faqs = platformDepth.netsuite.faqs;

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Technology', url: `${baseUrl}/technology` },
    { name: 'NetSuite', url: `${baseUrl}/technology/netsuite` },
  ]);

  const workflows = [
    'Multi-entity and multi-subsidiary account reconciliations',
    'Intercompany transactions and eliminations',
    'Multi-currency consolidation and revaluation support',
    'Revenue recognition schedules (including ASC 606 scenarios)',
    'Period close activities and close-cycle account maintenance',
    'Recurring management reporting across entities',
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero subtitle="Platform Workflow Support" title="NetSuite Accounting Support" description="Accounting support for the multi-entity, multi-currency work that happens inside an existing NetSuite environment — not implementation or system configuration." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View Services', href: '/services' }} background="primary-gradient" />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">What buyers usually care about</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">NetSuite handles complexity. Someone still has to close every entity on time.</h2><p className="text-lg text-muted leading-8">Multi-subsidiary and multi-currency structures add real accounting work: intercompany eliminations need to tie out, currency revaluation needs to be reviewed, and each entity's close still has to land on a predictable schedule. We work inside your existing NetSuite setup on that recurring accounting work, while implementation, customization and system administration stay with your NetSuite partner.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Work Around NetSuite</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/technology/netsuite"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Common starting points</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Where multi-entity close usually gets stuck</h2></></Reveal><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/netsuite" title="Talk to Us About Intercompany" label="Ask us about intercompany"><h3 className="font-bold text-primary text-xl mb-3">Intercompany</h3><p className="text-muted leading-7">Intercompany balances drift out of sync between entities, and eliminations become a manual chase at every close instead of a routine step.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/netsuite" title="Talk to Us About Consolidation" label="Ask us about consolidation"><h3 className="font-bold text-primary text-xl mb-3">Consolidation</h3><p className="text-muted leading-7">Currency revaluation, subsidiary-level reconciliations and consolidated reporting all need to be reviewed before group-level numbers can be trusted.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/netsuite" title="Talk to Us About Capacity" label="Ask us about capacity"><h3 className="font-bold text-primary text-xl mb-3">Capacity</h3><p className="text-muted leading-7">Your team knows NetSuite, but recurring reconciliations across every entity keep competing with higher-value review work each close cycle.</p></InquiryTrigger></div></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-8">Connect NetSuite to the accounting work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/accounting/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Accounting Services</Link><Link href="/solutions/dedicated-accounting-teams" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Dedicated Accounting Teams</Link><Link href="/services/audit-support/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Audit Support</Link><Link href="/technology" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">All Platforms</Link></div></div></section>


      <PlatformDepthSection platform={platformDepth.netsuite} />

      <FAQSection subtitle="NetSuite FAQs" items={faqs} columns={2} />

      <InquirySection source="/technology/netsuite" title="Talk to Us About Your NetSuite Close" lead="A free consultation, and a call that costs nothing. Tell us how many entities consolidate, and which part of the close keeps slipping." compact />

      <CTABanner
        title="Where Is Your Multi-Entity Close Getting Stuck?"
        description="Tell us whether the pressure is intercompany eliminations, consolidation or simply keeping every entity's close on schedule."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
