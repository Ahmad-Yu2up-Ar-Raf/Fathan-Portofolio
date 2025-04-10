"use client";

import PinPerspective from "../fragments/PinPerspective";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { BsFillCursorFill } from "react-icons/bs";
import React, { useState , useEffect} from "react";




export default  function PinContainer  ({ 
  title,
  href,
  stack,
  head,
  desk,
  img,
  base62,


}: {
  title?: string;
  href?: string;
  stack?: string[];
  head?: string;
  desk?: string;
  img?: string;
  base62?: string;


})  {
   const [isSmall, setIsSmall] = useState<boolean>(() => {
      if (typeof window !== "undefined") {
        return window.innerWidth < 1024;
      }
      return false;
    });
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );
   

  useEffect(() => {

     




    const handleResize = (): void => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);


  const onMouseEnter = () => {
    !isSmall ?  setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)") : 0;
  };
  const onMouseLeave = () => {
    !isSmall ?  setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)") : 0;
  };


  

  return (
    <Link
      href={href ? href : "/"}
      target="_blank"
      className={cn(
        "relative group/pin group overflow-y-visible z-50 w-full cursor-pointer",
      
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 max-w-2xl lg:max-w-none top-1/2 w-full mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute w-full left-1/2 m-auto top-1/2 flex justify-start items-start shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-background lg:group-hover/pin:border-white/[0.2] transition duration-700"
        >
          <div className={cn("relative z-50")}>
            <div className="relative space-y-8 w-full h-fit">
              <Image
              width={1200}
              height={800}
              placeholder="blur"
                blurDataURL={base62}
                quality={90}
                loading="lazy"
                src={`/assets/Projects/${img}`}
                alt={`Project-${head}`}
                className="h-[24em] w-full rounded-lg transition-all ease-in-out duration-700 lg:group-hover:opacity-40 object-cover object-center"
              />
              <article className="w-full">
                <header className="font-bold w-full text-neutral-100 text-xl tracking-tightest">
                  <h1>{head}</h1>
                </header>
                <p className="line-clamp-2 w-full mt-1 tracking-tightest font-medium">
                  {desk}
                </p>
                <footer className=" mt-6 md:mt-7 w-full flex items-center w-full justify-between">
                  <div className="flex items-center gap-2">
                    {stack?.map((tech: string, i: number) => (
                      <Image
                        key={i}
                        width={50}
                        role="icon"
                        height={50}
                        src={`/assets/Skills/${tech}.svg`}
                        alt={`tech-stack-${i}`}
                        className="size-6"
                      />
                    ))}
                  </div>
                  <button className="flex gap-2 text-[0.9em] items-center font-semibold text-sky-500">
                    <span className="">View</span>
                    <BsFillCursorFill className="size-3" role="icon" />
              
                  </button>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
 <PinPerspective title={title} />  
    </Link>
  );
};


