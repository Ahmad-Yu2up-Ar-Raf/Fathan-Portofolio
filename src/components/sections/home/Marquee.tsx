import Container from "@/components/ui/shared/Container"
import React from "react"

import { SiClaude } from "react-icons/si";


export default function Velo() {
    return(
    <Container
    
            id="Marquee"
            sectionName="Marquee Section"
            ariaLabel="Portfolio Marquee Section"
            role="Marquee"   

            container="relative min-h-screen md:min-h-[100vh] mt-56 mb-20  w-full content-center"
            maxW
             >
              
              <div className='w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden '>
              {Array.from({ length: 2 }, (_, i: number) => (
        <ul  key={i.toString()}  className='flex items-center justify-center md:justify-start  [&_li]:mx-3.5 [&_img]:max-w-none animate-infinite-scroll'>
      {Array.from({ length: 8 }, (_, j: number) => {


   const contentType : number = j % 4;

return(
          <li 
          key={j.toString()}
          className=" w-full  "
          >
            {contentType === 0 ? (
                    <h6 className="text-3xl lg:text-[2vw]   uppercase  tracking-[-0.05em] font-bold flex items-center gap-x-4">creative <span> works</span></h6>  
                ) :  contentType == 1  || contentType === 3 ? (
                  <SiClaude 
                  className="size-9 lg:size-[3vw]   "
                  />
                )  :  (
                     <h6 className="text-3xl  lg:text-[2vw]   uppercase tracking-[-0.05em] font-bold flex items-center gap-x-4">experience<span> projects</span></h6>  
                ) 
                
                
                }
          </li>

)
})}
        </ul>
             ))}
      </div>
   


     
   


    </Container>
    )
}