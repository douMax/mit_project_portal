import React, { useState, createContext } from "react";
import mockUser from "../data/mockUser.json";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(mockUser);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
