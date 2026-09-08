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
  title: 'Xero Accounting Support for Growing Businesses',
  description: 'Xero support for cleanup, bookkeeping, reconciliations, AP/AR and recurring reporting inside the Xero file your client already runs.',
  path: '/technology/xero',
});

export default function XeroPage() {
  const faqs = [
    { question: 'Can you set up Xero for our business?', answer: 'Yes. Setup support can include organization settings, chart of accounts, users, permissions, opening balances and the workflow needed for recurring bookkeeping.' },
    { question: 'What accounting work can you support in Xero?', answer: 'Support can include bookkeeping, bank reconciliation, AP/AR workflows, reporting preparation, month-end tasks and ongoing account maintenance.' },
    { question: 'Can Xero support businesses in different markets?', answer: 'Xero is used across multiple markets. Our role is to support the accounting workflow in the client’s existing setup; local tax and compliance decisions remain with the appropriate professional.' },
    { question: 'What if Xero is connected but the reconciliations are still behind?', answer: 'Cloud access makes the file easier to reach, but it does not remove the recurring work. We can review unreconciled items, identify exceptions and help establish a routine that makes the backlog less likely to return.' },
    { question: 'Can you migrate data to Xero?', answer: 'Migration support can include preparation, data-transfer coordination, setup checks and post-migration reconciliation. The exact method depends on the source system and data quality.' },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Technology', url: `${baseUrl}/technology` },
    { name: 'Xero', url: `${baseUrl}/technology/xero` },
  ]);

  const workflows = [
    'Xero organization and chart-of-accounts setup',
    'Transaction processing and bank-feed review',
    'Bank and credit-card reconciliation',
    'Accounts payable and receivable workflows',
    'Cleanup and historical corrections',
    'Month-end close and reporting preparation',
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero subtitle="Platform Workflow Support" title="Xero Accounting Support" description="Help with the accounting work around Xero — from setup and cleanup to reconciliations, recurring bookkeeping and month-end." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View Services', href: '/services' }} background="primary-gradient" />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">What buyers usually care about</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Xero makes the books accessible. It does not make the process automatic.</h2><p className="text-lg text-muted leading-8">Cloud accounting removes a lot of friction around access, but the underlying work is still there: reconciliations, exception handling, consistent coding, supporting records and a close process someone owns. Good Xero support is less about adding another tool and more about keeping the accounting routine dependable.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Work Around Xero</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/technology/xero"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Common starting points</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary">When Xero support becomes useful</h2></></Reveal><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/xero" title="Talk to Us About Cleanup" label="Ask us about cleanup"><h3 className="font-bold text-primary text-xl mb-3">Cleanup</h3><p className="text-muted leading-7">Reconciliations are behind or the chart of accounts and transaction coding have become difficult to review. The first step is to understand the exceptions, not just clear the screen.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/xero" title="Talk to Us About Capacity" label="Ask us about capacity"><h3 className="font-bold text-primary text-xl mb-3">Capacity</h3><p className="text-muted leading-7">The existing team understands Xero but does not have enough time to keep recurring work moving. Additional preparation capacity can protect the close without changing the system.</p></InquiryTrigger><InquiryTrigger className="p-7 rounded-2xl bg-input border border-border/70 transition-colors hover:border-primary/40" source="/technology/xero" title="Talk to Us About Close" label="Ask us about close"><h3 className="font-bold text-primary text-xl mb-3">Close</h3><p className="text-muted leading-7">Month-end repeatedly slips because reconciliations, schedules and exceptions are left until the end of the cycle. A clear routine makes the problem visible earlier.</p></InquiryTrigger></div></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-8">Connect Xero to the accounting work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/bookkeeping/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Bookkeeping</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/resources/guides/quickbooks-vs-xero-comparison" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">QuickBooks vs Xero</Link><Link href="/technology" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">All Platforms</Link></div></div></section>

      <FAQSection subtitle="Xero FAQs" items={faqs} columns={2} />
      <InquirySection source="/technology/xero" title="Talk to Us About Your Xero Workload" lead="A free consultation, and a call that costs nothing. Tell us how the Xero ledgers are kept today and where the bank feed stops being enough." compact />

      <CTABanner title="Where Is Your Xero Workflow Getting Stuck?" description="Tell us whether the issue is cleanup, reconciliation, recurring bookkeeping, month-end or simply a lack of capacity." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
