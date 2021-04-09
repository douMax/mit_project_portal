import React from "react";
import { Space } from "antd";
import styled from "styled-components";
import { COLORS } from "../../utils/APP_CONSTANTS";

const LogoText = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 36px;
  height: 36px;
  padding: 0 10px;
  background-color: ${COLORS.PrimaryRed};
  border-radius: 5px;
  color: #fff;
`;

const Logo = () => {
  return (
    <Space>
      <img height="42px" src="mitlogo.svg" alt="" />
      <LogoText>PROJECT PORTAL</LogoText>
    </Space>
  );
};

export default Logo;
