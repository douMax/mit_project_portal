import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignupPage/";
import BrowseProjects from "./components/BrowseProjects";


import styled from "styled-components";

let isLogged = true;
let isSignedUp = true;

// camal case
const AppContainer = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      {isLogged ? <Header /> : <LandingPage />}
      {!isSignedUp ? <SignUp /> : <BrowseProjects />}

    </AppContainer>
  );
}

export default App;
