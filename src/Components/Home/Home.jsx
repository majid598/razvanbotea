import Footer from "../Footer";
import { motion } from "framer-motion";
import Header from "../Header";
import Profile from "../Profile";
import Tech from "../Tech";
import WorkWithMe from "../WorkWithMe";
import About from "../About";

const Home = () => {
  return (
    <div className="w-full relative">
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
