import React from "react";
import './header.css';

const Logo = props => {
  return (
  <nav>
      <img src="mitlogo.svg" alt=""/>
      <div className="nav-header">MIT Project Portal</div>
  </nav>
  );
};

export default Logo;
