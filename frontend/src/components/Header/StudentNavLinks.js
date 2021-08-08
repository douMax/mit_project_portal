import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../utils/routes";
import NavContainer from "./NavContainer";

const StudentNavLinks = () => {
  return (
    <NavContainer>
      <Link to={ROUTES.MY_PROJECTS}>My Projects</Link>
      <Link to={ROUTES.PROJECTS}>Browse Projects</Link>
      <Link to={"/book-appointment"}>Book Appointment</Link>
    </NavContainer>
  );
};

export default StudentNavLinks;
