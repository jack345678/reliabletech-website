import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ReliableTech IT Solutions LLC",
  description:
    "Learn about ReliableTech IT Solutions LLC and our mission to provide dependable IT support, cybersecurity, cloud, Microsoft 365, and endpoint management services.",
  alternates: {
    canonical: "https://reliabletechitsolution.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            About ReliableTech IT Solutions LLC
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            We help small businesses improve security, productivity, and
            reliability through modern IT solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              ReliableTech IT Solutions LLC provides enterprise-quality IT
              services for small and medium-sized businesses. We specialize in
              Microsoft 365, Azure, Intune, cybersecurity, networking, cloud
              solutions, and managed IT support.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our mission is to keep your business secure, productive, and
              connected with dependable technology solutions and exceptional
              customer service.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-8 shadow">
            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose Us?
            </h2>

            <ul className="mt-8 space-y-4 text-slate-700">
              <li>15+ Years of IT Experience</li>
              <li>Microsoft 365 Specialists</li>
              <li>Azure Cloud Solutions</li>
              <li>Microsoft Intune &amp; Endpoint Management</li>
              <li>Cybersecurity Best Practices</li>
              <li>Fast Remote &amp; On-site Support</li>
              <li>Small Business IT Experts</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
