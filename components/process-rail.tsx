'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The gold rail behind the four process phases, drawn left to right on view.
 *
 * Split out of `components/process-flow.tsx` so that file can stay a server
 * component — only the rail needs to know about the viewport.
 *
 * **The geometry is not mine to change.** `left-[12.5%] right-[12.5%]` is node
 * centre to node centre across four columns, and `lg:` is where the grid stops
 * being 2-up and a single horizontal line starts making sense. Both are
 * documented in `process-flow.tsx`; this only animates the width.
 *
 * Under `prefers-reduced-motion` it renders at full width immediately. The rail
 * carries meaning — it is what says these four are one sequence — so it must
 * never be the thing that motion preferences remove.
 */
export default function ProcessRail() {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInstant(true);
      setDrawn(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setDrawn(true);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px origin-left bg-secondary lg:block"
      style={{
        transform: `scaleX(${drawn ? 1 : 0})`,
        transition: instant ? undefined : 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    />
  );
}
