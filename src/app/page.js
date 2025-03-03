"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Service from "@/pages/Service";
import Works from "@/pages/Works";
import Skills from "@/pages/Skills";
import Contect from "@/pages/Contect";
import { Audio } from "react-loader-spinner";
import FadeOut from "@/animation/FadeOut";
export default function Home() {
  const [lodaing, setLodaing] = useState(true);

  useEffect(() => {
    setLodaing(true);
    setTimeout(() => {
      setLodaing(false);
    }, 5000);
  }, []);
  return lodaing ? (
    <div className="loader w-full h-screen flex text-3xl bg-custom-gradient text-blue-500 justify-center items-center">
      <Audio
        height="180"
        width="180"
        radius="9"
        color="orange"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  ) : (
    <FadeOut>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Skills />
      <Works />
      <Contect />
    </FadeOut>
  );
}
