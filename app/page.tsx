export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="text-5xl font-bold leading-tight">
            ReliableTech IT Solutions LLC
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-blue-100">
            Enterprise IT Solutions for Small Businesses.
            We provide Managed IT Services, Microsoft 365,
            Cybersecurity, Cloud Solutions, Networking,
            and 24/7 Technical Support.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#services"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 shadow hover:bg-gray-100"
            >
              Our Services
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-blue-900"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">
              Managed IT Services
            </h3>

            <p className="mt-4 text-gray-600">
              Complete IT management including servers,
              desktops, monitoring, maintenance,
              and proactive support.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">
              Microsoft 365
            </h3>

            <p className="mt-4 text-gray-600">
              Microsoft 365 administration,
              Exchange Online, SharePoint,
              Teams, OneDrive and Intune.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">
              Cybersecurity
            </h3>

            <p className="mt-4 text-gray-600">
              Endpoint protection,
              MFA, Conditional Access,
              vulnerability management,
              backups and disaster recovery.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-4xl font-bold">
            Why Choose ReliableTech?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            ReliableTech IT Solutions LLC brings over
            15 years of enterprise and federal government
            IT experience supporting Microsoft technologies,
            cloud infrastructure, endpoint management,
            cybersecurity, and business IT operations.

            We help organizations stay secure,
            productive, and ready for growth.
          </p>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-blue-900 py-20 text-center text-white"
      >

        <h2 className="text-4xl font-bold">
          Ready to Modernize Your IT?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
          Contact ReliableTech today for a FREE consultation
          and discover how we can improve your technology,
          security, and business productivity.
        </p>

        <div className="mt-10">
          <a
            href="mailto:info@reliabletechitsolution.com"
            className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-900"
          >
            Contact Us
          </a>
        </div>

      </section>

    </main>
  );
}
