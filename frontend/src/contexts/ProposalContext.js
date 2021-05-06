import React, { useState, createContext } from "react";
import mockProposals from "../data/mockProposals.json";

export const ProposalContext = createContext();

export const ProposalProvider = (props) => {
  const [proposal, setProposal] = useState(mockProposals);
  return (
    <ProposalContext.Provider value={[proposal, setProposal]}>
      {props.children}
    </ProposalContext.Provider>
  );
};
