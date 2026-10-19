import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Bank Reconciliation Guide',
  description: 'A practical property management bank reconciliation process covering tenant receipts, vendor payments, owner distributions, deposits and outstanding items.',
  path: '/blog/property-management-bank-reconciliation',
});

const faqs = [
  {
    question: 'What should a property management bank reconciliation cover?',
    answer:
      'Tenant and owner receipts, vendor payments and outstanding cheques, owner distributions, security-deposit or trust-related activity where it applies, transfers between accounts, bank fees and direct charges, and any old or unexplained reconciling items. The aim is an explained balance rather than a matched one.',
  },
  {
    question: 'Does a matched bank balance mean every property is correct?',
    answer:
      'No. In a portfolio, a receipt can reach the bank and still be applied to the wrong tenant or the wrong property, and the bank match will not show it. Property-level and tenant-level detail has to be checked separately from the bank reconciliation, particularly where a transaction is unusual or material.',
  },
  {
    question: 'What is a three-way trust reconciliation in property management?',
    answer:
      'Where the applicable rules and account arrangement require it, the review compares the trust bank balance, the control record and the total of the individual beneficiary, owner, tenant or transaction records — all at the same reconciliation date. Differences are investigated and corrected rather than absorbed into an unexplained adjustment. Whether those requirements apply to a particular arrangement depends on the licence, the activity and the governing rules, and is a question for the licensed party or the firm\'s own adviser rather than for a bookkeeper.',
  },
  {
    question: 'How should recurring unexplained reconciling items be handled?',
    answer:
      'Keep a short open-items list carrying the date, amount, property, likely cause and the person responsible for resolving it. An item that survives month after month needs a reason attached to it; carrying the same difference forward repeatedly turns a correctable error into a permanent feature of the records.',
  },
  {
    question: 'What happens after the reconciliation is complete?',
    answer:
      'It feeds the rest of the monthly close. Review the effect on tenant receivables, vendor payables, owner statements and cash reporting, and where the accounting system feeds another reporting platform, confirm that handoff rather than assuming it carried through.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="Property Management Bank Reconciliation: A Practical Guide"
      category="Property Management"
      description="Bank reconciliation is where property-level transaction records meet the actual bank activity. The goal is not just a matched balance but an explained balance."
      publishedDate="2026-10-08"
      section="blog"
      slug="property-management-bank-reconciliation"
    >
      <p>A property management bank reconciliation should confirm that recorded cash activity agrees with the bank and that outstanding differences have a clear explanation. Because one portfolio can involve many properties, owners and accounts, regular reconciliation is especially important.</p>

      <h2>What should be reviewed?</h2>
      <ul>
        <li>Tenant and owner receipts</li>
        <li>Vendor payments and outstanding checks</li>
        <li>Owner distributions</li>
        <li>Security-deposit or trust-related activity where applicable</li>
        <li>Transfers between accounts</li>
        <li>Bank fees and other direct charges</li>
        <li>Old or unexplained reconciling items</li>
      </ul>

      <h2>Start with the bank statement</h2>
      <p>Use the bank statement as the external record and match the activity recorded in the accounting system. A reconciliation should identify timing differences such as outstanding checks or deposits in transit while separating those from transactions that were never recorded or were recorded incorrectly.</p>

      <h2>Property-level detail matters</h2>
      <p>In a portfolio environment, a matched bank balance does not automatically prove that every property is correct. A receipt may have reached the bank but been applied to the wrong tenant or property. Review the supporting detail when a transaction is unusual or material. The <a href="/blog/property-management-tenant-ledger-reconciliation">tenant ledger reconciliation checklist</a> covers how to check tenant-level charges, receipts, credits and open balances separately from the bank match.</p>

      <h2>When a trust-account workflow needs a three-way reconciliation</h2>
      <p>Where the applicable rules and account arrangement require trust-account reconciliation, a bank-to-book match may not be enough. The review may also need to compare the trust bank balance and control record with the total of the individual beneficiary, owner, tenant or transaction records maintained for the account. The records being compared must use the same reconciliation date, and differences should be investigated and corrected rather than hidden by an unexplained adjustment.</p>
      <p>For California real estate licensees subject to the Department of Real Estate's trust-fund rules, the DRE describes a control record, separate beneficiary or transaction records, and a trust-account reconciliation that compares the total of separate records with the control-record balance. See the <a href="https://www.dre.ca.gov/Newsroom/DRE_Updates/2026_10_06_Trust_Fund_Records.html" target="_blank" rel="noreferrer">California DRE trust-fund recordkeeping guidance</a> and its <a href="https://www.dre.ca.gov/Forms/Audits.html" target="_blank" rel="noreferrer">official audit forms</a>. Applicability depends on the license, activity and governing rules; this guide is not legal advice.</p>
      <ol>
        <li>Complete and review the bank reconciliation for the relevant account and date.</li>
        <li>Confirm the control record includes the required receipts, disbursements and running balance.</li>
        <li>Reconcile each required beneficiary or transaction record and total the balances.</li>
        <li>Compare the detailed total to the control record and investigate any difference.</li>
        <li>Document the preparer, reviewer, date, exceptions and correction trail according to the applicable requirements.</li>
      </ol>

      <h2>Do not let old items become normal</h2>
      <p>An outstanding item that remains month after month deserves a reason. Keep a short open-items list with the date, amount, property, likely cause and person responsible for resolution. This is more useful than repeatedly carrying the same unexplained difference forward.</p>

      <h2>After the reconciliation</h2>
      <p>Use the completed reconciliation as part of the monthly close. Then review the effect on tenant receivables, vendor payables, owner statements and cash reporting. If the accounting system feeds another reporting platform, confirm the handoff as well.</p>

      <h2>Related guides</h2>
      <p>Use the <a href="/blog/property-management-month-end-close-checklist">property management month-end close checklist</a> to place reconciliations into the wider close process. See <a href="/blog/property-management-accounting">property management accounting</a>, <a href="/blog/rent-roll-accounting">rent roll accounting</a> and <a href="/blog/property-management-bookkeeping-vs-accounting">bookkeeping vs. accounting</a>. The broader <a href="/industries/property-management">property management accounting and bookkeeping page</a> explains how these pieces fit into the full portfolio workflow.</p>
      <p>For receipts recorded before they appear in a bank deposit, use the <a href="/blog/property-management-undeposited-funds">undeposited funds reconciliation guide</a>. For card liability, receipts and property expense coding, see the <a href="/blog/property-management-credit-card-reconciliation">credit card reconciliation checklist</a>. If you also need to compare reports from your property-management platform with the general ledger, see our <a href="/industries/property-management/general-ledger-reconciliation">platform-to-general-ledger reconciliation support</a>.</p>
    </ArticleLayout>
  );
}
