import React, { useContext } from "react";
import styled from "styled-components";
import { Row, Col, Form } from "antd";

import UserProposals from "../MyProjects/UserProposals";
import SignUpRequest from "./SignUpRequest";

import { ProjectContext } from "../../contexts/ProjectContext";

const PageTitle = styled.h1`
  font-size: 36px;
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-botton: 10px;
`;

const ChairPRPDashboard = () => {
  const [projects, setProject] = useContext(ProjectContext);
  const projectProposal = [];
  projects.forEach((proj) => {
    if (
      proj.status === "Waiting for Approval" ||
      proj.status === "Changes Required"
    ) {
      //console.log(project);
      projectProposal.push(proj);
    }
  });
  //console.log(projectProposal);
  return (
    <Form>
      <PageTitle>Staff Dashboard - Chair Project Review Panel</PageTitle>
      <Row gutter={24}>
        <Col span={12}>
          <Wrapper>
            <SectionTitle>User Signup Requests</SectionTitle>
            <SignUpRequest />
          </Wrapper>
        </Col>
        <Col span={12}>
          <Wrapper>
            <SectionTitle>Project Proposal Requests</SectionTitle>
            {projectProposal.map((p) => (
              <UserProposals key={p.projId} proposal={p} />
            ))}
          </Wrapper>
        </Col>
      </Row>
    </Form>
  );
};

export default ChairPRPDashboard;
