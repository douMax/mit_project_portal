import React from "react";
import { Button } from 'antd';

const StudentNavLinks = () => {
  return (
      <div className="nav-links" >
       <Button danger type="link" size="large">Staff Dashboards</Button>
       <Button danger type="link" size="large">Browse Projects</Button>
       <Button danger type="link" size="large">Project Showcase</Button>
       <Button danger size="large">+ New Project</Button>
      </div>
  );
};

export default StudentNavLinks;
