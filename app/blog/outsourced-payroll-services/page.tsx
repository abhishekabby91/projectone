import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Payroll: Costs and Red Flags',
  description: 'What outsourced payroll costs by headcount in the US, UK and Australia, and the bank-access line that should never move, whoever runs the payroll.',
  path: '/blog/outsourced-payroll-services',
});

const faqs = [
  {
    question: 'Does an outsourced payroll team need access to your bank account?',
    answer:
      'No, and this is the line that should not move. The payroll team prepares the pay run and the payment file; an authorised person inside your business reviews the pre-run summary and initiates or approves the payment itself. Bank account access, direct-deposit authorisation and payment execution stay with you. A provider asking for banking credentials or payment execution authority is asking for something the work does not require.',
  },
  {
    question: 'What is not included in outsourced payroll processing?',
    answer:
      'HR strategy, benefits administration, employment law advice and the contractor-versus-employee classification decision. Those stay with your management team or your employment lawyer. The recurring work that can be handed over is calculating gross pay, applying withholdings and deductions, generating payslips, submitting the run and reconciling the payroll ledger entries against the register.',
  },
  {
    question: 'What happens if payroll runs late?',
    answer:
      'Agree a timesheet cut-off and an escalation path before the first run rather than after a missed one. Late timesheets produce late payroll, and the consequence lands on employees. Writing down the cut-off, who chases it and what happens when it slips turns a recurring argument into a process.',
  },
  {
    question: 'Can an outsourced payroll team handle equity compensation?',
    answer:
      'Not the tax treatment. Restricted stock vesting, option exercises and how they are taxed are determined through your equity platform and your tax adviser. Once that determination exists, the payroll team can process the resulting withholding correctly in the pay run.',
  },
  {
    question: 'How are contractor payments handled?',
    answer:
      'Classification comes first and is not a payroll decision: whether someone is a contractor or an employee is a call for your employment lawyer. Once classified, contractor payments can be processed alongside payroll but through the right route for the jurisdiction — 1099 reporting in the US, ABN invoices in Australia, IR35 determinations in the UK.',
  },
];

export default function PayrollOutsourcingBlog() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="Outsourced Payroll: Costs, Bank-Access Red Flags, and What to Watch Out For"
      category="Payroll"
      description="Per-employee cost ranges for the US, UK, and Australia, the bank-access line that should never move, and the watch-outs that come up in real onboarding calls."
      publishedDate="2026-08-14"
      section="blog"
      slug="outsourced-payroll-services"
      inquiryTitle="Talk to Us About Your Payroll Run"
      inquiryLead="Tell us the headcount, the pay frequency and the provider you already run in, and we will scope the payroll preparation work — without asking for banking control."
    >
      <p>Payroll is one of the more emotionally charged outsourcing decisions for business owners — employees are paid on time or they&rsquo;re not, and the consequences of &ldquo;not&rdquo; are immediate. The hesitation is understandable, but the actual risks of well-structured outsourced payroll are much lower than the risks of a payroll process that depends entirely on one busy person remembering to run it on time every fortnight.</p>

      <h2>What Outsourced Payroll Processing Includes</h2>
      <p>
        The recurring work: calculating gross pay, applying tax withholdings and deductions, generating payslips, submitting the payroll run, and reconciling payroll GL entries against the register. It does not include HR strategy, benefits administration, employment law advice, or the contractor-vs-employee classification call — those stay with your management team or employment attorney. See our{' '}
        <Link href="/resources/guides/outsourced-payroll-processing-guide" className="text-primary font-medium hover:underline">payroll processing guide</Link>{' '}for the full jurisdiction-by-jurisdiction breakdown of what's in and out of scope.
      </p>

      <h2>Jurisdiction-Specific Compliance</h2>
      <p><strong>US:</strong> Federal (FICA, FUTA, W-4 withholding) + state (income tax, SUTA, state-specific programs like California SDI or New York PFL). Quarterly 941 filings, annual 940 and W-2s. Multi-state remote employees create nexus questions — your tax advisor determines nexus, the payroll team processes per that determination.</p>
      <p><strong>UK:</strong> PAYE with RTI submissions required with every payroll run — late RTI triggers HMRC penalties. NI contributions (12% employee, 13.8% employer above thresholds). Auto-enrolment workplace pension obligations. Statutory payments (SSP, SMP, SPP) calculated separately.</p>
      <p><strong>Australia:</strong> STP Phase 2 — Single Touch Payroll reporting to the ATO with each pay run. Superannuation guarantee at 12% (from July 2025) paid quarterly. PAYG withholding remitted to the ATO monthly or quarterly. Award rates and penalty rates for award-covered employees require correct classification.</p>

      <h2>Software Workflows</h2>
      <p><strong>QuickBooks Payroll (US):</strong> Integrates directly with QBO GL. Payroll team enters approved hours/salaries, runs payroll, confirms the pre-run summary. Your authorized person approves and submits. Direct deposit is initiated by your signatory, not the payroll team.</p>
      <p><strong>Xero Payroll (US, UK, AU):</strong> Same core workflow across regions, different tax engines. Payroll team manages employee records, pay calendars, processes each pay run through the approval stage. You approve; payslips distribute from Xero.</p>
      <p><strong>Gusto (US):</strong> Gusto handles federal and state tax filings automatically. The payroll team prepares and submits runs; verifies quarterly 941s and annual W-2s reconcile to Gusto records. Gusto&rsquo;s employer-of-record product is separate from standard payroll.</p>
      <p><strong>MYOB (Australia):</strong> STP Phase 2 compliant. Payroll team processes pay runs, confirms STP lodgments, reconciles PAYG withholding, maintains superannuation records.</p>

      <h2>The Hard Line: Bank Access</h2>
      <p>The outsourced payroll team prepares the payroll run and the payment file. An authorized person inside your business — owner, controller, or signatory — reviews the pre-run summary and initiates or approves the actual payment. Bank account access, direct-deposit authorization, and payment execution stay with you. This is non-negotiable. If a payroll provider asks for your banking credentials or payment execution authority, decline.</p>

      <h2>Cost by Jurisdiction</h2>
      <p><strong>US:</strong> Offshore outsourced payroll: $4–$10/employee/month. Local US bookkeeper/bureau: $15–$30/employee/month. National SaaS platforms (Gusto, Rippling): $6–$12/employee/month software cost plus your time.</p>
      <p><strong>UK:</strong> Offshore: £8–£15/employee/month. UK payroll bureau: £20–£40/employee/month.</p>
      <p><strong>Australia:</strong> Offshore: A$10–A$20/employee/month. Local bureau/bookkeeper: A$25–A$50/employee/month.</p>

      <div className="mt-8 p-6 bg-input rounded-xl border border-border/70">
        <p className="font-semibold text-primary mb-3">Relevant services</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/services/payroll/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Payroll Processing</Link>
          <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Xero</Link>
          <Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">MYOB</Link>
          <Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">U.S. Market</Link>
          <Link href="/markets/united-kingdom" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">UK Market</Link>
          <Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Australia Market</Link>
          <Link href="/resources/guides/outsourced-payroll-processing-guide" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Full Payroll Guide</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
