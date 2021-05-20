import React, { useState, createContext } from "react";
import mockSignUpRequests from "../data/mockSignUpRequests.json";

export const SignUpRequestContext = createContext();

export const SignUpRequestProvider = (props) => {
  const [signUpRequest, setsignUpRequest] = useState(mockSignUpRequests);
  return (
    <SignUpRequestContext.Provider value={[signUpRequest, setsignUpRequest]}>
      {props.children}
    </SignUpRequestContext.Provider>
  );
};
