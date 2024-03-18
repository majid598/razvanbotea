import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full h-20 flex bg-transparent/30 items-center justify-between px-20">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-zinc-300"></div>
        <h3 className="font-semibold">razvanbotea</h3>
      </div>
      <div>
        <a href="">
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Header;
