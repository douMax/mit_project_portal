import React from "react";
import { Row, Col, Card } from "antd";
import ProjectSummary from "./ProjectSummary";

const NewEOI = () => {
  return (
    <Row>
      <Col span={12}>
        <ProjectSummary />
      </Col>
      <Col span={12}>
        <Card bodyStyle={{ height: 125 }}></Card>
      </Col>
    </Row>
  );
};

export default NewEOI;
