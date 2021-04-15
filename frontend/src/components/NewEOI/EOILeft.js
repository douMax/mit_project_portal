import React from "react";
import styled from "styled-components";
import { Form } from "antd";

import { EOI_LIMIT } from "../../utils/APP_CONSTANTS";
import mockEOIs from "../../data/mockEOIs.json";

const PageTitle = styled.h1`
  font-size: 36px;
`;

const LimitDescription = styled.div`
  font-size: 18px;
`;

const eoi_limit = EOI_LIMIT.value;
const eoi_left = eoi_limit - mockEOIs.length;

const EOILeft = () => {
  return (
    <Form>
      <PageTitle>Expression Of Interest</PageTitle>
      <LimitDescription>
        Please note: each student can submit {eoi_limit} EOIs at most.
        <br />
        Number of EOIs left:{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>{eoi_left}</span>
      </LimitDescription>
    </Form>
  );
};

export default EOILeft;
