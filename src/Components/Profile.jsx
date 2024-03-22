import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const Profile = () => {
  return (
    <div className="w-full mx-auto flex-col items-center py-10 justify-center lg:justify-stretc relative flex">
      <div className="profile w-52 h-52 bgzinc-300 cursor-pointer overflow-hidden border hover:scale-110 relative hover:-translate-y-5 transition-all duration-300 mt-10 rounded-full">
        <img
          src="./assets/razvan.jpeg"
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
      <div className="w-full flex bg-whit flex-col text-center justify-center mt-5">
        <h2 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold">
          I'm Răzvan Botea
        </h2>
        <h1 className="lg:text-6xl lg:h-16 md:h-16 sm:h-12 h-10 w-full daFont md:text-4xl sm:text-2xl text-xl flex items-center lg:gap-4 md:gap-3 gap-2 justify-center tracking-tighter font-bold uppercase mt-3">
          AWS DevOps
          <div
            id="div"
            className="h-full cursor-pointer overflow-hidden relative lg:w-96 md:w-72 sm:w-60 w-32"
          >
            <span
              id="span"
              className="left-0 top-0 h-full flex items-center transition-all absolute duration-500"
            >
              Engineer
            </span>
          </div>
        </h1>
        <h4 className="lg:text-xl lg:tracking-tight lg:w-2/4 mx-auto px-4 font-semibold lg:mt-2 mt-5">
          "Coming together is a beginning; keeping together is progress; working
          together is success"
        </h4>
        <span className="mt-2 font-semibold">— "Edward Everett Hale"</span>
      </div>
    </div>
  );
};

export default Profile;
