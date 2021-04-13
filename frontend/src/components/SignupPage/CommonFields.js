import React from "react";
import { Form, Input, Select } from "antd";
import { NAME_TITLES } from "../../utils/APP_CONSTANTS";

const CommonFields = () => {
  return (
    <>
      <Form.Item label="Title" name="nameTitle">
        <Select options={NAME_TITLES}></Select>
      </Form.Item>
      <Form.Item label="First Name" name="firstName">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name="lastName">
        <Input />
      </Form.Item>
      <Form.Item label="User Name" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="MIT Email Address" name="mitEmail">
        <Input />
      </Form.Item>
      <Form.Item label="Personal Email Address" name="personalEmail">
        <Input />
      </Form.Item>
      <Form.Item label="Mobile Phone Number" name="phoneNumber">
        <Input />
      </Form.Item>
    </>
  );
};
export default CommonFields;
