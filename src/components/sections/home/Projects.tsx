import Container from "@/components/ui/shared/Container"
import { PinContainer } from "@/components/ui/fragments/core/3d/Pin"



interface type {
 img?: string,
 head?: string,
 desk?: string,

 href?: string,
 stack?: string[],

}


const List: type[]  = [
{
  img: "Pj1",
   head: "Feed & Kolase Design",
   desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum illum saepe assumenda tenetur minus necessitatibus cum ducimus architecto, repudiandae nihil dolorem ipsum vitae, quisquam animi porro consequuntur at voluptatem.", 

   href: "https://twitter.com/mannupaaji",
   stack: ["laravel", "photoshop"]
  },
{
  img: "Pj1",
   head: "Feed & Kolase Design",
   desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum illum saepe assumenda tenetur minus necessitatibus cum ducimus architecto, repudiandae nihil dolorem ipsum vitae, quisquam animi porro consequuntur at voluptatem.", 

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
       
         className="space-y-24  md:space-y-52"
        >
            <header className="text-center  ">
                <h1  className="uppercase font-bold text-3xl md:text-5xl tracking-[-0.05em]">recent projects</h1>
            </header>
            <ul className=" relative grid-cols-1   grid lg:grid-cols-2 gap-y-40 lg:gap-22 lg:gap-y-90">
            

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
       title={lis.head}
    href={lis.href}
    stack={lis.stack}
      />
    </li>

   ))}
          
       
        
      
     

            </ul>
        </Container>
    )
}