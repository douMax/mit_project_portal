/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useEffect } from "react";
import { fetchProjectEOIs, fetchUserEOIs } from "../actions/eoi";

import mockEOIs from "../data/mockEOIs.json";

export const EOIContext = createContext();

export const EOIProvider = (props) => {
  const [eois, setEOIs] = useState([]);

  const FindProjectEOIs = async (projectId) => {
    const data = await fetchProjectEOIs(projectId);
    if (data.length !== 0) {
      setEOIs(data);
    }
  };

  const FindUserEOIs = async (applicantId) => {
    const data = await fetchUserEOIs(applicantId);
    if (data.length !== 0) {
      setEOIs(data);
    }
  };

  return (
    <EOIContext.Provider value={[eois, setEOIs, FindProjectEOIs, FindUserEOIs]}>
      {props.children}
    </EOIContext.Provider>
  );
};
