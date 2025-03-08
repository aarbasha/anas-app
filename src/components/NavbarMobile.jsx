"use client";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Links, BottomLinks } from "@/data/Links";
import "../app/css/app.css";
import { IoMdMenu, IoMdClose } from "react-icons/io";
const NavbarMobile = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="block lg:hidden   z-100 ">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col justify-start  w-full h-full fixed top-0 z-80 bg-[#324150]/85 backdrop-brightness-200 text-white backdrop-blur-lg   items-center   "
            id="nav-mobile"
          >
            <div className="container  w-full h-[60px] pt-4  px-7 md:px-5 mx-auto flex items-center justify-end ">
              <IoMdClose
                onClick={() => setOpen(false)}
                className="text-2xl cursor-pointer transition duration-200 bg-none hover:text-[#f97316]/85  "
              />
            </div>

            <div className="flex flex-col w-full h-full justify-start relative top-10 items-center gap-5">
              {Links.map((link) => (
                <a
                  href={`#${link.link}`}
                  key={link.name}
                  className="nav-link"
                  onClick={() => setOpen(false)}
                  style={{  fontSize: "20px" }}
                >
                  {link.name}
                </a>
              ))}

              <hr className="w-[90%]  bg-blue-400 border border-blue-500 h-[0.5px]" />

              <div className="flex flex-col text-center  justify-center items-center gap-3 m-1">
                {BottomLinks.map((link) => (
                  <Link
                    href={link.link}
                    key={link.name}
                    className="text-[18px] text-[#00b9ff] nav-link border border-[#00b9ff] px-4 py-1 rounded-3xl w-full"
                    style={{  fontSize: "20px" }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobile;
