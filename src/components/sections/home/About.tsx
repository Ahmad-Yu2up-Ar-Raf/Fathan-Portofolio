import Container from "@/components/ui/shared/Container"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaBehance , FaInstagram  } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Education : string[] = [
  'photoshop',
    'illustrator',
    'adobe-lightroom',
    'effects',
    'adobe-indesign-svgrepo-com',
    'photography',
     'canva',
    'pen',
    'blender',
    'ibispaint'

]
   


interface type {
  icon?: React.ReactNode,
  href?: string,

 
 }

const Socials : type[] = [
  
   { 
    icon : <FaInstagram />,
    href: 'https://www.instagram.com/fthann.syahh_/'
    },
   { 
    icon : <CiLinkedin />,
    href: 'https://www.linkedin.com/in/fathan-syahputra-x1-undefined-12b084323/'
    },
    { 
      icon : <FaBehance />,
      href: 'https://www.behance.net/fathansyahput'
      },
]

export default function About() {
  return(
    <Container
      id="About"
      sectionName="About Section"
      ariaLabel="Portfolio About Section"
      role="article"
    container="relative min-h-[60vh]  w-full content-center"
      className="flex flex-col   gap-8 lg:gap-0 lg:items-start  lg:justify-between  lg:flex-row "
    >
          <div className="space-y-7     lg:space-y-2   transition-all ease-out duration-300  w-full">
      <section id="about-me" className="w-full  relative" aria-labelledby="heading-about-me">
    
     <h3 id="heading-about-me">About Me</h3>

      <p className="line-clamp-3">
        Hello! I&apos;m Muhammad Fathan Syahputra Wali, a graphic designer and artist from Indonesia.
        I specialize in digital illustration, brand design, and creative photography to create
        unique visual solutions.
      </p>
   
      </section>
      <section  id="education" className="w-full space-y-4 lg:space-y-0  relative " aria-labelledby="heading-education">
     

     <h3 id="heading-education">Education</h3>
       
     <div className="space-y-4">
       <ul className="lg:flex  list-inside lg:list-none space-y-2 list-disc   lg:gap-3 ">
  <li>   
  <span>SD</span>
          
          </li>
  <li>   
  <span>SMP</span>
          
          </li>
  <li>
   <span>SMK Pesat ITXPro <span className=" lg:block dark:text-neutral-400 hidden">Design And Visual Major</span> </span></li>
 

       </ul>
       <ul className="flex gap-1.5">
        {Socials.map((social , i: number) => ( 
   <li
   key={i}
   about="social"
   className="flex justify-center  [&_svg]:size-7"
   >
<Link
href={social.href ? social.href : '#'}
target="_blank"
>
  {social.icon}
</Link>

   </li>
        ))}
       </ul>
     </div>
      </section>
        </div>
      <section id="tech-skills"  aria-labelledby="heading-tech-skills" className="w-full  transition-all ease-out duration-300  peer relative h-full ">
        <div className="lg:w-fit  space-y-8  lg:m-auto">
            <h3 id="heading-tech-skills " className=" ">Techinical Skills</h3>
          <ul className="w-full  lg:w-fit   lg:m-auto grid grid-cols-5 lg:gap-x-6 gap-y-8 lg:gap-y-4">
        {Education.map((edu: string , i: number) => ( 
   <li
   className="flex lg:justify-center "
   key={i}>
   
    <Image
     src={`/assets/Skills/${edu}.svg`} alt={`Icon ${edu}`}    
    width={50}
    height={50}
    role="icon"


    loading="lazy"
    decoding="sync"
    className="lg:size-16  size-10    "
    />

   </li>
        ))}
       </ul>

        </div>

    
        </section>
    
        
    </Container>
  )
}