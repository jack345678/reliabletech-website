export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            We'd love to discuss your IT needs. Contact us today for a free consultation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Get In Touch
            </h2>

            <div className="mt-8 space-y-6 text-lg">
              <p><strong>📞 Phone:</strong> 301-908-9266</p>
              <p><strong>📧 Email:</strong> info@reliabletechitsolution.com</p>
              <p><strong>📍 Service Area:</strong> Frederick, MD & Surrounding Areas</p>
              <p><strong>🕒 Hours:</strong> Monday – Friday, 8:00 AM – 6:00 PM</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold text-slate-900">
              Request a Free Consultation
            </h2>

            <form className="mt-8 space-y-4">
              <input
                className="w-full rounded-lg border p-3"
                placeholder="Your Name"
              />

              <input
                className="w-full rounded-lg border p-3"
                placeholder="Company Name"
              />

              <input
                type="email"
                className="w-full rounded-lg border p-3"
                placeholder="Email Address"
              />

              <input
                className="w-full rounded-lg border p-3"
                placeholder="Phone Number"
              />

              <textarea
                rows={5}
                className="w-full rounded-lg border p-3"
                placeholder="Tell us about your IT needs..."
              />

              <button
                className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
              >
                Send Request
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}