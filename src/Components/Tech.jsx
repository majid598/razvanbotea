import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Category = ({ items, dialogClose }) => {
  return (
    <div className="bg-[#081936] flex pt-12 flex-col gap-2 rounded-2xl p-5">
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
  const categories = [1, 2, 3, 4, 5];
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
      <h1 className="text-center daFont lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-semibold tracking-[2px]">
        Tech keywords
      </h1>
      <h2 className="lg:text-2xl text-xl daFont font-semibold lg:px-36 text-center py-10">
        AWS (Amazon Web Services)
      </h2>

      <div className="w-full lg:px-36 gap-10 justify-center sm:px-10 py-24 flex flex-wrap">
        {categories.map((i) => (
          <div
            className={`bg-[#16294c] lg:w-1/6 md:w-1/4 px-4 w-1/3 relative h-24 rounded-xl bg-cover overflow-hidden`}
          >
            <h2 className="text-center py-3 text-2xl">Compute</h2>
            <button
              onClick={dialogOpen}
              className="flex mx-auto items-center gap-2"
            >
              More <FaEye />
            </button>
          </div>
        ))}
        {isDialog && (
          <Dialog
            open={dialogOpen}
            onClose={dialogClose}
            PaperProps={{ style: { backgroundColor: "transparent" } }}
          >
            <Category items={items} dialogClose={dialogClose} />
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default Tech;
