//@ts-nocheck
import React from "react";
import { Button, Form } from "antd";

const Btn: React.FC = ({ name, type, htmlType, buttonStyleClass }) => (
  <Form.Item>
    <Button type={type} htmlType={htmlType} className={buttonStyleClass} >
      {name}
    </Button>
  </Form.Item>
);

export default Btn;
