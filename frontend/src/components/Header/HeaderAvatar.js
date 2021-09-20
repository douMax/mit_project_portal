import React, { useContext } from "react";
import { Avatar, Badge, Dropdown, Menu, Space } from "antd";
import NotificationsDrawer from "./NotificationsDrawer";
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/authRedux/actions";
import { useHistory } from "react-router-dom";
import Title from "antd/lib/typography/Title";

// import { Link } from "react-router-dom";
// import ROUTES from "../../utils/routes";
// import { NotificationContext } from "../../contexts/NotificationContext";
// import { UserContext } from "../../contexts/UserContext";
const HeaderAvatar = () => {
  //console.log(notifs.notifs.length);

  // const [notifs, setNotifs] = useContext(NotificationContext);
  // const [user] = useContext(UserContext);
  // const userName = user.userName;

  const dispatch = useDispatch();

  const { user, auth_user } = useSelector(state => state.auth);
  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={event => {
          history.push("/change-password");
        }}>Change Password</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={event => {
          dispatch(logoutUser())
          history.push("/")
        }}>Logout</div>
      </Menu.Item>
      {/* <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item> */}
    </Menu>
  );

  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
      <span className="avatar-item">
        <Space>
          <Dropdown overlay={menu} placement="bottomRight">
            <Avatar style={{ backgroundColor: "#87d068", cursor: "pointer" }} icon={<UserOutlined />} />
          </Dropdown>
          {user && (<Title level={5}>{` ${user?.first_name} ${user?.last_name} `}</Title>)}
          {/* <Badge overflowCount={9} count={5}>
            <NotificationsDrawer />
          </Badge> */}
        </Space>
      </span>
    </div>
  );
};

export default HeaderAvatar;
