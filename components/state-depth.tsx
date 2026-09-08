import { AlertCircle } from 'lucide-react';
import Reveal from '@/components/reveal';
import type { StateDepth } from '@/lib/us-states';

/**
 * The depth block on the three US state pages: the misconception the state's
 * businesses actually arrive with, what its specifics change about the ledger,
 * and the boundary.
 *
 * One renderer, three genuinely different sets of copy in `lib/us-states.ts` —
 * read the note at the top of that file before adding a fourth state.
 */
export default function StateDepth({ state }: { state: StateDepth }) {
  return (
    <>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4">
            <>
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">
                The assumption worth checking
              </span>
              <div className="rounded-2xl border border-border bg-input p-5 sm:p-7">
                <p className="flex items-start gap-3 text-base sm:text-lg font-semibold text-primary">
                  <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{state.misconception.claim}</span>
                </p>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">
                  {state.misconception.reality}
                </p>
              </div>
            </>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-3 mb-10">
            <>
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">
                What it changes in the ledger
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                {state.name} Specifics, in Terms of the Books
              </h2>
            </>
          </Reveal>

          <div className="space-y-6">
            {state.ledger.map((item, i) => (
              <Reveal key={item.h} delay={Math.min(i * 0.06, 0.24)}>
                <div className="rounded-2xl border border-border bg-white p-5 sm:p-7">
                  <h3 className="text-lg font-bold text-primary">{item.h}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{item.p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl border-l-4 border-accent bg-white p-5 sm:p-7">
              <h3 className="text-lg font-bold text-primary">
                What stays with your CPA
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground">{state.boundary}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
