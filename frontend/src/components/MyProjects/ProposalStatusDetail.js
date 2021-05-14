import React from "react";
import { Button } from "antd";

const ProposalStatusDetail = ({ status }) => {
  if (status === "Waiting for Approval") {
    return (
      <Button
        type="text"
        //onClick={showDrawer}
        style={{
          background: "#87CEFA",
          color: "white",
        }}
      >
        Waiting For Approval
      </Button>
    );
  }
  if (status === "Rejected") {
    return (
      <Button
        type="primary"
        //onClick={showDrawer}
        danger
      >
        Rejected
      </Button>
    );
  }
  if (status === "Changes Required") {
    return (
      <Button
        type="text"
        //onClick={showDrawer}
        style={{
          background: "#F0E68C",
          color: "DimGray",
        }}
      >
        Changes Required
      </Button>
    );
  }
  if (status === "Approved") {
    return (
      <Button
        type="text"
        //onClick={showDrawer}
        style={{
          background: "turquoise",
          color: "white",
        }}
      >
        Approved
      </Button>
    );
  }
};

export default ProposalStatusDetail;
