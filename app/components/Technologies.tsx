export default function Technologies() {
  const technologies = [
    "Microsoft 365",
    "Microsoft Intune",
    "Microsoft Entra ID",
    "Microsoft Azure",
    "Windows Server",
    "Exchange Online",
    "VMware",
    "Hyper-V",
    "Cisco",
    "Microsoft Defender",
    "PowerShell",
    "AWS",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-slate-900">
          Technologies We Support
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          We provide enterprise-grade IT solutions using industry-leading
          Microsoft and cloud technologies.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-semibold text-blue-700">{tech}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}