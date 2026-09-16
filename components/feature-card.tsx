import Link from 'next/link';
import { ArrowUpRight, Check, MessageSquare } from 'lucide-react';
import InquiryTrigger from '@/components/inquiry-trigger';

interface FeatureCardProps {
  icon?: string | React.ReactNode;
  title: string;
  description: string;
  href?: string;
  features?: string[];
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
  /**
   * Pre-selects the service when a card with no `href` opens the enquiry
   * dialog. A card that describes work we do should never be a dead end.
   */
  inquiryService?: string;
  /** Set false for a card that is genuinely decorative rather than an offer. */
  inquiry?: boolean;
  /** CSS colour for this card's corner tint. See `hueVar` in icon-badge.tsx. */
  hue?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  features,
  variant = 'default',
  className = '',
  inquiryService,
  inquiry = true,
  hue,
}: FeatureCardProps) {
  const hueStyle = hue ? ({ '--card-hue': hue } as React.CSSProperties) : undefined;
  // A card with somewhere to go navigates. A card without one asks for the
  // enquiry instead, in a dialog, so the reader keeps their place on the page.
  const asksForInquiry = !href && inquiry;
  const baseClasses = `group h-full p-3.5 sm:p-5 md:p-8 rounded-2xl transition-all duration-300 ${className}`;

  const variantClasses = {
    default: 'accent-corner glow-hover bg-white border border-border/70 shadow-[0_1px_3px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-primary/15',
    featured: 'bg-primary text-white border border-primary shadow-xl hover:-translate-y-1 hover:shadow-2xl',
    minimal: 'accent-corner glow-hover bg-transparent border border-border hover:-translate-y-1 hover:border-accent/50 hover:bg-white',
  }[variant];

  const content = (
    <div className="space-y-2 sm:space-y-3 md:space-y-5 h-full flex flex-col">
      {icon && <div className="shrink-0">{typeof icon === 'string' ? <span>{icon}</span> : icon}</div>}

      <div>
        <h3 className={`text-sm sm:text-lg md:text-xl font-bold leading-tight sm:leading-normal mb-1 sm:mb-1.5 md:mb-2 min-h-[2.25rem] sm:min-h-0 ${variant === 'featured' ? 'text-white' : 'text-primary'}`}>
          {title}
        </h3>
        <p className={`text-xs sm:text-sm leading-4 sm:leading-6 line-clamp-2 sm:line-clamp-3 md:line-clamp-none min-h-[2rem] sm:min-h-0 ${variant === 'featured' ? 'text-white/85' : 'text-muted'}`}>
          {description}
        </p>
      </div>

      {features && features.length > 0 && (
        <ul className={`space-y-2.5 text-sm ${variant === 'featured' ? 'text-white/85' : 'text-foreground'}`}>
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check className={`w-4 h-4 mt-1 shrink-0 ${variant === 'featured' ? 'text-white' : 'text-accent'}`} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {href && (
        <div className="pt-3 mt-auto">
          <span className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${variant === 'featured' ? 'text-white' : 'text-primary'} group-hover:gap-3`}>
            View details
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        </div>
      )}

      {asksForInquiry && (
        <div className="pt-3 mt-auto">
          <span className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${variant === 'featured' ? 'text-white' : 'text-primary'} group-hover:gap-3`}>
            Talk to us about this
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full" aria-label={`Explore ${title}`}>
        <div className={`${baseClasses} ${variantClasses}`} style={hueStyle}>
          {content}
        </div>
      </Link>
    );
  }

  if (asksForInquiry) {
    return (
      <InquiryTrigger
        className="block h-full"
        service={inquiryService}
        source={title}
        title={`Talk to Us About ${title}`}
        label={`Ask us about ${title}`}
      >
        <div className={`${baseClasses} ${variantClasses}`} style={hueStyle}>{content}</div>
      </InquiryTrigger>
    );
  }

  return <div className={`${baseClasses} ${variantClasses}`} style={hueStyle}>{content}</div>;
}