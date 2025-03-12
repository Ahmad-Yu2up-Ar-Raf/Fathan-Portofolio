

import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Service from "@/components/sections/home/Service";
import Velo from "@/components/sections/home/Velo";
import Projects from "@/components/sections/home/Projects";



export default function Home() {
  
  return (
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
  );
}
