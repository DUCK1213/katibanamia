import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import ActionAreas from "@/components/sections/ActionAreas";
import KamauAgenda from "@/components/sections/KamauAgenda";
import Contributions from "@/components/sections/Contributions";
import Cashflow from "@/components/sections/Cashflow";
import CTA from "@/components/sections/CTA";
import Programs from "@/components/sections/Programs";
import Revenue from "@/components/sections/Revenue";
import Team from "@/components/sections/Team";
import Partners from "@/components/sections/Partners";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Stats />
        <About />
        <ActionAreas />
        <KamauAgenda />
        <Contributions />
        <Cashflow />
        <CTA />
        <Programs />
        <Revenue />
        <Team />
        <Partners />
        <Footer />
      </div>
    </main>
  );
}
