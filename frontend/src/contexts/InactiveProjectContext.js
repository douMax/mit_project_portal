/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext } from "react";
import { fetchInactiveProjects } from "../actions/projects";

export const InactiveProjectContext = createContext();

export const InactiveProjectProvider = (props) => {
  // TODO: trigger the fetch at first render, then trigger the fetch again whenever needed
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const data = await fetchInactiveProjects();
    setProjects(data);
  }, []);

  return (
    <InactiveProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </InactiveProjectContext.Provider>
  );
};
