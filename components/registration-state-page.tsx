import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { type RegistrationState, registrationBoundaries, registrationStates } from '@/lib/company-registration';

/**
 * One rendering for every state in the registration cluster.
 *
 * The three state pages are explicit `page.tsx` files rather than a `[state]`
 * dynamic segment on purpose: the sitemap drift check in CLAUDE.md walks
 * `find app -name "page.tsx"`, and a dynamic segment would appear there as a
 * literal `[state]` path that can never match a sitemap URL, reporting drift on
 * every run forever. Explicit files keep that check honest; this component keeps
 * them from duplicating each other.
 *
 * Every page in this cluster carries the boundaries block. That is not padding —
 * entity selection advice is forbidden by `scope-boundaries.md` §2 and this is
 * the cluster where a reader is most likely to ask for it.
 */
export default function RegistrationStatePage({ state }: { state: RegistrationState }) {
  const path = `/company-registration/${state.slug}`;

  const faqs = state.faqs;

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Register a Company in the US', url: `${baseUrl}/company-registration` },
    { name: state.name, url: `${baseUrl}${path}` },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        region="united-states"
        subtitle={`${state.name} registration`}
        title={`Registering a Company in ${state.name}`}
        description={`What ${state.name} requires when the entity is formed, what it keeps requiring every year afterwards, and how the books and returns are set up around it.`}
        cta={{ text: 'Talk Through Your Setup', href: '/contact' }}
        ctaSecondary={{ text: 'All US registration', href: '/company-registration' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/company-registration" className="inline-block py-1.5 hover:text-primary transition-colors">Register a Company in the US</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-primary font-medium py-1.5">{state.name}</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">Why {state.name}</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Why {state.name} Comes Up So Often
            </h2>
          </></Reveal>
          <Reveal>
            <p className="text-base md:text-lg text-muted leading-relaxed">{state.whyItComesUp}</p>
          </Reveal>
          <Reveal>
            <p className="text-base md:text-lg text-muted leading-relaxed">{state.whoFormsHere}</p>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">What Keeps Coming Back Every Year</h2></Reveal>
          <Reveal>
            <ul className="space-y-3">
              {state.ongoing.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm sm:text-base leading-relaxed text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <p className="text-sm sm:text-base text-muted leading-relaxed">{state.feesNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Worth Understanding Before You File</h2></Reveal>
          {state.considerations.map((c, i) => (
            <Reveal key={c.h} delay={i * 0.04}><>
              <h3 className="font-bold text-primary text-lg pt-2">{c.h}</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">{c.p}</p>
            </></Reveal>
          ))}
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto space-y-4">
          <Reveal><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Where the Decision Stops Being Ours</h2></Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-border bg-white">
              <div className="border-l-4 border-accent p-5 sm:p-6 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">The line we do not cross</p>
                <p className="text-sm sm:text-base leading-relaxed text-foreground">
                  {registrationBoundaries[0]}{' '}
                  <Link href="/company-registration" className="text-primary font-medium underline underline-offset-2 hover:text-accent">
                    The full list of what we will not do
                  </Link>{' '}
                  is on the main registration page, along with how the setup runs step by step.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle={`${state.name} Questions`} items={faqs} columns={2} />

      <section className="w-full py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-primary mb-4">Once the entity exists</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/bookkeeping/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Bookkeeping <ArrowRight size={14} aria-hidden="true" /></Link>
            <Link href="/services/tax-preparation/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Tax preparation <ArrowRight size={14} aria-hidden="true" /></Link>
            <Link href="/company-registration" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium">Compare states <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>

          <h2 className="text-xl font-bold text-primary mt-10 mb-4">Looking at a different state</h2>
          <div className="flex flex-wrap gap-3">
            {registrationStates.filter((s) => s.slug !== state.slug).map((s) => (
              <Link key={s.slug} href={`/company-registration/${s.slug}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Registering in {s.name} <ArrowRight size={14} aria-hidden="true" /></Link>
            ))}
            <Link href="/markets/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">US market overview <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <InquirySection
        region="united-states"
        source={path}
        title={`Registering in ${state.name}?`}
        lead={`A free consultation, and a call that costs nothing. Tell us who owns the business, where it will actually operate and what it will do, and we will scope what the first year of ${state.name} accounting needs.`}
      />

      <CTABanner
        title={`Setting Up in ${state.name}?`}
        description={state.ctaNote}
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
