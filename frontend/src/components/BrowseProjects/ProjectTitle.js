import React from "react";
import styled from "styled-components";

const PROJECT_TITLE = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const ProjectTitle = (title) => {
  return <PROJECT_TITLE>{title.title}</PROJECT_TITLE>;
};

export default ProjectTitle;
