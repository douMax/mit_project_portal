import React from "react";
import styled from "styled-components";
import { Row, Form, Input } from "antd";
import { COLORS } from "../../utils/APP_CONSTANTS";

const { TextArea } = Input;

const rowStyle = {
  background: "white",
  marginTop: 10,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 5,
};

const textAreaStyle = {
  border: `0.5px ${COLORS.PrimaryRed} solid`,
  borderRadius: "5px",
  marginBottom: 21,
};

const SectionDescription = styled.h1`
  font-size: 18px;
  padding-left: 5px;
  padding-right: 5px;
`;

const EOIDetailsLeft = () => {
  return (
    <Row style={rowStyle}>
      <Form style={{ width: 615 }}>
        <SectionDescription>
          What do you hope to achieve with this project?
        </SectionDescription>
        <TextArea
          style={textAreaStyle}
          maxLength={300}
          showCount
          rows={4}
        ></TextArea>
        <SectionDescription>
          Do you have any previous experience relevant to the project?
        </SectionDescription>
        <TextArea
          style={textAreaStyle}
          maxLength={300}
          showCount
          rows={4}
        ></TextArea>
      </Form>
    </Row>
  );
};

export default EOIDetailsLeft;
