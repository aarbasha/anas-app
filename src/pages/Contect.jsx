"use client";

import Link from "next/link";
import React from "react";
import { FaMailBulk, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Flag from "react-world-flags";
const Contect = () => {
  return (
    <div className=" w-full h-auto my-10">
      <div className="container mx-auto px-5">
        <div className="flex lg:flex-row flex-col-reverse justify-around items-center gap-5">
          <div className="form-email w-full  min-h-[400px] bg-black/30 rounded-3xl">
            <form>
              <div className="flex flex-col gap-3 p-5">
                <div className="flex md:flex-row flex-col  justify-around items-center gap-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-black/30 w-full rounded-3xl h-[50px] text-white  text-xs px-5"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-black/30  w-full rounded-3xl h-[50px] text-white  text-xs px-5"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-black/30 rounded-3xl h-[50px] text-white  text-xs px-5"
                />
                <textarea
                  type="text"
                  placeholder="Message"
                  rows={5}
                  className="bg-black/30 rounded-3xl text-white  text-xs px-5 py-3"
                />

                <button className="bg-[#00b9ff] my-2 hover:bg-[#2076ef] transition duration-500 ease-in-out rounded-3xl h-[50px]">
                  {" "}
                  Send{" "}
                </button>
              </div>
            </form>
          </div>

          <div className="form-data w-full  h-[450px] bg-black/30 rounded-3xl">
            <div className="flex justify-start  items-center mt-5 text-white text-xs">
              <label className="px-10">Name : Anas Arbasha</label>
            </div>

            <div className="flex justify-start  items-center mt-5 text-white text-xs">
              <label className="px-10 flex justify-center items-center">
                Phone (1){" "}
                <Flag code="de" width="30" height="30" className="mx-2" /> :
                +49-1762-079-2218
              </label>
            </div>

            <div className="flex justify-start  items-center mt-5 text-white text-xs">
              <label className="px-10 flex justify-center items-center">
                Phone (2){" "}
                <Flag code="sy" width="30" height="30" className="mx-2" /> :
                +963-967107707
              </label>
            </div>

            <div className="flex justify-start  items-center mt-5 text-white text-xs">
              <label className="px-10 flex justify-center items-center">
                Phone (3){" "}
                <Flag code="sy" width="30" height="30" className="mx-2" /> :
                +963-967107717
              </label>
            </div>

            <div className="flex justify-start  items-center mt-5 text-white text-xs">
              <label className="px-10">
                Email :{" "}
                <span className="text-[#00b9ff]">info@anasarbasha.net</span>{" "}
              </label>
            </div>

            <div className="flex justify-start  items-center mt-5 text-white text-xs">
              <label className="px-10">
                Email : <span className="text-[#00b9ff]">info@anas.sy</span>{" "}
              </label>
            </div>

            <div className="flex justify-center items-center pt-5 gap-10">

              <Link href={"https://wa.me/+4917620792218"} target="_blank">
                <FaWhatsapp className=" text-[#25D366] hover:text-[#23ff61] transition duration-200 text-4xl " />
              </Link>

              <Link href={"https://t.me/anas3"} target="_blank">
                <FaTelegram className=" text-[#2c83f5] hover:text-[#1b9cff] transition duration-200  text-4xl " />
              </Link>

              <FaMailBulk className=" text-[#ba7d1b] hover:text-[#ffb222] ] transition duration-200 text-4xl " />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-5 text-white text-xs">
          copyright @ 2025 all rights reserved by Anas Arbasha{" "}
        </div>
      </div>
    </div>
  );
};

export default Contect;
