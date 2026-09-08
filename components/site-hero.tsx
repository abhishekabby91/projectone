import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * The homepage hero.
 *
 * Replaces the stock-photo carousel (2026-09-08). Three reasons it went, all
 * of them visible in a screenshot: the photography was generic stock — pens, a
 * calculator, a spreadsheet — and said nothing a competitor's could not; the
 * white headline sat on a mid-tone photograph at a contrast ratio no fixed
 * type colour could survive across three rotating images; and it belonged to a
 * different visual system than everything below it, which is navy, gold and
 * hand-drawn line work.
 *
 * What replaces it is built from what the site already owns: the navy, the
 * gold ground rule, the `ledger-lines-dark` motif from globals.css, and the
 * drawing language of `service-illustration.tsx`. No new photography, nothing
 * to license, nothing to art-direct later.
 *
 * Two things to preserve if you touch it:
 *
 * - **The `h1` is the visible headline.** The carousel kept a separate
 *   `sr-only` h1 because its visible titles rotated; there is one headline
 *   now, so it is the h1 and there is exactly one per page.
 * - **The drawing is `aria-hidden`.** It sits beside copy that already says
 *   the same thing, and the accent is spent once — on the flagged exception,
 *   the thing that needs a human decision. That is the rule the whole
 *   illustration system runs on; read the note atop `service-illustration.tsx`
 *   before changing a stroke.
 */
export default function SiteHero({
  eyebrow,
  title,
  lead,
  note,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  note?: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}) {
  return (
    <section
      data-section="hero"
      className="relative overflow-hidden bg-primary"
      style={{
        backgroundImage:
          'radial-gradient(120% 130% at 12% 0%, var(--color-primary-light) 0%, var(--color-primary) 44%, var(--color-primary-dark) 100%)',
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 ledger-lines-dark opacity-60" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 sm:py-18 md:px-8 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span aria-hidden="true" className="block h-px w-8 bg-secondary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-secondary sm:text-xs">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-[2rem] font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex h-13 items-center justify-center rounded-xl bg-accent px-7 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(184,68,8,0.28)] transition-colors hover:bg-accent-light"
            >
              {primaryCta.text}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/30 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondaryCta.text}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {note ? <p className="mt-7 text-sm leading-6 text-white/60">{note}</p> : null}
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 sm:p-8">
          {/* Same system as components/service-illustration.tsx: one 200x150
              viewBox, 1.6 stroke, gold ground rule, accent spent exactly once —
              here on the flagged exception, which is the only thing in the
              picture that needs a person. */}
          <svg
            viewBox="0 0 200 150"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-auto w-full text-white/85"
          >
            <g opacity={0.14}>
              {[26, 50, 74, 98, 122].map((y) => (
                <line key={y} x1={14} y1={y} x2={186} y2={y} />
              ))}
            </g>

            {/* the records that arrive */}
            <rect x={22} y={30} width={54} height={72} rx={4} />
            {[44, 54, 64, 74, 84].map((y) => (
              <line key={y} x1={30} y1={y} x2={y === 84 ? 58 : 68} y2={y} opacity={0.45} />
            ))}

            {/* prepared, and moving */}
            <path d="M80 54 L102 62" opacity={0.6} />
            <path d="M80 68 L102 68" opacity={0.6} />
            <path d="M80 82 L102 74" opacity={0.6} />

            {/* the reviewable pack */}
            <rect x={106} y={34} width={52} height={64} rx={4} />
            {[48, 58, 68].map((y) => (
              <line key={y} x1={114} y1={y} x2={y === 68 ? 138 : 150} y2={y} opacity={0.45} />
            ))}

            {/* the one exception, flagged rather than guessed */}
            <circle cx={132} cy={84} r={7} stroke="var(--color-accent-light)" />
            <path d="M132 80.5 L132 84.5" stroke="var(--color-accent-light)" />
            <path d="M132 87 L132 87.4" stroke="var(--color-accent-light)" />

            {/* handed on for review */}
            <path d="M166 66 L182 66" stroke="var(--color-accent-light)" />
            <path d="M177 61 L182 66 L177 71" stroke="var(--color-accent-light)" />

            <line x1={14} y1={140} x2={186} y2={140} stroke="var(--color-secondary)" strokeWidth={2.4} />
          </svg>

          <p className="mt-6 text-center text-[13px] leading-6 text-white/65">
            Prepared, checked, and handed to your reviewer — with anything the records cannot
            settle flagged as a question rather than posted as a guess.
          </p>
        </div>
      </div>
    </section>
  );
}
