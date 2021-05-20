import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import ROUTES from "../../utils/routes";

import NavContainer from "./NavContainer";

const StaffNavLinks = () => {
  return (
    <NavContainer>
      <Link to={ROUTES.MY_PROJECTS}>My Projects</Link>
      <Link to={ROUTES.PROJECTS}>Browse Projects</Link>
      <Link to={ROUTES.COORDINATOR_DASHBOARD}>Coordinator Dashboard</Link>
      <Link to={ROUTES.CHAIR_PRP_DASHBOARD}>PRP Dashboard</Link>
    </NavContainer>
  );
};

export default StaffNavLinks;
