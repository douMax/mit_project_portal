import React from "react";
import { Avatar, Badge, Menu, Space, Dropdown } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      {" "}
      <a href="/signup">Sign Up Page</a>
    </Menu.Item>
    <Menu.Item>
      {" "}
      <a href="/login">Landing Page</a>
    </Menu.Item>
  </Menu>
);

const HeaderAvatar = props => {
  return (
    <Space>
      <Dropdown overlay={menu}>
        <Badge count={1}>
          <Avatar src="offspring_logo.jpg" />
        </Badge>
      </Dropdown>
      {props.username}
    </Space>
  );
};

export default HeaderAvatar;
