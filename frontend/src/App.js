import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignupPage/";

let isLogged = true;
let isSignedUp = false;

function App() {

  if (isLogged === true && isSignedUp === true) {
    return (
      <dir>
        <Header />
        <h3>APP Content</h3>
      </dir>
    )
  }
  else if (isLogged === true && isSignedUp === false) {
    return (
      <SignUp />
    )
  }
  else {
    return (
      <LandingPage />
    )
  }
}

export default App;
