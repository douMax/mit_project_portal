import React from "react";
import { Button, Space } from "antd";

const ProjectStats = (projstats) => {
  const { assigned_students, eoi, status, trimester, year } = projstats;
  return (
    <Space>
      <Button type="text" style={{ background: "turquoise", color: "white" }}>
        {status || ""}
      </Button>
      <Button type="text">
        {year || "2021"} - {trimester || ""}
      </Button>
      <Button type="text">
        {"Group: " + (assigned_students || 0) + "/5"}
      </Button>
      <Button type="text">
        EOIs: {eoi || 0}
      </Button>
    </Space>
  );
};

export default ProjectStats;
