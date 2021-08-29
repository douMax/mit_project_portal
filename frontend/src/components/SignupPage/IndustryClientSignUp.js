import React, { useEffect, useState } from "react";
import { Form, Input, Col, Row, Button, Space } from "antd";
import ProfilePicuploader from "./ProfilePicUploader";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, signupUser } from "../../redux/authRedux/actions";

const IndustryClientSignUp = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [isRegister, setIsRegister] = useState(false);

  const handleFinish = async (payload) => {

    const { email, password } = payload;
    const userPayload = await Object.fromEntries(Object.entries(payload).filter(([key, value]) => key !== "password"));
    console.log(userPayload)
    await dispatch(registerUser({ username: email, role: "client", is_first_time_visited: false, password: password }));
    await dispatch(signupUser({ ...userPayload, username: email }, "client"));
    await setIsRegister(true);

  };

  const handleCancel = () => {
    history.push("/")
  };

  useEffect(() => {
    if (isRegister) {
      var timer = setTimeout(() => {
        history.push("/my-projects");
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    }
  }, [isRegister]);

  return (
    <Form
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      onFinish={handleFinish}
    >
      <Row gutter={64}>
        <Col span={12}>
          <h2>Company Details </h2>
          <Form.Item label="Company Name" name="company_name"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Company Profile" name="company_profile"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Website" name="website"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <Input />
          </Form.Item>
          <h2> Contact Details </h2>
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
          <Form.Item label="Work Email" name="email"
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
          <Form.Item label="Office Phone Number" name="office_phone"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Job Position" name="job_position"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Space>
              <Button danger onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="danger" htmlType="Submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Col>

        {/* <Col span={12} style={{ paddingTop: "40px" }}>
          <Form.Item name="Upload">
            <ProfilePicuploader />
          </Form.Item>
          <Button type danger onClick={handleNewProjectClick}>
            + Add Project Proposals
          </Button>
        </Col> */}
      </Row>
    </Form>
  );
};
export default IndustryClientSignUp;
