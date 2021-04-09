import React from "react";
import styled from "styled-components";

import { Card } from "antd";

const SECTION_TITLE = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
  padding-top: 10px;
`;

const ProjectDetail = (projdets) => {
  return (
    <div>
      <SECTION_TITLE>Background and Rationale for Project:</SECTION_TITLE>
      <Card style={{ width: 620, height: 100, borderColor: "red" }}>
        {projdets.background_rationale}
      </Card>
      <SECTION_TITLE>Project Resources:</SECTION_TITLE>
      <Card style={{ width: 620, height: 100, borderColor: "red" }}>
        {projdets.resources}
      </Card>
      <SECTION_TITLE>Project Goals and Objectives:</SECTION_TITLE>
      <Card style={{ width: 620, height: 100, borderColor: "red" }}>
        {projdets.goals_objectives}
      </Card>
    </div>
  );
};

export default ProjectDetail;
