import React, { useState } from "react";
import Logo from "./Logo";
import StaffNavLinks from "./StaffNavLinks";
import StudentNavLinks from "./StudentNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import styled from "styled-components";
import { USERTYPES } from "../../utils/APP_CONSTANTS";

const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  background-color: #fff;
`;

const Header = props => {
  let NavLinks;
  switch (props.userType) {
    case USERTYPES.STUDENT:
      NavLinks = StudentNavLinks;
      break;
    case USERTYPES.STAFF:
      NavLinks = StaffNavLinks;
    default:
      NavLinks = StaffNavLinks;
  }
  return (
    <HeaderContainer>
      <Logo />
      <NavLinks />
      <HeaderAvatar username={props.username} />
    </HeaderContainer>
  );
};

export default Header;
