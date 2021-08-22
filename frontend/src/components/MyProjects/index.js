/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import UserProjects from "./UserProjects";
import UserProposals from "./UserProposals";
import UserEOI from "./UserEOI";

import { USERTYPES } from "../../utils/APP_CONSTANTS";
import { useSelector } from "react-redux";

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const PanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const MyProjects = () => {
  const { user, isLoading } = useSelector(state => state.auth);

  const [myProjects, setMyProjects] = useState(null);
  const [myProposals, setMyProposals] = useState(null);

  const { projects } = user;
  console.log(projects);

  const projectsFilter = useCallback(() => {
    if (projects) {
      const filteredProjects = projects.filter(item => item.status === "open");
      setMyProjects(filteredProjects);
      const filteredProposals = projects.filter(item => item.status === "pending" || item.status === "rejected");
      setMyProposals(filteredProposals);
    }
  }, [projects]);

  useEffect(() => {
    projectsFilter();
  }, []);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <PanelWrapper>
          <PageTitle>My Projects</PageTitle>
          {myProjects?.map((project, index) => (
            <UserProjects key={index} project={project} />
          ))}
        </PanelWrapper>
      </Col>
      <Col span={12}>
        {user.role === USERTYPES.INDUSTRY_CLIENT ? (
          <PanelWrapper>
            <PageTitle>My Proposals</PageTitle>
            {myProposals?.map((project, index) => (
              <UserProposals key={index} proposal={project} />
            ))}
          </PanelWrapper>
        ) : (
          <PanelWrapper>
            <PageTitle>My EOIs</PageTitle>
            {/* {eois?.map((eoi) => (
              <UserEOI eoi={eoi} key={eoi._id} />
            ))} */}
          </PanelWrapper>
        )}
      </Col>
    </Row>
  );
};

export default MyProjects;
