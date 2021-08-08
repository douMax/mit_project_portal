import React, { useContext } from "react";
import Logo from "./Logo";
import StaffNavLinks from "./StaffNavLinks";
import StudentNavLinks from "./StudentNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import IndustryClientNavLinks from "./IndustryClientNavLinks";
import styled from "styled-components";
import { USERTYPES } from "../../utils/APP_CONSTANTS";
import { useSelector } from "react-redux";


const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  // padding: 0 50px;
  align-items: center;
  background-color: #fff;
`;

const Header = () => {
  const user = useSelector(state => state.auth.auth_user)
  console.log(user)
  return (
    <HeaderContainer>
      <Logo />
      {user.role === USERTYPES.STAFF && <StaffNavLinks />}
      {user.role === USERTYPES.STUDENT && <StudentNavLinks />}
      {user.role === USERTYPES.CLIENT && <IndustryClientNavLinks />}
      <HeaderAvatar />
    </HeaderContainer>
  );
};

export default Header;
