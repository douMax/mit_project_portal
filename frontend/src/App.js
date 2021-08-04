// framework related
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// components
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignupPage/";
import BrowseProjects from "./components/BrowseProjects";
import MyProjects from "./components/MyProjects";
import CoordinatorDashboard from "./components/CoordinatorDashboard";
import NewProject from "./components/NewProject";
import ChairPRPDashboard from "./components/ChairPRPDashboard";
import NewEOI from "./components/NewEOI";
import DevSettings from "./DevSettings";
import ProposalDecision from "./components/ChairPRPDashboard/ProposalDecision";

// utils and constants
import ROUTES from "./utils/routes";

//Contexts
import { ProjectProvider } from "./contexts/ProjectContext";
import { EOIProvider } from "./contexts/EOIContext";
import { StudentProvider } from "./contexts/StudentContext";
import { SignUpRequestProvider } from "./contexts/SignUpRequestContext";
import { InactiveProjectProvider } from "./contexts/InactiveProjectContext";

// let isLogged = true;
// let isSignedUp = true;

// camal case
const ContentContainer = styled.div`
  width: 100vw;
  padding: 25px 50px;
  background-color: #fff;
`;

function App() {
  return (
    <BrowserRouter>
      <ContentContainer>
        <Switch>
          <ProjectProvider>
            <Route exact path={ROUTES.SIGN_UP}>
              <SignUpPage />
            </Route>
            <Route exact path={ROUTES.LOG_IN}>
              <LandingPage />
            </Route>
            <Route exact path="/" component={LandingPage} />
            <Route exact path={ROUTES.DEV_SETTINGS}>
              <DevSettings />
            </Route>
            <Route exact path={ROUTES.PROJECTS}>
              <BrowseProjects />
            </Route>
            <Route exact path={ROUTES.NEW_PROJECT}>
              <NewProject />
            </Route>
            <SignUpRequestProvider>
              <InactiveProjectProvider>
                <Route exact path={ROUTES.CHAIR_PRP_DASHBOARD}>
                  <ChairPRPDashboard />
                </Route>
              </InactiveProjectProvider>
              <Route exact path={ROUTES.PROPOSAL_DECISION}>
                <ProposalDecision />
              </Route>
            </SignUpRequestProvider>
            <EOIProvider>
              <Route exact path={ROUTES.MY_PROJECTS}>
                <MyProjects />
              </Route>
              <Route exact path={ROUTES.NEW_EOI}>
                <NewEOI />
              </Route>
            </EOIProvider>
            <StudentProvider>
              <Route exact path={ROUTES.COORDINATOR_DASHBOARD}>
                <CoordinatorDashboard />
              </Route>
            </StudentProvider>
          </ProjectProvider>
        </Switch>
      </ContentContainer>
    </BrowserRouter>
  );
}

export default App;
