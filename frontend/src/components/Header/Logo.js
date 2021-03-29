import React from "react";
import './header.css';
import StudentNavLinks from "./StudentNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import StaffNavLinks from "./StaffNavLinks";

let isStudent = false;
let isSignedUp = true;
let isStaff = true;

const Logo = props => {

  if ( isSignedUp === true && isStudent === true ) {
    return (
      <nav>
          <img src="mitlogo.svg" alt=""/>
          <div className="nav-header">
            MIT Project Portal
          </div>
          <StudentNavLinks />
          <HeaderAvatar />
      </nav>
      ); 
  }

  else if ( isSignedUp === true && isStaff === true ) {
    return (
      <nav>
          <img src="mitlogo.svg" alt=""/>
          <div className="nav-header">
            MIT Project Portal
          </div>
          <StaffNavLinks />
          <HeaderAvatar />
      </nav>
      ); 
  }

  else {
    return (
      <nav>
          <img src="mitlogo.svg" alt=""/>
          <div className="nav-header">
            MIT Project Portal
          </div>
      </nav>
    )
  }

};

export default Logo;
