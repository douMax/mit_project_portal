import React from "react";
import { Avatar, Badge, Space, notification, Button } from "antd";
import { hoverOver } from "../../utils/APP_FUNCTIONS";
import { hoverOut } from "../../utils/APP_FUNCTIONS";

const HeaderAvatar = (notifs) => {
  const showNotifications = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        danger
        size="small"
        onClick={() => notification.close(key)}
      >
        Delete Notification
      </Button>
    );

    /**/
    notifs.notifs.map((notif) =>
      notification.open({
        //type affects the icon which is displayed in the notification.
        //type can be success, info, warning, error.
        message: notif.title, //notif.title,
        description: notif.description, //notif.description,
        btn,
        key,
      })
    );
  };

  return (
    <div>
      <span className="avatar-item">
        <Space>
          <Badge overflowCount={9} count={1}>
            <Avatar
              onMouseOver={hoverOver}
              onMouseOut={hoverOut}
              onClick={showNotifications}
              src="offspring_logo.jpg"
            />
          </Badge>
          User Name
        </Space>
      </span>
    </div>
  );
};

export default HeaderAvatar;
