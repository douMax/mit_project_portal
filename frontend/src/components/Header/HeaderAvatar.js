import React, { useContext } from "react";
import { Avatar, Badge, Dropdown, Menu, Space } from "antd";
import NotificationsDrawer from "./NotificationsDrawer";
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/authRedux/actions";
import { useHistory } from "react-router-dom";

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

  const { is_auth } = useSelector(state => state.auth)
  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={event => {
          dispatch(logoutUser())
          history.push("/")
          // console.log("logout", is_auth)
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
          {/* <Link to={ROUTES.SIGN_UP}>Signup</Link>
          <Link to={ROUTES.LOG_IN}>Login</Link>
          <Link to={ROUTES.DEV_SETTINGS}>Dev</Link> */}
          <Dropdown overlay={menu} placement="bottomRight">
            <Avatar style={{ backgroundColor: "#87d068", cursor: "pointer" }} icon={<UserOutlined />} />
          </Dropdown>
          <Badge overflowCount={9} count={5}>
            <NotificationsDrawer />
          </Badge>
        </Space>
      </span>
    </div>
  );
};

export default HeaderAvatar;
