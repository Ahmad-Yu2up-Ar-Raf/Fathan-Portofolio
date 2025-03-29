import Container from "@/components/ui/shared/Container"
import React from "react"
import Image from "next/image"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/fragments/core/Common/popover"

const Education : string[] = [
  'photoshop',
    'illustrator',
    'Laravel',
     'Mysql',
    'ThreeJs',
    'Typescript',
    'next',
    'blender',
    'php',
    'java'
]
   



export default function About() {
  return(
    <Container
      id="About"
      sectionName="About Section"
      ariaLabel="Portfolio About Section"
      role="article"
    container="relative min-h-[85vh]  w-full content-center"
      className="flex flex-col   gap-14 md:gap-0 md:items-start  md:justify-between  md:flex-row "
    >
          <div className="space-y-10     md:space-y-2   transition-all ease-out duration-300  w-full">
      <section id="about-me" className="w-full  relative" aria-labelledby="heading-about-me">
    
     <h3 id="heading-about-me">About Me</h3>

       <p className="line-clamp-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quae ea, provident magni vel quidem in velit, facere ab consequatur veritatis voluptatem exercitationem? Sed veritatis reiciendis expedita eveniet quasi excepturi!</p>
   
      </section>
      <section  id="education" className="w-full space-y-4  relative " aria-labelledby="heading-education">
     

     <h3 id="heading-education">Education</h3>
       
     <div className="space-y-7">
       <ul className="md:flex  list-inside md:list-none space-y-2 list-disc   md:gap-3 ">
  <li>   
  <span>SMP Pesat </span>
          
          </li>
  <li>
   <span>SMK Pesat Itxpro</span></li>
  <li className="hidden md:inline-flex"> 
    <p>Lorem ipsum dolor, sit Lorem,  <span className="block dark:text-neutral-400">amet consectetur ipsum.</span></p>
  </li>

       </ul>
       <ul className="flex gap-1">
        {Education.slice(0,4).map((edu: string , i: number) => ( 
   <li
   key={i}
   className="flex justify-center "
   >
    <Popover>
    <PopoverTrigger>
    <Image
     src={`/assets/Skills/${edu}.svg`} alt={`Icon ${edu}`}    
     width={50}
     height={50}
     role="icons"
     loading="lazy"
    decoding="sync"
    className="size-7   md:size-8    "
    />
 </PopoverTrigger>
 <PopoverContent>{edu}</PopoverContent>
    </Popover>
   </li>
        ))}
       </ul>
     </div>
      </section>
        </div>
      <section id="tech-skills"  aria-labelledby="heading-tech-skills" className="w-full  transition-all ease-out duration-300  peer relative h-full ">
        <div className="md:w-fit  space-y-8  md:m-auto">
            <h3 id="heading-tech-skills " className=" ">Techinical Skills</h3>
          <ul className="w-full  md:w-fit   md:m-auto grid grid-cols-5 md:gap-x-5 gap-y-8 md:gap-y-4">
        {Education.map((edu: string , i: number) => ( 
   <li
   className=" "
   key={i}>
       <Popover>
       <PopoverContent>{edu}</PopoverContent>
       <PopoverTrigger>
    <Image
     src={`/assets/Skills/${edu}.svg`} alt={`Icon ${edu}`}    
    width={50}
    height={50}
    role="icons"
    loading="lazy"
    decoding="sync"
    className="md:size-14  size-10   "
    />
    </PopoverTrigger>

    </Popover>
   </li>
        ))}
       </ul>

        </div>

    
        </section>
    
        
    </Container>
  )
}