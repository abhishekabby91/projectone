import { CheckCircle2, ClipboardList, CreditCard, Landmark, ReceiptText, Users, ChartNoAxesCombined, ShieldCheck, TrendingUp, Clock3, HeartHandshake } from 'lucide-react';

const steps = [
  { number: '01', title: 'Assessments', detail: 'Maintain homeowner dues, charges and individual ledgers.', Icon: ClipboardList, tone: 'bg-blue-50 text-primary' },
  { number: '02', title: 'Payments', detail: 'Post receipts and match them to homeowner accounts.', Icon: CreditCard, tone: 'bg-orange-50 text-accent' },
  { number: '03', title: 'AP & expenses', detail: 'Code vendor bills and track the approval status.', Icon: ReceiptText, tone: 'bg-emerald-50 text-emerald-700' },
  { number: '04', title: 'Bank reconciliation', detail: 'Match bank activity and resolve differences.', Icon: Landmark, tone: 'bg-blue-50 text-primary' },
  { number: '05', title: 'Financial statements', detail: 'Prepare balances, income and expense reports, and fund views.', Icon: ChartNoAxesCombined, tone: 'bg-violet-50 text-violet-700' },
  { number: '06', title: 'Board reporting', detail: 'Present a consistent monthly pack for board review and decisions.', Icon: Users, tone: 'bg-teal-50 text-teal-700' },
];

const outcomes = [
  { label: 'Accurate records', Icon: ShieldCheck },
  { label: 'Clearer decisions', Icon: TrendingUp },
  { label: 'Less manual work', Icon: Clock3 },
  { label: 'Stronger oversight', Icon: HeartHandshake },
];

export default function HoaAccountingCycle() {
  return (
    <section aria-labelledby="hoa-cycle-heading" className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">A clear monthly workflow</p>
          <h2 id="hoa-cycle-heading" className="mt-2 font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">
            The HOA Accounting Cycle
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
            From homeowner assessments to board-ready reports, each stage creates the records needed for the next.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {steps.map(({ number, title, detail, Icon, tone }) => (
            <li key={number} className="group relative h-full rounded-2xl border border-border bg-input/50 p-5 transition-colors duration-200 hover:border-secondary/60 hover:bg-white sm:p-6">
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tone}`}>
                  <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-xs font-bold tracking-[0.12em] text-muted">STEP {number}</div>
                  <h3 className="text-base font-bold leading-snug text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-5 rounded-2xl border border-secondary/30 bg-secondary/10 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
            </div>
            <p className="pt-1 text-sm leading-6 text-primary">
              <span className="font-semibold">A repeatable cycle, with board oversight at every stage.</span>{' '}
              Accounting records, reconciliations and reports support the process; assessment decisions, reserve priorities and payment approvals remain with the association and its authorized reviewers.
            </p>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-3 border-t border-secondary/20 pt-4 sm:grid-cols-4">
            {outcomes.map(({ label, Icon }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-primary">
                <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-secondary" strokeWidth={1.8} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
