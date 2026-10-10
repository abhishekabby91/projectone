import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Bank Reconciliation: A Practical Guide',
  description: 'A practical property management bank reconciliation process covering tenant receipts, vendor payments, owner distributions, deposits and outstanding items.',
  path: '/blog/property-management-bank-reconciliation',
});

export default function Page() {
  return (
    <ArticleLayout
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
      <p>In a portfolio environment, a matched bank balance does not automatically prove that every property is correct. A receipt may have reached the bank but been applied to the wrong tenant or property. Review the supporting detail when a transaction is unusual or material.</p>

      <h2>Do not let old items become normal</h2>
      <p>An outstanding item that remains month after month deserves a reason. Keep a short open-items list with the date, amount, property, likely cause and person responsible for resolution. This is more useful than repeatedly carrying the same unexplained difference forward.</p>

      <h2>After the reconciliation</h2>
      <p>Use the completed reconciliation as part of the monthly close. Then review the effect on tenant receivables, vendor payables, owner statements and cash reporting. If the accounting system feeds another reporting platform, confirm the handoff as well.</p>

      <h2>Related guides</h2>
      <p>Use the <a href="/blog/property-management-month-end-close-checklist">property management month-end close checklist</a> to place reconciliations into the wider close process. See <a href="/blog/property-management-accounting">property management accounting</a>, <a href="/blog/rent-roll-accounting">rent roll accounting</a> and <a href="/blog/property-management-bookkeeping-vs-accounting">bookkeeping vs. accounting</a>. The broader <a href="/industries/property-management">property management accounting and bookkeeping page</a> explains how these pieces fit into the full portfolio workflow.</p>
    </ArticleLayout>
  );
}
