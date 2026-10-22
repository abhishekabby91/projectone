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
  title: 'Xero Accounting Services & Support',
  description: 'Xero accounting services for bookkeeping, reconciliations, cleanup, payables, receivables and month-end reporting inside your existing Xero organisation.',
  path: '/technology/xero',
});

export default function XeroPage() {
  const faqs = platformDepth.xero.faqs;

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Technology', url: `${baseUrl}/technology` },
    { name: 'Xero', url: `${baseUrl}/technology/xero` },
  ]);

  const workflows = [
    'Transaction coding and bank-feed review inside your existing Xero organisation',
    'Bank and credit-card reconciliations, including statement-balance checks',
    'Accounts payable and receivable processing, with exceptions flagged for review',
    'Historical cleanup and reconciliation of opening balances',
    'Month-end schedules and reporting preparation',
    'Tracking-category and foreign-currency review where already in use',
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero subtitle="Xero Accounting Services & Workflow Support" title="Xero Accounting Support for Recurring Work" description="Accounting support around Xero, from cleanup and reconciliations to recurring bookkeeping, AP/AR and month-end reporting in your existing organization." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View Services', href: '/services' }} background="primary-gradient" />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">What buyers usually care about</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Xero accounting services start with the records behind the bank feed.</h2><p className="text-lg text-muted leading-8">Xero accounting services are most useful when the organisation is already in place but recurring work needs consistent attention: transaction coding, statement-level reconciliation, accounts payable and receivable, exception tracking and month-end schedules. A feed marked as reconciled is not, by itself, proof that the account agrees to the statement. The accounting routine still needs supporting records, review and a clear owner for decisions.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-3 mb-8"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Who this supports</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Xero support for accounting firms and businesses</h2><p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">The work takes place inside the Xero organisation already in use. Scope depends on who owns the client relationship and who reviews the accounting output.</p></></Reveal><div className="grid grid-cols-1 md:grid-cols-2 gap-5"><div className="rounded-2xl border border-border bg-input p-6 sm:p-7"><h3 className="text-xl font-bold text-primary">For CPA and accounting firms</h3><p className="mt-3 text-muted leading-7">Use an outsourcing partner for recurring Xero bookkeeping, reconciliations and supporting schedules when internal capacity is tight. Your firm retains the client relationship, professional judgement, review and sign-off; unresolved items are returned for a decision rather than silently assumed.</p><Link href="/industries/cpa-firms" className="mt-4 inline-flex font-semibold text-primary underline underline-offset-4">Accounting outsourcing for CPA firms</Link></div><div className="rounded-2xl border border-border bg-input p-6 sm:p-7"><h3 className="text-xl font-bold text-primary">For businesses using Xero</h3><p className="mt-3 text-muted leading-7">Support can cover transaction coding, bank and card reconciliations, AP/AR processing, month-end schedules and reporting preparation. Access, approvals and items requiring management input are agreed before work begins.</p><Link href="/services/accounting/united-states" className="mt-4 inline-flex font-semibold text-primary underline underline-offset-4">Accounting support services</Link></div></div></div></section><section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Work Around Xero</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/technology/xero"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Common starting points</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary">When Xero support becomes useful</h2></></Reveal><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/xero" title="Talk to Us About Cleanup" label="Ask us about cleanup"><h3 className="font-bold text-primary text-xl mb-3">Cleanup</h3><p className="text-muted leading-7">Reconciliations are behind or the chart of accounts and transaction coding have become difficult to review. The first step is to understand the exceptions, not just clear the screen.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/xero" title="Talk to Us About Capacity" label="Ask us about capacity"><h3 className="font-bold text-primary text-xl mb-3">Capacity</h3><p className="text-muted leading-7">The existing team understands Xero but does not have enough time to keep recurring work moving. Additional preparation capacity can protect the close without changing the system.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/xero" title="Talk to Us About Close" label="Ask us about close"><h3 className="font-bold text-primary text-xl mb-3">Close</h3><p className="text-muted leading-7">Month-end repeatedly slips because reconciliations, schedules and exceptions are left until the end of the cycle. A clear routine makes the problem visible earlier.</p></InquiryTrigger></div></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-8">Connect Xero to the accounting work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/bookkeeping/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Bookkeeping</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/resources/guides/quickbooks-vs-xero-comparison" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">QuickBooks vs Xero</Link><Link href="/technology" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">All Platforms</Link></div></div></section>


      <PlatformDepthSection platform={platformDepth.xero} />

      <FAQSection subtitle="Xero FAQs" items={faqs} columns={2} />
      <InquirySection source="/technology/xero" title="Talk to Us About Your Xero Workload" lead="Tell us how the Xero ledgers are kept today and where the bank feed stops being enough." compact />

      <CTABanner title="Where Is Your Xero Workflow Getting Stuck?" description="Tell us whether the issue is cleanup, reconciliation, recurring bookkeeping, month-end or simply a lack of capacity." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
