const About = () => {
  return (
    <div className="w-full lg:px-36 px-10 mt-14">
      <div className="w-full h-full rounded-2xl bg-[#080D18] items-center flex lg:flex-row flex-col about">
        <div className="lg:w-2/4 w-full lg:h-full h-2/4 lg:p-14 p-8 relative">
          <h1 className="lg:text-4xl md:text-3xl text-2xl daFont font-semibold text-center">
            About
          </h1>
          <p className="lg:py-10 py-4 text-center text-sm lg:leading-6 leading-4 tracking-tighter lg:tracking-normal text-gray-400 lg:w-11/12">
            As an AWS DevOps Engineer with over 8 years of dedicated experience,
            I bring a unique perspective having initially started my journey as
            a Backend Software Developer. My expertise lies in leveraging the
            full power of Amazon Web Services to streamline and enhance
            development pipelines, ensuring seamless integration and deployment
            processes. With a deep understanding of both software development
            and cloud infrastructure, I excel in creating robust, scalable, and
            efficient systems that drive organizational success. My background
            allows me to bridge the gap between development and operations,
            optimizing workflows, enhancing collaboration, and ultimately
            delivering top-tier solutions in the ever-evolving landscape of
            cloud computing.
          </p>
        </div>
        <div className="lg:w-2/4 w-full lg:h-full gap-10 lg:py-12 p-8">
          <div className="box shadow overflow-hidden lg:w-80 mx-auto rounded-2xl">
            <img
              src="./assets/about.jpeg"
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
