const About = () => {
  return (
    <div className="w-full h-screen lg:px-36 px-10 py-20">
      <div className="w-full h-full rounded-2xl bg-[#080D18] flex gap-20 lg:gap-0 lg:flex-row flex-col about">
        <div className="lg:w-1/4 w-full lg:h-full h-1/4 lg:p-14 p-8 relative">
          <h1 className="text-3xl font-semibold">About</h1>
          <img
            src="./assets/manoncall.png"
            className="my-auto absolute lg:top-1/2 top-24 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 lg:w-72 w-40"
            alt=""
          />
        </div>
        <div className="lg:w-3/4 w-full lg:h-full grid grid-cols-2 grid-rows-2 gap-10 h-3/4 lg:py-12 p-4 lg:px-24">
          <div className="box shadow w-full h-full rounded-2xl"></div>
          <div className="box shadow w-full h-full rounded-2xl"></div>
          <div className="box shadow w-full h-full rounded-2xl"></div>
          <div className="box shadow w-full h-full rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
