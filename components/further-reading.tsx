import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { guides, insights, articles, type ResourceItem, type Topic } from '@/lib/resources';

/**
 * Topic-driven contextual links into the resource library.
 *
 * Built 2026-09-07 to fix a measured problem: a crawl of all 90 routes found the
 * blog posts carrying **one inbound internal link each** — from the `/blog` hub
 * and nowhere else — while being the highest-impression pages on the site.
 * `/blog/tax-preparation-outsourcing` had 435 impressions at position 27.8 and a
 * single link pointing at it.
 *
 * Driven off the `topics` already declared in `lib/resources.ts` rather than
 * hand-wired hrefs, so adding a guide or retagging one updates every page that
 * links to it without touching 25 files. That also means a wrong `topics` entry
 * is a linking bug, not just a filtering one — which `lib/resources.ts` already
 * says.
 *
 * Ordering is deliberate: articles first, then guides, then insights. The blog
 * posts are the thin ones and the ones with impressions to protect, so they get
 * first claim on the slots.
 */

interface FurtherReadingProps {
  topics: Topic[];
  /** The current page, so a page never links to itself. */
  exclude?: string;
  /** Keeps the block short; four is two rows at `sm:` and one at `lg:`. */
  limit?: number;
  heading?: string;
  background?: 'white' | 'input';
}

export default function FurtherReading({
  topics,
  exclude,
  limit = 4,
  heading = 'Further reading',
  background = 'white',
}: FurtherReadingProps) {
  const matches = (item: ResourceItem) =>
    item.href !== exclude && item.topics.some((t) => topics.includes(t));

  // Articles first — they are the pages that need the links most.
  const picked: ResourceItem[] = [
    ...articles.filter(matches),
    ...guides.filter(matches),
    ...insights.filter(matches),
  ].slice(0, limit);

  if (picked.length === 0) return null;

  return (
    <section
      className={`w-full py-8 md:py-12 px-6 md:px-8 ${background === 'input' ? 'bg-input' : 'bg-white'}`}
    >
      <div className="max-w-5xl mx-auto">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">
          {heading}
        </span>
        <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-2 mb-6">
          Go deeper on the parts that matter
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {picked.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group block rounded-2xl border border-border p-5 transition-colors hover:border-primary/40 ${
                background === 'input' ? 'bg-white' : 'bg-input/50'
              }`}
            >
              <h3 className="font-bold text-primary leading-snug">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted leading-6">{item.description}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read it <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
