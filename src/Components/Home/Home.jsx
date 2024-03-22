import Footer from "../Footer";
import { motion } from "framer-motion";
import Header from "../Header";
import Profile from "../Profile";
import Tech from "../Tech";
import WorkWithMe from "../WorkWithMe";
import About from "../About";

const Home = () => {
  // const data = [1, 2, 3, 4, 5];
  // const crsr = (dets) => {
  //   console.log(dets.clientX);
  //   document.getElementById("crsr").style.left = dets.clientX + "px";
  //   document.getElementById("crsr").style.top = dets.clientY + "px";
  // };

  return (
    <div className="w-full relative">
      {/* <div
        id="crsr"
        className={`crsr w-12 scale-75 rounded-full transition duration-300 bg-transparent border-white border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  -z-50 absolute h-12`}
      ></div> */}

      <Header />
      <Profile />
      <About />
      <Tech />
      <WorkWithMe />
      <Footer />
    </div>
  );
};

export default Home;
