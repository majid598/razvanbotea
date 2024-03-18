import React, { useState } from "react";

const Box = ({ img }) => {

  return (
    <div
      className={`shadow w-full relative h-32 rounded-xl bg-cover overflow-hidden`}
    >
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
