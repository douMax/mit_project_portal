import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Row, Col, Empty } from "antd";

import ProjectListDetail from "./ProjectListDetail";
import SearchNSort from "./SearchNSort";
import ProjectDetail from "./ProjectDetail";

//import mockProjects from "../../data/mockProjects.json";

import { ProjectContext } from "../../contexts/ProjectContext";

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
  const [projects, setProject] = useContext(ProjectContext);
  console.log(projects);

  const [selected, setSelected] = useState(null);
  const handleShowDetail = (selectedproject) => {
    setSelected(selectedproject);
  };
  return (
    <Row gutter={24}>
      <Col span={12}>
        <LeftPanelWrapper>
          <PageTitle>Browse Projects</PageTitle>
          <SearchNSort />
          {projects.map((project) => (
            <ProjectListDetail
              key={project._id}
              isSelected={project._id === (selected && selected._id)}
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
            <ProjectDetail selectedproject={selected} />
          ) : (
            <Empty description="No project selected" />
          )}
        </RightPanelWrapper>
      </Col>
    </Row>
  );
};

export default BrowseProjects;
