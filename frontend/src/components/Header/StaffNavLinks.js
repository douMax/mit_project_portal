import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import ROUTES from "../../utils/routes";

import NavContainer from "./NavContainer";

const StaffNavLinks = () => {
  return (
    <NavContainer>
      <Link to="/">Dashboard</Link>
      <Link to={ROUTES.PROJECTS}>Browse Projects</Link>
      <Link to={ROUTES.NEW_PROJECT}>
        <Button type="danger">+ New Project</Button>
      </Link>
    </NavContainer>
  );
};

export default StaffNavLinks;
