import React, { useState } from "react";
import { Space, Image } from "antd";
import LoginTab from "./LoginTab";
import styled from "styled-components";
import Header from "../Header";
import Logo from "../Header/Logo";

const LandingContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <div style={{overflow:"hidden", position:"sticky"}}>
    <Logo />
      <LandingContainer>
        <Space direction="vertical">
          <h1>MIT Project Portal</h1>
          <LoginTab />
        </Space>
        <Image height="110vh" src="mit.png" preview={false} style={{marginTop:"-100px"}} />
      </LandingContainer>
      <div style={{background: "#000000",color: "#fff", textAlign: "center", position: "fixed", bottom:"0", left:"0"}}>
        (c) Melbourne Institute of Technology
    </div>
    </div>
  );
};

export default LandingPage;
