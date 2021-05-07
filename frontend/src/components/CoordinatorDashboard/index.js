import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";

import { ProjectContext } from "../../contexts/ProjectContext";

import OpenProjects from "./OpenProjects";

const PageTitle = styled.h1`
  font-size: 36px;
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-top: 10px;
  padding-botton: 10px;
`;

const buttonStyle = { background: "DimGray", color: "white", marginLeft: 250 };

const CoordinatorDashboard = () => {
  //Temporary code to retrieve open, ongoing, and closed projects from all projects.
  //After frontend is connected to backed, we can have an API call to GET only open, ogoing, and closed projects.
  const openproject = [];
  const ongoingproject = [];
  const closedproject = [];
  const [project, setProject] = useContext(ProjectContext);
  //console.log(project);
  project.forEach((p) => {
    if (p.status === "Open") {
      openproject.push(p);
    }
    if (p.status === "Ongoing") {
      ongoingproject.push(p);
    }
    if (p.status === "Closed") {
      closedproject.push(p);
    }
  });
  return (
    <div>
      <PageTitle>Staff Dashboard - Unit Coordinator</PageTitle>
      <Row gutter={24}>
        <Col span={8}>
          <Wrapper>
            <SectionTitle>Unallocated/Open Projects</SectionTitle>
            {openproject.map((p) => (
              <OpenProjects key={p.projId} project={p} />
            ))}
          </Wrapper>
        </Col>
        <Col span={8}>
          <Wrapper>
            <SectionTitle>Ongoing Projects</SectionTitle>
          </Wrapper>
        </Col>
        <Col span={8}>
          <Wrapper>
            <SectionTitle>Closed Projects</SectionTitle>
          </Wrapper>
        </Col>
      </Row>
    </div>
  );
};

export default CoordinatorDashboard;
