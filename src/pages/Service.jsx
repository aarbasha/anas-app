"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadePosation, FadeRight } from "@/animation/AnimationItems";

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
            variants={FadePosation(0.5)}
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
      </div>
    </div>
  );
};

export default Service;
