import React, { useImperativeHandle, useContext } from "react";
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
import { ProjectContext } from "../../contexts/ProjectContext";
import { UserContext } from "../../contexts/UserContext";
import { AddNewProjectProposal } from "../../contexts/InactiveProjectContext";

//components
import ProjectOption from "./Option";
import InternshipOption from "./InternshipOption";
import MultipleSelectWithLimit from "../SharedComponents/MultipleSelectWithLimit";

const NewProject = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const [user] = useContext(UserContext);
  //console.log(projects);

  const handleFinish = (values) => {
    //Convert to Boolean using JSON.parse to match Boolean field in database.
    let isInternshipValue = JSON.parse(localStorage.getItem("isInternship"));
    values.topics = ["60149ed90d34d7302c045317"];
    values.isInternship = isInternshipValue;
    values.eoisReceived = [];
    values.status = "wfa";
    values.termInfo = "";
    values.yearInfo = new Date().getFullYear().toString();
    values.clientId = user.userId;
    localStorage.removeItem("isInternship"); //Remove the item from local storage since we don't need it anymore.

    AddNewProjectProposal(values);
    // const projId = (projects.length + 1).toString();
    // const newProject = { ...values, projId };
    // setProjects([...projects, newProject]);
    // send POST request with new project data to backend
  };

  const handleCancel = () => {
    console.log("cancelled");
  };

  return (
    <Form
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="vertical"
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
            name="background"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Abstract:" name="abstract">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Project Topics" name="topics">
            <MultipleSelectWithLimit max={3} options={TEMP_TOPICS} />
          </Form.Item>
          <Form.Item label="Is this project an internship?" name="isInternship">
            <InternshipOption />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Project Goals and Objectives:" name="objectives">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Project Resources" name="resources">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Is this an open project?">
            <ProjectOption />
          </Form.Item>
          <Form.Item label="Preferred location">
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
  );
};

export default NewProject;
