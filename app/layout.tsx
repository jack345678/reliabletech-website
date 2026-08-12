import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ReliableTech IT Solutions | Managed IT Services & Cybersecurity",
  description:
    "ReliableTech IT Solutions provides secure managed IT services, Microsoft 365, Azure, cybersecurity, networking, cloud services, and IT support for small businesses.",
  alternates: {
    canonical: "https://reliabletechitsolution.com/",
  },
  other: {
    "content-language": "en-US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
