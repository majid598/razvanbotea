import Profile from "./Components/Profile";
import Header from "./Components/Header";
import WorkWithMe from "./Components/WorkWithMe";
import Tech from "./Components/Tech";
import Footer from "./Components/Footer";
// import About from "./Components/About";

const App = () => {
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

export default App;
