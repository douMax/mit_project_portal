import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import NavContainer from "./NavContainer";

const IndustryClientNavLinks = () => {
  return (
    <NavContainer>
      <Link to={'/my-projects'}>My Projects</Link>
      <Link to={'/browse-projects'}>Browse Projects</Link>
      <Link to={"/new-project"}>
        <Button type="danger">+ New Project</Button>
      </Link>
    </NavContainer>
  );
};

export default IndustryClientNavLinks;
