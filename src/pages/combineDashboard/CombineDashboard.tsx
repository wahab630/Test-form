//@ts-nocheck
"use client";
import React from "react";
import CardBox from "@/components/Card/CardBox";
import GraphCard from "@/components/graphCard/GraphCard";
import MonthlyEarning from "@/components/monthlyEarning/MonthlyEarning";
import PieCard from "@/components/pieCard/PieCard";

const CombineDashboard = () => {
  return (
    <div className=" bg-blue-100 ps-10 pb-20">
      <div className="flex mb-10 pt-10 space-x-8">
        <CardBox title="Today PassPorts" value="50" />
        <CardBox title="Today PassPorts" value="50" />
        <CardBox title="Today PassPorts" value="50" />
        <CardBox title="Today PassPorts" value="50" />
      </div>
      <div className="flex space-x-10">
        <div>
          <GraphCard
            totalEarning="63,489.50"
            earningThisMonth="23,3434"
            expenseThisMonth="43,353"
          />
        </div>
        <div className="space-y-10">
          <div>
            <PieCard
              yearlyBreakup="36,358"
              yearOne={"2024"}
              yearTwo={"2024"}
              percentage="8"
            />
          </div>

          <div>
            <MonthlyEarning monthlyEarning="6,820" percentage="8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombineDashboard;
