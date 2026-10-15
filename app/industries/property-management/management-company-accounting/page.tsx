import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/property-management/management-company-accounting';

export const metadata: Metadata = genMeta({
  title: 'Property Management Company Accounting Support',
  description:
    'Support management-company books, fee revenue, payroll entries, overhead, intercompany balances, reconciliations and month-end reporting separately from property ledgers.',
  path: PATH,
});

const faqs = [
  {
    question: 'What is management-company accounting?',
    answer:
      'It covers the operating company’s own books—such as management-fee revenue, payroll-related entries, overhead, payables, cash, receivables and intercompany balances—separately from property or owner records maintained for clients.',
  },
  {
    question: 'How is this different from property-level accounting?',
    answer:
      'Property-level accounting tracks rent, tenant balances, property expenses, deposits and owner reporting. Management-company accounting tracks the management business itself. The two views may need reconciliations and approved allocations, but owner funds and company revenue should not be treated as interchangeable.',
  },
  {
    question: 'Can you help reconcile management fees and intercompany balances?',
    answer:
      'Within the agreed scope, we can prepare fee schedules from client-approved agreements and source activity, reconcile related ledger balances, document differences and prepare supporting entries for review. The client approves accounting policies, allocations and any proposed adjustments.',
  },
  {
    question: 'Can you prepar...[truncated]