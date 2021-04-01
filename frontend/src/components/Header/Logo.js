import React from "react";
import "./header.css";
import { Space } from "antd";

const Logo = () => {
  return (
    <Space>
      <img src="mitlogo.svg" alt="" />
      <div>MIT Project Portal</div>
    </Space>
  );
};

export default Logo;
