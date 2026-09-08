import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Client Onboarding Process',
  description: 'A documented onboarding process built around discovery, system access, process documentation, and a soft-launch phase before full handoff.',
  path: '/delivery-framework/onboarding',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'How We Work', url: `${baseUrl}/delivery-framework/onboarding` },
  { name: 'Onboarding', url: `${baseUrl}/delivery-framework/onboarding` },
]);

export default function OnboardingPage() {
  const onboardingFAQs = [
    {
      question: 'How long does the onboarding process take?',
      answer: 'It depends on the complexity of your systems, the state of your existing documentation, and how much knowledge transfer is needed. We prefer to build a realistic ramp-up plan from the actual work rather than promise a fixed number of weeks.',
    },
    {
      question: 'What documentation do we need to provide?',
      answer: 'We need your accounting chart of accounts, current software access, compliance requirements, and any existing documentation or procedures.',
    },
    {
      question: 'Can onboarding happen while we continue normal operations?',
      answer: 'Yes. Onboarding runs alongside your existing processes rather than pausing them — the delivery team ramps up on defined tasks first, with a full handoff only once the workflow is documented and reviewed.',
    },
  ];

  const faqSchema = generateFAQSchema(onboardingFAQs);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Delivery Framework"
        title="Onboarding That Runs Alongside Your Existing Process"
        description="A documented ramp-up — chart of accounts, access, existing procedures, and a soft-launch phase — before any accounting responsibility fully transitions."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary">Our Onboarding Approach</h2>
            
            {[
              {
                step: '1',
                title: 'Discovery & Planning',
                desc: 'We conduct detailed discovery calls to understand your business, current processes, compliance requirements, and success metrics.',
              },
              {
                step: '2',
                title: 'System Access Setup',
                desc: 'Establish secure access to QuickBooks, Xero, banking platforms, and any other systems. We follow your security protocols.',
              },
              {
                step: '3',
                title: 'Process Documentation',
                desc: 'Document your current workflows, accounting procedures, month-end close process, and reporting requirements.',
              },
              {
                step: '4',
                title: 'Team Kickoff',
                desc: 'Meet your dedicated team, establish communication protocols, set expectations, and define escalation procedures.',
              },
              {
                step: '5',
                title: 'Knowledge Transfer',
                desc: 'Comprehensive training on your specific accounting requirements, compliance needs, and internal controls.',
              },
              {
                step: '6',
                title: 'Soft Launch',
                desc: 'Begin work on non-critical tasks while maintaining your existing processes. Build confidence and team dynamics.',
              },
              {
                step: '7',
                title: 'Full Transition',
                desc: 'Full handoff of accounting responsibilities, with ongoing review and support continuing after transition.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 pb-8 border-b border-border">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Onboarding" items={onboardingFAQs} columns={2} />

      <section className="w-full py-7 md:py-10 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted leading-relaxed">
            Onboarding concerns come up most for{' '}
            <Link href="/industries/cpa-firms" className="text-primary font-medium hover:underline">CPA firms</Link>{' '}
            evaluating whether a handoff will actually reduce review time, and for teams adding{' '}
            <Link href="/solutions/staff-augmentation" className="text-primary font-medium hover:underline">staff augmentation</Link>{' '}
            capacity during a specific crunch. See{' '}
            <Link href="/delivery-framework/quality-assurance" className="text-primary font-medium hover:underline">how review and quality control work</Link>{' '}
            once onboarding is complete, and{' '}
            <Link href="/delivery-framework/communication" className="text-primary font-medium hover:underline">what the reporting rhythm looks like</Link>{' '}
            after that.
          </p>
        </div>
      </section>

      <InquirySection
        compact
        source="/delivery-framework/onboarding"
        title="Talk Through What Onboarding Would Look Like"
        lead="Tell us the systems, the documentation you already have and the first workflow you would hand over, and we will map a realistic ramp-up."
      />

      <CTABanner
        title="Ready to Get Started?"
        description="Schedule a discovery call to learn about our onboarding process and timeline."
        cta={{
          text: 'Schedule Discovery Call',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
