/**
 * Line illustrations for the three markets.
 *
 * The third set, drawn 2026-09-08 to the same system as
 * `components/service-illustration.tsx` and `components/solution-illustration.tsx`
 * — read the note at the top of the first before adding to any of them. Same
 * 200x150 viewBox, same 1.6 stroke, navy line work through `currentColor`, the
 * brand gold as a single ground rule, and **the burnt-orange accent spent
 * exactly once per drawing**, always on the thing that needs a human decision.
 *
 * What makes these region drawings rather than decoration: each shows the
 * recurring compliance mechanic that market actually runs on, taken from
 * `knowledge/markets/{us,uk,au}.md`, and each puts the accent on the point
 * where the work stops being Accounstone's:
 *
 * - **United States** — sales-tax nexus is per-state and transaction-based
 *   rather than one national threshold (us.md, "Terminology notes"). So: a row
 *   of state columns against a registration line, with the one that has crossed
 *   it carrying the accent. That is the state where someone has to decide to
 *   register, and it is the client's CPA's call.
 * - **United Kingdom** — the VAT quarter is the primary recurring cycle, and
 *   Making Tax Digital requires the digital link between records and return to
 *   stay unbroken (uk.md). So: four quarters on a rail, an unbroken chain of
 *   links running through them, and the accent on the submission gate — HMRC
 *   submission stays with the registered practitioner, who holds the
 *   credentials.
 * - **Australia** — GST is coded as transactions are posted rather than
 *   reconstructed at lodgment, on a BAS cycle inside a 30 June year (au.md).
 *   So: transactions being coded as they land, feeding a BAS block, with the
 *   accent on the lodgment gate that belongs to the registered BAS or tax agent.
 *
 * No flags, no maps, no landmarks. A flag says which country; it does not say
 * what is different about doing the work there, and the market pages already
 * carry a flag component for identification. These say what the reader is
 * actually buying into.
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

/**
 * United States: nexus is measured per state, and one has crossed.
 * Six columns of accumulating activity against a single registration line;
 * the column that has crossed it carries the accent, because registering is
 * the client's CPA's decision, not ours.
 */
function UnitedStates() {
  const cols: Array<[number, number]> = [
    [24, 22],
    [46, 36],
    [68, 30],
    [90, 52],
    [112, 44],
    [134, 74],
  ];
  return (
    <Frame>
      {/* the registration line each state is measured against */}
      <line x1={16} y1={44} x2={184} y2={44} strokeDasharray="5 4" opacity={0.55} />
      <text x={16} y={38} fontSize={7} fill="currentColor" stroke="none" opacity={0.6}>
        threshold
      </text>

      {cols.map(([x, h]) => {
        const crossed = h > 64;
        return (
          <rect
            key={x}
            x={x}
            y={118 - h}
            width={14}
            height={h}
            rx={2}
            stroke={crossed ? ACCENT : 'currentColor'}
          />
        );
      })}

      {/* the one that crossed, flagged for a decision */}
      <circle cx={141} cy={34} r={5} stroke={ACCENT} />
      <path d="M141 31.5 L141 34.5" stroke={ACCENT} />
      <path d="M141 36.6 L141 36.9" stroke={ACCENT} />

      <line x1={16} y1={118} x2={184} y2={118} />
    </Frame>
  );
}

/**
 * United Kingdom: four VAT quarters on one rail, digital links unbroken,
 * and the submission gate at the end held by the registered practitioner.
 */
function UnitedKingdom() {
  const quarters = [22, 56, 90, 124];
  return (
    <Frame>
      {quarters.map((x, i) => (
        <g key={x}>
          <rect x={x} y={44} width={24} height={34} rx={3} />
          {/* records feeding that quarter */}
          {[88, 96, 104].map((y) => (
            <line key={y} x1={x + 4} y1={y} x2={x + 20} y2={y} opacity={0.45} />
          ))}
          <path d={`M${x + 12} 78 L${x + 12} 84`} opacity={0.45} />
          {/* the digital link between quarters — it must not break */}
          {i < 3 && (
            <g>
              <path d={`M${x + 24} 61 L${x + 34} 61`} />
              <circle cx={x + 29} cy={61} r={2.2} />
            </g>
          )}
        </g>
      ))}

      {/* submission gate — the practitioner's credentials, not ours */}
      <path d={`M${148 + 12} 38 L${148 + 12} 84`} stroke={ACCENT} />
      <path d="M148 61 L156 61" />
      <circle cx={152} cy={61} r={2.2} />
      <path d="M164 61 L180 61" stroke={ACCENT} />
      <path d="M175 56 L180 61 L175 66" stroke={ACCENT} />
    </Frame>
  );
}

/**
 * Australia: GST coded as transactions post, accumulating into a BAS block
 * inside the year, with lodgment held by the registered agent.
 */
function Australia() {
  return (
    <Frame>
      {/* transactions arriving, each coded as it lands */}
      {[30, 44, 58, 72].map((y) => (
        <g key={y}>
          <line x1={20} y1={y} x2={58} y2={y} />
          <path d={`M62 ${y - 3} L65 ${y} L71 ${y - 6}`} opacity={0.75} />
        </g>
      ))}

      {/* they collect into the activity statement */}
      <path d="M78 30 L96 50" opacity={0.5} />
      <path d="M78 44 L96 52" opacity={0.5} />
      <path d="M78 58 L96 56" opacity={0.5} />
      <path d="M78 72 L96 60" opacity={0.5} />

      <rect x={98} y={38} width={38} height={48} rx={3} />
      {[48, 56, 64, 72].map((y) => (
        <line key={y} x1={104} y1={y} x2={130} y2={y} opacity={0.55} />
      ))}

      {/* the year the cycle sits inside */}
      <line x1={20} y1={104} x2={176} y2={104} opacity={0.45} />
      {[20, 59, 98, 137, 176].map((x) => (
        <line key={x} x1={x} y1={101} x2={x} y2={107} opacity={0.45} />
      ))}

      {/* lodgment gate — the registered agent's, never ours */}
      <path d="M148 34 L148 90" stroke={ACCENT} />
      <path d="M156 62 L178 62" stroke={ACCENT} />
      <path d="M173 57 L178 62 L173 67" stroke={ACCENT} />
    </Frame>
  );
}

const REGIONS = {
  'united-states': UnitedStates,
  'united-kingdom': UnitedKingdom,
  australia: Australia,
} as const;

export type RegionIllustrationKey = keyof typeof REGIONS;

export default function RegionIllustration({
  region,
  className = '',
}: {
  region: RegionIllustrationKey;
  className?: string;
}) {
  const Drawing = REGIONS[region];
  if (!Drawing) return null;
  return (
    <div className={className}>
      <Drawing />
    </div>
  );
}
