import React from "react";

import { Space, Button } from "antd";

const ProjectDetButtons = () => {
  return (
    <Space style={{ paddingTop: 20, paddingLeft: 236 }}>
      <Button
        style={{
          background: "#f0f0f0",
          fontWeight: "bold",
          borderColor: "black",
        }}
      >
        Print Project
      </Button>
      <Button
        style={{
          background: "#f0f0f0",
          fontWeight: "bold",
          borderColor: "black",
        }}
      >
        Save Project
      </Button>
      <Button
        style={{
          fontWeight: "bold",
          borderColor: "red",
        }}
        type="danger"
      >
        Express Interest
      </Button>
    </Space>
  );
};

export default ProjectDetButtons;
