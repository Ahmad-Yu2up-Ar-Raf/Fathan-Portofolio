import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Service from "@/components/sections/home/Service";
import Velo from "@/components/sections/home/Marquee";
import Projects from "@/components/sections/home/Projects";
import { FloatingNav } from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";
import JsonLd from "@/components/ui/shared/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <FloatingNav />
      <main
        id="main-content"
        className="w-full overflow-hidden h-full relative"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <Hero />
        <About />
        <Service />
        <Velo />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
