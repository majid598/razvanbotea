import Box from "./Box";
import { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";

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
const box4 = [{ content: "AWS Config and Security Hub" }];

const Content = ({ content = [] }) => {
  return (
    <>
      {content.map((i) => (
        <div className="w-full flex gap-2 py-2">
          <div className="w-1/12 py-2">
            <FaCheckSquare />
          </div>
          <div className="w-11/12 text-start flex items-start">
            <p>{i.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const WorkWithMe = () => {
  // const [cursor, setcursor] = useState(false);
  // const crsor = () => {
  //   setcursor(true);
  // };
  // const dismiss = () => {
  //   setcursor(false);
  // };

  const works = [
    {
      title: "Process automation",
      // mouseEnter: crsor,
      // mouseLeave: dismiss,
      icon: "./assets/icons/automation.png",
      content: <Content content={box1} />,
      delay: 0.2,
    },
    {
      title: "Performance optimization",
      // mouseEnter: crsor,
      // mouseLeave: dismiss,
      icon: "./assets/icons/performance.png",
      content: <Content content={box2} />,
      delay: 0.5,
    },
    {
      title: "Cost optimization",
      // mouseEnter: crsor,
      // mouseLeave: dismiss,
      icon: "./assets/icons/costs.png",
      content: <Content content={box3} />,
      delay: 0.7,
    },
    {
      title: "Security and Compliance",
      // mouseEnter: crsor,
      // mouseLeave: dismiss,
      icon: "./assets/icons/security.png",
      content: <Content content={box4} />,
      delay: 0.9,
    },
  ];

  return (
    <div className="w-full h- relative flex flex-col items-center py-16">
      <h1 className="text-3xl font-semibold">Why work with me ?</h1>
      <div className="w-full lg:px-32 md:px-12 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 py-10 grid px-10 lg:grid-cols-4 gap-10">
        {works.map((work) => (
          <Box
            icon={work.icon}
            title={work.title}
            content={work.content}
            // mouseEnter={work.mouseEnter}
            // mouseLeave={work.mouseLeave}
            delay={work.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkWithMe;
