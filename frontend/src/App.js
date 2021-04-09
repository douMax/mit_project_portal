// framework related
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

// components
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignupPage/";
import BrowseProjects from "./components/BrowseProjects";

// utils and constants
import ROUTES from "./utils/routes";

let isLogged = true;
let isSignedUp = true;

// camal case
const AppContainer = styled.div`
  width: 100vw;
  padding: 25px 50px;
`;

function App() {
  return (
    <BrowserRouter>
      {isLogged ? <Header /> : <LandingPage />}
      <AppContainer>
        <Route exact path={ROUTES.PROJECTS} component={BrowseProjects} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.LOG_IN} component={LandingPage} />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
