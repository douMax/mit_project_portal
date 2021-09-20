import React from "react";
import styled from "styled-components";
import { Card, Row, Col } from "antd";
import { COLORS } from "../../utils/APP_CONSTANTS";
import TopicsHeader from "./TopicsHeader";
import ProjectTitle from "./ProjectTitle";
import ProjectStats from "./ProjectStats";
import ProjectDetButtons from "./ProjectDetButtons"
import { useSelector } from "react-redux";

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

const ProjectDetail = ({ selectedproject, controls }) => {

  const { auth_user, user } = useSelector(state => state.auth);
  const {
    title,
    topics,
    background,
    resources,
    objectives,
    status,
    assigned,
    abstract,
    trimester,
    year,
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
            year={year}
            trimester={trimester}
            assigned_students={assigned.length}
            eoi={eoi.length}
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
          {(auth_user?.role === "student" && controls) && (<ProjectDetButtons project={selectedproject} />)}
          {(auth_user?.role === "staff" && (<ProjectDetButtons project={selectedproject} />))}
        </Col>
      </Row>
    </Row>
  );
};

export default ProjectDetail;
