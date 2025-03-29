

import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Service from "@/components/sections/home/Service";
import Velo from "@/components/sections/home/Marquee";
import Projects from "@/components/sections/home/Projects";
import { FloatingNav } from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";


export default function Home() {
  
  return (
    <>
    <FloatingNav      />
<main
id="Container"
className="w-full h-full"
>
  <Hero />
  <About/>
  <Service  
  
  />
  <Velo/>
  <Projects/>
</main>
<Footer/>
    </>
  );
}
