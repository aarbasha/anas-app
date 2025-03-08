"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/anas.jpg";
import { motion } from "framer-motion";
import { FadeLeft, FadePosation, FadeRight } from "@/animation/AnimationItems";
import { Sociel } from "../data/Sociel";
import Link from "next/link";

import "../app/css/app.css";
const Hero = () => {
  return (
    <section id="home" className="pt-[40px]">
      <div className=" container mx-auto">
        <div className="flex flex-col-reverse justify-center gap-10 items-center h-screen lg:flex-row md:gap-5 lg:justify-around  ">
          <div className="h1 text-center flex flex-col gap-2 ">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-4xl  text-[#2076ef] font-extrabold font-arial"
            >
              Anas <span className="text-secondary">Arbasha</span>{" "}
              <hr className="text-[#2076ef] my-2" />
            </motion.h1>

            <motion.h3
              variants={FadeRight(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-xl text-white"
            >
              Senior Full Stack Web Developer
            </motion.h3>

            <motion.h4
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-sm text-white"
            >
              Damascus Universtaty of Science and Chimistry Appled
            </motion.h4>

            <div className=" flex justify-center flex-wrap items-center gap-1 md:gap-3 lg:gap-5 mt-3 w-auto p-1   mx-auto">
              {Sociel.map((item) => {
                const IconComponent = item.icon; // استدعاء الأيقونة من المصفوفة
                return (
                  <div key={item.id} className="sosial ">
                    <motion.div
                      variants={FadeRight(item.daley)}
                      initial="hidden"
                      whileInView="visible"
                      className="flex flex-col justify-center items-center "
                    >
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-md border-2 p-1  rounded-full transition duration-500
                 hover:scale-150  hover:text-white`}
                        style={{
                          color: item.color,
                          borderColor: item.color,
                          boxShadow: `10 -40px -106px ${item.color}`, // ظل بنفس لون الأيقونة
                        }}
                      >
                        <IconComponent className="text-lg" />
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            variants={FadeRight(0.5)}
            initial="hidden"
            whileInView="visible"
          >
            <Image
              src={"/images/anas.jpg"}
              alt="logo"
              className="w-[350px] h-[350px] md:w-[400px] md:h-[400px]   lg:w-[450px] lg:h-[450px] rounded-full transition duration-500 hover:scale-110 hover:-rotate-12"
              width={400}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
