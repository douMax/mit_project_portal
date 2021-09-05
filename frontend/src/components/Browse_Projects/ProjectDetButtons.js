import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Space, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentData } from "../../redux/authRedux/actions";

const ProjectDetButtons = ({ project }) => {
  const { auth_user, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log(auth_user, project, user)
  const { username, _id } = user;

  const saveProject = () => {
    const payload = { projects: [...user.projects, project] };
    dispatch(updateStudentData(payload, _id, username))
  };

  return (
    <Space style={{ paddingTop: 20 }}>
      <Button
        onClick={saveProject}
        style={{
          background: "#f0f0f0",
          fontWeight: "bold",
          borderColor: "black",
        }}
      >
        Save Project
      </Button>
      {auth_user?.role !== "industry_client" &&
        project.status !== "pending" &&
        project.status !== "cr" && (
          <Link
            to={{
              pathname: `/projects/eoi/${project._id}/`,
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
      {auth_user?.role === "staff" &&
        (project.status === "pending" || project.status === "cr") && (
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
