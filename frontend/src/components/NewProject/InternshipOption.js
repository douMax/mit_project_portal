import React, { useState } from "react";
import { Radio } from "antd";

const InternshipOption = () => {
  const [value, setValue] = useState("all");

  const handleChange = (e) => {
    //console.log("radio checked", e.target.value);
    setValue(e.target.value);
    localStorage.setItem("isInternship", e.target.value);
  };
  return (
    <Radio.Group onChange={handleChange} value={value}>
      <Radio value={true}>Yes</Radio>
      <Radio value={false}>No</Radio>
    </Radio.Group>
  );
};

export default InternshipOption;
