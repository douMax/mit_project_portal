import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

let isLogged = false;

function App() {
  return isLogged ? (
    <div>
      <Header />
      <div>APP content</div>
    </div>
  ) : (
    <LandingPage />
  );
}

export default App;
