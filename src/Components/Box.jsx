import { Dialog } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Box = ({ content, title, icon, delay }) => {
  const [dialogOpen, setdialogOpen] = useState(false);
  const openDialog = () => {
    setdialogOpen(true);
  };
  const closeDialog = () => {
    setdialogOpen(false);
  };
  return (
    <motion.div
      className="w-full overflow-hidden bg-[#16294c] min-h-80 rounded-xl relative text-center mt-5"
      id="box"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay }}
    >
      <div className="w-full flex gap-4 items-center justify-center min-h-28 p-4">
        <img
          src={icon}
          className="lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 invert"
          alt=""
        />
        <h2 className="lg:text-2xl md:text-2xl sm:text-2xl text-xl font-semibold py-2 text-center text-white my-2">
          {title}
        </h2>
      </div>
      <div className="flex flex-col pb-10 justify-center text-sm items-center w-full px-10">
        {content}
      </div>
    </motion.div>
  );
};

export default Box;
