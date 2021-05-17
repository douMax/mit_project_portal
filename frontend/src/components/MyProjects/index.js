import React, { useContext } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import { ProjectContext } from "../../contexts/ProjectContext";
import { UserContext } from "../../contexts/UserContext";
import { ProposalContext } from "../../contexts/ProposalContext";
import { EOIContext } from "../../contexts/EOIContext";

import UserProjects from "./UserProjects";
import UserProposals from "./UserProposals";
import UserEOI from "./UserEOI";

import { USERTYPES } from "../../utils/APP_CONSTANTS";

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const PanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const MyProjects = () => {
  const [user] = useContext(UserContext);
  const [projects, setProjects] = useContext(ProjectContext);
  const [proposals, setProposals] = useContext(ProposalContext);
  const [eois, setEOIs] = useContext(EOIContext);

  //Temporary code to retrieve client's projects from all projects.
  //After frontend is connected to backed, we can have an API call to GET all projects for particular user.
  const myprojects = [];
  projects.forEach(project => {
    if (project.client === user.userName) {
      myprojects.push(project);
    }
  });
  //console.log(myprojects);

  const myproposals = [];
  proposals.forEach(proposal => {
    if (proposal.client === user.userName) {
      myproposals.push(proposal);
    }
  });
  //console.log(myproposals);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <PanelWrapper>
          <PageTitle>My Projects</PageTitle>
          {myprojects.map(proj => (
            <UserProjects key={proj.projId} proj={proj} />
          ))}
        </PanelWrapper>
      </Col>
      <Col span={12}>
        {user.role === USERTYPES.INDUSTRY_CLIENT ? (
          <PanelWrapper>
            <PageTitle>My Proposals</PageTitle>
            {myproposals.map(pro => (
              <UserProposals
                key={pro.propId}
                topic={pro.topic}
                title={pro.title}
                description={pro.description}
                status={pro.status}
              />
            ))}
          </PanelWrapper>
        ) : (
          <PanelWrapper>
            <PageTitle>My EOIs</PageTitle>
            {eois.map(eoi => (
              <UserEOI eoi={eoi} />
            ))}
          </PanelWrapper>
        )}
      </Col>
    </Row>
  );
};

export default MyProjects;
