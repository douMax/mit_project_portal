import React, { useState, createContext } from "react";
import mockStudentUsers from "../data/mockStudentUsers.json";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [student, setStudent] = useState(mockStudentUsers);
  return (
    <StudentContext.Provider value={[student, setStudent]}>
      {props.children}
    </StudentContext.Provider>
  );
};
