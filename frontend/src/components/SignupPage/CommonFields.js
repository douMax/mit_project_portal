import React from "react";
import ProfilePicUpload from "./ProfilePicUpload";

import {
  Form,
  Input,
  Button,
  Radio,
  Space,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

const CommonFields = () => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 9,
      }}
      layout="horizontal"
    >
      <Form.Item label="Title">
        <Select>
          <Select.Option value="Miss">Miss</Select.Option>
          <Select.Option value="Mr">Mr</Select.Option>
          <Select.Option value="Mrs">Mrs</Select.Option>
          <Select.Option value="Dr">Dr</Select.Option>
          <Select.Option value="Prof">Prof</Select.Option>
          <Select.Option value="A.Prof">A.Prof</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="First Name">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name">
        <Input />
      </Form.Item>
      <Form.Item label="User Name">
        <Input />
      </Form.Item>
      <ProfilePicUpload />
      <Form.Item label="MIT Email Address">
        <Input />
      </Form.Item>
      <Form.Item label="Personal Email Address">
        <Input />
      </Form.Item>
      <Form.Item label="Mobile Phone Number">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default CommonFields;
