import React from "react";
import { Card, Button, Space } from "antd";

import ProjectTitle from "../BrowseProjects/ProjectTitle";
import ProjectDescription from "../BrowseProjects/ProjectDescription";
import ViewProjectDetails from "./ViewProjectDetails";
import AllocateResources from "./AllocateResources";

const OpenProjects = ({ project }) => {
  //console.log(project);

  return (
    <Card style={{ marginBottom: "15px" }} type="inner" hoverable="true">
      <ProjectTitle title={project.title} />
      <ProjectDescription description={project.description} />
      <Space>
        <ViewProjectDetails project={project} />
        <AllocateResources />
      </Space>
    </Card>
  );
};

export default OpenProjects;
