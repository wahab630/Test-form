//@ts-nocheck
import { Card } from "antd";
import React from "react";
import { FaDollarSign } from "react-icons/fa";

const MonthlyEarning = ({ percentage, monthlyEarning }) => {
  return (
    <>
      <Card className="bg-transparent">
        <div className="flex justify-between">
          <div className="mt-2">
            <h2 className="font-semibold text-xl">Monthly Earnings</h2>
            <h2 className="font-bold text-2xl mb-2 mt-3">${monthlyEarning}</h2>
            <p>{percentage}% last year</p>
          </div>
          <div>
            <FaDollarSign
              size={40}
              className="bg-blue-800 text-white p-2 rounded-full"
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default MonthlyEarning;
