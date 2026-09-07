'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import InquiryForm from '@/components/inquiry-form';
import { openInquiry } from '@/components/inquiry-modal';

/**
 * The engagement-triggered inquiry prompt on long-form content pages.
 *
 * This is the fourth instance of the form, after the band, the dialog and the
 * rail. It exists because a reader who gets two-thirds of the way down a 1,500
 * word guide is the most qualified visitor the site gets, and until now nothing
 * asked them for anything until the band at the very bottom — which they only
 * reach if they finish.
 *
 * **Why it is built the way it is, rather than as a plain popup.**
 *
 * Google treats interstitials that obscure content shortly after a visitor
 * arrives from search as a negative mobile signal. A naive "open a modal after
 * 5 seconds" would fire on arrival, cover the article, and put the ranking of
 * the very pages it sits on at risk. Three things prevent that here:
 *
 * 1. **Two conditions, both required.** `DWELL_MS` on the page *and*
 *    `SCROLL_TRIGGER` of the article scrolled. Neither alone fires it, so it
 *    cannot appear on arrival no matter how long someone idles or how fast they
 *    flick.
 * 2. **It never covers the article on mobile.** Below `lg` it is a slim bar
 *    pinned to the bottom edge — one line and a button that opens the existing
 *    dialog. The content behind it stays readable, which is the specific thing
 *    the interstitial guidance is about. The full form only ever renders as a
 *    corner card at `lg` and up, where there is room beside the text.
 * 3. **It is trivially dismissible** — close button, Escape, and the dismissal
 *    is remembered for `DISMISS_DAYS` so it never nags the same reader twice.
 *
 * It also stands down entirely while the `#inquiry` band is on screen (the same
 * rule the rail follows — two identical forms are never visible at once) and
 * while the cookie banner is up, so a first-time visitor is never asked two
 * things at the same moment.
 *
 * Uses `formId="scroll"` so its field ids cannot collide with the band's, and it
 * must never claim `#inquiry` or `#inquiry-heading`.
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
  const panelRef = useRef<HTMLDivElement>(null);
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
    <>
      {/* Mobile and tablet: a slim bar that never covers the article. */}
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

      {/* Desktop: the form itself, in the margin, article still readable. */}
      <div
        ref={panelRef}
        role="complementary"
        aria-label="Free consultation"
        className={`fixed bottom-6 right-6 z-[116] hidden w-[21rem] transition-all duration-300 ease-out motion-reduce:transition-none lg:block ${
          entered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <div className="relative rounded-2xl border border-border bg-white p-5 shadow-2xl">
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-input hover:text-primary"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="space-y-1 pr-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
              Free consultation
            </span>
            <h2 className="font-serif text-base font-bold leading-snug text-primary">{title}</h2>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">{lead}</p>
          <div className="mt-4">
            <InquiryForm source={source} formId="scroll" size="compact" minimal />
          </div>
        </div>
      </div>
    </>
  );
}
