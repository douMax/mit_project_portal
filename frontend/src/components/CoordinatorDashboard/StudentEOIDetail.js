import React from "react";
import { Card, Space, Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const SectionTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
`;

const EOIDetailsSubsection = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

const StudentEOIDetails = ({ eoi }) => {
  return (
    <Card>
      <Space>
        <Card>
          <SectionTitle>Student Name</SectionTitle>
          <SectionTitle>Enrolment Status</SectionTitle>
        </Card>
        <Card>
          <SectionTitle>Expression of Interest Details</SectionTitle>
          <EOIDetailsSubsection>Interest in Project</EOIDetailsSubsection>
          <TextArea
            cols={60}
            style={{ background: "white", color: "black" }}
            disabled
            defaultValue={eoi.interest}
          ></TextArea>
          <EOIDetailsSubsection>Achievement Goals</EOIDetailsSubsection>
          <TextArea
            cols={60}
            style={{ background: "white", color: "black" }}
            disabled
            defaultValue={eoi.achieve}
          ></TextArea>
          <EOIDetailsSubsection>Previous Experience</EOIDetailsSubsection>
          <TextArea
            cols={60}
            style={{ background: "white", color: "black" }}
            disabled
            defaultValue={eoi.experience}
          ></TextArea>
        </Card>
      </Space>
    </Card>
  );
};

export default StudentEOIDetails;
