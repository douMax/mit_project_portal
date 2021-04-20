import React, { useContext } from "react";
import { Avatar, Badge, Space } from "antd";
import NotificationsDrawer from "./NotificationsDrawer";

import { NotificationContext } from "../../contexts/NotificationContext";

const HeaderAvatar = () => {
  //console.log(notifs.notifs.length);
  const [notifs, setNotifs] = useContext(NotificationContext);

  return (
    <div>
      <span className="avatar-item">
        <Space>
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
