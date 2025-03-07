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
    }, 2000);
  }, []);
  return lodaing ? (
    <div className="loader w-full h-screen flex text-3xl bg-custom-gradient  justify-center items-center">
      <Audio
        height="200"
        width="200"
        radius="9"
        color="#f97316"
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
