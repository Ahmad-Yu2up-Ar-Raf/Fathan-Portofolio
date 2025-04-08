
import Link from "next/link"
import { FaBehance , FaInstagram  } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Container from "../../shared/Container"
import { BsFillCursorFill } from "react-icons/bs";


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


export default function Footer(){


const number : string = "6281283895043"
const massage : string = "Hi Fathan, I want to discuss a project with you!"
const link : string = `https://api.whatsapp.com/send?phone=${number}&text=${massage}&type=phone_number&app_absent=0`

    return(
     <Container 
     as="footer"
     container="relative h-fit  w-full content-start"
     className="items-center mt-14 md:pt-16 space-y-7"
     >
        

        <section className=" text-center border border-neutral-900 px-8 py-16 rounded-lg  h-full   ">
            <header className="font-bold text-3xl  md:text-4xl">
                <h1>Ready to take <span className="text-sky-500">next step</span> for your <span className="md:block">bussiness?</span></h1>
            </header>
            <p className="text-white my-9    md:my-12 text-sm ">I can help you achive your goals, Let’s turn your vision into success together!</p>
            <Link
             href={link}
             target="_blank"
            className="flex border hover:bg-neutral-900 border-neutral-800 cursor-pointer text-sm rounded-lg p-4 w-60  justify-center border-neutral-700 items-center mx-auto  gap-3 font-medium"
            >Let's Get In Touch 
            <BsFillCursorFill  className="size-3" role="icons"/>
          </Link>
        </section>
        <section className="text-center w-full  items-center md:flex md:justify-between  space-y-5 md:space-y-0">
            <p  className="text-white  text-sm  ">© 2025 / <span className="font-semibold" >Fathan Syahputra Wali</span> / take your next step with <span className="font-bold ">Me</span></p>
            <ul className="flex items-center text-neutral-300 justify-center [&_svg]:size-7 md:[&_svg]:size-8 [&_svg]:cursor-pointer items-center gap-x-3">
            {Socials.map((social , i: number) => ( 
   <li
   key={i}
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
        </section>
      
     </Container>
    )
}