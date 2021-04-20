import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import EOILeft from "./EOILeft";
import ProjectSummary from "./ProjectSummary";
import EOIDetails from "./EOIDetails";

import mockEOIs from "../../data/mockEOIs.json";

const NewEOI = () => {
  const location = useLocation();
  const project = location.state;
  return (
    <Row>
      <Col span={12}>
        <EOILeft eoilen={mockEOIs.length} />
      </Col>
      <Col span={12}>
        <ProjectSummary project={project} />
      </Col>
      <Row>
        <Col>
          <EOIDetails />
        </Col>
      </Row>
    </Row>
  );
};

export default NewEOI;
