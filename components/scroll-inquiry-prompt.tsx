'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { openInquiry } from '@/components/inquiry-modal';

/**
 * The engagement-triggered enquiry bar, below `lg` only.
 *
 * It is mounted once for the whole site from `components/inquiry-rail-mount.tsx`
 * — not per page — and it is the mobile and tablet half of one system: the
 * right-edge rail is the persistent affordance at `lg` and up, this bar is the
 * affordance below it, and the two are never on screen together. It exists
 * because the rail is hidden under 1280px, so until 2026-09-16 a phone had
 * nothing persistent at all; a reader two-thirds of the way down a 1,500-word
 * guide is the most qualified visitor the site gets, and nothing asked them for
 * anything until the band at the very bottom, which only a finisher reaches.
 *
 * **There is no desktop half, and it must not come back.** An earlier version
 * also rendered the full form as a corner card at `lg` and up. Once the rail
 * went sitewide that card overlapped it — measured at 1440px (card x1080-1416
 * against the rail at x1400) and at 1990px — putting two identical forms on one
 * screen.
 *
 * **Why it is a bar rather than a popup, and why none of this is optional.**
 * Google treats interstitials that obscure content shortly after a visitor
 * arrives from search as a negative mobile signal. A naive "open a modal after
 * 5 seconds" would fire on arrival, cover the article, and put the ranking of
 * the very pages it sits on at risk. Three things prevent that:
 *
 * 1. **Two conditions, both required.** `DWELL_MS` on the page *and*
 *    `SCROLL_TRIGGER` of the page scrolled. Neither alone fires it, so it
 *    cannot appear on arrival no matter how long someone idles or how fast they
 *    flick.
 * 2. **It never covers the content.** A slim bar pinned to the bottom edge —
 *    one line and a button that opens the existing dialog — measured at 58px on
 *    a 390x844 viewport, under 7% of it. Do not make it show the form inline.
 * 3. **It is trivially dismissible** — close button, Escape, and the dismissal
 *    is remembered for `DISMISS_DAYS` so it never nags the same reader twice or
 *    follows them to the next article.
 *
 * It also stands down entirely while the `#inquiry` band is on screen (the same
 * rule the rail follows — two identical forms are never visible at once) and
 * while the cookie banner is up, so a first-time visitor is never asked two
 * things at the same moment.
 *
 * It renders nothing on the server, so it cannot touch indexed content or the
 * near-duplicate scores. Its dialog uses `formId="scroll"` so its field ids
 * cannot collide with the band's, and it must never claim `#inquiry` or
 * `#inquiry-heading`.
 */

const STORAGE_KEY = 'accounstone.inquiry-prompt';
/** Both must be satisfied. Time alone would fire on arrival; scroll alone on a flick. */
const DWELL_MS = 8000;
const SCROLL_TRIGGER = 0.45;
const DISMISS_DAYS = 30;

function recentlyDismissed(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const at = Number(raw);
    if (!Number.isFinite(at)) return false;
    return Date.now() - at < DISMISS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    // Storage blocked. Better to show once per page view than to nag or to
    // suppress the prompt entirely, so treat it as "not dismissed".
    return false;
  }
}

function remember() {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* nothing to do — the prompt simply reappears on the next page view */
  }
}

export default function ScrollInquiryPrompt({
  title = 'Is this the work you are trying to hand over?',
  lead = 'The consultation and the call are free. Tell us what is falling behind and we will scope what would actually change.',
  source,
}: {
  title?: string;
  lead?: string;
  source?: string;
}) {
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [bandVisible, setBandVisible] = useState(false);
  const firedRef = useRef(false);

  const dismiss = useCallback(() => {
    remember();
    setEntered(false);
    setOpen(false);
  }, []);

  // Stand down while the full band is on screen, exactly as the rail does.
  useEffect(() => {
    const band = document.getElementById('inquiry');
    if (!band) return;
    const io = new IntersectionObserver(([e]) => setBandVisible(e.isIntersecting), { threshold: 0.12 });
    io.observe(band);
    return () => io.disconnect();
  }, []);

  // The trigger. Both conditions, re-checked on scroll and on a timer.
  useEffect(() => {
    if (recentlyDismissed()) return;

    let dwellReached = false;
    const timer = window.setTimeout(() => {
      dwellReached = true;
      maybeFire();
    }, DWELL_MS);

    function scrolledEnough() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return false;
      return window.scrollY / scrollable >= SCROLL_TRIGGER;
    }

    function maybeFire() {
      if (firedRef.current || !dwellReached || !scrolledEnough()) return;
      // Never stack on top of the cookie banner — a first-time visitor should
      // not be asked two things at once.
      if (document.querySelector('[aria-label="Cookie choices"]')) return;
      firedRef.current = true;
      setOpen(true);
    }

    window.addEventListener('scroll', maybeFire, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', maybeFire);
    };
  }, []);

  // Entrance one frame later so the transition has a start state.
  useEffect(() => {
    if (!open) return;
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, [open]);

  // Escape closes it. No focus trap and no scroll lock: this is an invitation
  // sitting beside the article, not a modal, and the reader must stay in control
  // of the page behind it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, dismiss]);

  if (!open || bandVisible) return null;

  return (
    <div
      role="complementary"
      aria-label="Free consultation"
      className={`fixed inset-x-0 bottom-0 z-[116] border-t border-border bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-transform duration-300 ease-out motion-reduce:transition-none lg:hidden ${
        entered ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3">
        <p className="min-w-0 flex-1 text-xs leading-snug text-foreground">
          <span className="font-semibold text-primary">Free consultation.</span>{' '}
          Tell us what is falling behind.
        </p>
        <button
          type="button"
          onClick={() => {
            remember();
            setOpen(false);
            openInquiry({ title, lead, source });
          }}
          className="shrink-0 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white"
        >
          Talk to us
        </button>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="-mr-1 shrink-0 rounded-lg p-2 text-muted hover:text-primary"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
