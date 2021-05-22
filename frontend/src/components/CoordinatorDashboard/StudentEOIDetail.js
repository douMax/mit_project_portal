import React, { useContext } from "react";
import { Card, Space, Input, Button, Switch } from "antd";
import styled from "styled-components";

import { StudentContext } from "../../contexts/StudentContext";

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
  //Need to query database to GET student details based on studentId obtained from the EOI object.
  //Temporary code to simulate GETting student records for students who expressed interest in the project.
  const [students, setStudents] = useContext(StudentContext);
  const currentApplicant = [];
  students.forEach((student) => {
    if (student.userId === eoi.applicantId) {
      currentApplicant.push(student);
      return currentApplicant;
    }
  });
  // console.log(students);
  // console.log(eoi);
  // console.log(currentApplicant);
  return (
    <Card style={{ marginBottom: 20, borderColor: "red" }}>
      <Space>
        <Card style={{ height: 385, borderColor: "DimGrey" }}>
          <SectionTitle>{currentApplicant[0].userName}</SectionTitle>
          <Button type="text" style={{ background: "turquoise" }}>
            Allocate
          </Button>
          <Button type="primary" danger style={{ marginTop: 10 }}>
            Remove
          </Button>
          <SubsectionTitle>Course Enrolment Status</SubsectionTitle>
          {currentApplicant[0].course_enrolment ? (
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
          {currentApplicant[0].capstone_project_enrolment ? (
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
