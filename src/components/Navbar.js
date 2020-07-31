import React, {useEffect, useState} from "react";
import "./Navbar.css";
import Routes from "../Routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {ReactComponent as Icon} from "../images/ai.png";

export default function Navbar() {
    const linkButton = {
        /*background-color: #57336a;*/
        color: 'white',
        /*fontSize: 14;*/
        fontSize: 'inherit',
        fontFamily: 'Chicago',
        marginRight: 50,
        marginLeft: 50,
        height: 60,
        width: '25%',
    }
    const iconButton = {
        boxShadow: 'none',
    }
    return (
        <div className="Nav-container">
            <AppBar position="relative" >
                <Toolbar variant="regular" className="Nav-navbar">
                    <IconButton style={iconButton}   edge={"start"}>
                        <img  className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="Ruh roh scoob"/>
                    </IconButton>
                    <Button color="primary" style={linkButton} variant="contained"  href="/home">
                        Home
                    </Button>

                    <Button color="primary" style={linkButton} variant="contained"  href="/timeline">
                        The Timeline
                    </Button>
                    <Button color="primary" style={linkButton} variant="contained"  href="https://ecommons.luc.edu/history_facpubs/42/">
                        The Book (WIP)
                    </Button>
                    <Button color="primary" style={linkButton} variant="contained"  href="https://ssl.cs.luc.edu/team.html">
                        SSL
                    </Button>
                    <IconButton  className="Nav-menuButton" href="https://github.com/acrose99/HistoryOfComputing" edge={"start"}>
                        <img className="Nav-icon" src={require("../images/github.png")} alt="Github"/>
                    </IconButton>
                    <Button color="primary" style={linkButton} variant="contained"  href="/team">
                        About Us
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
        )
}