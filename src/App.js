import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Timeline from "./container/Timeline";
import Team from "./container/Team";
import Home from "./container/Home";
const App = () => (
    <Router basename='/HistoryOfComputing'>
        <Switch>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/team">
                <Team/>
            </Route>
            <Route path="/timeline">
                <Timeline/>
            </Route>
        </Switch>
    </Router>
);

export default App;
