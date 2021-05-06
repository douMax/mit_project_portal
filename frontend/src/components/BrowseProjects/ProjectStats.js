import React from "react";

import { Button, Space, Switch } from "antd";

//import changeBorderRed from "./ProjectListDetails";

const ProjectStats = (projstats) => {
  //console.log(projdets);

  return (
    <Space>
      <Button type="text" style={{ background: "turquoise", color: "white" }}>
        {projstats.status}
      </Button>
      <Button type="text">
        {projstats.year} - T{projstats.trimester}
      </Button>
      <Button type="text">Group: {projstats.assigned_students}/5</Button>
      <Button type="text">EOIs: {projstats.eoi}</Button>
    </Space>
  );
};

export default ProjectStats;
