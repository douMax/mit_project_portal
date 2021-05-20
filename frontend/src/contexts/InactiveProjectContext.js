/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext, useRef } from "react";
import { fetchInactiveProjects } from "../actions/projects";

import { putProject } from "../actions/projects";

export const InactiveProjectContext = createContext();

export const InactiveProjectProvider = (props) => {
  // TODO: trigger the fetch at first render, then trigger the fetch again whenever needed
  const [projects, setProjects] = useState([]);
  const prevProjects = useRef();

  useEffect(async () => {
    const data = await fetchInactiveProjects();
    setProjects(data);
  }, []);

  prevProjects.current = projects;

  // console.log(prevProjects.current);
  // console.log(projects);

  // useEffect(() => {
  //   putProject("60a5eded8f100e5b9f7584ef");
  // }, [props]);

  return (
    <InactiveProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </InactiveProjectContext.Provider>
  );
};
