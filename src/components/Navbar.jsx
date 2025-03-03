"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import NavbarMobile from "./NavbarMobile";
import { Links, BottomLinks } from "@/data/Links";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className=" bg-black/0 backdrop-blur-3xl  text-white fixed top-0 left-0 w-full z-20 ">
        <div className="container  w-full h-[60px]  px-7 md:px-5 mx-auto flex items-center justify-between">
          <div className="logo">
            <span className="text-blue-500 font-bold">Anas</span>
            <span className="text-orange-500 font-bold">App</span>
          </div>

          <div className="item text-[16px] space-x-5 hidden md:flex ">
            {Links.map((link) => (
              <a href={`#${link.link}`} key={link.name} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="bottom text-[16px] space-x-5 hidden md:flex">
            {BottomLinks.map((link) => (
              <Link href={link.link} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>

          <div
            className="flex md:hidden font-bold text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose /> : <IoMdMenu />}
          </div>
        </div>
      </div>

      <div className="">
        <NavbarMobile open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
