import React, { useState, createContext } from "react";
import mockProjects from "../data/mockProjects.json";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [project, setProjects] = useState(mockProjects);
  return (
    <ProjectContext.Provider value={[project, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
