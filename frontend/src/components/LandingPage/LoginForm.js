import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { CLIENT } from "../../utils/APP_CONSTANTS";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authRedux/actions";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {

  const { auth_user, is_auth, is_error } = useSelector(state => state.auth);
  const { is_first_time_visited, _id, username } = auth_user;

  const dispatch = useDispatch();
  const history = useHistory();

  // console.log(is_error, "error")
  const onFinish = ({ username, password }) => {
    // send the request to backend
    const payload = {
      username,
      password,
      role: props.userType
    };
    dispatch(loginUser(payload));
  };

  useEffect(() => {
    if (is_auth) {
      console.log(is_first_time_visited)
      if (props.userType === "student") {
        if (!is_first_time_visited) {
          history.push("/dashboard/student-dashboard");
        }
        else history.push("/student-signup");
      }
      if (props.userType === "staff") {
        if (!is_first_time_visited) {
          history.push("/dashboard/staff-supervisor-dashboard");
        }
        else history.push("/staff-signup");
      }
      if (props.userType === "client") {
        if (is_first_time_visited) {
          history.push("/dashboard/client-dashboard");
        }
      }
    }

  }, [is_auth, is_first_time_visited, history]);


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
        {is_error && (<div style={{ color: "#dd042a", fontSize: "18px", margin: "5px" }}>{`Invalid credentials for MIT ${props.userType} user !`}</div>)}
      </Form>
      {props.userType === CLIENT && (
        <Button type="default" onClick={event => {
          history.push("/client-signup")
        }}>Register</Button>
      )}
    </div>
  );
};

export default LoginForm;
