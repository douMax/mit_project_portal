import React from "react";
import { Row, Col, Card } from "antd";
import EOILeft from "./EOILeft";

const NewEOI = () => {
  return (
    <Row>
      <Col span={12}>
        <EOILeft />
      </Col>
      <Col span={12}>
        <Card bodyStyle={{ height: 125 }}></Card>
      </Col>
    </Row>
  );
};

export default NewEOI;
