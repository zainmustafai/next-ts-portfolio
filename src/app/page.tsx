import { Input } from "@/components/ui/input";
import Image from "next/image";
import HeroSection from "./HomeComponents/HeroSection";
import Navbar from "./HomeComponents/Navbar";
import AboutMe from "./HomeComponents/AboutMe";
import ServicesSection from "./HomeComponents/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ServicesSection />
    </main>
  );
}
