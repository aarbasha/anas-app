"use client";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Links, BottomLinks } from "@/data/Links";
import "../app/css/app.css";
const NavbarMobile = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="block md:hidden   z-100 ">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col justify-start  w-full h-full fixed top-10 z-80 bg-black/95 backdrop-brightness-200 text-white   items-center p-5 gap-5"
            id="nav-mobile"
          >
            {Links.map((link) => (
              <a
                href={`#${link.link}`}
                key={link.name}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <hr className="w-full  bg-blue-400 border border-blue-500 h-[0.5px]" />

            <div className="flex flex-col text-center  justify-center items-center gap-3 m-1">
              {BottomLinks.map((link) => (
                <Link
                  href={link.link}
                  key={link.name}
                  className="text-[18px] text-[#00b9ff] nav-link border border-[#00b9ff] px-4 py-1 rounded-3xl w-full"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobile;
