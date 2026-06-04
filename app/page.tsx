import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ComparisonSection from "@/components/ComparisonSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ComparisonSection />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
