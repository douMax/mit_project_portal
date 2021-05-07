import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

const AllocateResources = ({ project }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showDrawer = () => {
    console.log(project);
    setIsDrawerVisible(true);
  };
  const handleClose = () => {
    setIsDrawerVisible(false);
  };
  return (
    <div>
      <Button
        type="text"
        style={{ background: "turquoise", marginLeft: 30 }}
        onClick={showDrawer}
      >
        Allocate Resources
      </Button>
      <Drawer
        visible={isDrawerVisible}
        maskClosable={false}
        onClose={handleClose}
        placement="right"
        width={800}
        closeIcon={<CloseCircleFilled style={{ fontSize: 20, color: "red" }} />}
      >
        <h1>Project Title</h1>
        <li>Student 1 Details</li>
        <li>Student 2 Details</li>
        <li>Student 3 Details</li>
      </Drawer>
    </div>
  );
};

export default AllocateResources;
