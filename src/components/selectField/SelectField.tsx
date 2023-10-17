import React, { FC } from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

interface Props {
  name: string;
  label: string;
  required: boolean;
  placeholder: string;
  onChange: (value: string) => void; // Correct the type of the argument here
  options: string[];
}

const SelectField: FC<Props> = ({ name, label, required, placeholder, onChange, options }) => {
  return (
    <Form.Item name={name} label={label} rules={[{ required: required }]}>
      <Select placeholder={placeholder} onChange={onChange} allowClear className='w-[210px]'>
        {options.map((item, index) => (
          <Option key={index} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectField;
