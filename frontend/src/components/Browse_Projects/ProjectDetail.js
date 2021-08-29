import React from "react";
import styled from "styled-components";
import { Card, Row, Col } from "antd";
import { COLORS } from "../../utils/APP_CONSTANTS";
import TopicsHeader from "./TopicsHeader";
import ProjectTitle from "./ProjectTitle";
import ProjectStats from "./ProjectStats";

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
    title,
    topics,
    background,
    resources,
    objectives,
    status,
    other,
    location,
    group,
    eoi
  } = selectedproject;
  return (
    <Row>
      <Row gutter={16}>
        <Col span={24}>
          <TopicsHeader topic={topics?.join(",")} />
          <ProjectTitle title={title} />
          <ProjectStats
            status={status}
            year={"2021"}
            trimester={"T1"}
            assigned_students={"0/5"}
            eoi={eoi}
          />
        </Col>
        {/* <Col span={6}>
          <ClientInfo clientName={"MIT"} logo={""} />
        </Col> */}
        <Col>
          <SectionTitleWrapper>Background and Rationale</SectionTitleWrapper>
          <Card style={sectionCardStyle}>{background}</Card>
          <SectionTitleWrapper>Project Resources</SectionTitleWrapper>
          <Card style={sectionCardStyle}>{resources}</Card>
          <SectionTitleWrapper>Project Goals and Objectives</SectionTitleWrapper>
          <Card style={sectionCardStyle}>{objectives}</Card>
          {/* <ProjectDetButtons project={selectedproject} /> */}
        </Col>
      </Row>
    </Row>
  );
};

export default ProjectDetail;
