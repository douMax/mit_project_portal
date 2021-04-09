import React from "react";

import { Form, Select, Button, Col, Row } from "antd";
import CommonFields from "./CommonFields";
import ProfilePicUploader from "./ProfilePicUploader";

const StudentSignUp = () => {
  const handleFinish = values => {
    console.log(values);
  };

  return (
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onFinish={handleFinish}
    >
      <Row gutter={24}>
        <Col span={12}>
          <CommonFields />
        </Col>
        <Col span={12}>
          <Form.Item name="profilePic">
            <ProfilePicUploader />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item wrapperCol={{ offset: 5, span: 7 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudentSignUp;
