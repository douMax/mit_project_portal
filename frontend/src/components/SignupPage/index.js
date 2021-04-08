import React, { useState } from "react";
import StudentSignUp from "./StudentSignUp";
import StaffSignUp from "./StaffSignUp";
import CommonFields from "./CommonFields";

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

let isStudent = false;

const SignUp = () => {
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 16,
    },
  };

  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 9,
        }}
        layout="horizontal"
      >
        {isStudent ? (
          <div className="page-title">Student Sign Up</div>
        ) : (
          <div className="page-title">Staff Sign Up</div>
        )}

        <CommonFields />
        {isStudent ? <StudentSignUp /> : <StaffSignUp />}
        <Form.Item {...tailLayout}>
          <Space>
            <Button danger htmlType="button">
              Cancel
            </Button>
            <Button type="danger" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
