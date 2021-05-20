import React, { useState, createContext } from "react";
import mockStudents from "../data/mockStudents.json";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [student, setStudent] = useState(mockStudents);
  return (
    <StudentContext.Provider value={[student, setStudent]}>
      {props.children}
    </StudentContext.Provider>
  );
};
