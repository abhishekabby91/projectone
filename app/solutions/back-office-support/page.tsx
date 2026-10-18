import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';
import FurtherReading from '@/components/further-reading';
import SolutionIllustration from '@/components/solution-illustration';

export const metadata: Metadata = generateMetadata({
  title: 'Back-Office Support for Accountants and Firms',
  description: 'Hand over the recurring back-office layer — bookkeeping, payables, receivables and payroll preparation — while review and sign-off stay with your firm.',
  path: '/solutions/back-office-support',
});

const faqs = [
  {
    question: 'What is included in back office support?',
    answer: 'Recurring back-office accounting operations: bookkeeping, payroll processing, accounts payable/receivable, month-end close, and account maintenance.',
  },
  {
    question: 'Can you work inside our existing systems?',
    answer: 'Yes, we work inside QuickBooks, Xero, NetSuite, Sage, and similar platforms your firm or your client already uses. Data migration and initial system setup are typically handled by your software vendor or an implementation partner.',
  },
  {
    question: 'Does back-office support include HR functions?',
    answer: 'It includes the payroll-related accounting work: payroll processing, payroll tax withholding, and payroll reporting. Broader HR functions such as benefits administration, employment compliance, and regulatory filings sit with your HR provider or in-house team.',
  },
  {
    question: 'How do you ensure quality and accuracy?',
    answer: 'Multi-level QA processes, senior accountant reviews, automated controls, and monthly reconciliations are built into the workflow to catch errors before work reaches you.',
  },
  {
    question: 'Can we customize which functions you handle?',
    answer: 'Yes. You choose which back-office functions you want us to handle — some clients outsource everything, others select specific areas.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
  { name: 'Back Office Support', url: `${baseUrl}/solutions/back-office-support` },
]);

export default function BackOfficeSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Back Office Support"
        title="Back-Office Support for the Work That Repeats Every Month"
        description="Take recurring accounting administration off your team's plate: bookkeeping, payroll processing, payables, and receivables."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      {/* Drawn for this page — see components/solution-illustration.tsx. */}

      <section className="w-full pt-8 md:pt-12 px-6 md:px-8 bg-white">

        <div className="max-w-5xl mx-auto flex justify-center">

          <div className="w-full max-w-[19rem] text-primary" role="img" aria-label="Back-office support">

            <SolutionIllustration name="back-office" />

          </div>

        </div>

      </section>


      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Reveal><h2 className="text-4xl font-bold text-primary">Recurring Accounting Administration Outsourced</h2></Reveal>
              <p className="text-lg text-muted leading-relaxed">Back-office support takes recurring accounting administration off your team's plate so they can focus on review, clients, and growth instead of data entry.</p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Complete accounting operations',
                  'Payroll processing and payroll tax withholding',
                  'Accounts payable and receivable',
                  'Account maintenance and reconciliations',
                  'Month-end reporting and trend summaries',
                  'Documented, repeatable close process',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">What We Handle</h3>
              <div className="space-y-3 text-sm">
                {[
                  'Daily transaction recording and reconciliation',
                  'Monthly close and financial statements',
                  'Payroll processing and tax withholding',
                  'Invoice processing and vendor management',
                  'Customer billing and collections',
                  'Payroll reporting and recordkeeping',
                  'Account reconciliations and maintenance',
                  'Month-end reporting and trend summaries',
                ].map((item, i) => (
                  <p key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><h2 className="text-4xl font-bold text-primary text-center mb-12">Back Office Service Model</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Recurring workflows run by people dedicated to them',
                  'Eliminate payroll tax headaches',
                  'Support compliance across the regions you operate in',
                  'Improve cash flow management',
                  'Access real-time financial data',
                  'Scale operations without hiring',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">→</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">Onboarding</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-foreground">Discovery</div>
                  <p className="text-sm text-muted">Your processes, conventions, deadlines, reviewers and recurring exceptions, documented</p>
                </div>
                <div>
                  <div className="font-bold text-foreground">Soft launch</div>
                  <p className="text-sm text-muted">A first cycle worked inside your existing setup, reviewed closely, corrections written back into the workflow</p>
                </div>
                <div>
                  <div className="font-bold text-foreground">Steady state</div>
                  <p className="text-sm text-muted">The recurring work runs to the agreed rhythm, with review and sign-off staying with you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><h2 className="text-xl font-bold text-primary mb-4">Related Accounstone solutions</h2><div className="flex flex-wrap gap-3"><Link href="/solutions/offshore-accounting-support" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Offshore Accounting Support <ArrowRight size={14} /></Link><Link href="/solutions/dedicated-accounting-teams" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Dedicated Accounting Teams <ArrowRight size={14} /></Link><Link href="/resources/guides/choosing-an-engagement-model" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium">Compare All 4 Models <ArrowRight size={14} /></Link></div></div></section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">For accounting firms</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Back-Office Support When the Firm Is the Client
            </h2>
          </></Reveal>
          <Reveal className="space-y-4">
            <>
              <p className="text-base md:text-lg text-muted leading-relaxed">Most writing about back-office support assumes the reader is a business handing off its own admin. A large share of the people looking for it are accounting firms, and their problem is a different shape: the recurring work is not their own, it belongs to a portfolio of clients, and it has to come back in a state a reviewer can sign.</p>
              <p className="text-base md:text-lg text-muted leading-relaxed">That changes what &ldquo;handing over a function&rdquo; means in practice. A firm is not trying to stop thinking about bookkeeping. It is trying to stop having qualified staff spend December re-coding transactions so that the same staff can spend December on review, advisory conversations and the client relationship &mdash; the parts of the engagement that are not delegable and that clients are actually paying for.</p>
              <h3 className="font-bold text-primary text-lg pt-2">What tends to move first</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">The recurring, rules-driven layer: transaction coding and reconciliations across the portfolio, payables and receivables processing, payroll preparation, account maintenance, and the standing month-end tasks that repeat identically across many clients. These carry the most volume and the least judgment, which is exactly the ratio that makes delegation worth the handover cost.</p>
              <h3 className="font-bold text-primary text-lg pt-2">What generally should not</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">Anything where your firm&rsquo;s name is the product: review, sign-off, the advisory conversation, the client relationship, and the judgment calls that sit behind a set of accounts. A back-office arrangement that quietly absorbs those has not saved the firm capacity &mdash; it has moved the firm&rsquo;s liability somewhere it cannot see it.</p>
              <div className="overflow-hidden rounded-xl border border-border bg-white">
                <div className="border-l-4 border-accent p-5 sm:p-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">The measure worth agreeing up front</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">Not turnaround. Review time. If a delegated file still takes your reviewer as long to sign as it did when your own team prepared it, the arrangement has moved cost rather than removed it &mdash; and that shows up in the first month if anyone is measuring it.</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">It is a more uncomfortable metric than volume, and a more useful one.</p>
                </div>
              </div>
            </>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="Back Office Support" items={faqs} columns={2} />

      <FurtherReading

        topics={['Engagement models']}

        exclude="/solutions/back-office-support"

        background="white"

      />

      <InquirySection source="/solutions/back-office-support" title="Talk to Us About Handing Over a Whole Function" lead="A free consultation, and a call that costs nothing. Tell us which recurring function you want to stop running in-house and we will scope the handover." />

      <CTABanner
        title="Ready to Outsource Your Back Office?"
        description="Let us handle the recurring operations so your people stay on the work that needs them."
        cta={{
          text: 'Start Back Office Support',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
