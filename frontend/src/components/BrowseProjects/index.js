import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Card, Empty } from "antd";

import ProjectListDetail from "./ProjectListDetail";
import SearchNSort from "./SearchNSort";

import mockProjects from "../../data/mockProjects.json";

const PageTitle = styled.h1`
  margin-left: 30px;
  font-size: 36px;
`;

const BrowseProjects = () => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <PageTitle>Browse Projects</PageTitle>
        <SearchNSort />
        {mockProjects.map(project => (
          <ProjectListDetail project={project} />
        ))}
      </Col>
      <Col span={12}>
        <Card>
          <Empty description="No project selected" />
        </Card>
      </Col>
    </Row>
  );
};

export default BrowseProjects;
