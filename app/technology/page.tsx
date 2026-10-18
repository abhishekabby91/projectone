import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { technologies } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Technology & Systems',
  description:
    'We work inside QuickBooks, Xero, NetSuite, Sage, Drake Tax, CCH Axcess, and MYOB — the accounting work happens in your existing system, not a separate platform.',
  path: '/technology',
});

const techFAQs = [
  {
    question: 'What accounting software do you support?',
    answer:
      'We work inside QuickBooks Online, Xero, NetSuite, Sage, Drake Tax, CCH Axcess, and MYOB — the platforms most of our clients already use.',
  },
  {
    question: 'Can you help with data migration to a new system?',
    answer:
      'We support the reconciliation and validation work behind a migration — checking that historical data lands correctly in the new system. The technical migration itself is typically coordinated with your software provider or an implementation partner.',
  },
  {
    question: 'Do you provide training on accounting software?',
    answer:
      'Our onboarding covers how our team will work inside your existing system and process, so your reviewers know what to expect from each handoff. We are not a substitute for vendor training on the software itself.',
  },
  {
    question: 'Can you integrate with our custom systems?',
    answer:
      'We work inside the accounting platform and its standard connections to common business tools. Building custom integrations or APIs is outside our scope — that typically sits with your software vendor or an implementation partner.',
  },
  {
    question: 'How do you handle data security?',
    answer:
      'Agree permitted users, system access and handling requirements during onboarding. Confirm any contractual or regulatory requirements before work begins.',
  },
  {
    question: 'Do you provide financial forecasting or business intelligence dashboards?',
    answer:
      'We focus on accurate, current books and recurring management reporting inside your existing system. Forecasting and BI-dashboard work are outside our scope; your accountant or advisor is better positioned to build on the clean data we maintain.',
  },
];

const faqSchema = generateFAQSchema(techFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
]);

const workflowPoints = [
  'We work inside your existing chart of accounts, not a separate system',
  'Recurring reconciliations and account maintenance on your close schedule',
  'Reporting built from your platform\'s standard reports and exports',
  'Documented handoffs so your reviewer can see what changed and why',
  'Agreed access and workflow responsibilities',
  'No proprietary platform — your data and history stay in your own software',
];

export default function TechnologyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="Technology & Integration"
        title="We Work Inside Your Existing System"
        description="Bookkeeping and accounting support inside the platform you already use — QuickBooks, Xero, NetSuite, Sage, and more. No migration to a separate proprietary system."
        cta={{
          text: 'Start a Conversation',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      <SectionGrid
        subtitle="Our Technology"
        title="Systems We Support"
        items={technologies}
        baseUrl="/technology"
        columns={3}
        variant="default"
      />

      <section className="w-full bg-input px-6 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-xl font-bold text-primary md:text-2xl">Yardi accounting workflows by property type</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">Yardi accounting tasks differ between community associations and rental-property portfolios. Choose the workflow that matches the records and reporting you maintain.</p>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link href="/industries/hoa-accounting/yardi-accounting-support" className="rounded-xl border border-border bg-white p-5 font-semibold text-primary transition-colors hover:border-primary/50">
              Yardi accounting support for HOAs <span aria-hidden="true">→</span>
              <p className="mt-2 text-sm font-normal leading-relaxed text-muted">Assessment ledgers, operating and reserve reconciliations, payable tracking and board-reporting handoffs.</p>
            </Link>
            <Link href="/industries/property-management/yardi-accounting-support" className="rounded-xl border border-border bg-white p-5 font-semibold text-primary transition-colors hover:border-primary/50">
              Yardi accounting support for property managers <span aria-hidden="true">→</span>
              <p className="mt-2 text-sm font-normal leading-relaxed text-muted">Property-level reconciliations, tenant and owner ledger checks, payable and receivable schedules and month-end reporting.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                How We Work
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                Your System, Our Workflow
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                We don't ask you to move your books to a new platform. Our team works inside the accounting software you already use, following the chart of accounts, approval process, and close calendar you already have.
              </p>

              <div className="space-y-4 pt-4">
                {workflowPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">What Stays With Your Software Provider</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">→</span>
                  <div>
                    <p className="font-semibold">Software Licensing & Hosting</p>
                    <p className="text-white/70 text-sm">Your subscription and infrastructure stay with QuickBooks, Xero, NetSuite, or your chosen platform</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">→</span>
                  <div>
                    <p className="font-semibold">Implementation & Configuration</p>
                    <p className="text-white/70 text-sm">Initial system setup for larger platforms (NetSuite, Sage, CCH Axcess) typically sits with a dedicated implementation partner</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">→</span>
                  <div>
                    <p className="font-semibold">Custom Development</p>
                    <p className="text-white/70 text-sm">Custom integrations, APIs, and workflow automation stay with your IT team or software vendor</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">→</span>
                  <div>
                    <p className="font-semibold">Forecasting & BI Tools</p>
                    <p className="text-white/70 text-sm">We keep the underlying books accurate; forecasting and dashboard tools are typically your accountant or advisor's domain</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection subtitle="Technology" items={techFAQs} columns={2} />

      <InquirySection source="/technology" title="Talk to Us About the Platform You Work In" lead="Name the platform and the accounting work you need covered. We can clarify which tasks fit our scope and which remain with your software vendor or implementation partner." compact />

      <CTABanner
        title="Which System Are You Working In?"
        description="Tell us your platform and where the accounting work is getting stuck — we'll work inside what you already have."
        cta={{
          text: 'Start a Conversation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
