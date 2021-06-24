
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Headre from "../../commonCom/header/Headre"
import Slider from "../../components/slider/Slider"
import Body from "../../components/body/Body"
import Signup from "../../components/signup/SignUp"
import Login from "../../components/login/login";
import PrivateNav from "./PrivateNav";
import PublicNav from "./PublicNav";


function Navigation(){
    return (
      <Router>
        <Headre />

        <Switch>
          <Route exact path="/">
            <Slider />
            <Body />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
}
export default Navigation;