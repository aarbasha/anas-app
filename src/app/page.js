import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Service from "@/pages/Service";
export default function Home() {
  return (
    <div className="">
      <Navbar />

      <Hero />

      <About />

      <Service />
    </div>
  );
}
