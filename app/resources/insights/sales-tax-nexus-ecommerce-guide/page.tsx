import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/resources/insights/sales-tax-nexus-ecommerce-guide';

export const metadata: Metadata = genMeta({
  title: 'Sales Tax Nexus for E-Commerce Sellers',
  description:
    'A quick explainer on economic nexus for e-commerce sellers — why growing into new states can quietly create new sales tax obligations.',
  path: PATH,
});

export default function SalesTaxNexusInsight() {
  return (
    <ArticleLayout
      title="Sales Tax Nexus: What E-Commerce Sellers Need to Track"
      category="Insight"
      description="Why growing your e-commerce business into new states can quietly create new sales tax obligations you didn't have last year."
      publishedDate="2026-07-25"
      section="insights"
      slug="sales-tax-nexus-ecommerce-guide"
      inquiryTitle="Talk to Us About Your Nexus Tracking"
      inquiryLead="Tell us the channels and states you sell into and how thresholds are monitored today, and we will scope the tracking and reconciliation work behind them. Registration and filing positions stay with your tax adviser."
    >
      <p>
        Since the 2018 South Dakota v. Wayfair Supreme Court decision, states can
        require out-of-state sellers to collect sales tax based on economic
        activity alone — no physical presence required. This is called
        "economic nexus," and it's one of the most common blind spots for
        growing e-commerce businesses.
      </p>

      <h2>How It Catches Businesses Off Guard</h2>
      <p>
        Each state sets its own threshold — commonly a certain dollar amount of
        sales or number of transactions within the state per year. Cross that
        threshold, and you may owe sales tax registration and collection
        obligations in that state, even if you've never set foot there and have
        no employees or warehouses located in it.
      </p>
      <p>
        Because thresholds are state-specific and change over time, a business
        selling well across multiple states can accumulate nexus obligations in
        several states without anyone flagging it — until an audit or a
        compliance review surfaces it.
      </p>

      <h2>Why This Matters for Your Bookkeeping</h2>
      <p>
        Nexus tracking isn't a one-time setup — it needs to be monitored
        continuously as sales grow and shift across states and channels
        (your own storefront, Amazon, other marketplaces). Bookkeeping that
        tracks revenue by state, not just in aggregate, is what makes this
        visible in the first place.
      </p>

      <h2>Physical Nexus Did Not Go Away</h2>
      <p>
        Economic nexus was added to the rules; it did not replace the older one.
        Physical presence still creates an obligation, and for e-commerce sellers the
        most common form of it is not an office or an employee — it is inventory.
        Stock held in a third-party fulfilment warehouse can constitute physical
        presence in that state, and a fulfilment network may move your inventory
        between states without asking you.
      </p>
      <p>
        That is the version of this problem that surprises people most, because the
        trigger is a logistics decision somebody else made. If you use a fulfilment
        network, knowing which states have held your stock is part of knowing your
        footprint.
      </p>

      <h2>The Marketplace Facilitator Confusion</h2>
      <p>
        Most states now require marketplaces to collect and remit sales tax on
        transactions made through them. That genuinely removes a large part of the
        collection burden for marketplace sellers — and it is the source of the most
        common misreading in this whole area.
      </p>
      <p>
        Two things are easy to conflate. Whether the marketplace collects the tax is
        one question. Whether those sales still count toward the threshold that
        creates your own registration obligation is a separate question, and the
        answer varies by state. A seller who reads "the marketplace handles it" as
        "I have no obligation anywhere" can be registered-and-not-know-it in several
        states — particularly if they also sell through their own storefront, where
        nobody is collecting on their behalf.
      </p>
      <p>
        The bookkeeping consequence is specific: marketplace and direct sales have to
        be distinguishable by state, not merged into one revenue figure. Merged, the
        question cannot be answered at all.
      </p>

      <h2>Obligations Start Before Anyone Notices Them</h2>
      <p>
        A threshold is crossed on a particular day, and the obligation attaches from a
        point defined by that state's rules — not from the day someone reviews the
        position. That gap is where liability accumulates, and it is why a periodic
        review is worth more than an annual one: the cost of finding out late is the
        uncollected tax plus whatever the state adds, on sales where you never
        charged the customer.
      </p>
      <p>
        There is also a tail. In several states an obligation persists for a period
        after activity drops below the threshold, so falling out of a state is not
        automatically the end of it.
      </p>

      <h2>What Your Books Have to Produce</h2>
      <p>
        None of the above is answerable from a ledger that records total revenue.
        What makes the question answerable at all:
      </p>
      <ul>
        <li>Sales recorded by destination state, as they post rather than at year end.</li>
        <li>Marketplace sales separable from direct sales, per state.</li>
        <li>Transaction counts as well as dollar amounts, because some thresholds use both.</li>
        <li>Exemption and resale documentation attached to the transaction it belongs to.</li>
        <li>Where inventory has been held, if you use a fulfilment network.</li>
      </ul>
      <p>
        That is bookkeeping, and it is the part we do. It turns "are we registered
        where we should be?" from an investigation into a report.
      </p>

      <h2>What to Do About It</h2>
      <ul>
        <li>Track sales by state, not just total revenue</li>
        <li>Review your nexus footprint periodically as you grow, not just once</li>
        <li>Work with a sales tax filing service or tax advisor for actual registration and filing once nexus is triggered</li>
      </ul>
      <p>
        This is general information, not tax advice for your specific situation
        — sales tax rules vary by state and change over time, so confirm your
        specific obligations with a qualified tax advisor.
      </p>

      <h2>How We Help</h2>
      <p>
        Our{' '}
        <Link href="/industries/ecommerce" className="text-primary font-medium hover:underline">
          e-commerce accounting support
        </Link>{' '}
        includes tracking sales by state and channel, so this visibility exists
        in your books before it becomes a surprise.
      </p>
    </ArticleLayout>
  );
}
