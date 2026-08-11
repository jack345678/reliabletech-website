export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send request.");
      }

      setStatus(
        "Thank you! Your consultation request has been sent successfully."
      );

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus(
        "Sorry, we could not send your request. Please try again or call us."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            We'd love to discuss your IT needs. Contact us today for a free
            consultation.
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

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                className="w-full rounded-lg border p-3"
                placeholder="Your Name"
              />

              <input
                className="w-full rounded-lg border p-3"
                placeholder="Company Name"
              />

              <input
                name="email"
                type="email"
                className="w-full rounded-lg border p-3"
                placeholder="Email Address"
              />

              <input
                className="w-full rounded-lg border p-3"
                placeholder="Phone Number"
              />

              <textarea
                name="message"
                rows={5}
                className="w-full rounded-lg border p-3"
                placeholder="Tell us about your IT needs..."
              />

              <button
                className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
              >
                {sending ? "Sending..." : "Send Request"}
              </button>

              {status && (
                <p className="rounded-lg bg-slate-100 p-4 text-center text-sm text-slate-700">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
