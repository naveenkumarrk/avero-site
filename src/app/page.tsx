import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import WhyAvero from "@/components/landing/WhyAvero";
import { Comparison } from "@/components/landing/Comparison";
import { Testimonials } from "@/components/landing/Testimonials";
import { CalendlySection } from "@/components/landing/CalendlySection";
import { FAQ } from "@/components/landing/FAQ";
import { SelectedWorks } from "@/components/landing/SelectedWorks";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { FAQ_ITEMS } from "@/lib/constants";
import { faqPageSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      {/* FAQ answers render into the DOM (collapsed via max-height), so the
          FAQPage markup matches visible content as Google requires. */}
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <div className="max-w-[1280px] mx-auto">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <WhyAvero />
        <Comparison />
        <Testimonials />
        <CalendlySection />
        <FAQ />
      </div>
      <SelectedWorks />
      <Footer />
    </>
  );
}
