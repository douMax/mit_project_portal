import React, { useContext, useState } from "react";
import StudentSignUp from "./StudentSignUp";
import StaffSignUp from "./StaffSignUp";
import IndustryClientSignUp from "./IndustryClientSignUp";

import { USERTYPES } from "../../utils/APP_CONSTANTS";

import { Typography } from "antd";

import { UserContext } from "../../contexts/UserContext";

const { Title, Paragraph } = Typography;

const SignUpPage = props => {
  const [user] = useContext(UserContext);

  let SignUpForm;
  let userRoleString = "";

  console.log(user);

  switch (user.role) {
    case USERTYPES.STAFF:
      SignUpForm = StaffSignUp;
      userRoleString = "Staff";
      break;
    case USERTYPES.STUDENT:
      SignUpForm = StudentSignUp;
      userRoleString = "Student";
      break;
    case USERTYPES.INDUSTRY_CLIENT:
      SignUpForm = IndustryClientSignUp;
      userRoleString = "Industry Client";
      break;
    default:
      SignUpForm = StaffSignUp;
      break;
  }

  return (
    <div>
      <Title>{`${userRoleString} Registration`}</Title>
      <Paragraph>
        Double check your information and complete the registration
      </Paragraph>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
