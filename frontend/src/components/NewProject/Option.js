import React, { useState } from "react";
import { Radio, Input } from "antd";

const ProjectOption = () => {
  const [value, setValue] = useState("all");
  const [specific, setSpecific] = useState(true);

  const handleChange = (e) => {
    //console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleSpecific = () => {
    setSpecific(false);
  };

  const handleNotSpecific = () => {
    setSpecific(true);
  };

  return (
    <Radio.Group onChange={handleChange} value={value}>
      <Radio value={"specificStudents"} onChange={handleSpecific}>
        Add specific students'IDs (Min1,Max5)
      </Radio>
      <Input disabled={specific} />
      <Radio value={"all"} onChange={handleNotSpecific}>
        Open to all students
      </Radio>
    </Radio.Group>
  );
};
export default ProjectOption;
