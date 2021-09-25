import React from "react";
import { Link } from "react-router-dom";
import { Space, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const ProjectDetButtons = ({ project }) => {

  const { auth_user, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  // const history = useHistory();

  // const { username, _id } = user;

  // const saveProject = async () => {
  //   const payload = { projects: [...user.projects, project] };
  //   // await dispatch(updateStudentData(payload, _id, username));
  //   // await alert("Saved Project Successfully");

  //   setTimeout(() => {
  //     history.goBack();
  //   }, 2000);
  // };

  return (
    <Space style={{ paddingTop: 20 }}>
      {/* {auth_user?.role !== "staff" && (
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
      )} */}
      {((auth_user?.role === "staff" && user?.position === "Supervisor") || auth_user?.role === "student") && project.status === "open" && (
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
      {auth_user?.role === "staff" && user?.position === "Chair Project Review Panel" &&
        (project.status === "pending") && (
          <Link
            to={{
              pathname: `/prp-decision/${project._id}`,
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
