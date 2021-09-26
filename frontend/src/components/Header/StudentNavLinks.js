import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "./NavContainer";

const StudentNavLinks = () => {
  return (
    <NavContainer>
      <Link to={'/student/my-projects'}>My Projects</Link>
      <Link to={'/browse-projects'}>Browse Projects</Link>
      {/* <Link to={"/book-appointment"}>Book Appointment</Link> */}
    </NavContainer>
  );
};

export default StudentNavLinks;
