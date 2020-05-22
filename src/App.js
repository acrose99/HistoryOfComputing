import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import './App.css';
import Routes from "./Routes";
import Home from "./container/Home";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Team from "./container/Team";

function App(props) {
    return (
        <div className="App-container">

            <Routes appProps={{  }} />
            <a href="/" classNme="movable-icon" onClick="slideshow()"> <i className="fa fa-align-justify"/> </a>
        </div>
    );
}

export default withRouter(App);
