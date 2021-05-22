/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext } from "react";
import { fetchActiveProjects } from "../actions/projects";
import { putProject } from "../actions/projects";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  // TODO: trigger the fetch at first render, then trigger the fetch again whenever needed
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const data = await fetchActiveProjects();
    setProjects(data);
  }, []);

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export const UpdateActiveProject = (projectId = String, change = Object) => {
  putProject(projectId, change);
};
