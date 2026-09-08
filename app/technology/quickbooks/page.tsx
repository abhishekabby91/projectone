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
  title: 'QuickBooks Online Accounting Support',
  description: 'QuickBooks Online support for cleanup, bookkeeping, reconciliations, reporting and recurring accounting workflows inside your existing file.',
  path: '/technology/quickbooks',
});

export default function QuickBooksPage() {
  const faqs = platformDepth.quickbooks.faqs;

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Technology', url: `${baseUrl}/technology` },
    { name: 'QuickBooks', url: `${baseUrl}/technology/quickbooks` },
  ]);

  const workflows = [
    'Initial setup and chart-of-accounts review',
    'Transaction processing and categorization',
    'Bank and credit-card reconciliation',
    'Accounts payable and receivable workflows',
    'Cleanup and historical corrections',
    'Month-end close and reporting preparation',
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero subtitle="Platform Workflow Support" title="QuickBooks Online Accounting Support" description="Help with the accounting work around QuickBooks Online — from setup and cleanup to reconciliations, month-end and reporting." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View Services', href: '/services' }} background="primary-gradient" />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">What buyers usually care about</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">QuickBooks is the system. Someone still has to make the books make sense.</h2><p className="text-lg text-muted leading-8">A QuickBooks file can be accessible to everyone and still be difficult to trust at month-end. Transactions need to be categorized, accounts reconciled, exceptions explained and supporting records kept in a way another person can follow. The real question is not whether QuickBooks can do the job. It is whether the accounting routine around it is being followed consistently.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Work Around QuickBooks</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/technology/quickbooks"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Common starting points</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary">The software may not be the problem</h2></></Reveal><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/quickbooks" title="Talk to Us About Cleanup" label="Ask us about cleanup"><h3 className="font-bold text-primary text-xl mb-3">Cleanup</h3><p className="text-muted leading-7">Reconciliations are behind, categories have drifted or old transactions need review. The first step is understanding what can be corrected and what needs a decision.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/quickbooks" title="Talk to Us About Capacity" label="Ask us about capacity"><h3 className="font-bold text-primary text-xl mb-3">Capacity</h3><p className="text-muted leading-7">Your team knows the process, but recurring bookkeeping keeps competing with higher-value work. Additional preparation capacity can protect the close without changing the system.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/quickbooks" title="Talk to Us About Close" label="Ask us about close"><h3 className="font-bold text-primary text-xl mb-3">Close</h3><p className="text-muted leading-7">Month-end becomes a catch-up exercise because reconciliations, schedules and unresolved questions arrive together. A clearer recurring routine can change that.</p></InquiryTrigger></div></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-8">Connect QuickBooks to the accounting work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/bookkeeping/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Bookkeeping</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/resources/guides/quickbooks-vs-xero-comparison" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">QuickBooks vs Xero</Link><Link href="/technology" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">All Platforms</Link></div></div></section>


      <PlatformDepthSection platform={platformDepth.quickbooks} />

      <FAQSection subtitle="QuickBooks FAQs" items={faqs} columns={2} />
      <InquirySection source="/technology/quickbooks" title="Talk to Us About Your QuickBooks Workload" lead="A free consultation, and a call that costs nothing. Tell us what the QuickBooks file looks like now — reconciliations behind, categories drifted, close slipping — and we will scope from there." compact />

      <CTABanner title="What Is Actually Going Wrong in Your QuickBooks Workflow?" description="Tell us whether the issue is cleanup, reconciliations, recurring bookkeeping, month-end or simply a lack of capacity." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
