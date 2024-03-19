import { useState } from "react";
import { motion } from "framer-motion";

const Box = ({ img, delay }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay }}
      className={`shadow w-full relative h-32 bg-white rounded-xl bg-cover overflow-hidden`}
    >
      <img src={img} alt="" className="w-full h-full object-contai" />
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="w-full relative py-20">
      <h1 className="text-center text-4xl font-semibold tracking-[2px]">
        Text Key words
      </h1>
      <h2 className="lg:text-2xl text-xl font-semibold lg:px-36 text-center py-10">
        AWS (Amazon Web Services)
      </h2>

      <div className="w-full lg:px-36 grid lg:grid-cols-8 gap-10 px-10 grid-cols-2">
        <Box img={"./assets/aws-cdk.png"} delay={0.1} />
        <Box img={"./assets/amazon-linux.png"} delay={0.2} />
        <Box img={"./assets/ec2.png"} delay={0.3} />
        <Box img={"./assets/ecs.png"} delay={0.4} />
        <Box img={"./assets/cloudfront.png"} delay={0.5} />
        <Box img={"./assets/nodejs.svg"} delay={0.6} />
        <Box img={"./assets/rds.png"} delay={0.7} />
        <Box img={"./assets/s3.png"} delay={0.8} />
        <Box img={"./assets/serverless.png"} delay={0.9} />
        <Box img={"./assets/terraform.svg"} delay={1} />
        <Box img={"./assets/typescript.svg"} delay={1.1} />
        <Box img={"./assets/ubuntu.svg"} delay={1.2} />
        <Box img={"./assets/docker.png"} delay={1.3} />
        <Box img={"./assets/cloudwatch.png"} delay={1.4} />
        <Box img={"./assets/cloudformation.svg"} delay={1.5} />
        <Box img={"./assets/alpine-linux.svg"} delay={1.6} />
      </div>
    </div>
  );
};

export default Tech;
