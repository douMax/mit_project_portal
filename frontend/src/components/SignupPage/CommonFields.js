import React from "react";
import { Form, Input, Select } from "antd";
import { NAME_TITLES } from "../../utils/APP_CONSTANTS";

const CommonFields = () => {
  return (
    <>
      <Form.Item label="Title" name="Title">
        <Select options={NAME_TITLES} />
      </Form.Item>
      <Form.Item label="First Name" name="first_name">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name="last_name">
        <Input />
      </Form.Item>
      <Form.Item label="User Name" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="MIT Student Id" name="mit_student_id">
        <Input />
      </Form.Item>
      <Form.Item label="MIT Email Address" name="mit_email">
        <Input />
      </Form.Item>
      <Form.Item label="Personal Email Address" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Mobile Phone Number" name="phone">
        <Input />
      </Form.Item>
    </>
  );
};
export default CommonFields;
