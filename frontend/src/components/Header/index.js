import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const menuList = [];

const Header = () => {
  // intialise the state
  const [count, setCount] = useState(0);

  return (
    <div>
      <Logo count={count} />
      <Menu menuNames={menuList} count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        PLUS
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        MINUS
      </button>
    </div>
  );
};

export default Header;
