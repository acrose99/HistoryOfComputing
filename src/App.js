import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import './App.css';
import Routes from "./Routes";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Home from "./container/Home";

function App(props) {
    return (
        <div>
            <Home/>
        </div>
    )
}

export default App;
