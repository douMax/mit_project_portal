import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignupPage/";
import BrowseProjects from "./components/BrowseProjects";
import ClientSignUp from "./components/Industryclient";
import { BrowserRouter, Route } from "react-router-dom";
import ROUTES from "./utils/routes";

import styled from "styled-components";

let isLogged = true;
let isSignedUp = true;

// camal case
const AppContainer = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        {isLogged ? <Header /> : <LandingPage />}
        <Route exact path={ROUTES.PROJECTS} component={BrowseProjects} />
        <Route exact path={ROUTES.SIGN_UP} component={ClientSignUp} />
        <Route exact path={ROUTES.LOG_IN} component={LandingPage} />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
