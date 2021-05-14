import React from "react";
import styled from "styled-components";
import { Card, Button } from "antd";

const Proposals = () => {
  return (
    <Card>
      <h1>Proposal Title here</h1>
      <p>Proposal Details here</p>
      <Button type="primary" danger>
        View
      </Button>
    </Card>
  );
};

export default Proposals;
