import React from "react";

const Menu = props => {
  const { menuNames } = props;
  return (
    <ul>
      {menuNames.map(menu => {
        return <li>{menu}</li>;
      })}
    </ul>
  );
};

export default Menu;
