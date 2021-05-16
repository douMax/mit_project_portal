import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Space, Button } from "antd";
import { UserContext } from "../../contexts/UserContext";

const ProjectDetButtons = ({ project }) => {
  const [user] = useContext(UserContext);
  //console.log(user.role);
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
          state: project,
        }}
      >
        {user.role !== "industry_client" &&
          project.status !== "Waiting for Approval" &&
          project.status !== "Changes Required" && (
            <Button
              style={{
                fontWeight: "bold",
                borderColor: "red",
              }}
              type="danger"
            >
              Express Interest
            </Button>
          )}
      </Link>
    </Space>
  );
};

export default ProjectDetButtons;
