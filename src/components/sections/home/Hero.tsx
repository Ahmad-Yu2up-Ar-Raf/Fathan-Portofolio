'use client';
import Container from "@/components/ui/shared/Container"
import Lanyard from "@/components/ui/fragments/core/3d/Lanyard"
import { useMediaQuery } from "@/lib/use-media-query";

export default function Hero() {
   const isMobile:boolean = useMediaQuery("(max-width: 768px)")
    return(
     <Container 
     id="Hero"
     sectionName="Hero Section"
      ariaLabel="Portfolio Hero Section"
      role="banner"
     maxW
     >
    {  isMobile ? (
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    ) : (
      <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} positionBand={[3.0, 4, 0]} />
    )}  
        <div className="absolute overflow-hidden text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full -z-10">
     <h1 className="uppercase  skew-x-[-6deg] font-forum tracking-tighter  text-[16vw] leading-none">portofolio</h1>
    </div>
     </Container>
    )
}