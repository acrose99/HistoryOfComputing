import React from "react";
import {withRouter} from "react-router-dom";
import './App.css';
import '../src/fonts.css';
import Routes from "./Routes";

function App(props) {
    return (
        <div className="App-container">

            <Routes appProps={{  }} />
            <a href="/" className="movable-icon"> <i className="fa fa-align-justify"/> </a>
        </div>
    );
}

export default withRouter(App);
