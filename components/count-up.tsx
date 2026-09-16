'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A number that counts up the first time it is scrolled into view.
 *
 * **The value is real or it does not go here.** `AI-WEBSITE-GUIDE.md` bans
 * invented statistics, and an animated counter is the single most tempting
 * place on a marketing site to put one — "500+ clients", "99.8% accuracy". Every
 * value this renders is derived from an array in `lib/data.ts` or
 * `lib/resources.ts` (`services.length`, `guides.length`), so it is a fact about
 * the site that cannot drift from what the site actually contains. If you find
 * yourself typing a literal into `value`, stop and find the array instead.
 *
 * Three things make it safe to use rather than decorative:
 *
 * - **The final value is in the server HTML.** `useState(value)` starts at the
 *   answer, not at zero, so a crawler, a reader with JavaScript off, and the
 *   first paint all see the real number. The animation only ever replays a value
 *   that was already there. A counter that starts at 0 in the markup publishes
 *   "0" to anything that does not run scripts.
 * - **It cannot shift the layout.** `tabular-nums` fixes the glyph width and
 *   `ch`-based `minWidth` reserves the final width up front, so counting from 3
 *   to 21 never reflows the line around it. Layout shift on a number that is
 *   animating itself is the classic version of this component's failure.
 * - **It respects `prefers-reduced-motion`.** Not by animating faster — by not
 *   animating. The number is simply the number.
 *
 * Accessibility: the wrapper carries `role="img"` and an `aria-label` holding
 * the true value, which makes its descendants presentational — so assistive
 * tech reads "7 markets" once and never narrates an intermediate frame,
 * whatever the animation is doing when it arrives.
 *
 * A visually hidden duplicate was the first attempt and was wrong: it put the
 * number in the HTML twice, so the homepage's extracted text read "7 7 core
 * service lines". `public/llms.txt` exists because what machines read off this
 * site matters, and doubling every figure is the opposite of that. One text
 * node, one accessible label.
 */

interface CountUpProps {
  /** The real, derived value. Never a hand-typed marketing figure. */
  value: number;
  /** Rendered after the number, inside the same accessible label. */
  suffix?: string;
  durationMs?: number;
  className?: string;
}

export default function CountUp({ value, suffix = '', durationMs = 900, className = '' }: CountUpProps) {
  // Starts at the answer, so the server renders the answer.
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRun.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        io.disconnect();

        const start = performance.now();
        setShown(0);
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          // easeOutCubic — fast out of the gate, settles rather than stops dead.
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(eased * value));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, durationMs]);

  return (
    <span
      ref={ref}
      // role="img" makes the descendants presentational, so the label is what
      // assistive tech reads rather than whichever frame it happens to land on.
      role="img"
      aria-label={`${value}${suffix}`}
      className={`tabular-nums ${className}`}
      // Reserve the final width so counting up cannot reflow the line.
      style={{ minWidth: `${String(value).length}ch`, display: 'inline-block' }}
    >
      {shown}
      {suffix}
    </span>
  );
}
