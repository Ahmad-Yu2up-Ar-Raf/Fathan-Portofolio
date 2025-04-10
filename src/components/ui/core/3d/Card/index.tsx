import Image from "next/image"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"



interface type {
    id : string,
    frontSrc :  string
    frontAlt :  string
    backText :  string
    color : string
}


const Card = forwardRef<HTMLLIElement, type>(({
    id, frontSrc, frontAlt,backText, color
} , ref ) => {
    return (
        <li
        
      
        className="lg:absolute relative mx-auto my-40   lg:my-0     lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2
          lg:-translate-y-1/2 h-[65vh]  lg:h-[60vh] md:h-[50em]  w-[85vw] md:w-[67vw] lg:max-w-none  lg:w-[19vw]   "
  ref={ref}
 id={id}
 
  style={{
    perspective: "1000px"
  }}
 >
            <div className={cn("absolute top-[50%]   left-[50%]   w-full h-full   animate-float      ",
                id ==  'card-2' ? 'delay-100' : id == 'card-3' ? 'delay-200' : id == 'card-4' ? 'delay-300' : 'delay-0'

                
            )

          
          
          
          } id="card-wrapper">
                <div className="relative w-full h-full " id="flip-card-inner"
                style={{
                    transformStyle: "preserve-3d"
                }}
                >
                    <div className="absolute  w-full h-full rounded-lg overflow-hidden "
                    style={{
                        backgroundColor: color ? color : "#1a1a1a",
                        backfaceVisibility: "hidden"
                    }}
                    id="flip-card-front">
                        <Image
                        quality={90}
                       
                         src={frontSrc}
                          alt={frontAlt} 
                          width={700}                        
                          height={700}  
                               className="w-full  h-full object-cover"                   
                        />
                    </div>
                    <div className="absolute  bg-[#1a1a1a]  p-[1em]  w-full h-full rounded-lg overflow-hidden "
                    
                    style={{
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(185deg)"
                    }}
                    id="flip-card-back">
                        <h2 
                        style={{
                            animationDelay: id ==  'card-2' ? '0.3s' : id == 'card-3' ? '0.5s' : id == 'card-4' ? '0.7s' : '0s',
                        }}
                        className={cn("uppercase   animate-pulse md:animate-glow  select-none        font-SixCaps tracking-tighter  absolute transform  top-1/2 left-1/2  text-[10rem] md:text-[29vw]  -translate-y-1/2 -translate-x-1/2  text-center lg:text-[10vw] " ,
'  leading-[9rem] md:leading-[19vh]  ',


                        ) }>{backText}</h2>
                    </div>
                </div>
            </div>
        </li>
    )
});
Card.displayName = "Card"
export default  Card