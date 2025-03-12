import Image from "next/image"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"



interface type {
    id : string,
    frontSrc :  string
    frontAlt :  string
    backText :  string
 
}


const Card = forwardRef<HTMLLIElement, type>(({
    id, frontSrc, frontAlt,backText
} , ref ) => {
    return (
        <li
        
      
        className="lg:absolute relative m-auto my-40   lg:my-0  h-[38em]  lg:h-[30em]  lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-1/2   w-[24em]  lg:w-[19em]  perspective-[1000px] "
  ref={ref}
 id={id}
 
 
 >
            <div className={cn("absolute top-[50%]   left-[50%]   w-full h-full   animate-float      ",
                id ==  'card-2' ? 'delay-[0.2s]' : id == 'card-3' ? 'delay-[0.4s]' : id == 'card-4' ? 'delay-[0.6s]' : 'delay-[0s]'

                
            )

          
          
          
          } id="card-wrapper">
                <div className="relative w-full h-full transform-3d " id="flip-card-inner">
                    <div className="absolute w-full h-full backface-hidden rounded-[0.4em] overflow-hidden " id="flip-card-front">
                        <Image
                        priority
                         src={frontSrc}
                          alt={frontAlt} 
                          width={500}                        
                          height={500}  
                               className="w-full h-full object-cover"                   
                        />
                    </div>
                    <div className="absolute  bg-[#1a1a1a] p-[1em] transform rotate-y-180 w-full h-full backface-hidden rounded-[0.4em] overflow-hidden " id="flip-card-back">
                        <h2 className={cn("uppercase  animate-pulse  lg:animate-glow   pointer-events-none       font-barlow tracking-tight   font-semibold absolute transform  top-1/2 left-1/2  -translate-1/2  text-center  text-[12em] " ,
  'leading-42 ',
                                            id ==  'card-2' ? 'delay-[0.2s]' : id == 'card-3' ? 'delay-[0.4s]' : id == 'card-4' ? 'delay-[0.6s]' : 'delay-[0s]'
                        ) }>{backText}</h2>
                    </div>
                </div>
            </div>
        </li>
    )
});
Card.displayName = "Card"
export default Card