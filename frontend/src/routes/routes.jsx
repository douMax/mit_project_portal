import React from "react";
import { Route, Switch } from "react-router";
import { Client_Dashboard } from "../components/client/Client_Dashboard";
import LandingPage from "../components/LandingPage";
import SignUpPage from "../components/SignupPage";
import IndustryClientSignUp from "../components/SignupPage/IndustryClientSignUp";
import { Staff_Dashboard } from "../components/staff/Staff_Dashboard";
import StudentDashboard from "../components/Student/StudentDashboard";


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LandingPage} />
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
            <Route exact path="/dashboard/student-dashboard" component={StudentDashboard} />
            <Route exact path="/dashboard/staff-supervisor-dashboard" component={Staff_Dashboard} />
            <Route exact path="/dashboard/staff-coordinator-dashboard" />
            <Route exact path="/dashboard/staff-chair-prp-dashboard" />
            <Route exact path="/dashboard/client-dashboard" component={Client_Dashboard} />
        </Switch>
    )
}