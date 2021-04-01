import React, { useState } from "react";
import Logo from "./Logo";
import StaffNavLinks from "./StaffNavLinks";
import StudentNavLinks from "./StudentNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import { Space } from "antd";
import styled from "styled-components";

const isStudent = false;
const isStaff = true;

const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => (props.theme === "dark" ? "white" : "red")};
  background-color: ${props => (props.theme === "dark" ? "black" : "white")};
`;

const Header = () => {
  return (
    <HeaderContainer theme="light">
      <Logo />
      {isStaff && <StaffNavLinks />}
      {isStudent && <StudentNavLinks />}
      <HeaderAvatar />
    </HeaderContainer>
  );
};

export default Header;
