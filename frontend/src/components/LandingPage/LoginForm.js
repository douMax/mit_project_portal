import React from "react";
import { Form, Input, Button } from "antd";
import { INDUSTRY_CLIENT } from "../../utils/APP_CONSTANTS";

const LoginForm = props => {
  const onFinish = values => {
    // send the request to backend
    console.log(values);
  };
  return (
    <div>
      <h3>Login as {props.userType}</h3>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="danger" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      {props.userType === INDUSTRY_CLIENT && (
        <Button type="default">Register</Button>
      )}
    </div>
  );
};

export default LoginForm;
