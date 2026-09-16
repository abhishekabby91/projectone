/**
 * Illustrations for the industry pages — one per industry.
 *
 * **These are deliberately not the line-diagram set.** The service, solution
 * and region drawings (`service-illustration.tsx`, `solution-illustration.tsx`,
 * `region-illustration.tsx`) are strict outline schematics: navy line work, no
 * fill, no people. That reads as precise and it also reads as cold, and on the
 * industry pages — which are the pages a salesperson sends to a prospect cold —
 * the owner asked for something warmer. So this set keeps the family's palette
 * and its meaning-carrying accent, and changes the rendering:
 *
 * - **filled shapes, not outlines.** Navy, a lighter navy, gold and cream as
 *   flat tints, so each drawing reads as an image rather than as a wiring
 *   diagram.
 * - **people in every scene.** Simple figures — a head and a torso, no faces.
 *   Faceless is a deliberate choice, not a shortcut: a drawn face implies a
 *   specific person, and `AI-WEBSITE-GUIDE.md` forbids implying clients or
 *   staff the company cannot evidence. It also sidesteps depicting one kind of
 *   person as the default reader.
 * - **a soft ground panel** behind each scene, with the brand gold still laid
 *   along the base as the family signature.
 *
 * **What has not changed, and must not.** The burnt-orange accent is still
 * spent exactly once per drawing, always on the thing that needs a human
 * decision — the approval, the recognition policy, the signature, the
 * unresolved item, the review gate. That restraint is the entire system. Spend
 * it twice and the drawing stops pointing anywhere, and the set stops belonging
 * with the other three.
 *
 * **Still drawn, still ours.** The brief asked for right-to-use imagery.
 * Original artwork is the only kind whose licence is not a question: no
 * attribution, no expiry, no audit. Inline SVG, so no request and nothing to
 * lazy-load. All `aria-hidden` — each sits beside copy that already says the
 * same thing, and exposing them would make a screen reader announce it twice.
 *
 * The viewBox is 240x180 rather than the 200x150 the outline sets use, because
 * a scene with a figure in it needs the extra room. Keep every drawing on that
 * box so the six stay interchangeable.
 */

const NAVY = 'var(--color-primary)';
const NAVY_LIGHT = 'var(--color-primary-light)';
const GOLD = 'var(--color-secondary)';
const ACCENT = 'var(--color-accent)';
const CREAM = 'var(--color-input)';

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      aria-hidden="true"
      className="h-auto w-full"
    >
      {/* the ground panel — warm, soft, and the reason this set reads as art
          rather than as a schematic */}
      <rect x={6} y={8} width={228} height={156} rx={14} fill={CREAM} />
      <rect x={6} y={8} width={228} height={156} rx={14} stroke={GOLD} strokeOpacity={0.35} strokeWidth={1.2} />
      {children}
      {/* the family signature: gold along the base */}
      <rect x={30} y={168} width={180} height={4} rx={2} fill={GOLD} />
    </svg>
  );
}

/**
 * One figure. Head plus torso, no face — see the note above.
 * `tone` sets the fill; `s` scales the whole figure about its own feet.
 */
function Person({
  x,
  y,
  tone = NAVY,
  s = 1,
  opacity = 1,
}: {
  x: number;
  y: number;
  tone?: string;
  s?: number;
  opacity?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} opacity={opacity}>
      <circle cx={0} cy={-26} r={7.5} fill={tone} />
      <path d="M-11 0 c0 -10 4.5 -16 11 -16 c6.5 0 11 6 11 16 z" fill={tone} />
    </g>
  );
}

/** Real estate: a portfolio kept property by property, and the statement it produces. */
function RealEstate() {
  return (
    <Frame>
      {/* the properties, filled and stepped so they read as a portfolio */}
      <g>
        <rect x={26} y={74} width={30} height={48} rx={3} fill={NAVY} opacity={0.9} />
        <path d="M22 74 L41 58 L60 74 Z" fill={GOLD} />
        <rect x={34} y={88} width={6} height={7} rx={1} fill={CREAM} opacity={0.85} />
        <rect x={44} y={88} width={6} height={7} rx={1} fill={CREAM} opacity={0.85} />
        <rect x={34} y={101} width={6} height={7} rx={1} fill={CREAM} opacity={0.85} />
        <rect x={44} y={101} width={6} height={7} rx={1} fill={CREAM} opacity={0.85} />
      </g>
      <g opacity={0.55}>
        <rect x={64} y={88} width={24} height={34} rx={3} fill={NAVY_LIGHT} />
        <path d="M61 88 L76 76 L91 88 Z" fill={GOLD} />
      </g>
      <g opacity={0.35}>
        <rect x={94} y={98} width={20} height={24} rx={3} fill={NAVY_LIGHT} />
        <path d="M91 98 L104 88 L117 98 Z" fill={GOLD} />
      </g>
      <rect x={20} y={122} width={100} height={3} rx={1.5} fill={NAVY} opacity={0.18} />

      {/* the owner statement, and the person who reads it */}
      <rect x={136} y={52} width={62} height={72} rx={5} fill="#fff" stroke={NAVY} strokeOpacity={0.25} strokeWidth={1.4} />
      {[64, 74, 84].map((y) => (
        <rect key={y} x={146} y={y} width={42} height={3.5} rx={1.75} fill={NAVY} opacity={0.3} />
      ))}
      <rect x={146} y={94} width={26} height={3.5} rx={1.75} fill={NAVY} opacity={0.3} />
      {/* the approval — the one thing that never moves to us */}
      <circle cx={186} cy={108} r={13} fill={ACCENT} />
      <path d="M180 108 l4.5 4.5 l8 -9" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />

      <Person x={126} y={154} tone={NAVY} s={1} />
      <Person x={214} y={154} tone={NAVY_LIGHT} s={0.85} opacity={0.7} />
    </Frame>
  );
}

/** Technology: a deferred balance released across the contract term. */
function Technology() {
  return (
    <Frame>
      {/* the screen the work happens in */}
      <rect x={70} y={32} width={140} height={86} rx={7} fill="#fff" stroke={NAVY} strokeOpacity={0.25} strokeWidth={1.4} />
      <rect x={70} y={32} width={140} height={14} rx={7} fill={NAVY} opacity={0.9} />
      <circle cx={80} cy={39} r={2.2} fill={GOLD} />
      <circle cx={88} cy={39} r={2.2} fill={CREAM} opacity={0.6} />

      {/* the balance running down, and the equal amounts released beneath it.
          Descending on purpose — this is a liability being released on
          schedule, not a growth curve, and a growth curve would be a claim the
          page does not make. */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={84 + i * 20}
          y={56 + i * 7}
          width={13}
          height={46 - i * 7}
          rx={3}
          fill={i === 0 ? NAVY : NAVY_LIGHT}
          opacity={1 - i * 0.1}
        />
      ))}
      <rect x={80} y={104} width={122} height={2.5} rx={1.25} fill={NAVY} opacity={0.2} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={`r${i}`} x={84 + i * 20} y={109} width={13} height={5} rx={2.5} fill={GOLD} opacity={0.85} />
      ))}

      {/* the recognition policy — the CPA's or auditor's judgement, not ours */}
      <circle cx={62} cy={62} r={13} fill={ACCENT} />
      <rect x={60.4} y={55} width={3.2} height={9} rx={1.6} fill="#fff" />
      <circle cx={62} cy={68} r={1.9} fill="#fff" />

      <Person x={40} y={152} tone={NAVY} s={1} />
      <rect x={62} y={134} width={148} height={3} rx={1.5} fill={NAVY} opacity={0.15} />
    </Frame>
  );
}

/** Professional services: the three-way reconciliation, and who signs it. */
function ProfessionalServices() {
  return (
    <Frame>
      {/* three balances that have to agree */}
      {[
        { cx: 62, cy: 52 },
        { cx: 178, cy: 52 },
        { cx: 120, cy: 104 },
      ].map((c, i) => (
        <g key={i}>
          <circle cx={c.cx} cy={c.cy} r={22} fill={i === 2 ? NAVY : NAVY_LIGHT} opacity={i === 2 ? 0.95 : 0.8} />
          <rect x={c.cx - 11} y={c.cy - 5} width={22} height={3.2} rx={1.6} fill={CREAM} opacity={0.9} />
          <rect x={c.cx - 11} y={c.cy + 2} width={14} height={3.2} rx={1.6} fill={CREAM} opacity={0.6} />
        </g>
      ))}
      {/* the three sides */}
      <path d="M84 52 L156 52" stroke={GOLD} strokeWidth={2.4} strokeLinecap="round" strokeDasharray="6 5" />
      <path d="M74 71 L106 88" stroke={GOLD} strokeWidth={2.4} strokeLinecap="round" strokeDasharray="6 5" />
      <path d="M166 71 L134 88" stroke={GOLD} strokeWidth={2.4} strokeLinecap="round" strokeDasharray="6 5" />

      {/* the review signature the firm itself has to give */}
      <rect x={82} y={136} width={76} height={3.4} rx={1.7} fill={ACCENT} />
      <path
        d="M90 133 c7 -12 13 8 20 -4 c5 -8 10 6 16 -2"
        stroke={ACCENT}
        strokeWidth={2.4}
        strokeLinecap="round"
        fill="none"
        opacity={0.75}
      />

      <Person x={36} y={132} tone={NAVY} s={0.95} />
      <Person x={204} y={132} tone={NAVY} s={0.95} opacity={0.6} />
    </Frame>
  );
}

/** E-commerce: one net settlement, decomposed back into what it was made of. */
function Ecommerce() {
  return (
    <Frame>
      {/* the deposit that landed */}
      <rect x={24} y={68} width={54} height={40} rx={6} fill={NAVY} />
      <rect x={34} y={80} width={28} height={3.6} rx={1.8} fill={GOLD} />
      <rect x={34} y={89} width={18} height={3.6} rx={1.8} fill={CREAM} opacity={0.6} />

      {/* fanned back out into its components */}
      {[36, 66, 96].map((y, i) => (
        <g key={y}>
          <path d={`M78 88 C104 88 104 ${y + 11} 128 ${y + 11}`} stroke={NAVY_LIGHT} strokeWidth={2.2} fill="none" opacity={0.55} />
          <rect x={128} y={y} width={78} height={22} rx={6} fill={NAVY_LIGHT} opacity={0.9 - i * 0.16} />
          <rect x={138} y={y + 9} width={34} height={3.6} rx={1.8} fill={CREAM} opacity={0.9} />
        </g>
      ))}

      {/* the part that will not resolve, and needs somebody to decide */}
      <path d="M78 88 C104 88 104 137 128 137" stroke={ACCENT} strokeWidth={2.4} fill="none" />
      <rect x={128} y={126} width={78} height={22} rx={6} fill={ACCENT} />
      <rect x={138} y={135} width={30} height={3.6} rx={1.8} fill="#fff" opacity={0.95} />
      <circle cx={193} cy={137} r={6.5} fill="#fff" />
      <rect x={191.7} y={132.5} width={2.6} height={5.4} rx={1.3} fill={ACCENT} />
      <circle cx={193} cy={140.4} r={1.5} fill={ACCENT} />

      <Person x={48} y={152} tone={NAVY} s={0.95} />
    </Frame>
  );
}

/** Healthcare: charges paired to remittances, and the one that did not pair. */
function Healthcare() {
  return (
    <Frame>
      {[34, 64, 94].map((y, i) => (
        <g key={y} opacity={1 - i * 0.14}>
          <rect x={24} y={y} width={76} height={22} rx={6} fill={NAVY} />
          <rect x={34} y={y + 9} width={40} height={3.6} rx={1.8} fill={CREAM} opacity={0.8} />
          <rect x={100} y={y + 9.5} width={40} height={3} rx={1.5} fill={GOLD} />
          <rect x={140} y={y} width={76} height={22} rx={6} fill={NAVY_LIGHT} />
          <rect x={150} y={y + 9} width={40} height={3.6} rx={1.8} fill={CREAM} opacity={0.8} />
        </g>
      ))}

      {/* the charge with nothing against it */}
      <rect x={24} y={124} width={76} height={22} rx={6} fill={ACCENT} />
      <rect x={34} y={133} width={40} height={3.6} rx={1.8} fill="#fff" opacity={0.95} />
      <path d="M100 135 L132 135" stroke={ACCENT} strokeWidth={2.4} strokeLinecap="round" strokeDasharray="5 5" />
      <circle cx={148} cy={135} r={11} fill={ACCENT} />
      <rect x={146.4} y={128.5} width={3.2} height={8} rx={1.6} fill="#fff" />
      <circle cx={148} cy={140} r={1.8} fill="#fff" />

      <Person x={200} y={150} tone={NAVY} s={0.85} opacity={0.65} />
    </Frame>
  );
}

/** CPA firms: prepared files queueing into the one gate that needs the licence. */
function CpaFirms() {
  return (
    <Frame>
      {/* files prepared and stacked, ready to move */}
      {[34, 60, 86].map((y, i) => (
        <g key={y}>
          <rect x={22 + i * 5} y={y} width={72} height={22} rx={5} fill={i === 0 ? NAVY : NAVY_LIGHT} opacity={1 - i * 0.18} />
          <rect x={32 + i * 5} y={y + 9} width={36} height={3.6} rx={1.8} fill={CREAM} opacity={0.85} />
          <rect x={72 + i * 5} y={y + 9} width={12} height={3.6} rx={1.8} fill={GOLD} opacity={0.9} />
        </g>
      ))}

      {/* one queue */}
      <path d="M104 45 C126 45 126 74 144 74" stroke={NAVY_LIGHT} strokeWidth={2.2} fill="none" opacity={0.5} />
      <path d="M109 71 L144 74" stroke={NAVY_LIGHT} strokeWidth={2.2} fill="none" opacity={0.5} />
      <path d="M114 97 C132 97 132 76 144 74" stroke={NAVY_LIGHT} strokeWidth={2.2} fill="none" opacity={0.5} />

      {/* the review gate — the only part that needs the licence */}
      <rect x={148} y={54} width={44} height={44} rx={11} fill={ACCENT} />
      <path d="M160 76 l7 7 l14 -16" stroke="#fff" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" />

      {/* signed, and out */}
      <rect x={148} y={106} width={44} height={3.4} rx={1.7} fill={NAVY} opacity={0.3} />

      <Person x={170} y={156} tone={NAVY} s={1} />
      <Person x={62} y={156} tone={NAVY_LIGHT} s={0.85} opacity={0.6} />
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
