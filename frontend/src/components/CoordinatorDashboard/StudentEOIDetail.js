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
  //Need to query database to get student details based on studentId obtained from the EOI object.
  return (
    <Card>
      <Space>
        <Card style={{ height: 385 }}>
          <SubsectionTitle>Lingxiao Wang</SubsectionTitle>
          <Button type="text" style={{ background: "turquoise" }}>
            Allocate
          </Button>
          <Button type="primary" danger style={{ marginTop: 10 }}>
            Remove
          </Button>
          <SubsectionTitle>Course Enrolment Status</SubsectionTitle>
          <Switch
            checkedChildren="Yes"
            unCheckedChildren="No"
            defaultChecked
            disabled
          />
          <SubsectionTitle>Module Enrolment Status</SubsectionTitle>
          <Switch
            checkedChildren="Yes"
            unCheckedChildren="No"
            defaultChecked
            disabled
          />
        </Card>
        <Card>
          <SectionTitle>Expression of Interest Details</SectionTitle>
          <SubsectionTitle>Interest in Project</SubsectionTitle>
          <TextArea
            cols={60}
            style={{ background: "white", color: "black" }}
            disabled
            defaultValue={eoi.interest}
          ></TextArea>
          <SubsectionTitle>Achievement Goals</SubsectionTitle>
          <TextArea
            cols={60}
            style={{ background: "white", color: "black" }}
            disabled
            defaultValue={eoi.achieve}
          ></TextArea>
          <SubsectionTitle>Previous Experience</SubsectionTitle>
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
