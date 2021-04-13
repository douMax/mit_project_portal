import React, { useState } from "react";
import { Avatar, Badge, Space, Button, Drawer } from "antd";
import NotificationsDrawer from "./NotificationsDrawer";

const HeaderAvatar = (notifs) => {
  //console.log(notifs.notifs.length);

  return (
    <div>
      <span className="avatar-item">
        <Space>
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
