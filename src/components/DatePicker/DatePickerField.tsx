import React, { FC } from "react";
import { DatePicker, Form } from "antd";

interface Props {
  name: string;
  label: string;
  required: boolean;
}

const DatePickerField: FC<Props> = ({ name, label, required }) => {
  return (
    <Form.Item name={name} label={label} rules={[{ required: required }]}>
      <DatePicker className="w-[210px]" />
    </Form.Item>
  );
};

export default DatePickerField;
