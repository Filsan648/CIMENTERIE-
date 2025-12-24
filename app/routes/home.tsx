import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Menue from "~/Compements/Menu";
import Hero from "~/Compements/Hero";
import About from "~/Compements/About";
import Product from "~/Compements/product";
import Chosse from "~/Compements/choose";
import Cursor from "~/asset/asstes/cursor";
import Projects from "~/Compements/projet";
import Client from "~/Compements/client";
import StatsSection from "~/Compements/states";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return( 
  <div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay Swapped Background */}
  <div
    className="absolute inset-0 z-0"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 0),
      linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 0),
      linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 0)
    `,
    backgroundSize: "33.33% 100%",
    
  }}
  />
    <div  className=" relative z-10 flex flex-col gap-10"><Cursor isHovering={false} text="" title="" /> <Menue /> <Hero /> <About /> <Product /> <Chosse /> <Projects /> <StatsSection /> <Client /> </div >
</div>
  
  
  
  
  
  ) ;
}
