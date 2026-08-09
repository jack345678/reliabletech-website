export default function QuotePage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold">
            Request a Free Quote
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Tell us about your business and IT needs. We'll contact you with a customized solution.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-2xl bg-white p-8 shadow">
          <form className="space-y-5">

            <input
              className="w-full rounded-lg border p-3"
              placeholder="Company Name"
            />

            <input
              className="w-full rounded-lg border p-3"
              placeholder="Contact Name"
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

            <input
              className="w-full rounded-lg border p-3"
              placeholder="Number of Employees"
            />

            <select className="w-full rounded-lg border p-3">
              <option>Managed IT Services</option>
              <option>Microsoft 365</option>
              <option>Microsoft Intune</option>
              <option>Microsoft Azure</option>
              <option>Cybersecurity</option>
              <option>Networking</option>
              <option>Backup & Disaster Recovery</option>
              <option>IT Consulting</option>
            </select>

            <textarea
              rows={6}
              className="w-full rounded-lg border p-3"
              placeholder="Tell us about your project..."
            />

            <button
              className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Request My Quote
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}