import React from "react";
import styled from "styled-components";
import { Row, Form, Input, Space, Button } from "antd";
import { COLORS } from "../../utils/APP_CONSTANTS";

const { TextArea } = Input;

const formStyle = {
  background: "white",
  marginTop: 5,
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
  return (
    <Row>
      <Form style={formStyle}>
        <Space>
          <Form.Item style={formLeftStyle}>
            <SectionDescription>
              Write between 300 and 500 words why you are interested in this
              project.
            </SectionDescription>
            <TextArea
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
          </Form.Item>
        </Space>
        <Button style={buttonStyle} type="primary" danger>
          Submit EOI
        </Button>
      </Form>
    </Row>
  );
};

export default EOIDetails;
