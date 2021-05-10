import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

import ProjectDetail from "../BrowseProjects/ProjectDetail";

const ViewProjectDetails = ({ project }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showDrawer = () => {
    //console.log(project);
    setIsDrawerVisible(true);
  };
  const handleClose = () => {
    setIsDrawerVisible(false);
  };
  return (
    <div>
      <Button type="primary" danger onClick={showDrawer}>
        View Project Details
      </Button>
      <Drawer
        visible={isDrawerVisible}
        maskClosable={false}
        onClose={handleClose}
        placement="left"
        width={650}
        closeIcon={<CloseCircleFilled style={{ fontSize: 20, color: "red" }} />}
      >
        <ProjectDetail selectedproject={project} />
      </Drawer>
    </div>
  );
};

export default ViewProjectDetails;
