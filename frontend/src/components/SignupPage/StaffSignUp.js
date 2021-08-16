import React, { useEffect, useState } from "react";

import { Form, Select, Input, Button, Col, Row } from "antd";
import CommonFields from "./CommonFields";
import ProfilePicUploader from "./ProfilePicUploader";
import MultipleSelectWithLimit from "../SharedComponents/MultipleSelectWithLimit";
import { STAFF_JOB_POSITIONS, TEMP_TOPICS } from "../../utils/APP_CONSTANTS";
import { NAME_TITLES } from "../../utils/APP_CONSTANTS";
import { signupUser, updateUser } from "../../redux/authRedux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const StaffSignUp = () => {

  const dispatch = useDispatch();
  const { auth_user, is_registration } = useSelector(state => state.auth);
  const { _id } = auth_user;
  const history = useHistory();
  const [isRegister, setIsRegister] = useState(false);

  const handleFinish = (payload) => {
    console.log(payload);

    dispatch(updateUser({ is_first_time_visited: false }, _id));
    dispatch(signupUser(payload, "staff"));
    setIsRegister(true);

  };

  useEffect(() => {
    if (isRegister) {
      var timer = setTimeout(() => {
        history.push("/dashboard/staff-supervisor-dashboard");
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
          <Form.Item label="First Name" name="first_name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="last_name">
            <Input />
          </Form.Item>
          <Form.Item label="User Name" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Job Position" name="staff_position">
            <Select options={STAFF_JOB_POSITIONS} />
          </Form.Item>
          <Form.Item label="MIT Email Address" name="mit_email">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile Phone Number" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Interested Topics" name="topics">
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
