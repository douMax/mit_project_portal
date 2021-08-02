import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/APP_CONSTANTS";
import logo from "../../assets/mit_logo.png";

// const LogoText = styled.div`
//   font-size: 16px;
//   font-weight: 500;
//   margin: 0;
//   line-height: 36px;
//   height: 36px;
//   padding: 0 10px;
//   background-color: ${COLORS.PrimaryRed};
//   border-radius: 5px;
//   color: #fff;
// `;

const Logo = () => {
  return (
    <div>
      <img width="200" src={logo} alt="" />
      {/*<LogoText>PROJECT PORTAL</LogoText>*/}
    </div>
  );
};

export default Logo;
