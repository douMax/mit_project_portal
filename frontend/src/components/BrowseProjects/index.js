import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Card, Empty } from "antd";

import ProjectListDetail from "./ProjectListDetail";
import SearchNSort from "./SearchNSort";
import ProjectDetail from "./ProjectDetail";

import mockProjects from "../../data/mockProjects.json";

const PageTitle = styled.h1`
  font-size: 36px;
`;

const RightPanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  padding: 24px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  overflow-y: scroll;
`;

const LeftPanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const BrowseProjects = () => {
  const [selected, setSelected] = useState(null);
  const handleShowDetail = project => {
    setSelected(project);
  };
  return (
    <Row gutter={24}>
      <Col span={12}>
        <LeftPanelWrapper>
          <PageTitle>Browse Projects</PageTitle>
          <SearchNSort />
          {mockProjects.map(project => (
            <ProjectListDetail
              isSelected={project.projId === (selected && selected.projId)}
              project={project}
              handleShowDetail={() => {
                handleShowDetail(project);
              }}
            />
          ))}
        </LeftPanelWrapper>
      </Col>
      <Col span={12}>
        <RightPanelWrapper>
          {selected ? (
            <ProjectDetail project={selected} />
          ) : (
            <Empty description="No project selected" />
          )}
        </RightPanelWrapper>
      </Col>
    </Row>
  );
};

export default BrowseProjects;
