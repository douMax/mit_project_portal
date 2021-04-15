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

const ProjectDetail = ({ project }) => {
  const {
    background_rationale,
    resources,
    goals_objectives,
    title,
    topic,
    status,
    year,
    trimester,
    assigned_students,
    eoi,
    client,
    logo,
  } = project;
  return (
    <Row>
      <Row gutter={16}>
        {/**########################################### */}
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
        {/**########################################### */}
      </Row>
      <SectionTitleWrapper>Background and Rationale</SectionTitleWrapper>
      <Card style={sectionCardStyle}>{background_rationale}</Card>
      <SectionTitleWrapper>Project Resources</SectionTitleWrapper>
      <Card style={sectionCardStyle}>{resources}</Card>
      <SectionTitleWrapper>Project Goals and Objectives</SectionTitleWrapper>
      <Card style={sectionCardStyle}>{goals_objectives}</Card>
      <ProjectDetButtons project={project} />
    </Row>
  );
};

export default ProjectDetail;
