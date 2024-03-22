import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const Profile = () => {
  return (
    <div className="w-full mx-auto flex-col items-center py-16 h-[calc(100vh-5rem)] relative flex">
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
        <h1 className="lg:text-6xl daFont md:text-4xl sm:text-3xl text-2xl flex items-center lg:gap-4 md:gap-3 gap-2 justify-center tracking-tighter font-bold uppercase mt-3">
          AWS DevOps
          <div
            id="div"
            className="h-full cursor-pointer overflow-hidden relative lg:w-96 md:w-72 sm:w-60 w-40"
          >
            <span
              id="span"
              className="left-0 top-0 transition-all absolute duration-500"
            >
              Engineer
            </span>
          </div>
        </h1>
        <h4 className="lg:text-xl lg:tracking-tight lg:w-2/4 mx-auto px-4 font-semibold lg:mt-2 mt-5">
          "Coming together is a beginning; keeping together is progress; working
          together is success"
        </h4>
        <div className="flex gap-2 justify-center items-center">
          <h4>Author :</h4>
          <span className="mt-2 font-semibold">"Edward Everett Hale"</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// const TextSpan = ({ children }) => {
//   const controls = useAnimationControls();
//   const [isPlaying, setisPlaying] = useState(false);
//   const rubberBand = () => {
//     controls.start({
//       transform: [
//         "scale3d(1, 1, 1)",
//         "scale3d(1.4, .55, 1)",
//         "scale3d(.75, 1.25, 1)",
//         "scale3d(1.25, .85, 1)",
//         "scale3d(.9, 1.05, 1)",
//         "scale3d(1, 1, 1)",
//       ],
//       transition: {
//         times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
//       },
//     });
//     setisPlaying(true);
//   };
//   return (
//     <motion.span
//       animate={controls}
//       onMouseOver={() => {
//         if (!isPlaying) rubberBand();
//       }}
//       onAnimationComplete={() => setisPlaying(false)}
//     >
//       {children}
//     </motion.span>
//   );
// };
