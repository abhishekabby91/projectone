import { AlertCircle } from 'lucide-react';
import Reveal from '@/components/reveal';

export interface DepthBlockProps {
  /** The assumption the reader arrives with, and what is actually true. */
  misconception: { claim: string; reality: string };
  /** What the subject's specifics change about the ledger itself. */
  ledger: { h: string; p: string }[];
  /** Full heading over the ledger section. */
  ledgerHeading: string;
  /**
   * Heading over the boundary block. This is a prop rather than a constant
   * because the licensed party differs by market: a US page routes to the
   * client's CPA, a UK page to the registered practitioner, an Australian page
   * to the registered BAS or tax agent. Using the US phrasing in the other two
   * markets is the single fastest way to signal the copy was not written for
   * the reader — see CLAUDE.md, "Each market uses that market's own word".
   */
  boundaryHeading: string;
  boundary: string;
}

/**
 * The shared depth block: the misconception the reader actually arrives with,
 * what the subject changes about the ledger, and the boundary.
 *
 * One renderer behind both `components/state-depth.tsx` (the three US state
 * pages) and `components/market-depth.tsx` (the UK and AU sub-market pages).
 * The copy is what differs between pages and it lives in `lib/us-states.ts` and
 * `lib/market-depth.ts` — read the note at the top of either before adding a
 * page, because same-shaped pages in one cluster are how the registration trio
 * first measured 53% against itself.
 */
export default function DepthBlock({
  misconception,
  ledger,
  ledgerHeading,
  boundaryHeading,
  boundary,
}: DepthBlockProps) {
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
                  <span>{misconception.claim}</span>
                </p>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">
                  {misconception.reality}
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
                {ledgerHeading}
              </h2>
            </>
          </Reveal>

          <div className="space-y-6">
            {ledger.map((item, i) => (
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
              <h3 className="text-lg font-bold text-primary">{boundaryHeading}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground">{boundary}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
