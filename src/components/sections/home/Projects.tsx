import Container from "@/components/ui/shared/Container"
import { PinContainer } from "@/components/ui/fragments/core/3d/Pin"
import Image from "next/image"


interface type {
 img?: string,
 head?: string,
 desk?: string,
 title?: string,
 href?: string,
 stack?: string[],

}


const List: type[]  = [
{
  img: "Pj1.jpg",
   head: "Feed & Kolase Design",
   desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum illum saepe assumenda tenetur minus necessitatibus cum ducimus architecto, repudiandae nihil dolorem ipsum vitae, quisquam animi porro consequuntur at voluptatem.", 
   title: "/ui.aceternity.com",
   href: "https://twitter.com/mannupaaji",
   stack: ["laravel", "photoshop"]
  },
{
  img: "Pj1.jpg",
   head: "Feed & Kolase Design",
   desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum illum saepe assumenda tenetur minus necessitatibus cum ducimus architecto, repudiandae nihil dolorem ipsum vitae, quisquam animi porro consequuntur at voluptatem.", 
   title: "/ui.aceternity.com",
   href: "https://twitter.com/mannupaaji",
   stack: ["laravel", "photoshop"]
  },

]



  



export default function Projects(){
    return(
        <Container
        id="Projects"
        sectionName="Project Section"
         ariaLabel="Portfolio Project Section "
         role="banner"
         className="space-y-46  md:space-y-52"
        >
            <header className="text-center  ">
                <h1  className="uppercase font-bold text-3xl md:text-5xl tracking-[-0.05em]">recent projects </h1>
            </header>
            <ul className=" relative grid-cols-1   grid lg:grid-cols-2 gap-y-60 lg:gap-x-16 lg:gap-y-90">
            

   {List.map((lis, i:number) => (
    <li
    key={i}
   role={`card-${i}`}
   
    id={`list-project-${i}`}
    >

      <PinContainer
      
      img={lis.img}
      head={lis.head}
      desk={lis.desk}
       title={lis.title}
    href={lis.href}
    stack={lis.stack}
      />
    </li>

   ))}
          
       
        
      
     

            </ul>
        </Container>
    )
}