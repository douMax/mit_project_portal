import React, { useImperativeHandle } from "react";

import {
  Form,
  Select,
  Input,
  Row,
  Col,
  InputNumber,
  Button,
  Space,
} from "antd";
import { LOCATIONS } from "../../utils/APP_CONSTANTS";

import ProjectOption from "./Option";

import { TEMP_TOPICS } from "../../utils/APP_CONSTANTS";
import MultipleSelectWithLimit from "../SharedComponents/MultipleSelectWithLimit";

const NewProject = () => {
  const handleFinish = (values) => {
    console.log(values);
  };
  const handleCancel = () => {
    console.log("Cancelled");
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
      <h1>New Project Proposal</h1>
      <Row>
        <Col span={12}>
          <Form.Item label="Project Title" name="projectTitle">
            <Input />
          </Form.Item>
          <Form.Item
            label="Background and Rational for Project:"
            name="informationForProject"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Project Resources" name="projectResources">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Project Topics" name="projectTopics">
            <MultipleSelectWithLimit max={3} options={TEMP_TOPICS} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Project Goals and Objects:" name="projectGoals">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Other related information:"
            name="otherRelatedInformation"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Is this an open project?"></Form.Item>
          <Form.Item>
            <ProjectOption />
          </Form.Item>
          <Form.Item label="Preferred location">
            <Select options={LOCATIONS} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type danger onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="danger" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default NewProject;
