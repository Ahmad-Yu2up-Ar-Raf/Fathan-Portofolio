"use client";
import Container from "@/components/ui/shared/Container"
import { useInView } from "motion/react";
import { useRef} from "react";
import Lanyard from "@/components/ui/core/3d/Lanyard"
import { TextAnimate } from "@/components/ui/core/animate/Text"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView : boolean =  useInView(ref, {initial: true, amount: 0.1,  once: false});




    return(
     <Container 
     ref={ref}
     id="Hero"
     sectionName="Hero Section"
      ariaLabel="Portfolio Hero Section"
      role="banner"
     maxW
     >
  {isInView &&  <Lanyard    gravity={[0, -40, 0]} />}


    
 
        <div   className="absolute overflow-hidden text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full -z-10">
        <TextAnimate animation="blurInUp" by="character" duration={1} className="uppercase  skew-x-[-6deg] font-forum tracking-tighter  text-[16vw] leading-none">
      Portofolio
    </TextAnimate>
    </div>
     </Container>
    )
}