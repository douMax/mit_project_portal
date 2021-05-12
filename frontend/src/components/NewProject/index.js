import React, { useContext } from "react";
import { Form, Select, Input, Row, Col, InputNumber, Button } from "antd";
import { LOCATIONS } from "../../utils/APP_CONSTANTS";
import { ProjectContext } from "../../contexts/ProjectContext";
import { UserContext } from "../../contexts/UserContext";

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
    <Form>
      <h1>New Project Proposal</h1>
      <Row>
        <Col span={12}>
          <Form.Item label="Project Title">
            <Input id="projTitle" />
          </Form.Item>
          <Form.Item label="Background and Rational for Project:">
            <Input.TextArea id="projBack" />
          </Form.Item>
          <Form.Item label="Project Resources">
            <Input.TextArea id="projResc" />
          </Form.Item>
          <Form.Item label="Project Topics">
            <Input.TextArea id="projTopics" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Project Goals and Objects:">
            <Input.TextArea id="projGoals" />
          </Form.Item>
          <Form.Item label="Other related information:">
            <Input.TextArea id="projRelInfo" />
          </Form.Item>
          <Form.Item label="Is this projet open to everyone?">
            <Input id="projOpen" />
          </Form.Item>
          <Form.Item label="Preferred location">
            <Select options={LOCATIONS} id="projLocation" />
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
