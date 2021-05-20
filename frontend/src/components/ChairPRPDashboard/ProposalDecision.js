import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Select, Input, Button } from "antd";
import { PRP_DECISION } from "../../utils/APP_CONSTANTS";

import { InactiveProjectContext } from "../../contexts/InactiveProjectContext";

const { TextArea } = Input;

const PageTitle = styled.h1`
  font-size: 36px;
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const SectionContent = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  padding-bottom: 5px;
`;

const ProposalDecision = () => {
  const location = useLocation();
  const project = location.state;
  //const [projects, setProjects] = useContext(InactiveProjectContext);
  const handleDecision = () => {
    //Change only the status of the selected project/proposal
    // setProjects(
    //   projects.map((p) => {
    //     if (p._id !== project._id) return p;
    //     return { ...p, status: "open" };
    //   })
    // );
    //putProject(project._id);
  };
  //console.log(projects);
  return (
    <Form>
      <PageTitle>Project Proposal Decision Page</PageTitle>
      <SectionTitle>{project.projectTitle}</SectionTitle>
      <Form.Item label="Decision" name="prp_decision" style={{ width: 300 }}>
        <Select options={PRP_DECISION} />
      </Form.Item>
      <SectionContent>Feedback Comments:</SectionContent>
      <Form.Item name="feedback_comments">
        <TextArea rows={11} showCount minLength={20} maxLength={500} />
      </Form.Item>
      <Form.Item name="feedback_comments">
        <Link
          to={{
            pathname: `/dashboard/chair-prp`,
          }}
        >
          <Button type="primary" danger onClick={handleDecision}>
            Send
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default ProposalDecision;
