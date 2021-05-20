import React from "react";
import { useLocation } from "react-router-dom";

const ProposalDecision = () => {
  const location = useLocation();
  const project = location.state;
  return (
    <div>
      <h1>Project Proposal Title</h1>
      <h2>Decision with Feedback</h2>
    </div>
  );
};

export default ProposalDecision;
