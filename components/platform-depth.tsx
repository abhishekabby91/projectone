import { Check } from 'lucide-react';
import Reveal from '@/components/reveal';
import InquiryTrigger from '@/components/inquiry-trigger';
import type { PlatformDepth } from '@/lib/platform-depth';

/**
 * The depth block on the seven `/technology/{platform}` pages: what actually
 * goes wrong in that system, the recurring work, and the line.
 *
 * `notOurs` is not optional and must not be softened. `scope-boundaries.md` §5
 * forbids claiming implementation, configuration, administration or vendor
 * certification for any of these platforms, and a platform page is the single
 * easiest place on the site to imply all four by omission. Stating it plainly
 * is also what the honest half of the search demand is looking for.
 */
export default function PlatformDepthSection({ platform }: { platform: PlatformDepth }) {
  return (
    <>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-3 mb-10">
            <>
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">
                What actually goes wrong
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                The Four Things We Find in a {platform.name} File
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                None of these are software faults. They are accounting failures that the
                software will accept without complaint, which is what makes them expensive —
                nothing errors, and the file looks fine.
              </p>
            </>
          </Reveal>

          <div className="space-y-6">
            {platform.failureModes.map((item, i) => (
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
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">
                The recurring routine
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                What Runs Every Month
              </h2>
            </>
          </Reveal>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {platform.routine.map((item, i) => (
              <Reveal key={item} delay={Math.min(i * 0.04, 0.2)}>
                <li className="h-full">
                  <InquiryTrigger
                    className="flex h-full items-start gap-3 rounded-xl border border-border/70 bg-white p-4 sm:p-5 transition-colors hover:border-primary/40"
                    source={`/technology/${platform.slug}`}
                    title={`Talk to Us About ${platform.name}`}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:h-5 sm:w-5" aria-hidden="true" />
                    <span className="text-sm leading-6 sm:text-base">{item}</span>
                  </InquiryTrigger>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.12}>
            <div className="mt-8 rounded-2xl border-l-4 border-accent bg-white p-5 sm:p-7">
              <h3 className="text-lg font-bold text-primary">What we do not do in {platform.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground">{platform.notOurs}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
