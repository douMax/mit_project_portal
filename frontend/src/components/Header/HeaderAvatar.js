import React from "react";
import { Avatar, Badge, Space } from "antd";

const HeaderAvatar = () => {
  return (
    <div className="nav-links">
      <span className="avatar-item">
        <Space>
          <Badge count={1}>
            <Avatar src="offspring_logo.jpg" />
          </Badge>
          User Name
        </Space>
      </span>
    </div>
  );
};

export default HeaderAvatar;
