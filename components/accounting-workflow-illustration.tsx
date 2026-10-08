import React from 'react';

const NAVY = 'var(--color-primary)';
const GOLD = 'var(--color-secondary)';
const ACCENT = 'var(--color-accent)';
const CREAM = 'var(--color-input)';
const TEAL = 'var(--color-hue-teal)';

export default function AccountingWorkflowIllustration({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 320 220"
        fill="none"
        aria-hidden="true"
        className="h-auto w-full"
      >
        <rect x="8" y="8" width="304" height="190" rx="18" fill={CREAM} />
        <rect x="8" y="8" width="304" height="190" rx="18" stroke={GOLD} strokeOpacity="0.35" />
        <rect x="38" y="184" width="244" height="5" rx="2.5" fill={GOLD} />

        <rect x="34" y="54" width="70" height="70" rx="10" fill={NAVY} />
        <rect x="48" y="70" width="42" height="5" rx="2.5" fill="white" opacity="0.85" />
        <rect x="48" y="82" width="30" height="5" rx="2.5" fill="white" opacity="0.55" />
        <rect x="48" y="96" width="42" height="5" rx="2.5" fill={GOLD} />
        <rect x="48" y="108" width="24" height="5" rx="2.5" fill="white" opacity="0.45" />

        <path d="M108 89 H142" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
        <path d="M136 83 L144 89 L136 95" stroke={TEAL} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="148" y="42" width="72" height="94" rx="10" fill="white" stroke={NAVY} strokeOpacity="0.22" strokeWidth="1.5" />
        <rect x="161" y="58" width="46" height="5" rx="2.5" fill={NAVY} opacity="0.35" />
        <rect x="161" y="72" width="32" height="5" rx="2.5" fill={TEAL} opacity="0.8" />
        <rect x="161" y="84" width="40" height="5" rx="2.5" fill={NAVY} opacity="0.2" />
        <rect x="161" y="96" width="46" height="5" rx="2.5" fill={NAVY} opacity="0.2" />
        <rect x="161" y="108" width="28" height="5" rx="2.5" fill={GOLD} opacity="0.9" />
        <circle cx="194" cy="121" r="8" fill={ACCENT} />
        <path d="M190.5 121 L193 123.5 L198 117.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        <path d="M224 89 H258" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
        <path d="M252 83 L260 89 L252 95" stroke={TEAL} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="264" y="54" width="22" height="70" rx="6" fill={TEAL} opacity="0.85" />
        <rect x="269" y="66" width="12" height="4" rx="2" fill={CREAM} />
        <rect x="269" y="78" width="12" height="4" rx="2" fill={CREAM} opacity="0.7" />
        <rect x="269" y="90" width="12" height="4" rx="2" fill={GOLD} />

        <circle cx="72" cy="151" r="8" fill={NAVY} />
        <path d="M57 176 C57 161 63 156 72 156 C81 156 87 161 87 176 Z" fill={NAVY} />
        <circle cx="244" cy="151" r="8" fill={TEAL} opacity="0.8" />
        <path d="M229 176 C229 161 235 156 244 156 C253 156 259 161 259 176 Z" fill={TEAL} opacity="0.8" />
      </svg>
    </div>
  );
}
