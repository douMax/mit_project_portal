import React from "react";
import { Route, Switch } from "react-router";
import BrowseProjects from "../components/Browse_Projects";
import PasswordChange from "../components/client/PasswordChange";
import LandingPage from "../components/LandingPage";
import MyProjects from "../components/MyProjects";
import NewEOI from "../components/NewEOI";
import NewProject from "../components/NewProject";
import SignUpPage from "../components/SignupPage";
import PrpDecision from "../components/staff/PrpDecision";
import Staff_Dashboard from "../components/staff/Staff_Dashboard";
import StudentDashboard from "../components/Student/StudentDashboard";
import AllocationComponent from "../components/staff/AllocationComponent";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LandingPage} />
            <Route exact path="/book-appointment" component={() => (<h1>Page under construction</h1>)} />
            <Route exact path="/student-signup">
                <SignUpPage user={"student"} />
            </Route>
            <Route exact path="/staff-signup">
                <SignUpPage user={"staff"} />
            </Route>
            <Route exact path="/client-signup">
                <SignUpPage user={"client"} />
            </Route>
            <Route exact path="/dashboard/staff-dashboard" component={Staff_Dashboard} />
            <Route exact path="/dashboard/client-dashboard" component={MyProjects} />
            <Route exact path="/new-project" component={NewProject} />
            <Route exact path="/my-projects" component={MyProjects} />
            <Route exact path="/student/my-projects" component={StudentDashboard} />
            <Route exact path="/change-password" component={PasswordChange} />
            <Route exact path="/browse-projects" component={BrowseProjects} />
            <Route exact path="/projects/eoi/:id" component={NewEOI} />
            <Route exact path="/prp-decision/:id" component={PrpDecision} />
            <Route exact path="/unit-coordinator/projects_allocation/:id" component={AllocationComponent} />
            <Route exact path="/staff/projects/change-status/:id" component={PrpDecision} />
        </Switch>
    )
}