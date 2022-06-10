import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
    useRouteMatch
} from "react-router-dom";

import ContactUs from "./pages/ContactUs";
// import HomePage from "./pages/HomePage";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from "./pages/SignUpPage";
import SignUpStage from './pages/SignUpStage';

// import

function App() {
  return (
    <div className="App">

        {/*<div>Hello</div>*/}
      <BrowserRouter >
          <Switch>
                <Route  exact path="/contact">
                    <ContactUs />
                  </Route>
                {/*<Route exact path="/landingpage">*/}
                {/*    <LandingPage />*/}
                {/*  </Route>*/}
                <Route exact path="/loginpage">
                    <LoginPage />
                  </Route>
              <Route exact path="/signuppage">
                    <SignUpPage />
                  </Route>
              <Route exact path="/signupstage">
                    <SignUpStage />
                  </Route>
              <Route exact path="/">
                    <LandingPage />
                  </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
