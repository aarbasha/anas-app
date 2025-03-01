import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Links, BottomLinks } from "@/data/Links";

const NavbarMobile = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className="block md:hidden  "
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center w-full fixed top-10 z-20 bg-black/90 backdrop-brightness-200  text-orange-400  items-center p-5 gap-2">
            {Links.map((link) => (
              <Link href={link.link} key={link.name} className="text-[18px]">
                {link.name}
              </Link>
            ))}

            <hr className="w-full  bg-blue-400 border border-blue-500 h-[0.5px]" />

            <div className="flex  justify-center items-center space-x-5 m-1">
              {BottomLinks.map((link) => (
                <Link
                  href={link.link}
                  key={link.name}
                  className="text-[18px] text-green-700"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobile;
