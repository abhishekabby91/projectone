interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  columns?: 1 | 2;
}

export default function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle,
  items,
  columns = 1,
}: FAQSectionProps) {
  const colsClass = columns === 2 ? 'md:grid-cols-2' : '';

  return (
    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12 text-center space-y-3 md:space-y-4">
          {subtitle && (
            <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
              {subtitle}
            </span>
          )}
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
            {title}
          </h2>
        </div>

        <div className={`grid grid-cols-1 gap-3 sm:gap-4 ${colsClass}`}>
          {items.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group rounded-xl border-2 border-border overflow-hidden bg-white"
            >
              <summary className="cursor-pointer list-none px-4 py-4 sm:px-6 sm:py-5 text-left font-semibold text-base sm:text-lg text-primary hover:bg-input transition-colors flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  className="text-2xl leading-none text-accent shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </summary>
              <div className="px-4 py-4 sm:px-6 sm:py-5 bg-input border-t-2 border-border">
                <p className="text-foreground leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
