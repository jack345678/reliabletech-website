export default function ServicesGrid() {
  const services = [
    {
      title: "Managed IT Services",
      description:
        "Proactive monitoring, maintenance, help desk, and responsive support.",
    },
    {
      title: "Microsoft 365",
      description:
        "Exchange Online, Teams, SharePoint, OneDrive, and licensing.",
    },
    {
      title: "Microsoft Intune",
      description:
        "Device management, Autopilot, compliance policies, and application deployment.",
    },
    {
      title: "Microsoft Azure",
      description:
        "Cloud migration, virtual machines, networking, identity, and backup.",
    },
    {
      title: "Cybersecurity",
      description:
        "Microsoft Defender, MFA, Conditional Access, and endpoint protection.",
    },
    {
      title: "Network Solutions",
      description:
        "Firewalls, VPNs, Wi-Fi, switching, routing, and troubleshooting.",
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Protect critical business data with reliable backup solutions.",
    },
    {
      title: "IT Consulting",
      description:
        "Technology planning and digital transformation for growing businesses.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Our Services
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border bg-white p-6 shadow transition hover:shadow-lg"
          >
            <h3 className="text-xl font-bold text-blue-700">
              {service.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}