import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Button } from "antd";
import EOILeft from "./EOILeft";
import ProjectSummary from "./ProjectSummary";
import EOIDetailsLeft from "./EOIDetailsLeft";
import EOIDetailsRight from "./EOIDetailsRight";

import mockEOIs from "../../data/mockEOIs.json";

const NewEOI = () => {
  const location = useLocation();
  const project = location.state;
  //console.log(project);
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
          <EOIDetailsLeft />
        </Col>
        <Col>
          <EOIDetailsRight />
        </Col>
      </Row>
      <Row>
        <Col style={{ paddingTop: 10 }}>
          <Button type="primary" danger>
            Submit EOI
          </Button>
        </Col>
      </Row>
    </Row>
  );
};

export default NewEOI;
