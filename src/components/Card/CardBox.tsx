"use client";
import React from "react";
import { Card } from "antd";
import { FcBusinessman } from "react-icons/fc";
//@ts-ignore
const CardBox: React.FC = ({ title, value }) => (
  <Card className="text-center  ">
    <FcBusinessman size={30} className="mx-auto" />
    <p>{title}</p>
    <h2 className="font-sm text-2xl">{value}</h2>
  </Card>
);

export default CardBox;
