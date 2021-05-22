/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useEffect } from "react";
import { fetchProjectEOIs } from "../actions/eoi";

import mockEOIs from "../data/mockEOIs.json";

export const EOIContext = createContext();

export const EOIProvider = (props) => {
  const [eois, setEOIs] = useState([]);
  const FindProjectEOIs = async (projectId) => {
    // useEffect(async () => {
    //   const data = await fetchProjectEOIs(projectId);
    //   if (data.length !== 0) {
    //     setEOIs(data);
    //   }
    //   //setEOIs(data);
    // }, [projectId]);

    const data = await fetchProjectEOIs(projectId);
    if (data.length !== 0) {
      setEOIs(data);
    }
  };

  // const [eois, setEOIs] = useState(mockEOIs);

  // useEffect(async () => {
  //   const data = await fetchProjectEOIs(projectId);
  //   setEOIs(data);
  // }, []);

  return (
    <EOIContext.Provider value={[eois, setEOIs, FindProjectEOIs]}>
      {props.children}
    </EOIContext.Provider>
  );
};
