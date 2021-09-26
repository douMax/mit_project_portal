import React from "react";
import { Form, Input, Select } from "antd";
import { NAME_TITLES } from "../../utils/APP_CONSTANTS";

const CommonFields = () => {
  return (
    <>
      <Form.Item label="Title" name="Title">
        <Select options={NAME_TITLES} />
      </Form.Item>
      <Form.Item label="First Name" name="first_name"
        rules={[
          {
            required: true,
            message: "Field Required",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name="last_name"
        rules={[
          {
            required: true,
            message: "Field Required",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="User Name" name="username"
        rules={[
          {
            required: true,
            message: "Field Required",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Create a password" name="password"
        rules={[
          {
            required: true,
            message: "Field Required",
          },
        ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="MIT Student Id" name="mit_student_id"
        rules={[
          {
            required: true,
            message: "Field Required",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="MIT Email Address" name="mit_email"
        rules={[
          {
            required: true,
            message: "Field Required",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Personal Email Address" name="email"
        rules={[
          {
            required: true,
            message: "Field Required",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Mobile Phone Number" name="phone"
        rules={[
          {
            required: true,
            message: "Field Required",
          },
        ]}>
        <Input />
      </Form.Item>
    </>
  );
};
export default CommonFields;
