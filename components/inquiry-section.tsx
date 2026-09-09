import { Check, Mail } from 'lucide-react';
import InquiryForm from '@/components/inquiry-form';
import RegionFlag from '@/components/region-flag';
import { companyInfo, regions } from '@/lib/data';

/**
 * The inquiry band that turns a content page into a page you can act on.
 *
 * Deliberately region-aware rather than one block repeated site-wide. Forty
 * copies of identical copy would both read as boilerplate and push these pages
 * toward each other on any near-duplicate measure, which the restructure spent
 * a lot of effort avoiding. The framing, the assurances and the form fields all
 * change by market; a page can also pass its own `title` so the ask matches
 * what the reader was just reading about.
 */

type RegionSlug = (typeof regions)[number]['slug'];

const REGION_COPY: Record<RegionSlug, { title: string; lead: string; points: string[] }> = {
  'united-states': {
    title: 'Talk to Us About Your Firm’s Busy Season',
    lead: 'A free consultation, and a call that costs you nothing but the half hour. Tell us where the preparation is backing up and we will scope a pilot around it.',
    points: [
      'Start with one client or one month of close work',
      'We prepare; your firm reviews, signs and e-files',
      'No EFIN, no banking control, no client-facing contact without your say-so',
    ],
  },
  'united-kingdom': {
    title: 'Talk to Us About Your Practice’s Workload',
    lead: 'A free consultation, and a call that costs you nothing but the half hour. Tell us which part of the portfolio is eating review time and we will scope a pilot around it.',
    points: [
      'Start with one client or one VAT quarter',
      'We prepare; your practice reviews, advises and files',
      'No HMRC or Companies House credentials, and no banking control',
    ],
  },
  australia: {
    title: 'Talk to Us About Your Firm’s Lodgment Program',
    lead: 'A free consultation, and a call that costs you nothing but the half hour. Tell us where the program is backing up and we will scope a pilot around it.',
    points: [
      'Start with one client or one BAS quarter',
      'We prepare; your registered agent reviews and lodges',
      'No ATO portal access, and no banking control',
    ],
  },
};

const GENERIC = {
  title: 'Talk to Us About the Work You Need Covered',
  lead: 'The consultation and the call are always free. Tell us what is falling behind and we will talk through what support would actually change.',
  points: [
    'Start small — one client, or one cycle of the work',
    'We prepare; your team keeps review, judgement and sign-off',
    'No filing credentials and no banking control, in any market',
  ],
};

interface InquirySectionProps {
  region?: RegionSlug;
  /** Pre-selects the service so the form matches the page it sits on. */
  service?: string;
  /** Identifies the page in the inquiry email. */
  source?: string;
  /** Overrides the heading when the page has a sharper ask of its own. */
  title?: string;
  /**
   * Overrides the standfirst. Worth setting on any page thin enough that this
   * band is a large share of its words - forty copies of one paragraph is what
   * pushes short pages toward each other on a near-duplicate measure.
   */
  lead?: string;
  /** Drops the assurances and contact block, for pages with little copy of their own. */
  compact?: boolean;
  /** Alternate the band against the section above it. */
  background?: 'white' | 'input';
}

export default function InquirySection({
  region,
  service,
  source,
  title,
  lead,
  compact = false,
  background = 'input',
}: InquirySectionProps) {
  const copy = region ? REGION_COPY[region] : GENERIC;
  const regionName = region ? regions.find((r) => r.slug === region)?.name : undefined;

  return (
    <section
      id="inquiry"
      aria-labelledby="inquiry-heading"
      className={`w-full py-8 md:py-14 px-6 md:px-8 ${background === 'white' ? 'bg-white' : 'bg-input'}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-6 lg:gap-12 items-start">
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-secondary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">
              Free consultation
            </span>
          </div>

          <h2
            id="inquiry-heading"
            className="flex flex-wrap items-center gap-3 font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight"
          >
            {region && <RegionFlag region={region} className="w-8 h-[22px]" decorative />}
            {title ?? copy.title}
          </h2>

          <p className="text-base md:text-lg text-muted leading-relaxed">{lead ?? copy.lead}</p>

          {!compact && (
          <ul className="space-y-2.5 pt-1 sm:space-y-3">
            {copy.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-foreground text-sm sm:text-base leading-6">{point}</span>
              </li>
            ))}
          </ul>
          )}

          {!compact && (
          <div className="pt-2 space-y-1.5 text-sm">
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="inline-flex items-center gap-2 py-1.5 font-medium text-primary hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              {companyInfo.contact.email}
            </a>
          </div>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 sm:p-8 shadow-[0_2px_24px_-8px_rgba(30,58,95,0.16)]">
          <InquiryForm
            region={region}
            service={service}
            source={source ?? regionName}
            columns
          />
        </div>
      </div>
    </section>
  );
}
