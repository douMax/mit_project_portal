import React, { useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Row, Form, Input, Space, Button } from "antd";
import { COLORS } from "../../utils/APP_CONSTANTS";

import { EOIContext } from "../../contexts/EOIContext";
import { UserContext } from "../../contexts/UserContext";

const { TextArea } = Input;

const formStyle = {
  background: "white",
  marginTop: 5,
  paddingTop: 5,
  paddingBottom: 10,
};

const formLeftStyle = {
  width: 628,
  paddingLeft: 10,
  paddingRight: 10,
};

const formRightStyle = {
  width: 629,
  paddingLeft: 10,
  paddingRight: 10,
};

const textAreaStyle = {
  border: `0.5px ${COLORS.PrimaryRed} solid`,
  borderRadius: "5px",
};

const buttonStyle = {
  marginLeft: 1155,
};

const SectionDescription = styled.h1`
  font-size: 18px;
  padding-left: 5px;
  padding-right: 5px;
`;

const EOIDetails = () => {
  const location = useLocation();
  const project = location.state;
  const [eois, setEOIs] = useContext(EOIContext);
  const [user] = useContext(UserContext);
  const newEOI = () => {
    const id = (eois.length + 1).toString();
    const projId = project.projId;
    const userId = user.userId;
    const eoi_sub_date = new Date();
    const interest = document.getElementById("interest").value;
    const achieve = document.getElementById("achieve").value;
    const experience = document.getElementById("experience").value;
    const neweoi = {
      id: id,
      projId: projId,
      userId: userId,
      eoi_sub_date: eoi_sub_date,
      interest: interest,
      achieve: achieve,
      experience: experience,
    };
    setEOIs((prevEOIs) => [...prevEOIs, neweoi]);
  };
  return (
    <Row>
      <Form style={formStyle}>
        {console.log(eois)}
        <Space>
          <Form.Item style={formLeftStyle}>
            <SectionDescription>
              Write between 300 and 500 words why you are interested in this
              project.
            </SectionDescription>
            <TextArea
              id="interest"
              style={textAreaStyle}
              minLength={300}
              maxLength={500}
              showCount
              rows={11}
            ></TextArea>
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
              rows={4}
            ></TextArea>
            <SectionDescription>
              Do you have any previous experience relevant to the project?
            </SectionDescription>
            <TextArea
              id="experience"
              style={textAreaStyle}
              maxLength={300}
              showCount
              rows={4}
            ></TextArea>
          </Form.Item>
        </Space>
        <Button style={buttonStyle} type="primary" danger onClick={newEOI}>
          Submit EOI
        </Button>
      </Form>
    </Row>
  );
};

export default EOIDetails;
