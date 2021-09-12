import React, { useEffect, useState } from "react";

import { Form, Select, Input, Button, Col, Row } from "antd";
import CommonFields from "./CommonFields";
import ProfilePicUploader from "./ProfilePicUploader";
import MultipleSelectWithLimit from "../SharedComponents/MultipleSelectWithLimit";
import { STAFF_JOB_POSITIONS, TEMP_TOPICS } from "../../utils/APP_CONSTANTS";
import { NAME_TITLES } from "../../utils/APP_CONSTANTS";
import { registerUser, signupUser } from "../../redux/authRedux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const StaffSignUp = () => {

  const dispatch = useDispatch();
  const { auth_user, is_registration } = useSelector(state => state.auth);
  const { _id } = auth_user;
  const history = useHistory();
  const [isRegister, setIsRegister] = useState(false);

  const handleFinish = async (payload) => {
    console.log(payload);
    const { username, password } = payload;

    await dispatch(registerUser({ username, role: "staff", is_first_time_visited: false, password: password }));
    await dispatch(signupUser(payload, "staff"));
    await setIsRegister(true);

  };

  useEffect(() => {
    if (isRegister) {
      var timer = setTimeout(() => {
        history.push("/");
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    }
  }, [isRegister])

  return (
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onFinish={handleFinish}
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="Title">
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
          <Form.Item label="Job Position" name="position"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <Select options={STAFF_JOB_POSITIONS} />
          </Form.Item>
          <Form.Item label="MIT Email Address" name="email"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Create your own password" name="password"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <Input.Password />
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
          <Form.Item label="Interested Topics" name="topics"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <MultipleSelectWithLimit max={3} options={TEMP_TOPICS} />
          </Form.Item>
        </Col>
        {/* <Col span={12}>
          <Form.Item name="profilePic">
            <ProfilePicUploader />
          </Form.Item>
        </Col> */}
      </Row>
      <Form.Item wrapperCol={{ offset: 5, span: 7 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StaffSignUp;
