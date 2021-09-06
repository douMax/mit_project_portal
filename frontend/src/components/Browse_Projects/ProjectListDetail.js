import React from "react";
import { Row, Col, Card, Button } from "antd";

import TopicsHeader from "./TopicsHeader";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectStats from "./ProjectStats";
import ClientInfo from "./ClientInfo";

const ProjectListDetail = ({ project, isSelected, handleShowDetail }) => {
  console.log(project)
  const {
    _id,
    projectTitle,
    topics,
    abstract,
    status,
    assigned,
    year,
    trimester,
    eoi,
    clientName,
    clientLogo,
  } = project;

  return (
    <Card
      style={{ marginBottom: "15px", border: isSelected && "3px solid red", width: "100%" }}
      key={_id}
      type="inner"
      hoverable="true"
    >
      <Row gutter={16}>
        <Col span={18}>
          <TopicsHeader topic={topics?.join(",")} />
          <ProjectTitle title={projectTitle} />
          <ProjectDescription description={abstract} />
          <ProjectStats
            status={status}
            year={year}
            trimester={trimester}
            assigned_students={assigned.length}
            eoi={eoi.length}
          />
          <Button onClick={handleShowDetail}>view</Button>
        </Col>
        <Col span={6}>
          <ClientInfo clientName={clientName} logo={clientLogo} />
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectListDetail;
