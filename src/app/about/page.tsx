//@ts-nocheck
"use client";
import SearchBar from "@/components/Search/SearchBar";
import Btn from "@/components/button/Btn";
import SelectField from "@/components/selectField/SelectField";
import Tester from "@/components/test/Tester";

import { Space, Table } from "antd";
import React from "react";

const page = () => {
  const onGenderChange = (value: string) => {};
  const data = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  // options
  const gender = ["male", "female", "other"];
  return (
    <div className=" h-screen">
      <Space direction="vertical">
        <Btn type="default" htmlType="submit" name="sign up" />
        <SearchBar placeholder="Search text" />
        <SelectField
          name="city"
          label="City"
          required={true}
          placeholder="Select a option"
          onChange={onGenderChange}
          options={gender}
        />
      </Space>
      <div>
        <Table dataSource={data} columns={columns}></Table>
      </div>
      <div>
        <Tester />
      </div>
    </div>
  );
};

export default page;
