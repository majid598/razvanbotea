import Box from "./Box";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const box1 = [
  { content: "DB backups, snapshots and migrations between accounts" },
  {
    content:
      "Cloudwatch alarms, eventbridge events for complex responses to situations",
  },
];
const box2 = [
  { content: "Fine tune the infrastructure" },
  {
    content:
      "Provide feedback for code optimizations (nodejs & typescript server apps)",
  },
  {
    content: "Auto scaling policies, horizontaly and verticaly",
  },
  {
    content: "Containers optimization",
  },
];
const box3 = [
  { content: "Review costs through AWS cost explorer" },
  {
    content: "Reduce log retention where possible",
  },
  {
    content: "Reduce AWS data transfers where possible",
  },
  {
    content: "Automate the process of turning on/off non-production resources",
  },
];
const box4 = [
  { content: "Least privileged principle" },
  { content: "AWS Config and Security Hub" },
  { content: "Container image scanning" },
  { content: "OS Patch management" },
];

const Content = ({ content = [] }) => {
  return (
    <>
      {content.map((i) => (
        <div className="w-full flex leading-one items-start text-start py-2 b-red-400 gap-2">
          <div>
            <FaCheck />
          </div>
          <p>{i.content}</p>
        </div>
      ))}
    </>
  );
};

const WorkWithMe = () => {
  const works = [
    {
      title: "Process automation",
      icon: "./assets/icons/automation.png",
      content: <Content content={box1} />,
      delay: 0.2,
    },
    {
      title: "Performance optimization",
      icon: "./assets/icons/performance.png",
      content: <Content content={box2} />,
      delay: 0.5,
    },
    {
      title: "Cost optimization",
      icon: "./assets/icons/costs.png",
      content: <Content content={box3} />,
      delay: 0.7,
    },
    {
      title: "Security & Compliance",
      icon: "./assets/icons/security.png",
      content: <Content content={box4} />,
      delay: 0.9,
    },
  ];

  return (
    <div className="w-full relative flex flex-col items-center py-16">
      <h1 className="daFont lg:text-3xl text-2xl font-semibold">
        Why work with me ?
      </h1>
      <div className="w-full lg:px-28 md:px-12 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 py-10 grid px-10 lg:grid-cols-3 gap-10">
        {works.map((work) => (
          <Box
            icon={work.icon}
            title={work.title}
            content={work.content}
            delay={work.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkWithMe;
