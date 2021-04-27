import React, { useState } from "react";
import StudentSignUp from "./StudentSignUp";
import StaffSignUp from "./StaffSignUp";
import IndustryClientSignUp from "./IndustryClientSignUp";

import { USERTYPES } from "../../utils/APP_CONSTANTS";

import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const SignUpPage = (props) => {
  let SignUpForm;
  console.log(props);

  switch (props.userType) {
    case USERTYPES.STAFF:
      SignUpForm = StaffSignUp;
      break;
    case USERTYPES.STUDENT:
      SignUpForm = StudentSignUp;
      break;
    case USERTYPES.INDUSTRY_CLIENT:
      SignUpForm = IndustryClientSignUp;
      break;
    default:
      SignUpForm = StaffSignUp;
      break;
  }

  return (
    <div>
      <Title>
        {props.userType.charAt(0).toUpperCase() + props.userType.slice(1)}{" "}
        registration
      </Title>
      <Paragraph>
        Double check your information and complete the registration
      </Paragraph>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
