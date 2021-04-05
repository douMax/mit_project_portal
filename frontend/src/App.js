import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignupPage/";
import ClientSignUp from "./components/Industryclient";
import styled from "styled-components";

let isLogged = true;
let isSignedUp = false;

// camal case
const AppContainer = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      {isLogged ? <Header /> : <LandingPage />}
      {!isSignedUp ? <ClientSignUp /> : <div>COntent</div>}
    </AppContainer>
  );
}

export default App;
