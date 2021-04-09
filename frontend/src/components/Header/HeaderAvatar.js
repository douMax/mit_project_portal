import React from "react";
import { Avatar, Badge, Space } from "antd";
import { hoverOver } from "../../utils/APP_FUNCTIONS";
import { hoverOut } from "../../utils/APP_FUNCTIONS";

const HeaderAvatar = () => {
  return (
    <div>
      <span className="avatar-item">
        <Space>
          <Badge overflowCount={9} count={1}>
            <Avatar
              onMouseOver={hoverOver}
              onMouseOut={hoverOut}
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
