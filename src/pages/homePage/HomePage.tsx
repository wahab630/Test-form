//@ts-nocheck
"use client";
import React from "react";
import { Col, Form, Row, Typography } from "antd";
import InputField from "@/components/inputField/InputField";
import SelectField from "@/components/selectField/SelectField";
import DatePickerField from "@/components/DatePicker/DatePickerField";
import UploadField from "@/components/upload/UploadComp";
import Btn from "@/components/button/Btn";

const HomePage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
        form.setFieldsValue({ note: "Hi there!" });
        break;
    }
  };

  // options
  const gender = ["male", "female", "other"];
  const nationality = ["Malaysia", "Indonesia", "Vietnam", "Thailand"];
  const religion = ["Islam", "christianity", "hindu", "Jewish"];

  return (
    <div className="flex items-center justify-center p-20">
      <Form
        requiredMark={false}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        layout="vertical"
        className="border border-[#E7E1E1]   p-5 rounded-3xl shadow-md"
      >
        <div className="flex space-x-20 justify-center items-center flex-col">
          <div>
            <Typography.Title level={3} className="text-center">
              Passport Entry Form
            </Typography.Title>
            <Row gutter={[16, 16]}>
              <Col xl={8} lg={12} md={24} sm={24} xs={24}>
                <InputField
                  fieldName="passport"
                  label="Passport"
                  type="password"
                  placeholder="Enter Passport Number"
                  required={true}
                />
                <InputField
                  fieldName="givenname"
                  label="Given Name"
                  type="text"
                  placeholder="Enter Given Name"
                  required={true}
                />
                <InputField
                  fieldName="cnic"
                  label="Cnic"
                  type="text"
                  placeholder="Enter Cnic"
                  required={true}
                />
                <SelectField
                  name="city"
                  label="City"
                  required={true}
                  placeholder="Select a option"
                  onChange={onGenderChange}
                  options={gender}
                />
                <DatePickerField
                  name="Date of Insurance"
                  label="Date of Insurance"
                  required={true}
                />
                <InputField
                  fieldName="tracking number"
                  label="Tracking Number"
                  type="text"
                  placeholder="Enter Tracking Number"
                  required={true}
                />
              </Col>
              <Col xl={8} lg={12} md={24} sm={24} xs={24}>
                <SelectField
                  name="nationality"
                  label="Nationality"
                  required={true}
                  placeholder="Select a option"
                  onChange={onGenderChange}
                  options={nationality}
                />
                <DatePickerField
                  name="Date of Birth"
                  label="Date of Birth"
                  required={true}
                />
                <SelectField
                  name="religion"
                  label="Religion"
                  required={true}
                  placeholder="Select a option"
                  onChange={onGenderChange}
                  options={religion}
                />
                <SelectField
                  name="country"
                  label="Country"
                  required={true}
                  placeholder="Select a option"
                  onChange={onGenderChange}
                  options={nationality}
                />
                <DatePickerField
                  name="Date of Expiry"
                  label="Date of Expiry"
                  required={true}
                />
                <InputField
                  fieldName="booklet number"
                  label="Booklet Number"
                  type="text"
                  placeholder="Enter Booklet Number"
                  required={true}
                />
              </Col>
              <Col xl={8} lg={12} md={24} sm={24} xs={24}>
                <InputField
                  fieldName="surname"
                  label="SurName"
                  type="text"
                  placeholder="Enter SurName"
                  required={true}
                />
                <InputField
                  fieldName="place of birth"
                  label="Place of Birth"
                  type="text"
                  placeholder="Enter Place of Birth"
                  required={true}
                />
                <SelectField
                  name="Gender"
                  label="Gender"
                  required={true}
                  placeholder="Select a option"
                  onChange={onGenderChange}
                  options={gender}
                />
                <InputField
                  fieldName="father name"
                  label="Father Name"
                  type="text"
                  placeholder="Enter Father Name"
                  required={true}
                />
                <InputField
                  fieldName="issuing authority"
                  label="Issuing Authority"
                  type="text"
                  placeholder="Enter Issuing Authority"
                  required={true}
                />
                {/* <Form.Item
                  name="upload"
                  label="Person Image"
                  rules={[{ required: true }]}
                >
                  <UploadField />
                 </Form.Item> */}
              </Col>
            </Row>
          </div>
          <Btn type="default" htmlType="submit" name="sign up" />
        </div>
      </Form>
    </div>
  );
};

export default HomePage;
{
  /* <section className="w-[100%] h-[100vh]  "> Practice ha
        <main className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
          <header className="max-w-[1170px] mx-auto">
            <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] ">
              <figure>
                <Image src={logo} alt="Logo" width={200} height={200} />
              </figure>
              <div>
                <Input placeholder="Basic usage" type="password" maxLength={12} allowClear />
              </div>
            </div>
          </header>
        </main>
      </section> */
}
