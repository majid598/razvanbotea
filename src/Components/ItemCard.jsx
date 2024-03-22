import { IoMdClose } from "react-icons/io";

const ItemCard = ({ items = [], dialogClose }) => {
  return (
    <div className="bg-[#081936] flex pt-12 flex-col gap-2 rounded-2xl p-5">
      <button
        className="top-3 right-3 absolute text-white"
        onClick={dialogClose}
      >
        <IoMdClose className="text-2xl" />
      </button>
      {items.map((item) => (
        <div className="item text-white w-full pr-12 relative min-h-20 flex items-center gap-4 overflow-hidden rounded-xl lg:px-4 md:px-4 sm:px-4 after:transition-all after:duration-300 after:-left-full after:content-[''] after:w-full after:h-full after:top-0 cursor-pointer hover:text-black transition-all duration-300 hover:after:left-0 after:absolute">
          <div className="lg:min-w-14 md:min-w-14 sm:min-w-14 min-w-10 h-14 rounded-xl overflow-hidden bg-white relative z-50">
            <img src={item.icon} className="w-full h-full" alt="" />
          </div>
          <div className="relative z-50">
            <h2 className="font-semibold lg:text-xl md:text-xl sm:text-xl">
              {item.lable}
            </h2>
            <p className="lg:text-sm md:text-sm sm:text-sm text-xs">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
