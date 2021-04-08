import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import ROUTES from "../../utils/routes";

const StudentNavLinks = () => {
  return (
    <div className="nav-links">
      <Link to="/">Staff Dashboards</Link>

      <Link to={ROUTES.PROJECTS}>Browse Projects</Link>

      <Link to="/">Project Showcase</Link>

      <Link to={ROUTES.NEW_PROJECT}>+New Project</Link>
    </div>
  );
};

export default StudentNavLinks;
