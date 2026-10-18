import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import ArticleVisual from '@/components/article-visual';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/resources/guides/client-accounting-services-cas-guide';

export const metadata: Metadata = genMeta({
  title: 'Client Accounting Services (CAS) Guide',
  description:
    'What Client Accounting Services actually is, how outsourced production work supports a CAS practice, and where production ends and advisory begins.',
  path: PATH,
});

export default function CASGuide() {
  return (
    <ArticleLayout
      title="Client Accounting Services (CAS): A Guide for CPA Firms"
      category="Guide"
      description="CAS has become one of the fastest-growing practice areas inside CPA firms. This guide covers what it actually includes, why production capacity is usually the constraint, and how outsourced back-office support fits into a CAS engagement."
      publishedDate="2026-08-21"
      section="guides"
      slug="client-accounting-services-cas-guide"
      inquiryTitle="Talk to Us About Building Out CAS"
      inquiryLead="Tell us which client accounting work your firm already delivers and where the capacity runs out, and we will scope the preparation layer that sits underneath it."
    >
      <p>
        Client Accounting Services — usually shortened to CAS, and sometimes called CAS 2.0 — is the practice area where a CPA firm takes on a client's ongoing bookkeeping, accounting and reporting as a recurring engagement, rather than showing up once a year for a tax return. Instead of a client handling their own books and bringing a shoebox of records to the firm in March, the firm (or a team working under the firm) maintains the books continuously and delivers regular financial reporting the client actually uses to run the business.
      </p>
      <p>
        For a firm, this is a different business model from traditional compliance work: recurring monthly revenue instead of a seasonal spike, and a client relationship built around ongoing information rather than an annual filing. It is also why CAS has grown quickly — it fits what a lot of small and mid-sized business clients actually want from their accountant.
      </p>

      <ArticleVisual
        variant="workflow"
        title="What a CAS engagement typically includes"
        items={[
          { label: 'Bookkeeping', detail: 'Recurring transaction and reconciliation work.' },
          { label: 'Close', detail: 'Monthly close and financial statements.' },
          { label: 'Reporting', detail: 'Reports the client actually reviews.' },
          { label: 'Advisory', detail: 'Interpretation stays with the firm.' },
        ]}
      />

      <h2>What CAS actually covers</h2>
      <p>
        The scope varies by firm, but a typical CAS engagement includes recurring bookkeeping, bank and credit card reconciliations, accounts payable and receivable, payroll-related accounting, monthly or quarterly close, and financial statement preparation. Some firms bundle in tax preparation for the same client since the books are already current. Where CAS becomes &ldquo;CAS 2.0&rdquo; in industry conversation is when the firm layers advisory work on top — interpreting the numbers with the client, flagging trends, and having a strategic conversation about the business.
      </p>
      <p>
        That advisory layer is the firm's work and the firm's professional judgment. It depends on the CPA's relationship with the client and the firm's own expertise — it is not something that can be outsourced to a back-office production team, and it should not be. What can be delegated is the production work underneath it: the recurring, procedural work that has to happen correctly and on schedule before any advisory conversation is possible.
      </p>

      <h2>Why production capacity is usually the real constraint</h2>
      <p>
        Firms that want to grow a CAS practice often find the bottleneck is not client demand — it is production capacity. Every new CAS client adds recurring monthly work: reconciliations, categorization, close, reporting. That work has to happen reliably every single month regardless of tax season, staff turnover or how many other clients the firm just signed. A firm can be excellent at the advisory conversation and still struggle to scale CAS if the production layer underneath it is inconsistent.
      </p>
      <p>
        This is where staff augmentation or a dedicated offshore team is used by many CAS practices — not to replace the CPA's advisory role, but to handle the recurring production work at a predictable monthly cost, so the firm's own staff can spend their time on review, client conversations and the advisory work that actually needs a CPA.
      </p>

      <h2>Where the delegation line sits</h2>
      <p>
        The useful way to think about this is the same distinction that applies to any outsourced accounting work: production can be delegated, judgment stays with the firm.
      </p>
      <ul>
        <li><strong>Can be delegated:</strong> transaction categorization, bank and credit card reconciliations, AP/AR processing, payroll-related bookkeeping, month-end close mechanics, and preparing the financial statements and supporting schedules.</li>
        <li><strong>Stays with the firm:</strong> reviewing and signing off on the final numbers, interpreting the financials with the client, advisory conversations about the business, tax strategy, and any work that requires the firm's professional judgment or license.</li>
      </ul>
      <p>
        A production team working under this model should make your review faster, not add another step to it — the same test that applies to any staff augmentation arrangement. If delegated work still requires your staff to rebuild the file before it is usable, the capacity problem has moved rather than disappeared. Our{' '}
        <Link href="/resources/guides/how-to-choose-accounting-outsourcing-partner" className="text-primary font-medium hover:underline">
          guide to choosing an outsourcing partner
        </Link>{' '}
        covers how to evaluate whether a provider's process is actually built for that.
      </p>

      <h2>Software and workflow</h2>
      <p>
        Most CAS practices standardize on a small set of platforms across their client base rather than accommodating whatever each client happens to use — this is part of what makes CAS scalable. QuickBooks Online and Xero are the common choices for the bookkeeping layer for small and mid-sized clients, with tools like Bill.com or similar AP/AR platforms layered on top. On the tax and workpaper side, firms running CAS alongside tax preparation often use CCH Axcess or Drake Tax to keep the two workflows connected. An outsourced production team should work directly inside whichever of these your firm has already standardized on, rather than asking you to adapt to a separate system.
      </p>

      <h2>Common questions firms ask before adding outsourced capacity to a CAS practice</h2>
      <h3>Does this change who owns the client relationship?</h3>
      <p>
        No. In a properly scoped arrangement, the firm remains the client-facing party. A production team works behind the scenes on the recurring bookkeeping and close, and your firm reviews the output and handles the advisory conversation directly with the client.
      </p>
      <h3>Can outsourced staff sign off on financials or give advice to our clients?</h3>
      <p>
        No. Sign-off, review and any advisory or tax-strategy conversation with the client stays with your firm's licensed staff. Production support handles the preparation work that sits underneath that review, not the judgment calls themselves.
      </p>
      <h3>How does this affect margin on a CAS engagement?</h3>
      <p>
        CAS margins depend heavily on how much senior staff time gets consumed by production-level work. Moving the recurring, procedural portion of the engagement to a predictable monthly cost is one of the more common ways firms protect margin as a CAS practice scales, since it keeps senior staff time concentrated on review and advisory work rather than data entry and reconciliations.
      </p>

      <h2>Next steps</h2>
      <p>
        If you are scoping what a production team would actually handle inside a CAS engagement, our{' '}
        <Link href="/industries/cpa-firms" className="text-primary font-medium hover:underline">
          CPA firm support
        </Link>{' '}
        page and{' '}
        <Link href="/solutions/staff-augmentation" className="text-primary font-medium hover:underline">
          staff augmentation
        </Link>{' '}
        page cover how the handoff and review process works in practice.
      </p>
      <h2>White-Label Production Support for a CAS Practice</h2>
      <p>
        When a firm wants to keep its client relationship and engagement model while delegating defined preparation work, review the
        <Link href="/industries/cpa-firms/white-label-accounting" className="text-primary font-medium hover:underline"> white-label accounting support page for CPA firms</Link>.
        It covers how to agree branding, client-contact boundaries, systems access and reviewer-ready outputs without confusing preparation work with client advisory responsibilities.
      </p>
    </ArticleLayout>
  );
}
