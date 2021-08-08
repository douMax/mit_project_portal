import React, { useContext, useState } from "react";
import StudentSignUp from "./StudentSignUp";
import StaffSignUp from "./StaffSignUp";
import IndustryClientSignUp from "./IndustryClientSignUp";

import { USERTYPES } from "../../utils/APP_CONSTANTS";

import { Typography } from "antd";
import { useSelector } from "react-redux";
import Logo from "../Header/Logo";

// import { UserContext } from "../../contexts/UserContext";

const { Title, Paragraph } = Typography;

const SignUpPage = (props) => {
  // const [user] = useContext(UserContext);

  const user = useSelector(state => state.auth.auth_user)
  let role;
  if (user.role) {
    role = user.role;
  }
  else role = "client"

  let SignUpForm;
  let userRoleString = "";

  switch (role) {
    case USERTYPES.STAFF:
      SignUpForm = StaffSignUp;
      userRoleString = "Staff";
      break;
    case USERTYPES.STUDENT:
      SignUpForm = StudentSignUp;
      userRoleString = "Student";
      break;
    case USERTYPES.CLIENT:
      SignUpForm = IndustryClientSignUp;
      userRoleString = "Industry Client";
      break;
    default:
      SignUpForm = StaffSignUp;
      break;
  }

  return (
    <div>
      <Logo />
      <Title style={{ fontSize: "26px", marginTop: "20px" }}>{`${userRoleString} Registration`}</Title>
      <Paragraph>
        Double check your information and complete the registration
      </Paragraph>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
