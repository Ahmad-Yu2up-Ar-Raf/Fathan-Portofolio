import Service from "../Service";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
export default async function ServiceSSR() {
    const src = "/assets/Card/FrontCard.svg"

    const buffer = await fs.readFile(`./public${src}`);
  
    const { color } = await getPlaiceholder(buffer);
  return <Service color={color.hex} src={src.replace('./public', '')} />;
}