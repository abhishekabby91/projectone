import type { Metadata } from 'next';
import Link from 'next/link';
import { SearchX } from 'lucide-react';

const notFoundTitle = 'Page Not Found | Accounstone';
const notFoundDescription =
  'The page you requested could not be found. Browse Accounstone services or contact us for help.';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: notFoundDescription,
  robots: { index: false, follow: true },
  alternates: { canonical: null },
  openGraph: {
    title: notFoundTitle,
    description: notFoundDescription,
    siteName: 'Accounstone',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: notFoundTitle,
    description: notFoundDescription,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 md:px-8 py-20">
      <div className="max-w-lg mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/8 flex items-center justify-center">
            <SearchX className="w-10 h-10 text-primary" aria-hidden="true" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="figure text-6xl font-bold text-primary">404</p>
          <h1 className="text-2xl font-bold text-foreground">This Page Doesn't Balance</h1>
          <p className="text-muted leading-relaxed">
            The page you're looking for doesn't exist, may have moved, or the link might have a typo. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-border hover:border-primary text-primary font-semibold transition-all"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-border hover:border-primary text-primary font-semibold transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
