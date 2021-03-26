import React, { useState } from 'react';
import StudentSignUp from './StudentSignUp';
import StaffSignUp from './StaffSignUp';
import ProfilePicUpload from './ProfilePicUpload';
import Header from '../Header';

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
} from 'antd';

let isStudent = false;

const SignUp = () => {

    const tailLayout = {
        wrapperCol: {
          offset: 10,
          span: 16
        },
      };

    return (
    <div>
      <Header />
        <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 9,
        }}
        layout="horizontal"
        >
        {isStudent ? <div className="page-title">Student Sign Up</div> : <div className="page-title">Staff Sign Up</div>}  
        
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