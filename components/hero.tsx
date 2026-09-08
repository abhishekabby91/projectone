import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-gradient text-white">

      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="max-w-4xl">

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2">
            USA • UK • Australia
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            Offshore Accounting &
            <span className="text-orange-400">
              {" "}Staffing Solutions
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-200">
            Helping CPA Firms and Accounting Practices
            scale through offshore accounting support.
          </p>

          <div className="flex gap-4 mt-10">

            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-4 rounded-xl"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/services"
              className="border border-white/20 px-6 py-4 rounded-xl"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}