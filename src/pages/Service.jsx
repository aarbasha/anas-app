"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadePosation, FadeRight } from "@/animation/AnimationItems";
import { Services } from "@/data/Service";
import Link from "next/link";

import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Service = () => {
  return (
    <div className="w-full h-full ">
      <div className=" container mx-auto px-5 mt-20">
        <div className=" flex justify-center items-center text-center text-3xl text-[#ef9920] my-5">
          <motion.hr
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            className="w-[5%] mt-2 mx-1"
          />

          <motion.div
            variants={FadePosation(0.8)}
            initial="hidden"
            whileInView="visible"
          >
            My Services
          </motion.div>
          <motion.hr
            variants={FadeRight(0.5)}
            initial="hidden"
            whileInView="visible"
            className="w-[5%] mt-2 mx-1"
          />
        </div>

        {/* flex pt-10 flex-wrap md:flex-row flex-col gap-3 md:gap-4 lg:gap-5 justify-center items-center */}
        <div className="flex flex-wrap justify-center items-center  gap-5">
          {Services.map((item) => {
            const IconComponent = item.icon; // استدعاء الأيقونة من المصفوفة
            return (
              <motion.div
                variants={FadePosation(item.daley)}
                initial="hidden"
                whileInView="visible"
                key={item.id}
                className=""
              >
                <Tilt options={defaultOptions}>
                  <div className=" flex justify-center items-center   w-[370px] h-[400px] rounded-3xl  text-white bg-white/20  p-4 ">
                    <div className=" flex flex-col justify-evenly items-center h-full p-1 text-center ">
                      <div className=" border-2 border-[#ef9920] rounded-full p-2 bg-black/50">
                        <IconComponent className="text-3xl text-[#2076ef] " />
                      </div>

                      <div>
                        <h2>{item.title}</h2>
                      </div>

                      <hr className="w-[80%] border border-[#ef9920]" />

                      <div>
                        <h4 className="text-sm">{item.info}</h4>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
