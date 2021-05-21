/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext } from "react";
import { fetchInactiveProjects } from "../actions/projects";

import { putProject } from "../actions/projects";

export const InactiveProjectContext = createContext();

export const InactiveProjectProvider = (props) => {
  // TODO: trigger the fetch at first render, then trigger the fetch again whenever needed
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const data = await fetchInactiveProjects();
    setProjects(data);
  }, [projects]);

  return (
    <InactiveProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </InactiveProjectContext.Provider>
  );
};

export const UpdateInactiveProject = (projectId = String, change = Object) => {
  putProject(projectId, change);
};
