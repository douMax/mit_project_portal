import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../utils/routes";
import NavContainer from "./NavContainer";

const StudentNavLinks = () => {
  return (
    <NavContainer>
      <Link to="/">Dashboard</Link>
      <Link to={ROUTES.PROJECTS}>Browse Projects</Link>
    </NavContainer>
  );
};

export default StudentNavLinks;
