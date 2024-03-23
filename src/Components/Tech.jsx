import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { FaEye } from "react-icons/fa";

const CategoryCard = ({ category }) => {
  const [isDialog, setisDialog] = useState(false);
  const dialogOpen = () => {
    setisDialog(true);
  };
  const dialogClose = () => {
    setisDialog(false);
  };
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: category.delay }}
      className={`bg-[#16294c] w-full flex flex-col items-center justify-between py-4 px-4 lg:px-4 md:px-4 sm:px-4 relative min-h-24 rounded-xl overflow-hidden`}
    >
      <h2 className="text-center tracking-tighter daFont py-3 lg:text-xl md:text-xl">
        {category.name}
      </h2>
      <button onClick={dialogOpen} className="flex mx-auto items-center gap-2">
        More <FaEye />
      </button>
      {isDialog && (
        <Dialog
          open={dialogOpen}
          onClose={dialogClose}
          PaperProps={{ style: { backgroundColor: "transparent" } }}
        >
          <ItemCard items={category.items} dialogClose={dialogClose} />
        </Dialog>
      )}
    </motion.div>
  );
};

const Tech = () => {
  const categories = [
    {
      name: "Compute",
      delay: 0,
      items: [
        {
          lable: "EC2",
          text: "Deployment & Management",
          icon: "./assets/ec2.png",
        },
        {
          lable: "ECS",
          text: "Cluster building & Management",
          icon: "./assets/ecs.png",
        },
        {
          lable: "Lambda",
          text: "Automation & serverless apps",
          icon: "./assets/lambda.png",
        },
        {
          lable: "Docker",
          text: "Container runtime",
          icon: "./assets/docker.png",
        },
        {
          lable: "Alpine Linux",
          text: "For containers",
          icon: "./assets/alpine-linux.svg",
        },
        {
          lable: "Ubuntu",
          text: "OS Instances",
          icon: "./assets/ubuntu.svg",
        },
      ],
    },
    {
      name: "Tools",
      delay: 0.2,
      items: [
        {
          lable: "AWS CDK",
          text: "",
          icon: "./assets/aws-cdk.png",
        },
        {
          lable: "Terraform",
          text: "",
          icon: "./assets/terraform.png",
        },
        {
          lable: "Serverless.js",
          text: "",
          icon: "./assets/serverless.png",
        },
        {
          lable: "Nodejs",
          text: "",
          icon: "./assets/nodejs.png",
        },
        {
          lable: "Typescript",
          text: "",
          icon: "./assets/typescript.svg",
        },
      ],
    },
    {
      name: "CDN & Storage",
      delay: 0.4,
      items: [
        {
          lable: "S3",
          text: "Configuring & Optimizing (+ Athena)",
          icon: "./assets/s3.svg",
        },
        {
          lable: "Cloudfront",
          text: "Deploying, Lambda@Edge, WAF, Caching",
          icon: "./assets/cloudfront.png",
        },
        {
          lable: "EBS",
          text: "Storage for instances and containers",
          icon: "./assets/ebs.svg",
        },
        {
          lable: "EFS",
          text: "Over the network file system",
          icon: "./assets/efs.svg",
        },
      ],
    },
    {
      name: "Security & Compliance",
      delay: 0.6,
      items: [
        {
          lable: "Config",
          text: "Maintain and monitor resources for compliance",
          icon: "./assets/config.png",
        },
        {
          lable: "Security Hub",
          text: "Abide to security best practices",
          icon: "./assets/securityHub.jpg",
        },
        {
          lable: "SSM",
          text: "Maintain instances and provide automation",
          icon: "./assets/ssm.png",
        },
        {
          lable: "WAF",
          text: "Firewall against common threat vectors",
          icon: "./assets/waf.png",
        },
        {
          lable: "VPC",
          text: "ACLs and Security groups management",
          icon: "./assets/vpc.png",
        },
      ],
    },
    {
      name: "Databases",
      delay: 0.8,
      items: [
        {
          lable: "RDS",
          text: "Deploy, maintain, auto scale, monitor databases",
          icon: "./assets/rds.png",
        },
        {
          lable: "DynamoDB",
          text: "Tables for simple/low requirements",
          icon: "./assets/dynamodb.png",
        },
        {
          lable: "ElastiCache",
          text: "Redis clusters for caching data",
          icon: "./assets/elasticache.png",
        },
      ],
    },
    {
      name: "Observability",
      delay: 1,
      items: [
        {
          lable: "Cloudwatch",
          text: "Alarms, Metrics, Dasbhoards, logging",
          icon: "./assets/cloudwatch.png",
        },
        {
          lable: "Grafana",
          text: "Deploy; configure nodes for monitoring",
          icon: "./assets/grafana.png",
        },
        {
          lable: "SNS",
          text: "Notify when alarms are triggered",
          icon: "./assets/sns.png",
        },
      ],
    },
  ];

  return (
    <div className="w-full relative lg:py-20 md:py-16 py-10 mt-10">
      <h1 className="text-center daFont mb-4 lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-semibold tracking-[2px]">
        Skill Sets
      </h1>
      <div className="w-full lg:px-28 gap-10 lg:grid md:grid-cols-2 grid lg:grid-cols-3 sm:grid-cols-2 sm:px-10 px-8 lg:py-10 py-6 justify-center">
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
