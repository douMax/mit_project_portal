import React from "react";
import { Form, Select, Input, Row, Col, InputNumber, Button } from "antd";
import { LOCATIONS } from "../../utils/APP_CONSTANTS";

const NewProject = () => {
  return (
    <Form>
      <h1>New Project Proposal</h1>
      <Row>
        <Col span={12}>
          <Form.Item label="Project Title">
            <Input />
          </Form.Item>
          <Form.Item label="Background and Rational for Project:">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Project Resources">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Project Topics">
            <Input.TextArea />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Project Goals and Objects:">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Other related information:">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Is this projet open to everyone?">
            <Input />
          </Form.Item>
          <Form.Item label="Preferred location">
            <Select options={LOCATIONS} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default NewProject;
