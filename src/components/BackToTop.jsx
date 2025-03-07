"use client";
import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BackToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollY / windowHeight) * 100;

    setScrollPercentage(scrolled);
    setIsScrolled(scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isScrolled && (
        <div className="fixed bottom-20 right-5 z-50">
          <button
            type="button"
            onClick={scrollToTop}
            className="mt-2 bg-none hover:bg-[#1555ae] transition duration-500 animate-scale-x rounded-full w-[40px] h-[40px] md:h-[50px] md:w-[50px]   lg:h-[60px] lg:w-[60px] flex justify-center items-center"
          >
            <CircularProgressbar
              value={scrollPercentage}
              text={`${Math.round(scrollPercentage)}%`}
              styles={{
                path: { stroke: `#f97316` },
                text: { fill: "#fff", fontSize: "25px" },
                trail: { stroke: "#2076ef" },
              }}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default BackToTop;
