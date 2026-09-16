import {
  BookOpen,
  Calculator,
  Receipt,
  Wallet,
  CreditCard,
  Inbox,
  LineChart,
  ShieldCheck,
  Globe,
  UserPlus,
  UsersRound,
  Building2,
  Landmark,
  Cpu,
  HeartPulse,
  ShoppingCart,
  Home,
  Scale,
  Plug2,
  Cloud,
  TrendingUp,
  Network,
  FileText,
  Target,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';
import { USFlag, GBFlag, AUFlag } from './flags';

// Real SVG flags for markets -- NOT emoji. Flag emoji render
// inconsistently across platforms (many desktop Windows browsers show
// plain two-letter country codes instead of an actual flag image,
// since Windows' emoji font lacks regional-indicator flag glyphs).
const FLAG_MAP: Record<string, React.ComponentType<{ title?: string; className?: string }>> = {
  'united-states': USFlag,
  'united-kingdom': GBFlag,
  australia: AUFlag,
};

// Semantic icon keys mapped to Lucide components -- replaces the
// generic emoji icons that were used throughout (a common tell of
// unpolished template sites). One consistent, professionally designed
// icon set instead of 25 hand-picked emoji.
const ICON_MAP: Record<string, LucideIcon> = {
  // Services
  bookkeeping: BookOpen,
  accounting: Calculator,
  'tax-preparation': Receipt,
  payroll: Wallet,
  'accounts-payable': CreditCard,
  'accounts-receivable': Inbox,
  'cfo-support': LineChart,
  'audit-support': ShieldCheck,
  // Solutions
  'offshore-accounting-support': Globe,
  'staff-augmentation': UserPlus,
  'dedicated-accounting-teams': UsersRound,
  'back-office-support': Building2,
  // Industries
  'cpa-firms': Landmark,
  technology: Cpu,
  healthcare: HeartPulse,
  ecommerce: ShoppingCart,
  'real-estate': Home,
  'professional-services': Scale,
  // Technologies
  quickbooks: Plug2,
  xero: Cloud,
  sage: TrendingUp,
  netsuite: Network,
  'drake-tax': FileText,
  cch: Target,
  myob: Briefcase,
};

interface IconBadgeProps {
  /** Semantic key matching an entry's slug/id in lib/data.ts */
  name: string;
  /** Falls back to this raw string (e.g. an emoji) if no mapped icon exists */
  fallback?: string;
  variant?: 'default' | 'featured';
  size?: 'sm' | 'md';
}

/**
 * The supporting hue each badge carries.
 *
 * Assigned per key and never rotated, so the same service shows the same
 * colour on the homepage, the services hub and its own page — colour that
 * moves between renders is decoration; colour that stays is identification.
 * Related things share a hue on purpose: the two ledger services are teal,
 * the two money-movement services are olive, the engagement models are plum.
 *
 * Anything not listed falls back to navy, which is also what a new key gets
 * until somebody decides where it belongs.
 */
const TONE_MAP: Record<string, string> = {
  // Services — grouped by what the work actually is
  bookkeeping: 'teal',
  accounting: 'teal',
  'tax-preparation': 'denim',
  'audit-support': 'denim',
  payroll: 'plum',
  'accounts-payable': 'olive',
  'accounts-receivable': 'olive',
  // Solutions — one family, because they are four shapes of the same offer
  'offshore-accounting-support': 'plum',
  'staff-augmentation': 'plum',
  'dedicated-accounting-teams': 'plum',
  'back-office-support': 'plum',
  // Industries — each one distinct, because the cards sit side by side
  'cpa-firms': 'denim',
  technology: 'teal',
  healthcare: 'plum',
  ecommerce: 'olive',
  'real-estate': 'teal',
  'professional-services': 'denim',
};

/**
 * Solid tiles rather than tinted ones, and that was measured by eye before it
 * was chosen: a 12% tint of any of these on a cream card is close to
 * invisible at 56px, so a grid of seven still read as one grey block. A solid
 * tile with a white glyph is what actually gives the grid its rhythm, and it
 * is the one place on the page where a supporting hue runs at full strength.
 *
 * Every one of these clears 4.5:1 against white, so the glyph is legible well
 * past the 3:1 that non-text graphics need.
 */
const TONE_CLASS: Record<string, string> = {
  teal: 'bg-hue-teal text-white',
  plum: 'bg-hue-plum text-white',
  olive: 'bg-hue-olive text-white',
  denim: 'bg-hue-denim text-white',
  navy: 'bg-primary text-white',
};

const TONE_VAR: Record<string, string> = {
  teal: 'var(--color-hue-teal)',
  plum: 'var(--color-hue-plum)',
  olive: 'var(--color-hue-olive)',
  denim: 'var(--color-hue-denim)',
  navy: 'var(--color-primary)',
};

/**
 * The CSS colour a card should tint its corner with, for the same key the
 * badge is drawn from — so the corner, the badge and (on an industry page) the
 * illustration are all one colour. Exported rather than duplicated because a
 * second copy of this map is a second thing to forget to update.
 */
export function hueVar(name: string): string {
  return TONE_VAR[TONE_MAP[name] ?? 'navy'];
}

export default function IconBadge({ name, fallback, variant = 'default', size = 'md' }: IconBadgeProps) {
  const Flag = FLAG_MAP[name];
  if (Flag) {
    return (
      <div className={`inline-flex items-center justify-center ${size === 'sm' ? 'w-10' : 'w-14'}`}>
        <Flag className="w-full h-auto rounded-md shadow-sm" />
      </div>
    );
  }

  const Icon = ICON_MAP[name];

  const dimensions = size === 'sm' ? 'w-10 h-10' : 'w-10 h-10 sm:w-14 sm:h-14';
  const iconSize = size === 'sm' ? 20 : 22;

  if (!Icon) {
    // Fallback for anything not yet mapped (e.g. markets, which
    // correctly use flag emoji -- a real icon there would be a
    // downgrade, not an upgrade).
    return <span className="text-4xl">{fallback ?? '•'}</span>;
  }

  const badgeStyle =
    variant === 'featured'
      ? 'bg-white/15 text-white'
      : TONE_CLASS[TONE_MAP[name] ?? 'navy'];

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl shadow-sm ${dimensions} ${badgeStyle}`}
    >
      <Icon size={iconSize} strokeWidth={2} />
    </div>
  );
}
