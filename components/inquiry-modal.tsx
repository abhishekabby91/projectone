'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import InquiryForm from '@/components/inquiry-form';
import { regions } from '@/lib/data';

/**
 * The inquiry form as a dialog, opened from anywhere on the page.
 *
 * Why this exists alongside `inquiry-section.tsx`: the band at the foot of a
 * page only converts a reader who scrolls to it. A card halfway up the page
 * that describes work we do is a dead end unless clicking it does something,
 * and sending the reader to an anchor loses their place. Opening the form over
 * the page keeps the context they were reading and asks for the enquiry at the
 * moment of interest.
 *
 * Mounted once in `app/layout.tsx`, so there is exactly one dialog per page no
 * matter how many triggers a page carries. Triggers reach it by dispatching a
 * window event rather than through context, so a card inside a server
 * component only needs the small client button in `inquiry-trigger.tsx` and not
 * a provider threaded through every page.
 *
 * The dialog deliberately does NOT use `id="inquiry"` or `id="inquiry-heading"`
 * - CLAUDE.md requires exactly one of each per page, and the band already owns
 * them. Its form is given `formId="modal"` so its field ids cannot collide with
 * the band's either.
 */

type RegionSlug = (typeof regions)[number]['slug'];

export interface InquiryRequest {
  region?: RegionSlug;
  service?: string;
  /** Identifies which card opened it, so the enquiry email says where it came from. */
  source?: string;
  title?: string;
  lead?: string;
}

export const INQUIRY_EVENT = 'accounstone:inquiry';

/** Opens the dialog from any client component. */
export function openInquiry(request: InquiryRequest = {}) {
  window.dispatchEvent(new CustomEvent<InquiryRequest>(INQUIRY_EVENT, { detail: request }));
}

const DEFAULT_TITLE = 'Talk to Us About This Work';
const DEFAULT_LEAD =
  'The consultation and the call are free. Tell us what is falling behind and we will scope what support would actually change.';

export default function InquiryModal() {
  const [request, setRequest] = useState<InquiryRequest | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setRequest(null), []);

  useEffect(() => {
    const onOpen = (event: Event) => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setRequest((event as CustomEvent<InquiryRequest>).detail ?? {});
    };
    window.addEventListener(INQUIRY_EVENT, onOpen);
    return () => window.removeEventListener(INQUIRY_EVENT, onOpen);
  }, []);

  // Escape to dismiss, and keep Tab inside the panel while it is open.
  useEffect(() => {
    if (!request) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
  }, [request, close]);

  // Hold the page still behind the dialog, and hand focus back where it was.
  useEffect(() => {
    if (!request) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>('input, textarea, select, button')
        ?.focus({ preventScroll: true });
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      returnFocusRef.current?.focus?.({ preventScroll: true });
    };
  }, [request]);

  if (!request) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-primary/60 px-4 py-8 backdrop-blur-sm sm:py-12"
      onClick={close}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-heading"
        className="relative my-auto w-full max-w-xl rounded-2xl border border-border bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close the enquiry form"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-input hover:text-primary"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="space-y-2 pr-10">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Free consultation</span>
          <h2
            id="inquiry-modal-heading"
            className="font-serif text-xl font-bold leading-tight text-primary text-balance sm:text-2xl"
          >
            {request.title ?? DEFAULT_TITLE}
          </h2>
          <p className="text-sm leading-relaxed text-muted">{request.lead ?? DEFAULT_LEAD}</p>
        </div>

        <div className="mt-6">
          <InquiryForm
            region={request.region}
            service={request.service}
            source={request.source}
            formId="modal"
          />
        </div>
      </div>
    </div>
  );
}
