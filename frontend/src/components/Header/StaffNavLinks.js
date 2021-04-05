import React from "react";
import { Button } from "antd";

const StudentNavLinks = () => {
  return (
    <div className="nav-links">
      <Button danger type="link" size="small">
        Staff Dashboards
      </Button>
      <Button danger type="link" size="small">
        Browse Projects
      </Button>
      <Button danger type="link" size="small">
        Project Showcase
      </Button>
      <Button danger type="link" size="small">
        +New Project
      </Button>
    </div>
  );
};

export default StudentNavLinks;
