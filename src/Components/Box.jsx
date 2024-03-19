import { Dialog } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Box = ({ content, title, icon, mouseEnter, mouseLeave, delay }) => {
  const [dialogOpen, setdialogOpen] = useState(false);
  const openDialog = () => {
    setdialogOpen(true);
  };
  const closeDialog = () => {
    setdialogOpen(false);
  };
  return (
    <motion.div
      className="w-full py-4 overflow-hidden rounded-xl relative shadow px-2 text-center mt-5"
      id="box"
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay }}
    >
      <div className="flex flex-col justify-center items-center mb-4">
        <img src={icon} className="w-12 h-12 invert" alt="" />
        <h2 className="text-2xl font-semibold py-2 text-center text-white my-2">
          {title}
        </h2>
      </div>
      <button
        className="w-full text-center items-center flex justify-center gap-4 text-zinc-300"
        onClick={openDialog}
      >
        vew more <FaArrowRight />
      </button>
      {dialogOpen && (
        <Dialog open={openDialog} onClose={closeDialog}>
          <div className="w-72 p-4 bg-white relative">
            <button className="top-2 right-2 absolute" onClick={closeDialog}>
              <IoMdClose className="text-2xl" />
            </button>
            {content}
          </div>
        </Dialog>
      )}
    </motion.div>
  );
};

export default Box;
