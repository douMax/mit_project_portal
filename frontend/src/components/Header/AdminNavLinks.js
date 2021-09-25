import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import NavContainer from "./NavContainer";

const IndustryClientNavLinks = () => {
    return (
        <NavContainer>
            <Link to={'/dashboard/admin-dashboard'}>
                Home
            </Link>
            <Link to={'/admin/create-student'}>
                <Button danger>
                    create a student
                </Button>
            </Link>
            <Link to={'/admin/create-staff'}>
                <Button danger>
                    create a staff
                </Button>
            </Link>
        </NavContainer>
    );
};

export default IndustryClientNavLinks;
