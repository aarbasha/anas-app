import Navbar from "@/components/Navbar";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Service from "@/pages/Service";
import Works from "@/pages/Works";
import Skills from "@/pages/Skills";
import Contect from "@/pages/Contect";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Skills />
      <Works />
      <Contect />
    </div>
  );
}
