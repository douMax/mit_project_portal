import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Row, Col, Form } from "antd";

import { ProjectContext } from "../../contexts/ProjectContext";

import ProjectsSummary from "./ProjectsSummary";

const PageTitle = styled.h1`
  font-size: 36px;
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const OpenWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  outline: 2px solid turquoise;
`;

const OngoingWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  outline: 2px solid cornflowerblue;
`;

const ClosedWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  outline: 2px solid salmon;
`;

const CoordinatorDashboard = () => {
  //Temporary code to retrieve open, ongoing, and closed projects from all projects.
  //After frontend is connected to backed, we can have an API call to GET only open, ogoing, and closed projects.
  const openproject = [];
  const ongoingproject = [];
  const closedproject = [];
  const [project, setProject] = useContext(ProjectContext);
  //console.log(project);
  project.forEach((p) => {
    if (p.status === "open") {
      openproject.push(p);
    }
    if (p.status === "ongoing") {
      ongoingproject.push(p);
    }
    if (p.status === "closed") {
      closedproject.push(p);
    }
  });
  return (
    <Form>
      <PageTitle>Staff Dashboard - Unit Coordinator</PageTitle>
      <Row gutter={24}>
        <Col span={8}>
          <OpenWrapper>
            <SectionTitle>Unallocated/Open Projects</SectionTitle>
            {openproject.map((p) => (
              <ProjectsSummary key={p._id} project={p} />
            ))}
          </OpenWrapper>
        </Col>
        <Col span={8}>
          <OngoingWrapper>
            <SectionTitle>Ongoing Projects</SectionTitle>
            {ongoingproject.map((p) => (
              <ProjectsSummary key={p._id} project={p} />
            ))}
          </OngoingWrapper>
        </Col>
        <Col span={8}>
          <ClosedWrapper>
            <SectionTitle>Closed Projects</SectionTitle>
            {closedproject.map((p) => (
              <ProjectsSummary key={p._id} project={p} />
            ))}
          </ClosedWrapper>
        </Col>
      </Row>
    </Form>
  );
};

export default CoordinatorDashboard;
