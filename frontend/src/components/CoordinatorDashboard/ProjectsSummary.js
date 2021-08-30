import React from "react";
import { Card, Space } from "antd";

import ProjectTitle from "../Browse_Projects/ProjectTitle";
import ProjectDescription from "../Browse_Projects/ProjectDescription";
import ViewProjectDetails from "./ViewProjectDetails";
import AllocateResources from "./AllocateResources";

const ProjectsSummary = ({ project }) => {
  //console.log(project);
  return (
    <Card style={{ marginBottom: "15px" }} type="inner" hoverable="true">
      <ProjectTitle title={project.projectTitle} />
      <ProjectDescription description={project.abstract} />
      <Space>
        <ViewProjectDetails project={project} />
        <AllocateResources projId={project._id} />
      </Space>
    </Card>
  );
};

export default ProjectsSummary;
