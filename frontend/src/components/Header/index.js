import React, { useState } from "react";
import Logo from "./Logo";
import StaffNavLinks from "./StaffNavLinks";
import StudentNavLinks from "./StudentNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  background-color: #fff;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <StaffNavLinks />
      <HeaderAvatar />
    </HeaderContainer>
  );
};

export default Header;
