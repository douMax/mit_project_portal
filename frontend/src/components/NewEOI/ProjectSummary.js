import React from "react";
import { Col, Row } from "antd";

import TopicsHeader from "../Browse_Projects/TopicsHeader";
import ProjectTitle from "../Browse_Projects/ProjectTitle";
import ProjectStats from "../Browse_Projects/ProjectStats";
import ClientInfo from "../Browse_Projects/ClientInfo";

const sectionStyle = {
  background: "white",
  paddingLeft: 20,
  paddingTop: 20,
  paddingBottom: 20,
};

const ProjectSummary = ({ project }) => {
  const {
    topic,
    title,
    status,
    year,
    trimester,
    assigned_students,
    eoi,
    client,
    logo,
  } = project;
  return (
    <Row style={sectionStyle}>
      <Col span={18}>
        <TopicsHeader topic={topic} />
        <ProjectTitle title={title} />
        <ProjectStats
          status={status}
          year={year}
          trimester={trimester}
          assigned_students={assigned_students}
          eoi={eoi}
        />
      </Col>
      <Col span={6}>
        <ClientInfo clientName={client} logo={logo} />
      </Col>
    </Row>
  );
};

export default ProjectSummary;
