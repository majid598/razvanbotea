import { motion } from "framer-motion";

const Box = ({ content, title, icon, mouseEnter, mouseLeave, delay }) => {
  return (
    <motion.div
      className="w-full py-4 lg:h-64 overflow-hidden rounded-xl cursor-none relative shadow px-2 text-center mt-5"
      id="box"
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay }}
    >
      <div
        // onMouseMove={crsr}
        className="w-full h-full absolute top-0 left-0 bg-transparent"
      ></div>
      <div className="flex justify-center gap-4 items-center mb-4">
        <img src={icon} className="w-12 h-12 invert" alt="" />
        <h2 className="text-2xl font-semibold py-2 text-center text-white my-2">
          {title}
        </h2>
      </div>
      <div className="w-full flex flex-col gap-2 text-zinc-300">{content}</div>
    </motion.div>
  );
};

export default Box;
