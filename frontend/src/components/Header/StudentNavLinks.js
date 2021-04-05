import React from "react";
import { Button } from "antd";

const StudentNavLinks = () => {
  return (
    <div className="nav-links">
      <Button danger type="link" size="large">
        Browse Projects
      </Button>
      <Button danger type="link" size="large">
        My Projects
      </Button>
      <Button danger type="link" size="large">
        Project Showcase
      </Button>
    </div>
  );
};

export default StudentNavLinks;
