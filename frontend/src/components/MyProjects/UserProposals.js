import React, { useState } from "react";
import { Row, Col, Card, Button, Drawer } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

import ProjectTitle from "../BrowseProjects/ProjectTitle";
import ProjectDescription from "../BrowseProjects/ProjectDescription";
import TopicsHeader from "../BrowseProjects/TopicsHeader";

import ProposalStatusDetail from "./ProposalStatusDetail";

const UserProposals = ({ topic, title, description, status }) => {
  //console.log(propId, title, description);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };
  const handleClose = () => {
    setIsDrawerVisible(false);
  };
  return (
    <Card style={{ marginBottom: "15px" }} type="inner" hoverable="true">
      <Row gutter={16}>
        <Col span={24}>
          <TopicsHeader topic={topic} />
          <ProjectTitle title={title} />
          <ProjectDescription description={description} />
          <ProposalStatusDetail status={status} />
        </Col>
      </Row>
    </Card>
  );
};

export default UserProposals;
