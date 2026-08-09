export default function FAQPage() {
  const faqs = [
    {
      question: "What IT services do you provide?",
      answer:
        "We provide Managed IT Services, Microsoft 365, Azure, Intune, Cybersecurity, Networking, Backup Solutions, and IT Consulting.",
    },
    {
      question: "Do you offer remote support?",
      answer:
        "Yes. We provide secure remote support as well as onsite support when needed.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Absolutely. We specialize in helping small and medium-sized businesses with enterprise-level IT solutions.",
    },
    {
      question: "Can you migrate our business to Microsoft 365?",
      answer:
        "Yes. We handle complete Microsoft 365 migrations including Exchange Online, Teams, SharePoint, and OneDrive.",
    },
    {
      question: "How do I request a consultation?",
      answer:
        "Simply visit our Contact page and complete the consultation request form.",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Answers to some of the most common questions about our IT services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl bg-white p-8 shadow"
            >
              <h2 className="text-xl font-bold text-blue-700">
                {faq.question}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}