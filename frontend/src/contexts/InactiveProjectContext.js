/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext } from "react";
import { fetchInactiveProjects } from "../actions/projects";

export const InactiveProjectContext = createContext();

export const InactiveProjectProvider = (props) => {
  // TODO: trigger the fetch at first render, then trigger the fetch again whenever needed
  const [proposals, setProposals] = useState([]);

  useEffect(async () => {
    const data = await fetchInactiveProjects();
    setProposals(data);
  }, []);

  return (
    <InactiveProjectContext.Provider value={[proposals, setProposals]}>
      {props.children}
    </InactiveProjectContext.Provider>
  );
};
