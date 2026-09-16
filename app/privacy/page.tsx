import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/seo';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import { companyInfo } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy and Data Handling',
  description: 'How Accounstone collects, uses and protects personal and client information, and the choices available to you.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-8 py-20">
      <div className="prose prose-invert max-w-none space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-muted">Last updated: January 2026</p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
          <p className="text-muted mb-4">
            Accounstone ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
          <p className="text-muted mb-4">We collect information you voluntarily provide:</p>
          <ul className="list-disc list-inside space-y-2 text-muted">
            <li>Name, email address, and phone number</li>
            <li>Company information and business details</li>
            <li>Messages and inquiries submitted through contact forms</li>
            <li>Financial data provided for accounting services</li>
          </ul>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Information</h2>
          <p className="text-muted mb-4">We use collected information for:</p>
          <ul className="list-disc list-inside space-y-2 text-muted">
            <li>Providing and improving our accounting services</li>
            <li>Responding to your inquiries and requests</li>
            <li>Sending service updates and communications</li>
            <li>Compliance with legal and regulatory obligations</li>
          </ul>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">4. Cookies and Analytics</h2>
          <p className="text-muted mb-4">
            This website uses one analytics service, Google Analytics 4, to understand which pages are useful and where visitors get stuck. It does not run advertising pixels, session recording, heat-mapping or social media trackers.
          </p>
          <p className="text-muted mb-4">
            Analytics does not load until you allow it. If you decline, no request is made to Google and no analytics cookie is created. You can change or withdraw that choice at any time using the Cookie Settings control in the footer of every page.
          </p>
          <p className="text-muted">
            The full list of what can be stored, what each item does and how long it lasts is in our{' '}
            <Link href="/cookie-policy" className="text-primary font-medium underline underline-offset-2 hover:text-accent">Cookie Policy</Link>.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
          <p className="text-muted">
            We handle client data under NDA-backed engagements with security-conscious practices. We are actively working toward formal certifications such as SOC 2, and we will clearly communicate our current certification status to any client who asks rather than overstating it.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
          <p className="text-muted mb-4">Depending on your location, you may have rights under applicable privacy laws (such as GDPR for UK/EU residents or the CCPA/CPRA for California residents), including the right to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
          </ul>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
          <p className="text-muted">
            For privacy inquiries, contact us at {companyInfo.contact.email} or through our contact form.
          </p>
        </div>
      </div>

      {/* The enquiry band, on the legal pages too (owner's instruction,
          2026-09-16). It is `compact`, which drops the assurances and the
          contact block and leaves mostly form labels — these are short pages
          and the full band would be a large share of their text, which is how
          near-duplicate scores climb. Each one passes its own title and lead
          for the same reason. */}
      <InquirySection source="/privacy" title="A Question We Have Not Answered Here?" lead="The consultation and the call are always free. If something about how we would handle your data or your clients’ data is not covered above, ask and we will answer it plainly." compact />

      {/* Closes on the same sequence as the rest of the site: the enquiry
          band, then the CTA banner. 87 of 95 pages already ended this way;
          these five had the band and stopped. Copy is page-specific because
          /resources and /resources/guides already sit at 29.6% on the
          near-duplicate sweep, and one shared banner would push it. */}
      <CTABanner
        title="Want to Know Exactly What We Would Hold?"
        description="Tell us what you would hand over and we will be specific about what is accessed, by whom, and what never leaves your systems."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        ctaSecondary={{ text: 'Data Security', href: '/data-security' }}
        background="primary"
      />
    </main>
  );
}
