"use client";
import { Toastify_Success } from "@/components/Toastify";
import emailjs from "emailjs-com";
import Link from "next/link";
import React from "react";
import { FaMailBulk, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Flag from "react-world-flags";
const Contect = () => {
  const [form, setForm] = React.useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const YOUR_SERVICE_ID = "service_4fpcseo";
  const YOUR_TEMPLATE_ID = "template_d0fmxkc";
  const YOUR_USER_ID = "Q1sd3OF3JGwJR2G85";

  const SendEmailGast = (e) => {
    e.preventDefault();
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, YOUR_USER_ID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        Toastify_Success("Message Send Successfully");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      },
      (err) => {
        console.error("FAILED...", err);
      }
    );
  };

  return (
    <section id="contect" className="w-full h-full pt-10">
      <div className=" container mx-auto px-5">
        <div className="flex lg:flex-row flex-col-reverse justify-around items-center gap-5 transform scale-90 ">
          <div className="form-email w-full   min-h-[450px] bg-black/30 rounded-3xl">
            <form onSubmit={(e) => SendEmailGast(e)}>
              <div className="flex flex-col gap-3 p-5">
                <div className="flex md:flex-row flex-col  justify-around items-center gap-2">
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full Name"
                    className="bg-black/30 w-full rounded-3xl h-[50px] text-white  text-xs px-5  focus:outline-none "
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Email"
                    className="bg-black/30  w-full rounded-3xl h-[50px] text-white  text-xs px-5  focus:outline-none "
                  />
                </div>
                <input
                  required
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  placeholder="Subject"
                  className="bg-black/30 rounded-3xl h-[50px] text-white  text-xs px-5  focus:outline-none "
                />
                <textarea
                  required
                  type="text"
                  name="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Message"
                  rows={5}
                  className="bg-black/30 rounded-3xl text-white  text-xs px-5 py-3  focus:outline-none "
                />

                <button
                  disabled={
                    !form.name || !form.email || !form.subject || !form.message
                  }
                  type="submit"
                  className="bg-[#00b9ff] my-2 hover:bg-[#2076ef] transition duration-500 ease-in-out rounded-3xl h-[50px]"
                >
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

              <a
                href="mailto:info@anasarbasha.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMailBulk className="text-[#ba7d1b] hover:text-[#ffb222] transition duration-200 text-4xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-5 text-white text-xs">
          copyright @ 2025 all rights reserved by Anas Arbasha{" "}
        </div>
      </div>
    </section>
  );
};

export default Contect;
