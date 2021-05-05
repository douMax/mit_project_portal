import React, { useState } from "react";
import { Row, Col, Card, Button, Drawer } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

import TopicsHeader from "../BrowseProjects/TopicsHeader";
import ProjectTitle from "../BrowseProjects/ProjectTitle";
import ProjectDescription from "../BrowseProjects/ProjectDescription";
import ProjectStats from "../BrowseProjects/ProjectStats";
import ClientInfo from "../BrowseProjects/ClientInfo";
import ProjectDetail from "../BrowseProjects/ProjectDetail";

const UserProjects = ({ proj }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };
  const handleClose = () => {
    setIsDrawerVisible(false);
  };

  const {
    projId,
    title,
    topic,
    description,
    status,
    year,
    trimester,
    assigned_students,
    eoi,
    client,
    logo,
  } = proj;
  //console.log(proj);
  return (
    <Card
      style={{ marginTop: "15px", border: "1px solid red" }}
      key={projId}
      type="inner"
      hoverable="true"
    >
      <Row gutter={16}>
        <Col span={18}>
          <TopicsHeader topic={topic} />
          <ProjectTitle title={title} />
          <ProjectDescription description={description} />
          <ProjectStats
            status={status}
            year={year}
            trimester={trimester}
            assigned_students={assigned_students}
            eoi={eoi}
          />
          <Button size="small" type="primary" danger onClick={showDrawer}>
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
            <ProjectDetail selectedproject={proj} />
          </Drawer>
        </Col>
        <Col span={6}>
          <ClientInfo clientName={client} logo={logo} />
        </Col>
      </Row>
    </Card>
  );
};

export default UserProjects;
