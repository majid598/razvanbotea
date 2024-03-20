import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <nav className="w-full h-20 flex relative bg-transparent/30 items-center justify-between px-20">
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
