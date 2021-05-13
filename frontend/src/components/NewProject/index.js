import React, { useContext } from "react";
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

//components
import ProjectOption from "./Option";
import MultipleSelectWithLimit from "../SharedComponents/MultipleSelectWithLimit";

const NewProject = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const [user] = useContext(UserContext);
  console.log(projects);
  //
  // const newProject = () => {
  //     const client = user.userName;
  //     const projTitle = document.getElementById("projTitle").value;
  //     const projBack = document.getElementById("projBack").value;
  //     const projResc = document.getElementById("projResc").value;
  //     const projTopics = document.getElementById("projTopics").value;
  //     const projGoals = document.getElementById("projGoals").value;
  //     const projRelInfo = document.getElementById("projRelInfo").value;
  //     const projOpen = document.getElementById("projOpen").value;
  //     const projLocation = document.getElementById("projLocation").value;
  //     const projId = (projects.length + 1).toString();
  //     const year = new Date().getFullYear();
  //     const newProject = {
  //       projId: projId,
  //       title: projTitle,
  //       topic: projTopics,
  //       description: projRelInfo,
  //       status: "New",
  //       year: year,
  //       trimester: "1",
  //       assigned_students: 0,
  //       eoi: 0,
  //       client: client,
  //       logo: "",
  //       background_rationale: projBack,
  //       resources: projResc,
  //       goals_objectives: projGoals,
  //       isOpen: projOpen,
  //       location: projLocation,
  //     };
  //     setProjects((prevProjects) => [...prevProjects, newProject]);
  //   };

  const handleFinish = (values) => {
    console.log(values);
    const projId = (projects.length + 1).toString();
    const newProject = { ...values, projId };
    setProjects([...projects, newProject]);

    // send POST request with new project data to backend
  };

  const handleCancel = () => {
    console.log("cancelld");
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
          <Form.Item
            label="Project Title"
            name="SmartList - A solid replacement of SmartFridges"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Background and Rational for Project:"
            name="Background and Rationale for SmartList - A solid replacement of SmartFridges. Proin a condimentum purus. Cras sit amet dui dolor. Vivamus dolor sem, maximus id velit sed, semper mollis ex. Etiam sagittis pulvinar metus, et finibus quam ornare a. Mauris a magna aliquet, efficitur risus vitae, maximus turpis. Nullam elementum ligula sit amet nisi tempus pretium. Fusce lacinia purus leo, sed pharetra massa elementum id. Vestibulum aliquam commodo massa sit amet ornare. Integer vel accumsan dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ut tempus elit. Suspendisse dignissim venenatis urna vitae tempus. Suspendisse lorem lectus, pretium at facilisis a, volutpat ut libero. Aenean a facilisis neque."
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Project Resources"
            name="Project Resources for SmartList - A solid replacement of SmartFridges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique auctor facilisis. Donec varius euismod nisl, at suscipit diam volutpat et. Cras hendrerit lorem nec elit ultricies finibus. Praesent diam mauris, pellentesque a volutpat sit amet, pellentesque eget purus. Nulla pellentesque dui felis, sit amet maximus purus lobortis eget. Donec sed lobortis tellus. Ut sit amet luctus elit. Donec ut ornare sem, id accumsan dolor. Pellentesque gravida orci tincidunt nibh lacinia tempor. Proin id elit non ex blandit porta. Suspendisse pretium blandit magna. Etiam congue id enim sit amet efficitur. Quisque fringilla maximus consequat."
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Project Topics" name="projectTopics">
            <MultipleSelectWithLimit max={3} options={TEMP_TOPICS} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Project Goals and Objects:"
            name="Goals and Objectives for SmartList - A solid replacement of SmartFridges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique auctor facilisis. Donec varius euismod nisl, at suscipit diam volutpat et. Cras hendrerit lorem nec elit ultricies finibus. Praesent diam mauris, pellentesque a volutpat sit amet, pellentesque eget purus. Nulla pellentesque dui felis, sit amet maximus purus lobortis eget. Donec sed lobortis tellus. Ut sit amet luctus elit. Donec ut ornare sem, id accumsan dolor. Pellentesque gravida orci tincidunt nibh lacinia tempor. Proin id elit non ex blandit porta. Suspendisse pretium blandit magna. Etiam congue id enim sit amet efficitur. Quisque fringilla maximus consequat."
          >
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
    </Form>
  );
};

export default NewProject;
