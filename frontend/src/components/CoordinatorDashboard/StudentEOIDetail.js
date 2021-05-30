import React from "react";
import { Card, Space, Input, Button, Switch } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const SectionTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
`;

const SubsectionTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

const StudentEOIDetails = ({ eoi }) => {
  // console.log(eoi);
  return (
    <Card style={{ marginBottom: 20, borderColor: "red" }}>
      <Space>
        <Card style={{ height: 385, borderColor: "DimGrey" }}>
          <SectionTitle>{eoi.userName}</SectionTitle>
          <Button type="text" style={{ background: "turquoise" }}>
            Allocate
          </Button>
          <Button type="primary" danger style={{ marginTop: 10 }}>
            Remove
          </Button>
          <SubsectionTitle>Course Enrolment Status</SubsectionTitle>
          {eoi.course_enrolment ? (
            <Switch
              checkedChildren="Yes"
              defaultChecked
              disabled
              style={{ background: "mediumspringgreen" }}
            />
          ) : (
            <Switch
              unCheckedChildren="No"
              disabled
              style={{ background: "red" }}
            />
          )}
          <SubsectionTitle>Module Enrolment Status</SubsectionTitle>
          {eoi.capstone_project_enrolment ? (
            <Switch
              checkedChildren="Yes"
              defaultChecked
              disabled
              style={{ background: "mediumspringgreen" }}
            />
          ) : (
            <Switch
              unCheckedChildren="No"
              disabled
              style={{ background: "red" }}
            />
          )}
        </Card>
        <Card style={{ borderColor: "DimGrey" }}>
          <SectionTitle>Expression of Interest Details</SectionTitle>
          <SubsectionTitle>Interest in Project</SubsectionTitle>
          <TextArea
            cols={60}
            style={{ background: "white", color: "black" }}
            disabled
            defaultValue={eoi.interestInProject}
          ></TextArea>
          <SubsectionTitle>Achievement Goals</SubsectionTitle>
          <TextArea
            cols={60}
            style={{ background: "white", color: "black" }}
            disabled
            defaultValue={eoi.achievementGoals}
          ></TextArea>
          <SubsectionTitle>Previous Experience</SubsectionTitle>
          <TextArea
            cols={60}
            style={{ background: "white", color: "black" }}
            disabled
            defaultValue={eoi.previousExperience}
          ></TextArea>
        </Card>
      </Space>
    </Card>
  );
};

export default StudentEOIDetails;
