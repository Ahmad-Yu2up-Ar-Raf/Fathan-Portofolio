import Container from "@/components/ui/shared/Container"
import Pinssr from "@/components/ui/frontend/Pinssr"



interface type {
 img?: string,
 head?: string,
 desk?: string,
 href?: string,
 stack?: string[],

}


const List: type[]  = [
{
  img: "Pj1.jpg",
   head: "Feed & Kolase Design",
   desk: "Crafted engaging social media feed designs and creative collages using Photoshop. Focused on visual storytelling and brand consistency.", 
   href: "https://www.behance.net/gallery/219270207/Feeds-Instagram-Kolase-Design",
   stack: [ "photoshop"]
  },
{
  img: "pj2.png",
   head: "Exprlore Project Design Raster",
   desk: "A collection of raster-based design works showcasing digital art and photo manipulation techniques using Photoshop's advanced features.", 
   href: "https://www.behance.net/gallery/220174089/Explore-Project-(Design)",
   stack: [ "photoshop"]
  },
{
  img: "pj6.png",
   head: "Competency Certification",
   desk: "Created professional certification designs using Illustrator. Developed clean, modern layouts with vector graphics and typography.", 
   href: "https://www.behance.net/gallery/218615897/Competency-Certification",
   stack: ["illustrator"]
  },
{
  img: "pj4.png",
   head: "Typography Assignment",
   desk: "Explored creative typography design using Illustrator. Focused on letterform manipulation and innovative text layouts.", 
   href: "https://www.behance.net/gallery/212997333/Typography",
   stack: ["illustrator"]
  },
{
  img: "pj3.jpg",
   head: "Food Product Photography",
   desk: "Professional food photography edited with Adobe Lightroom. Captured appetizing shots with attention to composition and lighting.", 
   href: "https://www.behance.net/gallery/219269853/Food-Photography",
   stack: ["adobe-lightroom", "photography"]
  },
{
  img: "pj5.jpg",
   head: "Typeshot Photography",
   desk: "Combined typography with photography using Photoshop. Created artistic compositions merging text elements with photographic imagery.", 
   href: "https://www.behance.net/gallery/218068645/Type-Shot",
   stack: ["photoshop", "photography"]
  },

]

export default  function Projects(){

    return(
        <Container
        id="Projects"
        sectionName="Project Section"
         ariaLabel="Portfolio Project Section "
         role="banner"
       
         className="space-y-45 pb-25 md:space-y-64"
        >
            <header className="text-center  ">
                <h1  className="uppercase font-bold text-3xl md:text-4xl tracking-[-0.05em]">recent projects</h1>
            </header>
            <ul className=" relative grid-cols-1  grid lg:grid-cols-2 md:gap-y-90 gap-y-70 
            lg:gap-18 lg:gap-y-96">
            

   {List.map((lis, i:number)  => (



    <li
    key={i}
   aria-label={`card-${i}`}
   role="listitem"
    id={`list-project-${i}`}
    >

      <Pinssr
      base62={`/assets/Projects/${lis.img}`}
      img={lis.img}
      head={lis.head}
      desk={lis.desk}

    href={lis.href}
    stack={lis.stack}
    
      />
    </li>

))}
          
       
        
      
     

            </ul>
        </Container>
    )
}