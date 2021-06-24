
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Headre from "../../commonCom/header/Headre"
import Slider from "../../components/slider/Slider"
import Body from "../../components/body/Body"
import Signup from "../../components/signup/SignUp"
import PrivateNav from "./PrivateNav";
import PublicNav from "./PublicNav";


function Navigation(){
    return(
        <Router>
            <Headre />
            <Slider />
            {/* <Body /> */}
            <Signup />
            <Switch>
                <Route></Route>
            </Switch>
            
           
        </Router>

    )
}
export default Navigation;