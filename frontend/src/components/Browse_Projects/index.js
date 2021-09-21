import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Empty } from "antd";

import ProjectDetail from "./ProjectDetail";
import { useSelector } from "react-redux";
import { fetchActiveProjects } from "../../actions/projects";
import ProjectListDetail from "./ProjectListDetail";

const PageTitle = styled.h1`
  font-size: 36px;
`;

const RightPanelWrapper = styled.div`
  max-height: 80vh;
  padding: 24px;
  background-color: #fff;
  border: 2px solid #f0f0f0;
  border-radius: 2px;
  overflow-y: scroll;
  overflow-X: none;
`;

const LeftPanelWrapper = styled.div`
  max-height: 80vh;
  overflow-X: none;
  overflow-y: auto;
`;

const BrowseProjects = () => {
  const { projects, user, auth_user } = useSelector(state => state.auth);
  const { _id } = user;

  const { assigned } = projects && projects[0];


  const isPresent = assigned.some(item => item === _id);
  console.log(assigned, isPresent)

  const [allProjects, setProjects] = useState([]);

  const [selected, setSelected] = useState(null);

  const handleShowDetail = (selectedproject) => {
    setSelected(selectedproject);
  };

  useEffect(async () => {
    const data = await fetchActiveProjects();
    setProjects(data);
  }, []);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <LeftPanelWrapper>
          <PageTitle>Browse Projects</PageTitle>
          {/* <SearchNSort /> */}
          {allProjects.map((project) => (
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
            <ProjectDetail selectedproject={selected} controls={(isPresent) ? false : true} />
          ) : (
            <Empty description="No project selected" />
          )}
        </RightPanelWrapper>
      </Col>
    </Row>
  );
};

export default BrowseProjects;
