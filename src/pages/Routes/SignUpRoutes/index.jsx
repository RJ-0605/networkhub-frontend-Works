
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
    useRouteMatch
} from "react-router-dom";

// import LoginCard from '../../components/LoginCard';
import SignUpPage from '../../SignUpPage';
import SignUpStage from '../../SignUpStage';
import SignUpStage1 from '../../SignUpStage1';
import SignUpStage2 from '../../SignUpStage2';
import SignUpStage3 from '../../SignUpStage3';
import SignUpStage4 from '../../SignUpStage4';
import SignUpStage5 from '../../SignUpStage5';
import SignUpOrgStage1 from '../../SignUpOrgStage1';
import SignUpOrgStage2 from '../../SignUpOrgStage2';
import SignUpOrgStage3 from '../../SignUpOrgStage3';
import SignUpOrgStage4 from '../../SignUpOrgStage4';
import SignUpOrgStage5 from '../../SignUpOrgStage5';


function SignUpRoutes() {
      const { path } = useRouteMatch();

  return (
    <>

        {/*<div>Hello</div>*/}

            {/*<Switch>*/}
            {/*    <Route  exact path="/sf">*/}
            {/*      </Route>*/}
            {/*    <Route exact path="/qd">*/}
            {/*      </Route>*/}
            {/*    <Route exact path="/ds">*/}
            {/*      </Route>*/}
            {/*    <Route exact path="/sds">*/}
            {/*      </Route>*/}
            {/*  <Route path={`${path}/signstage`} component={SignUpStage} />*/}
            {/*        */}
            {/*</Switch>*/}

    </>
  );
}



export default SignUpRoutes;
