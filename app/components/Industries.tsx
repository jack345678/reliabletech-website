export default function Industries() {
  const industries = [
    "Healthcare",
    "Legal",
    "Accounting",
    "Construction",
    "Retail",
    "Non-Profit",
    "Education",
    "Professional Services",
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-slate-900">
          Industries We Serve
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          We deliver secure and reliable IT solutions tailored to the needs
          of organizations across many industries.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-xl bg-white p-8 text-center shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {industry}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}