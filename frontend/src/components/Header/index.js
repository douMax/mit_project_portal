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

const Header = () => {
  const [notifs] = useState([
    {
      id: "1",
      title: "Student added to project.",
      description:
        "Student 'Don Quixote' was added to project 'Data Scrapping La Mancha'.",
      type: "success",
      //type affects the icon which is displayed in the notification.
      //type can be success, info, warning, error.
    },
    {
      id: "2",
      title: "New Project Prosal was submitted.",
      description:
        "Project 'Data Scrapping Fables' was added by Client 'La Fontaine' and requires approval.",
      type: "info",
      //type affects the icon which is displayed in the notification.
      //type can be success, info, warning, error.
    },
  ]);

  return (
    <HeaderContainer>
      <Logo />
      {USERTYPES.STAFF && <StaffNavLinks />}
      {USERTYPES.STUDENT && <StudentNavLinks />}
      <HeaderAvatar notifs={notifs} />
    </HeaderContainer>
  );
};

export default Header;
