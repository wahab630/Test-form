//@ts-nocheck
"use client";

import CombineDashboard from "@/pages/combineDashboard/CombineDashboard";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex">
        <div className="pe-20">SideBar</div>
        <div className="flex-1  ">
          <CombineDashboard />
        </div>
      </div>
    </>
  );
};

export default page;
