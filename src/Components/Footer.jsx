import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="h-screen relative">
      <div className="w-full absolute bottom-0 left-0 lg:flex justify-between lg:pr-60 md:flex lg:min-h-[60vh] border-t p-20">
        <div>
          <h1 className="text-3xl font-semibold w-full daFont">Contact me</h1>
          <div className="lg:mt-20 mt-5">
            <a
              href="https://www.linkedin.com/in/razvanbotea/"
              className="flex items-center gap-1"
              target="_blank"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:contact@razvanbotea.me"
              className="mt-5 flex gap-1 items-center"
              target="_blank"
            >
              <IoMdMail /> contact@razvanbotea.me
            </a>
          </div>
        </div>
        <div className="lg:w-1/4 w-full flex mt-10 lg:mt-0 lg:mx-20 md:mx-20">
          <img
            src={"./assets/manoncall.png"}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div className="absolute bottom-8">
          <h2 className="font-semibold">
            All rights reserved @ Mr Razvanbotea
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
