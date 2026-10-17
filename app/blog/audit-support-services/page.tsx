import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Audit Support: What Can Be Delegated',
  description: 'Working papers, evidence organisation and schedule preparation — what audit support actually covers, and where auditor judgment stays put.',
  path: '/blog/audit-support-services',
});

const faqs = [
  {
    question: 'What audit work can be outsourced, and what cannot?',
    answer:
      'Preparation can be delegated; judgment cannot. Organising evidence, preparing lead schedules and account analyses, tying out workpapers, reconciling subledgers to the general ledger and populating the prepared-by-client request list are preparation tasks. Audit planning, risk assessment, sampling decisions, evaluation of management representations, conclusions on account balances, disclosure review and signing the report belong to the licensed auditor and cannot be delegated to anyone, offshore or otherwise.',
  },
  {
    question: 'Does outsourced audit preparation affect the auditor\'s independence?',
    answer:
      'Preparation is management\'s responsibility, and handing it to an outsourced team does not change what the auditor is required to test. Management-prepared schedules are audited rather than accepted at face value. UK statutory audits carry additional independence requirements that prevent the auditor from preparing the financial statements, which is a separate question from who prepares the supporting schedules for management.',
  },
  {
    question: 'What can be prepared before audit fieldwork begins?',
    answer:
      'Working from the draft financial statements and the prior-year file: balance sheet account reconciliations, the fixed asset rollforward and depreciation schedules, debt and equity schedules, year-over-year profit and loss flux analyses, payroll reconciliation to the general ledger, and closing out prior-year open items. When auditors arrive to an organised file, their time goes on evaluating rather than waiting.',
  },
  {
    question: 'Which audit request areas does preparation usually cover?',
    answer:
      'Cash, with reconciliations for every account and listings of outstanding cheques and deposits in transit; receivables, with the aging schedule, rollforward and confirmation list; payables, with the aging, rollforward, vendor statement reconciliations and the search for unrecorded liabilities; fixed assets, with the rollforward and support for significant additions; payroll, reconciled to the general ledger; and revenue, with the rollforward and deferred revenue reconciliation.',
  },
  {
    question: 'Can audit support prepare files for an Australian SMSF audit?',
    answer:
      'Working papers and evidence can be prepared for review by the registered SMSF auditor, which is a common arrangement for Australian accounting firms. The audit itself, and the opinion, remain the registered auditor\'s. Australian auditing standards are issued by the AUASB and are based on the international standards.',
  },
];

export default function AuditSupportBlog() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="Audit Support Outsourcing: What Preparation Work Can Be Delegated (and What Cannot)"
      category="Audit Support"
      description="What the audit support team prepares vs. what the auditor or CPA judges — and how the boundary is drawn in UK, US, and Australian audit contexts."
      publishedDate="2026-08-14"
      section="blog"
      slug="audit-support-services"
      inquiryTitle="Talk to Us About Your Audit Preparation"
      inquiryLead="Tell us where the PBC list stalls — schedules, reconciliations or evidence requests — and we will scope the preparation work that can move without touching the assurance opinion."
    >
      <p>
        Audit support outsourcing operates at a clear boundary: preparation work can be delegated; judgment work cannot. Organizing evidence, preparing schedules, tying out workpapers, and formatting the file for auditor review are all preparation tasks that an experienced accounting team can handle. The auditor&rsquo;s own professional judgment on materiality, risk assessment, sampling, and conclusions cannot be delegated to anyone — offshore or otherwise.
      </p>
      <p>
        The practical use case for CPA firms and finance teams: audit preparation is time-consuming, often tedious, and frequently underresourced. The audit team arrives, requests 60 items, and the finance team scrambles to produce them while continuing their regular work. An outsourced audit support team can be pre-positioned to prepare the standard request list before fieldwork begins.
      </p>

      <h2>What Audit Support Preparation Includes</h2>
      <ul>
        <li>Preparing standard audit schedules: lead schedules, account analyses, flux analyses</li>
        <li>Organizing supporting documentation for common audit areas (cash, AR, AP, fixed assets, payroll, equity)</li>
        <li>Preparing bank reconciliations and confirming they tie to financial statement balances</li>
        <li>Populating PBC (Prepared by Client) request lists before fieldwork begins</li>
        <li>Organizing contracts, invoices, agreements, and board minutes requested as audit evidence</li>
        <li>Reconciling subledgers to the general ledger for all major balance sheet accounts</li>
        <li>Preparing depreciation schedules and fixed asset rollforwards</li>
        <li>Preparing debt covenant compliance calculations where applicable</li>
      </ul>
      <p>
        <strong>What stays with the licensed CPA or auditor:</strong> Audit planning, risk assessment, sampling decisions, evaluation of management representations, conclusions on account balances, disclosure review, and signing the audit report. No preparation work changes or bypasses these professional responsibilities.
      </p>

      <h2>Common Audit Request Areas and What the Team Prepares</h2>
      <p><strong>Cash:</strong> Bank reconciliations for all accounts, confirmation of closing balances, listing of outstanding checks and deposits in transit, analysis of unusual transactions.</p>
      <p><strong>Accounts Receivable:</strong> AR aging schedule, rollforward from prior year, confirmation list preparation, analysis of subsequent collections, bad debt allowance calculation support.</p>
      <p><strong>Accounts Payable:</strong> AP aging schedule, rollforward, vendor statement reconciliations, search for unrecorded liabilities (reviewing post-period vendor invoices).</p>
      <p><strong>Fixed Assets:</strong> Fixed asset rollforward (additions, disposals, depreciation), supporting documentation for significant additions, gain/loss on disposal calculations.</p>
      <p><strong>Payroll:</strong> Payroll testing schedules, reconciliation of payroll register to GL, benefits expense analysis, key employee verification support.</p>
      <p><strong>Revenue:</strong> Revenue rollforward, sample transaction support, deferred revenue reconciliation, cut-off testing support.</p>

      <h2>Standards Context</h2>
      <p><strong>US (GAAS/PCAOB):</strong> Generally Accepted Auditing Standards (for private company audits) and PCAOB standards (for public companies) define what the auditor must do independently. Preparation assistance speeds up the process and reduces auditor time — it does not change what the auditor is required to test. Audit committees should understand that management-prepared schedules are audited, not accepted at face value.</p>
      <p><strong>UK (FRC/ISAs):</strong> UK audits follow International Standards on Auditing as adopted by the FRC. The same principle applies: preparation is management&rsquo;s responsibility; the auditor&rsquo;s independent assessment is theirs alone. UK statutory audits have additional requirements for auditor independence that prohibit the auditor from preparing the financial statements themselves.</p>
      <p><strong>Australia (AUASB/ASAs):</strong> Auditing Standards (ASAs) issued by the AUASB are based on ISAs. The SMSF audit market in Australia has a specific outsourced preparation role — preparing the working papers and evidence for the registered SMSF auditor&rsquo;s review, which is a common use case for Australian accounting firms.</p>

      <h2>How to Pre-Position for Audit Season</h2>
      <p>The most effective use of outsourced audit support is pre-fieldwork preparation: the audit support team works from the draft financial statements and prior-year audit file to prepare the standard PBC request list before the auditors arrive. Items typically preparable before fieldwork begins:</p>
      <ul>
        <li>All balance sheet account reconciliations</li>
        <li>Fixed asset rollforward and depreciation schedules</li>
        <li>Debt and equity schedules</li>
        <li>Standard flux analyses (year-over-year P&amp;L movements)</li>
        <li>Payroll reconciliation to GL</li>
        <li>Prior-year open items closed</li>
      </ul>
      <p>When auditors arrive with a pre-prepared, organized file, fieldwork is faster and audit fees are often lower — because auditor time is spent evaluating rather than waiting for client schedules.</p>

      <div className="mt-8 p-6 bg-input rounded-xl border border-border/70">
        <p className="font-semibold text-primary mb-3">Relevant services</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/services/audit-support/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Audit Support</Link>
          <Link href="/services/audit-support/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">U.S. Audit Support</Link>
          <Link href="/services/audit-support/united-kingdom" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">UK Audit Support</Link>
          <Link href="/services/audit-support/australia" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Australian Audit Support</Link>
          <Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">CPA Firms</Link>
          <Link href="/services/accounting/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounting Services</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
