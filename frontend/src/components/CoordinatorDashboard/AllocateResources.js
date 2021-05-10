import React, { useState, useContext } from "react";
import { Button, Drawer, Space, Card } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import styled from "styled-components";

import { ProjectContext } from "../../contexts/ProjectContext";
import { EOIContext } from "../../contexts/EOIContext";

import TopicsHeader from "../BrowseProjects/TopicsHeader";
import ProjectTitle from "../BrowseProjects/ProjectTitle";
import StudentEOIDetail from "./StudentEOIDetail";

const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const AllocateResources = ({ projId }) => {
  const [eois, setEOIs] = useContext(EOIContext);
  const projEOIS = [];
  //Temporary code to retrieve specific project from all projects.
  //After frontend is connected to backed, we can have an API call to GET only the specific project.
  const [project, setProject] = useContext(ProjectContext);
  const currentproject = [];
  project.forEach((p) => {
    if (p.projId === projId) {
      currentproject.push(p);
      eois.forEach((e) => {
        if (e.projId === p.projId) {
          projEOIS.push(e);
        }
      });
    }
  });
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showDrawer = () => {
    //console.log(projId);
    setIsDrawerVisible(true);
    //console.log(currentproject);
    //console.log(eois);
    //console.log(projEOIS);
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
        <Space>
          <SectionTitle>Allocate Project</SectionTitle>
          <SectionTitle style={{ marginLeft: 500 }}>
            T{currentproject[0].trimester} {currentproject[0].year}
          </SectionTitle>
        </Space>
        <Card>
          <TopicsHeader topic={currentproject[0].topic} />
          <ProjectTitle title={currentproject[0].title} />
          {projEOIS.map((eoi) => (
            <StudentEOIDetail key={eoi.id} eoi={eoi} />
          ))}
        </Card>
      </Drawer>
    </div>
  );
};

export default AllocateResources;
