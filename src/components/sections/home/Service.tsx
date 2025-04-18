'use client'

import Container from "@/components/ui/shared/Container";
import Card from "@/components/ui/core/3d/Card";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger";
import {  useRef } from "react";



const Text: string[] = [
  "comic ilustrate",
   "Photo shoot",
   "3d design",
   "Graphic Design"
]




gsap.registerPlugin(ScrollTrigger)


interface type {

  color : string
  src : string
}




  export default function Service({
    color, src
  } : type) {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
    
    useGSAP(() => {
      
      if (!sectionRef.current) return;
      const mm = gsap.matchMedia();

      mm.add( {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1024px)"

      }, (context) => {

        const { isDesktop, isMobile } = context.conditions ?? {};





    const cards = cardRefs.current.filter(Boolean);

      const totalScrollHeight = window.innerHeight * 3;
    const positions = [14, 38, 62, 86];
    const rotations = [-15, -7.5, 7.5, 15 ]
    if (isDesktop) {
  
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });
      
    cards.forEach((Card, index) => {
      gsap.to(Card, {
         left: `${positions[index]}%`,
         rotation: `${rotations[index]}`,
         ease: "none",
         scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          id: `spread-${index}`,
         }
      })
    })


   
    
    }



      


// flip




cards.forEach((card, i: number) => {
  const frontEl = card?.querySelector("#flip-card-front")
  const backEl = card?.querySelector("#flip-card-back")


    const staggerOffset: number = i * 0.05
    const startOffset: number = 1 / 3 + staggerOffset
    const endOffset: number = 2 / 3 + staggerOffset

    ScrollTrigger.create({
      trigger: isDesktop ? sectionRef.current : card,
      start: isDesktop ? "top top" : "top 80%",
      end: isDesktop ? () => `+=${totalScrollHeight}` : "top 20%",
      scrub: isDesktop ? 1 : true,
      id: `rotate-flip-${i}`,
      onUpdate: (self) => {
        const progress = self.progress


        
        let animationProgress : number
       let frontRotation  : number
       let backRotation  : number
       let cardRotation: number 
        if(progress >= startOffset && progress <= endOffset && isDesktop ){
         animationProgress = (progress - startOffset) / (1 / 3)
          frontRotation = -180 * animationProgress;
         backRotation = 180 - 180 * animationProgress;
         cardRotation = rotations[i] *  ( 1 - animationProgress);

       
       
        } else if(isMobile){
           frontRotation = -180 * progress;
           backRotation = 180 - 180 * progress;
        }

        gsap.to(frontEl!, { rotateY: frontRotation!, ease: "power1.out"})
        gsap.to(backEl!, { rotateY: backRotation!, ease: "power1.out"})
        if(isDesktop){
          gsap.to(card, {
            // xPercent: -50,
            // yPercent: -50,
                 rotate: cardRotation!,
                 ease: "power1.out"
                })
        } 


      }
    })
})


return () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}
});
    }, { scope: sectionRef });
  





    return (
      <Container
      ref={sectionRef}
      id="Service"
      sectionName="Service Section"
      ariaLabel="Portfolio Service Section"
      role="banner"
        container = "relative min-h-screen  mt-50 lg:mt-0   w-full content-center"
className=" relative  max-w-[82vw]   h-full  " 
 maxW
    >
<ul className="">
        {Text.map((text: string, i: number) => (
          <Card
            ref={(el: HTMLLIElement | null) => {
              cardRefs.current[i] = el;
            }}
            color={color}
            key={i}
            id={`card-${i + 1}`} 
            frontSrc={src}
            frontAlt={"Card Image"} 
            backText={text}
          />
        ))}

</ul>

      </Container>
    );
  }