import Image from "next/image";
import {Hero} from "../components/Hero";
import About from "../components/about";
import { Techstack } from "@/components/Techstack";
import Projects from "@/components/Projects";
import {Contactme} from "@/components/Contactme";
import {NavbarDemo} from "@/components/NavbarDemo";
export default function Home() {
  return (
     <div className="h-full bg-[#040303]">
      {/* Wrapper to make NavbarDemo sticky */}
      <div className="sticky top-0 z-50">
        <NavbarDemo />
      </div>
      <Hero/>
      <About />
      {/* <Techstack /> */}
      <Projects />
      <Contactme />
    </div>
  );
}
