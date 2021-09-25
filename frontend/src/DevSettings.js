import React, { useContext } from "react";
import { Radio } from "antd";
import { UserContext } from "./contexts/UserContext";

const DevSettings = props => {
  //(props.userType);
  //(user);
  const [user, setUser] = useContext(UserContext);

  const handleRadioChange = e => {
    const newUser = { ...user, role: e.target.value };
    setUser(newUser);
  };
  return (
    <div>
      <h2>Set User Role</h2>
      <Radio.Group
        onChange={handleRadioChange}
        defaultValue={user.role || "staff"}
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
