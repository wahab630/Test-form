//@ts-ignore
//@ts-nocheck
import { Form, Input } from "antd";
import React from "react";

const InputField = ({ placeholder, type, fieldName, label ,required}) => {
  return (
    <Form.Item
      name={fieldName}
      label={label}
      rules={[
        { required: required, message: `${label} is required` },
        {
          type: type,
        },
      ]}
      colon={false}
    >
      <Input placeholder={placeholder} type={type} />
    </Form.Item>
  );
};

export default InputField;
