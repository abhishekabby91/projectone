'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A thin bar across the top of a long article showing how far through it is.
 *
 * Rendered by `ArticleLayout`, so it is on the 6 blog posts, 11 guides and 2
 * insights — pages that run 1,000-2,500 words — and nowhere else. A progress
 * bar on a 300-word hub would be noise.
 *
 * **It measures the article, not the document.** Scroll position over total
 * page height would count the footer, the enquiry band and the CTA banner as
 * "article", so the bar would read ~70% at the last paragraph and never fill.
 * It tracks the `<article>` element's own box instead, so full means finished
 * reading, which is the only thing that makes the bar worth having.
 *
 * **And the range is clamped to what is actually reachable, which is the bug
 * the first version had.** Scrolling the article's last line to the top of the
 * viewport is only possible if there is a viewport's worth of page below it.
 * There is not — the band, the banner and the footer are shorter than that on
 * these pages — so measuring against `height - innerHeight` left the bar at
 * **82.65%** with the reader at the very bottom of the page, measured on
 * `/resources/guides/outsourced-bookkeeping-cost-guide`. The range is now the
 * smaller of that and how far the page can actually scroll, so the bar reaches
 * full exactly when the reader runs out of page.
 *
 * Four things keep it from costing anything:
 *
 * - **It renders nothing until the reader scrolls**, and nothing at all on the
 *   server — so it cannot affect indexed content or the near-duplicate scores.
 * - **`prefers-reduced-motion` removes the width transition**, not the bar. The
 *   bar is information; the easing is decoration.
 * - **Scroll work is throttled to a frame** with `requestAnimationFrame`, and
 *   the listener is passive, so it cannot block scrolling.
 * - **It sits under the sticky header** and is `pointer-events-none`, so it can
 *   never intercept a click meant for the nav.
 *
 * `aria-hidden`: it duplicates the scrollbar, which assistive tech already
 * exposes. Announcing a second, less precise one would be worse than silence.
 */
export default function ReadingProgress() {
  const [pct, setPct] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    const measure = () => {
      raf = 0;
      const article = document.querySelector('article');
      if (!article) return;
      const box = article.getBoundingClientRect();
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const articleTop = window.scrollY + box.top;

      // How far the article can be scrolled through, and how far the page can
      // be scrolled at all. The smaller of the two is the real range.
      const range = Math.min(box.height - window.innerHeight, maxScroll - articleTop);
      if (range <= 0) {
        setPct(0);
        return;
      }
      const passed = -box.top;
      setPct(Math.max(0, Math.min(1, passed / range)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (pct <= 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px] bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-secondary to-accent"
        style={{
          width: `${(pct * 100).toFixed(2)}%`,
          transition: reduced.current ? undefined : 'width 120ms linear',
        }}
      />
    </div>
  );
}
