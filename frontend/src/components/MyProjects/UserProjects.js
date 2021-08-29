import React, { useState } from "react";
import { Row, Col, Card, Button, Drawer } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

import TopicsHeader from "../Browse_Projects/TopicsHeader";
import ProjectTitle from "../Browse_Projects/ProjectTitle";
import ProjectDescription from "../Browse_Projects/ProjectDescription";
import ProjectStats from "../Browse_Projects/ProjectStats";
import ProjectDetail from "../Browse_Projects/ProjectDetail";

const UserProjects = ({ project }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const { title, status, resources, topics, background, eoi, group, location, objectives, other } = project;

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };
  const handleClose = () => {
    setIsDrawerVisible(false);
  };

  console.log(project, "hello");
  return (
    <Card
      style={{ marginBottom: "15px" }}
      key={"project"}
      type="inner"
      hoverable="true"
    >
      <Row gutter={16}>
        <Col span={18}>
          <TopicsHeader topic={topics} />
          <ProjectTitle title={title} />
          <ProjectDescription description={background} />
          <ProjectStats
            status={status}
            year={"2021"}
            trimester={"T2"}
            assigned_students={group}
            eoi={eoi}
          />
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            danger
            onClick={showDrawer}
            style={{ marginLeft: 50, marginTop: 105 }}
          >
            View
          </Button>
          <Drawer
            visible={isDrawerVisible}
            maskClosable={false}
            onClose={handleClose}
            placement="left"
            width={650}
            closeIcon={
              <CloseCircleFilled style={{ fontSize: 20, color: "red" }} />
            }
          >
            <ProjectDetail selectedproject={project} />
          </Drawer>
        </Col>
      </Row>
    </Card>
  );
};

export default UserProjects;
