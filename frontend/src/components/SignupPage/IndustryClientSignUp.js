import React from "react";
import { Form, Input, Col, Row, Button, Space } from "antd";
import ProfilePicuploader from "./ProfilePicUploader";

const IndustryClientSignUp = () => {
  const handleFinish = (values) => {
    console.log(values);
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
      onfinish={handleFinish}
    >
      <Row gutter={64}>
        <Col span={12}>
          <h2>Company Details </h2>
          <Form.Item label="Company Name">
            <Input />
          </Form.Item>
          <Form.Item label="Company Profile">
            <Input />
          </Form.Item>
          <Form.Item label="Website">
            <Input />
          </Form.Item>
          <h2> Contact Details </h2>
          <Form.Item label="First Name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item label="Work Email">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile Phone Number">
            <Input />
          </Form.Item>
          <Form.Item label="Office Phone Number">
            <Input />
          </Form.Item>
          <Form.Item label="Job Position">
            <Input />
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button danger htmlType="Cancel">
              <Space>Cancel</Space>
            </Button>
            <Button type="danger" htmlType="Submit">
              Submit
            </Button>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="Upload">
            <ProfilePicuploader />
          </Form.Item>
          <Button type danger>
            + Add Project Proposals
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default IndustryClientSignUp;
