import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import SolutionIllustration from '@/components/solution-illustration';
import {
  generateMetadata as genMeta,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';
import {
  registrationStates,
  registrationSteps,
  registrationBoundaries,
} from '@/lib/company-registration';

/**
 * US company registration hub.
 *
 * Added 2026-09-04 on the owner's confirmation that registration is arranged and
 * coordinated rather than performed in-house. The copy is written to that split
 * throughout: the filing is coordinated, the accounting that follows is ours.
 * It never claims Accounstone lodges formation documents, acts as registered
 * agent, or advises on entity type — see `lib/company-registration.ts` and
 * `knowledge/company/scope-boundaries.md` §2.
 */

const PATH = '/company-registration';

export const metadata: Metadata = genMeta({
  title: 'Register a Company in the US',
  description:
    'What US company registration involves state by state, what happens after the certificate arrives, and how the books and returns are set up from day one.',
  path: PATH,
});

const faqs = [
  {
    question: 'Which state should we register in?',
    answer:
      'That is a decision for your attorney and your CPA, not for us. It turns on where the business will actually operate, who owns it, where those owners pay tax and how the company intends to raise money. We can tell you what each state requires once the choice is made, and we set the accounting up around it.',
  },
  {
    question: 'Should it be an LLC or a corporation?',
    answer:
      'Also not our call. The two are taxed differently by default and carry different filing obligations, and choosing between them is entity selection advice — work for a licensed adviser who knows your full position. We prepare the books and the returns for whichever you form.',
  },
  {
    question: 'Do you file the formation documents yourselves?',
    answer:
      'The filing is arranged and coordinated for you, and we confirm back when the state accepts it. What we run directly is everything after that point: the EIN application, the chart of accounts, the opening balances, the filing calendar and the recurring bookkeeping, payroll and return preparation.',
  },
  {
    question: 'How long does registration take, and what does it cost?',
    answer:
      'Both vary by state, by entity type and by the filing speed you choose, and they change from year to year. We would rather confirm the current figures for your specific case when we scope the work than publish a number here that would be wrong for most readers.',
  },
  {
    question: 'We already registered. Can you still help?',
    answer:
      'Yes, and this is the more common starting point. An entity that has been formed but never had its books opened properly usually needs the chart of accounts rebuilt, opening balances established and any missed state filings identified before a first return can be prepared.',
  },
  {
    question: 'Can you open a US bank account for the company?',
    answer:
      'No. Account opening is the bank’s decision and carries its own identity and verification requirements that no filing arrangement controls. What we can do is make sure the EIN and the formation documents the bank will ask for are in place and correct.',
  },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Register a Company in the US', url: `${baseUrl}${PATH}` },
]);

export default function CompanyRegistrationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        region="united-states"
        subtitle="US company registration"
        title="Register a US Company, and Have the Books Ready From Day One"
        description="Registration is the short part. What follows it — an EIN, a chart of accounts, a state filing calendar and a return that has to be prepared — is the part that decides whether year one is clean or reconstructed."
        cta={{ text: 'Talk Through Your Setup', href: '/contact' }}
        ctaSecondary={{ text: 'View Accounting Services', href: '/services' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-primary font-medium py-1.5">Register a Company in the US</li>
        </ol>
      </nav>

      {/* Drawn for this page — see components/solution-illustration.tsx. */}

      <section className="w-full pt-8 md:pt-12 px-6 md:px-8 bg-white">

        <div className="max-w-5xl mx-auto flex justify-center">

          <div className="w-full max-w-[19rem] text-primary" role="img" aria-label="US company registration">

            <SolutionIllustration name="registration" />

          </div>

        </div>

      </section>


      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">Where we fit</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              The Filing Is Coordinated. The Accounting Is Ours.
            </h2>
          </></Reveal>
          <Reveal className="space-y-4"><>
            <p className="text-base md:text-lg text-muted leading-relaxed">Most guidance about registering a US company stops at the moment the certificate arrives, which is roughly the point at which the actual obligations begin. An entity exists from that date, and from that date it accrues filing deadlines, a registered agent requirement and a return that will have to be prepared whether or not it traded.</p>
            <p className="text-base md:text-lg text-muted leading-relaxed">We coordinate the registration so it happens in the right order, and then we run the part that repeats: the books, the payroll preparation, the reconciliations and the return preparation. The structural decisions — which entity, which state — stay with your attorney and your CPA, because they depend on facts about ownership and tax residence that sit with them, not with us.</p>
          </></Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-10">What Actually Happens, In Order</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {registrationSteps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-white p-5">
                <div className="text-sm font-bold text-accent mb-2">{s.n}</div>
                <h3 className="font-bold text-primary mb-2 leading-snug">{s.h}</h3>
                <p className="text-sm text-muted leading-6">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">By state</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-2 mb-3">The Three States People Ask About Most</h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-3xl">Each of these turns up constantly in searches about forming a US company, and each carries a different set of recurring obligations once the entity exists. None of them removes the requirements of the state a business actually operates from.</p>
          </></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {registrationStates.map((s) => (
              <Link
                key={s.slug}
                href={`/company-registration/${s.slug}`}
                className="block rounded-2xl border border-border bg-input/50 p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{s.name}</h3>
                <p className="text-sm text-muted leading-6">{s.whyItComesUp}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  What {s.name} requires <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">The limits</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              What We Will Not Do, Whatever You Are Paying Us
            </h2>
          </></Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-border bg-white">
              <div className="border-l-4 border-accent p-5 sm:p-6 space-y-3">
                {registrationBoundaries.map((b) => (
                  <p key={b} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>{b}</span>
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="text-base md:text-lg text-muted leading-relaxed">Naming those limits up front is deliberate. A registration arrangement that quietly absorbs entity selection or a signature is not saving you anything — it is moving liability somewhere you cannot see it.</p>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="Registration Questions" items={faqs} columns={2} />

      <section className="w-full py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-primary mb-4">Once the entity exists</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/bookkeeping/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Bookkeeping <ArrowRight size={14} aria-hidden="true" /></Link>
            <Link href="/services/payroll/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Payroll <ArrowRight size={14} aria-hidden="true" /></Link>
            <Link href="/services/tax-preparation/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Tax preparation <ArrowRight size={14} aria-hidden="true" /></Link>
            <Link href="/markets/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium">US market overview <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <InquirySection
        region="united-states"
        source={PATH}
        title="Tell Us Where You Are in the Process"
        lead="A free consultation, and a call that costs nothing. Whether the entity exists yet or not, tell us the state, the owners and what the business will do, and we will scope what the first year of accounting actually needs."
      />

      <CTABanner
        title="Forming a US Company?"
        description="Registration is coordinated, the accounting is set up alongside it, and the decisions that need a licensed adviser stay with one."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
