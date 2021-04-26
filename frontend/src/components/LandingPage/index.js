import React, { useState } from "react";
import { Space, Image } from "antd";
import LoginTab from "./LoginTab";
import styled from "styled-components";

const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <Space direction="vertical">
        <h1>MIT Project Portal</h1>
        <LoginTab />
      </Space>
      <Image height="70vh" src="mit.png" preview={false} />
    </LandingContainer>
  );
};

export default LandingPage;
