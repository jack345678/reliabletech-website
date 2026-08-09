export default function Testimonials() {
  const testimonials = [
    {
      name: "Small Business Owner",
      quote:
        "ReliableTech helped modernize our IT environment and improved our security.",
    },
    {
      name: "Professional Services Firm",
      quote:
        "Fast, knowledgeable support whenever we need it. Highly recommended.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          What Our Clients Say
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <p className="italic">"{item.quote}"</p>
              <p className="mt-4 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}