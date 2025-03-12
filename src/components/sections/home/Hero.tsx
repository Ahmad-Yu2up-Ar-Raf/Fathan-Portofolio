
import Container from "@/components/ui/shared/Container"
import Lanyard from "@/components/ui/fragments/core/3d/Lanyard"


export default function Hero() {
    return(
     <Container 
     id="Hero"
     sectionName="Hero Section"
      ariaLabel="Portfolio Hero Section"
      role="banner"
     maxW
     >
      <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
    <div className="absolute overflow-hidden text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full -z-10">
     <h1 className="uppercase  skew-x-[-6deg] font-forum tracking-tighter  text-[16vw] leading-none">portofolio</h1>
    </div>
     </Container>
    )
}