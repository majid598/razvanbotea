import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Category = ({ items, dialogClose }) => {
  return (
    <div className="bg-[#081936] border flex pt-12 flex-col gap-2 rounded-2xl p-5">
      <button
        className="top-3 right-3 absolute text-white"
        onClick={dialogClose}
      >
        <IoMdClose className="text-2xl" />
      </button>
      {items.map((item) => (
        <div className="item text-white w-full pr-12 relative h-20 flex items-center gap-4 overflow-hidden rounded-xl px-4 after:transition-all after:duration-300 after:-left-full after:content-[''] after:w-full after:h-full after:top-0 cursor-pointer hover:text-black transition-all duration-300 hover:after:left-0 after:absolute">
          <div className="w-14 rounded-xl overflow-hidden relative z-50">
            <img src={item.icon} className="w-full h-full" alt="" />
          </div>
          <div className="relative z-50">
            <h2 className="font-semibold text-xl">{item.lable}</h2>
            <p className="text-sm">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Tech = () => {
  const categories = [
    "Compute",
    // "Category",
    // "Category",
    // "Category",
    // "Category",
    // "Category",
  ];
  const items = [
    {
      lable: "EC2",
      text: "I Don't know what is this",
      icon: "./assets/ec2.png",
    },
    {
      lable: "ECS",
      text: "I Don't know what is this",
      icon: "./assets/ecs.png",
    },
    {
      lable: "Lambda",
      text: "I Don't know what is this",
      icon: "./assets/logo192.png",
    },
    {
      lable: "ApiGateway",
      text: "I Don't know what is this",
      icon: "./assets/ec2.png",
    },
  ];
  const [isDialog, setisDialog] = useState(false);
  const dialogOpen = () => {
    setisDialog(true);
  };
  const dialogClose = () => {
    setisDialog(false);
  };
  return (
    <div className="w-full relative py-20">
      {isDialog && (
        <Dialog
          open={dialogOpen}
          onClose={dialogClose}
          PaperProps={{ style: { backgroundColor: "transparent" } }}
        >
          <Category items={items} dialogClose={dialogClose} />
        </Dialog>
      )}
      <h1 className="text-center text-4xl font-semibold tracking-[2px]">
        Text Key words
      </h1>
      <h2 className="lg:text-2xl text-xl font-semibold lg:px-36 text-center py-10">
        AWS (Amazon Web Services)
      </h2>

      <div className="w-full lg:px-36 grid lg:grid-cols-6 gap-10 px-10 grid-cols-2">
        {categories.map((category) => (
          <div
            className={`shadow w-full px-4 relative h-24 rounded-xl bg-cover overflow-hidden`}
          >
            <h2 className="text-center py-3 text-2xl">{category}</h2>
            <button
              onClick={dialogOpen}
              className="flex mx-auto items-center gap-2"
            >
              View <FaEye />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
