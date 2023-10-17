//@ts-nocheck
"use client";
import { Card, Radio } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import PieChartImage from "../../../public/images/piechart.png";

const PieCard = ({ yearlyBreakup, yearOne, yearTwo, percentage }) => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("Radio checked:", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <Card>
        <div className="flex justify-between">
          <div className="mt-2">
            <h2 className="font-semibold text-xl">Yearly Breakup</h2>
            <h2 className="font-bold text-2xl mb-2 mt-3">${yearlyBreakup}</h2>
            <p>{percentage}% last year</p>
          </div>
          <div>
            <Image
              src={PieChartImage}
              alt="Pie Chart"
              height={150}
              width={150}
            />
          </div>
        </div>
        <div>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>{yearOne}</Radio>
            <Radio value={2}>{yearTwo}</Radio>
          </Radio.Group>
        </div>
      </Card>
    </div>
  );
};

export default PieCard;
