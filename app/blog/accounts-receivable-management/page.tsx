import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Outsourcing Accounts Receivable: A Guide',
  description: 'How AR outsourcing affects DSO, how follow-up works in QuickBooks and Xero, and the questions owners and CPA firms ask before delegating it.',
  path: '/blog/accounts-receivable-management',
});

const faqs = [
  {
    question: 'What does an outsourced accounts receivable team actually do?',
    answer:
      'Raising and sending customer invoices on schedule, applying payments as they arrive, tracking outstanding balances and aging, following up on overdue accounts against a defined schedule, reconciling customer accounts and resolving misapplied payments, and preparing aging summaries for review. It is the recurring process work rather than the decisions attached to it.',
  },
  {
    question: 'Which receivables decisions stay with the business?',
    answer:
      'Credit limits and credit holds, write-off authority, referrals to a collections agency, customer contract terms that affect invoicing, and any dispute that turns on the customer relationship rather than on a factual error. The receivables team runs the process; the judgment calls about a customer stay with you.',
  },
  {
    question: 'What does a workable overdue follow-up schedule look like?',
    answer:
      'A common three-stage pattern is an automated reminder at seven days past due, a direct follow-up from the receivables team at twenty-one days, and escalation to your internal team or account manager at forty-five days. The escalation is not a failure of the process — it is the correct handoff at the point where relationship context matters more than a reminder.',
  },
  {
    question: 'Can accounts receivable be outsourced if invoicing is unreliable?',
    answer:
      'Not usefully, and it is worth fixing first. Follow-up only works when the invoices going out are accurate and on time; chasing a wrong invoice produces a dispute rather than a payment. Where invoicing is the weak point, that is the part to bring under a defined process before the collections schedule is worth running.',
  },
  {
    question: 'Can an outsourced AR team charge statutory interest on late UK invoices?',
    answer:
      'No. In the UK, the Late Payment of Commercial Debts legislation gives a business the right to charge statutory interest on overdue business-to-business payments, but whether to exercise that right against a particular customer is a commercial decision for you. The receivables team can identify which invoices qualify and prepare the calculation; applying it is yours.',
  },
];

export default function ARManagementBlog() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="Outsourcing Accounts Receivable: A Practical Guide for Business Owners"
      category="Accounts Receivable"
      description="DSO, follow-up schedules, software workflows, and the judgment calls that always stay with you."
      publishedDate="2026-08-14"
      section="blog"
      slug="accounts-receivable-management"
      inquiryTitle="Talk to Us About Your Aging Ledger"
      inquiryLead="Tell us how invoicing, cash application and follow-up run today, and how far the aging has drifted, and we will scope the receivables work around your billing cycle."
    >
      <p>The cash flow argument for outsourced AR is usually straightforward: a business with $400K/month in revenue and a 50-day DSO has $667K tied up in receivables. Reducing DSO to 35 days — achievable with consistent follow-up — frees roughly $200K in working capital. That&rsquo;s often more than the annual cost of the AR service itself.</p>
      <p>The harder part is the process design. AR outsourcing only works if the invoices going out are accurate and on time. An AR team following up on a wrong invoice creates a dispute, not a payment.</p>

      <h2>What the AR Team Handles</h2>
      <ul>
        <li>Creating and sending customer invoices on schedule</li>
        <li>Applying payments when received (cash application)</li>
        <li>Tracking outstanding balances and aging</li>
        <li>Following up on overdue accounts per a defined collections schedule</li>
        <li>Reconciling customer accounts and resolving misapplied payments</li>
        <li>Preparing aging summaries for management review</li>
      </ul>
      <p>What stays with you: credit limit decisions, write-off authority, collections agency referrals, and any dispute requiring a relationship judgment. The AR team handles process; you make judgment calls.</p>

      <h2>The Follow-Up Schedule That Actually Works</h2>
      <p>A standard three-stage follow-up:</p>
      <ul>
        <li><strong>7 days past due:</strong> Automated reminder (QBO or Xero can send these automatically)</li>
        <li><strong>21 days past due:</strong> Direct follow-up from the AR team — email, or phone if agreed in scope</li>
        <li><strong>45 days past due:</strong> Escalation to your internal team or account manager</li>
      </ul>
      <p>The 45-day escalation is not a failure — it&rsquo;s the correct handoff when relationship context matters more than process.</p>

      <h2>How It Works in QuickBooks and Xero</h2>
      <p><strong>QuickBooks Online:</strong> Invoices created in QBO, sent from QBO, payments matched from the bank feed. A/R Aging Summary report reviewed weekly. QBO&rsquo;s built-in payment reminders configurable by the AR team. Customer statements sent from QBO for multi-invoice accounts.</p>
      <p><strong>Xero:</strong> Invoices created and approved in Xero. Chaser or Xero&rsquo;s own automation handles reminder sequences; manual escalations handled by the AR team. Payments matched from the bank feed. Aged Receivables report reviewed on a set cadence.</p>
      <p><strong>Stripe + QBO/Xero:</strong> For SaaS businesses — the AR team monitors failed payments and dunning outcomes in Stripe, reconciles Stripe payouts against accounting records, and reconciles deferred revenue schedules.</p>

      <h2>Regional Nuances</h2>
      <p><strong>US:</strong> Net 30 standard for B2B. Early payment discounts (2/10 Net 30) tracked and applied where eligible. Mix of ACH, check, and card payments requiring daily bank feed reconciliation.</p>
      <p><strong>UK:</strong> BACS (3 working days) and Faster Payments (same day) — the AR team monitors the bank feed for incoming payments daily. Late Payment of Commercial Debts Act gives the right to charge statutory interest on overdue B2B payments; whether to charge it is a commercial decision for you.</p>
      <p><strong>Australia:</strong> BAS and GST on AR invoices — credit notes affect GST and must be coded correctly. EOFY June 30 is a hard deadline for AR reconciliation — all outstanding balances should be reviewed before year-end.</p>

      <h2>What Stays With You</h2>
      <p>Credit holds, write-off approvals, legal collection referrals, customer contract terms that affect invoicing. Any dispute that requires a business judgment about the customer relationship rather than a factual resolution. The AR team handles the process — you retain the relationship.</p>

      <div className="mt-8 p-6 bg-input rounded-xl border border-border/70">
        <p className="font-semibold text-primary mb-3">Relevant services</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/services/accounts-receivable/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounts Receivable</Link>
          <Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">QuickBooks</Link>
          <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Xero</Link>
          <Link href="/resources/guides/outsourced-accounts-receivable-guide" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Full AR Guide</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
