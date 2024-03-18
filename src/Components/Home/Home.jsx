import Footer from "../Footer";
import { motion } from "framer-motion";
import Header from "../Header";
import Profile from "../Profile";
import Tech from "../Tech";
import WorkWithMe from "../WorkWithMe";
import About from "../About";

const Home = () => {
  const data = [1, 2, 3, 4, 5];
  const crsr = (dets) => {
    console.log(dets.clientX);
    document.getElementById("crsr").style.left = dets.clientX + "px";
    document.getElementById("crsr").style.top = dets.clientY + "px";
    //   document.getElementById("box").style.scale = "1.2";
    // document.getElementById("crsr2").style.left = dets.clientX + "px";
    // document.getElementById("crsr2").style.top = dets.clientY + "px";
    //   document.getElementById("box").style.scale = "1.2";
  };

  return (
    <div className="w-full relative cursor-" onMouseMove={crsr}>
      <div
        id="crsr"
        className={`crsr 
          // cursor ? "scale-100" : "scale-0"
         cursor- w-12 scale-75 rounded-full transition duration-300 bg-transparent border-white border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  -z-50 absolute h-12`}
      ></div>
      {/* <div
        id="crsr2"
        className={`crsr 
          // cursor ? "scale-100" : "scale-0"
         cursor- bg-white w-2 h-2 rounded-full transition-ll uration-300 bg-transparent border-white border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  -z-50 absolute `}
      ></div> */}
      <Header />
      <Profile />
      <About />
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
