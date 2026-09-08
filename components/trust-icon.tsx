import { Lock, ShieldCheck, ListChecks } from 'lucide-react';

/**
 * The three homepage trust chips.
 *
 * These were emoji glyphs (🔒 ✓ ▣) in `lib/data.ts` until 2026-09-08 — the last
 * three on the site, missed by the sitewide emoji removal because they lived in
 * data rather than in markup. An emoji renders as a different picture on every
 * platform, ignores the brand colour, and is announced by screen readers unless
 * hidden. These are hidden and carry the accent, like every other icon here.
 */
const ICONS = {
  lock: Lock,
  shield: ShieldCheck,
  checks: ListChecks,
} as const;

export default function TrustIcon({ name }: { name: keyof typeof ICONS | string }) {
  const Icon = ICONS[name as keyof typeof ICONS];
  if (!Icon) return null;
  return <Icon className="h-[18px] w-[18px] shrink-0 text-accent" aria-hidden="true" />;
}
