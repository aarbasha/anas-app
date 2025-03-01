"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeLeft, FadePosation, FadeRight } from "@/animation/AnimationItems";
const About = () => {
  return (
    <div className="w-full h-full">
      <div className=" container mx-auto px-5">
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
            About me
          </motion.div>
          <motion.hr
            variants={FadeRight(0.5)}
            initial="hidden"
            whileInView="visible"
            className="w-[5%] mt-2 mx-1"
          />
        </div>
        <div className=" flex lg:flex-row flex-col justify-center items-center w-full">
          <motion.div
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            className=" mx-auto"
          >
            <Image
              src="/images/web.png"
              className="min-w-[300px] min-h-[300px] md:min-w-[400px] md:min-h-[400px] rounded-full border-none border-blue-500"
              width={400}
              height={400}
            />
          </motion.div>

          <div className=" px-10">
            <p className=" text-white text-[15px] lg:text-[18px] leading-6">
              My name is Anas, <br /> I am 28 years old. I am from Damascus,
              Syria <br /> I have loved programming since childhood, and the
              first code I wrote was in 2013, and I've continued ever since.{" "}
              <br /> I studied at the University of Damascus, majoring in
              Applied Chemistry. <br /> After that, I moved to the Russian
              Federation. <br /> Then, I moved to Germany, where I am still
              continuing my education. I will be doing vocational training as a
              system administrator due to my high passion for this field.
              <br />I have extensive experience in web development and mobile
              applications. I also have experience using the Linux and macOS
              operating systems, as well as intermediate knowledge in
              information security and encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
