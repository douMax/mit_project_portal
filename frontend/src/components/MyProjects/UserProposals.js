import React, { useState } from "react";
import { Row, Col, Card, Button, Drawer } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

import ProjectTitle from "../BrowseProjects/ProjectTitle";
import ProjectDescription from "../BrowseProjects/ProjectDescription";
import TopicsHeader from "../BrowseProjects/TopicsHeader";
import ProposalStatusDetail from "./ProposalStatusDetail";
import ProjectDetail from "../BrowseProjects/ProjectDetail";

const UserProposals = ({ proposal }) => {
  console.log(proposal);
  const { title, status, resources, topics, background, eoi, group, location, objectives, other } = proposal;
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
          <Row>
            <Col span={12}>
              <ProjectTitle title={title} />
            </Col>
            <Col span={12}>
              <ProposalStatusDetail status={status} />
            </Col>
          </Row>
          <ProjectDescription description={background} />
          {/* <Button
            type="primary"
            danger
            onClick={showDrawer}
            style={{ marginLeft: 330 }}
          >
            View
          </Button> */}
          {/* <Drawer
            visible={isDrawerVisible}
            maskClosable={false}
            onClose={handleClose}
            placement="right"
            width={650}
            closeIcon={
              <CloseCircleFilled style={{ fontSize: 20, color: "red" }} />
            }
          >
            <ProjectDetail selectedproject={proposal} />
          </Drawer> */}
        </Col>
      </Row>
    </Card>
  );
};

export default UserProposals;
