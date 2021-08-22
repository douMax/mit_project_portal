import React from "react";
import logo from "../../assets/mit_logo.png";
import styled from "styled-components";
import { COLORS } from "../../utils/APP_CONSTANTS";
import { Link } from "react-router-dom";

const LogoText = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
  line-height: 36px;
  height: 36px;
  padding: 0 10px;
  background-color: ${COLORS.PrimaryRed};
  border-radius: 5px;
  color: #fff;
`;

const Logo = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
      <div>
        <img width="200" src={logo && logo} alt="" />
      </div>
      <LogoText>PROJECT PORTAL</LogoText>
    </div>
  );
};

export default Logo;
