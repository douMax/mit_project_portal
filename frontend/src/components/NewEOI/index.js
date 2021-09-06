import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import EOILeft from "./EOILeft";
import ProjectSummary from "./ProjectSummary";
import EOIDetails from "./EOIDetails";

const NewEOI = () => {
  const location = useLocation();
  const project = location.state;
  console.log(location)
  return (
    <Row>
      <Col span={12}>
        <EOILeft eoilen={"0"} />
      </Col>
      <Col span={12}>
        <ProjectSummary project={project} />
      </Col>
      <Row>
        <Col>
          <EOIDetails project={project} />
        </Col>
      </Row>
    </Row>
  );
};

export default NewEOI;
