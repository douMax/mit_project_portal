import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const ProjectTitle = title => {
  return <TitleContainer>{title.title}</TitleContainer>;
};

export default ProjectTitle;
