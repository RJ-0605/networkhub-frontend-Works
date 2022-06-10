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
import HomePage from "./pages/HomePage";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

import SignUpRoutes from "./pages/Routes/SignUpRoutes";
// import {User} from './pages/Routes/SignUpRoutes'
import TestPage from "./pages/TestPage";
import SignUpPage from './pages/SignUpPage';
import SignUpStage from './pages/SignUpStage';
import SignUpStage1 from './pages/SignUpStage1';
import SignUpStage2 from './pages/SignUpStage2';
import SignUpStage3 from './pages/SignUpStage3';
import SignUpStage4 from './pages/SignUpStage4';
import SignUpStage5 from './pages/SignUpStage5';
import SignUpOrgStage1 from './pages/SignUpOrgStage1';
import SignUpOrgStage2 from './pages/SignUpOrgStage2';
import SignUpOrgStage3 from './pages/SignUpOrgStage3';
import SignUpOrgStage4 from './pages/SignUpOrgStage4';
import SignUpOrgStage5 from './pages/SignUpOrgStage5';

function App() {
  return (
    <div className="App">

        {/*<div>Hello</div>*/}

      <BrowserRouter >
          <Switch>

                  {/*signuproutes starts here */}
                          <Route exact path="/signup">
                                <SignUpPage />
                              </Route>

                          <Route exact path="/signupoptions" >
                              <SignUpStage />
                          </Route>
                          <Route exact path="/signupoptions/step1" >
                              <SignUpStage1 />
                          </Route>
                          <Route exact path="/signupoptions/step2" >
                              <SignUpStage2 />
                          </Route>
                          <Route exact path="/signupoptions/step3" >
                              <SignUpStage3 />
                          </Route>
                          <Route exact path="/signupoptions/step4" >
                              <SignUpStage4 />
                          </Route>
                          <Route exact path="/signupoptions/step5" >
                              <SignUpStage5 />
                          </Route>
                          <Route exact path="/signupoptions/org/step1" >
                              <SignUpOrgStage1 />
                          </Route>
                          <Route exact path="/signupoptions/org/step2" >
                              <SignUpOrgStage2 />
                          </Route>
                          <Route exact path="/signupoptions/org/step3" >
                              <SignUpOrgStage3 />
                          </Route>
                          <Route exact path="/signupoptions/org/step4" >
                              <SignUpOrgStage4 />
                          </Route>
                          <Route exact path="/signupoptions/org/step5" >
                              <SignUpOrgStage5 />
                          </Route>

                 {/*signuproutes end here */}


                <Route  exact path="/contact">
                    <ContactUs />
                  </Route>
                <Route exact path="/">
                    <LandingPage />
                  </Route>
                <Route exact path="/landingpage">
                    <LandingPage />
                  </Route>
                <Route exact path="/login">
                    <LoginPage />
                  </Route>
              <Route  exact path="/test">
                    <TestPage />
                  </Route>

              <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;


function NotFound() {
  return <><h3>You have landed on a page that doesn't exist</h3> <h1>Error 404</h1></>;
}