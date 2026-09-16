import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/seo';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import { CONSENT_CATEGORIES } from '@/lib/consent';
import CookieSettingsInlineButton from '@/components/cookie-settings-inline-button';

/**
 * The cookie policy.
 *
 * Every row in the table below was verified against this repository and against
 * a real browser session on 2026-09-04 — not copied from a template. Where a
 * value could not be observed from the sandbox, it says so in the row rather
 * than stating a number we did not check. Where a statement needs a lawyer
 * rather than an engineer, it is marked for review instead of asserted.
 */

export const metadata: Metadata = generateMetadata({
  title: 'Cookie Policy and Your Choices',
  description:
    'Which cookies this website sets, what each one does, how long it lasts, and how to change or withdraw your consent at any time.',
  path: '/cookie-policy',
});

const REVIEW = '[CLIENT / LEGAL REVIEW REQUIRED]';

const cookieRows: {
  name: string;
  provider: string;
  category: string;
  purpose: string;
  duration: string;
  party: string;
}[] = [
  {
    name: '_ga',
    provider: 'Google Analytics 4',
    category: 'Analytics',
    purpose: 'Distinguishes one visitor from another so visits can be counted without identifying anyone.',
    duration: '2 years (Google-documented)',
    party: 'First party',
  },
  {
    name: '_ga_D1L72NM0GY',
    provider: 'Google Analytics 4',
    category: 'Analytics',
    purpose: 'Keeps session state for this specific Analytics property.',
    duration: '2 years (Google-documented)',
    party: 'First party',
  },
  {
    name: 'accounstone.cookie-consent',
    provider: 'Accounstone',
    category: 'Essential',
    purpose:
      'Stores the choice you make on this page so you are not asked again. Held in browser storage, never sent to our server.',
    duration: 'Until you clear site data',
    party: 'First party',
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <div className="space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Privacy</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2 mb-2">Cookie Policy</h1>
          <p className="text-muted">Last updated: 4 September 2026</p>
        </div>

        <div className="bg-input p-6 rounded-xl border border-border space-y-4">
          <h2 className="text-2xl font-bold text-primary">The short version</h2>
          <p className="text-muted leading-7">
            This site uses one analytics tool and nothing else. It does not run advertising pixels,
            heat-mapping, session recording, chat widgets or social media trackers. Analytics does
            not load at all until you allow it &mdash; if you decline, no request is made to Google
            and no analytics cookie is created.
          </p>
          <p className="text-muted leading-7">
            You can change your mind whenever you like: <CookieSettingsInlineButton /> reopens your
            choices, and the same control sits in the footer of every page.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">What a cookie is here</h2>
          <p className="text-muted leading-7">
            &ldquo;Cookies&rdquo; is used loosely on most websites to mean any small piece of data a
            site keeps in your browser. That is how it is used here too, and it covers both actual
            cookies and browser storage. Your own consent choice is kept in browser storage rather
            than a cookie, because it never needs to be sent to our server.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">The categories</h2>
          <div className="space-y-3">
            {CONSENT_CATEGORIES.map((category) => (
              <div key={category.id} className="rounded-xl border border-border bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-primary">{category.label}</h3>
                  {category.essential ? (
                    <span className="rounded-full bg-input px-3 py-1 text-xs font-semibold text-muted">
                      Always on
                    </span>
                  ) : (
                    <span className="rounded-full bg-input px-3 py-1 text-xs font-semibold text-muted">
                      Off until you allow it
                    </span>
                  )}
                </div>
                <p className="text-muted leading-7 mt-2">{category.description}</p>
                <p className="text-sm text-muted/80 mt-2">
                  <strong className="text-primary/80">In use today:</strong>{' '}
                  {category.services.length > 0 ? category.services.join(', ') : 'nothing'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Everything this site can store</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[46rem] border-collapse text-sm">
              <thead>
                <tr className="bg-input text-left">
                  <th scope="col" className="p-3 font-bold text-primary">Name</th>
                  <th scope="col" className="p-3 font-bold text-primary">Provider</th>
                  <th scope="col" className="p-3 font-bold text-primary">Category</th>
                  <th scope="col" className="p-3 font-bold text-primary">Purpose</th>
                  <th scope="col" className="p-3 font-bold text-primary">Duration</th>
                  <th scope="col" className="p-3 font-bold text-primary">Party</th>
                </tr>
              </thead>
              <tbody>
                {cookieRows.map((row) => (
                  <tr key={row.name} className="border-t border-border align-top">
                    <td className="p-3 font-mono text-xs text-primary">{row.name}</td>
                    <td className="p-3 text-muted">{row.provider}</td>
                    <td className="p-3 text-muted">{row.category}</td>
                    <td className="p-3 text-muted leading-6">{row.purpose}</td>
                    <td className="p-3 text-muted">{row.duration}</td>
                    <td className="p-3 text-muted">{row.party}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted leading-6">
            The two Google durations are taken from Google&rsquo;s published documentation. They were
            not independently observed, because analytics is not loaded unless you allow it.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Other third parties, and what they are not</h2>
          <ul className="space-y-3 text-muted leading-7">
            <li>
              <strong className="text-primary">Google Analytics 4</strong> &mdash; the only tracking
              service on this site. Loaded only with your consent. Google acts as our processor for
              this data. {REVIEW} the data-processing terms and any international transfer mechanism
              should be confirmed with Google and with your adviser.
            </li>
            <li>
              <strong className="text-primary">Web3Forms</strong> &mdash; delivers an enquiry when you
              choose to submit the contact form. It runs only on submission, sets no cookie, and does
              nothing if you never use the form. Nothing is sent before you press the button.
            </li>
            <li>
              <strong className="text-primary">Social media links</strong> &mdash; the LinkedIn,
              Facebook, Instagram and YouTube icons are ordinary links. There are no embedded
              players, like buttons or pixels, so those companies receive nothing until you choose to
              click through.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Changing or withdrawing consent</h2>
          <p className="text-muted leading-7">
            Use <CookieSettingsInlineButton /> here or in the footer. Turning analytics off stops
            further collection immediately, clears the analytics cookies, and prevents the script
            loading on any later page. Your browser&rsquo;s own settings can also block or delete
            cookies for this site at any time, independently of this page.
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-accent bg-input p-6 space-y-3">
          <h2 className="text-xl font-bold text-primary">Items for legal review</h2>
          <p className="text-muted leading-7">
            This page describes what the website technically does, verified against its own source
            code and a real browser session. It is not legal advice, and no claim of compliance with
            any particular regime is made here. The following need confirmation by the site owner and
            their adviser:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted leading-7">
            <li>{REVIEW} Which regimes apply, given visitors in the US, UK and Australia.</li>
            <li>{REVIEW} Whether a consent record kept only in the visitor&rsquo;s own browser meets the record-keeping expectations that apply.</li>
            <li>{REVIEW} The Google Analytics data-processing terms, retention setting and international transfer basis.</li>
            <li>{REVIEW} Whether consent should be re-requested on a fixed cycle, and if so how often.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-primary">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/privacy" className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-input transition-colors">
              Privacy Policy
            </Link>
            <Link href="/data-security" className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-input transition-colors">
              Data Security
            </Link>
            <Link href="/terms" className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-input transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* The enquiry band, on the legal pages too (owner's instruction,
          2026-09-16). It is `compact`, which drops the assurances and the
          contact block and leaves mostly form labels — these are short pages
          and the full band would be a large share of their text, which is how
          near-duplicate scores climb. Each one passes its own title and lead
          for the same reason. */}
      <InquirySection source="/cookie-policy" title="Questions About Anything on This Page?" lead="The consultation and the call are always free. Ask about what we store, what we do not, or about the work itself — either is a fine reason to get in touch." compact />

      {/* Closes on the same sequence as the rest of the site: the enquiry
          band, then the CTA banner. 87 of 95 pages already ended this way;
          these five had the band and stopped. Copy is page-specific because
          /resources and /resources/guides already sit at 29.6% on the
          near-duplicate sweep, and one shared banner would push it. */}
      <CTABanner
        title="Questions Beyond Cookies?"
        description="Most people who reach this page were checking we are careful with data. Ask us the same question about the accounting work."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        ctaSecondary={{ text: 'Privacy Policy', href: '/privacy' }}
        background="primary"
      />
    </main>
  );
}
