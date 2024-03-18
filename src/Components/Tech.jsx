import React, { useState } from "react";

const Box = ({ img }) => {
  const [position, setposition] = useState({ x: 0, y: 0 });
  const [shoMagnifier, setshoMagnifier] = useState(false);
  const [cursorPosition, setcursorPosition] = useState({ x: 0, y: 0 });

  const handleMousehover = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setposition({ x, y });
    setcursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <div
      className={`shadow w-full relative h-32 rounded-xl bg-cover overflow-hidden`}
      onMouseEnter={() => setshoMagnifier(true)}
      onMouseLeave={() => setshoMagnifier(false)}
      onMouseMove={handleMousehover}
    >
      <div
        className={`rounded-full border w-12 h-12 absolute left-[${
          cursorPosition.x - 100
        }px] top-[${cursorPosition.y - 100}px] overflow-hidden`}
        style={{
          // backgroundImage: `url(${img})`,
          // backgroundPosition: `${position.x}% ${position.y}%`,
          // left: `${cursorPosition.x - 100}px`,
          // top: `${cursorPosition.y - 100}px`,
          pointerEvents: "none",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
          }}
        ></div>
      </div>
      <img src={img} alt="" className="w-full h-full object-contai" />
    </div>
  );
};

const Tech = () => {
  return (
    <div className="w-full min-h-screen relative">
      <h1 className="text-center text-4xl font-semibold tracking-[2px]">
        Text Key words
      </h1>
      <h2 className="text-2xl font-semibold px-36 py-10">
        AWS (Amazon Web Services)
      </h2>

      <div className="w-full px-36 lg:grid lg:grid-cols-8 gap-10 flex flex-wrap">
        <Box img={"./assets/aws-cdk.png"} />
        <Box img={"./assets/amazon-linux.png"} />
        <Box img={"./assets/ec2.png"} />
        <Box img={"./assets/ecs.png"} />
        <Box img={"./assets/cloudfront.png"} />
        <Box img={"./assets/nodejs.svg"} />
        <Box img={"./assets/rds.png"} />
        <Box img={"./assets/s3.png"} />
        <Box img={"./assets/serverless.png"} />
        <Box img={"./assets/terraform.svg"} />
        <Box img={"./assets/typescript.svg"} />
        <Box img={"./assets/ubuntu.svg"} />
        <Box img={"./assets/docker.png"} />
        <Box img={"./assets/cloudwatch.png"} />
        <Box img={"./assets/cloudformation.svg"} />
        <Box img={"./assets/alpine-linux.svg"} />
      </div>
    </div>
  );
};

export default Tech;
