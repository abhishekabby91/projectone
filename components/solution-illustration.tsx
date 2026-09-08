/**
 * Bespoke line illustrations for the engagement models and the registration hub.
 *
 * The second set, drawn 2026-09-07 to the same system as
 * `components/service-illustration.tsx` — read the note at the top of that file
 * before adding to either. Same 200x150 viewBox, same 1.6 stroke, navy line work
 * through `currentColor`, the brand gold as a single ground rule, and **the
 * burnt-orange accent spent exactly once per drawing**, always on the thing that
 * needs a human decision. Spend it twice and the drawing stops pointing at
 * anything.
 *
 * These are drawn rather than sourced or generated, and each shows the actual
 * mechanic of the model rather than a generic office motif:
 *
 * - augmentation: extra hands joining an existing queue, with the review gate
 *   still owned by the client — so the accent is the gate
 * - offshore: the working-day boundary, with prepared work crossing it into a
 *   reviewer's tray — the accent is the point of arrival, where judgement starts
 * - dedicated: a standing group attached to one portfolio, with a single named
 *   point of contact carrying the accent
 * - back office: many recurring inputs collapsing into one lane, and the
 *   signature line at the end left blank
 * - registration: the certificate and the ledger that opens behind it, with the
 *   accent on the fork — the entity-and-state choice that stays with the
 *   client's attorney and CPA
 *
 * Decorative, so every one carries `aria-hidden`: each sits beside copy that
 * already says the same thing. Inline SVG — no extra request, nothing to
 * lazy-load.
 */

const ACCENT = 'var(--color-accent)';
const GOLD = 'var(--color-secondary)';

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-auto w-full text-primary"
    >
      <g opacity={0.12}>
        {[26, 50, 74, 98, 122].map((y) => (
          <line key={y} x1={14} y1={y} x2={186} y2={y} />
        ))}
      </g>
      {children}
      <line x1={14} y1={140} x2={186} y2={140} stroke={GOLD} strokeWidth={2.4} />
    </svg>
  );
}

/** Augmentation: three existing lanes, one added, one review gate that is yours. */
function Augmentation() {
  return (
    <Frame>
      {/* the work waiting */}
      {[28, 44, 60, 76].map((y) => (
        <line key={y} x1={20} y1={y} x2={54} y2={y} />
      ))}
      {/* three standing columns, and a fourth added */}
      {[70, 90, 110].map((x) => (
        <rect key={x} x={x} y={30} width={12} height={64} rx={3} />
      ))}
      <rect x={130} y={30} width={12} height={64} rx={3} strokeDasharray="4 3" />
      {/* everything converges on one gate */}
      <path d="M76 100 L150 112" />
      <path d="M96 100 L150 112" />
      <path d="M116 100 L150 112" />
      <path d="M136 100 L150 112" strokeDasharray="4 3" />
      {/* the review gate — the decision that never moves */}
      <rect x={150} y={100} width={26} height={24} rx={4} stroke={ACCENT} />
      <path d="M156 112 l5 5 l9 -10" stroke={ACCENT} />
    </Frame>
  );
}

/** Offshore: the working-day boundary, and work arriving finished on the far side. */
function Offshore() {
  return (
    <Frame>
      {/* the day, half of it elsewhere */}
      <circle cx={54} cy={62} r={28} />
      <path d="M54 34 A28 28 0 0 1 54 90 Z" opacity={0.18} fill="currentColor" stroke="none" />
      <path d="M54 44 L54 62 L66 68" />
      {/* the boundary */}
      <line x1={104} y1={22} x2={104} y2={118} strokeDasharray="5 4" opacity={0.5} />
      {/* prepared work crossing it */}
      <path d="M84 62 L124 62" />
      <path d="M116 55 L124 62 L116 69" />
      {/* the tray it lands in, ready for a reviewer */}
      <path d="M134 74 L134 100 L180 100 L180 74" />
      <path d="M134 74 L146 62 L168 62 L180 74" />
      {[80, 88].map((y) => (
        <line key={y} x1={142} y1={y} x2={172} y2={y} opacity={0.45} />
      ))}
      {/* where judgement starts */}
      <circle cx={157} cy={54} r={5} stroke={ACCENT} />
    </Frame>
  );
}

/** Dedicated: a standing group on one portfolio, one named point of contact. */
function Dedicated() {
  return (
    <Frame>
      {/* the portfolio they work, and only they work */}
      <rect x={112} y={44} width={62} height={64} rx={5} />
      {[58, 72, 86].map((y) => (
        <line key={y} x1={124} y1={y} x2={162} y2={y} opacity={0.45} />
      ))}
      {/* the standing group */}
      {[38, 76].map((y) => (
        <g key={y}>
          <circle cx={38} cy={y} r={9} />
          <path d={`M26 ${y + 22} a12 12 0 0 1 24 0`} />
          <path d={`M52 ${y + 6} L112 ${y === 38 ? 62 : 82}`} opacity={0.55} />
        </g>
      ))}
      {/* the single point of contact */}
      <circle cx={38} cy={114} r={9} stroke={ACCENT} />
      <path d="M26 136 a12 12 0 0 1 24 0" stroke={ACCENT} />
      <path d="M52 120 L112 100" stroke={ACCENT} opacity={0.7} />
    </Frame>
  );
}

/** Back office: many recurring inputs, one lane, and a signature line left blank. */
function BackOffice() {
  return (
    <Frame>
      {/* the recurring inputs */}
      {[28, 46, 64, 82, 100].map((y) => (
        <g key={y}>
          <rect x={18} y={y - 6} width={26} height={12} rx={3} />
          <path d={`M46 ${y} L74 64`} opacity={0.4} />
        </g>
      ))}
      {/* the one lane they collapse into */}
      <path d="M74 52 L102 64 L74 76 Z" />
      <line x1={102} y1={64} x2={128} y2={64} />
      {/* what comes back out */}
      <rect x={128} y={34} width={50} height={62} rx={4} />
      {[48, 58, 68].map((y) => (
        <line key={y} x1={138} y1={y} x2={168} y2={y} opacity={0.45} />
      ))}
      {/* the line that stays blank until someone signs it */}
      <line x1={138} y1={84} x2={168} y2={84} stroke={ACCENT} strokeDasharray="4 3" />
    </Frame>
  );
}

/** Registration: the certificate, the ledger behind it, and the fork that is not ours. */
function Registration() {
  return (
    <Frame>
      {/* the fork: which entity, which state — decided elsewhere */}
      <path d="M22 96 L44 96 L60 74" stroke={ACCENT} />
      <path d="M44 96 L60 118" stroke={ACCENT} opacity={0.55} />
      <circle cx={22} cy={96} r={4} stroke={ACCENT} />
      {/* the certificate */}
      <rect x={70} y={26} width={58} height={72} rx={4} />
      {[42, 52, 62].map((y) => (
        <line key={y} x1={80} y1={y} x2={118} y2={y} opacity={0.45} />
      ))}
      <circle cx={99} cy={80} r={9} />
      <path d="M95 80 l3 3 l6 -7" />
      {/* the books that open the moment it exists */}
      <path d="M136 46 L176 46 L176 112 L136 112 Z" />
      <line x1={156} y1={46} x2={156} y2={112} />
      {[62, 74, 86, 98].map((y) => (
        <g key={y} opacity={0.4}>
          <line x1={142} y1={y} x2={151} y2={y} />
          <line x1={161} y1={y} x2={170} y2={y} />
        </g>
      ))}
    </Frame>
  );
}

const DRAWINGS = {
  augmentation: Augmentation,
  offshore: Offshore,
  dedicated: Dedicated,
  'back-office': BackOffice,
  registration: Registration,
} as const;

export type SolutionIllustrationKey = keyof typeof DRAWINGS;

export default function SolutionIllustration({ name }: { name: SolutionIllustrationKey }) {
  const Drawing = DRAWINGS[name];
  return <Drawing />;
}
