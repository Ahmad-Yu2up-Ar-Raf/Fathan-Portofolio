"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
export const PinContainer = ({
  
  title,
   href,
   stack,
   head,
   desk,
   img,
  className,
  containerClassName,
}: {

  title?: string;
  href? : string,
  stack? : string[],
  head?: string
  desk?: string,
  img? : string,
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link 
    href={href || "#"}
    target="_blank"
      className={cn(
        "relative group/pin group  overflow-y-visible     z-50 w-full cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}

    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 max-w-2xl lg:max-w-none    top-1/2 w-full  mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute w-full   left-1/2 m-auto top-1/2  flex justify-start items-start    shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black  group-hover/pin:border-white/[0.2] transition duration-700 "
        >
          <div className={cn(" relative z-50 ", className)}>
          <div className=" relative space-y-10 w-full h-fit ">
        <Image 
  width={1200}
  height={800}
  quality={90}  
  loading="lazy"
  src={`/assets/Projects/${img}.jpg`}
  alt="Project"
  className="h-[30vh]  lg:h-[45vh] w-full rounded-lg transition-all ease-in-out duration-700 group-hover:opacity-40 object-cover object-center"
/>
        <article className="w-full">
            <header className="font-bold w-full text-neutral-100 text-xl tracking-tightest ">
  <h1>
    {head}
  </h1>
            </header>
            <p className="line-clamp-2 w-full tracking-tightest   font-medium">{desk}</p>
            <footer className="mt-7 w-full flex items-center w-full justify-between ">
                <div className="flex items-center gap-2">
   {stack?.map((tech:string, i:number) => (

 
                <Image
                key={i}
                width={50}
                height={50}
                src={`/assets/Skills/${tech}.svg`}
                alt={`tech-stack-${i}`}
                className="size-5"
                />
              ))}
             
                </div>
                <button
         
            className="flex gap-2 text-[0.9em] items-center font-semibold text-emerald-400"
            >
<span>View</span>
<Image 
width={50}
height={50}
alt="cursor"
src={'/assets/cursor.svg'}
className="size-2"

/>
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

export const PinPerspective = ({
  title,

}: {
  title?: string;

}) => {
  return (
    <motion.div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <div
          
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};
