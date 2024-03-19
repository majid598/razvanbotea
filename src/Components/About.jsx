const About = () => {
  return (
    <div className="w-full h-screen px-36 py-20">
      <div className="w-full h-full rounded-2xl bg-[#080D18] flex about">
        <div className="w-1/4 h-full p-14 relative">
          <h1 className="text-3xl font-semibold">About</h1>
          <img
            src="./assets/manoncall.png"
            className="my-auto absolute top-1/2 -translate-y-1/2 w-72"
            alt=""
          />
        </div>
        <div className="w-3/4 h-full p-12 pl-24">
          <div className="w-full h-32 rounded-2xl overflow-hidden justify-between cursor-pointer flex items-center px-6 pr-10 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:-left-full afterBg after:b-white/30 hover:after:left-0 after:transition-all after:duration-500 relative">
            <div className="shadow w-20 h-20 overflow-hidden rounded-xl">
              <img src={"./assets/ec2.png"} alt="" />
            </div>
            <div className="w-5/6 relative z-50">
              <h2 className="text-2xl font-semibold">EC2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                eius magni corporis harum rem? Nam libero, quae illo{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
