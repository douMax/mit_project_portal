import React from "react";

import { Button, Space } from "antd";

//import changeBorderRed from "./ProjectListDetails";

const ProjectStats = (projstats) => {
  //console.log(projstats);

  return (
    <Space>
      <Button type="text" style={{ background: "turquoise", color: "white" }}>
        {projstats.status}
      </Button>
      <Button type="text">
        {projstats.year} - {projstats.trimester}
      </Button>
      <Button type="text">
        {/* Group:{" "}
        {projstats.assigned_students !== "undefined" &&
          projstats.assigned_students | "0"}
        /5 */}
        {"Group: " + projstats.assigned_students}
      </Button>
      <Button type="text">
        EOIs: {projstats.eoi !== "undefined" && projstats.eoi | "0"}
      </Button>
    </Space>
  );
};

export default ProjectStats;
