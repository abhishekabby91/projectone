import DepthBlock from '@/components/depth-block';
import type { StateDepth } from '@/lib/us-states';

/**
 * The depth block on the three US state pages: the misconception the state's
 * businesses actually arrive with, what its specifics change about the ledger,
 * and the boundary.
 *
 * A thin adapter over `components/depth-block.tsx`, which is shared with the UK
 * and AU sub-market pages. Three genuinely different sets of copy live in
 * `lib/us-states.ts` — read the note at the top of that file before adding a
 * fourth state.
 */
export default function StateDepth({ state }: { state: StateDepth }) {
  return (
    <DepthBlock
      misconception={state.misconception}
      ledger={state.ledger}
      ledgerHeading={`${state.name} Specifics, in Terms of the Books`}
      boundaryHeading="What stays with your CPA"
      boundary={state.boundary}
    />
  );
}
