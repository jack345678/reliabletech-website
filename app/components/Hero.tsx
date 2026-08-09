import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700 pt-24 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="max-w-3xl">

          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold">
            Trusted Managed IT Services
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight">
            ReliableTech
            <span className="block text-blue-300">
              IT Solutions LLC
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-blue-100">
            Helping small businesses succeed with secure, reliable,
            and modern IT solutions including Microsoft 365,
            Azure, Cybersecurity, Networking, Cloud Services,
            and Managed IT Support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Free Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-blue-200">
            <span>✓ Microsoft 365</span>
            <span>✓ Azure Cloud</span>
            <span>✓ Cybersecurity</span>
            <span>✓ Managed IT</span>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="text-blue-200">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-blue-200">IT Support</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">99.9%</h3>
              <p className="text-blue-200">System Availability</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="text-blue-200">Customer Focus</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}