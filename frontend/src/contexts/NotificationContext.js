import React, { useState, createContext } from "react";
import mockNotifications from "../data/mockNotifications.json";

export const NotificationContext = createContext();

export const NotificationProvider = (props) => {
  const [notifs, setNotifs] = useState(mockNotifications);
  return (
    <NotificationContext.Provider value={[notifs, setNotifs]}>
      {props.children}
    </NotificationContext.Provider>
  );
};
