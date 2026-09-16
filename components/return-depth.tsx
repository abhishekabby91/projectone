import DepthBlock from '@/components/depth-block';
import type { ReturnDepth } from '@/lib/us-return-depth';

/**
 * The depth block on the US return-type pages, one per return form.
 *
 * Same renderer as the US state pages and the UK/AU cycle pages, with the
 * boundary heading supplied per page — a 1040 routes to the CPA or EA who
 * signs, a 1065 routes to the CPA who reads the partnership agreement.
 * Copy lives in `lib/us-return-depth.ts`.
 */
export default function ReturnDepthBlock({ returnType }: { returnType: ReturnDepth }) {
  return (
    <DepthBlock
      misconception={returnType.misconception}
      ledger={returnType.ledger}
      ledgerHeading={`${returnType.name}, in Terms of the Work`}
      boundaryHeading={returnType.boundaryHeading}
      boundary={returnType.boundary}
    />
  );
}
