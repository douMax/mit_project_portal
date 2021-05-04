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
import { ProjectContext } from "../../contexts/ProjectContext";
import { UserContext } from "../../contexts/UserContext";

import ProjectOption from "./Option";

import { TEMP_TOPICS } from "../../utils/APP_CONSTANTS";
import MultipleSelectWithLimit from "../SharedComponents/MultipleSelectWithLimit";

const NewProject = () => {
  const [projects, setProject] = useContext(ProjectContext);
  const [user] = useContext(UserContext);
  //console.log(projects);
  const newProject = () => {
    const client = user.userName;
    const projTitle = document.getElementById("projTitle").value;
    const projBack = document.getElementById("projBack").value;
    const projResc = document.getElementById("projResc").value;
    const projTopics = document.getElementById("projTopics").value;
    const projGoals = document.getElementById("projGoals").value;
    const projRelInfo = document.getElementById("projRelInfo").value;
    const projOpen = document.getElementById("projOpen").value;
    const projLocation = document.getElementById("projLocation").value;
    const projId = (projects.length + 1).toString();
    const year = new Date().getFullYear();
    const newProject = {
      projId: projId,
      title: projTitle,
      topic: projTopics,
      description: projRelInfo,
      status: "New",
      year: year,
      trimester: "1",
      assigned_students: 0,
      eoi: 0,
      client: client,
      logo: "",
      background_rationale: projBack,
      resources: projResc,
      goals_objectives: projGoals,
      isOpen: projOpen,
      location: projLocation,
    };
    setProject((prevProjects) => [...prevProjects, newProject]);
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
            <Select options={LOCATIONS} id="projLocation" />
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
      <Button type="primary" danger onClick={newProject}>
        Submit
      </Button>
    </Form>
  );
};

export default NewProject;
