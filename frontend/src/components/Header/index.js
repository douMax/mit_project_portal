import React, { useState } from "react";
import Logo from "./Logo";
import StaffNavLinks from "./StaffNavLinks";
import StudentNavLinks from "./StudentNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import styled from "styled-components";

const isStudent = false;
const isStaff = true;

const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => (props.theme === "dark" ? "white" : "red")};
  background-color: ${(props) => (props.theme === "dark" ? "black" : "white")};
`;

const Header = () => {
  const [notifs, setNotifs] = useState([
    {
      title: "Student added to project.",
      description:
        "Student 'Don Quixote' was added to project 'Data Scrapping La Mancha'.",
      type: "success",
      //type affects the icon which is displayed in the notification.
      //type can be success, info, warning, error.
    },
    {
      title: "New Project Prosal was submitted.",
      description:
        "Project 'Data Scrapping Fables' was added by Client 'La Fontaine' and requires approval.",
      type: "info",
      //type affects the icon which is displayed in the notification.
      //type can be success, info, warning, error.
    },
  ]);

  return (
    <HeaderContainer theme="light">
      <Logo />
      {isStaff && <StaffNavLinks />}
      {isStudent && <StudentNavLinks />}
      <HeaderAvatar notifs={notifs} />
    </HeaderContainer>
  );
};

export default Header;
