export default function WhyChooseUs() {
  const reasons = [
    {
      title: "15+ Years of Experience",
      description:
        "Providing enterprise IT support and cloud solutions across government and private sectors.",
    },
    {
      title: "Microsoft 365 Experts",
      description:
        "Exchange Online, Teams, SharePoint, OneDrive, Intune, and Microsoft Defender.",
    },
    {
      title: "Cybersecurity First",
      description:
        "Protecting businesses with modern security practices, MFA, endpoint protection, and compliance.",
    },
    {
      title: "Responsive IT Support",
      description:
        "Fast remote support, proactive monitoring, and quick issue resolution whenever you need us.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-slate-900">
          Why Choose ReliableTech?
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
          We help small businesses reduce downtime, improve security,
          and leverage enterprise-class technology at an affordable cost.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-4xl">✅</div>

              <h3 className="text-xl font-bold text-blue-700">
                {reason.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {reason.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}