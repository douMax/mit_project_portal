import React from "react";
import styled from "styled-components";
import { Row, Col, Form, Card } from "antd";

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
  return (
    <Form>
      <PageTitle>Staff Dashboard - Chair Project Review Panel</PageTitle>
      <Row gutter={24}>
        <Col span={12}>
          <Wrapper>
            <SectionTitle>Project Proposal Requests</SectionTitle>
          </Wrapper>
        </Col>
        <Col span={12}>
          <Wrapper>
            <SectionTitle>User Signup Requests</SectionTitle>
          </Wrapper>
        </Col>
      </Row>
    </Form>
  );
};

export default ChairPRPDashboard;
