//@ts-nocheck
"use client";
import React from "react";
import type { DatePickerProps } from "antd";
import { Card, DatePicker } from "antd";
import LineChart from "../../../public/images/line graph.png";
import Btn from "../button/Btn";
import Image from "next/image";

const GraphCard = ({ totalEarning, earningThisMonth, expenseThisMonth }) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Card className="w-[900px]">
      <div className="">
        <div className="flex justify-between">
          <div>
            <h2 className="font-semibold text-xl">Revenue Updates</h2>
            <p className="text-slate-500">Overview of Profit</p>
          </div>
          <div>
            <DatePicker onChange={onChange} />
          </div>
        </div>
        <div className="flex space-x-[10.5rem]">
          <Image
            src={LineChart}
            alt="Pie chart image"
            height={500}
            width={500}
          />

          <div className="flex flex-col space-y-9 mt-6">
            <div className="flex   ">
              <div className="me-11"></div>
              <div>
                <h2 className="font-bold text-2xl">${totalEarning}</h2>
                <p className="text-slate-500">Total Earnings</p>
              </div>
            </div>
            <div className="flex space-x-7 ">
              <div className="w-4 h-4 rounded-full bg-blue-500 my-auto" />

              <div>
                <p className="text-slate-500">Earning This month</p>
                <h2 className="font-bold text-2xl">${earningThisMonth}</h2>
              </div>
            </div>
            <div className="flex  space-x-7 ">
              <div className="w-4 h-4 rounded-full bg-blue-500 my-auto" />
              <div>
                <p className="text-slate-500">Expense This month</p>
                <h2 className="font-bold text-2xl">${expenseThisMonth}</h2>
              </div>
            </div>
            <Btn
              type="primary"
              htmlType="submit"
              name="View Full Report"
              buttonStyleClass=" ms-9 px-6"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GraphCard;
