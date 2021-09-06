import React from "react";
import { Row, Col, Card, Button } from "antd";
import ProjectDescription from "../Browse_Projects/ProjectDescription";
import ProjectTitle from "../Browse_Projects/ProjectTitle";
import ProposalStatusDetail from "./ProposalStatusDetail";

const UserEOI = ({ eoi }) => {
  return (
    <Card hoverable="true" style={{ width: "100%", border: "2px solid aqua", margin: "5px" }}>
      <Row span={12}>
        <Col span={18}>
          <ProjectTitle title={eoi.title} />
          <ProjectDescription description={eoi.interest} />
        </Col>
        <Col span={6}>
          <ProposalStatusDetail status={"pending"} />
        </Col>
      </Row>
    </Card>
  );
};

export default UserEOI;
