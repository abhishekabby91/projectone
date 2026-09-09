'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check, Clock, Mail, MapPin, ShieldCheck, UserCheck, X } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import FAQSection from '@/components/faq-section';
import RegionFlag from '@/components/region-flag';
import { companyInfo, services } from '@/lib/data';
import { CONTACT_FAQS } from '@/lib/contact-faqs';

const FIELD =
  'w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-white';
const LABEL = 'block text-sm font-semibold text-foreground mb-2';

export default function ContactPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  // What the visitor typed, kept only so the fallback below can pre-fill a
  // message without making them retype it.
  const [unsent, setUnsent] = useState<FormData | null>(null);

  // On success the visitor goes to /thank-you, which is what gives Google Ads
  // and Meta a URL to count the conversion on. On failure they stay here with
  // what they typed intact: the email fallback below is only ever offered as a
  // button they can choose - it used to fire on its own, which is what made the
  // form read as a mailto link in disguise.
  const openMailClient = (data: FormData) => {
    const get = (k: string) => (data.get(k) as string) || '';
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Company: ${get('company')}`,
      get('phone') ? `Phone: ${get('phone')}` : null,
      get('service') ? `Service Interest: ${get('service')}` : null,
      '',
      'Message:',
      get('message') || '(none provided)',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(
      `Consultation Request from ${get('name') || 'Website Visitor'}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    setErrorMessage('');

    const get = (k: string) => ((data.get(k) as string) || '').trim();

    try {
      // The key comes from the server at submit time rather than being baked
      // into the bundle, so it stays out of this public repository and can be
      // rotated in Vercel without a redeploy.
      const keyRes = await fetch('/api/contact/key', { cache: 'no-store' });
      const keyJson = (await keyRes.json().catch(() => null)) as { accessKey?: string } | null;

      if (!keyRes.ok || !keyJson?.accessKey) {
        setUnsent(data);
        setStatus('error');
        setErrorMessage('mailto');
        return;
      }

      // Submitted from the browser, not the server. Web3Forms is behind
      // Cloudflare, which serves a JS challenge to server-side callers - a real
      // browser clears it, a serverless function never can.
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: keyJson.accessKey,
          subject: `Consultation request from ${get('name')}`,
          from_name: 'Accounstone website',
          name: get('name'),
          email: get('email'),
          message: get('message'),
          ...(get('company') && { company: get('company') }),
          ...(get('phone') && { phone: get('phone') }),
          ...(get('service') && { service_interest: get('service') }),
          // Web3Forms discards a submission that fills this. People cannot see
          // the field; bots fill everything.
          botcheck: get('botcheck'),
        }),
      });
      const result = (await res.json().catch(() => null)) as { success?: boolean } | null;

      if (res.ok && result?.success) {
        form.reset();
        setStatus('sent');
        // Same reason as components/inquiry-form.tsx: the conversion has to
        // land on a URL an ad platform can observe.
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
    <main>
      <PremiumHero
        subtitle="Free consultation"
        title="Start With a Conversation, Not a Contract"
        description="Half an hour, no cost, no obligation. Tell us what is falling behind — the volume, the systems, the deadlines — and we will tell you plainly whether it is work we do."
        background="primary-gradient"
      />

      {/* Principle 1 in AI-WEBSITE-GUIDE.md: reduce uncertainty before selling.
          The single biggest reason a considered B2B enquiry does not get sent is
          not knowing what happens next. So that goes above the form, not below
          it. */}
      <section className="w-full bg-white px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            {[
              {
                icon: Clock,
                h: 'Thirty minutes, and it is free',
                p: 'No deck, no discovery fee, no commitment at the end of it. If the answer is that we are not the right fit, that is a useful half hour too.',
              },
              {
                icon: UserCheck,
                h: 'You speak to whoever would scope it',
                p: 'Enquiries are not routed into a sales queue. The person who replies is the person who would work out what the engagement looks like.',
              },
              {
                icon: ShieldCheck,
                h: 'We will tell you if it is not ours',
                p: 'There is work we do not do — tax advice, audit opinions, software implementation. We would rather say so on the first call than three weeks in.',
              },
            ].map((item) => (
              <div
                key={item.h}
                className="h-full rounded-xl border border-border bg-input p-5 sm:p-6"
              >
                <item.icon className="mb-3 h-6 w-6 text-accent" aria-hidden="true" />
                <h2 className="mb-1.5 font-bold text-primary text-base sm:text-lg">{item.h}</h2>
                <p className="text-sm leading-relaxed text-muted sm:text-base">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  Book the call
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  Tell Us What Is Falling Behind
                </h2>
                <p className="text-muted leading-relaxed">
                  The more concrete you can be — how many clients, which system, what the deadline is —
                  the more useful the first reply will be. A single line is fine too.
                </p>
              </div>

              {status === 'sent' && (
                <div role="status" className="p-4 rounded-lg bg-accent/10 border-2 border-accent text-sm text-foreground">
                  <strong className="font-semibold">Thanks &mdash; your message is on its way.</strong> We read every
                  enquiry ourselves and will come back to you shortly. If it is urgent, email{' '}
                  <a href={`mailto:${companyInfo.contact.email}`} className="inline-block py-1 font-semibold text-primary hover:underline">
                    {companyInfo.contact.email}
                  </a>.
                </div>
              )}

              {status === 'error' && errorMessage === 'mailto' && (
                <div role="alert" className="p-4 rounded-lg bg-white border-2 border-accent text-sm text-foreground space-y-3">
                  <p>
                    <strong className="font-semibold">We could not send that automatically.</strong> Nothing you typed
                    has been lost &mdash; you can send it as an email instead, already filled in.
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

              {status === 'error' && errorMessage !== 'mailto' && (
                <div role="alert" className="p-4 rounded-lg bg-white border-2 border-accent text-sm text-foreground">
                  {errorMessage}
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Honeypot. Hidden from people and from assistive tech; bots
                    fill it and the API discards the submission. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="name" className={LABEL}>Full name</label>
                  <input type="text" id="name" name="name" placeholder="Jane Doe" required className={FIELD} />
                </div>

                <div>
                  <label htmlFor="email" className={LABEL}>Work email</label>
                  <input type="email" id="email" name="email" placeholder="you@yourfirm.com" required className={FIELD} />
                </div>

                <div>
                  <label htmlFor="company" className={LABEL}>Firm or company name</label>
                  <input type="text" id="company" name="company" placeholder="Your firm" required className={FIELD} />
                </div>

                <div>
                  <label htmlFor="phone" className={LABEL}>Phone number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" className={FIELD} />
                </div>

                <div>
                  <label htmlFor="service" className={LABEL}>What do you need support with?</label>
                  <select id="service" name="service" defaultValue="" className={FIELD}>
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={LABEL}>What is the work you need covered?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Volume, deadlines, the systems it lives in, and what is currently falling behind."
                    required
                    className={`${FIELD} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                  className="w-full px-6 py-4 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-primary disabled:hover:shadow-md"
                >
                  {status === 'submitting' ? 'Sending…' : 'Book Your Free Consultation'}
                </button>

                <p className="text-xs text-muted text-center">
                  We reply within one business day. Your details are used to answer your enquiry and
                  nothing else.
                </p>
              </form>
            </div>

            {/* Coverage and direct contact */}
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  Or reach us directly
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  However You Prefer to Start
                </h2>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="inline-block py-1 break-words text-primary hover:text-primary-light transition-colors"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">Delivery centre</h3>
                  <p className="text-muted">{companyInfo.contact.address}</p>
                </div>
              </div>

              {/* The old version of this block advertised "9:00 AM - 6:00 PM
                  EST" and nothing else, on a site that sells to UK practices
                  and Australian firms. To a UK reader that reads as "not for
                  you". Each market gets its own line now, and none of them
                  invents a clock time the rest of the site does not already
                  claim. */}
              <div className="rounded-xl border border-border bg-white p-6 space-y-4">
                <h3 className="font-semibold text-foreground">When we are covering your day</h3>
                <p className="text-sm text-muted leading-relaxed">
                  The delivery team works Monday to Friday from New Delhi, on your market&rsquo;s business
                  day rather than ours.
                </p>
                <ul className="space-y-2.5">
                  {[
                    { region: 'united-states' as const, label: 'United States', hours: '9:00 AM – 6:00 PM ET' },
                    { region: 'united-kingdom' as const, label: 'United Kingdom', hours: 'UK business hours' },
                    { region: 'australia' as const, label: 'Australia', hours: 'Australian business hours' },
                  ].map((row) => (
                    <li key={row.label} className="flex items-center justify-between gap-3 text-sm">
                      <span className="flex items-center gap-2 text-foreground">
                        <RegionFlag region={row.region} className="w-6 h-4" decorative />
                        {row.label}
                      </span>
                      <span className="text-muted text-right">{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  What to expect
                </p>
                {[
                  'A free consultation and call, with no commitment',
                  'A written proposal built around your actual workflow',
                  'No long-term contracts required',
                  'A reply within one business day',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principle 3, respect the buyer's control, made concrete. Naming what we
          will not touch is the fastest way to answer the question a firm is
          actually asking on this page: what am I handing over? Every line here
          traces to knowledge/company/scope-boundaries.md. */}
      <section className="w-full bg-primary px-6 md:px-8 py-10 md:py-14 text-white">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-white/40" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white/70">
                Before you ask
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-balance leading-tight">
              What We Will Not Do, Whatever You Are Paying Us
            </h2>
            <p className="text-white/85 leading-relaxed">
              Most providers describe what they take on. The more useful list on a first call is the
              other one, because it is what decides whether your firm stays in control.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              'Hold your filing credentials. No IRS e-services, no HMRC gateway, no ATO portal.',
              'Touch your bank. We prepare a payment run; releasing it stays inside your own controls.',
              'Represent you to a tax authority. That needs a licensed CPA, EA or attorney.',
              'Give tax advice or take a position. We prepare returns; your CPA or agent decides.',
              'Sign an audit opinion, plan an audit or choose samples. Preparation moves; judgment does not.',
              'Implement or configure your software. We work inside the setup you already run.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white/10 p-4">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-white/70" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-white/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-white/70 leading-relaxed">
            If a provider offers you any of the above, it is worth asking which licence they are
            holding it under.
          </p>
        </div>
      </section>

      {/* Principle 10: a visitor should learn something useful even if they
          never send the form. This also gives /contact real internal links -
          it had almost none. */}
      <section className="w-full bg-white px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">
                Not ready to send anything
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Find the Situation That Sounds Like Yours
            </h2>
            <p className="text-base text-muted leading-relaxed">
              If you would rather read first, these answer the questions that usually come before a
              call. None of them requires speaking to us.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { h: 'Busy season is going to break the review queue', href: '/resources/guides/staff-augmentation-tax-season-guide' },
              { h: 'The books are behind and need a cleanup first', href: '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping' },
              { h: 'Month-end close keeps slipping', href: '/resources/guides/outsourced-accounting-services-guide' },
              { h: 'The payables queue is eating the week', href: '/resources/guides/outsourced-accounts-payable-guide' },
              { h: 'Receivables are ageing and nobody is chasing', href: '/resources/guides/outsourced-accounts-receivable-guide' },
              { h: 'Audit preparation stalls every year', href: '/blog/audit-support-services' },
              { h: 'We do not know which engagement model fits', href: '/resources/guides/choosing-an-engagement-model' },
              { h: 'We are comparing providers and want a checklist', href: '/resources/guides/how-to-choose-accounting-outsourcing-partner' },
            ].map((row) => (
              <Link
                key={row.href}
                href={row.href}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-input p-4 sm:p-5 transition-colors hover:border-primary/50 hover:bg-white"
              >
                <span className="min-w-0 text-sm font-medium leading-snug text-foreground sm:text-base">
                  {row.h}
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Before you get in touch" items={CONTACT_FAQS} columns={2} />
    </main>
  );
}
