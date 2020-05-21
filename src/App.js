import React from "react";
import {
    BrowserRouter as Router,
    Switch as Switch,
    Route as Route,
    Link, withRouter
} from "react-router-dom";
import './App.css';
import Routes from "./Routes";
import Home from "./container/Home";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Team from "./container/Team";
import AppliedRoute from "./components/AppliedRoute";


function App(props) {
    return (
        <Router>
            <div>
            <nav>
            <div className="App-container">
                    <div className="media">
                        <img className="media1" src={require("./images/ai.png")}/>
                        <img className="media2" src={require("./images/artificial-intelligence.png")}/>
                    </div>
                    <div className="buttoncontainer">
                        <Button  href="/team" className= "button" color="primary" variant="contained" size="large">
                            {/*<Link to="/team">*/}
                            <Typography className="content"  color="inherit" align="center" variant="h6">
                                A Historiography of <i> The History of Computing and Its Cultures </i>
                            </Typography>
                            {/*</Link>*/}
                        </Button>
                    </div>
                </div>
            </nav>
                <Switch>
                    <Route exact component={Team}  path="/team">
                    </Route>
                </Switch>
                {/*<Routes/>*/}
            </div>
        </Router>
    )
}

export default withRouter(App);
