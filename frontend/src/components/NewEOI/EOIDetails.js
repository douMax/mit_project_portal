import React, { useState } from "react";
import styled from "styled-components";
import { Row, Form, Input, Space, Button } from "antd";
import { COLORS } from "../../utils/APP_CONSTANTS";
import { useDispatch, useSelector } from "react-redux";
import { createEOI, updateStudentData } from "../../redux/authRedux/actions";
import { useHistory } from "react-router";
import { CheckCircleTwoTone } from '@ant-design/icons';

const { TextArea } = Input;

const formStyle = {
  background: "white",
  marginTop: 5,
  paddingTop: 5,
  paddingBottom: 10,
};

const formRightStyle = {
  marginLeft: 100,
  width: "100%"
};

const textAreaStyle = {
  border: `0.5px ${COLORS.PrimaryRed} solid`,
  margin: '10px'
};

const buttonStyle = {
  marginLeft: 1155,
};

const SectionDescription = styled.h1`
  font-size: 18px;
  padding-left: 5px;
  padding-right: 5px;
`;

const EOIDetails = ({ project }) => {

  const { user } = useSelector(state => state.auth);
  const { _id, username } = user;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async () => {

    const interest = document.getElementById("interest").value;
    const achievement = document.getElementById("achieve").value;
    const experience = document.getElementById("experience").value;

    const EOI = {
      project_id: project?._id,
      user_id: _id,
      interest: interest,
      achievement: achievement,
      experience: experience,
    };

    console.log("eoi submitted", EOI)
    const payload = { eoi: [...user.eoi, { ...project, interest, achievement, experience }] };
    setIsSubmitted(true);
    await dispatch(updateStudentData(payload, _id, username));
    await dispatch(createEOI(EOI));

    setTimeout(() => {
      history.push("/student/my-projects");
    }, 2000);
  }

  return (
    <>
      {!isSubmitted ? (<>
        <Row>
          <Form style={formStyle}>
            <Space>
              <Form.Item>
                <SectionDescription>
                  Write between 300 and 500 words why you are interested in this
                  project.
                </SectionDescription>
                <TextArea
                  id="interest"
                  style={textAreaStyle}
                  maxLength={500}
                  showCount
                  rows={16}
                />
              </Form.Item>
              <Form.Item style={formRightStyle}>
                <SectionDescription>
                  What do you hope to achieve with this project?
                </SectionDescription>
                <TextArea
                  id="achieve"
                  style={textAreaStyle}
                  maxLength={300}
                  showCount
                  rows={6}
                ></TextArea>
                <SectionDescription>
                  Do you have any previous experience relevant to the project?
                </SectionDescription>
                <TextArea
                  id="experience"
                  style={textAreaStyle}
                  maxLength={300}
                  showCount
                  rows={6}
                ></TextArea>
              </Form.Item>
            </Space>
            <Button style={buttonStyle} type="primary" danger onClick={handleSubmit} disabled={user?.eoi.length >= 3}>
              Submit EOI
            </Button>
          </Form>
        </Row>
      </>) : (<>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", margin: "200px 450px" }}>
          <h1>EOI submitted and saved successfully <span>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </span></h1>
        </div>
      </>)}
    </>
  );
};

export default EOIDetails;
