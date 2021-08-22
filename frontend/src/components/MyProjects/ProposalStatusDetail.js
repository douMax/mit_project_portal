import React from "react";
import { Button } from "antd";

const ProposalStatusDetail = ({ status }) => {
  //console.log(status);
  if (status === "pending") {
    return (
      <Button
        type="text"
        //onClick={showDrawer}
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
        //onClick={showDrawer}
        danger
      >
        Rejected
      </Button>
    );
  }
  if (status === "cr") {
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
  if (status === "approved") {
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
