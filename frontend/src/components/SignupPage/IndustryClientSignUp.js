import React, { useEffect, useState } from "react";
import { Form, Input, Col, Row, Button, Space } from "antd";
import ProfilePicuploader from "./ProfilePicUploader";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser, signupUser } from "../../redux/authRedux/actions";

const IndustryClientSignUp = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [isRegister, setIsRegister] = useState(false);

  const handleFinish = (payload) => {
    const { email } = payload;
    console.log(payload);
    const userPayload = { ...payload, username: email };
    dispatch(registerUser({ username: email, role: "client", is_first_time_visited: false }));
    dispatch(signupUser(userPayload, "client"));
    setIsRegister(true);
  };

  const handleCancel = () => {
    console.log("Canceled");
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

  // const handleNewProjectClick = () => {
  //   // click logic here
  //   console.log("New project clicked");
  // };

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
          <Form.Item label="Company Name" name="company_name">
            <Input />
          </Form.Item>
          <Form.Item label="Company Profile" name="company_profile">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Website" name="website">
            <Input />
          </Form.Item>
          <h2> Contact Details </h2>
          <Form.Item label="First Name" name="first_name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="last_name">
            <Input />
          </Form.Item>
          <Form.Item label="Work Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile Phone Number" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Office Phone Number" name="office_phone">
            <Input />
          </Form.Item>
          <Form.Item label="Job Position" name="job_position">
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
