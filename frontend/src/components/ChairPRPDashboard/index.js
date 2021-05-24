import React, { useContext } from "react";
import styled from "styled-components";
import { Row, Col, Form } from "antd";

import UserProposals from "../MyProjects/UserProposals";
import SignUpRequest from "./SignUpRequest";

import { InactiveProjectContext } from "../../contexts/InactiveProjectContext";

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
  padding-bottom: 10px;
`;

const ChairPRPDashboard = () => {
  const [projects, setProject] = useContext(InactiveProjectContext);
  const projectProposal = [];
  projects.forEach(proj => {
    if (proj.status === "wfa" || proj.status === "cr") {
      //console.log(project);
      projectProposal.push(proj);
    }
  });
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
            {projectProposal.map(p => (
              <UserProposals key={p._id} proposal={p} />
            ))}
          </Wrapper>
        </Col>
      </Row>
    </Form>
  );
};

export default ChairPRPDashboard;
