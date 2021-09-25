import React from "react";
import { Row, Col, Card } from "antd";
import ProjectTitle from "../Browse_Projects/ProjectTitle";
import ProjectDescription from "../Browse_Projects/ProjectDescription";
import ProposalStatusDetail from "./ProposalStatusDetail";

const UserProposals = ({ proposal }) => {
  // (proposal);
  const { title, status, background } = proposal;
  // const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // const showDrawer = () => {
  //   setIsDrawerVisible(true);
  // };
  // const handleClose = () => {
  //   setIsDrawerVisible(false);
  // };
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
