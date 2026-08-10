import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services | ReliableTech IT Solutions LLC",
  description:
    "ReliableTech IT Solutions provides managed IT, Microsoft 365, Intune, Azure, cybersecurity, networking, backup, disaster recovery, and IT consulting services.",
  alternates: {
    canonical: "https://reliabletechitsolution.com/services",
  },
};

const services = [
  {
    title: "Managed IT Services",
    description:
      "24/7 monitoring, maintenance, help desk, and proactive support.",
  },
  {
    title: "Microsoft 365",
    description:
      "Exchange Online, Teams, SharePoint, OneDrive, licensing, and migration.",
  },
  {
    title: "Microsoft Intune",
    description:
      "Endpoint management, Autopilot, compliance policies, and application deployment.",
  },
  {
    title: "Microsoft Azure",
    description:
      "Cloud migration, virtual machines, networking, identity, backup, and disaster recovery.",
  },
  {
    title: "Cybersecurity",
    description:
      "Microsoft Defender, MFA, Conditional Access, vulnerability management, and endpoint protection.",
  },
  {
    title: "Network Solutions",
    description:
      "Firewalls, VPNs, Wi-Fi, switching, routing, and network troubleshooting.",
  },
  {
    title: "Backup & Disaster Recovery",
    description:
      "Protect your business with reliable backup and recovery solutions.",
  },
  {
    title: "IT Consulting",
    description:
      "Technology planning, infrastructure upgrades, cloud strategy, and digital transformation.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold">Our IT Services</h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Enterprise IT solutions designed to keep your business secure,
            productive, and connected.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <button
                type="button"
                className="mt-8 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
