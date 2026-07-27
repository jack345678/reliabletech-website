import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          ReliableTech
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-700">
            About
          </Link>

          <Link href="/services" className="hover:text-blue-700">
            Services
          </Link>

          <Link href="/contact" className="hover:text-blue-700">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-lg bg-blue-700 px-5 py-2 text-white hover:bg-blue-800"
        >
          Free Consultation
        </Link>
      </div>
    </header>
  );
}