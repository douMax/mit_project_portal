/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext } from "react";
import { fetchInactiveProjects } from "../actions/projects";

import { putProject, addProject } from "../actions/projects";

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

//Update Inactive Projects. E.g., by PRP Chair to approve, reject, or request changes to project proposal.
//Project is inactive unless it is approved by PRP.
export const UpdateInactiveProject = (projectId = String, change = Object) => {
  putProject(projectId, change);
};

//Add new project. New project is only a proposal.
//New projects will be inactive untill they are approved by PRP.
export const AddNewProjectProposal = (newProject) => {
  addProject(newProject);
};
