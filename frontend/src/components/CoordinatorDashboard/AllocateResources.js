/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
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
  //console.log(projId);
  const [eois, setEOIs, FindProjectEOIs] = useContext(EOIContext);
  useEffect(() => {
    FindProjectEOIs(projId);
  }, []);
  const [project, setProject] = useContext(ProjectContext);
  const currentproject = [];
  project.forEach((p) => {
    if (p._id === projId) {
      currentproject.push(p);
    }
  });
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showDrawer = () => {
    //console.log(projId);
    setIsDrawerVisible(true);
    //console.log(currentproject);
    //console.log(eois);
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
            {currentproject[0].termInfo} {currentproject[0].yearInfo}
          </SectionTitle>
        </Space>
        <Card>
          <TopicsHeader topic={currentproject[0].topics} />
          <ProjectTitle title={currentproject[0].projectTitle} />
          {eois.map((eoi) => (
            <StudentEOIDetail key={eoi._id} eoi={eoi} />
          ))}
        </Card>
      </Drawer>
    </div>
  );
};

export default AllocateResources;
