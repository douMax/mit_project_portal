import React from "react";
import { Link } from "react-router-dom";
import { Space, Button } from "antd";

const ProjectDetButtons = ({ project }) => {
  return (
    <Space style={{ paddingTop: 20 }}>
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
      <Link
        to={{
          pathname: `/projects/${project.projId}/new-eoi`,
          state: { test: "hello" },
        }}
      >
        <Button
          style={{
            fontWeight: "bold",
            borderColor: "red",
          }}
          type="danger"
        >
          Express Interest
        </Button>
      </Link>
    </Space>
  );
};

export default ProjectDetButtons;
