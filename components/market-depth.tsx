import DepthBlock from '@/components/depth-block';
import type { MarketDepth } from '@/lib/market-depth';

/**
 * The depth block on the UK and AU sub-market pages, one per market's primary
 * recurring compliance cycle.
 *
 * Same renderer as the US state pages, with the boundary heading supplied per
 * market — HMRC submission stays with the registered practitioner, ATO lodgment
 * with the registered BAS or tax agent. Copy lives in `lib/market-depth.ts`.
 */
export default function MarketDepthBlock({ market }: { market: MarketDepth }) {
  return (
    <DepthBlock
      misconception={market.misconception}
      ledger={market.ledger}
      ledgerHeading={`${market.name}, in Terms of the Books`}
      boundaryHeading={market.boundaryHeading}
      boundary={market.boundary}
    />
  );
}
