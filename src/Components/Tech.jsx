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
    <div
      className={`bg-[#16294c] lg:w-full flex flex-col items-center justify-between md:w-1/4 lg:py-4 px-4 w-1/3 relative min-h-24 rounded-xl bg-cover overflow-hidden`}
    >
      <h2 className="text-center py-3 text-2xl">{category.name}</h2>
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
    </div>
  );
};

const Tech = () => {
  const categories = [
    {
      name: "Compute",
      items: [
        {
          lable: "EC2",
          text: "Deployment & Management.",
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
          lable: "ApiGateway",
          text: "Container runtime",
          icon: "./assets/ec2.png",
        },
      ],
    },
    {
      name: "Tools",
      items: [
        {
          lable: "AWS CDK",
          text: "I Don't know what is this",
          icon: "./assets/aws-cdk.png",
        },
        {
          lable: "Terraform",
          text: "I Don't know what is this",
          icon: "./assets/terraform.png",
        },
        {
          lable: "Serverless.js",
          text: "I Don't know what is this",
          icon: "./assets/serverless.png",
        },
        {
          lable: "Nodejs",
          text: "I Don't know what is this",
          icon: "./assets/nodejs.png",
        },
        {
          lable: "Typescript",
          text: "I Don't know what is this",
          icon: "./assets/typescript.svg",
        },
      ],
    },
    {
      name: "CDN & Storage",
      items: [
        {
          lable: "S3",
          text: "I Don't know what is this",
          icon: "./assets/s3.png",
        },
        {
          lable: "Cloudfront",
          text: "I Don't know what is this",
          icon: "./assets/cloudfront.png",
        },
        {
          lable: "EBS",
          text: "I Don't know what is this",
          icon: "./assets/ebs.png",
        },
        {
          lable: "EFS",
          text: "I Don't know what is this",
          icon: "./assets/efs.svg",
        },
      ],
    },
    {
      name: "Security & Compliance",
      items: [
        {
          lable: "Config",
          text: "I Don't know what is this",
          icon: "./assets/config.png",
        },
        {
          lable: "Security Hub",
          text: "I Don't know what is this",
          icon: "./assets/securityHub.jpg",
        },
        {
          lable: "SSM",
          text: "I Don't know what is this",
          icon: "./assets/ssm.png",
        },
        {
          lable: "WAF",
          text: "I Don't know what is this",
          icon: "./assets/waf.png",
        },
        {
          lable: "VPC",
          text: "I Don't know what is this",
          icon: "./assets/vpc.png",
        },
      ],
    },
    {
      name: "Databases",
      items: [
        {
          lable: "RDS",
          text: "I Don't know what is this",
          icon: "./assets/rds.png",
        },
        {
          lable: "DynamoDB",
          text: "I Don't know what is this",
          icon: "./assets/dynamodb.jpg",
        },
        {
          lable: "ElastiCache",
          text: "I Don't know what is this",
          icon: "./assets/elastiCache.webp",
        },
      ],
    },
    {
      name: "Observability",
      items: [
        {
          lable: "Cloudwatch",
          text: "I Don't know what is this",
          icon: "./assets/cloudwatch.png",
        },
        {
          lable: "Grafana",
          text: "I Don't know what is this",
          icon: "./assets/grafana.png",
        },
        {
          lable: "SNS",
          text: "I Don't know what is this",
          icon: "./assets/sns.jpg",
        },
      ],
    },
  ];

  return (
    <div className="w-full relative py-20">
      <h1 className="text-center daFont lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-semibold tracking-[2px]">
        Tech keywords
      </h1>
      <h2 className="lg:text-2xl text-xl daFont font-semibold lg:px-28 text-center py-10">
        AWS (Amazon Web Services)
      </h2>

      <div className="w-full lg:px-28 gap-10 lg:grid lg:grid-cols-4 sm:px-10 py-24 justify-center flex flex-wrap">
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
