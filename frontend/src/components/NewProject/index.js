import React, { useContext, useEffect, useState } from "react";
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

// app contatns
import { LOCATIONS, TEMP_TOPICS } from "../../utils/APP_CONSTANTS";

// contexts
import { AddNewProjectProposal } from "../../contexts/InactiveProjectContext";

//components
import ProjectOption from "./Option";
import InternshipOption from "./InternshipOption";
import MultipleSelectWithLimit from "../SharedComponents/MultipleSelectWithLimit";
import { useDispatch, useSelector } from "react-redux";
import { addNewProject } from "../../redux/clientRedux/actions";
import { useHistory } from "react-router-dom";

const NewProject = () => {
  //console.log(projects);
  const { user, isLoading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(user);

  const handleFinish = (values) => {
    const { _id, username } = user;
    const newPayload = { ...values, status: "pending", eoi: 0, group: "N/A" };
    const payload = [...user.projects, newPayload];
    console.log(payload)
    dispatch(addNewProject(_id, payload, username, "client"));
  };

  const handleCancel = () => {
    console.log("cancelled");
  };

  return (
    <div style={{ height: "80vh" }}>
      <Form
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="vertical"
        labelAlign='left'
        onFinish={handleFinish}
      >
        <h1>New Project Proposal</h1>
        <Row style={{ fontWeight: "bold" }}>
          <Col span={12}>
            <Form.Item label="Project Title" name="title" >
              <Input />
            </Form.Item>
            <Form.Item
              label="Background and Rationale for Project"
              name="background"
            >
              <Input.TextArea rows={10} />
            </Form.Item>
            <Form.Item label="Project Resources" name="resources">
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Project Topics" name="topics">
              <MultipleSelectWithLimit max={3} options={TEMP_TOPICS} />
            </Form.Item>
            <Form.Item label="Project Goals and Objectives" name="objectives">
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Other Related Information" name="other">
              <Input.TextArea rows={4} />
            </Form.Item>
            {/* <Form.Item label="Is this an open project?" name="assigned">
              <ProjectOption />
            </Form.Item> */}
            <Form.Item label="Preferred location" name="location">
              <Select options={LOCATIONS} id="location" />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button
                  type
                  danger //onClick={handleCancel}
                >
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
    </div>
  );
};

export default NewProject;
