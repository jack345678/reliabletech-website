import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-700 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Improve Your IT?
        </h2>

        <p className="mt-6 text-xl">
          Let ReliableTech IT Solutions help secure, manage, and support your business technology.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-700"
        >
          Request a Free Consultation
        </Link>
      </div>
    </section>
  );
}