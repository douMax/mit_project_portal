import React, { useContext, useState } from "react";
import { Avatar, Badge, Space, Button, Drawer } from "antd";
import NotificationsDrawer from "./NotificationsDrawer";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";
import { NotificationContext } from "../../contexts/NotificationContext";

const HeaderAvatar = () => {
  //console.log(notifs.notifs.length);

  const [notifs, setNotifs] = useContext(NotificationContext);

  return (
    <div>
      <span className="avatar-item">
        <Space>
          <Link to={ROUTES.SIGN_UP}>Signup</Link>
          <Link to={ROUTES.LOG_IN}>Login</Link>
          <Link to={ROUTES.DEV_SETTINGS}>Dev</Link>
          <Avatar src="offspring_logo.jpg" />
          User Name
          <Badge overflowCount={9} count={notifs.length}>
            <NotificationsDrawer />
          </Badge>
        </Space>
      </span>
    </div>
  );
};

export default HeaderAvatar;
