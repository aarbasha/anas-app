"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadePosation, FadeRight } from "@/animation/AnimationItems";
import { Tech } from "@/data/Tech";

const Works = () => {
  return (
    <section id="works" className="w-full h-full pt-10">
      <div className=" container mx-auto px-5">
        <h1 className="text-3xl text-[#ef9920] my-5">
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
              Meine Arbeiten
            </motion.div>
            <motion.hr
              variants={FadeRight(0.5)}
              initial="hidden"
              whileInView="visible"
              className="w-[5%] mt-2 mx-1"
            />
          </div>
        </h1>
      </div>
    </section>
  );
};

export default Works;
