import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import ROUTES from "../../utils/routes";
import NavContainer from "./NavContainer";

const IndustryClientNavLinks = () => {
  return (
    <NavContainer>
      <Link to={ROUTES.MY_PROJECTS}>My Projects</Link>
      <Link to={ROUTES.PROJECTS}>Browse Projects</Link>
      <Link to={ROUTES.NEW_PROJECT}>
        <Button type="danger">+ New Project</Button>
      </Link>
    </NavContainer>
  );
};

export default IndustryClientNavLinks;
