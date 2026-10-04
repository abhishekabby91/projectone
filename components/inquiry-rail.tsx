'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import InquiryForm from '@/components/inquiry-form';
import { openInquiry } from '@/components/inquiry-modal';
import { regions } from '@/lib/data';

type RegionSlug = (typeof regions)[number]['slug'];

interface InquiryRailProps {
  region?: RegionSlug;
  service?: string;
  source?: string;
  title?: string;
}

export default function InquiryRail({ region, service, source, title }: InquiryRailProps) {
  const [expanded, setExpanded] = useState(false);
  const [bandVisible, setBandVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1960px)');
    const sync = () => setExpanded(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const band = document.getElementById('inquiry');
    if (!band) return;
    const io = new IntersectionObserver(
      ([entry]) => setBandVisible(entry.isIntersecting),
      { threshold: 0.12 },
    );
    io.observe(band);
    return () => io.disconnect();
  }, []);

  if (bandVisible) return null;

  const request = { region, service, source, title };

  return (
    <aside
      aria-label="Quick enquiry"
      className="pointer-events-none fixed inset-y-0 right-0 z-[90] flex items-center pb-5 pt-24"
    >
      {expanded ? (
        <div
          ref={panelRef}
          className="pointer-events-auto mr-3 max-h-full w-[320px] overflow-y-auto rounded-2xl border border-border bg-white p-4 shadow-[0_8px_40px_-12px_rgba(30,58,95,0.35)]"
        >
          <div className="mb-3 flex items-start justify-between gap-2">
            <div className="min-w-0">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                Free consultation
              </span>
              <h2 className="mt-0.5 font-serif text-lg font-bold leading-snug text-primary text-balance">
                {title ?? 'Ask Us About This Work'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="Collapse the enquiry form"
              aria-expanded={true}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-input hover:text-primary"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <InquiryForm
            region={region}
            service={service}
            source={source ? `${source} (rail)` : 'rail'}
            formId="rail"
            size="compact"
            minimal
            submitLabel="Book a Free Call"
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => {
            if (window.matchMedia('(max-width: 1279px)').matches) {
              openInquiry(request);
            } else {
              setExpanded(true);
            }
          }}
          aria-expanded={false}
          aria-label="Open free consultation enquiry form"
          className="pointer-events-auto flex w-10 flex-col items-center gap-2 rounded-l-xl bg-primary px-2 py-5 text-xs font-semibold text-white shadow-[0_8px_30px_-10px_rgba(30,58,95,0.5)] transition-colors hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="[writing-mode:vertical-rl] rotate-180 tracking-wide">
            Free consultation
          </span>
        </button>
      )}
    </aside>
  );
}
