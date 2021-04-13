import React from "react";

import { Form, Select, Button, Col, Row } from "antd";
import CommonFields from "./CommonFields";
import ProfilePicUploader from "./ProfilePicUploader";
import MultipleSelectWithLimit from "../SharedComponents/MultipleSelectWithLimit";
import { STAFF_JOB_POSITIONS, TEMP_TOPICS } from "../../utils/APP_CONSTANTS";

const StaffSignUp = () => {
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
          <Form.Item label="Job Position" name="jobPosition">
            <Select options={STAFF_JOB_POSITIONS}></Select>
          </Form.Item>
          <Form.Item label="Interested Topics" name="interestedTopics">
            <MultipleSelectWithLimit max={3} options={TEMP_TOPICS} />
          </Form.Item>
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

export default StaffSignUp;
