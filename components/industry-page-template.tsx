import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import InquiryTrigger from '@/components/inquiry-trigger';
import FAQSection from '@/components/faq-section';
import type { IndustryDepth } from '@/lib/industry-depth';
import Reveal from '@/components/reveal';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

interface IndustryPageProps {
  path: string;
  industry: { name: string; description: string; icon: string };
  overview: string;
  benefits: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks?: Array<{ name: string; href: string }>;
  /** Per-industry depth from `lib/industry-depth.ts`. Optional so a new industry page can ship before its depth is written — but write it. */
  depth?: IndustryDepth;
}

export default function IndustryPageTemplate({ path, industry, overview, benefits, faqs, relatedLinks = [], depth }: IndustryPageProps) {
  const slug = path.replace(/^\/industries\//, '');
  const serviceSchema = generateServiceSchema({ name: `Accounting Support for ${industry.name}`, description: industry.description, slug, basePath: '/industries/' });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Industries', url: `${baseUrl}/industries` },
    { name: industry.name, url: `${baseUrl}${path}` },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero subtitle="Industry Workflow" title={`Accounting Support for ${industry.name}`} description={industry.description} cta={{ text: 'Talk Through Your Workflow', href: '/contact' }} ctaSecondary={{ text: 'View Industries', href: '/industries' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/industries" className="inline-block py-1.5 hover:text-primary transition-colors">Industries</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">{industry.name}</li></ol></nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><Reveal className="max-w-4xl mx-auto space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">The workflow</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What tends to make {industry.name} accounting different</h2></div><p className="text-lg text-muted leading-8">{overview}</p></></Reveal></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Where support can fit</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The parts of the workflow that can be delegated</h2><p className="max-w-2xl mx-auto text-muted leading-7">The right scope depends on your systems, team and review process. These are practical areas where additional capacity can be useful without taking control away from your team.</p></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{benefits.map((benefit, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="h-full flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-colors hover:border-primary/40" source={`${industry.name} — ${benefit.slice(0, 60)}`} title={`Talk to Us About ${industry.name} Accounting`} lead="Tell us how this part of the work is handled today and we will scope what support would change." label={`Ask us about this part of ${industry.name} accounting`}><Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><p className="text-foreground text-sm sm:text-base leading-5 sm:leading-7">{benefit}</p></InquiryTrigger></li></Reveal>)}</ul></div></section>

      {depth && (
        <>
          <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <Reveal className="space-y-3 mb-10">
                <>
                  <span className="text-sm font-semibold tracking-wide uppercase text-accent">Where the books break</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                    Four Things That Go Wrong in {industry.name} Books
                  </h2>
                  <p className="text-base md:text-lg text-muted leading-relaxed">
                    Not because anyone was careless. Because each one is a convention a generalist bookkeeper has no
                    particular reason to know, and the accounts look reasonable while it is wrong.
                  </p>
                </>
              </Reveal>
              <div className="space-y-6">
                {depth.breaks.map((item, i) => (
                  <Reveal key={item.h} delay={Math.min(i * 0.06, 0.24)}>
                    <div className="rounded-2xl border border-border bg-input p-5 sm:p-7">
                      <h3 className="text-lg font-bold text-primary">{item.h}</h3>
                      <p className="mt-3 text-base leading-relaxed text-muted">{item.p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
            <div className="max-w-4xl mx-auto">
              <Reveal className="space-y-3 mb-8">
                <>
                  <span className="text-sm font-semibold tracking-wide uppercase text-accent">Month one</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                    What We Would Put Right First
                  </h2>
                  <p className="text-base md:text-lg text-muted leading-relaxed">
                    Before anything is optimised, these have to be true. Most of them are setup decisions that are
                    cheap now and expensive to retrofit.
                  </p>
                </>
              </Reveal>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {depth.firstMonth.map((item, i) => (
                  <Reveal key={item} delay={Math.min(i * 0.04, 0.2)}>
                    <li className="h-full">
                      <InquiryTrigger
                        className="flex h-full items-start gap-3 rounded-xl border border-border/70 bg-white p-4 sm:p-5 transition-colors hover:border-primary/40"
                        source={`${industry.name} — month one`}
                        title={`Talk to Us About ${industry.name} Accounting`}
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:h-5 sm:w-5" aria-hidden="true" />
                        <span className="text-sm leading-6 sm:text-base">{item}</span>
                      </InquiryTrigger>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}

      {relatedLinks.length > 0 && <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-4 mb-8"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Related work</span><h2 className="font-serif text-3xl font-bold text-primary">Explore the workflows that connect to this one</h2></></Reveal><div className="flex flex-wrap gap-3">{relatedLinks.map((link) => <Link key={link.href} href={link.href} className="px-4 py-2 rounded-lg bg-input text-primary hover:bg-border font-medium transition-colors">{link.name}</Link>)}</div></div></section>}

      <FAQSection subtitle="Questions we hear" items={faqs} columns={2} />
      <InquirySection
        source={`/industries/${slug}`}
        title={`Talk to Us About ${industry.name} Accounting`}
        lead={`A free consultation, and a call that costs nothing. Tell us how ${industry.name.toLowerCase()} work is handled today and where the recurring load is landing on the wrong people.`}
        compact
      />

      <CTABanner title={`Need support with ${industry.name} accounting?`} description="Tell us how the work is handled today and where additional capacity would make the biggest difference." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
