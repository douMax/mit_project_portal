import React from "react";
import './header.css';
import StudentNavLinks from "./StudentNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import StaffNavLink from "./StaffNavLinks";

let isStudent = true;

const Logo = props => {
  return (
  <nav>
      <img src="mitlogo.svg" alt=""/>
      <div className="nav-header">
        MIT Project Portal
      </div>
      { isStudent ? <StudentNavLinks /> : <StaffNavLink /> }
      <HeaderAvatar />
  </nav>
  );
};

export default Logo;
