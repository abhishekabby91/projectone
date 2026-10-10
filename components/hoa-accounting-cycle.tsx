import { ArrowDownRight, ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, CreditCard, Landmark, ReceiptText, Users, ChartNoAxesCombined } from 'lucide-react';

const steps = [
  { number: '01', title: 'Assessments', detail: 'Maintain homeowner dues, charges and individual ledgers.', Icon: ClipboardList, tone: 'bg-blue-50 text-primary' },
  { number: '02', title: 'Payments', detail: 'Post receipts and match them to homeowner accounts.', Icon: CreditCard, tone: 'bg-orange-50 text-accent' },
  { number: '03', title: 'AP & expenses', detail: 'Code vendor bills and track the approval status.', Icon: ReceiptText, tone: 'bg-emerald-50 text-emerald-700' },
  { number: '04', title: 'Bank reconciliation', detail: 'Match bank activity and resolve differences.', Icon: Landmark, tone: 'bg-blue-50 text-primary' },
  { number: '05', title: 'Financial statements', detail: 'Prepare balances, income and expense reports, and fund views.', Icon: ChartNoAxesCombined, tone: 'bg-violet-50 text-violet-700' },
  { number: '06', title: 'Board reporting', detail: 'Present a consistent monthly pack for board review and decisions.', Icon: Users, tone: 'bg-teal-50 text-teal-700' },
];

export default function HoaAccountingCycle() {
  return (
    <section aria-labelledby="hoa-cycle-heading" className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">The monthly workflow</p>
          <h2 id="hoa-cycle-heading" className="mt-2 font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">
            The HOA Accounting Cycle
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
            From homeowner assessments to board-ready reports, each stage creates the records needed for the next.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ number, title, detail, Icon, tone }, index) => (
            <li key={number} className="relative h-full rounded-2xl border border-border bg-input/60 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tone}`}>
                  <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold tracking-wider text-muted">{number}</span>
                    <h3 className="text-base font-bold leading-snug text-primary">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div aria-hidden="true" className="absolute -bottom-[13px] left-1/2 z-10 hidden -translate-x-1/2 text-secondary lg:block">
                  {index === 2 ? <ArrowDownRight className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-5 flex flex-col items-start gap-3 rounded-xl border border-secondary/30 bg-secondary/10 p-4 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
          </div>
          <p className="text-sm leading-6 text-primary">
            <span className="font-semibold">Board oversight stays in place.</span> Accounting records, reconciliations and reporting support the process; assessment decisions, reserve priorities and payment approvals remain with the association and its authorized reviewers.
          </p>
          <ArrowLeft aria-hidden="true" className="hidden h-5 w-5 shrink-0 text-secondary lg:block" />
        </div>
      </div>
    </section>
  );
}
