import React from "react";

import { Card, Button, Tag } from "antd";

const UserEOI = ({ eoi }) => {
  return (
    <Card title="Project Title" extra={<Tag>Rejected</Tag>}>
      <p>{eoi.eoi_sub_date}</p>
      <p>{eoi.interest}</p>
      <Button>View</Button>
    </Card>
  );
};

export default UserEOI;
