import React, { useState } from "react";
import { Radio, Input } from "antd";

const ProjectOption = () => {
  const [value, setValue] = useState("all");
  const [notSpecific, setNotSpecific] = useState(true);

  const handleChange = (e) => {
    //console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleSpecific = () => {
    setNotSpecific(false);
  };

  const handleNotSpecific = () => {
    setNotSpecific(true);
  };

  return (
    <Radio.Group onChange={handleChange} value={value}>
      <Radio value={"specificStudents"} onChange={handleSpecific}>
        Add specific students'IDs (Min1,Max5).
      </Radio>
      <Input disabled={notSpecific} />
      <Radio value={"all"} onChange={handleNotSpecific}>
        Open to all students
      </Radio>
    </Radio.Group>
  );
};
export default ProjectOption;
