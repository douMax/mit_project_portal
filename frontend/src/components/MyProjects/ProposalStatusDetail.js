import React from "react";
import { Button } from "antd";

const ProposalStatusDetail = ({ status }) => {
  // (status);
  if (status === "pending") {
    return (
      <Button
        type="text"
        style={{
          background: "#87CEFA",
          color: "white",
        }}
      >
        Pending
      </Button>
    );
  }
  if (status === "rejected") {
    return (
      <Button
        type="primary"
        danger
      >
        Rejected
      </Button>
    );
  }
  if (status === "completed") {
    return (
      <Button
        type="primary"
        danger
      >
        Completed
      </Button>
    );
  }
  if (status === "ongoing") {
    return (
      <Button
        type="text"
        style={{
          background: "#F0E68C",
          color: "DimGray",
        }}
      >
        Ongoing
      </Button>
    );
  }
  if (status === "open") {
    return (
      <Button
        type="text"
        style={{
          background: "turquoise",
          color: "white",
        }}
      >
        Open
      </Button>
    );
  }
  if (status === "approved") {
    return (
      <Button
        type="text"
        style={{
          background: "teal",
          color: "white",
        }}
      >
        approved
      </Button>
    );
  }
};

export default ProposalStatusDetail;
