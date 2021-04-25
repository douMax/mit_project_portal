import React, { useState } from "react";
import { Radio } from "antd";

const ProjectOption = () => {
  const [value, setvalue] = useState("all");

  const handleChange = (e) => {
    console.log("radio checked", e.target.value);
    setvalue(e.target.value);
  };

  return (
    <Radio.Group onChange={handleChange} value={value}>
      <Radio value={"all"}>Open to specific students</Radio>
      <Radio value={"specific students"}>Open to all students</Radio>
    </Radio.Group>
  );
};
export default ProjectOption;
