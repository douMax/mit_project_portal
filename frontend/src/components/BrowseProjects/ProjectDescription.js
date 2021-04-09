import React from "react";
import styled from "styled-components";

const PROJECT_DESCRIPTION = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  padding-bottom: 10px;
`;

const ProjectDescription = (description) => {
  return <PROJECT_DESCRIPTION>{description.description}</PROJECT_DESCRIPTION>;
};

export default ProjectDescription;
