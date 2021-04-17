import React, { useState } from "react";
import { Avatar, Badge, Space, Button, Drawer } from "antd";
import NotificationsDrawer from "./NotificationsDrawer";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";

const HeaderAvatar = notifs => {
  //console.log(notifs.notifs.length);

  return (
    <div>
      <span className="avatar-item">
        <Space>
          <Link to={ROUTES.SIGN_UP}>Signup</Link>
          <Link to={ROUTES.LOG_IN}>Login</Link>
          <Link to={ROUTES.DEV_SETTINGS}>Dev</Link>
          <Avatar src="offspring_logo.jpg" />
          User Name
          <Badge overflowCount={9} count={notifs.notifs.length}>
            <NotificationsDrawer notifs={notifs.notifs} />
          </Badge>
        </Space>
      </span>
    </div>
  );
};

export default HeaderAvatar;
