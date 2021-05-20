import React, { useState, useEffect, createContext } from "react";
import mockProjects from "../data/mockProjects.json";
import fetchEOIsByStudent from "../actions/fetchEOIsByStudent";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  // TODO: trigger the fetch at first render, then trigger the fetch again whenever needed
  // useEffect(() => {
  //   fetchEOIsByStudent();
  // }, [props]);

  const [projects, setProjects] = useState(mockProjects);
  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
