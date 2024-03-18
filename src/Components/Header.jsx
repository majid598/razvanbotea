import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full h-20 flex relative bg-transparent/30 items-center justify-between px-20">
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        className="flex items-center gap-2"
      >
        <div className="h-20 flex items-center justify-center w-20 rounded-full overflow-hidden bg-hite">
          <div className="w-14 h-14 rounded-full bg-zinc-300 overflow-hidden border profile2 cursor-pointer transition-all duration-300">
            <img src="./assets/razvan.jpeg" className="w-full h-full" alt="" />
          </div>
        </div>
        <h3 className="font-semibold">Razvanbotea</h3>
      </motion.div>
      <motion.div initial={{ y: "-100%" }} whileInView={{ y: 0 }}>
        <a href="https://www.linkedin.com/in/razvanbotea/" target="_blank">
          <FaLinkedin className="text-3xl" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
