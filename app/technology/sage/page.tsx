import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';
import InquiryTrigger from '@/components/inquiry-trigger';

export const metadata: Metadata = generateMetadata({
  title: 'Sage Accounting Support',
  description: 'Sage accounting support for recurring bookkeeping, reconciliations, account maintenance, reporting and month-end close.',
  path: '/technology/sage',
});

export default function SagePage() {
  const faqs = [
    { question: 'Can you provide ongoing accounting support inside Sage?', answer: 'Yes. Ongoing support can include bookkeeping, reconciliations, AP/AR workflows, reporting and month-end close activities inside your existing Sage setup.' },
    { question: 'Do you implement or configure Sage itself?', answer: 'We support the recurring accounting work inside an existing Sage environment. Initial implementation, module configuration and system administration are typically handled by a Sage implementation partner or your internal IT team.' },
    { question: 'Do you support multi-company Sage setups?', answer: 'Yes. We support the accounting and consolidation work across multi-company or multi-location Sage structures, including intercompany reconciliations.' },
    { question: 'Can you help when the Sage file has fallen behind?', answer: 'Yes. We can review unreconciled accounts, inconsistent categorization and missing transactions, then establish a repeatable monthly workflow.' },
    { question: 'Can you help migrate accounting data to Sage?', answer: 'We support the reconciliation and validation of historical data as part of a migration. The technical migration itself is typically coordinated with your Sage implementation partner.' },
    { question: 'Do you provide Sage certification or official vendor support?', answer: 'We provide accounting workflow support around Sage. We are not Sage, and any certification claim should be verified independently before being treated as a credential.' },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Technology', url: `${baseUrl}/technology` },
    { name: 'Sage', url: `${baseUrl}/technology/sage` },
  ]);

  const workflows = [
    'Transaction processing and categorization',
    'Bank and account reconciliations',
    'Multi-company consolidation and intercompany reconciliations',
    'Accounts payable and receivable workflows',
    'Month-end close and recurring management reporting',
    'Cleanup and historical corrections',
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero subtitle="Platform Workflow Support" title="Sage Accounting Support" description="Help with the recurring accounting work inside Sage — reconciliations, close, reporting and multi-company consolidation." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View Services', href: '/services' }} background="primary-gradient" />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">What buyers usually care about</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Sage is the system. Someone still has to keep every entity reconciled.</h2><p className="text-lg text-muted leading-8">A Sage file can be fully set up and still fall behind if reconciliations, categorization and month-end review aren't handled consistently — and that gets harder with multiple companies or locations to consolidate. We work inside your existing Sage setup on that recurring accounting routine, while implementation and system configuration stay with your Sage partner or internal IT team.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Work Around Sage</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/technology/sage"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Common starting points</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary">The software may not be the problem</h2></></Reveal><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/sage" title="Talk to Us About Cleanup" label="Ask us about cleanup"><h3 className="font-bold text-primary text-xl mb-3">Cleanup</h3><p className="text-muted leading-7">Reconciliations are behind, categories have drifted or old transactions need review before a repeatable routine can start.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/sage" title="Talk to Us About Consolidation" label="Ask us about consolidation"><h3 className="font-bold text-primary text-xl mb-3">Consolidation</h3><p className="text-muted leading-7">Multi-company or multi-location structures need intercompany reconciliations handled consistently before group reporting can be trusted.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/sage" title="Talk to Us About Capacity" label="Ask us about capacity"><h3 className="font-bold text-primary text-xl mb-3">Capacity</h3><p className="text-muted leading-7">Your team knows Sage, but recurring bookkeeping keeps competing with higher-value work each close cycle.</p></InquiryTrigger></div></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-8">Connect Sage to the accounting work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/bookkeeping/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Bookkeeping</Link><Link href="/services/accounting/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Accounting Services</Link><Link href="/services/accounts-payable/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Accounts Payable</Link><Link href="/technology" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">All Platforms</Link></div></div></section>

      <FAQSection subtitle="Sage FAQs" items={faqs} columns={2} />

      <InquirySection source="/technology/sage" title="Talk to Us About Your Sage Workload" lead="A free consultation, and a call that costs nothing. Tell us how Sage is set up across your entities and where the intercompany work is getting stuck." compact />

      <CTABanner
        title="What Is Actually Going Wrong in Your Sage Workflow?"
        description="Tell us whether the issue is cleanup, reconciliations, consolidation or simply a lack of capacity."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
