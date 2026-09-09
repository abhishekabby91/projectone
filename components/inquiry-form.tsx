'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { companyInfo, services, regions } from '@/lib/data';

/**
 * The site's one inquiry form, embeddable on any page.
 *
 * Submits from the browser rather than through our own API. Web3Forms sits
 * behind Cloudflare, which answers a server-side call with a JS challenge, so
 * the key is fetched from /api/contact/key at submit time and the post goes
 * direct. See app/api/contact/route.ts for the full account of why.
 *
 * `region` makes the form specific rather than generic: it labels the fields in
 * that market's language, carries the region into the inquiry email so it can be
 * routed, and tells the visitor which hours we cover. A US firm and a UK
 * practice do not fill in the same form.
 */

type RegionSlug = (typeof regions)[number]['slug'];

interface RegionForm {
  emailPlaceholder: string;
  phonePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  hours: string;
}

const REGION_FORM: Record<RegionSlug, RegionForm> = {
  'united-states': {
    emailPlaceholder: 'you@yourfirm.com',
    phonePlaceholder: '+1 (555) 123-4567',
    companyLabel: 'Firm name',
    companyPlaceholder: 'Your CPA firm',
    hours: 'We cover US business hours from our delivery centre in New Delhi.',
  },
  'united-kingdom': {
    emailPlaceholder: 'you@yourpractice.co.uk',
    phonePlaceholder: '+44 20 1234 5678',
    companyLabel: 'Practice name',
    companyPlaceholder: 'Your accountancy practice',
    hours: 'We cover UK business hours from our delivery centre in New Delhi.',
  },
  australia: {
    emailPlaceholder: 'you@yourfirm.com.au',
    phonePlaceholder: '+61 2 1234 5678',
    companyLabel: 'Firm name',
    companyPlaceholder: 'Your accounting firm',
    hours: 'We cover Australian business hours from our delivery centre in New Delhi.',
  },
};

const FIELD_BASE =
  'w-full rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-input';

// `compact` exists for the fixed rail, where the form has ~330px to live in.
// It trims padding and type size only - no field is removed and nothing drops
// below the 24px minimum touch target, because a shorter form that cannot be
// used on a laptop trackpad is not a smaller form, it is a broken one.
const SIZES = {
  // The band ran 1540px tall on a 390px phone - nearly two screens, on 81
  // pages - because it used desktop padding and rhythm at every width. Every
  // value below steps up at `sm:`, so the desktop form is unchanged.
  //
  // The fields deliberately stay ONE column on mobile. Two-column form fields
  // on a 390px screen is a known usability regression: smaller targets, more
  // mis-taps, more errors on the one interaction the page exists for. Height
  // comes out of padding and rhythm instead, which costs nothing.
  default: {
    field: `${FIELD_BASE} px-3.5 py-2.5 sm:px-4 sm:py-3`,
    label: 'block text-sm font-semibold text-foreground mb-1 sm:mb-2',
    gap: 'space-y-3.5 sm:space-y-5',
    grid: 'grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5',
    submit: 'w-full px-6 py-3.5 sm:py-4 rounded-lg font-semibold',
    note: 'text-xs',
    rows: 4,
    // `rows` is an HTML attribute and has no `sm:` variant, so lowering it to
    // shorten the mobile form would have shortened the desktop one too. The
    // height comes off with a class instead; desktop keeps all four rows.
    textarea: 'h-[92px] sm:h-auto',
  },
  compact: {
    // Labels 13px, submit 15px. The first pass used 12px labels and an 11px
    // note, which fit but read as fine print beside the page they sit next to.
    // Input text is not set here on purpose: globals.css pins every input to
    // 16px to stop iOS Safari auto-zooming on focus, and that rule wins.
    field: `${FIELD_BASE} px-3 py-2`,
    label: 'block text-[13px] font-semibold text-foreground mb-1',
    gap: 'space-y-2.5',
    grid: 'grid grid-cols-1 gap-2.5',
    submit: 'w-full px-4 py-2.5 rounded-lg text-[15px] font-semibold',
    note: 'text-xs',
    rows: 2,
    textarea: '',
  },
} as const;

interface InquiryFormProps {
  /** Tailors the field labels, placeholders and routing to one market. */
  region?: RegionSlug;
  /** Pre-selects the service, so a page's form is about that page's work. */
  service?: string;
  /** Distinguishes submissions from different pages in the inbox. */
  source?: string;
  /** Two columns on wider screens, for a full-width band. */
  columns?: boolean;
  submitLabel?: string;
  /**
   * Overrides the id namespace for this instance. The dialog sets it so its
   * fields cannot collide with the band's when both are on the same page.
   */
  formId?: string;
  /** `compact` trims padding and type size to fit a narrow rail. */
  size?: keyof typeof SIZES;
  /**
   * Drops the "What do you need support with?" select.
   *
   * For the rail on a Service x Region page, where the page has already told
   * the form which service it is about via `service` - asking the reader to
   * pick it again is a wasted line on a form that has to fit one screen. The
   * value still reaches the payload from the prop.
   *
   * Only the rail sets this. The band and the dialog keep every field.
   */
  minimal?: boolean;
}

export default function InquiryForm({
  region,
  service,
  source,
  columns = false,
  submitLabel = 'Book Your Free Consultation',
  formId,
  size = 'default',
  minimal = false,
}: InquiryFormProps) {
  const sz = SIZES[size];
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [unsent, setUnsent] = useState<FormData | null>(null);

  const r = region ? REGION_FORM[region] : null;
  const regionName = region ? regions.find((x) => x.slug === region)?.name : undefined;
  // Unique per instance so two forms on one page cannot collide on ids.
  const uid = formId ?? `${region ?? 'all'}-${(source ?? 'page').replace(/[^a-z0-9]+/gi, '-')}`;

  const openMailClient = (data: FormData) => {
    const get = (k: string) => (data.get(k) as string) || '';
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Company: ${get('company')}`,
      get('phone') ? `Phone: ${get('phone')}` : null,
      (get('service') || service) ? `Service Interest: ${get('service') || service}` : null,
      regionName ? `Region: ${regionName}` : null,
      '',
      'Message:',
      get('message') || '(none provided)',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(
      `Consultation request from ${get('name') || 'Website Visitor'}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => ((data.get(k) as string) || '').trim();

    setStatus('submitting');
    setErrorMessage('');

    try {
      const keyRes = await fetch('/api/contact/key', { cache: 'no-store' });
      const keyJson = (await keyRes.json().catch(() => null)) as { accessKey?: string } | null;

      if (!keyRes.ok || !keyJson?.accessKey) {
        setUnsent(data);
        setStatus('error');
        setErrorMessage('mailto');
        return;
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: keyJson.accessKey,
          subject: regionName
            ? `${regionName} enquiry from ${get('name')}`
            : `Consultation request from ${get('name')}`,
          from_name: 'Accounstone website',
          name: get('name'),
          email: get('email'),
          message: get('message'),
          ...(get('company') && { company: get('company') }),
          ...(get('phone') && { phone: get('phone') }),
          ...((get('service') || service) && { service_interest: get('service') || service }),
          ...(regionName && { region: regionName }),
          ...(source && { page: source }),
          botcheck: get('botcheck'),
        }),
      });
      const result = (await res.json().catch(() => null)) as { success?: boolean } | null;

      if (res.ok && result?.success) {
        form.reset();
        setStatus('sent');
        // Send the visitor to a real URL so Google Ads and Meta can count the
        // conversion from the destination. An inline success state never
        // changes the URL, so neither platform can see it.
        router.push('/thank-you');
        return;
      }

      setUnsent(data);
      setStatus('error');
      setErrorMessage('mailto');
    } catch {
      setUnsent(data);
      setStatus('error');
      setErrorMessage('mailto');
    }
  };

  return (
    <div className={sz.gap}>
      {status === 'sent' && (
        <div role="status" className="p-4 rounded-lg bg-accent/10 border-2 border-accent text-sm text-foreground">
          <strong className="font-semibold">Thanks &mdash; your message is on its way.</strong> We read every enquiry
          ourselves and will come back to you shortly. If it is urgent, email{' '}
          <a href={`mailto:${companyInfo.contact.email}`} className="inline-block py-1 font-semibold text-primary hover:underline">
            {companyInfo.contact.email}
          </a>.
        </div>
      )}

      {status === 'error' && errorMessage === 'mailto' && (
        <div role="alert" className="p-4 rounded-lg bg-input border-2 border-accent text-sm text-foreground space-y-3">
          <p>
            <strong className="font-semibold">We could not send that automatically.</strong> Nothing you typed has been
            lost &mdash; you can send it as an email instead, already filled in.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              type="button"
              onClick={() => unsent && openMailClient(unsent)}
              className="inline-block py-2 px-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              Send by email instead
            </button>
            <span>
              or write to{' '}
              <a href={`mailto:${companyInfo.contact.email}`} className="inline-block py-1 font-semibold text-primary hover:underline">
                {companyInfo.contact.email}
              </a>
            </span>
          </div>
        </div>
      )}

      <form className={sz.gap} onSubmit={handleSubmit}>
        {/* Honeypot. Hidden from people and from assistive tech; bots fill it
            and Web3Forms discards the submission. */}
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className={columns ? sz.grid : sz.gap}>
          <div>
            <label htmlFor={`name-${uid}`} className={sz.label}>Full name</label>
            <input type="text" id={`name-${uid}`} name="name" placeholder="Jane Doe" required className={sz.field} />
          </div>

          <div>
            <label htmlFor={`email-${uid}`} className={sz.label}>Work email</label>
            <input
              type="email"
              id={`email-${uid}`}
              name="email"
              placeholder={r?.emailPlaceholder ?? 'you@yourfirm.com'}
              required
              className={sz.field}
            />
          </div>

          <div>
            <label htmlFor={`company-${uid}`} className={sz.label}>{r?.companyLabel ?? 'Company name'}</label>
            <input
              type="text"
              id={`company-${uid}`}
              name="company"
              placeholder={r?.companyPlaceholder ?? 'Your firm'}
              required
              className={sz.field}
            />
          </div>

          <div>
            <label htmlFor={`phone-${uid}`} className={sz.label}>Phone number</label>
            <input
              type="tel"
              id={`phone-${uid}`}
              name="phone"
              placeholder={r?.phonePlaceholder ?? '+1 (555) 123-4567'}
              className={sz.field}
            />
          </div>

          {!minimal && (
          <div>
            <label htmlFor={`service-${uid}`} className={sz.label}>What do you need support with?</label>
            <select id={`service-${uid}`} name="service" defaultValue={service ?? ''} className={sz.field}>
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>
          )}

        </div>

        <div>
          <label htmlFor={`message-${uid}`} className={sz.label}>What is the work you need covered?</label>
          <textarea
            id={`message-${uid}`}
            name="message"
            placeholder="Volume, deadlines, and what is currently falling behind."
            rows={sz.rows}
            required
            className={`${sz.field} ${sz.textarea} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
          className={`${sz.submit} bg-primary hover:bg-primary-light text-white transition-all duration-300 shadow-md hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-primary disabled:hover:shadow-md`}
        >
          {status === 'submitting' ? 'Sending…' : submitLabel}
        </button>

        <p className={`${sz.note} text-muted text-center`}>
          {size === 'compact'
            ? 'Free consultation. No obligation.'
            : <>The consultation and the call are always free. {r?.hours ?? 'We reply from our delivery centre in New Delhi.'}</>}
        </p>
      </form>
    </div>
  );
}
