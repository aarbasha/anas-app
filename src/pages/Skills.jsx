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
  scale: 0.9, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Skills = () => {
  return (
    <section id="skills" className="w-full h-full pt-10">
      <div className=" container mx-auto px-5">
        <h1 className="text-3xl my-5">
          <div className=" flex justify-center items-center text-center text-3xl text-secondary my-5">
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

        <div className="flex flex-wrap justify-center items-center gap-5 m-1 py-5">
          {Tech.map((item) => {
            const IconComponent = item.icon; // استدعاء الأيقونة من المصفوفة
            return (
              <Tilt
                key={item.id}
                options={defaultOptions}
                className="flex flex-col transition duration-100 hover:scale-90 justify-center max-w-[80px] max-h-[80px] items-center"
              >
                <motion.div
                  key={item.id}
                  variants={FadePosation(item.daley)}
                  initial="hidden"
                  whileInView="visible"
                  className="  hover:bg-blue-500/20 transition duration-300  text-white backdrop-blur-3xl bg-white/5  flex flex-col justify-center items-center gap-1 rounded-xl p-2"
                >
                  <IconComponent
                    className="text-4xl text-[#ffffff]  "
                    style={{
                      color: item.color,
                      borderColor: item.color,
                      boxShadow: `10 -40px -106px ${item.color}`, // ظل بنفس لون الأيقونة
                    }}
                  />

                  <div className="text-[11px] overflow-hidden" style={{ color: item.color , textShadow: `10 -40px -106px ${item.color}` , fontFamily: "Arial, sans-serif" , fontWeight: "bold" }}>
                    {item.name}
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>

        <div className="mt-10">
          <Vertical />
        </div>
      </div>
    </section>
  );
};

export default Skills;
