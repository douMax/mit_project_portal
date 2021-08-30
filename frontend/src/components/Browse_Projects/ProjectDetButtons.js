import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Space, Button } from "antd";
import { useSelector } from "react-redux";

const ProjectDetButtons = ({ project }) => {
  //console.log(user.role);
  const { auth_user } = useSelector(state => state.auth);
  const user = auth_user;
  console.log(user)
  return (
    <Space style={{ paddingTop: 20 }}>
      {/* <Button
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
      </Button> */}
      {user.role !== "industry_client" &&
        project.status !== "wfa" &&
        project.status !== "cr" && (
          <Link
            to={{
              pathname: `/projects/${project._id}/new-eoi`,
              state: project,
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
        )}
      {user.role === "staff" &&
        (project.status === "wfa" || project.status === "cr") && (
          <Link
            to={{
              pathname: `/dashboard/chair-prp/${project._id}/decision`,
              state: project,
            }}
          >
            <Button
              style={{
                fontWeight: "bold",
              }}
              type="danger"
            >
              Proposal Decision
            </Button>
          </Link>
        )}
    </Space>
  );
};

export default ProjectDetButtons;
