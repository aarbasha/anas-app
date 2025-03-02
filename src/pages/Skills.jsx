"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadePosation, FadeRight } from "@/animation/AnimationItems";
import { Tech } from "@/data/Tech";
import { Tilt } from "react-tilt";
import Vertical from "./Vertical";


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

const Skills = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-5 pt-10">
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
              Meine Fähigkeiten
            </motion.div>
            <motion.hr
              variants={FadeRight(0.5)}
              initial="hidden"
              whileInView="visible"
              className="w-[5%] mt-2 mx-1"
            />
          </div>
        </h1>

        <div className="flex flex-wrap justify-center items-center  gap-5">
          {Tech.map((item) => {
            const IconComponent = item.icon; // استدعاء الأيقونة من المصفوفة
            return (
              <motion.div
                key={item.id}
                variants={FadePosation(item.daley)}
                initial="hidden"
                whileInView="visible"
                className=" border-0 border-[#e8a230] hover:bg-blue-500/20 transition duration-300 bg-black/20 rounded-xl p-2"
              >
                <Tilt options={defaultOptions} className="flex flex-col justify-center gap-2 w-[80px] h-[80px] items-center">
                  <IconComponent
                    className="text-4xl text-[#ffffff]  "
                    style={{
                      color: item.color,
                      borderColor: item.color,
                      boxShadow: `10 -40px -106px ${item.color}`, // ظل بنفس لون الأيقونة
                    }}
                  />

                  <div className="text-[12px] text-white">{item.name}</div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">

            <Vertical />
        </div>
      </div>
    </div>
  );
};

export default Skills;
