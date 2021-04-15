// framework related
import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// components
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignupPage/";
import BrowseProjects from "./components/BrowseProjects";
import DevSettings from "./DevSettings";

// utils and constants
import ROUTES from "./utils/routes";

let isLogged = true;
let isSignedUp = true;

const intialDevSettings = {
  username: "Staff",
  userType: "staff",
  isLogged: true,
  isSignedUp: true,
};

const devSettingsReducer = (state, action) => {
  switch (action.type) {
    case "set_user_type":
      return {
        ...state,
        userType: action.payload.userType,
        username: action.payload.username,
      };
    case "set_logged":
      return { ...state, isLogged: action.payload };
    case "set_sign_up":
      return { ...state, isSignedUp: action.payload };
    default:
      throw new Error();
  }
};

// camal case
const ContentContainer = styled.div`
  width: 100vw;
  padding: 25px 50px;
`;

function App() {
  const [state, dispatch] = useReducer(devSettingsReducer, intialDevSettings);

  const handleToggleSettings = e => {
    dispatch({
      type: "set_user_type",
      payload: {
        userType: e.target.value,
        username: e.target.value.toUpperCase(),
      },
    });
  };

  return (
    <BrowserRouter>
      {isLogged && (
        <Header userType={state.userType} username={state.username} />
      )}
      <ContentContainer>
        <Switch>
          <Route exact path={ROUTES.PROJECTS}>
            <BrowseProjects />
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            <SignUpPage userType={state.userType} />
          </Route>
          <Route exact path={ROUTES.LOG_IN}>
            <LandingPage />
          </Route>
          <Route exact path={ROUTES.DEV_SETTINGS}>
            <DevSettings
              userType={state.userType}
              onToggleSettings={handleToggleSettings}
            />
          </Route>
        </Switch>
      </ContentContainer>
    </BrowserRouter>
  );
}

export default App;
