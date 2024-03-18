import Footer from "../Footer";
import Header from "../Header";
import Profile from "../Profile";
import Tech from "../Tech";
import WorkWithMe from "../WorkWithMe";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Profile />
      {/* <About /> */}
      <Tech />
      <WorkWithMe />
      <Footer />
    </div>
  );
};

export default Home;
