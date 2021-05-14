import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Button } from "antd";

import TopicsHeader from "../BrowseProjects/TopicsHeader";
import ProjectTitle from "../BrowseProjects/ProjectTitle";
import ProjectDescription from "../BrowseProjects/ProjectDescription";
import ProjectDetail from "../BrowseProjects/ProjectDetail";

const Proposals = ({ proj }) => {
  const { projId, title, topic, description, status, year, trimester } = proj;
  const showDrawer = () => {
    //console.log(status);
  };
  return (
    <Card
      style={{ marginBottom: "15px" }}
      key={projId}
      type="inner"
      hoverable="true"
    >
      <Row gutter={16}>
        <Col span={18}>
          <TopicsHeader topic={topic} />
          <ProjectTitle title={title} />
          <ProjectDescription description={description} />
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            danger
            onClick={showDrawer}
            style={{ marginLeft: 50, marginTop: 105 }}
          >
            View
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Proposals;
