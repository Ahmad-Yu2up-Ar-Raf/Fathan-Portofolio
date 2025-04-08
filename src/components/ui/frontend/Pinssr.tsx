import PinContainer from "../core/3d/Pin";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export  default async function Pinssr ({ 

    href,
    stack,
    head,
    desk,
    img,
    base62,

  }: {
  
    href?: string;
    stack?: string[];
    head?: string;
    desk?: string;
    img?: string;
    base62?: string;

  })  {
    const src =  base62;

    const buffer = await fs.readFile(`./public${src}`);
  
    const { base64 } = await getPlaiceholder(buffer);


 return  <PinContainer
 base62={base64}
 img={img}
 head={head}
 desk={desk}
  title={head}
href={href}
stack={stack}

 /> 


 }