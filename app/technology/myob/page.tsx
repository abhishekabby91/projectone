import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';
import PlatformDepthSection from '@/components/platform-depth';
import { platformDepth } from '@/lib/platform-depth';
import InquiryTrigger from '@/components/inquiry-trigger';

export const metadata: Metadata = generateMetadata({
  // Refocused 2026-09-04. This page draws more impressions than any other on the
  // site (857 in 28 days) and has never had a click, because almost all of that
  // demand is MYOB *product* research — "myob consultants" 83, "myob
  // consolidation software" 79, "myob accounting software" 61, "myob certified
  // consultant" 29 — and scope-boundaries.md §5 forbids claiming any of it. The
  // one genuine buyer query in the set is "myob bookkeeper offshore" (30 impr,
  // position 62), so the title now speaks to that reader rather than to someone
  // shopping for software. See SEO-CHANGELOG 2026-09-04b; whether to noindex the
  // page outright was an open question for the owner, and on 2026-09-04 they
  // answered it: noindex, below.
  //
  // The cost of that is real and was flagged before doing it — it also drops the
  // 30 "myob bookkeeper offshore" impressions, the only genuine buyer query on
  // the page. That intent now lives on /solutions/offshore-accounting-support,
  // whose bookkeeping entry names MYOB explicitly.
  //
  // The page stays live, linked and useful to anyone who reaches it from the
  // technology hub. It is NOT added to robots.txt: a blocked URL cannot be
  // crawled, so the noindex would never be read — the same trap documented for
  // /thank-you. It is removed from app/sitemap.ts instead, because a noindex URL
  // in a sitemap is a contradiction Search Console reports.
  title: 'Offshore MYOB Bookkeeping Support',
  description: 'Offshore bookkeepers working inside your existing MYOB file — reconciliations, GST and BAS-ready records and payroll preparation. Not an implementer.',
  noindex: true,
  path: '/technology/myob',
});

const faqs = platformDepth.myob.faqs;

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'MYOB', url: `${baseUrl}/technology/myob` },
]);

const workflows = [
  'Transaction processing and bank reconciliation',
  'GST reconciliation and BAS-ready records',
  'Payroll bookkeeping aligned with STP reporting',
  'Accounts payable and receivable workflows',
  'Month-end close and recurring reporting',
  'Cleanup and historical corrections',
];

export default function MYOBPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="Platform Workflow Support"
        title="Offshore MYOB Bookkeeping, Inside Your Existing File"
        description="Help with the recurring accounting work inside MYOB — reconciliations, GST/BAS records, payroll bookkeeping and reporting for AU/NZ businesses."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">What buyers usually care about</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">MYOB is the system. Someone still has to keep GST and BAS records current.</h2><p className="text-lg text-muted leading-8">Australian and New Zealand compliance adds recurring work on top of ordinary bookkeeping — GST reconciliation, BAS-ready records and STP-aligned payroll all need to stay current between lodgment cycles. We work inside your existing MYOB setup on that recurring routine, while your accountant or tax agent keeps lodgment and advice responsibility.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Work Around MYOB</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/technology/myob"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-8">Connect MYOB to the accounting work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/bookkeeping/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australian Bookkeeping</Link><Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australia Market</Link><Link href="/markets/australia/bas-preparation" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">BAS Preparation</Link><Link href="/technology" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">All Platforms</Link></div></div></section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">Scope, stated plainly</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              What We Are &mdash; and Are Not &mdash; in the MYOB Ecosystem
            </h2>
          </></Reveal>
          <Reveal className="space-y-4">
            <>
              <p className="text-base md:text-lg text-muted leading-relaxed">People arrive here searching for several different things, and only one of them is us. Rather than let the page imply otherwise, here is the split.</p>
              <div className="overflow-hidden rounded-xl border border-border bg-input">
                <div className="border-l-4 border-accent p-5 sm:p-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">We are not an MYOB partner, reseller, or certified consultant</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">We do not implement MYOB, configure it, choose an edition for you, migrate data into it, build integrations, or train your staff on the product. If that is what you need, an MYOB partner is the right call and we are not a substitute for one.</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">What we do is the recurring accounting work inside an MYOB file that someone has already set up: reconciliations, transaction coding, GST and BAS-ready records, payroll preparation, account maintenance and the reporting that comes off the back of it.</p>
                </div>
              </div>
              <h3 className="font-bold text-primary text-lg pt-2">If you were looking up the software itself</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">MYOB is an Australian accounting software family used widely by businesses and accounting firms in Australia and New Zealand. The current range runs from the smaller cloud products through AccountRight to the larger Acumatica-based enterprise product, alongside the older Exo line still in use at established sites. Which one a client runs changes the day-to-day work considerably &mdash; the reconciliation and reporting workflow in a small cloud file has little in common with a multi-entity Exo installation.</p>
              <h3 className="font-bold text-primary text-lg pt-2">If you were looking up Single Touch Payroll</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">We can prepare the payroll and the reconciliations behind an STP report. The lodgment itself goes through the employer&rsquo;s own MYOB file and credentials, and stays with whoever is authorised to make it. We do not hold ATO portal access, in MYOB or anywhere else.</p>
              <p className="text-base md:text-lg text-muted leading-relaxed">If your firm carries MYOB clients and the recurring work behind them is what is running late, that part we can help with.</p>
            </>
          </Reveal>
        </div>
      </section>


      <PlatformDepthSection platform={platformDepth.myob} />

      <FAQSection subtitle="MYOB Questions" items={faqs} columns={2} />

      <InquirySection source="/technology/myob" title="Talk to Us About Your MYOB Workload" lead="A free consultation, and a call that costs nothing. Tell us which MYOB edition the client runs and where the GST coding stops holding up." compact />

      <CTABanner title="Where Is Your MYOB Bookkeeping Getting Stuck?" description="Tell us whether the pressure is reconciliations, GST/BAS prep, payroll or simply keeping current." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
