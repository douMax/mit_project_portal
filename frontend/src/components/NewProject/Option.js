import React, { useState } from "react";
import { Radio, Input } from "antd";

const ProjectOption = () => {
  const [value, setvalue] = useState("all");

  const handleChange = (e) => {
    console.log("radio checked", e.target.value);
    setvalue(e.target.value);
  };

  return (
    <Radio.Group onChange={handleChange} value={value}>
      <Radio value={"specificStudents"}>
        Open to specific students Add students'IDs(Min1,Max5)
      </Radio>
      <Input />
      <Radio value={"all"}>Open to all students</Radio>
    </Radio.Group>
  );
};
export default ProjectOption;
