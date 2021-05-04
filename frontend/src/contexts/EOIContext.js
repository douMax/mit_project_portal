import React, { useState, createContext } from "react";
import mockEOIs from "../data/mockEOIs.json";

export const EOIContext = createContext();

export const EOIProvider = (props) => {
  const [eois, setEOIs] = useState(mockEOIs);
  return (
    <EOIContext.Provider value={[eois, setEOIs]}>
      {props.children}
    </EOIContext.Provider>
  );
};
