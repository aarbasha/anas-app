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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col justify-start  w-full h-full fixed top-10 z-20 bg-black/90 backdrop-brightness-200 text-white   items-center p-5 gap-5">
            {Links.map((link) => (
              <Link
                href={link.link}
                key={link.name}
                className="text-[18px] nav-link"
              >
                {link.name}
              </Link>
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobile;
