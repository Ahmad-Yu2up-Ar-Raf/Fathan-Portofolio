import Container from "@/components/ui/shared/Container"
import { VelocityScroll } from "@/components/ui/fragments/animation/Text/Velocity"
import Image from "next/image"
export default function Velo() {
    return(
    <Container
    
            id="Projects"
            sectionName="Projects Section"
            ariaLabel="Portfolio Pojects Section"
            role="Projects"   
           className="py-[20em]" 
            maxW
             >
              
 <VelocityScroll>
    <Image
                    
                    src={'assets/Velocity/claude.svg'}
                    width={100}
                    height={100}
                    alt="velocit-icons" 
                    className="top-0   bg- size-9.5 left-0 absolute "
                    /> 
                    <span className="text-4xl ml-15 uppercase      ">experience & projects</span> 
 </VelocityScroll>
   


     
   


    </Container>
    )
}