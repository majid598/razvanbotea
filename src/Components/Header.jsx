import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="sticky top-0 z-[99]">
      <nav className="w-full h-20 flex bg-[#16294c] items-center justify-between lg:px-20 md:px-20 sm:px-16 px-10">
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-14 h-14 rounded-full bg-zinc-300 overflow-hidden border profile2 cursor- transition-all duration-300">
            <img src="./assets/razvan.jpeg" className="w-full h-full" alt="" />
          </div>
          <h3 className="font-semibold">Razvanbotea</h3>
        </motion.div>
        <motion.div initial={{ y: "-100%" }} whileInView={{ y: 0 }}>
          <a href="https://www.linkedin.com/in/razvanbotea/" target="_blank">
            <FaLinkedin className="text-3xl" />
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
