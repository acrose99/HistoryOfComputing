import React, {useEffect, useState} from "react";
import "./Navbar.css";
import Routes from "../Routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";
import {ReactComponent as Icon} from "../images/ai.png";

export default function Navbar() {
    return (
        <div className="nav-container">
            <AppBar position="static">
                <Toolbar id="navbar">
                    {/*<IconButton  classname="menuButton" href="/" edge={"start"}>*/}
                    {/*    <SvgIcon classname="icon" role={"img"} ={Icon} viewBox="0 0 50 50">*/}

                    {/*    </SvgIcon>*/}
                    {/*</IconButton>*/}
                    <Button id="linkButton"  variant="contained"  href="/">
                        Home
                    </Button>
                    <Button  id="linkButton" variant="contained"  href="/timeline">
                        The Timeline
                    </Button>
                    <Button  id="linkButton" variant="contained"  href="https://github.com/acrose99/HistoryOfComputing">
                        The Book (WIP)
                    </Button>
                    <Button  id="linkButton" variant="contained"  href="https://ssl.cs.luc.edu/team.html">
                        SSL
                    </Button>
                    <IconButton  id="menuButton" href="/" edge={"start"}>
                        <img id="icon" src={require("../images/github-purple.png")} alt="Github"/>
                    </IconButton>
                    <Button  id="linkButton" variant="contained"  href="/team">
                        About Us
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
        )
}