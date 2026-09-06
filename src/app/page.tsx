import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import WhyAvero from "@/components/landing/WhyAvero";
import { Comparison } from "@/components/landing/Comparison";
import { CalendlySection } from "@/components/landing/CalendlySection";
import { WorkTransition } from "@/components/landing/WorkTransition";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <WhyAvero />
        <Comparison />
        <CalendlySection />
      </div>
      <WorkTransition />
      <Footer />
    </>
  );
}
