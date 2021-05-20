import React from "react";
import styled from "styled-components";
import TopicsHeader from "./TopicsHeader";
import ProjectTitle from "./ProjectTitle";
import ProjectStats from "./ProjectStats";
import ClientInfo from "./ClientInfo";
import ProjectDetButtons from "./ProjectDetButtons";
import { Card, Row, Col } from "antd";
import { COLORS } from "../../utils/APP_CONSTANTS";

const SectionTitleWrapper = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
  padding-top: 10px;
`;

const sectionCardStyle = {
  border: `0.5px ${COLORS.PrimaryRed} solid`,
  borderRadius: "5px",
};

const ProjectDetail = ({ selectedproject }) => {
  const {
    projectTitle,
    topics,
    background,
    resources,
    objectives,
    status,
    yearInfo,
    termInfo,
    assignedStudents,
    eoisReceived,
    clientName,
    clientLogo,
  } = selectedproject;
  return (
    <Row>
      <Row gutter={16}>
        <Col span={18}>
          <TopicsHeader topic={topics?.join(",")} />
          <ProjectTitle title={projectTitle} />
          <ProjectStats
            status={status}
            year={yearInfo}
            trimester={termInfo}
            assigned_students={assignedStudents}
            eoi={eoisReceived}
          />
        </Col>
        <Col span={6}>
          <ClientInfo clientName={clientName} logo={clientLogo} />
        </Col>
      </Row>
      <SectionTitleWrapper>Background and Rationale</SectionTitleWrapper>
      <Card style={sectionCardStyle}>{background}</Card>
      <SectionTitleWrapper>Project Resources</SectionTitleWrapper>
      <Card style={sectionCardStyle}>{resources}</Card>
      <SectionTitleWrapper>Project Goals and Objectives</SectionTitleWrapper>
      <Card style={sectionCardStyle}>{objectives}</Card>
      <ProjectDetButtons project={selectedproject} />
    </Row>
  );
};

export default ProjectDetail;
