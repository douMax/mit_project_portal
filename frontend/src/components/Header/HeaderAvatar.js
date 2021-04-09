import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";
import { Avatar, Badge, Menu, Space, Dropdown } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <Link to={ROUTES.DEV_SETTINGS}>Dev</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={ROUTES.LOG_IN}>Login</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={ROUTES.SIGN_UP}>Signup</Link>
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
