import React, { useContext } from "react";
import Logo from "./Logo";
import StaffNavLinks from "./StaffNavLinks";
import StudentNavLinks from "./StudentNavLinks";
import IndustryClientNavLinks from "./IndustryClientNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import styled from "styled-components";
import { USERTYPES } from "../../utils/APP_CONSTANTS";
import { useSelector } from "react-redux";


const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-bottom:20px;
`;

const Header = (props) => {
  const { auth_user, user } = useSelector(state => state.auth)
  console.log(props, auth_user, user)
  const role = props.user || (auth_user?.role || user?.job_position);
  return (
    <HeaderContainer>
      <Logo />
      {role === USERTYPES.STAFF && <StaffNavLinks />}
      {role === USERTYPES.STUDENT && <StudentNavLinks />}
      {role === USERTYPES.CLIENT && <IndustryClientNavLinks />}
      {role && (<HeaderAvatar />)}
    </HeaderContainer>
  );
};

export default Header;
