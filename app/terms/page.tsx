import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import InquirySection from '@/components/inquiry-section';
import { companyInfo } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Terms & Conditions',
  description: 'Accounstone’s terms and conditions of service, covering engagement scope, responsibilities and the limits that apply to the work.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-8 py-20">
      <div className="prose prose-invert max-w-none space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Terms & Conditions</h1>
          <p className="text-muted">Last updated: January 2026</p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
          <p className="text-muted">
            By accessing and using Accounstone's services, you agree to be bound by these Terms and Conditions. If you do not agree to abide by the above, please do not use this service.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">2. Service Provision</h2>
          <p className="text-muted mb-4">
            Accounstone provides accounting, bookkeeping, tax preparation support, and payroll processing services as described in our engagement letters and service agreements. Services are provided as professional services with reasonable care standards.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">3. Confidentiality</h2>
          <p className="text-muted">
            All client information is treated as confidential. Accounstone maintains strict confidentiality of all financial, tax, and business information provided by clients, subject to applicable law.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">4. Limitation of Liability</h2>
          <p className="text-muted">
            To the fullest extent permitted by law, Accounstone's liability for any damages shall not exceed the fees paid for services in the twelve months preceding the claim.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">5. Professional Standards</h2>
          <p className="text-muted">
            Services are provided in accordance with applicable professional accounting standards, tax regulations, and industry best practices in the relevant jurisdiction.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
          <p className="text-muted">
            For questions about these terms, contact us at {companyInfo.contact.email} or through our contact form.
          </p>
        </div>
      </div>

      {/* The enquiry band, on the legal pages too (owner's instruction,
          2026-09-16). It is `compact`, which drops the assurances and the
          contact block and leaves mostly form labels — these are short pages
          and the full band would be a large share of their text, which is how
          near-duplicate scores climb. Each one passes its own title and lead
          for the same reason. */}
      <InquirySection source="/terms" title="Want the Terms Applied to Your Actual Scope?" lead="The consultation and the call are always free. Tell us what you would hand over and we will be specific about what we would and would not take on." compact />
    </main>
  );
}
