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
};

const SectionDescription = styled.h1`
  font-size: 18px;
  padding-left: 5px;
  padding-right: 5px;
`;

const EOIDetailsLeft = () => {
  return (
    <Row style={rowStyle}>
      <Form>
        <SectionDescription>
          Write between 300 and 500 words on why you are interested in this
          project.
        </SectionDescription>
        <TextArea
          style={textAreaStyle}
          minLength={300}
          maxLength={500}
          showCount
          rows={12}
        ></TextArea>
      </Form>
    </Row>
  );
};

export default EOIDetailsLeft;
