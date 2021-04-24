import React from "react";
import { Radio } from "antd";

const DevSettings = (props) => {
  //console.log(props.userType);
  //console.log(user);

  return (
    <div>
      <Radio.Group
        onChange={props.onToggleSettings}
        defaultValue={props.userType || "Staff"}
        buttonStyle="solid"
      >
        <Radio.Button value="student">Student</Radio.Button>
        <Radio.Button value="staff">Staff</Radio.Button>
        <Radio.Button value="industry_client">Industry Client</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default DevSettings;
