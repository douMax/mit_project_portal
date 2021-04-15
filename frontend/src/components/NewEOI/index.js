import React from "react";
import { Row, Col } from "antd";
import EOILeft from "./EOILeft";
import ProjectSummary from "./ProjectSummary";

import mockEOIs from "../../data/mockEOIs.json";

const NewEOI = () => {
  return (
    <Row>
      <Col span={12}>
        <EOILeft eoilen={mockEOIs.length} />
      </Col>
      <Col span={12}>
        <ProjectSummary />
      </Col>
    </Row>
  );
};

export default NewEOI;
