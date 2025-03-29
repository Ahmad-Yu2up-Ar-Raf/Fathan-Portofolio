import Image from "next/image"
import Link from "next/link"
import { Instagram,Linkedin } from 'lucide-react' 
import Container from "../../shared/Container"



export default function Footer(){
    return(
     <Container 
     as="footer"
     container="relative min-h-[90vh]  w-full content-end"
     className="items-center  space-y-7"
     >
        

        <section className=" text-center border border-neutral-900 px-8 py-14 rounded-xl  h-full   ">
            <header className="font-bold text-3xl  md:text-4xl">
                <h1>Ready to take <span className="text-emerald-400">next step</span> for your <span className="md:block">bussiness?</span></h1>
            </header>
            <p className="text-white my-9 line-clamp-1   md:my-12 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link
             href={'/'}
             target="_blank"
            className="flex border cursor-pointer text-sm rounded-lg p-4 w-60  justify-center border-neutral-700 items-center mx-auto  gap-2 font-medium"
            >Let's Get In Touch <Image 
            
            src={'/assets/cursor-svgrepo-com.svg'}
            width={50}
            height={50}
            alt="button icon"
            role="icon"
            className="size-4"
            /></Link>
        </section>
        <section className="text-center w-full  items-center md:flex md:justify-between  space-y-5">
            <p  className="text-white   text-[3.3vw] md:text-sm  ">© 2025 / <span className="font-semibold" >Fathan Syaputra</span> / Build your portfolio with <span className="font-semibold text-emerald-400">Me</span></p>
            <div className="flex text-neutral-300 justify-center md:[&_svg]:size-6.5 [&_svg]:cursor-pointer items-center gap-x-4">
      <Instagram />
      <Linkedin />
            </div>
        </section>
      
     </Container>
    )
}