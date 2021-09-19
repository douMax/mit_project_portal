import React from "react";
import { Row, Col, Card, Button } from "antd";
import { useSelector } from "react-redux";
import TopicsHeader from "./TopicsHeader";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectStats from "./ProjectStats";
import ClientInfo from "./ClientInfo";
import { Link } from "react-router-dom";

const ProjectListDetail = ({ project, isSelected, handleShowDetail }) => {
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
  const { user } = useSelector((state) => state.auth)
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
          {(user?.position === "Unit Coordinator") ? (
            <Link
              to={{
                pathname: `/unit-coordinator/projects_allocation/${_id}`,
                state: project,
              }}>
              <Button danger disabled={assigned.length === 5}>view</Button>
            </Link>
          ) : (
            <Button onClick={handleShowDetail} type="danger">view</Button>

          )}
        </Col>
        <Col span={6}>
          <ClientInfo clientName={clientName} logo={clientLogo} />
        </Col>
      </Row>
    </Card >
  );
};

export default ProjectListDetail;
