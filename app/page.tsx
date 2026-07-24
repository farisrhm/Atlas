import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Method from "@/components/sections/Method";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Method />
      <Projects />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}