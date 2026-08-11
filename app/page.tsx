import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import Technologies from "./components/Technologies";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Technologies />
      <Industries />
      <Testimonials />
      <CTA />
    </main>
  );
}
