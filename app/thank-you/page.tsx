import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import CTABanner from '@/components/cta-banner';
import Reveal from '@/components/reveal';
import ConversionEvent from '@/components/conversion-event';
import { companyInfo } from '@/lib/data';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/thank-you';

/**
 * The confirmation page every successful enquiry lands on.
 *
 * It exists so there is a real URL to point a Google Ads or Meta conversion at.
 * Both platforms can count a conversion from a destination URL, which needs a
 * page load they can observe - an inline "thanks" state inside the form is
 * invisible to them because the URL never changes.
 *
 * Two consequences worth knowing before editing:
 * - It is `noindex`. A thank-you page ranking for anything is a bug, and worse,
 *   it can be reached directly from search and inflate the conversion count.
 * - It is deliberately NOT in `app/sitemap.ts`. A noindex page in a sitemap is
 *   a contradiction Search Console reports. This is the one route where the
 *   sitemap drift check in CLAUDE.md is expected to differ, and that exception
 *   is recorded there.
 */
export const metadata: Metadata = genMeta({
  title: 'Thank You — Your Enquiry Is On Its Way',
  description: 'Your enquiry has reached Accounstone. Here is what happens next, how quickly you can expect a reply, and who it goes to.',
  path: PATH,
  noindex: true,
});

const NEXT_STEPS = [
  {
    h: 'We read it ourselves',
    p: 'Enquiries are not routed to a sales queue. The person who replies is the person who would scope the work.',
  },
  {
    h: 'It goes to whoever covers your market',
    p: 'If your enquiry named a region, it reaches the people working that market\u2019s business hours from our delivery centre in New Delhi. We do not advertise a response time here; turnaround is agreed in writing at onboarding and named in the engagement.',
  },
  {
    h: 'The first call is a scoping call',
    p: 'Half an hour, free, and no obligation. We ask what is falling behind, which systems it lives in, and who reviews the output — then say plainly whether it is work we do.',
  },
];

export default function ThankYouPage() {
  return (
    <main>
      <ConversionEvent />

      <section className="w-full bg-input px-6 md:px-8 py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal className="space-y-5">
            <>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="h-7 w-7" aria-hidden="true" />
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance leading-tight">
                Thank you — your enquiry is on its way
              </h1>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                It has reached us, and nothing further is needed from you right now. If it is urgent, you
                can reply straight to{' '}
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="inline-block py-1.5 font-semibold text-primary underline underline-offset-2 hover:text-accent"
                >
                  {companyInfo.contact.email}
                </a>
                .
              </p>
            </>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-white px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-3xl space-y-6">
          <Reveal className="space-y-3">
            <>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">
                  What happens next
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
                Three things, in order
              </h2>
            </>
          </Reveal>

          <ol className="space-y-3.5">
            {NEXT_STEPS.map((step, i) => (
              <Reveal key={step.h} delay={Math.min(i * 0.06, 0.2)}>
                <li className="flex items-start gap-4 rounded-xl border border-border bg-input p-5 sm:p-6">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-white font-serif text-sm font-bold text-primary tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-primary text-base sm:text-lg mb-1">{step.h}</h3>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">{step.p}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full bg-input px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-3xl space-y-5">
          <Reveal className="space-y-3">
            <>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
                While you wait
              </h2>
              <p className="text-base text-muted leading-relaxed">
                The reading most people find useful before a first call.
              </p>
            </>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resources/guides/how-to-choose-accounting-outsourcing-partner', label: 'How to choose a partner' },
              { href: '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping', label: '9 questions to ask us' },
              { href: '/resources/guides/choosing-an-engagement-model', label: 'Which engagement model fits' },
              { href: '/delivery-framework/onboarding', label: 'How onboarding runs' },
              { href: '/data-security', label: 'How we handle your data' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:border-primary/50 hover:bg-border"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need to add something to your enquiry?"
        description="If you left out a detail — volume, deadline, the system it lives in — send it over and it will reach the same person."
        cta={{ text: 'Send Another Message', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
