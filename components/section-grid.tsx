'use client';

import FeatureCard from './feature-card';
import Reveal from './reveal';
import IconBadge, { hueVar, BRAND_HUE } from './icon-badge';

interface GridItem {
  id: string;
  icon?: string;
  name: string;
  description: string;
  slug?: string;
  features?: string[];
}

interface SectionGridProps {
  title: string;
  subtitle?: string;
  description?: string;
  items: GridItem[];
  baseUrl?: string;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'featured' | 'minimal';
  featuredItemIndex?: number;
  /**
   * `'brand'` drops the supporting palette for this band: navy badges, navy
   * corner tint. The homepage passes it (owner, 2026-09-17); the hub pages
   * keep the default hues, which is where they earn their place.
   *
   * Note it resolves the corner to navy explicitly rather than leaving `hue`
   * off. An unset `--card-hue` falls back to the burnt-orange accent in
   * `.accent-corner::before`, and a decorative accent is the exact thing the
   * supporting palette was introduced to stop — see the accent rule in
   * CLAUDE.md.
   */
  tone?: 'hue' | 'brand';
}

export default function SectionGrid({
  title,
  subtitle,
  description,
  items,
  baseUrl = '',
  columns = 3,
  variant = 'default',
  featuredItemIndex,
  tone = 'hue',
}: SectionGridProps) {
  // Flex rather than grid, and this is a design fix rather than a refactor.
  // A grid left-aligns a row it cannot fill, so 7 services at three across
  // rendered as 3 + 3 + 1 with two dead cells beside the last card, and 4
  // solutions as 3 + 1 with two more. On a 1440px viewport that is a third of
  // a screen of nothing, and it reads as a page that ran out rather than one
  // that was composed. Wrapping and centring makes a short last row look
  // deliberate at any item count, which a grid cannot do without hard-coding
  // one.
  //
  // The basis subtracts the share of the gap each card gives up: at three
  // across with gap-7 (1.75rem) that is two thirds of it, 1.1667rem.
  const basisClass = {
    2: 'basis-[calc(50%-0.375rem)] md:basis-[calc(50%-0.875rem)]',
    3: 'basis-[calc(50%-0.375rem)] md:basis-[calc(33.333%-1.167rem)]',
    4: 'basis-[calc(50%-0.375rem)] md:basis-[calc(25%-1.3125rem)]',
  }[columns];

  return (
    <section className="w-full py-7 md:py-10 px-6 md:px-8 bg-background dot-grid">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 md:mb-14 max-w-3xl mx-auto text-center space-y-4">
          <>
            {/* The eyebrow carries the gold rule every other section heading
                on this site uses, and the heading is serif at the same scale.
                Before this it was sans at text-xl — so the homepage's three
                biggest sections were set in a different typeface and two steps
                smaller than every section heading elsewhere, which is the
                "two designs stitched together" failure CLAUDE.md warns about
                in the type-system note. */}
            {subtitle && (
              <span className="inline-flex items-center justify-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                <span className="text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-accent">
                  {subtitle}
                </span>
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              </span>
            )}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              {title}
            </h2>
            {description && (
              <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-7 md:leading-8">
                {description}
              </p>
            )}
          </>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3 md:gap-7">
          {items.map((item, index) => {
            const cardVariant =
              featuredItemIndex !== undefined && index === featuredItemIndex
                ? 'featured'
                : variant;
            return (
              <Reveal key={item.id} className={basisClass} delay={Math.min(index * 0.06, 0.3)}>
                <FeatureCard
                  icon={<IconBadge name={item.id} fallback={item.icon} tone={tone} variant={cardVariant === 'featured' ? 'featured' : 'default'} />}
                  title={item.name}
                  description={item.description}
                  href={item.slug ? `${baseUrl}/${item.slug}` : undefined}
                  features={item.features}
                  variant={cardVariant}
                  hue={tone === 'brand' ? BRAND_HUE : hueVar(item.id)}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
