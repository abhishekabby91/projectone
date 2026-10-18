'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Building2, Home, PanelsTopLeft } from 'lucide-react';

const industries = [
  {
    title: 'Property Management',
    description: 'Property-level books, tenant and owner ledgers, and monthly reporting.',
    href: '/industries/property-management',
    icon: Building2,
  },
  {
    title: 'HOA & Community Associations',
    description: 'Assessment records, operating and reserve accounts, and board reporting.',
    href: '/industries/hoa-accounting',
    icon: Home,
  },
  {
    title: 'Real Estate',
    description: 'Property transactions, reconciliations, and portfolio reporting.',
    href: '/industries/real-estate',
    icon: PanelsTopLeft,
  },
];

export default function BusinessIndustryChooser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full rounded-xl border border-border bg-input p-3.5 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.14)] sm:p-6 md:p-8">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="business-industry-options"
        onClick={() => setIsOpen((open) => !open)}
        className="group flex w-full items-start justify-between gap-3 text-left"
      >
        <span className="min-w-0">
          <span className="block font-serif text-base font-bold leading-tight text-primary sm:text-xl md:text-2xl">
            For Businesses &amp; Management Companies
          </span>
          <span className="mt-2 block text-sm leading-5 text-muted sm:mt-3 sm:text-base sm:leading-relaxed">
            Choose your industry to see relevant accounting support and workflows.
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`mt-1 h-5 w-5 shrink-0 text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="business-industry-options"
        className="mt-3 inline-flex items-center text-left text-xs font-semibold text-accent sm:mt-5 sm:text-sm"
      >
        {isOpen ? 'Hide industries' : 'Choose your industry'}
        <span aria-hidden="true" className="ml-1">&rarr;</span>
      </button>

      {isOpen && (
        <div id="business-industry-options" className="mt-4 space-y-2 border-t border-border pt-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
            Which type of business do you manage?
          </p>
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.href}
                href={industry.href}
                className="group/industry flex items-start gap-3 rounded-lg border border-border bg-white p-3 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="mt-0.5 rounded-md bg-input p-2 text-accent">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-primary">{industry.title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted">{industry.description}</span>
                </span>
                <span aria-hidden="true" className="pt-0.5 text-sm text-accent transition-transform group-hover/industry:translate-x-1">&rarr;</span>
              </Link>
            );
          })}
          <Link
            href="/industries"
            className="inline-flex pt-1 text-xs font-semibold text-primary underline-offset-4 hover:underline sm:text-sm"
          >
            Browse all industries
          </Link>
        </div>
      )}
    </div>
  );
}
