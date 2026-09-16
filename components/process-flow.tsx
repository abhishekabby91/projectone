import Link from 'next/link';
import { ArrowRight, CheckCircle2, KeyRound, MessageSquare, Play } from 'lucide-react';
import Reveal from '@/components/reveal';
import ProcessRail from '@/components/process-rail';

/**
 * The four phases of starting an engagement, on a connected rail.
 *
 * The structure - numbered nodes hanging off a single line, each with an icon,
 * a title and a short line of copy - is the clearest way to show a sequence,
 * and it answers the question the homepage otherwise leaves open: what actually
 * happens if I get in touch. That is principle 1 in AI-WEBSITE-GUIDE.md,
 * reduce uncertainty before selling.
 *
 * It is deliberately NOT four unrelated colours. The reference this came from
 * used teal, orange, red and purple, which reads as a stock template and would
 * fight a navy-and-gold identity - the same failure mode CLAUDE.md records for
 * the emoji icons that were removed sitewide. So it follows the rule the
 * service illustrations already use: navy line work, a gold rail, and the
 * burnt-orange accent spent exactly once, on the step where the boundary
 * matters. Colour here carries meaning rather than decoration.
 *
 * The copy is a fair compression of the seven documented steps on
 * /delivery-framework/onboarding, not a new claim, and every card links there
 * so the full version is one click away.
 *
 * The phases and the heading are props with the homepage's values as defaults,
 * so an industry page can tell the same four-stage story in its own vocabulary
 * without a second component and without repeating the homepage's copy
 * verbatim on another URL. Two rules if you pass your own: keep it to four
 * (the rail is inset to node centres across four columns) and spend the accent
 * exactly once, on the phase where the boundary sits.
 */

export interface ProcessPhase {
  n: string;
  title: string;
  body: string;
  /** The single accent on the graphic. It marks the boundary, not the finish. */
  accent?: boolean;
}

/** Icons are positional, so a caller supplying its own phases inherits them. */
const ICONS = [MessageSquare, KeyRound, Play, CheckCircle2];

const PHASES: ProcessPhase[] = [
  {
    n: '01',
    title: 'Scope',
    body: 'A free half-hour call. What is falling behind, which systems it lives in, and who reviews the output.',
  },
  {
    n: '02',
    title: 'Set up',
    body: 'Access established under your security protocols, and your existing workflows documented before anything moves.',
  },
  {
    n: '03',
    title: 'Soft launch',
    body: 'A defined slice runs alongside your current process, so both sides can judge it before the volume arrives.',
  },
  {
    n: '04',
    title: 'Steady state',
    body: 'Full handover of the agreed scope. Review, judgement and sign-off stay with your team, in every market.',
    /** The one accent on this graphic. It marks the boundary, not the finish. */
    accent: true,
  },
];

interface ProcessFlowProps {
  phases?: ProcessPhase[];
  eyebrow?: string;
  title?: string;
  lead?: string;
}

export default function ProcessFlow({
  phases = PHASES,
  eyebrow = 'How it starts',
  title = 'Four Phases, and You Can Stop After Any of Them',
  lead = 'Nothing transfers on the first call. The work moves in stages, each one small enough to judge before the next begins.',
}: ProcessFlowProps = {}) {
  return (
    <section className="w-full bg-white px-6 md:px-8 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-3xl space-y-3 md:mb-14">
          <>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent sm:text-sm">
                {eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary text-balance md:text-3xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">{lead}</p>
          </>
        </Reveal>

        <div className="relative">
          {/* The rail. Spans node centre to node centre across four columns, so
              it stops at the first and last node rather than running off.
              `ProcessRail` draws it left to right once the row is in view, which
              is what makes the four phases read as a sequence rather than four
              cards that happen to be in a row. It renders the full-width rail
              under `prefers-reduced-motion`, so the connection is never lost —
              only the drawing of it is. */}
          <ProcessRail />

          <ol className="relative grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-6">
            {phases.map((phase, i) => {
              const Icon = ICONS[i] ?? ICONS[ICONS.length - 1];
              return (
              <Reveal key={phase.n} delay={Math.min(i * 0.08, 0.3)}>
                <li className="flex h-full flex-col items-center text-center">
                  <span
                    className={`relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-white font-serif text-base font-bold tabular-nums sm:h-14 sm:w-14 sm:text-lg ${
                      phase.accent
                        ? 'border-accent text-accent'
                        : 'border-border text-primary'
                    }`}
                  >
                    {phase.n}
                  </span>

                  <div className="mt-4 flex h-full w-full flex-col rounded-xl border border-border bg-input p-3.5 sm:mt-5 sm:p-6">
                    <Icon
                      className={`mx-auto mb-2 h-5 w-5 sm:mb-3 sm:h-6 sm:w-6 ${phase.accent ? 'text-accent' : 'text-primary'}`}
                      aria-hidden="true"
                    />
                    <h3 className="mb-1.5 font-bold text-primary text-sm leading-snug sm:mb-2 sm:text-lg">{phase.title}</h3>
                    <p className="text-xs leading-5 text-muted sm:text-sm sm:leading-relaxed">{phase.body}</p>
                  </div>
                </li>
              </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.28} className="mt-8 flex justify-center">
          <Link
            href="/delivery-framework/onboarding"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-input"
          >
            See the full seven-step onboarding
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
