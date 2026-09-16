/**
 * Bespoke line illustrations, one per industry.
 *
 * The fourth set, drawn 2026-09-16, to the same system as
 * `components/service-illustration.tsx` — read the note at the top of that file
 * before adding to any of them. Same 200x150 viewBox, same 1.6 stroke, navy
 * line work through `currentColor`, the brand gold as a single ground rule, and
 * **the burnt-orange accent spent exactly once per drawing**, always on the
 * thing that needs a human decision.
 *
 * **Why drawn rather than photographed.** The brief asked for right-to-use
 * imagery per industry. Original line work is the only kind of image on this
 * site whose licence is not a question at all: it is ours, it needs no
 * attribution, it cannot be revoked, and no licence audit can ever land on it.
 * It also costs nothing at runtime — inline SVG, no request, nothing to
 * lazy-load — and it is the system the rest of the site already uses. A stock
 * photograph of a building or a laptop would say nothing a competitor's could
 * not, which is the same argument `CLAUDE.md` already records against the
 * homepage's photographic hero.
 *
 * Each shows the mechanic the page describes, not a category motif:
 *
 * - real estate: three properties each keeping its own book, rolling up into
 *   one owner statement — the accent is the approval that releases it, which
 *   never moves to us
 * - technology: one contract billed once, released across the term as a
 *   staircase into the ledger — the accent is the recognition policy marker,
 *   because the ASC 606 judgement is the client's CPA or auditor
 * - professional services: the three-way reconciliation — bank, trust ledger
 *   and the sum of client balances — with the accent on the review signature,
 *   which a responsible person in the firm has to give
 * - e-commerce: one net settlement fanning back out into gross, fees, refunds
 *   and reserve, accent on the component that will not resolve
 * - healthcare: charges paired against remittances, accent on the one that did
 *   not pair and needs somebody to decide what it is
 * - CPA firms: prepared files queueing into a review gate, accent on the gate —
 *   the only part of the work that requires the licence
 *
 * Decorative, so every one carries `aria-hidden`: each sits beside copy that
 * already says the same thing, and exposing them would make a screen reader
 * announce it twice.
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

/** Real estate: three properties, each with its own book, rolling into one statement. */
function RealEstate() {
  return (
    <Frame>
      {[22, 58, 94].map((x) => (
        <g key={x}>
          {/* the property */}
          <path d={`M${x} 46 l14 -12 l14 12`} />
          <rect x={x + 3} y={46} width={22} height={20} rx={2} />
          {/* its own book */}
          {[74, 80, 86].map((y) => (
            <line key={y} x1={x + 3} y1={y} x2={x + 25} y2={y} opacity={0.75} />
          ))}
          <path d={`M${x + 14} 92 L100 104`} strokeDasharray="3 3" />
        </g>
      ))}
      {/* one statement assembled from them */}
      <rect x={76} y={104} width={48} height={26} rx={3} />
      {[111, 117].map((y) => (
        <line key={y} x1={82} y1={y} x2={112} y2={y} opacity={0.75} />
      ))}
      {/* the approval that releases it — never ours */}
      <rect x={140} y={104} width={26} height={26} rx={4} stroke={ACCENT} />
      <path d="M146 117 l5 5 l9 -11" stroke={ACCENT} />
      <line x1={124} y1={117} x2={140} y2={117} />
    </Frame>
  );
}

/** Technology: one contract billed once, released across the term. */
function Technology() {
  return (
    <Frame>
      {/* the contract, billed in one event */}
      <rect x={20} y={30} width={34} height={44} rx={3} />
      {[40, 47, 54].map((y) => (
        <line key={y} x1={26} y1={y} x2={48} y2={y} opacity={0.75} />
      ))}
      <path d="M54 52 L58 52" />
      {/* the deferred balance running down across the term, and the equal
          amounts recognised underneath it. Deliberately a descending balance
          rather than a rising bar chart — this drawing is about a liability
          being released on schedule, not about growth, and a growth curve
          would be a claim the page does not make. */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={78 + i * 16} y={34 + i * 10} width={11} height={60 - i * 10} rx={1.5} opacity={0.85} />
      ))}
      <line x1={74} y1={96} x2={176} y2={96} opacity={0.5} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={`r${i}`} x={78 + i * 16} y={102} width={11} height={9} rx={1.5} opacity={0.55} />
      ))}
      {/* the recognition policy marker — the CPA's or auditor's judgement,
          sitting on the handoff between the contract and the schedule */}
      <circle cx={65} cy={52} r={7} stroke={ACCENT} />
      <line x1={65} y1={48} x2={65} y2={53} stroke={ACCENT} />
      <line x1={65} y1={56} x2={65} y2={56.5} stroke={ACCENT} />
    </Frame>
  );
}

/** Professional services: the three-way reconciliation, and who signs it. */
function ProfessionalServices() {
  return (
    <Frame>
      {/* bank */}
      <rect x={20} y={28} width={44} height={22} rx={3} />
      <line x1={26} y1={39} x2={52} y2={39} opacity={0.75} />
      {/* trust ledger control */}
      <rect x={136} y={28} width={44} height={22} rx={3} />
      <line x1={142} y1={39} x2={168} y2={39} opacity={0.75} />
      {/* the sum of client balances */}
      <rect x={78} y={86} width={44} height={26} rx={3} />
      {[95, 103].map((y) => (
        <line key={y} x1={84} y1={y} x2={110} y2={y} opacity={0.75} />
      ))}
      {/* three sides that must agree */}
      <path d="M64 39 L136 39" strokeDasharray="4 3" />
      <path d="M40 50 L86 86" strokeDasharray="4 3" />
      <path d="M160 50 L114 86" strokeDasharray="4 3" />
      {/* the review signature the firm has to give */}
      <line x1={72} y1={128} x2={128} y2={128} stroke={ACCENT} />
      <path d="M80 127 c6 -9 11 6 17 -3 c4 -6 8 4 12 -1" stroke={ACCENT} opacity={0.6} />
    </Frame>
  );
}

/** E-commerce: one net settlement, decomposed back to its parts. */
function Ecommerce() {
  return (
    <Frame>
      {/* the deposit that landed */}
      <rect x={20} y={62} width={36} height={24} rx={3} />
      <line x1={26} y1={74} x2={44} y2={74} opacity={0.75} />
      {/* fanned back out into what it was made of */}
      {[
        [30, 'gross'],
        [56, 'fees'],
        [82, 'refunds'],
      ].map(([y], i) => (
        <g key={i}>
          <path d={`M56 74 L96 ${(y as number) + 10}`} strokeDasharray="3 3" />
          <rect x={98} y={y as number} width={46} height={20} rx={2.5} />
          <line x1={104} y1={(y as number) + 10} x2={128} y2={(y as number) + 10} opacity={0.7} />
        </g>
      ))}
      {/* the reserve nobody can resolve yet */}
      <path d="M56 74 L96 118" strokeDasharray="3 3" stroke={ACCENT} />
      <rect x={98} y={108} width={46} height={20} rx={2.5} stroke={ACCENT} />
      <line x1={104} y1={118} x2={122} y2={118} stroke={ACCENT} opacity={0.8} />
    </Frame>
  );
}

/** Healthcare: charges paired to remittances, and the one that did not pair. */
function Healthcare() {
  return (
    <Frame>
      {[30, 54, 78].map((y) => (
        <g key={y}>
          <rect x={22} y={y} width={44} height={16} rx={2.5} />
          <line x1={28} y1={y + 8} x2={48} y2={y + 8} opacity={0.65} />
          <rect x={112} y={y} width={44} height={16} rx={2.5} />
          <line x1={118} y1={y + 8} x2={138} y2={y + 8} opacity={0.65} />
          <path d={`M66 ${y + 8} L112 ${y + 8}`} strokeDasharray="3 3" opacity={0.8} />
        </g>
      ))}
      {/* the charge with no remittance against it */}
      <rect x={22} y={102} width={44} height={16} rx={2.5} stroke={ACCENT} />
      <line x1={28} y1={110} x2={48} y2={110} stroke={ACCENT} opacity={0.7} />
      <path d="M66 110 L96 110" strokeDasharray="3 3" stroke={ACCENT} />
      <circle cx={104} cy={110} r={7} stroke={ACCENT} />
      <line x1={104} y1={106} x2={104} y2={111} stroke={ACCENT} />
      <line x1={104} y1={114} x2={104} y2={114.5} stroke={ACCENT} />
    </Frame>
  );
}

/** CPA firms: prepared files queueing into the one gate that needs the licence. */
function CpaFirms() {
  return (
    <Frame>
      {[26, 52, 78].map((y, i) => (
        <g key={y}>
          <rect x={20 + i * 6} y={y} width={44} height={18} rx={2.5} opacity={1 - i * 0.12} />
          {[y + 6, y + 12].map((ly) => (
            <line key={ly} x1={26 + i * 6} y1={ly} x2={52 + i * 6} y2={ly} opacity={0.65} />
          ))}
          <path d={`M${64 + i * 6} ${y + 9} L124 ${y + 9}`} strokeDasharray="3 3" opacity={0.7} />
        </g>
      ))}
      {/* one queue, one gate */}
      <line x1={124} y1={30} x2={124} y2={100} opacity={0.5} />
      <rect x={134} y={52} width={30} height={30} rx={4} stroke={ACCENT} />
      <path d="M141 67 l6 6 l10 -12" stroke={ACCENT} />
      <line x1={124} y1={67} x2={134} y2={67} stroke={ACCENT} />
      {/* signed, and out */}
      <line x1={134} y1={112} x2={164} y2={112} />
    </Frame>
  );
}

const ILLUSTRATIONS: Record<string, () => React.JSX.Element> = {
  'real-estate': RealEstate,
  technology: Technology,
  'professional-services': ProfessionalServices,
  ecommerce: Ecommerce,
  healthcare: Healthcare,
  'cpa-firms': CpaFirms,
};

export default function IndustryIllustration({
  industry,
  className = '',
}: {
  industry: string;
  className?: string;
}) {
  const Art = ILLUSTRATIONS[industry];
  if (!Art) return null;
  return (
    <div className={className}>
      <Art />
    </div>
  );
}
