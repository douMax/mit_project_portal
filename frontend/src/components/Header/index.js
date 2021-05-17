import React, { useContext, useState } from "react";
import Logo from "./Logo";
import StaffNavLinks from "./StaffNavLinks";
import StudentNavLinks from "./StudentNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import IndustryClientNavLinks from "./IndustryClientNavLinks";
import styled from "styled-components";
import { USERTYPES } from "../../utils/APP_CONSTANTS";
import { NotificationProvider } from "../../contexts/NotificationContext";
import { UserContext } from "../../contexts/UserContext";

import mockNotifications from "../../data/mockNotifications.json";

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
  const [user] = useContext(UserContext);
  return (
    <HeaderContainer>
      <Logo />
      {user.role === USERTYPES.STAFF && <StaffNavLinks />}
      {user.role === USERTYPES.STUDENT && <StudentNavLinks />}
      {user.role === USERTYPES.INDUSTRY_CLIENT && <IndustryClientNavLinks />}
      <NotificationProvider>
        <HeaderAvatar />
      </NotificationProvider>
    </HeaderContainer>
  );
};

export default Header;
