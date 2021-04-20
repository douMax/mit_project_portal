import React from "react";
import {Form, Select, Input, Row, Col, InputNumber, Button } from "antd";
import ProjectOption from "./Option";
import { Location_Preferred } from "../../utils/APP_CONSTANTS";

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
            <Input />
          </Form.Item>
          <Form.Item label="Project Resources">
            <Input />
          </Form.Item>
          <Form.Item label="Project Topics">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Project Goals and Objects:">
            <Input />
          </Form.Item>
          <Form.Item label="Other related information:">
            <Input />
          </Form.Item>

         <Form.Item label="Is this an open project">
             <ProjectOption />
             <Form.Item />
          <Form.Item label="Preferred location">
          <Select options ={Location_Preferred} />    
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};


export default NewProject