"use client";
import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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

  const scrollToDown = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!isScrolled ? (
        <div className="fixed bottom-10 right-3 z-50">
          <button
            type="button"
            onClick={scrollToDown}
            className="mt-2 bg-none  transition duration-500  rounded-full w-[60px] h-auto flex flex-col animate-scale-x justify-center items-center"
          >
            <div className="flex flex-col-reverse justify-center items-center ">
              <IoIosArrowDown className="text-md text-[#f97316]" />

              <div className="w-[40px] h-[40px] rounded-full hover:bg-black/20 transition duration-500 ">
                <CircularProgressbar
                  className=" "
                  value={scrollPercentage}
                  text={`${Math.round(scrollPercentage)}%`}
                  styles={{
                    path: { stroke: `#f97316` },
                    text: { fill: "#fff", fontSize: "25px" },
                    trail: { stroke: "#2076ef" },
                  }}
                />
              </div>
            </div>
          </button>
        </div>
      ) : (
        <>
          <div className="fixed bottom-10 right-3 z-50">
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-2 bg-none    rounded-full w-[60px] h-auto flex flex-col animate-scale-x justify-center items-center"
            >
              <div className="flex flex-col justify-center items-center ">
                <IoIosArrowUp className="text-md text-[#f97316]" />

                <div className="w-[40px] h-[40px] rounded-full hover:bg-black/20 transition duration-500 ">
                  <CircularProgressbar
                    className=" "
                    value={scrollPercentage}
                    text={`${Math.round(scrollPercentage)}%`}
                    styles={{
                      path: { stroke: `#f97316` },
                      text: { fill: "#fff", fontSize: "25px" },
                      trail: { stroke: "#2076ef" },
                    }}
                  />
                </div>
              </div>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default BackToTop;
