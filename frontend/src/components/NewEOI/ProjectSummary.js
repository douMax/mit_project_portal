import React from "react";
import styled from "styled-components";
import { Form, Col, Row } from "antd";

import TopicsHeader from "../BrowseProjects/TopicsHeader";
import ProjectTitle from "../BrowseProjects/ProjectTitle";
import ProjectStats from "../BrowseProjects/ProjectStats";
import ClientInfo from "../BrowseProjects/ClientInfo";

const sectionStyle = {
  background: "white",
  paddingLeft: 20,
  paddingTop: 20,
  paddingBottom: 20,
};

const ProjectSummary = () => {
  return (
    <Row style={sectionStyle}>
      <Col span={18}>
        <TopicsHeader topic={"topic"} />
        <ProjectTitle title={"title"} />
        <ProjectStats
          status={"status"}
          year={"year"}
          trimester={"trimester"}
          assigned_students={"assigned_students"}
          eoi={"eoi"}
        />
      </Col>
      <Col span={6}>
        <ClientInfo clientName={"client"} logo={"logo"} />
      </Col>
    </Row>
  );
};

export default ProjectSummary;
