'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import {
  ALLOW_ALL,
  CONSENT_CATEGORIES,
  CONSENT_OPEN_EVENT,
  type ConsentCategories,
  type ConsentCategoryId,
  DENY_ALL,
  readConsent,
  writeConsent,
} from '@/lib/consent';

/**
 * The consent interface: a corner card for the first decision, and a dialog for
 * the detailed one.
 *
 * Mounted once in `app/layout.tsx`, the same way `inquiry-modal.tsx` is, and it
 * borrows that component's dialog mechanics deliberately — Escape to close, a
 * Tab loop inside the panel, `preventScroll` on both the opening focus and the
 * focus restore. Getting those wrong is what makes a consent dialog feel like a
 * bolted-on third-party widget.
 *
 * Design notes, so a later change does not undo the reasoning:
 *
 * - The banner is deliberately small: a ~22rem card, three actions on one row,
 *   roughly a third the height of the first version. It is a question, not a
 *   landing page, and it should cost the reader as little of the screen as
 *   possible. The preferences dialog is where the detail lives, and that one
 *   keeps the inquiry dialog's fuller card treatment.
 * - The burnt-orange accent is spent **once**, on the shield mark. That is the
 *   rule the service illustrations follow (`CLAUDE.md`): the accent points at
 *   one thing or it stops pointing at anything.
 * - The banner does **not** trap focus or lock scrolling. It is a choice, not
 *   an obstruction, and a visitor is free to read the cookie policy before
 *   answering. The preferences dialog does both, because it is modal.
 * - Accept and Reject are the same size, weight and prominence tier. Only
 *   colour separates them. ACCEPT SITS LAST (rightmost) as of 2026-10-17, at
 *   the owner's request, because the affirmative action on the right is the
 *   normal convention and the easier reach. That is an ORDER change and
 *   nothing else: both buttons keep identical padding, type size, font weight
 *   and button role, so neither is harder to find than the other and the rule
 *   below still holds. Do not take this as licence to shrink, grey out, or
 *   bury Reject -- consent has to stay equally easy to decline, and that is a
 *   legal position as well as a design one.
 * - Making Reject harder to find would be a dark
 *   pattern and is the one thing this component must never do.
 */

const PANEL_TRANSITION = 'transition-all duration-300 ease-out motion-reduce:transition-none';

function Toggle({
  id,
  checked,
  disabled,
  onChange,
  label,
}: {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  if (disabled) {
    return (
      <span
        className="inline-flex shrink-0 items-center rounded-full bg-input px-3 py-1 text-xs font-semibold text-muted"
        aria-label={`${label}: always on, cannot be disabled`}
      >
        Always on
      </span>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border-2 transition-colors duration-200 motion-reduce:transition-none ${
        checked ? 'border-primary bg-primary' : 'border-border bg-input'
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 motion-reduce:transition-none ${
          checked ? 'translate-x-6' : 'translate-x-1'
        } ${checked ? '' : 'ring-1 ring-border'}`}
      />
    </button>
  );
}

export default function CookieConsent() {
  /** `null` while we have not yet read storage — nothing renders in that state. */
  const [decided, setDecided] = useState<boolean | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [draft, setDraft] = useState<ConsentCategories>(DENY_ALL);

  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  // Read once on mount. Rendering nothing on the server and on first paint is
  // what keeps this out of the critical path: no layout shift, no blocking.
  useEffect(() => {
    const record = readConsent();
    setDraft(record?.categories ?? DENY_ALL);
    setDecided(record !== null);
  }, []);

  // Entrance is a frame after mount so the transition has a start state to
  // animate from. Under prefers-reduced-motion the classes are inert.
  useEffect(() => {
    if (decided !== false) return;
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, [decided]);

  // The footer control, and anything else, reopens the panel through this.
  useEffect(() => {
    const onOpen = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setDraft(readConsent()?.categories ?? DENY_ALL);
      setPanelOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  const save = useCallback(
    (categories: ConsentCategories, method: 'accept-all' | 'reject-non-essential' | 'custom') => {
      writeConsent(categories, method);
      setDraft(categories);
      setDecided(true);
      setPanelOpen(false);
    },
    [],
  );

  const closePanel = useCallback(() => setPanelOpen(false), []);

  // Escape closes, Tab stays inside — the same contract as the inquiry dialog.
  useEffect(() => {
    if (!panelOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePanel();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [panelOpen, closePanel]);

  // Hold the page still behind the dialog and hand focus back afterwards.
  useEffect(() => {
    if (!panelOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('button, a[href]')?.focus({ preventScroll: true });
    }, 0);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      returnFocusRef.current?.focus?.({ preventScroll: true });
    };
  }, [panelOpen]);

  if (decided === null) return null;

  const showBanner = decided === false && !panelOpen;

  return (
    <>
      {showBanner && (
        <div
          role="region"
          aria-label="Cookie choices"
          style={{ bottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
          className={`fixed inset-x-3 z-[115] sm:inset-x-auto sm:left-5 sm:max-w-[22rem] ${PANEL_TRANSITION} ${
            entered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <div className="rounded-xl border border-border bg-white/95 p-4 shadow-xl backdrop-blur-sm">
            <h2 className="flex items-center gap-2 font-serif text-sm font-bold leading-tight text-primary">
              <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              Your privacy matters
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              We use cookies to see how this site is used. Nothing optional runs until you say so.{' '}
              <Link
                href="/cookie-policy"
                className="inline-block py-1 font-medium text-primary underline underline-offset-2 hover:text-accent"
              >
                Cookie Policy
              </Link>
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => save(DENY_ALL, 'reject-non-essential')}
                aria-label="Reject non-essential cookies"
                className="rounded-lg border border-border bg-white px-2 py-2 text-xs font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-input motion-reduce:transition-none"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => {
                  returnFocusRef.current = document.activeElement as HTMLElement | null;
                  setPanelOpen(true);
                }}
                className="rounded-lg border border-border bg-white px-2 py-2 text-xs font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-input motion-reduce:transition-none"
              >
                Customise
              </button>
              <button
                type="button"
                onClick={() => save(ALLOW_ALL, 'accept-all')}
                className="rounded-lg bg-primary px-2 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-primary-light motion-reduce:transition-none"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

      {panelOpen && (
        <div
          className="fixed inset-0 z-[130] flex items-end justify-center bg-primary/60 backdrop-blur-sm sm:items-center sm:px-4 sm:py-10"
          onClick={closePanel}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consent-panel-heading"
            className="relative flex max-h-[92vh] w-full flex-col rounded-t-2xl border border-border bg-white p-5 shadow-2xl sm:max-h-[86vh] sm:max-w-lg sm:rounded-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePanel}
              aria-label="Close privacy preferences"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-input hover:text-primary"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="shrink-0 space-y-1.5 pr-10">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                Privacy preferences
              </span>
              <h2
                id="consent-panel-heading"
                className="font-serif text-xl font-bold leading-tight text-primary text-balance"
              >
                Choose how you&rsquo;d like us to use cookies
              </h2>
              <p className="text-sm leading-relaxed text-muted">
                You can change this at any time from Cookie Settings in the footer.
              </p>
            </div>

            <ul className="-mx-1 mt-5 flex-1 space-y-2.5 overflow-y-auto px-1">
              {CONSENT_CATEGORIES.map((category) => (
                <li
                  key={category.id}
                  className="rounded-xl border border-border bg-input/50 p-3.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-primary">{category.label}</h3>
                      <p className="text-sm leading-relaxed text-muted">{category.description}</p>
                      <p className="pt-0.5 text-xs text-muted/80">
                        {category.services.length > 0
                          ? category.services.join(' · ')
                          : 'Nothing in this category is in use today.'}
                      </p>
                    </div>
                    <Toggle
                      id={`consent-${category.id}`}
                      label={category.label}
                      checked={category.essential || draft[category.id]}
                      disabled={category.essential}
                      onChange={(next) =>
                        setDraft((current) => ({
                          ...current,
                          [category.id as ConsentCategoryId]: next,
                        }))
                      }
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="shrink-0 space-y-2.5 border-t border-border pt-4">
              <button
                type="button"
                onClick={() => save(draft, 'custom')}
                className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-light hover:shadow-lg motion-reduce:transition-none"
              >
                Save preferences
              </button>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => save(DENY_ALL, 'reject-non-essential')}
                  className="rounded-lg border-2 border-border bg-white px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-input motion-reduce:transition-none"
                >
                  Reject non-essential
                </button>
                <button
                  type="button"
                  onClick={() => save(ALLOW_ALL, 'accept-all')}
                  className="rounded-lg border-2 border-border bg-white px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-input motion-reduce:transition-none"
                >
                  Accept all
                </button>
              </div>
            </div>

            <p className="mt-4 shrink-0 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border pt-4 text-xs text-muted">
              <Link href="/cookie-policy" className="inline-block py-1 underline underline-offset-2 hover:text-primary">
                Cookie Policy
              </Link>
              <Link href="/privacy" className="inline-block py-1 underline underline-offset-2 hover:text-primary">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
