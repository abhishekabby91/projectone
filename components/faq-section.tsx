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
  const midpoint = Math.ceil(items.length / 2);
  const itemColumns = columns === 2
    ? [items.slice(0, midpoint), items.slice(midpoint)]
    : [items];

  return (
    <section className="w-full py-8 md:py-10 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-8 text-center space-y-2">
          {subtitle && (
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-accent">
              {subtitle}
            </span>
          )}
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
            {title}
          </h2>
        </div>

        <div className={columns === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 items-start' : 'grid grid-cols-1 gap-3'}>
          {itemColumns.map((columnItems, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-2.5">
              {columnItems.map((item, itemIndex) => {
                const itemIndexInList = columnIndex === 0 ? itemIndex : midpoint + itemIndex;
                return (
                  <details
                    key={item.question}
                    open={itemIndexInList === 0}
                    className="group rounded-lg border border-border overflow-hidden bg-white"
                  >
                    <summary className="cursor-pointer list-none px-3 py-3 sm:px-4 sm:py-3 text-left text-sm sm:text-base font-semibold leading-snug text-primary hover:bg-input transition-colors flex items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <span
                        className="text-lg leading-none text-accent shrink-0 transition-transform duration-200 group-open:rotate-180"
                        aria-hidden="true"
                      >
                        ↓
                      </span>
                    </summary>
                    <div className="px-3 py-3 sm:px-4 bg-input border-t border-border">
                      <p className="text-sm leading-relaxed text-foreground">{item.answer}</p>
                    </div>
                  </details>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
