import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Row, Col, Empty } from "antd";

import { ProjectContext } from "../../contexts/ProjectContext";
import { UserContext } from "../../contexts/UserContext";

import UserProjects from "./UserProjects";
import UserProposals from "./UserProposals";

const PageTitle = styled.h1`
  font-size: 25px;
`;

const RightPanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  padding: 24px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  overflow-y: scroll;
`;

const PanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const MyProjects = () => {
  const [user] = useContext(UserContext);
  const [project, setProject] = useContext(ProjectContext);

  //Temporary code to retrieve client's projects from all projects.
  //After frontend is connected to backed, we can have an API call to GET all projects for particular user.
  const myprojects = [];
  project.forEach((p) => {
    if (p.client === user.userName) {
      //console.log(p);
      myprojects.push(p);
    }
  });
  //console.log(myprojects);
  return (
    <Row gutter={24}>
      <Col span={12}>
        <PanelWrapper>
          <PageTitle>My Projects</PageTitle>
          {myprojects.map((proj) => (
            <UserProjects key={proj.projId} proj={proj} />
          ))}
        </PanelWrapper>
      </Col>
      <Col span={12}>
        <PanelWrapper>
          <PageTitle>My Proposals</PageTitle>
          <UserProposals />
        </PanelWrapper>
      </Col>
    </Row>
  );
};

export default MyProjects;
