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
      className="w-full py-4 overflow-hidden bg-[#16294c] rounded-xl relative border px-2 text-center mt-5"
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
        id="btn"
        className="w-full text-center items-center flex justify-center gap-4 text-gray-300"
        onClick={openDialog}
      >
        vew more <FaArrowRight className=" transition-all duration-300" />
      </button>
      {dialogOpen && (
        <Dialog
          open={openDialog}
          onClose={closeDialog}
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <div className="px-4 py-6 bg-[#081936] text-white rounded-xl border border-white/70 relative">
            <div className="flex gap-4 justify-center items-center mb-4">
              <h2 className="text-2xl font-semibold py-2 text-center text-white my-2">
                {title}
              </h2>
            </div>
            <button className="top-3 right-3 absolute" onClick={closeDialog}>
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
