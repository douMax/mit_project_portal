import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import NavContainer from "./NavContainer";

const StaffNavLinks = ({ user }) => {
  return (
    <NavContainer>
      <Link to={"/dashboard/staff-dashboard"}>Dashboard</Link>
      {user?.position === "Supervisor" && (
        <Link to={"/browse-projects"}>Browse Projects</Link>
      )}
      {user?.position === "Unit Coordinator" && (
        <Link to={"/new-project"}>
          <Button type="danger">+ New Project</Button>
        </Link>
      )}
    </NavContainer>
  );
};

export default StaffNavLinks;
