import React from "react";
import { Row, Col, Card, Button } from "antd";

import TopicsHeader from "./TopicsHeader";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectStats from "./ProjectStats";
import ClientInfo from "./ClientInfo";

const ProjectListDetail = ({ project, isSelected, handleShowDetail }) => {
  const {
    projId,
    title,
    topic,
    description,
    status,
    year,
    trimester,
    assigned_students,
    eoi,
    client,
    logo,
  } = project;

  return (
    <Card
      style={{ marginTop: "15px", border: isSelected && "1px solid red" }}
      key={projId}
      type="inner"
      hoverable="true"
    >
      <Row gutter={16}>
        <Col span={18}>
          <TopicsHeader topic={topic} />
          <ProjectTitle title={title} />
          <ProjectDescription description={description} />
          <ProjectStats
            status={status}
            year={year}
            trimester={trimester}
            assigned_students={assigned_students}
            eoi={eoi}
          />
          <Button onClick={handleShowDetail}>+</Button>
        </Col>
        <Col span={6}>
          <ClientInfo clientName={client} logo={logo} />
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectListDetail;
