import React, { useState } from "react";
import StudentSignUp from "./StudentSignUp";
import StaffSignUp from "./StaffSignUp";
import CommonFields from "./CommonFields";
import { USERTYPES } from "../../utils/APP_CONSTANTS";

import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const SignUpPage = () => {
  return (
    <div>
      <Title>Complete {USERTYPES.STUDENT} Registration</Title>
      <Paragraph>
        Double check your informatio and complete the registration
      </Paragraph>
    </div>
  );
};

export default SignUpPage;
