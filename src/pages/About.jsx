"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeLeft, FadePosation, FadeRight } from "@/animation/AnimationItems";
const About = () => {
  const URL_CV = "https://anas-app.vercel.app/cv/cv.pdf";
  const DownloadCV = (url) => {
    const file_name = url.split("/").pop();
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", file_name);
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  return (
    <section id="about" className="w-full h-full pt-10">
      <div className=" container mx-auto px-5">
        <div className=" flex justify-center items-center text-center text-3xl text-secondary  my-5">
          <motion.hr
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            className="w-[5%] mt-2 mx-1"
          />

          <motion.div
            variants={FadePosation(0.7)}
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
              alt="image"
              className="min-w-[350px] min-h-[350px] md:min-w-[450px] md:min-h-[450px] rounded-full border-none border-blue-500"
              width={400}
              height={400}
            />
          </motion.div>

          <div className=" px-10">
            <motion.p
              variants={FadeRight(0.8)}
              initial="hidden"
              whileInView="visible"
              className="text-white text-[11px] lg:text-[14px] leading-6"
            >
              Mein Name ist Anas, <br /> ich bin 28 Jahre alt. Ich komme aus
              Damaskus, Syrien <br /> Ich liebe das Programmieren seit meiner
              Kindheit, und der erste Code, den ich 2013 geschrieben habe,
              begleitet mich seitdem. <br /> Ich habe an der Universität
              Damaskus studiert, mit dem Hauptfach Angewandte Chemie. <br />{" "}
              Danach bin ich in die Russische Föderation gezogen. <br /> Dann
              bin ich nach Deutschland gezogen, wo ich meine Ausbildung
              fortsetze. Ich werde eine Berufsausbildung als Systemadministrator
              machen, da ich eine große Leidenschaft für dieses Feld habe.{" "}
              <br /> Ich habe umfangreiche Erfahrung in der Webentwicklung und
              in mobilen Anwendungen. Ich habe auch Erfahrung mit den
              Betriebssystemen Linux und macOS sowie mittlere Kenntnisse in der
              Informationssicherheit und Verschlüsselung.
            </motion.p>

            <motion.button
              variants={FadePosation(0.2)}
              initial="hidden"
              whileInView="visible"
              className="border-[#ef9920] text-xs border-2 text-[#11b7fe] font-bold rounded-full px-6 py-2 mt-5   hover:bg-[#ef9920] hover:text-white transition duration-200  hover:scale-90"
              onClick={() => DownloadCV(URL_CV)}
            >
              Mein Lebenslauf (PDF)
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
