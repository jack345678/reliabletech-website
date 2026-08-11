import type { Metadata } from "next";
import Link from "next/link";

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
      "Proactive monitoring, maintenance, help desk, and proactive support designed to keep your business technology reliable and productive.",
  },
  {
    title: "Microsoft 365",
    description:
      "Exchange Online, Teams, SharePoint, OneDrive, licensing, administration, security, and Microsoft 365 migration services.",
  },
  {
    title: "Microsoft Intune",
    description:
      "Endpoint management, Windows Autopilot, compliance policies, application deployment, device configuration, and security management.",
  },
  {
    title: "Microsoft Azure",
    description:
      "Cloud migration, virtual machines, networking, identity, backup, disaster recovery, and Azure infrastructure support.",
  },
  {
    title: "Cybersecurity",
    description:
      "Microsoft Defender, MFA, Conditional Access, vulnerability management, endpoint protection, and security best practices.",
  },
  {
    title: "Network Solutions",
    description:
      "Firewalls, VPNs, Wi-Fi, switching, routing, network troubleshooting, and reliable business network infrastructure.",
  },
  {
    title: "Backup & Disaster Recovery",
    description:
      "Reliable backup and recovery solutions designed to protect your business data and help minimize downtime.",
  },
  {
    title: "IT Consulting",
    description:
      "Technology planning, infrastructure upgrades, cloud strategy, cybersecurity planning, and digital transformation consulting.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold md:text-6xl">
            Our IT Services
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-blue-100">
            Enterprise IT solutions designed to keep your business secure,
            productive, and connected.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {service.title}
              </h2>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {service.description}
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-block w-fit rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need Reliable IT Support?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Let&apos;s discuss your technology needs and find the right IT
            solution for your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
