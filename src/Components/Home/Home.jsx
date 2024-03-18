import Footer from "../Footer";
import { motion } from "framer-motion";
import Header from "../Header";
import Profile from "../Profile";
import Tech from "../Tech";
import WorkWithMe from "../WorkWithMe";

const Home = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="w-full">
      <Header />
      <Profile />
      {/* <About /> */}
      <Tech />
      <WorkWithMe />
      <div className="w-full px-36 h-screen py-20">
        {data.map((i) => (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            className="w-full border-t border-b left-0 overflow-hidden cursor-pointer relative after:content-[''] after:transition-all after:duration-700 hover:font-bold transition-all duration-500 after:-left-full hover:after:left-0 after:absolute after:w-full after:h-full after:bg-white after:top-0 hover:text-black h-20 flex items-center"
          >
            <h2 className="text-xl font-semibold relative z-50">
              {i} : DB backups, snapshots and migrations between accounts.
            </h2>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
