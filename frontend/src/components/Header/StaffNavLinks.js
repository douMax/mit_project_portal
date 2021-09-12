import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";

import NavContainer from "./NavContainer";

const StaffNavLinks = ({ user }) => {
  console.log(user)
  return (
    <NavContainer>
      <Link to={"/dashboard/staff-dashboard"}>Dashboard</Link>
      {user?.position === "Supervisor" && (
        <Link to={"/browse-projects"}>Browse Projects</Link>
      )}
    </NavContainer>
  );
};

export default StaffNavLinks;
