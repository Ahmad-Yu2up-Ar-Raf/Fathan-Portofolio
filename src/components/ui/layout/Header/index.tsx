"use client";
import React, {  useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";


type Tp = {
  Name : string,
  Link : string
}

const navItems = [
  {
    Name: "Home",
    Link: "#",
   
  },
  {
    Name: "About",
    Link: "#About",
    
  },
  {
    Name: "Contact",
    Link: "#Contact",

  },
];



export const FloatingNav = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

   
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className=" max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-[rgb(18,18,18)] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  px-6 py-3.5  "

        
      >
        <ul    
        className="
        
        
        flex
        items-center justify-center gap-x-4
        "
        
        
        >

        {navItems.map((navItem: Tp, idx: number) => (
          <li
          
          key={`link=${idx}`}
          >
          <Link
         
            href={navItem.Link}
            className={cn(
              "relative dark:text-neutral-300 font-medium items-center flex gap-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            
            <span className="block  text-xs md:text-[13px]">{navItem.Name}</span>
          </Link>
          </li>
        ))}
        </ul>
  
      </motion.nav>
    </AnimatePresence>
  );
};
