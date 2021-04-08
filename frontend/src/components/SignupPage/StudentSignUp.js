import React from "react";

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

const StudentSignUp = () => {
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
      <Form.Item label="MIT Student ID">
        <Input />
      </Form.Item>
      <Form.Item label="Course Enrolment">
        <Radio.Group>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Capstone Projects Enrolment">
        <Radio.Group>
          <Radio value={3}>Yes</Radio>
          <Radio value={4}>No</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default StudentSignUp;
