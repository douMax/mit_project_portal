import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const menuList = [];

const Header = () => {
  // intialise the state
  const [count, setCount] = useState(0);

  return (
    <div>
      <Logo />
    </div>
  );
};

export default Header;
