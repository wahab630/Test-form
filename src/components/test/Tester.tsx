//@ts-nocheck
import { Button, Form, Upload, message } from "antd";
import React from "react";

const Tester = () => {
  const onFinish = (values) => {
    console.log({ values });
    setTimeout(()=>{
      message.success("Login Success Full")
    },1000)
  };
  return (
    <div className="max-w-[350px] mx-auto">
      <Form onFinish={onFinish} requiredMark="optional">
        <Form.Item
          label="Profile Picture"
          name={"profilePicture"}
          rules={[
            {
              required: true,
              message: "please upload your profile",
            },
          ]}
        >
          <Upload>
            <Button>upload picture</Button>
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Tester;
