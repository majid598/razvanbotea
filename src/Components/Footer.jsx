import React from "react";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full relative lg:h-[60vh] border-t p-20">
      <h1 className="text-3xl font-semibold">Contact me</h1>
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-32 md:gap-24">
        <div className="mt-12 lg:ml-40 md:ml-32">
          <a
            href="https://www.linkedin.com/in/razvanbotea/"
            className="flex items-center gap-1"
            target="_blank"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="mailto:contact@razvanbotea.me"
            className="mt-5 flex gap-1 items-center"
            target="_blank"
          >
            <IoMdMail /> contact@razvanbotea.me
          </a>
        </div>
        <div className="lg:w-1/4 mt-10 lg:mt-0">
          <img
            src={"./assets/manoncall.png"}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      </div>
      <div className="absolute bottom-8 ">
        <h2 className="font-semibold">All rights reserved @ Mr Razvanbotea</h2>
      </div>
    </div>
  );
};

export default Footer;
