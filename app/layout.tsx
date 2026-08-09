import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ReliableTech IT Solutions LLC",
  description:
    "Managed IT Services, Microsoft 365, Azure, Cybersecurity, Networking, and IT Consulting for small businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}