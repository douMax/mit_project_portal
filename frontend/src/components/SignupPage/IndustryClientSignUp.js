import React from "react";
import { Form, Input, Col, Row, Button, Space } from "antd";
import ProfilePicuploader from "./ProfilePicUploader";

const IndustryClientSignUp = () => {
  const handleFinish = (values) => {
    console.log(values);
  };

  const handleCancel = () => {
    console.log("Canceled");
  };

  const handleNewProjectClick = () => {
    // click logic here
    console.log("New project clicked");
  };

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
          <Form.Item label="Company Name" name="companyName">
            <Input />
          </Form.Item>
          <Form.Item label="Company Profile" name="companyProfile">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Website" name="Website">
            <Input />
          </Form.Item>
          <h2> Contact Details </h2>
          <Form.Item label="First Name" name="firstName">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input />
          </Form.Item>
          <Form.Item label="Work Email" name="workEmail">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile Phone Number" name="mobilePhoneNumber">
            <Input />
          </Form.Item>
          <Form.Item label="Office Phone Number" name="officePhoneNumber">
            <Input />
          </Form.Item>
          <Form.Item label="Job Position" name="jobPosition">
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

        <Col span={12} style={{ paddingTop: "40px" }}>
          <Form.Item name="Upload">
            <ProfilePicuploader />
          </Form.Item>
          <Button type danger onClick={handleNewProjectClick}>
            + Add Project Proposals
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default IndustryClientSignUp;
