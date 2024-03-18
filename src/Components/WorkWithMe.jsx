import Box from "./Box";
import { useState } from "react";

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
        <div className="w-full flex px-2 cursor-none">
          <div className="w-1/12 flex items- py-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
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
  const [cursor, setcursor] = useState(false);
  const crsor = () => {
    setcursor(true);
  };
  const dismiss = () => {
    setcursor(false);
  };

  const works = [
    {
      title: "Process automation",
      mouseEnter: crsor,
      mouseLeave: dismiss,
      icon: "./assets/icons/automation.png",
      content: <Content content={box1} />,
    },
    {
      title: "Performance optimization",
      mouseEnter: crsor,
      mouseLeave: dismiss,
      icon: "./assets/icons/performance.png",
      content: <Content content={box2} />,
    },
    {
      title: "Cost optimization",
      mouseEnter: crsor,
      mouseLeave: dismiss,
      icon: "./assets/icons/costs.png",
      content: <Content content={box3} />,
    },
    {
      title: "Security and Compliance",
      mouseEnter: crsor,
      mouseLeave: dismiss,
      icon: "./assets/icons/security.png",
      content: <Content content={box4} />,
    },
  ];

  return (
    <div className="w-full h-screen relative flex flex-col items-center py-16">
      <div
        id="crsr"
        className={`crsr ${
          cursor ? "block" : "hidden"
        } cursor-none w-12 rounded-full bg-transparent border-white border  z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute h-12`}
      ></div>
      <h1 className="text-3xl font-semibold">Why work with me ?</h1>
      <div className="w-full lg:px-36 md:px-12 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-10 grid px-10 lg:grid-cols-3 gap-12">
        {works.map((work) => (
          <Box icon={work.icon} title={work.title} content={work.content} mouseEnter={work.mouseEnter} mouseLeave={work.mouseLeave} />
        ))}
      </div>
    </div>
  );
};

export default WorkWithMe;
