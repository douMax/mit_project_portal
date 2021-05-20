import React from "react";
import { Row, Col, Card, Button } from "antd";

import TopicsHeader from "./TopicsHeader";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectStats from "./ProjectStats";
import ClientInfo from "./ClientInfo";

const ProjectListDetail = ({ project, isSelected, handleShowDetail }) => {
  const {
    _id,
    projectTitle,
    topics,
    abstract,
    status,
    yearInfo,
    termInfo,
    assignedStudents,
    eoisReceived,
    clientName,
    clientLogo,
  } = project;

  return (
    <Card
      style={{ marginBottom: "15px", border: isSelected && "1px solid red" }}
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
            year={yearInfo}
            trimester={termInfo}
            assigned_students={assignedStudents}
            eoi={eoisReceived}
          />
          <Button onClick={handleShowDetail}>+</Button>
        </Col>
        <Col span={6}>
          <ClientInfo clientName={clientName} logo={clientLogo} />
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectListDetail;
