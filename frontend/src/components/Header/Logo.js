import React from "react";
import './header.css';
import StudentNavLinks from "./StudentNavLinks";

const Logo = props => {
  return (
  <nav>
      <img src="mitlogo.svg" alt=""/>
      <div className="nav-header">MIT Project Portal</div>
      <StudentNavLinks />
  </nav>
  );
};

export default Logo;
